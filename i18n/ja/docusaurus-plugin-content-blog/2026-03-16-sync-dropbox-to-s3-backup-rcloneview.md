---
slug: sync-dropbox-to-s3-backup-rcloneview
title: "DropboxをAWS S3にバックアップするために同期する — RcloneViewによるクラウド間の自動保護"
authors:
  - tayson
description: "Dropboxはコラボレーションには優れていますが、バックアップではありません。RcloneViewを使ってDropboxのファイルをAWS S3に自動的に同期し、手頃で冗長性のあるクラウドバックアップを実現する方法を学びましょう。"
keywords:
  - dropbox to s3 backup
  - sync dropbox aws
  - dropbox backup s3
  - dropbox cloud to cloud backup
  - dropbox offsite backup
  - dropbox s3 sync tool
  - dropbox redundant backup
  - dropbox aws transfer
  - automated dropbox backup
  - dropbox data protection
tags:
  - RcloneView
  - dropbox
  - s3
  - aws-s3
  - backup
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DropboxをAWS S3にバックアップするために同期する — RcloneViewによるクラウド間の自動保護

> Dropboxはファイルを同期しますが、バックアップはしません。誰かが共有フォルダを削除すると、Dropboxはその削除を律儀にすべての場所に同期してしまいます。S3上の別のバックアップは、まさにこの事態から保護します。

多くの人が同期とバックアップを混同しています。Dropboxは同期サービスであり、削除や上書きを含む変更は接続されたすべてのデバイスに伝播します。真のバックアップとは、ソースが変化しても変わらない独立したコピーのことです。AWS S3はこの用途に最適です。耐久性が高く、バージョン管理もでき、コスト効率にも優れています。RcloneViewはDropboxからS3へのバックアップパイプラインを自動化します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜDropboxにバックアップが必要なのか

- **誤削除** — Dropboxは削除を伝播します。S3バックアップはファイルを保持します。
- **ランサムウェア** — 暗号化されたファイルはDropboxに同期されます。S3のバージョニングにより、暗号化前のバージョンに復元できます。
- **アカウント侵害** — 誰かがアクセス権を得てデータを削除しても、S3バックアップは影響を受けません。
- **Dropboxの障害** — 稀ではありますが起こり得ます。S3バックアップがファイルへのアクセスを保証します。

## バックアップの設定

<img src="/support/images/en/blog/new-remote.png" alt="Connect Dropbox and S3" class="img-large img-center" />

DropboxとAWS S3のアカウントをRcloneViewにリモートとして追加します。

## バックアップジョブの作成

一方のペインでDropboxを、もう一方のペインでS3を開きます。コピージョブを作成します(同期ではありません — Dropboxのファイルが削除された際にS3側でも削除されるのは避けたいためです):

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dropbox to S3 backup" class="img-large img-center" />

## 毎晩のバックアップをスケジュール

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Dropbox backup" class="img-large img-center" />

バックアップを毎晩実行します。各実行では新規ファイルと変更されたファイルのみが転送されるため、帯域幅とコストを最小限に抑えられます。

## バックアップの整合性を確認

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup" class="img-large img-center" />

定期的にDropboxとS3を比較し、バックアップが完全かつ最新であることを確認しましょう。

## コストの最適化

| S3ストレージクラス | 最適な用途 | コスト |
|-----------------|---------|------|
| S3 Standard | バックアップへの頻繁なアクセス | ~$23/TB/月 |
| S3 Infrequent Access | 月次の復元ニーズ | ~$12.5/TB/月 |
| S3 Glacier Instant | 稀な復元、必要時には高速 | ~$4/TB/月 |
| S3 Glacier Deep Archive | アーカイブ専用 | ~$1/TB/月 |

ほとんどのDropboxバックアップのシナリオでは、S3 Infrequent AccessまたはGlacier Instantが最良のバランスを提供します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Dropbox**と**AWS S3**のリモートを追加します。
3. **コピージョブを作成**します(同期ではありません)。
4. **毎晩の実行をスケジュール**します。
5. フォルダ比較で**定期的に確認**します。

同期はファイルを最新に保ちます。バックアップはファイルを安全に保ちます。

---

**関連ガイド:**

- [DropboxをAWS S3にバックアップする](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)
- [DropboxをBackblaze B2にバックアップする](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [同期・コピー・移動の違い](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)

<CloudSupportGrid />
