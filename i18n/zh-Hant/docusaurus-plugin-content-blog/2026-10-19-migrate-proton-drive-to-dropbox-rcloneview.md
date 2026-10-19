---
slug: migrate-proton-drive-to-dropbox-rcloneview
title: "將 Proton Drive 遷移到 Dropbox — 使用 RcloneView 傳輸檔案"
authors:
  - kai
description: "使用 RcloneView 將 Proton Drive 遷移到 Dropbox：連接兩個遠端，先以 Dry Run 預覽，再進行雲端對雲端複製，並透過 Folder Compare 驗證結果。"
keywords:
  - Proton Drive 遷移到 Dropbox
  - Proton Drive 到 Dropbox 傳輸
  - 將檔案從 Proton Drive 移到 Dropbox
  - RcloneView Proton Drive
  - RcloneView Dropbox
  - 雲端對雲端遷移
  - Proton Drive Dropbox 同步
  - 傳輸 Proton Drive 檔案
tags:
  - RcloneView
  - proton-drive
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Proton Drive 遷移到 Dropbox — 使用 RcloneView 傳輸檔案

> 以雲端對雲端的方式將 Proton Drive 檔案複製到 Dropbox，傳輸前可預覽，傳輸後可比較。

從 Proton Drive 遷移到 Dropbox，通常是出於協作需求：共用資料夾、團隊成員，以及已經在 Dropbox 中使用的工具。先把所有檔案下載到筆記型電腦既慢，又需要額外的磁碟空間。RcloneView 在同一個視窗中連接兩個帳戶，並直接在兩者之間複製。RcloneView 可在 Windows、macOS 和 Linux 上透過單一視窗掛載並同步 90 多個提供者。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Proton Drive 和 Dropbox

Proton Drive 使用憑證輸入方式：新增遠端，選擇 Proton Drive，輸入電子郵件和密碼；若已啟用兩步驟驗證，還需輸入 2FA 驗證碼。Proton Drive 支援需要 rclone v1.69 或更新版本。RcloneView 內建 rclone，因此若遠端建立失敗，請在頁尾檢查版本。

Dropbox 使用瀏覽器 OAuth。RcloneView 會開啟登入頁面，您核准存取後，遠端便會自動連接。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Proton Drive 和 Dropbox 遠端" class="img-large img-center" />

## 選擇要遷移的內容

試想一位自由工作的顧問，客戶資料夾存放在 Proton Drive，現在透過 Dropbox 分享交付成果。每個作業複製一個客戶資料夾，讓每次執行都較短，也方便重試。

若 Dropbox 中已有需要保留的檔案，請使用 Copy 而非 Sync，因為單向同步會讓目的地與來源保持一致。精靈中的篩選器可依檔案大小或時間範圍限制，也可選擇 Document、Image 等預先定義的群組。請先執行 Dry Run：它會列出將要複製或刪除的項目，而不會變更任何資料。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="遷移前比較 Proton Drive 和 Dropbox 資料夾" class="img-large img-center" />

## 傳輸與監控

若要快速複製，請將資料夾從 Proton Drive 面板拖曳到 Dropbox 面板。在不同遠端之間拖曳執行的是複製而非移動，因此原始檔案仍保留在 Proton Drive。若需重複執行，可將傳輸儲存為作業。

Transferring 索引標籤會顯示速度、檔案數量和進度。對於大型封存，請在 Advanced Settings 中減少同時傳輸數，避免任一服務中斷執行。失敗的執行會自動重試（預設：3 次）。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 Proton Drive 到 Dropbox 的雲端對雲端傳輸" class="img-large img-center" />

## 驗證結果

複製完成後，對兩個根目錄執行 Folder Compare。它會顯示僅在左側、僅在右側、相同和不同的檔案，並可讓您把遺漏的檔案複製過去。Job History 會記錄每次執行的開始時間、持續時間、狀態和檔案數量，為遷移提供清楚的紀錄。

請注意，離開 Proton Drive 的檔案會依照 Dropbox 自身的儲存模型保存，因此在邀請協作者之前，請檢查目的地的共用設定。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Proton Drive 遷移到 Dropbox 的作業歷史記錄" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Proton Drive 遠端（電子郵件、密碼、可選 2FA）和 Dropbox 遠端（瀏覽器登入）。
3. 對一個資料夾執行 Dry Run，然後執行複製作業。
4. 使用 Folder Compare 驗證，然後對其餘資料夾重複上述步驟。

分階段驗證遷移，能讓您放心切換到 Dropbox，不必擔心遺漏了什麼。

---

**相關指南：**

- [將 Dropbox 遷移到 Proton Drive](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [將 Proton Drive 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [Dry Run：傳輸前預覽同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
