---
slug: manage-stackpath-cloud-sync-backup-rcloneview
title: "管理 StackPath 物件儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - jay
description: "將 StackPath 物件儲存連接到 RcloneView,享受拖放式檔案管理、排程備份與跨雲端同步。"
keywords:
  - StackPath 物件儲存
  - StackPath S3
  - RcloneView StackPath
  - 管理 StackPath 檔案
  - StackPath 備份
  - StackPath 雲端同步
  - S3 相容儲存 GUI
  - 邊緣物件儲存
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 StackPath 物件儲存 — 使用 RcloneView 同步與備份檔案

> 在你管理其他所有雲端儲存的同一個視窗中,瀏覽、同步並備份 StackPath 相容 S3 的物件儲存。

StackPath 物件儲存提供 S3 相容 API,這代表它能與以 rclone 為基礎的工具良好搭配,但很少內建專屬的桌面 GUI。團隊最終得靠腳本上傳檔案,或在多個 CLI 工作階段之間切換,只為了查看儲存桶裡有什麼。RcloneView 將 StackPath 視為一般遠端來處理,填補了這個落差 —— 不必寫任何指令,即可獲得完整的檔案瀏覽、拖放傳輸與排程工作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 StackPath 儲存桶

由於 StackPath 使用 S3 通訊協定,你可以用新增 Amazon S3 或 Wasabi 的相同方式將它加入 RcloneView:建立新遠端,選擇 S3 相容供應商選項,然後提供你的存取金鑰、私密金鑰,以及所在地區的 StackPath 端點 URL。連線完成後,儲存桶會以一般分頁的形式出現在 Explorer 面板中 —— 不需要另外的憑證檔案,也不需要終端機來確認連線是否成功。

在 FREE 授權下即可完整讀寫連接 S3、Azure 或 Backblaze B2,因此將 StackPath 與另一個 S3 相容帳戶搭配使用,不必升級即可開始搬移檔案。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a StackPath object storage remote in RcloneView" class="img-large img-center" />

## 日常瀏覽與管理檔案

遠端設定完成後,StackPath 儲存桶在 RcloneView 的 Explorer 中的行為與本機資料夾完全相同。你可以依名稱、類型、修改日期或大小排序,對圖片較多的儲存桶切換為縮圖檢視,並在決定是否封存到別處之前,使用 Get Size 查看某個資產資料夾佔用的空間。以 Ctrl+按一下或 Shift+按一下進行多選的方式與本機磁碟機相同,因此大量刪除或大量下載只需幾秒鐘,而不必撰寫腳本。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing StackPath bucket contents in RcloneView" class="img-large img-center" />

## 備份到 StackPath 或從 StackPath 備份

若要定期備份,可設定以 StackPath 作為來源或目的地的 Sync 工作。四步驟精靈能讓你設定並行傳輸數量,啟用以雜湊值而非僅以時間戳記比對檔案的校驗和驗證,並套用篩選條件排除不需要封存的檔案類型。在確定傳輸前,先執行 Dry Run 準確預覽將會複製或刪除哪些內容 —— 當儲存桶存放正式環境資產時,這是一項實用的保障措施。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a StackPath backup job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 建立新遠端並選擇 S3 相容供應商類型。
3. 輸入你的 StackPath 存取金鑰、私密金鑰與端點。
4. 設定 Sync 或 Copy 工作,在 StackPath 與其他遠端之間搬移檔案。

將 StackPath 接上 RcloneView 之後,管理物件儲存就不再是撰寫腳本的苦差事,而成為你日常檔案工作流程的一部分。

---

**相關指南:**

- [管理 Ceph 物件儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [管理 Scaleway 物件儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [修復 S3 存取遭拒 — 使用 RcloneView 解決權限錯誤](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
