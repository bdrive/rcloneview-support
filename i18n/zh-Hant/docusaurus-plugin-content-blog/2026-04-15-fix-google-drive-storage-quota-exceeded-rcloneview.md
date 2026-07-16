---
slug: fix-google-drive-storage-quota-exceeded-rcloneview
title: "修復 Google Drive 儲存空間配額已滿問題 — 用 RcloneView 傳輸檔案釋放空間"
authors:
  - tayson
description: "修復 Google Drive 儲存空間配額已滿問題 — 將檔案移動到其他雲端、釋放空間，並使用 RcloneView 管理您的 Drive 儲存空間。"
keywords:
  - Google Drive 儲存空間已滿
  - 配額已滿修復
  - Google Drive 清理
  - 從 Google Drive 移動檔案
  - 釋放 Google Drive 空間
  - RcloneView 儲存空間管理
  - 雲端儲存空間溢出
  - Drive 配額解決方案
  - Google Drive 封存
  - Google Drive 空間恢復
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Google Drive 儲存空間配額已滿問題 — 用 RcloneView 傳輸檔案釋放空間

> Google Drive 配額已滿會阻擋上傳並中斷工作流程 — RcloneView 能找出佔用最多空間的項目，並將其移動到更具成本效益的封存儲存空間，立即釋放您的配額。

當 Google Drive 顯示「儲存空間已滿」或上傳因配額錯誤而開始失敗時，您會面臨一個熟悉的抉擇：付費購買更多儲存空間，或是將內容移出。RcloneView 提供第三種方案 — 有效率地找出大型或過時的檔案，並將其從 Google Drive 移動到更便宜的儲存層級，在不遺失資料的情況下釋放配額。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 找出佔用配額的項目

在 RcloneView 中連接您的 Google Drive（**Remote 分頁 > New Remote > Google Drive**，OAuth 登入）。連接完成後，在檔案總管中右鍵點擊任一資料夾並選擇 **Get Size**，即可查看其佔用的儲存空間大小。系統性地瀏覽您的頂層資料夾 — 影片匯出檔案、未壓縮的專案檔案，以及重複的資料集，是造成 Drive 空間已滿最常見的元凶。

<img src="/support/images/en/blog/new-remote.png" alt="Browsing Google Drive in RcloneView to identify storage usage" class="img-large img-center" />

RcloneView 的 **Folder Compare（資料夾比對）** 功能有助於找出重複內容：比對兩個名稱相似的資料夾，找出同時存在於兩處的檔案（同一內容被備份了兩次），讓您可以安全地刪除其中一份副本。比對結果中的「same files（相同檔案）」篩選條件能精確標示出兩處位置之間的完全相符項目。

## 將檔案移動到封存儲存空間

找出需要清理的最大資料夾後，在 RcloneView 中設定一個封存用的遠端 — **Amazon S3**、**Backblaze B2** 或 **Wasabi** 都是不錯的低成本冷儲存層級選擇。在 **Job Manager** 中建立一個 **Move（移動）** 工作：來源為包含大型或舊檔案的 Google Drive 資料夾，目的地則是您的封存儲存桶。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Moving Google Drive files to Backblaze B2 archive in RcloneView" class="img-large img-center" />

移動作業會先將檔案複製到目的地，再從來源刪除 — 在保留資料的同時立即釋放您的 Drive 配額。舉例來說，一位影片剪輯師在 Drive 中有 200 GB 已完成且不再需要協作存取的專案，只需一個 Move 工作即可將全部配額釋放到 B2。RcloneView 的 **Transferring** 分頁會即時顯示進度。

## 預防未來的配額問題

解決眼前的空間溢出問題後，可利用 RcloneView 的排程功能（PLUS 授權）設定定期封存政策。搭配 **Max File Age（最大檔案存留時間）** 篩選條件（例如超過 180 天的檔案）設定的 Sync 工作，會每月自動將 Drive 中逐漸老舊的內容封存到冷儲存空間 — 讓 Drive 維持為活躍的工作層級，而非堆積空間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive archiving in RcloneView" class="img-large img-center" />

**Job History（工作歷史）** 分頁會追蹤每一次封存作業，清楚記錄哪些內容何時被移出 Drive — 當您日後需要取回已封存的舊檔案時，這項記錄相當實用。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 RcloneView 中連接您的 Google Drive，並使用 **Get Size** 找出最大的資料夾。
3. 將您的封存儲存空間（S3、B2、Wasabi）新增為第二個遠端。
4. 在 Job Manager 中建立一個 **Move** 工作，將大型資料夾移動到您的封存遠端。

Google Drive 空間已滿其實是管理問題，而非儲存空間上限問題 — RcloneView 提供工具讓您將內容導向合適的層級，並讓 Drive 保持順暢運作。

---

**相關指南：**

- [用 RcloneView 修復 Google Drive 配額與速率限制 API 錯誤](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [管理 Google Drive 雲端儲存空間 — 使用 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [管理 Backblaze B2 雲端儲存空間 — 使用 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
