---
slug: migrate-onedrive-business-to-google-shared-drives-rcloneview
title: "OneDrive for Business에서 Google 공유 드라이브로 마이그레이션 — RcloneView로 하는 기업용 파일 전송"
authors:
  - tayson
description: "Microsoft 365 OneDrive에서 Google 공유 드라이브로 이전하시나요? RcloneView를 사용해 비즈니스 파일, 팀 폴더, 부서 데이터를 완전한 검증과 함께 전송하세요."
keywords:
  - onedrive business to google drive
  - migrate onedrive to shared drive
  - onedrive business migration
  - microsoft to google drive transfer
  - onedrive to google workspace
  - enterprise onedrive migration
  - onedrive business to gdrive
  - switch onedrive to google
  - office 365 to google migration
  - business cloud migration
tags:
  - RcloneView
  - onedrive
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive for Business에서 Google 공유 드라이브로 마이그레이션 — RcloneView로 하는 기업용 파일 전송

> OneDrive for Business에 있는 부서 전체 파일을 Google 공유 드라이브로 옮겨야 합니다. 수작업 다운로드-업로드 방식으로는 이런 규모를 감당할 수 없습니다. RcloneView는 이를 시각적으로, 배치 단위로, 검증과 함께 처리합니다.

조직이 플랫폼을 통합함에 따라 OneDrive for Business와 Google 공유 드라이브 간의 기업 마이그레이션이 점점 흔해지고 있습니다. 관건은 규모입니다 — 수백 명의 사용자, 테라바이트급 데이터, 그리고 데이터 손실 제로에 대한 요구사항이 그것입니다. RcloneView는 두 플랫폼을 네이티브로 연결하며, 통제되고 검증된 마이그레이션을 위한 도구를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 마이그레이션 매핑

| OneDrive for Business | Google Workspace |
|----------------------|-----------------|
| User OneDrive | My Drive |
| Team sites / Libraries | Shared Drives |
| Shared folders | Shared Drive folders |

## 두 플랫폼 연결하기

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive and Google Drive" class="img-large img-center" />

## 마이그레이션 단계

### 1) 부서별로 전송하기

한쪽 창에는 OneDrive를, 다른 쪽 창에는 Google 공유 드라이브를 엽니다. 부서 단위로 마이그레이션을 진행하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Google Drive" class="img-large img-center" />

### 2) 대용량 배치는 야간에 예약하기

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule overnight migration" class="img-large img-center" />

### 3) 진행 상황 모니터링

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration" class="img-large img-center" />

### 4) 모든 배치 검증하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration" class="img-large img-center" />

## 마이그레이션 이후

- 전환 완충 기간으로 OneDrive를 2~4주간 활성 상태로 유지하세요
- 최종 폴더 비교를 실행하세요
- 사용자를 Google Drive로 전환 안내하세요
- OneDrive 계정을 해지하세요

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **OneDrive Business**와 **Google Workspace** 리모트를 추가하세요.
3. **부서별로 마이그레이션**하세요.
4. **검증 후 전환**하세요.

기업 마이그레이션, 시각적으로 통제하세요.

---

**관련 가이드:**

- [OneDrive에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [SharePoint에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-sharepoint-to-google-drive-rcloneview)
- [무중단 클라우드 마이그레이션](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)

<CloudSupportGrid />
