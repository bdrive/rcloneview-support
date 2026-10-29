---
slug: migrate-dropbox-to-pcloud-rcloneview
title: "將 Dropbox 遷移到 pCloud — 使用 RcloneView 傳輸檔案"
authors:
  - robin
description: "使用 RcloneView 將檔案從 Dropbox 移至 pCloud：連接兩個遠端、執行 Dry Run、進行雲端對雲端複製，並使用 Folder Compare 驗證。"
keywords:
  - 遷移 dropbox 到 pcloud
  - dropbox 到 pcloud 傳輸
  - 將 dropbox 檔案移到 pcloud
  - dropbox pcloud 遷移
  - 雲端對雲端傳輸
  - rcloneview dropbox
  - rcloneview pcloud
  - 從 dropbox 切換到 pcloud
  - 傳輸 dropbox 資料
tags:
  - RcloneView
  - dropbox
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Dropbox 遷移到 pCloud — 使用 RcloneView 傳輸檔案

> 不必手動先下載再上傳，一次可控、可驗證的操作即可將 Dropbox 帳號遷移到 pCloud。

更換供應商通常意味著先將數 GB 資料下載到筆記型電腦，再重新上傳。RcloneView 可以避免這一點：它並排連接 Dropbox 和 pCloud，並透過 rclone 直接在雲端與雲端之間傳輸。RcloneView 可在 Windows、macOS 和 Linux 上，透過一個視窗掛載並同步 90 多個供應商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Dropbox 和 pCloud

這兩項服務在 RcloneView 中都使用瀏覽器式 OAuth 登入，因此無需貼上 API 金鑰。開啟 Remote 分頁，點擊 **New Remote**，選擇 Dropbox，並在彈出的瀏覽器視窗中核准存取。對 pCloud 重複相同的操作。如果遷移團隊帳號，Dropbox for Business 需要設定 `dropbox_business = true`。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Dropbox 和 pCloud 遠端" class="img-large img-center" />

兩個遠端建立完成後，在兩個 Explorer 面板中分別開啟。將 Dropbox 資料夾樹與 pCloud 目的地並排檢視，便於決定是移動全部內容還是僅移動選定的資料夾。

## 執行前先規劃複製

首次遷移請使用 **Copy** 工作，因為它不會刪除來源端的任何內容。在 4 步驟工作精靈中，選擇 Dropbox 作為來源，選擇專用的 pCloud 資料夾作為目的地。在 Advanced Settings 中，可以為大型相片或文件庫提高檔案傳輸數量；如果希望透過雜湊和大小進行驗證，還可以啟用校驗和比較。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 Dropbox 到 pCloud 的雲端對雲端傳輸" class="img-large img-center" />

篩選也很有幫助。設定最大檔案大小或排除 `.git/` 之類的模式，暫存檔和建置資料夾就不會與其餘內容一起傳輸。請先執行 **Dry Run**：它會列出將要複製的檔案，而不會觸及任何一個帳號。

## 執行、監控和驗證

啟動工作，並在 Transferring 分頁中查看進度、速度和檔案數量。Dropbox 會套用 API 速率限制，因此大型傳輸有時可能會變慢；RcloneView 會重試同步（預設 3 次）而不是放棄。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中監控正在執行的傳輸" class="img-large img-center" />

工作完成後，對 Dropbox 和 pCloud 資料夾開啟 **Compare**。僅存在於左側的檔案是未能送達的內容，「different」檔案則是大小不同的檔案。一鍵將遺漏的檔案複製過去，然後在 Job History 中查看每次執行的狀態、總大小和檔案數量。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 顯示 Dropbox 與 pCloud 的差異" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用 **New Remote** 將 Dropbox 和 pCloud 新增為遠端。
3. 建立以 Dropbox 為來源的 Copy 工作，然後執行 Dry Run。
4. 執行工作，在停用舊帳號之前，使用 Folder Compare 進行驗證。

在 Compare 顯示不再有僅存在於左側的檔案之前，請保持 Dropbox 原樣，這樣原始資料仍可作為後備。

---

**相關指南：**

- [Manage Dropbox Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrate pCloud to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
