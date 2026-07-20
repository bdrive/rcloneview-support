---
slug: connect-webdav-server-cloud-sync-rcloneview
title: "RcloneViewで任意のWebDAVサーバーに接続 — Google Drive、S3、70以上のクラウドと同期"
authors:
  - tayson
description: "WebDAVはNASデバイス、セルフホスト型アプリ、多くのクラウドサービスでサポートされています。任意のWebDAVサーバーをRcloneViewに接続し、他のクラウドアカウントと同期する方法を学びましょう。"
keywords:
  - webdav sync tool
  - webdav file manager
  - webdav to google drive
  - webdav cloud sync
  - webdav backup tool
  - connect webdav rclone
  - webdav gui client
  - webdav transfer files
  - webdav nas sync
  - webdav multi cloud
tags:
  - RcloneView
  - webdav
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewで任意のWebDAVサーバーに接続 — Google Drive、S3、70以上のクラウドと同期

> WebDAVはあらゆる場所で使われています — Synology、QNAP、Nextcloud、ownCloud、Box、pCloud、その他多数のサービスがサポートしています。RcloneViewは任意のWebDAVエンドポイントを、参照・同期・バックアップ可能な一級のクラウドリモートに変えます。

WebDAV（Web Distributed Authoring and Versioning）は、最も広くサポートされているファイルアクセスプロトコルの一つです。NASデバイスはこれを公開し、セルフホスト型のクラウドアプリはこれを使用し、多くの商用サービスがアクセス方法として提供しています。RcloneViewは任意のWebDAVエンドポイントに接続し、2ペインのエクスプローラー上でGoogle Drive、S3、OneDrive、その他すべてのサポート対象プロバイダーと並べて扱えるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## WebDAVをサポートするサービス

WebDAVは、多くの人が思っている以上に一般的です。

| サービス/デバイス | WebDAV URLパターン |
|---------------|-------------------|
| Nextcloud | `https://your-server/remote.php/dav/files/username/` |
| ownCloud | `https://your-server/remote.php/webdav/` |
| Synology NAS | `https://your-nas:5006/` |
| QNAP NAS | `https://your-nas:8081/` |
| pCloud | `https://webdav.pcloud.com/` |
| Box | `https://dav.box.com/dav/` |
| 4shared | `https://webdav.4shared.com/` |

## WebDAVリモートを追加する

<img src="/support/images/en/blog/new-remote.png" alt="Add WebDAV remote" class="img-large img-center" />

RcloneViewのリモートマネージャーで、サーバーURL、ユーザー名、パスワードを使って新しいWebDAVリモートを作成します。接続後は、すぐにファイルを参照できます。

## 主なワークフロー

### WebDAV経由でNASをクラウドに同期する

多くのNASデバイスは、リモートアクセス用にWebDAVを公開しています。これを使ってNASの内容をGoogle DriveやS3に同期しましょう。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync WebDAV NAS to cloud" class="img-large img-center" />

### セルフホスト型クラウドをバックアップする

NextcloudやownCloudを運用していますか？災害復旧のために、セルフホスト型のファイルを商用クラウドにバックアップしましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Back up Nextcloud via WebDAV" class="img-large img-center" />

### 自動同期をスケジュールする

WebDAVサーバーとクラウドストレージの間で、夜間の同期を設定します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule WebDAV sync" class="img-large img-center" />

### 転送を検証する

同期されたファイルが元のファイルと一致することを確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify WebDAV sync" class="img-large img-center" />

## パフォーマンスのヒント

- インターネット経由の暗号化通信には**HTTPSを使用**する
- サーバーが対応している場合は、大きなファイルに**チャンクアップロードを有効化**する
- 低速な接続には**適切なタイムアウトを設定**する
- 共有サーバーでは**同時転送数を2〜4に制限**する

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**する。
2. **WebDAVサーバーをリモートとして追加**する。
3. 他のクラウドアカウントと**並べて参照**する。
4. 自動化されたワークフローのために**同期とスケジュール設定**を行う。

WebDAVに対応していれば、RcloneViewで管理できます。

---

**関連ガイド：**

- [NextcloudをGoogle Driveと同期する](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [WebDAV経由でNextcloudをバックアップする](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [SFTP/SMBをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
