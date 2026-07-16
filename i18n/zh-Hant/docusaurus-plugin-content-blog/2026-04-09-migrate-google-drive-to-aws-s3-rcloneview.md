---
slug: migrate-google-drive-to-aws-s3-rcloneview
title: "使用 RcloneView 將 Google Drive 遷移至 AWS S3"
authors:
  - tayson
description: "使用 RcloneView 從 Google Drive 遷移至 AWS S3。逐步設定兩個遠端、規劃傳輸、搬移資料並驗證遷移結果。"
keywords:
  - rcloneview
  - google drive to aws s3
  - migrate google drive to s3
  - google drive s3 migration
  - google drive to amazon s3
  - cloud storage migration
  - google drive backup to s3
  - google workspace to aws
  - rclone google drive s3
  - cloud to cloud migration gui
tags:
  - RcloneView
  - google-drive
  - amazon-s3
  - migration
  - cloud-migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Google Drive 遷移至 AWS S3

> 從 Google Drive 遷移到 AWS S3，能讓你獲得物件層級的控制能力、生命週期政策，以及基礎設施等級的耐用性 —— **RcloneView** 透過視覺化介面完成整個傳輸過程。

Google Drive 在協作與文件編輯方面表現出色，但對於需要精細存取控制、程式化整合或長期封存的組織而言，往往會逐漸超出其能力範圍。AWS S3 提供 11 個 9 的耐用性、可轉移至 Glacier 冷儲存的生命週期規則，以及以 IAM 為基礎的存取政策。從 Google Drive 遷移到 S3 看似令人卻步——不同的驗證模型、不同的檔案語意，以及可能高達數 TB 的資料量。RcloneView 透過視覺化 GUI 簡化整個流程，將複雜的細節處理於幕後。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要從 Google Drive 遷移至 AWS S3

Google Drive 以 Google 特有的中繼資料（MIME 類型、共用權限與原生文件格式，如 Docs、Sheets、Slides）將檔案儲存為物件。AWS S3 則以原始位元組加上使用者自訂中繼資料的方式儲存物件，為程式化存取提供更大的彈性。促成此類遷移的常見原因包括：

- **成本最佳化**：S3 Standard 的費用約為每 GB 每月 0.023 美元，而 S3 Glacier Deep Archive 則降至每 GB 每月 0.00099 美元。對於很少存取的大型資料集，S3 遠比 Google Workspace 儲存方案便宜。
- **基礎設施整合**：在 AWS 上運行的應用程式可透過 IAM 角色直接存取 S3，無需 OAuth 權杖與 API 配額。
- **合規性**：S3 支援 Object Lock 以符合 WORM 合規要求、基於 IP 限制的儲存貯體政策，以及用於稽核記錄的 CloudTrail。
- **生命週期管理**：可依據檔案存放時間自動將檔案從 Standard 轉移至 Infrequent Access，再轉移至 Glacier，在無需人工介入的情況下降低成本。

## 設定兩個遠端

### Google Drive 遠端

開啟 RcloneView 的遠端管理員並新增一個 Google Drive 遠端。透過 OAuth 授權，並選擇完整存取範圍。若你需要遷移共用雲端硬碟（Shared Drives），請在設定過程中選擇目標共用雲端硬碟。若遷移規模較大，建議註冊你自己的 Google Cloud 專案用戶端 ID，以將 API 配額上限提高到預設每 100 秒 10,000 次查詢以上。

### AWS S3 遠端

在遠端管理員中新增一個 S3 遠端。提供你的 AWS Access Key ID 與 Secret Access Key，選擇目標區域，並指定儲存貯體名稱。若該儲存貯體尚不存在，你可以直接從 RcloneView 或 AWS 主控台建立。至於儲存類別，若為頻繁存取的資料請選擇 Standard，若為封存性質的遷移則可選擇 Standard-IA。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and AWS S3 remotes in RcloneView" class="img-large img-center" />

## 規劃遷移

在傳輸資料前，先評估遷移範圍：

1. **容量稽核**：使用 RcloneView 的儲存空間分析功能，確認 Google Drive 的總容量。這有助於估算 S3 費用與傳輸所需時間。
2. **Google 文件處理**：原生 Google 文件（Docs、Sheets、Slides）在 Drive 上沒有檔案大小。遷移過程中，RcloneView 會將其匯出為標準格式（docx、xlsx、pptx）。請先決定你是否需要這些匯出結果，或者可以略過。
3. **資料夾結構**：Google Drive 允許使用一些 S3 處理方式不同的檔名字元。RcloneView 會自動編碼特殊字元，但仍建議檢查你的資料夾結構，留意是否有極深的巢狀結構或過長的路徑名稱。
4. **頻寬**：以 100 Mbps 的速度傳輸 1 TB 資料，大約需要 22 小時。建議在離峰時段排程遷移，或設定頻寬限制，以免影響其他作業。

## 執行遷移

在左側窗格開啟 Google Drive，右側窗格開啟 S3。前往 Drive 上的來源資料夾，以及 S3 上的目標前綴（prefix）。你可以複製整個 Drive，也可以選擇特定資料夾。

RcloneView 會使用 Google Drive 的 MD5 校驗碼，並與 5 GB 以下檔案的 S3 ETag 進行比對。對於以分段（multipart）方式上傳的較大檔案，S3 ETag 並非標準 MD5——在這種情況下，RcloneView 會改用檔案大小與修改時間進行比對。

在初次遷移時，建議使用複製作業而非同步作業，以避免有任何刪除目的地檔案的風險。待初次傳輸完成並驗證資料後，你便可以切換為同步以進行後續的持續複製。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Google Drive to AWS S3 in RcloneView two-pane explorer" class="img-large img-center" />

## 驗證遷移結果

傳輸完成後，使用 RcloneView 的比較功能，確認每個檔案都已成功送達。選擇 Google Drive 來源與 S3 目的地並執行比較。內容相符的檔案會顯示為相同；有差異或遺失的檔案則會被標示出來。

對於關鍵性的遷移，可執行檢查（check）作業，在兩側都計算校驗碼並回報任何差異。這雖然會增加所需時間，但能提供資料完整性的加密驗證。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to S3 migration in RcloneView" class="img-large img-center" />

## 遷移後：持續同步或正式切換

若你在過渡期間同時運行 Google Drive 與 S3，可在 RcloneView 中排程每日同步作業，讓 S3 隨時與 Drive 的變更保持一致。當你準備好正式切換時，只需停用同步作業並淘汰 Google Drive 儲存空間即可。

對於正從 Google Workspace 轉移到以 AWS 為核心架構的組織而言，此類遷移通常只是更大規模平台轉換工作的其中一環。RcloneView 可負責資料搬移的工作，讓你的團隊專注於應用程式與工作流程的變更。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling ongoing Google Drive to S3 sync in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在遠端管理員中新增 Google Drive 與 AWS S3 遠端。
3. 執行儲存空間稽核，估算遷移的規模與成本。
4. 執行從 Drive 到 S3 的複製作業，並使用比較功能進行驗證。
5. 可選擇性地排程持續同步，直到你準備好正式切換為止。

Google Drive 擅長協作，但 AWS S3 提供了正式生產環境所需的耐用性、生命週期管理與程式化存取能力。RcloneView 以直覺易懂的方式，串連起這兩者之間的遷移路徑。

---

**相關指南：**

- [新增 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [新增 AWS S3 與相容 S3 服務](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [排程作業](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
