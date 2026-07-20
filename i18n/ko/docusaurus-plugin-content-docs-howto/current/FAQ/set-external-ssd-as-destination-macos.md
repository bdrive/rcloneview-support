---
sidebar_position: 3
description: "RcloneView가 macOS에서 외장 SSD에 접근하지 못하는 경우, /Volumes를 탐색하고 빠른 Alias 바로가기를 생성하여 해결하는 방법을 안내합니다."
keywords:
  - rcloneview
  - macos
  - external drive
  - offline backup
  - sync destination
  - alias remote
  - volumes
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - external-drive
  - alias
date: 2025-02-20
author: Jay
---

# RcloneView에서 외장 SSD에 접근할 수 없어요 (macOS)

RcloneView가 macOS에서 외장 SSD에 접근하지 못하는 경우(드라이브가 보이지 않거나 경로를 어디에 입력해야 할지 모르는 경우), 이 빠른 해결 방법을 사용하세요. 일시적인 UX 문제(다음 릴리스에서 수정 예정)로 기존 바로가기가 숨겨져 있지만, SSD를 직접 탐색하여 Alias(즐겨찾기)로 저장해두면 이후 한 번의 클릭으로 접근할 수 있습니다.

---

## 빠른 해결 옵션 (하나를 선택하세요)

- **핫픽스 빌드 사용 (UX 수정 포함):** [RcloneView 1.1.517 다운로드 (macOS)](https://downloads.bdrive.com/rclone_view/builds/RcloneView-1.1.517.dmg)를 설치하면 SSD 경로 문제가 즉시 수정됩니다. 이 빌드는 다음 공식 릴리스 전에 이 문제를 겪는 사용자를 위해 임시로 제공되는 빌드입니다.
- **현재 공식 릴리스를 계속 사용:** 아래의 수동 단계를 따라 `/Volumes`를 탐색하고 SSD에 대한 Alias를 생성하세요. 현재 공개 빌드에서도 작동합니다.

---

## 단계별 안내: /Volumes에서 SSD 추가하기

RcloneView 왼쪽 패널에서 **`Local Disk`**를 확인할 수 있습니다.

1) 경로 표시줄에 `/Volumes`를 입력하고 **Enter**를 누릅니다. macOS는 이 위치에 외장 드라이브를 마운트합니다(예: Samsung T7).
2) `/Volumes` 목록에서 SSD(예: `SAMSUNG`)를 더블클릭합니다. 일부 드라이브는 로딩에 시간이 걸릴 수 있으니 폴더가 열릴 때까지 기다리세요.

<img src="/support/images/en/howto/FAQ/browse-volumes-in-mac-system.png" alt="browse volumes in mac system" class="img-large img-center" />

3) SSD 내부에 있는지 확인합니다(경로 표시줄에 `/Volumes/<드라이브 이름>`이 표시되어야 합니다).
4) 경로 표시줄의 **☆**(Alias) 아이콘을 클릭하여 이 위치를 즐겨찾기로 등록합니다.
5) 간단한 이름(예: `MySSD`)을 입력하고
6) **Create**를 클릭합니다. 이렇게 하면 항상 SSD 루트를 여는 Alias Remote가 추가됩니다.
<img src="/support/images/en/howto/FAQ/creat-alias-remote-for-external-hdd.png" alt="creat alias remote for external hdd" class="img-large img-center" />

7) Alias가 새 탭에서 열리며, 빠르게 재사용할 수 있도록 왼쪽 목록에도 표시됩니다.

<img src="/support/images/en/howto/FAQ/open-alias-remote-for-external-ssd.png" alt="open alias remote for external ssd" class="img-large img-center" />

---

## 백업 작업에서 SSD Alias 사용하기

- Sync/Copy/Move 작업을 생성할 때 방금 만든 Alias 리모트(예: `MySSD`)를 **대상(destination)**으로, 소스 리모트(예: Google Drive, Dropbox, 다른 로컬 폴더)를 **원본(source)**으로 선택하세요.
- Alias는 SSD 루트를 가리키므로, 작업을 시작하기 전에 해당 탭에서 하위 폴더를 선택하거나 새로 만들 수 있습니다.

---

## SSD가 표시되지 않는 경우

- Finder에서 SSD가 마운트되어 있는지 확인하세요(필요하면 연결을 해제했다가 다시 연결하세요).
- 경로 표시줄에서 `/Volumes`를 다시 열고 드라이브 목록이 표시될 때까지 몇 초 기다리세요.
- 그래도 보이지 않는다면 RcloneView를 재시작한 후 `/Volumes`를 다시 시도하세요. 문제가 계속되면 [RcloneView 포럼](https://forum.rcloneview.com)에 신고해주세요.

---

## 관련 가이드

- Alias 개요 및 기타 가상 리모트: [Alias Remote 가이드](/howto/remote-storage-connection-settings/alias-remote)
- 일반적인 탐색기 조작 및 탭 관리: [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)
