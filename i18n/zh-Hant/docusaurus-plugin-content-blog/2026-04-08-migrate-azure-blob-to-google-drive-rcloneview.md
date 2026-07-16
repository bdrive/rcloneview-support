---
slug: migrate-azure-blob-to-google-drive-rcloneview
title: "使用 RcloneView 將 Azure Blob Storage 遷移至 Google Drive"
authors:
  - tayson
description: "使用 RcloneView 將 Azure Blob Storage 遷移至 Google Drive。涵蓋設定、大型容器處理、驗證與增量同步的逐步指南。"
keywords:
  - rcloneview
  - azure blob to google drive
  - migrate azure storage
  - azure blob migration
  - cloud to cloud migration
  - azure to google workspace
  - cloud storage migration tool
  - azure blob transfer
  - google drive migration gui
  - enterprise cloud migration
tags:
  - RcloneView
  - azure
  - google-drive
  - migration
  - cloud-migration
  - cloud-to-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Azure Blob Storage 遷移至 Google Drive

> Azure Blob Storage 專為開發者打造，但當你的團隊需要協作功能時，Google Drive 才是目的地——**RcloneView** 為物件儲存與消費級雲端之間搭起橋樑。

Azure Blob Storage 擅長為應用程式提供服務——熱、冷、封存三種層級讓開發者能對結構化工作負載進行精細的成本控制。但當業務需求轉向文件協作、共同編輯與 Google Workspace 整合時，將資料從 Azure 容器移至 Google Drive 就變得有其必要。RcloneView 可同時連接這兩個平台，提供視覺化的遷移流程，能夠處理大型容器、保留資料夾結構，並驗證每一個已傳輸的檔案。

本指南涵蓋完整的遷移流程，從設定兩端遠端開始，到為過渡期設置增量同步為止。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要從 Azure Blob 遷移至 Google Drive

進行此遷移的原因通常可歸納為以下幾類：

- **協作需求**：Azure Blob Storage 沒有內建的文件編輯或共享功能。Google Drive 透過 Docs、Sheets 與 Slides 提供即時協作，並可為團隊設定精細的共享權限。
- **Google Workspace 整合**：正在轉向 Google Workspace 的組織，會因為將檔案放在 Google Drive 而受益，因為它能與 Gmail、Calendar、Meet 及其他 Workspace 應用程式整合。
- **成本簡化**：Azure Blob 的定價涉及儲存層級、出口流量費用、讀寫操作以及資料備援選項。Google Workspace 則將儲存空間包裝進每使用者定價中，預算規劃上可能更簡單。
- **終端使用者易用性**：非技術使用者會覺得 Google Drive 遠比 Azure Storage Explorer 或 Azure 入口網站更容易上手。

## 在 RcloneView 中設定 Azure Blob Storage

開啟遠端管理員，新增一個 **Microsoft Azure Blob Storage** 遠端。你需要準備：

- **帳戶名稱**：你的 Azure 儲存帳戶名稱
- **帳戶金鑰** 或 **SAS URL**：來自 Azure 入口網站的主要存取金鑰，或具有讀取與列出權限的共用存取簽章 (Shared Access Signature)

設定完成後，RcloneView 會列出該儲存帳戶內的所有容器。每個容器會以頂層資料夾的形式出現在檔案總管中。進入容器即可瀏覽依前綴（prefix）組織的虛擬目錄結構中的 Blob。

Azure Blob Storage 支援三種存取層級——熱 (Hot)、冷 (Cool) 與封存 (Archive)。RcloneView 可以直接讀取熱層與冷層。封存層的 Blob 必須先重新水合 (rehydrate) 為熱層或冷層才能傳輸。若你的遷移包含封存層的 Blob，請先透過 Azure 入口網站啟動重新水合流程，待該 Blob 可存取後再使用 RcloneView 繼續進行。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## 在 RcloneView 中設定 Google Drive

使用 OAuth 2.0 流程新增 Google Drive 遠端。在遠端管理員中點擊授權，登入你的 Google 帳戶並授予存取權限。對於 Google Workspace 帳戶，你可以連接至「我的雲端硬碟」或特定的共用雲端硬碟。

若目的地是共用雲端硬碟，請在設定過程中選擇它。共用雲端硬碟的擁有權規則不同——檔案歸屬於組織而非個別使用者——因此非常適合團隊遷移使用。

Google Drive 具有每使用者的儲存配額（免費 15 GB，或 Workspace 方案的共用儲存空間）。在開始大型遷移前，請確認目的地有足夠的配額。若在傳輸過程中超出配額，RcloneView 會回報錯誤。

## 處理大型容器

Azure 容器可容納數百萬個 Blob，總容量可達 TB 甚至 PB 等級。一次遷移全部資料是可行的，但需要事先規劃：

- **先列舉**：使用 RcloneView 的檔案總管瀏覽容器，了解資料夾結構與總大小。這有助於你估算遷移所需時間及 Google Drive 的配額需求。
- **依前綴分批遷移**：若容器使用邏輯性的資料夾結構（例如 `/projects/2024/`、`/projects/2025/`），可以一次遷移一個前綴。這樣能讓驗證更容易，也能讓你優先處理使用中的資料。
- **平行傳輸**：在 RcloneView 的設定中增加同時傳輸的數量。Azure Blob Storage 能很好地應付高並行度，而 Google Drive 在適當的速率限制處理下也支援平行上傳。

Google Drive 會強制執行 API 速率限制——大多數帳戶每秒 10 次上傳。RcloneView 會自動節流，並在遇到 403（超出速率限制）或 429 回應時重試，但由於這些限制，大型遷移自然需要更長的時間。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Azure Blob Storage to Google Drive in RcloneView" class="img-large img-center" />

## 執行遷移

開啟雙窗格檔案總管，將 Azure Blob 放在左側，Google Drive 放在右側。選擇來源容器（或特定前綴）以及 Google Drive 上的目的地資料夾。

建立複製或同步工作。RcloneView 會將每個 Blob 作為檔案傳輸，並將基於前綴的目錄結構保留為 Google Drive 上真實的資料夾。檔案名稱、大小與修改時間都會被保留。由於 Google Drive 不支援任意的鍵值中繼資料，因此 Azure 中繼資料（自訂 Blob 屬性）不會被傳輸。

傳輸過程中，即時監控面板會顯示：

- 每個檔案的傳輸進度與速度
- 已完成與剩餘的檔案總數
- 預估完成時間
- 任何錯誤或重試情形

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Azure Blob to Google Drive migration in RcloneView" class="img-large img-center" />

## 驗證遷移結果

傳輸完成後，使用 RcloneView 的比較功能來驗證遷移結果。將 Azure 容器與 Google Drive 目的地資料夾進行比較。比較檢視畫面會標示出：

- **缺失的檔案**：未被傳輸的 Blob（可能是因為錯誤或封存層限制所致）
- **大小不符**：傳輸不完整的檔案
- **相符的檔案**：成功遷移的項目

由於 Azure Blob Storage 使用 MD5 進行內容驗證，而 Google Drive 使用自己的校驗和機制，RcloneView 預設會以檔案大小與修改時間作為比較依據。對於關鍵性的遷移，你可以在工作設定中啟用校驗和驗證，以取得位元組層級的準確性。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Azure to Google Drive migration with compare" class="img-large img-center" />

## 遷移後排程增量同步

遷移很少能瞬間完成——在傳輸進行的同時，新資料可能仍會持續進入 Azure Blob Storage。請在 RcloneView 中設定一個排程同步工作，於過渡期間每天（或更頻繁地）執行。這個增量同步會偵測新增或變更的 Blob，並只將差異部分傳輸至 Google Drive。

當所有系統都已指向 Google Drive，且 Azure 容器不再接收新資料時，執行一次最終同步以捕捉任何遺漏的項目，然後停用該排程工作。

對於較長時間的過渡期，RcloneView 的工作歷史紀錄會提供每次同步執行的完整日誌——包括已傳輸的檔案、移動的位元組數、錯誤與耗時。這份稽核紀錄對於驗證遷移時程與向利害關係人報告都極具價值。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Azure to Google Drive" class="img-large img-center" />

## 管理過渡期

在共存期間，可考慮在 RcloneView 中同時掛載兩個遠端，以便並排存取。使用者可以同時瀏覽 Azure 容器與 Google Drive，確認他們的檔案已可在新位置取得。掛載功能讓使用者能將 Google Drive 作為本機磁碟機代號存取，減輕習慣使用對映磁碟機的團隊在轉換過程中的負擔。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as local drive during migration" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Azure Blob Storage（使用帳戶金鑰或 SAS）與 Google Drive（透過 OAuth）作為遠端。
3. 在雙窗格檔案總管中執行遷移，依容器或前綴分批進行以利管理。
4. 使用比較功能進行驗證，接著排程增量同步，直到過渡完成為止。

Azure Blob Storage 很適合為應用程式提供服務，但當你的團隊需要 Google Workspace 協作時，RcloneView 能乾淨且可驗證地為你搬移資料。

---

**相關指南：**

- [新增 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [即時同步遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
