---
sidebar_position: 2
description: "了解如何使用 RcloneView 新增、編輯及刪除雲端與本機遠端，包括 Google Drive、Dropbox、WebDAV、S3 等。"
keywords:
  - rcloneview
  - 遠端儲存管理
  - 新增遠端
  - 遠端管理員
  - 雲端同步
  - 雲端儲存
  - 開啟遠端
  - 刪除遠端
  - google drive
  - Dropbox
  - s3 compatible
  - aws s3
  - webdav
  - SFTP
  - Onedrive
  - icloud
  - mega
tags:
  - RcloneView
  - Remote-Storage
  - Remote-manager
  - Remote-storage-managent
  - remote-connection
  - remote-control
  - cloud-storage
date: 2025-06-20
author: Jay
---
# 在 RcloneView 中新增與管理遠端儲存

RcloneView 允許你連接並管理雲端與本機儲存服務。  
本指南說明如何使用 RcloneView **新增**、**編輯**及**刪除**遠端儲存。

## 新增遠端

你可以先開啟**新增遠端**對話框，然後完成設定，來新增一個遠端儲存。

### 開啟**新增遠端**對話框

你可以使用下列其中一種方式開啟**`新增遠端`**設定對話框：

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/create-remote-top-remote-menu.png" alt="create remote top remote menu" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-plus-button.png" alt="create remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="create remote by remote manager" class="img-medium img-center" />
</div>

#### 方法一：使用頂部的遠端選單

點選頂部 Remote 分頁上的 **`+ New Remote`**。

#### 方法二：使用檔案總管窗格中的 `+` 按鈕

點選檔案總管窗格（左側或右側均可）中的 **`+`** 圖示，然後選擇 New Remote。

#### 方法三：使用遠端管理員

點選 **`Remote`** 分頁中的 **`Remote Manager`** 按鈕，然後點選空白遠端卡片上的 **`+`** 按鈕。


### 設定新遠端

**New Remote** 對話框開啟後，選擇遠端類型（例如 Google Drive、Dropbox、S3），然後填寫必要的設定。  

欄位會依所選的供應商而有所不同。

如需各供應商的詳細設定說明，請參閱[**遠端儲存連線設定**](/howto/category/remote-storage-connection-settings)。  

## 在 RcloneView 中管理現有遠端

將遠端新增至 RcloneView 後，你可以透過多種方式管理它們——包括開啟、編輯或刪除。以下說明如何執行各項操作。

### 在檔案總管窗格中開啟遠端

你可以開啟遠端的資料夾檢視，以瀏覽或在本機與雲端之間傳輸檔案。

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-card.png" alt="open remote by remote card" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-plus-button.png" alt="open remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-manager.png" alt="open remote by remote manager" class="img-medium img-center" />
</div>

#### 方法一：點選遠端卡片上的 `Open` 按鈕

在右側窗格中的任一遠端卡片上點選 **`Open`** 按鈕。

#### 方法二：使用檔案總管窗格的 `+` 按鈕開啟遠端

點選左側或右側**檔案總管窗格**中的 **`+`** 按鈕，即會顯示目前所有已設定遠端的清單。

1. 在想要開啟遠端的檔案總管窗格中點選 `+` 圖示。
2. 會出現一個下拉清單，顯示所有可用的遠端。
3. 從清單中選擇所需的遠端（例如 `MyWebDAV`）。
4. 所選的遠端會在你點選的窗格中開啟。若該窗格已開啟其他遠端，則會為所選遠端新增一個**新分頁**。

:::note
標記為**我的最愛（別名）**的遠端會顯示在清單**最上方**，方便快速存取。
:::
#### 方法三：使用遠端管理員的 `Open` 按鈕

1. 點選工具列中的 **Remote Manager** 按鈕。
2. 在 Remote Manager 對話框中，找到所需的遠端。
3. 點選 **`Open`**，即可在檔案瀏覽窗格中開啟。

:::tip 從系統匣快速存取
你可以點選系統匣中的 RcloneView 圖示，並從清單中選擇一個遠端，快速開啟該遠端。  
<img src="/support/images/en/howto/rcloneview-basic/open-remote-via-system-tray.png" alt="open remote via system tray" class="img-small img-left" />
:::

### 編輯遠端設定


你可以使用下列其中一種方式修改現有遠端的設定：

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-explorer-panel.png" alt="edit remote from explorer panel" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-remote-manager.png" alt="edit remote from remote manager" class="img-medium img-center" />
</div>


#### 方法一：從檔案總管窗格編輯  

若你目前正在**檔案總管窗格**中瀏覽某個遠端，點選作用中遠端窗格右上角的**齒輪圖示（⚙️）**。

這會開啟 **Edit Remote** 對話框，你可以在此更新所選遠端的 **Provider** 與 **Options** 值。  

 ⚠️ **注意：** 你無法在此重新命名遠端。


#### 方法二：從遠端管理員編輯  

1. 點選主工具列 **Remote** 選單下的 **Remote Manager** 按鈕。  
2. 在 **Remote Manager** 視窗中，找到你要編輯的遠端。  
3. 點選遠端卡片上的 **Edit** 按鈕，開啟 **Edit Remote** 對話框。

此方法同樣可以變更 **Provider** 與 **Options**，但**遠端名稱**維持不變。


### 刪除遠端


如果你不再需要某個已設定的遠端，可以透過 **Remote Manager** 安全地將其刪除。

<img src="/support/images/en/howto/rcloneview-basic/delete-remote.png" alt="delete remote" class="img-medium img-center" />

1. 從頂部選單的 **Remote** 分頁中，點選工具列中的 **Remote Manager** 按鈕。
2. 在 **Remote Manager** 視窗中，找到你要移除的遠端。
3. 點選對應遠端卡片上的 **`Delete`** 按鈕。

此操作將會：
- 從你的設定中永久移除該遠端。
- 若該遠端目前已在檔案總管窗格中開啟，會自動將其關閉。
