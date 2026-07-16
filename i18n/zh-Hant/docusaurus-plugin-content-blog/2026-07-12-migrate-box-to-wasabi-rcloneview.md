---
slug: migrate-box-to-wasabi-rcloneview
title: "將 Box 遷移至 Wasabi — 使用 RcloneView 傳輸檔案"
authors:
  - casey
description: "使用 RcloneView 搭配資料夾比較、同步工作與試跑功能，將檔案從 Box 安全地遷移至 Wasabi 熱儲存。"
keywords:
  - migrate Box to Wasabi
  - Box to Wasabi transfer
  - Box cloud migration
  - Wasabi hot storage
  - RcloneView Box Wasabi
  - cloud to cloud transfer tool
  - Box storage backup
  - Wasabi sync software
  - move files between clouds
  - Box S3 migration
tags:
  - box
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Box 遷移至 Wasabi — 使用 RcloneView 傳輸檔案

> 直接將 Box 帳戶中的檔案與資料夾移轉至 Wasabi 相容於 S3 的熱儲存，不需先透過本機磁碟中轉。

採用 Box 進行文件協作的團隊，有時會發現它不再適合長期儲存,而 Wasabi 相容於 S3 的物件儲存便成為封存資料、媒體庫或備份集的下一個歸宿。RcloneView 可在同一個視窗中連接這兩項服務,因此遷移是直接的雲端對雲端傳輸,而不必經由本機裝置緩慢地下載再上傳。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Box 與 Wasabi 新增為遠端

Box 是透過 OAuth 新增的 — 在「Remote」分頁點擊「New Remote」會開啟瀏覽器視窗進行帳戶登入,驗證完成後 RcloneView 會自動連接。需要企業層級檢視的商務帳戶,可以在設定期間指定 `box_sub_type = enterprise`。Wasabi 則是透過 S3 相容遠端類型新增,使用 Access Key、Secret Key,以及目標區域的 Wasabi 端點。

兩個遠端都設定完成後,它們會在 Explorer 中顯示為獨立分頁,你可以在一個面板開啟 Box,另一個面板開啟 Wasabi,在移動任何檔案之前並排檢視兩邊的檔案樹。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Wasabi remotes in RcloneView" class="img-large img-center" />

## 傳輸前先比較

Folder Compare 會將 Box 來源與 Wasabi 目標資料夾並排顯示,標示出哪些檔案只存在於單邊、哪些已經相同,以及哪些檔案大小有差異。對於首次遷移而言,這是在執行大量同步前確認整個 Box 資料庫都已涵蓋在內的最快方式,而且在傳輸完成後也可以再次用於驗證 — 複製後仍標示為「left-only」的檔案就需要再檢查一次。

在 Folder Compare 中執行複製,只會處理目標端尚不存在或大小有差異的檔案,因此即使遷移中途中斷,之後也能接續進行,而不必重新複製已經傳到 Wasabi 的檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Box and Wasabi folders before migration" class="img-large img-center" />

## 使用 Sync 執行遷移

對於大量傳輸,Sync 精靈的四個步驟可處理來源／目標選擇、傳輸並行數與篩選條件 — 這在排除不想帶到 Wasabi 的檔案類型時很有用,例如 Box 協作過程中產生的暫存檔案。Dry Run 可在實際搬動任何檔案前,預覽究竟會複製哪些檔案,這在 Box 資料庫累積多年內容、犯錯代價高昂時格外重要。

RcloneView 可在 Windows、macOS 與 Linux 上,於同一個視窗中掛載並同步 90 多種服務,因此這裡用於 Box 與 Wasabi 的相同工作流程,也適用於任何其他遠端組合,不需要重新學習新工具。同步工作儲存至 Job Manager 後,其歷史紀錄 — 狀態、傳輸大小與耗時 — 都會保留以供日後查閱。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a sync job from Box to Wasabi in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote Manager 中透過 OAuth 登入新增 Box,並透過 S3 相容認證新增 Wasabi。
3. 在傳輸前,先於 Box 來源與 Wasabi 目標之間執行 Folder Compare,確認遷移範圍。
4. 先建立啟用 Dry Run 的 Sync 工作,確認無誤後再實際執行,並在 Transferring 分頁追蹤進度。

當兩個遠端都能在同一個 Explorer 中檢視時,將 Box 資料庫遷移到 Wasabi 就會變成單一的引導式工作流程,而不必在多個工具之間切換。

---

**相關指南：**

- [管理 Box 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Wasabi 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [將 Box 遷移至 Google Drive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
