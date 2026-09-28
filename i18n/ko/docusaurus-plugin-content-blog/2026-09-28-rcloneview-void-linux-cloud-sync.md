---
slug: rcloneview-void-linux-cloud-sync
title: "Void Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업"
authors:
  - steve
description: "멀티 클라우드 파일 관리, 마운트, 동기화를 위해 AppImage 빌드를 사용하여 Void Linux에 RcloneView를 설치하고 실행하세요."
keywords:
  - RcloneView Void Linux
  - void linux 클라우드 스토리지
  - void linux appimage
  - rclone gui void linux
  - void linux 클라우드 스토리지 마운트
  - void linux 백업 도구
  - xbps rclone gui
  - void linux runit 클라우드 동기화
  - void linux 클라우드 파일 관리자
  - 크로스 플랫폼 클라우드 gui 리눅스
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Void Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업

> XBPS 패키지가 나타나기를 기다릴 필요 없이 Void Linux에서 완전한 그래픽 멀티 클라우드 관리자를 실행하세요.

Void Linux의 롤링 릴리스와 독립적인 패키지 기반(XBPS, runit)은 많은 GUI 앱이 늦게 도착하거나 아예 패키징되지 않는다는 것을 의미합니다. RcloneView는 XBPS 저장소에 없지만, Linux용 .AppImage, .deb, .rpm으로 자체 다운로드 페이지에서 제공되므로 Void 사용자는 배포판 전용 빌드 없이도 바로 실행할 수 있습니다. RcloneView는 네이티브 GUI 애플리케이션이지 헤드리스 서비스가 아니므로 X11 또는 Wayland 데스크톱 환경이 필요합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Void에 RcloneView 설치하기

Void에서 가장 안정적인 방법은 자체 런타임을 번들로 포함하고 XBPS 패키지 이름 지정이나 의존성 불일치를 완전히 우회하는 .AppImage입니다. x86_64 또는 aarch64용 `RcloneView-{version}-{arch}.AppImage` 파일을 다운로드하고 실행 권한을 부여한 다음, 파일 관리자나 터미널에서 직접 실행하세요. Void는 APT나 RPM 저장소를 유지하지 않으므로, .deb나 .rpm 빌드를 사용하고 싶다면 `xbps-install`을 통해 설치하는 대신 수동으로 압축을 풀어야 합니다. RcloneView는 오직 rcloneview.com에서만 배포되며, AUR, Flatpak, Snap 패키지는 대체 수단으로 존재하지 않습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote setup running on Void Linux" class="img-large img-center" />

실행하기 전에 시스템 트레이 지원을 위해 GTK+3과 `libayatana-appindicator3-1` 또는 `libappindicator3-1` 중 하나가 있는지 확인하세요 — Void의 최소 기본 설치는 일부 데스크톱 중심 배포판과 달리 이러한 것들을 기본으로 설치하지 않습니다.

## 리모트 및 마운트 설정하기

RcloneView가 실행되면 다른 플랫폼과 동일한 방식으로 클라우드 리모트를 추가하세요. Google Drive나 Dropbox 같은 서비스는 OAuth 로그인, S3 호환 또는 SFTP 엔드포인트는 자격 증명 입력 방식입니다. 마운트는 Linux에서 임베디드 rclone의 nfsmount 방식을 통해 작동하며 FUSE가 필요합니다 — Void의 최소 설치에는 종종 빠져 있으므로 아직 없다면 XBPS를 통해 `fuse3`를 설치하세요.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote as a local drive on Void Linux" class="img-large img-center" />

RcloneView는 90개 이상의 제공업체에 연결되며, Windows, macOS, Linux 어디서나 동일한 창에서 이 모두를 마운트하고 동기화합니다 — Void Linux 워크스테이션과 다른 머신 사이에서 작업을 나눈다면 유용합니다.

## runit을 염두에 둔 백업 예약하기

RcloneView는 systemd 서비스로 실행될 수 없으며, Void는 systemd를 전혀 사용하지 않고 runit을 실행합니다. RcloneView 자체의 Job Manager가 init 시스템에 의존하지 않고 내부적으로 예약을 처리하므로 이 차이는 여기서 문제가 되지 않습니다. 앱이 시스템 트레이에서 열려 있는 동안 백업이 타이머에 따라 실행되도록, 크론탭 방식 스케줄러(PLUS 기능)를 통해 예약 동기화 작업을 설정하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring cloud backup job on Void Linux" class="img-large img-center" />

GUI 없이 완전히 백그라운드로 동작하는 진짜 데몬을 Void에서 원한다면, 그것은 RcloneView가 아니라 `rclone rcd`가 담당할 일입니다 — 앱 자체는 실행하려면 항상 디스플레이 서버가 필요합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **AppImage를 다운로드**하고 실행 권한을 부여하세요.
2. 마운트나 트레이 기능이 바로 작동하지 않으면 XBPS를 통해 `fuse3`와 AppIndicator 라이브러리를 설치하세요.
3. 클라우드 리모트를 추가하고 Explorer 패널에서 접근을 확인하세요.
4. 동기화 또는 백업 작업을 만들고, 원한다면 자동으로 실행되도록 예약하세요.

Void의 미니멀함이 클라우드 스토리지를 수동으로 관리해야 한다는 의미일 필요는 없습니다 — RcloneView는 어디서나 동일한 GUI 워크플로를 여기에도 가져다줍니다.

---

**관련 가이드:**

- [Gentoo Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업](https://rcloneview.com/support/blog/rcloneview-gentoo-linux-cloud-sync)
- [Arch Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [Ubuntu 및 Debian Linux에 RcloneView 설치하기](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)

<CloudSupportGrid />
