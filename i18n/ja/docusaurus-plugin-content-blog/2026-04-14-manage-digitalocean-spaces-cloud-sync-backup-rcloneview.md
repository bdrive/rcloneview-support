---
slug: manage-digitalocean-spaces-cloud-sync-backup-rcloneview
title: "DigitalOcean Spacesを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "DigitalOcean SpacesをRcloneViewに接続し、GUIでオブジェクトストレージを管理。CLIコマンドを使わずにリージョンを越えてファイルを同期、バックアップ、転送できます。"
keywords:
  - DigitalOcean Spaces RcloneView
  - DigitalOcean Spaces sync
  - DigitalOcean Spaces backup
  - S3-compatible object storage GUI
  - DigitalOcean Spaces management
  - rclone DigitalOcean Spaces
  - cloud object storage sync
  - DigitalOcean backup tool
tags:
  - digitalocean-spaces
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DigitalOcean Spacesを管理 — RcloneViewでファイルを同期・バックアップ

> RcloneViewはS3互換APIを介してDigitalOcean Spacesに接続し、任意のリージョンのオブジェクトストレージバケットをビジュアルなファイルマネージャーで扱えるようにします。

DigitalOcean Spacesは、フラットな料金体系と組み込みCDNを備えた開発者フレンドリーなオブジェクトストレージサービスです。DigitalOcean Dropletsでワークロードを運用しているチームは、バックアップ、静的アセット、デプロイ成果物をSpacesに保存することがよくあります。RcloneViewはrcloneのS3互換バックエンドの上にグラフィカルなレイヤーを追加し、CLIに触れることなくバケットを視覚的に閲覧し、スケジュール同期を実行し、ローカルディレクトリとリモートストレージを比較できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでDigitalOcean Spacesを設定する

DigitalOcean SpacesはS3互換APIを使用しているため、RcloneViewではS3リモートとして設定します。**Remoteタブ → New Remote → Amazon S3 Compatible**に移動し、プロバイダーとして**DigitalOcean Spaces**を選択します。以下が必要です。

- **Access Key ID** — DigitalOceanコントロールパネルのAPI → Spaces Keysで生成
- **Secret Access Key** — 生成時に一度だけ表示されます
- **Endpoint** — リージョン固有のもの、例: `nyc3.digitaloceanspaces.com`

保存すると、Spacesのバケットが即座にExplorerパネルに表示されます。バケットの内容を閲覧したり、ローカルフォルダからドラッグ＆ドロップでファイルをアップロードしたり、パネルを並べてDropletのバックアップディレクトリとSpacesバケットを比較したりできます。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring DigitalOcean Spaces as an S3 remote in RcloneView" class="img-large img-center" />

## ローカルサーバーをDigitalOcean Spacesに同期する

典型的なユースケースとして、開発チームがCIサーバーでビルド成果物を生成し、それを毎晩Spacesに送って長期保存したいという場合があります。RcloneViewのJob Managerを使い、ローカルの成果物ディレクトリから`do-spaces:artifacts-bucket/builds`へのSyncジョブを作成します。スケジュールを午前3:00に設定し、チェックサム検証を有効にして、500MBを超える一時ファイルを除外するmax-file-sizeフィルターを追加します。

1:N同期オプションを使うと、同じ成果物ディレクトリをDigitalOcean SpacesとAmazon S3の両方に同時にミラーリングできます。マルチリージョン冗長性を維持するチームや、ストレージプロバイダー間を移行中のチームに便利です。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a DigitalOcean Spaces sync job in real time" class="img-large img-center" />

## リージョン間・プロバイダー間の転送

Spacesのリージョン間（例: `nyc3`から`sfo3`へ）でデータを移動したい場合や、別のS3互換プロバイダーへ完全に移行したい場合、RcloneViewはこれを直接的なクラウド間転送として処理します。Explorerパネルを2つ開き、片方をソースのSpacesバケットに、もう片方を転送先に設定し、ドラッグ＆ドロップするか同期ウィザードを使用します。

大規模な移行の場合、同期ウィザードのステップ2で**Number of file transfers**を8〜16に設定するとスループットを最大化できます。RcloneViewのリアルタイム転送モニターはファイルごとの進行状況と全体の速度を表示するため、大規模データセットの完了時間を見積もることができます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between DigitalOcean Spaces and Amazon S3 in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. DigitalOceanコントロールパネルでSpacesのアクセスキーを生成します。
3. RcloneViewで、Spacesの認証情報とエンドポイントを使って新しいS3リモートを作成します。
4. Job ManagerでSpacesバケットを対象としたSyncジョブを作成し、スケジュールを設定します。

DigitalOcean Spacesは、フルマネージドでスケジュール管理されたバックアップ先になります — リアルタイムモニタリングとジョブ履歴がすべて1つのインターフェースにまとまっています。

---

**関連ガイド:**

- [RcloneViewでGoogle DriveをDigitalOcean Spacesに移行する](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)
- [RcloneViewでDigitalOcean Spacesをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [RcloneViewでS3、Wasabi、R2を一元管理する](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
