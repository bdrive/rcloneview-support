---
slug: email-smtp-job-notifications-rcloneview
title: "Email SMTP 工作通知——在 RcloneView 中隨時掌握同步狀態"
authors:
  - tayson
description: "在 RcloneView PLUS 中設定 Email SMTP 通知，接收同步工作完成提醒、設定多位收件人，並透過電子郵件監控無人值守的備份工作。"
keywords:
  - RcloneView email notifications
  - SMTP sync notification
  - cloud sync email alert
  - job notification SMTP
  - backup monitoring email
  - RcloneView PLUS notifications
  - sync completion alert
  - rclone email notification
tags:
  - RcloneView
  - feature
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Email SMTP 工作通知——在 RcloneView 中隨時掌握同步狀態

> RcloneView PLUS 讓您可以設定直接的 SMTP 電子郵件通知，於同步工作完成時發送提醒，讓您的團隊隨時掌握備份是否成功——或失敗——而無需手動檢查。

按排程執行雲端同步與備份工作只是自動化的一半，另一半則是能在不用開啟應用程式手動檢查工作紀錄的情況下，知道工作的執行結果。RcloneView PLUS 支援透過直接的 SMTP 設定發送電子郵件通知，在工作完成的當下就將同步狀態訊息直接發送到您的收件匣。這讓個人和團隊都能實際落實無人值守的備份監控。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定 SMTP

要設定電子郵件通知，請開啟 RcloneView 的通知設定（需要 PLUS 授權）。輸入您的 SMTP 伺服器資訊：

- **SMTP 主機**：您電子郵件服務商的外寄郵件伺服器（例如，Gmail 為 `smtp.gmail.com`，或您組織的 Exchange/SMTP 伺服器）。
- **連接埠**：通常 STARTTLS（建議）使用連接埠 **587**，SSL 則使用連接埠 465。在大多數消費者與雲端環境中應避免使用連接埠 25，因為它經常被封鎖。
- **驗證方式**：輸入您的電子郵件帳號與密碼，或應用程式專用密碼。若您的 Gmail 帳戶已啟用兩步驟驗證（2FA），請使用應用程式密碼。
- **寄件地址**：將顯示在通知郵件上的寄件人地址。

輸入完成後，點擊 **Test（測試）** 按鈕發送測試郵件，確認 SMTP 連線正常運作，之後再正式依賴其進行生產環境通知。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring SMTP email notification settings in RcloneView PLUS" class="img-large img-center" />

## 新增收件人與工作層級設定

完成全域 SMTP 設定後，您可以在工作層級新增通知收件人。開啟某個同步工作的設定，輸入一個或多個電子郵件地址，以便在該工作完成時發送通知。不同的工作可以通知不同的人員——例如，財務文件的備份工作可以通知財務團隊，而媒體同步工作則通知內容團隊。

RcloneView 也讓您可以為通知設定門檻——例如，僅在工作傳輸超過設定的兆位元組（MB）數量時才發送郵件。這對於經常執行、且經常在沒有任何變更的情況下完成的工作特別有用：您只會在真正發生重要變化時收到通知，減少通知疲勞。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting email notification recipients on a sync job in RcloneView" class="img-large img-center" />

## 電子郵件通知的使用情境

**無人值守的備份監控**是主要的使用情境。如果您排程了每晚將本機檔案備份到 Backblaze B2 的工作，並將電子郵件通知設定發送到您的個人信箱，那麼一旦工作因為網路中斷、憑證問題或磁碟已滿而失敗，您隔天早上就會收到失敗通知郵件，而不是幾週後在嘗試還原時才發現問題。

**團隊意識**同樣重要。當共用的雲端同步工作完成時——例如，每週將共用專案資料夾同步到 Amazon S3——通知整個團隊可以確認同步已是最新狀態，而不需要任何人登入 RcloneView 檢查。您可以設定不同的工作通知不同的收件人，讓合適的人員根據其負責範圍獲得通知。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and notification log in RcloneView PLUS" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**，並啟用 PLUS 授權。
2. 開啟 **Notification Settings（通知設定）**，輸入您的 SMTP 主機、連接埠 587 以及驗證憑證。
3. 點擊 **Test（測試）** 發送測試郵件並驗證連線。
4. 開啟每個同步工作的設定，新增要通知的電子郵件地址。
5. 您也可以選擇設定傳輸量門檻，讓通知僅在移動了大量資料時才觸發。

RcloneView PLUS 中的 Email SMTP 通知補上了自動化備份監控的最後一塊拼圖——讓您安心確信雲端同步工作正順利執行，或在出現問題時立即獲得提醒。

---

**相關指南：**

- [使用 RcloneView 於同步完成時發送通知提醒](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneView Telegram 遠端控制](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)

<CloudSupportGrid />
