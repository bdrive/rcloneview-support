---
slug: rcloneview-windows-11-cloud-sync-backup
title: "Windows 11에서 RcloneView — 클라우드 스토리지 동기화 및 백업"
authors:
  - tayson
description: "Windows 11에 RcloneView를 설치하고 90개 이상의 클라우드 제공업체 간 파일 동기화를 시작하세요. 설치, 리모트 구성, 예약 백업을 다루는 완전한 설정 가이드입니다."
keywords:
  - RcloneView Windows 11
  - Windows 11 cloud sync tool
  - cloud storage backup Windows 11
  - rclone GUI Windows 11
  - Windows 11 file sync cloud
  - RcloneView installation Windows
  - cloud backup software Windows 11
  - multi-cloud sync Windows 11
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Windows 11에서 RcloneView — 클라우드 스토리지 동기화 및 백업

> RcloneView는 단일 `.exe` 설치 프로그램으로 Windows 11에 네이티브로 설치되며, rclone을 자동으로 번들로 포함합니다. 90개 이상의 클라우드 스토리지 제공업체에 연결하고 동기화하는 데 명령줄 설정이 필요하지 않습니다.

Windows 11에는 OneDrive 동기화가 기본으로 포함되어 있지만, 이는 하나의 제공업체만 지원합니다. RcloneView는 이 공백을 메워줍니다. Google Drive, Dropbox, Amazon S3, Backblaze B2, Cloudflare R2 등 90개 이상의 제공업체에 동시에 연결하는 네이티브 Windows 애플리케이션입니다. 사진을 여러 클라우드에 백업하는 일반 사용자든, 배포 아티팩트를 S3에 동기화하는 개발자든, Windows 11에서 RcloneView는 PowerShell이나 명령 프롬프트 스크립팅 없이 시각적 인터페이스를 통해 이를 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Windows 11에 RcloneView 설치하기

[rcloneview.com](https://rcloneview.com/src/download.html)에서 Windows 설치 프로그램을 다운로드하세요. 파일명은 `setup_rclone_view-{version}.exe`이며 Inno Setup 설치 프로그램입니다. 설치 프로그램을 더블클릭하고 설정 마법사를 따라가세요(대부분의 사용자에게는 기본 설치 디렉터리로 충분합니다). 그러면 RcloneView가 시작 메뉴와 작업 표시줄에 나타납니다.

설치 프로그램에는 rclone이 번들로 포함되어 있어 별도의 rclone 설치가 필요하지 않습니다. RcloneView는 내장된 rclone 인스턴스를 `http://127.0.0.1:5582`에서 실행하며 시작됩니다. 앱 하단 푸터에서 rclone 버전과 연결 상태를 확인할 수 있습니다.

**Windows 11 시스템 요구 사항:**
- 아키텍처: x86-64(Intel/AMD 64비트). 참고: Windows ARM64는 지원되지 않습니다.
- VC++ 2015–2022 재배포 가능 패키지(보통 이미 설치되어 있으며, RcloneView 설치 프로그램이 확인합니다)
- Windows Vista 이상(Windows 11 완전히 지원)

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView interface after installation on Windows 11" class="img-large img-center" />

## 클라우드 스토리지 제공업체 추가하기

설치 후 첫 번째 클라우드 스토리지 제공업체를 추가하세요. **Remote 탭 → New Remote**를 클릭하고 제공업체를 선택합니다. OAuth 기반 서비스(Google Drive, Dropbox, OneDrive, Box, pCloud)의 경우 RcloneView가 기본 브라우저를 열어 인증을 진행합니다. 로그인하여 접근 권한을 부여하세요. 자격 증명 기반 서비스(Amazon S3, Backblaze B2, Cloudflare R2, Wasabi)의 경우 액세스 키와 시크릿 키를 직접 입력하세요.

Windows 11의 기본 브라우저(Edge 또는 Chrome)는 OAuth 흐름을 깔끔하게 처리합니다. 조직에서 프록시를 사용하거나 브라우저 기반 OAuth를 제한하는 경우, 네트워크 설정을 확인하고 `localhost` 리디렉션이 허용되는지 확인하세요.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop file upload from Windows 11 Explorer to cloud storage in RcloneView" class="img-large img-center" />

## 클라우드 스토리지를 Windows 드라이브로 마운트하기

RcloneView의 Mount Manager를 사용하면 클라우드 스토리지를 Windows 드라이브 문자(예: Google Drive는 `Z:\`, Backblaze B2는 `Y:\`)로 마운트할 수 있습니다. **Remote 탭 → Mount Manager → New Mount**를 클릭하고 리모트와 폴더를 선택한 후 드라이브 문자를 선택하고 **Save and Mount**를 클릭하세요.

마운트된 클라우드 드라이브는 로컬 드라이브와 함께 파일 탐색기에 즉시 표시됩니다. 모든 애플리케이션이 마운트된 드라이브에서 파일을 읽고 쓸 수 있어, Office, Adobe Creative Suite 등 다른 Windows 애플리케이션에서 클라우드 파일에 직접 접근할 때 유용합니다. **Auto Mount**(PLUS 라이선스)를 활성화하면 Windows 시작 시 클라우드 드라이브가 자동으로 마운트됩니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting cloud storage as a Windows drive letter in RcloneView Mount Manager" class="img-large img-center" />

## 예약된 클라우드 백업 설정하기

RcloneView의 Job Manager를 사용해 자동화된 백업 작업을 생성하세요. 일반적인 Windows 11 설정 예시: `C:\Users\{user}\Documents\`를 Backblaze B2로 매일 밤 동기화하고, `C:\Users\{user}\Pictures\`를 Google Drive로 매주 동기화합니다. 각 작업은 예약된 시간에 백그라운드에서 실행되며, RcloneView는 Windows 시스템 트레이로 최소화되어 메인 창을 열어두지 않아도 예약된 작업을 계속 실행합니다.

데스크톱 알림(Settings → Notifications → Show sync completion notification)을 활성화하면 각 백업 작업이 완료될 때 Windows 11 토스트 알림을 받을 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요(Windows x86-64 설치 프로그램).
2. 설치 프로그램을 실행하고 시작 메뉴에서 RcloneView를 실행하세요.
3. New Remote를 통해 클라우드 스토리지 제공업체를 추가하세요(OAuth 브라우저 또는 자격 증명 입력).
4. Job Manager에서 자동화된 백업을 위한 예약과 함께 동기화 작업을 생성하세요.

Windows 11에서 RcloneView는 여러 개의 개별 클라우드 동기화 클라이언트를 하나의 통합 인터페이스로 대체하여, 파일이 어디로 언제 전송되는지에 대한 완전한 제어권을 제공합니다.

---

**관련 가이드:**

- [Windows Server에서 RcloneView — 클라우드 백업 설정](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [RcloneView로 Amazon S3 버킷을 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [RcloneView로 일일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
