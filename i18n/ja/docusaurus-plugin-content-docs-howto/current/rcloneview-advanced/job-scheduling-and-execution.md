---
sidebar_position: 2
description: "RcloneViewで柔軟なスケジューリングオプションを使用して同期ジョブを自動実行する方法を学びます。Plusライセンスが必要です。"
keywords:
  - rcloneview
  - ジョブスケジューリング
  - 同期の自動化
  - スケジュール同期
  - rclone
  - ジョブマネージャー
  - クラウド同期
  - ジョブスケジューラー
  - rclone自動化
  - crontab
  - plusライセンス
  - 定期同期
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
# ジョブのスケジューリングと自動実行

ジョブスケジューリングを使用すると、特定の時刻や間隔で同期ジョブを自動的に実行できます。


:::important ジョブをスケジュールするにはPLUSライセンスが必要です
この機能を有効にするには、[**PLUSライセンス**](https://rcloneview.com/src/pricing.html)を購入する必要があります。
:::


## ジョブスケジューリングの設定

以下のタイミングでスケジューリングを設定できます。

- 新しいジョブを作成するとき（[ステップ4：スケジューリング](/howto/rcloneview-basic/create-sync-jobs#step4-scheduling-available-with-plus-license)）
- 既存のジョブを編集してスケジュールを追加するとき

## ジョブを追加または編集してスケジューリングを設定する


**`Job Manager`** を開くには、ホームメニューのツールバーアイコンをクリックします。
次に、**`Add Job`** または **`Edit Job`** をクリックし、**ステップ4：スケジューリング** に進みます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-medium img-center" />
### **ジョブをスケジュールする方法**

1. **`Run whenever time units ~`** というラベルのチェックボックスをオンにして、スケジューリングを有効にします。
2. TimeおよびDateフィールドを使用して、希望する繰り返しスケジュールを設定します。
3. **`Simulate`** をクリックして、ジョブがいつ実行されるかをプレビューします。
4. スケジュールが正しいことを確認したら、**`Save`** をクリックします。

  保存後、カレンダーアイコン <img src="/support/icons/calendar-icon.png" alt="calendar icon" class="inline-icon" /> または **`Upcoming Schedule`** の下にある**スケジュール日**をクリックすると、設定した実行時刻を視覚的に確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/verify-job-schedule.png" alt="verify job schedule" class="img-medium img-center" />

<details>
<summary>TimeおよびDateフィールドについて</summary>

TimeおよびDateフィールドについて

**スケジュール設定はCrontab形式の値をサポートしており**、幅広いユーザーのニーズに対応できる正確で柔軟なスケジューリングが可能です。

| フィールド名   | 使用可能な値 | 説明                             |
| ------------ | -------------- | --------------------------------------- |
| Minute       | 0-59           | 時の中の分                      |
| Hour         | 0-23           | 日の中の時                         |
| Day of Week  | 0-6            | 0 = 日曜日、1 = 月曜日、…、6 = 土曜日 |
| Day of Month | 1-31           | 月の中の日                                        |
| Month        | 1-12           | 1は1月、2は2月というように続きます。 |

**使用できる形式:**

- **空の値** : すべての単位に一致します（例：Minutesが空欄の場合は毎分）。
- **n1, n2, ...** : 値のリスト（例：1,3,5は月曜日、水曜日、金曜日）。
- **n1-n2** : 値の範囲（例：0-2は0、1、2を意味します）。
- **n1-n2/n3**: ステップ付きの範囲（例：6-12/3は6、9、12を意味します）。

**Minute**、**Hour**、**Day of Week**、**Day of Month**、**Month** の各フィールドは、論理**AND**演算によって連動します。つまり、**すべて**の条件が満たされたときにのみジョブが実行されます。

📌 例：**毎月最初の日曜日の午前1時30分に同期ジョブを実行する**場合。
このスケジュールを実現するには、次のフィールドを設定します。

- **時刻（午前1時30分）：**
    - **Minute:** 30
    - **Hour:** 1
    
- **日付（毎月最初の日曜日）：**
    - **Day of Month:** 1-7 — 月の最初の7日間に一致
    - **Day of Week:** 0 — 0は日曜日を表す
    - **Month:** _空欄のまま_ — すべての月に適用

✅ この組み合わせにより、ジョブは**日付が最初の週内であり**、かつ**日曜日である**場合にのみ実行されるため、実質的に毎月最初の日曜日の午前1時30分にスケジュールされます。

<img src="/support/images/en/howto/rcloneview-advanced/example-of-job-schedule.png" alt="example of job schedule" class="img-medium img-center" />

</details>


:::caution スケジュールされたジョブにはRcloneViewの実行が必要です
スケジュールされたジョブを正しく実行するには、**RcloneViewがバックグラウンドで実行中**である必要があります。
ジョブが外部の`rclone`エンジンを使用するように設定されている場合は、スケジュールされた時刻に外部の`rclone`インスタンスもアクティブに実行されていることを確認してください。
:::

## ジョブスケジューリングの結果を確認する


### **Job Managerで実行履歴を表示する**

  
**Job Manager** ウィンドウでは、直近の実行時刻（`Last execution`）と次回のスケジュール実行（`Upcoming Schedule`）の両方を確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/open-job-schedule-history.png" alt="open job schedule history" class="img-medium img-center" />
ジョブの実行履歴の詳細を表示するには、

- **Job Manager** を開きます。
- **履歴アイコン** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" /> をクリックして、選択したジョブの実行履歴を開きます。
  

**`Execution Type`** 列で `Scheduled` と表示されているエントリは、そのジョブがスケジューラーによって自動的にトリガーされたことを示します。

<img src="/support/images/en/howto/rcloneview-advanced/view-history-of-scheduled-job.png" alt="view history of scheduled job" class="img-medium img-center" />


:::info 複数の宛先のログを確認する
ジョブに複数の宛先リモートが含まれている場合は、履歴ビューで各宛先タブを個別にクリックして、各対象のログ詳細を確認してください。
:::


### 完了通知アラーム（Windows）

ジョブが完了すると、Windowsのシステムトレイに**通知ポップアップ**が表示され、同期操作の概要が示されます。

  - **`See details`** をクリックすると、結果の詳細な内訳を確認できます。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Windowsの通知でアラームメッセージを確認する
ポップアップを見逃した場合でも、**Windowsシステムトレイ**の**通知アイコン**をクリックすることで、同期アラートを確認できます。
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::

