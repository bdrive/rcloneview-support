---
slug: rcloneview-kali-linux-cloud-sync
title: "Kali Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업"
authors:
  - jay
description: "Kali Linux에 RcloneView를 설치하여 침투 테스트 증거, 보고서, 캡처된 데이터를 위한 클라우드 스토리지를 마운트, 동기화, 암호화하세요."
keywords:
  - RcloneView Kali Linux
  - Kali Linux 클라우드 스토리지
  - Kali Linux 클라우드 동기화
  - Kali Linux 클라우드 드라이브 마운트
  - Debian 기반 클라우드 백업
  - 침투 테스트 클라우드 백업 암호화
  - RcloneView Linux 설치
  - Kali Linux 백업 도구
  - GTK 클라우드 동기화 앱
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kali Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업

> 기존 XFCE 데스크톱 작업 흐름을 벗어나지 않고 Kali Linux에서 클라우드 스토리지를 마운트, 동기화, 암호화하세요.

Kali Linux는 주로 보안 테스트에 사용되는 Debian 기반 배포판이며, 침투 테스트 작업은 스크린샷, 패킷 캡처, 보고서를 꾸준히 생성해 로컬 디스크에서 빠르게 이동시켜야 합니다. RcloneView는 Kali 사용자에게 터미널에서 rclone 명령을 직접 작성하지 않고도 90개 이상의 클라우드 제공업체를 연결하고, 로컬 드라이브로 마운트하고, 예약된 동기화 작업을 실행할 수 있는 그래픽 방식을 제공합니다. Kali는 기본적으로 완전한 X11/Wayland 데스크톱과 함께 제공되므로, RcloneView의 GUI는 다른 Debian 계열 배포판에서와 동일하게 작동합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kali Linux에 RcloneView 설치하기

Kali는 Debian을 기반으로 하므로, [rcloneview.com](https://rcloneview.com/src/download.html)에서 받은 공식 `.deb` 패키지는 `dpkg -i` 실행 후 종속성을 해결하는 `apt-get install -f`로 깔끔하게 설치됩니다. RcloneView는 시스템 트레이 아이콘을 위해 GTK+ 3.0과 `libayatana-appindicator3-1` 또는 `libappindicator3-1` 중 하나가 필요하며, 리모트를 로컬 드라이브로 마운트할 계획이라면 `fuse3`도 필요합니다. RcloneView를 위한 AUR, Snap, Flatpak, APT 저장소는 존재하지 않습니다 — `.deb` 파일이 Kali에서 지원되는 유일한 설치 경로이므로, 그렇지 않다고 주장하는 서드파티 패키지 목록은 건너뛰세요.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

RcloneView는 내장된 rclone 바이너리와 함께 제공되므로 처음 실행할 때 추가로 설정할 것이 없습니다 — 앱은 자동으로 `127.0.0.1:5582`를 통해 통신합니다.

## 현장 작업을 위한 클라우드 스토리지 마운트

리모트가 연결되면 Explorer 패널에서 선택하고 패널 툴바의 Mount 아이콘을 클릭해 Linux의 `nfsmount`로 로컬 드라이브처럼 노출할 수 있습니다. 이는 전체 데이터 세트를 먼저 다운로드하지 않고도 로컬 도구에서 직접 공유된 Google Drive나 Box 폴더에 저장된 증거를 검토할 때 유용합니다. 원본 파일을 변경할 위험 없이 탐색해야 하는 작업을 위해 마운트 설정에서 읽기 전용 모드를 사용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a remote folder from the RcloneView Explorer panel" class="img-large img-center" />

## 백업 암호화 및 자동화

민감한 침투 테스트 데이터는 기기를 떠나기 전에 암호화되어야 합니다. RcloneView의 Crypt 가상 리모트는 기존 리모트를 감싸 업로드 전에 파일 이름과 내용을 암호화하며, 일반 전송에 사용되는 동일한 4단계 동기화 마법사가 암호화된 계층에도 그대로 작동합니다. S3, Azure, Backblaze B2는 FREE 라이선스에서도 완전한 읽기/쓰기로 연결할 수 있으므로, 암호화된 오프사이트 사본에 유료 등급이 필요하지 않습니다. 무인 백업을 위한 크론탭 방식 예약은 PLUS 라이선스 기능입니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring encrypted sync job in RcloneView" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 x86_64 또는 aarch64용 `.deb`를 받으세요.
2. GTK+3, appindicator, FUSE 종속성을 가져오기 위해 `dpkg -i rclone_view-*.deb && apt-get install -f`로 설치하세요.
3. 클라우드 리모트를 추가하고, 민감한 데이터의 경우 첫 동기화를 실행하기 전에 Crypt 리모트로 감싸세요.
4. 각 실행 후 Job History를 확인해 전송 수를 확인하고 오류를 조기에 발견하세요.

RcloneView가 설치된 Kali는 침투 테스트 산출물을 이미 사용 중인 데스크톱을 벗어나지 않고도 빠르고 암호화된 방식으로 로컬 디스크에서 이동시킬 수 있음을 의미합니다.

---

**관련 가이드:**

- [Debian Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [모든 SFTP 서버를 RcloneView에 연결하기 — 클라우드 스토리지로 원격 서버 동기화](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [방화벽 및 백신이 클라우드 동기화를 차단하는 문제 해결 — RcloneView로 연결 오류 해결하기](https://rcloneview.com/support/blog/fix-firewall-antivirus-blocking-cloud-sync-rcloneview)

<CloudSupportGrid />
