---
slug: manage-google-photos-cloud-sync-backup-rcloneview
title: "管理 Google 相簿儲存空間 — 使用 RcloneView 同步與備份相片"
authors:
  - tayson
description: "將 Google 相簿連接至 RcloneView，並將相片庫備份到本機儲存空間或其他雲端服務。在不遺失原始檔的情況下管理 Google 相簿。"
keywords:
  - Google 相簿 RcloneView 備份
  - 下載 Google 相簿本機備份
  - Google 相簿雲端同步
  - rclone Google 相簿 GUI
  - 備份 Google 相簿至外接硬碟
  - Google 相簿備份至 S3
  - 管理 Google 相簿儲存空間
  - RcloneView Google 相簿
tags:
  - google-photos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Google 相簿儲存空間 — 使用 RcloneView 同步與備份相片

> RcloneView 透過 OAuth 連接 Google 相簿，讓你瀏覽相片庫、將原始檔備份到本機儲存空間或其他雲端服務，並執行排程匯出。

Google 相簿是數十億 Android 使用者的預設相片備份方案——但它本身並不是一種備份。如果你的 Google 帳號遭到入侵、儲存空間配額用盡，或服務條款有所變動,你的相片庫就會面臨風險。RcloneView 將 Google 相簿視為與 Google 雲端硬碟不同的獨立遠端連接,讓你能直接存取相片庫,並將其下載備份到外接硬碟、NAS 裝置,或 Amazon S3、Backblaze B2 等冷儲存雲端服務。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定 Google 相簿

Google 相簿在 RcloneView 的遠端設定中會顯示為獨立的服務提供者。前往 **遠端分頁 → 新增遠端 → Google 相簿**,並透過 OAuth 瀏覽器登入進行驗證。系統會提示你授權 RcloneView(透過 rclone)讀取相片的權限——授權完成後,你的相片庫會依年份與相簿在總管面板中呈現。

請注意,Google 相簿 API 呈現相片的方式有其固定結構:依相簿或依日期資料夾分類。你無法透過 API 重新整理相片,但可以瀏覽並下載完整解析度的原始檔——如果你擁有 Google One 儲存空間,甚至包含從相機上傳的 RAW 檔案。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Photos as a remote in RcloneView" class="img-large img-center" />

## 將 Google 相簿備份到本機儲存空間

最常見的使用情境是將整個 Google 相簿庫下載到外接硬碟或 NAS。在工作管理員中建立一個複製工作,以 Google 相簿為來源,以你的本機外接硬碟(或 NAS 路徑)為目的地。啟用**略過已存在的檔案**,讓後續執行變成增量備份——只會下載自上次備份以來的新相片。

以一個擁有 10 年相片、共 5 萬張相片、總計 150 GB 的家庭為例,首次下載會需要數小時。建議在夜間執行,並將排程設定為僅執行一次。之後每週排程執行,只會新增當週上傳的新相片——讓你的本機備份保持最新,而不需要重新傳輸所有內容。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Backing up Google Photos library to local storage in RcloneView" class="img-large img-center" />

## 跨雲端備份:從 Google 相簿到 S3 或 Backblaze B2

若要進行雲端對雲端的備份,可將 Google 相簿設為來源,並將 Amazon S3 或 Backblaze B2 設為目的地。這樣可在另一個雲端服務上建立獨立的相片庫備份——在不需要本機儲存空間的情況下,防範 Google 帳號可能發生的問題。

在同步精靈的第 3 步中使用篩選規則,只納入特定檔案類型(`.jpg`、`.heic`、`.mp4`、`.raw`),並排除不需要的 Google 中繼資料 JSON 附屬檔案。你可以在例行工作中設定最大檔案時間篩選,只備份過去 12 個月的相片,再另外建立一個一次性工作來處理歷史封存。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Photos to Backblaze B2 cross-cloud backup in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在新增遠端精靈中,透過 OAuth 瀏覽器驗證新增 Google 相簿為遠端。
3. 建立一個從 Google 相簿到外接硬碟或雲端備份儲存桶的複製工作。
4. 排程每週增量執行,自動擷取新相片。

有了 RcloneView,Google 相簿就能成為你可靠備份的來源——確保你無可取代的回憶,擁有一份獨立於 Google 基礎架構之外的副本。

---

**相關指南:**

- [使用 RcloneView 將 Google 相簿備份到外接硬碟與 NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [使用 RcloneView 整理雲端相片庫](https://rcloneview.com/support/blog/declutter-cloud-photo-library-rcloneview)
- [使用 RcloneView 管理 Google 雲端硬碟同步與備份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
