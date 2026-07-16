---
slug: migrate-onedrive-to-wasabi-rcloneview
title: "將 OneDrive 遷移到 Wasabi — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "使用 RcloneView 將檔案從 Microsoft OneDrive 移轉到 Wasabi 熱雲端儲存。無需任何 CLI 指令的 OneDrive 到 Wasabi 遷移逐步指南。"
keywords:
  - migrate OneDrive to Wasabi
  - OneDrive Wasabi transfer
  - OneDrive to S3 migration
  - Wasabi cloud backup from OneDrive
  - rclone OneDrive Wasabi
  - cloud-to-cloud migration OneDrive
  - move Microsoft OneDrive files to Wasabi
  - RcloneView OneDrive migration
tags:
  - onedrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 OneDrive 遷移到 Wasabi — 使用 RcloneView 進行雲端備份

> 使用 RcloneView 將檔案從 Microsoft OneDrive 傳輸到 Wasabi 相容 S3 的熱雲端儲存 — 直接雲端對雲端傳輸，無需經過中間下載步驟。

許多組織一開始使用 Microsoft 365 內建的 OneDrive，但隨著資料量增加，逐漸發現需要一個專用、具成本效益的備份層。Wasabi 相容 S3 的熱雲端儲存是熱門的目的地：具有可預測的固定費率儲存費用，且無傳出流量費用。RcloneView 透過 rclone 的後端橋接這兩項服務，讓您可以透過視覺化介面將 OneDrive 內容遷移到 Wasabi 儲存桶 — 無需撰寫任何腳本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 OneDrive 與 Wasabi

先新增 OneDrive：**遠端頁籤 → 新增遠端 → Microsoft OneDrive**，透過瀏覽器 OAuth 登入進行驗證，並確認遠端已儲存。若為個人版 OneDrive，此流程幾乎是即時完成。若為 OneDrive for Business，您可能需要在驗證過程中選擇正確的租用戶。

接著新增 Wasabi：**新增遠端 → Amazon S3 相容 → Wasabi**。輸入您的 Wasabi access key、secret key，並為您儲存桶的所在地區選擇正確的端點（例如 `s3.us-east-1.wasabisys.com`）。Wasabi 的 S3 API 與 rclone 的 S3 後端相容，不需要任何特殊設定。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Wasabi remotes in RcloneView" class="img-large img-center" />

## 規劃遷移範圍

以雙面板配置開啟檔案總管 — 左側為 OneDrive，右側為 Wasabi。瀏覽 OneDrive 樹狀結構以找出您想遷移的資料夾。法務部門可能正在搬移 `Contracts/2020-2024/` 封存資料，而設計公司可能要遷移含有 500 GB 分層檔案的 `Client-Assets/` 資料夾。

在傳輸前，於來源資料夾使用 RcloneView 的**取得大小**右鍵選項，計算資料總量。若頻寬需與其他使用者或服務共享，對於大型遷移，可將工作設定在夜間執行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Viewing OneDrive to Wasabi transfer in RcloneView" class="img-large img-center" />

## 執行同步工作並進行驗證

在工作管理員中建立同步工作：來源為您的 OneDrive 路徑，目的地為您的 Wasabi 儲存桶路徑。在步驟 2 中，啟用**校驗碼驗證**，以便在傳輸後驗證每個檔案的雜湊值 — 這對於需要合規性的封存資料至關重要。將並行傳輸數設定為 6–8，以在速度與 API 穩定性之間取得平衡。

先執行試跑（Dry Run）以預覽操作清單。檔名含有特殊字元的 OneDrive 項目（在使用者產生內容中很常見）會被標記出來，需要進行編碼調整。在試跑後檢視日誌頁籤，以便在正式傳輸前發現任何問題。

遷移完成後，使用 RcloneView 的**資料夾比較**功能，以視覺化方式比對 OneDrive 來源與 Wasabi 目的地 — 在停用 OneDrive 副本之前，確認檔案數量與大小相符。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive and Wasabi folders after migration in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在新增遠端精靈中透過 OAuth 登入新增 OneDrive，並透過 S3 憑證新增 Wasabi。
3. 使用資料夾比較評估遷移範圍，然後在工作管理員中建立同步工作。
4. 啟用校驗碼驗證，執行試跑，接著執行完整遷移。

透過 RcloneView 將資料從 OneDrive 遷移到 Wasabi，可讓您獲得經過驗證、可稽核的遷移軌跡 — 工作歷史記錄與傳輸日誌會自動儲存。

---

**相關指南：**

- [使用 RcloneView 將 OneDrive 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [使用 RcloneView 將 OneDrive 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [使用 RcloneView 管理 OneDrive 雲端同步與備份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
