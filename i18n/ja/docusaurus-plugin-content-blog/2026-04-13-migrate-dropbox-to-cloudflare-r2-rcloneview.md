---
slug: migrate-dropbox-to-cloudflare-r2-rcloneview
title: "Dropbox から Cloudflare R2 への移行 — RcloneView でファイルを転送"
authors:
  - tayson
description: "RcloneView を使って Dropbox から Cloudflare R2 にファイルを移行します。OAuth と API トークンで接続し、大容量ファイルを処理しながら、R2 のゼロエグレス料金を活用しましょう。"
keywords:
  - migrate Dropbox to Cloudflare R2
  - Dropbox R2 transfer RcloneView
  - Dropbox to R2 migration
  - Cloudflare R2 cloud sync
  - zero egress cloud storage
  - cloud-to-cloud migration tool
  - Dropbox alternative R2
  - RcloneView migration guide
tags:
  - RcloneView
  - dropbox
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox から Cloudflare R2 への移行 — RcloneView でファイルを転送

> Cloudflare R2 はゼロエグレス料金の S3 互換オブジェクトストレージを提供しており、RcloneView を使えばクラウド間同期ジョブによって Dropbox からの移行を簡単に行えます。

Cloudflare R2 は、Dropbox から移行するチームにとって魅力的な選択肢となっています。エグレス料金がなく、S3 互換 API をサポートしているため、開発者のワークフロー、静的アセットのパイプライン、コストを重視したアーカイブ戦略に自然に組み込むことができます。既存の Dropbox ファイルを R2 に移すのは一度限りのクラウド間移行であり、RcloneView はローカルマシンを経由せずにこれを処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ステップ1 — Dropbox に接続する

RcloneView を開き、**リモートマネージャー**に移動します。**新規リモート**をクリックし、**Dropbox** を選択します。ほとんどの OAuth プロバイダーと同様に、Dropbox はブラウザを開いて認証を求めます。ログインして「許可」をクリックしてください。RcloneView はトークンを保存し、リモートがすぐに表示されます。ファイルエクスプローラーで開き、Dropbox のファイルとフォルダーが表示されることを確認します。

Dropbox Business アカウントをお持ちの場合は、移行したいコンテンツを所有しているアカウントでログインしていることを確認してください。他のユーザーが所有する共有フォルダーにはアクセス制限がある場合があります。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Dropbox and Cloudflare R2 in RcloneView Remote Manager" class="img-large img-center" />

## ステップ2 — Cloudflare R2 に接続する

**リモートマネージャー**で**新規リモート**をクリックし、**S3 Compatible** を選択します。Cloudflare R2 は S3 互換の認証情報を使用します。

- **アクセスキー ID**: Cloudflare R2 API トークンから取得します（Cloudflare ダッシュボードの R2 > Manage API Tokens で作成できます）
- **シークレットアクセスキー**: 対応するシークレット
- **エンドポイント**: `https://{account-id}.r2.cloudflarestorage.com`

アカウント ID は Cloudflare ダッシュボードのサイドバーに表示されます。リモートを保存して開き、R2 バケットが表示されることを確認してください。移行先のバケットが存在しない場合は作成します。

## ステップ3 — 移行ジョブを設定する

**ジョブ**に移動し、**新規ジョブ**をクリックします。Dropbox をソースとして設定します。ルートを選択してすべてを移行することも、特定のフォルダーを選択することもできます。Cloudflare R2 を移行先として設定し、対象のバケットを指定します。

ジョブウィザードのステップ2では、移行のためのオプションを設定します。

- 最初は**ドライラン**を有効にしてファイルリストをプレビューします
- Dropbox の移行では**転送数**を 4〜6 に設定します（値が高すぎると Dropbox のレート制限がかかる場合があります）
- **チェックサム検証**を有効にして、大容量ファイルが破損なく転送されたことを確認します

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from Dropbox to Cloudflare R2 cloud-to-cloud" class="img-large img-center" />

## 大容量ファイルの処理

Cloudflare R2 は最大 5 TB のオブジェクトをサポートしており、RcloneView は大容量ファイルに対して自動的にマルチパートアップロードを使用します。Dropbox のファイルサイズの上限は 1 ファイルあたり 2 TB です。実際には、ほとんどの Dropbox 移行ではファイルはこの制限を十分に下回ります。非常に大きなファイルがあり転送が失敗する場合は、ログタブで具体的なエラーメッセージを確認し、同時転送数を減らすことを検討してください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer progress during Dropbox to R2 migration" class="img-large img-center" />

## ステップ4 — 確認と完了

主な移行ジョブが完了したら、**フォルダー比較**を使って確認します。Dropbox のソースと R2 の移行先を並べて開き、RcloneView に相違点を検出させます。不足しているファイルがあればジョブを再実行してください。移行が完了したことを確認できたら、アプリケーションを R2 を参照するように更新し、Dropbox へのアクセスを段階的に終了できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. **リモートマネージャー**で OAuth を使って Dropbox に接続します。
3. API トークン、シークレット、アカウント ID エンドポイントを使って Cloudflare R2 に接続します。
4. 移行ジョブを作成し、ドライランでプレビューしてから、フルの転送を実行します。

Cloudflare R2 への切り替えにより、Dropbox のユーザー単位の料金モデルがなくなり、Cloudflare のネットワークからアクセスされるコンテンツのエグレス料金も不要になります。

---

**関連ガイド:**

- [RcloneView で Wasabi から Cloudflare R2 へ移行する](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [RcloneView で Azure Blob から Cloudflare R2 へ移行する](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [RcloneView で Dropbox のレート制限 API エラーを解決する](https://rcloneview.com/support/blog/fix-dropbox-rate-limit-api-errors-rcloneview)

<CloudSupportGrid />
