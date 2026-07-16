---
slug: manage-dreamhost-object-storage-rcloneview
title: "DreamHost DreamObjectsを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - robin
description: "DreamHost DreamObjectsをRcloneViewに接続して、CLIコマンドを一切書かずにS3互換バケットの視覚的な管理、ファイル同期、自動バックアップを実現します。"
keywords:
  - DreamHost DreamObjects
  - DreamObjects S3 storage
  - DreamHost cloud backup
  - S3 compatible storage management
  - sync files to DreamObjects
  - DreamHost object storage RcloneView
  - cloud backup web developers
  - S3 cloud storage GUI
  - DreamHost file sync
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DreamHost DreamObjectsを管理する — RcloneViewでファイルを同期・バックアップ

> DreamHost DreamObjectsはコストパフォーマンスに優れたS3互換オブジェクトストレージです。RcloneViewを使えば、コマンドラインに触れることなく、バケットの閲覧、ファイルの同期、バックアップのスケジュール設定を視覚的に行えます。

DreamHost DreamObjectsは、DreamHostでホスティングされているWebサイトと自然に組み合わせて使えます。S3互換APIの背後にある冗長化されたハードウェア上に、バックアップ、メディアアセット、静的ファイルを保存します。すでにDreamHostでホスティングしているチームは、DreamObjectsをRcloneViewに接続し、2ペインのファイルエクスプローラーからすべてを管理することで、その投資を構造化されたクラウドバックアップへと拡張できます。FREEライセンスでもS3、Azure、Backblaze B2に完全な読み書きアクセスで接続でき、DreamObjectsも例外ではありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## DreamObjectsに専用ワークフローが必要な理由

数十件のクライアントプロジェクトを管理するWeb制作会社では、アップロードされたメディア、データベースのエクスポート、ビルド成果物が積み重なり、定期的なオフサイトコピーが必要になります。DreamObjectsは、ホスティングについて何も知らないプロバイダーの別のクラウドアカウントを用意することなく、そのオフサイト先を提供します。夜間エクスポートを本番サイトと並行してDreamObjectsに保存しておけば、移行や誤削除が発生した際も、複数ベンダーを慌てて渡り歩くことなく、同じプロバイダーとの関係の中でリカバリーが完結します。

DreamObjectsはS3互換であるため、RcloneViewはAmazon S3、Cloudflare R2、Wasabi、その他多数のオブジェクトストレージで使用しているのと同じS3リモートタイプを使って接続します。以前にS3形式のリモートを設定したことがあれば、DreamObjectsのセットアップ手順はすぐに見覚えのあるものに感じられるでしょう。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new DreamHost DreamObjects S3 remote in RcloneView using Access Key and endpoint credentials" class="img-large img-center" />

## DreamObjectsをRcloneViewに接続する

RcloneViewを開き、**Remote**タブに移動して、**New Remote**をクリックします。**S3**リモートタイプを選択し、DreamHostパネルからDreamObjectsのアクセスキーID、シークレットアクセスキー、バケットエンドポイントURLを入力します。保存すると、新しいリモートがRemote Managerに表示され、Explorer内のパネルとしてすぐに利用できるようになります。

Explorerから DreamObjects を閲覧する感覚は、ローカルドライブを操作するのとほぼ同じです。ファイル名、サイズ、更新日時がすべて表示されます。フォルダの作成、ローカルパネルからのドラッグによるファイルのアップロード、右クリックによるオブジェクトの削除、共有が必要なオブジェクトの公開リンク生成が可能です。ファイルの確認や移動のたびにDreamHostのWebパネルにログインする必要はありません。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from a local folder into a DreamObjects bucket using RcloneView drag-and-drop upload" class="img-large img-center" />

## DreamObjectsへの同期とバックアップ

定期的なバックアップには、**Home**タブのウィザードからSyncジョブを作成します。ソースとしてローカルのプロジェクトフォルダまたは別のクラウドリモートを選択し、宛先としてDreamObjectsのバケットパスを指定します。実行前に**Dry Run**を有効にして、転送されるすべてのファイルをプレビューしましょう。特に大規模なメディアライブラリを初めて同期する際に有用で、データを一切移動させることなく、サイズが大きすぎるファイルや命名の問題をプレビューの段階で検出できます。

内容に問題がなければ、ジョブをJob Managerに保存し、任意のタイミングで実行します。PLUSライセンスのユーザーは、cron形式のスケジュールを設定して、DreamObjectsへのバックアップを毎晩自動実行することもできます。**Job History**タブは、ファイル数、転送速度、合計サイズ、最終ステータスとともに実行のたびに記録を残し、クライアント向けの報告やコンプライアンス確認に役立つ監査証跡を提供します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to a DreamHost DreamObjects bucket from the RcloneView Job Manager" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history tab in RcloneView showing completed DreamObjects backup transfer records" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote** > **New Remote**に移動し、**S3**を選択して、DreamHostパネルからDreamObjectsのアクセスキー、シークレットキー、エンドポイントを入力します。
3. Explorerパネルで新しいリモートを開き、ファイルをドラッグして直接アップロードします。
4. **Home**タブでSyncジョブを作成し、まずDry Runを実行してから本実行し、**Job History**で結果を確認します。

DreamObjectsへの継続的なバックアップは、CLIの専門知識や別途の監視体制を必要とすることなく、誤削除、ホスティングの移行、データ損失からWebプロジェクトを保護します。

---

**関連ガイド:**

- [RcloneViewでCloudflare R2クラウド同期を管理する](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Amazon S3を管理する — RcloneViewによるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [RcloneViewでWasabiクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
