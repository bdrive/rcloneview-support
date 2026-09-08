---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "將 HiDrive 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用 RcloneView 的校驗和驗證同步、試執行預覽和工作歷史記錄追蹤功能，將檔案從 HiDrive 遷移到 Backblaze B2。"
keywords:
  - 將 HiDrive 遷移到 Backblaze B2
  - HiDrive Backblaze B2 傳輸
  - HiDrive 雲端遷移
  - Backblaze B2 備份工具
  - RcloneView HiDrive
  - 雲到雲傳輸
  - 校驗和驗證遷移
  - 從 HiDrive 到物件儲存
  - 從歐洲雲端到 Backblaze B2
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 HiDrive 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 透過校驗和驗證傳輸與事前試執行，將不斷成長的 HiDrive 帳戶遷移到 Backblaze B2 物件儲存。

HiDrive 很適合日常檔案存取，但當資料集成長超出個人或商業雲端方案的預期範圍時，需要更便宜的長期保留或異地物件儲存副本的團隊，往往會轉向 Backblaze B2。RcloneView 在同一視窗中連接這兩項服務 — HiDrive 透過 OAuth，Backblaze B2 透過 Application Key — 因此遷移作為一個設定好的工作執行，而不必先將所有內容下載到本機。RcloneView 可在一個視窗中掛載並同步 90+ 家服務供應商，並支援 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 HiDrive 和 Backblaze B2

HiDrive 透過 RcloneView 以瀏覽器為基礎的 OAuth 登入方式新增 — 不需要輸入額外的 API 金鑰。Backblaze B2 需要在 Backblaze 帳戶主控台中產生的 Application Key ID 和 Application Key，直接輸入到遠端設定表單中。當兩個遠端都出現在 Remote Manager 中後，它們會在 Explorer 中以獨立分頁顯示，方便你在正式傳輸前並排瀏覽 HiDrive 來源與 B2 目的地。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 設定遷移工作

使用 Home 分頁中的 Sync 按鈕開啟 4 步驟精靈。在步驟 1 中，選擇 HiDrive 來源資料夾和作為目的地的 Backblaze B2 儲存貯體，並選擇單向同步，使遷移只寫入 B2 而不影響 HiDrive。步驟 2 讓你啟用校驗和比較，依雜湊值與大小（而非僅修改時間）比對檔案，這在兩個截然不同的儲存後端之間遷移時格外重要。步驟 3 支援依檔案類型、最大大小或存放時間篩選，適合只想先遷移部分內容的情況。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

在正式傳輸前執行 Dry Run — 它會準確列出將複製的內容，而不移動任何一個位元組，是在錯誤的資料夾路徑演變成大規模意外傳輸之前發現問題的最安全方法。

## 驗證遷移結果

同步完成後，開啟 Folder Compare，比較 HiDrive 來源與 B2 目的地，確認雙方的檔案數量與大小是否一致。Job History 會記錄每次執行傳輸的總大小、傳輸速度與檔案數量，方便在出現異常時進行核對。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Backblaze B2 folders after migration in RcloneView" class="img-large img-center" />

## 快速開始

1. **下載 RcloneView**：前往 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. 透過 OAuth 連接你的 HiDrive 帳戶，並使用 Application Key ID 與 Key 新增 Backblaze B2。
3. 設定啟用校驗和比較的單向同步工作，然後先執行 Dry Run。
4. 在停用 HiDrive 副本之前，用 Folder Compare 與 Job History 確認結果。

遷移到 Backblaze B2 並不代表要放棄已經在 HiDrive 中建立的資料夾結構與檔案組織 — RcloneView 會在傳輸過程中完整保留這些內容。

---

**相關指南：**

- [管理 HiDrive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [管理 Backblaze B2 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [修復 HiDrive 同步錯誤 — 使用 RcloneView 實現可靠的雲端備份](https://rcloneview.com/support/blog/fix-hidrive-sync-errors-rcloneview)

<CloudSupportGrid />
