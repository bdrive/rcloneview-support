---
sidebar_position: 10
description: "了解如何使用 RcloneView 將您的資料從 Amazon S3 遷移到 Cloudflare R2。"
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - aws s3
  - cloudflare r2
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';


# 使用 RcloneView 從 AWS S3 遷移到 Cloudflare R2

在當今雲端驅動的環境中，組織與開發者常常尋求優化儲存成本、避免供應商鎖定，並提升資料存取性。**Amazon S3** 長久以來一直是物件儲存業界的標準，提供高耐用性並與 AWS 服務無縫整合。然而，隨著資料傳輸量增加，S3 的出口流量費用與複雜的計費方式可能成為沉重的負擔。

**Cloudflare R2** 成為一個極具吸引力的替代方案——提供與 S3 相容的儲存，沒有出口流量費用、計費模式透明，並透過 Cloudflare 龐大的邊緣網路提供全球效能。從 S3 遷移到 R2 可以讓您：

- **消除出口流量費用**並降低整體雲端儲存成本
- 透過 S3 API 相容性與靈活的多雲架構**避免供應商鎖定**
- 利用 **Cloudflare 的全球邊緣網路**，實現更快速、更可靠的資料存取
- 透過友善的儀表板**簡化計費**與管理

在雲端平台之間手動遷移既繁瑣又容易出錯。這正是 **RcloneView** 能發揮價值的地方。

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2.png" alt="transfer files between aws s3 and cloudflare r2" class="img-medium img-center" />

## 為什麼使用 RcloneView 進行 S3 到 R2 的遷移？

RcloneView 是一款以 Rclone 為基礎的 GUI 雲端儲存管理工具。它開箱即支援 **S3 相容端點**，例如 AWS S3 與 Cloudflare R2，並提供：

- 完整支援**存取金鑰／密鑰驗證**
- 可設定自訂端點（適用於 R2）
- 雙窗格檔案總管，支援拖放遷移檔案
- 資料夾比對與同步工具
- 適用於大量或增量遷移的排程任務
- 詳細的進度日誌與錯誤處理

無論您要搬移的是數 TB 的資料，還是僅僅幾個資料夾，RcloneView 都能讓您安心遷移——完全不需要命令列技能。

## 🔄 從 AWS S3 傳輸檔案到 Cloudflare R2

### 步驟 1：新增 AWS S3 遠端

1. 啟動 **RcloneView**，前往 **`Remote`** 分頁，點選 **`+ New Remote`**。
2. 在 **`Provider`** 分頁中，選擇 **Amazon S3**。
3. 在 **`Options`** 分頁中：
   - 將 `provider` 設定為 `AWS`
   - 輸入您的 **Access Key ID** 與 **Secret Access Key**
   - Region 與 endpoint 除非有自訂需求，否則可保留預設值
4. 點選 **Save** 完成設定。

👉 進一步了解：  
- [如何新增 S3 遠端](/howto/remote-storage-connection-settings/s3)
- [如何取得 AWS S3 存取憑證](/howto/cloud-storage-setting/aws-account-info)
### 步驟 2：新增 Cloudflare R2 遠端

1. 同樣地，在 `Remote` 分頁中點選 **`+ New Remote`**。
2. 在 **`Provider`** 分頁中，選擇 **S3**（沒錯，再次選擇——因為 R2 使用 S3 協定）。
3. 在 **`Options`** 分頁中：
   - 將 `provider` 設定為 `Cloudflare`
   - 輸入您的 **Cloudflare R2 Access Key** 與 **Secret Key**
   - 將 `endpoint` 設定為 `https://<accountid>.r2.cloudflarestorage.com`
1. 點選 **Save** 完成 R2 遠端設定。

👉 進一步了解：  
- [如何新增 S3 遠端](/howto/remote-storage-connection-settings/s3)
- [如何取得 Cloudflare R2 存取憑證](/howto/cloud-storage-setting/cloudflare-r2-credential)

### 步驟 3：在雙窗格檔案總管中開啟遠端

1. 前往 RcloneView 中的 **Browse** 分頁。
2. 在左側窗格中，點選 `+` 並選擇您的 **AWS S3** 遠端。
3. 在右側窗格中，點選 `+` 並選擇您的 **Cloudflare R2** 遠端。
4. 您現在即可並排檢視與管理這兩項服務。

<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

---
## 📌 檔案遷移方法

### 🖱️ 方法 1：拖放檔案

- 在左側選取來自 AWS S3 的檔案或資料夾。
- 將它們拖放到右側的 Cloudflare R2 窗格中。
- 傳輸會自動開始，進度會顯示在 **`Transfer`** 分頁中。

👉 進一步了解：[瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 🔍 方法 2：比對資料夾並傳輸

1. 在兩個窗格中，分別導覽至對應的來源（S3）與目標（R2）資料夾。
2. 在 `Home` 選單中點選 **`Compare`**。
3. RcloneView 會標示出：
   - 僅存在於 S3 的檔案
   - 已存在於 R2 的檔案
   - 大小或時間戳記不同的相同檔案
4. 點選 **Copy →** 將選取的檔案從 S3 遷移到 R2。
5. 如有需要，可使用 **Delete** 進行清理。

👉 進一步了解：[比對資料夾內容](/howto/rcloneview-basic/compare-folder-contents)

---

### 🔁 方法 3：使用同步或任務

1. 在檔案總管窗格中，選取您想要同步的 **Cloudflare R2** 資料夾與 **AWS S3** 資料夾。
2. 在 `home` 選單中點選 **`Sync`** 按鈕。
3. 選擇同步選項（單向或雙向），預覽操作內容並確認。
4. RcloneView 會執行同步，並在 **`transfer`** 日誌分頁中顯示進度。

- 若要進行重複或排程傳輸：
  1. 在同步對話框中點選 **`Save to Jobs`**，或開啟 **`Job Manager`** → **`Add Job`**。
  2. 設定來源、目標與選項。
  3. 儲存後手動執行，或設定排程。

👉 進一步了解：
- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步任務](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理任務](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ 方法 4：排程週期性同步任務

1. 在檔案總管窗格中，選取您想要保持同步的 **Cloudflare R2** 與 **AWS S3** 資料夾。
2. 從 **`Home`** 或 **`Remote`** 選單開啟 **`Job Manager`**，然後點選 **`Add Job`**。
3. 確認您的來源與目標。
4. 使用排程編輯器設定任務執行的時間。儲存前請先預覽您的排程。
5. 儲存並啟用排程任務。

RcloneView 會依照您指定的時間執行同步。您可以在 **`Job History`** 中查看執行詳情與日誌，並在完成後收到通知。

👉 進一步了解：[任務排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)


---

## ✅ 總結

從 AWS S3 遷移到 Cloudflare R2 有助於降低出口流量成本與供應商鎖定風險——同時不犧牲效能。使用 RcloneView，整個轉移過程快速、安全，且完全視覺化。

立即試用，為您的雲端儲存架構打造面向未來的 Cloudflare R2 方案。

---

## 🔗 相關指南

- [如何新增 S3 遠端](/howto/remote-storage-connection-settings/s3)
- [如何取得 AWS S3 存取憑證](/howto/cloud-storage-setting/aws-account-info)
- [如何取得 Cloudflare R2 存取憑證](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比對資料夾內容](/howto/rcloneview-basic/compare-folder-contents)
- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步任務](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理任務](/howto/rcloneview-basic/execute-manage-job)
- [任務排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
