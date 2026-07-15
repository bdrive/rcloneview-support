---
sidebar_position: 10
description: 了解如何在 RcloneView 中新增 Proton Drive 儲存空間。
keywords:
  - rcloneview
  - rclone
  - proton
  - protondrive
  - cloud storage
  - remote storage
  - Remote Connection
tags:
  - proton
  - protondrive
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-21
author: Jay
---

# Proton Drive

## 如何使用 RcloneView 新增 Proton Drive（Windows）

### 步驟 1：開啟遠端管理員

- 從**遠端管理員**右上角點選 **`+ New Remote`**。
- 或者，點選 Explorer 面板中的 **`+`** 按鈕，並選擇 **`New Remote`** 以開始遠端設定。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
---

### 步驟 2：選擇 Proton Drive 作為儲存供應商

1. 在 **Search Provider** 欄位中輸入 `proton`。
2. 從清單中選擇 **Proton Drive**。

接著會進入 Proton Drive 的設定畫面。

<img src="/support/images/en/howto/remote-storage-connection-settings/select-proton-drive-remote.png" alt="select proton drive remote" class="img-medium img-center" />

### 步驟 3：設定您的 Proton Drive 遠端

在設定表單中填寫必要欄位：

- **Remote name**：為您的遠端取一個易記的名稱（例如 `MyProtonDrive`）
- **username**：您的 Proton 電子郵件地址
- **password**：您的 Proton 帳戶密碼
- **2fa**（選填）：您目前的 2FA 驗證碼（僅在啟用 2FA 時需要）

輸入所有必要資訊後，點選 **`Add Remote`** 以完成設定。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-proton.png" alt="remote configure proton" class="img-medium img-center" />

### 步驟 4：確認已新增的遠端

新增完成後，您的 Proton Drive 遠端（例如 `MyProtonDrive`）將會出現在**遠端管理員**清單中。

現在您可以：
- 點選 **`Open`** 瀏覽您的 Proton Drive 內容。
- 在傳輸、掛載或排程任務中使用它。
- 隨時編輯或刪除該遠端設定。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-proton-view.png" alt="remote manager proton view" class="img-medium img-center" />


✅ **完成！** 您的 **Proton Drive** 現已成功連接至 **RcloneView**。


## 🔗 其他資源

- 🌐 [Proton Drive 登入](https://drive.proton.me/)
- 🔐 [管理您的 Proton 帳戶](https://account.proton.me/)
- 🛡️ [Proton 2FA 設定指南](https://proton.me/support/two-factor-authentication)
