---
sidebar_position: 2
description: "RcloneViewとWasabiを使って、ローカルストレージと他のクラウド間でデータを閲覧、バックアップ、同期、移行する方法を学びます。"
keywords:
  - rcloneview
  - wasabi
  - s3-compatible
  - cloud backup
  - cloud sync
  - cloud migration
  - file synchronization
  - gui
  - rclone gui
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - cloud-backup
  - Tutorial
  - wasabi
date: 2025-02-20
author: Jay
slug: /
---

# RcloneViewでWasabiを使う（S3互換）

RcloneViewは、**rclone**のためのビジュアルな2ペインエクスプローラーを提供するデスクトップアプリケーションです。コマンドラインを使わずに、**Wasabi**と他のクラウドまたはローカルストレージの間でファイルのコピー、同期、移行を行うことができます。

RcloneViewでできること:

- Wasabiのバケットをローカルフォルダのように閲覧  
- **ローカルディスク↔Wasabi**または**Wasabi↔他のクラウド**間でファイルをドラッグ＆ドロップ  
- 一回限りの転送、または繰り返しの同期ジョブのスケジュール実行  

先に実際の動作を見たい場合は、短いデモ動画をご覧ください。

<iframe
  src="https://www.youtube.com/embed/yKc6qS2DG2A"
  title="Wasabi + RcloneView Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
  style={{aspectRatio: '16 / 9', width: '100%', maxWidth: '960px', height: 'auto', display: 'block', margin: '0 auto', border: 0}}
></iframe>

<br />

> RcloneViewについて詳しくは、公式サイトをご覧ください: [https://rcloneview.com](https://rcloneview.com)  


---

## 1. RcloneViewのダウンロードとインストール

RcloneViewは**Windows、macOS、Linux**でご利用いただけます。

1. ダウンロードページにアクセスします: [https://rcloneview.com/src/download](https://rcloneview.com/src/download)。  
2. お使いのOS（Windows、macOS、Linux）のインストーラーを選択します。  
3. **RcloneView**をインストールして起動します。

---

## 2. RcloneViewにWasabiをリモートとして追加する

RcloneViewはWasabiを**S3互換**バックエンドとして扱います。リモートを一度作成すれば、閲覧、コピー、同期、スケジュールジョブに繰り返し使用できます。

### 2.1 前提条件 – Wasabiのアクセスキーとエンドポイント

RcloneViewをWasabiに接続するには、以下が必要です。

- **アクセスキー** / **シークレットキー**  
- **リージョン / エンドポイントURL**（例: リージョン`ap-northeast-2`、エンドポイント`s3.ap-northeast-2.wasabisys.com`）  

アクセスキーの作成とエンドポインドの確認方法については、Wasabiの公式ドキュメントをご参照ください。

- Wasabiドキュメント: [https://docs.wasabi.com/docs](https://docs.wasabi.com/docs)  
- 例: 「[Creating a New Access Key](https://docs.wasabi.com/docs/creating-a-new-access-key)」または「[Creating a Bucket](https://docs.wasabi.com/docs/creating-a-bucket)」（Wasabiドキュメントポータル内で検索してください）。

**アクセスキー**、**シークレットキー**、**エンドポイント**を取得したら、RcloneViewに戻ります。

### 2.2「新しいリモート」ウィザードを開く

1. **RcloneView**を起動します。  
2. 上部メニューから**`Remote` → `+ New Remote`**をクリックします。  
   - または、エクスプローラーペインの**`+`**タブをクリックし、**`New Remote`**を選択します。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2.3 WasabiをS3互換プロバイダーとして設定する

1. **New Remote**ダイアログで`Wasabi`を検索します。  
2. **Wasabi**プロバイダータイルを選択します。  
3. 接続を設定します:
   - **リモート名**: `MyWasabi`のような分かりやすい名前を入力します。  
   - **Access Key ID**: Wasabiのアクセスキーを貼り付けます。  
   - **Secret Access Key**: Wasabiのシークレットキーを貼り付けます。  
   - **Endpoint**: WasabiのS3エンドポイントを入力します（例: `s3.ap-northeast-2.wasabisys.com`）。  
4. **Add Remote**をクリックします。

<img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add new wasabi remote configuration" class="img-large img-center" />

### 2.4 Wasabiリモートを確認する

1. **`Remote → Remote Manager`**を開きます。  
2. Wasabiリモート（例: `MyWasabi`）が一覧に表示され、接続可能であることを確認します。

<img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify wasabi in remote manager" class="img-large img-center" />

詳細については、一般的なS3互換ガイドをご覧ください。  
- [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)

---

## 3. Wasabi内のフォルダを閲覧する

リモートを作成したら、RcloneViewのエクスプローラー内でバケットとオブジェクトを閲覧できます。

1. エクスプローラーペインで**`+`**タブをクリックします。  
2. 「Open Remote」リストから**Wasabi**リモート（例: `MyWasabi`）を選択します。  
3. RcloneViewはバケットがトップレベルフォルダのように表示されるタブでリモートを開きます。  
4. バケットをダブルクリックしてその内容を閲覧します。

<img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi remote in rcloneview explorer" class="img-large img-center" />

その他の一般的なナビゲーションのヒントについては、以下をご参照ください。  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

## 4. ローカルディスクとWasabi間でファイルを管理する

このセクションでは、RcloneViewを使ってローカルコンピューターとWasabi間でデータを移動する実践的な方法を紹介します。

以下を開くことができます:

- **左ペイン**: ローカルディスク（例: `C:\`または特定のフォルダ）  
- **右ペイン**: Wasabiリモートバケット  

その後、ワークフローに応じてドラッグ＆ドロップ、フォルダ比較、または同期ジョブを使用します。

---

### 4.1 ローカルとWasabi間のドラッグ＆ドロップ

ドラッグ＆ドロップは、ファイルをコピーする最も簡単な方法です。

1. 左ペインで**ローカルフォルダ**（例: `D:\Media`）を開きます。  
2. 右ペインで**Wasabiバケット/フォルダ**を開きます。  
3. 左側でファイルまたはフォルダを選択します。  
4. それらを右ペインにドラッグし、目的の場所にドロップします。  
5. RcloneViewが転送ジョブを開始し、進行状況が**Transfer**タブに表示されます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi drag and drop" class="img-large img-center" />
複数選択、右クリック操作などについては、以下をご参照ください。  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 4.2 フォルダを比較し、変更されたファイルをコピーする

コピーする前に**差分**を確認したい場合は、**Compare**機能を使用します。

典型的な使用例: ローカルのバックアップフォルダとWasabiのバックアップフォルダを比較する。

1. 左ペインで**ソースフォルダ**（例: ローカルまたは別のクラウド）を開きます。  
2. 右ペインで**Wasabiの宛先フォルダ**を開きます。  
3. 上部の**Home**メニューで**`Compare`**をクリックします。  
4. RcloneViewは以下をマークします:
   - 左側のみに存在するファイル（ソースのみ）  
   - 右側のみに存在するファイル（宛先のみ）  
   - 変更されたファイル（サイズ、タイムスタンプ、またはチェックサムが異なる）  
5. 移動したい項目を選択し、**Copy →**（逆方向の場合は**← Copy**）をクリックします。

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi and local compare and copy" class="img-large img-center" />
詳細はこちら:  
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### 4.3 ローカルディスクとWasabi間の同期ジョブ

繰り返し行うバックアップやミラーリングには**Sync**を使用します。同期は宛先をソースに一致させます。

一般的なパターンは3つあります:

- **Instant Sync**（すぐに一度だけ実行）  
- **Saved Sync Job**（必要な時に再実行）  
- **Scheduled Sync Job**（スケジュールに従って自動実行）  

> ⚠️ 同期は宛先をソースに一致させるよう更新するため、宛先にのみ存在するファイルが削除されることがあります。実行前に同期設定を必ず確認してください。

#### 4.3.1 Instant Sync（一回限り）

1. 左ペインで**ソースフォルダ**（例: ローカルフォルダ）を開きます。  
2. 右ペインで**Wasabiの宛先フォルダ**を開きます。  
3. **Home**メニューで**`Sync`**をクリックします。  

<img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi and local instant sync" class="img-large img-center" />

次に、**Sync**ダイアログで:

1. **Configure Storage**でソースと宛先を確認します。  
2. 必要に応じて**Advanced Settings**または**Filtering Settings**を調整します。  
3. 変更内容をプレビューしたい場合は、まず**Dry Run**を実行します。  
4. **Run**をクリックして同期を開始します。

<img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi configure sync job" class="img-large img-center" />
Syncを実行した後は、ファイル転送の進行状況をリアルタイムで確認できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi real time monitoring transferring" class="img-large img-center" />

参考:  
- [Synchronize Remote Storages Instantly](/howto/rcloneview-basic/synchronize-remote-storages)

#### 4.3.2 再利用のための同期ジョブの保存

同じローカル→Wasabiのバックアップを定期的に実行する場合:  
上記のように同期を設定します（左にソース、右にWasabiの宛先）。    

1. Syncダイアログで、すぐに実行する代わりに**Save to Jobs**を選択します。  
2. `SyncLocalToWasabi`のような分かりやすい名前をジョブに付けます。  
3. 後で**Job Manager**を開き、更新されたバックアップが必要な時にいつでも手動でジョブを実行できます。

<img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi saved sync job execution" class="img-large img-right" />  
サポートされているプラットフォーム（Windowsなど）では、ジョブが完了するとRcloneViewがシステム通知を表示できます。

参考:  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

#### 4.3.3 Wasabiへの自動バックアップをスケジュールする（ジョブスケジューリング）

Wasabiへのバックアップを完全に自動化するには、同期ジョブをスケジュールします。

> 📌 **ジョブスケジューリングはPLUS機能です。** スケジューリングを有効にするには[PLUSライセンス](https://rcloneview.com/src/pricing.html)が必要です。

ツールバーから**Job Manager**を開きます。    
1. Wasabi同期ジョブ（例: `LocalToWasabi_DailyBackup`）を選択し、**Edit Job**をクリックするか、現在のエクスプローラーの選択内容から新しいジョブを作成します。  
2. **Step 4: Scheduling**に進みます。  
3. **Run whenever time units ~**を有効にし、スケジュールを設定します（例: 毎日01:00）。  
4. **Simulate**を使って、今後の実行時刻をプレビューします。  
5. ジョブを保存し、RcloneViewを実行したままにしておくと、ジョブが自動的に実行されます。

<img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule automatic wasabi backup" class="img-large img-center" />


詳細については、以下をご参照ください。  
- [Job Scheduling and Automated Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

### 4.4 Mountを使ってWindowsエクスプローラーでWasabiを操作する

Wasabiバケットをシステム上の**仮想ドライブまたはフォルダ**としてマウントし、通常通りWindowsエクスプローラー（macOSではFinder）を使用できます。

一般的な流れ:

Wasabiリモートが設定され、正常に動作していることを確認してください。  
1. マウントしたいWasabiフォルダを選択します。  
2. RcloneViewエクスプローラーの右上にある**Mount**アイコンをクリックします。  
3. **Save and mount**ボタンをクリックしてマウントを開始します。  
4. しばらくすると、OS上に新しいドライブまたはフォルダが表示されます。そのパスを閲覧すると、RcloneView/rcloneを通じてWasabiから直接データの読み書きが行われます。

<img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount wasabi as local drive" class="img-large img-center" />
詳細情報:  
- [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

---

## 5. サポートを受ける方法

- RcloneViewのドキュメントとハウツーガイド: [https://rcloneview.com/support](https://rcloneview.com/support)  
- Wasabiドキュメントポータル: [https://docs.wasabi.com](https://docs.wasabi.com)  

WasabiのS3互換オブジェクトストレージとRcloneViewのビジュアルなジョブ管理を組み合わせることで、rcloneのコマンドライン構文を学ぶことなく、信頼性の高いバックアップ、同期、移行のワークフローを構築できます。
