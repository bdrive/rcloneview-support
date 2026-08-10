---
slug: fix-cloud-sync-empty-folders-not-created-rcloneview
title: "同步後空資料夾遺失 — 使用 RcloneView 解決"
authors:
  - robin
description: "雲端同步後空資料夾消失了嗎?了解為什麼 rclone 預設會略過空資料夾,以及如何透過 RcloneView 中的一個設定解決這個問題。"
keywords:
  - 空資料夾未同步
  - rclone 空目錄
  - 雲端同步資料夾遺失
  - RcloneView 疑難排解
  - 資料夾結構同步
  - rclone 建立空目錄
  - 修復雲端同步錯誤
  - RcloneView 同步設定
  - 雲端備份資料夾結構
tags:
  - RcloneView
  - troubleshooting
  - sync
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同步後空資料夾遺失 — 使用 RcloneView 解決

> 佔位資料夾和空的專案目錄在雲端同步後經常消失 — 以下是恢復它們的設定。

某團隊將資料夾結構遷移到雲端後發現,為未來檔案、客戶交付物或封存而保留的空佔位目錄中,有一半根本沒有出現在目的地。這是 rclone 的預期預設行為:同步作業只會重新建立包含檔案的目錄。RcloneView 提供了變更此行為所需的設定,知道在哪裡找到它可以省去許多令人困惑的重工。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼空資料夾會被略過

rclone 的同步與複製引擎會走訪來源目錄樹並傳輸物件 — 也就是檔案。內部沒有任何檔案的目錄不會產生傳輸作業,因此預設情況下目的地永遠不會得知該目錄應該存在。這並不是錯誤;這源於大多數雲端儲存 API 最初表示「資料夾」的方式 — 做為物件金鑰的附帶產物,而非獨立實體。實際結果是,一個包含刻意設置的佔位資料夾(例如等待下個月檔案的 `03-invoices/` 資料夾,或客戶期望看到的分類結構)的來源目錄樹,到達目的地時可能會缺少部分內容。

這在資料夾比較(Folder Compare)或初次遷移期間尤其明顯,因為在檔案實際落地之前,目的地結構就需要在視覺上與來源結構一致。

## 解決方法:建立空目錄

RcloneView 的同步精靈在第 1 步(設定儲存)中提供了**建立空目錄**開關,與來源/目的地遠端及資料夾選擇並列。啟用它會告訴底層同步作業同時重新建立沒有檔案的目錄,使目的地資料夾樹不僅在檔案層面、而且在結構上都與來源完全一致。

<img src="/support/images/en/blog/new-remote.png" alt="含有建立空目錄選項的 RcloneView 同步精靈第 1 步" class="img-large img-center" />

對於一次性的結構遷移,建議先啟用該選項執行試執行(Dry Run)。試執行會在不觸及目的地的情況下準確列出將要建立的資料夾和檔案,是在正式執行傳輸前確認空資料夾問題確實已解決的最快方法。

## 使用資料夾比較確認結果

執行同步後,使用 RcloneView 的資料夾比較(Folder Compare)逐目錄檢查兩側。RcloneView 可以在一個視窗中掛載並同步 90 多個服務供應商,支援 Windows、macOS 和 Linux,因此你無需切換工具即可並排直觀比較來源和目的地目錄樹。「顯示僅左側檔案」和「顯示僅右側檔案」篩選器可以讓你立即知道某個資料夾是否成功傳輸過去。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="顯示來源與目的地之間相符資料夾結構的資料夾比較畫面" class="img-large img-center" />

如果你是在長期維護該結構而非進行一次性遷移,請在勾選空目錄選項的情況下儲存該工作,以便每次排程執行都能依需求持續重新建立佔位資料夾。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="安排定期 RcloneView 同步工作以保持空資料夾結構最新" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟同步精靈並選擇你的來源與目的地遠端。
3. 在第 1 步中,在設定篩選器之前啟用**建立空目錄**。
4. 執行試執行以確認資料夾結構,然後執行同步。

兩端一致的資料夾結構能讓新團隊成員的導入與儲存空間稽核變得更不容易出錯。

---

**相關指南:**

- [macOS 空資料夾與權限問題 — 使用 RcloneView 解決](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)
- [使用 RcloneView 清理雲端儲存中的空資源回收桶](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [修復傳輸後雲端同步檔案遺失問題 — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
