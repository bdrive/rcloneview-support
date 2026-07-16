---
slug: transfer-mailru-cloud-google-drive-s3-rcloneview
title: "RcloneViewでMail.ru CloudファイルをGoogle DriveやS3へ安全に転送する"
authors:
  - tayson
description: "RcloneViewを使用して、Mail.ru CloudのデータをGoogle Drive、AWS S3、その他の国際的なクラウドプロバイダーへ、安全に転送検証を行いながら移行またはバックアップします。"
keywords:
  - mail.ru cloud backup
  - mail.ru to google drive
  - mail.ru cloud migration
  - mail.ru cloud export
  - mail.ru rclone
  - mail.ru cloud sync
  - mail.ru file transfer
  - mailru cloud alternative
  - mail.ru cloud to s3
  - mail.ru data export
tags:
  - mailru
  - migration
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでMail.ru CloudファイルをGoogle DriveやS3へ安全に転送する

> Mail.ru Cloudのデータを国際的なクラウドプロバイダーへ移動する必要がありますか?RcloneViewなら、Google Drive、S3、その他のクラウドへファイルを転送し、検証によってデータの欠落がないことを確認できます。

Mail.ru Cloud(Облако Mail.ru)は、ロシアおよびCIS諸国で最も人気のあるクラウドストレージサービスの一つで、無料ストレージも豊富です。しかし、冗長性やアクセシビリティ、コンプライアンス上の理由から、データを国際的なプロバイダーへ分散させたいと考えるユーザーが増えています。RcloneViewはMail.ru Cloudに直接接続し、70以上のクラウドプロバイダーへの転送を簡単に実現します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜMail.ru Cloudからデータを転送するのか

- **地理的分散** — 冗長性のために、重要なデータのコピーを異なるリージョンに保管します。
- **国際的なアクセシビリティ** — Google DriveやOneDriveは、Mail.ru Cloudより世界的にアクセスしやすいです。
- **コンプライアンス** — 一部の規制では、特定の法域でのデータ保管が求められます。
- **バックアップ** — 単一プロバイダーのみに依存する戦略にはリスクがあります。別の場所にもう一つコピーを持つことが不可欠です。
- **移行** — ビジネスでGoogle WorkspaceやMicrosoft 365へ移行する場合、Mail.ruのデータをエクスポートする必要があります。

## Mail.ru Cloudの接続

1. RcloneViewを開き、**Add Remote**をクリックします。
2. プロバイダーリストから**Mail.ru Cloud**を選択します。
3. Mail.ruの認証情報(メールアドレスとアプリ専用パスワード)を入力します。
4. 保存すると、Mail.ru Cloudのファイルが閲覧可能になります。

<img src="/support/images/en/blog/new-remote.png" alt="Add Mail.ru Cloud remote" class="img-large img-center" />

## ファイルを閲覧する

Mail.ru Cloudのライブラリ全体を、転送先のクラウドと並べて表示できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Mail.ru Cloud alongside Google Drive" class="img-large img-center" />

## 転送シナリオ

### Mail.ru → Google Drive

最も一般的な移行パスです。

1. [OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)経由でGoogle Driveを追加します。
2. コピージョブを作成します:Mail.ru → Google Drive。
3. 実行して監視します。
4. [フォルダ比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)で検証します。

### Mail.ru → AWS S3

長期アーカイブ向けです。

1. [S3セットアップ](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)でS3を追加します。
2. コピージョブを作成します:Mail.ru → S3バケット。
3. コスト効率の良いストレージ階層のために、S3ライフサイクルポリシーを使用します。

### Mail.ru → 暗号化クラウドバックアップ

さらにセキュリティを高めるには、任意の転送先へアップロードする前にファイルを暗号化する[cryptリモート](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)へ同期します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Mail.ru transfer job" class="img-large img-center" />

## 転送を検証する

コピー後、完全性を確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Mail.ru Cloud transfer" class="img-large img-center" />

## 継続的な同期を自動化する

Mail.ru Cloudをメインとして維持し、変更をバックアップへ同期したい場合は次の手順です。

1. 同期ジョブを作成し、毎日実行するようスケジュールします。
2. [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)(CIS地域で人気)経由で通知を受け取ります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Mail.ru sync" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートとして**Mail.ru Cloudを追加**します。
3. **転送先を追加**します(Google Drive、S3、OneDrive)。
4. ファイルを**コピー**し、フォルダ比較で**検証**します。
5. 両方を維持する場合は、継続的な同期のために**スケジュール**を設定します。

クラウドストレージを分散させることは、賢明なデータ管理です。RcloneViewを使えば、Mail.ru Cloudから国際的なプロバイダーへの転送をシンプルに、検証付きで、自動化して行えます。

---

**関連ガイド:**

- [ブラウザベースのログイン(OAuth)でリモートを追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [AWS S3およびS3互換ストレージの追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
