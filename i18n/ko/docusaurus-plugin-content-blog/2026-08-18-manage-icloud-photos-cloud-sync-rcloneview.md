---
slug: manage-icloud-photos-cloud-sync-rcloneview
title: "iCloud Photos 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - robin
description: "RcloneView로 iCloud Photos를 관리하세요 — 하나의 크로스플랫폼 GUI에서 Apple 사진 라이브러리를 탐색, 동기화, 백업할 수 있습니다."
keywords:
  - iCloud Photos 관리
  - iCloud Photos 백업
  - iCloud Photos 동기화
  - RcloneView iCloud Photos
  - Apple Photos 클라우드 백업
  - iCloud Photos to Google Drive
  - iCloud Photos 마이그레이션
  - Apple 사진 라이브러리 백업 도구
  - iCloud Photos rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Photos 관리 — RcloneView로 파일 동기화 및 백업하기

> RcloneView에서 iCloud Photos 라이브러리를 연결하고 앨범을 일일이 손으로 내보내지 않고도 다른 클라우드에 백업하세요.

Apple의 Photos 생태계는 수년간의 사진과 동영상을 iCloud 안에 가두어 두는데, 다른 곳에 두 번째 사본을 만들려면 보통 Photos 앱을 통해 앨범을 하나씩 내보내야 합니다. RcloneView는 iCloud Photos를 iCloud Drive와는 별개인 전용 리모트로 연결하므로 — 라이브러리를 직접 탐색하고 수동 내보내기 과정 없이 Google Drive, Amazon S3, 또는 로컬 백업 드라이브로 복사할 수 있습니다. S3, Azure File Storage, Backblaze B2는 FREE 라이선스에서 완전한 읽기/쓰기로 연결할 수 있어, 사진 백업의 대상 측 설정에 추가 비용이 들지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 리모트로 iCloud Photos 연결하기

iCloud Photos는 RcloneView의 Remote 탭 > New Remote를 통해 추가되며, iCloud Drive와는 별개의 전용 리모트 유형으로 설정됩니다 — 두 리모트는 같은 Apple 계정에서 나오더라도 서로 다른 리모트로 동작합니다. 인증이 완료되면 라이브러리는 다른 클라우드 스토리지와 마찬가지로 Explorer 패널에 나타나며, 폴더, 썸네일, 파일 메타데이터를 탐색하고 선택할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Photos remote in RcloneView" class="img-large img-center" />

오래된 iCloud 사용자의 경우 라이브러리가 수만 개의 파일에 이를 수 있으므로, 대량 복사를 하기 전에 RcloneView의 Thumbnail View로 전환할 만한 가치가 있습니다 — 전송을 시작하기 전에 이미지 미리보기를 훑어보며 올바른 앨범이나 날짜 범위를 가리키고 있는지 확인할 수 있습니다.

## 두 번째 클라우드로 백업하기

iCloud Photos가 연결되면 4단계 마법사를 통해 동기화 작업을 설정하세요: iCloud Photos를 소스로 선택하고, Google Drive, S3 호환 버킷, 또는 로컬 외장 드라이브 중 대상 리모트를 선택한 다음, 실제로 전송이 이루어지기 전에 정확히 무엇이 복사될지 미리 보기 위해 먼저 Dry Run을 실행하세요. 사진 라이브러리의 경우 특히, 사진 파일은 크기가 거의 바뀌지 않지만 그래도 복사본이 원본과 바이트 단위로 일치한다는 확신을 원하기 때문에 Step 2의 체크섬 비교가 유용합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from iCloud Photos to another cloud remote in RcloneView" class="img-large img-center" />

Step 3의 Filtering Settings도 대용량 라이브러리의 범위를 좁히는 데 도움이 됩니다 — 최대 파일 나이 필터를 사용하면 백업 작업을 최근에 추가된 항목으로만 제한할 수 있어, 최초 전체 복사가 끝난 후 반복 실행 속도를 빠르게 유지할 수 있습니다.

## 정기 백업 자동화하기

한 번의 내보내기로는 다음 달에 찍을 사진을 보호할 수 없으므로, 대부분의 iCloud Photos 사용자는 수동으로 한 번씩 실행하는 대신 반복 동기화 작업을 설정합니다. PLUS 라이선스에서는 crontab 형식의 일정을 작업에 연결하여 매일, 매주, 또는 매일 밤 특정 시간 이후 등 원하는 주기로 자동 실행되도록 할 수 있으며, 이후 Job History에서 실행이 완료되었는지와 전송된 파일 수를 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Photos backup job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭 > New Remote를 통해 iCloud Photos 리모트를 추가하세요.
3. 원하는 백업 대상으로 동기화 작업을 구성하고 먼저 Dry Run을 실행하세요.
4. 새 사진이 자동으로 보호되도록 정기 백업을 예약하세요.

Apple 생태계 밖에 사진 라이브러리의 두 번째 사본을 두면 계정이 잠기거나 기기를 분실했을 때 단일 장애점을 하나 줄일 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 iCloud Drive 사용하기](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [RcloneView로 iCloud Drive 클라우드 동기화 관리하기](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [RcloneView로 iCloud Drive 동기화 오류 해결하기](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
