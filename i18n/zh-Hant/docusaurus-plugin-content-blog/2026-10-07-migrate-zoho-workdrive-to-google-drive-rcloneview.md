---
slug: migrate-zoho-workdrive-to-google-drive-rcloneview
title: "將 Zoho WorkDrive 遷移到 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - kai
description: "使用 RcloneView 將 Zoho WorkDrive 遷移到 Google Drive：選擇區域，連接兩個遠端，先 Dry Run，再雲端對雲端複製並驗證結果。"
keywords:
  - 將 Zoho WorkDrive 遷移到 Google Drive
  - Zoho WorkDrive 傳輸
  - Zoho WorkDrive 匯出
  - 將 Zoho 檔案移到 Google Drive
  - 雲端對雲端遷移
  - RcloneView
  - rclone GUI
  - Zoho WorkDrive 備份
  - Google Drive 同步
  - 資料夾比較
tags:
  - RcloneView
  - zoho
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Zoho WorkDrive 遷移到 Google Drive — 使用 RcloneView 傳輸檔案

> 透過預覽與驗證，將 Zoho WorkDrive 的團隊資料夾直接在雲端之間複製到 Google Drive。

當公司從 Zoho 套件轉移到 Google Workspace 時，WorkDrive 中的團隊資料夾也需要一併遷移。全部下載再重新上傳既緩慢又難以稽核。RcloneView 連接兩個服務並在雲端之間傳輸檔案，讓您可以在單一視窗中預覽、執行並驗證遷移。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Zoho WorkDrive 與 Google Drive

Zoho WorkDrive 需要一項額外設定：建立遠端時必須選擇 **Region**，且必須與您 Zoho 帳號所在的資料中心一致。Google Drive 使用 OAuth 瀏覽器登入。開啟 Remote 分頁，點選 **New Remote**，依序新增每個服務。

基本同步與資料夾比較功能可在 FREE 授權下使用。

<img src="/support/images/en/blog/new-remote.png" alt="建立 Zoho WorkDrive 與 Google Drive 遠端" class="img-large img-center" />

## 規劃資料夾對應

開啟兩個 Explorer 面板，左側為 WorkDrive，右側為 Google Drive。瀏覽團隊資料夾，並決定每個資料夾的目的位置。例如，擁有 150 GB 季度報告的財務團隊可以對應到專用的共用雲端硬碟資料夾，而個人檔案則放入我的雲端硬碟。

對大型資料夾使用 Get Size 來估算傳輸時間。在 Sync 精靈的篩選步驟中，可以使用最大檔案時間長度或自訂篩選條件排除不需要的資料夾或檔案類型，例如舊的封存檔。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="並排顯示 Zoho WorkDrive 與 Google Drive" class="img-large img-center" />

## 先 Dry Run，再傳輸

建立一個從 WorkDrive 到 Google Drive 的 Copy 作業，並先執行 **Dry Run**。它會在不做任何變更的情況下列出將被複製的檔案。預覽無誤後，執行作業並在 Transferring 分頁中查看進度。

若發生錯誤，作業會依設定的次數重試，Job History 會記錄每次執行的狀態、大小與檔案數量。再次執行時只會複製缺少的檔案。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行遷移作業" class="img-large img-center" />

## 驗證並保留紀錄

在 Home 分頁中開啟 **Compare**，比對 WorkDrive 與 Google Drive。篩選僅存在於左側的檔案，找出未傳輸的內容，然後將其複製過去。Job History 提供附有時間戳記的紀錄，可作為遷移驗收的存檔。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho WorkDrive 遷移的 Job History" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Zoho WorkDrive（選擇正確的 Region）與 Google Drive 遠端。
3. 建立 Copy 作業，並執行 Dry Run 預覽傳輸。
4. 執行作業，並在停用 WorkDrive 之前以 Folder Compare 進行驗證。

在比較結果乾淨之前保持來源不變，可讓切換更加低風險。

---

**相關指南：**

- [管理 Zoho WorkDrive 雲端同步](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [將 Zoho WorkDrive 同步到 OneDrive](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [修復 Zoho WorkDrive 同步錯誤](https://rcloneview.com/support/blog/fix-zoho-workdrive-sync-errors-rcloneview)

<CloudSupportGrid />
