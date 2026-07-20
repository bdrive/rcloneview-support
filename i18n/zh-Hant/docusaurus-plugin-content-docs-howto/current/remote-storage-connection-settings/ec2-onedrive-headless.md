---
sidebar_position: 12
description: 在 AWS EC2 上安裝並執行 Rclone，從您 PC 上的 RcloneView 連線至該伺服器，並在不使用伺服器瀏覽器的情況下新增 OneDrive 遠端。
keywords:
  - rcloneview
  - rclone
  - onedrive
  - headless
  - external rclone
  - aws ec2
  - rclone rcd
  - remote storage
  - cloud migration
tags:
  - Remote-Storage
  - onedrive
  - external-rclone
  - aws-ec2
  - headless
date: 2025-07-15
author: Jay
---
# 在 AWS EC2 上為外部 Rclone 新增 OneDrive（無頭模式）

:::info 相關前置條件
若您需要完整的 EC2 設定教學，請參閱 👉 [如何在 AWS EC2 上執行 Rclone 引擎](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)。
:::

---

流程：在具備瀏覽器的機器上產生 OneDrive OAuth 權杖，然後透過 RcloneView 將該權杖貼到執行於 EC2 上的外部 Rclone 中。

---

## 步驟 1：產生 OneDrive 權杖（擇一方式）

**方法 A：`rclone authorize "onedrive"`（最快）**

1. 在具備瀏覽器且 rclone 版本相同的機器上，執行：
   ```bash
   rclone authorize "onedrive"
   ```  
2. 在瀏覽器中完成 Microsoft 登入／授權。  
3. 複製印出的 JSON 權杖區塊（請保留完整 JSON）。您將在步驟 3 中將其貼到 EC2 上。

**方法 B：使用 RcloneView 內嵌遠端並複製其權杖**

1. 在本機 PC 上，使用內嵌 Rclone（一般瀏覽器 OAuth）新增 OneDrive。  
2. 開啟 **遠端管理員**，編輯該 OneDrive 遠端，點選 **顯示進階選項**，並複製 **Token** 欄位（JSON）。

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-from-embedded-rclone.png" alt="copy onedrive oauth token from embedded rclone" class="img-medium img-center" />


👉 更多關於編輯遠端的資訊：[編輯遠端設定](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## 步驟 2：連線至外部 Rclone（EC2）

開啟一個 **新視窗**，或使用目前的工作階段在 RcloneView 中連線至託管於 EC2 的 Rclone：

- 開啟 `Settings` -> **`Connection Manager`**，建立一個新的連線以連接您託管於 EC2 的 Rclone，或連線至已設定完成的既有連線。

👉 進一步了解：[連接外部 Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 進一步了解：[新視窗功能](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## 步驟 3：將 OneDrive 遠端新增至外部 Rclone（貼上您的權杖）

1. 在已連線至 EC2 的視窗中，前往 `Remote` 選單並選擇 **`+ New Remote`**。
2. 選擇 **OneDrive** 作為提供者。
3. 輸入 **Remote Name**，並點選 **Show advanced options**。
4. 將先前複製的 **OAuth Token** 貼到 **Token** 欄位中。
5. 點選 **Add Remote** 完成設定。


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-to-external-rclone.png" alt="copy onedrive oauth token to external rclone" class="img-medium img-center" />
:::info **請忽略此錯誤彈出視窗**
若 RcloneView 顯示如下方所示的錯誤訊息，您可以放心忽略它。
在大多數情況下，儘管出現此訊息，權杖設定仍會成功完成。
關閉對話框後，您應該就能正常存取 OneDrive。  
這是已知的介面問題，我們會在下一版本中改善使用體驗。
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
設定完成後，您託管於 EC2 上的 Rclone 現在即使沒有瀏覽器支援也能存取 OneDrive。您可以像平常一樣使用 RcloneView 管理、同步及傳輸檔案。

---

## 相關連結

- [如何在 AWS EC2 上執行 Rclone 引擎](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- [連線管理員](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
- [多視窗使用方式](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)  
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)  
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)  
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)
