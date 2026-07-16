---
slug: migrate-citrix-sharefile-to-google-drive-rcloneview
title: "將 Citrix ShareFile 遷移至 Google Drive — 使用 RcloneView 傳輸企業檔案"
authors:
  - jay
description: "了解如何使用 RcloneView 將 Citrix ShareFile 遷移至 Google Drive。透過 GUI 移動企業文件與資料夾——無需腳本或 CLI。"
keywords:
  - Citrix ShareFile to Google Drive migration
  - migrate ShareFile to Google Drive
  - ShareFile Google Drive transfer
  - cloud file migration tool
  - RcloneView ShareFile migration
  - enterprise cloud migration
  - ShareFile alternative Google Drive
  - cloud storage migration GUI
tags:
  - sharefile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Citrix ShareFile 遷移至 Google Drive — 使用 RcloneView 傳輸企業檔案

> 將整個 ShareFile 資料庫移動到 Google Drive，無需撰寫任何程式碼——RcloneView 透過視覺化的逐步介面完成傳輸。

Citrix ShareFile 作為企業檔案共享平台為許多組織提供良好的服務,但團隊越來越傾向轉向 Google Drive,因為它與 Google Workspace 有更緊密的整合、即時協作功能,以及熟悉的介面。如果您的組織正在規劃這項轉變,RcloneView 讓雲端到雲端的傳輸變得簡單:連接兩個遠端、設定複製工作,並以完整速度移動檔案,同時提供即時進度監控。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼團隊會從 ShareFile 轉向 Google Drive

ShareFile 是一個功能強大的企業平台,但它需要謹慎的 IT 管理——使用者佈建、資料夾權限,以及外部共享政策都會增加管理負擔。Google Drive,尤其是搭配 Google Workspace 使用時,能簡化協作,讓團隊成員可以直接在瀏覽器中留言、編輯與共享文件,而無需先下載檔案。

對於在 ShareFile 中擁有大量 PDF、簡報、合約與媒體檔案的組織而言,遷移的挑戰在於可靠地移動數萬個檔案,同時不遺失資料夾結構或檔案完整性。RcloneView 透過將 ShareFile 與 Google Drive 都視為可瀏覽的遠端,並使用 rclone 經過驗證的傳輸引擎來處理實際的資料移動,解決了這個問題。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new remote in RcloneView" class="img-large img-center" />

## 在 RcloneView 中連接 Citrix ShareFile

開啟 RcloneView,前往 **Remote tab > New Remote**。從供應商清單中選擇 Citrix ShareFile。您需要提供 ShareFile 子網域主機名稱與 Root Folder ID——這是 ShareFile 中您想要作為遠端根目錄存取的資料夾識別碼。RcloneView 會逐步引導您完成每個必要欄位,儲存後,ShareFile 遠端會以面板形式出現在 Explorer 中,您可以在開始任何傳輸之前瀏覽資料夾並確認資料可以存取。

由於 ShareFile 使用企業級身份驗證,請稍等片刻讓授權流程完成。連接後,您可以瀏覽整個 ShareFile 資料夾階層、檢查檔案大小,並在遷移開始前驗證結構。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer configuration in RcloneView" class="img-large img-center" />

## 設定 Google Drive 並執行遷移

透過 **Remote tab > New Remote** 新增 Google Drive 作為第二個遠端。Google Drive 使用 OAuth 瀏覽器身份驗證——RcloneView 會開啟瀏覽器分頁,您以 Google 帳戶登入,連線便會自動建立,無需手動管理 API 金鑰。

兩個遠端都準備好後,前往 **Home tab > Sync** 開啟 4 步驟同步精靈。將 Citrix ShareFile 設為來源,Google Drive 設為目的地。在正式執行前,使用 **Dry Run** 選項預覽哪些檔案將被複製,而不做任何實際變更——這對於大型企業遷移而言是重要的安全檢查,因為意外覆寫可能造成高昂代價。確認預覽結果無誤後,執行工作並在視窗底部的 Transferring 分頁監控即時進度。

對於在遷移期間仍持續有新檔案傳入 ShareFile 的組織,PLUS 授權可解鎖排程同步功能,讓後續執行能夠自動化,以擷取任何新增的內容。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a migration job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Citrix ShareFile 作為遠端(Remote tab > New Remote),輸入您的子網域主機名稱與 Root Folder ID。
3. 使用 OAuth 瀏覽器登入新增 Google Drive 作為第二個遠端。
4. 開啟 Sync 精靈,將 ShareFile 設為來源、Google Drive 設為目的地,並先執行 Dry Run。
5. 執行遷移並在 Transferring 分頁監控進度。

遷移到 Google Drive 不必意味著數個月的 IT 工作——RcloneView 將複雜的企業遷移壓縮成一個可靠、可重複執行的 GUI 工作流程,讓您的團隊能在每個步驟中執行並驗證。

---

**相關指南:**

- [將 Citrix ShareFile 遷移至 OneDrive 與 SharePoint](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [管理 Citrix ShareFile 儲存空間 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 SharePoint 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-sharepoint-to-google-drive-rcloneview)

<CloudSupportGrid />
