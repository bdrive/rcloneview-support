---
slug: sync-google-photos-to-backblaze-b2-rcloneview
title: "將 Google Photos 同步至 Backblaze B2 — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "使用 RcloneView 將您的 Google Photos 相簿備份至 Backblaze B2。直接從 Google Photos 自動封存照片至物件儲存空間 — 無需手動下載。"
keywords:
  - sync Google Photos to Backblaze B2
  - Google Photos Backblaze B2 backup
  - RcloneView Google Photos backup
  - Google Photos to B2 transfer
  - backup Google Photos object storage
  - Google Photos archive B2
  - RcloneView photo backup
  - Google Photos cloud backup tool
  - Backblaze B2 photo archive
  - automated Google Photos backup
tags:
  - google-photos
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Photos 同步至 Backblaze B2 — 使用 RcloneView 進行雲端備份

> RcloneView 會建立從 Google Photos 到 Backblaze B2 的自動備份管線 — 讓您的照片庫安全地保存在低成本的物件儲存空間中,完全不需要手動操作。

Google Photos 是數十億使用者的照片庫,但將無可取代的回憶完全託付給單一雲端服務供應商,存在實際風險。將 Google Photos 作為主要相簿使用的專業攝影師、家庭影像典藏者與內容創作者,若能自動將照片二次備份至成本效益極高的物件儲存平台 Backblaze B2,將獲益良多。RcloneView 會自動處理此管線,依照您設定的排程,將新照片從 Google Photos 同步至 B2。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Google Photos 與 Backblaze B2

在 RcloneView 中新增這兩個服務供應商都相當簡單。針對 Google Photos,前往「遠端」分頁 > 新增遠端,選擇 Google Photos,並完成以瀏覽器為基礎的 OAuth 驗證。針對 Backblaze B2,選擇 Backblaze B2,並輸入您在 B2 主控台取得的 Application Key ID 與 Application Key。

RcloneView 的 Google Photos 整合功能會依相簿與日期組織您的相簿內容。您可以在檔案總管中瀏覽年份/月份資料夾,並存取所有媒體檔案 — 包括照片與影片。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 設定 Google Photos 到 B2 的同步工作

在 RcloneView 中建立一個同步工作,以您的 Google Photos 遠端作為來源,以 Backblaze B2 儲存桶作為目的地。舉例來說,一間需備份 500GB 客戶拍攝檔案的攝影工作室,可以將特定的 Google Photos 相簿設為來源資料夾,並將每個相簿對應至相應的 B2 資料夾結構。

在同步工作的進階設定中,啟用**校驗碼(checksum)**驗證,以確認每個傳輸至 B2 的照片與影片檔案都與來源檔案相符。這對於照片封存而言至關重要,因為一旦發生無聲的資料損壞,後果將不堪設想。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Photos to Backblaze B2 in RcloneView" class="img-large img-center" />

## 排程自動化照片備份(PLUS)

擁有 PLUS 授權後,您可以排程 Google Photos 到 B2 的同步作業自動執行。每日凌晨 3 點的同步作業可擷取前一天新增的照片與影片,且不會影響白天的效能。RcloneView 的增量同步只會傳輸新增或修改過的檔案,因此在完成初次完整備份後,後續的工作時間會相當短。

**最大檔案存留時間(Max file age)**篩選器可進一步優化增量同步 — 設定 `Max file age: 7d` 只會傳輸過去一週內新增的照片,非常適合頻繁但輕量的同步工作。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Photos to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## 監控進度並驗證備份完整性

RcloneView 的「傳輸」分頁會即時顯示備份進度:檔案名稱、傳輸速度與傳輸總位元組數。每次排程執行後,工作歷史記錄會留存完整摘要。對於擁有數千個檔案的照片庫而言,這份歷史記錄可作為備份完整性的證明 — 對於需要向客戶保證影像已安全封存的攝影師來說,這是不可或缺的功能。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos to Backblaze B2 sync progress in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Google Photos(OAuth)與 Backblaze B2(Application Key)作為遠端。
3. 建立一個從 Google Photos 到您的 B2 儲存桶的同步工作,並啟用校驗碼驗證。
4. 使用 PLUS 排程每日自動執行,並在工作歷史記錄中追蹤進度。

有了 RcloneView 自動化您的 Google Photos 到 Backblaze B2 管線,您的照片庫將永遠受到一個獨立、次要雲端封存的保護。

---

**相關指南:**

- [管理 Google Photos 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [管理 Backblaze B2 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Google Photos 遷移至 OneDrive](https://rcloneview.com/support/blog/migrate-google-photos-to-onedrive-rcloneview)

<CloudSupportGrid />
