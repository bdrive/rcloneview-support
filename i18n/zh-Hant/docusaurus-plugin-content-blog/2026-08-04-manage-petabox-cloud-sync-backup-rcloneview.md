---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "管理 Petabox 儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - kai
description: "將 Petabox 相容 S3 的儲存連接到 RcloneView,與其他 90 多個雲端提供商一起進行跨平台瀏覽、同步、備份與掛載。"
keywords:
  - Petabox
  - Petabox RcloneView
  - Petabox 同步
  - Petabox 備份
  - S3 相容儲存
  - 管理 Petabox
  - 物件儲存 GUI
  - Petabox 雲端儲存
  - S3 相容雲端管理器
  - Petabox rclone
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Petabox 儲存 — 使用 RcloneView 同步與備份檔案

> 在與您使用的所有其他雲端相同的視窗中瀏覽、同步並備份 Petabox 物件儲存——無需單獨的 S3 用戶端。

Petabox 是一種相容 S3 的物件儲存服務,這表示它接入 RcloneView 的方式與 Amazon S3 或 Wasabi 相同:透過存取金鑰、私密金鑰和自訂端點。連接後,Petabox 在 RcloneView 的檔案總管中的表現與任何其他遠端相同——可瀏覽、可同步、可與其他提供商一起掛載。對於因物件儲存經濟性而選擇 Petabox,但仍需要一般檔案管理員體驗而非 AWS CLI 或僅限儲存貯體的網頁主控台的團隊而言,這一點非常重要。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Petabox 連接為相容 S3 的遠端

新增 Petabox 遵循 RcloneView 標準的相容 S3 遠端流程:開啟新增遠端,選擇相容 S3 的類型,然後輸入您的 Petabox Access Key ID、Secret Access Key,以及 Petabox 控制台中的儲存貯體端點 URL。RcloneView 內建嵌入式 rclone 二進位檔,因此無需額外安裝步驟——僅憑憑證即可將儲存貯體帶入檔案總管。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

新增後,Petabox 會像 Google Drive 或 OneDrive 一樣以標籤形式出現在總管面板中。與僅支援掛載的 S3 瀏覽器不同,RcloneView 還可以對 Petabox 進行同步與資料夾比較——在 FREE 授權下即可使用基本同步功能,無需另外購買。

## 將 Petabox 與其他雲端提供商同步

Petabox 的常見使用情境是封存目前存放在較昂貴提供商那裡的資料,或為了備援而鏡像一個正在使用的儲存貯體。RcloneView 的同步精靈可讓您將 Petabox 設為來源或目的地,並使用檔案類型、時間與大小篩選器,確保只有您想要的資料被移動。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Petabox object storage with another cloud provider in RcloneView" class="img-large img-center" />

試運行(Dry Run)模式會在實際執行任何操作之前,準確預覽將被複製或刪除的內容——當您將單向同步指向一個不希望被意外覆寫的儲存貯體時,這是最安全的做法。比較(Compare)檢視更進一步,在您確認複製之前顯示 Petabox 與第二個遠端之間僅存在於左側、僅存在於右側以及大小不同的檔案。

## 排程定期的 Petabox 備份

為了持續保護資料,請將 Petabox 同步儲存為 Job Manager 中的一項工作,而不是每次手動重新執行。PLUS 授權使用者可以附加 crontab 樣式的排程,使 Petabox 的備份自動執行,工作記錄(Job History)會記錄每次執行的狀態、傳輸速度與檔案數量。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Petabox backup job in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟新增遠端,並為 Petabox 選擇相容 S3 的儲存類型。
3. 輸入您的 Access Key、Secret Key 與 Petabox 端點,然後瀏覽儲存貯體。
4. 設定同步或備份工作,並視需要在 Job Manager 中附加排程。

Petabox 的物件儲存定價與 RcloneView 在其與您已管理的任何其他雲端之間自由移動資料的能力相輔相成。

---

**相關指南:**

- [管理 Cloudflare R2 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [管理 Wasabi 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Amazon S3 儲存貯體掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
