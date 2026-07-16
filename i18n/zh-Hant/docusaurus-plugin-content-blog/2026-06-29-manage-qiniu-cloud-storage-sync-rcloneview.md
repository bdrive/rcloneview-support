---
slug: manage-qiniu-cloud-storage-sync-rcloneview
title: "管理七牛雲物件儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - kai
description: "將七牛雲 Kodo 物件儲存連接至 RcloneView，並透過單一 GUI 在 Windows、macOS 與 Linux 上跨 90 多個雲端服務商同步、備份或傳輸檔案。"
keywords:
  - Qiniu Cloud storage sync
  - Kodo object storage GUI
  - RcloneView Qiniu setup
  - Qiniu S3 compatible rclone
  - sync files to Qiniu Cloud
  - Qiniu backup client Windows
  - Qiniu cloud storage manager
  - transfer files Qiniu RcloneView
  - Qiniu Kodo S3 desktop client
  - manage Qiniu buckets GUI
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理七牛雲物件儲存 — 使用 RcloneView 同步與備份檔案

> 將七牛雲的 Kodo 物件儲存連接至 RcloneView 的雙窗格介面,無需使用 CLI 即可處理上傳、備份與跨雲端傳輸。

七牛雲(七牛云)是中國領先的雲端基礎設施服務商之一,其 Kodo 物件儲存服務廣泛應用於媒體傳輸、應用程式資產管理與大規模資料封存。由於 Kodo 實作了與 S3 相容的 API,RcloneView 可使用與 Amazon S3、Wasabi 或 Cloudflare R2 相同的流程連接至 Kodo — 無需任何特殊外掛程式。與僅支援掛載的工具不同,RcloneView 在免費授權下也可將資料夾與 Kodo 及其他 90 多個服務商進行同步與比對,是混合雲端環境團隊實用的單一工具。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中將七牛雲 Kodo 設定為 S3 遠端

若要新增七牛雲 Kodo,請開啟 **Remote** 分頁並點選 **New Remote**。從服務商清單中選擇 S3 通訊協定,然後選擇 **Qiniu** 作為 S3 服務商。你需要從七牛雲控制台取得三項憑證:**Access Key**、**Secret Key**,以及儲存桶所在區域的**區域端點**。輸入完成後,RcloneView 會將設定儲存至本機的 rclone 設定檔,遠端隨即會出現在檔案總管面板中。

無需另外安裝 rclone — RcloneView 內建了 rclone 執行檔,可處理所有 API 通訊。若你已在外部管理 rclone,也可以透過 Settings > Connect Manager 將 RcloneView 連接至該執行個體。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Qiniu Cloud S3 remote in RcloneView" class="img-large img-center" />

儲存後,你的 Kodo 儲存桶會出現在面板的分頁列中。點選任一儲存桶即可在檔案清單中瀏覽其內容,欄位會顯示名稱、類型、修改日期與大小。

## 瀏覽與管理 Kodo 儲存桶

RcloneView 的雙窗格版面配置讓你可以在同一個視窗中同時操作七牛雲 Kodo 與其他任何遠端 — 本機資料夾、Google Drive、企業 S3 儲存桶等。從本機面板將檔案拖曳至 Kodo 面板即可上傳,反向拖曳則可下載。在兩個七牛雲遠端(或儲存桶)之間搬移檔案時,會直接複製而不經過本機磁碟。

如需批次作業,可使用 Shift+Click 或 Ctrl+Click 選取多個物件,然後一次執行複製、搬移或刪除。瀏覽圖片較多的 Kodo 儲存桶時,縮圖檢視模式相當實用。在執行任何具破壞性的操作之前,**Dry Run** 按鈕會預覽確切會受影響的檔案 — 這在清理正式環境資產時是重要的安全機制。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files between local storage and Qiniu Kodo buckets in RcloneView" class="img-large img-center" />

## 使用七牛雲同步與備份檔案

RcloneView 的 4 步驟同步精靈可設定針對 Kodo 的可重複執行任務。在**步驟 1** 中,選擇七牛雲作為來源或目的地,並將其與另一個遠端配對 — 例如,將本機媒體庫同步至 Kodo 儲存桶以進行 CDN 分發。在**步驟 2** 中,調整平行傳輸數量並啟用校驗碼驗證,以確認每個上傳的物件與來源逐位元相同。**步驟 3** 提供檔案類型篩選、時間範圍與大小限制,讓你可以排除快取檔案或將同步範圍限制於近期修改的資產。

擁有 PLUS 授權後,**步驟 4** 會解鎖類似 cron 的排程功能:設定從正式環境伺服器目錄至 Kodo 的每夜備份,RcloneView 便會在背景自動執行。**1:N 同步**功能可讓單一來源同時複製至多個目的地 — 適合在單一任務中將相同的資產集分發至七牛雲 Kodo 與次要 S3 封存空間。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Qiniu Cloud Kodo in RcloneView" class="img-large img-center" />

## 監控傳輸與任務歷史記錄

RcloneView 底部的 **Transferring** 分頁會即時顯示 Kodo 進行中任務的進度:檔案名稱、已傳輸位元組數、目前速度與整體完成度。例如,若要進行大規模的初始資料匯入 — 將數百 GB 的影片資產上傳至新的儲存桶 — 這個即時傳輸監控畫面可省去另外使用監控儀表板的需求。

**Job History** 分頁會記錄每次完成的執行,包含開始時間、耗時、總大小、傳輸速度、檔案數量與狀態。可依日期範圍或任務類型篩選,以稽核數週或數月的同步活動。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Qiniu Cloud sync runs in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 **Remote** 分頁,點選 **New Remote**,選擇 S3 通訊協定,並選擇 **Qiniu** 作為服務商。
3. 輸入你在七牛雲控制台取得的 **Access Key**、**Secret Key** 與區域端點。
4. 建立指向你的 Kodo 儲存桶的同步任務,並執行以備份本機檔案或在七牛雲與其他雲端之間傳輸資料。

連接七牛雲 Kodo 後,RcloneView 讓你可以在與其他所有服務商相同的介面中,完全掌控你的中國雲端物件儲存。

---

**相關指南:**

- [管理 Amazon S3 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [管理 Cloudflare R2 儲存 — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [管理 Wasabi 雲端儲存 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
