---
slug: rcloneview-elementary-os-cloud-sync
title: "Elementary OS에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업"
authors:
  - alex
description: "Elementary OS에 RcloneView를 설치하고 드래그 앤 드롭 동기화, 마운트, 예약 백업으로 90개 이상의 클라우드 공급자를 하나의 GUI에서 관리하세요."
keywords:
  - RcloneView Elementary OS
  - Elementary OS 클라우드 스토리지
  - Elementary OS rclone GUI
  - install RcloneView deb Elementary
  - Elementary OS 클라우드 동기화
  - Elementary OS 클라우드 백업
  - Pantheon 클라우드 스토리지 클라이언트
  - cross-platform cloud manager Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Elementary OS에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업

> Elementary OS에서 RcloneView를 실행하여 Pantheon 데스크톱에 어울리는 네이티브 GUI로 90개 이상의 클라우드 공급자를 탐색, 동기화, 마운트, 백업하세요.

Elementary OS는 Ubuntu LTS를 기반으로 하지만 자체 Pantheon 데스크톱을 탑재하고 있으며, 깔끔한 macOS와 유사한 워크플로를 위해 이 배포판을 선택한 사용자들은 대개 클라우드 스토리지 도구도 그와 같은 완성도를 갖추기를 원하지, 맨 터미널로 되돌아가고 싶어 하지 않습니다. RcloneView는 Elementary OS에 네이티브 .deb 패키지로 설치되며, Google Drive부터 Amazon S3, SFTP 서버까지 rclone이 지원하는 모든 리모트에 대해 완전한 파일 관리자 스타일의 인터페이스를 제공합니다. 마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교 기능을 함께 제공하므로, 드라이브 마운트와 예약 백업 실행이 모두 같은 앱에서 이루어집니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Elementary OS에 RcloneView 설치하기

Elementary OS는 Debian/Ubuntu 기반이므로, RcloneView는 공식 [다운로드 페이지](https://rcloneview.com/src/download.html)에서 제공되는 .deb 패키지로 설치합니다 — x86_64 빌드를 받거나 ARM64 하드웨어에서 Elementary를 실행 중이라면 aarch64를 받은 다음, 터미널에서 `sudo dpkg -i rclone_view-*-linux-{arch}.deb`로 설치하세요. 여기에는 Flathub나 Snap Store 패키지가 없습니다 — .deb 직접 다운로드가 유일하게 지원되는 설치 경로이며, 패키지 관리를 아예 건너뛰고 싶다면 AppImage도 사용할 수 있습니다.

Elementary OS는 Pantheon을 통해 기본적으로 GTK+와 Wayland/X11 세션을 제공하므로, RcloneView의 디스플레이 및 툴킷 요구 사항을 기본적으로 충족합니다. 설치 후 확인할 만한 한 가지는 `libayatana-appindicator3-1`입니다. RcloneView의 시스템 트레이 아이콘이 이 라이브러리에 의존하는데, 일부 최소 구성의 Elementary 설치본은 데스크톱을 가볍게 유지하기 위해 인디케이터 라이브러리를 제외하기 때문입니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView main window running on Elementary OS with a new remote dialog open" class="img-large img-center" />

## 클라우드 리모트 연결하기

RcloneView를 설치하면 다른 모든 플랫폼과 동일하게 리모트를 추가할 수 있습니다: Remote 탭 > New Remote에서 공급자를 선택한 다음, 브라우저 팝업을 통해 인증하거나(Google Drive, Dropbox, OneDrive, Box) 자격 증명을 직접 입력합니다(Amazon S3, Backblaze B2, SFTP). 내장된 rclone 바이너리가 `http://127.0.0.1:5582`를 통해 모든 것을 처리하므로, 별도로 실행 중인 외부 rclone 인스턴스에 RcloneView를 연결하고 싶은 경우가 아니라면 Elementary OS에서 추가로 설치하거나 구성할 것은 없습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote as a local drive on Elementary OS with RcloneView" class="img-large img-center" />

마운트는 Linux에서 `nfsmount`를 사용합니다 — Explorer에서 리모트 폴더를 선택하고 패널 툴바의 마운트 아이콘을 클릭하면, 클라우드 폴더가 어떤 Pantheon 앱에서도 바로 열 수 있는 로컬 경로로 나타납니다. 마운트가 동작하려면 FUSE(fuse3 권장)가 설치되어 있어야 합니다.

## 동기화 작업 예약하기

하루 종일 켜져 있는 Elementary OS 컴퓨터라면, 예약된 동기화 작업을 통해 RcloneView를 수동으로 실행해야 하는 도구가 아니라 손대지 않아도 되는 백업 도구로 만들 수 있습니다. 4단계 Sync 마법사를 통해 작업을 구성하고, 임시 파일이나 지나치게 큰 파일을 건너뛰는 필터를 추가한 다음 — PLUS 라이선스에서는 — crontab 형식의 일정을 연결하여 원하는 주기로 자동 실행되도록 하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled sync job on Elementary OS in RcloneView" class="img-large img-center" />

Job History는 상태, 소요 시간, 전송 속도와 함께 모든 실행 기록을 남기므로, 야간 백업이 지켜보지 않는 사이 조용히 실패하지 않고 실제로 완료되었는지 쉽게 확인할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요 — Elementary OS용 x86_64 또는 aarch64 .deb를 받으세요.
2. `sudo dpkg -i rclone_view-*-linux-{arch}.deb`로 설치하세요.
3. Remote 탭 > New Remote를 통해 첫 번째 클라우드 리모트를 추가하세요.
4. 동기화나 마운트를 설정하여 Pantheon 데스크톱에서 바로 클라우드 스토리지 관리를 시작하세요.

.deb를 설치하면 Elementary OS도 Windows 및 macOS 사용자와 동일한 드래그 앤 드롭 클라우드 관리 경험을 얻을 수 있으며, 데스크톱 특유의 깔끔하고 일관된 느낌을 포기할 필요가 없습니다.

---

**관련 가이드:**

- [Ubuntu 및 Debian Linux에 RcloneView 설치하기](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Linux Mint에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)
- [Zorin OS에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업](https://rcloneview.com/support/blog/rcloneview-zorin-os-linux-cloud-sync)

<CloudSupportGrid />
