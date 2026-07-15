---
sidebar_position: 3
description: "了解如何使用 RcloneView 的拖放介面與右鍵選單，在本機與雲端儲存之間瀏覽、複製及管理檔案。"
keywords:
  - rcloneview
  - 檔案管理
  - 複製檔案
  - 移動檔案
  - 拖放
  - 雲端檔案傳輸
  - 雲端儲存
  - 檔案總管
  - 雲端對雲端傳輸
  - 遠端瀏覽器
  - 上傳
  - 下載
  - 清除
  - 刪除
tags:
  - howto
  - file-management
  - cloud-storage
  - drag-and-drop
  - cloud-file-transfer
  - file-explorer
date: 2025-05-27
author: Jay
---
# 使用 RcloneView 進行檔案管理  

RcloneView 讓您能透過熟悉的類 Explorer 介面，在本機磁碟與多個雲端儲存服務之間輕鬆瀏覽、傳輸及整理檔案。   

本指南將帶您了解：   

- 瀏覽遠端儲存
- 使用拖放複製檔案
- 使用右鍵選單管理檔案
 
## 瀏覽遠端儲存

您可以開啟任何已連線的雲端遠端，並像瀏覽本機資料夾一樣查看它。

### 如何瀏覽遠端：

1. 點選 **Explorer 面板** 中的 **`+`** 分頁。
2. 選擇您要開啟的遠端儲存。
3. 所選的遠端將在新分頁中開啟，即可進行檔案操作。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-open-remote.png" alt="file explorer open remote" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-remote-open-complete.png" alt="file explorer remote open complete" class="img-medium img-center" />
</div>

:::tip 檢視版面
前往 **`Settings > Layout`** 以切換垂直與水平檢視 
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="explorer view layout" class="img-small img-left" />
:::

## 使用拖放複製檔案

您可以透過簡單的拖放操作，在本機與雲端儲存之間傳輸檔案。
#### 在兩個遠端之間複製

將檔案從一個遠端分頁拖曳到另一個分頁，即可在 RcloneView 中跨雲端儲存複製檔案。
<video src="/support/videos/en/howto/rcloneview-basic/rclonview-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  rclonview explorer drag and drop
</video>

**👉  多選與批次操作**
您可以一次選取多個檔案來執行批次操作。
- 使用 **`Ctrl + Click`** 選取多個個別檔案。
- 使用 **`Shift + Click`** 選取一個範圍內的檔案。

**👉  拖放行為 **
- **相同遠端** = 移動操作  
- **不同遠端** = 複製操作


:::tip 提示
-  若您不想在複製過程中看到確認彈出視窗，請取消勾選 **Confirm drag and drop** 核取方塊。
- 若之後想重新啟用彈出視窗，請前往 **Settings > General settings > Confirm drag and drop** 並再次勾選。
:::

#### 從 Windows Explorer 複製到 RcloneView 中的遠端
- 您也可以直接從 **Windows 檔案總管** 將檔案拖曳到 RcloneView 分頁中，以將檔案上傳到雲端儲存。
<video src="/support/videos/en/howto/rcloneview-basic/windows-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  windows explorer drag and drop
</video>
### 使用右鍵選單管理檔案

RcloneView 透過方便的右鍵選單支援完整的檔案操作。

### 可用的操作：

- <img src="/support/icons/download-icon.png" alt="download icon" class="inline-icon" />**下載** – 將檔案儲存至您的本機磁碟  
- <img src="/support/icons/upload-icon.png" alt="upload icon" class="inline-icon" />**上傳** – 將本機檔案傳送至雲端遠端  
- <img src="/support/icons/copy icon.png" alt="copy icon" class="inline-icon" />**複製 / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />貼上** – 在資料夾或遠端之間複製檔案  
- <img src="/support/icons/cut-icon.png" alt="cut icon" class="inline-icon" />**剪下 / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />貼上** – 將檔案移動到其他位置  
- <img src="/support/icons/delete-icon.png" alt="delete icon" class="inline-icon" />**刪除** – 移除檔案或資料夾  
- <img src="/support/icons/rename-icon.png" alt="rename icon" class="inline-icon" />**重新命名** – 重新命名檔案或資料夾  
- <img src="/support/icons/new-folder-icon.png" alt="new folder icon" class="inline-icon" />**新增資料夾** – 建立新資料夾  
- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" />**重新載入** – 重新整理資料夾內容
