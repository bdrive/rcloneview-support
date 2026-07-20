---
slug: rcloneview-manjaro-linux-cloud-sync
title: "Manjaro Linux에서 RcloneView를 설치하고 클라우드 동기화에 사용하는 방법"
authors:
  - tayson
description: "Manjaro Linux는 사용자 친화적인 기본 설정과 함께 Arch의 강력함을 제공합니다. pamac, pacman 또는 AppImage를 이용해 Manjaro에 RcloneView를 설치하여 원활한 멀티 클라우드 파일 동기화, 마운트, 백업을 수행하는 방법을 알아보세요."
keywords:
  - rcloneview manjaro linux
  - manjaro cloud sync
  - install rcloneview manjaro
  - manjaro rclone gui
  - arch linux cloud storage
  - manjaro pamac rcloneview
  - manjaro cloud backup
  - manjaro mount cloud drive
  - rcloneview appimage manjaro
  - manjaro aur rcloneview
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Manjaro Linux에서 RcloneView를 설치하고 클라우드 동기화에 사용하는 방법

> Manjaro는 Arch Linux의 롤링 릴리스 강점을 데스크톱 친화적인 패키지로 감싸줍니다. RcloneView를 추가하면 강력한 도구를 누구나 쉽게 사용할 수 있도록 만든다는 Manjaro의 철학에 자연스럽게 어울리는 시각적 멀티 클라우드 파일 매니저를 갖추게 됩니다.

Manjaro Linux는 가장 인기 있는 Arch 기반 배포판 중 하나로 성장했으며, 롤링 릴리스 모델과 AUR(Arch User Repository) 접근성을 제공하면서도 더 쉬운 설치 및 구성 경험을 제공합니다. XFCE, KDE Plasma, GNOME 중 어떤 환경에서 Manjaro를 실행하든 최신 소프트웨어 패키지에 접근할 수 있으며, 선택과 자유를 중시하는 커뮤니티의 지원을 받을 수 있습니다. RcloneView는 Google Drive, OneDrive, Dropbox, AWS S3, Backblaze B2, Wasabi 등 70개 이상의 클라우드 스토리지 제공업체에 걸쳐 파일을 관리할 수 있는 그래픽 인터페이스를 Manjaro 사용자에게 제공함으로써 이를 보완합니다. 이 가이드에서는 Manjaro에서의 설치, 클라우드 리모트 설정, 파일 동기화, 드라이브 마운트, 작업 예약 방법을 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 클라우드 파일 관리를 위해 Manjaro를 선택하는 이유

Manjaro는 RcloneView를 실행하는 플랫폼으로서 여러 가지 장점을 제공합니다.

- **롤링 릴리스** — 배포판 업그레이드 주기를 기다릴 필요 없이 항상 최신 버전의 rclone과 시스템 라이브러리를 사용할 수 있습니다.
- **AUR 접근성** — Arch User Repository는 공식 저장소에는 없는 커뮤니티 관리 패키지를 제공하여 설치 옵션을 넓혀줍니다.
- **하드웨어 감지** — Manjaro의 mhwd 도구는 드라이버를 자동으로 구성하며, 이는 원활한 GUI 경험이 적절한 드라이버 설정에 좌우되는 GPU 가속 데스크톱 환경에서 중요합니다.
- **다양한 데스크톱 환경** — KDE Plasma, XFCE, GNOME, 타일링 윈도우 매니저 중 무엇을 선호하든 RcloneView는 표준 GTK/Qt 호환성을 통해 모두에서 실행됩니다.
- **활발한 커뮤니티** — Manjaro의 포럼과 위키는 이 배포판 특유의 구성상 문제를 해결하기 위한 자료를 제공합니다.

## 사전 준비 사항

Manjaro에 RcloneView를 설치하기 전에 다음을 확인하세요.

- Manjaro Linux (XFCE, KDE, GNOME 또는 커뮤니티 에디션 등 모든 에디션 가능)
- 정상적으로 작동하는 인터넷 연결
- 최소 512MB의 여유 디스크 공간
- 하나 이상의 클라우드 스토리지 제공업체 계정 (Google Drive, OneDrive, S3 등)
- 터미널에 대한 기본적인 이해 (대부분의 작업은 GUI에서 이루어짐)

모든 패키지가 최신 상태인지 확인하기 위해 먼저 시스템을 업데이트하세요.

```bash
sudo pacman -Syu
```

또는 Manjaro의 그래픽 패키지 관리자인 pamac을 사용하세요.

```bash
pamac update
```

## Manjaro에 RcloneView 설치하기

Manjaro에서는 여러 방법으로 RcloneView를 설치할 수 있습니다. 작업 흐름에 가장 잘 맞는 방법을 선택하세요.

### 옵션 1: AppImage (대부분의 사용자에게 권장)

AppImage는 가장 간단한 설치 방법입니다. RcloneView에 필요한 모든 것을 단일 실행 파일에 담고 있어 별도의 의존성 관리가 필요하지 않습니다.

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 최신 RcloneView AppImage를 다운로드합니다.
2. 실행 권한을 부여합니다.

```bash
chmod +x RcloneView-*.AppImage
```

3. 실행합니다.

```bash
./RcloneView-*.AppImage
```

AppImage를 애플리케이션 메뉴에 통합하려면 Manjaro 저장소에서 사용할 수 있는 AppImageLauncher와 같은 도구를 사용하세요.

```bash
sudo pacman -S appimagelauncher
```

설치가 완료되면 AppImage를 더블클릭할 때 데스크톱 환경에 통합할지 묻는 메시지가 표시됩니다.

### 옵션 2: pamac(AUR)을 통한 설치

Manjaro의 pamac 패키지 관리자는 AUR 패키지를 직접 설치할 수 있습니다. 먼저 pamac에서 AUR 지원이 활성화되어 있는지 확인하세요.

1. **Add/Remove Software**(pamac GUI)를 엽니다.
2. **Preferences > Third Party**로 이동하여 AUR 지원을 활성화합니다.
3. `rcloneview`를 검색하여 설치합니다.

또는 터미널에서 다음과 같이 합니다.

```bash
pamac build rcloneview
```

pamac은 필요한 라이브러리를 가져오면서 의존성 해결을 자동으로 처리합니다.

### 옵션 3: rclone을 별도로 설치하고 AppImage 사용하기

GUI는 AppImage를 사용하면서 rclone은 pacman으로 최신 버전을 관리하고 싶다면 다음과 같이 하세요.

```bash
sudo pacman -S rclone fuse3
```

그런 다음 RcloneView AppImage를 다운로드하여 실행하세요. RcloneView는 시스템에 설치된 rclone을 감지하여 사용합니다.

### 설치 확인하기

설치가 끝나면 애플리케이션 메뉴나 터미널에서 RcloneView를 실행하세요. 리모트 탐색기와 작업 관리 패널이 있는 메인 창이 표시됩니다. rclone을 별도로 설치했다면 감지되는지 확인하세요.

```bash
rclone version
```

## 클라우드 리모트 추가하기

RcloneView를 실행한 다음 첫 단계는 클라우드 스토리지 계정을 연결하는 것입니다. RcloneView는 각 제공업체에 대해 안내형 설정을 제공합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. RcloneView 인터페이스에서 **New Remote**를 클릭합니다.
2. 제공업체 목록에서 **Google Drive**를 선택합니다.
3. OAuth 인증 절차를 따릅니다 — 브라우저 창이 열리면 로그인하고 접근을 허용하세요.
4. 접근 범위를 선택합니다 (전체 드라이브 접근, 파일 단위 접근, 읽기 전용).
5. 리모트를 저장합니다.

### OneDrive

1. **New Remote**를 클릭하고 **Microsoft OneDrive**를 선택합니다.
2. 브라우저에서 Microsoft OAuth 절차를 통해 인증합니다.
3. 개인 OneDrive, 비즈니스용 OneDrive, SharePoint 중에서 선택합니다.
4. 리모트를 저장합니다.

### S3 호환 스토리지 (AWS, Wasabi, Backblaze B2, MinIO)

1. **New Remote**를 클릭하고 사용 중인 S3 호환 제공업체를 선택합니다.
2. Access Key ID와 Secret Access Key를 입력합니다.
3. 리전과 엔드포인트를 지정합니다 (Wasabi나 MinIO와 같이 AWS가 아닌 제공업체는 엔드포인트 URL이 필요합니다).
4. 리모트를 저장합니다.

필요한 만큼 리모트를 추가할 수 있습니다. 구성된 모든 리모트는 사이드바에 표시되어 빠르게 접근할 수 있습니다.

## 파일 탐색 및 동기화

리모트 구성이 끝나면 RcloneView의 이중 창 탐색기를 통해 로컬 파일과 클라우드 파일을 나란히 살펴볼 수 있습니다. 폴더 구조를 탐색하고, 파일 세부 정보를 미리 보고, 드래그 앤 드롭이나 툴바 버튼으로 전송을 시작할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### 파일 복사하기

한쪽 창에서 파일이나 폴더를 선택하여 다른 쪽 창의 위치로 복사합니다. 다음과 같은 방식이 가능합니다.

- **로컬 → 클라우드** — Manjaro 파일 시스템의 파일을 연결된 클라우드 리모트로 업로드합니다.
- **클라우드 → 로컬** — 클라우드 스토리지의 파일을 로컬 디스크로 다운로드합니다.
- **클라우드 → 클라우드** — 로컬 머신에 먼저 다운로드하지 않고도 두 클라우드 제공업체 사이에서 파일을 직접 전송합니다.

### 폴더 동기화하기

지속적인 동기화를 위해 두 위치를 동기화 상태로 유지하는 동기화 작업을 생성하세요.

1. 왼쪽 창에서 소스 폴더를, 오른쪽 창에서 대상 폴더를 엽니다.
2. **Sync**를 클릭하고 동기화 방향(단방향 또는 미러)을 구성합니다.
3. 비교 결과를 검토하여 어떤 파일이 추가, 업데이트, 삭제될지 확인합니다.
4. 동기화를 실행합니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## 클라우드 스토리지를 로컬 드라이브로 마운트하기

RcloneView는 모든 클라우드 리모트를 Manjaro의 로컬 파일 시스템 디렉터리로 마운트할 수 있습니다. 이를 통해 파일 관리자(Thunar, Dolphin, Nautilus)나 어떤 애플리케이션에서든 로컬 드라이브처럼 클라우드 파일에 접근할 수 있습니다.

### 마운트 설정하기

1. FUSE가 설치되어 있는지 확인하세요.

```bash
sudo pacman -S fuse3
```

2. RcloneView에서 리모트를 우클릭하거나 Mount Manager로 이동합니다.
3. 로컬 마운트 지점을 선택합니다 (예: `~/CloudDrive/GoogleDrive`).
4. 마운트 옵션을 구성합니다 — 캐시 설정, 읽기 전용/읽기-쓰기, VFS 캐시 모드.
5. **Mount**를 클릭합니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

마운트된 드라이브는 파일 관리자에 표시되며 모든 애플리케이션에서 접근할 수 있습니다. 예를 들어 마운트된 Google Drive 폴더를 미디어 플레이어에서 열거나, 마운트된 S3 버킷에서 CAD 파일을 직접 열 수 있습니다.

### Manjaro에서의 마운트 성능 팁

- 문서 편집기, 미디어 플레이어처럼 무작위 읽기를 수행하는 애플리케이션에서 최상의 성능을 얻으려면 **VFS 캐시 모드 "full"**을 사용하세요.
- **빠른 스토리지에 캐시 디렉터리를 설정**하세요 — NVMe SSD가 있다면 더 빠른 접근을 위해 VFS 캐시를 그곳에 지정하세요.
- API 호출을 줄이기 위해 폴더 구조가 큰 리모트의 경우 **디렉터리 캐시 시간을 늘리세요**.

## 자동 동기화 작업 예약하기

지속적인 백업과 동기화를 위해 RcloneView의 작업 스케줄러를 사용하면 자동으로 실행되는 반복 동기화 작업을 정의할 수 있습니다.

1. 소스 및 대상 리모트와 폴더를 선택하여 동기화 작업을 만듭니다.
2. 작업 스케줄러를 열고 빈도를 설정합니다 — 매시간, 매일, 매주 또는 사용자 지정 cron 표현식.
3. 스케줄을 활성화하면 이후는 RcloneView가 처리합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

Manjaro 사용자에게 흔한 예약 패턴은 다음과 같습니다.

- **~/Documents를 Google Drive로 매일 백업** — 매일 저녁 실행되어 문서를 클라우드에 미러링된 상태로 유지합니다.
- **프로젝트 폴더를 S3로 매주 동기화** — 대용량 프로젝트 파일의 오프사이트 백업을 유지합니다.
- 여러 클라우드 제공업체에 걸쳐 이중화를 위해 공유 팀 폴더를 **매시간 동기화**합니다.

## Manjaro 관련 문제 해결하기

### FUSE 권한

마운트가 권한 오류로 실패하면 사용자가 `fuse` 그룹에 속해 있는지 확인하세요.

```bash
sudo usermod -aG fuse $USER
```

그룹 변경 사항을 적용하려면 로그아웃 후 다시 로그인하세요.

### 커널 모듈 로딩

일부 Manjaro 설치에서는 FUSE 커널 모듈이 자동으로 로드되지 않을 수 있습니다. 수동으로 로드하세요.

```bash
sudo modprobe fuse
```

이를 영구적으로 적용하려면 `/etc/modules-load.d/fuse.conf`에 `fuse`를 추가하세요.

### AppImage 폰트 렌더링

AppImage 버전에서 폰트가 이상하게 보인다면 필요한 폰트 패키지를 설치하세요.

```bash
sudo pacman -S noto-fonts ttf-liberation
```

### OAuth 브라우저 인증

리모트 설정 중 OAuth 브라우저 창이 자동으로 열리지 않으면 `xdg-open`이 올바르게 구성되어 있는지 확인하세요.

```bash
xdg-settings get default-web-browser
```

기본 브라우저가 설정되어 있지 않다면 데스크톱 환경의 설정을 통해 하나를 구성하세요.

## 시작하기

1. **Manjaro 업데이트** — `sudo pacman -Syu`를 실행하여 시스템을 최신 상태로 유지하세요.
2. **RcloneView 설치** — 간편함을 원한다면 AppImage를, AUR 통합을 원한다면 pamac을 사용하세요.
3. **클라우드 리모트 추가** — Google Drive, OneDrive, S3 또는 다른 제공업체를 연결하세요.
4. 이중 창 탐색기를 사용하여 파일을 **탐색, 복사, 동기화**하세요.
5. 모든 애플리케이션에서 원활하게 접근할 수 있도록 **클라우드 스토리지를 로컬 드라이브로 마운트**하세요.
6. 수동 작업 없이 데이터를 보호할 수 있도록 **자동 백업을 예약**하세요.

Manjaro는 강력하고 항상 최신 상태인 Linux 데스크톱을 제공합니다. RcloneView는 강력하고 항상 최신 상태인 클라우드 파일 매니저를 제공합니다. 이 둘이 함께하면 명령줄 조작 하나 없이도 로컬 파일부터 멀티 클라우드 스토리지까지 전 영역을 아우를 수 있습니다.

---

**관련 가이드:**

- [원격 스토리지 추가 (Google Drive 예시)](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [클라우드 스토리지를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [작업 예약 및 실행](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
