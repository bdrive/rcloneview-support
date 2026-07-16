---
slug: backup-dropbox-to-aws-s3-rcloneview
title: "Dropbox를 AWS S3로 백업하는 방법 — RcloneView로 자동화하는 클라우드 간 백업"
authors:
  - tayson
description: "Dropbox 파일을 AWS S3로 백업하여 보호하세요. RcloneView를 사용해 예약 실행과 검증까지 포함한 자동화된 클라우드 간 백업을 설정하는 방법을 안내합니다."
keywords:
  - backup dropbox to s3
  - dropbox aws s3 sync
  - dropbox cloud backup
  - dropbox to s3 transfer
  - cloud to cloud backup dropbox
  - dropbox backup solution
  - dropbox data protection
  - sync dropbox aws
  - automated dropbox backup
  - dropbox migration s3
tags:
  - RcloneView
  - dropbox
  - aws-s3
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox를 AWS S3로 백업하는 방법 — RcloneView로 자동화하는 클라우드 간 백업

> Dropbox는 협업에는 훌륭합니다. 하지만 파일이 실수로 삭제되거나, 랜섬웨어가 공유 폴더를 암호화하거나, Dropbox 자체에 장애가 발생하면 어떻게 될까요? AWS S3로의 클라우드 간 백업은 이런 모든 상황으로부터 여러분을 보호해줍니다.

중요한 파일을 하나의 클라우드 제공업체에만 의존하는 것은 위험합니다. Dropbox의 버전 기록은 실수로 인한 변경 사항에는 도움이 되지만, 계정 침해나 보존 기간을 넘긴 영구 삭제, 서비스 장애로부터는 보호해주지 못합니다. AWS S3로 백업하면 모든 것에 대한 독립적이고 내구성 있는 사본을 확보할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox를 S3로 백업해야 하는 이유

- **독립적인 사본** — Dropbox에 장애가 발생하거나 계정이 침해되어도 S3에는 여러분의 파일이 남아 있습니다.
- **99.999999999%의 내구성** — S3의 11개 9자리 내구성 덕분에 데이터가 매우 안전하게 보관됩니다.
- **비용 효율적인 아카이빙** — S3 Glacier는 자주 접근하지 않는 파일에 대해 월 $4/TB부터 시작합니다.
- **컴플라이언스** — 일부 업계는 별도의 인프라에 백업을 보관하도록 요구합니다.
- **랜섬웨어 방지** — S3 버전 관리와 오브젝트 잠금 기능이 덮어쓰기를 방지합니다.

## 설정 방법

### 1) Dropbox와 AWS S3 연결하기

RcloneView에 두 리모트를 모두 추가합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and S3 remotes" class="img-large img-center" />

S3의 경우 Access Key ID, Secret Access Key, 그리고 원하는 리전 정보가 필요합니다.

### 2) 양쪽 모두 탐색하기

듀얼 패널 탐색기에서 왼쪽에는 Dropbox를, 오른쪽에는 S3를 엽니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Dropbox and S3 side by side" class="img-large img-center" />

### 3) 복사 작업 만들기

**복사(Copy)** 기능을 사용해 Dropbox를 S3 버킷으로 백업합니다. 복사는 삭제 없이 파일을 추가하므로 백업에 안전합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to S3 backup" class="img-large img-center" />

### 4) 매일 밤 백업 예약하기

S3 백업을 최신 상태로 유지하도록 매일 밤 작업이 실행되게 설정합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly Dropbox backup" class="img-large img-center" />

### 5) 완전성 검증하기

폴더 비교 기능을 사용해 모든 파일이 백업되었는지 확인합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on S3" class="img-large img-center" />

## 알맞은 S3 스토리지 클래스 선택하기

AWS S3는 다양한 가격대의 여러 스토리지 클래스를 제공합니다.

| 스토리지 클래스 | 최적 용도 | 가격 (TB/월) |
|---------------|----------|------------------|
| S3 Standard | 자주 접근하는 백업 | $23 |
| S3 Standard-IA | 월 단위로 접근하는 백업 | $12.50 |
| S3 Glacier Instant | 드물게 접근, 즉시 검색 | $4 |
| S3 Glacier Deep Archive | 컴플라이언스, 연 단위 접근 | $1 |

대부분의 Dropbox 백업에는 **S3 Standard-IA**(Infrequent Access)가 최적의 선택입니다. 백업을 매일 사용하지는 않지만 필요할 때 빠르게 복원하고 싶은 경우에 알맞습니다.

## 필터를 사용한 선택적 백업

모든 파일을 백업할 필요는 없을 수도 있습니다. rclone 필터 규칙을 사용해보세요.

- **문서만 포함**: `--include "*.pdf" --include "*.docx" --include "*.xlsx"`
- **임시 파일 제외**: `--exclude "*.tmp" --exclude ".dropbox*"`
- **대용량 미디어 건너뛰기**: `--max-size 500M`

자세한 내용은 [Rclone 필터 규칙 설명](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)을 참고하세요.

## 완전한 백업 워크플로를 위한 배치 작업

v1.3의 배치 작업(Batch Jobs) 기능을 사용하면 여러 작업을 연결할 수 있습니다.

1. Dropbox → S3 복사.
2. Dropbox와 S3 비교.
3. 완료 시 Slack 알림 전송.

이 모든 과정을 하나의 자동화된 시퀀스로 처리할 수 있습니다.

## 백업에서 복원하기

S3에서 Dropbox로 파일을 복원해야 하는 경우:

1. 왼쪽에 S3를, 오른쪽에 Dropbox를 엽니다.
2. 복원할 파일이나 폴더를 선택합니다.
3. S3 → Dropbox로 복사 작업을 실행합니다.

역순으로 동일한 과정을 진행하면 됩니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Dropbox와 AWS S3를 리모트로 추가**합니다.
3. Dropbox에서 S3로 **복사 작업을 실행**합니다.
4. **매일 밤 백업을 예약**합니다.
5. **폴더 비교로 검증**합니다.

여러분의 Dropbox 파일은 하나의 보금자리 이상을 가질 자격이 있습니다.

---

**관련 가이드:**

- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rclone 필터 규칙](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
