---
slug: manage-pixeldrain-cloud-sync-rcloneview
title: "管理 Pixeldrain 雲端儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "將 Pixeldrain 連接至 RcloneView，瀏覽您託管的檔案並同步至其他雲端服務商，以進行備份或長期封存。"
keywords:
  - Pixeldrain RcloneView
  - Pixeldrain 雲端同步
  - Pixeldrain 備份
  - 管理 Pixeldrain 檔案
  - Pixeldrain rclone GUI
  - Pixeldrain 檔案傳輸
  - Pixeldrain 雲端備份
  - Pixeldrain 同步設定
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Pixeldrain 雲端儲存 — 使用 RcloneView 同步與備份檔案

> Pixeldrain 是一個具備個人雲端儲存功能的檔案託管服務 — RcloneView 將其連接至您更廣泛的雲端生態系統，方便備份與有系統地管理檔案。

Pixeldrain 是一個檔案分享與託管平台，同時也具備個人雲端儲存的功能，讓使用者可以上傳、整理與分享檔案。雖然網頁介面涵蓋了基本操作，但若使用者需要將 Pixeldrain 的內容同步至另一個雲端，或將檔案下載到本機進行封存，使用專屬工具會更有幫助。RcloneView 將 Pixeldrain 列為支援的服務商之一，因此您可以將它與所有其他遠端一起連接，並在單一介面中管理傳輸作業。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Pixeldrain 連接至 RcloneView

開啟 RcloneView 並前往 **Remote Manager**。點擊 **New Remote**，然後在服務商清單中捲動尋找 **Pixeldrain**。連線需要使用您的 Pixeldrain API key，您可以在 Pixeldrain 網站的帳戶設定中產生此金鑰。在設定表單中輸入 API key 並儲存。

儲存後，於 File Explorer 中開啟該遠端。您的 Pixeldrain 檔案與目錄便會載入面板中，可供瀏覽與傳輸。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Pixeldrain remote in RcloneView" class="img-large img-center" />

## 瀏覽與整理檔案

RcloneView 的 File Explorer 會以與其他服務商相同的樹狀結構與清單檢視方式顯示您的 Pixeldrain 儲存內容。您可以瀏覽目錄、選取檔案，並使用右鍵選單進行複製、移動或刪除操作。若是圖片較多的收藏，可切換至 **Thumbnail View** 以格狀方式檢視預覽 — 這在您於 Pixeldrain 上託管照片或截圖，並想在傳輸前先確認內容時特別實用。

開啟第二個面板並指向另一個遠端 — Google Drive、Backblaze B2 或本機資料夾 — 即可直接在 Pixeldrain 與目標位置之間拖放檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Pixeldrain folders with another cloud in RcloneView" class="img-large img-center" />

## 建立備份工作

若要系統性地備份您的 Pixeldrain 內容，可使用 **Job** 功能。前往 **Jobs**，點擊 **New Job**，並將 Pixeldrain 設為來源。選擇任一已設定的遠端作為目的地。在工作精靈的第 2 步驟中，設定傳輸選項：

- **Number of transfers**：同時傳輸的檔案數量
- **Dry Run**：預覽將要複製的內容，而不實際搬移任何檔案
- **Checksum verification**：啟用後可在傳輸完成後確認資料完整性

執行工作後，RcloneView 會即時顯示傳輸速度與檔案數量等進度資訊。工作完成後，結果會記錄在 **Job History** 中。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Pixeldrain files to another cloud provider" class="img-large img-center" />

## 使用 Folder Compare 進行驗證

將內容從 Pixeldrain 遷移至另一個雲端後，**Folder Compare** 工具能讓您確認傳輸是否完整。並排開啟 Pixeldrain 來源與目的地資料夾，RcloneView 會標示出僅存在於其中一側，或檔案大小不同的項目。當您分多次階段完成遷移，並想確認沒有遺漏任何檔案時，這項功能特別有用。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Pixeldrain sync records" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 pixeldrain.com 的帳戶設定中產生您的 Pixeldrain API key。
3. 開啟 **Remote Manager**，點擊 **New Remote**，選擇 **Pixeldrain**，並輸入您的 API key。
4. 瀏覽您的檔案，並設定備份工作至您偏好的目的地雲端。

RcloneView 讓您能輕鬆地將 Pixeldrain 內容移轉至更有系統的長期儲存架構中。

---

**相關指南：**

- [使用 RcloneView 進行雲端對雲端遷移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [修復雲端同步傳輸後檔案遺失問題](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [Job History 與傳輸紀錄監控](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
