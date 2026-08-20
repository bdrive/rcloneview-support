---
slug: sync-opendrive-to-google-drive-rcloneview
title: "將 OpenDrive 同步到 Google Drive — 使用 RcloneView 進行雲端備份"
authors:
  - kai
description: "使用 RcloneView 將 OpenDrive 資料夾同步到 Google Drive，藉助 Folder Compare 與排程工作讓兩個雲端保持一致。"
keywords:
  - 將 OpenDrive 同步到 Google Drive
  - OpenDrive Google Drive 備份
  - RcloneView OpenDrive 同步
  - OpenDrive 雲端備份
  - 雲對雲同步
  - OpenDrive Google Drive RcloneView
  - 多雲備份工具
  - OpenDrive 資料夾比較
tags:
  - RcloneView
  - opendrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 OpenDrive 同步到 Google Drive — 使用 RcloneView 進行雲端備份

> 不必先下載到本機磁碟，就能將 OpenDrive 資料夾鏡像到 Google Drive。

將工作檔案存放在 OpenDrive、卻與客戶或合作夥伴在 Google Drive 上協作的團隊，通常最終得手動來回複製檔案，只要有一方變動，兩邊就會立刻失去同步。RcloneView 在同一個視窗中連接兩個遠端並直接在它們之間同步，因此傳輸是以雲對雲方式進行，不必經過本機資料夾中轉。與僅支援掛載的工具不同，RcloneView 在 FREE 授權下也提供同步與資料夾比較功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定 OpenDrive 與 Google Drive 遠端

先在 Remote Manager 中新增 OpenDrive 作為遠端，接著使用瀏覽器式 OAuth 登入新增 Google Drive——設定完成後，兩個遠端會在 File Explorer 中顯示為個別分頁，方便你在建立同步工作前分別瀏覽各自內容。在進入同步精靈之前，請確認兩個遠端都能正常列出資料夾；無法瀏覽的遠端在同步過程中同樣會失敗，及早發現問題會更容易處理。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## 設定單向同步工作

在同步精靈中，選擇 OpenDrive 資料夾作為來源，目標 Google Drive 資料夾作為目的地，然後選擇單向同步，讓 OpenDrive 始終作為權威來源。根據資料夾大小在 Advanced Settings 中設定檔案傳輸數與一致性檢查器數量——預設值適用於大多數情況，但若資料夾中有數萬個小檔案，且 OpenDrive 對中繼資料請求回應較慢，降低一致性檢查器數量會更有幫助。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from OpenDrive to Google Drive in RcloneView" class="img-large img-center" />

在首次正式同步前執行 Dry Run，預覽將要複製的檔案——這能在你第一次將工作指向既有的 OpenDrive 資料夾時，提前發現非預期的整資料夾傳輸。

## 使用 Folder Compare 驗證結果

首次同步完成後，開啟 Folder Compare 並指向同樣的兩個資料夾，確認兩邊一致。Folder Compare 會醒目標示僅存在於一側或大小不同的檔案，相較於在 Job History 中翻找錯誤，這是發現部分傳輸問題更快的方法。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and Google Drive folders after sync in RcloneView" class="img-large img-center" />

## 安排持續同步

驗證初次同步無誤後，在 Job Manager 中儲存該工作並設定 crontab 風格的排程——此功能需要 PLUS 授權——這樣 OpenDrive 的變更就會依固定間隔傳播到 Google Drive，不必每次手動執行。Job History 會記錄每一次排程執行，包括傳輸大小與檔案數量，方便你確認排程確實依預期觸發。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring OpenDrive to Google Drive sync job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote Manager 中將 OpenDrive 與 Google Drive 都新增為遠端。
3. 先透過 Dry Run 建立單向同步工作，再正式執行。
4. 使用 Folder Compare 驗證結果，如需持續備份，可儲存該工作並設定排程。

當兩個遠端能並排顯示後，保持 OpenDrive 與 Google Drive 一致就會成為例行同步工作，而不再是手動雜務。

---

**相關指南：**

- [使用 RcloneView 管理 OpenDrive 檔案與雲端同步](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 OpenDrive 備份到 AWS S3 與外部儲存](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [使用 RcloneView 將 Box 同步到 Google Drive](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
