---
slug: rcloneview-terminal-rclone-cli-inside-gui
title: "RcloneView Terminal：在 GUI 中使用完整的 rclone CLI 功能"
authors:
  - tayson
description: "在 RcloneView 的 Terminal 中執行完整的 rclone CLI，具備自動完成、全螢幕模式與可複製的日誌--不需要另外開啟終端機。"
keywords:
  - rclone terminal
  - rcloneview terminal
  - rclone cli gui
  - rclone commands
  - cloud storage cli tool
  - cloud automation
  - rclone beginners
  - rclone power users
  - cloud devops tools
  - rcloneview
tags:
  - RcloneView
  - cloud-storage
  - sync
  - file-management
  - cli

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Terminal：在 GUI 中使用完整的 rclone CLI 功能

> 不必離開 RcloneView 就能執行每一個 rclone 指令。全新的 Terminal 將自動完成、可複製的日誌與全螢幕輸出整合進你用來瀏覽、比較與同步的同一個視窗中。

RcloneView 現在內建 Terminal，讓你可以在應用程式內執行完整的 rclone CLI--不需要額外開啟 CMD、PowerShell 或終端機視窗。初學者可以在視覺化的情境中學習指令，而工程師、進階使用者與 IT 管理員則能保留自動化旗標、詳細日誌與腳本流程，不必來回切換環境。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要把 CLI 帶進 GUI？

- 不用再於瀏覽用的 GUI 與進階旗標或診斷用的 shell 之間來回切換。
- 讓 rclone 的輸出與日誌與你的傳輸、掛載和排程工作放在一起。
- 用有引導的 UI 提示（而非空白的終端機）安全地教導團隊成員使用 rclone。

## 什麼是 RcloneView Terminal？

Terminal 位於 RcloneView 工作區的底部，執行的是你在應用程式中已經在使用的相同 rclone 執行檔。輸入 `rclone` 並按下空白鍵即可顯示所有支援的指令，然後立即執行--Windows、macOS 與 Linux 都共享相同的體驗。

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="Terminal tab in RcloneView" class="img-medium img-center" />

## 對初學者的好處

- 無需設定的壓力：rclone 已經內建，因此你可以練習指令而不必安裝或尋找系統路徑。
- 自動完成讓探索變得簡單--輸入 `rclone ` 即可在執行前先看到指令清單。
- 輸出保留在應用程式內，讓你更容易複製、重新執行或與 GUI 中看到的內容比對。

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="Autocomplete list for rclone commands" class="img-medium img-center" />

## 對工程師與進階使用者的好處

- 為掛載、Compare、Scheduler 與 CLI 實驗保留單一工作區--不必來回切換環境。
- 擷取詳細日誌（`-vv`）以排查雲端延遲或 API 限流問題，然後一鍵複製所有內容。
- 透過 `rclone config create` 更快設定遠端、驗證後端，接著繼續進行腳本化工作。
- 使用展開檢視，舒適地閱讀長篇輸出或多行腳本。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="Expanded Terminal view" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="Shrink Terminal view" class="img-medium img-center" />
</div>

## 主要功能一覽

- **指令自動探索**：輸入 `rclone` + 空白鍵，即可在執行前於情境中看到每一個指令。
- **全螢幕 Terminal**：需要查看長列表時展開，需要瞥一眼 Compare 或 Transfers 時縮小。
- **複製、貼上、全部複製**：無需匯出檔案即可與團隊成員或客服分享日誌。

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="Copy and paste options in the Terminal" class="img-medium img-center" />

## 現在就可以試試看的實用指令

### 1) 檢查某個遠端的儲存空間使用量
```bash
rclone about "mygoogle:"
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="rclone about output in RcloneView Terminal" class="img-medium img-center" />

### 2) 探索所有已設定的遠端
```bash
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes in RcloneView Terminal" class="img-medium img-center" />

### 3) 透過 CLI 建立新的遠端
```bash
rclone config create mygoogledrive drive
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="Create Google Drive remote with rclone config create" class="img-medium img-center" />

### 4) 在傳輸前預覽資料夾
```bash
rclone lsf mygoogledrive:Projects --dirs-only --recursive --max-depth 2
```

### 5) 用詳細日誌演練一次遷移
```bash
rclone sync mygoogledrive:Projects s3backup:Projects --dry-run -vv --progress
```
使用 `--dry-run` 來模擬變更，並用 `-vv` 在執行真正的工作前找出速度緩慢的後端或限流狀況。

## 何時該選擇 GUI，何時該選擇 Terminal

- **使用 GUI**：在雲端之間拖放檔案、以視覺化方式比較差異、排程重複性工作，或將儲存空間掛載為磁碟機。
- **使用 Terminal**：測試後端旗標、執行臨時性診斷，或執行輸入比點擊更快的進階 rclone 指令。
- **兩者搭配使用**：先用 Compare 預覽，再用 CLI 旗標調整計畫，最後將工作流程儲存為排程工作。

## 快速上手與安全提醒

1. 開啟 **Terminal** 分頁，輸入 `rclone `，然後從清單中選擇一個指令。
2. 在執行任何同步或刪除操作之前，先從唯讀指令（`listremotes`、`lsf`、`about`）開始。
3. 若需要附有截圖的完整導覽，請參閱 [在 RcloneView 中使用 Terminal](/howto/rcloneview-basic/using-terminal-in-rcloneview)。

> 專家提示：像 `delete`、`purge` 或未經確認的 `sync` 這類具破壞性的指令可能會刪除資料。按下 Enter 前請務必再次確認路徑與遠端。

## 結語

RcloneView Terminal 將完整的 rclone CLI 與你已經在使用的視覺化工具整合在一起，讓初學者能更快學習，也讓專家能更快行動。立即試用，把你的雲端操作、自動化實驗與除錯日誌都集中在同一個地方。

<CloudSupportGrid />
