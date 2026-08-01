---
slug: manage-leviia-cloud-sync-backup-rcloneview
title: "管理 Leviia 物件儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - casey
description: "將 Leviia 相容 S3 的物件儲存連接到 RcloneView，實現拖放式檔案管理、排程備份與跨雲同步。"
keywords:
  - Leviia 物件儲存
  - Leviia S3
  - RcloneView Leviia
  - 管理 Leviia 檔案
  - Leviia 雲端備份
  - Leviia 同步
  - S3 相容儲存 GUI
  - 歐洲物件儲存
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Leviia 物件儲存 — 使用 RcloneView 同步與備份檔案

> 在管理其他所有雲端服務的同一個視窗中瀏覽、同步並備份 Leviia 相容 S3 的物件儲存。

Leviia 提供託管於歐洲的相容 S3 物件儲存，對於既想要資料落地保證、又不想放棄已經適用於 S3 的工具生態的團隊來說，是常見的選擇。缺點是相容 S3 的服務供應商很少提供打磨完善的專屬桌面用戶端，使用者往往只能撰寫指令碼上傳，或直接使用陽春的命令列。RcloneView 將 Leviia 視為和其他遠端完全一樣的儲存來處理，藉此消除這種摩擦——完整的檔案瀏覽、拖放式傳輸、排程同步工作，全程無需任何指令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連線 Leviia 儲存貯體

由於 Leviia 採用 S3 協定，您可以像新增 Amazon S3 或 Wasabi 一樣將其新增到 RcloneView：建立一個新的遠端，選擇相容 S3 的服務供應商選項，然後輸入您所在帳戶區域對應的 Access Key、Secret Key 以及 Leviia 端點 URL。儲存後，該儲存貯體會以一般分頁的形式出現在 Explorer 面板中，隨時可以瀏覽與傳輸。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Leviia object storage remote in RcloneView" class="img-large img-center" />

RcloneView 可在同一視窗掛載並同步 90 個以上的服務供應商，且支援 Windows、macOS 與 Linux，因此 Leviia 儲存貯體可以與您管理的其他任何雲端帳戶並列出現，無需切換工具。

## 瀏覽與整理 Leviia 儲存

連線完成後，Leviia 儲存貯體在 Explorer 中的表現與本機資料夾完全一致。可以依名稱、類型、修改日期或大小排序，為存滿圖片的儲存貯體切換到縮圖檢視，並使用 Get Size 檢視某個資料夾佔用的空間，再決定是否將其歸檔到別處。使用 Ctrl+Click 或 Shift+Click 進行多選，無需撰寫指令碼迴圈即可完成批次下載與刪除。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing Leviia bucket contents in RcloneView" class="img-large img-center" />

## 與 Leviia 之間進行備份

對於經常性備份，可以設定以 Leviia 作為來源或目標的同步工作。四步驟精靈涵蓋並行傳輸數、依雜湊值與大小而非僅依時間戳記比對檔案的核對總和驗證，以及排除不想歸檔的檔案類型的篩選規則。在針對存有正式環境資料的儲存貯體執行同步工作之前，先執行一次 Dry Run 預覽將複製或刪除的內容是值得的。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Leviia backup job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 建立一個新的遠端，並選擇相容 S3 的服務供應商類型。
3. 輸入您的 Leviia Access Key、Secret Key 與端點 URL。
4. 設定一個 Sync 或 Copy 工作，在 Leviia 與其他雲端遠端之間移動檔案。

一旦 Leviia 接入 RcloneView，管理物件儲存就不再是撰寫指令碼的苦差事，而成為日常檔案操作的一部分。

---

**相關指南：**

- [使用 RcloneView 管理 Ceph 物件儲存 — 面向 Ceph 叢集的 S3 相容 GUI](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [管理 Scaleway 物件儲存 — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 IONOS 物件儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
