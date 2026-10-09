---
slug: cloud-storage-physical-therapy-clinics-rcloneview
title: "物理治療診所的雲端儲存 — 使用 RcloneView 進行有條理的加密備份"
authors:
  - robin
description: "物理治療診所如何使用 RcloneView 將運動影片、初診表單與影像檔案備份到加密的雲端儲存。"
keywords:
  - 物理治療診所雲端儲存
  - 物理治療檔案備份
  - 診所雲端備份
  - 加密雲端備份
  - 運動影片儲存
  - 排程雲端同步
  - 多雲備份
  - RcloneView
  - rclone GUI
  - Crypt 遠端
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 物理治療診所的雲端儲存 — 使用 RcloneView 進行有條理的加密備份

> 不需撰寫任何指令，就能將病患文件、運動影片與匯出的影像檔案備份到多個雲端。

物理治療診所產生的檔案，往往比多數經營者預期的還多：掃描的初診表單、轉介信、居家運動影片、步態分析錄影，以及匯出的影像檔案。這些檔案通常只在櫃檯電腦或小型 NAS 上存放一份，也沒有經過測試的還原流程。RcloneView 提供診所人員桌面 GUI，用來將資料複製到雲端儲存、加密，並確認資料已順利送達。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接診所已在使用的儲存空間

多數診所已經有 Microsoft 365 或 Google Workspace 帳號，許多也有本機 NAS。在 RcloneView 中開啟 Remote 分頁，然後點擊 **New Remote**。OneDrive 與 Google Drive 透過瀏覽器登入。Wasabi、Cloudflare R2 或 Backblaze B2 等 S3 相容儲存則使用存取金鑰。SFTP、WebDAV 與 SMB 可用於連接院內伺服器，Synology NAS 可以自動偵測。

RcloneView 可在單一視窗中管理 90 種以上的雲端服務，支援 Windows、macOS 與 Linux，因此櫃檯的 Windows 電腦與負責人的 MacBook 可以使用相同的工作流程。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中為診所新增雲端儲存遠端" class="img-large img-center" />

## 使用 Crypt 遠端加密與病患相關的檔案

初診表單與治療記錄不應以明文形式存放在第三方儲存貯體中。RcloneView 可以建立 **Crypt** 虛擬遠端，在上傳前將檔案名稱、資料夾名稱與內容加密。將 Crypt 遠端指向備份供應商上的某個資料夾，然後把檔案複製到 Crypt 遠端，而不是原始的儲存貯體。

請將 Crypt 密碼存放在與資料分開的安全位置。僅靠 RcloneView 並不能讓診所符合法規；在移轉病患資訊之前，請確認所在地區的隱私法規以及儲存供應商的合約。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中將診所檔案複製到加密的雲端目的地" class="img-large img-center" />

## 先預覽，再備份

假設某診所的共用電腦上有 300 GB 的運動示範影片與掃描紀錄。建立一個從該資料夾到 Crypt 遠端的同步作業，然後執行 **Dry Run** 列出將被複製或刪除的內容。首次執行使用複製（copy）語意，可以讓來源保持不變。S3、Azure 與 Backblaze B2 在 FREE 授權下即可完整讀寫，因此備份目的地不需要額外的軟體費用。

在第 1 步新增第二個目的地後，同一個來源會透過 1:N 同步鏡像到兩個雲端，此功能同樣適用於 FREE。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行診所備份作業" class="img-large img-center" />

## 排程夜間作業並檢視歷程記錄

使用 PLUS 授權時，同步精靈的第 4 步支援 crontab 風格的排程，例如在最後一位病患看診結束後的平日 22:00 執行。應用程式必須保持執行，排程作業才會觸發，因此請讓電腦保持開機，並將 RcloneView 最小化到系統匣。

Job History 會記錄每次執行的狀態、耗時、大小與檔案數量，當你需要確認上週二的備份是否完成時，可作為稽核依據。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程夜間診所備份" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote 分頁中新增主要儲存空間與備份目的地。
3. 針對敏感資料夾，在備份目的地上建立 Crypt 遠端。
4. 執行 Dry Run，啟動作業，並透過 Job History 確認結果。

一份經過測試的加密副本，能讓診所在磁碟故障或勒索軟體事件之後仍有復原的途徑。

---

**相關指南：**

- [醫療產業雲端儲存 — 使用 RcloneView 進行安全備份](https://rcloneview.com/support/blog/cloud-storage-healthcare-rcloneview)
- [醫療產業 HIPAA 合規的雲端儲存 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)
- [使用 Crypt 遠端加密雲端備份 — RcloneView 指南](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
