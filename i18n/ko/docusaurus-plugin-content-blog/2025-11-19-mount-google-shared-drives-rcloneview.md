---
slug: mount-google-shared-drives-rcloneview
title: "RcloneView로 Windows & macOS에서 Google 공유 드라이브 마운트하기 -- 동기화 클라이언트 없이 완전한 접근"
authors:
  - tayson
description: RcloneView의 안내형 워크플로우로 모든 Google 공유 드라이브를 Finder나 파일 탐색기에 바로 마운트하세요. Drive for Desktop의 제약을 넘어서면서도 관리자 수준의 제어를 유지할 수 있습니다.
keywords:
  - google shared drive mount
  - mount shared drive windows
  - mount shared drive mac
  - rcloneview
  - rclone mount google drive
  - team drive windows
  - shared drive explorer
  - google workspace shared drive
  - rclone gui
  - mount team drive
tags:
  - google-drive
  - mount
  - productivity
  - workspace
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Windows & macOS에서 Google 공유 드라이브 마운트하기 -- 동기화 클라이언트 없이 완전한 접근

> 노트북에 전체 동기화 클라이언트를 강제로 설치하지 않고도 모든 팀에 필요한 공유 드라이브를 제공하세요.

Google Workspace 공유 드라이브에는 흔히 디자인 자산, 인수인계 폴더, 컴플라이언스 아카이브가 담겨 있지만, Drive for Desktop은 작은 캐시만 유지하며 사용자당 수십 개의 공유 드라이브를 다루는 데 어려움을 겪습니다. RcloneView는 rclone의 공유 드라이브 지원을 기반으로 구축되어, 필요한 드라이브를 Windows에서는 실제 드라이브 문자로, macOS에서는 Finder 볼륨으로 정확히 마운트할 수 있으며 자동 마운트와 VFS 캐싱이 기본 내장되어 있습니다.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 팀이 Drive for Desktop 없이 공유 드라이브 마운트가 필요한 이유

- Drive for Desktop은 드라이브 전체를 미러링하여 SSD 용량을 소모하고, 할당량에 도달하면 노트북이 오프라인 상태가 됩니다.
- 헬프데스크는 계정 전체의 동기화 권한을 부여하지 않고서는 계약직 직원에게 공유 드라이브 하나만 전달할 방법이 없습니다.
- 엔지니어와 미디어 팀은 자동화, 스크립트, 크리에이티브 앱을 위해 예측 가능한 경로(X:\Marketing 또는 /Volumes/Archive)가 필요합니다.

## RcloneView가 Windows & macOS에 공유 드라이브를 제공하는 방법

RcloneView는 rclone 위에 GUI를 얹어, 공유 드라이브 선택, 인증 토큰, 마운트 플래그를 대신 처리해 줍니다.

- 안내형 리모트 마법사는 Google Workspace 계정이 접근할 수 있는 모든 공유 드라이브를 나열하고 안전하게 저장합니다. 참고 단계는 [/support/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)에서 확인하세요.
- Mount Manager는 [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)에 설명된 옵션을 그대로 보여주므로 CLI 문법을 외울 필요가 없습니다.
- 자동 마운트는 Mount 대화 상자에 있으며, 로그인 시 실행은 Settings -> General에서 사용할 수 있습니다(자세한 내용은 [/support/howto/rcloneview-basic/general-settings](/howto/rcloneview-basic/general-settings) 참고).

## 마운트 전에 필요한 것

| 요구 사항 | 세부 내용 |
| --- | --- |
| RcloneView + Rclone | 최신 RcloneView 번들을 설치하세요(rclone 포함). |
| 파일 시스템 드라이버 | Windows는 WinFsp(번들 포함)를 사용합니다. macOS는 macFUSE가 필요하며, RcloneView 내부의 안내를 따르세요. 한도 조정은 [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos)를 확인하세요. |


## 단계별 안내: RcloneView로 Google 공유 드라이브 마운트하기

이 단계들은 관리자가 CLI에서 이미 수행하던 작업을 친숙한 마법사 형태로 그대로 재현하여, 헬프데스크가 빠르게 반복할 수 있도록 합니다.

### 1단계 -- Google Workspace 계정 연결하기

1. **Remote Manager** -> **+ New Remote**를 엽니다.
2. **Google Drive** -> **OAuth (Browser)**를 선택합니다.
3. 브라우저 로그인이 완료되면 RcloneView가 리프레시 토큰을 로컬에 저장하여 공유 드라이브 인증 상태를 유지합니다.

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


### 2단계 -- 원하는 공유 드라이브 선택하기

1. "Configure this as a Shared Drive?" 라는 메시지가 표시되면 **Yes**를 선택합니다.
2. RcloneView는 Google이 반환한 모든 공유 드라이브를 나열합니다. 번호를 입력하거나 검색하여 원하는 드라이브를 선택하세요.
3. `shared_marketing`처럼 알아보기 쉬운 이름으로 리모트를 저장하면 팀원들이 즉시 어떤 내용인지 알 수 있습니다.

### 3단계 -- 마운트 프로필 구성하기

1. **Mount Manager**로 이동합니다(또는 Remote Explorer 안의 마운트 아이콘을 클릭).
2. 공유 드라이브 리모트를 선택하고 마운트할 폴더(루트 또는 하위 폴더)를 지정합니다.
3. 마운트 대상과 옵션을 설정합니다:
   - **Target**: `Auto`를 유지하거나 **Mount to local path**로 고정 드라이브 문자/마운트 경로를 지정합니다.
   - **Auto mount**: RcloneView가 실행 시 다시 마운트하도록 활성화합니다(Settings의 로그인 시 실행과 함께 사용).
   - **Advanced options**: **Volume name**(선택적 레이블), **Mount type**(기본값 `cmount`), **Network drive**(Windows), **Allow other**(Linux), 쓰기를 막으려면 **Read only**를 설정합니다.
   - **Cache options**: **Cache mode**(호환성이 가장 좋은 `full`)를 선택하고, 대화 상자에 표시되는 나노초 값을 사용해 **Cache max size**, **Cache max age**, **Dir cache time**을 설정합니다.

### 4단계 -- 실행 및 확인하기

1. **Save & Mount**를 클릭합니다. 마운트가 활성화되면 상태 칩이 초록색으로 바뀝니다.
2. 파일 탐색기나 Finder에서 새 드라이브를 엽니다. 공유 드라이브 폴더가 보여야 하며, 큰 디렉터리는 **Dir cache time** 설정에 따라 디렉터리 캐시가 채워지는 동안 시간이 걸릴 수 있습니다.
3. Mount Manager를 사용해 마운트 해제, 마운트된 폴더 열기, 설정 편집을 할 수 있습니다.

## 성능 및 접근 관련 팁

- 가장 매끄러운 편집 경험을 위해 **Cache mode**를 **Full**로 설정하고 **Cache max size**를 넉넉하게 지정하세요.
- 재무/법무 드라이브에는 실수로 인한 삭제를 방지하기 위해 **Read only**를 사용하고, 필요할 때 별도의 쓰기 가능한 마운트를 만드세요.
- 변경 빈도에 따라 **Dir cache time**을 조정하세요(활발한 드라이브는 짧게, 아카이브는 길게).
- 스크립트와 애플리케이션이 항상 같은 마운트를 찾을 수 있도록 고정된 **Target** 또는 **Mount to local path**를 재사용하세요.

## 접근 자동화, 공유, 보안 유지

RcloneView는 여러 기기에서 공유 드라이브 마운트를 일관되게 유지할 수 있게 해줍니다:

- 각 마운트에서 **Auto mount**를, Settings에서 **Launch at login**을 활성화하여 OS가 시작될 때 드라이브가 바로 준비되도록 하세요.
- Job Scheduler를 사용해 업무 시간 이후 공유 드라이브 콘텐츠를 S3/Wasabi로 미러링하여 오프사이트 보관을 수행하세요.
- 사용자가 Office나 Adobe를 열기 전에 Mount Manager 상태(Mounted vs. Unmounted)를 확인하여 연결 상태를 점검하세요.

## 문제 해결 & FAQ

| 증상 | 원인 추정 | 해결 방법 |
| --- | --- | --- |
| 절전 모드 이후 드라이브가 사라짐 | OS가 WinFsp/macFUSE를 마운트 해제함 | **Auto mount**와 **Launch at login**을 활성화하여 시작 시 RcloneView가 다시 마운트하도록 하세요. |
| 파일 열기가 느림 | 캐시가 너무 작거나 느린 디스크에 있음 | **Cache max size**를 늘리고 **Cache mode**를 Full로 유지하세요. |
| macOS에서 권한 오류 | FUSE에 전체 디스크 접근 권한이 없음 | RcloneView와 macFUSE에 전체 디스크 접근 권한을 부여한 뒤 마운트를 재시작하세요(Apple 메뉴 -> System Settings -> Privacy & Security). |
| `too many open files` | macOS ulimit 기본값 256 | [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos)의 plist 튜닝을 적용하세요. |
| 공유 드라이브 목록이 비어 있음 | Workspace 관리자가 Drive API를 비활성화함 | Google Admin에서 Drive API를 다시 활성화하거나 공유 드라이브에 대한 위임 접근 권한을 요청하세요. |

## 스크립트 없이 공유 드라이브 마운트 제공하기

RcloneView는 공유 드라이브 접근을 예측 가능하게 만듭니다: 비대한 동기화 폴더도, 스크립팅도, 새 마운트마다 IT 부서를 기다릴 필요도 없습니다. 오늘 모든 팀에 깔끔한 드라이브 문자나 Finder 볼륨을 제공하고 Google Workspace 스토리지를 관리하세요.


<CloudSupportGrid />
