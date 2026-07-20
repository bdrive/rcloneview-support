---
slug: cleanup-empty-trash-cloud-storage-rcloneview
title: "클라우드 스토리지 정리: RcloneView로 휴지통 비우기와 이전 버전 삭제하기"
authors:
  - tayson
description: "Google Drive, OneDrive, S3 등에서 휴지통을 비우고, 이전 파일 버전을 삭제하고, 고아 데이터를 정리하여 RcloneView로 클라우드 스토리지 공간을 확보하세요."
keywords:
  - rclone cleanup cloud storage
  - empty google drive trash rclone
  - onedrive recycle bin cleanup
  - remove old versions s3
  - free cloud storage space
  - rcloneview cleanup feature
  - cloud storage versioning cleanup
  - rclone delete old versions
  - reclaim cloud quota
  - cloud storage trash management
tags:
  - RcloneView
  - feature
  - cleanup
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 스토리지 정리: RcloneView로 휴지통 비우기와 이전 버전 삭제하기

> 삭제된 파일과 이전 버전은 눈에 띄지 않게 클라우드 할당량을 소모합니다. RcloneView를 사용하면 이를 손쉽게 정리하고 이미 비용을 지불하고 있는 저장 공간을 되찾을 수 있습니다.

Google Drive에서 파일을 삭제할 때마다 해당 파일은 휴지통으로 이동합니다. OneDrive가 문서를 덮어쓸 때마다 이전 버전이 보관됩니다. 버전 관리가 활성화된 S3 버킷이 업데이트를 받을 때마다 이전 객체가 그대로 남습니다. 이러한 보이지 않는 사본들은 몇 달, 몇 년에 걸쳐 쌓여 할당량을 소모하고 스토리지 비용을 늘립니다. rclone의 `cleanup` 명령은 이 숨겨진 데이터를 제거하며, RcloneView를 사용하면 몇 번의 클릭만으로 실행할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 휴지통과 버전 관리 파일이 할당량을 낭비하는 방식

대부분의 클라우드 제공업체는 휴지통에 있는 파일과 버전 관리 파일을 스토리지 할당량에 포함시킵니다. 그 영향은 예상보다 큰 경우가 많습니다.

| 제공업체 | 할당량에 포함되는 항목 | 자동 삭제 정책 |
|----------|--------------------------|-------------------|
| **Google Drive** | 휴지통 파일, 모든 파일 버전 | 휴지통은 30일 후 자동 삭제 |
| **OneDrive** | 휴지통 항목, 버전 기록 | 휴지통은 93일 후 자동 삭제 |
| **Dropbox** | 삭제된 파일 및 이전 버전 | 30일(Basic) 또는 180일(Professional) 보관 |
| **Amazon S3** | 모든 객체 버전(버전 관리 활성화 시) | 자동 삭제 없음, 수명 주기 규칙 필요 |
| **Backblaze B2** | 모든 파일 버전 | 수명 주기 규칙 없이는 자동 삭제 없음 |
| **Google Cloud Storage** | 비활성 객체 버전 | 수명 주기 정책으로 구성 가능 |

용량의 90%를 사용 중인 Google Drive 계정의 경우, 사용량의 5~10%가 휴지통에만 있을 수도 있습니다. 버전 관리가 적용된 S3 버킷에서는 이전 버전들이 시간이 지남에 따라 실제 스토리지 사용량을 두 배, 세 배로 늘릴 수 있습니다.

## 제공업체별 정리 실행

### Google Drive 휴지통

Google Drive의 휴지통은 숨겨진 사용량의 가장 흔한 원인입니다. 비우려면 다음을 실행하세요.

```bash
rclone cleanup gdrive:
```

이 명령은 Google Drive 휴지통에 있는 모든 파일을 영구적으로 삭제합니다. 되돌릴 수 없으므로, 실행하기 전에 휴지통에 필요한 것이 없는지 반드시 확인하세요.

RcloneView에서는 터미널을 열지 않고도 UI에서 정리 작업을 실행할 수 있습니다. Google Drive 리모트로 이동하여 정리 작업을 사용하세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView showing Google Drive remote ready for cleanup" class="img-large img-center" />

### OneDrive 휴지통

OneDrive는 삭제된 파일을 최대 93일 동안 휴지통에 보관합니다.

```bash
rclone cleanup onedrive:
```

이 명령은 휴지통을 비웁니다. 휴지통이 큰 OneDrive Business 계정의 경우, 즉시 상당한 공간을 확보할 수 있습니다.

### S3 버전 관리 객체

버전 관리가 활성화된 S3 버킷은 이전 객체 버전을 계속 쌓아 갑니다. rclone의 cleanup은 비활성 버전을 제거합니다.

```bash
rclone cleanup s3-remote:my-bucket
```

버전 관리된 객체가 수천 개인 버킷의 경우 이 작업에는 시간이 걸릴 수 있습니다. 특정 접두사를 대상으로 선택적으로 정리할 수도 있습니다.

```bash
rclone cleanup s3-remote:my-bucket/logs/
```

### Dropbox 및 기타 제공업체

Dropbox는 rclone을 통해 cleanup 명령을 직접 지원하지 않습니다. Dropbox의 경우 Dropbox 웹 인터페이스나 API를 통해 삭제된 파일과 버전을 관리하세요. pCloud, Backblaze B2 등 다른 제공업체는 위 예시와 유사하게 cleanup을 지원합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer showing storage before cleanup" class="img-large img-center" />

## 휴지통이 차지하는 공간 확인하기

정리를 실행하기 전에, 되찾을 수 있는 공간이 얼마인지 확인하세요.

```bash
rclone about gdrive:
```

출력에는 삭제된 파일이 사용 중인 공간을 정확히 보여주는 **Trashed** 항목이 포함됩니다.

```
Total:   15 GiB
Used:    12.3 GiB
Free:    2.7 GiB
Trashed: 3.8 GiB
```

이 예시에서 휴지통을 비우면 즉시 3.8 GiB가 확보되어, 사용 가능한 공간이 두 배 이상으로 늘어납니다.

## 이전 파일 버전 선택적으로 제거하기

일부 워크플로에서는 최신 버전은 유지하면서 그보다 오래된 버전만 제거해야 합니다. rclone은 백엔드별 명령을 통해 이를 지원합니다.

버전 관리가 적용된 S3의 경우:

```bash
rclone backend cleanup-hidden s3-remote:my-bucket
```

이 명령은 각 객체의 현재 버전은 그대로 유지하면서 숨겨진(비활성) 버전만 제거합니다.

Google Drive의 경우, 리모트 구성에서 `--drive-keep-revision-forever=false`를 사용하면 향후 무제한 버전 보관을 방지할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Execute cleanup job in RcloneView" class="img-large img-center" />

## 예약 작업으로 정리 자동화하기

수동 정리도 효과가 있지만, 예약된 정리는 문제가 반복되는 것을 방지합니다.

1. RcloneView에서 각 리모트에 대해 cleanup 명령을 포함한 새 **Job**을 생성합니다.
2. **Job Scheduler**를 열고 반복 일정을 설정합니다 -- 대부분의 계정에는 월간 주기로 충분합니다.
3. 각 실행 후 **Job History**를 확인하여 정리가 성공적으로 완료되었는지 확인합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cleanup job in RcloneView" class="img-large img-center" />

월간 정리 일정을 설정하면 휴지통과 이전 버전이 할당량 문제나 비용 증가를 일으킬 만큼 쌓이는 일을 방지할 수 있습니다.

## 안전 고려 사항

- **정리는 영구적입니다** -- `rclone cleanup`을 실행한 후에는 휴지통에 있던 파일을 복구할 수 없습니다.
- **먼저 휴지통을 확인하세요** -- 삭제하기 전에 제공업체의 웹 인터페이스를 통해 휴지통을 살펴보세요.
- **S3 버전 관리에는 목적이 있습니다** -- 롤백을 위해 버전에 의존하고 있다면 무분별하게 정리하지 마세요. 대신 최근 N개의 버전을 유지하는 수명 주기 규칙을 고려하세요.
- **먼저 중요하지 않은 리모트에서 테스트하세요** -- 프로덕션 데이터에 cleanup을 실행하기 전에 동작이 예상과 일치하는지 확인하세요.
- **cleanup에는 드라이 런이 제공되지 않습니다** -- 동기화나 복사와 달리 `--dry-run` 모드가 없습니다. 휴지통에 무엇이 있는지 확인한 후 확신을 가지고 진행하세요.

## 비용 영향

사용량 기반 요금제를 사용하는 제공업체의 경우, 정리는 청구 금액을 직접적으로 줄여 줍니다.

| 제공업체 | 스토리지 비용 | 이전 버전/휴지통 100GB 절감액 |
|----------|-------------|------------------------------|
| Amazon S3 Standard | $0.023/GB/월 | 월 $2.30 절감 |
| Backblaze B2 | $0.006/GB/월 | 월 $0.60 절감 |
| Google Cloud Standard | $0.020/GB/월 | 월 $2.00 절감 |
| Wasabi | $0.0069/GB/월 | 월 $0.69 절감 |

할당량 기반 제공업체의 경우, 정리는 동기화와 백업을 중단시키는 한도 초과를 방지합니다.

---

**관련 가이드:**

- [클라우드 스토리지 사용량 및 할당량 분석](https://rcloneview.com/support/blog/rclone-about-storage-usage-analysis-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 비교](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [클라우드 간 전송 및 동기화](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
