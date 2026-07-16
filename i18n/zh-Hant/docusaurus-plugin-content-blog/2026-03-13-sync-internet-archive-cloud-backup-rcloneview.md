---
slug: sync-internet-archive-cloud-backup-rcloneview
title: "如何使用 RcloneView 上傳與管理 Internet Archive 典藏"
authors:
  - tayson
description: "Internet Archive 免費保存數位內容。了解如何使用 RcloneView 上傳典藏、同步本機檔案庫,並管理你的 Internet Archive 帳戶。"
keywords:
  - internet archive upload
  - internet archive rclone
  - upload to internet archive
  - internet archive backup
  - internet archive manager
  - internet archive file transfer
  - internet archive collections
  - archive.org upload tool
  - digital preservation cloud
  - internet archive sync
tags:
  - RcloneView
  - internet-archive
  - digital-preservation
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 上傳與管理 Internet Archive 典藏

> 位於 archive.org 的 Internet Archive 是全球最大的免費數位圖書館。如果你正在保存歷史文件、媒體或資料集,RcloneView 可以與你其他的雲端儲存一起管理這些上傳作業。

Internet Archive 為公開可存取的數位內容——書籍、音訊、影片、軟體與資料集——提供免費、無限量的儲存空間。許多研究人員、圖書館員與數位保存工作者都使用它進行長期典藏。RcloneView 支援將 Internet Archive 作為遠端,讓你能與其他雲端一起管理上傳作業。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼使用 Internet Archive?

- **免費儲存** — 公開可存取的內容不需付費。
- **永久保存** — 專為長期數位保存而設計。
- **公開存取** — 內容對所有人免費開放。
- **多種格式** — 支援音訊、影片、文字、圖片、軟體。
- **DOI 支援** — 學術內容可提供可引用的參照。

## 在 RcloneView 中設定 Internet Archive

### 取得 API 憑證

1. 在 [archive.org](https://archive.org/) 建立帳戶。
2. 從 [archive.org/account/s3.php](https://archive.org/account/s3.php) 取得你的 API 金鑰。

### 新增為遠端

1. 開啟 RcloneView 並點選 **新增遠端**。
2. 選擇 **Internet Archive** 作為類型。
3. 輸入你的 access key 與 secret key。

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote" class="img-large img-center" />

## 常見工作流程

### 上傳本機典藏

將已數位化的書籍、音訊錄音或歷史文件從本機儲存傳輸到 Internet Archive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Upload to Internet Archive" class="img-large img-center" />

### 從其他雲端備份

將數位保存內容從 Google Drive 或 S3 複製到 Internet Archive,以取得永久的公開存取。

### 排程上傳

針對持續進行的數位化專案,排程定期上傳:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Internet Archive uploads" class="img-large img-center" />

### 驗證上傳結果

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Internet Archive uploads" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用你的 API 金鑰**新增 Internet Archive**。
3. **上傳、同步並管理**你的典藏。
4. 為持續進行的數位化專案**排程上傳**。

用一個能連接一切的工具,保存數位歷史。

---

**相關指南:**

- [建立同步任務](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任務排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
