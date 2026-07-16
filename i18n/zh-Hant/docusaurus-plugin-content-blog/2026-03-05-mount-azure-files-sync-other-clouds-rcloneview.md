---
slug: mount-azure-files-sync-other-clouds-rcloneview
title: "使用 RcloneView 將 Azure Files 掛載為本機磁碟並與其他雲端同步"
authors:
  - tayson
description: "在桌面上將 Azure Files 共用資料夾以本機磁碟方式存取，然後透過 RcloneView 的視覺化介面同步或備份到 AWS S3、Google Drive 或其他雲端。"
keywords:
  - azure files mount local
  - azure files sync
  - azure files to s3
  - azure files gui
  - azure files local drive
  - mount azure file share
  - azure files backup
  - azure files multi-cloud
  - azure smb mount
  - azure files rclone
tags:
  - azure-files
  - mount
  - sync
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Azure Files 掛載為本機磁碟並與其他雲端同步

> Azure Files 提供完全託管的雲端 SMB 檔案共用服務。但要從桌面存取這些共用資料夾，或與非 Azure 儲存空間同步，仍需要一些變通方法。RcloneView 讓這兩件事都變得簡單。

Azure Files 是微軟的託管檔案共用服務——非常適合直接搬遷（lift-and-shift）遷移、共用應用程式儲存空間，以及取代本地檔案伺服器。但當你需要在沒有 VPN 的情況下從桌面存取這些共用資料夾，或是要與 AWS S3 或 Google Drive 同步時，Azure 的原生工具就顯得力不從心。RcloneView 原生連接 Azure Files，讓你能將共用資料夾掛載為本機磁碟，並與 70 多個雲端服務供應商中的任何一個同步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure Files 與 Azure Blob 有什麼不同？

Azure 提供兩種主要的儲存服務，用途各不相同：

- **Azure Blob Storage** — 用於非結構化資料（圖片、影片、備份）的物件儲存服務，透過 REST API 存取。已在[先前的指南](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)中介紹過。
- **Azure Files** — 託管的 SMB/NFS 檔案共用服務，運作方式類似傳統的網路磁碟。支援目錄結構、檔案鎖定與 POSIX 權限。

如果你的資料存放在 Azure Files（SMB 共用資料夾）中，這篇指南正適合你。

## 連接 Azure Files

1. 開啟 RcloneView，點選 **Add Remote**。
2. 從供應商清單中選擇 **Azure Files**（或依你的存取方式選擇 **SMB**）。
3. 輸入你的連線詳細資訊：
   - **Storage Account Name**：你的 Azure 儲存帳戶。
   - **Share Name**：特定的檔案共用資料夾。
   - **Account Key or SAS Token**：來自 Azure 入口網站的驗證憑證。
4. 儲存——你的 Azure 檔案共用資料夾現在即可瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="Add Azure Files as remote in RcloneView" class="img-large img-center" />

## 掛載為本機磁碟

像存取一般資料夾一樣存取你的 Azure Files 共用資料夾：

1. 在 Explorer 中瀏覽到你的 Azure Files 遠端。
2. 選擇要掛載的共用資料夾或子資料夾。
3. 右鍵點選 → **Mount**（或使用 Mount Manager 以取得進階選項）。
4. 選擇本機掛載點。
5. 你的 Azure 檔案共用資料夾即會以磁碟形式出現在桌面上。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Azure Files as local drive" class="img-large img-center" />

### 掛載 Azure Files 的使用情境

- **直接編輯文件** — 在已掛載的磁碟上開啟 Word、Excel 和 PowerPoint 檔案。
- **開發工作流程** — 讓你的 IDE 指向 Azure Files 以共用程式碼庫。
- **媒體存取** — 瀏覽並預覽圖片、影片和音訊，無需下載。
- **應用程式設定** — 讓應用程式直接從 Azure Files 讀取設定，無需自訂程式碼。

## 將 Azure Files 與其他雲端同步

### Azure Files → AWS S3

多雲備援——在 S3 中保留一份 Azure Files 資料的副本：

1. 建立同步工作：Azure Files → S3 儲存貯體。
2. 排程為每日或每週執行。
3. 使用[資料夾比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)進行驗證。

### Azure Files → Google Drive

將 Azure Files 的內容分享給 Google Workspace 使用者：

1. 建立複製工作：Azure Files → Google Drive 資料夾。
2. 使用篩選器只同步相關資料夾。
3. 排程定期更新。

### Azure Files → 本機 NAS

保留本機快取副本以加快存取速度：

1. 建立同步工作：Azure Files → NAS 共用資料夾。
2. 提供快速的區域網路存取，同時 Azure Files 仍是資料的權威來源。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync Azure Files with other clouds" class="img-large img-center" />

## 瀏覽與管理檔案

RcloneView 的雙窗格 Explorer 讓你擁有真正的檔案管理員來管理 Azure Files：

- 瀏覽目錄階層。
- 在 Azure Files 與任何其他遠端之間拖放檔案。
- 建立、重新命名、刪除檔案與資料夾。
- 檢視大小與修改日期。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files with Azure Files" class="img-large img-center" />

## 自動化與監控

### 排程備份

自動化將 Azure Files 備份到另一個雲端：

1. 建立你的複製或同步工作。
2. 使用[工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)進行排程。
3. 當工作完成或失敗時，透過 [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 取得通知。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Azure Files sync" class="img-large img-center" />

### 傳輸監控

即時追蹤大型 Azure Files 傳輸的進度：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Azure Files transfer" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用你的儲存帳戶憑證**新增 Azure Files** 作為遠端。
3. 將共用資料夾**掛載**為本機磁碟，或在 Explorer 中瀏覽。
4. **同步**到 S3、Google Drive 或 NAS 以達成多雲備援。
5. **排程**以實現自動化、免人工介入的備份。

Azure Files 非常適合託管檔案共用。RcloneView 則讓其他一切變得更好——本機存取、多雲同步以及自動化備份。

---

**相關指南：**

- [將 Azure Blob Storage 掛載為本機磁碟](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [將雲端儲存空間掛載為本機磁碟](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [瀏覽與管理遠端](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
