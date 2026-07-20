---
slug: migrate-google-drive-to-cloudflare-r2-rcloneview
title: "使用 RcloneView 將 Google Drive 遷移至 Cloudflare R2"
authors:
  - tayson
description: "使用 RcloneView 將 Google Drive 檔案遷移至 Cloudflare R2。逐步指南涵蓋設定、Google 文件轉換、驗證，以及零流出費用的優勢。"
keywords:
  - rcloneview
  - google drive to cloudflare r2
  - migrate google drive
  - google drive migration tool
  - cloudflare r2 migration
  - cloud to cloud migration
  - google docs export
  - zero egress migration
  - google drive backup r2
  - cloud storage migration gui
tags:
  - RcloneView
  - google-drive
  - cloudflare-r2
  - migration
  - cloud-migration
  - cloud-to-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Google Drive 遷移至 Cloudflare R2

> 從 Google Drive 遷移到 Cloudflare R2 可省去流出費用，並讓您以 S3 相容的方式存取資料 —— **RcloneView** 以視覺化方式處理整個遷移過程。

Google Drive 是強大的協作平台，但隨著儲存需求增加、資料存取模式改變，許多團隊開始轉向物件儲存，以獲得更好的擴充性與 API 彈性。Cloudflare R2 提供 S3 相容的儲存服務並且零流出費用，對於需要以程式化方式提供服務的資料而言，是極具吸引力的遷移目的地。RcloneView 在這兩種截然不同的儲存模型之間搭起橋樑，在單一 GUI 中處理 Google 文件格式轉換、大型檔案傳輸,以及遷移後的驗證。

本指南將完整說明遷移流程 —— 從設定兩端遠端開始，到驗證每個檔案都完整送達為止。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要從 Google Drive 遷移到 Cloudflare R2

Google Drive 的定價從每月 1.99 美元起（100 GB），並可擴展至 Google Workspace 下的企業方案。雖然對協作而言相當實惠，但 Google Drive 並非為程式化資料存取而設計。API 速率限制、缺乏 S3 相容性，以及每位使用者的儲存配額，使其不適合用於提供靜態資源、代管資料集或供應 CI/CD 流程。

Cloudflare R2 解決了這些限制。每 GB 每月僅需 0.015 美元且零流出費用，對於讀取密集型工作負載而言，R2 顯著更為經濟。其 S3 相容 API 意味著現有工具與 SDK 無需修改即可運作。如果您的資料原本存放於 Google Drive，但現在需要透過 S3 端點存取，遷移至 R2 就是合理的下一步。

## 在 RcloneView 中設定 Google Drive

開啟遠端管理員並新增一個 Google Drive 遠端。RcloneView 使用 OAuth 2.0 —— 點選授權，登入您的 Google 帳號並授予存取權限。權杖會儲存在您本機的 rclone 設定中。

若您正從擁有共用雲端硬碟的 Google Workspace 帳號遷移，可將 RcloneView 設定為存取特定的共用雲端硬碟，而不僅是個人的「我的雲端硬碟」。這對於資料分散於各團隊雲端硬碟的組織遷移而言相當重要。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive remote in RcloneView" class="img-large img-center" />

## 在 RcloneView 中設定 Cloudflare R2

將 R2 新增為 S3 相容遠端。在遠端管理員中選擇 **Amazon S3 Compatible**，並設定：

- **Provider**：Cloudflare
- **Access Key ID** 與 **Secret Access Key**：從 Cloudflare 控制台產生
- **Endpoint**：`https://<account-id>.r2.cloudflarestorage.com`

在開始遷移之前，先於 Cloudflare 控制台或透過 RcloneView 的檔案總管建立目標儲存貯體。選擇能反映資料來源的貯體名稱 —— 例如 `gdrive-archive-2026` —— 以便日後容易辨識。

## 處理 Google 文件格式轉換

這是從 Google Drive 遷移時最關鍵的考量。原生 Google 格式 —— 文件、試算表、簡報、繪圖 —— 並非傳統意義上的檔案。它們僅存在於 Google 的生態系統中，在磁碟上的實際大小為零位元組。

當 RcloneView 匯出這些檔案時，會將其轉換為標準格式：

- **Google 文件** 轉換為 `.docx`（Microsoft Word）
- **Google 試算表** 轉換為 `.xlsx`（Microsoft Excel）
- **Google 簡報** 轉換為 `.pptx`（Microsoft PowerPoint）

您可以在遠端設定中設定匯出格式。若您的團隊偏好 PDF 或 OpenDocument 格式，可在開始遷移前進行調整。請注意，匯出的檔案會失去 Google 特有的功能，例如留言、建議模式與即時協作連結。

對於已經是標準格式的檔案（已上傳的 PDF、圖片、ZIP），傳輸為直接的逐位元複製，無需轉換。

## 執行遷移

設定好兩端遠端後，開啟雙窗格檔案總管。將 Google Drive 放在左側，R2 儲存貯體放在右側。您可以遷移整個雲端硬碟，也可以選擇特定資料夾。

若要進行完整遷移，請使用同步作業。RcloneView 會列舉 Google Drive 上的所有檔案、匯出原生 Google 格式，並將所有內容傳輸至 R2。即時監控儀表板會顯示每個檔案的進度、傳輸速度與預估完成時間。

對於大型遷移（數百 GB 以上），可考慮以下優化：

- **提高並行傳輸數**：R2 能妥善處理高並行度。將並行傳輸數提高至 8-16，以最大化傳輸量。
- **使用頻寬排程**：若在辦公時間進行遷移，可限制頻寬以避免影響其他網路使用者。
- **分階段執行**：逐資料夾遷移，而非一次全部進行。這樣更容易驗證每一批次，並在中斷後恢復。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to R2 migration progress in RcloneView" class="img-large img-center" />

## 使用比較功能驗證遷移結果

遷移完成後，在 Google Drive 與 R2 之間執行 RcloneView 的比較操作。比較檢視畫面會標示出：

- **僅存在於來源的檔案**：傳輸失敗或被跳過的項目
- **僅存在於目的地的檔案**：非預期的額外檔案（少見，但值得檢查）
- **內容不同的檔案**：大小或雜湊值不符，表示傳輸不完整

請注意，Google 文件檔案永遠會顯示為不同，因為匯出的格式與零位元組的 Google 原生格式不同。請將重點放在非原生檔案上，以進行有意義的比較。若任何標準檔案顯示不符，請重新執行同步，僅傳輸缺漏或變更的項目。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to R2 migration with compare in RcloneView" class="img-large img-center" />

## 遷移完成後：增量同步

完成初步遷移後，您可能希望在過渡期間讓 R2 與 Google Drive 保持同步。可在 RcloneView 中設定排程同步作業 —— 依需求選擇每日或每小時執行。這能確保新增至 Google Drive 的檔案自動複製到 R2，直到您完全切換為止。

一旦過渡完成，且所有存取端點都指向 R2，您就可以停用同步作業，並選擇性地封存或刪除 Google Drive 中的資料。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Google Drive to R2 in RcloneView" class="img-large img-center" />

## 作業歷史與稽核紀錄

每一次遷移執行都會記錄在 RcloneView 的作業歷史中。您可以檢視每次執行所傳輸的檔案數量、移動的位元組數、遇到的錯誤，以及所耗費的時間。這為合規目的提供了稽核紀錄，並有助於排解遷移過程中或之後出現的任何問題。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Google Drive to R2 migration runs" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 新增您的 Google Drive，並將 Cloudflare R2 新增為 S3 相容遠端。
3. 設定 Google 文件匯出格式（docx、xlsx、pptx 或您偏好的其他格式）。
4. 使用雙窗格檔案總管執行遷移，並以比較功能驗證結果。

Google Drive 擅長協作，但當您需要 S3 相容、無流出費用的儲存空間時，Cloudflare R2 就是理想的目的地 —— 而 RcloneView 正是連接兩者的橋樑。

---

**相關指南：**

- [新增 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [新增 AWS S3 及 S3 相容儲存](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
