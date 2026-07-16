---
slug: migrate-box-to-onedrive-rcloneview
title: "將 Box 遷移至 OneDrive — 使用 RcloneView 傳輸檔案"
authors:
  - morgan
description: "使用 RcloneView 將檔案從 Box 遷移至 Microsoft OneDrive 的逐步指南。快速、可靠的雲對雲檔案傳輸，並提供完整的進度監控。"
keywords:
  - migrate box to onedrive
  - box to onedrive transfer
  - cloud migration box onedrive
  - rcloneview box onedrive
  - box onedrive migration guide
  - transfer files from box to onedrive
  - box cloud migration tool
  - onedrive migration from box rcloneview
  - move files box to microsoft onedrive
tags:
  - box
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Box 遷移至 OneDrive — 使用 RcloneView 傳輸檔案

> RcloneView 讓從 Box 遷移到 Microsoft OneDrive 變得簡單直接——連接兩個帳戶、設定傳輸工作，即可移動整個檔案庫，完全不需要開啟瀏覽器操作。

從 Box 轉換到 Microsoft OneDrive 的組織都面臨同樣反覆出現的挑戰：如何可靠地搬移數千個檔案，同時不遺失資料、不重複內容，也不必忍受緩慢的手動下載再上傳流程。RcloneView 透過桌面 GUI 處理整個遷移過程，以雲對雲的方式直接在兩個雲端服務之間傳輸檔案，同時讓您即時監控進度。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Box 與 OneDrive

第一步是將兩個帳戶都新增為 RcloneView 中的遠端。在 **Remote** 分頁中，點選 **New Remote** 並選擇 **Box**。RcloneView 會開啟瀏覽器視窗進行 OAuth 驗證——登入並授予存取權限，然後返回應用程式。對 **OneDrive** 重複相同流程，它同樣採用瀏覽器 OAuth 登入方式。

儲存兩個遠端後，透過 Settings 分頁中的 **Layout** 選項，並排開啟兩個 Explorer 面板。在左側面板中瀏覽至您的 Box 來源資料夾，並在右側面板中瀏覽至您的 OneDrive 目標資料夾。這種雙面板檢視能讓您在傳輸開始前，清楚掌握現有的結構。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and OneDrive as remotes in RcloneView" class="img-large img-center" />

如果您要遷移的是 Box for Business 帳戶，請在遠端設定中設定 `box_sub_type = enterprise`——設定精靈中已包含此欄位。若使用 OneDrive for Business 或 SharePoint 文件庫，請在 OneDrive 設定步驟中選擇對應的帳戶類型。兩種企業版本都是透過瀏覽器 OAuth 進行相同方式的驗證。

## 執行遷移工作

設定好兩個遠端後，開啟 **Job Manager** 並點選 **Add Job**。選擇您的 Box 資料夾作為來源，OneDrive 目標資料夾作為目的地。對於一次性遷移，**Copy** 工作類型會在填入 OneDrive 的同時保留 Box 中的所有檔案——只有在您希望檔案在傳輸後從 Box 移除時，才使用 **Move**。

在進階設定中，啟用 **checksum verification**（校驗和驗證）以確認每個檔案都完整送達。這對於大型遷移特別有價值，因為網路中斷可能會在不知不覺中產生損毀的副本。同時設定重試次數（預設值：3），以處理任一供應商的暫時性 API 錯誤，而無需手動重新啟動。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy job from Box to OneDrive in RcloneView" class="img-large img-center" />

在執行完整傳輸之前，請使用 **Dry Run** 模式模擬此工作。預覽畫面會準確顯示哪些檔案將被複製，協助您在投入頻寬與時間進行實際遷移之前，先發現資料夾結構不符或意外龐大的檔案等問題。

## 監控進度與驗證結果

在傳輸過程中，RcloneView 介面底部的 **Transferring** 分頁會顯示即時進度：目前速度、已完成的檔案數、已傳輸的總資料量，以及經過的時間。對於大型遷移——例如法務團隊搬移十年份的合約文件——這種可視性對於估算作業所需時間，以及規劃工作時段安排至關重要。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring Box to OneDrive transfer progress in RcloneView" class="img-large img-center" />

工作完成後，請查看 **Job History** 面板以取得完整的執行摘要。若有任何檔案發生錯誤，日誌會顯示確切的路徑與錯誤訊息，讓您可以個別處理，而不必重新執行整個工作。查看歷史記錄後，可使用 RcloneView 的 **Folder Compare** 功能，並排比對 Box 來源與 OneDrive 目的地，在停用 Box 帳戶之前確認每個檔案都已正確傳輸。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to OneDrive migration in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Remote > New Remote** 使用 OAuth 驗證新增 **Box** 作為遠端。
3. 使用 OAuth 驗證新增 **OneDrive** 作為第二個遠端。
4. 在 Job Manager 中建立 **Copy** 工作，以 Box 為來源、OneDrive 為目的地，啟用校驗和驗證後執行。

透過 RcloneView，從 Box 遷移到 OneDrive 是一項乾淨、可稽核的作業——無需手動下載、無需中介儲存空間，並從頭到尾提供完整的進度可視性。

---

**相關指南：**

- [使用 RcloneView 將 Box 同步至 Google Drive](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [使用 RcloneView 進行零停機 Box 到 Dropbox 遷移](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [使用 RcloneView 將 Box 遷移至 Backblaze B2](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
