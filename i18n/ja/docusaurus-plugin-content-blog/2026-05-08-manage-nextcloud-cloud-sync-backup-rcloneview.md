---
slug: manage-nextcloud-cloud-sync-backup-rcloneview
title: "Nextcloudストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - jay
description: "セルフホストまたはマネージドのNextcloudインスタンスをWebDAV経由でRcloneViewに接続し、GUIによるファイル管理、クロスクラウド同期、自動バックアップを実現します。"
keywords:
  - Nextcloud RcloneView sync
  - manage Nextcloud files GUI
  - Nextcloud WebDAV RcloneView
  - Nextcloud backup cloud storage
  - sync Nextcloud to Google Drive
  - Nextcloud to S3 backup
  - self-hosted cloud sync RcloneView
  - Nextcloud file management desktop
tags:
  - nextcloud
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloudストレージを管理 — RcloneViewでファイルを同期・バックアップ

> RcloneViewをWebDAV経由でNextcloudインスタンスに接続し、ファイル管理、クロスクラウドバックアップの自動化、S3やGoogle Driveへのデータ同期を、すべて洗練されたデスクトップGUIから実現しましょう。

Nextcloud標準の同期クライアントはローカルフォルダーを同期状態に保つには優れていますが、データを別のクラウドに移行したり、複数プロバイダー間でバックアップを自動化したり、他のストレージシステムと並べてNextcloudのファイルを閲覧したりする場合には役立ちません。RcloneViewはNextcloudが公開している標準プロトコルであるWebDAV経由で接続し、デュアルペインのファイルエクスプローラー内で他のクラウドリモートと同じように扱います。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## WebDAV経由でNextcloudをRcloneViewに接続する

Nextcloudはサーバー上の標準的なURLパスでWebDAVを公開しています。RcloneViewで**Remoteタブ → New Remote**に移動し、プロバイダータイプとして**WebDAV**を選択します。NextcloudのWebDAV URL(通常は`https://your-nextcloud.example.com/remote.php/dav/files/USERNAME/`)、Nextcloudのユーザー名、パスワードを入力します。**Vendor**オプションをNextcloudに設定すると、rcloneのWebDAVバックエンドでNextcloud固有の最適化が有効になります。

保存すると、Nextcloudのファイルは他のプロバイダーと同じインターフェース(フォルダーツリー、ソート可能なファイルリスト、パンくずナビゲーション)でエクスプローラーパネルに表示されます。Google DriveやDropboxと同じように、Nextcloudとの間でファイルの閲覧、名前変更、コピー、削除、ドラッグ&ドロップが行えます。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Nextcloud to RcloneView via WebDAV" class="img-large img-center" />

## NextcloudをS3またはBackblaze B2にバックアップする

セルフホストのNextcloudサーバーにはオフサイトのバックアップ戦略が必要です。RcloneViewのJob Managerを使用すると、Nextcloudリモートから Amazon S3、Backblaze B2、その他任意のクラウドプロバイダーへの同期ジョブを作成できます。これにより、Nextcloudのすべてのデータの冗長コピーが外部に保存され、サーバー障害やホスティングプロバイダーの問題から保護されます。

データ整合性を保証するため、ジョブには**Enable Checksum**を設定し、最近変更されたファイルのみをバックアップしたい場合は**Max file age**フィルターを使用してください。PLUSライセンスがあれば、このジョブを毎晩スケジュール実行することで、バックアップが常にNextcloudデータの現在の状態を反映するようにできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud backup to S3 in RcloneView" class="img-large img-center" />

## NextcloudファイルをGoogle DriveやOneDriveに同期する

多くの組織はプライバシー上の理由から社内でNextcloudを運用していますが、コラボレーションのために特定のファイルをGoogle DriveやOneDrive経由で外部に共有する必要がある場合があります。RcloneViewはこれを明確で反復可能なプロセスにします。特定のNextcloudフォルダーからGoogle DriveのShared DriveやOneDriveフォルダーへのコピーまたは同期ジョブを作成し、更新を公開する必要があるときに実行するようスケジュールします。

このパターンは、Nextcloudを社内文書管理システムとして、Google Driveを外部向けコラボレーションレイヤーとして使用するチームでよく見られます。Folder Compare機能を使用すると、各同期の前後でNextcloudとGoogle Driveのコピーが一致していることを確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Nextcloud files to Google Drive using RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remoteタブ**でNextcloudのWebDAV URLを新しいリモートとして追加します。
3. デュアルペインエクスプローラーで、他のクラウドプロバイダーと並べてNextcloudのファイルを閲覧します。
4. オフサイト保護のため、S3またはBackblaze B2へのスケジュール済みバックアップジョブを作成します。

RcloneViewは、個人サーバー、ホスティングプラン、エンタープライズ導入のいずれであっても、Nextcloudインスタンスに完全なデスクトップ管理機能をもたらします。

---

**関連ガイド:**

- [RcloneViewでWebDAV経由でNextcloudをバックアップする](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [RcloneViewでNextcloudをBackblaze B2に同期する](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [RcloneViewでNextcloudをGoogle Driveに移行する](https://rcloneview.com/support/blog/migrate-nextcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
