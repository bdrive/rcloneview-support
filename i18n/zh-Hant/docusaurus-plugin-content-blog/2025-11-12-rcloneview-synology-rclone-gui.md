---
slug: rcloneview-synology-rclone-gui
title: "在 Synology NAS 上使用 GUI 操作 rclone：無需 SSH"
authors:
  - tayson
description: "無需 SSH 或 CLI，即可在 Synology NAS 上執行 rclone。使用 RcloneView 管理遠端、比對變更、加密並安全地自動化雲端備份。"
keywords:
  - synology rclone
  - rclone synology nas
  - rcloneview synology
  - synology cloud backup
  - rclone gui
  - no ssh backup
  - nas to cloud backup
  - rcloneview jobs
  - compare first backup
  - rcloneview crypt remote

tags:
  - RcloneView
  - cloud-storage
  - backup
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# 在 Synology NAS 上使用 GUI 操作 rclone：無需 SSH

> Synology 使用者想要 rclone 的強大功能,卻不想承擔 SSH 或 CLI 的風險。RcloneView 在同一個工作空間中提供視覺化控制、更安全的備份,以及可重複執行的自動化。

DSM 內建工具是不錯的起點,但許多 NAS 使用者最終都會遇到限制:雲端支援不足、控制能力薄弱,以及不明確的成本或安全性取捨。rclone 是明顯的升級選擇,但傳統做法需要 SSH 與命令列技能。本指南展示一種以 GUI 為核心的架構,保留 rclone 的強大功能,同時去除 CLI 帶來的負擔。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何「Synology rclone」是熱門搜尋

Synology NAS 使用者通常想要三件事:

- 比 DSM 工具更廣泛的雲端支援
- 針對複製 (Copy)、同步 (Sync) 與篩選的檔案層級控制
- 擺脫廠商鎖定與不透明的備份格式

rclone 能滿足這一切,但大多數教學都預設你會使用 SSH 與 CLI。真正的搜尋意圖其實很單純:*不用終端機也能使用 rclone*。

## rclone 功能強大,但僅限 CLI 是一道門檻

典型的 NAS rclone 設定流程是:

- 啟用 SSH
- 透過終端機連線
- 編輯或管理 `rclone.conf`
- 手動執行指令,或透過 cron 排程

對許多 NAS 使用者而言,這會帶來實際風險:

- 打字錯誤可能導致資料遺失
- 同步 (Sync) 前無法先預覽
- 發生失敗後日誌難以追蹤

## 更好的架構:NAS 負責儲存,GUI 負責控制

核心概念:

- NAS 仍是**資料引擎**
- RcloneView 成為**控制中心**

你依然在底層使用 rclone,但透過視覺化、安全的介面來管理它。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS detection and connection" class="img-large img-center" />

## RcloneView 為 Synology 工作流程帶來的改變

- 無需 SSH 即可設定遠端
- 傳輸前先進行視覺化比對 (Compare)
- 任務歷史與日誌集中於一處
- 以 GUI 排程取代 cron

RcloneView 不會取代你的 NAS,而是讓你的 NAS 在沒有 CLI 摩擦的情況下具備雲端就緒能力。

## 典型設定選項(非以 SSH 為核心的工作流程)

### 選項一:NAS 作為來源,RcloneView 作為控制器

- NAS 共用資料夾 -> 雲端目標
- 所有複製/同步/比對皆在 RcloneView 中控制

### 選項二:混合模式

- NAS 在本機儲存資料
- RcloneView 負責比對、加密與排程

## 不依賴 SSH 的逐步流程

### 步驟 1:找出需要保護的 NAS 資料

- 預設略過整個磁碟區
- 挑選重要的共用資料夾
- 依專案或使用者分類

### 步驟 2:在 RcloneView 中新增雲端遠端

- Google Drive、OneDrive、S3、Wasabi、Backblaze
- OAuth 或金鑰式設定

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

### 步驟 3:將 NAS 資料夾視為來源

- 使用已對應或掛載 (mounted) 的 NAS 路徑
- 明確設定讀寫權限

## 為何 GUI 對 NAS + rclone 如此重要

### 視覺化安全性

- 複製與同步的差異一目了然
- 更容易察覺方向錯誤

### 傳輸前先比對

- 在資料移動前查看確切的差異
- 篩除 NAS 產生的雜訊,例如暫存或快取檔案

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

### 降低非專業使用者的風險

- 無需記住 CLI 語法
- 大幅減少造成破壞性錯誤的機會

## 對 NAS 資料使用比對 (Compare)

NAS 資料夾通常包含:

- `@eaDir`
- 暫存快取
- 套件產生的檔案

比對功能能幫助你識別真正的變更,避免不必要的上傳。它也能在每次備份執行前提供成本可視性。

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="Compare and copy only changes" class="img-large img-center" />

## NAS 備份中複製 (Copy) 與同步 (Sync) 的選擇

### 複製(建議的預設選項)

- 不會刪除目的地的檔案
- 對備份而言最安全
- 容易回復

### 同步(僅限進階使用)

- 僅適用於受控的鏡像備份
- 一律先執行 Dry Run(模擬執行)

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />

## 上傳前加密 NAS 資料(Crypt 遠端)

NAS 的加密機制無法保護資料離開 NAS 之後的安全。Crypt 遠端能在上傳前提供用戶端加密。

- 檔案內容與可選的檔名加密
- 雲端上的零知識儲存

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="Add Crypt remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="Select Crypt target folder" class="img-large img-center" />
</div>

## 無需 cron 的排程與自動化

將複製或同步儲存為任務 (Job),再以視覺化方式排程。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

這能為你帶來:

- 任務歷史與失敗可視性
- 可重複使用的設定
- 團隊間更容易交接

## 真實世界的 NAS 備份情境

### 家用 NAS -> Google Drive

- 照片與文件
- 可快速還原單一檔案

### 小型辦公室 NAS -> S3 或 Wasabi

- 可預測的成本與長期儲存
- 受控的複製任務

### 進階使用者或 IT 管理員

- NAS -> 多雲端目標
- 依部門或專案分開的任務

## 安全與防護考量

- 盡可能使用唯讀掛載
- 將備份任務與同步任務分開
- 直接在雲端開啟檔案以測試還原

## 常見迷思

**「CLI 永遠比較好」**
功能強大,但在正式的 NAS 資料上有其風險。

**「GUI 只適合新手」**
GUI 能提升操作安全性與可稽核性。

## 結論:rclone 強大,但控制才是關鍵

Synology 使用者選擇 rclone 是為了它的靈活性。RcloneView 保留了這份強大功能,同時去除 SSH 與 CLI 帶來的摩擦。你將獲得更安全的工作流程、更佳的可視性,以及值得信賴的備份。

如果你想在 Synology 上使用 rclone 卻不想碰終端機,這是最簡單的路徑。
