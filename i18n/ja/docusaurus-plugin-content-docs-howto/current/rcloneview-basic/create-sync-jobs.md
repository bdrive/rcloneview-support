---
sidebar_position: 6
description: "RcloneViewでリモートフォルダの繰り返しまたはスケジュール同期のために同期ジョブを作成・管理する方法を学びます。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync job
  - job manager
  - scheduled sync
  - create sync
  - rclone automation
  - plus license
  - cloud storage
  - remote storage
tags:
  - RcloneView
  - Cloud
  - Sync
  - job-scheduler
  - create-job
  - Job-Management
date: 2025-06-04
author: Jay
---
# 同期ジョブを作成する

よく使う同期タスクを**ジョブ**として作成すると、数回のクリックで繰り返し実行できるようになります。

ジョブを作成するには主に2つの方法があります。
- 同期タスク（インスタント同期）から直接ジョブを作成する。
- **ジョブマネージャー**を使ってジョブを手動で設定・保存する。

## インスタント同期からジョブを作成する

同期タスクを設定し、同期ウィンドウで**Save to Jobs**をクリックすることでジョブを作成できます。

👉 参照: [同期からジョブをすぐに作成する](/howto/rcloneview-basic/synchronize-remote-storages#save-sync-operation-as-a-job)

ホームメニューの**`Job Manager`**ツールバーをクリックすると、保存したジョブを表示・実行できます。

## ジョブマネージャーでジョブを作成する

### （任意）送信元・送信先フォルダを選択する

**ジョブマネージャー**でジョブを作成する前に、任意で送信元・送信先フォルダを指定できます。

後で新しいジョブを追加する際にフォルダをあらかじめ割り当てておきたい場合に便利です。

または、**ジョブマネージャー**内の**Add Job**ウィンドウで直接、送信元・送信先フォルダを設定することもできます。

ジョブマネージャーを開くには、ホームツールバーの**Job Manager**ボタンをクリックします。

<img src="/support/images/en/howto/rcloneview-basic/create-job-using-job-manager.png" alt="create job using job manager" class="img-medium img-center" />

### 新しいジョブを追加する

新しいジョブを追加するには、**ジョブマネージャー**（=`Jobs`）モーダルウィンドウで**`Add Job`**をクリックします。

#### ステップ0: ジョブマネージャーを開いて`Add Job`をクリックする

  次の`Jobs`ウィンドウが表示されます。**Add Job**ボタンをクリックしてジョブ作成ウィザードを開きます。

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add job in job manager" class="img-medium img-center" />
  ジョブウィザードは次の3つのステップで進みます。

1. **Configure Storage（ストレージの設定）** – 送信元・送信先フォルダを選択  
2. **Advanced Settings（詳細設定、任意）** – 同期の動作を設定  
3. **Filtering Settings（フィルタリング設定、任意）** – ファイルタイプやフォルダのフィルターを定義
<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="add job configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-advnaced-settings.png" alt="add job advnaced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-filtering-settings.png" alt="add job filtering settings" class="img-medium img-center" />
</div>
#### ステップ1: ストレージの設定

- **`Configure Storage`**ステップで、選択した送信元・送信先フォルダを確認します。
- **`Job Name`**を入力します（❗使用可能文字: `a–z`、`A–Z`、`0–9`、`-`、`_`）
- 1つの送信元を複数の送信先に同期するには、**Add Destination**をクリックして追加のリモートフォルダを追加します。  
  これにより**1:N（1対多）**同期が可能になります。
- **Next**をクリックする前に、すべてのフォルダが正しく設定されていることを確認してください。

:::caution 同期の仕組み
RcloneViewの同期は送信元と送信先を同一にします。  
つまり**`送信先のみを変更`**します。  
- **送信元**フォルダの内容が**送信先**にミラーリングされます。  
- 送信元に存在しない、送信先の既存ファイルは**削除**されます。

👍 **重要:** Rcloneは公式には**一方向同期**のみをサポートしています。  
⚠️ **双方向同期（=Bidirection）**は**ベータ機能**として提供されており、公式にはサポートされていません。予期しない動作やエラーが発生する可能性があるため、本番環境での使用は**推奨されません**。
:::

<details>
<summary>ストレージ設定の詳細</summary>

<img src="/support/images/en/howto/rcloneview-basic/job-config-storage-details.png" alt="job config storage details" class="img-medium img-center" />

1. **`Job Name`**。
 - ❗使用可能文字: `a–z`、`A–Z`、`0–9`、`-`、`_`
2. **送信元フォルダを選択**。
 - 左ペインのフォルダアイコンをクリックして送信元を選択します。
1. **送信先フォルダを選択**。
- 右ペインのフォルダアイコンをクリックして送信先を選択します。
1. **追加の送信先を追加**（任意）。
- **Add Destination**ボタンをクリックすると、一度に複数の送信先に同期できます。必要に応じて**1:N同期**を設定できます。
5. **同期方向を選択**。
 - **送信先のみを変更**: 送信元から送信先へ同期します。送信元に合わせて送信先の内容を更新・削除します。
 - **双方向（Bidirection）**（ベータ）: 両方のフォルダを比較し、双方向で変更を同期します。
⚠️ このモードでは、意図せず新しいファイルが上書きされる場合があるため、注意して使用してください。
6. **空のディレクトリを作成**（任意）。
- 有効にすると、ファイルを含まない送信元ディレクトリも、送信先に空のフォルダとして再作成されます。

:::caution RcloneViewでの双方向同期の使用について
RcloneViewは双方向同期を実行するために`bisync`（rcloneのベータコマンド）を使用します。  
この機能はまだ**実験的**な段階であるため、有効にする前に公式の[ユーザーマニュアル](https://rclone.org/bisync/)、特に[Limitations](https://rclone.org/bisync/#limitations)セクションを確認することをお勧めします。

bisyncを誤って使用すると、データが失われる可能性があります。十分注意して使用してください。
:::


</details>

#### ステップ2: 詳細設定（任意）

  - 詳細設定には以下のオプションが含まれます。
	  - 転送パフォーマンス
	  - 接続方法
	  - エラー処理の動作

> 💡 カスタムの動作が必要でない限り、デフォルト値の使用をお勧めします。

<details>
<summary>詳細設定の詳細</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**パフォーマンス:**

1. **`Number of file transfers`**（ファイル転送数）:  
   並行して実行するファイル転送の数です。リモートで多くのタイムアウトが発生する場合は小さい値に、帯域幅が十分でリモートが高速な場合は大きい値に設定すると便利な場合があります。
2. **`Number of multi thread transfers`**（マルチスレッド転送数）:  
   マルチスレッド転送を使用する際に使用するストリーム数を設定します。`0`に設定するとマルチスレッド転送が無効になります（デフォルト4）。256MBを超えるファイルを対応可能なバックエンドに転送する場合、rcloneは複数のスレッドを使用してファイルを転送します。
3. **`Number of equaility checkers`**（同等性チェッカー数）:  
   チェッカーは同期中にファイルの同等性チェックを行います。一部のストレージシステム（例: S3、Swift、Dropbox）ではこれにかなりの時間がかかるため、並行して実行されます。デフォルトでは8個のチェッカーが並行実行されます。ただし、応答が遅いバックエンドの場合は、`--checkers`を4以下のスレッドに設定して、このデフォルト値を（増やすのではなく）下げる必要がある場合があります。


**安全性と整合性:**

5. **`Enable checksum to compare files`**（ファイル比較にチェックサムを使用）:  
   通常、rcloneはファイルの更新日時とサイズを見て、ファイルが同一かどうかを判断します。このフラグを設定すると、rcloneはファイルのハッシュとサイズをチェックしてファイルが同一かどうかを判断します。これは、同じハッシュタイプをオブジェクトに保存するリモート間（例: DriveとSwift）で転送する場合に非常に便利です。どのリモートがどのハッシュタイプをサポートしているかについては、[概要セクション](https://rclone.org/overview/)の表を参照してください。


**エラー制御:**

5. **`Retry the entire sync if it fails this many times`**（この回数失敗したら同期全体を再試行）:  
   同期全体が指定回数失敗した場合に再試行します（デフォルト3）。一部のリモートは不安定な場合があり、数回再試行することで、エラーにより転送されなかったファイルを取得できることがあります。`1`に設定すると再試行が無効になります。

</details>



#### ステップ3: フィルタリング設定（任意）

- RcloneViewは、Google DocsやBox Docsなどのサービス向けに基本的なフィルターをデフォルトで適用します。
- 同期から除外するファイルタイプやフォルダを追加できます。

<details>
<summary>フィルタリング設定の詳細</summary>


<img src="/support/images/en/howto/rcloneview-basic/jobs-filtering-setttings-details.png" alt="jobs filtering setttings details" class="img-medium img-center" />
1. **`Don't sync files over`**（このサイズを超えるファイルは同期しない）:  
   同期を許可する**最大ファイルサイズ**を制御します。  
   デフォルトの単位はMBです。
2. **`Don't sync files older than this`**（この日時より古いファイルは同期しない）:  
   同期を許可する**最大ファイル経過時間**を制御します。  
   これは**ファイルのみ**に適用され、ディレクトリには適用されません。  
   次の単位を使用します。  
   `y` = 年、`d` = 日、`h` = 時間、`m` = 分、`s` = 秒（例: 2y30d12h30m45s）
3. **`Don't sync folders over this depth`**（この深さを超えるフォルダは同期しない）:  
   設定すると、Rcloneは指定した深さ内のフォルダのみを同期します。  
   例えば、これを`1`に設定すると、最上位ディレクトリ内のファイルのみが同期されます。  
   `2`に設定すると、最初の2つのフォルダレベル内のファイルが同期される、といった具合です。
4. **事前定義済みフィルター**。  
   一般的なファイルタイプ向けに、次のような組み込みフィルターをすぐに適用できます。  
   - Music、Video、Image、Document、Google Docs、Box Docs  
     これらのフィルターは、フィルターリストに事前定義済みオプションとして用意されています。
1. **Others（=カスタムフィルター）**。  
   特定のファイルタイプ、フォルダ、パスを除外または含めるカスタムルールを定義できます。  
   一般的な例をいくつか紹介します。  
   **`.iso`**: すべての.isoファイルを除外します。  
   **`/.git/*`**: サブフォルダではなく、ルート内の.gitフォルダ内のファイルのみを除外します。  
   **`/.git/`**: ルート内の.gitフォルダ全体（中身をすべて含む）を除外します。  
   **`.git/`**: 場所にかかわらず、すべての.gitフォルダとその中身を除外します。  
   
   🔗 より高度な例や構文については、[Rclone Filtering Guide](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)を参照してください。


</details>


#### ステップ4: スケジューリング（PLUSライセンスで利用可能）

ジョブのスケジューリングを使用すると、指定した間隔または時刻でジョブを自動的に実行できます。

💡 この機能は[**PLUSライセンス**](https://rcloneview.com/src/pricing.html)でのみ利用可能です。

詳細については、[ジョブスケジュールの設定](/howto/rcloneview-advanced/job-scheduling-and-execution)を参照してください。

最後に、作成したジョブをリストで確認し、すべてが正しく設定されていることを確認してください。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="add job scheduling" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-completed.png" alt="add job completed" class="img-medium img-center" />
</div>
