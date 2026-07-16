---
slug: sync-backblaze-b2-to-onedrive-rcloneview
title: "將 Backblaze B2 同步至 OneDrive — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "了解如何使用 RcloneView 將檔案從 Backblaze B2 物件儲存同步或遷移至 Microsoft OneDrive — 這是一種以 GUI 為基礎、並支援排程自動化的方法。"
keywords:
  - Backblaze B2 to OneDrive sync
  - migrate Backblaze B2 OneDrive RcloneView
  - Backblaze B2 OneDrive transfer
  - B2 to OneDrive migration guide
  - cloud storage sync tool
  - Backblaze B2 backup OneDrive
  - OneDrive from B2 migration
  - rclone B2 OneDrive GUI
tags:
  - RcloneView
  - backblaze-b2
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Backblaze B2 同步至 OneDrive — 使用 RcloneView 進行雲端備份

> 將選定的檔案從 Backblaze B2 冷儲存提取到 OneDrive 以便日常使用 — 或透過單一 RcloneView 工作將整個 B2 儲存桶遷移至 OneDrive。

Backblaze B2 是絕佳的封存與備份目標，但其相容於 S3 的 API 並非為日常協作而設計。如果您的團隊需要在 Microsoft 365 中存取檔案、透過 SharePoint 共用文件，或只是想將資料從 B2 移到更方便存取的位置，同步至 OneDrive 就是解答。RcloneView 透過視覺化的工作建立工具與即時監控，讓傳輸變得簡單直接。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Backblaze B2 與 OneDrive

在 RcloneView 中，開啟 **Remote tab → New Remote**，先新增 Backblaze B2。輸入您的 Application Key ID 與 Application Key，然後指定儲存桶名稱。至於 OneDrive，從供應商清單中選擇它，並使用您的 Microsoft 帳戶完成 OAuth 瀏覽器登入。當兩個遠端都儲存完成後，在雙窗格檔案總管中並排開啟它們。

在左側瀏覽您的 B2 儲存桶，在右側瀏覽您的 OneDrive。您可以在兩側深入資料夾階層，並在開始任何傳輸之前比較檔案數量。這個視覺化確認步驟可避免大型遷移過程中出現意外狀況。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Backblaze B2 and OneDrive remotes in RcloneView" class="img-large img-center" />

## 設定並執行同步工作

在 Home 分頁點選 **Sync** 以開啟工作精靈。將 Backblaze B2 路徑設為來源，將 OneDrive 目標資料夾設為目的地。在第 2 步中，設定並行傳輸的數量 — OneDrive 有 API 速率限制，因此從 4–8 個並行傳輸開始，會比一開始就拉滿更安全。若資料完整性對您的使用情境很重要，請啟用校驗碼比對。

在進行完整傳輸之前，請使用 **Dry Run** 選項。如果您要進行選擇性同步，這個功能特別有用 — 例如，透過在第 3 步設定 **Max file age** 篩選條件，只提取 B2 中最近 90 天的檔案。當試跑（dry run）的輸出結果看起來正確後，再執行正式工作。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="B2 to OneDrive sync job in progress in RcloneView" class="img-large img-center" />

## 排程從 B2 進行定期提取

有些工作流程需要從 B2 到 OneDrive 的重複性同步 — 例如，每天早上將新歸檔的報告從 B2 提取到 OneDrive 資料夾中，讓團隊成員可以透過 Microsoft 365 介面存取。使用 PLUS 授權，RcloneView 的 crontab 排程器可自動處理此事。在工作精靈的第 4 步中設定排程，選擇符合您工作流程的日期與時間。

**Job History** 分頁會記錄每一次執行，讓您可以確認每次排程同步是否成功完成，並查看移動了多少資料。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Backblaze B2 to OneDrive sync" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Backblaze B2（Application Key）與 OneDrive（OAuth）作為遠端。
3. 建立從 B2 到 OneDrive 的同步工作，並設定適當的傳輸限制。
4. 使用 PLUS 授權排程重複性同步，實現免人工操作的自動化。

透過 RcloneView，將資料從 B2 的耐用封存空間移動到 OneDrive 的協作環境，會成為一項例行且可靠的作業。

---

**相關指南：**

- [使用 RcloneView 將 Backblaze B2 同步至 Azure Blob Storage](https://rcloneview.com/support/blog/sync-backblaze-b2-to-azure-blob-rcloneview)
- [使用 RcloneView 管理 Backblaze B2 雲端儲存](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 OneDrive 遷移至 Backblaze B2](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
