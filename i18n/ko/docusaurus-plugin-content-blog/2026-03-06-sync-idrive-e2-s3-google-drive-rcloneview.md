---
slug: sync-idrive-e2-s3-google-drive-rcloneview
title: "RcloneView로 IDrive e2 오브젝트 스토리지를 AWS S3나 Google Drive와 동기화하기"
authors:
  - tayson
description: "RcloneView의 S3 호환 연결을 사용해 IDrive e2 오브젝트 스토리지를 시각적으로 관리하세요 — 버킷을 탐색하고, AWS S3나 Google Drive로 동기화하고, 백업을 예약할 수 있습니다."
keywords:
  - idrive e2 sync
  - idrive e2 backup
  - idrive e2 gui tool
  - idrive e2 to s3
  - idrive e2 rclone
  - idrive e2 file manager
  - idrive e2 mount local drive
  - idrive e2 google drive
  - idrive e2 object storage
  - s3 compatible storage gui
tags:
  - idrive-e2
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 IDrive e2 오브젝트 스토리지를 AWS S3나 Google Drive와 동기화하기

> IDrive e2는 $0.004/GB/월이라는 매우 저렴한 가격의 S3 호환 스토리지를 제공합니다. 하지만 데스크톱 동기화 클라이언트가 없어서 파일을 관리하려면 API 호출이나 웹 UI를 사용해야 합니다. RcloneView는 완전한 시각적 인터페이스를 제공합니다.

IDrive e2는 Backblaze B2, Wasabi, AWS S3보다 저렴한, 가장 비용 효율적인 S3 호환 오브젝트 스토리지 서비스 중 하나입니다. 백업, 아카이브, 콜드 스토리지에 이상적입니다. 하지만 대부분의 오브젝트 스토리지 제공업체와 마찬가지로 IDrive e2에도 네이티브 데스크톱 클라이언트가 없습니다. RcloneView는 S3 API를 통해 연결하여 시각적 파일 관리, 클라우드 간 동기화, 예약 자동화를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 IDrive e2인가?

| 제공업체 | TB당 월 비용 | 이그레스 |
|----------|-------------------|--------|
| IDrive e2 | $4.00 | 무료 (스토리지의 3배까지) |
| Backblaze B2 | $6.00 | $0.01/GB |
| Wasabi | $6.99 | 무료 |
| AWS S3 Standard | $23.00 | $0.09/GB |

IDrive e2의 가격 정책은 저렴하고 안정적인 오브젝트 스토리지가 필요한 모든 사람에게 매력적인 선택지입니다.

## IDrive e2 연결하기

IDrive e2는 S3 호환이므로:

1. **Add Remote**를 클릭 → **Amazon S3**를 선택합니다.
2. S3 provider 드롭다운에서 **IDrive e2** 또는 **Other**를 선택합니다.
3. 자격 증명을 입력합니다:
   - IDrive e2 대시보드의 **Access Key**와 **Secret Key**.
   - **Endpoint**: 사용 중인 지역 엔드포인트 (예: `https://s3.us-west-1.idrivecloud.io`).
4. 저장하면 이제 e2 버킷을 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add IDrive e2 as S3-compatible remote" class="img-large img-center" />

## 탐색 및 관리

다른 클라우드와 함께 IDrive e2 버킷을 확인하세요:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse IDrive e2 buckets" class="img-large img-center" />

## 동기화 시나리오

### Google Drive → IDrive e2 (저렴한 백업)

Google Drive의 저비용 백업으로 e2를 사용하세요:

1. Copy 작업을 생성합니다: Google Drive → IDrive e2 버킷.
2. [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)으로 매일 밤 예약합니다.
3. 동일한 데이터에 대해 Google이 청구하는 비용의 일부만 지불하면 됩니다.

### IDrive e2 → AWS S3 (클라우드 간 이중화)

1. Sync 작업을 생성합니다: IDrive e2 → S3 버킷.
2. 서로 다른 두 S3 호환 제공업체 간에 이중화를 유지합니다.

### 로컬/NAS → IDrive e2 (오프사이트 아카이브)

1. Copy 작업을 생성합니다: 로컬 폴더 또는 NAS → IDrive e2.
2. 최소 비용으로 오프사이트 백업을 하기에 완벽합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run IDrive e2 sync job" class="img-large img-center" />

## 로컬 드라이브로 마운트

IDrive e2를 일반 폴더처럼 액세스하세요:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount IDrive e2 as local drive" class="img-large img-center" />

## 자동화 및 모니터링

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule IDrive e2 backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor IDrive e2 transfers" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **IDrive e2를** S3 호환 리모트로 **추가**합니다.
3. 원하는 대상으로 **탐색, 마운트, 또는 동기화**합니다.
4. 자동화된 저비용 클라우드 백업을 위해 **예약**합니다.

IDrive e2는 오브젝트 스토리지계의 가성비 왕입니다. RcloneView는 그에 걸맞은 데스크톱 경험을 제공합니다.

---

**관련 가이드:**

- [AWS S3 및 S3 호환 스토리지 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [클라우드 스토리지를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
