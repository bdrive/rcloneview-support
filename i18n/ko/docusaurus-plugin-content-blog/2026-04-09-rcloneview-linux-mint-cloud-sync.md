---
slug: rcloneview-linux-mint-cloud-sync
title: "Linux Mint에서 RcloneView 설치 및 클라우드 동기화 사용하기"
authors:
  - tayson
description: "Linux Mint에 RcloneView를 설치하고 클라우드 동기화, 백업, 파일 관리를 설정하세요. Cinnamon, MATE, Xfce 에디션을 위한 단계별 가이드."
keywords:
  - rcloneview
  - linux mint cloud sync
  - rcloneview linux mint
  - linux mint cloud storage
  - linux mint google drive
  - linux mint onedrive
  - linux mint cloud backup
  - linux mint file manager cloud
  - mint rclone gui
  - linux mint dropbox alternative
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Linux Mint에서 RcloneView 설치 및 클라우드 동기화 사용하기

> Linux Mint는 가장 인기 있는 데스크톱 Linux 배포판 중 하나이지만, 기본 Nemo 파일 관리자 플러그인 이상의 내장 클라우드 스토리지 통합 기능은 없습니다 — **RcloneView**가 완전한 멀티 클라우드 지원으로 그 공백을 채워줍니다.

Linux Mint는 Nemo 파일 관리자, 시스템 백업을 위한 Timeshift, 그리고 세련된 Cinnamon(또는 MATE/Xfce) 데스크톱 등 훌륭한 데스크톱 도구를 제공합니다. 하지만 클라우드 스토리지 통합은 최소한에 그칩니다. 시스템에서 제공하는 네이티브 Google Drive, OneDrive, Dropbox 클라이언트가 없습니다. 서드파티 솔루션(Insync, rclone CLI, MATE의 GNOME Online Accounts)이 존재하긴 하지만, 포괄적인 멀티 클라우드 GUI를 제공하는 것은 없습니다. RcloneView는 모든 에디션의 Linux Mint에서 네이티브로 실행되며 70개 이상의 클라우드 제공업체에 연결됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Linux Mint에 설치하기

Linux Mint는 Ubuntu LTS를 기반으로 하므로, 설치 과정은 Ubuntu/Debian 시스템과 동일합니다.

### 방법 1: AppImage (권장)

AppImage는 가장 간단한 설치 방법이며 모든 Linux Mint 에디션(Cinnamon, MATE, Xfce)에서 작동합니다:

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 RcloneView AppImage를 다운로드합니다.
2. 실행 권한을 부여합니다: Nemo에서 파일을 마우스 오른쪽 버튼으로 클릭하고 속성 > 권한을 선택한 후 "프로그램으로 실행 허용"을 체크합니다. 또는 터미널에서 `chmod +x RcloneView-*.AppImage`를 실행합니다.
3. 더블클릭하여 실행합니다.

AppImage는 내장 rclone 바이너리를 포함하여 RcloneView에 필요한 모든 것을 포함하고 있습니다. 별도의 시스템 패키지가 필요하지 않습니다.

### 방법 2: .deb 패키지

RcloneView 웹사이트에서 `.deb` 패키지를 다운로드합니다. 더블클릭하여(패키지 관리자가 열립니다) 설치하거나 터미널에서 설치합니다:

```
sudo dpkg -i rcloneview_*.deb
sudo apt-get install -f
```

`.deb` 패키지는 시스템과 통합됩니다 — 애플리케이션 메뉴에 RcloneView를 추가하고 데스크톱 파일 연결을 처리합니다.

## 마운트를 위한 FUSE 설정

Linux Mint에서 클라우드 스토리지를 로컬 디렉터리로 마운트하려면 FUSE가 사용 가능해야 합니다. 대부분의 Mint 설치본에는 기본적으로 FUSE가 포함되어 있습니다. 다음을 실행하여 확인하세요:

```
fusermount --version
```

FUSE가 설치되어 있지 않다면 추가합니다:

```
sudo apt install fuse3
```

사용자가 `fuse` 그룹에 속해 있는지 확인합니다:

```
sudo usermod -a -G fuse $USER
```

그룹 변경 사항을 적용하려면 로그아웃 후 다시 로그인하세요. 이후 RcloneView는 모든 클라우드 제공업체를 로컬 디렉터리로 마운트할 수 있으며, 이는 Nemo에서 로컬 폴더와 나란히 표시됩니다.

## 클라우드 스토리지 리모트 추가하기

RcloneView를 실행하고 리모트 관리자를 엽니다. 클라우드 계정을 추가합니다:

- **Google Drive**: Google Drive를 선택하고 기본 브라우저(Mint에서는 Firefox 또는 Chromium)를 통해 OAuth로 인증합니다.
- **OneDrive**: Microsoft OneDrive를 선택하고 OAuth로 인증합니다.
- **Dropbox**: Dropbox를 선택하고 OAuth로 인증합니다.
- **S3 호환**: AWS S3, Wasabi, Backblaze B2 S3 등의 액세스 키, 시크릿 키, 엔드포인트를 입력합니다.

각 리모트는 탐색기 드롭다운에 표시됩니다. Linux Mint의 기본 브라우저는 OAuth 흐름을 원활하게 처리하며 별도의 설정이 필요하지 않습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding cloud remotes on Linux Mint in RcloneView" class="img-large img-center" />

## 클라우드 파일 탐색 및 관리

RcloneView의 듀얼 패널 탐색기는 클라우드 작업 시 Nemo를 보완합니다. Nemo가 로컬 파일을 훌륭하게 처리하는 동안, RcloneView는 그 기능을 클라우드 스토리지로 확장합니다. 한 패널에서 Google Drive를 탐색하고 다른 패널에서 로컬 홈 디렉터리를 탐색하세요. 두 패널 사이, 또는 서로 다른 두 클라우드 제공업체 사이에서 파일을 드래그 앤 드롭할 수 있습니다.

Nemo의 듀얼 패널 모드(Nemo 확장 프로그램을 통해 사용 가능)에 익숙한 사용자라면 RcloneView의 레이아웃이 자연스럽게 느껴질 것입니다. 차이점은 RcloneView의 패널이 로컬 및 네트워크 경로뿐만 아니라 모든 클라우드 제공업체를 열 수 있다는 것입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing cloud storage on Linux Mint with RcloneView" class="img-large img-center" />

## Nemo에서 클라우드 스토리지 마운트하기

마운트가 완료되면 클라우드 스토리지 디렉터리는 다른 폴더와 마찬가지로 Nemo에 표시됩니다. 마운트된 클라우드 스토리지의 파일을 LibreOffice, GIMP, VLC 등 Linux Mint의 모든 애플리케이션에서 직접 열 수 있습니다.

Google Drive를 `~/GoogleDrive`에 마운트하면 Nemo의 사이드바에 표시됩니다. 원활한 성능을 위해 VFS 캐싱을 활성화하세요 — 최근에 액세스한 파일이 로컬에 캐시되어 반복 접근 시 즉시 열립니다. 사용 가능한 디스크 공간에 따라 캐시 크기를 구성하세요.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting cloud storage as local drive on Linux Mint" class="img-large img-center" />

## 시스템 통합으로 백업 예약하기

RcloneView의 내장 스케줄러는 반복되는 백업 작업을 처리합니다. 홈 디렉터리(또는 특정 폴더)에서 Google Drive, Backblaze B2, 또는 다른 클라우드 제공업체로 매일 밤 동기화를 설정하세요. RcloneView는 예약된 작업을 자동으로 실행합니다.

시스템 수준의 스케줄링을 선호하는 Linux Mint 사용자는 RcloneView의 외부 rclone 연결 모드를 사용하여 cron이나 systemd 타이머를 통해 rclone 명령을 트리거할 수도 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud backup on Linux Mint in RcloneView" class="img-large img-center" />

## 로그인 시 자동 시작

Linux Mint에 로그인할 때 RcloneView가 자동으로 시작되도록 하려면:

1. 시스템 메뉴에서 **시작 애플리케이션**을 엽니다.
2. 추가를 클릭하고 RcloneView AppImage 또는 설치된 바이너리의 경로를 입력합니다.
3. RcloneView가 데스크톱 세션과 함께 실행되어 예약된 작업과 마운트된 드라이브를 사용할 준비가 됩니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다 — AppImage 또는 .deb.
2. 클라우드 스토리지를 마운트할 계획이라면 FUSE를 설치하세요.
3. 리모트 관리자에서 클라우드 계정을 추가하세요.
4. Linux Mint 데스크톱에서 파일을 탐색, 동기화, 백업하세요.

Linux Mint는 세련된 데스크톱 경험을 제공하며, RcloneView는 시스템에 기본적으로 없는 멀티 클라우드 파일 관리 기능을 추가합니다. 두 가지를 함께 사용하면 로컬 및 클라우드 스토리지를 완벽하게 제어할 수 있습니다.

---

**관련 가이드:**

- [Google Drive 추가하기](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [클라우드 스토리지를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
