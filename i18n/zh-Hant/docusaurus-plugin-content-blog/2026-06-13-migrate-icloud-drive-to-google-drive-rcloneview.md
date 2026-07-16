---
slug: migrate-icloud-drive-to-google-drive-rcloneview
title: "將 iCloud Drive 遷移至 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "使用 RcloneView 將 iCloud Drive 遷移至 Google Drive — 逐步指南，教您如何將 Apple 雲端檔案傳輸至 Google，無需手動下載。"
keywords:
  - iCloud Drive to Google Drive
  - migrate iCloud Drive to Google Drive
  - iCloud Drive migration
  - transfer iCloud files to Google Drive
  - RcloneView iCloud Drive
  - cloud migration tool
  - move files from iCloud to Google Drive
  - cross-cloud file transfer
  - iCloud Drive sync RcloneView
tags:
  - cloud-to-cloud
  - migration
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 iCloud Drive 遷移至 Google Drive — 使用 RcloneView 傳輸檔案

> 將整個 iCloud Drive 資料庫搬移到 Google Drive，不必先下載所有檔案——RcloneView 直接在兩項服務之間完成傳輸。

從以 Apple 為中心的工作流程轉換到 Google Workspace——或單純希望檔案能在所有平台上存取——通常代表需要將 iCloud Drive 遷移至 Google Drive。手動下載再重新上傳數十 GB 的資料既浪費時間，又有傳輸不完整的風險。RcloneView 直接連接兩項服務，並在雲端之間移動檔案,在整個過程中保持原始檔案完整無缺。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要從 iCloud Drive 轉移到 Google Drive

iCloud Drive 與 Apple 生態系統緊密整合,但在 macOS 和 iOS 之外,使用體驗就變得零散。Google Drive 能在所有主要平台上原生運作,並可連接跨平台團隊每天仰賴的 Google Workspace 工具。舉例來說,一間擁有 300GB 專案檔案的設計工作室,在導入僅使用 Google 文件和簡報的客戶時,可能就需要將所有內容轉移到 Google Drive。

iCloud Drive 會靜默地將「桌面」、「文件」及其他資料夾同步至 Apple 的伺服器——這代表多年累積的檔案往往存放在那裡,卻沒有清楚的清單。遷移至 Google Drive 能讓您獲得集中化的檢視能力、精細的共用權限控制,並可從任何裝置存取,而不需要 Apple 帳號。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and Google Drive as remotes in RcloneView" class="img-large img-center" />

## 在 RcloneView 中設定 iCloud Drive

RcloneView 內建的 rclone 執行檔（v1.69.1+）符合 iCloud Drive 支援所需的 rclone v1.69 最低版本要求，因此不需要另外安裝。

若要新增 iCloud Drive,請開啟 **Remote** 分頁並點選 **New Remote**。從供應商清單中選擇 iCloud Drive,然後輸入您的 Apple ID 電子郵件地址與密碼。如果您的 Apple 帳號啟用了雙重認證,請從 Apple ID 安全性設定中產生一組專屬應用程式密碼,並以此取代一般密碼使用。儲存完成後,您的 iCloud Drive 資料夾會立即出現在檔案總管面板中——「桌面」、「文件」以及其他所有已同步的目錄都可以瀏覽。

## 連接 Google Drive

Google Drive 使用 OAuth 驗證方式。在 RcloneView 中新增一個遠端並選擇 Google Drive——系統會自動開啟瀏覽器視窗,供您登入 Google 帳號並授予存取權限。不需要 API 金鑰或開發者憑證。連線在數秒內即可完成,而您的 Drive 資料夾會出現在 iCloud Drive 旁的第二個面板中。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from iCloud Drive to Google Drive in RcloneView" class="img-large img-center" />

## 執行遷移

兩個遠端都設定完成後,開啟 **Job Manager** 並建立一個 **Copy** 工作。設定您的 iCloud Drive 來源資料夾,選擇目標 Google Drive 資料夾作為目的地,並為工作命名。Copy 模式只會傳輸目的地尚不存在的檔案,不會動到原始檔案——您的 iCloud Drive 內容會維持不變。

在執行完整傳輸之前,請先從工作選項中執行 **Dry Run**。RcloneView 會顯示所有將被複製的檔案——名稱、路徑、大小——但不會移動任何一個位元組。當 iCloud Drive 中含有多年累積的混雜內容,而您想在開始前先確認範圍時,這項預覽功能特別有用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud migration job in RcloneView" class="img-large img-center" />

確認無誤後,執行工作並在介面底部的 **Transferring** 分頁中觀看進度。速度、檔案數量與完成百分比都會即時更新。若是大型資料庫,建議在工作的進階設定中啟用校驗碼驗證,以確認每個檔案都完整無誤地送達。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 **Remote** 分頁,點選 **New Remote**,並使用您的 Apple ID 憑證新增 iCloud Drive。
3. 透過 OAuth 瀏覽器登入,新增 Google Drive 作為第二個遠端。
4. 建立一個 Copy 工作,以您的 iCloud Drive 資料夾作為來源,Google Drive 資料夾作為目的地。
5. 執行 Dry Run 以預覽傳輸內容,接著執行工作並在 Transferring 分頁中監控進度。

當兩項服務並排連接後,將整個 iCloud Drive 遷移至 Google Drive 只需設定一個工作,然後讓它自動執行即可。

---

**相關指南：**

- [管理 iCloud Drive — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [使用 RcloneView 將 Dropbox 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [使用 RcloneView 將 Google Drive 遷移至 pCloud](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)

<CloudSupportGrid />
