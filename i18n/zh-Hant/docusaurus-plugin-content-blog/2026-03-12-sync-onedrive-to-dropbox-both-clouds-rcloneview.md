---
slug: sync-onedrive-to-dropbox-both-clouds-rcloneview
title: "如何同步 OneDrive 與 Dropbox — 使用 RcloneView 讓兩個平台隨時保持更新"
authors:
  - tayson
description: "工作用 OneDrive、對客戶用 Dropbox？了解如何使用 RcloneView 自動同步 OneDrive 與 Dropbox 之間的特定資料夾。"
keywords:
  - sync onedrive dropbox
  - onedrive to dropbox
  - onedrive dropbox sync tool
  - transfer onedrive dropbox
  - keep onedrive dropbox in sync
  - onedrive dropbox bridge
  - onedrive dropbox transfer
  - multi cloud sync
  - onedrive dropbox backup
  - sync two cloud services
tags:
  - onedrive
  - dropbox
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何同步 OneDrive 與 Dropbox — 使用 RcloneView 讓兩個平台隨時保持更新

> 公司使用 Microsoft 365，所以所有檔案都在 OneDrive 上。但你的接案設計師堅持使用 Dropbox，你的會計師也是。於是你只能手動在兩者之間複製檔案。現在讓我們來解決這個問題。

OneDrive 與 Dropbox 服務於不同的生態系統。Microsoft 365 使用者以 OneDrive 為主要工作環境，而創意專業人士與許多小型企業則偏好 Dropbox。當你需要同時與這兩類使用者合作時，讓檔案保持同步能省下大量手動作業的時間。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定步驟

### 1) 加入兩個帳戶

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Dropbox" class="img-large img-center" />

### 2) 並排瀏覽

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive and Dropbox side by side" class="img-large img-center" />

### 3) 建立同步工作

在兩個雲端之間同步特定的專案資料夾：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create OneDrive Dropbox sync" class="img-large img-center" />

### 4) 排程自動更新

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive Dropbox sync" class="img-large img-center" />

### 5) 驗證同步狀態

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Dropbox" class="img-large img-center" />

## 最佳實務

- **同步特定資料夾** — 不要同步整個帳戶，只同步共用的專案資料夾。
- **使用複製功能進行單向傳送** — 將完成的檔案推送到另一個平台。
- **使用篩選規則** — 排除暫存檔、`.DS_Store` 以及 Office 鎖定檔案。
- **留意衝突狀況** — 兩個平台都支援同時編輯，這可能導致同步衝突。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **加入 OneDrive 與 Dropbox**。
3. **建立針對性的同步工作**。
4. **排程並驗證**。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [偵測並解決同步衝突](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)
- [Rclone 篩選規則說明](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
