---
slug: sync-onedrive-to-s3-enterprise-backup-rcloneview
title: "OneDriveをAWS S3に同期 — RcloneViewによるエンタープライズ クラウド間バックアップ"
authors:
  - tayson
description: "コラボレーションにはOneDrive、耐久性のあるバックアップにはS3を。RcloneViewを使ってエンタープライズのデータ保護のためにOneDriveからS3への自動バックアップを設定します。"
keywords:
  - onedrive to s3 backup
  - sync onedrive aws
  - onedrive cloud backup
  - onedrive s3 sync
  - onedrive enterprise backup
  - onedrive offsite backup
  - microsoft 365 backup s3
  - onedrive aws transfer
  - onedrive data protection
  - onedrive redundancy
tags:
  - RcloneView
  - onedrive
  - s3
  - aws-s3
  - backup
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveをAWS S3に同期 — RcloneViewによるエンタープライズ クラウド間バックアップ

> Microsoft 365には真のバックアップ機能が含まれていません。削除されたファイル、ランサムウェア、管理者のミスによってOneDriveのデータが永久に失われる可能性があります。S3バックアップは、必要な独立したコピーを提供します。

Microsoft 365の保持ポリシーはバックアップではありません。削除されたアイテムはごみ箱に93日間残りますが、その後は完全に消えてしまいます。ランサムウェアは、すべてのデバイスで同期されるファイルを暗号化する可能性があります。管理者のミスがチームサイト全体を消去してしまうこともあります。Microsoftのエコシステムの外にあるAWS S3上の独立したバックアップは、真のデータ保護を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDriveバックアップにS3を使う理由

- **独立したプロバイダー** — Microsoftに問題が発生しても、S3バックアップには影響がありません
- **バージョニング** — S3のバージョニングにより、すべてのファイルの過去のコピーが保持されます
- **コスト階層** — 長期保存には月額1TBあたり1ドルのS3 Glacierが利用できます
- **コンプライアンス** — 規制要件に対応する不変バックアップのためのS3 Object Lock

## バックアップの設定

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive and S3" class="img-large img-center" />

## バックアップジョブの作成

片方のペインでOneDriveを、もう片方のペインでS3を開きます。部門またはユーザーごとにコピー ジョブを作成します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to S3 backup" class="img-large img-center" />

## 自動バックアップのスケジュール設定

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive backup" class="img-large img-center" />

毎晩実行します。各実行では変更分のみが転送されるため、コストを最小限に抑えられます。

## 検証とモニタリング

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive backup" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## コンプライアンスのための暗号化

S3に到達する前に、cryptリモートを使ってOneDriveのバックアップを暗号化しましょう。S3のみの暗号化に頼ることなく、データ保護要件を満たせます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **OneDrive**と**AWS S3**のリモートを追加します。
3. バックアップ用の**コピー ジョブを作成**します。
4. **毎晩スケジュール**し、毎週検証します。

コラボレーションはOneDriveで。保護はS3で。

---

**関連ガイド:**

- [Google DriveをBackblaze B2に同期](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [DropboxをS3にバックアップ同期](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [クラウドストレージ セキュリティ チェックリスト](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
