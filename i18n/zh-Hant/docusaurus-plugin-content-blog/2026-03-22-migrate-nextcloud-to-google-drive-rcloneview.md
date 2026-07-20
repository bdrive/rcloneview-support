---
slug: migrate-nextcloud-to-google-drive-rcloneview
title: "將 Nextcloud 遷移至 Google Drive — 透過 RcloneView 實現無縫雲端遷移"
authors:
  - tayson
description: "透過 RcloneView 安全且高效地將自架的 Nextcloud 資料遷移至 Google Drive，保留資料夾結構與檔案權限。"
keywords:
  - Nextcloud 遷移
  - Nextcloud 遷移至 Google Drive
  - 雲端遷移策略
  - 自架雲端儲存
  - 資料遷移
  - RcloneView 遷移
  - WebDAV 遷移
  - 雲端檔案傳輸
  - 資料夾結構保留
  - 雲端儲存整合
tags:
  - RcloneView
  - nextcloud
  - google-drive
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Nextcloud 遷移至 Google Drive — 透過 RcloneView 實現無縫雲端遷移

> 從自架的 Nextcloud 轉移到 Google Drive，不遺失資料、結構或權限。

自架的 Nextcloud 提供完整的掌控權，但維護基礎架構需要技術資源。Google Drive 則提供簡便、可靠與無縫的協作體驗。當你決定轉換時，需要一款能保留資料夾階層、中繼資料與檔案結構的工具。RcloneView 簡化了 Nextcloud 至 Google Drive 的遷移流程，能在整個過程中處理大量資料集，同時維持完整的資料完整性。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 規劃你的 Nextcloud 遷移

遷移成功與否取決於事前規劃。評估你的 Nextcloud 資料量、資料夾結構，以及任何需要在 Google Drive 中重新設定權限的共用檔案。RcloneView 的預覽工具讓你在傳輸前檢視來源資料，確保在實際遷移過程中不會有任何意外。

<img src="/support/images/en/blog/new-remote.png" alt="Connect Nextcloud to RcloneView via WebDAV" class="img-large img-center" />

## 透過 WebDAV 連接 Nextcloud

RcloneView 透過 Nextcloud 的 WebDAV 介面進行存取——不需要任何特殊外掛程式。設定你的 Nextcloud 伺服器網址與登入憑證後，RcloneView 會完全依照 Nextcloud 中的樣貌呈現你的資料夾。這種直接連線方式讓你可以選擇性地遷移特定資料夾，或執行完整傳輸。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Nextcloud folders to Google Drive" class="img-large img-center" />

## 安全地執行遷移

RcloneView 的同步功能會自動保留資料夾結構。先執行一次試跑（dry-run）以驗證操作，然後再有信心地執行實際遷移。頻寬控制可避免連線負載過重，可續傳的傳輸功能也能妥善應對網路中斷情況。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule incremental Nextcloud syncs" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用 WebDAV，搭配你的伺服器網址與登入憑證來 **新增 Nextcloud 遠端**。
3. **連接 Google Drive** 並授權 RcloneView 存取你的帳戶。
4. **執行遷移**，保留資料夾結構並即時追蹤進度。

立即完成你的 Nextcloud 轉換，享受可靠且資料安全的遷移體驗。

---

**相關指南：**

- [使用 RcloneView 將 SharePoint 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-sharepoint-to-google-drive-rcloneview)
- [使用 RcloneView 將 Box 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [使用 RcloneView 連接 WebDAV 伺服器進行雲端同步](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)

<CloudSupportGrid />
