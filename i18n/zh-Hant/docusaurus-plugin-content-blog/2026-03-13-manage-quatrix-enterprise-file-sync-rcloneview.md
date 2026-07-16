---
slug: manage-quatrix-enterprise-file-sync-rcloneview
title: "管理 Quatrix 企業檔案共享——使用 RcloneView 與 Google Drive、S3 等同步"
authors:
  - tayson
description: "Quatrix by Maytech 是一個企業檔案共享平台。了解如何使用 RcloneView 將 Quatrix 與 Google Drive、S3 及其他雲端服務同步與備份。"
keywords:
  - quatrix file sharing
  - quatrix rclone
  - quatrix sync
  - quatrix backup
  - quatrix enterprise cloud
  - maytech quatrix
  - quatrix file transfer
  - quatrix google drive
  - quatrix s3 backup
  - enterprise file sharing sync
tags:
  - quatrix
  - enterprise
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Quatrix 企業檔案共享——使用 RcloneView 與 Google Drive、S3 等同步

> Quatrix by Maytech 提供具備合規功能的安全企業檔案共享服務。但要將其與您其他的雲端平台整合，需要合適的工具。RcloneView 可將 Quatrix 與 70 多個服務商連接起來。

Quatrix 是一個以安全性與合規性為核心的企業級檔案共享與傳輸平台。許多組織使用它進行安全的外部檔案交換，同時依賴 Google Drive 或 OneDrive 進行內部協作。RcloneView 將 Quatrix 與您整個雲端生態系統連接起來。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定 Quatrix

Quatrix 可透過其 API 或 WebDAV 介面存取：

1. 開啟 RcloneView，點擊 **新增遠端**。
2. 選擇適合您 Quatrix 設定的連線類型。
3. 輸入您的 Quatrix 憑證。

<img src="/support/images/en/blog/new-remote.png" alt="Add Quatrix remote" class="img-large img-center" />

## 主要工作流程

### Quatrix → S3（異地備份）

使用加密方式將敏感的 Quatrix 資料備份到 AWS S3：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Quatrix backup" class="img-large img-center" />

### Google Drive → Quatrix（安全外部共享）

將檔案從內部 Google Drive 移至 Quatrix，以便與外部人員進行安全共享。

### Quatrix → NAS（本地封存）

在您的 NAS 上保留 Quatrix 內容的本地副本，用於合規封存。

## 驗證與監控

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Quatrix sync" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Quatrix** 與您其他的雲端服務。
3. **建立備份與同步工作**。
4. **排程並驗證**。

企業檔案共享，連接一切。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
