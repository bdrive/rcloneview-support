---
slug: migrate-hidrive-to-wasabi-rcloneview
title: "將 HiDrive 遷移到 Wasabi — 使用 RcloneView 傳輸檔案"
authors:
  - morgan
description: "使用 RcloneView 將檔案從 HiDrive 遷移到 Wasabi 物件儲存：連接兩個遠端，先 Dry Run，再執行傳輸，並用 Folder Compare 驗證。"
keywords:
  - HiDrive 遷移到 Wasabi
  - HiDrive 到 Wasabi 傳輸
  - HiDrive Wasabi 同步
  - RcloneView HiDrive
  - Wasabi S3 遷移
  - 雲端對雲端傳輸
  - HiDrive 備份到 S3
  - rclone HiDrive Wasabi
  - HiDrive 遷移工具
  - Wasabi GUI
tags:
  - RcloneView
  - hidrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 HiDrive 遷移到 Wasabi — 使用 RcloneView 傳輸檔案

> 透過視覺化流程將 HiDrive 封存遷移到 Wasabi 物件儲存：連接、預覽、傳輸、驗證。

HiDrive 適合作為個人或團隊的檔案儲存空間，但長期封存往往更適合放在 API 存取可預期的 S3 風格物件儲存中。RcloneView 在同一個視窗中連接這兩項服務，因此您不必先把所有內容下載到本機磁碟，就能在雲端之間直接複製資料夾。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 HiDrive 與 Wasabi 連接為遠端

HiDrive 使用 OAuth：RcloneView 會開啟瀏覽器，您登入後即可連接遠端，不需要另外的 API 金鑰。Wasabi 相容 S3，因此需要輸入 Access Key、Secret Key 以及儲存桶所在區域的端點。

在 Remote 分頁中透過 New Remote 新增兩者。接著在 Explorer 面板的左右兩側分別開啟，確認可以瀏覽 HiDrive 資料夾與目標 Wasabi 儲存桶。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 HiDrive 與 Wasabi 遠端" class="img-large img-center" />

## 用 Dry Run 規劃傳輸

假設一間設計工作室要把 800 GB 已完成的專案資料夾從 HiDrive 遷出。在動任何東西之前，先把傳輸建立為作業。選擇 HiDrive 作為來源、Wasabi 儲存桶路徑作為目的地，然後使用 One-way "Modifying destination only" 模式。

先執行 Dry Run。它會列出將被複製或刪除的檔案而不做任何變更，是發現目的資料夾選錯的可靠方法。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中將 HiDrive 雲端對雲端傳輸至 Wasabi" class="img-large img-center" />

## 調整設定並執行作業

在精靈的 Step 2 中設定檔案傳輸數量，若需要以雜湊與大小驗證，請啟用檢查碼比較。重試值維持預設的 3，這樣短暫的網路故障不會中止整個任務。使用 Step 3 的篩選器略過暫存檔或 `.git/` 資料夾等內容。

預覽無誤後執行作業，並在 Transferring 分頁中查看速度、進度與檔案數量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 分頁中監控 HiDrive 到 Wasabi 的傳輸" class="img-large img-center" />

## 用 Folder Compare 驗證

作業完成後，開啟 Compare，一側選 HiDrive，另一側選 Wasabi。篩選僅存在於左側的檔案，即可看到尚未抵達的內容，然後只複製缺少的項目。Job History 會記錄狀態、耗時、大小與檔案數量，可作為遷移紀錄。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 確認 HiDrive 與 Wasabi 內容一致" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 HiDrive（瀏覽器登入）與 Wasabi（Access Key、Secret Key、端點）新增為遠端。
3. 建立一個從 HiDrive 到 Wasabi 儲存桶的單向作業，並執行 Dry Run。
4. 執行傳輸，然後用 Folder Compare 驗證。

經過預覽與驗證的遷移，會在您確認所有內容都已抵達 Wasabi 之前，保持 HiDrive 檔案原封不動。

---

**相關指南：**

- [使用 RcloneView 將 HiDrive 同步到 Amazon S3](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)
- [使用 RcloneView 將 HiDrive 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [管理 Wasabi 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
