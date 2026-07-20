---
sidebar_position: 1
description: "RcloneView에서 앨리어스 리모트를 만들어 깊은 클라우드 폴더를 가상 리모트로 북마크하고 더 빠르게 접근하며 깔끔하게 정리하세요."
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - alias remote
  - virtual remote
  - quick access
  - cloud remote shortcut
  - remote shortcut
  - cloud storage
  - remote manager
  - bookmark
tags:
  - RcloneView
  - alias
  - remote-storage
  - shortcut
  - virtual-remote
date: 2025-12-05
author: tayson
---

# Alias

## RcloneView로 앨리어스 추가하는 방법

**앨리어스 리모트(Alias Remote)**는 기존 클라우드 리모트 내부의 특정 폴더를 북마크하는 가상 리모트입니다. 매번 깊은 폴더 트리를 파고들 필요 없이, 앨리어스를 클릭하면 대상 폴더가 즉시 열립니다.

다음과 같은 경우 앨리어스를 사용하세요.

- 깊은 프로젝트 폴더를 자주 다시 방문할 때.
- 복잡한 폴더 구조를 유지하면서 빠른 진입점이 필요할 때.
- 여러 개의 리모트를 관리하며 더 깔끔한 레이아웃을 원할 때.
- Sync / Compare / Jobs에서 특정 폴더를 더 빠르게 선택하고 싶을 때.

**요약:** 앨리어스 = 클라우드 폴더 북마크.

---

### 앨리어스 리모트 추가 (New Remote 사용)

#### 1단계 — **New Remote**를 열고 **Virtual > Alias**를 선택

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="alias remote selection" class="img-large img-center" />

#### 2단계 — 앨리어스 정보 입력

1. **Remote name**: 앨리어스 이름을 입력합니다 (예: `MyAlias`).
2. **Remote (target folder)**: 폴더 아이콘을 클릭하고 원하는 기존 리모트와 폴더를 선택합니다.  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-select-remote-and-folder.png" alt="select target remote and folder" class="img-medium img-center" />

   선택 후 앨리어스 세부 정보를 확인합니다.  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-alias-input.png" alt="alias input window" class="img-large img-center" />

3. **Add Remote**를 클릭하여 앨리어스를 생성합니다.

#### 3단계 — Remote Manager에서 앨리어스 확인

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-remote-manager-alias.png" alt="remote manager alias" class="img-large img-center" />

파일 브라우저에서 열어 정확한 대상 폴더를 가리키는지 확인합니다.  
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="alias file browser" class="img-large img-center" />

---

### Explorer에서 더 빠르게 앨리어스 만들기

자주 사용하는 리모트 폴더를 더 빠르고 쉽게 접근할 수 있도록 앨리어스 리모트를 빠르게 만들 수 있습니다.

1. **Explorer** 패널에서 경로 표시줄(Path Bar) 오른쪽에 있는 **`☆` Alias** 아이콘을 클릭합니다.
2. 새 **앨리어스**의 이름을 입력합니다.
3. 리모트가 즉시 추가되어 **앨리어스 리모트**로 열리며 바로 사용할 수 있습니다.
<div class="img-grid-3">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote.png" alt="add new alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-name.png" alt="add new alias remote name" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-complete.png" alt="add new alias remote complete" class="img-large img-center" />
</div>

---

### RcloneView에서 추가된 앨리어스 리모트 확인하기

추가된 앨리어스 리모트는 RcloneView의 다른 클라우드 리모트와 동일한 방식으로 확인할 수 있습니다.

1. 상단 메뉴에서 **`Remote`** 탭 아래의 **`Remote Manager`**를 클릭합니다.
2. 새로 만든 **앨리어스 리모트**가 **`Remote Manager`** 창에 표시되는지 확인합니다.
3. 또는 **`☆`** 버튼을 사용해 Explorer 패널에 새 탭을 열고, 앨리어스 리모트가 탐색 가능한 상태인지 확인합니다.

<div class="img-grid-3">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-verify.png" alt="added alias remote verify" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-explorer-verify.png" alt="added alias remote explorer verify" class="img-medium img-center" />
</div>

---

### 앨리어스 리모트를 사용해야 하는 이유

- 시간 절약: 클릭 한 번으로 깊은 폴더로 바로 이동합니다.
- 주요 경로를 별도 항목으로 노출시켜 Remote Manager를 깔끔하게 유지합니다.
- 복잡한 팀/공유 드라이브 구조에 이상적입니다.
- 다른 리모트와 마찬가지로 Sync / Compare / Job 워크플로우에서 완전히 사용할 수 있습니다.

---

### 요약

| 기능                        | 설명                                          |
| --------------------------- | --------------------------------------------- |
| **New Remote를 통한 앨리어스** | 깊은 폴더에 대한 전용 리모트 생성              |
| **Explorer를 통한 앨리어스**  | 현재 폴더를 앨리어스로 즉시 추가               |
| **Remote Manager 표시**      | 다른 리모트와 동일하게 목록에 표시             |
| **활용 사례**                | 빠른 접근, 정리, 자동화                        |

앨리어스는 단순하지만 강력합니다—복잡한 트리를 평탄화하고, 필요한 곳으로 바로 이동하며, 모든 클라우드 작업 속도를 높여줍니다.
