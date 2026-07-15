---
slug: backup-opendrive-aws-s3-external-storage-rcloneview
title: "使用 RcloneView 將 OpenDrive 備份到 AWS S3 或外接儲存裝置"
authors:
  - tayson
description: "透過 RcloneView 將 OpenDrive 資料自動備份到 AWS S3、Google Drive 或外接硬碟，並提供視覺化驗證，保護您的 OpenDrive 資料。"
keywords:
  - opendrive backup
  - opendrive sync tool
  - opendrive to s3
  - opendrive to google drive
  - opendrive file manager
  - opendrive rclone
  - opendrive export data
  - opendrive cloud backup
  - opendrive alternative
  - opendrive data protection
tags:
  - RcloneView
  - opendrive
  - cloud-storage
  - backup
  - sync
  - aws-s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 OpenDrive 備份到 AWS S3 或外接儲存裝置

> OpenDrive 以吸引人的價格提供無限容量的儲存空間，但將所有資料都只放在單一服務商是有風險的。RcloneView 讓您能自動將 OpenDrive 備份到 S3、Google Drive 或外接硬碟。

OpenDrive 提供雲端儲存服務，具備檔案分享、協作與應用程式整合等功能。但和任何雲端服務一樣，它不應該是您重要資料的唯一副本。RcloneView 可連接 OpenDrive，並支援自動備份到 AWS S3、Google Drive、外接硬碟或其他任何儲存空間——為您提供任何完善備份策略都不可或缺的資料備援。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要備份 OpenDrive？

- **單點故障** — 若 OpenDrive 發生服務中斷或您無法存取帳號，資料將無法取得。
- **意外刪除** — 若沒有外部備份，永久刪除的檔案將無法復原。
- **3-2-1 備份原則** — 最佳實務建議保留 3 份副本、使用 2 種不同媒介、其中 1 份存放異地。而 OpenDrive 只是其中一份副本。
- **遷移準備** — 若您決定更換服務商，備份資料可隨時派上用場。

## 連接 OpenDrive

1. 開啟 RcloneView 並點擊 **新增遠端**。
2. 從服務商清單中選擇 **OpenDrive**。
3. 輸入您的 OpenDrive 帳號認證資訊。
4. 儲存——您的 OpenDrive 檔案現在即可瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="Add OpenDrive remote" class="img-large img-center" />

## 瀏覽與評估

同時檢視您的 OpenDrive 檔案與備份目的地：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OpenDrive files" class="img-large img-center" />

## 備份目的地

### OpenDrive → AWS S3

適合耐用、具成本效益的備份方案：

1. 新增 [AWS S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3) 作為遠端。
2. 建立複製工作：OpenDrive → S3 儲存桶。
3. 使用 S3 Glacier 以極低成本進行長期封存。
4. 透過[工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)設定每日執行。

### OpenDrive → Google Drive

適合搭配 Google Workspace 整合、方便存取的備份方案：

1. 透過 [OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login) 新增 Google Drive。
2. 建立複製工作：OpenDrive → Google Drive 資料夾。
3. 設定每週執行。

### OpenDrive → 外接硬碟

適合離線的本機備份：

1. 建立複製工作：OpenDrive → 外接硬碟路徑。
2. 在連接硬碟時執行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OpenDrive backup job" class="img-large img-center" />

## 驗證您的備份

使用[資料夾比對](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)確認所有內容都已完成傳輸：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OpenDrive backup" class="img-large img-center" />

## 自動化與監控

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OpenDrive backups" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="OpenDrive backup history" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 OpenDrive** 與您的備份目的地作為遠端。
3. **建立複製工作**並執行初次備份。
4. 使用資料夾比對進行**驗證**。
5. **排程**以實現自動定期備份。

您的資料值得擁有不只一個家。RcloneView 讓 OpenDrive 備份到 S3、Google Drive 或外接儲存裝置變得輕鬆又可驗證。

---

**相關指南：**

- [新增 AWS S3 及相容 S3 服務](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [透過瀏覽器登入方式新增遠端（OAuth）](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
