---
slug: warm-standby-disaster-recovery-rcloneview
title: "透過 RcloneView 在多雲端間建立暖待命災難復原（S3、Wasabi、R2、OneDrive）"
authors:
  - tayson
description: 使用 RcloneView 與 rclone，在 AWS S3、Wasabi、Cloudflare R2、OneDrive 或 Google Drive 之間，透過排程同步、比對與掛載式容錯移轉，建立多區域暖待命災難復原架構。
keywords:
  - warm standby
  - disaster recovery
  - multi-region backup
  - rclone s3
  - rcloneview
  - cloud failover
  - compare sync
  - cloudflare r2
  - wasabi s3
tags:
  - disaster-recovery
  - multi-cloud
  - sync
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 透過 RcloneView 在多雲端間建立暖待命災難復原（S3、Wasabi、R2、OneDrive）

> 在另一個區域或雲端保留一份正式環境資料的即時副本，事故發生時可在幾分鐘內切換。

暖待命災難復原（Warm-standby DR）將主要位置（例如 AWS S3 或 OneDrive）與持續更新的待命端（例如 Cloudflare R2 或 Wasabi）配對。RcloneView 在 rclone 之上提供圖形化介面，讓你可以排程穩定的同步、用 Compare 驗證資料差異，並掛載待命端以快速容錯移轉——完全不需要 shell 指令碼。

<!-- truncate -->

**相關文件**

- 建立同步任務：https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- 任務排程與執行（Plus）：https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- 掛載為本機磁碟：https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive
- 比對資料夾內容：https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 為什麼要用 RcloneView 建立暖待命

- 更快的復原速度：待命端副本與主要端的差距僅有數分鐘至數小時，而非數天。
- 雲端自由選擇：可混用 S3、Wasabi、R2、B2、Google Drive、Dropbox 或 OneDrive。
- 免寫指令碼：透過精靈建立任務，不需要 YAML 或 cron。
- 差異可視化：Compare 能在需要容錯移轉前，先標出資料不一致之處。
- 更安全的還原：掛載待命端並複製回去，不需碰觸正式環境。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## 策略與架構

```
[Primary cloud/local/NAS] --(RcloneView scheduled Sync)--> [Standby cloud/region]
                                                \
                                                 --(Weekly Compare)--> [Drift report]
```

- 主要端（Primary）：應用程式寫入的位置（S3 儲存桶、OneDrive 網站、GDrive 工作區、NAS）。
- 待命端（Standby）：具備版本控制的另一個區域／服務供應商（R2/Wasabi/S3/B2）。
- 控制層：RcloneView 依排程執行同步；Compare 檢查資料完整性；Mount 則在容錯移轉期間提供快速存取。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 事前準備

- 在 RcloneView 中設定好兩個遠端（例如 `s3:prod-bucket` 與 `r2:standby-bucket`）。
- 在待命端啟用版本控制，以確保回復時的安全性。
- 兩端都要有可供列出／讀取／寫入的 IAM/API 權限。
- 為排程複寫預留頻寬時段（每夜或每小時）。

## 步驟一：建立基準同步任務

1. 建立一個 Sync 任務：來源＝主要端，目的地＝待命端。
2. 使用單向 Sync 來鏡射新增／更新的檔案；若想維持嚴格一致，也可保留刪除動作。
3. 在 Filtering 步驟中為雜訊路徑（例如 cache/temp）新增篩選規則。
4. 在**進階設定（Advanced Settings）**中調整傳輸數量，若雙方都支援雜湊值，可啟用檢查碼比對。
5. 儲存該任務，讓每次執行都套用相同設定（Job Manager）。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## 步驟二：排程持續更新

1. 在任務精靈中（第 4 步：排程，Plus 授權），為此 DR 任務啟用排程功能。
2. 選擇執行頻率：應用程式資料建議每小時，封存資料可用每夜，並可用**模擬（Simulate）**預覽即將執行的排程。
3. 在進階設定中設定重試次數，以應付不穩定的連線。
4. 保留每週手動 Compare，以便及早發現資料差異。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## 步驟三：驗證與監控

- 使用 Compare 確認物件數量一致後，再宣告待命端已就緒。
- 檢視 Job History 是否有失敗或重試紀錄，若錯過排程窗口則重新執行任務。
- 在待命端保留版本控制，以便誤刪檔案時可以復原。

## 步驟四：容錯移轉手冊

1. 掛載待命端：使用 Mount Manager 將目的地遠端掛載到固定的路徑／磁碟代號。
2. 將工作負載指向掛載路徑或待命端儲存桶端點。
3. 在事故排查完成之前，將主要端維持在唯讀或離線狀態。


## 調校建議

- 對延遲敏感的應用程式：在進階設定中降低傳輸數量，並排程在低流量時段執行。
- 合規需求：在待命端保留版本控制，並匯出 Job History 供稽核使用。
- 成本控管：透過 Filters 排除暫存／測試資料夾，並在待命端雲端套用生命週期政策。
- 多雲端：若需要兩個待命端（例如 R2 + Wasabi），可從同一個主要端分別執行不同的任務。

## 疑難排解檢查清單

- 數量不一致：重新執行 Compare 並檢視 Job History 中被略過的項目；確認版本控制已啟用。
- 權限錯誤：確認雙方雲端的 API 金鑰皆具備列出／讀取／寫入權限。
- 還原時資料被覆蓋：將資料還原至正式環境時，請使用 Copy（而非 Sync）。


讓你的待命端保持暖機、經過測試、隨時就緒，容錯移轉才會是一次切換——而不是一場慌亂。

<CloudSupportGrid />
