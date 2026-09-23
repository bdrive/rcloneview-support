---
slug: manage-http-remote-cloud-sync-rcloneview
title: "管理 HTTP 遠端儲存空間 — 用 RcloneView 瀏覽並同步檔案"
authors:
  - alex
description: "將唯讀的 HTTP 檔案索引連接到 RcloneView，並將其內容同步到 Google Drive、S3、Backblaze B2 等 90 個以上的雲端儲存供應商。"
keywords:
  - HTTP 遠端 RcloneView
  - HTTP 檔案伺服器同步
  - 唯讀 HTTP 儲存空間
  - HTTP 同步到雲端
  - HTTP 目錄清單 rclone
  - HTTP 到 Google Drive
  - HTTP 到 Amazon S3
  - 封存 HTTP 檔案
  - RcloneView HTTP 連線
  - 瀏覽 HTTP 遠端
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 HTTP 遠端儲存空間 — 用 RcloneView 瀏覽並同步檔案

> RcloneView 可以把任何公開的 HTTP 檔案索引變成可瀏覽的遠端，讓你不需要一行 wget 指令，就能把其中的內容拉取到 Google Drive、S3 或其他 90 個以上的雲端供應商。

大量的資料集、韌體封存、研究鏡像與內部建置成品，如今仍存放在單純的 HTTP 目錄清單背後——沒有 API、沒有登入，只有透過 URL 提供的資料夾與檔案。從這類來源下載，通常意味著要撰寫 curl 或 wget 迴圈指令碼，並祈禱目錄結構在執行期間不會改變。RcloneView 會將任何 HTTP 端點連接為唯讀遠端，讓你在瀏覽雲端儲存時所使用的同一個檔案總管面板中瀏覽它，然後把所需內容複製到合適的備份目的地。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 HTTP 遠端

開啟 **Remote** 分頁並點擊 **New Remote**，然後從供應商清單中選擇 HTTP。輸入你想瀏覽的檔案索引基礎 URL——RcloneView 會讀取伺服器的目錄清單，並以一般資料夾樹狀結構呈現。由於 HTTP 遠端在設計上是唯讀的，因此沒有 OAuth 流程，也沒有需要管理的憑證：你可以列出、瀏覽並下載檔案，但無法在來源伺服器上上傳、重新命名或刪除任何內容。

這項差異決定了你該如何使用這種遠端類型。與僅支援掛載的工具不同，RcloneView 在 FREE 授權下也提供同步與資料夾比較功能，因此 HTTP 遠端最適合作為你拉取資料的來源，另一側則搭配可寫入的雲端或本機目的地。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 HTTP 遠端" class="img-large img-center" />

## 瀏覽並下載 HTTP 索引中的內容

連線完成後，HTTP 遠端的運作方式與 RcloneView 多面板檔案總管中的其他面板相同。展開資料夾樹狀結構，在伺服器有提供相關資訊時查看檔案大小與修改日期，並使用 Ctrl+Click 或 Shift+Click 選取多個檔案或子資料夾後再下載。在相鄰面板中開啟 Backblaze B2 儲存貯體或 Google Drive 資料夾等雲端目的地，把檔案拖曳過去即可開始傳輸。

對於鏡像公開資料集封存、從供應商的 HTTP 發布據點拉取韌體映像，或封存僅提供目錄清單的內部建置伺服器快照的團隊而言，這是常見的做法。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中將檔案從 HTTP 遠端複製到雲端儲存空間" class="img-large img-center" />

## 排程從 HTTP 來源定期拉取

如果 HTTP 索引會定期更新——例如夜間建置或每週資料集刷新——可以設定一個以 HTTP 遠端為來源、以雲端儲存空間為目的地的 Job Manager 項目。由於不同伺服器所公開的中繼資料多寡可能不同，建議先執行 **Dry Run**，準確確認即將複製的檔案，以便在實際傳輸前驗證檔案比對是否符合預期。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程從 HTTP 遠端拉取檔案的定期工作" class="img-large img-center" />

使用 **PLUS 授權**，可以為工作附加 crontab 風格的排程，讓 HTTP 伺服器上發布的新檔案依照該排程進入你的雲端封存，之後可在 **Job History** 分頁中確認傳輸數量，並找出來源伺服器已停止提供的檔案。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 **Remote** > **New Remote**，從供應商清單中選擇 HTTP。
3. 輸入目錄清單的基礎 URL 並儲存該遠端。
4. 在一個面板中開啟 HTTP 遠端，在另一個面板中開啟你的雲端目的地。
5. 使用 **Job Manager** 設定同步工作，並在首次實際拉取前執行 Dry Run。

連接 HTTP 來源之後，把檔案拉取到雲端封存就從每次都得記得重新執行的一次性指令碼，變成了可重複執行、可稽核的工作。

---

**相關指南：**

- [Connect Any WebDAV Server to RcloneView — Sync with Google Drive, S3, and 90+ Clouds](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Connect Any SFTP Server to RcloneView — Sync Remote Servers with Cloud Storage](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Manage FTP Server Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
