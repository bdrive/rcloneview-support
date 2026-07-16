---
slug: migrate-box-to-aws-s3-rcloneview
title: "將 Box 遷移至 AWS S3 — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將檔案從 Box 遷移至 AWS S3。透過校驗碼驗證與排程工作，將企業內容傳輸至可擴充的 S3 儲存空間。"
keywords:
  - box to aws s3
  - migrate box to s3
  - box cloud migration
  - aws s3 transfer
  - cloud-to-cloud migration
  - rcloneview box transfer
  - enterprise cloud migration
  - box to amazon s3
  - box backup to s3
  - object storage migration
tags:
  - box
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Box 遷移至 AWS S3 — 使用 RcloneView 傳輸檔案

> 將組織的內容從 Box 搬遷至 AWS S3，可解鎖大規模的可程式化儲存空間——而 RcloneView 能為你處理繁重的傳輸工作。

Box 憑藉其中繼資料、工作流程與治理功能，在企業內容管理方面表現出色。但當你的架構轉向 AWS 原生服務——例如處理上傳的 Lambda 函式、查詢資料湖的 Athena，或透過 CloudFront 提供資產——將檔案儲存在 S3 中可消除連接 Box 與 AWS 堆疊所需的中介軟體。RcloneView 透過視覺化介面，將檔案從 Box 遷移至 S3 儲存桶，並保留資料夾結構且驗證每一次傳輸。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要從 Box 移轉至 AWS S3

AWS S3 提供近乎無限的儲存空間，並在六種儲存類別中提供精細的計價方式——從適合頻繁存取資料的 S3 Standard,到適合長期保存、每 GB 每月僅需 0.00099 美元的 S3 Glacier Deep Archive。Box 按使用者收取授權費用，在企業方案中每位使用者每月可能超過 20 美元,且其儲存空間是集中共用而非個別分配的。

對開發團隊而言,S3 的生態系統無可比擬。事件通知可觸發 Lambda 函式,S3 Select 可就地查詢資料,版本控制與複寫規則可防止資料遺失,IAM 政策則提供精細的存取控制。Box 的 API 雖然功能強大,但主要設計用於內容協作,而非基礎架構層級的儲存操作。遷移至 S3 能讓你的檔案儲存與其餘 AWS 基礎架構保持一致。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and AWS S3 remotes in RcloneView" class="img-large img-center" />

## 設定 Box 與 S3 遠端

在 RcloneView 中選擇「Box」作為提供者類型,以新增 Box 遠端。OAuth 流程會開啟瀏覽器進行 Box 驗證。使用你的 Box 帳號憑證登入並授權 RcloneView。該遠端會連接至你的 Box 根目錄,包括所有你擁有及與你共用的資料夾。

對於 AWS S3,建立一個新遠端並選擇「Amazon S3」。輸入你的 AWS Access Key ID 與 Secret Access Key,或者若 RcloneView 運行在 EC2 執行個體上,可使用 IAM 角色。選擇目標區域並指定儲存桶名稱。RcloneView 會驗證憑證並確認對該儲存桶的存取權限。若你需要建立新的儲存桶,請先在 AWS 主控台中依你偏好的區域、加密與版本控制設定進行建立。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Box to S3 cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## 執行遷移

使用雙窗格瀏覽器,一側瀏覽 Box、另一側瀏覽 S3。選擇你要遷移的 Box 資料夾——整個部門目錄、專案封存或特定內容樹狀結構。在另一側導覽至目標 S3 前綴。

若要進行受管理的遷移,請在工作管理員中建立複製工作。將 Box 設為來源、S3 設為目的地。使用「複製」模式來傳輸檔案而不從 Box 中移除,讓你保有回溯路徑。Box 的 API 使用 SHA-1 校驗碼,而 S3 儲存 MD5 與 ETag 雜湊值——RcloneView 預設使用檔案大小與修改時間進行比對,並提供選用的校驗碼驗證功能。

Box 對 API 呼叫實施速率限制(企業帳戶約為每秒 10 次 API 呼叫)。RcloneView 會透過自動重試與指數退避機制遵守這些限制。對於包含數十萬個檔案的大型遷移,請使用排程時段將工作分散於多天執行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a Box to AWS S3 migration job in RcloneView" class="img-large img-center" />

## 遷移後的驗證與切換

傳輸完成後,使用 RcloneView 的比較功能驗證遷移結果。並排開啟兩個遠端,執行資料夾比較以檢查檔案數量、大小與結構。檢視工作紀錄中是否有任何跳過或發生錯誤的檔案,並重新執行該工作以補齊這些項目。

請考量依存取模式設定 S3 儲存桶的儲存類別。經常存取的專案檔案適合放在 S3 Standard,而封存內容則可透過生命週期政策移至 S3 Intelligent-Tiering 或 Glacier。在轉換期間,請讓 Box 遠端在 RcloneView 中保持啟用,持續執行增量同步工作,直到所有使用者都已將其工作流程遷移至 S3。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to S3 migration transfers" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在建立 Box 遠端時,透過 OAuth 驗證你的 Box 帳號。
3. 使用 IAM 憑證新增你的 AWS S3 遠端,並選擇目標儲存桶與區域。
4. 建立一個從 Box 到 S3 的複製工作,設定速率限制處理方式,並針對大型資料集將其排程於多天執行。

在確認所有內容都已於 S3 中驗證完成後,轉換你的應用程式並於團隊完成切換後淘汰 Box 儲存空間。

---

**相關指南:**

- [使用 RcloneView 將 Box 遷移至 SharePoint 與 OneDrive](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [使用 RcloneView 將 Box 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [使用 RcloneView 將 Box 儲存空間掛載為網路磁碟機](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
