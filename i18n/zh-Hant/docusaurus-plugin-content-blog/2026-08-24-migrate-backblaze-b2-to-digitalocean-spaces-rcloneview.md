---
slug: migrate-backblaze-b2-to-digitalocean-spaces-rcloneview
title: "將 Backblaze B2 遷移到 DigitalOcean Spaces — 使用 RcloneView 傳輸檔案"
authors:
  - kai
description: "使用校驗和驗證傳輸、篩選器和 Dry Run 預覽,透過 RcloneView 將檔案從 Backblaze B2 遷移到 DigitalOcean Spaces。"
keywords:
  - 將 Backblaze B2 遷移到 DigitalOcean Spaces
  - Backblaze 到 DigitalOcean 傳輸
  - RcloneView 物件儲存遷移
  - B2 遷移到 Spaces
  - S3 相容雲端遷移
  - DigitalOcean Spaces 設定
  - Backblaze B2 遷移到 Spaces
  - 雲端儲存供應商切換
tags:
  - RcloneView
  - backblaze-b2
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Backblaze B2 遷移到 DigitalOcean Spaces — 使用 RcloneView 傳輸檔案

> 在兩個 S3 相容供應商之間遷移物件儲存,不需要手動撰寫 rclone 指令腳本 — RcloneView 透過其圖形介面處理傳輸、驗證與篩選。

從 Backblaze B2 轉換到 DigitalOcean Spaces 的團隊,通常是為了將基礎架構與現有的 Droplet 或 App Platform 服務整合到同一個供應商上。由於兩者都是 S3 相容遠端,RcloneView 只需 Access Key、Secret Key 和端點即可連接雙方,接著直接在兩者之間傳輸資料,而不必先經過本機磁碟。對於存放數百 GB 應用程式備份或媒體資產的儲存桶而言,這種直接的雲對雲路徑比先下載再上傳的工作流程節省了大量時間。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定兩個遠端

使用 B2 儀表板中的 Application Key ID 與 Application Key 新增 Backblaze B2 遠端,接著使用各自的 Access Key、Secret Key 與地區端點(例如 `nyc3.digitaloceanspaces.com`)為 DigitalOcean Spaces 新增另一個遠端。兩者都會在 RcloneView 的 Explorer 面板中以分頁形式顯示,因此在開始任何遷移之前,你可以並排瀏覽來源儲存桶與目標 Space。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

使用分割面板版面同時查看兩個儲存桶,在正式開始完整遷移之前,確認資料夾結構與命名規則符合應用程式的預期。

## 執行校驗和驗證傳輸

將遷移設定為在精靈 Step 2 中啟用校驗和比較的 Copy 或 Sync 工作 — 這會依雜湊值與大小比較檔案,而非僅比較時間戳記,這在兩個可能以不同方式回報修改時間的儲存後端之間遷移時格外重要。請依你的頻寬設定檔案傳輸數與多執行緒傳輸數;對於大型儲存桶,4 個並行傳輸是合理的起點。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a checksum-verified transfer from Backblaze B2 to DigitalOcean Spaces" class="img-large img-center" />

在執行完整遷移之前,使用 Dry Run 精確預覽將要複製的檔案 — 這能在任何資料搬移之前發現命名衝突或非預期的檔案數量。S3、Azure 與 Backblaze B2 在 FREE 授權下即可取得完整讀寫權限,因此沒有任何方案限制會阻礙這條遷移路徑。

## 安排切換時程

對於分階段遷移,請先執行一次完整同步,接著再執行排程中的增量同步(PLUS 授權),以在最終切換前擷取 Backblaze B2 中新增的檔案。如此可在整個過渡期間讓兩個儲存桶保持同步,而不必進行一次風險較高的大規模傳輸。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync jobs during a Backblaze B2 to DigitalOcean Spaces migration" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 為你的 Backblaze B2 儲存桶與 DigitalOcean Spaces 目標分別新增遠端。
3. 在複製任何檔案之前,先執行 Dry Run 預覽傳輸內容。
4. 啟用校驗和驗證後執行 Copy 或 Sync 工作,接著確認雙方檔案數量一致。

經過驗證的直接雲對雲遷移,代表你的資料在不經過本機裝置的情況下完整無損地送達 DigitalOcean Spaces。

---

**相關指南:**

- [管理 Backblaze B2 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [將 Backblaze B2 遷移到 AWS S3 — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [使用 RcloneView 將 Google Drive 遷移到 DigitalOcean Spaces](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)

<CloudSupportGrid />
