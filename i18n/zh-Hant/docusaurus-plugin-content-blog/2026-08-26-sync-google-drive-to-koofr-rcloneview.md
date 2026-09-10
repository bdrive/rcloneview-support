---
slug: sync-google-drive-to-koofr-rcloneview
title: "將 Google Drive 同步至 Koofr — 使用 RcloneView 進行雲端備份"
authors:
  - alex
description: "使用 RcloneView 將 Google Drive 同步至 Koofr，取得歐洲代管的檔案備份副本，無需使用命令列進行設定。"
keywords:
  - sync google drive to koofr
  - google drive koofr 備份
  - RcloneView koofr 同步
  - 歐洲雲端備份 google drive
  - koofr 雲端儲存同步
  - google drive koofr 遷移
  - 跨雲同步工具
  - koofr google drive 傳輸
  - 雲對雲同步 rcloneview
tags:
  - RcloneView
  - google-drive
  - koofr
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 同步至 Koofr — 使用 RcloneView 進行雲端備份

> 不需要撰寫任何 rclone 指令，即可在 Koofr 上維護 Google Drive 的歐洲代管鏡像。

擁有歐盟客戶或有資料落地要求的團隊，通常希望在歐洲基礎設施上保留一份 Google Drive 內容的第二份副本。總部位於歐盟的 Koofr 天生適合這個角色，但每次變更後手動重新上傳檔案並不永續。RcloneView 會連接兩個帳戶，並以已儲存工作的形式執行同步，在不需要任何手動搬移檔案的情況下讓 Koofr 副本保持最新。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Google Drive 和 Koofr

兩個遠端都使用各自服務商原生的設定方式：Google Drive 透過 OAuth 瀏覽器登入進行連接，Koofr 也從 Remote 頁籤 > New Remote 以相同方式新增。兩者都出現在 Remote Manager 中後，並排開啟兩個 Explorer 面板 —— 一個是 Google Drive，一個是 Koofr —— 這樣你就可以在設定自動化工作之前，透過拖放進行一次快速測試複製。由於它們是各自獨立的遠端，兩個面板之間的拖曳一律是複製而不是移動。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Koofr remotes in RcloneView" class="img-large img-center" />

## 設定同步工作

從 Home 頁籤啟動同步精靈，將 Google Drive 設為來源，Koofr 設為目標。選擇單向「僅修改目標」，這樣 Koofr 副本會一律鏡像 Drive，而不會意外刪除來源端的任何內容。在第 2 步啟用校驗碼比較，可確保依內容而非僅依修改時間來比對檔案，這在檔案抵達 Drive 之前經過不同的同步用戶端時尤其重要。

RcloneView 的 1:N 同步可以將同一個 Google Drive 資料夾同時鏡像到 Koofr 及其他目標 —— 在 FREE 授權下即可使用，如果之後需要新增第二個備份目標，也不需要重建工作。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Google Drive to Koofr" class="img-large img-center" />

## 首次同步前執行 Dry Run

在進行完整傳輸之前，執行 Dry Run 可以精確預覽哪些檔案將被複製，並確認不會有檔案從 Koofr 意外刪除。當工作首次針對一個目標資料夾中已有內容的 Koofr 帳戶執行時，這特別有用，因為它能在衝突變成真正的覆寫之前將其顯現出來。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Google Drive to Koofr in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 Google Drive 和 Koofr 都新增為遠端。
3. 建立一個啟用校驗碼比較的單向同步工作。
4. 執行 dry run，然後執行該工作以建立你的第一個 Koofr 鏡像。

一個持續執行的 Google Drive 到 Koofr 同步，能為你提供一個只需點幾下就能重新執行的歐洲代管備份，讓你的復原副本不再依賴於從頭重建工作。

---

**相關指南：**

- [將 Koofr 遷移至 Google Drive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [管理 Koofr 儲存空間——使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [將 Koofr 同步至 Amazon S3 — 使用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/sync-koofr-to-amazon-s3-rcloneview)

<CloudSupportGrid />
