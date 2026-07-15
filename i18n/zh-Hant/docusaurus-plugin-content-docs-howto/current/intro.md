---
sidebar_position: 1
description: 學習如何安裝 RcloneView，並透過簡單的逐步指南將 Google Drive 連接為遠端。
keywords:
  - rclone
  - cloud
  - sync
  - rcloneview
  - guide
  - google drive
  - remote storage
  - Quick Start
  - OAuth
tags:
  - RcloneView
  - Cloud
  - Sync
  - getting-started
  - google-drive
  - Remote-Storage
date: 2025-05-26
author: Jay
slug: /
---
# 快速入門指南

本指南將逐步帶您安裝 **RcloneView**，並新增一個**遠端儲存（Google Drive）**。

## **步驟 1：安裝 RcloneView**

1. 從 [**RcloneView 下載頁面**](https://rcloneview.com/src/download.html) 下載安裝檔。
2. 執行下載的安裝程式，並依照畫面指示完成安裝。
3. 安裝成功後，您將看到以下確認畫面：
<img src="/support/images/howto/Completed-install.png" alt="Completed-install" class="img-medium img-center" />

## **步驟 2：新增遠端儲存（以 Google Drive 為例）**

### **開啟新增遠端設定視窗**

- 從上方選單的 **`Remote`** 中點選 **`+ New Remote`**。
- 或者，也可以在總管窗格中點選 **`+`** 按鈕，並選擇 **`New Remote`** 以開始設定遠端。
<img src="/support/images/howto/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
### 新增 Google Drive 遠端

1. 在搜尋欄中輸入 **`google`**。
2. 從結果中選擇 **`Google Drive`**。
3. 輸入一個易於辨識的**`遠端名稱`**（例如：MyGoogleDrive）。
4. 點選 **`Add Remote`** 完成新增遠端。

:::tip
標示星號（*）的欄位為必填。請確認所有必填欄位都已填寫完成後再儲存。
:::
<div class="img-grid-2">
<img src="/support/images/en/howto/new-remote-step1.png" alt="new remote step1" class="img-medium img-center" />
<img src="/support/images/en/howto/add-remote-step2.png" alt="add remote step2" class="img-medium img-center" />
</div>

:::tip 基於 OAuth 的雲端遠端

大多數支援 OAuth（網頁登入）的雲端儲存服務商，例如 **Google Drive**、**Dropbox**、**Google Photos**、**OneDrive**、**Box**、**pCloud**、**Yandex Disk**、**premiumize.me**、**put.io** 以及 **HiDrive**，都可以略過 `Options` 步驟——只需為遠端命名並透過瀏覽器登入即可。

不過，**部分服務商在 OAuth 登入前需要在 `Options` 分頁中進行額外設定**：
- **Zoho WorkDrive** – 選擇地區
- **Google Cloud Storage** – 輸入專案編號
- **Citrix ShareFile** – 輸入根資料夾 ID
- **Google Drive Shared with Me** – 啟用 `shared_with_me`
- **Box for Business** – 將 box_sub_type 選為 `enterprise`

👉 參閱指南：[透過瀏覽器登入連線](/howto/remote-storage-connection-settings/add-oath-online-login#supported-cloud-providers--setup-requirements)
:::

## **步驟 3：連接您的遠端儲存（GoogleDrive 單一登入）**
### 帳號驗證

- 系統將導向 Google SSO 登入頁面。
- 選擇您的 Google 帳號，或選擇**「使用其他帳戶」**以其他帳號登入。

<img src="/support/images/howto/google-choose-account.png" alt="google choose account" class="img-medium img-center" />
:::tip
若您使用的登入方式並非上述以密碼登入的方式，請參閱[本指南](https://support.google.com/accounts/answer/12849458)以完成登入流程。
:::

### 授權 RcloneView 存取權限

- 點選「繼續」以完成與 Google Drive 的連接。

<img src="/support/images/howto/google-trust-rclone.png" alt="google trust rclone" class="img-medium img-center" />
- 您應該會看到顯示**「成功！」**的確認頁面。
<img src="/support/images/howto/google-login-complete.png" alt="google login complete" class="img-medium img-center" />
✅ **完成！** 您的 Google Drive 遠端現已成功連接，可在 RcloneView 中使用。

