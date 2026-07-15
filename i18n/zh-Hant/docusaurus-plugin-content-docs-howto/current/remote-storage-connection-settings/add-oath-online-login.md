---
sidebar_position: 2
description: "了解如何在 RcloneView 中使用 OAuth 或瀏覽器方式設定雲端遠端。"
keywords:
  - rcloneview
  - SSO
  - OAuth
  - Dropbox
  - Onedrive
  - Box
  - pCloud
  - Yandex
  - premiumize
  - put
  - zoho
  - google cloud storage
  - citrix
  - sharefile
  - hidrive
  - rclone
  - Remote Connection
tags:
  - SSO
  - OAuth
  - dropbox
  - onedrive
  - box
  - pcloud
  - yandex
  - premiumizw
  - PLUS-Feature
  - zoho
  - google-cloud-storage
  - citrix
  - sharefile
  - hidrive
date: 2025-06-23
author: Jay
---
# 自動登入（OneDrive、Box 等）

RcloneView 讓您能輕鬆連接到主要的雲端供應商，例如 **Google Drive、OneDrive、Dropbox、Box**，只需使用簡單的瀏覽器登入（OAuth）即可。

:::important 無需設定選項
**✅ 對於大多數供應商，您只需輸入遠端名稱即可。**  
**✅ 您可以跳過選項頁籤，直接進行瀏覽器登入。**
:::

當您點擊 **儲存** 時，RcloneView 會開啟一個瀏覽器視窗，讓您登入雲端帳戶。完成登入後，您的遠端將會自動新增並可立即使用——無需手動設定。

## 快速設定指南

1. 啟動 **RcloneView**，並從頂部選單或檔案總管面板點擊 **`+ New Remote`**。
2. 在 **Provider** 頁籤中，選擇您的雲端服務（例如 Google Drive、OneDrive）。
3. 跳過 **Options** 頁籤（除非系統提示需要額外資訊）。請參考下方表格以取得指引。
4. 前往 **Save** 步驟並點擊 **Save**。
5. 系統會開啟一個瀏覽器視窗——請登入您的雲端帳戶。
6. 登入後，遠端將會自動新增。

👉 想要查看詳細範例嗎？請參閱：[如何連接 Google Drive](../#step-2-adding-remote-storage-google-drive-example)
## 支援的雲端供應商與設定需求

| 雲端供應商                   | 必要選項                                                           |
| --------------------------- | ---------------------------------------------------------------- |
| Google Drive                | 無                                                                 |
| Google Drive Shared with Me | **進階選項：**<br />`shared_with_me` = **true**           |
| Google Drive Computers      | **進階選項：**<br />`root_folder_id` = `<your folder ID>` |
| Dropbox                     | 無                                                                 |
| Dropbox for Business        | **進階選項：**<br />`dropbox_business` = **true**         |
| Microsoft OneDrive          | 無                                                                 |
| Box                         | 無                                                                 |
| Box for Business            | `box_sub_type = enterprise`                                      |
| pCloud                      | 無                                                                 |
| Yandex Disk                 | 無                                                                 |
| premiumize.me               | 無                                                                 |
| put.io                      | 無                                                                 |
| Zoho WorkDrive              | 需要 `Region`                                                |
| Google Cloud Storage        | 需要 `Project Number`                                        |
| Citrix ShareFile            | 需要 `Root Folder ID`                                              |
| HiDrive                     | 無                                                                 |

## 範例：Google Drive Shared with Me（需要進階選項）

**Google Drive Shared with Me** 讓使用者能夠存取其他使用者明確與其分享的檔案和資料夾，而無需將這些檔案加入自己的雲端硬碟。這在跨組織或跨團隊協作時非常有用，可避免重複儲存。

RcloneView 透過遠端設定期間的進階選項設定來支援此功能。

在 **Options** 頁籤中：

1. 向下捲動，並點擊畫面底部的 **`Show advanced options`**。
2. 找到 `shared_with_me` 欄位，並從下拉選單中設定為 **`true`**。
3. 除非需要自訂設定，否則其他選項保持預設值即可。
4. 點擊 **Next**，然後在系統提示時於瀏覽器中完成登入。

:::tip
`shared_with_me = true` 設定會指示 Rclone 僅顯示與您的 Google 帳戶分享的檔案和資料夾。
:::

<img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-shared-with-me-options.png" alt="google drive shared with me options" class="img-medium img-center" />
## 範例：Google Drive Computers（需要進階選項）

**Google Drive「Computers」** 是一項功能，可將您裝置（例如筆記型電腦或桌上型電腦）中的本機檔案同步至雲端，並顯示於 Google Drive 中特殊的「Computers」區段。每台電腦會以獨立資料夾顯示，並需要透過 Rclone 存取時使用唯一的 `root_folder_id`。

🔗 深入了解此功能：[在 Google Drive 中存取已同步的電腦](https://support.google.com/drive/answer/3096479)

### 如何在 RcloneView 中連接 Google Drive Computers

1. 開啟 [drive.google.com](https://drive.google.com/)，並在 **Computers** 區段中點擊您的目標電腦（例如 **My Laptop**）。
2. 從網址中複製 **Computer ID**。  
   例如，在  
   `https://drive.google.com/drive/folders/1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ`  
   中，ID 是 `folders/` 之後的字串：  
   `1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ  
3. 開啟 **RcloneView**，在 **Remote** 選單下點擊 **`+ New Remote`**，選擇 **Google Drive**，然後進入 **Options** 頁籤。
4. 向下捲動並點擊 **`Show advanced options`**。
5. 將複製的 Computer ID 貼到 `root_folder_id` 欄位中。
6. 點擊 **Next** 並依照 OAuth 登入流程完成設定。

<div class="img-grid-3">
  <img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-computers-id-copy.png" alt="google drive computers id copy" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computer-remote-options.png" alt="add google drive computer remote options" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computers-options-root-folder-id.png" alt="add google drive computers options root folder id" class="img-medium img-center" />
</div>

✅ 設定完成後，您就可以直接在 RcloneView 中瀏覽並存取裝置同步的 Google Drive 資料夾。

## 範例：連接 Box for Business

在 **Options** 頁籤中：
- 為 `box_sub_type` 選擇 **enterprise**
- 使用預設設定繼續進行  
- 系統提示時，於瀏覽器中透過您組織的 SSO 入口網站登入


✅ 登入完成後，遠端將會出現在 RcloneView 中並可立即使用。

