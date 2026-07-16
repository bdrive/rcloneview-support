---
slug: manage-ftp-server-cloud-sync-backup-rcloneview
title: "FTPサーバーストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - robin
description: "RcloneViewでFTPサーバーを接続・管理。FTPファイルをGoogle Drive、S3、Backblaze B2、90以上のクラウドストレージプロバイダーに同期・バックアップします。"
keywords:
  - FTPサーバー管理
  - FTPクラウド同期
  - FTPからクラウドへのバックアップ
  - RcloneView FTP
  - FTPファイル転送
  - FTPをGoogle Driveに同期
  - FTPからAmazon S3へ
  - FTPクラウドバックアップツール
  - FTPストレージの管理
  - FTP rclone GUI
tags:
  - RcloneView
  - ftp
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# FTPサーバーストレージを管理 — RcloneViewでファイルを同期・バックアップ

> RcloneViewはFTPサーバーを一級のリモートに変えます — Google Drive、S3、その他90以上のクラウドプロバイダーと同様に、ファイルを視覚的に閲覧・同期・バックアップできます。

FTPは今も、数え切れないほどのWebホスティング環境、レガシーなメディアアーカイブ、社内ファイル配布サーバーの基盤であり続けています。FTPファイルの管理は通常、ターミナルセッション、手動でのディレクトリ一覧表示、自作スクリプトを駆使することを意味します。RcloneViewはFTPサーバーをあらゆるクラウドストレージアカウントとまったく同じように扱い、コマンドラインに触れることなくファイルの閲覧・転送・バックアップを行える一貫したビジュアルインターフェースを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでFTPサーバーを接続する

**Remote**タブを開き、**New Remote**をクリックします。プロバイダーリストからFTPを選択し、サーバーのホスト名またはIPアドレス、ポート、ユーザー名、パスワードを入力します。サーバーがFTPS（TLS経由のFTP）に対応している場合は、詳細オプションで有効にすることで暗号化された接続を利用できます。

保存すると、FTPリモートはクラウドアカウントと並んでエクスプローラーパネルに表示されます。フォルダツリーを展開してサブディレクトリを閲覧し、ファイル名、サイズ、更新日時を確認できます — Amazon S3やDropboxで得られるのと同じ操作感です。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new FTP remote in RcloneView" class="img-large img-center" />

## FTPファイルを視覚的に閲覧・転送する

RcloneViewのマルチペインエクスプローラーは、FTP管理を効率化する要です。片方のパネルでFTPリモートを開き、もう片方でBackblaze B2バケット、Google Driveフォルダ、Amazon S3プレフィックスなどのクラウド先を開きます。ペイン間でファイルをドラッグ&ドロップすればコピーが開始されます。まとめて資産を移動する際はCtrl+ClickまたはShift+Clickで複数選択できます。右クリックで名前変更、削除、フォルダ作成、フォルダサイズの取得も可能です。

FTPサーバーでクライアントファイルを管理し、それをオブジェクトストレージにアーカイブする必要があるWeb制作会社や、FTPホストから複数のクラウドCDNプロバイダーへ資産を配信するメディアチームにとって、このサイドバイサイド表示はミスの起こりやすい手作業のワークフローに取って代わります。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from FTP remote to cloud storage in RcloneView" class="img-large img-center" />

## FTPとクラウドストレージ間で同期ジョブを作成する

繰り返し行うワークフローには、RcloneViewの**Job Manager**を使ってFTPサーバーと任意のクラウド先の間で同期またはコピージョブを設定できます。4ステップのウィザードでは、転送元・転送先の選択、詳細設定（同時転送数、チェックサム検証）、フィルタルール（ファイルタイプ、サイズ上限、経過日数のしきい値）を設定します。

まず**Dry Run**（ドライラン）を実行してください — 実際の変更を加えることなく、コピーまたは削除される全ファイルをプレビューできます。ディレクトリ構造が複雑になりがちなFTPソースや、意図しない上書きが問題を引き起こしかねない場合に特に有用です。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing a sync job from FTP to cloud storage in RcloneView" class="img-large img-center" />

各実行後、**Job History**タブには実行時間、転送速度、ファイル数、最終ステータスが表示され、何がいつ移動したかを明確に追跡できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing FTP to cloud backup results in RcloneView" class="img-large img-center" />

**PLUSライセンス**があれば、FTP同期ジョブにcron形式のスケジュールを設定できます — セッションを開いたままにすることなく、新しいアップロードを毎晩バックアップしたり、週次でクラウドストレージに同期したりできます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote** > **New Remote**を開き、プロバイダーリストからFTPを選択します。
3. サーバーのホスト、ポート、ユーザー名、パスワードを入力し、リモートを保存します。
4. 片方のパネルでFTPリモートを開き、もう片方でクラウド先を開きます。
5. **Job Manager**を使って同期ジョブを設定し、最初の実転送の前にDry Runを実行します。

FTPサーバーをRcloneViewに接続すれば、もう二度と同期スクリプトを書く必要はありません — すべての転送が単一のインターフェースから追跡・再現・監査可能になります。

---

**関連ガイド:**

- [SFTPサーバーストレージを管理 — RcloneViewでクラウド同期](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [RcloneViewでFTPサーバーをクラウドストレージに移行](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [WebDAVサーバーを接続してRcloneViewでクラウド同期](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)

<CloudSupportGrid />
