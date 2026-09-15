---
slug: rcloneview-kali-linux-cloud-sync
title: "Kali Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업"
authors:
  - jay
description: "Kali Linux에 RcloneView를 설치하여 안전하고 감사 가능한 GUI 워크플로로 90개 이상의 클라우드 공급자를 마운트, 동기화, 백업하세요."
keywords:
  - RcloneView Kali Linux
  - cloud storage Kali Linux
  - install RcloneView Debian
  - cloud sync penetration testing
  - mount cloud drive Kali
  - rclone GUI Kali Linux
  - backup forensic evidence cloud
  - cloud backup security professionals
  - Kali Linux cloud storage GUI
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

> CLI를 건드리지 않고도 참여(engagement) 데이터, 포렌식 이미지, 클라이언트 산출물을 동기화할 수 있도록 Kali Linux에서 그래픽 방식의 멀티 클라우드 파일 관리자를 실행하세요.

Kali Linux는 침투 테스트와 디지털 포렌식을 위해 만들어진 Debian 기반 배포판이며, Kali로 작업하는 보안팀은 대용량 증거 세트, 패킷 캡처, 클라이언트 보고서를 로컬 스토리지와 클라우드 계정 사이로 옮겨야 하는 경우가 많습니다. RcloneView는 이런 워크플로에 그래픽 파일 관리자를 더해주므로, 다른 도구를 실행하는 것과 같은 데스크톱에서 클라우드 스토리지를 탐색, 동기화, 마운트할 수 있습니다. Kali는 X11이 포함된 완전한 Xfce 데스크톱을 기본 제공하므로 RcloneView 실행에 필요한 디스플레이 요구 사항을 충족합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kali Linux에 RcloneView 설치하기

Kali는 Debian을 기반으로 하므로 [rcloneview.com](https://rcloneview.com/src/download.html)에서 제공하는 공식 `.deb` 패키지는 Debian이나 Ubuntu에서와 동일한 방식으로 설치됩니다 — `rclone_view-{version}-linux-{arch}.deb` 파일을 다운로드하여 `dpkg -i`로 설치하고, 누락된 의존성은 `apt --fix-broken install`로 해결하세요. Kali는 `x86_64` 빌드를 직접 제공하며, 시스템 전체에 패키지를 설치하고 싶지 않다면 설치 없이 바로 실행되는 `.AppImage` 형식이 좋은 대안입니다.

RcloneView는 Flutter 기반 GUI 애플리케이션이며 명령줄 도구가 아니므로, Kali가 기본으로 실행하는 그래픽 Xfce/X11 세션이 필요합니다 — X11 포워딩이나 원격 데스크톱 세션 없이 헤드리스 SSH 연결에서는 실행되지 않습니다. 또한 시스템 트레이 아이콘을 위해 GTK+3과 AppIndicator 라이브러리에 의존하며, 둘 다 표준 Kali 데스크톱 설치에 포함되어 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

## 참여 데이터를 위한 클라우드 스토리지 연결하기

설치가 끝나면 Remote 탭의 New Remote 마법사를 통해 리모트를 추가하세요. Amazon S3, Cloudflare R2, Backblaze B2는 접근 키와 비밀 자격 증명 입력 방식으로 대용량 포렌식 디스크 이미지와 패킷 캡처를 저장하기에 적합하며, Google Drive, OneDrive, Box는 OAuth 브라우저 로그인을 통해 클라이언트 대상 보고서 전달을 처리합니다. RcloneView의 동기화와 Folder Compare 기능은 FREE 라이선스에서도 사용할 수 있으므로, 업그레이드 없이도 캡처한 증거를 클라우드 스토리지에 전송하고 손상 없이 도착했는지 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between cloud remotes in RcloneView on Kali" class="img-large img-center" />

## 증거 백업 동기화 및 검증

증거 보관 연속성(chain-of-custody) 워크플로에서는 동기화 작업을 실행하기 전에 Dry Run을 실행하여 어떤 파일이 복사되거나 삭제될지 정확히 미리 확인한 다음, 이후 Folder Compare로 원본과 대상이 일치하는지 검증하세요. 비교 화면은 크기 차이로 파일을 표시하고 동일한 파일은 나란히 매칭을 보여주므로, 포렌식 이미지가 손상 없이 전송되었는지 확인해야 할 때 유용합니다. 동기화 작업의 Advanced Settings 단계에서 체크섬 비교를 활성화하면 크기만 비교하는 방식보다 더 강력한 무결성 검증을 할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder compare results view in RcloneView" class="img-large img-center" />

## 참여 기간 중 클라우드 스토리지 마운트하기

Mount Manager를 사용해 클라우드 리모트를 로컬 드라이브로 마운트할 수도 있으며, Linux에서는 FUSE와 `nfsmount` 방식을 사용합니다 — `fuse3`가 설치되어 있는지 확인하세요. 이를 통해 별도의 다운로드 단계 없이 다른 Kali 도구에서 클라우드에 저장된 사건 파일을 바로 열 수 있으며, 공유 증거에 실수로 쓰기가 발생하지 않도록 읽기 전용으로 마운트하는 옵션도 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote from the Mount Manager in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요 — `x86_64`용 `.deb` 또는 `.AppImage` 빌드를 받으세요.
2. `dpkg -i`로 설치하세요 (또는 AppImage를 실행 가능하게 만들어 직접 실행하세요).
3. 공급자에 따라 OAuth 로그인이나 자격 증명 입력을 사용해 New Remote 마법사로 클라우드 리모트를 추가하세요.
4. Dry Run을 실행한 다음 실제 동기화 작업을 실행하고, Folder Compare로 결과를 검증하세요.

매 전송 전에 직접 시각적으로 확인할 수 있는 GUI를 사용하면 로컬 디스크와 클라우드 스토리지 전반에서 증거와 클라이언트 산출물을 정리하는 작업의 오류 가능성이 훨씬 줄어듭니다.

---

**관련 가이드:**

- [Ubuntu / Debian Linux에 RcloneView 설치하기](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Debian Linux에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [RcloneView로 보안 기업을 위한 클라우드 스토리지 구축하기](https://rcloneview.com/support/blog/cloud-storage-cybersecurity-companies-rcloneview)

<CloudSupportGrid />
