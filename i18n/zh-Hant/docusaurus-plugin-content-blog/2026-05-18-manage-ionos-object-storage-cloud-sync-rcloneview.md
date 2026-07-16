---
slug: manage-ionos-object-storage-cloud-sync-rcloneview
title: "管理 IONOS Object Storage — 使用 RcloneView 同步與備份檔案"
authors:
  - jay
description: "了解如何將 IONOS Object Storage 連接到 RcloneView，並透過完全視覺化的 S3 相容介面同步、備份或傳輸檔案，無需使用命令列。"
keywords:
  - IONOS Object Storage
  - IONOS 雲端同步
  - IONOS 備份檔案
  - RcloneView IONOS
  - S3 相容雲端儲存 歐洲
  - 歐洲雲端儲存 GDPR
  - IONOS rclone GUI
  - 同步 IONOS 到 Google Drive
  - 雲端備份 IONOS
  - 管理 IONOS 檔案 RcloneView
tags:
  - s3-compatible
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 IONOS Object Storage — 使用 RcloneView 同步與備份檔案

> 將 IONOS Object Storage 連接到 RcloneView，以視覺化方式管理您的歐洲雲端檔案 — 同步、備份與傳輸，完全無需碰觸命令列。

IONOS Object Storage 是由 IONOS SE 提供的 S3 相容雲端儲存服務，IONOS SE 是歐洲最大的雲端基礎架構供應商之一。對於執行 GDPR 敏感工作流程或需要歐洲資料落地的團隊而言，越來越多人選擇 IONOS 作為可靠且具成本效益的物件儲存服務。透過 RcloneView，您可以從簡潔的桌面 GUI 連接、瀏覽、同步並自動化備份至 IONOS — 無需使用任何 rclone 指令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 IONOS Object Storage 連接到 RcloneView

IONOS Object Storage 使用 S3 相容 API，代表它接受與 Amazon S3 相同的 Access Key、Secret Key 及 endpoint 設定。任何支援 S3 的工具（包括 rclone）都能讀寫 IONOS bucket，無需任何特定廠商的轉接程式。

若要新增 IONOS 作為遠端，請開啟 **Remote 分頁**並點選 **New Remote**。選擇 **Amazon S3** 作為供應商類型，然後輸入您在 IONOS 控制台取得的 IONOS Access Key ID、Secret Access Key 及區域 endpoint URL。儲存後，您的 bucket 會立即顯示在雙面板檔案總管中。您可以瀏覽資料夾、在縮圖檢視中預覽圖片，並在任何檔案上按右鍵以複製、移動、重新命名或產生公開連結 — 全部都在熟悉的桌面介面中完成。

<img src="/support/images/en/blog/new-remote.png" alt="Adding IONOS Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

## 將 IONOS 與其他雲端供應商同步

RcloneView 的雲對雲傳輸引擎讓您可以在 IONOS 與任何其他遠端之間移動資料，無需先下載至本機磁碟。負責將受 GDPR 規範文件封存至 IONOS 的法務團隊，也可以同時將該封存同步至 Backblaze B2 上的加密 Crypt 遠端，作為次要異地備份 — 只需設定一次，並在同一個 Job Manager 視窗中執行。

RcloneView 也支援 1:N 同步：一個 IONOS 來源可以同時分發至多個目的地。擁有 500GB 活動素材的媒體代理商，可以在單一排程工作中將其 IONOS bucket 鏡像至 Wasabi 與本機 NAS。同步精靈的校驗碼選項可確保 IONOS 與任何目的地之間的複本完全一致，能捕捉到僅比對檔案大小所無法發現的損毀情況。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from IONOS Object Storage to another provider in RcloneView" class="img-large img-center" />

## 自動化排程備份至 IONOS

擁有 **RcloneView PLUS** 授權後，您可以為任何同步工作附加類似 crontab 的排程。從本機資料夾到 IONOS bucket 的夜間備份，可轉變為完全自動化的常規作業 — 只需設定一次，RcloneView 便會在指定時間於背景執行，即使主視窗已關閉也不受影響。

排程精靈接受分鐘、小時、星期幾及月份欄位，支援清單（1,3,5）、範圍（9-17）及間隔步進（*/2）。儲存前可使用內建的 **Simulate schedule** 按鈕預覽下一次執行時間。每次執行後，**Job History** 分頁會記錄開始時間、持續時間、檔案數量、傳輸大小及狀態 — 讓您無需任何額外監控工具即可獲得清晰的稽核記錄。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated IONOS cloud backup jobs in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 **Remote 分頁 > New Remote**，選擇 **Amazon S3** 作為供應商類型，並輸入您在 IONOS 控制台取得的 IONOS Access Key ID、Secret Access Key 及 endpoint。
3. 在檔案總管中瀏覽您的 IONOS bucket 並確認存取權限。
4. 在 **Job Manager** 中建立同步或備份工作 — 也可以選擇啟用排程功能（PLUS）以進行自動化夜間執行。

IONOS Object Storage 搭配 RcloneView，為歐洲團隊提供符合 GDPR 規範、S3 相容的儲存後端，同時具備原生桌面檔案管理員的易用性。

---

**相關指南：**

- [使用 RcloneView 管理 Wasabi Object Storage](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 IDrive E2 雲端儲存](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 集中管理 Amazon S3、Wasabi 與 Cloudflare R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
