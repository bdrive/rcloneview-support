---
slug: manage-cloudinary-cloud-sync-backup-rcloneview
title: "管理 Cloudinary 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - jay
description: "了解如何使用 RcloneView 管理、同步並將 Cloudinary 數位資產備份到 Amazon S3、Google Drive 或其他雲端儲存空間。"
keywords:
  - 使用 RcloneView 管理 Cloudinary
  - Cloudinary 備份到 S3
  - Cloudinary 同步 Google Drive
  - Cloudinary rclone
  - 備份 Cloudinary 資產
  - Cloudinary 雲端儲存管理
  - 同步 Cloudinary 檔案
  - Cloudinary 數位資產備份
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Cloudinary 儲存空間 — 使用 RcloneView 同步與備份檔案

> Cloudinary 保存著您的正式圖片與影片資產 — RcloneView 讓您無需撰寫任何腳本,即可將它們備份到 Amazon S3、Google Drive 或其他任何雲端。

Cloudinary 已成為開發人員與創意團隊管理大量圖片、影片與豐富媒體檔案庫的首選平台。但僅將所有內容儲存在 Cloudinary 中會形成單一故障點：意外的大量刪除、帳戶問題或 API 中斷都可能在幾分鐘內讓您整個媒體庫無法存取。RcloneView 建構於 rclone 的 Cloudinary 後端之上,提供視覺化介面讓您瀏覽、同步並將 Cloudinary 帳戶備份到任何其他支援的雲端儲存空間 — 在您自己掌控的地方保留一份經過驗證的副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Cloudinary 連接到 RcloneView

開啟 RcloneView 並前往「遠端」分頁,然後點選「新增遠端」。從供應商清單中選擇 Cloudinary,並輸入您的憑證以完成設定。連接完成後,您的 Cloudinary 儲存空間會以可瀏覽的遠端形式出現在檔案總管面板中 — 使用左側的資料夾樹狀結構瀏覽您的媒體庫,並使用右側的檔案清單檢視個別資產的名稱、大小與修改日期。

縮圖檢視對 Cloudinary 內容特別實用：切換到檔案清單中的縮圖模式,即可以視覺化網格形式檢視圖片,而非純文字檔名,讓您在觸發任何操作前輕鬆確認自己正在檢視正確的資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudinary as a new remote in RcloneView" class="img-large img-center" />

## 將 Cloudinary 資產備份到其他雲端

在其中一個檔案總管面板開啟 Cloudinary,並在另一個面板開啟目的地(例如 Amazon S3、Backblaze B2 或 Google Drive),然後透過「首頁」分頁 > 「同步」啟動同步作業。4 步驟精靈讓您精確設定要傳輸的內容:

- 選擇您的 Cloudinary 資料夾作為來源,並將備份雲端設為目的地
- 在步驟 3 中使用預先定義的檔案篩選器(圖片、影片)以鎖定特定媒體類型,並略過不需要的檔案
- 設定最大檔案存留時間,以執行僅擷取當日新更新資產的增量同步

務必先執行**試跑(Dry Run)** — 它會預覽哪些檔案將被傳輸或略過,而不會實際變更任何內容。對於大型 Cloudinary 資料庫而言,這能在造成漏備份之前,先揪出篩選器設定錯誤的問題。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop interface for transferring Cloudinary assets to S3 backup" class="img-large img-center" />

## 排程自動化 Cloudinary 備份

若要持續保護資產,RcloneView PLUS 在同步精靈的步驟 4 中新增了 crontab 風格的排程功能。凌晨 2 點的夜間同步可擷取當天新上傳的資產,同時將頻寬使用量控制在離峰時段之外。使用「模擬排程」預覽功能,在儲存前確認下一次執行時間 — 讓首次排程執行時不會有任何意外。

作業開始執行後,工作完成通知會告知您狀態、已傳輸的檔案數量與資料量。對於每天有數十個進行中的 Cloudinary 轉換與上傳的團隊而言,這種被動提醒代表您無需登入檢查,就能確認備份已正確執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a nightly scheduled backup of Cloudinary assets in RcloneView" class="img-large img-center" />

## 驗證備份完整性

使用「資料夾比對」功能(首頁分頁 > 比對)可隨時比較您的 Cloudinary 來源與備份目的地之間的差異。RcloneView 會並列顯示僅左側有、僅右側有、相同與不同的檔案 — 您可以一眼識別涵蓋範圍的缺口,並直接從比對檢視中複製缺少的檔案,而無需另外建立新的作業。對於高風險的媒體資產,在同步作業的進階設定中啟用校驗碼(checksum),可驗證檔案內容而不僅是檔案大小是否相符,確認每個檔案都完整無誤地送達。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between Cloudinary source and S3 backup destination" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過「遠端」分頁 > 「新增遠端」新增 Cloudinary 作為遠端,並完成設定。
3. 新增您的備份目的地(Amazon S3、Backblaze B2、Google Drive)作為第二個遠端。
4. 建立從 Cloudinary 到目的地的同步作業,先執行試跑,然後啟用 PLUS 排程以進行每日自動備份。

Cloudinary 保存著您最引人注目的正式資產 — 在第二個雲端保留一份同步副本,能將單一故障點轉變為您完全掌控、可靠且可稽核的備份。

---

**相關指南：**

- [使用 RcloneView 跨多個雲端管理數位資產](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [管理 Amazon S3 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Google 相簿備份到外接硬碟或 NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
