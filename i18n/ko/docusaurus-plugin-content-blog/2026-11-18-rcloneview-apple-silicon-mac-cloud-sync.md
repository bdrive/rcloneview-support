---
slug: rcloneview-apple-silicon-mac-cloud-sync
title: "Apple Silicon Mac에서 RcloneView 사용하기 — 클라우드 스토리지 동기화와 백업"
authors:
  - robin
description: "Universal .dmg로 Apple Silicon Mac에서 RcloneView를 네이티브로 실행하세요. 하나의 macOS 앱에서 90개 이상의 클라우드 제공업체를 마운트, 동기화, 백업할 수 있습니다."
keywords:
  - rcloneview apple silicon
  - rclone gui m1 mac
  - 애플 실리콘 맥 클라우드 동기화
  - 맥북 클라우드 스토리지 마운트
  - rclone universal binary macos
  - 맥 미니 클라우드 백업
  - macos 클라우드 드라이브 마운트
  - rcloneview macos 설치
  - 맥 구글 드라이브 원드라이브 동기화
  - arm64 맥 클라우드 스토리지 관리자
tags:
  - RcloneView
  - macos
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Apple Silicon Mac에서 RcloneView 사용하기 — 클라우드 스토리지 동기화와 백업

> 하나의 Universal 다운로드로 Apple Silicon과 Intel Mac 모두에서 네이티브로 실행되며, rclone 엔진이 내장되어 있습니다.

많은 Apple Silicon Mac 사용자가 둘 이상의 클라우드 계정을 함께 사용합니다. RcloneView는 Google Drive, OneDrive, Dropbox, S3 버킷, NAS 공유 폴더를 비롯한 수십 가지 리모트를 탐색, 마운트, 비교, 동기화할 수 있는 하나의 네이티브 macOS 앱을 제공합니다. 이 가이드에서는 Apple Silicon 기기에 설치하기 전에 알아 두어야 할 내용을 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apple Silicon과 Intel을 위한 하나의 Universal .dmg

macOS용 RcloneView는 Universal 바이너리가 담긴 단일 `.dmg` 디스크 이미지로 제공됩니다. Apple Silicon용 ARM64 코드와 Intel Mac용 x86-64 코드가 모두 포함되어 있어, Apple Silicon에서는 앱이 네이티브로 실행됩니다. 빌드는 개발자가 공증(notarization)하고 코드 서명했으므로 Gatekeeper에서 별도의 우회 없이 열립니다.

최소 지원 버전은 macOS 12.7(Monterey)이며, Ventura, Sonoma, Sequoia에서 작동이 확인되었습니다. 설치 파일은 공식 [다운로드 페이지](https://rcloneview.com/src/download.html)에서만 받으세요. Homebrew cask나 다른 패키지 관리자 채널은 없습니다. 설치 후에는 macOS 빌드가 앱 내에서 스스로 업데이트됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on an Apple Silicon Mac" class="img-large img-center" />

RcloneView에는 자체 rclone 바이너리가 포함되어 있으므로 별도로 설치할 것이 없습니다. Remote 탭을 열고 **New Remote**를 클릭한 뒤 로그인하세요. Google Drive, Dropbox, OneDrive, Box는 브라우저 OAuth 로그인을 사용합니다. Wasabi나 Cloudflare R2 같은 S3 호환 서비스는 대신 액세스 키를 요청합니다.

## Finder에서 클라우드 드라이브 마운트하기

macOS에서 RcloneView는 기본적으로 `nfsmount`로 마운트하며, 사용자 지정 마운트 경로를 선택할 수 있습니다. 탐색기에서 폴더를 선택하고 Mount 아이콘을 클릭하면 리모트가 Finder에 로컬 볼륨처럼 나타납니다. 기본 VFS 캐시 모드인 `writes`는 대부분의 편집 작업에 적합합니다. 16 GB MacBook Air로 2 TB 아카이브를 탐색하는 사진작가라면 캐시가 내장 SSD를 가득 채우지 않도록 캐시 최대 크기를 설정할 수도 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager showing cloud drives mounted on macOS" class="img-large img-center" />

마운트는 Mount Manager나 메뉴 막대의 트레이 아이콘에서 관리할 수 있습니다. PLUS 라이선스에서는 Auto mount가 로그인할 때마다 드라이브를 다시 연결합니다.

## 미리 손봐 두면 좋은 macOS 설정 두 가지

macOS 개인정보 보호 제어 때문에 RcloneView 안에서 데스크탑, 문서, 다운로드 폴더가 비어 보일 수 있습니다. **System Settings > Privacy & Security > Files & Folders**에서 접근 권한을 부여하거나 RcloneView를 **Full Disk Access**에 추가한 뒤 앱을 다시 시작하세요.

대규모 동기화 작업은 macOS의 기본 열린 파일 수 제한(256–1024)에 걸릴 수도 있습니다. "too many open files" 오류가 보이면 `/Library/LaunchDaemons/limit.maxfiles.plist`에 LaunchDaemon plist를 만들어 소프트 및 하드 제한을 524288로 올린 다음 재부팅하세요.

## Mac에서 예약 백업하기

동기화 마법사로 단방향 작업을 설정하세요. 예를 들어 `~/Projects`를 Backblaze B2 버킷으로 보내는 작업을 만들고, 먼저 Dry Run으로 무엇이 바뀌는지 정확히 확인합니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다. PLUS 라이선스에서는 앱이 메뉴 막대에 있는 동안 예약 단계에서 cron 형식의 일정으로 작업을 실행할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled cloud backup job in RcloneView on macOS" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하고 Universal `.dmg`에서 Applications로 드래그합니다.
2. System Settings에서 Files & Folders 또는 Full Disk Access 권한을 부여한 뒤 앱을 다시 실행합니다.
3. **New Remote**로 클라우드 리모트를 추가하고 Finder에서 보고 싶은 리모트를 마운트합니다.
4. 동기화 작업을 만들고 Dry Run으로 확인한 다음, Transferring 탭에서 진행 상황을 지켜봅니다.

RcloneView를 설정해 두면 Mac 한 곳에서 사용 중인 클라우드 계정을 마운트, 동기화, 백업할 수 있습니다.

---

**관련 가이드:**

- [macOS Sequoia에서 RcloneView 사용하기 — 클라우드 스토리지 동기화](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [macOS Too Many Open Files 오류 해결](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [macOS 빈 폴더 및 권한 문제 해결](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
