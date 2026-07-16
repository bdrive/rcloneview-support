---
slug: sync-google-drive-to-digitalocean-spaces-rcloneview
title: "將 Google Drive 同步至 DigitalOcean Spaces — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "將 Google Drive 同步至 DigitalOcean Spaces,取得經濟實惠且相容 S3 的雲端備份方案。使用 RcloneView 的視覺化介面設定自動化同步工作。"
keywords:
  - sync google drive to digitalocean spaces
  - google drive digitalocean backup
  - google drive s3 compatible sync
  - digitalocean spaces backup
  - cloud-to-cloud sync
  - rcloneview google drive sync
  - google drive object storage
  - digitalocean spaces transfer
  - automated cloud backup
  - google drive redundancy
tags:
  - RcloneView
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 同步至 DigitalOcean Spaces — 使用 RcloneView 進行雲端備份

> 將 Google Drive 備份至 DigitalOcean Spaces,能為您 Drive 中的每個檔案提供經濟實惠、相容 S3 的安全網。

Google Drive 在協作與即時編輯方面表現出色,但它並非為封存備份而設計。DigitalOcean Spaces 提供固定費率、相容 S3 的物件儲存服務,每月 5 美元即可享有 250 GB(額外儲存空間為每 GB 0.02 美元),使其成為 Drive 備份的可預測且經濟實惠的目的地。RcloneView 連接這兩項服務,並透過排程工作與即時進度監控使其保持同步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何選擇 DigitalOcean Spaces 作為 Google Drive 備份目的地

DigitalOcean Spaces 提供跨多個地區(NYC、SFO、AMS、SGP、FRA)相容 S3 的物件儲存。其固定定價模式消除了 AWS S3 可能產生的按請求計費的意外費用。對於已在 DigitalOcean 上運行基礎架構的團隊而言,Spaces 能原生整合——從 Google Drive 同步的檔案可立即供 Droplets、Kubernetes 叢集及無伺服器函式存取。

Google Drive 原生的備份選項相當有限。Google Takeout 只能產生一次性匯出,而非持續鏡像。第三方備份工具通常按使用者收費,費用可能與額外的 Google Workspace 授權相當。透過 RcloneView 將 Drive 同步至 Spaces,只需支付 Spaces 的儲存費用,並可在您自己的電腦或伺服器上執行。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## 設定遠端

在 RcloneView 中選擇「Google Drive」作為提供者,新增 Google Drive 遠端。OAuth 流程會透過您的瀏覽器進行驗證——使用您的 Google 帳號登入並授予存取權限。您可以將遠端範圍限定為整個 Drive、特定共用雲端硬碟,或透過設定根資料夾 ID 限定為單一資料夾。

至於 DigitalOcean Spaces,請建立一個相容 S3 的遠端。從提供者下拉選單中選擇「Amazon S3 Compliant」,再選擇「DigitalOcean Spaces」。輸入您的 Spaces 存取金鑰與密鑰(可於 DigitalOcean 控制台的 API > Spaces Keys 中產生)。將端點設定為您偏好的地區,例如 `nyc3.digitaloceanspaces.com` 或 `fra1.digitaloceanspaces.com`。RcloneView 會驗證憑證並列出您現有的 Spaces。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Browsing Google Drive and DigitalOcean Spaces in RcloneView explorer" class="img-large img-center" />

## 建立同步工作

開啟 RcloneView 的工作管理員並建立新工作。將 Google Drive 設為來源,將您的 DigitalOcean Space 設為目的地。選擇「同步」模式以維持完全一致的鏡像,或選擇「複製」模式,即使檔案已從 Drive 中移除,仍可在 Spaces 中保留已刪除的檔案。

Google Drive 會以雲端原生格式儲存 Google 文件、試算表與簡報,不具備傳統的副檔名。RcloneView 會在傳輸過程中自動將這些檔案匯出為對應的 Microsoft Office 格式(`.docx`、`.xlsx`、`.pptx`),確保它們以可用檔案的形式抵達 Spaces。如果您偏好 PDF 或其他格式,可以在遠端設定中自訂匯出格式。

設定平行傳輸以加快初次同步速度。四到八個並行傳輸通常能在 Google Drive 的 API 配額範圍內良好運作。如果您與其他服務共用連線,請設定頻寬限制。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Drive to DigitalOcean Spaces sync" class="img-large img-center" />

## 排程與持續維護

依據您 Drive 內容變動的頻率,將同步工作排程為每晚或每週執行一次。RcloneView 的排程器支援 cron 格式的時間設定,且每次執行僅會傳輸自上次同步以來有變動的檔案。工作歷史面板會記錄每次執行的時間戳記、檔案數量與傳輸量。

DigitalOcean Spaces 內建 CDN 支援。一旦您的 Drive 檔案完成同步,即可啟用 Spaces CDN 以在全球範圍提供檔案服務——這對於分發源自 Google Drive 的行銷素材、文件或媒體檔案相當實用。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Drive to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 驗證您的 Google Drive 帳號,並可選擇將遠端範圍限定為特定資料夾或共用雲端硬碟。
3. 使用您的 API 金鑰與地區端點新增 DigitalOcean Spaces 遠端。
4. 建立同步工作,並排程為定期執行,以實現持續備份。

將 Google Drive 同步至 DigitalOcean Spaces 後,您的檔案便存在於兩個獨立的雲端之中——可防範意外刪除、帳號鎖定與服務商中斷等風險。

---

**相關指南:**

- [輕鬆將 Google Drive 轉移至另一個帳號](https://rcloneview.com/support/blog/transfer-google-drive-to-another-account-easily)
- [使用 RcloneView 將 DigitalOcean Spaces 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [使用 RcloneView 同步 Linode Object Storage、S3 與 Google Drive](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)

<CloudSupportGrid />
