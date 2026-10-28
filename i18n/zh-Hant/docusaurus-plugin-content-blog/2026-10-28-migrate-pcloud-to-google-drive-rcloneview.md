---
slug: migrate-pcloud-to-google-drive-rcloneview
title: "將 pCloud 遷移到 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - morgan
description: "使用 RcloneView 將檔案從 pCloud 移到 Google Drive:連接兩個遠端,執行 Dry Run,進行雲端對雲端複製,並以 Folder Compare 驗證。"
keywords:
  - 將 pcloud 遷移到 google drive
  - pcloud 到 google drive 傳輸
  - 將 pcloud 檔案移到 google drive
  - pcloud google drive 遷移
  - 雲端對雲端傳輸
  - rcloneview pcloud
  - rcloneview google drive
  - pcloud 替代方案遷移
  - 傳輸 pcloud 資料
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 pCloud 遷移到 Google Drive — 使用 RcloneView 傳輸檔案

> 不必先把所有內容下載到自己的磁碟,即可將整個 pCloud 帳號搬到 Google Drive。

統一使用 Google Workspace 的團隊往往會繼承存放在 pCloud 中多年的檔案。手動下載再重新上傳既緩慢又容易出錯。RcloneView 在同一個視窗中連接這兩項服務,進行雲端對雲端複製,並讓你在停用舊帳號之前逐資料夾驗證結果。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 pCloud 與 Google Drive

在 RcloneView 中,這兩項服務都使用 OAuth 瀏覽器登入,因此不需要貼上 API 金鑰。開啟 Remote 分頁,點擊 New Remote,選擇 pCloud,並在彈出的瀏覽器視窗中核准存取。對 Google Drive 重複同樣的操作。兩者都出現在 Remote Manager 之後,在兩個 Explorer 面板中並排開啟:左側是 pCloud,右側是 Google Drive。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 pCloud 和 Google Drive 遠端" class="img-large img-center" />

先瀏覽 pCloud 目錄樹,並對頂層資料夾使用 Get Size。例如,擁有 1.5 TB 專案資料夾的攝影工作室可以逐資料夾規劃遷移,而不是用一個龐大的作業完成。

## 雲端對雲端複製

對於少量資料夾,將它們從 pCloud 面板拖曳到 Google Drive 面板即可。在不同遠端之間拖曳會執行 Copy,因此你的 pCloud 原始檔案保持不變。對於整個帳號,請改為建立作業:開啟 Sync 精靈,選擇 pCloud 作為來源、Google Drive 作為目的地,並選擇 Copy 類型的作業,這樣兩端都不會刪除任何內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 pCloud 到 Google Drive 的雲端對雲端傳輸" class="img-large img-center" />

在 Advanced Settings 中,適中的 Number of file transfers 是合理的起點;Google Drive 會套用 API 限制,過高的並行數可能觸發重試。將 "Retry entire sync if fails" 保持預設值 3,這樣短暫的網路中斷不會使作業終止。

## Dry Run、篩選器與監控

正式執行之前,使用 Dry Run 預覽將被複製的檔案。Filtering 步驟可讓你排除 `.git/` 資料夾等無用內容,或依最大檔案大小和檔案存在時間加以限制,當只需遷移近期專案時非常方便。作業開始後,Transferring 分頁會顯示進度、速度和檔案數,Job History 會保留每次執行的記錄。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中檢視 pCloud 到 Google Drive 的作業歷程記錄" class="img-large img-center" />

## 使用 Folder Compare 驗證

作業完成後,開啟 Compare,左側為 pCloud,右側為 Google Drive。篩選 left-only 檔案即可看到未抵達的內容,並可直接在比較檢視中將其複製過去。RcloneView 在 Windows、macOS 和 Linux 上都能在同一個視窗中掛載並同步 90 多個提供者,因此同一個工具既能完成搬移,也能完成檢查。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中對 pCloud 和 Google Drive 進行 Folder Compare" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 New Remote 將 pCloud 和 Google Drive 新增為遠端。
3. 對從 pCloud 到 Google Drive 的 Copy 作業執行 Dry Run,然後正式執行。
4. 在關閉舊帳號之前,使用 Compare 確認沒有剩餘的 left-only 檔案。

分階段複製加上視覺化檢查,可以把有風險的帳號遷移變成一項例行工作。

---

**相關指南:**

- [將 pCloud 同步到 Google Drive — 使用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/sync-pcloud-to-google-drive-rcloneview)
- [將 Google Drive 遷移到 pCloud — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [管理 pCloud 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
