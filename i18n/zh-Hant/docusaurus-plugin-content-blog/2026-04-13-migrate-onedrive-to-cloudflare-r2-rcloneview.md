---
slug: migrate-onedrive-to-cloudflare-r2-rcloneview
title: "將 OneDrive 遷移至 Cloudflare R2 — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 OneDrive 檔案搬遷至 Cloudflare R2，適用於開發者工作流程與 CDN 整合。透過 OAuth 與 API Token 連線、套用篩選規則並執行同步。"
keywords:
  - migrate OneDrive to Cloudflare R2
  - OneDrive R2 transfer RcloneView
  - OneDrive to Cloudflare R2 sync
  - cloud storage migration developer
  - Cloudflare R2 object storage
  - OneDrive alternative R2
  - S3 compatible storage migration
  - RcloneView OneDrive migration
tags:
  - onedrive
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 OneDrive 遷移至 Cloudflare R2 — 使用 RcloneView 傳輸檔案

> Cloudflare R2 原生整合 CDN 與 Workers 流程 — RcloneView 可在不動用本機資源的情況下，完成 OneDrive 到 R2 的遷移。

將工作負載遷移至 Cloudflare 生態系的開發者與團隊，經常需要把存放在 OneDrive 的資產搬遷至 Cloudflare R2。R2 提供零出站流量費用、S3 相容的物件儲存，能直接與 Cloudflare Workers、Pages 及 CDN 整合 — 非常適合靜態資產、媒體檔案與建置產物。RcloneView 透過 OAuth 連接 OneDrive，並透過 API Token 連接 Cloudflare R2，將遷移作業以雲對雲同步任務執行，並可選擇套用篩選規則。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 OneDrive

開啟 RcloneView 並前往**遠端管理器**。點選**新增遠端**，並從供應商清單中選擇 **OneDrive**。RcloneView 會開啟瀏覽器進行 OAuth 驗證 — 使用您的 Microsoft 帳號登入並授權存取。個人版 OneDrive、OneDrive for Business 以及 SharePoint 文件庫皆可透過此方式存取。

授權完成後，於檔案總管中開啟該遠端。瀏覽至您計劃遷移的資料夾，並記下其路徑。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting OneDrive and Cloudflare R2 in RcloneView" class="img-large img-center" />

## 連接 Cloudflare R2

回到**遠端管理器**，點選**新增遠端**並選擇 **S3 Compatible**。填入您的 Cloudflare R2 憑證：

- **Access Key ID**：來自 Cloudflare 主控台 → R2 → Manage API Tokens（建立具備物件讀寫權限的 API Token）
- **Secret Access Key**：權杖密鑰
- **Endpoint**：`https://{your-account-id}.r2.cloudflarestorage.com`

儲存遠端。在檔案總管中，瀏覽至目標儲存桶（或建立一個新的）。確認儲存桶內容能正常顯示，以驗證存取是否成功。

## 使用篩選規則設定遷移任務

前往**任務**並點選**新增任務**。將 OneDrive 設為來源，並指定要遷移的特定資料夾。將 Cloudflare R2 設為目的地，並指定目標儲存桶路徑。

在任務精靈的第 2 步驟中，您可以套用**篩選規則**以縮小遷移範圍：

- 僅遷移特定檔案類型（例如 `--include "*.jpg"`、`--include "*.pdf"`）
- 排除系統資料夾或暫存檔（例如 `--exclude ".DS_Store"`）
- 使用**試跑（Dry Run）**在正式執行前預覽篩選結果

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from OneDrive to Cloudflare R2" class="img-large img-center" />

## 執行遷移

關閉試跑模式並執行任務。RcloneView 會在傳輸面板中顯示即時進度 — 每秒檔案數、目前速度以及已傳輸的總資料量。OneDrive 到 R2 是伺服器對伺服器的傳輸；您的本機僅作為協調者，而非資料傳輸通道。

大型檔案會自動採用分段上傳。若有檔案在傳輸過程中失敗，記錄分頁會顯示具體錯誤。重新執行任務是安全的 — 已傳輸完成的檔案會被略過。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring OneDrive to Cloudflare R2 transfer in real time" class="img-large img-center" />

## 遷移後驗證

使用**資料夾比對**功能在遷移完成後檢查雙方內容。在比對檢視中開啟 OneDrive 來源與 R2 目的地 — RcloneView 會標示出僅存在於其中一側的檔案。對於關鍵性的遷移，可在任務設定中啟用校驗和驗證，以確保位元組層級的準確性。

驗證完成後，您可以更新 Cloudflare Worker 綁定、CDN 規則或應用程式設定，將指向 OneDrive 的位置改為 R2 儲存桶。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在**遠端管理器**中透過 OAuth 連接 OneDrive。
3. 使用您的 API Token 與帳戶 ID 端點連接 Cloudflare R2。
4. 建立遷移任務，可選擇套用篩選規則，先執行試跑進行預覽，再正式執行。

Cloudflare R2 緊密的 CDN 整合與零出站流量計費方式，使其成為原本存放於 OneDrive 內容的絕佳遷移目的地。

---

**相關指南：**

- [使用 RcloneView 將 Dropbox 遷移至 Cloudflare R2](https://rcloneview.com/support/blog/migrate-dropbox-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 將 Google Drive 遷移至 Cloudflare R2](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 將 Azure Blob 遷移至 Cloudflare R2](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
