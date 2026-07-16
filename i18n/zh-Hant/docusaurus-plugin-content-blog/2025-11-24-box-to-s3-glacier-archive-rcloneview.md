---
slug: box-to-s3-glacier-archive-rcloneview
title: "Box 到 S3 + Glacier:使用 RcloneView 建立分層封存"
authors:
  - tayson
description: "使用 RcloneView 將 Box 資料庫遷移至 Amazon S3 熱儲存與 Glacier Deep Archive 以進行長期保存，並支援比對、校驗碼驗證與排程同步。"
keywords:
  - rcloneview
  - box migration
  - s3
  - glacier
  - cloud archive
  - checksum verification
  - scheduler
  - multi cloud
  - rclone
  - tiered storage
  - cloud backup
  - compare sync
  - mount
  - job history
  - visual dashboard
  - gui
  - aws
  - vault
  - compliance
  - long term retention
tags:
  - cloud-migration
  - s3
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box 到 S3 + Glacier:使用 RcloneView 建立分層封存

> 將 Box 資料庫移轉至 Amazon S3 以便日常存取，並轉入 Glacier 進行長期保存，透過視覺化比對、校驗碼驗證的同步作業與排程工作，完全不需要 CLI 指令。

Box 很適合協作，但長期保存與大型媒體庫可能會非常昂貴。RcloneView 可讓您將 Box 資料夾鏡像到 S3 儲存桶以進行熱存取，接著依排程將老舊資料推送到 Glacier 儲存類別。您將獲得並排比對、工作紀錄與自動重試，不必再手動盯著腳本執行。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 我們要解決的問題

- 透過將冷資料分層轉入 Glacier,降低 Box 儲存費用。
- 為活躍團隊保留隨時可用的 S3 副本,同時讓 Glacier 保存歷史資料。
- 透過校驗碼驗證的工作與稽核軌跡,維持資料完整性。

## 快速連接 Box 與 S3 遠端

- 透過 `+ New Remote` 新增 Box 與 S3 遠端。OAuth 與金鑰設定請參考:[add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login)、[s3](/howto/remote-storage-connection-settings/s3)。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />。

- 使用 **Remote Explorer** 在第一次同步之前,檢查資料夾深度與命名是否正確。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />。

- 選用:將任一遠端掛載至本機以便快速抽查:[mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />。

## 移動前先比對

- 在 Box 與目標 S3 前綴之間執行 **Compare**,在正式執行前先確認缺漏或較新的檔案:[compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)。
- 依副檔名(例如 PDF、CAD、媒體檔案)篩選,以縮小檢視範圍。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />。


## 建立雙層管線(S3 熱層、Glacier 冷層)

- 步驟 1:建立從 Box 到 S3 的 **copy** 工作以支援活躍層:[create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)。為求安全,先從 copy 開始,驗證結果後再切換為 sync。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />。

- 步驟 2:在儲存桶上套用 S3 生命週期政策,讓物件在 N 天後轉入 Glacier 儲存類別。讓 RcloneView 工作持續指向熱層前綴(例如 `s3:box-archive/hot/`)。
- 步驟 3:針對深度封存,排程一個次要工作,將較少使用的資料夾直接推送到專屬 Glacier 前綴(例如 `s3:box-archive/cold/`)。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />。


RcloneView 提供一種視覺化且可重複執行的方式,讓您脫離 Box、降低儲存成本,並在 AWS 中維持合規的封存資料。先比對、安全地複製、排程其餘工作——輕鬆高枕無憂。


<CloudSupportGrid />
