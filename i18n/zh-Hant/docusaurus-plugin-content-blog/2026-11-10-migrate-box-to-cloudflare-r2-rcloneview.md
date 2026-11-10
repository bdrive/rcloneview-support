---
slug: migrate-box-to-cloudflare-r2-rcloneview
title: "將 Box 遷移到 Cloudflare R2 — 使用 RcloneView 傳輸檔案"
authors:
  - robin
description: "使用 RcloneView 將 Box 遷移到 Cloudflare R2:連接兩個遠端,先試執行複製,再執行雲端對雲端傳輸並驗證結果。"
keywords:
  - 將 Box 遷移到 Cloudflare R2
  - Box 到 R2 傳輸
  - Box 雲端遷移
  - Cloudflare R2 備份
  - RcloneView
  - 雲端對雲端傳輸
  - Box 到 S3 相容儲存
  - Box 封存到物件儲存
  - rclone GUI
tags:
  - RcloneView
  - box
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Box 遷移到 Cloudflare R2 — 使用 RcloneView 傳輸檔案

> 將多年累積的 Box 內容移入 Cloudflare R2 物件儲存,無需先下載到自己的磁碟。

財務團隊的 Box 方案已不敷使用,或某個部門要收尾舊專案時,往往希望改用物件儲存作為封存。RcloneView 可並排連接 Box 和 Cloudflare R2,並在兩者之間直接複製。FREE 授權即可對 S3、Azure 或 Backblaze B2 進行完整讀寫連接,R2 同樣如此。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Box 和 Cloudflare R2

Box 是 OAuth 遠端:RcloneView 會開啟瀏覽器,您登入後即可建立遠端,無需 API 金鑰。如果貴公司使用 Box for Business,遠端需要設定 `box_sub_type = enterprise`。請先檢查這一點,因為個人類型的遠端看不到企業內容。

Cloudflare R2 使用憑證。請在 Cloudflare 控制台中建立 R2 儲存貯體,產生具有 Admin Read & Write 權限的 API 權杖,然後在 New Remote 對話方塊中輸入權杖資訊和您的帳戶端點 `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Box 和 Cloudflare R2 遠端" class="img-large img-center" />

## 規劃資料夾結構

在一個 Explorer 面板中開啟 Box,在另一個中開啟 R2。R2 是扁平的物件儲存,因此複製前先決定前綴結構:例如每個 Box 部門對應一個頂層資料夾,其下保留原有子資料夾。對較大的 Box 資料夾使用 Get Size 來估算即將遷移的資料量。

Box Notes 等 Box Docs 不是一般檔案。同步精靈中的預先定義篩選器包含 Box Docs 選項,如果不希望將它們放入封存,可以將其排除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView Explorer 面板中並排顯示的 Box 和 Cloudflare R2" class="img-large img-center" />

## 先試執行,再複製

首次遷移請建立 Copy 作業而不是 Sync 作業,這樣任何一側都不會有內容被刪除。先以 Dry Run 執行:RcloneView 會列出將要複製的檔案而不實際傳輸,有助於發現來源資料夾選錯的情況。

在 Advanced Settings 步驟中,如果有大量小檔案,可增加檔案傳輸數;如需依雜湊與大小比對,可啟用校驗碼比較。然後執行作業,並在 Transferring 分頁中查看進度:百分比、速度和檔案數會即時更新。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行 Box 到 R2 的複製作業" class="img-large img-center" />

## 驗證遷移

作業完成後,開啟 Folder Compare,左側選 Box,右側選 R2。使用 left-only 篩選器查看未到達的內容,使用 different-files 篩選器找出大小不一致的檔案。Job History 會保留每次執行的狀態、時間長度、總大小和檔案數,可作為稽核紀錄的有用依據。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="使用 Folder Compare 驗證 Box 到 R2 的遷移" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView**:請從 [rcloneview.com](https://rcloneview.com/src/download.html) 取得。
2. 新增您的 Box 遠端(OAuth)和 Cloudflare R2 遠端(API 權杖和端點)。
3. 建立從 Box 資料夾到 R2 儲存貯體前綴的 Copy 作業,並執行 Dry Run。
4. 執行作業,然後用 Folder Compare 確認結果。

兩個遠端連接好之後,將 Box 內容移入 R2 只需點擊幾下。

---

**相關指南:**

- [將 Box 遷移到 AWS S3](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [使用 RcloneView 管理 Box 儲存](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dry Run:傳輸前預覽同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
