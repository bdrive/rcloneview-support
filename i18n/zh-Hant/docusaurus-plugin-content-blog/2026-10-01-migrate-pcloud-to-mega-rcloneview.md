---
slug: migrate-pcloud-to-mega-rcloneview
title: "將 pCloud 遷移到 MEGA — 使用 RcloneView 傳輸檔案"
authors:
  - robin
description: "使用 RcloneView 將 pCloud 遷移到 MEGA：連接兩個遠端，執行 Dry Run，進行雲端對雲端複製，並透過 Folder Compare 驗證。逐步指南。"
keywords:
  - 將 pCloud 遷移到 MEGA
  - pCloud 到 MEGA 傳輸
  - 移動 pCloud MEGA 檔案
  - 雲端對雲端遷移
  - RcloneView pCloud
  - RcloneView MEGA
  - pCloud MEGA 同步
  - 傳輸 pCloud 檔案
  - rclone GUI 遷移
tags:
  - RcloneView
  - pcloud
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 pCloud 遷移到 MEGA — 使用 RcloneView 傳輸檔案

> 無需手動下載再重新上傳，透過可預覽、可驗證的雲端對雲端工作，將整個 pCloud 資料庫遷移到 MEGA。

從 pCloud 切換到 MEGA 通常意味著龐大的檔案庫，沒有人想先把它下載到筆記型電腦上。RcloneView 將兩個服務都連接為遠端，因此您可以在一個視窗中依資料夾複製，並在停用舊帳戶之前檢查結果。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 pCloud 和 MEGA 連接為遠端

pCloud 使用以瀏覽器為基礎的 OAuth：RcloneView 會開啟登入頁面，您核准存取後即可建立遠端，無需 API 金鑰。MEGA 使用您的電子郵件和密碼。開啟 **Remote > New Remote**，選擇各個供應商，並取一個清楚的名稱，例如 `pcloud-old` 和 `mega-new`。

兩個遠端都出現在 Remote Manager 後，在兩個 Explorer 面板中並排開啟它們。RcloneView 可在 Windows、macOS 和 Linux 上透過一個視窗掛載並同步 90 多種供應商，因此日後的遷移也可使用相同的版面配置。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 pCloud 和 MEGA 遠端" class="img-large img-center" />

## 在雲端之間複製檔案

將資料夾從一個遠端拖曳到另一個遠端即會複製，因為不同遠端之間的傳輸是複製而不是移動。對於小資料夾，這樣就足夠了。對於整個資料庫，請建立 Copy 或 Sync 工作，以便儲存、重新執行，並在 Job History 中檢視。

在驗證結果之前，請保持來源資料不變。Copy 工作會保留 pCloud 中的原有內容，因此即使中途中斷，也可以安全地重複遷移。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 pCloud 到 MEGA 的雲端對雲端傳輸" class="img-large img-center" />

## 使用 Dry Run 預覽並調整傳輸

請先執行 Dry Run。它會列出將被複製或刪除的檔案，而不會變更任何內容，從而在目的地資料夾錯誤導致浪費數小時之前發現問題。在進階步驟中，您可以調整同時檔案傳輸數量和 equality checker 數量。如果出現錯誤，先調低這些數值是合理的第一步。

使用篩選步驟略過不想遷移的檔案類型或資料夾，例如舊的安裝程式或 Google Docs 匯出檔。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行遷移工作" class="img-large img-center" />

## 使用 Folder Compare 驗證

傳輸完成後，開啟 **Compare**，左側為 pCloud，右側為 MEGA。篩選僅存在於左側的檔案和有差異的檔案，即可看到遺漏或不一致的內容，並可直接在比較檢視中複製其餘檔案。Transferring 索引標籤和 Job History 會記錄每次執行的大小和狀態。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="pCloud 與 MEGA 之間的 Folder Compare" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView**：請從 [rcloneview.com](https://rcloneview.com/src/download.html) 取得。
2. 透過 New Remote 新增 pCloud（OAuth）和 MEGA（電子郵件和密碼）。
3. 建立一個從 pCloud 到 MEGA 的 Copy 工作，並執行 Dry Run。
4. 執行工作，然後在關閉舊帳戶之前使用 Folder Compare 驗證。

經過預覽和驗證的複製，可以讓有風險的帳戶切換變成一項例行工作。

---

**相關指南：**

- [將 pCloud 遷移到 Proton Drive](https://rcloneview.com/support/blog/migrate-pcloud-to-proton-drive-rcloneview)
- [將 MEGA 遷移到 Dropbox](https://rcloneview.com/support/blog/migrate-mega-to-dropbox-rcloneview)
- [修復 pCloud 同步錯誤](https://rcloneview.com/support/blog/fix-pcloud-sync-errors-rcloneview)

<CloudSupportGrid />
