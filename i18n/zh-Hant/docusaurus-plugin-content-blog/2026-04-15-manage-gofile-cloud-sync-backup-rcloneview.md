---
slug: manage-gofile-cloud-sync-backup-rcloneview
title: "管理 Gofile 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "使用 RcloneView 管理 Gofile 雲端儲存 — 透過建構於 rclone 的 Gofile 後端的圖形化介面上傳、整理並同步 Gofile 內容。"
keywords:
  - Gofile 管理
  - Gofile 同步工具
  - Gofile 上傳 GUI
  - RcloneView Gofile
  - Gofile 雲端備份
  - Gofile 檔案傳輸
  - 內容傳遞儲存
  - 多雲端檔案管理
  - Gofile rclone
  - 大檔案上傳服務
tags:
  - RcloneView
  - gofile
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Gofile 儲存空間 — 使用 RcloneView 同步與備份檔案

> Gofile 是一項熱門的檔案代管與分享服務，專為大型檔案上傳而設計 — RcloneView 透過 Access Token 連接 Gofile，並將其整合進您的雲端管理工作流程。

Gofile 是一項檔案代管與分享服務，讓您可以上傳大型檔案並產生可分享的連結，且不受嚴格的容量上限限制。對於經常透過 Gofile 分發內容的使用者來說，僅透過網頁入口管理上傳作業會變得繁瑣。RcloneView 使用 Access Token 連接 Gofile，將您的 Gofile 儲存空間納入與其他所有雲端遠端一致的標準檔案管理工作流程中。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定 Gofile

若要在 RcloneView 中連接 Gofile，請前往 **Remote tab > New Remote**，並從供應商清單中選擇 **Gofile**。您需要從 Gofile 帳戶儀表板取得 **Access Token**。輸入權杖、為遠端命名並儲存。您的 Gofile 帳戶會以可瀏覽的遠端形式出現在檔案總管中，顯示資料夾與檔案，如同其他任何雲端儲存一樣。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Gofile as a new remote in RcloneView" class="img-large img-center" />

Gofile 以資料夾為基礎組織內容，RcloneView 可在清單檢視與縮圖檢視中清楚呈現。您可以瀏覽巢狀資料夾、檢查檔案名稱與大小，並選取多個檔案進行批次操作 — 批次下載、刪除一批舊上傳項目，或在 Gofile 資料夾之間搬移內容。

## 上傳與整理 Gofile 內容

RcloneView 支援直接從本機檔案總管拖放上傳至 Gofile 檔案總管面板。將一批影片檔案從本機資料夾拖曳過去，即可上傳至選定的 Gofile 目的地，無需開啟瀏覽器 — 對於經常透過 Gofile 分發大型影片套件或軟體封存檔的內容創作者特別實用。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Gofile in RcloneView" class="img-large img-center" />

在 **Job Manager** 中建立同步作業，可讓您定期將本機資料夾的內容推送至 Gofile。例如，播客製作人若要將剪輯完成的節目音檔上傳到 Gofile 供聽眾下載，可將此作業自動化，於每次錄音後每週執行一次 — 每次僅同步新增或變更的檔案。

## 將 Gofile 內容備份至永久儲存空間

Gofile 的內容可能有有限的保留期限，或取決於帳戶狀態。對於將 Gofile 作為分發管道、但希望擁有永久備份的使用者，RcloneView 可讓您直接將內容從 Gofile 傳輸至 Amazon S3、Backblaze B2 或任何其他雲端遠端。設定複製作業以從 Gofile 拉取內容並封存於長期儲存空間中 — 為您分享過的所有內容保留永久副本。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Gofile backup transfers in RcloneView" class="img-large img-center" />

**Job History** 分頁會追蹤每次傳輸的詳細資訊，包括傳輸位元組數、傳輸檔案數、耗時與狀態 — 讓您隨時掌握 Gofile 內容是否已成功封存。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往 **Remote tab > New Remote**，選擇 **Gofile**，並輸入您的 Access Token。
3. 在檔案總管面板中瀏覽您的 Gofile 內容。
4. 使用 **Job Manager** 將本機內容同步至 Gofile，或將 Gofile 內容複製到備份儲存空間。

透過 RcloneView 使用 Gofile，可為內容分發者在 Gofile 快速上傳與分享的基礎架構之上，提供完善的檔案管理層 — 將零散的上傳作業轉變為井然有序、自動化的工作流程。

---

**相關指南：**

- [管理 Backblaze B2 雲端儲存 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將大型檔案上傳至 Google Drive](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)
- [Copy URL — 使用 RcloneView 直接將檔案下載至雲端](https://rcloneview.com/support/blog/copyurl-download-url-to-cloud-rcloneview)

<CloudSupportGrid />
