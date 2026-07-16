---
slug: sync-one-source-multiple-cloud-destinations-rcloneview
title: "1:N 同步 — 使用 RcloneView 將單一來源備份至多個雲端目的地"
authors:
  - kai
description: "使用 RcloneView 的 1:N 同步功能，將單一來源資料夾同時備份至多個雲端目的地。透過多重雲端備援保護您的檔案。"
keywords:
  - 1 to N sync RcloneView
  - multiple cloud backup destinations
  - sync one source multiple clouds
  - redundant cloud backup RcloneView
  - multi-cloud sync backup
  - backup multiple cloud providers
  - RcloneView multiple destinations
  - parallel cloud backup
  - one source multiple backups RcloneView
  - automated multi-destination sync
tags:
  - RcloneView
  - backup
  - cloud-sync
  - multi-cloud
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1:N 同步 — 使用 RcloneView 將單一來源備份至多個雲端目的地

> 一個同步工作，多個目的地 — RcloneView 可在單次執行中，將單一來源鏡像到您所需的多個雲端服務供應商。

多數備份策略在備援方面都會失敗：檔案只送往單一目的地，形成單點故障。RcloneView 的 1:N 同步功能讓您能在一個工作中，將單一來源資料夾備份至多個雲端目的地 — 讓您的資料同時傳送到 Google Drive、Backblaze B2 以及相容 S3 的供應商，而無需為每個目的地各自執行一個工作。此功能於 FREE 授權即可使用，並適用於您所設定的任何遠端組合。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView 中 1:N 同步的運作方式

當您在 RcloneView 的工作管理員中建立同步工作時，4 步驟精靈的第 1 步可讓您新增多個目的地資料夾。選擇來源與第一個目的地後，點擊**新增目的地**即可加入更多目標。每個目的地會獨立同步，但皆由同一個來源驅動 — 也就是說來源只會被讀取一次，寫入動作則同時平行進行至所有目的地。這與分別執行多個獨立工作有明顯不同：若採用分次執行，一旦來源在各次執行之間發生變動，各個目的地可能會擷取到稍有差異的快照。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring 1:N sync with multiple destinations in RcloneView" class="img-large img-center" />

以一家數位媒體公司為例，一套實務設定可能如下：來源為本地製作用 NAS 資料夾，內含母帶影片檔案；目的地 1 為 Google Drive，供團隊存取使用；目的地 2 為 Backblaze B2，用於長期封存；目的地 3 為 Wasabi，做為額外的異地備份。三個目的地皆能在單次工作執行中，與同一來源狀態保持同步。

## 設定多目的地同步工作

從首頁分頁開啟**工作管理員**，點擊**新增工作**以建立新的同步工作。在第 1 步中，選擇您的來源（任何已設定的遠端或本地資料夾）。選定第一個目的地資料夾後，點擊**新增目的地**以插入更多目標 — 每個目標可指向不同的遠端及資料夾路徑。為工作取一個能反映多目的地意圖的描述性名稱。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a 1:N sync job to multiple cloud destinations in RcloneView" class="img-large img-center" />

在第 2 步中，設定所有目的地共用的傳輸設定：同時傳輸數量、多執行緒設定，以及是否啟用校驗碼驗證。對於同步至多個具有不同速率限制之雲端供應商的 1:N 工作，請將同時傳輸數量維持在適中範圍 — 若同時對多個目的地採取過於積極的平行處理，可能會觸發較嚴格供應商的節流限制。第 3 步可讓您新增篩選規則，統一套用於所有目的地，因此您無需為每個目標重複設定排除邏輯。

## 以試執行驗證工作

在提交大型 1:N 同步之前，請使用工作管理員中的**試執行（Dry Run）**選項。試執行會顯示每一項規劃中的操作 — 即將複製到各目的地的檔案 — 但不會實際進行任何變更。對於同步至三個供應商的工作，預覽會列出各目的地的操作內容，讓您確認路徑正確且範圍符合預期。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing 1:N sync job history in RcloneView" class="img-large img-center" />

執行完成後，**工作歷程**分頁會記錄每次工作執行的開始時間、持續時間、傳輸總位元組數，以及最終狀態（已完成、發生錯誤、已取消）。對於在備份驗證方面有合規需求的團隊而言，這份紀錄即可作為現成的稽核軌跡，無需額外工具。

## 排程自動化多目的地備份

搭配 PLUS 授權，您可在第 4 步為 1:N 工作附加類似 cron 的排程，使其依您所選的間隔自動執行。**模擬排程**按鈕可在儲存前預覽即將執行的時間點。啟用後，RcloneView 的系統匣整合功能會讓工作持續在背景執行，而工作完成通知則會確認所有目的地皆已收到最新資料。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination backup in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過**遠端** > **新增遠端**新增兩個以上的雲端遠端。
3. 建立**同步**工作，並在第 1 步使用**新增目的地**加入每個目標供應商與資料夾。
4. 執行**試執行**以驗證範圍，再搭配排程儲存，實現自動化多雲端備援。

有了 1:N 同步，單一 RcloneView 工作即可成為完整的多雲端備份策略 — 無需額外腳本，無需額外步驟。

---

**相關指南：**

- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [使用 RcloneView 打造多雲端備份策略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [工作匯出與匯入 — 使用 RcloneView 打造可攜式工作流程](https://rcloneview.com/support/blog/job-export-import-portable-workflow-rcloneview)

<CloudSupportGrid />
