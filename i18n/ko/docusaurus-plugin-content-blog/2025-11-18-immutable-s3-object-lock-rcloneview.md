---
slug: immutable-backups-s3-object-lock-rcloneview
title: "RcloneView의 S3 Object Lock으로 랜섬웨어에 안전한 불변 백업 구축하기"
authors:
  - tayson
description: RcloneView와 S3 Object Lock 버킷을 활용해 AWS S3, Wasabi, Backblaze B2, Cloudflare R2에서 불변(immutable)이고 랜섬웨어에 안전한 백업을 구축하세요. 스케줄링, 검증, 빠른 복구까지 지원합니다.
keywords:
  - s3 object lock
  - immutable backups
  - ransomware protection
  - rclone s3
  - rcloneview
  - wasabi object lock
  - cloud backup immutability
  - compliance backup
tags:
  - security
  - s3
  - wasabi
  - r2
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView의 S3 Object Lock으로 랜섬웨어에 안전한 불변 백업 구축하기

> 랜섬웨어로 인한 롤백 걱정은 이제 그만하세요. S3 Object Lock과 RcloneView의 스케줄러를 결합하면 백업을 손댈 수 없게 유지할 수 있습니다.

불변 스토리지(immutable storage)는 복구하기 전에 공격자(또는 실수)가 백업을 삭제하거나 덮어쓰지 못하도록 막아줍니다. S3 Object Lock은 AWS S3, Wasabi, Backblaze B2, Cloudflare R2에서 사용할 수 있습니다. RcloneView는 GUI에서 작업(job)을 구성하는 동안 버킷의 Object Lock과 버전 관리(versioning) 설정을 그대로 활용하므로 CLI가 필요 없습니다.

<!-- truncate -->

**관련 문서**

- 동기화 작업 생성: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- 작업 스케줄링 및 실행 (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- 폴더 비교: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- 로컬 드라이브로 마운트: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Object Lock + RcloneView를 사용해야 하는 이유

- 불변 사본: 보존 기간(retention date) 동안 지정된 창에서 삭제/덮어쓰기가 차단됩니다.
- 클라우드 선택의 자유: S3, Wasabi, R2, B2, S3 호환 NAS 게이트웨이에서 모두 동작합니다.
- 스크립팅 불필요: GUI에서 동기화 작업을 만들고 스케줄(Plus)을 설정하며 이력/로그를 유지할 수 있습니다.
- 빠른 확인: Compare를 사용해 대상이 일치하는지, 보존된 버전이 표시되는지 확인할 수 있습니다.
- 손쉬운 복구: 보존 정책을 변경하지 않고도 잠긴 버킷에서 마운트하거나 다시 동기화할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


## 사전 준비 사항

- 생성 시점에 Object Lock이 활성화된 S3 호환 버킷.
- 해당 버킷에서 버전 관리 활성화 (Object Lock에 필수).
- S3 리모트가 이미 연결된 RcloneView 설치 환경.
- `PutObject` 및 `PutObjectRetention` 권한을 가진 IAM/API 사용자.
- (선택 사항) 작업을 자동으로 스케줄링하려면 Plus 라이선스.


## 1단계: 버킷에서 Object Lock 활성화하기

1. Object Lock을 켠 상태로 버킷을 생성합니다(생성 후에는 변경할 수 없습니다). AWS S3에서는 "Enable Object Lock"을 체크하세요. Wasabi/R2/B2에서는 버킷 생성 시 Object Lock 옵션을 선택합니다.
2. 해당 버킷의 버전 관리를 켭니다.
3. 기본 보존 모드를 결정합니다: Governance(재정의가 더 쉬움) 또는 Compliance(재정의 불가), 그리고 보존 기간(예: 30~90일)을 정합니다.

## 2단계: Object Lock 버킷을 대상으로 동기화/복사 작업 지정하기

RcloneView는 객체별 Object Lock 플래그를 노출하지 않습니다. 대신 버킷의 Object Lock + 버전 관리 기본값에 의존하며, 작업의 대상을 해당 버킷으로 유지하면 됩니다.

1. 새 **Sync**(삭제를 원하지 않으면 **Copy**) 작업을 만듭니다: 소스 = 데이터, 대상 = Object Lock 버킷.
2. **Advanced Settings**에서 전송 개수를 설정하고, 양쪽 모두 해시를 지원하면 체크섬 비교를 활성화합니다.
3. **Filtering Settings**에서 캐시/임시 경로를 제외해 보존 용량을 불필요하게 낭비하지 않도록 합니다.
4. 매번 동일한 설정이 적용되도록 작업을 저장합니다(Job Manager).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## 3단계: 불변 백업 스케줄링하기

1. Job 마법사(4단계: Scheduling, Plus)에서 불변 백업 작업의 스케줄링을 활성화합니다.
2. 일 단위 또는 시간 단위 주기를 설정하고 **Simulate**로 예정된 실행을 미리 확인합니다.
3. 연결이 불안정한 경우를 대비해 Advanced Settings에서 재시도 횟수를 설정합니다.
4. 보존된 객체를 검증하기 위해 매주 수동으로 Compare를 실행합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## 4단계: 보존 및 무결성 검증하기

- 업로드 후 객체 수를 확인하려면 Compare를 사용하세요.
- S3 콘솔(또는 RcloneView 로그)에서 객체에 `Compliance`/`Governance`가 표시되고 예상한 Retain Until 날짜가 맞는지 확인하세요.
- 대상에서 테스트 파일을 삭제해 보세요. 보존 기간이 만료되기 전까지는 삭제가 차단되어야 합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 5단계: 불변 백업에서 복구하기

복구가 필요할 때:

1. 새 작업을 만듭니다: 대상(Object Lock 버킷) -> 소스(복구 위치)로 설정하고 Sync/Copy를 실행합니다.
2. 임시 복구가 필요하면 Mount로 잠긴 버킷을 탐색하고 파일을 드래그해 꺼내오세요.
3. 복구 위치에 있는 최신 파일이 삭제되지 않도록 하려면 복구 시 Sync가 아닌 Copy를 사용하세요.

## 모범 사례 및 튜닝

- 탐지와 조사에 충분한 시간이 확보되도록 보존 기간을 설정하세요(예: 30~90일).
- 실험 환경에는 유연한 Governance 모드를, 프로덕션 및 규제 대상 데이터에는 Compliance 모드를 사용하세요.
- 대용량 미디어나 VM 이미지의 경우 Advanced Settings에서 전송 개수를 조정하세요.
- 최소 두 개 이상의 리전 또는 프로바이더(예: Wasabi + R2)를 유지하고 스케줄을 교대로 운영하세요.
- 비용을 모니터링하세요: Object Lock은 모든 버전을 보관하므로, 보존 기간이 만료된 후에는 라이프사이클 규칙과 함께 사용하는 것이 좋습니다.

## 문제 해결 체크리스트

- 업로드가 AccessDenied로 실패하는 경우: IAM 역할이 `PutObjectRetention`을 허용하는지 확인하세요.
- 객체가 잠기지 않는 경우: 버킷이 Object Lock으로 생성되었는지, 버전 관리가 켜져 있는지 확인하세요.
- 전송이 느린 경우: 전송 개수를 낮추거나 피어링 상태가 약할 때 대역폭 제한을 사용하세요.
- 복구 시 실제 데이터가 삭제되는 경우: 잠긴 버킷에서 가져올 때는 Sync 대신 Copy를 사용하세요.



백업을 한 번 잠가두면 RcloneView가 자동으로 안전하게 지켜줍니다.

<CloudSupportGrid />
