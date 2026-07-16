---
slug: migrate-proton-drive-to-google-drive-rcloneview
title: "將 Proton Drive 遷移至 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將檔案從 Proton Drive 移至 Google Drive。直接在雲端服務商之間傳輸加密資料——無需手動下載，完整保留資料夾結構。"
keywords:
  - migrate Proton Drive to Google Drive
  - Proton Drive Google Drive transfer
  - RcloneView Proton Google Drive migration
  - Proton Drive migration tool
  - move files Proton Drive Google Drive
  - Proton Drive cloud migration GUI
  - Google Drive import Proton Drive
  - cloud to cloud migration
  - Proton Drive file transfer tool
  - RcloneView Proton Drive sync
tags:
  - RcloneView
  - proton-drive
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Proton Drive 遷移至 Google Drive — 使用 RcloneView 傳輸檔案

> RcloneView 直接在雲端將您的 Proton Drive 內容遷移至 Google Drive——即時解密檔案並上傳，全程不在本機儲存任何資料。

Proton Drive 的端對端加密使其成為注重隱私使用者信賴的儲存平台。當團隊環境轉移至以 Google Workspace 為基礎時，將 Proton Drive 上的文件、照片與專案資產遷移至 Google Drive 是常見需求。RcloneView 能有效處理此類遷移，同時連接兩個服務商，並透過單一同步工作協調傳輸流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Proton Drive 與 Google Drive

新增 Proton Drive 作為遠端需要 rclone v1.69 或更新版本——RcloneView 內建的 rclone 預設已符合此需求。前往「遠端」分頁 > 新增遠端，選擇 Proton Drive，並輸入您的 Proton 帳號電子郵件與密碼。若您已啟用兩步驟驗證，系統也會提示您輸入 2FA 驗證碼。

對於 Google Drive，選擇 Google Drive 並完成 OAuth 瀏覽器授權流程。設定完成後，兩個遠端都會出現在 RcloneView 的檔案總管中。在雙面板檢視中並排開啟 Proton Drive 與 Google Drive，以評估遷移範圍。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Google Drive remotes in RcloneView" class="img-large img-center" />

## 設定遷移工作

建立一個以 Proton Drive 為來源、Google Drive 資料夾為目的地的複製或同步工作。在 RcloneView 的同步精靈中：

- **模式：** 選擇「複製」以在不刪除 Proton Drive 原始檔案的情況下移動檔案（遷移期間保留原始檔案作為備份）
- **篩選：** 使用預先定義的 Google 文件篩選器，以避免檔案類型不相容的問題
- **校驗碼：** 啟用以驗證已傳輸檔案的完整性

由於 Proton Drive 具有加密機制，rclone 會在下載時解密內容，再以明文重新上傳至 Google Drive。開始前請確認您的 Google Drive 目的地資料夾有足夠的配額。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## 執行試跑並預覽

執行大規模遷移前，務必先使用試跑模式。RcloneView 的試跑功能會掃描 Proton Drive 來源，並列出所有將被傳輸的檔案——在正式執行前提供檔案數量、資料夾結構預覽與傳輸大小估算。這有助於找出您可能想要排除的資料夾，例如 Proton Drive 的內部檔案版本或共用連結。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## 監控進度並驗證結果

RcloneView 的「傳輸」分頁會即時顯示遷移進度。相較於明文儲存的服務商，Proton Drive 的加密儲存會增加一些處理負擔，因此傳輸速度可能略慢於同等的 Google Drive 對 Google Drive 傳輸。工作完成後，「工作歷史」會顯示完整摘要：已遷移的檔案數、傳輸位元組數、耗時與錯誤資訊。

比對 Google Drive 與 Proton Drive 來源中的檔案數量與大小，以驗證遷移是否成功完成。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Proton Drive to Google Drive migration progress in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Proton Drive（電子郵件 + 密碼）與 Google Drive（OAuth）作為遠端。
3. 建立一個從 Proton Drive 到您 Google Drive 目的地資料夾的複製工作。
4. 執行試跑以確認範圍，然後執行完整遷移。

使用 RcloneView，將 Proton Drive 遷移至 Google Drive 是一個簡單直接的流程——並具備進度監控與詳細的傳輸歷史紀錄。

---

**相關指南：**

- [管理 Proton Drive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 將 Proton Drive 遷移至 OneDrive](https://rcloneview.com/support/blog/migrate-proton-drive-to-onedrive-rcloneview)
- [管理 Google Drive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
