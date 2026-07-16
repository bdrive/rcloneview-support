---
slug: sync-box-to-google-drive-rcloneview
title: "將 Box 同步到 Google Drive — 透過 RcloneView 進行雲端備份"
authors:
  - tayson
description: "使用 RcloneView 將 Box 同步到 Google Drive — 傳輸檔案、自動化備份，並透過簡單的雲端對雲端 GUI 讓兩個平台保持最新狀態。"
keywords:
  - Box to Google Drive sync
  - Box to Google Drive migration
  - cloud sync tool
  - RcloneView Box
  - Box backup
  - Google Drive archive
  - cloud-to-cloud sync
  - enterprise cloud transfer
  - Box Google Drive workflow
  - Box content migration
tags:
  - RcloneView
  - box
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Box 同步到 Google Drive — 透過 RcloneView 進行雲端備份

> Box 負責企業合規控管與安全分享，而 Google Drive 則是協作編輯的核心平台 — RcloneView 可直接在兩個平台之間同步內容，無需經由本機磁碟中轉。

Box 因其合規控管與安全檔案分享功能而廣泛用於企業環境，而 Google Drive 則支撐著即時協作工作流程。當團隊同時使用這兩個平台，或正在從 Box 整合遷移出來時，保持內容同步 — 或在平台之間遷移檔案 — 就需要一個可靠的雲端對雲端工具。RcloneView 可直接連接 Box 與 Google Drive，無需下載到本機磁碟。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Box 與 Google Drive

Box 與 Google Drive 在 RcloneView 中皆使用 OAuth 瀏覽器驗證。前往 **Remote tab > New Remote**，選擇 **Box**，並完成瀏覽器登入。針對 **Google Drive** 重複相同流程。兩個遠端隨後會顯示為總管面板中的分頁，可立即進行瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Google Drive remotes in RcloneView" class="img-large img-center" />

對於 **Box for Business** 帳戶，在建立遠端時請將 `box_sub_type` 設定為 `enterprise`。這可確保 RcloneView 連接到組織的 Box 帳戶而非個人儲存空間，從而存取共用資料夾與企業所擁有的內容。

## 執行同步工作

在 **Job Manager** 中，建立一個新的同步工作：來源為您的 Box 資料夾（或特定子資料夾，例如 `/Projects/2026`），目的地為目標 Google Drive 資料夾。RcloneView 的同步預設為單向 — 它會將來源鏡射至目的地，而不會修改來源內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive sync job in RcloneView" class="img-large img-center" />

對於需要將已完成的案件檔案從 Box 同步到 Google Drive 進行長期封存的法務團隊，依檔案存留時間篩選（工作設定步驟 3 中的 Max File Age）可將同步範圍限制在近期修改過的檔案 — 讓傳輸量保持在可控範圍。**Dry Run** 預覽功能可在任何資料被異動之前，準確確認哪些檔案將會被移動。

## 自動化與監控

擁有 PLUS 授權後，排程 Box 到 Google Drive 的同步可確保兩個平台皆保持最新狀態。以 cron 為基礎的排程 — 例如每週日午夜 — 可在無需使用者介入的情況下自動執行同步。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Box to Google Drive sync in RcloneView" class="img-large img-center" />

RcloneView 的 **1:N synchronization** 功能甚至可讓您將一個 Box 資料夾同時同步至多個 Google Drive 目的地 — 這在需要將相同內容同時備份到共用 Team Drive 與個人封存資料夾時相當實用，且只需一個工作即可完成。**Job History** 會追蹤每次執行的詳細統計資料：已傳輸檔案數、耗時、速度及狀態。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 **Box** 遠端（OAuth）與 **Google Drive** 遠端（OAuth）。
3. 開啟 **Job Manager**，建立一個從您的 Box 資料夾到 Google Drive 的同步工作。
4. 啟用排程功能（PLUS）以自動化定期同步。

透過 RcloneView 將 Box 同步到 Google Drive，代表您的內容能可靠地在平台之間移動，同時兩者都能保持井然有序且易於存取，無需人工操作。

---

**相關指南：**

- [管理 Box 雲端儲存 — 透過 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [透過 RcloneView 實現零停機 Box 到 Dropbox 遷移](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [透過 RcloneView 將 Box 遷移到 SharePoint 與 OneDrive](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)

<CloudSupportGrid />
