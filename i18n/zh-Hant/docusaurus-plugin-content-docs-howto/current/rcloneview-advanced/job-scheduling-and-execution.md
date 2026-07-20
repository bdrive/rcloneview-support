---
sidebar_position: 2
description: 了解如何使用彈性的排程選項，在 RcloneView 中自動執行同步工作。需要 Plus 授權。
keywords:
  - rcloneview
  - 工作排程
  - 同步自動化
  - 排程同步
  - rclone
  - 工作管理員
  - 雲端同步
  - 工作排程器
  - rclone 自動化
  - crontab
  - plus 授權
  - 週期性同步
tags:
  - RcloneView
  - Job-Manager
  - Scheduling
  - Sync
  - PLUS-Feature
  - automation
date: 2025-05-23
author: Jay
---
# 工作排程與自動執行

工作排程功能可讓您在特定時間與間隔自動執行同步工作。


:::important 排程工作需要 PLUS 授權
您需要購買 [**PLUS 授權**](https://rcloneview.com/src/pricing.html) 才能啟用此功能。
:::


## 設定工作排程

您可以在以下情況下設定排程：

- 建立新工作時（[步驟 4：排程](/howto/rcloneview-basic/create-sync-jobs#step4-scheduling-available-with-plus-license)）
- 編輯現有工作以新增排程

## 新增或編輯工作以設定排程


若要開啟 **`工作管理員`**，請點選首頁選單中的工具列圖示。
接著，點選 **`新增工作`** 或 **`編輯工作`**，並前往 **步驟 4：排程**。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-medium img-center" />
### **如何排程工作**

1. 勾選標示為 **`每隔時間單位執行 ~`** 的方塊以啟用排程。
2. 使用時間與日期欄位設定所需的重複排程。
3. 點選 **`模擬`** 以預覽工作的執行時機。
4. 確認排程正確後，點選 **`儲存`**。

  儲存後，點選日曆圖示 <img src="/support/icons/calendar-icon.png" alt="calendar icon" class="inline-icon" /> 或 **`即將到來的排程`** 下方的 **排程日期**，即可視覺化檢視已設定的執行時間。

<img src="/support/images/en/howto/rcloneview-advanced/verify-job-schedule.png" alt="verify job schedule" class="img-medium img-center" />

<details>
<summary>了解時間與日期欄位</summary>

了解時間與日期欄位

**此排程設定支援 Crontab 樣式的值**，可提供精確且彈性的排程方式，滿足各種使用者需求。

| 欄位名稱   | 允許的值 | 說明                             |
| ------------ | -------------- | --------------------------------------- |
| 分鐘       | 0-59           | 該小時內的分鐘                      |
| 小時       | 0-23           | 該天內的小時                         |
| 星期幾  | 0-6            | 0 = 星期日, 1 = 星期一, …, 6 = 星期六 |
| 每月日期 | 1-31           | 該月內的日期                                        |
| 月份        | 1-12           | 1 為一月，2 為二月，依此類推。 |

**接受的格式：**

- **空值**：符合每個單位（例如：若分鐘欄位為空白，則每分鐘皆符合）。
- **n1, n2, ...**：列表值（例如：1,3,5 代表星期一、星期三、星期五）。
- **n1-n2**：數值範圍（例如：0-2 代表 0、1、2）。
- **n1-n2/n3**：帶步進值的範圍（例如：6-12/3 代表 6、9、12）。

**分鐘**、**小時**、**星期幾**、**每月日期** 與 **月份** 這些欄位會以邏輯 **AND**（且）運算方式共同作用。這表示工作只有在**所有**條件都符合時才會執行。

📌 範例：**在每月第一個星期日的凌晨 1:30 執行同步工作**。
若要達成此排程，請設定以下欄位：

- **時間（凌晨 1:30）：**
    - **分鐘：** 30
    - **小時：** 1

- **日期（每月第一個星期日）：**
    - **每月日期：** 1-7 — 符合該月的前七天
    - **星期幾：** 0 — 代表星期日
    - **月份：** _留空_ — 適用於所有月份

✅ 此組合可確保工作**只有在日期落於第一週**且**恰逢星期日**時才會執行，藉此有效達成在每月第一個星期日凌晨 1:30 執行的排程。

<img src="/support/images/en/howto/rcloneview-advanced/example-of-job-schedule.png" alt="example of job schedule" class="img-medium img-center" />

</details>


:::caution 排程工作需要 RcloneView 保持執行
排程工作要順利執行，**RcloneView 必須在背景中執行**。
若您的工作設定為使用外部 `rclone` 引擎，請確保外部 `rclone` 執行個體在排程時間也處於啟用並執行的狀態。
:::

## 檢查工作排程結果


### **在工作管理員中檢視執行歷程**


您可以在 **工作管理員** 視窗中確認最近一次執行時間（`最近執行`）與下一次排程執行時間（`即將到來的排程`）。

<img src="/support/images/en/howto/rcloneview-advanced/open-job-schedule-history.png" alt="open job schedule history" class="img-medium img-center" />
若要檢視工作執行歷程的詳細內容：

- 開啟 **工作管理員**。
- 點選 **歷史紀錄圖示** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" />以開啟所選工作的執行歷程。


在 **`執行類型`** 欄位中，標示為 `Scheduled` 的項目表示該工作是由排程器自動觸發的。

<img src="/support/images/en/howto/rcloneview-advanced/view-history-of-scheduled-job.png" alt="view history of scheduled job" class="img-medium img-center" />


:::info 檢查多個目的地的紀錄
若您的工作包含多個目的地遠端，請在歷程檢視畫面中逐一點選各目的地標籤，以檢視各目標的紀錄詳細內容。
:::


### 完成通知提醒（Windows）

工作完成後，Windows 系統匣中會出現**通知彈出視窗**，顯示同步作業的摘要。

  - 您可以點選 **`查看詳情`** 以檢視完整的結果明細。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip 在 Windows 通知中查看提醒訊息
若您錯過彈出視窗，仍可點選 **Windows 系統匣** 中的 **通知圖示** 查看同步提醒。
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::
