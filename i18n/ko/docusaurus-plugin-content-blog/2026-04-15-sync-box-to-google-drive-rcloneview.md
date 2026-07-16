---
slug: sync-box-to-google-drive-rcloneview
title: "Box를 Google Drive와 동기화 — RcloneView로 하는 클라우드 백업"
authors:
  - tayson
description: "RcloneView로 Box를 Google Drive와 동기화하세요 — 파일을 전송하고, 백업을 자동화하고, 간단한 클라우드 간 GUI로 두 플랫폼을 모두 최신 상태로 유지할 수 있습니다."
keywords:
  - Box to Google Drive sync
  - Box to Google Drive migration
  - cloud sync tool
  - RcloneView Box
  - Box backup
  - Google Drive archive
  - cloud-to-cloud sync
  - enterprise cloud transfer
  - Box Google Drive workflow
  - Box content migration
tags:
  - RcloneView
  - box
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box를 Google Drive와 동기화 — RcloneView로 하는 클라우드 백업

> Box는 엔터프라이즈 컴플라이언스와 안전한 공유를 담당하고, Google Drive는 협업 편집의 기반이 됩니다 — RcloneView는 로컬 디스크를 거치지 않고 두 플랫폼 간 콘텐츠를 직접 동기화합니다.

Box는 컴플라이언스 제어와 안전한 파일 공유 기능으로 엔터프라이즈 환경에서 널리 사용되며, Google Drive는 실시간 협업 워크플로우의 기반이 됩니다. 팀이 두 플랫폼을 함께 사용하거나 Box에서 다른 플랫폼으로 통합하려는 경우, 콘텐츠를 동기화 상태로 유지하거나 플랫폼 간 파일을 마이그레이션하려면 신뢰할 수 있는 클라우드 간 도구가 필요합니다. RcloneView는 로컬 디스크로 다운로드할 필요 없이 Box와 Google Drive를 직접 연결합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box와 Google Drive 연결하기

Box와 Google Drive 모두 RcloneView에서 OAuth 브라우저 인증을 사용합니다. **Remote 탭 > New Remote**로 이동하여 **Box**를 선택하고 브라우저 로그인을 완료하세요. **Google Drive**에 대해서도 같은 과정을 반복합니다. 이후 두 리모트가 탐색기 패널에 탭으로 표시되어 바로 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Google Drive remotes in RcloneView" class="img-large img-center" />

**Box for Business** 계정의 경우, 리모트를 생성할 때 `box_sub_type` 설정을 `enterprise`로 구성하세요. 이렇게 하면 RcloneView가 개인 저장소가 아닌 조직의 Box 계정에 연결되어 공유 폴더와 비즈니스 소유 콘텐츠에 접근할 수 있습니다.

## 동기화 작업 실행하기

**Job Manager**에서 새 동기화 작업을 생성합니다. 소스는 Box 폴더(또는 `/Projects/2026`과 같은 특정 하위 폴더)이고, 대상은 목표 Google Drive 폴더입니다. RcloneView의 동기화는 기본적으로 단방향이며, 소스 콘텐츠를 수정하지 않고 소스를 대상에 미러링합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive sync job in RcloneView" class="img-large img-center" />

완료된 사건 파일을 장기 보관을 위해 Box에서 Google Drive로 동기화하는 법무팀의 경우, 파일 연령으로 필터링(Job 설정 3단계의 Max File Age)하면 최근에 수정된 파일만 동기화 대상으로 제한하여 전송 크기를 적절하게 유지할 수 있습니다. **Dry Run** 미리보기는 실제 데이터가 변경되기 전에 정확히 어떤 파일이 이동할지 확인해 줍니다.

## 자동화 및 모니터링

PLUS 라이선스가 있으면 Box-to-Google Drive 동기화를 예약하여 두 플랫폼을 항상 최신 상태로 유지할 수 있습니다. cron 기반 일정(예: 매주 일요일 자정)을 설정하면 사용자 개입 없이 동기화가 자동으로 실행됩니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Box to Google Drive sync in RcloneView" class="img-large img-center" />

RcloneView의 **1:N 동기화** 기능을 사용하면 하나의 Box 폴더에서 여러 Google Drive 대상으로 동시에 동기화할 수도 있습니다 — 동일한 콘텐츠를 공유 Team Drive와 개인 보관 폴더에 한 번의 작업으로 백업할 때 유용합니다. **Job History**는 전송된 파일 수, 소요 시간, 속도, 상태 등 각 실행에 대한 상세 통계를 추적합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Box** 리모트(OAuth)와 **Google Drive** 리모트(OAuth)를 추가합니다.
3. **Job Manager**를 열고 Box 폴더에서 Google Drive로의 동기화 작업을 생성합니다.
4. 예약 기능(PLUS)을 활성화하여 정기 동기화를 자동화합니다.

RcloneView를 통해 Box를 Google Drive와 동기화하면 별도의 수작업 없이도 두 플랫폼을 정리되고 접근 가능한 상태로 유지하면서 콘텐츠를 안정적으로 플랫폼 간에 이동시킬 수 있습니다.

---

**관련 가이드:**

- [Box 클라우드 스토리지 관리 — RcloneView로 하는 동기화 및 백업](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [RcloneView로 하는 무중단 Box에서 Dropbox 마이그레이션](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [RcloneView로 Box를 SharePoint 및 OneDrive로 마이그레이션](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)

<CloudSupportGrid />
