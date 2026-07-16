---
slug: manage-cloudinary-cloud-sync-backup-rcloneview
title: "Cloudinary 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - jay
description: "RcloneView를 사용하여 Cloudinary 디지털 자산을 Amazon S3, Google Drive 또는 기타 클라우드 스토리지로 관리, 동기화, 백업하는 방법을 알아보세요."
keywords:
  - manage Cloudinary with RcloneView
  - Cloudinary backup to S3
  - Cloudinary sync Google Drive
  - Cloudinary rclone
  - backup Cloudinary assets
  - Cloudinary cloud storage management
  - sync Cloudinary files
  - digital asset backup Cloudinary
tags:
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudinary 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> Cloudinary는 여러분의 프로덕션 이미지 및 비디오 자산을 보관합니다 — RcloneView를 사용하면 스크립트를 작성하지 않고도 Amazon S3, Google Drive 또는 기타 클라우드로 이를 백업할 수 있습니다.

Cloudinary는 대규모 이미지, 비디오, 리치 미디어 파일 라이브러리를 관리하는 개발자와 크리에이티브 팀에게 필수 플랫폼이 되었습니다. 하지만 모든 것을 Cloudinary에만 저장하면 단일 장애점이 생깁니다. 실수로 인한 대량 삭제, 계정 문제, API 장애가 발생하면 몇 분 만에 전체 미디어 라이브러리에 접근할 수 없게 될 수 있습니다. rclone의 Cloudinary 백엔드를 기반으로 구축된 RcloneView는 Cloudinary 계정을 탐색, 동기화하고 다른 지원 클라우드 스토리지로 백업할 수 있는 시각적 인터페이스를 제공하여, 여러분이 직접 관리하는 검증된 사본을 유지할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에 Cloudinary 연결하기

RcloneView를 열고 Remote 탭으로 이동한 다음 New Remote를 클릭합니다. 제공업체 목록에서 Cloudinary를 선택하고 자격 증명을 입력하여 설정을 완료합니다. 연결이 완료되면 Cloudinary 스토리지가 탐색기 패널에 탐색 가능한 리모트로 표시됩니다 — 왼쪽의 폴더 트리를 사용해 미디어 라이브러리를 탐색하고, 오른쪽의 파일 목록으로 이름, 크기, 수정 날짜와 함께 개별 자산을 확인할 수 있습니다.

썸네일 보기는 Cloudinary 콘텐츠에 특히 유용합니다. 파일 목록에서 썸네일 모드로 전환하면 단순한 파일명 대신 이미지의 시각적 그리드를 볼 수 있어, 작업을 실행하기 전에 올바른 폴더를 보고 있는지 쉽게 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudinary as a new remote in RcloneView" class="img-large img-center" />

## Cloudinary 자산을 다른 클라우드로 백업하기

한쪽 탐색기 패널에 Cloudinary를 열고 다른 쪽에 Amazon S3, Backblaze B2, Google Drive 등의 대상을 열어둔 상태에서 Home 탭 > Sync를 통해 동기화 작업을 시작합니다. 4단계 마법사를 통해 전송할 내용을 정확히 구성할 수 있습니다.

- Cloudinary 폴더를 소스로, 백업 클라우드를 대상으로 선택합니다
- 3단계의 사전 정의된 파일 필터(Image, Video)를 사용해 특정 미디어 유형을 대상으로 지정하고 불필요한 파일을 건너뜁니다
- 최대 파일 기간을 설정해 새로 업데이트된 자산만 캡처하는 증분 동기화를 실행합니다

항상 먼저 **Dry Run(시험 실행)**을 실행하세요 — 아무것도 건드리지 않고 전송되거나 건너뛸 파일을 정확히 미리 볼 수 있습니다. 대규모 Cloudinary 라이브러리의 경우, 이를 통해 백업 누락으로 이어지기 전에 필터 설정 오류를 잡아낼 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop interface for transferring Cloudinary assets to S3 backup" class="img-large img-center" />

## Cloudinary 자동 백업 예약하기

지속적인 자산 보호를 위해 RcloneView PLUS는 동기화 마법사 4단계에 crontab 스타일 예약 기능을 추가합니다. 매일 새벽 2시에 실행되는 야간 동기화는 그날 새로 업로드된 자산을 수집하면서 피크 시간 외로 대역폭 사용을 유지합니다. 저장하기 전에 Simulate schedule 미리보기를 사용해 다음 실행 시간을 확인하세요 — 첫 예약 실행이 발생할 때 놀랄 일이 없습니다.

실행이 시작되면 작업 완료 알림이 상태, 전송된 파일 수, 데이터 용량과 함께 알려줍니다. 하루에 수십 개의 활성 Cloudinary 변환과 업로드가 발생하는 팀의 경우, 이러한 수동적 알림 덕분에 로그인해서 확인하지 않아도 백업이 올바르게 실행되었는지 알 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a nightly scheduled backup of Cloudinary assets in RcloneView" class="img-large img-center" />

## 백업 완전성 확인하기

Folder Compare 기능(Home 탭 > Compare)을 사용하면 언제든지 Cloudinary 소스와 백업 대상을 비교할 수 있습니다. RcloneView는 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 동일한 파일, 다른 파일을 나란히 보여줍니다 — 한눈에 커버리지의 공백을 파악하고 새 작업을 설정하지 않고도 비교 화면에서 직접 누락된 파일을 복사할 수 있습니다. 중요도가 높은 미디어 자산의 경우, 동기화 작업의 Advanced Settings에서 체크섬을 활성화하면 크기 일치를 넘어 파일 내용까지 검증하여 각 파일이 손상 없이 도착했는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between Cloudinary source and S3 backup destination" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote 탭 > New Remote를 통해 Cloudinary를 리모트로 추가하고 구성을 완료합니다.
3. 백업 대상(Amazon S3, Backblaze B2, Google Drive)을 두 번째 리모트로 추가합니다.
4. Cloudinary에서 대상으로의 동기화 작업을 만들고 Dry Run을 실행한 다음, 자동 일일 백업을 위해 PLUS 예약 기능을 활성화합니다.

Cloudinary는 여러분의 가장 눈에 띄는 프로덕션 자산을 보관합니다 — 두 번째 클라우드에 동기화된 사본을 유지하면 단일 장애점을 여러분이 완전히 관리하는 신뢰할 수 있고 감사 가능한 백업으로 바꿀 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 여러 클라우드에서 디지털 자산 관리하기](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [Amazon S3 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [RcloneView로 Google Photos를 외장 드라이브 또는 NAS에 백업하기](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
