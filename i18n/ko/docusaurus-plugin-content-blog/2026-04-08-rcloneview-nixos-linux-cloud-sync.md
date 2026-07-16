---
slug: rcloneview-nixos-linux-cloud-sync
title: "NixOS에서 RcloneView로 클라우드 동기화 및 백업 실행하기"
authors:
  - tayson
description: "AppImage 설정, FUSE 마운트, NixOS 관련 구성 팁을 포함하여 NixOS에서 RcloneView를 설치하고 실행하여 클라우드 동기화 및 백업을 수행하는 단계별 가이드."
keywords:
  - rcloneview
  - nixos cloud sync
  - rclone nixos
  - nixos appimage
  - nixos cloud backup
  - nixos fuse mount
  - nix package manager rclone
  - nixos cloud storage
  - appimage-run nixos
  - declarative cloud sync
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

# NixOS에서 RcloneView로 클라우드 동기화 및 백업 실행하기

> NixOS는 시스템 구성에 대해 독특한 선언적 접근 방식을 제공하지만, 서드파티 GUI 애플리케이션을 실행하려면 몇 가지 추가 단계가 필요합니다. **RcloneView**는 AppImage 지원과 FUSE를 설정하면 NixOS에서도 원활하게 작동하여, Linux에서 가장 재현성이 뛰어난 배포판 중 하나에서 강력한 시각적 클라우드 관리자를 사용할 수 있게 해줍니다.

NixOS는 Nix 패키지 관리자와 완전히 선언적인 구성 모델을 기반으로 만들어진 Linux 배포판입니다. 패키지를 명령형으로 설치하는 대신, 구성 파일에 전체 시스템 상태를 정의하고 재빌드합니다. 이러한 접근 방식은 시스템을 재현 가능하고 롤백하기 쉽게 만들어주며, 자신의 환경을 완전히 제어하고 싶은 개발자와 파워 유저에게 이상적입니다.

하지만 NixOS의 독특한 파일시스템 구조(`/lib`, `/usr/lib` 없음, 전통적인 FHS 없음)로 인해 AppImage를 포함한 표준 Linux 바이너리가 기본적으로 실행되지 않습니다. RcloneView는 Linux용으로 AppImage로 배포되므로, 실행하기 전에 NixOS에서 AppImage 호환성을 활성화해야 합니다.

이 가이드는 rclone 설치, AppImage 지원 활성화, RcloneView 실행, 클라우드 마운트를 위한 FUSE 구성, systemd 서비스로 자동 동기화 설정에 이르는 전체 과정을 안내합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## NixOS 개요와 클라우드 스토리지에서의 중요성

NixOS는 시스템 구성을 코드로 취급합니다. `/etc/nixos/configuration.nix` 파일이 설치된 모든 패키지, 활성화된 서비스, 시스템 설정을 정의합니다. `nixos-rebuild switch`를 실행하면 시스템이 새로운 상태로 원자적으로 전환됩니다. 문제가 발생하면 몇 초 만에 이전 세대로 롤백할 수 있습니다.

클라우드 스토리지 워크플로우의 경우, 이는 전체 동기화 및 백업 설정을 버전 관리할 수 있다는 것을 의미합니다. rclone 설치, FUSE 구성, systemd 서비스가 모두 하나의 파일에 정의되어 있으며 모든 NixOS 머신에서 재현할 수 있습니다.

## Nixpkgs를 통한 Rclone 설치

Rclone은 공식 Nixpkgs 저장소에서 사용할 수 있습니다. 시스템 구성에 추가하세요.

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
  rclone
];
```

그런 다음 시스템을 재빌드합니다.

```bash
sudo nixos-rebuild switch
```

`rclone version`을 실행하여 설치를 확인하세요. 이것이 RcloneView의 GUI가 관리하는 rclone 백엔드입니다.

## NixOS에서 RcloneView AppImage 실행하기

AppImage는 모든 종속성을 단일 실행 파일로 번들링하지만, NixOS가 제공하지 않는 FHS 경로에 의존합니다. NixOS는 `appimage-run`과 `nix-ld`라는 두 가지 주요 해결책을 제공합니다.

### 옵션 A: appimage-run 사용

시스템 패키지에 `appimage-run`을 추가하세요.

```nix
environment.systemPackages = with pkgs; [
  rclone
  appimage-run
];
```

재빌드 후, [rcloneview.com](https://rcloneview.com/src/download.html)에서 RcloneView AppImage를 다운로드하고 실행 권한을 부여한 다음 실행합니다.

```bash
chmod +x RcloneView-*.AppImage
appimage-run RcloneView-*.AppImage
```

### 옵션 B: nix-ld 사용

`nix-ld` 모듈은 표준 Linux 바이너리가 동적 라이브러리를 찾을 수 있도록 해주는 호환성 shim을 제공합니다. 구성에서 활성화하세요.

```nix
programs.nix-ld.enable = true;
```

재빌드 후, `appimage-run` 래퍼 없이도 AppImage를 직접 실행할 수 있습니다.

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

두 방법 모두 잘 작동합니다. 단순함을 원한다면 `appimage-run`을, 여러 서드파티 바이너리를 실행한다면 `nix-ld`를 선택하세요.

## 클라우드 마운트를 위한 FUSE 설정

RcloneView는 클라우드 스토리지를 로컬 디렉터리로 마운트할 수 있지만, 이를 위해서는 FUSE(Filesystem in Userspace)가 필요합니다. NixOS에서는 구성에서 FUSE를 활성화하세요.

```nix
# FUSE 활성화
environment.systemPackages = with pkgs; [
  fuse
  fuse3
];

# 일반 사용자가 FUSE 파일시스템을 마운트할 수 있도록 허용
programs.fuse.userAllowOther = true;
```

재빌드한 후 `/dev/fuse`가 존재하는지 확인하세요. 이제 RcloneView의 마운트 기능을 사용하여 클라우드 스토리지를 로컬 폴더처럼 사용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## RcloneView에서 클라우드 리모트 구성하기

RcloneView를 실행하고 리모트 구성 마법사를 사용하여 클라우드 제공업체를 추가하세요. 이 과정은 다른 Linux 배포판과 동일합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

RcloneView는 Google Drive, OneDrive, Dropbox, AWS S3, Wasabi, Backblaze B2, Cloudflare R2를 비롯한 수십 개의 제공업체를 지원합니다. GUI는 브라우저에서 열리는 OAuth 흐름을 포함하여 각 제공업체의 인증 과정을 안내합니다.

rclone 구성은 기본적으로 `~/.config/rclone/rclone.conf`에 저장됩니다. NixOS에서는 이 경로가 Nix 스토어 외부의 홈 디렉터리에 위치하므로 정상적으로 작동합니다.

## 동기화 작업 생성 및 전송 예약하기

리모트가 구성되면 RcloneView의 두 개의 창으로 구성된 탐색기를 사용하여 클라우드 스토리지를 탐색하고 동기화 작업을 생성할 수 있습니다. 창 사이에서 파일을 드래그하여 전송을 시작하거나 작업 스케줄러로 반복 작업을 설정하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

시스템의 선언적 모델과 통합하고 싶은 NixOS 사용자라면, RcloneView 내장 스케줄러를 보완하는 타이머 기반 rclone sync 명령을 실행하는 systemd 서비스를 정의할 수도 있습니다.

## 자동 동기화를 위한 Systemd 서비스 설정하기

NixOS에서는 사용자 정의 systemd 서비스를 선언적으로 정의하기가 매우 쉽습니다. 구성에 타이머 기반 동기화 서비스를 추가하세요.

```nix
systemd.user.services.rclone-backup = {
  description = "Rclone cloud backup";
  serviceConfig = {
    ExecStart = "${pkgs.rclone}/bin/rclone sync /home/user/documents remote:backup/documents";
    Type = "oneshot";
  };
};

systemd.user.timers.rclone-backup = {
  description = "Run rclone backup daily";
  timerConfig = {
    OnCalendar = "daily";
    Persistent = true;
  };
  wantedBy = [ "timers.target" ];
};
```

이는 RcloneView의 GUI 스케줄러와 함께 사용할 수 있습니다. 헤드리스 서버에는 systemd 방식을, 대화형 워크스테이션에는 RcloneView의 스케줄러를 사용하세요.

## NixOS 관련 팁

**rclone 버전을 고정하세요.** NixOS에서는 오버레이나 flakes를 사용하여 패키지 버전을 쉽게 고정할 수 있습니다. 새로운 rclone 릴리스가 호환성이 깨지는 변경 사항을 도입하는 경우, 업그레이드할 준비가 될 때까지 안정적인 버전을 유지할 수 있습니다.

**Home Manager로 사용자 수준 구성을 관리하세요.** Home Manager를 사용한다면, rclone 구성 파일, AppImage 데스크톱 항목, 자동 시작 설정을 사용자 환경 내에서 선언적으로 관리할 수 있습니다.

**애플리케이션 런처용 데스크톱 항목.** RcloneView가 애플리케이션 메뉴에 나타나도록 `.desktop` 파일을 만드세요.

```nix
xdg.desktopEntries.rcloneview = {
  name = "RcloneView";
  exec = "appimage-run /home/user/Applications/RcloneView.AppImage";
  icon = "rcloneview";
  type = "Application";
  categories = [ "Utility" "FileManager" ];
};
```

**롤백 안전성.** NixOS는 원자적 롤백을 지원하므로 rclone 구성을 안전하게 실험할 수 있습니다. 동기화 작업이 잘못 구성된 경우, NixOS 세대를 롤백하면 시스템이 이전 상태로 돌아갑니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. NixOS 구성에 `rclone`, `appimage-run`, `fuse3`를 추가하고 재빌드하세요.
3. `appimage-run`으로 RcloneView를 실행하고, 클라우드 리모트를 추가한 다음 동기화를 시작하세요.
4. 필요하다면 NixOS 구성에서 systemd 타이머를 정의하여 완전히 선언적인 자동 백업을 설정하세요.

NixOS와 RcloneView를 함께 사용하면 어떤 머신에서도 재현할 수 있는, 버전 관리가 가능한 클라우드 스토리지 워크플로우를 구축할 수 있습니다.

---

**관련 가이드:**

- [원격 스토리지 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [클라우드 스토리지를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [AWS S3 및 S3 호환 스토리지 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
