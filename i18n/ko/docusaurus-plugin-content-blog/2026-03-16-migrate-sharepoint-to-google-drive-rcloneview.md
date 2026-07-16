---
slug: migrate-sharepoint-to-google-drive-rcloneview
title: "SharePoint에서 Google Drive로 마이그레이션 — RcloneView로 문서 라이브러리 전송하기"
authors:
  - tayson
description: "Microsoft 365에서 Google Workspace로 전환하시나요? RcloneView를 사용해 SharePoint 문서 라이브러리와 OneDrive 파일을 Google Drive와 공유 드라이브로 전송하세요."
keywords:
  - sharepoint to google drive
  - migrate sharepoint to gdrive
  - sharepoint migration tool
  - microsoft to google migration
  - sharepoint to google workspace
  - sharepoint document library transfer
  - office 365 to google
  - sharepoint google drive sync
  - cross platform cloud migration
  - enterprise cloud migration
tags:
  - sharepoint
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SharePoint에서 Google Drive로 마이그레이션 — RcloneView로 문서 라이브러리 전송하기

> 조직이 Microsoft 365에서 Google Workspace로 이전하고 있습니다. SharePoint 라이브러리, OneDrive 개인 파일, 그리고 수년간 쌓인 팀 문서를 모두 손상 없이 Google Drive로 옮겨야 합니다. 방법을 알아보겠습니다.

SharePoint에서 Google Drive로 마이그레이션하는 것은 가장 흔한 기업용 클라우드 마이그레이션 중 하나를 반대 방향으로 수행하는 작업입니다. 비용, 플랫폼 선호도, 조직 변화 등 어떤 이유로 진행하든 과제는 동일합니다. 구조화된 문서 라이브러리에 있는 수천 개의 파일을 Google Drive와 공유 드라이브로 깔끔하게 전송해야 합니다. RcloneView는 양쪽 플랫폼을 모두 네이티브로 지원합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 마이그레이션 계획하기

### 구조 매핑

| SharePoint | Google Workspace |
|-----------|-----------------|
| 문서 라이브러리 | 공유 드라이브 |
| OneDrive (개인) | 내 드라이브 (개인) |
| 팀 사이트 | 팀별 공유 드라이브 |
| 공유 파일 | 공유 드라이브 폴더 |

### 두 플랫폼 모두 연결하기

<img src="/support/images/en/blog/new-remote.png" alt="Connect SharePoint and Google Drive" class="img-large img-center" />

RcloneView에 SharePoint/OneDrive 계정과 Google Drive 계정을 추가합니다.

## 마이그레이션 단계

### 1) 문서 라이브러리 전송

한쪽 창에는 SharePoint를, 다른 쪽 창에는 Google 공유 드라이브를 엽니다. 라이브러리 단위로 전송합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SharePoint to Google Drive transfer" class="img-large img-center" />

### 2) 개인 OneDrive 파일 마이그레이션

각 사용자의 OneDrive 파일을 해당 사용자의 Google Drive 내 드라이브로 이동합니다.

### 3) 완전성 검증

폴더 비교 기능으로 모든 파일이 전송되었는지 확인합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration" class="img-large img-center" />

### 4) 대규모 마이그레이션은 야간에 예약하기

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule overnight migration" class="img-large img-center" />

### 5) 진행 상황 모니터링

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

## 중요 고려 사항

- **파일 형식 변환**: Google은 Office 파일을 네이티브로 볼 수 있으므로, Google Docs 형식으로의 변환은 선택 사항입니다
- **권한 매핑**: 파일 권한은 자동으로 전송되지 않습니다 — 공유 드라이브 권한은 별도로 계획하세요
- **경로 길이**: SharePoint는 예상보다 긴 경로를 허용합니다 — 호환성을 확인하세요
- **대규모 라이브러리**: 부서 또는 프로젝트 단위로 배치를 나누세요

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **SharePoint**와 **Google Drive** 리모트를 추가합니다.
3. 라이브러리를 공유 드라이브에 **매핑**합니다.
4. 배치 단위로 **전송하고 검증**합니다.

깔끔한 플랫폼 전환, 데이터 손실 없음.

---

**관련 가이드:**

- [Google Workspace에서 Microsoft 365로 마이그레이션](https://rcloneview.com/support/blog/migrate-google-workspace-to-microsoft-365-rcloneview)
- [무중단 클라우드 마이그레이션](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
