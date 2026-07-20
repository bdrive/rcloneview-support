---
slug: serve-webdav-http-from-cloud-rcloneview
title: "RcloneViewでクラウドストレージをWebDAVまたはHTTPとして公開する"
authors:
  - tayson
description: "rcloneのserveコマンドをRcloneView経由で使用し、クラウドストレージをローカルのWebDAVまたはHTTPサーバーとして公開します。ドライブをマウントせずに、WebDAVに対応したアプリからファイルにアクセスできます。"
keywords:
  - rclone serve webdav
  - expose cloud storage webdav
  - rcloneview serve http
  - cloud storage webdav server
  - rclone webdav local server
  - access cloud via webdav
  - serve google drive webdav
  - rclone serve command guide
  - webdav from cloud storage
  - rcloneview serve feature
tags:
  - RcloneView
  - webdav
  - cloud-storage
  - feature
  - guide
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでクラウドストレージをWebDAVまたはHTTPとして公開する

> RcloneViewは、任意のクラウドストレージプロバイダーをローカルのWebDAVまたはHTTPサーバーとして公開できます。WebDAVに対応するアプリ(ファイルマネージャー、DAMツール、クリエイティブアプリ、モバイルクライアントなど)であれば、クラウドファイルを直接読み書きできます。

rcloneのVFSレイヤーを使ってクラウドドライブをマウントするのが、クラウドストレージをローカルに公開する最も一般的な方法です。しかし、状況によっては別のアプローチが必要になります。アプリケーションがネットワーク経由で接続できるWebDAVサーバー、ブラウザにファイルを提供するためのシンプルなHTTPサーバー、あるいはFUSEドライブをマウントできないデバイスからクラウドストレージに軽量にアクセスする方法などです。rcloneの`serve`コマンドはこれらすべてに対応しており、RcloneViewはターミナルとジョブインターフェースを通じてこの機能へのアクセスを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## rcloneが提供できるサービス

rcloneは`rclone serve`コマンドを通じて複数のサーバープロトコルをサポートしています。

| プロトコル | ユースケース |
|----------|-----------|
| `webdav` | ファイルマネージャー、DAMツール、WebDAV対応アプリ |
| `http` | クラウドファイルへの読み取り専用ブラウザアクセス |
| `ftp` | レガシーアプリとの互換性 |
| `sftp` | セキュアシェルベースのファイルアクセス |
| `s3` | 任意のクラウドをS3互換として公開(S3クライアントで使用) |
| `dlna` | DLNA対応デバイスへのメディアストリーミング |

このガイドでは、デスクトップワークフローで最も有用なWebDAVとHTTPに焦点を当てます。

## ユースケース1: アプリ連携のためのWebDAV

多くのプロフェッショナル向けアプリはネイティブでWebDAVをサポートしています。Cyberduck、Finder(macOS)、Adobe Bridge、DAMツール、プロジェクト管理ツールなどです。クラウドストレージをWebDAVとして公開すると、ドライブをマウントすることなくこれらのアプリからアクセスできるようになります。

### RcloneViewからWebDAVサーバーを起動する

RcloneViewで**ターミナル**パネルを開き、以下を実行します。

```bash
rclone serve webdav gdrive:/Documents/ --addr 127.0.0.1:8888 --user myuser --pass mypassword
```

これにより、Google Driveの`/Documents/`フォルダを公開する`http://127.0.0.1:8888`のWebDAVサーバーが起動します。

<img src="/support/images/en/blog/new-remote.png" alt="Open RcloneView terminal to start serve command" class="img-large img-center" />

### アプリから接続する

WebDAVに対応した任意のアプリで、WebDAV接続を追加します。
- **URL**: `http://127.0.0.1:8888`
- **ユーザー名**: `myuser`
- **パスワード**: `mypassword`

アプリからは、Google DriveのDocumentsフォルダがWebDAV共有として見えます。閲覧、読み取り、書き込みが可能です。

## ユースケース2: 読み取り専用ブラウザアクセスのためのHTTP

クラウドアカウントへのアクセス権を与えずに同僚とファイルを共有するには、フォルダをHTTPとして公開します。

```bash
rclone serve http s3-remote:my-bucket/reports/ --addr 0.0.0.0:8080
```

ネットワーク上の誰でもブラウザで`http://your-machine-ip:8080`を開き、ダウンロードリンク付きのディレクトリ一覧を見ることができます。クラウドアカウントは不要です。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse served cloud files in browser" class="img-large img-center" />

## ユースケース3: S3クライアント互換のためのS3サービス提供

強力なテクニックとして、S3ではないクラウド(Google DriveやBackblaze B2のネイティブAPIなど)をS3互換のエンドポイントとして公開し、任意のS3クライアントからアクセスできるようにする方法があります。

```bash
rclone serve s3 gdrive:/Backups/ --addr 127.0.0.1:9000 --auth-key ACCESSKEY,SECRETKEY
```

S3クライアント(AWS CLI、s3cmd、任意のS3 SDK)は`http://127.0.0.1:9000`に接続し、あたかもS3であるかのようにGoogle Driveを操作できます。

## 永続的なサービス提供ジョブの作成

起動時またはスケジュールに従ってserveコマンドを実行するには、以下を行います。

1. RcloneViewで、**カスタムコマンド**モードで新しい**ジョブ**を作成します。
2. 必要なフラグを付けて`rclone serve webdav`コマンドを入力します。
3. RcloneView起動時に自動的に開始するように設定するか、必要に応じてスケジュールします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule serve job to run on startup" class="img-large img-center" />

## セキュリティ上の注意点

| シナリオ | 推奨事項 |
|----------|---------------|
| ローカル利用のみ | `127.0.0.1`にバインドする。自分のマシン外からはアクセスできません |
| LAN共有 | 自分のマシンのローカルIPにバインドし、`--user`と`--pass`を追加する |
| インターネット公開 | HTTPSを使用する(`--cert`と`--key`フラグを追加)か、リバースプロキシの背後に置く |
| 公開HTTPサーバー | 読み取り専用VFSで`rclone serve http`を使用する。`--read-only`を追加する |

`127.0.0.1`を超えてアクセス可能なサーバーには、必ずユーザー名/パスワードを設定してください。

```bash
rclone serve webdav remote:path --addr 0.0.0.0:8888 --user admin --pass strongpassword --read-only
```

## 便利なserveフラグ

| フラグ | 目的 |
|------|---------|
| `--addr host:port` | バインドアドレスとポート |
| `--user` / `--pass` | HTTP Basic認証 |
| `--read-only` | 書き込みを防止する |
| `--vfs-cache-mode full` | パフォーマンス向上のためファイルをローカルにキャッシュする |
| `--no-modtime` | modtimeの報告を無効化する(一部のアプリで有用) |
| `--htpasswd /path/file` | 複数ユーザー向けにhtpasswdファイルを使用する |

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. RcloneViewで**ターミナルを開き**ます。
3. **`rclone serve webdav remote:path --addr 127.0.0.1:8888`を実行**してWebDAVサーバーを起動します。
4. WebDAVのURLと認証情報を使って**アプリから接続**します。

WebDAVは、クラウドファイルを読み取ることができなかった何十ものアプリに対して、クラウドストレージへのアクセスを解放します。マウントは不要です。

---

**関連ガイド:**

- [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [SFTPとSMBをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [RcloneViewターミナル: GUI内のCLI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)

<CloudSupportGrid />
