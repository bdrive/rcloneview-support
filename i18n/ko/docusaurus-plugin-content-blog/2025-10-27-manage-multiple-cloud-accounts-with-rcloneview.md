---
slug: manage-multiple-cloud-accounts-rcloneview
title: "RcloneView로 여러 클라우드 계정을 하나의 화면에서 관리하기 (Google, OneDrive, Dropbox, S3)"
authors:
  - tayson
description: CLI를 사용하지 않고도 Google Drive, OneDrive, Dropbox, S3를 오가며 작업하세요. RcloneView는 여러 클라우드 계정을 하나로 통합해 직관적인 단일 인터페이스에서 데이터를 탐색, 전송, 동기화할 수 있게 해줍니다.
keywords:
  - rcloneview
  - multiple cloud accounts
  - google drive
  - onedrive
  - dropbox
  - s3
  - cloud sync
  - rclone gui
  - migrate files
tags:
  - RcloneView
  - cloud-sync
  - google-drive
  - onedrive
  - dropbox
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 여러 클라우드 계정을 하나의 화면에서 관리하기 (Google, OneDrive, Dropbox, S3)

> 모든 클라우드를 위한 하나의 깔끔한 대시보드—명령줄 없이 탐색, 비교, 전송, 자동화까지.

클라우드 스토리지가 여기저기 흩어지는 것은 실제로 흔한 문제입니다. 개인용 Gmail과 업무용 Google 계정, Microsoft 365에 연결된 OneDrive, 여전히 협력사와 공유 중인 예전 Dropbox, 그리고 아카이브용 S3 버킷까지. 여러 포털에 로그인하고 로그아웃하는 것은 시간을 낭비하게 만들고 무엇이 어디에 있는지 놓치기 쉽게 만듭니다. RcloneView는 rclone 기반의 단일 시각적 탐색기로 모든 계정을 한데 모아 이 문제를 해결합니다—미리보기, 드라이런, 예약 작업을 통해 프로바이더 간 이동을 자신 있게 할 수 있습니다.

<!-- truncate -->

RcloneView를 사용하면 `rclone config`를 배우거나 플래그를 외울 필요가 없습니다. 앱이 각 계정을 한 번만 연결하도록 안내하고, 이후에는 그 연결을 복사, 비교, 동기화 워크플로우에서 재사용할 수 있습니다. 다음과 같은 사용자에게 이상적입니다:

- 계정 간 파일을 드래그해서 옮기고 싶은 일반 사용자
- 여러 클라우드에 흩어진 프로젝트 데이터를 통합하는 엔지니어
- 다중 계정 백업과 마이그레이션을 표준화하려는 IT 관리자

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

### 문제 이해하기

- 파편화된 UI: 각 프로바이더는 자체 웹 콘솔을 가지고 있으며 대량 작업에 제한이 있습니다.
- 서로 다른 API와 할당량: Google, Microsoft, Dropbox, S3는 대규모 이동 작업 중 각각 다르게 동작합니다.
- 감사와 반복 가능성: 브라우저에서 일회성으로 수동으로 드래그하는 대신 미리보기, 로그, 예약 실행이 필요합니다.

### 통합 인터페이스가 바꾸는 것

- 하나의 탐색기: 여러 계정을 나란히 열기—재로그인 반복 없이
- 비교 우선: 복사하기 전에 차이점을 확인—중복과 예상치 못한 결과를 방지
- 작업과 이력: 동기화를 저장하고, 업무 외 시간에 실행을 예약하며, 감사 추적을 유지

| 방식                          | 작업 위치              | 차이점 미리보기      | 예약 및 반복       | 다중 프로바이더         |
| ---------------------------- | --------------------- | ------------------- | ----------------- | ------------------ |
| 네이티브 클라우드 웹 UI        | 별도의 브라우저 탭      | 제한적               | 수동               | 프로바이더 전용        |
| RcloneView 다중 계정 GUI       | 단일 데스크톱 앱        | 가능 (비교)           | 가능 (작업)         | 모든 rclone 백엔드     |



## 준비하기

1. 계정과 목표 정리: 사용 중인 계정(예: 개인용 Google Drive, 업무용 OneDrive, Dropbox, S3/Wasabi/R2)을 나열하고 통합, 백업, 재구성 중 무엇을 하고 싶은지 정합니다.
2. 접근 권한 확인: 필요한 경우 로그인 접근 권한이나 API 키가 필요합니다.
3. 작게 시작하기: 작은 폴더로 테스트하고, 규모를 키우기 전에 미리보기와 결과를 검증합니다.

유용한 링크

- [Google OAuth 빠른 설정](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Microsoft/SharePoint 로그인](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
- [S3/Wasabi/R2 설정](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2 자격 증명](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [Dropbox OAuth 설정](/howto/remote-storage-connection-settings/add-oath-online-login)

## RcloneView에서 계정 연결하기

RcloneView는 rclone의 설정을 친절한 마법사로 감싸줍니다. 각 클라우드를 한 번만 추가하면 왼쪽 탐색기에 표시되어 재사용할 수 있습니다.

1. RcloneView를 열고 → `+ New Remote`를 클릭합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2. 프로바이더를 선택하고 안내에 따릅니다:
   - Google Drive: OAuth로 로그인하고 명확하게 이름을 지정합니다(예: `Drive-Personal`, `Drive-Work`). 참고: [OAuth 로그인 가이드](/howto/remote-storage-connection-settings/add-oath-online-login)
   - OneDrive/SharePoint: Microsoft 계정으로 로그인합니다. 참고: [Microsoft/SharePoint 설정](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
   - Dropbox: RcloneView Dropbox OAuth 마법사를 사용해 연결합니다. 참고: [OAuth 로그인 가이드](/howto/remote-storage-connection-settings/add-oath-online-login)
   - S3/Wasabi/R2: 엔드포인트/리전과 키를 설정합니다. → [S3 연결 설정](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2 자격 증명](/howto/cloud-storage-setting/cloudflare-r2-credential)
3. 각 계정마다 반복합니다. 여러 리모트를 동시에 열어 나란히 탐색할 수 있습니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 예상치 못한 문제 없이 이동 및 동기화하기

RcloneView는 연결한 모든 계정에 걸쳐 동일한 세 가지 패턴을 지원합니다. 작은 파일럿 폴더로 시작한 다음 규모를 키우세요.

### 드래그 앤 드롭

왼쪽에서 소스를, 오른쪽에서 대상을 열고 파일이나 폴더를 드래그해서 옮깁니다.

참고: [드래그 앤 드롭으로 파일 복사하기](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### 복사 전 비교하기

비교(Compare)를 실행하여 서로 다른 프로바이더 간에도 두 폴더 사이의 신규, 변경, 누락 항목을 나열합니다. 건너뛰고 싶은 항목의 선택을 해제한 다음 복사합니다.

참고: [비교 결과와 파일 관리](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Preview and select differences before copying" class="img-large img-center" />

### 동기화 및 예약

동기화(Sync)를 사용해 선택한 폴더를 계정 간에 미러링합니다. 항상 드라이런을 먼저 실행한 다음, 작업을 저장하고 업무 외 시간에 실행되도록 예약하세요. 진행 상황과 이력은 작업 관리자(Job Manager)에서 모니터링할 수 있습니다.

참고: [원격 스토리지 동기화](/howto/rcloneview-basic/synchronize-remote-storages), [동기화 작업 생성](/howto/rcloneview-basic/create-sync-jobs), [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure and run a sync job in RcloneView" class="img-large img-center" />

## 실전 활용 사례

- 개인용 + 업무용 Google Drive: 예약된 동기화와 명확한 로그를 통해 업무용 계정에 선택한 개인 폴더의 읽기 전용 미러를 유지하거나 그 반대로 유지합니다.
- OneDrive ↔ Google Drive 팀 인수인계: 비교(Compare)를 사용해 전환을 준비한 다음, 대상이 정본(source of truth)이 될 때까지 매일 밤 동기화(Sync)합니다.
- Dropbox 정리 및 아카이브: 자주 쓰지 않는 공유 항목을 S3/Wasabi 버킷으로 드래그해 더 저렴하게 보관하면서도 협업자를 위한 온라인 사본을 유지합니다.
- 다중 클라우드 백업: Drive/OneDrive에서 일상적인 협업을 유지하면서 S3 호환 버킷에 암호화된 아카이브를 유지합니다. 클라이언트 측 암호화가 필요하면 rclone `crypt`와 함께 사용하세요. 참고: /blog/encrypt-cloud-backups-google-drive-onedrive-s3-with-rcloneview

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-account jobs in RcloneView" class="img-large img-center" />

## 원활한 운영을 위한 팁

- 리모트 이름을 명확하게 지정하세요: `Drive-Personal`, `Drive-Work`, `OneDrive-DeptA`, `Dropbox-Shared`, `S3-Archive`.
- 먼저 파일럿을 진행하세요: 대량 작업 전에 소규모 샘플을 비교하고 복사합니다.
- 할당량을 고려하세요: Google Drive의 업로드/복사 제한과 API 제한(스로틀링)은 대규모 실행에 영향을 줄 수 있으니, 가능하면 야간에 예약하세요.
- 감사 추적을 유지하세요: 변경 사항 추적을 위해 작업 이력(Job History)에서 로그를 내보내세요.

## 마무리

RcloneView는 뒤죽박죽인 로그인과 브라우저 탭들을 하나의 신뢰할 수 있는 작업 공간으로 바꿔줍니다. 모든 계정을 한 번만 연결하고, 모든 변경 사항을 미리보고, 반복되는 작업은 명령어 한 줄 작성하지 않고도 자동화하세요. 개인 데이터를 통합하든, 팀 인수인계를 조율하든, IT 마이그레이션을 실행하든, 통합된 다중 계정 GUI는 클라우드 작업을 더 빠르고 안전하게 만들어줍니다.

특정 프로바이더 설정에 도움이 필요하신가요? 다음 문서를 확인해 보세요:

- 리모트 관리자 개요: [리모트 관리자](/howto/rcloneview-basic/remote-manager)
- 실시간 전송 모니터링: [실시간 전송 모니터링](/howto/rcloneview-basic/real-time-transfer-monitoring)
- 클라우드를 로컬 드라이브로 마운트하기: [클라우드 스토리지를 로컬 드라이브로 마운트하기](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
