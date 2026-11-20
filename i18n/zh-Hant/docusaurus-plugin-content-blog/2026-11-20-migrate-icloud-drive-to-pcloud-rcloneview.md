---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "將 iCloud Drive 遷移到 pCloud — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 iCloud Drive 檔案遷移到 pCloud：連接兩個遠端，用 Dry Run 預覽，執行雲端對雲端同步工作，並用資料夾比較進行驗證。"
keywords:
  - iCloud Drive 到 pCloud
  - 遷移 iCloud Drive 到 pCloud
  - iCloud 到 pCloud 傳輸
  - 從 iCloud Drive 移動檔案
  - pCloud 遷移工具
  - Windows 和 Linux 上的 iCloud Drive 替代方案
  - 雲端對雲端遷移 GUI
  - RcloneView iCloud Drive
  - RcloneView pCloud
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 iCloud Drive 遷移到 pCloud — 使用 RcloneView 傳輸檔案

> 無需在多個 Finder 視窗之間來回切換，也不必應付半途中斷的瀏覽器上傳，即可將 iCloud Drive 資料庫遷移到 pCloud。

當你擁有的裝置全是 Apple 裝置時，iCloud Drive 很方便。可一旦加入了 Windows 筆電或 Linux 工作站，許多使用者就會尋找在所有平台上表現一致的雲端服務，而 pCloud 是常見的選擇。RcloneView 在一個視窗中連接這兩項服務，透過可重複執行的同步工作複製資料，並讓你在取消任何服務之前先驗證結果。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 iCloud Drive 和 pCloud 連接為遠端

開啟 **Remote** 分頁並點擊 **New Remote**。選擇 **iCloud Drive**，輸入 Apple 帳號憑證，並完成 Apple 傳送到你裝置上的驗證提示。rclone 的 iCloud Drive 後端不支援進階資料保護（Advanced Data Protection），因此必須在 Apple 帳號中關閉該設定。iCloud Drive 支援需要 rclone v1.69 或更新版本；RcloneView 隨附的內建 rclone 符合此要求，因此無需額外安裝任何東西。

接著新增 **pCloud**。它使用 OAuth，會開啟瀏覽器視窗，登入後遠端會自動儲存。不需要任何 API 金鑰。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

儲存兩個遠端後，在左側 Explorer 面板中開啟 iCloud Drive，在右側面板中開啟 pCloud。右鍵點擊你打算遷移的 iCloud 資料夾，使用 **Get Size** 在開始前查看涉及的資料量。

## 使用 Dry Run 預覽遷移

在 **Home** 分頁中建立同步工作。將 iCloud Drive 資料夾設為來源，將新的 pCloud 資料夾（例如 `/From-iCloud`）設為目的地。保持單向方向（「Modifying destination only」），確保 iCloud Drive 永遠不會被變更。

執行之前，點擊 **Dry Run**。RcloneView 會列出將要複製的所有檔案以及將在目的地刪除的內容，而不會實際移動任何資料。這正是發現意外狀況的好時機：Mac 套件資料夾、`.DS_Store` 檔案，或被遺忘的舊手機備份資料夾。在 Step 3 中新增自訂篩選器，排除任何不想帶過去的內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and pCloud side by side in RcloneView for a cloud-to-cloud transfer" class="img-large img-center" />

請注意，這不是 Apple 與 pCloud 之間的伺服器端複製：資料會流經執行 RcloneView 的電腦，因此有線網路連線和保持喚醒的電腦有助於大規模遷移一次完成。

## 執行、監控與驗證

啟動工作，並在 **Transferring** 分頁中查看進度、檔案數和目前速度。如果連線中斷，再次執行同一工作即可。同步只傳輸缺少或不同的檔案，因此已完成的檔案會被略過。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring an iCloud Drive to pCloud transfer in the RcloneView Transferring tab" class="img-large img-center" />

工作完成後，開啟 **Compare**，左側為 iCloud Drive，右側為 pCloud。開啟「Show left-only files」和「Show different files」。如果結果為空，表示遷移已完成。**Job History** 會記錄每次執行的狀態、大小和檔案數。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying the iCloud Drive to pCloud migration with RcloneView Folder Compare" class="img-large img-center" />

## 開始使用

RcloneView 可在 Windows、macOS 和 Linux 上執行，因此遷移完成後，你可以在任何一台電腦上管理新的 pCloud 資料庫。

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 iCloud Drive（Apple 帳號登入）和 pCloud（瀏覽器 OAuth）新增為遠端。
3. 建立從 iCloud Drive 到 pCloud 資料夾的單向同步工作，並用 **Dry Run** 檢查。
4. 執行工作，然後在停用 iCloud 副本之前用 **Compare** 確認結果。

經過驗證且可重複執行的遷移，讓你在切換雲端服務時不必擔心遺漏任何檔案。

---

**相關指南：**

- [將 iCloud Drive 遷移到 Google Drive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [管理 pCloud 儲存空間 — 使用 RcloneView 同步和備份檔案](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [修正 iCloud Drive 同步錯誤 — 如何使用 RcloneView 解決](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
