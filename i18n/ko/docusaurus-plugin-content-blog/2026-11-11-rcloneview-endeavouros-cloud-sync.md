---
slug: rcloneview-endeavouros-cloud-sync
title: "EndeavourOS에서 RcloneView 사용하기 — 클라우드 스토리지 동기화와 백업"
authors:
  - steve
description: "공식 AppImage로 EndeavourOS에서 RcloneView를 실행하세요. GTK+3와 FUSE 요구 사항, 클라우드 드라이브 마운트, 90개 이상의 클라우드 제공업체 동기화를 다룹니다."
keywords:
  - RcloneView EndeavourOS
  - EndeavourOS 클라우드 동기화
  - EndeavourOS rclone GUI
  - Arch 기반 리눅스 클라우드 백업
  - RcloneView AppImage
  - EndeavourOS 클라우드 드라이브 마운트
  - EndeavourOS Google Drive 동기화
  - 리눅스 멀티 클라우드 파일 관리자
  - 롤링 릴리스 클라우드 백업
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# EndeavourOS에서 RcloneView 사용하기 — 클라우드 스토리지 동기화와 백업

> EndeavourOS는 바로 쓸 수 있는 데스크톱을 갖춘 롤링 Arch 기반 시스템이며, 공식 RcloneView AppImage는 서드파티 패키지 없이 그 위에서 실행됩니다.

EndeavourOS 사용자는 대개 최신 소프트웨어와 최소한의 수동 설정을 원합니다. 그런데 클라우드 스토리지가 빈틈인 경우가 많습니다. Google Drive, OneDrive, S3 버킷에는 이 환경용 네이티브 데스크톱 클라이언트가 없고, 여러 CLI 설정을 오가는 것은 번거롭습니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화하며, 자체 내장 rclone을 함께 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 공식 AppImage로 설치하기

RcloneView는 [rcloneview.com](https://rcloneview.com/src/download.html)을 통해서만 배포됩니다. AUR 패키지는 없으므로 다른 곳에서 보이는 `yay`나 `paru` 안내는 무시하세요. Arch 기반 시스템에서는 AppImage가 자연스러운 선택입니다. 사용하는 아키텍처(x86_64 또는 aarch64)에 맞는 빌드를 다운로드하고, 실행 권한을 준 뒤 실행합니다.

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

RcloneView는 Qt 앱이 아니라 Flutter 데스크톱 앱입니다. GTK+3, 실행 중인 X11 또는 Wayland 세션, 그리고 시스템 트레이 아이콘을 위한 AppIndicator 라이브러리가 필요합니다. 기본 EndeavourOS 데스크톱 에디션(KDE Plasma, Xfce, GNOME 등)은 이미 디스플레이 서버를 제공하며 보통 GTK+3도 포함되어 있습니다. 마운트를 위해 FUSE를 설치하세요. fuse3를 권장합니다(`sudo pacman -S --needed fuse3`).

<img src="/support/images/en/blog/new-remote.png" alt="EndeavourOS의 RcloneView에서 새 클라우드 리모트 추가하기" class="img-large img-center" />

AppImage는 자체 포함형이므로 롤링 `pacman -Syu`가 이를 교체하지 않습니다. 자동 업데이트는 macOS 전용이므로, Linux에서 업데이트하려면 같은 페이지에서 새 AppImage를 다운로드하면 됩니다.

## 리모트 연결과 드라이브 마운트

**Remote > New Remote**를 엽니다. Google Drive, Dropbox, OneDrive, Box, pCloud는 브라우저에서 OAuth로 로그인합니다. S3, Backblaze B2, Cloudflare R2는 액세스 키를 입력합니다. 리모트는 Explorer에 탭으로 표시되며, 최대 4개의 패널로 분할해 NAS 공유 폴더와 클라우드 버킷을 나란히 탐색할 수 있습니다.

Dolphin이나 Thunar에서 클라우드 파일을 다루려면 리모트를 마운트하세요. 패널 툴바의 Mount 아이콘을 클릭하거나, Mount Manager를 열어 새 마운트를 만듭니다. Linux에서는 `~/cloud/gdrive` 같은 로컬 경로를 선택하며, 기본 `writes` 캐시 모드로 대부분의 편집 작업을 처리할 수 있습니다. 다른 로컬 사용자가 마운트에 접근해야 할 때만 **Allow other**를 활성화하세요.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Linux에서 RcloneView 탐색기로 클라우드 리모트 마운트하기" class="img-large img-center" />

## 동기화와 백업 예약

`~/Projects`와 `~/Documents`가 있는 개발자 워크스테이션을 떠올려 보세요. 로컬 디스크에서 Backblaze B2로 동기화 작업을 만들고, Step 3에서 `.git/` 필터를 추가한 다음, 드라이 런(Dry Run)을 실행해 무엇이 전송될지 정확히 확인합니다. 단방향 동기화는 대상만 수정합니다. 양방향 동기화(Beta)는 아직 실험 단계이므로 중요하지 않은 폴더에서 먼저 테스트하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Linux 백업 작업 중 RcloneView의 라이브 전송 모니터링" class="img-large img-center" />

PLUS 라이선스에서는 Step 4에 crontab 방식의 예약 기능이 추가되어, RcloneView가 트레이에 있는 동안 작업이 매일 밤 실행됩니다. RcloneView는 데스크톱 세션이 있어야 실행되며 systemd 서비스로 실행할 수 없습니다. 헤드리스 Arch 서버에서는 서버에서 `rclone rcd`를 실행하고, 데스크톱의 Connect Manager를 통해 연결하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 예약 동기화 작업 만들기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하고, 사용하는 아키텍처에 맞는 Linux AppImage를 선택합니다.
2. AppImage에 실행 권한을 주고, 마운트가 필요하면 `fuse3`를 설치한 뒤 데스크톱 세션에서 실행합니다.
3. 클라우드 리모트를 추가하고 파일 관리자에서 사용할 리모트를 마운트합니다.
4. 동기화 작업을 만들고 드라이 런으로 테스트한 뒤, PLUS가 있다면 예약합니다.

롤링 릴리스 데스크톱과 하나의 멀티 클라우드 창이 있으면 관리 부담이 적은 백업 환경을 꾸릴 수 있습니다.

---

**관련 가이드:**

- [VFS 캐시 마운트 성능](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Rclone 마운트 FUSE 오류 해결](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)
- [Connection Manager — 내장 및 외부 Rclone](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)

<CloudSupportGrid />
