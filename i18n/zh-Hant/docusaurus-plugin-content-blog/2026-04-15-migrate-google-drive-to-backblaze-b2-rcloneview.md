---
slug: migrate-google-drive-to-backblaze-b2-rcloneview
title: "將 Google Drive 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 Google Drive 遷移至 Backblaze B2 — 進行雲端對雲端傳輸、以經濟實惠的方式封存資料，並透過 GUI 驗證遷移結果。"
keywords:
  - Google Drive to Backblaze B2
  - migrate Google Drive
  - Backblaze B2 backup
  - cloud migration tool
  - Google Drive export
  - RcloneView migration
  - cloud-to-cloud transfer
  - S3 archive Google Drive
  - Google Drive archiving
  - Backblaze cold storage
tags:
  - RcloneView
  - google-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案

> Google Drive 是為協作而設計，並非用於冷封存 — RcloneView 可直接將您的 Drive 內容遷移至 Backblaze B2，全程不經過本機硬碟，大規模使用時能節省儲存成本。

Google Drive 擅長即時協作，但並非為大規模、具成本效益的長期封存而設計。Backblaze B2 提供與 S3 相容的物件儲存，價格僅為 Google 儲存空間的一小部分，因此成為封存大型資料集、影片專案以及不需每日存取之業務紀錄的熱門目的地。RcloneView 可直接在兩個雲端之間進行遷移 — 完全不需要透過本機硬碟作為中介。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定兩個遠端

在 RcloneView 中，先新增 Google Drive — **遠端頁籤 > 新增遠端 > Google Drive** — 並透過瀏覽器 OAuth 進行驗證。接著新增 Backblaze B2：從提供者清單中選取，並輸入您的 Application Key ID 與 Application Key。兩個遠端會立即啟用。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

在 RcloneView 的雙面板檔案總管中同時開啟兩個遠端。這種直接檢視方式對規劃遷移非常有價值：在左側確認 Drive 資料夾中的內容，在右側確認目標 B2 儲存桶（bucket）結構，並在開始傳輸前判斷哪些資料夾應優先處理。

## 設定遷移工作

開啟 **工作管理員（Job Manager）**並建立新的同步或複製工作。將來源設定為您的 Google Drive 資料夾（或用於漸進式遷移的特定子資料夾），並將目的地設定為您的 Backblaze B2 儲存桶路徑。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Google Drive to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

對於大規模遷移 — 例如某家影片製作公司要將 2 TB 已完成的專案從 Drive 移至 B2 — 可在工作的進階設定中啟用多執行緒傳輸，並提高同時傳輸的檔案數量。**試跑（Dry Run）**功能會在實際執行工作前，準確顯示哪些檔案將被傳輸，避免意外覆寫或遺漏內容。啟用校驗碼驗證可確保每個檔案完整無誤地到達 B2，這對於可能多年不會被存取的封存檔案而言尤其重要。

## 遷移後的驗證與清理

傳輸完成後，使用 RcloneView 的**資料夾比較（Folder Compare）**功能，將 Google Drive 來源與 B2 目的地進行比對。比對畫面會標示僅存在於左側的檔案（尚未遷移）、僅存在於右側的檔案（已在 B2 上）以及相同的檔案 — 讓您在從 Drive 移除任何內容之前，擁有清晰、視覺化的檢查清單。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive and Backblaze B2 after migration in RcloneView" class="img-large img-center" />

在比對後再次執行遷移工作是安全的 — rclone 會略過目的地中已存在且大小與時間戳記相符的檔案，因此只會傳輸尚存的差異部分。這種冪等（idempotent）行為使得大規模遷移即使跨多個工作階段執行也十分可靠。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增一個 Google Drive 遠端（OAuth 瀏覽器驗證）與一個 Backblaze B2 遠端（Application Key 憑證）。
3. 開啟 **工作管理員**，建立一個從 Google Drive 到 B2 的同步或複製工作。
4. 啟用試跑進行預覽，接著執行 — 再用資料夾比較驗證是否完成。

使用 RcloneView 遷移至 Backblaze B2，可省去雲端出口流量的複雜性，讓您無需撰寫任何一行 CLI 指令，即可獲得一份經過驗證、具成本效益的封存資料。

---

**相關指南：**

- [使用 RcloneView 將 Backblaze B2 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-google-drive-rcloneview)
- [管理 Backblaze B2 雲端儲存 — 使用 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [將 Dropbox 備份至 Backblaze B2 — 使用 RcloneView 實現經濟實惠的儲存](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
