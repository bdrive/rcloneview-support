---
slug: get-public-link-share-files-rcloneview
title: "取得公開連結 — 使用 RcloneView 即時分享雲端檔案"
authors:
  - kai
description: "了解如何直接在 RcloneView 的檔案總管中為雲端檔案產生可分享的公開連結，不需開啟瀏覽器分頁。"
keywords:
  - 取得公開連結
  - 分享雲端檔案
  - 雲端儲存分享連結
  - RcloneView公開連結
  - Google雲端硬碟分享連結
  - Dropbox分享連結
  - Box分享連結
  - 雲端檔案分享
  - rclone公開連結
  - OneDrive分享連結
tags:
  - RcloneView
  - feature
  - file-management
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 取得公開連結 — 使用 RcloneView 即時分享雲端檔案

> 跳過瀏覽器：在 RcloneView 中對任何檔案按右鍵，幾秒鐘內即可產生可分享的公開連結。

從雲端分享單一檔案，通常代表要開啟瀏覽器分頁、登入服務商的網頁主控台、尋找分享按鈕，然後複製一個不確定權限是否符合預期的連結。RcloneView 將整個流程濃縮成右鍵選單中的一個項目。如果你在同一個檔案總管中管理跨多個服務商的檔案，這種一致性帶來的價值遠超過表面看來的樣子 —— 你不再需要在五個不同的網頁介面之間來回切換，只為了傳送一個檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 取得公開連結的運作方式

**取得公開連結（Get Public Link）** 指令與 Copy、Cut、Rename、Download 位於同一個右鍵操作選單中。在任一已連線遠端的檔案清單中選取一個或多個檔案，按右鍵並選擇 Get Public Link。RcloneView 會將請求轉交給底層的 rclone 後端，該後端會向服務商的 API 請求，以其所支援的權限（唯讀、限時、密碼保護等）產生連結。

由於這是服務商特有的行為，實際的連結格式與選項會有所不同。Dropbox 的連結與 Box 的連結行為不同，並非所有遠端類型都支援公開連結 —— 像一般 SFTP 或 FTP 伺服器這類以通訊協定為基礎的遠端，通常沒有消費型雲端硬碟那種「分享」概念。RcloneView 不會假裝提供一個萬用按鈕卻在不支援的遠端上悄悄失敗，而是如實顯示後端實際支援的功能。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote explorer with right-click context menu open" class="img-large img-center" />

## 融入日常工作流程

需要處理客戶交付項目、行銷素材或單次文件請求的團隊，最能從這種在檔案所在的同一視窗中產生連結的方式中受益。你不需要記住檔案位於哪個服務商，也不需要另外開啟該服務商的網站，只要在 RcloneView 的 Explorer 面板中瀏覽到該檔案，就地產生連結即可。與僅支援掛載的工具不同，RcloneView 在 FREE 授權下也提供同步與資料夾比較功能，因此今天用來分享連結的同一個視窗，明天也能依排程繼續備份同一個資料夾。

當單一專案的資產分散在多個服務商時，這一點尤其實用 —— 例如，RAW 相片原始檔存放在 Backblaze B2，而面向客戶的樣張存放在 Dropbox。你不需要兩套工作流程，只需要一個開啟兩個分頁的檔案總管視窗。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud file transfer panel in RcloneView" class="img-large img-center" />

## 結合公開連結與資料夾整理

分享之前，最好使用 RcloneView 的檔案清單檢視，確認自己究竟要公開什麼內容。切換到 List View 以檢視檔案大小與修改日期，或在分享圖片時使用 Thumbnail View 快速以視覺方式確認選對了檔案。Get Public Link 同樣適用於多選檔案，因此你可以一次產生多個連結，不必重複執行右鍵操作。

如果連結需要長期用於定期重複分享 —— 例如客戶總是從同一個 URL 取得的週報 —— 可以搭配一個持續更新該路徑下檔案的 Sync 工作使用，如此連結本身就不需要重新產生。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled file updates" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 New Remote 連接存放待分享檔案的遠端。
3. 在 Explorer 面板中瀏覽到該檔案，按右鍵並選擇 Get Public Link。
4. 複製產生的連結並傳送出去 —— 不需要額外的瀏覽器登入。

一旦這成為日常習慣，無論檔案位於 90 多個支援的服務商中的哪一個，分享雲端檔案所需的都是相同的三次點擊。

---

**相關指南：**

- [修復不支援公開連結的錯誤 — 使用 RcloneView 正確分享檔案](https://rcloneview.com/support/blog/fix-public-link-not-supported-errors-rcloneview)
- [取得大小 — 使用 RcloneView 即時計算雲端儲存用量](https://rcloneview.com/support/blog/get-size-calculate-cloud-storage-usage-rcloneview)
- [縮圖檢視 — 使用 RcloneView 以視覺方式瀏覽並預覽雲端圖片](https://rcloneview.com/support/blog/thumbnail-view-image-preview-cloud-rcloneview)

<CloudSupportGrid />
