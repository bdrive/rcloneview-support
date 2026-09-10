---
slug: rcloneview-windows-11-cloud-sync
title: "Windows 11에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업"
authors:
  - morgan
description: "Windows 11에서 RcloneView를 설치하고 실행하여 하나의 데스크톱 애플리케이션에서 90개 이상의 클라우드 스토리지 제공업체를 마운트, 동기화, 백업하세요."
keywords:
  - rcloneview windows 11
  - windows 11 클라우드 스토리지 동기화
  - windows 11 클라우드 드라이브 마운트
  - windows 11 클라우드 백업
  - rclone gui windows 11
  - windows 11 파일 탐색기 클라우드
  - windows 멀티 클라우드 데스크톱
  - windows 클라우드 동기화 소프트웨어
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

# Windows 11에서 RcloneView 사용하기 — 클라우드 스토리지 동기화 및 백업

> Windows 11은 이전 버전에 비해 파일 탐색기와 권한 모델을 더 엄격하게 바꿨습니다 — 마운트, 동기화, 클라우드 스토리지 백업을 위해 RcloneView를 원활하게 실행하는 방법을 소개합니다.

Windows 11의 새로워진 셸과 더 엄격해진 기본 보안 정책은 스토리지와 드라이브 문자를 다루는 데스크톱 앱에 몇 가지 변화를 가져옵니다. **RcloneView**는 Windows 11에서 표준 데스크톱 애플리케이션으로 네이티브 실행되며, Google Drive, OneDrive, Dropbox, S3 호환 스토리지마다 별도의 벤더 앱을 오가는 대신 90개 이상의 클라우드 스토리지 제공업체를 하나의 인터페이스에서 탐색, 동기화, 마운트할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Windows 11에 RcloneView 설치하기

RcloneView는 x86-64 시스템용으로 빌드된 Inno Setup 설치 프로그램(`setup_rclone_view-{version}.exe`) 형태로 제공됩니다 — Windows ARM64 빌드는 없으므로 이 가이드는 표준 Windows 11 PC와 노트북에 적용됩니다. [rcloneview.com](https://rcloneview.com/src/download.html)에서 설치 프로그램을 다운로드하고 실행한 다음 설치 마법사를 완료하세요.

Windows 11에는 VC++ 2015-2022 재배포 가능 패키지가 필요하며, 설치 프로그램이 이를 감지하지 못하면 설치를 안내합니다. RcloneView는 내장 rclone 바이너리와 함께 제공되므로 별도의 rclone 설치 단계가 필요 없습니다 — 앱은 기본적으로 `http://127.0.0.1:5582`를 통해 내장된 rclone 인스턴스와 통신합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 클라우드 리모트 추가하기" class="img-large img-center" />

## 클라우드 스토리지를 드라이브 문자로 마운트하기

Windows 11에서 RcloneView가 제공하는 가장 유용한 기능 중 하나는 클라우드 리모트를 로컬 드라이브로 마운트하는 것입니다. Remote Explorer 패널에서 마운트할 리모트를 선택하고, 패널 툴바의 마운트 아이콘을 클릭한 다음, 자동 할당 또는 수동 드라이브 문자를 선택하고 Save and mount를 클릭하세요. 그러면 리모트가 마치 물리 디스크처럼 파일 탐색기에 나타납니다.

Windows 11은 기본적으로 `cmount` 마운트 유형을 사용합니다. 로컬 디스크 대신 네트워크 드라이브로 표시되도록 마운트를 구성할 수도 있고, 응답성을 우선할지 최근 사용한 파일의 오프라인 접근을 우선할지에 따라 VFS 캐시 모드(off, minimal, writes, full)를 조정할 수도 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView의 Mount Manager에서 리모트 마운트하기" class="img-large img-center" />

## 파일 동기화 및 백업

마운트 외에도 RcloneView의 동기화 마법사를 사용하면 연결된 두 리모트 사이 또는 로컬 Windows 11 폴더와 클라우드 제공업체 사이에 단방향 동기화 작업을 구성할 수 있습니다. FREE 라이선스에서 S3, Azure, Backblaze B2에 대한 완전한 읽기/쓰기 액세스로 연결한 다음, 예약 백업 작업을 설정하여 Documents 또는 프로젝트 폴더가 클라우드 스토리지로 자동으로 미러링되도록 하세요.

4단계 동기화 마법사는 소스 및 대상 선택, 전송 동시성, 필터링 규칙(파일 크기, 기간, 폴더 깊이), 그리고 PLUS 라이선스에서는 crontab 방식의 예약을 다룹니다. Dry Run 옵션을 사용하면 실제로 변경되기 전에 복사되거나 삭제될 항목을 정확히 미리 볼 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 클라우드 간 전송 작업 구성하기" class="img-large img-center" />

## 시스템 트레이에서 작업 모니터링하기

RcloneView는 Windows 11 시스템 트레이로 최소화되며, 여기서 마운트된 드라이브를 확인하고, 마운트를 켜고 끄고, 전체 창을 다시 열지 않고도 새 마운트를 시작할 수 있습니다. 진행 중인 전송은 메인 창 하단의 Transferring 탭에 표시되며, 진행률, 속도, 파일 수를 라이브로 보여줍니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하고 Windows 설치 프로그램을 실행하세요.
2. Remote 탭 > New Remote를 통해 첫 클라우드 리모트를 추가하세요.
3. 드라이브 문자로 마운트하거나 로컬 Windows 11 폴더로의 동기화 작업을 구성하세요.
4. Job History 패널에서 첫 전송이 성공적으로 완료되었는지 확인하세요.

RcloneView를 설치하면 Windows 11에서 각 클라우드 제공업체마다 별도의 동기화 클라이언트를 설치하지 않고도 수십 개의 클라우드 제공업체에 접근할 수 있는 일관된 방법을 얻게 됩니다.

---

**관련 가이드:**

- [Windows 10에서 RcloneView 사용하기 — 클라우드 스토리지 동기화](https://rcloneview.com/support/blog/rcloneview-windows-10-cloud-sync)
- [Windows Server에서 RcloneView 사용하기 — 클라우드 백업](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [Windows에서 마운트 드라이브 문자 충돌 해결하기](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
