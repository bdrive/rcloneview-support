---
slug: connect-webdav-server-cloud-sync-rcloneview
title: "將任何 WebDAV 伺服器連接到 RcloneView — 與 Google Drive、S3 及 70 多種雲端服務同步"
authors:
  - tayson
description: "WebDAV 受到 NAS 裝置、自架應用程式以及許多雲端服務的支援。了解如何將任何 WebDAV 伺服器連接到 RcloneView，並與您的其他雲端帳戶同步。"
keywords:
  - webdav sync tool
  - webdav file manager
  - webdav to google drive
  - webdav cloud sync
  - webdav backup tool
  - connect webdav rclone
  - webdav gui client
  - webdav transfer files
  - webdav nas sync
  - webdav multi cloud
tags:
  - webdav
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將任何 WebDAV 伺服器連接到 RcloneView — 與 Google Drive、S3 及 70 多種雲端服務同步

> WebDAV 無所不在 — Synology、QNAP、Nextcloud、ownCloud、Box、pCloud 以及數十種其他服務都支援它。RcloneView 能將任何 WebDAV 端點轉變為一級雲端遠端，讓您瀏覽、同步及備份。

WebDAV（Web 分散式編寫與版本控制）是支援最廣泛的檔案存取協定之一。NAS 裝置公開它、自架雲端應用程式使用它，許多商業服務也提供它作為存取方式。RcloneView 可連接到任何 WebDAV 端點，將其與 Google Drive、S3、OneDrive 以及所有其他受支援的供應商並列在雙面板檔案總管中。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 支援 WebDAV 的服務

WebDAV 比大多數人所了解的更為常見：

| 服務／裝置 | WebDAV 網址格式 |
|---------------|-------------------|
| Nextcloud | `https://your-server/remote.php/dav/files/username/` |
| ownCloud | `https://your-server/remote.php/webdav/` |
| Synology NAS | `https://your-nas:5006/` |
| QNAP NAS | `https://your-nas:8081/` |
| pCloud | `https://webdav.pcloud.com/` |
| Box | `https://dav.box.com/dav/` |
| 4shared | `https://webdav.4shared.com/` |

## 新增 WebDAV 遠端

<img src="/support/images/en/blog/new-remote.png" alt="Add WebDAV remote" class="img-large img-center" />

在 RcloneView 的遠端管理員中，使用您的伺服器網址、使用者名稱與密碼建立一個新的 WebDAV 遠端。連接完成後，即可立即瀏覽您的檔案。

## 主要工作流程

### 透過 WebDAV 將 NAS 同步到雲端

許多 NAS 裝置公開 WebDAV 以供遠端存取。可利用它將 NAS 內容同步到 Google Drive 或 S3：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync WebDAV NAS to cloud" class="img-large img-center" />

### 備份自架雲端

正在使用 Nextcloud 或 ownCloud？將您自架的檔案備份到商業雲端以進行災難復原：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Back up Nextcloud via WebDAV" class="img-large img-center" />

### 排程自動同步

在您的 WebDAV 伺服器與雲端儲存之間設定夜間同步：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule WebDAV sync" class="img-large img-center" />

### 驗證傳輸結果

確認同步的檔案與原始檔案相符：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify WebDAV sync" class="img-large img-center" />

## 效能建議

- 透過網際網路連線時，**使用 HTTPS** 以進行加密
- 若您的伺服器支援，**啟用分塊上傳**以處理大型檔案
- 針對速度較慢的連線，**設定適當的逾時時間**
- 對於共用伺服器，**將並行傳輸數量限制在 2-4 個**

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增您的 WebDAV 伺服器**作為遠端。
3. **與您的其他雲端帳戶並列瀏覽**。
4. **同步與排程**以實現自動化工作流程。

只要支援 WebDAV，RcloneView 就能管理它。

---

**相關指南：**

- [將 Nextcloud 與 Google Drive 同步](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [透過 WebDAV 備份 Nextcloud](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [將 SFTP/SMB 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
