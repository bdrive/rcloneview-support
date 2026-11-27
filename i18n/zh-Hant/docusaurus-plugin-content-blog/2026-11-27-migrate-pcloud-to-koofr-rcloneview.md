---
slug: migrate-pcloud-to-koofr-rcloneview
title: "從 pCloud 遷移到 Koofr — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "使用 RcloneView 將 pCloud 遷移到 Koofr。在雲端與雲端之間複製資料夾,用 Dry Run 預覽,用 Folder Compare 驗證,省去下載再上傳的循環。"
keywords:
  - pcloud 遷移到 koofr
  - pcloud 到 koofr 傳輸
  - pcloud koofr 遷移
  - 將檔案從 pcloud 移到 koofr
  - 雲端到雲端遷移
  - 歐洲雲端儲存遷移
  - rcloneview pcloud
  - rcloneview koofr
  - koofr 檔案傳輸工具
  - rclone gui 雲端遷移
tags:
  - RcloneView
  - pcloud
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 從 pCloud 遷移到 Koofr — 使用 RcloneView 傳輸檔案

> 按資料夾將你的 pCloud 資料庫遷移到 Koofr,事先預覽每一項變更,並確認沒有任何遺漏。

團隊和個人從 pCloud 遷移到 Koofr 的原因各式各樣:整合帳戶、將 Koofr 作為中心樞紐,或在另一家服務商保留第二份副本。把所有內容下載到筆電再重新上傳,既浪費磁碟空間,又要耗費好幾天。RcloneView 在一個視窗中連接兩個服務,並透過 rclone 在它們之間複製資料,因此遷移會以一個可監控、可重複、可驗證的受管理工作執行。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 pCloud 和 Koofr 連接為遠端

開啟 **Remote** 分頁並點選 **New Remote**。pCloud 使用 OAuth:選擇 pCloud 後,瀏覽器會開啟,你可以登入並核准存取。不需要 API 金鑰。接著為 Koofr 新增第二個遠端,並輸入設定表單要求的帳戶憑證。

兩個遠端都建立好後,在兩個 Explorer 面板中並排開啟。你可以在 **Settings > Layout** 中將版面切換為水平或垂直分割,並透過資料夾樹狀結構、清單檢視或適用於相片資料夾的縮圖檢視瀏覽每個帳戶。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 pCloud 和 Koofr 遠端" class="img-large img-center" />

在搬移任何內容之前,在 pCloud 的頂層資料夾上按右鍵並使用 **Get Size**。了解總大小有助於確認 Koofr 帳戶是否有足夠的空間。

## 在雲端與雲端之間複製資料夾

如果只有少量資料夾,可直接從 pCloud 面板拖曳到 Koofr 面板。在不同遠端之間拖曳會執行 **Copy**,因此 pCloud 上的原始檔案保持不變。

如果是完整遷移,請改為建立工作。在 Home 分頁中點選 **Sync**,選擇 pCloud 資料夾作為來源、Koofr 資料夾作為目的地,並為工作命名,例如 `pcloud-to-koofr`。在 Advanced Settings 中,如果想依雜湊值與大小比較檔案,請啟用 **checksum**;並將 **Retry entire sync if fails** 保持預設值 3,這樣連線中斷時執行也不會停止。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 pCloud 到 Koofr 的雲端到雲端傳輸" class="img-large img-center" />

先執行一次 **Dry Run**。它會列出所有將被複製或刪除的檔案,是在實際資料移動之前發現錯誤目的地路徑的可靠方法。RcloneView 在 Windows、macOS 和 Linux 上透過一個視窗掛載和同步 90+ 服務商,因此日後遷移其他組合時也可以沿用相同的工作流程。

## 監控傳輸並檢視歷史記錄

工作執行期間,**Transferring** 分頁會顯示進度、速度和檔案數量,你可以隨時取消。搬移 400 GB 拍攝素材的攝影師可以將應用程式最小化到系統匣,工作會在背景持續執行。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中監控從 pCloud 到 Koofr 的傳輸進度" class="img-large img-center" />

完成後,開啟 **Job History** 檢查狀態(Completed、Errored 或 Canceled)、總大小、速度和檔案數量。如果在切換期間向 pCloud 新增了檔案,請再次執行同一個工作。只會傳輸新增或變更的檔案。

## 使用 Folder Compare 驗證

點選 **Compare**,在左側載入 pCloud 資料夾,在右側載入 Koofr 資料夾。使用 **left-only files** 篩選找出 Koofr 上缺少的內容,並用 **Copy right** 補齊。當兩側顯示一致時,遷移即告完成,你可以決定何時停用 pCloud 上的副本。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="遷移後在 RcloneView 中比較 pCloud 和 Koofr 資料夾" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **New Remote** 新增 pCloud(OAuth 瀏覽器登入)和 Koofr 作為遠端。
3. 建立從 pCloud 到 Koofr 的 Sync 工作,並用 **Dry Run** 預覽。
4. 執行工作,檢視 **Job History**,並用 **Folder Compare** 確認。

一次經過規劃和驗證的遷移,代表你可以依自己的時程切換服務商,而不必等待手動複製終於完成。

---

**相關指南:**

- [管理 pCloud 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [管理 Koofr 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修復 Koofr 同步錯誤](https://rcloneview.com/support/blog/fix-koofr-sync-errors-rcloneview)

<CloudSupportGrid />
