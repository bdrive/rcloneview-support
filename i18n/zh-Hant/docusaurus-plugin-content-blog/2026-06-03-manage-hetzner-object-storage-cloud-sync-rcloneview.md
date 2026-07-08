---
slug: manage-hetzner-object-storage-cloud-sync-rcloneview
title: "管理 Hetzner Object Storage — 使用 RcloneView 同步與備份檔案"
authors:
  - kai
description: "了解如何將 Hetzner Object Storage 連接至 RcloneView，以實現自動化同步與備份。透過簡單的 GUI 管理相容 S3 的儲存桶——無需使用 CLI。"
keywords:
  - Hetzner Object Storage
  - Hetzner 雲端備份
  - RcloneView Hetzner
  - 相容 S3 的雲端儲存
  - Hetzner 同步檔案
  - 雲端備份 GUI
  - Hetzner rclone
  - 物件儲存備份
  - 歐洲雲端儲存
  - Hetzner 儲存桶管理
tags:
  - RcloneView
  - hetzner
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Hetzner Object Storage — 使用 RcloneView 同步與備份檔案

> 將 Hetzner Object Storage 連接至 RcloneView，無需撰寫任何 CLI 指令即可自動化你的備份作業。

Hetzner Object Storage 是一項相容 S3 的雲端儲存服務，為需要可靠、以歐洲為基礎的資料儲存的團隊提供極具競爭力的價格。無論你是要封存專案檔案、備份伺服器快照，還是從其他雲端複寫資料，RcloneView 都能提供視覺化介面來管理這一切。你設定 Hetzner 的方式與設定任何相容 S3 的服務供應商相同——使用存取金鑰（access key）、私密金鑰（secret key）以及你的儲存桶端點（bucket endpoint）——接著透過與管理其他遠端相同的雙面板檔案總管來管理所有內容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Hetzner Object Storage 連接至 RcloneView

Hetzner Object Storage 使用 S3 協定，因此在 RcloneView 中的設定方式與 Amazon S3 或 Wasabi 相同。開啟**遠端分頁（Remote tab）**並點擊**新增遠端（New Remote）**。從服務供應商清單中選擇 **S3**，並選擇 **Hetzner** 作為服務供應商。你需要從 Hetzner Cloud Console 取得三項資訊：**Access Key ID**、**Secret Access Key**，以及你所選區域的**端點 URL（endpoint URL）**——例如，Falkenstein 區域的端點為 `fsn1.your-objectstorage.com`。

輸入憑證與區域端點後，點擊**儲存（Save）**。RcloneView 會建立連線，你的 Hetzner 儲存桶會立即以可瀏覽的資料夾形式顯示在檔案總管中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Hetzner Object Storage remote in RcloneView" class="img-large img-center" />

連接後，你可以瀏覽儲存桶、透過拖放上傳檔案、下載物件、重新命名項目、刪除檔案，以及建立新資料夾——完全不需要使用終端機。麵包屑路徑列會顯示你目前在儲存桶階層中的位置，頁尾則會彙總任何已選取目錄的檔案總數與大小。

## 上傳與整理檔案

RcloneView 的雙面板檔案總管讓你在 Hetzner Object Storage 與本機或其他雲端之間搬移資料變得更加實用。在左側面板開啟你的本機磁碟，並在右側面板開啟你的 Hetzner 遠端，接著拖曳檔案跨面板搬移。若要從 Windows Explorer 上傳，你可以直接將檔案拖曳至 RcloneView 的面板中，一步就能將檔案放入你的 Hetzner 儲存桶。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to Hetzner Object Storage in RcloneView" class="img-large img-center" />

對於大型資料集——例如一家媒體製作公司要備份 500 GB 的算圖輸出——同步精靈中的**多執行緒傳輸（multi-threaded transfer）**設定可讓你以更多平行方式傳送資料。預設的 4 個並行串流適用於大多數連線，但在高頻寬連線上針對大型檔案增加此數值，可大幅縮短傳輸時間。

## 執行同步與備份作業

對於持續進行的備份工作流程，RcloneView 的**作業管理員（Job Manager）**會提供一份持續存在的已設定同步作業清單，你可以隨時或依排程執行。從**首頁分頁（Home tab）**開啟它，並點擊**新增作業（Add Job）**以啟動 4 步驟同步精靈：

1. **步驟 1：** 設定你的來源（本機資料夾或其他遠端）與目的地（你的 Hetzner 儲存桶或其中的子目錄），然後為該作業命名
2. **步驟 2：** 設定並行設定——檔案傳輸數量、多執行緒數量，以及是否啟用校驗碼驗證（checksum verification）進行完整性檢查
3. **步驟 3：** 新增篩選規則，以排除你不想放入 Hetzner 的檔案類型或路徑，例如 `.tmp` 檔案或 `/cache/` 目錄
4. **步驟 4（PLUS 授權）：** 設定 crontab 樣式的排程，讓備份在指定間隔自動執行

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Hetzner Object Storage in RcloneView" class="img-large img-center" />

在提交新作業前，使用**試跑（Dry Run）**選項預覽究竟會複製或刪除哪些檔案。這在你第一次設定同步時，或每當你修改篩選規則時特別有用，能確保沒有重要檔案被誤排除。

## 檢視傳輸歷史紀錄

作業執行後，**作業歷史紀錄（Job History）**檢視畫面會記錄每一次執行的詳情：開始時間、持續時間、傳輸總大小、平均速度、檔案數量，以及最終狀態。對於每晚都要備份至 Hetzner Object Storage 的團隊而言，這份紀錄提供了清楚的稽核軌跡，顯示哪些執行順利完成、哪些發生錯誤——無論是用於疑難排解，還是用於證明符合資料保存政策，都很有幫助。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Hetzner Object Storage sync in RcloneView" class="img-large img-center" />

歷史紀錄篩選器可讓你依日期範圍（今天、昨天、上週、上個月）縮小結果範圍，讓你能快速找到特定備份時段的紀錄，而不必翻閱整份日誌。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往**遠端分頁 > 新增遠端**，選擇 **S3**，並選擇 **Hetzner** 作為服務供應商。
3. 輸入你在 Hetzner Cloud Console 取得的 Hetzner Access Key ID、Secret Access Key 與區域端點。
4. 開啟**作業管理員**，建立一個以你的 Hetzner 儲存桶為目的地的同步作業，並點擊**執行作業（Run Job）**。

連接 Hetzner Object Storage 後，你就能透過簡潔的 GUI 完全管理可靠的歐洲雲端物件儲存——完全不需要 rclone 指令。

---

**相關指南：**

- [管理 Hetzner Storage Box — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [管理 Wasabi 雲端儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [管理 Cloudflare R2 — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
