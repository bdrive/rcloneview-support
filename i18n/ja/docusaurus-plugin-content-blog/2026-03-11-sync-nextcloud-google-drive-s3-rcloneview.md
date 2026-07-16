---
slug: sync-nextcloud-google-drive-s3-rcloneview
title: "RcloneViewでNextcloudをGoogle Drive、S3、その他のクラウドと同期する"
authors:
  - tayson
description: "Nextcloudは代表的なセルフホスト型クラウドプラットフォームです。RcloneViewを使ってNextcloudをGoogle Drive、AWS S3、Backblaze B2に同期・バックアップする方法を解説します。"
keywords:
  - nextcloud sync
  - nextcloud backup cloud
  - nextcloud rclone
  - nextcloud google drive
  - nextcloud s3 backup
  - nextcloud external storage
  - sync nextcloud files
  - nextcloud migration
  - nextcloud multi cloud
  - nextcloud off site backup
tags:
  - nextcloud
  - self-hosted
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでNextcloudをGoogle Drive、S3、その他のクラウドと同期する

> Nextcloudを使えば自分のデータを完全にコントロールできます。しかし、セルフホストであるということは、バックアップも自分自身の責任になるということです。RcloneViewはNextcloudを70以上のクラウドプロバイダーと接続し、オフサイトバックアップ、移行、マルチクラウドワークフローを実現します。

Nextcloudは、ファイル同期、コラボレーション、プライバシー重視のストレージのために数百万人が利用している、最も人気のあるセルフホスト型クラウドプラットフォームです。しかし、Nextcloudを自前のインフラ上で運用するということは、バックアップ、災害復旧、データ移行を自分で管理する必要があるということです。RcloneViewはNextcloudとクラウドエコシステム全体をつなぎます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜNextcloudを外部クラウドと接続するのか

- **オフサイトバックアップ** — Nextcloudサーバーがダウンした場合、外部バックアップがなければデータは失われます。
- **移行** — Google DriveやOneDriveからNextcloudへ、またはその逆の移行。
- **ハイブリッドクラウド** — 機密データはNextcloudに、共有データはGoogle Driveに。
- **クライアント納品** — Nextcloudからクライアントの Dropbox や OneDrive に成果物をコピー。
- **コスト最適化** — 古いNextcloudのデータを安価なオブジェクトストレージ(B2、S3 Glacier)にアーカイブ。

## RcloneViewでNextcloudを設定する

### WebDAVで接続する

1. RcloneViewを開き、**Add Remote**をクリックします。
2. タイプとして**WebDAV**を選択します。
3. NextcloudのWebDAV URLを入力します: `https://your-nextcloud.com/remote.php/dav/files/USERNAME/`
4. Nextcloudのユーザー名とアプリパスワードを入力します。

<img src="/support/images/en/blog/new-remote.png" alt="Add Nextcloud via WebDAV" class="img-large img-center" />

これでNextcloudのファイルがRcloneViewの2ペインエクスプローラーに表示されます。

## 主なワークフロー

### 1) Nextcloud → S3(オフサイトバックアップ)

Nextcloudから AWS S3 や Backblaze B2 への夜間バックアップをスケジュールします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Nextcloud backup" class="img-large img-center" />

### 2) Google Drive → Nextcloud(移行)

Googleからセルフホストへ移行します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Google Drive to Nextcloud" class="img-large img-center" />

### 3) Nextcloud → Google Drive(共有)

外部パートナーとのコラボレーション用に、特定のフォルダをGoogle Driveにコピーします。

### 4) 暗号化されたオフサイトバックアップ

その上にcryptを重ねることで、ゼロ知識の暗号化バックアップを実現できます。クラウドバックアッププロバイダーであっても、あなたのNextcloudデータを読み取ることはできません。

## バックアップを検証する

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Nextcloud backup" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. WebDAV経由で**Nextcloudを追加**します。
3. **バックアップ/同期先を追加**します。
4. **自動バックアップをスケジュール**します。
5. フォルダ比較で**検証**します。

セルフホストでありながら、安全にバックアップされた状態を維持しましょう。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [クラウドバックアップの暗号化](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
