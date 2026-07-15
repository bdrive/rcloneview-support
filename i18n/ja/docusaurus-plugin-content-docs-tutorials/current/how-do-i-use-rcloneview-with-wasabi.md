---
description: RcloneViewを使ってWasabiとローカルストレージや他のクラウド間でデータを閲覧、バックアップ、同期、移行する方法を学びましょう。
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
unlisted: true
---

# RcloneViewでWasabiを使うにはどうすればいいですか?

RcloneViewは、**rclone**のためのビジュアルな2ペインエクスプローラーを提供するデスクトップアプリケーションです。コマンドラインを使わずに、**Wasabi**と他のクラウドやローカルストレージの間でファイルをコピー、同期、移行できます。

RcloneViewを使うと、次のことができます:

- Wasabiのバケットをローカルフォルダのように閲覧する  
- **ローカルディスク ↔ Wasabi**、または**Wasabi ↔ 他のクラウド**間でファイルをドラッグ&ドロップする  
- 一回限りの転送を実行するか、繰り返しの同期ジョブをスケジュールする  

まず実際の動作を見たい場合は、短いデモ動画をご覧ください(自動リサイズ、レターボックスなし):

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

> RcloneViewの詳細については、公式サイトをご覧ください: [https://rcloneview.com](https://rcloneview.com)  


---

## 1. RcloneViewをダウンロードしてインストールする

RcloneViewは**Windows、macOS、Linux**で利用できます。

1. ダウンロードページにアクセスします: [https://rcloneview.com/src/download](https://rcloneview.com/src/download)。  
2. お使いのOS(Windows、macOS、またはLinux)用のインストーラーを選択します。  
3. **RcloneView**をインストールして起動します。

---

## 2. RcloneViewにWasabiをリモートとして追加する

RcloneViewはWasabiを**S3互換**バックエンドとして扱います。リモートを一度作成すれば、閲覧、コピー、同期、スケジュールジョブで繰り返し利用できます。

### 2.1 前提条件 – Wasabiアクセスキーとエンドポイント

RcloneViewをWasabiに接続するには、以下が必要です:

- **アクセスキー** / **シークレットキー**  
- **リージョン/エンドポイントURL**(例: リージョン`ap-northeast-2`、エンドポイント`s3.ap-northeast-2.wasabisys.com`)  

アクセスキーの作成とエンドポイントの確認方法については、Wasabiの公式ドキュメントを参照してください:

- Wasabiドキュメント: [https://docs.wasabi.com/docs](https://docs.wasabi.com/docs)  
- 例: 「[Creating a New Access Key](https://docs.wasabi.com/docs/creating-a-new-access-key)」または「[Creating a Bucket](https://docs.wasabi.com/docs/creating-a-bucket)」(Wasabiドキュメントポータル内で検索)。

**アクセスキー**、**シークレットキー**、**エンドポイント**を取得したら、RcloneViewに戻ります。

### 2.2 「新規リモート」ウィザードを開く

1. **RcloneView**を起動します。  
2. 上部メニューから**`リモート` → `+ 新規リモート`**をクリックします。  
   - または、エクスプローラーペインの**`+`**タブをクリックし、**`新規リモート`**を選択します。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2.3 S3互換プロバイダーとしてWasabiを設定する

1. **新規リモート**ダイアログで`Wasabi`を検索します。  
2. **Wasabi**プロバイダーのタイルを選択します。  
3. 接続を設定します:
   - **リモート名**: `MyWasabi`のような分かりやすい名前を入力します。  
   - **アクセスキーID**: WasabiのアクセスキーIDを貼り付けます。  
   - **シークレットアクセスキー**: Wasabiのシークレットキーを貼り付けます。  
   - **エンドポイント**: WasabiのS3エンドポイントを入力します(例: `s3.ap-northeast-2.wasabisys.com`)。  
4. **リモートを追加**をクリックします。

<img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add new wasabi remote configuration" class="img-large img-center" />

### 2.4 Wasabiリモートを確認する

1. **`リモート → リモートマネージャー`**を開きます。  
2. Wasabiリモート(例: `MyWasabi`)がリストに表示され、アクセス可能であることを確認します。

<img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify wasabi in remote manager" class="img-large img-center" />

詳細については、S3互換ストレージ全般のガイドをご覧ください:  
- [S3互換リモートの追加方法](/howto/remote-storage-connection-settings/s3)

---

## 3. Wasabiのフォルダを閲覧する

リモートを作成したら、RcloneViewのエクスプローラー内でバケットとオブジェクトを閲覧できます。

1. エクスプローラーペインで**`+`**タブをクリックします。  
2. 「リモートを開く」リストで、お使いの**Wasabi**リモート(例: `MyWasabi`)を選択します。  
3. RcloneViewはリモートを新しいタブで開き、バケットがトップレベルフォルダのように表示されます。  
4. バケットをダブルクリックして中身を確認します。

<img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi remote in rcloneview explorer" class="img-large img-center" />

一般的なナビゲーションのヒントについては、こちらをご覧ください:  
- [RcloneViewによるファイル管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

## 4. ローカルディスクとWasabi間でファイルを管理する

このセクションでは、RcloneViewを使ってローカルコンピューターとWasabiの間でデータを移動する実践的な方法を紹介します。

以下のように開くことができます:

- **左ペイン**: ローカルディスク(例: `C:\`や特定のフォルダ)  
- **右ペイン**: Wasabiのリモートバケット  

その後、ワークフローに応じてドラッグ&ドロップ、フォルダ比較、または同期ジョブを使用します。

---

### 4.1 ローカルとWasabi間のドラッグ&ドロップ

ドラッグ&ドロップは、ファイルをコピーする最もシンプルな方法です。

1. 左ペインで**ローカルフォルダ**を開きます(例: `D:\Media`)。  
2. 右ペインで**Wasabiのバケット/フォルダ**を開きます。  
3. 左側でファイルまたはフォルダを選択します。  
4. それらを右ペインにドラッグし、目的の場所にドロップします。  
5. RcloneViewが転送ジョブを開始し、**転送**タブに進捗が表示されます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi drag and drop" class="img-large img-center" />
複数選択、右クリック操作、その他の詳細については、こちらをご覧ください:  
- [RcloneViewによるファイル管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 4.2 フォルダを比較して変更されたファイルをコピーする

コピー前に**差分**を確認したい場合は、**比較**機能を使用します。

一般的な利用例: ローカルのバックアップフォルダとWasabiのバックアップフォルダを比較する。

1. 左ペインで**元のフォルダ**を開きます(例: ローカルまたは別のクラウド)。  
2. 右ペインで**Wasabiの宛先フォルダ**を開きます。  
3. 上部の**ホーム**メニューで**`比較`**をクリックします。  
4. RcloneViewは以下をマークします:
   - 左側のみに存在するファイル(元のみ)  
   - 右側のみに存在するファイル(宛先のみ)  
   - 変更されたファイル(サイズ、タイムスタンプ、またはチェックサムが異なる)  
5. 移動したい項目を選択し、**コピー →**(または逆方向の場合は**← コピー**)をクリックします。

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi and local compare and copy" class="img-large img-center" />
詳細はこちら:  
- [フォルダの内容を比較する](/howto/rcloneview-basic/compare-folder-contents)

---

### 4.3 ローカルディスクとWasabi間の同期ジョブ

繰り返し実行するバックアップやミラーリングには、**同期**を使用します。同期は宛先を元(ソース)と一致させます。

一般的なパターンは3つあります:

- **インスタント同期**(すぐに一度だけ実行)  
- **保存された同期ジョブ**(必要なときに再実行)  
- **スケジュール済み同期ジョブ**(スケジュールに従って自動実行)  

> ⚠️ 同期は宛先を元(ソース)と一致させるように更新します。宛先にのみ存在するファイルは削除される可能性があります。実行前に同期設定をよく確認してください。

#### 4.3.1 インスタント同期(一回限り)

1. 左ペインで**元のフォルダ**を開きます(例: ローカルフォルダ)。  
2. 右ペインで**宛先のWasabiフォルダ**を開きます。  
3. **ホーム**メニューで**`同期`**をクリックします。  

<img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi and local instant sync" class="img-large img-center" />

次に、**同期**ダイアログで:

1. **ストレージの設定**で、元と宛先を確認します。  
2. 必要に応じて**詳細設定**または**フィルタリング設定**を調整します。  
3. 変更内容をプレビューしたい場合は、最初に**ドライラン**を実行します。  
4. **実行**をクリックして同期を開始します。

<img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi configure sync job" class="img-large img-center" />
同期を実行すると、ファイル転送の進捗をリアルタイムで確認できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi real time monitoring transferring" class="img-large img-center" />

参考:  
- [リモートストレージを即座に同期する](/howto/rcloneview-basic/synchronize-remote-storages)

#### 4.3.2 同期ジョブを保存して再利用する

同じローカル→Wasabiのバックアップを定期的に実行する場合:  
上記のように同期を設定します(左側に元、右側にWasabiの宛先)。    

1. 同期ダイアログで、すぐに実行する代わりに**ジョブに保存**を選択します。  
2. `SyncLocalToWasabi`のような分かりやすい名前をジョブに付けます。  
3. 後で**ジョブマネージャー**を開き、更新されたバックアップが必要なときにジョブを手動で実行します。

<img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi saved sync job execution" class="img-large img-right" />  
サポートされているプラットフォーム(Windowsなど)では、ジョブが完了するとRcloneViewがシステム通知を表示できます。

参考:  
- [同期ジョブを作成する](/howto/rcloneview-basic/create-sync-jobs)  
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)

#### 4.3.3 Wasabiへの自動バックアップをスケジュールする(ジョブスケジューリング)

Wasabiへのバックアップを完全に自動化するには、同期ジョブをスケジュールします。

> 📌 **ジョブスケジューリングはPLUS機能です。** スケジューリングを有効にするには[PLUSライセンス](https://rcloneview.com/src/pricing.html)が必要です。

ツールバーから**ジョブマネージャー**を開きます。    
1. Wasabiの同期ジョブ(例: `LocalToWasabi_DailyBackup`)を選択して**ジョブを編集**をクリックするか、現在のエクスプローラーの選択内容から新しいジョブを作成します。  
2. **ステップ4: スケジューリング**に進みます。  
3. **実行間隔を有効にする ~**を有効にし、スケジュールを設定します(例: 毎日午前1時)。  
4. **シミュレート**を使用して、次回の実行時刻をプレビューします。  
5. ジョブを保存し、RcloneViewを起動したままにしておくと、ジョブが自動的に実行されます。

<img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule automatic wasabi backup" class="img-large img-center" />


詳細については、こちらをご覧ください:  
- [ジョブのスケジューリングと自動実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

### 4.4 マウント機能を使ってWindowsエクスプローラーでWasabiを操作する

Wasabiのバケットをシステム上の**仮想ドライブまたはフォルダ**としてマウントし、Windowsエクスプローラー(またはmacOSのFinder)から通常どおり利用できます。

一般的な流れ:

Wasabiリモートが正しく設定され、動作していることを確認してください。  
1. マウントしたいWasabiフォルダを選択します。  
2. RcloneViewエクスプローラーの右上にある**マウント**アイコンをクリックします。  
3. **保存してマウント**ボタンをクリックしてマウントを開始します。  
4. しばらくすると、OS上に新しいドライブまたはフォルダが表示されます。そのパスを閲覧すると、RcloneView/rclone経由でWasabiから直接データを読み書きします。

<img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount wasabi as local drive" class="img-large img-center" />
詳細情報:  
- [クラウドストレージをローカルドライブとしてマウントする](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

---

## 5. サポートを受けるには

- RcloneViewのドキュメントとハウツーガイド: [https://rcloneview.com/support](https://rcloneview.com/support)  
- Wasabiドキュメントポータル: [https://docs.wasabi.com](https://docs.wasabi.com)  

WasabiのS3互換オブジェクトストレージとRcloneViewのビジュアルなジョブ管理を組み合わせることで、rcloneのコマンドライン構文を学ぶことなく、信頼性の高いバックアップ、同期、移行のワークフローを構築できます。
