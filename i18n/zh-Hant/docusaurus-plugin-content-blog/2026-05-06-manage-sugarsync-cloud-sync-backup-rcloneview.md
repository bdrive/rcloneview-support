---
slug: manage-sugarsync-cloud-sync-backup-rcloneview
title: "管理 SugarSync 儲存空間——使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "將 SugarSync 連接至 RcloneView，以視覺化方式管理您的雲端檔案。透過簡單易用的 GUI，跨平台同步、備份與傳輸 SugarSync 資料。"
keywords:
  - SugarSync 雲端儲存管理
  - RcloneView SugarSync 同步
  - SugarSync 備份檔案
  - SugarSync 檔案傳輸 GUI
  - SugarSync rclone
  - 使用 RcloneView 管理 SugarSync
  - SugarSync 桌面客戶端替代方案
  - SugarSync 雲端備份工具
  - 同步 SugarSync 檔案
  - SugarSync 多雲端
tags:
  - RcloneView
  - sugarsync
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 SugarSync 儲存空間——使用 RcloneView 同步與備份檔案

> RcloneView 為您的 SugarSync 儲存空間帶來完整的 GUI 控制——瀏覽、同步並備份檔案，不必單獨依賴 SugarSync 原生桌面客戶端。

對於需要在各裝置間可靠同步檔案的小型企業與個人專業人士來說，SugarSync 一直是值得信賴的雲端備份解決方案。雖然 SugarSync 的原生應用程式可涵蓋日常同步需求，但 RcloneView 為 IT 管理員與進階使用者新增了強大功能：排程工作、雲端對雲端傳輸、批次遷移，以及與您其他雲端帳戶並列的集中式管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 SugarSync 連接至 RcloneView

RcloneView 使用 rclone 的 SugarSync 後端連接至 SugarSync。在 RcloneView 中，前往「Remote」分頁 > 「New Remote」，然後從供應商清單中選擇 SugarSync。系統會提示您使用 SugarSync 帳戶憑證進行驗證，權杖會安全地儲存在 RcloneView 的加密本機儲存空間中。

連接完成後，您的 SugarSync 資料夾——包括 Magic Briefcase 與任何自訂同步資料夾——都會顯示在檔案總管中。您可以瀏覽資料夾內容、檢查檔案大小，並透過右鍵選單執行檔案管理操作。

<img src="/support/images/en/blog/new-remote.png" alt="Adding SugarSync as a remote in RcloneView" class="img-large img-center" />

## 將 SugarSync 備份至其他雲端

將 SugarSync 連接至 RcloneView 的一個引人注目的使用案例，是跨雲端備份：將 SugarSync 的內容複製到 Backblaze B2 或 Amazon S3 等次要供應商。舉例來說，一位在 SugarSync 上存放多年客戶文件的自由顧問，可以設定每週同步工作，將該內容鏡像至相容 S3 的封存空間，確保即使主要帳戶無法存取，資料仍有備援。

RcloneView 的同步精靈會引導您完成來源選擇、目標設定、篩選選項與排程設定。啟用校驗和驗證，即可確認每個傳輸的檔案都與來源完全一致。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a backup job from SugarSync in RcloneView" class="img-large img-center" />

## 瀏覽與整理 SugarSync 檔案

雙面板檔案總管讓您可以並排處理 SugarSync 與另一個雲端或本機資料夾。使用 RcloneView 內建的資料夾比對功能，以視覺化方式比較資料夾內容——找出僅存在於一側的檔案，或找出可能顯示同步不完整的大小差異檔案。

對於擁有數千個檔案的大型 SugarSync 資料庫，可使用檔案清單的排序與篩選功能快速瀏覽。頁尾摘要會一目了然地顯示檔案總數與合計儲存空間大小。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SugarSync folder contents in RcloneView" class="img-large img-center" />

## 從 SugarSync 遷移

如果您計劃從 SugarSync 遷移至其他供應商，RcloneView 可大幅簡化整個流程。設定一次性同步工作，將資料從 SugarSync 傳輸至目標位置，使用試執行（dry run）預覽將傳輸的內容，然後執行完整遷移。工作記錄會提供已移動檔案的完整紀錄。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating SugarSync data to another cloud provider with RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往「Remote」分頁 > 「New Remote」，然後選擇 SugarSync。
3. 使用您的 SugarSync 憑證進行驗證並儲存該遠端。
4. 在檔案總管中瀏覽檔案，並設定與其他供應商之間的同步或備份工作。

RcloneView 為 SugarSync 使用者提供企業級的同步與備份工具，無需改變他們已經熟悉的工作流程。

---

**相關指南：**

- [管理 Dropbox 儲存空間——使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [管理 Google Drive 儲存空間——使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [自由工作者與獨立承包商的雲端儲存——RcloneView](https://rcloneview.com/support/blog/cloud-storage-freelancers-independent-contractors-rcloneview)

<CloudSupportGrid />
