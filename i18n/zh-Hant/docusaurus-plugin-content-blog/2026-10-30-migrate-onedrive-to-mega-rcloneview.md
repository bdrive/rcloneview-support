---
slug: migrate-onedrive-to-mega-rcloneview
title: "從 OneDrive 遷移到 Mega — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "使用 RcloneView 將檔案從 Microsoft OneDrive 遷移到 Mega：連接兩個遠端，執行試運行，進行雲端對雲端複製，並以資料夾比較驗證結果。"
keywords:
  - OneDrive 遷移到 Mega
  - OneDrive 到 Mega 傳輸
  - 將 OneDrive 檔案移到 Mega
  - OneDrive Mega 遷移工具
  - 雲端對雲端傳輸
  - RcloneView OneDrive
  - RcloneView Mega
  - Mega GUI 用戶端
tags:
  - RcloneView
  - onedrive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 從 OneDrive 遷移到 Mega — 使用 RcloneView 傳輸檔案

> 以視覺化、可重複的雲端對雲端工作，將 OneDrive 資料庫遷移到 Mega，而不必手動下載再重新上傳。

將多年累積的文件從 Microsoft OneDrive 遷移到 Mega，通常意味著要繞經自己磁碟的緩慢路徑。RcloneView 將兩個服務都連接為遠端並直接在它們之間複製，寫入前提供預覽，完成後透過比較證明沒有遺漏。RcloneView 在一個視窗中即可掛載並同步 90 多個供應商，支援 Windows、macOS 與 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 OneDrive 與 Mega 連接為遠端

OneDrive 使用以瀏覽器為基礎的 OAuth：新增遠端時選擇 Microsoft OneDrive 並登入，RcloneView 會儲存權杖。Mega 則不同，它直接使用您的電子郵件與密碼，請在開始前準備好。

為遠端取清楚的名稱，例如 `onedrive-main` 與 `mega-archive`。之後查看工作記錄，或將完整路徑（如 `onedrive-main:Projects`）複製到 rclone 終端機時，清楚的名稱會很有幫助。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 OneDrive 與 Mega 遠端" class="img-large img-center" />

## 執行前規劃複製

在並排的 Explorer 面板中開啟兩個遠端，瀏覽要遷移的資料夾。在來源端使用 Get Size 估算即將傳輸的資料量，並確認您的 Mega 帳號有足夠空間。

首次遷移請選擇 **Copy** 而非 Sync。複製不會刪除目的地的任何內容，因此選錯資料夾也不會刪除資料。可使用篩選步驟略過不需要的檔案類型，或依最大檔案大小或時間範圍加以限制。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView 中兩個遠端之間的雲端對雲端傳輸" class="img-large img-center" />

## 先試運行，再正式傳輸

試運行（Dry Run）會列出將要複製的內容，而不會寫入任何位元組。檢視後再執行工作。Transferring 索引標籤會顯示進度、速度與檔案數量，執行中的工作可隨時取消。

對於大型資料庫，如果 Mega 對您限速，請降低同時傳輸的檔案數；並保留預設的重試次數，以免短暫的網路中斷導致工作終止。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行複製工作" class="img-large img-center" />

## 使用資料夾比較進行驗證

工作完成後，開啟 Compare，左側為 OneDrive，右側為 Mega。透過篩選器可以顯示僅存在於左側的檔案，因此傳輸失敗的檔案一目了然。您也可以在同一檢視中將遺漏的檔案複製過去。工作記錄（Job History）會記錄該次執行的狀態、大小、速度與檔案數量。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OneDrive 與 Mega 之間的資料夾比較結果" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 OneDrive（OAuth）與 Mega（電子郵件與密碼）新增為遠端。
3. 建立從 OneDrive 到 Mega 的 Copy 工作，先試運行，再正式執行。
4. 在停用來源端之前，使用資料夾比較進行驗證。

可預覽、可監控、可驗證的遷移，才能讓您放心地完成。

---

**相關指南：**

- [管理 Mega 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [管理 OneDrive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [從 Google Drive 遷移到 Mega — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-google-drive-to-mega-rcloneview)

<CloudSupportGrid />
