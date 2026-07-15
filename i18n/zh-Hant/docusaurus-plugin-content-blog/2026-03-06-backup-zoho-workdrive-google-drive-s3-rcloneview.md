---
slug: backup-zoho-workdrive-google-drive-s3-rcloneview
title: "使用 RcloneView 自動將 Zoho WorkDrive 備份到 Google Drive 或 S3"
authors:
  - tayson
description: "透過 RcloneView 的 WebDAV 連線功能，自動且定期地將 Zoho WorkDrive 資料備份到 Google Drive、AWS S3 或外接儲存裝置，保護您的資料安全。"
keywords:
  - zoho workdrive backup
  - zoho to google drive
  - zoho workdrive sync
  - zoho workdrive export
  - backup zoho files
  - zoho workdrive to s3
  - zoho cloud backup tool
  - zoho workdrive migration
  - zoho workdrive rclone
  - zoho file backup automation
tags:
  - RcloneView
  - zoho
  - cloud-storage
  - backup
  - sync
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 自動將 Zoho WorkDrive 備份到 Google Drive 或 S3

> Zoho WorkDrive 是一款出色的協作工具，但您的備份計畫是什麼？如果 Zoho 訂閱過期或資料不慎遺失，將資料獨立備份到 Google Drive 或 S3 可確保不會有任何損失。

Zoho WorkDrive 深受使用 Zoho 生態系統（CRM、郵件、專案管理及共享檔案儲存整合於同一平台）的企業歡迎。但 Zoho 並未提供將 WorkDrive 資料備份到其他雲端的原生方式。如果您需要一份獨立副本以進行災難復原、合規或遷移作業，RcloneView 透過 WebDAV 連接 WorkDrive，填補了這項空缺。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要備份 Zoho WorkDrive？

- **沒有原生的跨雲端備份功能** — Zoho 並未提供內建的匯出至 S3 或匯出至 Google Drive 功能。
- **意外刪除風險** — 團隊成員可能會刪除共享檔案。若沒有外部備份，可能無法復原。
- **訂閱依賴性** — 若您的 Zoho 方案到期或被降級，檔案存取權限可能會受到限制。
- **合規要求** — 部分法規要求資料須儲存在多個獨立位置。
- **遷移彈性** — 若您日後決定從 Zoho 轉換至 Google Workspace 或 Microsoft 365，擁有備份可讓過渡過程更加順暢。

## 透過 WebDAV 連接 Zoho WorkDrive

Zoho WorkDrive 支援 WebDAV 存取，RcloneView 可原生連接：

1. 開啟 RcloneView 並點選 **Add Remote**。
2. 從供應商清單中選擇 **WebDAV**。
3. 輸入您的 Zoho WorkDrive WebDAV 詳細資訊：
   - **URL**：您的 Zoho WorkDrive WebDAV 端點。
   - **Username**：您的 Zoho 電子郵件。
   - **Password**：從 Zoho 安全性設定取得的應用程式專用密碼。
4. 儲存 — 您的 WorkDrive 檔案與資料夾現在即可瀏覽。

如需 WebDAV 設定詳情，請參閱 [WebDAV 連線指南](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)。

<img src="/support/images/en/blog/new-remote.png" alt="Add Zoho WorkDrive via WebDAV" class="img-large img-center" />

## 瀏覽您的 WorkDrive 檔案

連接後，即可在雙窗格總管中瀏覽整個 WorkDrive：

- 檢視團隊資料夾、個人檔案與共享空間。
- 檢查檔案大小，估算所需的備份儲存空間。
- 找出需要優先備份的重要資料夾。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Zoho WorkDrive files" class="img-large img-center" />

## 備份到 Google Drive

1. **新增 Google Drive**作為第二個遠端（透過[ OAuth 登入](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)）。
2. **建立複製工作**：Zoho WorkDrive → Google Drive 資料夾。
3. **執行初始備份** — 所有檔案將傳輸並保留資料夾結構。
4. 使用[工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)**設定每日排程**，以進行自動增量更新。

## 備份到 AWS S3

1. **新增 S3** 作為遠端（[S3 設定指南](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)）。
2. **建立複製工作**：Zoho WorkDrive → S3 儲存貯體（bucket）。
3. **排程**每晚執行。
4. 使用 S3 生命週期政策，將舊備份移至 Glacier 以節省成本。

## 驗證您的備份

每次執行備份後，使用[資料夾比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)確認備份完整性：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Zoho WorkDrive backup" class="img-large img-center" />

## 自動化與監控

1. **排程備份**於離峰時段每日執行。
2. 透過 [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 或 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)**取得通知**。
3. **檢視工作歷程記錄**以追蹤所有備份執行狀況。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Zoho WorkDrive backups" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho backup job history" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html)**下載 RcloneView**。
2. 透過 WebDAV**新增 Zoho WorkDrive**。
3. **新增您的備份目的地**（Google Drive、S3、外接硬碟）。
4. **建立複製工作**並排程執行。
5. 使用資料夾比較功能**進行驗證**。

別讓您的 Zoho WorkDrive 資料毫無備份計畫。RcloneView 為您提供自動化且經過驗證的備份，可備份至任何雲端 — 帶給您 Zoho 未能原生提供的那份安心。

---

**相關指南：**

- [新增 WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [透過瀏覽器登入（OAuth）新增遠端](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [新增 AWS S3 與相容 S3 服務](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
