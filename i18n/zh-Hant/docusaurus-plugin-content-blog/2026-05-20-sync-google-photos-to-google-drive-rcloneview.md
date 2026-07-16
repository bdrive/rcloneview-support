---
slug: sync-google-photos-to-google-drive-rcloneview
title: "將 Google 相簿同步到 Google 雲端硬碟 — 使用 RcloneView 整理並備份您的相片庫"
authors:
  - kai
description: "了解如何使用 RcloneView 自動將 Google 相簿同步到 Google 雲端硬碟。在雲端帳戶之間傳輸、整理並備份您的整個相片庫。"
keywords:
  - 將 Google 相簿同步到 Google 雲端硬碟
  - 使用 RcloneView 備份 Google 相簿到 Google 雲端硬碟
  - Google 相簿與 Google 雲端硬碟傳輸
  - RcloneView Google 相簿同步
  - 雲端相片庫備份
  - 自動化 Google 相簿備份
  - 雲端相片檔案管理
  - Google 相簿雲端同步
  - 在 Google 服務之間傳輸相片
  - 雲端相片整理工具
tags:
  - google-photos
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google 相簿同步到 Google 雲端硬碟 — 使用 RcloneView 整理並備份您的相片庫

> Google 相簿與 Google 雲端硬碟在 rclone 中屬於不同的雲端遠端——RcloneView 讓您只需點選幾下，就能在兩者之間同步整個相片庫，並排程自動執行。

許多攝影師與團隊將 Google 相簿作為主要的拍攝與整理工具，同時依賴 Google 雲端硬碟進行結構化的檔案分享與協作。問題在於：這是 rclone 中兩個不同的雲端服務，內容不會自動在兩者之間流通。一位管理著數萬張已處理影像的婚禮攝影師，可能需要將這些檔案放到結構化的 Google 雲端硬碟資料夾中，以便交付給客戶並進行長期封存。RcloneView 在同一介面中連接兩種服務，讓您無需任何命令列操作，就能輕鬆在兩者之間傳輸、同步並排程相片搬遷。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Google 相簿與 Google 雲端硬碟

Google 相簿與 Google 雲端硬碟都使用基於瀏覽器的 OAuth 驗證。在 RcloneView 中，開啟「遠端」分頁並點選「新增遠端」，然後選擇 Google Photos 並在瀏覽器中完成登入。重複相同步驟，加入 Google Drive 作為第二個遠端。幾分鐘內，兩個帳戶就會分別以獨立面板出現在雙窗格檔案總管中。

當兩個遠端並排顯示時，您可以在同一個視窗中瀏覽 Google 相簿庫，並比對 Google 雲端硬碟的資料夾結構。這種並排檢視方式讓您能輕鬆找出哪些相簿或日期範圍尚未傳輸，並可直接拖曳個別資料夾進行快速的一次性複製。拖放確認彈出視窗（可在設定中切換開關）能在處理大型相片庫時，避免意外的移動操作。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Google Drive as remotes in RcloneView" class="img-large img-center" />

## 設定同步作業以傳輸您的相片庫

若要進行大量傳輸，可使用工作管理員建立專用的同步作業。從「首頁」分頁點選「同步」按鈕，選擇 Google 相簿資料夾作為來源，並選擇 Google 雲端硬碟中的目標資料夾作為目的地。透過 4 步驟精靈，您可以設定並行傳輸串流數量、啟用校驗碼驗證以在傳輸過程中偵測損毀的檔案，並套用檔案大小或日期篩選條件，以排除影片或僅擷取特定期間的相片。

在執行完整傳輸之前，可使用「試執行」功能預覽確切將複製哪些檔案——這在同步大型封存資料、且您想避免意外以重複檔案覆蓋已整理好的雲端硬碟資料夾時，是不可或缺的功能。試執行會顯示完整的預定操作清單，而不會進行任何實際變更。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job between Google Photos and Google Drive in RcloneView" class="img-large img-center" />

畫面底部的「傳輸中」分頁提供即時傳輸監控——進度百分比、目前傳輸速度以及檔案數量——讓您在大型相片搬遷過程中，不必猜測還剩多少工作量。

## 排程自動相片同步（PLUS 授權）

對於持續上傳到 Google 相簿的攝影師或團隊而言，一次性傳輸並不足夠。透過 PLUS 授權，您可以使用類似 crontab 的排程方式來安排重複執行的同步作業。設定一項每晚執行的作業，將任何新增的 Google 相簿內容拉取到對應的 Google 雲端硬碟資料夾中，讓兩個帳戶隨時保持最新狀態，無需人工介入。此排程器支援精細的時間間隔設定：可依分鐘、小時、星期幾、每月日期或月份執行。

「工作歷史記錄」會記錄每次執行的情況——執行時間、傳輸檔案數量、總資料大小、速度，以及是否成功完成或發生錯誤。若網路問題中斷了某次工作階段，RcloneView 會自動重試（預設 3 次），並記錄結果供您日後檢視。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Photos to Google Drive sync transfers" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過「遠端」分頁 > 「新增遠端」> Google Photos 加入 Google 相簿，然後透過瀏覽器完成驗證。
3. 以相同方式加入 Google 雲端硬碟作為第二個遠端。
4. 在工作管理員中建立同步作業，選擇 Google 相簿作為來源、Google 雲端硬碟資料夾作為目的地，先執行試執行，再執行完整傳輸。

使用 RcloneView 將 Google 相簿庫同步到 Google 雲端硬碟，只需幾分鐘即可完成設定，讓您擁有結構化的檔案存取方式，以及整個相片收藏的可靠備份副本。

---

**相關指南：**

- [使用 RcloneView 管理 Google 相簿儲存空間 — 同步並備份檔案](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Google 雲端硬碟儲存空間 — 同步並備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Google 相簿備份到外接硬碟與 NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
