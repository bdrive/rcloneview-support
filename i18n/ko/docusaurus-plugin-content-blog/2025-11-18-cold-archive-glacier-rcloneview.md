---
slug: tiered-cloud-archive-glacier-rcloneview
title: "RcloneView로 S3 Standard, Wasabi, Glacier Deep Archive까지 계층형 클라우드 백업 구성하기"
authors:
  - tayson
description: RcloneView로 S3/Wasabi에 걸친 핫-웜-콜드 백업 파이프라인을 구성하여 빠른 복원과 Glacier Deep Archive를 통한 초저비용 장기 보관을 예약된 동기화/복사 작업과 라이프사이클 정책으로 구현합니다.
keywords:
  - glacier deep archive
  - cold storage
  - tiered backup
  - rclone s3
  - rcloneview
  - wasabi archive
  - lifecycle policy
  - cloud backup
  - archive retention
tags:
  - archive
  - s3
  - glacier
  - wasabi
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 S3 Standard, Wasabi, Glacier Deep Archive까지 계층형 클라우드 백업 구성하기

> 최근 데이터는 빠르게 복원하고 장기 보관은 저렴하게: S3 Standard로 핫 티어, Wasabi/R2로 웜 티어, Glacier Deep Archive로 아카이브 티어를 구성하세요—RcloneView 예약 작업과 버킷 라이프사이클 정책을 활용합니다.

단일 스토리지 클래스로 모든 파일을 처리하는 경우는 드뭅니다. 계층형 파이프라인을 설계해 보세요: 최신 데이터는 S3 Standard로 복사해 빠른 접근을 확보하고, 저비용 웜 티어(Wasabi/R2)로 미러링해 지역 이중화를 확보하며, 매월 스냅샷을 Glacier Deep Archive로 전송해 컴플라이언스 보관을 충족합니다. RcloneView는 rclone 위에 GUI 레이어를 제공하여 셸 스크립트 없이도 동기화를 예약하고, 비교(Compare)로 검증하며, 라이프사이클 규칙을 그대로 유지할 수 있습니다.

<!-- truncate -->

**관련 문서**

- 동기화 작업 생성: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- 작업 예약 및 실행 (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- 폴더 비교: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- 로컬 드라이브로 마운트: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## RcloneView로 계층형 백업을 구성하는 이유

- 복구 속도: 최신 파일은 S3 Standard에 두어 지연 시간이 짧은 접근이 가능합니다.
- 비용 관리: 웜 사본은 Wasabi/R2에, 딥 아카이브는 Glacier에 두어 TB당 월 몇 센트 수준으로 관리합니다.
- 복원력: 멀티 클라우드와 멀티 리전 구성으로 단일 프로바이더 리스크를 줄입니다.
- 스크립팅 불필요: cron/YAML 대신 시각적인 작업, 예약, 로그를 사용합니다.
- 검증: 비교(Compare) 작업으로 복원이 필요해지기 전에 데이터 불일치를 파악합니다.

## 아키텍처 한눈에 보기

```
[Primary (NAS/Drive/OneDrive)] --(Hourly Sync)--> [S3 Standard hot copy]
                                         \
                                          --(Daily Sync)--> [Wasabi/R2 warm copy]
                                          --(Monthly Copy)--> [Glacier Deep Archive]
```

- 핫: S3 Standard (빠른 복원).
- 웜: Wasabi 또는 R2 (저렴하고 복원 시 이그레스 비용에 유리).
- 콜드: Glacier Deep Archive로 90~365일 보관 (버킷 라이프사이클로 객체를 전환).

## 사전 준비

- RcloneView에 세 개의 리모트가 구성되어 있어야 합니다 (예: `s3:hot`, `wasabi:warm`, `s3:archive`).
- 핫/웜 버킷에는 버전 관리를, 아카이브 버킷에는 Glacier Deep Archive로 전환하는 라이프사이클 규칙을 설정합니다.
- IAM/API 권한: 목록 조회/읽기/쓰기 + 멀티파트 업로드; 콜드 티어를 위한 Glacier 복원 권한.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 1단계: 핫/웜 동기화 작업 구성

1. **동기화(Sync)** 작업을 생성합니다 (Primary -> S3 hot).
2. **고급 설정(Advanced Settings)**에서 전송 개수를 설정하고, 양쪽 모두 해시를 지원하면 체크섬 비교를 활성화합니다.
3. **필터링 설정(Filtering Settings)**에서 캐시/임시 폴더를 제외합니다.
4. 유사한 설정과 필터로 두 번째 **동기화** 작업을 생성합니다 (Primary -> Wasabi/R2 warm).
5. 두 작업 모두 작업 관리자(Job Manager)에 저장합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## 2단계: 콜드 아카이브 복사 작업 추가

1. **복사(Copy)** 작업을 생성합니다 (S3 hot -> Glacier archive bucket). 아카이브에서 삭제가 발생하지 않도록 동기화가 아닌 복사를 사용합니다.
2. **고급 설정**에서 필요에 따라 전송 개수와 체크섬 비교를 설정합니다.
3. 버킷 라이프사이클 규칙을 사용해 객체를 Glacier Deep Archive로 전환하고, 컴플라이언스 기간 이후 이전 버전을 만료시킵니다.

## 3단계: 전체 예약 설정

- 작업 마법사(4단계: 예약, Plus)에서 주기를 설정합니다: 핫은 매시간, 웜은 매일 밤, 콜드는 매월.
- **시뮬레이션(Simulate)**으로 예약을 미리 확인하고, 고급 설정에서 재시도 횟수를 설정합니다.
- 매주 핫과 웜을 비교(Compare)하는 작업을 추가해 데이터 불일치를 조기에 발견합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## 4단계: 무결성 검증

- 첫 전체 동기화 이후 핫과 웜 간 비교(Compare)를 실행합니다.
- 아카이브의 경우, 소규모 Glacier 복원을 실행해 파일이 정상적으로 열리는지 표본 점검합니다.
- 모든 티어에 작은 카나리 파일(예: `canary.txt`)을 두고, 비교 리포트에서 존재 여부를 확인합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 5단계: 복원 플레이북

- 빠른 복원: 이그레스/위치에 따라 웜(Wasabi/R2) 또는 핫(S3 Standard)에서 가져옵니다.
- 딥 복원: 필요한 프리픽스에 대해 Glacier 복원을 시작한 뒤, 웜/핫으로 복사(Copy)합니다.
- 잘못된 폴더를 복원하지 않도록, 대량 복사 전에 RcloneView의 마운트 기능으로 미리 탐색합니다.

## 튜닝 팁

- 지연 시간/이그레스에 민감한 경우: 업무 시간에는 전송 개수를 낮추고, 비업무 시간에는 높입니다.
- Glacier 비용: 아카이브를 월 단위로 묶고, 빈번한 소규모 업로드를 피해 PUT 및 복원 요청 수를 줄입니다.
- 보안: 핫/웜에 Object Lock을 함께 사용해(불변 가이드 참고) 랜섬웨어로 인한 삭제를 차단합니다.
- 네이밍: 스냅샷 앞에 날짜 폴더를 붙여(예: `archive/2025-11/`) 라이프사이클 관리와 복원을 단순화합니다.

## 문제 해결 체크리스트

- 복원 지연: Glacier 복원은 몇 시간이 걸릴 수 있으므로 RPO/RTO를 이에 맞게 계획합니다.
- 아카이브에서 AccessDenied 발생: IAM 역할이 해당 버킷에 대해 `glacier:InitiateJob`/복원을 허용하는지 확인합니다.
- 데이터 불일치 발견: 핫/웜 동기화를 다시 실행하고, 아카이브에 누락된 객체가 있으면 핫에서 델타를 재복사합니다.
- 비용 급증: 보관 기간 이후 라이프사이클 만료를 활성화하고, 피크 이그레스 시간대에는 동시성을 제한합니다.



한 번 계층화하고, 항상 예약하며, RcloneView로 비용과 RPO를 모두 통제하세요.

<CloudSupportGrid />
