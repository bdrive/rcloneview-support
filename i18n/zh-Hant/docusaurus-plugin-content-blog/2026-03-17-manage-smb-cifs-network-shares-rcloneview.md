---
slug: manage-smb-cifs-network-shares-rcloneview
title: "管理 SMB/CIFS 網路共用資料夾 — 使用 RcloneView 將辦公室檔案伺服器同步至雲端"
authors:
  - tayson
description: "SMB 網路共用資料夾是辦公室檔案伺服器的骨幹。了解如何將它們連接至 RcloneView，並同步至 Google Drive、S3 或任何雲端以進行備份與遠端存取。"
keywords:
  - smb cloud sync
  - cifs cloud backup
  - network share to cloud
  - smb to google drive
  - file server cloud sync
  - smb to s3 backup
  - windows share cloud
  - network drive cloud backup
  - smb rclone
  - office file server cloud
tags:
  - smb
  - nas
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 SMB/CIFS 網路共用資料夾 — 使用 RcloneView 將辦公室檔案伺服器同步至雲端

> 貴公司的檔案伺服器已經運行多年。每個人都是透過對應的網路磁碟機來存取它。但它沒有異地備份，遠端工作者也無法從家中存取。雲端同步可以同時解決這兩個問題。

SMB/CIFS（Server Message Block／Common Internet File System）是每個 Windows 共用資料夾、NAS 檔案共用以及辦公室檔案伺服器背後的協定。它在區域網路上可靠又快速，但並非為雲端整合或遠端存取而設計。RcloneView 彌補了這個落差——連接您的 SMB 共用資料夾，並將其同步至任何雲端供應商，以進行備份、遠端存取與災難復原。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 SMB 共用資料夾連接至 RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add SMB remote" class="img-large img-center" />

使用伺服器位址、共用資料夾名稱與認證，將您的 SMB 共用資料夾新增為遠端。您的網路共用資料夾將出現在雙窗格檔案總管中。

## 主要工作流程

### 將檔案伺服器備份至雲端

透過雲端備份至 S3、B2 或 Google Drive 來保護您的辦公室檔案伺服器：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="File server to cloud backup" class="img-large img-center" />

### 啟用遠端存取

將檔案伺服器內容同步至 Google Drive 或 OneDrive，讓遠端工作者無需 VPN 即可隨處存取檔案。

### 排程夜間備份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule file server backup" class="img-large img-center" />

在辦公室網路較為空閒的深夜執行備份。

### 驗證備份完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify file server backup" class="img-large img-center" />

比對 SMB 共用資料夾與雲端副本，確保沒有遺漏任何內容。

### 遷移至雲端

計畫淘汰檔案伺服器嗎？可以逐部門、循序漸進地將所有內容傳輸至雲端儲存。

## 效能建議

- **在離峰時段執行備份**，以避免網路壅塞
- **使用增量同步**——每次執行只傳輸已變更的檔案
- **設定適當的並行數**——共用伺服器建議使用 2-4 個傳輸
- **排除暫存檔案**——過濾掉 `~$*`、`.tmp`、`Thumbs.db`

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增您的 SMB 共用資料夾**作為遠端。
3. **新增雲端目的地**以進行備份。
4. **建立同步工作**並排程執行。
5. 使用資料夾比對功能**定期驗證**。

您的檔案伺服器值得擁有一個雲端安全網。

---

**相關指南：**

- [將 SFTP/SMB 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [掛載並同步遠端檔案系統](https://rcloneview.com/support/blog/mount-sync-remote-file-systems-rcloneview)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
