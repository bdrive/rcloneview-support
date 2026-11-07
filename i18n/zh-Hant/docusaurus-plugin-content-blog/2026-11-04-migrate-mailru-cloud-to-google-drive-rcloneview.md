---
slug: migrate-mailru-cloud-to-google-drive-rcloneview
title: "將 Mail.ru Cloud 遷移到 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 Mail.ru Cloud 遷移到 Google Drive：連接兩個遠端、執行 Dry Run、在雲端之間複製資料夾，並透過 Folder Compare 驗證結果。"
keywords:
  - 將 Mail.ru Cloud 遷移到 Google Drive
  - Mail.ru Cloud 傳輸
  - 從 Mail.ru 到 Google Drive
  - RcloneView Mail.ru
  - 雲端對雲端遷移
  - 在雲端之間移動檔案
  - Mail.ru Cloud 備份
  - rclone GUI 遷移
  - Google Drive 遷移工具
  - Folder Compare 驗證
tags:
  - RcloneView
  - mailru
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Mail.ru Cloud 遷移到 Google Drive — 使用 RcloneView 傳輸檔案

> 用視覺化、可驗證的工作流程把 Mail.ru Cloud 的檔案遷移到 Google Drive，而不是手動下載再重新上傳。

要把多年累積的文件、掃描檔和媒體檔案從 Mail.ru Cloud 遷出，通常意味著先全部下載到筆記型電腦，再重新上傳。RcloneView 是以 rclone 為基礎的 GUI，它將兩個服務都作為遠端連接，讓您在一個視窗中完成複製並驗證結果。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

開啟 RcloneView，使用 **New Remote** 新增 Mail.ru Cloud 和 Google Drive。Google Drive 透過瀏覽器使用 OAuth 登入，因此不需要 API 金鑰。Mail.ru Cloud 在支援的提供者清單中；請依畫面提示輸入其憑證。兩者都出現在 Remote Manager 後，在兩個 Explorer 面板中並排開啟它們。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Mail.ru Cloud 和 Google Drive 遠端" class="img-large img-center" />

RcloneView 在 Windows、macOS 和 Linux 上，透過一個視窗支援 90 多種雲端儲存服務，因此相同的設定也適用於日後的任何遷移。

## 移動任何內容之前先規劃複製

先瀏覽來源目錄樹。對最上層資料夾使用 **Get Size** 估算資料量，然後決定哪些現在遷移、哪些可以稍後處理。例如，小型企業可以立即遷移共用的「Contracts」資料夾，而把體量較大的「Archive」資料夾安排在非上班時間。

將資料夾從 Mail.ru 面板拖到 Google Drive 面板：在不同遠端之間拖曳會執行 **Copy**，因此在您滿意之前來源資料保持不變。對於較大的遷移，請在 Sync 精靈中建立 Copy 作業，在 Advanced Settings 中設定傳輸數，並使用篩選器略過不需要的檔案，例如 ISO 映像檔。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中於兩個遠端之間進行雲端對雲端傳輸" class="img-large img-center" />

## Dry Run、傳輸與監控

先執行 **Dry Run**。它會列出將要複製的內容，而不會更動任何一方，從而在浪費時間之前發現錯誤的路徑。清單無誤後，啟動作業，並在 Transferring 分頁中查看進度、速度和檔案數。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 的 Transferring 分頁中監控正在執行的傳輸" class="img-large img-center" />

## 使用 Folder Compare 驗證

複製完成後，將 Mail.ru Cloud 放在左側、Google Drive 放在右側，開啟 **Compare**。篩選 left-only 和 different 檔案，查看缺漏或不相符的項目，然後將它們複製過去。Job History 會記錄檔案的狀態、大小和耗時。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="顯示來源與目的地差異的 Folder Compare" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **New Remote** 新增 Mail.ru Cloud 和 Google Drive。
3. 對一個資料夾執行 Dry Run，然後啟動 Copy 作業。
4. 在停用舊帳戶之前，使用 Folder Compare 進行確認。

經過驗證的雲端對雲端直接複製可降低遷移風險，並便於隨時繼續。

---

**相關指南：**

- [管理 Mail.ru Cloud 同步](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [將 Mail.ru Cloud 傳輸到 Google Drive 與 S3](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [將 Mail.ru Cloud 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
