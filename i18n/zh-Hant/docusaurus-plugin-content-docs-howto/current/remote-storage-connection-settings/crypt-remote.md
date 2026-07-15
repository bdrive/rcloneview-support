---
sidebar_position: 2
description: 在 RcloneView 中新增 Crypt 遠端，在現有雲端遠端之上為檔案與檔名加密，同時仍可在應用程式內存取。
keywords:
  - rcloneview
  - crypt
  - virtual remote
  - encrypted remote
  - cloud encryption
  - remote manager
  - privacy
tags:
  - RcloneView
  - crypt
  - remote-storage
  - encryption
  - virtual-remote
date: 2025-12-08
author: tayson
---

# Crypt

## 如何使用 RcloneView 新增 Crypt

**Crypt 遠端**會在現有的雲端遠端（Google Drive、OneDrive 等）之上新增一層加密。
檔案仍然存放在原始遠端上，而 Crypt 遠端負責處理加密與解密。

它的用途：

- 防止服務供應商看到檔案內容。
- 也可以將檔名加密，以達到完整的隱私保護。
- 在 RcloneView 內會自動完成解密。
- 非常適合用於敏感資料的備份。

---

## 為什麼 Crypt 遠端看起來是空的

使用者通常會期望在 Crypt 遠端中看到自己的原始檔案。但實際情況是：

- Crypt 只會顯示**加密後**的檔案。
- 底層遠端中的原始檔案**不會**顯示在 Crypt 檢視畫面中（這是正常現象）。

範例：

- `mygoogledrive:Meet Recordings` 內含原始檔案。
- `MyCryptGoogle:` 以 Crypt 包裝同一個資料夾。
- 在 Crypt 遠端中看起來是空的——這是預期行為。

當你**透過 Crypt** 上傳時，檔案會以加密方式儲存，因此：

- 在 Crypt 遠端中會以正常（已解密）方式顯示。
- 在原始遠端中會以加密後的檔名顯示。

---

## 透過「新增遠端」建立 Crypt 遠端

### 步驟 1 — 開啟 **新增遠端** → **虛擬** → **Crypt**

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="new remote add crypt" class="img-large img-center" />

### 步驟 2 — 輸入 Crypt 詳細資訊

必填欄位：

- **遠端名稱**：Crypt 遠端的名稱（例如 `MyCryptGoogle`）。
- **遠端（要加密的資料夾）**：點選資料夾選取器，選擇要保護的現有遠端與資料夾。

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="select target remote and folder for crypt" class="img-large img-center" />

選取後，檢查設定並點選**新增遠端**。
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-crypt-input.png" alt="crypt input window" class="img-large img-center" />

### 步驟 3 — 在遠端管理員中確認

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="remote manager crypt" class="img-large img-center" />

---

## 在 Crypt 遠端中上傳與檢視檔案

當你透過 Crypt 遠端上傳時：

- 檔案會在上傳時**加密**。
- Crypt 檢視畫面會顯示**已解密的名稱**，方便使用。
- 底層遠端會顯示**加密後的檔名**。

比較範例：
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="crypt upload file compare" class="img-large img-center" />

| 檢視位置                          | 顯示內容                       |
| ------------------------------- | ----------------------------------- |
| `MyCryptGoogle:`                | 看似原始的檔名（已解密） |
| `mygoogledrive:Meet Recordings` | 加密後的檔名（預期行為）      |

---

## 為什麼要使用 Crypt 遠端

- 雲端服務供應商無法讀取檔案內容。
- 檔名可以加密，以達到完整的隱私保護。
- RcloneView 中的自動解密機制讓使用上非常簡單。
- 非常適合用於安全備份、敏感文件與共用磁碟機。
- 可搭配排程器，實現自動化的加密備份。

---

## 摘要

| 功能                       | 說明                                       |
| -------------------------- | ------------------------------------------------- |
| **Crypt 遠端**              | 在現有遠端之上的加密層          |
| **原始檔案可見性**            | 原始檔案在 Crypt 檢視畫面中會被隱藏（正常現象）     |
| **透過 Crypt 上傳**          | 以加密方式儲存；在 Crypt 檢視畫面中以解密狀態顯示 |
| **用途**                    | 安全的雲端備份與隱私保護       |
