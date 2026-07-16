---
slug: migrate-mega-to-backblaze-b2-rcloneview
title: "將 Mega 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "透過 RcloneView 輕鬆將您的檔案從 Mega 移轉至 Backblaze B2。直接在雲端之間傳輸大型資料庫，無需下載——快速、可驗證且可靠。"
keywords:
  - migrate Mega to Backblaze B2
  - Mega to Backblaze transfer RcloneView
  - Mega Backblaze B2 migration
  - cloud to cloud file transfer
  - Mega cloud migration tool
  - Backblaze B2 import from Mega
  - move files Mega to B2
  - RcloneView Mega Backblaze
  - Mega cloud backup migration
  - Backblaze B2 migration GUI
tags:
  - RcloneView
  - mega
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Mega 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案

> RcloneView 可將您的檔案直接從 Mega 傳輸至 Backblaze B2，無需下載到本機磁碟——同時保留資料夾結構並驗證每個檔案。

Mega 慷慨的免費儲存空間吸引了大量的個人檔案庫與專案集合，但希望將儲存空間整合到成本更可預測平台的團隊，通常會選擇遷移到 Backblaze B2 的物件儲存服務。無論您是要遷移創意代理商的素材庫，還是開發者的備份集合，RcloneView 都能以完整的完整性驗證處理 Mega 到 B2 的傳輸，且無需手動下載檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Mega 與 Backblaze B2

首先在 RcloneView 中將兩個帳號都新增為遠端。針對 Mega，前往「遠端」分頁 > 新增遠端，選擇 Mega，然後輸入您的 Mega 電子郵件地址與密碼。針對 Backblaze B2，選擇 Backblaze B2 並輸入 B2 控制台中的 Application Key ID 與 Application Key。兩個遠端都會安全地儲存在 RcloneView 的加密本機儲存空間中。

連接兩個遠端後，在 RcloneView 的雙面板檔案總管中並排開啟它們。您可以在一側瀏覽 Mega 的資料夾結構，另一側瀏覽 B2 的儲存桶，清楚了解將要傳輸的內容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mega and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 設定遷移同步工作

將 Mega 遷移至 Backblaze B2 最可靠的方式，就是透過具名的同步工作。在 RcloneView 的同步精靈中：

1. 將**來源**設定為您的 Mega 遠端（選擇根目錄或特定資料夾）
2. 將**目的地**設定為您的 B2 儲存桶與子目錄
3. 為此工作命名一個描述性的名稱，例如 `mega-to-b2-migration`
4. 啟用**校驗碼**驗證，以在傳輸後透過雜湊值比對檔案

對於 Mega 的遷移作業而言，校驗碼選項特別重要，因為 Mega 使用自己內部的加密機制——在目的地驗證檔案大小與雜湊值，可確認內容已正確解密並重新上傳。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Mega to Backblaze B2 in RcloneView" class="img-large img-center" />

## 先執行試跑

在正式進行完整遷移之前，請使用 RcloneView 的**試跑**模式，預覽將要傳輸的確切內容。試跑會列出將被複製的檔案清單，以及目的地上將被刪除的任何檔案——但不會實際進行任何變更。當遷移數千個檔案時，這項功能非常有價值，讓您能在遷移開始前先確認範圍。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing the Mega to Backblaze B2 migration in RcloneView" class="img-large img-center" />

## 監控進度並驗證完成情況

RcloneView 的「傳輸」分頁會即時顯示遷移進度：檔案名稱、傳輸速度、已移動的總位元組數，以及完成百分比。以 200GB 的 Mega 檔案庫為例，依連線速度不同，傳輸可能需要數小時。傳輸分頁能讓您隨時掌握狀態，不必一直守在電腦前。

工作完成後，前往「工作歷史記錄」查看完整摘要——包括已傳輸的檔案、移動的位元組數、耗時，以及任何錯誤。如果 Mega 的 API 速率限制曾暫停傳輸，RcloneView 會記錄重試嘗試，方便您了解發生了什麼事。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Mega to Backblaze B2 migration progress in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 Mega（電子郵件 + 密碼）與 Backblaze B2（Application Key）新增為遠端。
3. 建立從 Mega 到您 B2 儲存桶的同步工作，並啟用校驗碼驗證。
4. 執行試跑以預覽，然後執行完整遷移。

有了 RcloneView 處理雲端到雲端的傳輸，從 Mega 遷移到 Backblaze B2 變得相當簡單——無需本機儲存空間，也無需手動下載。

---

**相關指南：**

- [管理 Mega 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [管理 Backblaze B2 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Mega 遷移至 Amazon S3](https://rcloneview.com/support/blog/migrate-mega-to-aws-s3-rcloneview)

<CloudSupportGrid />
