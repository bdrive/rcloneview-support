---
slug: migrate-mega-to-koofr-rcloneview
title: "將 MEGA 遷移到 Koofr — 使用 RcloneView 傳輸檔案"
authors:
  - casey
description: "使用 RcloneView 將 MEGA 遷移到 Koofr:連接兩個遠端,透過 Dry Run 預覽,執行雲端對雲端複製,並以 Folder Compare 驗證結果。"
keywords:
  - 將 MEGA 遷移到 Koofr
  - MEGA 到 Koofr 傳輸
  - MEGA Koofr 遷移
  - 將檔案從 MEGA 移到 Koofr
  - RcloneView MEGA
  - RcloneView Koofr
  - 雲端對雲端傳輸
  - MEGA 替代方案 歐洲儲存
tags:
  - RcloneView
  - mega
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 MEGA 遷移到 Koofr — 使用 RcloneView 傳輸檔案

> 透過可預覽、可驗證的雲端對雲端工作,將 MEGA 帳號中的檔案移入 Koofr,而不是手動下載再重新上傳。

把多年累積的檔案從 MEGA 遷出,通常意味著先下載到筆記型電腦再重新上傳,工作量加倍,而且每次網路波動都會中斷。RcloneView 讓你並排連接 MEGA 與 Koofr,並以單一工作執行傳輸。RcloneView 在一個視窗中即可掛載並同步 90 多個提供者,支援 Windows、macOS 與 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

開啟 Remote 分頁並點擊 New Remote。MEGA 採用憑證輸入方式:輸入你的帳號電子郵件與密碼。Koofr 從提供者清單中以相同方式新增。兩者都出現在 Remote Manager 後,將它們分別在兩個 Explorer 面板中開啟,即可同時檢視來源與目的地。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 MEGA 與 Koofr 遠端" class="img-large img-center" />

先瀏覽 MEGA 的目錄樹。決定要遷移全部內容還是僅遷移部分資料夾,範圍較小能讓首次執行更快,也更容易檢查。

## 先預覽,再傳輸

你可以將資料夾從 MEGA 面板拖曳到 Koofr 面板;在不同遠端之間拖曳執行的是複製,因此 MEGA 上的原始檔案保持不變。對於較大規模的遷移,請改為建立 Sync 或 Copy 工作。先執行 Dry Run:它會列出將被複製的檔案,讓你在寫入任何內容之前發現錯誤的目的地路徑。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 MEGA 到 Koofr 的雲端對雲端傳輸" class="img-large img-center" />

在工作的 Advanced Settings 中可以調整並行檔案傳輸數。如果任一服務開始變慢或回傳錯誤,請降低 equality checkers 與傳輸數,並讓重試設定處理暫時性失敗。

## 監控與驗證

在顯示速度、檔案數與大小的 Transferring 分頁中查看進度。工作完成後,開啟 Job History 確認狀態與傳輸總量。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="顯示已完成 MEGA 到 Koofr 傳輸的 Job History" class="img-large img-center" />

最後,將 MEGA 放在左側、Koofr 放在右側使用 Folder Compare。篩選僅在左側的檔案與不同的檔案,找出未抵達的內容,並可直接在比較檢視中複製過去。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="MEGA 與 Koofr 之間的 Folder Compare" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote 分頁中新增你的 MEGA 與 Koofr 遠端。
3. 建立 Copy 或 Sync 工作,並執行 Dry Run 預覽。
4. 執行工作,然後在清理 MEGA 上的任何內容之前,以 Folder Compare 驗證結果。

在比較結果無誤之前保留 MEGA 上的副本,這樣在驗證期間原始資料始終可用。

---

**相關指南:**

- [將 Koofr 遷移到 MEGA](https://rcloneview.com/support/blog/migrate-koofr-to-mega-rcloneview)
- [將 MEGA 遷移到 pCloud](https://rcloneview.com/support/blog/migrate-mega-to-pcloud-rcloneview)
- [管理 Koofr 雲端同步與備份](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
