---
slug: manage-sftp-server-cloud-sync-rcloneview
title: "任意のSFTPサーバーをRcloneViewに接続 — リモートサーバーをクラウドストレージと同期"
authors:
  - tayson
description: "SFTPはLinuxサーバー、VPS、ホスティングにおける安全なファイルアクセスの標準です。任意のSFTPサーバーをRcloneViewに接続し、Google Drive、S3、70以上のクラウドと同期しましょう。"
keywords:
  - sftp cloud sync
  - sftp to google drive
  - sftp backup tool
  - sftp file manager gui
  - sftp to s3 sync
  - ssh file transfer cloud
  - sftp cloud backup
  - sftp gui client
  - sftp remote manager
  - linux server cloud sync
tags:
  - sftp
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 任意のSFTPサーバーをRcloneViewに接続 — リモートサーバーをクラウドストレージと同期

> あらゆるLinuxサーバー、VPS、ウェブホストはSFTPに対応しています。RcloneViewは任意のSFTPエンドポイントを、閲覧・クラウドストレージへの同期・スケジュールバックアップが可能な管理対象のリモートに変えます。

SFTP(SSH File Transfer Protocol)は、リモートサーバー上の安全なファイルアクセスのための汎用プロトコルです。ウェブサーバー、開発用マシン、VPS、専用サーバーのいずれであっても、SFTPはほぼ常に利用可能です。RcloneViewは任意のSFTPサーバーに接続し、クラウドアカウントと並べて表示します。サーバーファイルを視覚的に閲覧し、S3やGoogle Driveに同期し、自動バックアップをスケジュールできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTPリモートを追加する

<img src="/support/images/en/blog/new-remote.png" alt="Add SFTP remote" class="img-large img-center" />

サーバーのホスト名、ポート(デフォルトは22)、ユーザー名、そしてパスワードまたはSSH鍵認証のいずれかを設定します。サーバーのファイルシステムが即座にエクスプローラーに表示されます。

## 主要なワークフロー

### ウェブサーバーをクラウドにバックアップする

ウェブサーバーの`/var/www`や`/home`ディレクトリをS3やGoogle Driveに同期します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SFTP server to cloud" class="img-large img-center" />

### サーバーバックアップをスケジュールする

クラウドストレージへの毎晩のサーバーバックアップを自動化します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SFTP backup" class="img-large img-center" />

### サーバー間で移行する

新しいサーバーに移行しますか？片方のペインに旧サーバーのSFTPを、もう片方に新サーバーを開いて、直接転送します。

### 開発ファイルを同期する

クラウドストレージを仲介として、ローカルの開発環境をリモートサーバーと同期し続けます。

### バックアップを検証する

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SFTP backup" class="img-large img-center" />

## SSH鍵認証

自動バックアップには、パスワードよりもSSH鍵認証を使用することが推奨されます。リモート設定で鍵を構成すれば、パスワード不要の安全な接続が可能になります。

## パフォーマンスのヒント

- 低速回線でのテキスト中心の転送には**圧縮を使用**する
- 共有ホスティングでは**同時転送数を2〜4に制限**する
- **一時ファイルを除外**する — `.cache`、`node_modules`、`__pycache__`をフィルターで除外
- サーバーのパフォーマンスへの影響を避けるため**オフピーク時にスケジュール**する

## 使い始める

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **SFTPサーバーをリモートとして追加**します。
3. 2ペインのエクスプローラーで**サーバーファイルを閲覧**します。
4. **クラウドに同期**し、バックアップをスケジュールします。

SSHが使えれば、RcloneViewで管理できます。

---

**関連ガイド:**

- [SFTP/SMBをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [WebDAVサーバーに接続する](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [FTPサーバーをクラウドに移行する](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)

<CloudSupportGrid />
