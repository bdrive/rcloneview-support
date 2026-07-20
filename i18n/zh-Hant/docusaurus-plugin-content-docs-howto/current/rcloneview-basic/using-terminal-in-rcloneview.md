---
sidebar_position: 13
description: "在 RcloneView 內建的終端機中直接執行 rclone CLI 指令，用於測試、管理遠端及疑難排解。"
keywords:
  - rcloneview
  - rclone
  - 終端機
  - cli
  - 遠端管理
  - 疑難排解
  - rclone config
tags:
  - RcloneView
  - Terminal
  - CLI
  - rclone
  - 疑難排解
date: 2025-12-04
author: tayson
---

# 在 RcloneView 中使用終端機

RcloneView 內建終端機，讓你不必開啟 CMD、PowerShell 或系統殼層，就能執行完整的 `rclone` CLI 指令。它非常適合用於快速測試、管理遠端，或在應用程式內擷取記錄。

本指南說明如何開啟終端機、執行 `rclone` 指令、放大/縮小檢視畫面，以及使用複製選項來分享結果。

---

## 開啟終端機

- 點擊 RcloneView 底部的 **`Terminal`** 分頁。  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="terminal bottom" class="img-medium img-center" />
- 終端機的運作方式與標準的 `rclone` 命令列介面相同，並會在目前的 RcloneView 環境中執行指令。

---

## 列出可用的 rclone 指令

輸入 rclone 並按下空白鍵，即可自動顯示所有支援的指令。  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="terminal input rclone" class="img-medium img-center" />

---

## 檢視說明與遠端詳細資訊（`rclone about`）

- 若要查看 `about` 的一般說明：  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about.png" alt="terminal input rclone about" class="img-medium img-center" />
- 若要取得特定遠端的儲存空間資訊（範例：`mygoogle`）：
  ```bash
  rclone about "mygoogle:"
  ```
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="terminal input rclone about my google" class="img-medium img-center" />

結果範例：  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle-result.png" alt="terminal about my google result" class="img-medium img-center" />

---

## 列出所有已設定的遠端

使用 `listremotes` 指令來確認有哪些遠端可用：

```bash
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes" class="img-medium img-center" />

---

## 放大或縮小終端機檢視畫面

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="terminal expand" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="terminal shrink" class="img-medium img-center" />
</div>

- **放大**：切換至全螢幕終端機，方便檢視較長的輸出內容。
- **縮小**：返回預設版面配置。

---

## 透過 CLI 建立遠端（`rclone config create`）

範例：建立一個名為 `mygoogledrive` 的 Google Drive 遠端並加以驗證：

```bash
rclone config create mygoogledrive drive
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="rclone config create drive" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-check.png" alt="rclone config create check" class="img-medium img-center" />

---

## 複製、貼上與全部複製

選取任何終端機輸出內容以開啟右鍵選單，選擇 **Copy**、**Paste** 或 **Copy All**。  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="terminal select copy" class="img-medium img-center" />

這對於將記錄分享給客服支援，或將結果儲存至文件中很有幫助。

---

## 建議使用情境

- 在自動化之前，先測試進階的 `rclone` 指令（`lsf`、`tree`、後端旗標）。
- 在 RcloneView 內驗證腳本或伺服器端指令。
- 當 GUI 操作路徑較慢時，快速管理或建立遠端。

:::caution 小心具破壞性的指令
`delete`、`purge` 等指令，或不正確的 `sync` 旗標，可能會永久移除資料。在終端機中執行前，請務必再三確認路徑與遠端是否正確。
:::
