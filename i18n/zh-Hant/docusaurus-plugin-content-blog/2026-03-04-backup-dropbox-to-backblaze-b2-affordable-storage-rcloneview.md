---
slug: backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview
title: "使用 RcloneView 將 Dropbox 備份到 Backblaze B2，享受經濟實惠的長期儲存"
authors:
  - tayson
description: "透過將 Dropbox 資料備份到 Backblaze B2，以極低的成本保護您的資料——使用 RcloneView 自動排程並驗證備份。"
keywords:
  - dropbox backup to backblaze
  - dropbox to b2
  - backup dropbox cheap
  - dropbox backblaze b2 sync
  - dropbox long-term backup
  - affordable cloud backup
  - dropbox data protection
  - dropbox to backblaze transfer
  - dropbox rclone backup
  - cheap dropbox backup solution
tags:
  - dropbox
  - backblaze-b2
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Dropbox 備份到 Backblaze B2，享受經濟實惠的長期儲存

> Dropbox 非常適合日常同步，但用於長期備份卻相當昂貴。Backblaze B2 的費用只是其中一小部分。RcloneView 將兩者連接起來，並讓備份自動化。

Dropbox 擅長即時檔案同步與協作，但僅將其作為唯一的備份手段既有風險又昂貴——對於大型資料庫尤其如此。Backblaze B2 提供與 S3 相容的物件儲存服務，每 GB 每月僅需 $0.006（約為大多數競爭對手成本的 1/3），非常適合長期封存。RcloneView 銜接了兩者之間的橋樑：依排程自動將您的 Dropbox 備份到 B2，以校驗碼驗證，並可隨時還原。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要將 Dropbox 備份到 Backblaze B2？

### 節省成本

| 供應商 | 每 TB/月成本 | 10 TB/年 |
|----------|-------------------|------------|
| Dropbox Business | 每使用者約 $15（有限額） | 依情況而定 |
| Backblaze B2 | $6 | $72 |
| AWS S3 Standard | $23 | $276 |

B2 的定價使其成為目前最便宜的雲端備份目的地之一。

### 獨立於 Dropbox 之外

- **帳戶問題**——如果您的 Dropbox 帳戶被停權或遭到入侵，您的 B2 備份不會受到影響。
- **意外刪除**——Dropbox 的版本歷史記錄有其限制。B2 為您提供了一個獨立的安全網。
- **勒索軟體防護**——搭配生命週期規則的獨立 B2 備份，可作為不可竄改的復原點。

## 設定備份

### 步驟 1：新增 Dropbox

1. 點擊 **Add Remote**（新增遠端）→ 選擇 **Dropbox**。
2. 透過 OAuth 進行驗證。
3. 您的 Dropbox 檔案現在可以瀏覽了。

### 步驟 2：新增 Backblaze B2

1. 點擊 **Add Remote**（新增遠端）→ 選擇 **Backblaze B2**（或與 S3 相容的選項）。
2. 輸入您的 B2 Application Key ID 與 Application Key。
3. 您的 B2 儲存桶（bucket）現在可以瀏覽了。

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and Backblaze B2 remotes" class="img-large img-center" />

### 步驟 3：建立備份工作

1. 建立一個 **Copy job**（複製工作）：Dropbox → B2 bucket。
2. 使用 Copy（而非 Sync）以避免在 Dropbox 檔案被移除時，連帶刪除 B2 上的檔案。
3. 執行初次備份。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to B2 backup job" class="img-large img-center" />

### 步驟 4：驗證

使用[資料夾比對](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)確認每個檔案都已成功傳輸到 B2：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on B2" class="img-large img-center" />

### 步驟 5：排程

設定每日自動備份：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Dropbox to B2 backups" class="img-large img-center" />

## 監控

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Dropbox to B2 transfer" class="img-large img-center" />

新增 [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 或 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) 通知，讓您隨時掌握備份完成或失敗的狀態。

## 從 B2 還原

如果您需要還原資料：

1. 建立一個反向的 Copy job：B2 → Dropbox（或 B2 → 本機磁碟）。
2. 使用資料夾比對來選擇要還原的特定檔案。
3. RcloneView 以視覺化方式處理傳輸——無需使用命令列。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Dropbox** 與 **Backblaze B2** 作為遠端。
3. **建立一個 Copy job**（複製工作）並執行初次備份。
4. **排程**每日自動保護。
5. **安心入眠**，因為您的 Dropbox 資料已擁有一份經濟實惠且獨立的備份。

---

**相關指南：**

- [透過瀏覽器登入（OAuth）新增遠端](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
