---
slug: recover-accidentally-deleted-cloud-files-rcloneview
title: "不小心刪除了雲端檔案？如何用 RcloneView 備份防止資料遺失"
authors:
  - tayson
description: "不小心從 Google Drive 或 OneDrive 刪除了檔案？了解如何使用 RcloneView 設定雲對雲備份，讓您隨時擁有可還原的副本。"
keywords:
  - 復原已刪除的雲端檔案
  - 不小心刪除 google drive
  - 雲端檔案復原
  - 防止雲端資料遺失
  - onedrive 刪除檔案復原
  - 雲端備份防止刪除
  - 還原已刪除的雲端檔案
  - 雲端資料遺失防護
  - 雲端儲存意外刪除
  - 雲端檔案備份策略
tags:
  - RcloneView
  - data-recovery
  - backup
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 不小心刪除了雲端檔案？如何用 RcloneView 備份防止資料遺失

> 您從 Google Drive 刪除了一個資料夾，接著又清空了垃圾桶。三天後，您才發現那些檔案至關重要。垃圾桶已經清空，Google 也無能為力。現在該怎麼辦？

意外刪除是雲端資料遺失最常見的形式。雲端垃圾桶雖然有幫助，但都有時間限制（Google Drive：30 天，OneDrive：93 天，Dropbox：30～180 天）。一旦超過這個期限——或者您清空了垃圾桶——檔案就永遠消失了。唯一可靠的保護方式，就是建立一份獨立的備份。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 檔案是如何被刪除的

### 常見情境

- **手動操作失誤** — 選錯了資料夾，按下了刪除。
- **同步出錯** — 同步工具在另一端檔案被移除時，也將這一端的檔案刪除。
- **共用資料夾混亂** — 協作者從共用資料夾刪除檔案，影響到所有人。
- **勒索軟體** — 惡意程式加密或刪除檔案，且同步機制擴大了損害範圍。
- **帳號遭入侵** — 有人取得存取權限並刪除或修改檔案。
- **應用程式整合錯誤** — 連接到您雲端儲存的第三方應用程式意外移除了檔案。

### 為什麼雲端垃圾桶還不夠

| 供應商 | 垃圾桶保留期限 | 逾期後 |
|----------|:---:|------------|
| Google Drive | 30 天 | 永久刪除 |
| OneDrive | 93 天 | 永久刪除 |
| Dropbox | 30 天（Basic）、180 天（Pro） | 永久刪除 |
| Box | 30 天 | 永久刪除 |
| S3 | 無垃圾桶（可選版本控制） | 立即刪除 |

如果您在保留期限內發現刪除情形，還能夠復原。如果沒有發現——或者您清空了垃圾桶——那麼除非您有備份，否則資料就已遺失。

## 解決方案：雲對雲備份

在另一個獨立的雲端供應商上設定備份。如果主要雲端上的檔案被刪除，備份不會受到影響。

### 建議架構

```
Primary: Google Drive (daily use)
Backup: Backblaze B2 (independent copy)
```

關鍵字是**獨立**——備份不應該是同步鏡像。如果您使用同步（Sync）（來源端刪除檔案時，目的地的檔案也會一併刪除），刪除動作就會傳播到您的備份。因此，備份請使用**複製（Copy）**。

## 備份時：複製（Copy）vs 同步（Sync）

| 操作 | 新增檔案 | 更新變更的檔案 | 刪除已消失的檔案 |
|-----------|:-:|:-:|:-:|
| **複製（Copy）** | ✅ | ✅ | ❌ |
| **同步（Sync）** | ✅ | ✅ | ✅ |

**複製（Copy）**絕對不會刪除目的地的檔案。即使您從 Google Drive 刪除了某個檔案，您在 Backblaze B2 上的複本仍會完好無損。

**同步（Sync）**會完全鏡像來源——包括刪除動作在內。只有在您明確希望目的地與來源一致時，才使用同步。

## 使用 RcloneView 設定備份

### 1) 新增您的主要雲端與備份雲端

<img src="/support/images/en/blog/new-remote.png" alt="Add primary and backup cloud remotes" class="img-large img-center" />

### 2) 建立複製工作（而非同步）

從您的主要雲端複製到備份雲端：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create Copy backup job" class="img-large img-center" />

### 3) 排程每日備份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule daily cloud backup" class="img-large img-center" />

### 4) 使用資料夾比對驗證

定期檢查您的備份是否完整：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup completeness" class="img-large img-center" />

## 進階防護：版本化備份

如需更進一步的保護，可以使用支援版本控制的雲端供應商：

- **AWS S3** — 在儲存桶上啟用版本控制，每次覆寫都會建立一個新版本。
- **Backblaze B2** — 預設支援檔案版本控制。
- **Wasabi** — 提供物件版本控制。

有了版本控制，即使備份的複製工作用損毀的版本覆寫了某個檔案，您也能回復到先前的版本。

## 加密備份

使用 rclone 的 crypt 遠端來加密您的備份，可防範：

- 備份帳號遭入侵。
- 對備份資料的未授權存取。
- 備份供應商內部人員的威脅。

## 從備份還原

當您需要復原檔案時：

1. 在 RcloneView 中開啟您的備份雲端。
2. 導覽至已刪除的檔案。
3. 建立一個從備份到主要雲端的複製工作。
4. 執行工作以還原檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Restore files from backup" class="img-large img-center" />

## 備份檢查清單

- **使用複製，而非同步** — 保護備份不受刪除動作傳播影響。
- **備份到不同的供應商** — 不要把 Google Drive 備份到另一個 Google Drive 資料夾。
- **每日排程** — 縮短刪除發生時間與最後一次備份之間的落差。
- **定期驗證** — 若備份不完整或已損毀，備份就形同虛設。
- **啟用版本控制** — 在備份儲存空間上啟用，以獲得額外保護。
- **測試還原** — 在真正需要之前，先練習一次還原流程。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增您的主要雲端與備份雲端**。
3. **建立複製工作**（而非同步），從主要雲端複製到備份雲端。
4. **排程每日備份**。
5. 使用資料夾比對**定期驗證**。

設定備份的最佳時機，就是在您需要它之前。

---

**相關指南：**

- [為什麼雲對雲備份很重要](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
