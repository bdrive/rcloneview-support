---
slug: mount-google-drive-local-drive-rcloneview
title: "RcloneView로 Windows & macOS에서 Google Drive를 로컬 드라이브로 마운트하기"
authors:
  - tayson
description: RcloneView를 사용해 복잡한 CLI 단계를 안내형 마운트, 캐싱, 자동화로 대체함으로써 월 4만 건 이상의 "Google Drive 마운트" 검색을 클릭 몇 번으로 끝나는 현실로 바꿔보세요.
keywords:
  - mount google drive windows
  - mount google drive mac
  - google drive local drive
  - rcloneview
  - rclone mount gui
  - google drive file stream alternative
  - map google drive letter
  - mount google drive finder
  - scheduler auto mount
  - multi cloud explorer
tags:
  - RcloneView
  - google-drive
  - mount
  - windows
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Windows & macOS에서 Google Drive를 로컬 드라이브로 마운트하기

> 매달 4만 명 이상이 "Google Drive 마운트"를 검색합니다. RcloneView는 CLI 위주였던 이 답을 캐싱, 자동 시작, GUI 모니터링을 갖춘 두 번의 클릭 워크플로우로 바꿔줍니다.

`rclone mount`는 강력하지만 진입 장벽이 있습니다. OAuth 토큰, 설정 비밀번호, WinFsp/macFUSE 설치, 긴 플래그 문자열, 재부팅 후 재실행 스크립트까지 필요하기 때문입니다. RcloneView는 이 모든 과정을 데스크톱 앱 하나로 묶어, 터미널 없이도 Google Drive(및 다른 모든 클라우드)를 Windows에서는 실제 드라이브 문자로, macOS에서는 Finder 볼륨으로 마운트할 수 있게 해줍니다.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## DIY CLI 마운트 대신 RcloneView를 선택해야 하는 이유

- **가이드형 OAuth**: 리모트 관리자가 안전한 브라우저를 실행하고 리프레시 토큰을 저장합니다(자세한 내용은 [리모트 관리자](/howto/rcloneview-basic/remote-manager) 참고).
- **드라이버 헬퍼**: WinFsp와 macFUSE 설치 안내가 설치 프로그램 안에 내장되어 있으며, RcloneView는 마운트를 누르기 전에 이를 검증합니다.
- **재사용 가능한 템플릿**: 마운트 관리자가 모든 Google Drive, 공유 드라이브, 그 외 리모트를 기억하므로 재부팅 후에도 토글 한 번으로 다시 마운트할 수 있습니다.
- **멀티 클라우드 제어**: Google Drive를 마운트하는 동안에도 같은 UI에서 Dropbox로 동기화하거나, S3 버킷을 비교하거나, 작업을 예약할 수 있습니다.
- **모니터링 및 스케줄러**: 내장된 스케줄러와 전송 모니터가 처리량을 보여주고, 원한다면 마운트를 자동으로 재시작합니다.

## 1단계 -- 데스크톱 준비하기

1. **RcloneView 설치** (rclone이 번들로 포함되어 있습니다). Windows에서는 WinFsp 프롬프트를 수락하고, macOS에서는 macFUSE를 설치하세요.
2. Google Drive가 표시될 **외부 드라이브 문자 또는 Finder 볼륨 이름을 지정**하세요(예: `G:` 또는 `/Volumes/GDrive`).
3. **캐싱 공간을 결정**하세요. 최소 몇 GB의 여유 공간이 있는 SSD 폴더를 선택하면, 이후 마운트 시 미리보기가 더 빨라집니다.

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## 2단계 -- Google Drive(및 다른 클라우드) 연결하기

- 리모트 관리자를 열고 **리모트 추가** -> **Google Drive**를 클릭하세요. [OAuth 온라인 로그인 추가](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)에 설명된 OAuth 안내를 따르세요.
- 리모트에 `gdrive-main`이라는 이름을 붙이세요(선택적으로 공유 드라이브나 Dropbox, OneDrive, S3 같은 다른 클라우드도 추가해 나중에 비교/동기화할 수 있습니다).
- [원격 저장소 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)를 사용해 자주 마운트할 폴더 프리셋(디자인, 재무, 공유 드라이브 등)을 만드세요.

  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
  


## 3단계 -- 탐색기 또는 마운트 관리자에서 Google Drive 마운트하기

1. 듀얼 패널 탐색기를 실행하고, Google Drive 리모트를 선택한 다음 툴바의 **마운트 아이콘**을 클릭하세요.
2. **드라이브 문자/볼륨**을 선택하고, 캐시 경로를 지정한 뒤 읽기/쓰기, 캐시 모드, 대역폭 제한을 토글하세요.
3. **마운트**를 누른 다음 파일 탐색기나 Finder를 열어 새 드라이브를 확인하세요.

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Google Drive from RcloneView Explorer" class="img-large img-center" />

마운트 관리자(도구 -> 마운트 관리자)는 자동 시작, 재연결, 로그인 시 실행 스위치와 함께 마운트 목록을 관리합니다. 여러 Google 계정을 동시에 노출시킬 수도 있는데, 이는 보통 여러 개의 명령 셸이 필요한 작업입니다.


## 4단계 -- 마운트를 넘어선 워크플로우 자동화

마운트는 첫 단계일 뿐입니다. RcloneView는 그 위에 멀티 클라우드 워크플로우를 쌓아 올립니다.

- 마운트를 유지한 채 [폴더 내용 비교](/howto/rcloneview-basic/compare-folder-contents)를 이용해 Google Drive와 로컬 SSD 또는 Dropbox를 **비교하고 정리**하세요.

  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

- 오프라인 백업을 위해 [동기화 작업 생성](/howto/rcloneview-basic/create-sync-jobs)과 [원격 저장소 동기화](/howto/rcloneview-basic/synchronize-remote-storages)를 이용해 전체 폴더를 외부 드라이브로 **동기화하거나 복사**하세요.

  <img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />
  

- 마운트된 Google Drive가 매일 밤 수동 클릭 없이 NAS나 Wasabi로의 동기화를 큐에 넣도록 해당 작업을 **예약**하세요([작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution) 참고).

  <img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />
  

- OneDrive, Dropbox, S3 등 **다른 클라우드를 나란히 마운트**하고, 마치 로컬 디스크인 것처럼 Finder 창 사이에서 파일을 드래그하세요.

## RcloneView로 가능해지는 사용 사례

- **디자이너 및 미디어 팀**: 전체 라이브러리를 로컬에 저장하지 않고도 Adobe나 DaVinci Resolve로 자산을 바로 스트리밍합니다.
- **개발자 및 DevOps**: 설정 파일을 위해 공유 드라이브를 마운트한 다음, 스테이징/프로덕션 버킷으로의 비교 또는 동기화 작업을 스크립트화합니다.
- **감사 및 컴플라이언스**: 검토자를 위해 Google Drive를 읽기 전용으로 마운트하는 동안, 스케줄러가 S3나 외부 드라이브에 변경 불가능한 복사본을 계속 저장하도록 합니다.
- **파워 유저**: Drive for Desktop을, 원하는 캐시 경로와 대역폭 제한, 로깅을 따르는 더 가벼운 마운트로 대체합니다.

## 문제 해결 및 FAQ

**여전히 CLI가 필요한가요?**  
아닙니다. RcloneView가 뒤에서 모든 `rclone mount` 플래그를 생성합니다. 고급 사용자는 작업 세부 정보를 열어 정확한 명령어를 확인할 수 있습니다.

**macOS 권한은 어떻게 되나요?**  
macFUSE에 대한 시스템 확장 프롬프트를 승인한 다음, Finder에서 볼륨이 보이지 않으면 마운트 관리자를 다시 확인하세요. 방법 가이드에는 권한 부여를 위한 스크린샷이 포함되어 있습니다.

**여러 Google 계정을 마운트할 수 있나요?**  
가능합니다. 리모트 관리자에서 계정마다 리모트를 하나씩 추가한 다음, 각각에 대한 마운트 항목을 생성하세요. RcloneView는 토큰을 계정별로 분리해서 관리하므로 `gdrive-marketing`과 `gdrive-personal`을 동시에 볼 수 있습니다.

Google Drive 마운트는 CLI 답변이 복잡하기 때문에 여전히 인기 검색어 상위권을 차지하고 있습니다. RcloneView는 이 4만 명 이상의 검색자에게 코드 없는 경로를 제공합니다. Google 계정을 한 번만 연결하고 마운트를 누르면, 이미 의존하고 있는 모든 멀티 클라우드 기능(비교, 동기화, 스케줄러)을 갖춘 안정적인 드라이브 문자나 Finder 볼륨을 얻게 됩니다. 최신 빌드를 다운로드하고 오늘 마운트 스크립트를 은퇴시키세요.

<CloudSupportGrid />
