---
slug: migrate-google-drive-to-storj-rcloneview
title: "Google DriveからStorjへ移行 — RcloneViewでファイルを転送"
authors:
  - jay
description: "RcloneViewを使ってGoogle DriveのファイルをStorjの分散型ストレージへ移行する方法を解説。クラウド間転送のステップバイステップガイドです。"
keywords:
  - migrate Google Drive to Storj
  - Google Drive to Storj migration
  - Storj decentralized cloud storage
  - RcloneView cloud migration
  - move files from Google Drive to Storj
  - cloud-to-cloud transfer RcloneView
  - Storj S3-compatible GUI
  - Google Drive migration tool
  - decentralized cloud backup RcloneView
tags:
  - google-drive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveからStorjへ移行 — RcloneViewでファイルを転送

> コマンドを一切書かずに、Google Drive全体をStorjの分散型・エンドツーエンド暗号化ストレージへ移行できます。

Google Driveに機密性の高いプロジェクトファイルを保存しているチームは、より強固なデータ主権、低いエグレスコスト、あるいはツールチェーン向けのS3互換アクセスを求める段階に到達することがよくあります。Storjはファイルのチャンクを世界中の独立したノードに分散させ、設計上エンドツーエンドの暗号化と地理的な冗長性を実現します。RcloneViewはこの移行をシンプルにします。ブラウザ認証による設定で両方のリモートを接続し、コピージョブを実行するだけで、ローカルマシンを経由してGoogle DriveからStorjへファイルを転送できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google DriveとStorjをリモートとして接続する

転送を始める前に、両方のクラウドアカウントをRcloneViewにリモートとして登録する必要があります。Google DriveはOAuthによるブラウザ認証を使用します。Remoteタブを開き、**New Remote**をクリックしてGoogle Driveを選択すると、RcloneViewが接続を承認するためのブラウザウィンドウを起動します。APIキーや認証情報を手動で管理する必要はありません。

StorjはS3互換アクセスを使用します。RcloneViewのNew Remoteウィザードで**S3**プロバイダータイプを選択し、S3プロバイダーとしてStorjを選びます。StorjのAccess Key ID、Secret Access Key、およびStorjのS3ゲートウェイエンドポイントを入力してください。保存すると、リモートがエクスプローラーパネルに表示され、Storjバケットをおなじみのファイルブラウザ形式で確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Storj as remotes in RcloneView" class="img-large img-center" />

両方のリモートを登録すると、RcloneViewのデュアルパネルエクスプローラーで並べて開くことができます。左パネル（Google Drive）から右パネル（Storj）へフォルダをドラッグすれば手早い単発コピーが可能で、より大規模な移行には管理されたジョブを設定できます。

## 移行ジョブを設定する

300GBの資産を持つデザイン会社や、長年蓄積された共有ドキュメントを持つ研究チームなど、Google Drive全体を移行する場合はJobを使うのが適切なアプローチです。Homeタブで**Job Manager**をクリックし、**Add Job**を選択します。ソースにGoogle Driveのリモートとフォルダを設定し、宛先にStorjバケットを設定します。ジョブタイプには**Copy**を選択し、Google Driveの元ファイルを削除せずにすべてのソースファイルを転送します。

ステップ2（Advanced Settings）では、接続環境に応じて同時ファイル転送数を設定します。デフォルトのマルチスレッド転送数4は、ほとんどのインターネット接続でうまく機能します。ファイルの整合性を確認するために**checksum**検証を有効にしてください。RcloneViewは各転送後にチェックサムを比較し、転送中に発生した破損を検出します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Google Drive to Storj copy job in RcloneView" class="img-large img-center" />

ステップ3では、特定のファイルタイプのみを移行したい場合にフィルタリングルールを追加できます。例えば`.tmp`の作業ファイルを除外したり、一定の経過時間未満のファイルのみに転送を限定したりできます。これは、稼働中のワークスペースを移行する際に、一部の一時ファイルを新しいストレージプロバイダーへ持ち込みたくない場合に特に便利です。

## 転送を監視・検証する

**Run**をクリックすると、RcloneView下部のTransferringタブに転送速度、ファイル数、移動した総サイズなどのライブ進捗が表示されます。大規模な移行の場合、別のリモートに移動してもRcloneViewはバックグラウンドでジョブを継続します。転送が中断された場合でも、ステップ2でリトライ回数を設定しておけば、中断した箇所から再開されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Google Drive to Storj migration job in RcloneView" class="img-large img-center" />

ジョブが完了したら、RcloneViewの**Folder Compare**機能（Homeタブ > Compare）を使って両側が一致していることを確認します。左パネルをGoogle Driveのソースに、右パネルをStorjの宛先に設定します。Folder Compareは、片方にしか存在しないファイルやサイズが異なるファイルを表示するため、Google Driveのワークスペースを縮小し始める前に明確な監査記録を得られます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Drive to Storj migration" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote tab > New Remote**からGoogle Driveのリモートを追加し、OAuthによるブラウザログインを完了します。
3. S3プロバイダータイプを使用して、StorjのAccess Key、Secret Key、ゲートウェイエンドポイントとともにStorjのリモートを追加します。
4. **Job Manager**を開き、Google DriveフォルダからStorjバケットへのCopyジョブを作成し、ステップ2でchecksumを有効にしてRunをクリックします。

Storjのアーキテクチャは、デフォルトでファイルに地理的分散とエンドツーエンドの暗号化をもたらします。RcloneViewを使えば、そのゴールへの到達はスクリプトを書く数時間ではなく、数分で済みます。

---

**関連ガイド:**

- [RcloneViewでDropboxからStorjへ移行](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [RcloneViewでOneDriveからStorjへ移行](https://rcloneview.com/support/blog/migrate-onedrive-to-storj-rcloneview)
- [Storjクラウドストレージの管理 — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
