---
sidebar_position: 7
description: "RcloneViewのジョブマネージャーを使用して同期ジョブを実行、監視、管理する方法(ドライラン、ジョブ履歴、通知を含む)を学びます。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - job manager
  - run sync job
  - dry run
  - job execution
  - Job Monitor
  - job history
  - scheduled jobs
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
# ジョブの実行と管理


メインメニューの `Job Manager` ツールバーをクリックして、ジョブマネージャーを開きます。

実行したいジョブを選択し、**`Run`** ボタンをクリックして実行します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />


<details>
<summary>項目の説明</summary>

- `Job Name` : ジョブの名前。 -> アイコンはソースからデスティネーションへの同期方向を視覚的に表します。ジョブに複数のデスティネーションが含まれる場合、各ターゲットリモートごとに個別のアイコンが表示されます。
- `Source` : ソースとなるリモートストレージ内のフォルダ。
- `Destination` : デスティネーションとなるリモートストレージ内のフォルダ。
- `Upcoming Schedule` : このジョブが次にスケジュール実行される時刻を表示します。スケジュールが設定されていない場合は **Unscheduled** と表示されます。
  ⚠️ _この機能はPLUSライセンスでのみ利用可能です。_ 参照:: [ジョブスケジューリングの設定方法](/howto/rcloneview-advanced/job-scheduling-and-execution)。
- `Last execution` : このジョブがスケジュールによって最後に自動実行された時刻。
- `Created At` : ジョブが作成された日時。
- `History` : このジョブの実行履歴を開きます。クリックすると履歴の全画面ウィンドウが開きます。

</details>

<details>
<summary>ジョブ管理用ツールバー</summary>

ジョブ管理用ツールバー

ジョブを選択した後、以下のツールバーオプションを使用して管理できます:

- **`Add Job`** : 新しいジョブを作成して追加します。 [参照: ジョブの作成方法](/howto/rcloneview-basic/create-sync-jobs)
- **`Edit Job`** : 選択したジョブを編集します。
- **`Duplicate`** : 選択したジョブのコピーを作成します。
  複製されたジョブには (1)、(2)、…、(n) のような接尾辞が自動的に付けられます。
  その後、Edit Jobを使用して元のジョブを基にした新しいジョブとして素早くカスタマイズできます。
- **`Delete`** : 選択したジョブを削除します。

</details>


:::tip 💡 ジョブのエクスポートとインポート
**Job Manager** の右上にある**設定アイコン** <img src="/support/icons/setting-icon.png" alt="setting icon" class="inline-icon" /> をクリックすると、現在のジョブをエクスポートしたり、以前保存したジョブをインポートしたりできます。ジョブは `rclone_jobs_~.json` という名前のファイルにエクスポートされ、保存されます。

:::
### シミュレート: ドライランの実行(任意)

**ドライラン(Dry run)** を実行すると、実際の変更を加えることなく同期操作をシミュレートできます。

**`Dry run`** ボタンをクリックすると、変更を加えずに同期をシミュレートします。

- このプレビューでは、**Destination** にコピーされるファイルと削除されるファイルが表示されます。
- **`See details`** をクリックすると、デスティネーションで発生する操作(コピー、作成、削除など)の全一覧を確認できます。
- 複数のデスティネーションを持つジョブの場合、結果はデスティネーションごとにグループ化され、それぞれに個別の **`See details`** が表示されます。

<img src="/support/images/en/howto/rcloneview-basic/job-dry-run-result.png" alt="job dry run result" class="img-medium img-center" />

## ジョブ実行結果の監視

同期操作の進行状況と結果をリアルタイムで確認できます。

### 転送ステータス(実行中)

- 同期中は **`Transfer`** タブを開いて、各ファイルのリアルタイムの進行状況を確認できます。
- **+** アイコンをクリックすると展開し、個々のファイル転送を監視できます。
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### 完了したジョブ(実行後)

- 同期が完了したら、**`Completed`** タブに移動して結果を確認します。
- **+** アイコンをクリックすると、完了した各ジョブのファイル単位の詳細が表示されます。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip 同期済みリモートをすばやく開く
**`Completed`** タブでは、完了したジョブをダブルクリックすると、エクスプローラーペインでソースとデスティネーションの両方のフォルダを開くことができます。
これにより、同期されたフォルダをすぐに確認できます。
:::

### 完了通知アラーム(Windows)

同期が完了すると、Windowsのシステムトレイに通知ポップアップが表示され、同期操作の概要が表示されます。

  - **`See details`** をクリックすると、結果の詳細な内訳を確認できます。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Windows通知でアラームメッセージを確認する
ポップアップを見逃した場合でも、**Windowsシステムトレイ**の**通知アイコン**をクリックすることで同期アラートを確認できます。
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::


## ジョブ履歴の表示


**`Job Manage`r** から、ジョブの横にある **`History`** アイコン <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" /> をクリックすると、その実行ログを表示できます。

複数のデスティネーションでジョブが実行された場合、各デスティネーションは履歴内で個別のタブとして表示されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-medium img-center" />

<details>
<summary>項目の説明</summary>

項目の説明


- `Execution Type` :
	- Manual : ユーザーが手動で実行
	- Scheduled : - RcloneViewによって自動的に実行
- `Start Time` : ジョブが開始された時刻
- `Time Spent` : 同期の合計所要時間
- `Status` : ジョブの実行結果
	- Completed : 成功
	- Errored : 失敗。エラーメッセージが確認できます。
- `Total Size` : 転送されたデータの合計サイズ
- `Speed` : 平均転送速度。
- `Files` : 転送されたファイル数。
- `Job Type` : 現在はSyncのみですが、今後のアップデートでCopy、Purge、Batchジョブが追加される予定です
- `Delete` : 選択した履歴エントリを削除します。

</details>


<details>
<summary>履歴のフィルタリングと削除用ツールバー</summary>

履歴のフィルタリングと削除用ツールバー

大量の履歴レコードが蓄積された場合、ツールバーオプションを使用してフィルタリングまたは削除できます。

- `From ~ To` : カレンダーを使用してカスタムの日付範囲を選択し、その期間内の履歴を表示します。
- `Today` : 本日の履歴エントリのみを表示します。
- `Yesterday` : ちょうど1日前の履歴エントリを表示します。
- `Last week` : 過去7日間の履歴を表示します。
- `Last month` : 過去30日間の履歴を表示します。
- `Delete all` : - すべての履歴レコードを完全に削除します。 ⚠️ _この操作は元に戻せません。十分注意して実行してください。_

</details>




