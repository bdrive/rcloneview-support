---
slug: migrate-aws-s3-to-google-drive-rcloneview
title: "AWS S3からGoogle Driveへの移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewのGUIを使ってAWS S3バケットからGoogle Driveへファイルを移動します。S3からGoogle Driveへの移行にCLIは不要 — 簡単に転送・検証・スケジュール設定ができます。"
keywords:
  - migrate AWS S3 to Google Drive
  - S3 to Google Drive transfer
  - AWS S3 Google Drive migration
  - rclone S3 to Google Drive
  - cloud-to-cloud migration tool
  - move S3 files to Google Drive
  - object storage to Google Drive
  - RcloneView S3 migration
tags:
  - amazon-s3
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# AWS S3からGoogle Driveへの移行 — RcloneViewでファイルを転送

> RcloneViewはS3からGoogle Driveへの移行を直接的なクラウド間転送として処理します — ローカルへのダウンロードは不要で、リアルタイムの進捗表示とチェックサム検証が可能です。

AWS S3からGoogle Driveへの移行は、チームがインフラ重視のストレージからコラボレーション重視のプラットフォームへ移行する際によくあるシナリオです。スタートアップが数年分のS3アプリケーションログやアセットをGoogle Driveにアーカイブし、チーム横断でのアクセスを容易にすることもあります。小規模な代理店が、プロジェクトごとのS3バケットに分かれたクライアント納品物を共有のGoogle Driveに統合することもあります。RcloneViewはこの移行を視覚的かつ監査可能なものにし、ローカルマシンにファイルをステージングすることなくサーバー側で転送を処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを設定する

移行前に、両方のクラウドプロバイダーをRcloneViewに追加します。AWS S3の場合は、**Remoteタブ → New Remote → Amazon S3**に進み、アクセスキーID、シークレットアクセスキーを入力し、バケットのリージョンを選択します。Google Driveの場合は、OAuthブラウザログインを使って別のリモートを追加します — RcloneViewがGoogleの認証ページを開き、トークンを自動的に保存します。

両方のリモートを設定したら、Explorerを2パネルレイアウトで開きます。左パネルにはS3バケット、右パネルには移行先のGoogle Driveフォルダーが表示されます。この並列表示は、移行を開始する前にフォルダー構造を確認するのに最適です。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring AWS S3 and Google Drive remotes in RcloneView" class="img-large img-center" />

## 同期ウィザードで移行を実行する

大規模な移行では、手動のドラッグ＆ドロップではなくSync Jobウィザードを使用します。**Job Manager → Add Job**で、ソースをS3バケットのパス（例: `mybucket/exports/`）に設定し、移行先をGoogle Driveのフォルダーに設定します。ステップ2では、帯域幅に応じて同時転送数を8〜12に設定し、チェックサム検証を有効にして転送後に各ファイルの整合性を確認します。

まず**Dry Run**を実行してください。RcloneViewは実際には何も転送せずに、コピーされるすべてのファイルをリスト表示します。数百GBにわたる5万ファイルのバケットの場合、このプレビューによって数時間の転送時間をかける前に対象範囲を確認できます。ファイルリストが正しければ、実際の同期を実行します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="S3 to Google Drive cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## ファイルタイプの違いとフィルターの扱い

S3バケットには、`.log`ファイル、一時アップロード、ゼロバイトのマーカーオブジェクトなど、Google Driveに移す必要のない機械生成ファイルが含まれていることがよくあります。ステップ3のフィルタリングを使って不要な拡張子を除外しましょう — カスタム除外フィルターに`.log`、`.tmp`、`.part`を追加します。また、最終更新日から90日以内に変更されたファイルのみを移行するように最大ファイル経過日数フィルターを設定することもでき、アクティブに使用されているユースケースでの転送範囲を絞り込めます。

Google Driveにはファイル命名に関するいくつかの癖があります。S3オブジェクトキー内の`?`、`*`、`:`のような文字は、rcloneによって自動的に変換されます。RcloneViewはLogタブにエンコーディングエラーを表示するため、名前変更が必要になったオブジェクトを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing the S3 to Google Drive migration job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. New Remoteウィザードで、アクセスキー＋シークレット＋リージョンを使ってAWS S3リモートを追加します。
3. OAuthブラウザ認証でGoogle Driveリモートを追加します。
4. Job ManagerでSyncジョブを作成し、Dry Runでプレビューしてから移行を実行します。

RcloneViewを使えば、S3からGoogle Driveへの移行を完全な可視性を持って実行できます — CLIスクリプトも、ステージングコストも不要で、記録用の完全なジョブ履歴も残ります。

---

**関連ガイド:**

- [RcloneViewでGoogle DriveからAWS S3へ移行する](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [増分バックアップ: Google DriveからAmazon S3へ](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [RcloneViewによるチェックサム検証付きクラウド移行](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
