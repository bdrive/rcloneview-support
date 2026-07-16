---
slug: rcloneview-on-windows-server-cloud-backup-rcloneview
title: "如何在 Windows Server 上使用 RcloneView 進行自動化雲端備份"
authors:
  - tayson
description: "在 Windows Server 2019/2022 上設定 RcloneView 以進行自動化雲端備份。透過 GUI 將伺服器資料備份排程至 S3、Google Drive 或 Backblaze B2。"
keywords:
  - rcloneview windows server
  - windows server cloud backup
  - windows server s3 backup
  - cloud backup windows server
  - automated server backup cloud
  - windows server google drive sync
  - server data backup tool
  - rclone windows server gui
  - cloud backup gui windows
  - windows server backup solution
tags:
  - windows-server
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何在 Windows Server 上使用 RcloneView 進行自動化雲端備份

> Windows Server 會產生關鍵的業務資料——資料庫、檔案共用、應用程式資料。過去要將這些資料備份到雲端儲存,通常代表要撰寫 PowerShell 指令碼。RcloneView 讓你能用視覺化介面完成同樣的工作。

管理 Windows Server 環境的系統管理員需要可靠的雲端備份。雖然 rclone 的 CLI 在指令碼中表現出色,但 RcloneView 增添了視覺化監控、簡易的工作建立方式,以及用於驗證備份的雙窗格檔案總管——同時不犧牲底層 rclone 的強大功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼 Windows Server 需要雲端備份?

### 3-2-1 備份原則

- **3 份**資料副本。
- **2 種**不同的媒體類型。
- **1 份**異地副本。

雲端儲存滿足了異地備份的需求。結合本機備份(磁帶、NAS、外接硬碟),即使整個資料中心無法使用,雲端備份也能提供災難復原能力。

### 常見的備份目標

| 資料類型 | 來源 | 最佳雲端目標 |
|-----------|--------|------------------|
| 檔案共用 | 網路磁碟機 | S3、Backblaze B2 |
| SQL Server 備份 | .bak 檔案 | S3 Standard-IA |
| IIS 記錄檔 | 記錄目錄 | S3 Glacier |
| 應用程式資料 | 各種 | Google Drive、OneDrive |
| VM 快照 | Hyper-V 匯出檔 | Wasabi、B2 |

## 在 Windows Server 上安裝

### 先決條件

- Windows Server 2019 或 2022。
- .NET 6 Runtime 或更新版本。
- 可存取雲端服務供應商 API 的網路連線(對外 HTTPS)。

### 安裝 RcloneView

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載 Windows 安裝程式。
2. 執行安裝程式。RcloneView 會安裝到 `C:\Program Files\RcloneView\`。
3. RcloneView 會在首次啟動時自動下載 rclone。

### 設定雲端遠端

新增你的備份目的地:

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Windows Server" class="img-large img-center" />

對於無圖形介面的伺服器(無法透過瀏覽器進行 OAuth 驗證),你可以在工作站上設定遠端,再將 rclone 設定檔複製到伺服器上。

## 設定自動化備份

### 步驟一:建立備份工作

為每個備份來源建立一個複製工作:

- **檔案共用** → S3 儲存貯體。
- **SQL 備份** → Backblaze B2。
- **記錄檔** → S3 Glacier。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create server backup job" class="img-large img-center" />

### 步驟二:排程備份

將每個工作排程為以適當的頻率執行:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Windows Server backups" class="img-large img-center" />

建議排程:

| 資料類型 | 頻率 | 時間 |
|-----------|-----------|------|
| 檔案共用 | 每晚 | 凌晨 2:00 |
| SQL 備份 | 每晚 | 凌晨 3:00(SQL 備份工作完成後) |
| 記錄檔 | 每週 | 週日凌晨 1:00 |
| 完整伺服器 | 每週 | 週六晚上 11:00 |

### 步驟三:設定通知

透過 Slack、Discord 或 Telegram(v1.3)在備份完成或失敗時取得通知:

這對伺服器備份而言至關重要——你需要在備份失敗時立即得知。

### 步驟四:使用批次工作處理多步驟流程

透過批次工作串連多項操作:

1. 將 SQL 備份複製到 S3。
2. 將檔案共用複製到 Backblaze B2。
3. 比較來源與目的地以進行驗證。
4. 傳送通知。

全程自動化,依序執行。

## 監控備份進度

即時追蹤大型備份傳輸:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor server backup progress" class="img-large img-center" />

## 驗證備份完整性

每次備份後,使用資料夾比較功能進行驗證:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Windows Server backup" class="img-large img-center" />

這能揪出以下問題:

- 靜默失敗、未成功傳輸的檔案。
- 鎖定檔案所導致的權限錯誤。
- 備份期間被修改的檔案。

## 安全考量

### 加密備份

使用 rclone 的 crypt 遠端,在上傳前加密所有伺服器資料。雲端服務供應商只會儲存加密後的資料塊——即使雲端帳戶遭到入侵,你的伺服器資料仍然安全。

### 限制存取權限

- 在具有最小權限的專用服務帳戶下執行 RcloneView。
- 將 rclone 設定檔加密儲存(rclone 支援設定檔加密)。
- 在 S3 上使用 IAM 政策,將備份帳戶限制在特定儲存貯體。

### 保留政策

在你的雲端儲存上設定生命週期規則:

- **S3**:30 天後轉換至 Glacier,365 天後刪除。
- **B2**:使用生命週期規則進行自動清理。
- 至少保留 30 天的備份,以應對延遲發現的問題並進行復原。

## 頻寬管理

伺服器備份可能會佔滿你的網路頻寬。使用[頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)以避免影響正式環境流量:

- 在上班時段將頻寬限制為可用頻寬的 50%。
- 在夜間備份時段不限制。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html)**下載 RcloneView**。
2. **安裝於你的 Windows Server 上**。
3. **新增雲端儲存遠端**(S3、B2 等)。
4. **建立並排程備份工作**。
5. **設定通知**以進行失敗警示。
6. **使用資料夾比較功能驗證備份**。

你的伺服器資料就是你的業務命脈。自動化備份,讓你晚上睡得更安心。

---

**相關指南:**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [設定頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
