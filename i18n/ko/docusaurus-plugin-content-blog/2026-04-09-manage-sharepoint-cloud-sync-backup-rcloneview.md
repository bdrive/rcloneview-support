---
slug: manage-sharepoint-cloud-sync-backup-rcloneview
title: "RcloneView로 SharePoint 파일 및 클라우드 동기화 관리하기"
authors:
  - tayson
description: "RcloneView로 SharePoint Online 파일을 관리하세요. 시각적 GUI를 사용하여 SharePoint 문서 라이브러리와 다른 클라우드 제공업체 간에 데이터를 동기화, 백업, 전송할 수 있습니다."
keywords:
  - rcloneview
  - sharepoint sync rcloneview
  - sharepoint backup
  - sharepoint file manager
  - sharepoint cloud sync tool
  - sharepoint to google drive
  - sharepoint rclone gui
  - sharepoint document library backup
  - sharepoint multi-cloud
  - sharepoint automated backup
tags:
  - RcloneView
  - sharepoint
  - cloud-storage
  - cloud-sync
  - guide
  - backup
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 SharePoint 파일 및 클라우드 동기화 관리하기

> SharePoint Online은 Microsoft 365 전반의 문서 관리를 지원하지만, 해당 콘텐츠를 외부 클라우드나 NAS로 동기화하려면 전용 도구가 필요합니다 — **RcloneView**가 그 간극을 메워줍니다.

SharePoint Online은 Microsoft 365를 사용하는 수백만 조직의 문서 관리 기반입니다. 각 SharePoint 사이트에는 팀 파일, 프로젝트 자산, 회사 기록을 저장하는 문서 라이브러리가 있습니다. 기본 제공되는 OneDrive 동기화 클라이언트로 SharePoint 라이브러리를 로컬 머신에 동기화할 수는 있지만, AWS S3, Google Drive, 외부 스토리지로 데이터를 복제하는 기능은 제공하지 않습니다. RcloneView는 Microsoft Graph API를 통해 SharePoint Online에 연결하고, 문서 라이브러리를 탐색 가능한 리모트로 노출합니다 — SharePoint와 다른 어떤 제공업체 사이에서도 찾아보기, 동기화, 복사, 이동, 백업 예약이 가능합니다.

규정 준수가 중요한 라이브러리를 불변 S3 스토리지에 백업해야 하든, 퇴사하는 팀의 SharePoint 사이트를 Google Workspace로 마이그레이션해야 하든, RcloneView는 시각적 인터페이스를 통해 이를 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 SharePoint 연결하기

RcloneView의 SharePoint 리모트는 OneDrive 리모트 유형을 통해 구성됩니다. OAuth 인증 과정에서 OneDrive Personal이나 Business 대신 **SharePoint site**를 선택하세요. RcloneView는 Graph API에 사용 가능한 사이트를 조회하고, 대상 사이트와 문서 라이브러리를 선택할 수 있게 해줍니다.

각 문서 라이브러리는 별도의 탐색 가능한 경로로 표시됩니다. 조직에 마케팅, 엔지니어링, 법무, 인사 등 수십 개의 SharePoint 사이트가 있다면, 각각을 별도의 리모트로 추가하거나 하나의 리모트 구성 내에서 라이브러리 간에 전환할 수 있습니다.

SharePoint의 API 조절(throttling)은 OneDrive for Business와 동일한 패턴을 따릅니다 — Retry-After 헤더가 포함된 429 응답입니다. RcloneView는 이를 자동으로 준수하며, 지수 백오프(exponential backoff)를 사용해 수동 개입 없이 대규모 전송이 완료되도록 합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a SharePoint remote in RcloneView Remote Manager" class="img-large img-center" />

## SharePoint 문서 라이브러리 탐색하기

SharePoint 문서 라이브러리에는 중첩된 폴더 구조, 메타데이터 열, 버전 관리된 파일이 포함될 수 있습니다. RcloneView의 탐색기는 익숙한 2단 레이아웃으로 폴더 트리와 파일 목록을 표시합니다. 깊은 폴더 계층 구조를 탐색하고, 여러 폴더에 걸쳐 파일을 선택하고, 복사, 이동, 삭제, 다운로드와 같은 일괄 작업을 수행할 수 있습니다.

SharePoint는 다른 많은 제공업체보다 엄격한 파일명 제한을 적용합니다. `#`, `%`, `*`와 같은 문자는 허용되지 않으며, 경로 길이는 400자로 제한됩니다. Google Drive나 로컬 파일 시스템처럼 제한이 덜한 제공업체에서 SharePoint로 동기화할 때, RcloneView는 전송 실패를 방지하기 위해 제한된 문자를 자동으로 인코딩하거나 대체합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing SharePoint document libraries in RcloneView two-pane explorer" class="img-large img-center" />

## SharePoint를 다른 클라우드 제공업체와 동기화하기

조직은 재해 복구를 위한 보조 클라우드, 로컬 액세스를 위한 NAS, 플랫폼 마이그레이션 중의 다른 클라우드 제품군 등 외부 시스템으로 SharePoint 데이터를 복제해야 하는 경우가 많습니다. RcloneView는 이를 간단하게 만들어 줍니다.

한쪽 창에는 SharePoint 라이브러리를, 다른 쪽 창에는 대상(AWS S3, Google Drive, Backblaze B2, 로컬 경로)을 여세요. RcloneView는 크기와 수정 시간을 기준으로 파일 목록을 비교하여 변경된 파일만 전송합니다. 수천 개의 파일이 있는 초기 마이그레이션의 경우, 멀티스레드 전송과 조정 가능한 청크 크기를 통해 프로세스를 효율적으로 유지합니다.

SharePoint는 OneDrive for Business와 동일한 알고리즘인 QuickXorHash로 파일 해시를 저장합니다. RcloneView는 QuickXorHash를 네이티브로 지원하여, 비교를 위해 파일 콘텐츠를 다운로드하지 않고도 정확한 변경 사항 감지가 가능합니다.

## 자동화된 SharePoint 백업 예약하기

SharePoint에 내장된 보존 정책과 휴지통은 어느 정도 보호 기능을 제공하지만, 이는 Microsoft 생태계 내에서만 작동합니다. Microsoft 365 테넌트를 손상시키는 랜섬웨어 공격은 다른 모든 것과 함께 SharePoint 데이터에도 영향을 미칠 수 있습니다. 별도의 제공업체에 대한 독립적인 백업이 가장 강력한 보호책입니다.

RcloneView의 스케줄러는 이를 자동화합니다. 버전 관리가 활성화된 AWS S3로 SharePoint 문서 라이브러리를 야간에 동기화하는 작업을 구성하면, 나머지는 RcloneView가 처리합니다. 작업 기록 패널은 모든 실행을 전송 통계와 함께 기록하여, 백업이 성공적으로 완료되고 있는지 쉽게 확인할 수 있습니다.

규정 준수가 중요한 조직의 경우, 예약된 SharePoint 백업을 S3 Object Lock이나 Backblaze B2의 파일 잠금 기능과 결합하면 데이터 보존에 대한 규제 요건을 충족하는 불변 아카이브를 만들 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated SharePoint backup in RcloneView" class="img-large img-center" />

## 폴더 비교 및 마이그레이션 검증하기

SharePoint 라이브러리를 동기화하거나 마이그레이션한 후, RcloneView의 비교 기능을 사용하여 완전성을 검증하세요. SharePoint 소스와 백업 대상을 선택하면, RcloneView는 한쪽에만 존재하는 파일, 서로 다른 파일, 동일한 파일을 강조 표시합니다. 이 시각적 검증을 통해 추측 없이 원본을 폐기하기 전에 데이터 무결성을 보장할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SharePoint library with backup destination in RcloneView" class="img-large img-center" />

## SharePoint를 로컬 드라이브로 마운트하기

RcloneView는 SharePoint 문서 라이브러리를 로컬 드라이브 문자(Windows) 또는 마운트 지점(macOS/Linux)으로 마운트할 수 있습니다. 이를 통해 OneDrive 동기화 클라이언트의 부담 없이 CAD 소프트웨어, 이미지 편집기, 분석 도구 등 모든 데스크톱 애플리케이션에서 SharePoint 파일에 액세스할 수 있습니다.

최근에 액세스한 파일을 로컬에 저장하여 빠른 반복 액세스가 가능하도록 VFS 캐싱을 활성화하세요. 이는 클라우드 스토리지를 네이티브로 지원하지 않는 애플리케이션에서 SharePoint에 호스팅된 파일로 작업해야 하는 팀에게 특히 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting SharePoint as a local drive in RcloneView" class="img-large img-center" />

## 전송 모니터링하기

대규모 SharePoint 마이그레이션에는 수십만 개의 파일이 포함될 수 있습니다. RcloneView의 실시간 모니터링 대시보드는 전송 속도, 파일별 진행 상황, 전체 완료율을 보여줍니다. 개별적으로 전송을 일시 중지, 재개, 취소할 수 있습니다. 대역폭 제한을 통해 업무 시간 동안 SharePoint 전송이 전체 네트워크 연결을 소모하는 것을 방지할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time SharePoint transfer monitoring in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OAuth를 통해 Microsoft 365 계정을 인증하고 SharePoint 사이트와 문서 라이브러리를 선택하세요.
3. 2단 탐색기에서 SharePoint 라이브러리를 탐색하고 다른 제공업체로의 동기화 또는 복사 작업을 설정하세요.
4. S3, B2 또는 다른 클라우드에 독립적인 사본을 유지하도록 일일 백업을 예약하세요.

SharePoint는 Microsoft 365 내에서 문서 관리를 처리하지만, RcloneView는 사용하는 모든 클라우드에서 SharePoint 데이터가 백업되고, 이동 가능하며, 접근 가능하도록 보장합니다.

---

**관련 가이드:**

- [브라우저 기반 로그인(OAuth)으로 리모트 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [원격 스토리지 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
