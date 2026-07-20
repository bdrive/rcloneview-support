---
slug: fix-backblaze-b2-cap-exceeded-errors-rcloneview
title: "修復 Backblaze B2 超出上限錯誤 — 使用 RcloneView 解決"
authors:
  - tayson
description: "了解如何在 RcloneView 中診斷並修復 Backblaze B2 超出上限錯誤。控制傳輸速率、管理每日上限，讓您的 B2 備份持續穩定運作。"
keywords:
  - Backblaze B2 超出上限錯誤
  - B2 每日上限限制 rclone
  - 修復 Backblaze B2 錯誤 RcloneView
  - B2 傳輸上限超出
  - Backblaze B2 疑難排解
  - rclone B2 速率限制
  - Backblaze B2 備份錯誤
  - B2 上傳上限修復
tags:
  - RcloneView
  - troubleshooting
  - backblaze-b2
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Backblaze B2 超出上限錯誤 — 使用 RcloneView 解決

> Backblaze B2 的每日下載上限可能會使傳輸在同步過程中停止。以下說明如何在 RcloneView 中診斷超出上限錯誤，並設定作業以維持在限制範圍內。

Backblaze B2 對於與 Cloudflare 對等連線的網路提供大量免費出口流量，但下載至非對等目的地時會消耗每日上限額度。當達到該上限時，B2 會回傳 HTTP 403 錯誤並附上「cap exceeded」訊息，導致 RcloneView 同步作業失敗或停滯。本指南將引導您識別錯誤、調整傳輸設定，並排程作業以維持在 B2 帳戶每日限制範圍內。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 識別超出上限錯誤

當 B2 超出上限時，RcloneView 會在介面底部的**「Log」分頁**顯示錯誤。您會看到包含 `403 Forbidden` 以及訊息 `Transaction cap exceeded` 或 `Download cap exceeded` 的項目。Transferring 分頁中的傳輸監視器會顯示受影響的作業停滯在 0 B/s。

開啟 Rclone Terminal（Terminal 分頁）並執行 `rclone about b2-remote:` 以檢查目前的儲存空間及交易使用量。雖然終端機不會顯示確切的上限額度（那是在 Backblaze 主控台中設定的），但可以確認遠端可以連線，並顯示整體帳戶狀態。

<img src="/support/images/en/blog/new-remote.png" alt="Checking Backblaze B2 remote configuration in RcloneView" class="img-large img-center" />

## 調整傳輸設定以避免觸及上限

最有效的解決方法是限制傳輸頻寬，將下載分散到多天進行。在 RcloneView 的 Global Rclone Flags（Settings 分頁 → Embedded Rclone → Global Rclone Flags）中，加入 `--bwlimit 10M` 將頻寬限制在 10 MB/s。這可以降低每日資料消耗量，並在執行大型同步或還原時使傳輸維持在 B2 上限範圍內。

對於由排程器觸發的作業，請將其分散到一天中的不同時段。與其在早上 6 點執行 200 GB 的還原，不如依資料夾深度拆分作業 — 使用篩選規則先處理 `Archive/2023/`，再於中午另一個作業中處理 `Archive/2024/`。RcloneView 同步精靈第 3 步驟中的自訂篩選規則讓這項操作變得簡單：使用資料夾路徑排除功能來隔離各批次。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Backblaze B2 jobs to avoid daily cap in RcloneView" class="img-large img-center" />

## 上限重設後復原失敗的同步

Backblaze B2 的上限每天於太平洋時間午夜重設。若作業因超出上限錯誤而失敗，RcloneView 的同步具有冪等性 — 當您在重設後再次執行相同作業時，它會從先前中斷的地方繼續，並跳過已傳輸的檔案。Folder Compare 功能可讓您透過比對來源與目的地，確認失敗前已完成的檔案。

為求保險，請在作業精靈第 2 步驟中啟用**「Retry entire sync if fails」**（設定為 3 次重試），並確保重試間隔足夠長，讓上限有時間重設。請定期檢查 Job History 分頁，及早發現失敗情況，並在排程新的傳輸前先檢視上限狀態。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Backblaze B2 job failure history in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. B2 作業失敗後，檢查 Log 分頁中的 `403 cap exceeded` 錯誤。
3. 在 Global Rclone Flags 中加入 `--bwlimit` 以限制每日資料消耗量。
4. 待每日上限重設後重新執行同步作業 — RcloneView 會自動跳過已傳輸的檔案。

透過謹慎的排程與頻寬限制，即使在每日上限限制下，Backblaze B2 仍然是具成本效益的備份目的地。

---

**相關指南：**

- [使用 RcloneView 將 Backblaze B2 遷移至 AWS S3](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [使用 RcloneView 修復雲端同步中斷網路重試問題](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)
- [RcloneView 中的自訂 Rclone 旗標與進階選項](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
