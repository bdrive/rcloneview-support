---
slug: multi-cloud-cost-optimization-storage-tiers-rcloneview
title: "多雲成本優化 — 使用 RcloneView 進行儲存分層與封存"
authors:
  - jay
description: "透過 RcloneView 將資料分層儲存於熱、溫、冷儲存層，降低雲端儲存成本。將過期檔案自動從高階雲端移動至 S3、B2 或 Glacier。"
keywords:
  - RcloneView 多雲成本優化
  - 雲端儲存分層指南
  - 降低雲端儲存成本
  - 熱溫冷雲端儲存
  - 封存雲端儲存中的舊檔案
  - 雲端儲存成本管理
  - RcloneView 分層雲端備份
  - 自動將檔案移至雲端封存
tags:
  - multi-cloud
  - cost-optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 多雲成本優化 — 使用 RcloneView 進行儲存分層與封存

> 大多數組織因為將所有資料都放在熱層供應商中而在雲端儲存上多付了不少費用。RcloneView 讓跨供應商自動分層資料變得實際可行，在不損失存取能力的情況下降低成本。

當快速存取的「熱」儲存——Google Drive、Dropbox、OneDrive——存放了多年很少被存取的檔案時，雲端儲存成本會迅速累積。務實的分層策略是將近期、活躍的檔案保留在高階儲存中，並將老舊資料移至如 Backblaze B2、Wasabi 或 Amazon S3 Glacier 等具成本效益的封存供應商。RcloneView 以篩選條件為基礎的工作與排程功能，讓這種分層作業能自動完成。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解三種儲存層級

**熱層**（Google Drive、Dropbox、OneDrive）：針對即時存取、即時協作與行動裝置同步進行優化，最適合每天或每週存取的檔案。每 GB 成本最高。

**溫層**（Wasabi、Backblaze B2、Amazon S3 Standard）：與 S3 相容的物件儲存，檢索速度快，但成本低於熱層供應商。Wasabi 與 B2（搭配 Cloudflare）沒有出站流量費用。非常適合每月存取一次的檔案——專案封存、過去一年的客戶交付成果，以及參考資料庫。

**冷層**（Amazon S3 Glacier、Cloudflare R2 + 生命週期規則）：針對長期保存與低頻率存取進行優化，每 GB 成本最低。適合合規性封存、不再用於製作的原始素材，以及多年期備份保留。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing files across storage tiers in RcloneView" class="img-large img-center" />

## 使用 RcloneView 自動化分層轉移

RcloneView 工作精靈中的**最大檔案存留時間**（Max file age）篩選器是自動化分層的核心工具。在同步工作精靈的第 3 步中，將**最大檔案存留時間**設定為 `90d`，以僅鎖定過去 90 天內未修改過的檔案。將來源設定為您的 Dropbox 或 Google Drive 工作資料夾，並將目的地設定為 Wasabi 或 Backblaze B2。

若持有 PLUS 授權，可將此工作排程為每月執行一次。每次執行都會識別並複製超過門檻天數的檔案至溫層封存。若要進行冷層轉移（將溫層資料移至 Glacier 級儲存），可建立第二個工作，套用相同的篩選邏輯，將來源指向 B2、目的地指向 S3，並在全域 Rclone 旗標（Global Rclone Flags）中設定適當的儲存類別。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated cloud storage tier transitions in RcloneView" class="img-large img-center" />

## 驗證分層轉移並安全刪除

在確認檔案已存在於溫層或冷層之前，切勿從熱層刪除檔案。RcloneView 的**資料夾比對**（Folder Compare）正是此時最合適的工具：將您即將清空的 Dropbox 資料夾與 Backblaze B2 目的地進行比對，篩選出僅顯示與目的地不同或缺少的檔案。若比對結果顯示零差異，代表封存已完成，即可安全刪除原始檔案。

對於合規性要求較高的產業，可保留工作歷程記錄（Job History log）作為每批資料封存時間的稽核紀錄。此記錄會保存每次執行所傳輸的檔案數量、總大小與時間戳記。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a tier transition job from Dropbox to Backblaze B2" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 找出您的熱層供應商（Google Drive、Dropbox）以及目標溫層供應商（B2、Wasabi）。
3. 建立一個複製工作，套用 90 天的**最大檔案存留時間**篩選器，並設定為每月排程執行。
4. 使用資料夾比對來驗證已封存的檔案，再從熱層中刪除。

一個實作良好的分層策略，搭配 RcloneView，能在不犧牲資料可用性的前提下，顯著降低雲端儲存支出。

---

**相關指南：**

- [使用 RcloneView 降低多雲成本並清除幽靈檔案](https://rcloneview.com/support/blog/reduce-multi-cloud-costs-ghost-files-rcloneview)
- [使用 RcloneView 將冷資料封存至 Glacier](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [使用 RcloneView 制定多雲備份策略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
