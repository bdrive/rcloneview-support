---
sidebar_position: 5
description: "RcloneViewの強力な同期機能を使用して、ローカルまたはクラウドストレージ間でフォルダを即座にミラーリングする方法を学びます。設定、フィルター、ドライラン、スケジュール設定のオプションを含みます。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync folders
  - bidirectional sync
  - sync job
  - dry run
  - scheduled sync
  - job scheduling
  - Job Monitor
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-storage
  - file-synchronization
  - job-scheduler
  - dry-run
  - Remote-Storage
date: 2025-06-04
author: Jay
---
# リモートストレージを即座に同期する

RcloneViewの**`Sync`**機能を使用して、クラウドリモートまたはローカルストレージ間でフォルダを即座にミラーリングします。

このガイドでは、同期操作の設定と実行の手順を説明します。
## ソースと宛先のフォルダを選択する

同期操作を開始するには、**ソース**フォルダと**宛先**フォルダを定義する必要があります。

- **エクスプローラー**パネルで、2つのタブを開きます。
	- **左タブ**で選択したフォルダが**ソース**になります
	- **右タブ**で選択したフォルダが**宛先**になります

- 各タブ上部の**パスバー**を使用して、フォルダパスを直接入力することもできます。
- これらの設定は、必要に応じて後から**Sync**設定ウィンドウで調整できます。

フォルダを選択したら、上部の**`Home`**メニューにある**`Sync`**ボタンをクリックして進みます。
<img src="/support/images/en/howto/rcloneview-basic/sync-remote-folder-select.png" alt="sync remote folder select" class="img-medium img-center" />
## 同期操作を実行する

ソースと宛先のフォルダを選択したら、同期を設定して実行できます。


<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="sync configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="sync advanced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="sync filtering settings" class="img-medium img-center" />
</div>

### ステップ1: フォルダパスを確認する

- **`Configure Storage`**ステップで、選択したソースと宛先のフォルダを確認します。
- **Next**をクリックする前に、両方が正しく設定されていることを確認してください。

:::caution 同期の仕組み
RcloneView Syncは、ソースと宛先を同一にします。
つまり**`宛先のみを変更`**します。
- **ソース**フォルダの内容が**宛先**にミラーリングされます。
- 宛先に存在するがソースには存在しないファイルは**削除**されます。

👍 **重要:** Rcloneは公式には**一方向同期**のみをサポートしています。
⚠️ **双方向同期（=Bidirection）**は**ベータ機能**として提供されており、公式にはサポートされていません。予期しない動作やエラーが発生する可能性があるため、本番環境での使用は**推奨されません**。
:::

<details>
<summary>Configure Storage の詳細</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-config-storage-details.png" alt="sync config storage details" class="img-medium img-center" />

1. **ソースフォルダを選択します**。
 - 左パネルのフォルダアイコンをクリックしてソースを選択します。
2. **宛先フォルダを選択します**。
- 右パネルのフォルダアイコンをクリックして宛先を選択します。
3. **追加の宛先を追加します**（任意）。
- **Add Destination**ボタンをクリックすると、一度に複数の宛先に同期できます。必要に応じて**1:N同期**を設定できます。
4. **同期方向を選択します**。
 - **宛先のみを変更**: ソースから宛先へ同期します。宛先の内容をソースに合わせて更新または削除します。
 - **双方向（Bidirection）**（ベータ）: 両方のフォルダを比較し、両方向の変更を同期します。
⚠️ このモードでは、意図せず新しいファイルが上書きされる可能性があるため、注意して使用してください。
5. **空のディレクトリを作成する**（任意）。
- 有効にすると、ファイルを含まないソースディレクトリは、宛先に空フォルダとして再作成されます。

:::caution RcloneViewでの双方向同期の使用について
RcloneViewは、双方向同期を実行するために`bisync`（rcloneのベータコマンド）を使用します。
この機能はまだ**実験的**であるため、有効にする前に公式の[ユーザーマニュアル](https://rclone.org/bisync/)、特に[制限事項](https://rclone.org/bisync/#limitations)のセクションを確認することをお勧めします。

bisyncを誤って使用すると、データ損失につながる可能性があります。十分注意してご使用ください。
:::


</details>

### ステップ2: 詳細設定（任意）

  - 詳細設定には、以下に関するオプションが含まれます。
	  - 転送パフォーマンス
	  - 接続方式
	  - エラー処理の動作

> 💡 カスタムの動作が必要でない限り、デフォルト値の使用をお勧めします。

<details>
<summary>詳細設定の詳細</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**パフォーマンス:**

1. **`Number of file transfers`**:
   並行して実行するファイル転送の数です。リモートがタイムアウトを多く発生させている場合はこの値を小さく、帯域幅が広く高速なリモートを使用している場合は大きく設定すると効果的な場合があります。
2. **`Number of multi thread transfers`**:
   マルチスレッド転送を使用する際に使用するストリーム数を設定します。マルチスレッド転送を無効にするには`0`に設定します（デフォルトは4）。256MBを超えるファイルを対応可能なバックエンドに転送する場合、rcloneは複数のスレッドを使用してファイルを転送します。
3. **`Number of equaility checkers`**:
   チェッカーは、同期中にファイルの同一性チェックを行います。一部のストレージシステム（例: S3、Swift、Dropbox）ではこれに時間がかかる場合があるため、並行して実行されます。デフォルトでは8つのチェッカーが並行実行されます。ただし、反応が遅いバックエンドの場合は、`--checkers`を4以下のスレッド数に設定して、このデフォルト値を（増やすのではなく）下げる必要がある場合があります。


**安全性と整合性:**

5. **` Enable checksum to compare files`**:
   通常、rcloneはファイルの更新日時とサイズを見て、ファイルが同一かどうかを判断します。このフラグを設定すると、rcloneはファイルのハッシュとサイズをチェックしてファイルが同一かどうかを判断します。これは、同じハッシュタイプをオブジェクトに保存するリモート間（例: DriveとSwift）で転送する場合に非常に便利です。どのリモートがどのハッシュタイプをサポートしているかについては、[概要セクション](https://rclone.org/overview/)の表を参照してください。


**エラー制御:**

5. **`Retry the entire sync if it fails this many times`**:
   同期全体がこの回数だけ失敗した場合に再試行します（デフォルトは3）。一部のリモートは不安定な場合があり、数回の再試行によって、エラーで転送されなかったファイルを取得できることがあります。再試行を無効にするには`1`に設定してください。

</details>



### ステップ3: ファイルとフォルダをフィルタリングする（任意）

- RcloneViewは、Google DocsやBox Docsなどのサービスに対して、デフォルトで基本的なフィルターを適用します。
- 同期から除外するファイルタイプやフォルダをさらに追加できます。

<details>
<summary>フィルタリング設定の詳細</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings-details.png" alt="sync filtering settings details" class="img-medium img-center" />

1. **`Don't sync files over`**:
   同期を許可する**最大ファイルサイズ**を制御します。
   デフォルトの単位はMBです。
2. **`Don't sync files older than this`**:
   同期を許可する**最大ファイル経過日数**を制御します。
   これは**ファイルのみ**に適用され、ディレクトリには適用されません。
   以下の単位を使用します。
   `y` = 年、`d` = 日、`h` = 時間、`m` = 分、`s` = 秒（例: 2y30d12h30m45s）
3. **`Don't sync folders over this depth`**:
   設定すると、Rcloneは指定した深さ内のフォルダのみを同期します。
   例えば、これを`1`に設定すると、トップレベルディレクトリ内のファイルのみが同期されます。
   `2`に設定すると、最初の2階層のフォルダ内のファイルが同期されます。以降も同様です。
4. **定義済みフィルター**。
   一般的なファイルタイプに対する組み込みフィルターを素早く適用できます。例:
   - Music、Video、Image、Document、Google Docs、Box Docs
     これらのフィルターは、フィルターリストに定義済みオプションとして用意されています。
1. **その他（=カスタムフィルター）**。
   特定のファイルタイプ、フォルダ、パスを除外または含めるためのカスタムルールを定義できます。
   一般的な例をいくつか示します。
   **`.iso`**: すべての.isoファイルを除外します。
   **`/.git/*`**: サブフォルダではなく、ルート直下の.gitフォルダ内のファイルのみを除外します。
   **`/.git/`**: ルート直下の.gitフォルダ全体を、その中身も含めて除外します。
   **`.git/`**: 場所を問わず、すべての.gitフォルダとその中身を除外します。
   
   🔗 より高度な例と構文については、[Rclone フィルタリングガイド](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)を参照してください


</details>

  
  
### ステップ4: 同期を実行する

- すべての設定が完了したら、**Run**をクリックして同期処理を開始します。

:::important 同期のスケジュール設定
同期タスクを指定した日時に実行するには、まず**Save to Jobs**でタスクをジョブとして登録します。その後、**`Job Manager`**を実行してスケジュールを設定します。

> ⚠️ **ジョブスケジュール設定はPLUS機能として提供されています。**

この機能を利用するには、[**PLUSライセンス**](https://rcloneview.com/src/pricing.html)を購入する必要があります。
:::

### シミュレーション: ドライランを実行する（任意）

**ドライラン**を実行すると、実際の変更を加えずに同期操作をシミュレートできます。

- このプレビューでは、**宛先**にコピーされるファイルと削除されるファイルが表示されます。
- **`See details`**をクリックすると、宛先で発生する操作（コピー、作成、削除など）の完全な一覧を確認できます。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="sync dry run" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="sync dry run details" class="img-medium img-center" />
</div>

## 同期結果を確認する

同期操作の進行状況と結果をリアルタイムで確認できます。

### 転送ステータス（実行中）

- 同期中は、**`Transfer`**タブを開いて各ファイルのリアルタイムの進行状況を確認できます。
- **+**アイコンをクリックすると展開され、個々のファイル転送を監視できます。
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### 完了したジョブ（同期後）

- 同期が完了したら、**`Completed`**タブに移動して結果を確認します。
- **+**アイコンをクリックすると、完了した各ジョブのファイル単位の詳細を確認できます。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip 同期済みリモートを素早く開く
**`Completed`**タブでは、完了したジョブをダブルクリックすると、ソースと宛先の両方のフォルダをエクスプローラーパネルで開くことができます。
これにより、同期されたフォルダをすぐに確認できます。
:::

### 完了通知アラーム（Windows）

同期が完了すると、Windowsのシステムトレイに、同期操作の概要を示す通知ポップアップが表示されます。

  - **`See details`**をクリックすると、結果の完全な内訳を確認できます。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Windowsの通知でアラームメッセージを確認する
ポップアップを見逃した場合でも、**Windowsのシステムトレイ**にある**通知アイコン**をクリックすることで、同期アラートを確認できます。
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::



## 同期操作をジョブとして保存する

同じ同期タスクを定期的に実行する場合、**Job**として保存しておくと簡単に再利用できます。

- 同期を設定した後、**`Save to Jobs`**をクリックします。
- **Job Name**を入力し、**Save**をクリックしてジョブを保存します。
  - ❗使用可能な文字: `a–z`、`A–Z`、`0–9`、`-`、`_`、`.`
- 保存したJobは、後から**`Job Manager`**からワンクリックで実行できます。

<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="save sync to jobs" class="img-medium img-center" />
Homeメニューの**`Job Manager`**ツールバーをクリックすると、保存したジョブを表示・実行できます。
<img src="/support/images/en/howto/rcloneview-basic/verify-job-in-job-manager.png" alt="verify job in job manager" class="img-medium img-center" />
