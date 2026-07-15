---
slug: tiered-cloud-archive-glacier-rcloneview
title: "使用 RcloneView 建立 S3 Standard、Wasabi 與 Glacier Deep Archive 的分層雲端備份"
authors:
  - tayson
description: 透過 RcloneView 在 S3/Wasabi 之間建立熱-溫-冷分層備份管線，快速還原之餘,以 Glacier Deep Archive 提供超低成本的長期保存,搭配排程 Sync/Copy 任務與生命週期政策。
keywords:
  - glacier deep archive
  - cold storage
  - tiered backup
  - rclone s3
  - rcloneview
  - wasabi archive
  - lifecycle policy
  - cloud backup
  - archive retention
tags:
  - RcloneView
  - backup
  - archive
  - s3
  - glacier
  - wasabi
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 建立 S3 Standard、Wasabi 與 Glacier Deep Archive 的分層雲端備份

> 讓近期還原保持快速,長期保存維持低成本:熱資料放在 S3 Standard、溫資料放在 Wasabi/R2、封存資料放在 Glacier Deep Archive——搭配 RcloneView 排程與儲存桶生命週期政策。

單一儲存類別很少能適用於所有檔案。設計一個分層管線:將新資料複製到 S3 Standard 以供快速存取、鏡像至低成本的溫層(Wasabi/R2)以取得地理備援,並將每月快照推送到 Glacier Deep Archive 以符合合規保存需求。RcloneView 在 rclone 之上提供 GUI 介面,讓你能排程同步、用 Compare 驗證,並在不寫任何 shell 腳本的情況下維持生命週期規則的完整。

<!-- truncate -->

**相關文件**

- 建立同步任務:https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- 任務排程與執行(Plus):https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- 比較資料夾:https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- 掛載為本機磁碟機:https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 為什麼要用 RcloneView 做分層備份

- 還原速度:近期檔案保留在 S3 Standard,存取延遲低。
- 成本控管:在 Wasabi/R2 保留溫層副本;在 Glacier 做深度封存,每 TB 每月僅需幾分錢。
- 韌性:多雲與多地區部署可降低單一供應商的風險。
- 免撰寫腳本:以視覺化任務、排程與日誌取代 cron/YAML。
- 驗證機制:比較任務能在你需要還原之前就發現資料落差。

## 架構總覽

```
[Primary (NAS/Drive/OneDrive)] --(Hourly Sync)--> [S3 Standard hot copy]
                                         \
                                          --(Daily Sync)--> [Wasabi/R2 warm copy]
                                          --(Monthly Copy)--> [Glacier Deep Archive]
```

- 熱層:S3 Standard(快速還原)。
- 溫層:Wasabi 或 R2(成本低廉,對還原時的傳出流量友善)。
- 冷層:Glacier Deep Archive,用於 90-365 天的保存(使用儲存桶生命週期規則來轉換物件)。

## 事前準備

- 已在 RcloneView 中設定三個遠端(例如 `s3:hot`、`wasabi:warm`、`s3:archive`)。
- 熱層/溫層儲存桶啟用版本控制;封存儲存桶設定生命週期規則,轉換至 Glacier Deep Archive。
- IAM/API 權限:list/read/write 加上分段上傳(multipart);冷層需具備 Glacier 還原權限。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 步驟 1:建立熱層與溫層同步任務

1. 建立一個 **Sync** 任務(Primary -> S3 hot)。
2. 在 **Advanced Settings** 中,設定傳輸數量,並在兩端都支援雜湊值時啟用校驗和比對。
3. 在 **Filtering Settings** 中,排除快取/暫存資料夾。
4. 建立第二個 **Sync** 任務(Primary -> Wasabi/R2 warm),套用相似的設定與篩選條件。
5. 將兩個任務都儲存在 Job Manager 中。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## 步驟 2:加入冷層封存複製任務

1. 建立一個 **Copy** 任務(S3 hot -> Glacier archive bucket)。使用 Copy 而非 Sync,以避免在封存端出現刪除操作。
2. 在 **Advanced Settings** 中,依需求設定傳輸數量與校驗和比對。
3. 使用儲存桶生命週期規則,將物件轉換至 Glacier Deep Archive,並在合規保存期滿後使舊版本過期。

## 步驟 3:排程所有任務

- 在任務精靈中(第 4 步:排程,Plus),設定週期:熱層每小時、溫層每晚、冷層每月。
- 使用 **Simulate** 預覽排程,並在 Advanced Settings 中設定重試次數。
- 加入每週一次的比較任務(熱層 vs 溫層),及早發現資料落差。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## 步驟 4:驗證完整性

- 在第一次完整同步後,執行熱層與溫層之間的比較。
- 針對封存層,抽樣檢查還原:執行小規模的 Glacier 取回,確認檔案能正確開啟。
- 在每一層都保留一個小型金絲雀檔案(例如 `canary.txt`),並在比較報告中檢查其是否存在。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 步驟 5:還原手冊

- 快速還原:依據傳出流量/地理位置,從溫層(Wasabi/R2)或熱層(S3 Standard)取回。
- 深度還原:針對所需的前綴發起 Glacier 還原,再複製回溫層/熱層。
- 在大量複製前,使用 RcloneView 的掛載功能瀏覽內容,避免還原錯誤的資料夾。

## 調校建議

- 延遲/傳出流量敏感:在上班時段降低傳輸數量,離峰時段調高。
- Glacier 成本:每月集中封存;避免頻繁的小量上傳,以減少 PUT 與取回請求數。
- 安全性:搭配 Object Lock 使用熱層/溫層(參見不可變性指南),以阻擋勒索軟體刪除資料。
- 命名規則:以日期資料夾作為快照前綴(例如 `archive/2025-11/`),簡化生命週期管理與還原作業。

## 疑難排解檢查清單

- 還原延遲:Glacier 取回可能需要數小時——請據此規劃 RPO/RTO。
- 封存端出現 AccessDenied:確認 IAM 角色已授予該儲存桶的 `glacier:InitiateJob`/還原權限。
- 發現資料落差:重新執行熱層/溫層同步;若封存端缺少物件,則從熱層重新複製差異部分。
- 成本飆升:在保存期滿後啟用生命週期過期;在傳出流量高峰時段限制並行數。



一次分層,持續排程,讓 RcloneView 幫你同時掌控成本與 RPO。

<CloudSupportGrid />
