---
slug: manage-linode-object-storage-cloud-sync-backup-rcloneview
title: "Linode Object Storageを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "Linode Object StorageをRcloneViewに接続し、GUIでS3互換バケットを管理しましょう。CLIコマンドを使わずにリージョン間でファイルの同期、バックアップ、転送ができます。"
keywords:
  - Linode Object Storage RcloneView
  - Linode cloud storage sync
  - Linode backup GUI
  - Akamai cloud storage management
  - rclone Linode Object Storage
  - Linode S3-compatible storage
  - Linode file transfer tool
  - Linode cloud backup automation
tags:
  - linode
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Linode Object Storageを管理する — RcloneViewでファイルを同期・バックアップ

> RcloneViewはS3互換APIを通じてLinode Object Storageに接続し、開発者やDevOpsチームがCLIに触れることなくLinodeバケットをビジュアルに管理できるファイルマネージャーを提供します。

Linode Object Storage（現在はAkamai Cloudの一部）は、LinodeのコンピュートプラットフォームとしっかりStorage統合されたS3互換のオブジェクトストレージサービスです。Linode Linodes上でアプリケーションを運用しているチームは、静的アセット、データベースバックアップ、デプロイ用アーティファクトをObject Storageに保存することがよくあります。RcloneViewのS3バックエンドはシームレスに接続し、バケットの閲覧、スケジュール同期の実行、Linodeリージョン間や他のプロバイダーへのデータ移行をビジュアルなインターフェースで行えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Linode Object StorageをRcloneViewに接続する

Linode Object StorageはS3互換APIを使用します。RcloneViewでは、**リモートタブ → 新規リモート → Amazon S3 Compatible**に移動し、**Other**を選択するか、以下の情報で手動設定します。

- **アクセスキー** — Linode Cloud ManagerのObject Storage → Access Keysで生成
- **シークレットキー** — 作成時に一度だけ表示
- **エンドポイント** — リージョンごとに異なり、例えば`us-east-1.linodeobjects.com`や`eu-central-1.linodeobjects.com`

保存すると、LinodeバケットがExplorerパネルに表示されます。オブジェクトの閲覧、ドラッグ&ドロップによるファイルのアップロード、選択したオブジェクトのローカルストレージへのダウンロード、右クリックメニューによる標準的なファイル操作が可能です。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Linode Object Storage as an S3 remote in RcloneView" class="img-large img-center" />

## スケジュールジョブでLinodeバックアップを自動化する

よくあるワークフローとして、Linodeサーバーはアプリケーションログ、データベースダンプ、ユーザーアップロードファイルを生成し、これらを定期的にセカンダリロケーションへバックアップする必要があります。RcloneViewのJob Managerを使用して、LinodeのObject StorageバケットからBackblaze B2やAmazon S3への同期ジョブをスケジュールし、プロバイダー間の冗長性を確保しましょう。

同期を毎日午前4時に実行するよう設定し、同時転送数を8に設定してスループットを最大化します。チェックサム検証を有効にすることで、プロバイダー間でのデータの整合性を確認できます。Job Historyタブには、ステータス、ファイル数、転送サイズ、所要時間とともにすべての実行履歴が記録されます。規制対象の環境でバックアップのコンプライアンスを証明する際に役立ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Linode Object Storage backup jobs in RcloneView" class="img-large img-center" />

## リージョン間・プロバイダー間の転送

Linode Object Storageは複数のリージョン（US、EU、JP、AU）で利用可能です。地理的な冗長性のために`us-east-1`から`eu-central-1`へバケットを複製する必要がある場合は、RcloneViewで2つのLinodeリモート（各リージョンにつき1つ）を設定し、それらの間で同期ジョブを作成します。これは完全にクラウド間の転送であり、ローカルへのステージングは不要です。RcloneViewはサポートされている場合、rcloneのサーバーサイドコピー機構を通じてこれを処理します。

Linode Object Storageから他のプロバイダーへの完全な移行（例えば、ゼロエグレスコストのCloudflare R2への移行）についても、同様のアプローチが適用されます。両方をリモートとして追加し、一度限りの同期ジョブを作成してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cross-region Linode Object Storage transfer in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Linode Cloud ManagerでObject Storageのアクセスキーを生成します。
3. Linodeの認証情報とエンドポイントを使用して、RcloneViewに新しいS3互換リモートを追加します。
4. Job Managerで同期ジョブを作成し、お好みのセカンダリストレージへのバックアップを自動化します。

RcloneViewを通じて管理されるLinode Object Storageは、スケジュールされたバックアップ、リージョン間レプリケーション、完全な監査証跡を備えた、クラウドインフラストラクチャのしっかりと監視されたコンポーネントになります。

---

**関連ガイド:**

- [RcloneViewでLinode Object StorageをS3とGoogle Driveに同期する](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)
- [RcloneViewでCloudflare R2のクラウド同期を管理する](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [RcloneViewでS3、Wasabi、R2を一元管理する](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
