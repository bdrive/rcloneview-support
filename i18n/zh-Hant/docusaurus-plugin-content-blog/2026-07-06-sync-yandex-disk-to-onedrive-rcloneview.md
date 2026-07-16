---
slug: sync-yandex-disk-to-onedrive-rcloneview
title: "將 Yandex Disk 同步到 OneDrive——使用 RcloneView 進行雲端備份"
authors:
  - steve
description: "使用 RcloneView 將 Yandex Disk 同步到 OneDrive，透過單一跨平台 GUI 依排程在兩個服務提供者之間鏡像檔案。"
keywords:
  - sync yandex disk to onedrive
  - yandex disk onedrive backup
  - yandex disk to microsoft onedrive
  - rcloneview yandex disk
  - cloud to cloud sync
  - yandex disk migration
  - onedrive backup destination
  - cross-cloud file sync
tags:
  - yandex-disk
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Yandex Disk 同步到 OneDrive——使用 RcloneView 進行雲端備份

> 在 Yandex Disk 保留為來源的同時於 OneDrive 中維護一份可用副本，並不需要先匯出再重新上傳——RcloneView 會將兩者都連接為遠端，並直接在雲端之間同步資料夾。

Yandex Disk 是俄羅斯及鄰近市場使用者與團隊常見的主要儲存選擇，但協作者或下游工具往往期望檔案改存放在 OneDrive——無論是為了 Office 整合、SharePoint 交接，或單純因為組織其他成員都使用該平台。在兩者之間搬移檔案，通常代表得先將所有檔案下載到本機再重新上傳，這不僅使傳輸時間加倍，也不必要地佔用本機磁碟空間。RcloneView 會在同一個視窗中將 Yandex Disk 與 OneDrive 都連接為遠端，並在兩者之間直接傳輸，完全省去本機這一趟往返。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

Yandex Disk 透過 OAuth 瀏覽器登入方式連接到 RcloneView——不需要另外的 API 金鑰或手動輸入權杖，與 Google Drive 或 Dropbox 使用相同的流程。OneDrive 的連接方式也相同。兩者都完成驗證後，開啟兩個並排的 Explorer 面板，一個指向 Yandex Disk 根目錄，另一個指向目標 OneDrive 資料夾，這樣就能在設定傳輸工作之前先確認雙方的資料夾結構。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Yandex Disk and OneDrive as remotes in RcloneView" class="img-large img-center" />

RcloneView 在免費授權下也能進行資料夾同步與比較——在兩個雲端服務提供者之間搬移檔案並不需要另外付費升級方案，對於只需一次性遷移、不想為單次傳輸而訂閱的情況來說格外重要。

## 設定同步工作

同步精靈的第一步就是定義傳輸內容：選擇 Yandex Disk 資料夾作為來源，OneDrive 資料夾作為目的地，並選擇「僅修改目的地」以進行單向鏡像，讓 OneDrive 與 Yandex Disk 保持一致，同時不動到原始檔案。在正式執行前，先使用 Dry Run 預覽究竟會複製哪些檔案——這能在任何資料實際搬移之前，先抓出命名問題或意外龐大的資料夾，考量到兩個服務提供者回報檔案中繼資料的方式差異頗大，這一步是值得的。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

第三步的篩選設定讓你可以排除不需要搬移的檔案類型——可以利用最大檔案大小或自訂路徑排除規則，跳過大型媒體檔案或已同步過的資料夾，讓 OneDrive 上的副本聚焦在協作者真正需要的內容。

## 監控傳輸進度

工作執行後，底部資訊檢視中的「Transferring」分頁會顯示即時進度：完成百分比、目前傳輸速度與檔案數量，讓你可以確認大型 Yandex Disk 封存確實正在傳輸，而非卡住不動。工作完成後，Job History 會記錄傳輸的總大小、耗時與完成狀態，讓你在日後協作者詢問某批特定檔案是否已成功傳輸時，有紀錄可供查閱。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing Job History after syncing Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 登入將 Yandex Disk 與 OneDrive 都連接為遠端。
3. 設定從 Yandex Disk 到 OneDrive 的單向同步工作，並先執行 Dry Run。
4. 執行同步，然後查看 Job History 以確認傳輸已如預期完成。

跨雲端備份不應該還得繞道經過本機磁碟——當兩個服務提供者都在同一個視窗中即時運作時，檔案就能直接前往它們該去的地方。

---

**相關指南：**

- [管理 Yandex Disk 儲存空間——使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [管理 OneDrive 儲存空間——使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Yandex Disk 遷移到 Dropbox](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)

<CloudSupportGrid />
