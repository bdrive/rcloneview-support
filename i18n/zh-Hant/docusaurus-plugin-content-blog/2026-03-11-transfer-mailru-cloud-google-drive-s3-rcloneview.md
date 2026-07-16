---
slug: transfer-mailru-cloud-google-drive-s3-rcloneview
title: "使用 RcloneView 安全地將 Mail.ru Cloud 檔案傳輸至 Google Drive 或 S3"
authors:
  - tayson
description: "使用 RcloneView，安全且附有傳輸驗證地，將您的 Mail.ru Cloud 資料遷移或備份至 Google Drive、AWS S3 或其他國際雲端供應商。"
keywords:
  - mail.ru cloud backup
  - mail.ru to google drive
  - mail.ru cloud migration
  - mail.ru cloud export
  - mail.ru rclone
  - mail.ru cloud sync
  - mail.ru file transfer
  - mailru cloud alternative
  - mail.ru cloud to s3
  - mail.ru data export
tags:
  - mailru
  - migration
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 安全地將 Mail.ru Cloud 檔案傳輸至 Google Drive 或 S3

> 需要將您的 Mail.ru Cloud 資料移動到國際雲端供應商嗎？RcloneView 可將您的檔案傳輸至 Google Drive、S3 或任何其他雲端——並附有驗證機制，確保不會遺失任何資料。

Mail.ru Cloud (Облако Mail.ru) 是俄羅斯與獨立國家國協 (CIS) 國家中最受歡迎的雲端儲存服務之一，提供優渥的免費儲存空間。但使用者愈來愈希望將資料分散到國際供應商——出於備援、可存取性或合規性等原因。RcloneView 讓這一切變得簡單，可直接連接 Mail.ru Cloud，並支援傳輸至 70 多個雲端供應商中的任何一個。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要從 Mail.ru Cloud 傳輸資料？

- **地理位置多樣化** — 將重要資料的副本存放在不同地區，以提高備援性。
- **國際可存取性** — Google Drive 和 OneDrive 在全球的可存取性比 Mail.ru Cloud 更高。
- **合規性** — 部分法規要求資料必須儲存在特定司法管轄區內。
- **備份** — 任何單一供應商策略都存在風險，在其他地方保留第二份副本至關重要。
- **遷移** — 若要為企業遷移至 Google Workspace 或 Microsoft 365，需要匯出 Mail.ru 資料。

## 連接 Mail.ru Cloud

1. 開啟 RcloneView，並點擊 **Add Remote**。
2. 從供應商清單中選擇 **Mail.ru Cloud**。
3. 輸入您的 Mail.ru 憑證（電子郵件與應用程式專用密碼）。
4. 儲存——您的 Mail.ru Cloud 檔案現在即可瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="Add Mail.ru Cloud remote" class="img-large img-center" />

## 瀏覽您的檔案

在目的地雲端旁同時檢視您整個 Mail.ru Cloud 資料庫：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Mail.ru Cloud alongside Google Drive" class="img-large img-center" />

## 傳輸情境

### Mail.ru → Google Drive

最常見的遷移路徑：

1. 透過 [OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login) 新增 Google Drive。
2. 建立一個 Copy 工作：Mail.ru → Google Drive。
3. 執行並監控。
4. 使用 [資料夾比對](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) 進行驗證。

### Mail.ru → AWS S3

適用於長期封存：

1. 透過 [S3 設定](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3) 新增 S3。
2. 建立一個 Copy 工作：Mail.ru → S3 儲存貯體 (bucket)。
3. 使用 S3 生命週期政策，以取得具成本效益的儲存層級。

### Mail.ru → 加密雲端備份

若需要更高的安全性，可同步至 [crypt 遠端](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)，在上傳至任何目的地之前先將檔案加密。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Mail.ru transfer job" class="img-large img-center" />

## 驗證您的傳輸

複製完成後，確認資料的完整性：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Mail.ru Cloud transfer" class="img-large img-center" />

## 自動化持續同步

如果您希望將 Mail.ru Cloud 作為主要儲存位置，並將變更同步至備份：

1. 建立一個 Sync 工作，並排程為每日執行。
2. 透過 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)（在 CIS 地區相當普及）接收通知。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Mail.ru sync" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Mail.ru Cloud** 作為遠端。
3. **新增您的目的地**（Google Drive、S3、OneDrive）。
4. **複製** 您的檔案，並使用資料夾比對 **驗證**。
5. 若同時保留兩者，請 **排程** 以進行持續同步。

分散您的雲端儲存是明智的資料管理方式。RcloneView 讓將 Mail.ru Cloud 傳輸至國際供應商變得簡單、可驗證且自動化。

---

**相關指南：**

- [透過瀏覽器登入方式新增遠端 (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [新增 AWS S3 及相容 S3 服務](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
