---
slug: sync-pcloud-to-google-drive-rcloneview
title: "將 pCloud 同步到 Google Drive — 使用 RcloneView 進行雲端備份"
authors:
  - jay
description: "使用 RcloneView 將 pCloud 同步到 Google Drive：連接兩個遠端，用 Dry Run 預覽，並在一個視窗中排程雲端對雲端備份。"
keywords:
  - 同步 pcloud 到 google drive
  - pcloud 到 google drive 備份
  - RcloneView pcloud
  - 雲端對雲端同步
  - pcloud google drive 傳輸
  - 備份 pcloud 檔案
  - 第二份副本 雲端備份
  - 排程雲端同步
  - rclone GUI
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 pCloud 同步到 Google Drive — 使用 RcloneView 進行雲端備份

> 透過可預覽、可執行、可排程的雲端對雲端同步作業，在 Google Drive 中保留 pCloud 檔案的第二份副本。

把重要檔案只放在一個雲端上，會面臨帳號被鎖定、誤刪除和同步失誤的風險。將 pCloud 鏡像到 Google Drive 可以在另一家供應商處取得獨立副本。RcloneView 透過 OAuth 連接這兩項服務，然後以作業的方式在它們之間同步資料。RcloneView 可在一個視窗中掛載並同步 90 多個供應商，支援 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 pCloud 和 Google Drive

兩家供應商都使用瀏覽器式的 OAuth 登入。在 RcloneView 中開啟新增遠端對話方塊，選擇 pCloud，並在瀏覽器開啟後登入。對 Google Drive 重複相同的操作。授權完成後，每個遠端都會出現在 Remote Manager 和 Explorer 中，您可以在雙窗格版面中並排瀏覽資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 pCloud 和 Google Drive 遠端" class="img-large img-center" />

## 同步前先檢查

設想一位自由工作的設計師，有一個 300 GB 的 pCloud 專案封存，想在 Drive 中建立鏡像。在動任何東西之前，先對這兩個資料夾使用 Folder Compare。它會顯示哪些檔案只存在於一側、哪些不同、哪些相同，讓您清楚知道第一次同步會做什麼。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中比較 pCloud 和 Google Drive 資料夾" class="img-large img-center" />

## 建立同步作業

同步精靈分為四個步驟：選擇來源和目的地、調整進階設定、設定篩選器，以及選用的排程。選擇 pCloud 作為來源，Google Drive 作為目的地，並使用只修改目的地的單向選項。使用篩選器略過暫存檔或限制檔案大小，並執行 Dry Run 查看將被複製或刪除的檔案清單。由於單向同步會讓目的地與來源一致，請務必檢查 Dry Run 輸出中是否有非預期的刪除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 pCloud 到 Google Drive 的雲端對雲端傳輸" class="img-large img-center" />

## 監控與排程

執行作業並即時查看傳輸進度，然後在 Job History 中檢視結果。使用 PLUS 授權時，可以加入 crontab 風格的排程，讓鏡像定期更新（RcloneView 會在 System Tray 中持續執行）。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中為 pCloud 到 Google Drive 的同步作業設定排程" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView**：請從 [rcloneview.com](https://rcloneview.com/src/download.html) 取得。
2. 使用 OAuth 登入將 pCloud 和 Google Drive 新增為遠端。
3. 比較來源資料夾和目的地資料夾，然後建立單向同步作業。
4. 執行 Dry Run，執行作業，並在 Job History 中檢視。

在另一家供應商處擁有經過驗證的第二份副本，可將單點故障轉變為真正的備份。

---

**相關指南：**

- [管理 pCloud 儲存 — 使用 RcloneView 同步和備份檔案](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [將 Google Drive 遷移到 pCloud — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [將 Dropbox 同步到 pCloud — 使用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
