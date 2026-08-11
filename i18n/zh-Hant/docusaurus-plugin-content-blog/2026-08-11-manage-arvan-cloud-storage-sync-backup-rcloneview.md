---
slug: manage-arvan-cloud-storage-sync-backup-rcloneview
title: "管理 Arvan Cloud 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - jay
description: "將 Arvan Cloud 物件儲存連接到 RcloneView,實現相容 S3 的檔案瀏覽、同步、備份與跨雲端傳輸。"
keywords:
  - Arvan Cloud
  - Arvan Cloud RcloneView
  - S3相容儲存
  - 物件儲存GUI
  - Arvan Cloud 同步
  - Arvan Cloud 備份
  - 雲端儲存管理員
  - Arvan Cloud 檔案傳輸
  - 多雲GUI
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Arvan Cloud 儲存空間 — 使用 RcloneView 同步與備份檔案

> 在同一個桌面視窗中,與您管理的所有其他遠端一起瀏覽、同步並備份 Arvan Cloud 物件儲存桶。

Arvan Cloud 的物件儲存採用 S3 協定,這代表它可以直接接入任何以 Access Key + Secret Key + Endpoint 憑證為基礎打造的工具 — RcloneView 也不例外。您無需為這個區域性供應商另外維護一個獨立的 S3 用戶端,只要將其新增為遠端,就能像對待 Amazon S3、Wasabi 或工作流程中其他任何以儲存桶為基礎的儲存空間一樣對待它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Arvan Cloud 連接為 S3 相容遠端

Arvan Cloud 是透過 rclone 的 S3 後端存取的,因此其設定流程與 RcloneView 支援的其他所有 S3 相容服務相同:Access Key、Secret Key,以及指向 Arvan 物件儲存服務的自訂端點。這裡沒有 OAuth 瀏覽器登入流程 — 您只需從 Arvan Cloud 主控台產生金鑰組,然後直接貼到新增遠端精靈中即可。

新增遠端後,它的運作方式與檔案總管(Explorer)中的其他面板完全相同:資料夾樹狀導覽、針對圖片較多的儲存桶提供縮圖預覽,以及與本機磁碟上相同的滑鼠右鍵檔案操作(複製、移動、重新命名、取得大小)。RcloneView 可在 Windows、macOS 與 Linux 上透過單一視窗掛載並同步 90 多個供應商,因此 Arvan Cloud 會與您的其他雲端並列存在,而非孤立於獨立的應用程式中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Arvan Cloud 作為新的 S3 相容遠端" class="img-large img-center" />

對於已在 S3 工具上實現標準化的團隊而言,這代表儲存桶政策、前綴與資料夾結構可以直接沿用 — 供應商的變動並不會改變物件儲存模型本身。

## 同步與備份 Arvan Cloud 儲存桶

遠端連接後,使用同步精靈設定一個單向工作,將本機資料夾 — 或另一個雲端遠端 — 鏡像至 Arvan Cloud 儲存桶。在進階設定步驟中設定同時傳輸數與相等性檢查器數量,並使用篩選器排除您不希望計入傳輸量的檔案類型或資料夾,例如 `.iso` 映像檔或巢狀的 `.git` 目錄。

試執行(Dry Run)可讓您在正式執行工作之前,準確預覽將被複製或刪除的檔案。這在您首次針對現有儲存桶進行同步、且不確定其中已有哪些內容時尤其重要。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中設定同步至 Arvan Cloud 儲存桶的工作" class="img-large img-center" />

## 排程定期備份

同步工作驗證通過後,將其儲存至工作管理員(Job Manager);在 PLUS 授權下,還可以附加 crontab 格式的排程,讓 Arvan Cloud 的備份自動執行,無需手動觸發。之後,工作歷史記錄(Job History)會記錄每次執行的耗時、傳輸速度、檔案數量與完成狀態,提供您核對排程備份是否確實完成的紀錄。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="排程至 Arvan Cloud 儲存空間的定期備份工作" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在您的 Arvan Cloud 物件儲存主控台中產生 Access Key 與 Secret Key。
3. 在 RcloneView 中,使用這些憑證與 Arvan Cloud 的端點建立新的 S3 相容遠端。
4. 先執行一次試執行,然後儲存排程同步工作以進行持續備份。

將 Arvan Cloud 視為另一個 S3 端點,代表您的雲端儲存工具組中需要維護的專用工具又少了一個。

---

**相關指南:**

- [使用 RcloneView 管理 Wasabi 儲存空間 — 同步與備份檔案](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Selectel 儲存空間 — 同步與備份檔案](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [解決 S3 Access Denied — RcloneView 權限錯誤](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
