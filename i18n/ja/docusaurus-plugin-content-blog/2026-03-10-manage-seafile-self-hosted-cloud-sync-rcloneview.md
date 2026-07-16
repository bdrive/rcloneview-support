---
slug: manage-seafile-self-hosted-cloud-sync-rcloneview
title: "RcloneViewでSeafileセルフホスト型クラウドをGoogle Drive、S3、外部ストレージと同期する"
authors:
  - tayson
description: "Seafileは人気のセルフホスト型クラウドストレージプラットフォームです。RcloneViewを使ってSeafileをGoogle Drive、AWS S3、その他のクラウドと同期・バックアップする方法を解説します。"
keywords:
  - seafile sync
  - seafile backup cloud
  - seafile rclone
  - seafile google drive sync
  - seafile s3 backup
  - self hosted cloud sync
  - seafile file transfer
  - seafile migration
  - seafile external backup
  - seafile multi cloud
tags:
  - RcloneView
  - seafile
  - self-hosted
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでSeafileセルフホスト型クラウドをGoogle Drive、S3、外部ストレージと同期する

> Seafileはセルフホスト型クラウドストレージによって、データを完全に自分でコントロールできます。しかし、セルフホストだからといって孤立している必要はありません — RcloneViewはSeafileを70以上の外部クラウドプロバイダーと接続し、バックアップ、コラボレーション、移行を可能にします。

Seafileは、多くの組織が自社サーバー上で運用しているオープンソースのファイル同期・共有プラットフォームです。高速な同期、ファイルロック、大容量ファイルでの優れたパフォーマンスを提供します。課題となるのは、Seafileが自社インフラ上で稼働しているため、オフサイトバックアップ、クラウドでのコラボレーション、データの移行手段が必要になる点です。RcloneViewはSeafileとクラウドの世界全体をつなぎます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜSeafileを外部クラウドと接続するのか?

- **オフサイトバックアップ** — セルフホストである以上、自己責任でのバックアップが必要です。災害復旧のためにS3やB2へバックアップしましょう。
- **コラボレーション** — Google DriveやDropboxを介して外部パートナーとファイルを共有できます。
- **移行** — 他のクラウドからSeafileへデータを移行したり、プラットフォーム変更時にSeafileから他へ移行したりできます。
- **ハイブリッド構成** — 機密データはSeafileに、共有ファイルはパブリッククラウドに置くという使い分けが可能です。

## RcloneViewでSeafileを設定する

### Seafileをリモートとして追加する

1. RcloneViewを開き、**リモートを追加**をクリックします。
2. タイプとして**Seafile**を選択します。
3. Seafileサーバーの URL(例: `https://seafile.yourcompany.com`)を入力します。
4. ユーザー名とパスワード(またはAPIトークン)を入力します。

<img src="/support/images/en/blog/new-remote.png" alt="Add Seafile remote" class="img-large img-center" />

Seafileのライブラリが2ペインのエクスプローラーに表示されます。

## 主なワークフロー

### 1) Seafile → S3(オフサイトバックアップ)

SeafileからAWS S3またはBackblaze B2への夜間バックアップをスケジュールします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Seafile to S3 backup" class="img-large img-center" />

これで、セルフホスト型データに独立したオフサイトコピーが確保されます。

### 2) Google Drive → Seafile(移行)

セルフホストへの移行を検討中ですか?Google DriveからSeafileへファイルを転送しましょう。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Google Drive to Seafile" class="img-large img-center" />

### 3) Seafile → Google Drive(外部共有)

Seafileへのアクセス権を持たない外部パートナーと共有するために、特定のライブラリをGoogle Driveへコピーします。

### 4) 暗号化オフサイトバックアップ

cryptリモートを使い、クラウドストレージへ送信する前にSeafileデータを暗号化します。セルフホストのプライバシーをオフサイトバックアップにも適用できます。

## バックアップを検証する

Seafileのライブラリとバックアップ先を比較します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Seafile backup" class="img-large img-center" />

## 完全なバックアップのためのバッチジョブ

v1.3のバッチジョブで複数のSeafileバックアップ操作を連結できます。

1. ライブラリA → S3へコピー。
2. ライブラリB → S3へコピー。
3. すべてのライブラリをS3と比較。
4. Slack通知を送信。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. クラウドアカウントと合わせて**Seafileを追加**します。
3. Seafileから外部ストレージへの**バックアップジョブを作成**します。
4. 信頼性の高いオフサイト保護のために**スケジュールと検証**を行います。

セルフホストだからといって制限される必要はありません。Seafileをあらゆるものと接続しましょう。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [クラウドバックアップの暗号化](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
