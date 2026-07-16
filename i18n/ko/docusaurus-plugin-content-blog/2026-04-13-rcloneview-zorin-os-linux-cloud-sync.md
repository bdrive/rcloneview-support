---
slug: rcloneview-zorin-os-linux-cloud-sync
title: "Zorin OS에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업"
authors:
  - tayson
description: "Zorin OS에 RcloneView를 설치하고 클라우드 스토리지 동기화 및 백업에 사용하는 방법. Zorin OS에서 Google Drive, OneDrive, S3 등 90개 이상의 서비스를 위한 GUI 기반 클라우드 관리."
keywords:
  - RcloneView Zorin OS
  - Zorin OS 클라우드 스토리지
  - Zorin OS 클라우드 동기화
  - Zorin OS 클라우드 백업
  - RcloneView Linux Debian
  - Zorin OS 파일 관리자 클라우드
  - Zorin에 RcloneView 설치
  - Linux 클라우드 스토리지 GUI
  - Zorin OS Google Drive
  - Ubuntu 기반 클라우드 동기화
tags:
  - linux
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zorin OS에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업

> Zorin OS에 RcloneView를 설치하고 GUI로 90개 이상의 클라우드 스토리지 서비스를 관리하세요 — Zorin OS 데스크톱에서 Google Drive, OneDrive, Amazon S3 등을 동기화할 수 있습니다.

Zorin OS는 Ubuntu 기반의 Linux 배포판으로, 친숙하고 세련된 데스크톱 인터페이스를 갖추고 있어 특히 Windows나 macOS에서 넘어오는 사용자들에게 인기가 많습니다. Ubuntu/Debian 기반이기 때문에 `.deb` 패키지와 원활하게 호환되어 RcloneView 설치가 간단합니다. RcloneView는 Flutter로 제작된 GUI 데스크톱 애플리케이션으로 디스플레이 서버(X11 또는 Wayland)와 실행 중인 데스크톱 환경이 필요한데, Zorin OS의 GNOME 기반 데스크톱은 이러한 요구 사항을 충족합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zorin OS에 RcloneView 설치하기

RcloneView는 [rcloneview.com](https://rcloneview.com/src/download.html)에서 직접 다운로드하는 방식으로 배포됩니다. apt 저장소나 Snap 패키지는 존재하지 않으므로 `apt install rcloneview`나 `snap install rcloneview`는 시도하지 마세요. 공식 다운로드 페이지에서 사용 중인 아키텍처에 맞는 `.deb` 패키지를 다운로드하세요.

**.deb 패키지 설치:**

```bash
sudo dpkg -i rclone_view-*-linux-x86_64.deb
```

`dpkg`가 누락된 의존성을 보고하면 다음 명령으로 해결하세요.

```bash
sudo apt install -f
```

이 명령은 Zorin OS(Ubuntu의 apt 저장소를 상속받음)에서 누락된 GTK나 시스템 라이브러리를 자동으로 설치합니다.

또는 시스템 통합이 필요 없는 포터블 설치를 위해 `.AppImage`를 사용할 수도 있습니다.

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

<img src="/support/images/en/blog/new-remote.png" alt="Setting up cloud storage remotes in RcloneView on Zorin OS" class="img-large img-center" />

## Zorin OS에서 필요한 라이브러리

Zorin OS는 기본 GNOME 데스크톱 설치의 일부로 GTK+ 3.0과 X11/Wayland를 함께 제공합니다. 시스템 트레이 지원을 위해서는 AppIndicator 라이브러리가 아직 설치되어 있지 않다면 다음과 같이 설치하세요.

```bash
sudo apt install libayatana-appindicator3-1
```

클라우드 드라이브 마운트(가상 드라이브 기능)를 위해서는 FUSE3를 설치하세요.

```bash
sudo apt install fuse3
```

설치가 완료되면 애플리케이션 메뉴나 터미널에서 RcloneView를 실행하세요. 이 애플리케이션은 시스템 트레이 아이콘 지원과 작업 완료 시 네이티브 데스크톱 알림을 포함해 Zorin OS 데스크톱과 통합됩니다.

## 클라우드 스토리지 연결하기

RcloneView에는 rclone 바이너리가 내장되어 있어 별도의 rclone 설치가 필요하지 않습니다. Remote 탭에서 New Remote를 클릭하고 제공업체를 선택하여 클라우드 서비스를 추가하세요. Google Drive, OneDrive, Dropbox와 같은 OAuth 기반 서비스의 경우 계정 인증을 위한 브라우저 창이 열립니다. S3 호환 서비스의 경우 Access Key, Secret Key, 엔드포인트 URL을 입력하세요.

Zorin OS의 GNOME 기반 데스크톱은 OAuth 브라우저 리디렉션을 깔끔하게 처리합니다 — 인증 창이 기본 브라우저에서 열리고 인증 정보가 자동으로 RcloneView에 전달됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync running in RcloneView on Zorin OS" class="img-large img-center" />

## 클라우드 스토리지 동기화 및 마운트하기

리모트를 구성한 후에는 Sync 마법사를 사용하여 백업 또는 마이그레이션 작업을 만들 수 있습니다. 원본과 대상 리모트를 선택하고, 전송 옵션과 필터를 구성한 다음, 필요하다면 반복 실행을 예약할 수 있습니다(PLUS 라이선스). RcloneView는 Zorin OS에서 GUI 애플리케이션으로 실행되며, 활성 데스크톱 세션과 디스플레이 서버가 필요합니다. systemd 백그라운드 서비스로 직접 구성할 수는 없으며, 사용자 세션 없이 무인 예약 작업을 실행하려면 rclone 자체의 `rclone rcd`를 systemd 서비스와 함께 사용하고 RcloneView에서 이에 연결하세요.

클라우드 스토리지를 로컬 디렉터리로 마운트하려면 Remote 탭의 Mount Manager를 사용하세요. Zorin OS에서는 마운트 지점 경로를 지정하고 Save and Mount를 클릭하세요. 마운트된 폴더는 Nautilus(Zorin OS의 기본 파일 관리자)에 표시되며 일반 로컬 디렉터리처럼 접근할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as a local folder on Zorin OS with RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요 — x86_64용 Linux `.deb`를 선택하세요.
2. `sudo dpkg -i rclone_view-*-linux-x86_64.deb`로 설치하고, 의존성이 누락된 경우 `sudo apt install -f`를 실행하세요.
3. 마운트와 트레이 지원을 위해 필요하다면 `fuse3`와 `libayatana-appindicator3-1`을 설치하세요.
4. 클라우드 리모트를 추가하고 익숙한 Zorin OS 데스크톱 환경에서 동기화를 시작하세요.

Zorin OS는 Ubuntu와의 호환성 덕분에 RcloneView 설치가 간단하며, 사용자에게 GUI 기반의 클라우드 스토리지 관리 도구를 제공하여 Zorin OS의 세련된 데스크톱 워크플로에 자연스럽게 어우러집니다.

---

**관련 가이드:**

- [Ubuntu 및 Debian Linux에 RcloneView 설치하기](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Pop!_OS Linux에서 RcloneView 사용하기 — 클라우드 동기화](https://rcloneview.com/support/blog/rcloneview-pop-os-linux-cloud-sync)
- [Fedora, RHEL, CentOS Linux에서 RcloneView 사용하기](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-centos-linux)

<CloudSupportGrid />
