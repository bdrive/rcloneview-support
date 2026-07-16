---
slug: migrate-dropbox-to-proton-drive-rcloneview
title: "將 Dropbox 遷移至 Proton Drive — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "將您的 Dropbox 檔案移轉至 Proton Drive，享有端對端加密儲存。了解如何透過 RcloneView 以簡單幾個步驟完成雲端對雲端遷移。"
keywords:
  - migrate Dropbox to Proton Drive
  - Dropbox to Proton Drive transfer
  - cloud-to-cloud migration RcloneView
  - Proton Drive backup
  - Dropbox migration privacy
  - move files Dropbox Proton Drive
  - encrypted cloud storage migration
  - RcloneView cloud transfer guide
  - switch from Dropbox to Proton Drive
  - Proton Drive sync RcloneView
tags:
  - dropbox
  - proton-drive
  - migration
  - cloud-to-cloud
  - privacy
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Dropbox 遷移至 Proton Drive — 使用 RcloneView 傳輸檔案

> RcloneView 讓您可以將整個 Dropbox 資料庫直接以雲端對雲端方式傳輸至 Proton Drive——無需下載至本機、無需手動重新上傳，也不需要使用命令列。

對許多團隊而言，離開 Dropbox 的決定往往取決於資料隱私。Dropbox 會以明文形式將檔案儲存在其伺服器上，這代表 Dropbox 員工與法律機關持有搜查令即可存取您的資料。由 ProtonMail 團隊打造的 Proton Drive，會在檔案送達 Proton 伺服器之前於用戶端進行加密——即便是 Proton 也無法讀取您的內容。RcloneView 透過同時連接兩項服務，並以雲端對雲端方式直接搬移資料，簡化了整個遷移過程，同時全程保留資料夾結構與檔案完整性。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 新增 Dropbox 與 Proton Drive 為遠端

在傳輸檔案之前，請先將兩個雲端帳戶新增至 RcloneView。前往 **Remote tab > New Remote**，選擇 **Dropbox**。RcloneView 會開啟瀏覽器視窗進行 OAuth 驗證——登入 Dropbox 並授予存取權限。授權完成後，該遠端會自動儲存。

對 Proton Drive 重複相同流程：從遠端清單中選擇 **Proton Drive**，輸入您的 Proton 電子郵件地址與密碼。若您已啟用雙重驗證，請於提示時輸入驗證碼。RcloneView 內建的 rclone 執行檔原生支援 Proton Drive（需要 rclone v1.69 以上版本，已隨附於軟體中）。兩個遠端都新增完成後，會以分頁形式出現在雙窗格檔案總管中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## 使用資料夾比對規劃遷移

在開始傳輸之前，請使用 RcloneView 的 **Folder Compare（資料夾比對）** 工具評估 Dropbox 中有哪些內容，以及 Proton Drive 中已有哪些內容。在 Home 分頁中點擊 **Compare** 按鈕，將 Dropbox 設為左側來源、Proton Drive 設為右側。比對檢視畫面會標示出僅存在於 Dropbox 的檔案（左側獨有）、兩側皆相符的檔案，以及大小差異——讓您清楚掌握實際需要移動的內容。

若您已手動將部分檔案複製到 Proton Drive，並希望避免重複作業，此步驟會特別有用。篩選「left-only（僅左側）」即可只顯示 Proton Drive 中缺少的項目，再針對這些特定項目進行複製。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer setup from Dropbox to Proton Drive in RcloneView" class="img-large img-center" />

## 執行雲端對雲端傳輸

若要進行完整遷移，請使用 **Sync（同步）** 精靈。在 Home 分頁點擊 **Sync**，將 Dropbox 設為來源、Proton Drive 設為目的地，並為此工作命名（例如 `dropbox-proton-migration`）。選擇 **Copy（複製）** 作為工作類型，以在建立 Proton Drive 副本的同時保留 Dropbox 中的原始檔案——這樣可在您確認遷移無誤之前，讓 Dropbox 保持完整不變。

在精靈的第 2 步中，啟用 **checksum verification（校驗碼驗證）**，以確認每個檔案都能無損傳輸。對於必須確保資料完整性的敏感文件而言，這一點至關重要。請先執行 **Dry Run（試跑）**，預覽將要傳輸的檔案，再正式執行工作。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using folder compare to verify Dropbox files before migration to Proton Drive" class="img-large img-center" />

## 監控進度並驗證完成狀態

傳輸進行期間，RcloneView 底部的 **Transferring（傳輸中）** 分頁會顯示即時傳輸速度、檔案數量與完成百分比。規模龐大的 Dropbox 資料庫——例如某律師事務所的 5 萬份客戶文件——可能需要數小時才能完成；此工作會在背景持續執行，而 RcloneView 則可縮到系統匣中。

工作完成後，請重新執行 Folder Compare，確認「left-only」檔案數量為零。若 Dropbox 中仍有項目被標示為「left-only」，代表該次傳輸失敗，可針對這些項目個別重新執行。RcloneView 的 **Job History（工作紀錄）** 會完整記錄本次執行的起始時間、總傳輸位元組數、速度與狀態——形成一份適用於法規遵循或 IT 稽核的永久紀錄。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Dropbox to Proton Drive migration job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 **Remote tab > New Remote** 中，透過 OAuth 新增 Dropbox，並以電子郵件／密碼新增 Proton Drive。
3. 使用 **Folder Compare** 在傳輸前檢查兩個帳戶之間的差異。
4. 建立啟用校驗碼驗證的 Copy 同步工作並執行，以完成遷移。

當兩個遠端都連接至 RcloneView 後，將資料從 Dropbox 移轉至 Proton Drive 就會變成一項視覺化且易於管理的操作——不需要撰寫腳本、不需要中介下載，全程都有清楚的稽核軌跡。

---

**相關指南：**

- [使用 RcloneView 管理 Dropbox 雲端儲存](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Proton Drive 雲端同步](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 將 Dropbox 遷移至 Wasabi](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
