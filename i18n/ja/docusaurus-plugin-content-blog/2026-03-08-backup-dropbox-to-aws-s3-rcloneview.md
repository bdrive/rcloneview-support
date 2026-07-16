---
slug: backup-dropbox-to-aws-s3-rcloneview
title: "DropboxをAWS S3にバックアップする方法 — RcloneViewによる自動クラウド間バックアップ"
authors:
  - tayson
description: "DropboxのファイルをAWS S3にバックアップして保護しましょう。RcloneViewを使って、スケジューリングと検証を備えた自動クラウド間バックアップを設定します。"
keywords:
  - backup dropbox to s3
  - dropbox aws s3 sync
  - dropbox cloud backup
  - dropbox to s3 transfer
  - cloud to cloud backup dropbox
  - dropbox backup solution
  - dropbox data protection
  - sync dropbox aws
  - automated dropbox backup
  - dropbox migration s3
tags:
  - RcloneView
  - dropbox
  - aws-s3
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DropboxをAWS S3にバックアップする方法 — RcloneViewによる自動クラウド間バックアップ

> Dropboxはコラボレーションに優れています。しかし、ファイルが誤って削除されたり、ランサムウェアが共有フォルダを暗号化したり、Dropbox自体に障害が発生したりしたらどうなるでしょうか？ AWS S3へのクラウド間バックアップは、こうしたすべてからあなたを守ります。

重要なファイルを単一のクラウドプロバイダーに依存するのはリスクがあります。Dropboxのバージョン履歴は誤った変更には役立ちますが、アカウントの侵害、保持期間を過ぎた完全な削除、サービス障害からは守ってくれません。AWS S3にバックアップすることで、すべてのデータの独立した耐久性の高いコピーを持つことができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜDropboxをS3にバックアップするのか？

- **独立したコピー** — Dropboxがダウンしたり、アカウントが侵害されたりしても、S3にはファイルが残ります。
- **99.999999999%の耐久性** — S3のイレブンナインの耐久性により、データは極めて安全に保たれます。
- **コスト効率の良いアーカイブ** — S3 Glacierは、頻繁にアクセスしないファイルであれば月額4ドル/TBから利用できます。
- **コンプライアンス** — 業界によっては、別のインフラ上にバックアップを保持することが求められます。
- **ランサムウェア対策** — S3のバージョニングとオブジェクトロックにより、上書きを防止できます。

## セットアップ

### 1) DropboxとAWS S3を接続する

RcloneViewで両方をリモートとして追加します。

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and S3 remotes" class="img-large img-center" />

S3の場合、アクセスキーID、シークレットアクセスキー、希望するリージョンが必要です。

### 2) 両方を閲覧する

2ペインのエクスプローラーで、左側にDropbox、右側にS3を開きます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Dropbox and S3 side by side" class="img-large img-center" />

### 3) コピージョブを作成する

**コピー**を使ってDropboxをS3バケットにバックアップします。コピーはファイルを削除せずに追加するため、バックアップに安全です。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to S3 backup" class="img-large img-center" />

### 4) 毎晩のバックアップをスケジュールする

ジョブを毎晩実行するように設定し、S3バックアップを常に最新の状態に保ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly Dropbox backup" class="img-large img-center" />

### 5) 完全性を検証する

フォルダ比較を使用して、すべてのファイルがバックアップされていることを確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on S3" class="img-large img-center" />

## 適切なS3ストレージクラスの選択

AWS S3には、価格帯の異なる複数のストレージクラスがあります。

| ストレージクラス | 最適な用途 | 価格（TB/月） |
|---------------|----------|------------------|
| S3 Standard | 頻繁にアクセスされるバックアップ | $23 |
| S3 Standard-IA | 月に1回程度アクセスするバックアップ | $12.50 |
| S3 Glacier Instant | アクセス頻度が低く、即時取得が必要 | $4 |
| S3 Glacier Deep Archive | コンプライアンス用途、年1回のアクセス | $1 |

ほとんどのDropboxバックアップには、**S3 Standard-IA**（低頻度アクセス）が最適です。バックアップに毎日アクセスするわけではないものの、必要なときに素早く復元したい場合に適しています。

## フィルターによる選択的バックアップ

すべてをバックアップする必要はないかもしれません。rcloneのフィルタールールを使用しましょう。

- **ドキュメントのみを含める**: `--include "*.pdf" --include "*.docx" --include "*.xlsx"`
- **一時ファイルを除外する**: `--exclude "*.tmp" --exclude ".dropbox*"`
- **大きなメディアをスキップする**: `--max-size 500M`

詳細については、[Rcloneフィルタールール解説](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)を参照してください。

## バッチジョブによる完全なバックアップワークフロー

v1.3のバッチジョブを使えば、複数の操作を連結できます。

1. Dropbox → S3へコピー。
2. DropboxとS3を比較。
3. 完了時にSlack通知を送信。

これらすべてを1つの自動化されたシーケンスで行えます。

## バックアップから復元する

S3からDropboxへファイルを復元する必要がある場合は、以下の手順で行います。

1. 左側にS3、右側にDropboxを開きます。
2. 復元するファイルまたはフォルダを選択します。
3. S3 → Dropboxへのコピージョブを実行します。

これは、先ほどと逆の同じ手順です。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **DropboxとAWS S3をリモートとして追加**します。
3. Dropboxからs3への**コピージョブを実行**します。
4. **毎晩のバックアップをスケジュール**します。
5. **フォルダ比較で検証**します。

Dropboxのファイルには、複数の保管場所を持たせるべきです。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rcloneフィルタールール](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
