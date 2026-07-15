---
sidebar_position: 7
description: "了解如何使用 RcloneView 工作管理員執行、監控及管理同步工作，包括試跑、工作歷史記錄與通知。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - 工作管理員
  - 執行同步工作
  - 試跑
  - 工作執行
  - Job Monitor
  - 工作歷史記錄
  - 已排程的工作
  - rclone automation
tags:
  - RcloneView
  - Cloud
  - Sync
  - Job-Management
  - cloud-storage
  - job-history
  - job-monitoring
  - Remote-storage-managent
date: 2025-06-16
author: Jay
---
# 執行與管理工作

在主選單中點選 `Job Manager` 工具列以開啟工作管理員。

選取要執行的工作，然後點選 **`Run`** 按鈕以執行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />


<details>
<summary>欄位說明 </summary>

- `Job Name`：工作的名稱。- > 該圖示以視覺方式表示從來源到目的地的同步方向。當工作涉及多個目的地時，會為每個目標遠端顯示個別的圖示。
- `Source`：作為來源的遠端儲存空間中的資料夾。
- `Destination`：作為目的地的遠端儲存空間中的資料夾。
- `Upcoming Schedule`：顯示此工作下一次排程執行的時間。若未設定排程，則顯示為 **Unscheduled**。
  ⚠️ _此功能僅限 PLUS 授權使用。_ 詳見：[如何設定工作排程](/howto/rcloneview-advanced/job-scheduling-and-execution)。
- `Last execution`：此工作最近一次透過排程自動執行的時間。
- `Created At`：工作建立的日期與時間。
- `History`：開啟此工作的執行歷史記錄。點選後會開啟完整的歷史記錄視窗。

</details>

<details>
<summary>管理工作的工具列</summary>

管理工作的工具列

選取工作後，您可以使用下方的工具列選項進行管理：

- **`Add Job`**：建立並新增一個新工作。[詳見：如何建立工作](/howto/rcloneview-basic/create-sync-jobs)
- **`Edit Job`**：編輯所選的工作。
- **`Duplicate`**：建立所選工作的副本。
  複製的工作會自動以 (1)、(2)、…、(n) 等後綴命名。
  接著您可以使用 Edit Job，以原始工作為基礎快速自訂為新工作。
- **`Delete`**：刪除所選的工作。

</details>


:::tip 💡 匯出與匯入工作
點選 **Job Manager** 右上角的**設定圖示** <img src="/support/icons/setting-icon.png" alt="setting icon" class="inline-icon" />，即可匯出目前的工作，或匯入先前儲存的工作。工作會匯出並儲存為名為 `rclone_jobs_~.json` 的檔案。

:::
### 模擬：執行試跑（選用）

您可以執行**試跑（Dry run）**，在不進行任何實際變更的情況下模擬同步操作。

點選 **`Dry run`** 按鈕，即可在不做任何變更的情況下模擬同步。

- 此預覽會顯示哪些檔案將會複製到**目的地**，以及哪些檔案將會被刪除。
- 點選 **`See details`** 可檢視在目的地中將發生的完整操作清單（例如複製、建立、刪除）。
- 對於具有多個目的地的工作，結果會依各目的地分組，並各自提供獨立的 **`See details`**。

<img src="/support/images/en/howto/rcloneview-basic/job-dry-run-result.png" alt="job dry run result" class="img-medium img-center" />

## 監控工作執行結果

您可以即時查看同步操作的進度與結果。

### 傳輸狀態（進行中）

- 同步期間，開啟 **`Transfer`** 分頁即可即時查看每個檔案的進度。
- 點選 **+** 圖示可展開並監控個別檔案的傳輸情況。
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### 已完成的工作（執行後）

- 同步完成後，前往 **`Completed`** 分頁即可檢視結果。
- 點選 **+** 圖示可查看每個已完成工作的檔案層級詳情。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip 快速開啟已同步的遠端
在 **`Completed`** 分頁中，您可以雙擊任一已完成的工作，以在檔案總管窗格中同時開啟來源與目的地資料夾。
這樣可以方便您立即檢視已同步的資料夾。
:::

### 完成通知提示（Windows）

同步完成後，Windows 系統匣中會顯示通知彈出視窗，摘要說明本次同步操作。

  - 您可以點選 **`See details`** 以檢視完整的結果明細。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip 在 Windows 通知中查看提示訊息
如果您錯過了彈出視窗，仍可以點選 **Windows 系統匣**中的**通知圖示**來查看同步提示。
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::


## 檢視工作歷史記錄


在 **`Job Manager`** 中，點選工作旁的 **`History`** 圖示 <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" />，即可檢視其執行記錄。

若某項工作曾以多個目的地執行，各目的地會在歷史記錄中以個別分頁顯示。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-medium img-center" />

<details>
<summary>欄位說明</summary>

欄位說明


- `Execution Type`：
	- Manual：由使用者手動執行
	- Scheduled：由 RcloneView 自動執行
- `Start Time`：工作開始的時間
- `Time Spent`：同步所花費的總時長
- `Status`：工作的執行結果
	- Completed：成功
	- Errored：失敗，並提供錯誤訊息。
- `Total Size`：傳輸的資料總大小
- `Speed`：平均傳輸速度。
- `Files`：已傳輸的檔案數量。
- `Job Type`：目前為 Sync，未來更新可能會納入 Copy、Purge 或 Batch 工作
- `Delete`：移除所選的歷史記錄項目。

</details>


<details>
<summary>用於篩選與刪除歷史記錄的工具列</summary>

用於篩選與刪除歷史記錄的工具列

當歷史記錄累積數量龐大時，您可以使用工具列選項來篩選或刪除。

- `From ~ To`：使用行事曆選取自訂日期範圍，以顯示該期間內的歷史記錄。
- `Today`：僅顯示今日的歷史記錄項目。
- `Yesterday`：顯示恰好一天前的歷史記錄項目。
- `Last week`：顯示過去 7 天的歷史記錄。
- `Last month`：顯示過去 30 天的歷史記錄。
- `Delete all`：- 永久刪除所有歷史記錄。⚠️ _此操作無法復原，請謹慎執行。_

</details>




