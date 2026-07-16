---
slug: sync-dropbox-to-hetzner-storage-box-rcloneview
title: "Dropbox を Hetzner Storage Box に同期 — RcloneView によるクラウドバックアップ"
authors:
  - tayson
description: "RcloneView を使って Dropbox のファイルを Hetzner Storage Box に同期・バックアップする方法。Dropbox から Hetzner への移行やバックアップコピーの維持を行うためのステップバイステップガイド。"
keywords:
  - sync Dropbox to Hetzner Storage Box
  - Dropbox Hetzner backup
  - migrate Dropbox to Hetzner
  - Hetzner Storage Box cloud backup
  - rclone Dropbox Hetzner
  - Dropbox to SFTP backup
  - European cloud backup Dropbox
  - RcloneView Dropbox Hetzner
tags:
  - dropbox
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox を Hetzner Storage Box に同期 — RcloneView によるクラウドバックアップ

> RcloneView は SFTP 経由で Dropbox を Hetzner Storage Box に同期し、ヨーロッパのユーザーに Dropbox ファイルの GDPR 準拠のセカンダリバックアップ先を提供します。

Hetzner Storage Box は、ドイツでホストされているコストパフォーマンスに優れたストレージサービスで、SFTP、FTP、Samba、WebDAV アクセスに対応しています。コラボレーションに Dropbox を使用しているヨーロッパの企業や開発者は、Hetzner Storage Box をセカンダリバックアップ先として追加することがよくあります。大容量データに対して大幅にコストを抑えられ、データを EU 域内の管轄に保持できるためです。RcloneView は rclone の Dropbox バックエンドと SFTP バックエンドの両方を通じて接続し、Dropbox から Hetzner へのスケジュール同期を GUI 操作だけで簡単に行えるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox と Hetzner Storage Box のセットアップ

まず Dropbox を追加します。**Remote タブ → New Remote → Dropbox** で、OAuth ブラウザログインによる認証を行います。Dropbox のフォルダはすぐに Explorer に表示されます。

次に Hetzner Storage Box を SFTP リモートとして追加します。**New Remote → SFTP** を選択し、以下のように設定します。
- **Host**: `yourboxid.your-storagebox.de`
- **User**: Storage Box のユーザー名（Hetzner Robot パネルに表示されます）
- **Authentication**: SSH キー（推奨）またはパスワード
- **Port**: 23（Hetzner Storage Box は標準の 22 ではなくポート 23 を使用します）

保存する前に接続をテストしてください。両方のリモートを追加したら、分割パネルの Explorer を開き、左側で Dropbox を、右側で Hetzner を閲覧できます。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Dropbox and Hetzner Storage Box SFTP remote in RcloneView" class="img-large img-center" />

## スケジュール同期ジョブの作成

継続的なバックアップシナリオでは、Job Manager で Sync ジョブを作成します。ソースは Dropbox のフォルダ（例: `dropbox:/Team/Projects/`）、宛先は Hetzner のパス（例: `hetzner:/backups/dropbox/`）です。ステップ2では、同時転送数を 4〜6 に設定してください。Hetzner Storage Box はこの並列数レベルで SFTP 接続をうまく処理できます。

ジョブを毎晩午前2時に実行するようスケジュールします（PLUS ライセンス）。増分同期では新規または変更されたファイルのみがコピーされるため、初回のフル同期後は転送時間を短く保てます。Job History には、各実行のステータス、転送サイズ、所要時間が記録として残ります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly Dropbox to Hetzner sync in RcloneView" class="img-large img-center" />

## Dropbox から Hetzner への一括移行

Dropbox から Hetzner Storage Box への移行をプライマリストレージとして行う場合は、Sync ではなく Copy ジョブを使用します。Copy はソース側のファイルを削除せずに、Dropbox のすべてのファイルを Hetzner に転送するため、移行期間中も Dropbox のコンテンツを保持できます。実行前にまず Dry Run を実行して、ファイル数と合計転送サイズを確認してください。

数百 GB に及ぶ大規模な Dropbox アカウントの場合は、ステップ2でチェックサム検証を有効にして、転送後に各ファイルの整合性を確認してください。Folder Compare 機能を使えば、ジョブ完了後に Dropbox と Hetzner のフォルダ構造を並べて比較し、移行が正しく完了したことを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Dropbox and Hetzner Storage Box folders after migration in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. New Remote ウィザードで OAuth 経由の Dropbox と SFTP（ポート 23）経由の Hetzner Storage Box を追加します。
3. Job Manager で Dropbox のパスから Hetzner のパスへの Sync ジョブを作成します。
4. 毎晩の同期をスケジュールし、Job History で転送の監査ログを確認します。

RcloneView を使って Dropbox を Hetzner Storage Box に同期することで、ヨーロッパのチームは手動介入なしに自動実行される、コスト効率が高く GDPR に準拠したセカンダリバックアップを実現できます。

---

**関連ガイド:**

- [RcloneView で Hetzner Storage Box をマウントしてクラウドに同期](https://rcloneview.com/support/blog/mount-hetzner-storage-box-sync-cloud-rcloneview)
- [RcloneView で Dropbox を Backblaze B2 にバックアップ](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [RcloneView で Dropbox を AWS S3 にバックアップ](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
