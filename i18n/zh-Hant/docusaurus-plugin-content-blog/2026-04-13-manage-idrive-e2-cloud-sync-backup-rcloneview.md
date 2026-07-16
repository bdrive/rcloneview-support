---
slug: manage-idrive-e2-cloud-sync-backup-rcloneview
title: "管理 IDrive E2 儲存空間——使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "將 IDrive E2 連接至 RcloneView，透過圖形化介面管理你的 S3 相容儲存桶。輕鬆將 IDrive E2 同步至 Google Drive、Amazon S3 及其他雲端。"
keywords:
  - IDrive E2
  - IDrive E2 sync
  - IDrive E2 backup
  - IDrive E2 RcloneView
  - IDrive E2 S3 compatible
  - IDrive E2 cloud management
  - IDrive E2 to S3
  - IDrive E2 to Google Drive
  - S3-compatible storage GUI
  - cloud storage sync
tags:
  - idrive-e2
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 IDrive E2 儲存空間——使用 RcloneView 同步與備份檔案

> 將 IDrive E2 加入 RcloneView，與 Google Drive、Amazon S3、Backblaze B2 以及其他 90 多種雲端儲存服務一起管理你的 S3 相容儲存桶。

IDrive E2 是一款高性價比的 S3 相容物件儲存服務,深受開發者與企業青睞,是尋求 Amazon S3 平價替代方案並維持 API 相容性的理想選擇。RcloneView 對 S3 相容供應商的支援,意味著你可以將 IDrive E2 儲存桶連接至圖形化介面,無需撰寫命令列腳本即可執行同步、備份與跨雲端遷移。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定 IDrive E2

IDrive E2 使用標準的 S3 相容憑證:Access Key ID、Secret Access Key,以及與所選地區綁定的端點 URL。你可以從 IDrive E2 帳戶後台產生這些憑證。取得憑證後,開啟 RcloneView,前往「遠端」分頁,點擊「新增遠端」。選擇 Amazon S3 作為供應商類型,並填入你的 IDrive E2 端點 URL 與憑證進行設定。

儲存後,你的 IDrive E2 遠端會顯示在檔案總管中。你可以直接瀏覽儲存桶與物件、查看檔案大小與修改時間戳記,並透過右鍵選單執行複製、移動、刪除或下載檔案等操作。路徑導覽列會顯示你目前在儲存桶中的位置,並在你深入瀏覽資料夾結構時提供自動完成建議。

<img src="/support/images/en/blog/new-remote.png" alt="Adding IDrive E2 as a remote in RcloneView" class="img-large img-center" />

## 將 IDrive E2 同步至其他雲端

以 IDrive E2 作為主要備份目標的組織,通常會希望將關鍵儲存桶複製到次要供應商,以實現地理冗餘或供應商故障轉移。RcloneView 讓這件事變得簡單:建立一個以 IDrive E2 儲存桶為來源、Amazon S3、Cloudflare R2 或 Google Drive 為目的地的同步工作。

四步驟同步精靈會處理所有設定:儲存空間選擇、進階傳輸設定(並行傳輸數、校驗和驗證)、篩選規則(排除大型檔案、特定副檔名),以及選擇性排程。啟用校驗和驗證可確認每個物件都完整傳輸——這對於儲存在 IDrive E2 中的二進位封存檔與資料庫備份檔尤其重要。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing IDrive E2 bucket to Amazon S3 with RcloneView" class="img-large img-center" />

排程同步功能(PLUS 授權)可依指定的時間間隔自動執行你的 IDrive E2 複寫作業。工作歷程記錄會保存每次執行的開始時間、耗時、傳輸檔案數量與最終狀態——讓你無需維護外部腳本或 cron 工作,即可擁有持續的稽核記錄。

## 監控進行中的傳輸

在執行大型 IDrive E2 同步作業時,RcloneView 底部的「傳輸中」分頁會顯示即時進度:目前正在傳輸的檔案、累計數量,以及整體同步狀態。如有需要,你可以直接從此畫面取消正在執行的工作,而「日誌」分頁則會記錄帶有時間戳記的項目,方便排查任何發生的錯誤。

針對高流量的工作負載,在同步精靈的「進階設定」步驟中調整「檔案傳輸數量」,可控制同時傳輸的物件數量。多執行緒傳輸設定(預設值:4)則負責處理較大物件的分塊上傳。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring IDrive E2 sync progress in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 從你的 IDrive 帳戶後台產生 IDrive E2 的 Access Key ID 與 Secret Access Key。
3. 在 RcloneView 中新增一個 S3 相容遠端,填入你的 IDrive E2 端點與憑證。
4. 建立同步工作,依固定排程將 IDrive E2 儲存桶備份至你的次要儲存空間。

有了 RcloneView,你的 IDrive E2 儲存桶就能像其他雲端儲存一樣易於管理——在檔案瀏覽器中一目了然、可透過同步工作進行設定,並可透過工作歷程進行稽核。

---

**相關指南:**

- [使用 RcloneView 將 IDrive E2 與 Amazon S3、Google Drive 同步](https://rcloneview.com/support/blog/sync-idrive-e2-s3-google-drive-rcloneview)
- [使用 RcloneView 管理 Cloudflare R2 雲端同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 與 Cloudflare R2 儲存空間](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
