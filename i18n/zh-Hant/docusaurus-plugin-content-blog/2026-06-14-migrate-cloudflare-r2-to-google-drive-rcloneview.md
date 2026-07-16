---
slug: migrate-cloudflare-r2-to-google-drive-rcloneview
title: "將 Cloudflare R2 遷移至 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "了解如何使用 RcloneView 將檔案從 Cloudflare R2 遷移至 Google Drive — 沒有意外的傳出流量費用，只有引導式的視覺化傳輸流程。"
keywords:
  - cloudflare r2 to google drive
  - migrate r2 to google drive rcloneview
  - cloudflare r2 google drive transfer
  - rcloneview cloudflare r2 migration
  - object storage to google drive
  - r2 bucket to google drive rclone
  - cloudflare r2 backup google drive
  - cloud migration rcloneview
tags:
  - cloudflare-r2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Cloudflare R2 遷移至 Google Drive — 使用 RcloneView 傳輸檔案

> 使用 RcloneView 的視覺化介面，將檔案從 Cloudflare R2 儲存桶移動到 Google Drive — 不需要 CLI，也沒有 R2 的傳出流量費用。

Cloudflare R2 因其零傳出流量費用的物件儲存而深受開發者喜愛，但團隊經常需要將資料移到 Google Drive，以便與非技術背景的同事共享、整合 Google Workspace，或整合儲存帳戶。RcloneView 透過點選式的流程連接這兩項服務，讓你無需撰寫任何指令，就能將 R2 儲存桶遷移至 Google Drive。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Cloudflare R2 與 Google Drive

首先將兩項服務都新增為遠端。在 **Remote** 頁籤中，點選 **New Remote** 並選擇 Cloudflare R2。你需要提供 Cloudflare 的 **API Token**、**Account ID** 以及 **Endpoint URL**（格式為 `https://<account-id>.r2.cloudflarestorage.com`）。RcloneView 使用 rclone 的 S3 相容後端來處理 R2，因此你的 R2 API Token 會直接對應到 Access Key 與 Secret Key 欄位。

接著，將 Google Drive 新增為第二個遠端。RcloneView 會開啟瀏覽器視窗進行 OAuth 驗證 — 登入你的 Google 帳戶並授予存取權限，不需要輸入任何 API 金鑰。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Cloudflare R2 and Google Drive remotes in RcloneView" class="img-large img-center" />

設定好兩個遠端之後，你就可以在 RcloneView 的雙面板檔案總管中，並排瀏覽你的 R2 儲存桶與 Google Drive 資料夾。

## 執行遷移

在 Home 頁籤中點選 **Sync**，開啟四步驟的工作精靈。在第 1 步中，選擇你的 R2 儲存桶（或其中的特定子資料夾）作為來源，並選擇 Google Drive 資料夾作為目的地。為工作命名時請清楚明確 — 像是 `r2-to-gdrive-migration` 這樣的名稱，日後查看紀錄時會很有幫助。

在第 2 步中，啟用**校驗碼驗證（checksum verification）**，以確認每次傳輸後檔案的完整性。這對於影片或封存檔等大型檔案尤其重要，因為傳輸過程中的損毀否則可能不會被察覺。將重試次數設定為至少 3 次，以自動處理暫時性的網路中斷。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a migration job from Cloudflare R2 to Google Drive in RcloneView" class="img-large img-center" />

在正式執行之前，先執行一次**乾跑（Dry Run）**，預覽確切會複製哪些檔案。這會顯示完整的傳輸清單與檔案大小，讓你在任何內容觸及 Google Drive 之前，先確認範圍。

## 篩選與處理大型傳輸

如果你的 R2 儲存桶包含多種檔案類型，第 3 步可以套用篩選條件。舉例來說，正在遷移專案儲存桶的設計團隊，可以使用「最大檔案大小」篩選條件，排除超過 500 MB 的原始 `.psd` 檔案，同時保留所有可供上線使用的匯出檔案。**最大檔案年齡（Max File Age）**篩選條件同樣適用於漸進式遷移 — 只移動過去 30 天內修改過的檔案，而不是整批歷史資料。

對於耗時數小時的大型遷移，**Job History** 頁籤會記錄每次執行的速度、檔案數量與完成狀態。如果工作中途中斷，重新執行也很安全 — RcloneView 會跳過已成功傳輸的檔案，並從中斷處繼續執行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring a Cloudflare R2 to Google Drive transfer job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用你的 API Token、Account ID 與 Endpoint URL，將 Cloudflare R2 新增為遠端。
3. 透過 OAuth 瀏覽器登入，將 Google Drive 新增為遠端。
4. 建立一個從 R2 儲存桶到 Google Drive 資料夾的複製或同步工作 — 先執行乾跑以確認範圍。

Cloudflare R2 的零傳出流量費用模式，代表將資料移出 R2 端不需要任何費用，其餘的一切則交由 RcloneView 以視覺化方式處理。

---

**相關指南：**

- [使用 RcloneView 將 Google Drive 遷移至 Cloudflare R2](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [管理 Cloudflare R2 — 使用 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [管理 Google Drive — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
