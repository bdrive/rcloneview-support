---
slug: fix-auto-mount-not-working-startup-rcloneview
title: "시작 시 자동 마운트가 작동하지 않을 때 해결하기 — RcloneView로 클라우드 드라이브 복구"
authors:
  - steve
description: "재부팅 후 클라우드 드라이브가 사라졌나요? 라이선스, Launch at login, 드라이브 문자, Linux의 FUSE, macOS 권한을 점검해 RcloneView 시작 시 자동 마운트를 해결하세요."
keywords:
  - 자동 마운트 작동 안 함
  - 시작 시 클라우드 드라이브 마운트 안 됨
  - rcloneview 자동 마운트
  - 부팅 시 클라우드 스토리지 마운트
  - 재부팅 후 마운트 드라이브 사라짐
  - rclone 마운트 시작 문제 해결
  - 로그인 시 클라우드 드라이브 실행
  - linux fuse 마운트 오류
  - 드라이브 문자 충돌 마운트
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 시작 시 자동 마운트가 작동하지 않을 때 해결하기 — RcloneView로 클라우드 드라이브 복구

> 재부팅할 때마다 클라우드 드라이브가 사라진다면, 짧은 점검 목록만으로 대부분 완전히 되살릴 수 있습니다.

Google Drive나 S3 버킷의 마운트를 설정했고 기대한 대로 작동했는데, 재시작 후 드라이브 문자나 마운트 폴더가 사라졌습니다. 자동 마운트는 여러 설정이 함께 맞아떨어져야 합니다. 앱이 시작되어야 하고, 마운트가 자동 마운트로 지정되어 있어야 하며, 운영체제가 이를 허용해야 합니다. 이 가이드는 RcloneView에서 각 원인을 하나씩 살펴봅니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 라이선스와 자동 마운트 설정 확인

**Auto Mount on Startup**은 PLUS 라이선스 기능입니다. FREE 라이선스에서도 마운트와 언마운트는 모두 작동하지만, 앱을 실행한 뒤 각 마운트를 수동으로 시작해야 합니다. 메인 창 하단 푸터에서 어떤 라이선스가 활성화되어 있는지 확인할 수 있습니다.

PLUS가 활성화되어 있다면 Remote 탭에서 **Mount Manager**를 열고 해당 마운트에 **Auto mount**가 켜져 있는지 확인하세요. 마운트가 활성 상태일 때는 Edit가 비활성화되므로, 먼저 언마운트한 뒤 설정을 편집하고 **Save and mount**를 선택하세요.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView Mount Manager에서 자동 마운트 활성화" class="img-large img-center" />

## RcloneView가 실제로 시작되는지 확인

자동 마운트는 RcloneView가 실행될 때 동작하므로, 앱 자체가 로그인 시 시작되어야 합니다. **Settings > General**에서 **Launch at login**을 켜세요. 앱이 바로 시스템 트레이로 열리기를 원한다면 **Start minimized**도 켜세요. 그러면 트레이 메뉴에 마운트된 드라이브가 표시되고 각각을 켜고 끌 수 있습니다.

**Quit on close**도 확인하세요. 이 옵션이 켜져 있으면 창을 닫을 때 앱이 종료되고 드라이브가 언마운트됩니다. RcloneView와 그 마운트를 백그라운드에서 계속 실행하려면 이 옵션을 끄세요.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneView 탐색기에서 클라우드 폴더 마운트" class="img-large img-center" />

## 플랫폼별 차단 요인 해결

**Windows:** 마운트가 고정 드라이브 문자를 사용하는데 USB 메모리나 네트워크 공유가 먼저 그 문자를 차지했다면 마운트가 연결되지 않습니다. **Target**을 Auto로 설정하거나 다른 곳에서 사용하지 않는 문자를 선택하세요.

**Linux:** 마운트에는 FUSE가 필요합니다(fuse3 권장). 마운트는 기본적으로 nfsmount를 사용하며, 앱에는 GTK+3과 실행 중인 X11 또는 Wayland 데스크톱 세션이 필요합니다. RcloneView는 GUI 애플리케이션이므로 헤드리스 systemd 서비스로 마운트를 시작할 수 없습니다.

**macOS:** 마운트 지점이 Desktop, Documents, Downloads 안에 있다면 **Privacy & Security > Files & Folders** 또는 **Full Disk Access**에서 RcloneView에 접근 권한을 부여한 뒤 앱을 다시 시작하세요.

## 그래도 안 되면 로그 확인

만료된 OAuth 토큰이나 부팅 시 네트워크 지연도 마운트를 막을 수 있습니다. Settings > Embedded Rclone에서 **rclone logging**을 켜고, 로그 레벨을 DEBUG로 설정한 다음, 임베디드 rclone을 다시 시작하고 재부팅하세요. 로그에 정확한 오류가 표시됩니다. 인증 오류라면 리모트를 편집해 다시 연결하고, 네트워크 오류라면 보통 트레이에서 다시 마운트하면 해결됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="인증 오류 후 RcloneView에서 클라우드 리모트 다시 연결" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. PLUS 라이선스를 확인하고 Mount Manager에서 각 마운트의 **Auto mount**를 켜세요.
3. Settings > General에서 **Launch at login**을 켜고 **Quit on close**를 끄세요.
4. 드라이브 문자, FUSE, macOS 권한 문제를 해결한 뒤 재부팅해서 테스트하세요.

점검 목록을 모두 통과하면, 작업을 시작할 때마다 클라우드 드라이브가 준비되어 있습니다.

---

**관련 가이드:**

- [RcloneView로 시작 시 클라우드 스토리지 자동 마운트하기](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [RcloneView로 Windows 마운트 드라이브 문자 충돌 해결하기](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)
- [RcloneView로 rclone 마운트 FUSE 오류 해결하기](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
