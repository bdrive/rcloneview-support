---
slug: rcloneview-garuda-linux-cloud-sync
title: "Garuda Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업"
authors:
  - steve
description: "Garuda Linux에서 RcloneView를 실행해 90개 이상의 클라우드 제공업체를 완전한 데스크톱 GUI로 마운트, 동기화, 백업하세요. AUR 패키지가 필요 없습니다."
keywords:
  - rcloneview garuda linux
  - garuda linux 클라우드 동기화
  - garuda linux 클라우드 스토리지
  - install rcloneview arch based linux
  - garuda linux 백업
  - 클라우드 스토리지 garuda
  - rcloneview appimage garuda
  - garuda linux 파일 동기화
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Garuda Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업

> Garuda Linux의 성능 최적화 데스크톱은 RcloneView의 가벼운 Flutter GUI와 잘 어울려 클라우드 스토리지를 터미널 없이 관리할 수 있습니다.

Garuda Linux는 주말 내내 설정하지 않고도 Arch 기반 시스템을 원하는 사람들을 위해 만들어졌습니다 — 미리 튜닝된 데스크톱, 합리적인 기본값, 그리고 빠르게 작업을 시작할 수 있는 데 초점을 맞춥니다. RcloneView는 클라우드 스토리지에 대해서도 같은 철학을 따릅니다: rclone 명령을 직접 스크립팅할 필요 없이 하나의 창에서 90개 이상의 클라우드 제공업체를 마운트, 동기화, 백업하는 네이티브 데스크톱 앱입니다. Garuda가 기본적으로 완전한 그래픽 데스크톱을 제공하므로, RcloneView는 의도된 그대로 실행됩니다 — 헤드리스 우회 방법이 필요 없습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Garuda Linux에 RcloneView 설치하기

RcloneView는 오직 [rcloneview.com](https://rcloneview.com/src/download.html)에서만 배포됩니다 — `pacman`이나 AUR 헬퍼로 가져올 수 있는 AUR 패키지는 없습니다. 설치 없이 사용할 수 있는 휴대용 옵션을 원한다면 `.AppImage` 빌드를 다운로드하거나, 시스템 패키지 데이터베이스에 등록되는 것을 선호한다면 `.rpm` 패키지를 받으세요. x86_64와 aarch64 빌드가 모두 제공되므로, Garuda 설치를 실행 중인 하드웨어에 맞는 것을 선택하면 됩니다.

RcloneView는 Qt나 Electron이 아니라 Flutter와 Dart로 제작되어, 별도 툴킷의 의존성 체인을 거치지 않습니다. 트레이 아이콘을 위해 GTK+3와 트레이 인디케이터 라이브러리(libayatana-appindicator3-1 또는 libappindicator3-1)에 의존하며, 둘 다 Garuda의 KDE, GNOME 및 기타 데스크톱 에디션에서 표준으로 제공됩니다. 클라우드 스토리지를 로컬 드라이브로 마운트하려면 `fuse3`가 설치되어 있는지 확인하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Garuda Linux에서 RcloneView 리모트 설정 화면" class="img-large img-center" />

## 마운트 및 리모트 설정하기

Garuda의 데스크톱 에디션은 X11 또는 Wayland로 실행되며, RcloneView의 마운트 기능은 둘 다와 함께 작동합니다. Remote 탭을 통해 리모트를 추가하고, Google Drive나 Dropbox 같은 제공업체는 OAuth로 인증하거나, S3 호환 및 프로토콜 기반 스토리지는 자격 증명을 직접 입력하세요. RcloneView의 기본 Linux 마운트 유형인 nfsmount를 사용해 해당 리모트를 로컬 경로로 마운트하고, Garuda의 네이티브 파일 관리자를 통해 마치 디스크에 있는 것처럼 클라우드 파일을 탐색하세요.

캐시 모드는 기본적으로 "writes"로 설정되어 응답성과 메모리 사용량의 균형을 맞춥니다 — 대용량 파일이 가득한 리모트를 마운트하고 로컬 캐싱을 더 세밀하게 제어하고 싶다면 확인해 볼 가치가 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Linux에서 RcloneView의 Mount Manager로 클라우드 리모트 마운트하기" class="img-large img-center" />

## 백업 및 동기화 작업 자동화하기

리모트를 연결한 후에는 Job Manager가 반복 작업을 처리합니다: 로컬 폴더를 클라우드 스토리지로 백업하거나, 두 제공업체를 서로 동기화하거나, 하나의 소스를 여러 대상으로 동시에 미러링할 수 있습니다. 원하지 않는 파일 유형을 건너뛰도록 필터를 설정하고, 먼저 Dry Run을 실행해 작업이 무엇을 변경할지 미리 확인하세요.

Job History는 모든 실행 — 시작 시간, 소요 시간, 전송 속도, 파일 개수 — 을 기록하므로, 예약된 백업이 로그 파일을 뒤지지 않고도 확인할 수 있는 감사 기록을 남깁니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 클라우드 동기화 작업 예약하기" class="img-large img-center" />

## 시작하기

1. **AppImage 또는 .rpm 다운로드** [rcloneview.com](https://rcloneview.com/src/download.html)에서 — AUR 패키지는 존재하지 않으므로 직접 설치하세요.
2. **fuse3와 GTK+3 확인** 마운트와 트레이 지원을 위해 시스템에 있는지 확인하세요.
3. **첫 클라우드 리모트 추가** Remote 탭을 통해 추가하고 마운트하거나 동기화 작업을 설정하세요.
4. **반복 작업 저장** Job Manager에서, 백업이 매번 동일한 방식으로 실행되도록 하세요.

Garuda의 즉시 사용 가능한 데스크톱과 RcloneView의 네이티브 GUI는 훌륭한 조합을 이룹니다 — 한 번 다운로드하고, 클라우드를 연결하고, Garuda가 만들어진 그래픽 환경을 벗어나지 않고 모든 것을 관리하세요.

---

**관련 가이드:**

- [Arch Linux에 RcloneView 설치하기 — 클라우드 동기화 및 백업 가이드](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [Manjaro Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화](https://rcloneview.com/support/blog/rcloneview-manjaro-linux-cloud-sync)
- [Fedora와 RHEL에 RcloneView 설치하기 — 클라우드 동기화 가이드](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-linux-cloud-sync)

<CloudSupportGrid />
