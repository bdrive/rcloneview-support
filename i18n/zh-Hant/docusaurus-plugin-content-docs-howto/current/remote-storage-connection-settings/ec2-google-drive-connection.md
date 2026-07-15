---
sidebar_position: 11
description: 了解如何在無法使用網頁瀏覽器的情況下，將 Google Drive 遠端新增至在 AWS EC2 上執行的外部 Rclone，並使用本機產生的 OAuth 權杖完成設定。
keywords:
  - rcloneview
  - rclone
  - google drive
  - OAuth
  - token
  - ec2
  - external rclone
  - no browser login
  - headless
  - cloud storage
  - Remote Connection
  - remote storage
tags:
  - Remote-Storage
  - google-drive
  - external-rclone
  - aws-ec2
  - remote-connection
  - cloud-storage
date: 2025-07-07
author: Jay
---
# 在 AWS EC2 上的外部 Rclone 新增 Google Drive（無需網頁瀏覽器）

本指南說明如何在沒有網頁瀏覽器可用的系統（例如 **AWS EC2 Ubuntu 伺服器**）上，將 **Google Drive 遠端** 新增至 **外部 Rclone 執行個體**。

在這類環境中，無法透過瀏覽器完成標準的 OAuth 登入流程。你可以改用本機的 RcloneView 安裝取得所需的 **OAuth 權杖**，再將其重複使用於 EC2 上執行的外部 Rclone。

:::info 在 EC2 上執行 Rclone 常駐程式
若需了解如何在 EC2 執行個體上安裝並執行 Rclone，

請參閱：👉 [如何在 AWS EC2 上執行 Rclone 引擎](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

:::

流程如下：先在具有瀏覽器的機器上產生 Google Drive OAuth 權杖，接著透過 RcloneView 將該權杖貼到在 EC2 上執行的外部 Rclone 中。

---
## ✅ 步驟 1：產生 Google Drive 權杖（擇一方式）

**方法 A：`rclone authorize "drive"`（最快）**

1. 在具有瀏覽器且 rclone 版本相同的機器上，執行：
   ```bash
   rclone authorize "drive"
   ```
2. 在瀏覽器中完成 Google 登入／同意授權。
3. 複製印出的 JSON 權杖區塊（請保留整段 JSON）。你將在步驟 3 中將其貼到 EC2。

**方法 B：使用 RcloneView 內建遠端並複製其權杖**

1. 在本機電腦上，使用內建的 Rclone（透過一般瀏覽器 OAuth）新增 Google Drive。  
   👉 [快速指南：新增 Google Drive 遠端](../#step-2-adding-remote-storage-google-drive-example)
2. 開啟 **遠端管理器**，編輯該 Google Drive 遠端，點選 **顯示進階選項**，然後複製 **Token** 欄位（JSON）。

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-from-embedded-rclone.png" alt="copy google oauth token from embedded rclone" class="img-medium img-center" />

👉 更多關於編輯遠端的資訊：[編輯遠端設定](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## ✅ 步驟 2：連線至外部 Rclone（EC2）

開啟 **`新視窗`**，或使用目前的 RcloneView 工作階段連線至你在 EC2 上代管的 Rclone：

- 開啟 `設定` -> **`連線管理器`**，可建立新的連線以連接你在 EC2 上代管的 Rclone，或連線至已設定好的既有連線。

👉 深入了解：[連接外部 Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 深入了解：[新視窗功能](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## ✅ 步驟 3：將 Google Drive 遠端新增至外部 Rclone（貼上你的權杖）

1. 在已連線至 EC2 的視窗中，前往 `Remote` 選單並選擇 **`+ New Remote`**。
2. 選擇 **Google Drive** 作為供應商。
3. 輸入 **`Remote Name`**，並點選 **`Show advanced options`**。
4. 將先前複製的 **OAuth Token** 貼到 **`Token`** 欄位中。
5. 依照一般流程點選 **`Add Remote`** 按鈕以完成設定。


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-to-external-rclone.png" alt="copy google oauth token to external rclone" class="img-medium img-center" />

:::info **請忽略此錯誤彈出視窗**
**若 RcloneView 顯示如下方的錯誤訊息，可以放心忽略。**
在大多數情況下，即使出現此訊息，權杖設定仍會成功完成。
關閉對話方塊後，你應該能正常存取 Google Drive。  
這是已知的介面問題，我們會在下一個版本中改善使用體驗。
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
設定完成後，你在 EC2 上的 Rclone 即使沒有瀏覽器支援，也能存取 Google Drive。你可以像平常一樣使用 RcloneView 來管理、同步及傳輸檔案。

---

## 🔗 相關指南

- [如何在 AWS EC2 上執行 Rclone 引擎](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [新增 Google Drive 遠端](/howto/#step-2-adding-remote-storage-google-drive-example)
- [編輯遠端設定](/howto/rcloneview-basic/remote-manager#edit-remote-settings)
- [連接外部 Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [多視窗使用方式](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)
