---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Linux에서 사라진 시스템 트레이 아이콘 해결 — RcloneView의 백그라운드 제어 되살리기"
authors:
  - steve
description: "Linux에서 RcloneView 트레이 아이콘이 보이지 않나요? AppIndicator 라이브러리를 설치하고 데스크톱의 트레이 지원을 켜서 마운트와 백그라운드 작업 제어를 되찾으세요."
keywords:
  - rcloneview 트레이 아이콘 linux 안 보임
  - linux 시스템 트레이 아이콘 표시 안 됨
  - libayatana-appindicator3-1
  - libappindicator3-1
  - gnome appindicator 트레이
  - rcloneview linux 문제 해결
  - linux 클라우드 마운트 트레이 메뉴
  - linux GUI 백그라운드 동기화
  - rcloneview ubuntu 트레이
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
  - ubuntu
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Linux에서 사라진 시스템 트레이 아이콘 해결 — RcloneView의 백그라운드 제어 되살리기

> 트레이 아이콘이 없으면 마운트를 빠르게 켜고 끌 수도, 최소화한 앱으로 쉽게 돌아갈 수도 없습니다. 아이콘을 되살리는 방법을 소개합니다.

Windows와 macOS에서는 RcloneView 트레이 아이콘이 그냥 나타납니다. Linux에서는 앱이 제어할 수 없는 두 가지에 달려 있습니다. 시스템에 설치된 AppIndicator 라이브러리와, 인디케이터 아이콘을 표시하는 데스크톱 환경입니다. 둘 중 하나라도 없으면 RcloneView는 실행되지만, 마운트된 드라이브 목록을 보여 주고 마운트를 전환하며 창을 다시 여는 아이콘은 나타나지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 아이콘이 사라지는 이유

RcloneView는 Flutter 데스크톱 앱입니다. Linux에서는 실행 중인 X11 또는 Wayland 세션, GTK+ 3.0, 그리고 시스템 트레이를 위한 **libayatana-appindicator3-1** 또는 **libappindicator3-1**이 필요합니다. `.deb`와 `.rpm` 패키지는 Ubuntu 22.04 LTS를 기준으로 빌드·테스트되므로, 최소 설치 환경이나 다른 배포판, 또는 간소화된 시스템에서 실행한 AppImage에는 인디케이터 라이브러리가 빠져 있을 수 있습니다.

두 번째 원인은 데스크톱입니다. 일부 환경, 특히 기본 GNOME은 인디케이터 확장을 켜기 전까지 AppIndicator 아이콘을 표시하지 않습니다. 라이브러리가 설치되어 있어도 아이콘이 계속 숨겨져 있을 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Linux 트레이 아이콘이 없을 때 대안으로 쓰는 RcloneView의 Mount Manager" class="img-large img-center" />

## 1단계: AppIndicator 라이브러리 설치

Debian, Ubuntu 및 그 파생 배포판에서는 배포판 저장소에서 `libayatana-appindicator3-1`(이전 릴리스에서는 `libappindicator3-1`)을 설치하세요. Fedora 및 RHEL 계열 시스템에서는 해당 릴리스가 제공하는 ayatana 또는 libappindicator GTK3 패키지를 설치하세요. GTK+ 3이 설치되어 있는지도 확인하세요.

RcloneView를 완전히 종료한 뒤 다시 시작하세요. 트레이는 앱이 실행될 때 설정되므로, 앱이 열려 있는 동안 설치한 라이브러리는 재시작하기 전까지 적용되지 않습니다.

## 2단계: 데스크톱에서 인디케이터 지원 켜기

GNOME에서는 배포판의 확장 관리자를 통해 AppIndicator/KStatusNotifierItem 확장을 켜세요. Ubuntu는 기본적으로 켜진 상태로 하나를 제공합니다. KDE Plasma, Xfce, Cinnamon, MATE는 자체 패널 또는 알림 영역 위젯을 통해 인디케이터 아이콘을 표시합니다. 해당 위젯이 패널에 있고 숨겨지지 않았는지 확인하세요.

타일링 창 관리자를 사용한다면 StatusNotifierItem을 지원하는 바를 추가하세요. 그렇지 않으면 아이콘이 나타날 곳이 없습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Linux의 RcloneView Explorer에서 클라우드 리모트 마운트하기" class="img-large img-center" />

## 3단계: 최소화 상태로 시작 및 닫을 때 종료 설정 확인

트레이 아이콘이 없으면 **Start minimized**(최소화 상태로 시작) 때문에 RcloneView가 실행되지 않은 것처럼 보일 수 있습니다. 보이지 않는 트레이로 바로 실행되기 때문입니다. 아이콘이 작동할 때까지 **Settings > General**을 열어 Start minimized를 끄고, **Quit on close**(닫을 때 종료)를 켜서 창을 닫아도 숨겨진 프로세스가 남지 않도록 하세요.

핵심 작업에는 트레이가 필요하지 않습니다. **Mount Manager**로 드라이브를 마운트·언마운트하고, **Job Manager**로 저장된 작업을 실행하며, **Job History**로 무엇이 실행되었고 완료되었는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Linux에서 백그라운드 작업을 확인하는 RcloneView의 Job History" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 x86_64 또는 ARM64용 `.deb`, `.rpm`, `.AppImage`로 **RcloneView를 다운로드**하세요.
2. `libayatana-appindicator3-1`(또는 `libappindicator3-1`)을 설치하고 GTK+ 3이 있는지 확인하세요.
3. 데스크톱 환경에서 AppIndicator 지원을 켠 다음 RcloneView를 완전히 재시작하세요.
4. 아이콘이 나타나 트레이에서 마운트에 접근할 수 있게 되면 **Start minimized**를 다시 켜세요.

마운트 전용 도구와 달리 RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 제공하며, 트레이 아이콘이 돌아오면 이 모든 기능을 클릭 한 번으로 사용할 수 있습니다.

---

**관련 가이드:**

- [시스템 트레이와 백그라운드 동기화 — RcloneView에서 클라우드 작업을 계속 실행하기](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [Ubuntu와 Debian Linux에 RcloneView 설치하기 — 완전 설정 가이드](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView에서 rclone 마운트 및 FUSE 오류 해결하기](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
