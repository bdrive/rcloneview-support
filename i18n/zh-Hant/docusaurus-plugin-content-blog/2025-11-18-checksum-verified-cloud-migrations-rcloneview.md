---
slug: checksum-verified-cloud-migrations-rcloneview
title: "使用 RcloneView 進行校驗和驗證的雲端遷移(Drive、Dropbox、S3、R2)"
authors:
  - tayson
description: 使用 RcloneView 的同步加比對工作,透過校驗和驗證與差異偵測,在 Google Drive、Dropbox、OneDrive、S3 或 Cloudflare R2 之間搬移資料——完全不需要命令列。
keywords:
  - checksum migration
  - rclone checksum
  - data integrity
  - rcloneview
  - cloud migration
  - google drive to dropbox
  - s3 to r2
  - compare sync
tags:
  - migration
  - compare
  - sync
  - safety
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 進行校驗和驗證的雲端遷移(Drive、Dropbox、S3、R2)

> 龐大的資料只搬一次就好。使用 RcloneView 進行同步、以校驗和驗證資料,並在切換應用程式之前找出差異。

從 Google Drive 複製到 Dropbox,或從 S3 複製到 R2 並不難——難的是證明每個物件都完整無誤地送達。Rclone 擁有久經考驗的校驗和與比對模式;RcloneView 將這些功能包裝成圖形化介面,讓你能透過排程、日誌記錄,在不寫任何 shell 腳本的情況下執行完整性驗證的遷移。

<!-- truncate -->

**相關文件**

- 建立同步工作:https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- 工作排程與執行(Plus):https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- 比對資料夾:https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- 掛載為本機磁碟:https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 為什麼需要校驗和驗證的遷移

- 避免無聲的資料損毀:校驗和可偵測位元衰減與部分上傳的問題。
- 更快完成切換:比對功能能在你切換端點之前就標示出不一致的地方。
- 支援多種雲端:可跨 Drive、Dropbox、OneDrive、S3、Wasabi、R2、B2 與 NAS 運作。
- 零腳本操作:以視覺化方式建立、排程並重新執行工作。  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 遷移藍圖

```
[Source cloud/NAS] --(RcloneView Sync with checksum enabled)--> [Target cloud]
                                           \
                                            --(RcloneView Compare)--> [Drift report]
```

- 第一階段:以啟用校驗和的基準同步,一次性上傳所有資料。
- 第二階段:依排程執行增量同步,縮小切換時的資料落差。
- 第三階段:以比對功能確認物件數量與雜湊值一致。
- 第四階段:切換/掛載目標端以供正式環境使用。

## 事前準備

- 已在 RcloneView 中新增來源與目標的遠端(例如 `drive:team`、`dropbox:prod`、`s3:archive`、`r2:mirror`)。
- 目標端擁有足夠的配額,若為 S3 相容儲存,建議啟用版本控制以確保安全。
- API/IAM 金鑰具備列出/讀取/寫入權限,若使用 S3,則需支援分段上傳(multipart uploads)。  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
  

## 步驟 1:建立校驗和同步工作

1. 新增同步工作:來源 = 目前系統,目的地 = 目標雲端。
2. 在**進階設定**中,若兩端遠端都支援雜湊值,請啟用校驗和比對,並依你的頻寬設定傳輸/檢查數量。
3. 在**篩選設定**中,新增快取/暫存資料夾的包含/排除篩選規則。
4. 儲存工作,讓重新執行時仍保留相同的完整性驗證設定(工作管理員)。  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## 步驟 2:排程增量執行

1. 在工作精靈中(第 4 步:排程,Plus),為遷移工作啟用排程。
2. 以每晚或每小時執行,縮小最終切換時的差異量;可使用**模擬**功能預覽執行結果。
3. 在進階設定中設定重試次數,以應對節流限制。
4. 日誌與歷史紀錄會自動儲存;可於工作歷史中檢視稽核備註。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## 步驟 3:以比對功能驗證

- 完成基準同步後,執行來源與目標之間的比對,不僅驗證檔案大小,也驗證內容。
- 新增每週的比對例行工作,以偵測較晚出現的差異(需從比對頁面手動執行;排程器僅適用於一般工作)。
- 檢查報告/日誌中的不一致項目;僅重新執行同步以修正差異部分。  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

## 步驟 4:安全地完成切換

1. 在維護時段內凍結來源端的寫入操作。
2. 執行最後一次啟用校驗和的同步,以補齊剩餘差異。
3. 再執行一次比對;應該不會出現任何不一致項目。

## 調校技巧

- 高延遲連線:降低傳輸數量;若為大型媒體檔案,只要後端支援,建議保持啟用多執行緒傳輸。
- 混合雲環境:若某個服務商不支援校驗和,可改依檔案大小/時間比對,並手動確認關鍵資料。
- 頻寬限制:在營業時間內於設定中限制頻寬,較大量的工作則排程於夜間執行。
- 安全防護:在目標端保持版本控制啟用;若服務商支援,可使用物件鎖定(Object Lock)。

## 疑難排解檢查清單

- 出現不一致數量:重新執行比對;確認兩端都提供雜湊值(部分服務商不支援校驗和)。
- 驗證速度過慢:若連線已飽和,請降低檢查/傳輸數量。
- S3 上傳出現 AccessDenied:確認已授予分段上傳與列出權限。
- 已刪除的檔案重新出現:僅在最終切換完成後才移除刪除旗標,以確保嚴格鏡像同步。


每次遷移都經過校驗和驗證,資料就只需要搬一次。

<CloudSupportGrid />
