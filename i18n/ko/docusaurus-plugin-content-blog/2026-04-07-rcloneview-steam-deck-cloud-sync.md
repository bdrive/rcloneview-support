---
slug: rcloneview-steam-deck-cloud-sync
title: "Steam Deck에서 RcloneView로 클라우드 스토리지와 게임 백업 활용하기"
authors:
  - tayson
description: "Steam Deck의 제한된 SSD 용량에는 클라우드 스토리지가 필수적입니다. Steam Deck에 RcloneView를 설치하여 게임 세이브를 백업하고, 스크린샷과 녹화 영상을 Google Drive, OneDrive 또는 S3로 동기화하여 휴대용 기기의 공간을 확보하는 방법을 알아보세요."
keywords:
  - steam deck cloud storage
  - steam deck game backup
  - rcloneview steam deck
  - steam deck google drive sync
  - steam deck onedrive backup
  - steam deck cloud save backup
  - steamos rcloneview install
  - steam deck screenshot sync
  - steam deck file manager
  - steam deck external cloud storage
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Steam Deck에서 RcloneView로 클라우드 스토리지와 게임 백업 활용하기

> Steam Deck은 완전한 PC를 휴대용 기기에 담았지만, 64GB, 256GB, 512GB SSD는 금방 가득 찹니다. 클라우드 스토리지를 활용하면 게임 백업, 스크린샷, 녹화 영상 등을 위한 사실상 무제한의 저장 공간을 갖춘 기기로 Deck을 바꿀 수 있습니다.

Valve의 Steam Deck은 Arch 기반 리눅스 배포판인 SteamOS와 커스텀 KDE Plasma 데스크톱 모드로 구동됩니다. Steam의 기본 클라우드 세이브 기능이 일부 게임을 처리해 주긴 하지만, Steam 외 게임, 에뮬레이터 게임, 모드 설정, 셰이더 캐시, 그리고 시간이 지나며 쌓이는 스크린샷과 게임플레이 녹화 영상은 다루지 않습니다. 제한된 SSD 용량 때문에 저장 공간 관리는 늘 신경 써야 할 문제입니다. RcloneView는 Steam Deck 사용자에게 그래픽 기반의 멀티 클라우드 파일 관리자를 제공하여, 게임 세이브를 Google Drive, OneDrive 또는 S3에 백업하고, 스크린샷과 녹화 영상을 클라우드 스토리지로 동기화하며, 대용량 파일을 내보내 내장 드라이브의 공간을 확보할 수 있게 해 줍니다. 이 가이드에서는 데스크톱 모드에서의 설치, 클라우드 리모트 설정, 그리고 Steam Deck 데이터를 안전하게 지키면서 저장 공간을 여유롭게 유지하는 실용적인 워크플로우를 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Steam Deck에서 클라우드 스토리지가 필요한 이유

Steam Deck은 뛰어난 게이밍 PC지만, 저장 공간 제약으로 인해 실질적인 문제가 발생합니다.

- **SSD 공간이 빠르게 소진됩니다** — 최신 게임은 각각 50~100GB를 넘기기도 합니다. 512GB 모델조차 AAA 타이틀 몇 개만 설치하면 금방 가득 찹니다.
- **Steam Cloud가 모든 것을 커버하지 않습니다** — 많은 게임이 Steam Cloud 세이브를 지원하지 않습니다. Steam 외 게임(GOG, 호환 레이어를 통한 Epic, 에뮬레이터 게임)은 내장 클라우드 백업이 전혀 없습니다.
- **스크린샷과 녹화 영상이 쌓입니다** — Deck에서는 스크린샷 캡처와 게임플레이 녹화가 손쉽지만, 이런 파일들이 제한된 저장 공간을 잠식합니다.
- **모드 설정은 손실되기 쉽습니다** — Deck에서 게임을 모드하는 경우, 해당 설정은 로컬 파일 시스템에 저장되며 SteamOS 업데이트나 공장 초기화 시 사라질 수 있습니다.
- **외부로의 자동 백업이 없습니다** — Steam Deck에는 임의의 파일을 외부 클라우드 스토리지로 백업하는 내장 메커니즘이 없습니다.

RcloneView는 Steam Deck을 주요 클라우드 제공업체와 연결함으로써 이러한 문제를 해결하며, 필요할 때마다 또는 예약된 일정에 따라 파일을 클라우드로 전송할 수 있게 해줍니다.

## 데스크톱 모드로 전환하기

모든 설치와 설정은 Steam Deck의 데스크톱 모드에서 이루어집니다. 전환 방법은 다음과 같습니다.

1. Deck의 **Steam 버튼**을 누릅니다.
2. **Power > Switch to Desktop**으로 이동합니다.
3. Deck이 재부팅되어 작업 표시줄, 파일 관리자(Dolphin), 터미널(Konsole)을 갖춘 완전한 KDE Plasma 데스크톱으로 전환됩니다.

데스크톱 모드는 완전한 리눅스 데스크톱 환경을 제공합니다. 터치스크린이나 트랙패드를 사용할 수도 있고, 더 편안한 작업을 위해 USB-C나 블루투스로 키보드와 마우스를 연결할 수도 있습니다.

## Steam Deck에 RcloneView 설치하기

SteamOS는 기본적으로 읽기 전용 루트 파일 시스템을 사용하므로 전통적인 패키지 설치 방식에는 제약이 있습니다. 소프트웨어를 설치하는 가장 좋은 방법 두 가지는 Flatpak(공식 지원 방식)과 AppImage입니다.

### 옵션 1: AppImage (권장)

AppImage 방식은 가장 간단하며 시스템을 수정하지 않고도 작동합니다.

1. 데스크톱 모드에서 **Firefox** 브라우저를 엽니다(SteamOS에 사전 설치되어 있습니다).
2. [rcloneview.com](https://rcloneview.com/src/download.html)으로 이동하여 리눅스용 AppImage를 다운로드합니다.
3. **Dolphin**(파일 관리자)을 열고 Downloads 폴더로 이동합니다.
4. AppImage 파일을 마우스 오른쪽 버튼으로 클릭하고 **Properties > Permissions**를 선택한 다음 **Is Executable**을 체크합니다.
5. 더블클릭하여 실행합니다.

또는 Konsole(터미널)에서 다음과 같이 실행할 수 있습니다.

```bash
chmod +x ~/Downloads/RcloneView-*.AppImage
~/Downloads/RcloneView-*.AppImage
```

Downloads 폴더를 깔끔하게 유지하려면 AppImage를 영구적인 위치로 옮기세요.

```bash
mkdir -p ~/Applications
mv ~/Downloads/RcloneView-*.AppImage ~/Applications/
```

RcloneView를 애플리케이션 메뉴에 추가하려면 데스크톱 항목을 생성합니다.

```bash
cat > ~/.local/share/applications/rcloneview.desktop << 'EOF'
[Desktop Entry]
Name=RcloneView
Exec=/home/deck/Applications/RcloneView-latest.AppImage
Icon=rcloneview
Type=Application
Categories=Utility;FileManager;
EOF
```

파일명은 실제 AppImage 파일명으로 바꿔 주세요.

### 옵션 2: 읽기 전용 파일 시스템 비활성화 (고급)

일반 Arch 시스템처럼 pacman을 통해 패키지를 설치하고 싶다면 읽기 전용 파일 시스템을 비활성화할 수 있습니다.

```bash
sudo steamos-readonly disable
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -Syu rclone fuse3
```

**경고:** 읽기 전용 파일 시스템을 비활성화하면 SteamOS 업데이트 시 변경 사항이 덮어쓰여질 수 있습니다. AppImage 방식이 시스템 업데이트에 더 안정적입니다.

### 설치 확인하기

RcloneView를 실행합니다. 리모트 탐색기가 포함된 메인 인터페이스가 표시되어야 합니다. 터치스크린을 사용하는 경우 기본적인 탐색에는 충분히 반응성이 좋지만, 장시간 파일 관리 작업에는 마우스 사용을 권장합니다.

## 클라우드 스토리지 계정 연결하기

데스크톱 모드에서 RcloneView를 실행한 상태에서 클라우드 스토리지 제공업체를 추가합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. **New Remote**를 클릭하고 **Google Drive**를 선택합니다.
2. Firefox에서 OAuth 인증 흐름이 열립니다. Google 계정으로 로그인하고 액세스 권한을 부여합니다.
3. 리모트를 저장합니다. 이제 RcloneView에서 Google Drive 전체에 접근할 수 있습니다.

### OneDrive

1. **New Remote**를 클릭하고 **Microsoft OneDrive**를 선택합니다.
2. Firefox의 Microsoft 로그인 페이지를 통해 인증합니다.
3. 개인용 OneDrive 또는 OneDrive for Business를 선택합니다.
4. 리모트를 저장합니다.

### S3 호환 스토리지 (Backblaze B2, Wasabi, AWS)

1. **New Remote**를 클릭하고 사용할 S3 제공업체를 선택합니다.
2. Access Key와 Secret Key를 입력합니다.
3. 리전과 엔드포인트를 지정합니다.
4. 리모트를 저장합니다.

Steam Deck 사용자에게는 이미 계정을 보유하고 있는 경우가 많은 Google Drive와 OneDrive가 가장 일반적인 선택지입니다. Backblaze B2나 Wasabi 같은 S3 호환 제공업체는 대용량 게임 백업 아카이브에 비용 효율적인 대량 저장 공간을 제공합니다.

## 게임 세이브 백업하기

이것이 대부분의 Steam Deck 사용자에게 가장 중요한 활용 사례입니다. 게임 세이브 파일은 용량은 작지만 대체할 수 없습니다. RcloneView로 백업하는 방법은 다음과 같습니다.

### 세이브 파일 위치 찾기

Deck에서 Steam 게임 세이브는 일반적으로 다음 위치에서 찾을 수 있습니다.

- **Steam Proton 세이브:** `~/.local/share/Steam/steamapps/compatdata/[APPID]/pfx/drive_c/users/steamuser/`
- **네이티브 리눅스 세이브:** `~/.local/share/[GameName]/` 또는 `~/.config/[GameName]/`
- **에뮬레이터 게임 세이브:** 에뮬레이터에 따라 다릅니다(RetroArch 세이브는 보통 `~/.config/retroarch/saves/`에 있습니다)

### 세이브 백업 작업 생성하기

1. RcloneView에서 왼쪽 패널에 로컬 파일 시스템을 열고 세이브 폴더로 이동합니다.
2. 오른쪽 패널에 클라우드 리모트를 열고 대상 폴더(예: `SteamDeck/Saves/`)를 생성합니다.
3. 세이브 파일이나 폴더를 선택하여 클라우드로 복사합니다.

지속적인 보호를 위해 동기화 작업을 생성하세요.

1. 소스를 로컬 세이브 디렉터리로 설정합니다.
2. 대상을 클라우드 백업 폴더로 설정합니다.
3. 원하는 주기(매일 등)로 작업이 실행되도록 예약합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

이렇게 하면 게임 세션을 마치고 데스크톱 모드로 전환할 때마다 최신 세이브가 자동으로 클라우드에 업로드됩니다(또는 게임 모드로 돌아가기 전에 수동으로 작업을 실행할 수도 있습니다).

## 스크린샷과 녹화 영상 동기화하기

Steam Deck은 스크린샷을 `~/.local/share/Steam/userdata/[USERID]/760/remote/[APPID]/screenshots/`에 저장합니다. 게임플레이 녹화 영상(데스크톱 모드에서 OBS 같은 도구를 사용하는 경우)은 사용자가 설정한 위치에 저장됩니다.

### 스크린샷 동기화 설정하기

1. RcloneView에서 왼쪽 패널의 스크린샷 디렉터리로 이동합니다.
2. 오른쪽 패널에 클라우드 대상 폴더(예: `SteamDeck/Screenshots/`)를 엽니다.
3. 새 스크린샷을 클라우드로 전송하는 동기화 작업을 생성합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

스크린샷은 보통 용량이 작아서(각각 1~5MB) 인터넷 환경이 다소 열악해도 동기화 작업이 빠르게 완료됩니다. 수백 메가바이트에서 몇 기가바이트에 이를 수 있는 게임플레이 녹화 영상의 경우, Deck이 도킹 상태로 Wi-Fi에 연결되어 있을 때 업로드하도록 예약하는 것을 고려하세요.

### 업로드 후 공간 확보하기

스크린샷과 녹화 영상이 클라우드에 안전하게 저장된 후에는 로컬 사본을 삭제하여 SSD 공간을 확보할 수 있습니다. RcloneView의 이동(복사가 아닌) 작업은 파일을 전송하면서 소스를 제거하여 한 번에 처리합니다. 로컬 파일을 삭제하기 전에 클라우드 사본이 존재하는지 반드시 확인한 후 신중하게 사용하세요.

## 제한된 SSD의 저장 공간 관리하기

세이브와 미디어 백업 외에도, RcloneView는 Steam Deck의 전반적인 저장 공간 관리를 도와줍니다.

- **오래된 게임 데이터 보관** — 게임을 클리어했지만 세이브는 유지하면서 공간을 확보하고 싶다면? 세이브 데이터를 클라우드로 동기화한 다음 게임을 삭제하세요. 나중에 재설치하면 클라우드에서 세이브를 복원할 수 있습니다.
- **모드 파일 내보내기** — 대용량 모드 패키지(텍스처 개선, 전면 개조 모드)를 클라우드 스토리지에 백업해 두고 필요할 때 다시 다운로드할 수 있습니다.
- **미디어용 클라우드 스토리지 마운트** — Google Drive나 OneDrive 폴더를 로컬 디렉터리로 마운트하여 SSD에 저장하지 않고도 클라우드에서 미디어(음악, 동영상)를 스트리밍할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

### Steam Deck에서 클라우드 스토리지 마운트하기

클라우드 리모트를 로컬 파일 시스템으로 마운트하려면 다음을 따르세요.

1. FUSE가 사용 가능한지 확인합니다. 기본 SteamOS에는 일반적으로 FUSE 지원이 포함되어 있습니다. 그렇지 않은 경우:

```bash
sudo steamos-readonly disable
sudo pacman -S fuse3
sudo steamos-readonly enable
```

2. RcloneView에서 리모트를 마우스 오른쪽 버튼으로 클릭하고 **Mount**를 선택하거나 Mount Manager를 사용합니다.
3. 마운트 지점(예: `~/CloudDrive/`)을 선택합니다.
4. 캐시 설정을 구성합니다 — 미디어 파일에 최적의 경험을 원한다면 VFS 캐시 모드를 "full"로 사용하세요.

마운트된 드라이브는 Dolphin에 표시되며 모든 애플리케이션에서 접근할 수 있습니다. 예를 들어, SSD 공간을 전혀 사용하지 않고 음악 라이브러리를 스트리밍하도록 미디어 플레이어를 마운트된 클라우드 폴더로 지정할 수 있습니다.

## Steam Deck 사용자를 위한 실용적인 워크플로우

### 여행 전

1. 데스크톱 모드로 전환합니다.
2. 세이브 백업 작업을 실행하여 최신 세이브를 클라우드에 업로드합니다.
3. RcloneView의 작업 기록에서 백업이 완료되었는지 확인합니다.
4. 게임 모드로 다시 전환합니다.

### 게임 세션 후

1. 데스크톱 모드로 전환합니다.
2. 스크린샷 동기화를 실행하여 새로 캡처한 항목을 클라우드에 업로드합니다.
3. 필요하다면 로컬 스크린샷을 삭제하여 공간을 확보합니다.
4. 게임 모드로 다시 전환합니다.

### SteamOS 업데이트 또는 공장 초기화 이후

1. 데스크톱 모드로 전환합니다.
2. RcloneView를 다시 설치합니다(AppImage 방식은 몇 초면 충분합니다).
3. 클라우드 리모트를 다시 설정합니다(또는 클라우드에 백업해 둔 rclone 설정 파일을 복원합니다).
4. 클라우드에서 세이브 파일을 다시 가져옵니다.
5. 게임을 재개합니다.

복구 속도를 높이려면 rclone 설정 파일(`~/.config/rclone/rclone.conf`)도 클라우드에 백업해 두세요. 이 파일에는 리모트 정의가 들어 있어, 복원하는 즉시 모든 클라우드 계정을 다시 연결할 수 있습니다.

## 시작하기

1. Steam Deck에서 **데스크톱 모드로 전환**합니다.
2. **RcloneView AppImage를 다운로드**하고 실행 가능하도록 설정합니다.
3. **클라우드 계정을 추가**합니다 — Google Drive, OneDrive 또는 S3가 가장 일반적인 선택지입니다.
4. 세이브 디렉터리에서 클라우드 폴더로의 동기화 작업을 생성하여 **게임 세이브를 백업**합니다.
5. SSD 공간을 확보하고 캡처한 항목을 안전하게 지키기 위해 **스크린샷을 동기화**합니다.
6. 수동 동기화를 잊더라도 데이터가 항상 보호되도록 **정기 백업을 예약**합니다.

Steam Deck은 강력한 휴대용 게이밍 기기지만, 저장 공간은 유한합니다. RcloneView는 어떤 클라우드 계정이든 Deck 파일 시스템의 확장 공간으로 바꿔주어, 세이브를 안전하게 지키고, 스크린샷을 정리하며, 다음 게임을 위한 SSD 공간을 확보해 줍니다.

---

**관련 가이드:**

- [원격 스토리지 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [클라우드 스토리지를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [작업 실행 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
