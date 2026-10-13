---
slug: migrate-google-drive-to-wasabi-rcloneview
title: "將 Google Drive 遷移到 Wasabi — 使用 RcloneView 傳輸檔案"
authors:
  - alex
description: "使用 RcloneView 將 Google Drive 遷移到 Wasabi。跨雲端複製檔案,透過 Dry Run 與 Folder Compare 驗證,並保留 S3 相容的封存。"
keywords:
  - 遷移 Google Drive 到 Wasabi
  - google drive to wasabi
  - Google Drive Wasabi 傳輸
  - Google Drive 封存 S3
  - Wasabi 遷移 圖形介面
  - 雲端對雲端傳輸
  - rcloneview google drive wasabi
  - 將 Google Drive 移至物件儲存
  - Google Drive 備份 Wasabi
  - Wasabi 儲存貯體同步
tags:
  - RcloneView
  - google-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 遷移到 Wasabi — 使用 RcloneView 傳輸檔案

> 無需先下載到本機磁碟,即可將 Google Drive 移動或封存到 Wasabi 儲存貯體。

一家擁有 2TB 已完成專案的設計工作室,可能希望將它們從 Google Drive 移出,存入 S3 相容的物件儲存。RcloneView 可直接從 Drive 傳輸到 Wasabi,事前可執行 Dry Run,事後可使用 Folder Compare,確認沒有遺漏。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

Google Drive 使用 OAuth:在 **New Remote** 中選擇它,然後透過瀏覽器登入。Wasabi 是 S3 相容的提供者,因此需輸入 Access Key、Secret Key 以及所在 Wasabi 區域的端點。請先在 Wasabi 主控台建立儲存貯體,作為目的地。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Google Drive 與 Wasabi 遠端" class="img-large img-center" />

使用 FREE 授權即可對 S3、Azure 或 Backblaze B2 進行完整的讀寫,Wasabi 及其他 S3 相容服務的使用方式相同。

## 透過 Dry Run 規劃傳輸

在一個 Explorer 面板中開啟 Google Drive,在另一個面板中開啟 Wasabi 儲存貯體。若只是一次性遷移,可在面板之間拖曳資料夾;不同遠端之間執行的是複製。對於大型資料庫,請改為建立作業。Step 1 設定來源與目的地,Step 2 可調整並行傳輸數,Step 3 可依檔案大小、時間或類型進行篩選。執行 **Dry Run** 可預覽將被複製的所有檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 Google Drive 到 Wasabi 的跨雲端傳輸" class="img-large img-center" />

遷移期間請選擇 **Copy** 作業類型,而非 Sync。Copy 不會刪除目的地的任何內容,在驗證結果之前這是較安全的選擇。

## 監控傳輸

啟動作業後,在視窗底部的 Transferring 分頁中查看進度:百分比、速度與檔案數量。若 Google Drive 的速率限制造成變慢,請在作業的進階設定中降低並行檔案傳輸數後再次執行;已複製的檔案會被略過。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中監控到 Wasabi 的傳輸" class="img-large img-center" />

## 清理之前先驗證

使用 **Compare** 並排檢視兩個位置。篩選器可顯示僅在左側、僅在右側、相同與不同的檔案,任何缺漏都一目了然。唯有在比較結果無誤之後,才應考慮刪除 Google Drive 中的資料。Job History 會保留每次執行的紀錄。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="使用 Folder Compare 驗證 Google Drive 到 Wasabi 的遷移" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Google Drive(OAuth)與 Wasabi(Access Key、Secret Key、端點)作為遠端。
3. 建立從 Drive 到儲存貯體的 Copy 作業,並執行 Dry Run。
4. 啟動作業,然後使用 Compare 確認結果。

在由您掌控的儲存貯體中保存一份經過驗證的副本,後續清理工作的風險就會很低。

---

**相關指南:**

- [使用 RcloneView 管理 Wasabi 儲存](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [將 OneDrive 遷移到 Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [將 Dropbox 遷移到 Wasabi](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
