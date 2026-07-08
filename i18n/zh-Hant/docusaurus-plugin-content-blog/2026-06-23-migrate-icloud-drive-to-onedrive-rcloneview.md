---
slug: migrate-icloud-drive-to-onedrive-rcloneview
title: "將 iCloud Drive 遷移至 OneDrive — 使用 RcloneView 傳輸檔案"
authors:
  - alex
description: "使用 RcloneView 的雲端對雲端同步、乾跑預覽與資料夾比對驗證工具，將 iCloud Drive 檔案遷移至 Microsoft OneDrive 的逐步指南。"
keywords:
  - iCloud Drive to OneDrive migration
  - migrate iCloud to Microsoft OneDrive
  - iCloud Drive OneDrive transfer
  - switch from iCloud to OneDrive
  - cloud migration Apple Microsoft
  - iCloud Drive backup OneDrive
  - RcloneView iCloud migration
  - move files from iCloud to OneDrive
  - cross-platform cloud file migration
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - onedrive
  - macos
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 iCloud Drive 遷移至 OneDrive — 使用 RcloneView 傳輸檔案

> 從 Apple 的 iCloud 生態系統切換到 Microsoft OneDrive，不必手動下載再重新上傳數 GB 的檔案——RcloneView 會將遷移作業直接以雲端對雲端傳輸的方式執行。

當團隊統一採用 Microsoft 365，或是個別使用者從以 Mac 為中心的工作流程轉換到 Windows 時，將 iCloud Drive 的檔案移入 OneDrive 便成為首要的實際難題。將所有檔案下載到本機磁碟再重新上傳既緩慢又容易中斷，而且沒有簡單的方法可以確認每個檔案都完整無誤地送達。RcloneView 以伺服器端傳輸的方式處理這項作業,並內建進度追蹤、乾跑預覽與資料夾比對驗證功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要從 iCloud Drive 移轉到 OneDrive？

iCloud Drive 在 Apple 硬體內運作順暢，但在該生態系統之外的原生整合能力有限。相較之下，OneDrive 內建於 Windows 檔案總管中，可直接連結 Microsoft Office 與 Teams，並在 Windows、macOS、iOS 及 Android 上提供一致的同步行為。導入 Microsoft 365 的組織通常會要求員工將現有的檔案庫移入 OneDrive，讓協作、版本記錄與存取政策都能透過單一受管理系統來運作。

RcloneView 中的 iCloud Drive 支援需要 rclone v1.69 或更新版本。RcloneView 內建了 rclone 執行檔，已符合此需求，因此在開始之前無需另行安裝 rclone。

<img src="/support/images/en/blog/new-remote.png" alt="Adding both iCloud Drive and OneDrive as remotes in the RcloneView Remote Manager" class="img-large img-center" />

## 在 RcloneView 中設定兩個遠端

首先新增您的 iCloud Drive 遠端：前往 **Remote** 分頁，點選 **New Remote**，然後選擇 **iCloud Drive**。依照畫面提示以您的 Apple 帳號完成驗證。接著以相同方式新增 OneDrive 遠端——OneDrive 使用 OAuth 瀏覽器登入，系統會開啟瀏覽器視窗供您登入 Microsoft 帳號，授權完成後即會儲存該遠端。

兩個遠端都註冊完成後，在 Explorer 面板中並排開啟它們。這讓您在開始任何傳輸之前，就能即時檢視兩邊的檔案結構。在 iCloud Drive 根目錄使用 **Get Size** 確認總資料量，並掃描資料夾結構，以找出可能在 OneDrive 上行為不同的命名差異或深層巢狀路徑。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and OneDrive displayed side by side in the RcloneView two-panel Explorer for cloud-to-cloud transfer" class="img-large img-center" />

## 使用同步工作執行遷移

在 **Home** 分頁建立一個新的 Sync 工作。將 iCloud Drive（或特定子資料夾）設為來源，目標 OneDrive 路徑設為目的地。執行前，先執行一次 **Dry Run**（乾跑）：RcloneView 會列出所有將要傳輸的檔案與資料夾，但不會實際搬移任何內容。對於 50 GB 的 iCloud 檔案庫，此掃描只需幾分鐘，並能找出任何超大檔案或 OneDrive 處理方式不同的檔名字元。

與僅支援掛載的工具不同，RcloneView 在 FREE（免費）授權下也能同步與比對資料夾——因此從乾跑、正式傳輸到驗證的完整遷移流程，都不需要付費升級。

確認乾跑輸出結果無誤後,即可開始正式傳輸。**Transferring** 分頁會顯示即時進度、速度以及目前正在傳輸的檔案。若連線中斷，只需重新執行相同的工作：rclone 會略過目的地已存在且大小相符的檔案，因此傳輸能有效率地從中斷處繼續進行。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view in RcloneView confirming iCloud Drive and OneDrive folder contents match after migration" class="img-large img-center" />

## 使用資料夾比對驗證遷移結果

Sync 工作完成後，從 **Home** 分頁開啟 **Folder Compare**（資料夾比對），並指向相同的 iCloud Drive 來源與 OneDrive 目的地。比對引擎會顯示哪些檔案完全相同、哪些檔案大小不同，以及僅出現在其中一側的檔案。透過「僅左側」與「僅右側」篩選器逐一檢視,是確認零資料遺失最快的方法，而不必手動逐一核對檔案。

如果您正在進行分階段遷移——部分裝置仍在使用 iCloud Drive，同時將其他裝置轉換至 OneDrive——PLUS 授權使用者可以為同步工作附加排程。每次排程執行時，iCloud Drive 中新增的檔案都會自動複製到 OneDrive，直到完成轉換為止。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Drive to OneDrive sync job in RcloneView for a phased migration transition" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Remote** > **New Remote** 新增您的 **iCloud Drive** 遠端，並完成 Apple 帳號驗證。
3. 透過 OAuth 瀏覽器登入新增您的 **OneDrive** 遠端。
4. 建立一個以 iCloud Drive 為來源、OneDrive 為目的地的 Sync 工作；先執行 **Dry Run**。
5. 正式傳輸完成後，使用 **Folder Compare** 確認所有檔案都已正確遷移。

完整遷移到 OneDrive 後，您就能在 Windows、Microsoft 365 與 Teams 之間享有一致的存取體驗——不必讓檔案無限期地分散在兩個服務之間。

---

**相關指南：**

- [使用 RcloneView 管理 iCloud Drive 雲端同步](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [管理 OneDrive — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 iCloud Drive 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
