---
slug: migrate-icloud-drive-to-backblaze-b2-rcloneview
title: "將 iCloud Drive 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - casey
description: "使用 RcloneView 將檔案從 iCloud Drive 傳輸至 Backblaze B2。逐步指南教你將 Apple 雲端儲存備份至價格實惠、不受廠商綁定的物件儲存服務。"
keywords:
  - iCloud Drive to Backblaze B2
  - migrate iCloud Drive Backblaze B2
  - iCloud backup Backblaze B2
  - transfer iCloud files to B2
  - iCloud Drive cloud migration RcloneView
  - RcloneView iCloud Backblaze B2
  - cloud to cloud transfer iCloud
  - Backblaze B2 iCloud backup tool
tags:
  - RcloneView
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 iCloud Drive 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案

> Apple 的 iCloud Drive 對裝置間同步相當方便，但將檔案複製到 Backblaze B2 可建立一份具成本效益、不受廠商綁定的備份，而 RcloneView 讓整個過程完全透過圖形介面完成。

數百萬使用者透過 Apple 生態系將照片、文件與專案封存於 iCloud Drive 中。雖然 iCloud 能在 Apple 裝置之間無縫同步，但組織與進階使用者往往需要在耐用的物件儲存中保留第二份副本——出於廠商多元化、更長的保留期限，或跨平台備份策略的考量。Backblaze B2 是一項與 S3 相容的物件儲存服務，能自然地整合進 RcloneView，讓你無需手動下載、撰寫腳本或使用第三方同步用戶端，即可從 iCloud Drive 傳輸內容。在 FREE 授權下即可連接 Backblaze B2 並取得完整讀寫權限。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定 iCloud Drive

RcloneView 透過 rclone 的 iCloud 後端支援 iCloud Drive，此功能需要 rclone v1.69 或更新版本——RcloneView 內建的 rclone 執行檔已符合此需求，因此無需另外安裝。若要連線，請開啟 **Remote** 分頁，點選 **New Remote**，然後從供應商清單中選擇 iCloud Drive。你會需要使用 Apple ID 憑證進行驗證，若帳號已啟用兩步驟驗證，系統會提示你輸入驗證碼。儲存完成後，你的 iCloud 資料夾會出現在檔案總管面板中，就像在 Mac 上一樣。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

瀏覽你的 iCloud Drive 結構——桌面、文件，或任何自訂資料夾——在建立傳輸工作之前先確認內容範圍。

## 連接 Backblaze B2 作為目的地

Backblaze B2 透過輸入憑證來連線。在 **New Remote** 中選擇 Backblaze B2，並輸入你的 **Application Key ID** 與 **Application Key**——這兩者都可在你的 Backblaze 帳號的 App Keys 區段中產生。儲存後，你就能在 RcloneView 的第二個檔案總管面板中瀏覽你的 B2 儲存桶。將 iCloud Drive 與 Backblaze B2 並排開啟，你就能在移動任何一個檔案之前，清楚掌握來源與目的地的狀況。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and Backblaze B2 open side by side in RcloneView" class="img-large img-center" />

## 執行遷移傳輸

從 Home 分頁開啟 **Sync** 精靈。將你的 iCloud Drive 資料夾設為來源，並將 Backblaze B2 儲存桶（或其中的某個前綴路徑）設為目的地。在進階設定步驟中，啟用 **checksum verification**（校驗和驗證），以比對檔案雜湊值而非僅依賴時間戳記——這對於資料完整性最為重要的一次性遷移特別有價值。你也可以加入 **max file age**（最長檔案存留時間）篩選條件，若想在第一輪先排除較舊、較少存取的檔案，只遷移近期內容即可。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring during an iCloud to Backblaze B2 migration in RcloneView" class="img-large img-center" />

在執行正式傳輸前，務必先執行一次 **Dry Run**（模擬執行）。RcloneView 會列出它將會複製或略過的確切檔案清單——當你遷移龐大的 iCloud Drive 資料庫時，這是一項實用的安全檢查，因為意外覆寫或遺漏資料夾可能需要付出高昂代價才能修正。

## 使用資料夾比較功能驗證遷移結果

傳輸完成後，使用 RcloneView 的 **Folder Compare**（資料夾比較）功能來確認雙邊內容一致。開啟比較檢視畫面，將 iCloud Drive 設在左側、你的 B2 儲存桶設在右側，讓 RcloneView 找出任何僅存在左側、僅存在右側，或大小不一致的檔案。乾淨的比較結果——只顯示相同檔案——即可確認你的遷移已完整無缺地成功完成。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying iCloud Drive files match Backblaze B2 after migration" class="img-large img-center" />

若需要持續性的保護，**PLUS 授權**可讓你排程週期性的同步工作——每週或每日執行——以自動擷取任何新增的 iCloud Drive 內容，讓你的 B2 副本保持最新狀態。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用你的 Apple ID 憑證，將 iCloud Drive 新增為遠端。
3. 使用你的 Application Key ID 與 Application Key，將 Backblaze B2 新增為遠端。
4. 建立同步工作：以 iCloud Drive 為來源、B2 儲存桶為目的地，並先執行一次 **Dry Run**。
5. 使用 **Folder Compare** 驗證遷移結果，再依需求排程週期性備份。

透過 RcloneView 將 iCloud Drive 遷移至 Backblaze B2，能為你的 Apple 檔案在物件儲存中提供一個耐用、不受平台限制的家——受到保護、可驗證，並能從任何裝置存取。

---

**相關指南：**

- [使用 RcloneView 管理 iCloud Drive](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [使用 RcloneView 管理 Backblaze B2](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 iCloud Drive 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
