---
slug: migrate-koofr-to-dropbox-rcloneview
title: "將 Koofr 遷移到 Dropbox — 使用 RcloneView 傳輸檔案"
authors:
  - robin
description: "使用 RcloneView 將 Koofr 遷移到 Dropbox：連接兩個遠端，用 Dry Run 預覽，執行雲端到雲端複製，並透過 Folder Compare 驗證結果。"
keywords:
  - 將 Koofr 遷移到 Dropbox
  - Koofr 到 Dropbox 傳輸
  - RcloneView Koofr
  - RcloneView Dropbox
  - 雲端到雲端遷移
  - Koofr 備份
  - Dropbox 同步
  - rclone GUI
  - 在雲端之間移動檔案
  - 雲端遷移工具
tags:
  - RcloneView
  - koofr
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Koofr 遷移到 Dropbox — 使用 RcloneView 傳輸檔案

> 以雲端到雲端傳輸的方式將 Koofr 資料庫遷移到 Dropbox，複製前先預覽，完成後再透過比較進行驗證。

從 Koofr 遷移到 Dropbox，通常是因為共享團隊資料夾、客戶工作流程，或某個只與 Dropbox 整合的應用程式。把所有內容下載到筆記型電腦再重新上傳，既慢又容易出錯。RcloneView 是以 rclone 為基礎的 GUI，它將兩個服務連接為遠端，並在一個作業中完成它們之間的傳輸，全程都能查看進度。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Koofr 和 Dropbox 連接為遠端

開啟 Remote 分頁並點擊 **New Remote**。Dropbox 使用瀏覽器式 OAuth：RcloneView 會開啟登入頁面，您核准存取後，無需 API 金鑰即可連接遠端。如果目標是 Dropbox for Business 帳戶，請在建立遠端時啟用 `dropbox_business` 設定。以同樣方式從提供者清單中新增 Koofr，並使用您要離開的帳戶登入。

RcloneView 可在 Windows、macOS 和 Linux 上透過一個視窗管理 90 多個雲端儲存服務，因此兩個遠端可以並排顯示在同一個檔案總管中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Koofr 和 Dropbox 遠端" class="img-large img-center" />

## 複製前規劃資料夾配置

在左側檔案總管面板中開啟 Koofr，在右側開啟 Dropbox。決定要遷移全部內容，還是只遷移部分資料夾。擁有多年客戶資料夾的攝影工作室可以每次複製一年，而小型團隊則可以一次遷移整個目錄樹。右鍵選單中的 **Get Size** 選項會顯示資料夾的資料量，有助於估算作業所需時間。

使用作業精靈中的篩選步驟，可以略過 `.git/` 資料夾等雜項，或超過最大大小的檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中比較 Koofr 和 Dropbox 資料夾" class="img-large img-center" />

## 先執行 Dry Run，再進行傳輸

在 Home 分頁中建立作業：以 Koofr 為來源，以 Dropbox 為目的地，並選擇 Copy，在您確認無誤之前保持原始檔案不變。先執行 **Dry Run**。它會列出將被複製的檔案，讓您在任何資料移動之前發現錯誤的目的地資料夾。然後執行作業；雲端到雲端傳輸會在兩個服務之間以串流方式進行，Transferring 分頁會顯示速度、檔案數量和進度。

當 Dropbox 同時收到大量呼叫時，可能會放慢請求。如果看到速率限制訊息，請在 Advanced Settings 中減少檔案傳輸數量，並讓作業重試。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 Koofr 到 Dropbox 的雲端到雲端傳輸" class="img-large img-center" />

## 驗證並保留作業歷程

複製完成後，對兩個資料夾開啟 **Compare**。Left-only 檔案會顯示未送達的內容；大小差異會另外標示。在比較檢視中透過複製來補齊缺漏，然後在 **Job History** 中查看每次執行的狀態、耗時和檔案數量。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Koofr 到 Dropbox 遷移的作業歷程" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Remote > New Remote** 新增 Koofr 和 Dropbox。
3. 建立從 Koofr 到 Dropbox 的 Copy 作業並執行 Dry Run。
4. 執行作業，然後在清理 Koofr 副本之前用 Folder Compare 進行驗證。

可以預覽和驗證的遷移，才能讓您有信心地完成。

---

**相關指南：**

- [管理 Koofr 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [管理 Dropbox 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dry Run — 在 RcloneView 中預覽雲端同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
