---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "Googleフォトを外付けドライブまたは NAS にバックアップする方法 — Google Takeout + RcloneView"
authors:
  - tayson
description: "Googleフォトでは、サードパーティ製アプリから既存のライブラリをダウンロードできなくなりました。Google Takeout で Google ドライブにエクスポートし、RcloneView でそのエクスポートを外付けドライブ、NAS、または別のクラウドにコピーしましょう。新しい写真は RcloneView Mobile でバックアップし続けられます。"
keywords:
  - google フォト バックアップ
  - google フォト 外付けドライブ
  - google フォト nas
  - google takeout nas
  - google takeout バックアップ
  - google フォト rclone
  - google フォト api 制限
  - google フォト ローカル保存
  - google フォト エクスポート
  - rcloneview mobile 写真バックアップ
tags:
  - RcloneView
  - google-photos
  - backup
  - cloud-storage
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Googleフォトを外付けドライブまたは NAS にバックアップする方法 — Google Takeout + RcloneView

> 2025 年 3 月 31 日以降、Googleフォトでは、rclone や RcloneView を含むサードパーティ製アプリは、自身がアップロードした写真しか参照できなくなりました。既存のライブラリを取り出す確実な方法は Google Takeout であり、その後の作業は RcloneView が引き受けます。

Googleフォトには長年にわたる、かけがえのない写真や動画が保存されていますが、ストレージの容量制限、アカウントのロックアウト、ポリシー変更などによって、それらにアクセスできなくなる可能性があります。このガイドの以前のバージョンを含め、多くのガイドでは、Googleフォトを同期ツールに接続してすべてをダウンロードするよう案内していました。しかし、Google が 2025 年にその道を閉ざしたため、この方法はもう使えません。

このガイドでは、現在でも有効な方法を紹介します。**Google Takeout** でライブラリを Google ドライブに直接エクスポートし、**RcloneView** でそのエクスポートを外付けドライブ、NAS、または別のクラウドにコピーします。さらに **RcloneView Mobile** を使えば、今後の新しい写真は Googleフォトを経由せずに保存できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 変更点: Googleフォト API の制限 (2025 年)

2025 年 3 月 31 日、Google は Photos Library API からライブラリ全体にアクセスするスコープを削除しました。Google の説明によれば、サードパーティ製アプリは「アプリ自身が作成したアルバムとメディアアイテムのみを一覧表示、検索、取得できる」ようになります。共有アルバムの呼び出しは `403 PERMISSION_DENIED` を返します。

RcloneView で **Google Photos** リモートを追加した場合、次のような影響があります。

- **リモートがほぼ空に見えます。** RcloneView または rclone 経由でアップロードした写真しか表示されません。スマートフォンからのアップロード、ウェブからのアップロードなど、ライブラリ内のそれ以外のものは API から見えないため、コピージョブは「変更なし」と報告するか、0 件のファイルをコピーすることになります。
- **接続の問題ではありません。** RcloneView 1.6 以降では、Google Photos リモートを開いたときに、アカウントが空であるかのような表示ではなく、この制限についてアプリ内で説明されます。
- **共有アルバムには**まったくアクセスできません。
- **独自の OAuth クライアント ID が必要です。** rclone が共用している Googleフォト用クライアント ID は 2026 年中に廃止される予定です。接続できない場合は、RcloneView の接続ウィザードが作成手順を案内します。

Google が公式にサポートしている既存ライブラリのエクスポート方法は **Google Takeout** です。そのため、バックアップはここから始めます。

## ステップ 1: Google Takeout でライブラリをエクスポートする

1. [takeout.google.com](https://takeout.google.com) を開き、写真を所有しているアカウントでサインインします。
2. **すべて選択解除**をクリックし、**Googleフォト**のみにチェックを入れます。大規模なライブラリを分割してエクスポートしたい場合は、**すべてのフォトアルバムが含まれます**を使って、特定のアルバムや年に絞り込めます。
3. **配信方法**で **ドライブに追加**を選択します。Google は Google ドライブ内の `Takeout` フォルダにエクスポートを配置し、RcloneView から直接アクセスできます。Dropbox、OneDrive、Box も選択でき (RcloneView はこの 3 つすべてに対応しています)、パソコンからコピーしたい場合は**メールでダウンロードリンクを送信**も利用できます。
4. アーカイブの形式 (`.zip`) とサイズ (1 GB～50 GB) を選びます。アーカイブが大きいほど、扱うファイルの数は少なくなります。
5. **エクスポートを作成**をクリックします。準備ができると Google からメールが届きます。大規模なライブラリでは数時間、場合によっては数日かかることもあります。

始める前に知っておきたいこと:

- 写真と動画はそれぞれオリジナル画質で届き、撮影日、説明、位置情報を含む `.json` メタデータファイルが付属します。
- Google ドライブに追加されたエクスポートは、削除するまで Google のストレージ容量にカウントされます。ドライブに十分な空き容量があることを確認するか、バッチに分けてエクスポートしてください。
- Takeout は 1 回限りのエクスポートで、増分モードはありません。今後の写真を繰り返しエクスポートせずにバックアップし続ける方法は、ステップ 4 で説明します。

## ステップ 2: RcloneView に Google ドライブを追加する

1. RcloneView を開き、リモートマネージャーで **Add Remote** をクリックします。
2. **Google Drive** を選択し、[ブラウザベースの OAuth ログイン](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)を完了します。
3. [Explorer](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage) でリモートを開き、`Takeout` フォルダに移動します。各エクスポートは個別の `.zip` ファイルです (ライブラリが大きい場合は複数のファイルになります)。

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="RcloneView の Explorer で Takeout フォルダを開いた Google ドライブのリモート" class="img-large img-center" />

## ステップ 3: エクスポートをバックアップ先にコピーする

RcloneView はアーカイブをそのままコピーし、展開は行いません。そのため、コピーが完了した後、コピー先のマシンで一度だけ解凍します。

### 外付けハードドライブ

1. ドライブを接続し、そのパスを確認します (Windows では `E:\`、macOS では `/Volumes/...`、Linux では `/media/...`)。
2. [コピージョブ](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)を作成します。**ソース** = Google ドライブのリモート上の `Takeout` フォルダ、**宛先** = ドライブ上のフォルダ。
3. ジョブを実行し、ドライブ上でアーカイブを展開します。

Sync ではなく **Copy** を使用してください。Copy ジョブは宛先のデータを一切削除しません。

### Synology NAS

RcloneView はネットワーク上の [Synology NAS デバイスを検出](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)するため、設定なしで NAS が Local タブに表示されます。

1. `Takeout` フォルダをソース、NAS 上の共有フォルダ (例: `/photos/google-takeout`) を宛先としてコピージョブを作成します。
2. 実行後、NAS 上でアーカイブを展開します。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Google Takeout のコピー用に RcloneView で自動検出された Synology NAS" class="img-large img-center" />

### 別のクラウド

オフサイトにコピーを置きたい場合は、コピージョブの宛先として Amazon S3、Backblaze B2、Wasabi、OneDrive など、他のリモートを指定します。RcloneView は rclone エンジンを通じてクラウド間でデータを転送するため、アーカイブがお使いのコンピューターのストレージを経由する必要はありません。

### 検証とクリーンアップ

- [フォルダー比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)を使って、すべてのアーカイブが同じサイズで届いたことを確認します。
- 転送ログは[ジョブ履歴](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)で確認します。
- コピーを検証したら、Google ドライブから `Takeout` フォルダを削除して、使用していたストレージ容量を解放します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Takeout のエクスポートと NAS 上のコピーのフォルダー比較" class="img-large img-center" />

## ステップ 4: RcloneView Mobile で新しい写真をバックアップし続ける

Takeout は増分実行ができないため、毎月繰り返すのは現実的ではありません。これから撮影する写真については、Googleフォトを経由しないようにしましょう。

- **RcloneView Mobile** (Android および iOS) は、スマートフォンの写真と動画を、間にサーバーを挟まずに、お使いのクラウドへ直接バックアップします。デスクトップ版の RcloneView で使っているのと同じリモートを利用できます。写真のバックアップは RcloneView Plus に含まれています。[ダウンロードページ](https://rcloneview.com/src/download.html)から入手できます。
- デスクトップでは、スケジュール設定したコピージョブ (PLUS 機能。[ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)を参照) が、そのクラウドフォルダを NAS や外付けドライブにミラーリングします。毎日、毎週など、お好きな頻度で実行できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="クラウドの写真フォルダから NAS への定期コピーをスケジュール設定" class="img-large img-center" />

スマートフォン、クラウド、NAS が連携して保たれ、Googleフォトにダウンロードできる範囲を左右されることはありません。

## Google Photos リモートの今後の用途

このリモートが役に立たなくなったわけではなく、使い方が逆方向になっただけです。

- **アップロード。** NAS やコンピューターからリモートの `upload` フォルダまたはアルバムへコピージョブを実行すると、それらの写真が Googleフォトのライブラリに追加され、Googleフォトアプリ上で他のアップロードと同様に表示されます。
- **RcloneView でアップロードしたものの読み戻し。** RcloneView 経由で入れたものは、一覧表示して再びコピーで取り出せます。
- **注意点。** API 経由のダウンロードはオリジナル解像度ではなく、EXIF の位置情報も失われます。そのため、Googleフォトはアーカイブではなく便利なビューアとして扱ってください。また、独自の OAuth クライアント ID は引き続き必要です。

## はじめに

1. Google Takeout で Googleフォトのライブラリを Google ドライブにエクスポートします。
2. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** (Windows、macOS、Linux) し、Google ドライブをリモートとして追加します。
3. `Takeout` フォルダから外付けドライブ、NAS、または別のクラウドへの**コピージョブを作成**し、コピー先でアーカイブを展開します。
4. フォルダー比較でコピーを**検証**し、ドライブからエクスポートを削除します。
5. **RcloneView Mobile をインストール**して新しい写真を自分のクラウドへ直接送り、デスクトップのジョブをスケジュールして NAS にミラーリングします。

あなたの写真はかけがえのないものです。1 回のエクスポートと 1 つのスケジュールジョブで、どんなポリシー変更にも奪われないコピーを手に入れられます。

---

**関連ガイド:**

- [RcloneView で Googleフォトの同期エラーを修正する](https://rcloneview.com/support/blog/fix-google-photos-sync-errors-rcloneview)
- [ブラウザベースのログイン (OAuth) でリモートを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [リモートの参照と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [フォルダーの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NAS の自動検出と接続](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
