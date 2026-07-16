---
slug: migrate-jottacloud-to-backblaze-b2-rcloneview
title: "將 Jottacloud 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將檔案從 Jottacloud 遷移至 Backblaze B2。直接將您的挪威雲端儲存空間轉移至價格實惠的 S3 相容物件儲存服務。"
keywords:
  - Jottacloud to Backblaze B2
  - migrate Jottacloud
  - Jottacloud migration
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - Jottacloud RcloneView
  - Backblaze B2 backup
  - cloud storage migration
  - Norwegian cloud storage
  - RcloneView transfer
tags:
  - jottacloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Jottacloud 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 使用 RcloneView 將您的 Jottacloud 檔案搬移至 Backblaze B2 物件儲存服務 — 直接進行雲端對雲端遷移,無需先下載至本機作為中介。

Jottacloud 是一家挪威的雲端儲存服務,以高度重視隱私著稱,廣受北歐與歐洲的個人及企業用戶使用。隨著儲存需求成長,部分使用者會遷移至 Backblaze B2,因為它提供 S3 相容 API、程式化存取,以及更適合大型檔案庫或開發人員工作流程的分層儲存選項。RcloneView 可同時連接這兩項服務並直接完成傳輸 — 完全不需要本機硬碟作為中介。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定 Jottacloud 與 Backblaze B2

在 RcloneView 中新增這兩個遠端只需幾分鐘。針對 Jottacloud,開啟「遠端」分頁,點擊「新增遠端」,並從服務供應商清單中選擇 Jottacloud。設定過程會使用您的 Jottacloud 帳戶憑證。針對 Backblaze B2,選擇 Backblaze B2 並輸入您的 Application Key ID 與 Application Key — 這些可從您的 Backblaze 帳戶中的 App Keys 頁面產生。設定完成後,兩個遠端便會以可存取的檔案樹狀結構顯示在總管面板中。

瀏覽您的 Jottacloud 資料夾,規劃出想要搬移的內容。Jottacloud 會將檔案依裝置與資料夾組織 — 在建立遷移工作之前,務必先了解其結構,以便選擇正確的來源路徑。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 執行遷移

建立一個以 Jottacloud 資料夾為來源、Backblaze B2 儲存桶為目的地的同步工作。如果您尚未建立目的地儲存桶,可以在執行遷移前直接在 Backblaze 控制台中建立一個。同步精靈的「進階設定」步驟可讓您設定並行傳輸檔案數量,並啟用校驗和驗證 — 後者可確認每個檔案都完整無誤地送達,這對大型相片或影片檔案庫尤其重要。

以一位要將 500GB Jottacloud RAW 檔案遷移至 Backblaze B2 的攝影師為例,「篩選」步驟能讓分階段遷移更容易管理。先依副檔名(`.raw`、`.cr3`、`.arw`)篩選,優先遷移相機檔案,再於後續工作中處理其他類型的資產。「最大檔案存放時間」篩選器則能讓您優先處理近期的作品,再歸檔較舊的內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Jottacloud files to Backblaze B2 with RcloneView" class="img-large img-center" />

在啟動正式遷移前,務必先使用「模擬執行」(Dry Run)。此模擬會列出所有將被複製或移除的檔案,讓您在正式執行前確認範圍是否符合預期。

## 驗證完成的遷移

傳輸完成後,使用「資料夾比對」來驗證完整性。選擇來源 Jottacloud 資料夾與目的地 Backblaze B2,比對畫面會標示出僅存在於其中一側,或大小不一致的檔案。這能在大型遷移中及早發現可能被忽略的遺漏檔案或傳輸不完整的問題。

「工作歷史紀錄」面板會顯示每次遷移執行的時間、檔案數量、總傳輸資料量及最終狀態。如果某次執行因網路問題或系統休眠而中斷,您可以重新執行該同步工作,而 rclone 的增量處理機制會確保只重新傳輸缺漏或已變更的檔案。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Jottacloud to Backblaze B2 migration job history in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用您的 Jottacloud 帳戶憑證新增 Jottacloud 遠端。
3. 使用您的 Application Key ID 與 Application Key 新增 Backblaze B2。
4. 執行「模擬執行」進行預覽,接著執行同步以將檔案遷移至您的 B2 儲存桶。

透過 RcloneView 將 Jottacloud 遷移至 Backblaze B2 是漸進式、可續傳且完全以圖形介面操作的過程 — 完全不需要撰寫腳本。

---

**相關指南:**

- [使用 RcloneView 管理 Jottacloud 雲端同步與備份](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Dropbox 備份至 Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [使用 RcloneView 將 Wasabi 遷移至 Backblaze B2](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
