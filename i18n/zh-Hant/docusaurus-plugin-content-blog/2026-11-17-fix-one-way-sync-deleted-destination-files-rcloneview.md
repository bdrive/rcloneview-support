---
slug: fix-one-way-sync-deleted-destination-files-rcloneview
title: "修正單向同步刪除目標檔案的問題 — 用 RcloneView 保護備份"
authors:
  - casey
description: "單向同步後備份中的檔案不見了?了解其原因,以及如何使用 RcloneView 的 Copy 作業、Dry Run 和 Folder Compare 防止非預期的刪除。"
keywords:
  - 同步刪除目標檔案
  - 單向同步刪除檔案
  - rclone sync vs copy
  - 防止同步刪除
  - 雲端備份檔案消失
  - RcloneView dry run
  - 鏡像同步刪除檔案
  - 同步後還原檔案
  - RcloneView 疑難排解
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修正單向同步刪除目標檔案的問題 — 用 RcloneView 保護備份

> 如果同步後備份中的檔案消失了,很可能作業只是確實執行了同步原本設計的行為。以下說明如何選擇正確的作業類型,並先預覽變更。

一個常見的意外:你把筆記型電腦上的資料夾同步到 Backblaze B2,結果只存在於儲存貯體中的舊檔案不見了。這並不是 bug。單向同步會讓目標與來源保持一致,其中包括刪除來源中不存在的檔案。RcloneView 提供相應工具,讓你事先發現這種情況,並選擇一種永遠不會刪除檔案的作業類型。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 單向同步為什麼會刪除檔案

在同步精靈中,單向方向標示為 **"Modifying destination only"**。它不改動來源,而是修改目標,直到目標成為來源的鏡像。目標中任何在來源裡沒有對應項目的內容都會被刪除。

常見誘因:

- **選錯來源資料夾。** 選擇了 `Projects/2026` 而不是 `Projects`,其他年份的資料夾在目標端都會被視為「多餘」。
- **清理過的來源。** 為了釋放空間刪除了本機的舊檔案,卻期望雲端副本作為封存保留它們。
- **多個來源,一個目標。** 兩台電腦同步到同一個資料夾時,會互相刪除對方的檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job in RcloneView" class="img-large img-center" />

## 目標是封存時請使用 Copy

如果目標應保留所有曾經傳送過去的內容,請使用 **Copy** 作業而不是 Sync。Job Manager 提供 Sync、Copy、Move、Delete、Download 和 Upload 作業類型。Copy 會傳輸新增和已修改的檔案,但不會從目標中刪除任何內容,適合照片封存或長期專案備份。

Sync 只用於真正的鏡像,例如希望在第二個雲端上原樣重現的工作資料夾。

## 用 Dry Run 預覽刪除

在任何新建或編輯過的同步作業正式執行之前,先執行一次 **Dry Run**。它會在不做任何變更的情況下,列出將被複製的檔案和將被刪除的檔案。如果刪除清單中有你想保留的檔案,請停下來修正來源路徑,或改用 Copy。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job after checking the Dry Run preview in RcloneView" class="img-large img-center" />

## 用 Folder Compare 檢查差異

**Folder Compare** 會並排顯示兩個資料夾。篩選 right-only 檔案,即可準確看到目標中存在而來源中沒有的檔案,也就是同步將會刪除的檔案。如果其中有重要檔案,請在同步前用 **Copy left** 將它們複製回來源,或同步到另一個資料夾以避開影響。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing destination-only files in RcloneView" class="img-large img-center" />

與僅支援掛載的工具不同,RcloneView 還能同步和比較資料夾,且在 FREE License 下即可使用。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Job Manager 中開啟現有作業,確認來源和目標路徑。
3. 將封存類作業從 Sync 改為 Copy,並對保留的每個同步作業執行 Dry Run。
4. 使用 Folder Compare 檢查 right-only 檔案,並在每次執行後查看 **Job History**。

如果檔案已經遺失,請先檢查服務供應商的垃圾桶或版本記錄,然後重新設定作業,避免再次發生。

---

**相關指南:**

- [Dry Run — 使用 RcloneView 在傳輸前預覽同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [使用 RcloneView 還原誤刪的雲端檔案](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)
- [使用 RcloneView 修正雲端同步後遺失檔案的問題](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
