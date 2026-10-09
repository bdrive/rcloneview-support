---
slug: sync-onedrive-to-box-rcloneview
title: "將 OneDrive 同步到 Box — 使用 RcloneView 進行雲端備份"
authors:
  - alex
description: "使用 RcloneView 將 OneDrive 同步到 Box：透過 OAuth 連接兩者，先以 Dry Run 預覽，再執行雲端對雲端同步，並用 Folder Compare 驗證。"
keywords:
  - OneDrive 同步到 Box
  - OneDrive 到 Box 備份
  - OneDrive Box 同步工具
  - 複製 OneDrive 到 Box
  - 雲端對雲端同步
  - OneDrive Box 移轉
  - RcloneView
  - rclone GUI
  - 資料夾比較
  - 排程雲端同步
tags:
  - RcloneView
  - onedrive
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 OneDrive 同步到 Box — 使用 RcloneView 進行雲端備份

> 在 Box 中保留 OneDrive 檔案的第二份副本，資料直接在兩個雲端之間移動。

團隊內部常使用 OneDrive，但客戶、合作夥伴或合規流程卻要求檔案放在 Box 中。將所有內容下載後再重新上傳既慢，又需要你可能沒有的本機磁碟空間。RcloneView 連接這兩項服務並進行雲端對雲端同步，事前可以先執行 Dry Run，事後可以直觀地比較。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 OneDrive 與 Box

兩項服務都使用 OAuth 瀏覽器登入。在 Remote 分頁中點擊 **New Remote**，選擇 Microsoft OneDrive 並登入，然後對 Box 重複相同的操作。若為 Box Business 或 Enterprise 帳號，請在設定時指定 `box_sub_type = enterprise`。

RcloneView 可在單一視窗中掛載並同步 90 種以上的服務供應商，支援 Windows、macOS 與 Linux。兩個遠端建立完成後，將它們分別在兩個 Explorer 面板中並排開啟。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 OneDrive 與 Box 遠端" class="img-large img-center" />

## 選擇複製或同步，然後執行 Dry Run

開啟 Sync 精靈，選擇 OneDrive 作為來源，Box 中的某個資料夾作為目的地。單向同步只會修改目的地，因此從 OneDrive 刪除的檔案也會從 Box 刪除。如果你想要的是安全網而非鏡像，請改用 Copy 作業。

請先執行 **Dry Run**。它會在不做任何變更的情況下列出將被複製與將被刪除的檔案。例如，會計團隊在同步一個 150 GB 的 “Clients” 資料夾時，可以在正式執行前確認資料夾結構並找出多餘的暫存檔。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 OneDrive 到 Box 的雲端對雲端同步" class="img-large img-center" />

## 篩選並調整作業

精靈的第 2 步用於設定檔案傳輸數、多執行緒傳輸數以及 equality checker（相等性檢查器）數量。若希望使用雜湊加大小，而不是僅比較大小與時間，請啟用檢查碼比較。第 3 步可依最大大小、時間或自訂規則排除檔案，也可使用針對文件或圖片的預先定義篩選器。Box 有取決於方案的上傳大小限制，因此在同步超大檔案之前請先查看你的帳號。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="啟動 OneDrive 到 Box 的同步作業" class="img-large img-center" />

## 監控、比較與排程

在 Transferring 分頁中檢視進度，其中顯示速度、檔案數量與大小。完成後開啟 **Compare**，左側為 OneDrive，右側為 Box，並篩選僅存在於左側或有差異的檔案。Job History 會保存每次執行的狀態、耗時與大小。

使用 PLUS 授權時，可以在第 4 步新增 crontab 風格的排程，讓同步在 RcloneView 於系統匣中執行期間每晚重複進行。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OneDrive 與 Box 之間的 Folder Compare" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote 分頁中新增 OneDrive 與 Box 遠端。
3. 建立從 OneDrive 到 Box 的 Sync 或 Copy 作業，並執行 Dry Run。
4. 執行作業，然後透過 Folder Compare 與 Job History 進行驗證。

在 Box 中保留一份經過驗證的第二副本，無論團隊之後使用哪個平台，都能有可靠的後備。

---

**相關指南：**

- [管理 OneDrive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [管理 Box 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [將 Box 移轉到 OneDrive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
