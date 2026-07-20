---
sidebar_position: 14
description: "透過在「設定」中設定 config 密碼，加密您的 rclone config 檔案並搭配 RcloneView 使用。"
keywords:
  - rcloneview
  - rclone config
  - encrypted config
  - config password
  - security
  - rclone.conf
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - rclone config
date: 2026-02-12
author: ysh
---

# 使用加密的 Rclone Config 檔案

Rclone 可以加密其設定檔（`rclone.conf`），讓遠端憑證不會以明文儲存。RcloneView 完全支援加密的 config 檔案 — 您只需要告訴它密碼即可。

本教學涵蓋以下內容：

- 為什麼要加密您的 rclone config
- 如何使用 `rclone config` 加密您現有的 config
- 如何在 RcloneView 中輸入 config 密碼

---

## 為什麼要加密您的 rclone config？

您的 `rclone.conf` 檔案包含您所設定的每個遠端的憑證（權杖、密碼、API 金鑰）。預設情況下，這些資訊會以明文儲存。加密 config 檔案可以在有人存取您的機器或備份時，保護這些憑證。

- 防止明文憑證外洩。
- 在共用或多使用者系統上增加一層安全防護。
- 適用於所有 rclone 遠端與功能 — 除了檔案在靜態儲存時會被加密之外，其他一切不變。

---

## 步驟 1：加密您的 rclone config

開啟終端機並執行：

```bash
rclone config
```

您會看到一個選項選單。選擇 **`s`** 來 **Set configuration password**：

```
s) Set configuration password
q) Quit config
s/q> s
```

在提示時輸入您想要的密碼，然後確認。Rclone 會就地加密現有的 config 檔案。

:::tip
如果您已經設定好遠端，它們會繼續正常運作。Rclone 會使用您的新密碼重新加密整個檔案。
:::

:::caution
請記住這個密碼。如果您遺失了它，您將需要從頭重新設定您的遠端。
:::

---

## 步驟 2：在 RcloneView 中輸入 config 密碼

1. 開啟 **設定**（從頂端選單）。
2. 前往 **Embedded Rclone** 分頁。
3. 向下捲動至 **進階選項**。
4. 在 **Config Password** 欄位中，輸入您在步驟 1 中設定的相同密碼。
5. 點擊 **Restart Embedded Rclone**。

<img src="/support/images/en/tutorials/encrypted-config/settings-config-password.png" class="img-large img-center" alt="Config Password field in Embedded Rclone settings" />

就是這樣 — RcloneView 會無縫解密並使用您的加密 config。您的遠端將會如常顯示並正常運作。

---

## 總結

| 項目 | 說明 |
| --- | --- |
| 功能 | 在 RcloneView 中使用加密的 rclone config 檔案 |
| 加密 | 執行 `rclone config` → `s) Set configuration password` |
| RcloneView 設定 | 設定 → Embedded Rclone → 進階選項 → Config Password |
| 套用 | 輸入密碼後點擊 **Restart Embedded Rclone** |
| 最適合 | 保護共用或敏感系統上的憑證 |
