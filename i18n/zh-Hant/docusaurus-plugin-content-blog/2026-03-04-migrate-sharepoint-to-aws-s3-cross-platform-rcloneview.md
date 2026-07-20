---
slug: migrate-sharepoint-to-aws-s3-cross-platform-rcloneview
title: "使用 RcloneView 將 SharePoint 檔案遷移至 AWS S3，實現跨平台存取"
authors:
  - tayson
description: "使用 RcloneView 將 Microsoft SharePoint 文件庫遷移或備份至 AWS S3——實現跨平台存取、長期封存或多雲備援。"
keywords:
  - sharepoint to s3
  - sharepoint migration aws
  - sharepoint backup s3
  - migrate sharepoint files
  - sharepoint to aws transfer
  - sharepoint archival s3
  - sharepoint cross platform
  - sharepoint rclone
  - sharepoint s3 sync
  - sharepoint document library backup
tags:
  - RcloneView
  - sharepoint
  - aws-s3
  - cloud-storage
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 SharePoint 檔案遷移至 AWS S3，實現跨平台存取

> SharePoint 對以 Microsoft 為核心的團隊來說非常好用，但當你需要將資料放到 AWS 上，或是需要在 Microsoft 生態系之外存取時，把檔案匯出往往比預期困難。RcloneView 正好能彌補這個落差。

Microsoft SharePoint 與 Microsoft 365 深度整合,是許多企業預設的文件儲存平台。但當你的開發團隊運行在 AWS 上、資料科學管線需要 S3 存取權限,或你單純需要跨平台備份時,從 SharePoint 匯出資料就會變成一項挑戰。RcloneView 可以連接 SharePoint 文件庫,並透過可視化、可驗證的流程將內容傳輸至 S3(或任何雲端儲存)。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要將 SharePoint 遷移至 S3?

- **以 AWS 為基礎的架構**——你的應用程式與運算資源都運行在 AWS 上,資料也需要放在那裡。
- **跨平台存取**——透過通用 API,S3 可從任何語言、框架或平台存取。
- **具成本效益的封存**——S3 Glacier 提供比 SharePoint 更便宜的長期儲存方案。
- **合規需求**——某些法規要求資料需在 Microsoft 生態系之外保有副本。
- **供應商多元化**——降低對單一供應商的依賴。

## 連接 SharePoint

1. 點選 **Add Remote** → 選擇 **SharePoint**(或 **OneDrive for Business**)。
2. 透過 OAuth 進行驗證——RcloneView 會開啟瀏覽器讓你登入 Microsoft 帳號。
3. 選擇你要存取的 SharePoint 網站與文件庫。
4. 儲存——你的 SharePoint 文件庫現在即可瀏覽。

### 連接 AWS S3

1. 點選 **Add Remote** → 選擇 **Amazon S3**。
2. 輸入你的 Access Key ID 與 Secret Access Key。
3. 選擇你的區域。

<img src="/support/images/en/blog/new-remote.png" alt="Add SharePoint and S3 remotes" class="img-large img-center" />

## 遷移流程

### 階段 1:瀏覽與評估

並排檢視 SharePoint 文件庫與你的 S3 儲存桶:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse SharePoint alongside S3" class="img-large img-center" />

### 階段 2:複製

1. 建立一個 **Copy job**:SharePoint 文件庫 → S3 儲存桶。
2. 執行傳輸並即時監控進度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SharePoint to S3 transfer" class="img-large img-center" />

### 階段 3:驗證

透過[資料夾比對](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)確認遷移的完整性:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SharePoint migration to S3" class="img-large img-center" />

### 階段 4:自動化持續同步

在過渡期間保持 SharePoint 與 S3 同步:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SharePoint to S3 sync" class="img-large img-center" />

## 使用情境

- **資料管線擷取**——自動將 SharePoint 文件推送至 S3,供 AWS Lambda、Glue 或 Athena 處理。
- **長期封存**——將舊有的 SharePoint 內容移至 S3 Glacier,節省 Microsoft 授權費用。
- **災難復原**——為重要的 SharePoint 資料維護一份獨立的 S3 副本。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 **SharePoint** 與 **AWS S3** 作為遠端。
3. **複製、驗證、排程**——完整遷移或持續同步。

SharePoint 不必然意味著被單一供應商綁定。RcloneView 讓你的 Microsoft 資料具有可攜性。

---

**相關指南:**

- [SharePoint 遷移至 Google Drive](https://rcloneview.com/support/blog/sharepoint-to-google-drive-migration-rcloneview)
- [新增 AWS S3 與 S3 相容儲存](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
