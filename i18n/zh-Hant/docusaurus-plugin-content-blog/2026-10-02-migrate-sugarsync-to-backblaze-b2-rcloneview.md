---
slug: migrate-sugarsync-to-backblaze-b2-rcloneview
title: "將 SugarSync 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用 RcloneView 將檔案從 SugarSync 移至 Backblaze B2:連接兩個遠端,透過 Dry Run 預演傳輸,並用 Folder Compare 驗證結果。"
keywords:
  - SugarSync 遷移到 Backblaze B2
  - SugarSync 到 B2 傳輸
  - SugarSync 遷移
  - Backblaze B2 備份
  - 雲端到雲端遷移
  - RcloneView SugarSync
  - SugarSync 替代儲存
  - rclone SugarSync B2
  - 雲端遷移 GUI
  - 物件儲存備份
tags:
  - RcloneView
  - sugarsync
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 SugarSync 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 將多年累積的 SugarSync 資料夾遷入 Backblaze B2 儲存桶,無需手動下載再重新上傳。

長期使用 SugarSync 的團隊往往希望把封存資料遷移到物件儲存中,因為儲存桶和應用程式金鑰更適合自動化。RcloneView 在一個視窗中同時連接兩個服務,因此您可以直接將資料夾從 SugarSync 複製到 Backblaze B2,並在停用舊帳戶之前檢查結果。使用 FREE 授權即可以完整讀寫權限連接 S3、Azure 或 Backblaze B2。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

開啟 Remote 分頁並點擊 New Remote。使用帳戶憑證新增 SugarSync,然後使用 Backblaze 金鑰管理頁面中的 Application Key ID 和 Application Key 新增 Backblaze B2。請先在 Backblaze 中建立目的地儲存桶,以便有明確的目標。

將 SugarSync 放在一個 Explorer 面板中,將 B2 儲存桶放在另一個面板中。在設定任何內容之前,先瀏覽兩者以確認可以存取。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 SugarSync 和 Backblaze B2 遠端" class="img-large img-center" />

## 透過拖放或同步工作進行複製

對於較小的資料夾,將其從 SugarSync 面板拖到 B2 面板即可。在不同遠端之間拖曳執行的是複製,因此原始檔案保持不變。對於完整遷移,請使用 4 步同步精靈:選擇來源和目的地、設定傳輸數量、新增篩選條件,並可選擇使用 PLUS 授權進行排程。

首次執行時請使用 Copy 工作而非 Sync 工作,這樣目的地上不會有任何內容被刪除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 SugarSync 到 Backblaze B2 的雲端到雲端傳輸" class="img-large img-center" />

## 預覽、監控和驗證

先執行 Dry Run。它會列出將被複製的檔案,讓您在資料移動之前發現錯誤的路徑。工作執行時,Transferring 分頁會顯示進度、速度和檔案數。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 分頁中監控 SugarSync 到 B2 的傳輸" class="img-large img-center" />

完成後,開啟 Compare 並排查看 SugarSync 和 B2。僅左側的檔案就是尚未到達的內容,您可以直接在比較檢視中將它們複製過去。Job History 會保留每次執行的記錄。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 確認 SugarSync 與 Backblaze B2 內容一致" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 SugarSync 和 Backblaze B2 新增為遠端,並建立目的地儲存桶。
3. 建立 Copy 工作,執行 Dry Run,然後開始傳輸。
4. 在關閉 SugarSync 帳戶之前,使用 Folder Compare 驗證。

B2 中有一份經過驗證的副本,您就可以放心地停用舊服務。

---

**相關指南:**

- [使用 RcloneView 將 SugarSync 遷移到 Google Drive 和 OneDrive](https://rcloneview.com/support/blog/migrate-sugarsync-google-drive-onedrive-rcloneview)
- [使用 RcloneView 管理 SugarSync 儲存空間](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Backblaze B2 儲存空間](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
