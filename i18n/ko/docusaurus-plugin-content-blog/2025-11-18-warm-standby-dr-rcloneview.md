---
slug: warm-standby-disaster-recovery-rcloneview
title: "RcloneView로 클라우드 간 웜 스탠바이 재해 복구 구성하기 (S3, Wasabi, R2, OneDrive)"
authors:
  - tayson
description: RcloneView와 rclone을 사용해 AWS S3, Wasabi, Cloudflare R2, OneDrive, Google Drive 등 여러 리전에서 예약 동기화, 비교, 마운트 기반 페일오버로 멀티 리전 웜 스탠바이 DR 환경을 구축하는 방법을 소개합니다.
keywords:
  - warm standby
  - disaster recovery
  - multi-region backup
  - rclone s3
  - rcloneview
  - cloud failover
  - compare sync
  - cloudflare r2
  - wasabi s3
tags:
  - disaster-recovery
  - multi-cloud
  - sync
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 클라우드 간 웜 스탠바이 재해 복구 구성하기 (S3, Wasabi, R2, OneDrive)

> 프로덕션 데이터의 사본을 다른 리전이나 클라우드에 실시간으로 유지하고, 장애 발생 시 몇 분 안에 전환하세요.

웜 스탠바이 DR은 주 저장소(예: AWS S3 또는 OneDrive)와 지속적으로 업데이트되는 스탠바이(예: Cloudflare R2 또는 Wasabi)를 짝짓는 방식입니다. RcloneView는 rclone 위에 GUI를 얹어, 셸 스크립트 없이도 안정적인 동기화를 예약하고, 비교(Compare)로 데이터 불일치를 검증하며, 신속한 페일오버를 위해 스탠바이를 마운트할 수 있게 해줍니다.

<!-- truncate -->

**관련 문서**

- 동기화 작업 생성: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- 작업 예약 및 실행 (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- 로컬 드라이브로 마운트하기: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive
- 폴더 비교하기: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## RcloneView로 웜 스탠바이를 구성해야 하는 이유

- 빠른 복구: 스탠바이 사본이 며칠이 아니라 몇 분/몇 시간 이내로 주 저장소와 동기화됩니다.
- 클라우드 선택의 자유: S3, Wasabi, R2, B2, Google Drive, Dropbox, OneDrive를 자유롭게 조합할 수 있습니다.
- 스크립트 불필요: YAML/cron 대신 마법사에서 작업을 구성합니다.
- 눈에 보이는 데이터 불일치: 페일오버가 필요해지기 전에 Compare로 불일치를 미리 파악할 수 있습니다.
- 더 안전한 복원: 프로덕션에 손대지 않고 스탠바이를 마운트해 다시 복사해올 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## 전략 및 아키텍처

```
[Primary cloud/local/NAS] --(RcloneView scheduled Sync)--> [Standby cloud/region]
                                                \
                                                 --(Weekly Compare)--> [Drift report]
```

- 주 저장소(Primary): 애플리케이션이 데이터를 기록하는 곳(S3 버킷, OneDrive 사이트, GDrive 워크스페이스, NAS).
- 스탠바이(Standby): 버전 관리 기능을 갖춘 다른 리전/제공업체(R2/Wasabi/S3/B2).
- 제어: RcloneView가 일정 간격으로 동기화를 실행하고, Compare로 무결성을 확인하며, Mount로 페일오버 시 신속한 접근을 가능하게 합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 사전 준비 사항

- RcloneView에 설정된 두 개의 리모트(예: `s3:prod-bucket`과 `r2:standby-bucket`).
- 롤백 안전성을 위해 스탠바이에 버전 관리가 활성화되어 있어야 합니다.
- 양쪽 모두에 목록 조회/읽기/쓰기에 대한 IAM/API 권한이 필요합니다.
- 예약 복제(야간 또는 시간 단위)를 위한 대역폭 여유가 필요합니다.

## 1단계: 기본 동기화 작업 구성

1. Sync 작업을 생성합니다: 소스 = 주 저장소, 대상 = 스탠바이.
2. 신규/변경된 파일을 미러링하려면 단방향 Sync를 사용하고, 엄격한 동일성이 필요하면 삭제(delete)도 유지합니다.
3. Filtering 단계에서 불필요한 경로(예: cache/temp)에 대한 필터를 추가합니다.
4. **Advanced Settings**에서 전송 개수를 조정하고, 양쪽에서 해시를 지원한다면 체크섬 비교를 활성화합니다.
5. 매 실행마다 동일한 설정이 적용되도록 작업을 저장합니다(Job Manager).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## 2단계: 지속적인 업데이트 예약

1. Job 마법사(4단계: Scheduling, Plus 라이선스)에서 DR 작업에 대한 예약을 활성화합니다.
2. 주기를 선택합니다: 애플리케이션 데이터는 시간 단위로, 아카이브는 야간으로 설정하고, **Simulate**로 다가올 실행을 미리 확인합니다.
3. 불안정한 연결에 대비해 Advanced Settings에서 재시도 횟수를 설정합니다.
4. 초기 데이터 불일치를 조기에 발견하기 위해 주간 수동 Compare를 유지합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## 3단계: 검증 및 모니터링

- 스탠바이를 준비 완료로 선언하기 전에 Compare로 객체 개수가 일치하는지 확인합니다.
- Job History에서 실패나 재시도를 검토하고, 실행 시점을 놓쳤다면 작업을 다시 실행합니다.
- 실수로 삭제된 항목을 복구할 수 있도록 스탠바이의 버전 관리를 유지합니다.

## 4단계: 페일오버 플레이북

1. 스탠바이 마운트: Mount Manager를 사용해 대상 리모트를 고정된 경로/드라이브 문자로 마운트합니다.
2. 워크로드가 마운트된 경로나 스탠바이 버킷 엔드포인트를 가리키도록 설정합니다.
3. 장애 분석(triage)이 끝날 때까지 주 저장소를 읽기 전용 또는 오프라인 상태로 유지합니다.


## 튜닝 팁

- 지연 시간에 민감한 애플리케이션: Advanced Settings에서 전송 개수를 낮추고 트래픽이 적은 시간대에 예약합니다.
- 컴플라이언스: 스탠바이의 버전 관리를 유지하고 감사(audit)를 위해 Job History를 내보냅니다.
- 비용 관리: Filters로 스테이징/임시 폴더를 제외하고 스탠바이 클라우드에 수명 주기 정책을 적용합니다.
- 멀티 클라우드: 동일한 주 저장소에서 두 개의 스탠바이(예: R2 + Wasabi)가 필요하다면 별도의 작업을 실행합니다.

## 문제 해결 체크리스트

- 개수 불일치: Compare를 다시 실행하고 Job History에서 건너뛴 항목을 검토하며, 버전 관리가 켜져 있는지 확인합니다.
- 권한 오류: 양쪽 클라우드 모두 API 키가 목록 조회/읽기/쓰기 권한을 허용하는지 확인합니다.
- 복원 시 데이터가 삭제됨: 데이터를 프로덕션으로 다시 가져올 때는 Sync가 아니라 Copy를 사용합니다.


스탠바이를 항상 최신 상태로, 테스트를 거쳐, 준비된 상태로 유지해 페일오버가 스크램블이 아닌 스위치가 되도록 하세요.

<CloudSupportGrid />
