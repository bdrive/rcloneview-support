---
slug: sync-dropbox-to-hetzner-storage-box-rcloneview
title: "將 Dropbox 同步至 Hetzner Storage Box — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "使用 RcloneView 將 Dropbox 檔案同步並備份至 Hetzner Storage Box。從 Dropbox 遷移或維護備份副本至 Hetzner 的逐步指南。"
keywords:
  - sync Dropbox to Hetzner Storage Box
  - Dropbox Hetzner backup
  - migrate Dropbox to Hetzner
  - Hetzner Storage Box cloud backup
  - rclone Dropbox Hetzner
  - Dropbox to SFTP backup
  - European cloud backup Dropbox
  - RcloneView Dropbox Hetzner
tags:
  - RcloneView
  - dropbox
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Dropbox 同步至 Hetzner Storage Box — 使用 RcloneView 進行雲端備份

> RcloneView 透過 SFTP 將 Dropbox 同步至 Hetzner Storage Box，為歐洲使用者提供符合 GDPR 規範的 Dropbox 檔案次要備份目的地。

Hetzner Storage Box 是一項具成本效益、託管於德國的儲存服務，支援 SFTP、FTP、Samba 及 WebDAV 存取。許多使用 Dropbox 進行協作的歐洲企業與開發者，會將 Hetzner Storage Box 新增為次要備份目標：對大容量資料而言價格明顯更低廉，且能將資料保留在歐盟司法管轄範圍內。RcloneView 透過 rclone 的 Dropbox 與 SFTP 後端連接兩者，讓排程式的 Dropbox 到 Hetzner 同步成為簡單的 GUI 操作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定 Dropbox 與 Hetzner Storage Box

先新增 Dropbox：**Remote 分頁 → New Remote → Dropbox**，透過 OAuth 瀏覽器登入進行驗證。您的 Dropbox 資料夾會立即顯示於 Explorer 中。

將 Hetzner Storage Box 新增為 SFTP 遠端：**New Remote → SFTP**。設定如下：
- **Host**：`yourboxid.your-storagebox.de`
- **User**：您的 Storage Box 使用者名稱（顯示於 Hetzner Robot 面板中）
- **Authentication**：SSH 金鑰（建議）或密碼
- **Port**：23（Hetzner Storage Box 使用連接埠 23，而非標準的 22）

儲存前請先測試連線。兩個遠端都新增完成後，開啟分割面板 Explorer，即可在左側瀏覽 Dropbox、右側瀏覽 Hetzner。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Dropbox and Hetzner Storage Box SFTP remote in RcloneView" class="img-large img-center" />

## 建立排程同步工作

若要進行持續性的備份情境，請在 Job Manager 中建立同步工作：來源為您的 Dropbox 資料夾（例如 `dropbox:/Team/Projects/`），目的地為您的 Hetzner 路徑（例如 `hetzner:/backups/dropbox/`）。在第 2 步中，將並行傳輸數設為 4–6 — Hetzner Storage Box 在此並行程度下能妥善處理 SFTP 連線。

將工作排程為每晚 2:00 執行（PLUS 授權）。增量同步僅複製新增或修改過的檔案，讓初次完整同步之後的傳輸時間維持在較短範圍。Job History 會記錄每次執行的狀態、傳輸大小與耗時，供您留存紀錄。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly Dropbox to Hetzner sync in RcloneView" class="img-large img-center" />

## 從 Dropbox 一次性遷移至 Hetzner

若您正要將主要儲存位置從 Dropbox 遷移至 Hetzner Storage Box，請改用複製工作而非同步工作。複製會將所有檔案從 Dropbox 傳輸至 Hetzner，且不會刪除來源端的任何內容 — 讓您的 Dropbox 內容在轉移期間得以保留。請先執行 Dry Run，確認檔案數量與總傳輸大小後再正式執行。

對於容量達數百 GB 的大型 Dropbox 帳戶，可在第 2 步中啟用校驗和驗證，以確認每個檔案傳輸後的完整性。Folder Compare 功能可讓您在工作完成後，並排比較 Dropbox 與 Hetzner 的資料夾結構，藉此驗證遷移是否正確完成。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Dropbox and Hetzner Storage Box folders after migration in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 New Remote 精靈中，透過 OAuth 新增 Dropbox，並透過 SFTP（連接埠 23）新增 Hetzner Storage Box。
3. 在 Job Manager 中，建立從您的 Dropbox 路徑到 Hetzner 路徑的同步工作。
4. 排程每晚同步，並在 Job History 中檢視傳輸稽核記錄。

透過 RcloneView 將 Dropbox 同步至 Hetzner Storage Box，能為歐洲團隊提供具成本效益、符合 GDPR 規範的次要備份，並可完全自動執行、無需任何人工介入。

---

**相關指南：**

- [使用 RcloneView 掛載 Hetzner Storage Box 並同步至雲端](https://rcloneview.com/support/blog/mount-hetzner-storage-box-sync-cloud-rcloneview)
- [使用 RcloneView 將 Dropbox 備份至 Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [使用 RcloneView 將 Dropbox 備份至 AWS S3](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
