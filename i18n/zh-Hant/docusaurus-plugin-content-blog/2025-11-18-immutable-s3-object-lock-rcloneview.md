---
slug: immutable-backups-s3-object-lock-rcloneview
title: "使用 RcloneView 的 S3 Object Lock 打造不可竄改、抗勒索軟體的備份"
authors:
  - tayson
description: 使用 RcloneView 搭配 S3 Object Lock 儲存桶，在 AWS S3、Wasabi、Backblaze B2 或 Cloudflare R2 上建立不可竄改、抗勒索軟體的備份，並提供排程、驗證與快速還原功能。
keywords:
  - s3 object lock
  - 不可竄改備份
  - 勒索軟體防護
  - rclone s3
  - rcloneview
  - wasabi object lock
  - 雲端備份不可變性
  - 合規備份
tags:
  - security
  - s3
  - wasabi
  - r2
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 的 S3 Object Lock 打造不可竄改、抗勒索軟體的備份

> 不用再擔心勒索軟體回滾攻擊。結合 S3 Object Lock 與 RcloneView 的排程功能，讓備份牢不可破。

不可竄改儲存能防止攻擊者（或意外操作）在你能夠復原之前刪除或覆寫備份。S3 Object Lock 適用於 AWS S3、Wasabi、Backblaze B2 與 Cloudflare R2。RcloneView 會沿用儲存桶的 Object Lock 與版本控制設定，你只需在 GUI 中建立工作即可——完全不需要使用 CLI。

<!-- truncate -->

**相關文件**

- 建立同步工作：https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- 工作排程與執行（Plus）：https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- 比對資料夾：https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- 掛載為本機磁碟：https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 為什麼要搭配 Object Lock 與 RcloneView

- 不可竄改的副本：保留期限可在指定時間窗內封鎖刪除／覆寫操作。
- 雲端自由選擇：適用於 S3、Wasabi、R2、B2 及相容 S3 的 NAS 閘道。
- 免寫程式：在 GUI 中建立同步工作、排程（Plus），並保留歷史記錄與日誌。
- 快速檢查：使用「比對」功能確認目的地一致，並顯示保留的版本。
- 輕鬆還原：可從已鎖定的儲存桶掛載或同步還原，且不影響保留設定。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


## 前置需求

- 建立時已啟用 Object Lock 的 S3 相容儲存桶。
- 該儲存桶已啟用版本控制（Object Lock 的必要條件）。
- 已安裝 RcloneView，並且已連接好 S3 遠端。
- 具備 `PutObject` 與 `PutObjectRetention` 權限的 IAM／API 使用者。
- （選用）若想自動排程工作，需要 Plus 授權。


## 步驟一：在儲存桶上啟用 Object Lock

1. 建立儲存桶時開啟 Object Lock（之後無法切換）。在 AWS S3 上勾選「Enable Object Lock」；在 Wasabi／R2／B2 上，於建立儲存桶時選擇 Object Lock 選項。
2. 為該儲存桶開啟版本控制。
3. 決定預設保留模式：Governance（較容易覆寫）或 Compliance（無法覆寫），以及保留期限（例如 30-90 天）。

## 步驟二：將同步／複製工作指向 Object Lock 儲存桶

RcloneView 並未提供逐一物件的 Object Lock 設定介面。因此請依賴儲存桶的 Object Lock 與版本控制預設值，並確保工作持續指向該目的地。

1. 建立一個新的**同步**工作（若不想要刪除操作，可選擇**複製**）：來源 = 你的資料，目的地 = Object Lock 儲存桶。
2. 在**進階設定**中，設定傳輸數量，並在兩端都支援雜湊值時啟用校驗碼比對。
3. 在**篩選設定**中，排除快取／暫存路徑，以免浪費保留額度在無用資料上。
4. 儲存工作，讓每次執行都套用相同設定（工作管理員）。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## 步驟三：排程不可竄改備份

1. 在工作精靈中（步驟四：排程，Plus），為此不可竄改備份工作啟用排程功能。
2. 設定每日或每小時的執行頻率，並使用**模擬**功能預覽即將執行的工作。
3. 在進階設定中為不穩定的連線設定重試次數。
4. 每週手動執行一次「比對」，以驗證已保留的物件。  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## 步驟四：驗證保留設定與完整性

- 使用「比對」功能，在上傳後驗證物件數量。
- 在 S3 控制台（或 RcloneView 日誌）中，確認物件顯示 `Compliance`／`Governance` 狀態以及預期的保留到期日（Retain Until）。
- 嘗試刪除目的地的一個測試檔案；在保留期限到期之前，該操作應被封鎖。  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 步驟五：從不可竄改備份還原

當你需要復原時：

1. 建立新的工作：目的地（Object Lock 儲存桶）-> 來源（復原位置），然後執行同步／複製。
2. 若要進行臨時還原，可使用「掛載」瀏覽已鎖定的儲存桶並將檔案拖出。
3. 若還原時不想刪除復原位置上較新的檔案，請使用「複製」而非「同步」。

## 最佳實務與調校建議

- 保留期限要足夠涵蓋偵測與調查所需的時間（例如 30-90 天）。
- 在實驗環境中使用 Governance 模式以保留彈性；在正式環境與受規範資料中使用 Compliance 模式。
- 針對大型媒體檔案或 VM 映像檔，在進階設定中調整傳輸數量。
- 至少保留兩個地區或供應商（例如 Wasabi + R2），並輪替排程。
- 留意成本：Object Lock 會保留所有版本，因此保留期滿後應搭配生命週期規則使用。

## 疑難排解檢查清單

- 上傳失敗並出現 AccessDenied：確認 IAM 角色允許 `PutObjectRetention`。
- 物件未被鎖定：確認儲存桶建立時已啟用 Object Lock，且版本控制為開啟狀態。
- 傳輸速度緩慢：在對等連線不佳時，降低傳輸數量或使用頻寬限制。
- 還原時刪除了現有資料：從已鎖定的儲存桶提取資料時，請使用「複製」而非「同步」。



鎖定你的備份一次，讓 RcloneView 自動為你守護它們的安全。

<CloudSupportGrid />
