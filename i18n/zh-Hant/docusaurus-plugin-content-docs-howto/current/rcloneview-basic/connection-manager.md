---
sidebar_position: 9
description: "了解如何使用 RcloneView 連線管理員在內建 Rclone 與外部 Rclone 執行個體之間進行設定與切換。"
keywords:
  - rcloneview
  - connection
  - remote control
  - embedded rclone
  - external rclone
  - connection manager
  - rclone
  - rclone rcd
  - rc server
  - Remote Connection
  - rclone connection
tags:
  - RcloneView
  - connection
  - remote-control
  - embedded-rclone
  - external-rclone
  - connection-manager
  - rclone-rcd
date: 2025-06-22
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 在 RcloneView 中管理 Rclone 連線

RcloneView 是一款以 GUI 為基礎的雲端儲存檔案管理工具,透過 Remote Control(RC)API 與 **Rclone** 通訊。預設情況下,它內建了一個**內建 Rclone**執行個體,同時也支援連線至外部 Rclone 執行個體(**外部 Rclone**)。

本指南說明如何使用**連線管理員**來管理這些連線。

## 連線管理員概觀

RcloneView 以兩種模式與 Rclone 通訊:

- **內建 Rclone**(預設,內建於程式中)
- **外部 Rclone**(由使用者設定,透過網路連線)

**連線管理員**可讓你檢視、切換及管理這些 Rclone 執行個體。

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="connection manager with embedded rclone only" class="img-medium img-center" />

### 內建 Rclone

RcloneView 內含一個預先安裝的 Rclone 執行檔,稱為**內建 Rclone**,會自動啟動。

| 欄位                       | 說明                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| **位址(Address)**                 | 通常為 `http://127.0.0.1:5582`(本機回送位址)                         |
| **Rclone 版本**          | 例如:`v1.70.1`                                                             |
| **已連線(Connected)** / **連線(Connect)** | 顯示目前狀態。若尚未連線,請點選**連線**以啟動。 |
| **自我更新(Self Update)**             | 點選以升級至最新版本的 Rclone。                                                 |

### 外部 Rclone 清單

外部 Rclone 指的是由使用者手動啟動的獨立 Rclone 執行個體,通常透過 `rclone rcd` 啟動。它可能執行於:

- 本機(用於測試)
- 遠端伺服器(例如 AWS EC2)
- Docker 容器內

每個項目會顯示:

| 欄位 | 說明 |
|-------|-------------|
| **顯示名稱(Display Name)** | 使用者自訂名稱(例如 `aws-rclone`) |
| **遠端位址(Remote Address)** | API 端點,例如 `http://<host>:5572` |
| **使用者名稱(Username)** | 若已啟用驗證機制 |
| **Rclone 版本** | 從已連線的執行個體取得 |

**可用操作**:
- **連線** – 將此執行個體設為使用中
- **編輯** – 修改位址、憑證或 SSL 選項
- **刪除** – 從清單中移除

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="external rclone added" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="external rclone selected" class="img-medium img-center" />
</div>

### 目前選取指示器

在連線管理員對話框頂端:

- `Selected: Embedded Rclone` – 表示目前使用的是預設內建執行個體
- `Selected: aws-rclone` – 表示目前使用的是自訂外部執行個體

同一時間只能有一個連線處於使用中狀態。你目前的選取內容會影響:

- 遠端清單的可見性
- 掛載/工作操作
- 設定相關操作

:::important 注意事項
- 同一時間只能有一個 Rclone 連線處於使用中狀態。
- 你可以在內建與外部連線之間自由切換。

💡 若要同時並排管理兩個執行個體,請開啟新的 RcloneView 視窗。

- 若外部 Rclone 變得無法使用,你隨時可以回退至內建版本。
:::

## 新增外部 Rclone

若要連線至正在執行的 `rclone rcd` 伺服器:

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="new connection form" class="img-medium img-center" />

1. 點選連線管理員底部的**新增連線**。
2. 填寫表單:

| 欄位 | 說明 |
|-------|-------------|
| **顯示名稱(Display Name)** | 例如 `aws-rclone` |
| **遠端位址(Remote Address)** | 完整的 API 端點(`http://<host>:5572`) |
| **使用者名稱 / 密碼(Username / Password)** | 若已啟用驗證機制則為必填 |
| **停用 SSL 驗證(Disable SSL Verification)** | 適用於自簽憑證或開發用途 |
<br />
<br />

3. 點選**測試連線**。若成功,請點選**儲存**。

:::important 注意事項

💡 若要讓外部 Rclone 可供使用,請以下列指令執行:

```bash
rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572
```

:::
