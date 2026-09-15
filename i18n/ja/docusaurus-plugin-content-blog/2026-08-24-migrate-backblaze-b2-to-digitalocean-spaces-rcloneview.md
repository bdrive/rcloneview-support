---
slug: migrate-backblaze-b2-to-digitalocean-spaces-rcloneview
title: "Backblaze B2 から DigitalOcean Spaces への移行 — RcloneView でファイルを転送する"
authors:
  - kai
description: "チェックサム検証付き転送、フィルター、ドライラン プレビューを使い、RcloneView で Backblaze B2 から DigitalOcean Spaces へファイルを移行する方法です。"
keywords:
  - Backblaze B2 から DigitalOcean Spaces への移行
  - Backblaze から DigitalOcean への転送
  - RcloneView オブジェクトストレージ移行
  - B2 から Spaces への移行
  - S3互換クラウド移行
  - DigitalOcean Spaces のセットアップ
  - Backblaze B2 から Spaces へ
  - クラウドストレージプロバイダーの切り替え
tags:
  - RcloneView
  - backblaze-b2
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 から DigitalOcean Spaces への移行 — RcloneView でファイルを転送する

> 2つの S3互換プロバイダー間でオブジェクトストレージを移動するのに、rclone コマンドを手作業でスクリプト化する必要はありません — RcloneView が GUI を通じて転送、検証、フィルタリングを処理します。

Backblaze B2 から DigitalOcean Spaces へ切り替えるチームは、多くの場合、既存の Droplet や App Platform サービスとインフラを1つのプロバイダーに統合するために移行します。両方とも S3互換リモートであるため、RcloneView は Access Key、Secret Key、エンドポイントだけでそれぞれに接続し、ローカルディスクを経由せずに両者間で直接データを転送できます。数百ギガバイトに及ぶアプリケーションバックアップやメディア資産が入ったバケットの場合、この直接的なクラウド間経路は、ダウンロードしてからアップロードするワークフローに比べて大幅な時間短縮になります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを設定する

B2 ダッシュボードの Application Key ID と Application Key を使って Backblaze B2 リモートを追加し、次に独自の Access Key、Secret Key、リージョンエンドポイント(例: `nyc3.digitaloceanspaces.com`)で DigitalOcean Spaces 用の別のリモートを追加します。どちらも RcloneView の Explorer パネルにタブとして表示されるため、移行を開始する前にソースバケットと転送先の Space を並べて確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

分割パネルレイアウトを使って両方のバケットを同時に確認し、フルマイグレーションを実行する前に、フォルダ構造と命名規則がアプリケーションの想定に一致しているかを確かめてください。

## チェックサム検証付き転送を実行する

移行はウィザードの Step 2 でチェックサム比較を有効にした Copy または Sync ジョブとして設定してください — これはタイムスタンプだけでなくハッシュとサイズでファイルを比較するため、異なるストレージバックエンド間で更新日時の報告が異なる場合に重要です。帯域幅に応じてファイル転送数とマルチスレッド転送数を設定してください。大規模なバケットでは、4並列転送が妥当な出発点です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a checksum-verified transfer from Backblaze B2 to DigitalOcean Spaces" class="img-large img-center" />

フルマイグレーションを実行する前に、Dry Run を使ってコピーされるファイルを正確にプレビューしてください — これにより、データが移動する前に名前の競合や予期しないファイル数を発見できます。S3、Azure、Backblaze B2 は FREE ライセンスでも完全な読み書きアクセスが可能なため、この移行パスを妨げるプラン制限はありません。

## 切り替えのスケジューリング

段階的な移行では、最終的な切り替えの前に Backblaze B2 に追加されたファイルを取り込む予定の増分同期(PLUS ライセンス)を、初回のフル同期の後に実行してください。これにより、1回の大規模でリスクの高い転送を行う代わりに、移行期間中両方のバケットを同期状態に保つことができます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync jobs during a Backblaze B2 to DigitalOcean Spaces migration" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**してください。
2. Backblaze B2 バケットと DigitalOcean Spaces の転送先の両方にリモートを追加します。
3. Dry Run を実行し、ファイルをコピーする前に転送内容をプレビューします。
4. チェックサム検証を有効にして Copy または Sync ジョブを実行し、両側のファイル数が一致することを確認します。

検証済みの直接クラウド間移行により、ローカルマシンを経由せずにデータが無傷のまま DigitalOcean Spaces に届きます。

---

**関連ガイド:**

- [Backblaze B2 ストレージを管理する — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Backblaze B2 から AWS S3 への移行 — RcloneView でファイルを転送する](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [RcloneView で Google Drive を DigitalOcean Spaces に移行する](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)

<CloudSupportGrid />
