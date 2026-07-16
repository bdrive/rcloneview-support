---
slug: migrate-dropbox-to-azure-blob-storage-rcloneview
title: "使用 RcloneView 將 Dropbox 遷移至 Azure Blob Storage"
authors:
  - tayson
description: "使用 RcloneView 將檔案從 Dropbox 移轉至 Azure Blob Storage。這是一份為整合至 Microsoft Azure 生態系的團隊所準備的逐步指南。"
keywords:
  - migrate dropbox to azure blob storage
  - dropbox to azure migration
  - rcloneview dropbox azure
  - move files dropbox azure
  - rclone dropbox azure blob
  - dropbox azure cloud migration
  - microsoft azure blob from dropbox
  - dropbox replacement azure
  - cloud migration azure blob
  - transfer dropbox to azure
tags:
  - dropbox
  - azure
  - cloud-migration
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Dropbox 遷移至 Azure Blob Storage

> 整合至 Microsoft Azure 的團隊,經常需要將現有的 Dropbox 資料移轉至 Azure Blob Storage。RcloneView 讓這項遷移作業變得視覺化、可續傳且可驗證——完全不需要撰寫腳本。

採用 Microsoft 雲端技術堆疊為標準的組織,往往會發現 Dropbox 落在其治理範圍之外。Azure Blob Storage 提供更緊密的 Azure AD 整合、RBAC 以及企業 IT 團隊所需的合規控管。無論您是要將團隊共用的 Dropbox 遷移至 Azure Blob 容器,還是將個人雲端硬碟整合進受管理的儲存空間,RcloneView 都能透過完整的進度追蹤與檢查碼驗證來處理這項傳輸作業。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 開始之前

在開始遷移之前,請先準備好以下項目:

| 項目 | 取得位置 |
|------|----------------|
| Dropbox 存取權 | 透過 RcloneView 的 OAuth(瀏覽器流程) |
| Azure 儲存體帳戶名稱 | Azure Portal → Storage accounts |
| Azure 儲存體帳戶金鑰 | Storage account → Access keys |
| 目標容器名稱 | 事先在 Azure Portal 中建立 |

## 步驟 1 — 在 RcloneView 中連接 Dropbox

開啟 RcloneView 並新增一個遠端:

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox remote in RcloneView" class="img-large img-center" />

1. 選擇 **Dropbox** 作為遠端類型。
2. 點擊 **Authorize**——系統會開啟瀏覽器視窗進行 OAuth 驗證。
3. 登入 Dropbox 並授予存取權限。
4. 將此遠端命名為 `dropbox-old` 並儲存。

## 步驟 2 — 在 RcloneView 中連接 Azure Blob Storage

新增第二個遠端:

1. 選擇 **Microsoft Azure Blob Storage** 作為遠端類型。
2. 輸入您的 **Storage Account Name** 與 **Storage Account Key**。
3. 將此遠端命名為 `azure-blob` 並儲存。

連接完成兩個遠端後,您會在 RcloneView 的雙欄介面中看到它們並列顯示——左側為 Dropbox,右側為 Azure Blob。

## 步驟 3 — 瀏覽並規劃遷移

在複製檔案之前,使用 RcloneView 的**資料夾比對**功能查看 Dropbox 中的內容與您 Azure 容器中既有內容的差異:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Dropbox and Azure before migration" class="img-large img-center" />

這個功能對於部分遷移,或是您已手動搬移部分檔案的情況特別有用。

## 步驟 4 — 執行遷移作業

1. 開啟 RcloneView 中的 **Jobs**。
2. 將**來源**設定為您的 Dropbox 路徑(例如 `dropbox-old:/Team Files/`)。
3. 將**目的地**設定為您的 Azure 容器路徑(例如 `azure-blob:migration-container/team-files/`)。
4. 選擇 **Copy** 模式以傳輸所有檔案,同時不刪除來源檔案。
5. 啟用**檢查碼驗證**以確保資料完整性。
6. 點擊 **Run** 並觀察即時進度面板。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live migration progress from Dropbox to Azure" class="img-large img-center" />

## 步驟 5 — 處理大型 Dropbox 帳戶

若您的 Dropbox 帳戶內含數萬個檔案:

- **拆分成多個資料夾**——針對每個 Dropbox 子資料夾分別執行作業,讓傳輸更容易管理與重新啟動。
- **使用並行傳輸**——在 RcloneView 的設定中提高傳輸數量,以充分利用頻寬。
- **排程於離峰時段**——大型遷移作業適合在離峰時段執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule large Dropbox to Azure migration" class="img-large img-center" />

## 步驟 6 — 驗證遷移結果

傳輸完成後,在 Dropbox 來源與 Azure 目的地之間執行一次**資料夾比對**。RcloneView 會標示出任何缺漏或不相符的檔案:

- **綠色**——檔案在兩處皆存在 ✓
- **紅色/缺漏**——檔案需要重新傳輸

針對任何失敗的檔案重新執行 Copy 作業。Rclone 的智慧重試機制會自動處理暫時性錯誤。

## 步驟 7 — 淘汰 Dropbox

確認所有檔案都已遷移至 Azure 後:

1. 通知團隊成員新的 Azure 儲存位置。
2. 更新任何指向 Dropbox 的應用程式整合設定。
3. 匯出 Dropbox 的活動紀錄以供合規存檔。
4. 取消或降級 Dropbox 訂閱方案。

## Dropbox 遷移至 Azure:有哪些變化

| 功能 | Dropbox | Azure Blob Storage |
|---------|---------|-------------------|
| 存取控制 | Dropbox 共用功能 | Azure RBAC + SAS 權杖 |
| 驗證方式 | Dropbox OAuth | Azure AD / 服務主體 |
| 版本控制 | Dropbox 版本歷史 | Azure Blob 版本控制(可選) |
| 合規性 | Dropbox Business 合規性 | Azure 合規認證 |
| 定價 | 依每使用者/月計費 | 依儲存 GB 數 + 出口流量計費 |

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增兩個遠端**——Dropbox(OAuth)與 Azure Blob(儲存體金鑰)。
3. 使用 RcloneView 的雙欄介面與資料夾比對工具**進行比對、複製與驗證**。
4. 確認所有資料都已遷移至 Azure 後,**淘汰 Dropbox**。

從 Dropbox 遷移至 Azure Blob Storage 不需要專門的遷移專案——只需要 RcloneView 與一個下午的時間。

---

**相關指南:**

- [將 Dropbox 遷移至 OneDrive](https://rcloneview.com/support/blog/seamless-dropbox-to-onedrive-rcloneview)
- [將 Dropbox 備份至 Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [將 Azure Blob Storage 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)

<CloudSupportGrid />
