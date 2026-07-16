---
slug: sync-nextcloud-to-backblaze-b2-rcloneview
title: "NextcloudをBackblaze B2に同期 — RcloneViewでオフサイトバックアップ"
authors:
  - tayson
description: "RcloneViewを使って自己ホスト型のNextcloudデータをBackblaze B2にバックアップします。WebDAVとApp Keyで接続し、自動化されたオフサイトバックアップをスケジュールしましょう。"
keywords:
  - Nextcloud Backblaze B2 backup
  - Nextcloud offsite backup RcloneView
  - Nextcloud WebDAV sync B2
  - self-hosted Nextcloud backup
  - Backblaze B2 Nextcloud cloud backup
  - automated Nextcloud backup
  - Nextcloud disaster recovery
  - RcloneView WebDAV backup
tags:
  - RcloneView
  - nextcloud
  - backblaze-b2
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# NextcloudをBackblaze B2に同期 — RcloneViewでオフサイトバックアップ

> Nextcloudは自己ホスト型のコラボレーションに優れていますが、オフサイトバックアップがなければ、サーバー障害一つで永久的なデータ損失につながりかねません — RcloneViewはBackblaze B2への自動同期でこれを防ぎます。

Nextcloudをセルフホストすることで、自分のデータを完全に管理できますが、その分責任も伴います。適切なバックアップがない状態でサーバーが破損したり、ランサムウェアの被害に遭ったり、廃棄されたりすると、頼れるものは何もありません。Backblaze B2は、Nextcloudと相性の良い、手頃で耐久性の高いオフサイトオブジェクトストレージを提供します。RcloneViewはWebDAV経由でNextcloudに、Application Key経由でB2に接続し、定期的なバックアップの設定とスケジュールをGUIで行えるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## WebDAV経由でNextcloudに接続する

RcloneViewを開き、**Remote Manager**に移動します。**New Remote**をクリックし、**WebDAV**を選択します。Nextcloudは標準的なパスでWebDAV経由でファイルを公開しています。以下を入力してください。

- **URL**: `https://your-nextcloud-domain/remote.php/dav/files/your-username/`
- **Vendor**: Nextcloud
- **User**: あなたのNextcloudユーザー名
- **Password**: あなたのNextcloudアカウントのパスワード（2FAが有効な場合はアプリパスワード）

リモートを保存し、File Explorerで開いてNextcloudのファイルが表示されることを確認します。いくつかのフォルダを移動してアクセスを確認してください。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

## Backblaze B2に接続する

再び**Remote Manager**に戻り、**New Remote**をクリックして**Backblaze B2**を選択します。Backblazeのコンソールで**App Keys**に移動し、バックアップ用バケットへの読み書きアクセス権を持つキーを作成します。RcloneViewに**Application Key ID**と**Application Key**を入力します。リモートを保存し、開いてB2バケットにアクセスできることを確認します。

まだ作成していない場合は、送信先バケットを作成してください — Nextcloudのバックアップには、専用バケット（例: `nextcloud-backup`）を用意すると整理しやすくなります。

## バックアップジョブの設定

**Jobs**に移動し、**New Job**をクリックします。以下を設定します。

- **Source**: あなたのNextcloud WebDAVリモート。ルートまたは特定のディレクトリを指定
- **Destination**: あなたのBackblaze B2リモートとバックアップ用バケット

ジョブウィザードのステップ2では、Nextcloudのバックアップに推奨されるオプションは以下の通りです。

- **transfers**を4に設定する（WebDAVは接続ごとのオーバーヘッドがあるため、同時実行数を低めにすると安定する）
- 整合性を保証するために**checksum verification**を有効にする
- 初回実行時は**Dry Run**を有効にして、実行前に対象範囲を確認する

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud to Backblaze B2 backup job in RcloneView" class="img-large img-center" />

## 自動バックアップのスケジュール設定

PLUSライセンスをお持ちの場合、ジョブウィザードのステップ3でcron構文を使ってスケジュールを追加できます。毎日午前1時にバックアップする場合: `0 1 * * *`。毎週の場合: `0 1 * * 0`。RcloneViewはスケジュールされた時間にバックグラウンドでジョブを静かに実行し、結果を**Job History**に記録します。

各Job Historyのエントリには、確認済みファイル数、転送されたファイル数（変更されたファイルのみ再送信）、データ量、所要時間、エラーがあれば表示されます。これにより、アプリケーションを手動で開かなくても、夜間バックアップが正常に実行されたことを素早く確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## バックアップ戦略のポイント

- RcloneViewの同期ジョブはデフォルトで増分転送を行います — 初回実行後は新規または変更されたファイルのみが転送されます
- B2内で削除されたファイルを保持したい場合は、**--backup-dir**方式のバージョニングの利用を検討してください
- Nextcloudのデータベースのバックアップは別途対応が必要です（mysqldumpなど）が、Nextcloudのデータディレクトリ内のすべてのファイルデータはWebDAV経由で問題なく同期されます

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**する。
2. **Remote Manager**で、サーバーURLと認証情報を使ってWebDAV経由でNextcloudに接続する。
3. Application Key IDとApplication Keyを使ってBackblaze B2に接続する。
4. NextcloudからB2への同期ジョブを作成し、夜間の自動オフサイトバックアップとしてスケジュールする。

Nextcloud → Backblaze B2の自動バックアップを毎晩実行することで、自己ホスト型のデータが最小限のコストでエンタープライズ級の冗長性を確保できます。

---

**関連ガイド:**

- [RcloneViewでNextcloudをGoogle DriveとS3に同期する](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [RcloneViewでNextcloud WebDAVをバックアップする](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [RcloneViewで毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
