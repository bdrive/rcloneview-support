---
slug: migrate-google-drive-to-pcloud-rcloneview
title: "將 Google Drive 遷移至 pCloud — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "使用 RcloneView 直接將您的 Google Drive 檔案搬移至 pCloud。這篇逐步指南說明如何在不將檔案下載到本機的情況下完成雲端對雲端的遷移。"
keywords:
  - migrate Google Drive to pCloud
  - Google Drive to pCloud transfer
  - cloud to cloud migration
  - RcloneView
  - pCloud migration
  - Google Drive migration
  - cloud file transfer
  - move files between clouds
  - pCloud setup rcloneview
  - no-download cloud migration
tags:
  - google-drive
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 遷移至 pCloud — 使用 RcloneView 傳輸檔案

> 將整個 Google Drive 資料庫搬移至 pCloud，過程中無需將任何一個檔案下載到本機電腦——RcloneView 讓雲端對雲端的遷移既快速又可驗證。

無論是團隊還是個人，都經常會超出 Google Drive 的儲存空間方案，或是想為自己的檔案尋求更好的隱私保障。pCloud 憑藉歐洲資料中心選項與終身儲存方案，提供了一個頗具吸引力的替代方案，但若沒有合適的工具，在兩個雲端之間遷移成千上萬個檔案會讓人望而生畏。RcloneView 透過支援直接的雲端對雲端傳輸，消除了這種阻力，讓您的檔案從 Google Drive 傳輸到 pCloud 的過程中完全不經過本機磁碟。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Google Drive 與 pCloud

遷移作業從新增兩個服務商作為遠端開始。在 RcloneView 中，點選 **Remote tab > New Remote**，選擇 **Google Drive**，並透過瀏覽器 OAuth 流程進行驗證——無需 API 金鑰。針對 **pCloud** 重複相同流程，它同樣使用以瀏覽器為基礎的 OAuth 登入。當兩個遠端都出現在您的 Explorer 面板中後，您就能即時並排檢視來源與目的地。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and pCloud remotes in RcloneView" class="img-large img-center" />

連接好兩個遠端後，您就可以在左側面板瀏覽 Google Drive 的資料夾結構，並在右側檢視您的 pCloud 儲存空間。這種雙面板檢視方式讓您能在執行任何傳輸之前，先驗證資料夾結構並確認究竟要遷移哪些目錄。舉例來說，一個要搬移 200 GB 創意素材的內容團隊，可以在提交完整作業之前先確認目的地資料夾的配置。

## 設定遷移作業

前往 **Home tab > Sync** 開啟 4 步驟的作業精靈。在步驟 1 中，選擇您的 Google Drive 來源資料夾與 pCloud 目的地資料夾，然後為作業命名一個具描述性的名稱，例如 `gdrive-to-pcloud-migration`。單向同步方向可確保只有 Google Drive 的變更會被推送至 pCloud——若遷移過程中兩端出現差異，您的 pCloud 檔案不會受到影響。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a cloud-to-cloud sync job from Google Drive to pCloud" class="img-large img-center" />

在步驟 2 中，將 **Number of file transfers** 提高至 4 到 8，以加快大型資料庫的傳輸速度。如果您需要逐位元組的完整性確認，可啟用 **checksum verification**——在遷移具有法律意義的文件或客戶交付項目時，這一點尤其重要。預設的重試次數 3 次會自動處理來自任一服務商的暫時性 API 錯誤，因此短暫的網路異常不會導致整個作業中止。

## 提交前先執行 Dry Run

在傳輸大型 Google Drive 帳戶之前，請在 Job Manager 中點選 **Dry Run**。RcloneView 會掃描兩個雲端，並列出所有將被複製或刪除的檔案，而不會做出任何實際變更。舉例來說，正在遷移五年份專案資料夾的顧問公司，可以在任何一個位元組移動之前，先檢視完整的傳輸計畫，並抓出不相符的資料夾名稱或非預期的刪除項目。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a dry run to preview the Google Drive to pCloud migration" class="img-large img-center" />

## 監控進度並檢視歷史紀錄

當您對 dry run 的結果感到滿意後，即可執行該作業。RcloneView 底部的 **Transferring tab** 會顯示即時傳輸進度：已傳輸的檔案、目前速度以及剩餘工作量。作業完成後，**Job History** 面板會記錄執行時間、傳輸的總資料量以及最終狀態——這對於確認後續排程同步是否與最初的遷移保持一致相當有幫助。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Drive to pCloud migration in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 Remote tab > New Remote 新增 Google Drive，並使用您的 Google 帳戶進行驗證。
3. 透過 Remote tab > New Remote 新增 pCloud，並使用您的 pCloud 帳戶進行驗證。
4. 建立以 Google Drive 為來源、pCloud 為目的地的 Sync 作業。
5. 執行 Dry Run 預覽遷移內容，然後執行該作業。

在雲端服務商之間搬移資料，不需要任何中介下載步驟——RcloneView 讓整個傳輸過程完全在雲端進行，並使每一次執行都可重複、可稽核。

---

**相關指南：**

- [將 OneDrive 遷移至 pCloud — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-onedrive-to-pcloud-rcloneview)
- [管理 pCloud 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [管理 Google Drive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
