---
slug: migrate-koofr-to-google-drive-rcloneview
title: "將 Koofr 遷移至 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將您的檔案從 Koofr 移至 Google Drive。直接在雲端服務供應商之間傳輸資料,保留資料夾結構,無需下載至本機。"
keywords:
  - migrate Koofr to Google Drive
  - Koofr to Google Drive transfer
  - RcloneView Koofr Google Drive migration
  - cloud to cloud migration tool
  - Koofr migration GUI
  - move files Koofr Google Drive
  - Koofr cloud migration
  - Google Drive import from Koofr
  - RcloneView cloud migration
  - Koofr file transfer tool
tags:
  - RcloneView
  - koofr
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Koofr 遷移至 Google Drive — 使用 RcloneView 傳輸檔案

> RcloneView 可將您的 Koofr 檔案直接移轉至 Google Drive — 保留資料夾結構、驗證完整性,且無需任何中介的本機儲存空間。

Koofr 這款注重歐洲隱私的儲存服務,深受重視 GDPR 合規與資料主權的使用者喜愛。當團隊轉換至 Google Workspace,需要將 Koofr 中的內容遷移至 Google Drive 時,RcloneView 能俐落地完成遷移:同時連接兩個服務供應商,並以直接的雲端對雲端路徑傳輸資料。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Koofr 與 Google Drive

在開始遷移前,先將兩個服務供應商新增為遠端。針對 Koofr,前往「遠端」分頁 > 新增遠端,選擇 Koofr,並使用您的 Koofr 憑證完成連接。針對 Google Drive,選擇 Google Drive 並完成 OAuth 瀏覽器驗證 — Google Drive 的 OAuth 流程完全自動化,無需任何 API 金鑰。

當兩個遠端都設定完成後,雙面板檔案總管會讓您一側看到 Koofr,另一側看到 Google Drive。這種視覺化比對有助於規劃遷移:確認資料夾結構、找出巢狀目錄,並決定要遷移整個 Koofr 根目錄還是特定子資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Google Drive remotes in RcloneView" class="img-large img-center" />

## 設定遷移同步工作

在 RcloneView 中建立具名的同步工作,以進行可控且可重複的遷移:

1. **來源:** 選擇您的 Koofr 遠端(根目錄或特定資料夾)
2. **目的地:** 選擇您的 Google Drive 遠端與目標資料夾
3. **工作名稱:** 使用具描述性的名稱,例如 `koofr-to-gdrive-migration`
4. **模式:** 選擇「複製」以移動檔案而不會從 Koofr 中移除

對於需要遷移大型共用目錄的團隊,**最大資料夾深度**篩選器可協助您獨立遷移頂層資料夾,並在進行下一階段前逐一驗證。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from Koofr to Google Drive in RcloneView" class="img-large img-center" />

## 傳輸前先以試執行模式預覽

使用 RcloneView 的試執行模式,可在不移動任何檔案的情況下預覽遷移範圍。試執行的輸出結果會依資料夾列出每一個將被複製的檔案 — 讓您準確掌握此工作將執行的內容。當遷移巢狀的 Koofr 資料夾結構,且想在正式執行前確認目的地版面配置時,這特別有用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## 監控傳輸進度並檢視歷史紀錄

RcloneView 的「傳輸」分頁會即時顯示 Koofr 到 Google Drive 遷移的進度 — 正在傳輸的檔案、目前速度,以及已移動的總位元組數。完成後,「工作歷史」會記錄完整摘要:總傳輸大小、耗時、檔案數量,以及遇到的任何錯誤。如果 Google Drive 的 API 速率限制拖慢了傳輸速度,歷史紀錄也會記錄這些重試事件。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在「遠端」分頁 > 新增遠端中,將 Koofr 與 Google Drive 新增為遠端。
3. 建立從 Koofr 到您 Google Drive 目的地的「複製」或「同步」工作。
4. 執行試執行以預覽,然後執行遷移。

從 Koofr 遷移至 Google Drive,在 RcloneView 中是一項直接了當的雲端對雲端操作 — 無需任何本機磁碟空間,並對每一個傳輸的檔案保持完全透明。

---

**相關指南:**

- [管理 Koofr 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [管理 Google Drive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Koofr 對比 Jottacloud — 使用 RcloneView 比較歐洲雲端儲存服務](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
