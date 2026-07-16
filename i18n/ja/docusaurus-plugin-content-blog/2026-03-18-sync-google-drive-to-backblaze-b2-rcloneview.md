---
slug: sync-google-drive-to-backblaze-b2-rcloneview
title: "Google DriveをBackblaze B2に同期 — RcloneViewで実現する手頃なクラウド間バックアップ"
authors:
  - tayson
description: "日常業務にはGoogle Drive、手頃なバックアップにはBackblaze B2。RcloneViewを使ってGoogle DriveからB2への自動クラウド間バックアップを設定する方法を解説します。"
keywords:
  - google drive to backblaze b2
  - google drive backup b2
  - sync google drive b2
  - google drive cloud backup
  - backblaze b2 backup tool
  - google drive offsite backup
  - google drive b2 sync
  - affordable google drive backup
  - cloud to cloud backup google
  - google drive redundancy
tags:
  - google-drive
  - backblaze-b2
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveをBackblaze B2に同期 — RcloneViewで実現する手頃なクラウド間バックアップ

> Google Driveはあなたの作業を保存し、Backblaze B2は月額$6/TBでそれを保護します。この2つを組み合わせることで、最もコスト効率の高いクラウドバックアップ戦略の一つが実現します。

Google Driveは日々のファイルが置かれる場所です。しかし、Google Drive単体はバックアップにはなりません — 誤削除、アカウントの侵害、同期エラーなどにより、Googleでは復元できないデータが失われることがあります。月額$6/TBのBackblaze B2は、そのセーフティネットとなります。RcloneViewが自動更新する、すべてのデータの独立したコピーです。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Driveのバックアップになぜ B2 なのか

| 要素 | Backblaze B2 |
|--------|-------------|
| ストレージコスト | $6/TB/月 |
| ダウンロードコスト | $0.01/GB |
| 無料エグレス | ストレージ量の3倍/月 |
| 耐久性 | 99.999999999% |
| API | S3互換 |

B2はバックアップ用途向けに設計されています。安価なストレージ、従量課金制、そしてS3互換により幅広いツールに対応します。

## バックアップの設定

<img src="/support/images/en/blog/new-remote.png" alt="Connect Google Drive and B2" class="img-large img-center" />

RcloneViewにGoogle DriveとBackblaze B2の両方をリモートとして追加します。

## バックアップジョブの作成

一方のペインでGoogle Driveを、もう一方のペインでB2を開きます。Copyジョブを作成します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to B2" class="img-large img-center" />

**Copy**（Syncではなく）を使用することで、Google Driveから削除されたファイルもB2側には残ります。

## 毎晩のバックアップをスケジュール

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly backup" class="img-large img-center" />

各実行では、新規または変更されたファイルのみが転送されます。一般的なGoogle Driveアカウントの日次バックアップでは、使用帯域幅はごくわずかです。

## バックアップの整合性を確認

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup" class="img-large img-center" />

## 暗号化を追加する

機密データについては、B2の上にcryptリモートを重ねて設定します。ファイルはマシンから送出される前に暗号化されるため、Backblaze側で暗号化されていないデータが見られることはありません。

## コスト例

| Google Driveのサイズ | B2の月額コスト |
|-------------------|----------------|
| 100 GB | $0.60 |
| 500 GB | $3.00 |
| 1 TB | $6.00 |
| 5 TB | $30.00 |

## はじめかた

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Google Drive**と**Backblaze B2**のリモートを追加します。
3. バックアップ用に**Copyジョブを作成**します。
4. **毎晩の実行をスケジュール**します。
5. ファイルが保護されていると分かった上で**安心して眠りましょう**。

Driveで日々の作業を、B2で毎晩のバックアップを。

---

**関連ガイド:**

- [DropboxをBackblaze B2にバックアップ](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [DropboxをS3にバックアップ同期](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [クラウドバックアップの暗号化](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
