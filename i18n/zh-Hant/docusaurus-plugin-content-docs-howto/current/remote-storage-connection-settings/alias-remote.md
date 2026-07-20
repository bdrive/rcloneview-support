---
sidebar_position: 1
description: 在 RcloneView 中建立別名遠端，將深層雲端資料夾加入書籤成為虛擬遠端，加快存取速度並讓整理更清爽。
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

# 別名

## 如何在 RcloneView 中新增別名

**別名遠端**是一種虛擬遠端，用來將現有雲端遠端內的特定資料夾加入書籤。不必每次都深入瀏覽多層資料夾結構，只要點擊別名，目標資料夾就會立即開啟。

在以下情況使用別名：

- 經常重複造訪深層專案資料夾。
- 需要在複雜的資料夾結構中快速進入特定位置。
- 管理多個遠端，希望版面更清爽。
- 想在同步 / 比較 / 工作中更快選取特定資料夾。

**簡而言之：** 別名 = 雲端資料夾書籤。

---

### 新增別名遠端（透過新增遠端）

#### 步驟 1 — 開啟 **新增遠端**，選擇 **虛擬 > 別名**

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="alias remote selection" class="img-large img-center" />

#### 步驟 2 — 輸入別名資訊

1. **遠端名稱**：輸入別名名稱（例如 `MyAlias`）。
2. **遠端（目標資料夾）**：點擊資料夾圖示，選取您想要的現有遠端與資料夾。  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-select-remote-and-folder.png" alt="select target remote and folder" class="img-medium img-center" />

   選取完成後，確認別名詳細資訊：  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-alias-input.png" alt="alias input window" class="img-large img-center" />

3. 點擊 **新增遠端** 以建立別名。

#### 步驟 3 — 在遠端管理員中確認別名

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-remote-manager-alias.png" alt="remote manager alias" class="img-large img-center" />

在檔案瀏覽器中開啟它，確認其指向正確的目標資料夾：  
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="alias file browser" class="img-large img-center" />

---

### 從瀏覽器更快建立別名

您可以快速建立別名遠端，將常用的遠端資料夾加入書籤，以便更快、更輕鬆地存取。

1. 在 **瀏覽器** 面板中，點擊路徑列右側的 **`☆` 別名** 圖示。
2. 為新的 **別名** 輸入名稱。
3. 該遠端會立即以 **別名遠端** 的形式新增並開啟，可直接使用。
<div class="img-grid-3">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote.png" alt="add new alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-name.png" alt="add new alias remote name" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-complete.png" alt="add new alias remote complete" class="img-large img-center" />
</div>

---

### 在 RcloneView 中驗證已新增的別名遠端

已新增的別名遠端可以像 RcloneView 中任何其他雲端遠端一樣進行驗證。

1. 從頂部選單中，點擊 **`遠端`** 分頁下的 **`遠端管理員`**。
2. 確認您新建立的 **別名遠端** 出現在 **`遠端管理員`** 視窗中。
3. 或者，使用 **`☆`** 按鈕在瀏覽器面板中開啟新分頁，確認別名遠端可供瀏覽。

<div class="img-grid-3">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-verify.png" alt="added alias remote verify" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-explorer-verify.png" alt="added alias remote explorer verify" class="img-medium img-center" />
</div>

---

### 為何使用別名遠端

- 節省時間：一鍵直達深層資料夾。
- 將關鍵路徑列為獨立項目，保持遠端管理員整潔。
- 非常適合複雜的團隊/共享磁碟機結構。
- 可像任何遠端一樣，完整用於同步 / 比較 / 工作流程。

---

### 總結

| 功能                    | 說明                                  |
| -------------------------- | -------------------------------------------- |
| **透過新增遠端建立別名**   | 為深層資料夾建立專屬遠端  |
| **透過瀏覽器建立別名**     | 立即將目前資料夾新增為別名 |
| **遠端管理員顯示** | 如同任何其他遠端般列出                 |
| **使用情境**              | 快速存取、整理、自動化        |

別名簡單卻強大——化繁為簡，直達重點，加快每一項雲端作業。

