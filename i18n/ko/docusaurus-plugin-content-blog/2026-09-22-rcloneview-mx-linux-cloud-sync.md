---
slug: rcloneview-mx-linux-cloud-sync
title: "MX Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업"
authors:
  - casey
description: ".deb 또는 AppImage로 MX Linux에서 RcloneView를 실행하고, 하나의 GUI에서 드래그 앤 드롭 동기화, 마운트, 예약 백업으로 90개 이상의 클라우드 제공업체를 관리하세요."
keywords:
  - RcloneView MX Linux
  - MX Linux 클라우드 스토리지
  - MX Linux rclone GUI
  - RcloneView deb 설치
  - MX Linux 클라우드 동기화
  - MX Linux 클라우드 백업
  - Debian 기반 클라우드 클라이언트
  - 크로스 플랫폼 클라우드 매니저 Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# MX Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업

> 공식 .deb 패키지나 AppImage를 통해 MX Linux에서 RcloneView를 실행하고, 네이티브 GUI에서 rclone이 지원하는 모든 클라우드 리모트를 관리하세요.

MX Linux는 Debian의 다소 보수적인 패키지 버전을 그대로 가져오지 않으면서도 가볍고 Debian 기반이라는 평판을 쌓아왔으며, 이는 오래된 하드웨어와 미니멀한 데스크톱 환경에서 흔히 선택되는 이유입니다. 이러한 조합은 클라우드 파일 매니저가 방해되지 않기 위해 필요한 것과 정확히 일치합니다: 작은 설치 용량, 실제 데스크톱 환경, 그리고 Debian에서 그대로 물려받은 .deb 호환성입니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화하므로, MX Linux 시스템도 다른 지원 플랫폼과 동일한 기능 세트를 제공받으며 축소된 버전이 아닙니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## MX Linux에 RcloneView 설치하기

MX Linux는 Debian 기반이므로, [공식 다운로드 페이지](https://rcloneview.com/src/download.html)의 `.deb` 패키지는 Debian이나 Ubuntu에서와 동일한 방식으로 설치됩니다 — x86_64 또는 aarch64 빌드를 다운로드하고 원하는 패키지 관리자(MX Package Installer, GDebi, 또는 터미널에서 `dpkg -i`)를 통해 설치하세요. 패키지 관리자를 아예 건드리고 싶지 않다면 `.AppImage` 빌드도 사용할 수 있습니다: 실행 권한을 부여하고 바로 실행하면 되며, 별도의 설치 단계가 필요하지 않습니다.

RcloneView를 위한 MX Linux 전용 저장소나 PPA는 존재하지 않으며, AUR과 같은 커뮤니티 패키지도 없습니다 — 다운로드 페이지가 유일한 공식 배포 채널입니다. 설치하기 전에 시스템 트레이 아이콘을 위해 GTK+ 3.0과 `libayatana-appindicator3-1` 또는 `libappindicator3-1` 중 하나가 있는지 확인하고, 리모트를 로컬 드라이브로 마운트할 계획이라면 FUSE(fuse3 권장)가 설치되어 있는지 확인하세요.

<img src="/support/images/en/blog/new-remote.png" alt="MX Linux에서 새 리모트 대화 상자가 열려 있는 RcloneView 메인 창" class="img-large img-center" />

## 클라우드 리모트 연결하기

MX Linux에서의 리모트 설정은 RcloneView가 지원하는 다른 어떤 Linux 배포판에서와 정확히 동일하게 작동합니다. Remote 탭 > New Remote를 열고 제공업체를 선택한 후, 브라우저 팝업을 통해 인증하거나(Google Drive, Dropbox, OneDrive, Box, pCloud) 자격 증명을 직접 입력하세요(Amazon S3, Backblaze B2, SFTP). 내장된 rclone 바이너리는 기본적으로 `http://127.0.0.1:5582`와 통신하므로, 네트워크의 다른 곳에서 실행 중인 외부 rclone 인스턴스에 특별히 연결하고 싶지 않은 한 별도로 관리할 rclone 설치가 필요 없습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneView로 MX Linux에서 클라우드 리모트를 로컬 드라이브로 마운트하기" class="img-large img-center" />

연결이 완료되면 `nfsmount`를 통해 리모트를 마운트하며, 이는 다른 일반 로컬 경로처럼 동작합니다 — 시스템의 어떤 파일 관리자나 애플리케이션도 그것이 클라우드에 의해 지원된다는 사실을 몰라도 탐색할 수 있습니다.

## 백업 예약하기

하루 대부분 켜져 있는 MX Linux 머신의 경우, 예약된 동기화 작업이 앱을 한 번 설정하면 그대로 두어도 되는 백업 도구로 바꿔줍니다. 4단계 Sync 마법사를 진행하며 캐시 디렉터리나 지나치게 큰 파일을 건너뛰기 위한 필터를 적용하고, PLUS 라이선스에서는 crontab 스타일의 일정을 연결하여 수동으로 시작하지 않아도 작업이 실행되도록 하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 MX Linux에 예약된 클라우드 동기화 작업 만들기" class="img-large img-center" />

Job History는 각 실행의 소요 시간, 전송 속도, 파일 수를 기록하므로, 예약된 백업이 밤사이 조용히 실패하지 않고 실제로 완료되었는지 쉽게 확인할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요 — 아키텍처에 맞는 .deb를 받거나, 설치 단계를 건너뛰고 싶다면 .AppImage를 받으세요.
2. 패키지를 설치하거나(또는 AppImage에 실행 권한을 부여하고) GTK+3와 FUSE가 있는지 확인하세요.
3. Remote 탭 > New Remote를 통해 첫 번째 클라우드 리모트를 추가하세요.
4. 동기화나 마운트를 설정하여 MX Linux에서 클라우드 스토리지 관리를 시작하세요.

어느 패키지를 설치하든, MX Linux는 다른 지원되는 Linux 데스크톱과 동일한 완전한 클라우드 동기화 및 마운트 경험을 제공받습니다.

---

**관련 가이드:**

- [Debian Linux에서 RcloneView 사용하기 — 클라우드 동기화](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Ubuntu 및 Debian Linux에 RcloneView 설치하기](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Linux Mint에서 RcloneView 사용하기 — 클라우드 동기화](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)

<CloudSupportGrid />
