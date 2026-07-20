---
slug: sync-google-drive-to-wasabi-archive-rcloneview
title: "同步 Google Drive 到 Wasabi — 使用 RcloneView 進行實惠的封存與備份"
authors:
  - tayson
description: "使用 RcloneView 將 Google Drive 封存至 Wasabi 熱儲存,以遠低於 AWS S3 的成本獲得可靠備份。"
keywords:
  - Google Drive 備份
  - Wasabi 雲端儲存
  - 實惠雲端封存
  - 備份至 Wasabi
  - RcloneView
  - 雲對雲同步
  - 資料封存
  - 高性價比備份
  - Google Drive 封存
  - 熱儲存
tags:
  - RcloneView
  - google-drive
  - wasabi
  - cloud-sync
  - archive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同步 Google Drive 到 Wasabi — 使用 RcloneView 進行實惠的封存與備份

> Google Drive 適合日常協作,但長期儲存的費用會不斷累積。Wasabi 提供與 S3 相容的熱儲存,價格僅為一半——非常適合搭配 RcloneView 封存您的 Google Drive。

Google Drive 非常適合團隊協作,但無限儲存空間也帶來了保留策略上的複雜性。Wasabi 提供價格可預測且無出站流量費用的熱雲端儲存。RcloneView 可自動將已完成的專案、較舊的檔案以及冷資料封存至 Wasabi。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Google Drive 與 Wasabi

在 RcloneView 中設定這兩個遠端既快速又安全。

**Google Drive:**
1. 點擊 **Add Remote** → 選擇 **Google Drive**
2. 透過 OAuth 授權 RcloneView
3. 授予資料夾/檔案存取權限
4. 驗證連線

**Wasabi:**
1. 點擊 **Add Remote** → 選擇 **Wasabi**
2. 輸入您的 Wasabi Access Key 和 Secret Key
3. 選擇您的 bucket 與地區
4. 測試連線

![New Remote Setup](/images/en/blog/new-remote.png)

## 將 Google Drive 封存至 Wasabi 熱儲存

建立一次性或定期的同步工作以搬移您的檔案。Wasabi 的熱儲存可立即存取——不像冰川儲存那樣需要等待還原。

**封存情境:**
- **專案完成**:專案結束後封存客戶交付成果
- **儲存空間優化**:將超過 90 天的檔案移至 Wasabi
- **合規備份**:保留可供搜尋的業務記錄副本

![Wasabi Transfer Setup](/images/en/tutorials/wasabi-drag-and-drop.png)

## 即時監控傳輸效能

RcloneView 會顯示封存工作的即時指標——傳輸速度、已處理檔案數以及剩餘時間。

![Real-Time Transfer Monitoring](/images/en/tutorials/wasabi-real-time-monitoring-transferring.png)

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 [wasabi.com](https://wasabi.com/) 建立 Wasabi 帳號。
3. 使用 OAuth 驗證方式將 Google Drive 新增為遠端。
4. 將您的 Wasabi bucket 設定為遠端。
5. 建立同步或複製工作並開始封存。
6. 排程定期備份以保持封存內容為最新狀態。

實惠地封存,即時地取用——Wasabi 與 RcloneView 讓一切變得簡單。

---

**相關指南:**

- [使用 RcloneView 同步 Google Drive 到 Backblaze B2](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [使用 RcloneView 將 Google Drive 封存至 S3 Glacier](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)
- [雲端儲存出站流量費用 — 如何使用 RcloneView 避免](https://rcloneview.com/support/blog/cloud-storage-egress-fees-avoid-rcloneview)

<CloudSupportGrid />
