---
slug: thumbnail-view-image-preview-cloud-rcloneview
title: "縮圖檢視——在 RcloneView 中以視覺化方式瀏覽及預覽雲端圖片"
authors:
  - tayson
description: "使用 RcloneView 的縮圖檢視功能，以視覺化方式瀏覽並預覽儲存在雲端儲存中的圖片檔案。快速辨識照片並管理媒體資產，無需下載所有檔案。"
keywords:
  - RcloneView thumbnail view
  - cloud image preview GUI
  - browse cloud photos visually
  - rclone image thumbnail preview
  - cloud storage photo browsing
  - visual file manager cloud
  - RcloneView image gallery
  - cloud storage thumbnail feature
tags:
  - RcloneView
  - feature
  - photography
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 縮圖檢視——在 RcloneView 中以視覺化方式瀏覽及預覽雲端圖片

> RcloneView 的縮圖檢視功能會將儲存在雲端儲存中的圖片檔案呈現為視覺化格線，讓您無需先下載即可一眼辨識照片。

大多數雲端儲存 GUI 工具都以純文字清單顯示檔案：檔名、大小、日期。這對文件與程式碼來說沒有問題，但對於需要在包含數百甚至數千個檔案的雲端資料夾中，以視覺方式辨識特定圖片的攝影師、設計師和媒體團隊來說，卻相當令人沮喪。RcloneView 的縮圖檢視模式會直接在檔案總管面板中，將儲存在雲端儲存中的圖片呈現為預覽格線——大幅加快照片庫與媒體資產的視覺化檔案管理速度。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 切換至縮圖檢視

在任何檔案總管面板中，找到面板工具列上的檢視模式切換按鈕。RcloneView 提供三種檢視模式：

- **清單檢視**——詳細欄位（名稱、大小、日期、類型）
- **樹狀檢視**——資料夾階層瀏覽
- **縮圖檢視**——圖片預覽格線

點選縮圖檢視圖示，即可為目前面板啟用此模式。RcloneView 會擷取目前資料夾中圖片的預覽資料，並以格線方式呈現。此功能適用於常見的圖片格式：JPEG、PNG、GIF、WebP，以及底層雲端供應商縮圖 API 所支援的其他格式。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Switching to Thumbnail View in RcloneView Explorer panel" class="img-large img-center" />

## 適合攝影師與設計師的使用情境

**篩選照片庫：** 一位婚攝攝影師在 Google Drive 中儲存了 3,000 組 RAW+JPEG 檔案，可以切換至縮圖檢視以視覺化方式瀏覽 JPEG 檔案、挑選精選照片，並將其拖曳至獨立的交付資料夾——全程無需下載檔案或開啟 Lightroom。

**檢視客戶交付的素材：** 一位透過 Dropbox 收到客戶圖片素材的平面設計師，可以預覽縮圖格線，在開始工作前快速確認收到的檔案是否正確。

**管理社群媒體內容：** 一支行銷團隊將核准的社群媒體圖片儲存在 S3 儲存桶中，可使用縮圖檢視瀏覽並選取本週貼文所需的圖片，全程無需離開 RcloneView。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing a photo library in cloud storage with RcloneView Thumbnail View" class="img-large img-center" />

## 縮圖檢視搭配多面板版面配置

將縮圖檢視與 RcloneView 的多面板版面配置結合，打造強大的視覺化工作流程。開啟兩個面板：左側以縮圖檢視顯示您的來源資料夾（例如 `dropbox:/Shoots/Raw/`），右側以清單檢視顯示您的交付資料夾（例如 `google-drive:/Client Deliverables/`）。在縮圖格線中以視覺方式選取圖片，並直接拖曳至目標面板——完全在雲端儲存中完成快速、視覺化的篩選與交付工作流程。

在縮圖檢視中使用 Ctrl+Click 選取多張圖片，再按右鍵執行批次操作：複製、移動、下載或取得公開連結。清單檢視中所有標準的檔案操作，在縮圖檢視中同樣可用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multi-panel workflow with Thumbnail View for cloud image management in RcloneView" class="img-large img-center" />

## 供應商相容性說明

縮圖檢視仰賴雲端供應商透過 API 提供圖片預覽的能力。Google Drive、Dropbox 與 OneDrive 原生提供縮圖 URL，因此預覽呈現速度較快。相容 S3 的供應商（Amazon S3、Backblaze B2、Wasabi、Cloudflare R2）則提供原始圖片資料，而沒有專用的縮圖 API——預覽是由原始圖片產生，對大型檔案而言可能較慢。

為求在縮圖檢視中獲得最佳效能，建議每次瀏覽適量圖片的資料夾（每頁 50–200 張），而非嘗試同時呈現數千張縮圖。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過「新增遠端」連接您的照片儲存供應商（Google Drive、Dropbox、S3 等）。
3. 在檔案總管面板中瀏覽至您的圖片資料夾，並點選縮圖檢視圖示。
4. 使用 Ctrl+Click 選取圖片，並透過拖放在面板之間移動或複製。

縮圖檢視讓 RcloneView 成為適用於媒體工作流程的視覺化雲端檔案管理工具——為每天處理儲存在雲端儲存中圖片的使用者節省時間。

---

**相關指南：**

- [用 RcloneView 整理您的雲端照片庫](https://rcloneview.com/support/blog/declutter-cloud-photo-library-rcloneview)
- [攝影師使用 RcloneView 進行多雲端交付](https://rcloneview.com/support/blog/photographer-multi-cloud-delivery-with-rcloneview)
- [管理 Google 相簿儲存空間——使用 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
