---
slug: manage-hetzner-storage-box-sync-rcloneview
title: "管理 Hetzner Storage Box——使用 RcloneView 進行同步與備份"
authors:
  - tayson
description: "了解如何安全地將 Hetzner Storage Box 連接到 RcloneView,並透過 SFTP 與 WebDAV 協定跨雲端同步檔案,實現歐洲雲端備份。"
keywords:
  - Hetzner Storage Box
  - SFTP 備份
  - WebDAV 雲端同步
  - 歐洲雲端儲存
  - RcloneView
  - 安全檔案同步
  - 歐洲雲端備份
  - Hetzner SFTP
  - 混合雲端備份
  - 符合 GDPR 的雲端儲存
tags:
  - RcloneView
  - hetzner
  - european-cloud
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Hetzner Storage Box——使用 RcloneView 進行同步與備份

> 歐洲雲端儲存結合多雲端彈性。Hetzner Storage Box 提供具競爭力的價格與符合 GDPR 的合規性——現在可在 RcloneView 中與您其他的雲端帳戶一同輕鬆管理。

Hetzner Storage Box 是尋求可靠、實惠雲端備份的歐洲企業信賴的選擇。無論您使用 SFTP 還是 WebDAV,RcloneView 都能將您的 Hetzner 帳戶橋接至整個雲端生態系統,讓您無需離開儀表板即可進行同步、備份與封存。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 透過 SFTP 連接 Hetzner Storage Box

在 RcloneView 中新增 Hetzner Storage Box 遠端非常簡單。SFTP 讓您能以業界標準加密方式直接存取伺服器。

1. 開啟 RcloneView 並點擊 **Add Remote**
2. 從提供者清單中選擇 **SFTP**
3. 輸入您的 Hetzner 憑證:
   - **Host**: `u[account-id].your-storagebox.de`
   - **Username**: 您的 Hetzner 登入帳號
   - **Password**: 您的 Hetzner 密碼或 SSH 金鑰
4. 將連接埠設為 **22**(標準 SFTP)
5. 點擊 **Test Connection** 進行驗證

![New Remote Setup](/images/en/blog/new-remote.png)

## 將 Hetzner 同步至 AWS S3 或其他雲端

連接好 Hetzner Storage Box 後,您可以立即建立雲對雲同步工作。

**使用情境:**
- **備份至 S3**:將 Hetzner 中經常存取的檔案封存至 Amazon S3 Glacier 進行長期保存
- **多雲端備援**:在 Hetzner 與 Backblaze B2 之間鏡像資料
- **混合工作流程**:將 Hetzner Storage Box 與 Google Drive 同步以供團隊存取

![Cloud to Cloud Transfer](/images/en/blog/cloud-to-cloud-transfer-default.png)

## 即時監控與排程

RcloneView 的工作排程器讓您能依自己的時程自動執行 Hetzner 備份。即時監控傳輸速度、錯誤率與檔案數量。

![Job History and Monitoring](/images/en/howto/rcloneview-basic/job-history.png)

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 若您尚未擁有帳戶,請至 [hetzner.com](https://www.hetzner.com/storage/storage-box) 建立 Hetzner Storage Box 帳戶。
3. 在 RcloneView 中使用 SFTP 或 WebDAV 憑證新增您的 Hetzner 遠端。
4. 建立您第一個同步或備份工作,連接至另一個雲端提供者。
5. 依需求排程定期工作或執行一次性傳輸。

以自信管理您的歐洲雲端儲存——RcloneView 為您處理複雜性,讓您專注於資料本身。

---

**相關指南:**

- [管理 SFTP 伺服器——使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [連接 WebDAV 伺服器——使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [管理 OVH Cloud Object Storage——使用 RcloneView 進行同步](https://rcloneview.com/support/blog/manage-ovh-cloud-object-storage-sync-rcloneview)

<CloudSupportGrid />
