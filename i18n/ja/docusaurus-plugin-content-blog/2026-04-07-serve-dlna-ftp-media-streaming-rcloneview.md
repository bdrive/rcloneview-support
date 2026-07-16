---
slug: serve-dlna-ftp-media-streaming-rcloneview
title: "RcloneViewでDLNAとFTPサーバーを使ってクラウドメディアをストリーミング"
authors: [tayson]
description: "rclone serveとRcloneViewを使って、クラウドストレージへのDLNAメディアストリーミングとFTPサーバーアクセスを設定し、あらゆるデバイスでシームレスなメディア再生を実現します。"
keywords:
  - rclone dlna server
  - cloud storage media streaming
  - rclone ftp server
  - stream google drive dlna
  - cloud media server
  - rclone serve dlna
  - rcloneview media streaming
  - ftp cloud storage
  - smart tv cloud streaming
  - rclone media player
tags: [feature, media, tips, automation, mount]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでDLNAとFTPサーバーを使ってクラウドメディアをストリーミング

> rclone serveを通じて、スマートTVやメディアプレーヤー、FTPクライアントに直接コンテンツをストリーミングし、クラウドストレージを個人用メディアサーバーに変えましょう。

クラウドストレージには数テラバイトの写真、動画、音楽が保存されていますが、それをリビングのTVや従来のファイル転送ツールでアクセスするのは面倒で回りくどいものです。rcloneの`serve`コマンドは、あらゆるクラウドリモートをDLNAメディアサーバー、FTPサーバー、HTTPサーバー、WebDAVエンドポイントとして公開することでこの問題を解決します。リモートの管理と接続の監視のためのRcloneViewの直感的なインターフェースと組み合わせることで、数分で完全に機能するクラウドバックエンドのメディアサーバーをセットアップできます。このガイドでは、スマートTVやメディアプレーヤーへのDLNAストリーミング、レガシークライアントアクセス向けのFTPサーバー設定、スムーズな再生のためのパフォーマンスチューニング、マルチユーザー環境向けのアクセス制御について説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone Serveの仕組み

rcloneの`serve`コマンドは、標準プロトコル（DLNA、FTP、HTTP、WebDAV）からのリクエストをクラウドストレージAPI呼び出しに変換するローカルサーバーを作成します。スマートTVがDLNA経由で動画をリクエストすると、rcloneはクラウドプロバイダーからファイルを取得し、リアルタイムでストリーミングします。クライアントデバイス側はクラウドストレージにアクセスしていることを意識せず、単に標準的なメディアサーバーやファイルサーバーとして認識するだけです。

**利用可能なserveプロトコル:**

| プロトコル | ユースケース | 主なクライアント |
|----------|----------|----------------|
| DLNA | TVやプレーヤーへのメディアストリーミング | スマートTV、VLC、Kodi、Xbox、PlayStation |
| FTP | レガシーアプリケーション向けファイル転送 | FileZilla、WinSCP、コマンドラインFTPクライアント |
| HTTP | ブラウザベースのファイルアクセス | 任意のWebブラウザ |
| WebDAV | マウント可能なネットワークドライブ | Windowsエクスプローラー、macOS Finder、Linuxファイルマネージャー |
| SFTP | セキュアなファイル転送 | SSHクライアント、SFTP対応アプリケーション |

**アーキテクチャの概要:**

データフローは次のようにシンプルです。

1. クライアントデバイスが、ローカルネットワーク上のrclone serveインスタンスを検出または接続します。
2. クライアントがファイル一覧または特定のファイルをリクエストします。
3. rcloneがそのリクエストをクラウドストレージAPI呼び出しに変換します。
4. データがクラウドプロバイダーからrcloneを経由してクライアントへストリーミングされます。
5. オプションのVFSキャッシュにより、頻繁にアクセスされるデータがローカルに保存され、再アクセスが高速化されます。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

このアーキテクチャにより、メディアライブラリを完全にクラウド上に置きながら、標準プロトコルを通じてネットワーク上のあらゆるデバイスからアクセス可能にできます。

## DLNAメディアストリーミングの設定

DLNA（Digital Living Network Alliance）は、家庭内ネットワークにおけるメディアストリーミングの汎用標準です。ほぼすべてのスマートTV、ゲーム機、メディアプレーヤーがDLNAの検出と再生に対応しています。

**基本的なDLNAサーバーの起動:**

RcloneViewに統合されたターミナルから、クラウドメディアライブラリを指すDLNAサーバーを起動します。

```bash
rclone serve dlna gdrive:/Media
```

これにより、ローカルネットワーク上で自身を告知するDLNAサーバーが即座に作成されます。同じネットワーク上のDLNA対応デバイスは自動的にこれを検出します。

**DLNAサーバーのカスタマイズ:**

```bash
rclone serve dlna gdrive:/Media \
  --name "Cloud Media Server" \
  --addr :7879 \
  --log-level INFO \
  --vfs-cache-mode full \
  --vfs-cache-max-size 10G \
  --vfs-read-ahead 128M
```

**主なDLNAフラグ:**

| フラグ | 目的 | 推奨値 |
|------|---------|-------------------|
| `--name` | クライアントに表示されるサーバー名 | 「Cloud Movies」のような分かりやすい名前 |
| `--addr` | リッスンアドレスとポート | `:7879`（デフォルト） |
| `--vfs-cache-mode` | キャッシュ戦略 | スムーズなストリーミングには`full` |
| `--vfs-cache-max-size` | ローカルキャッシュの最大サイズ | ディスク容量に応じて5〜20GB |
| `--vfs-read-ahead` | データの先読みバッファ | 動画ストリーミングには128M〜256M |
| `--vfs-cache-max-age` | キャッシュファイルの保持期間 | メディアライブラリには`24h` |

**スマートTVからの接続:**

1. 上記のコマンドでDLNAサーバーを起動します。
2. スマートTVでメディアプレーヤーまたはDLNAブラウザを開きます（正確な名称はメーカーによって異なります。Samsungは「SmartThings」、LGは「Media Player」、Sonyは「Media Player」を使用します）。
3. 指定したサーバー名（例:「Cloud Media Server」）を探します。
4. フォルダを閲覧し、再生するメディアを選択します。

**VLCからの接続:**

1. VLCメディアプレーヤーを開きます。
2. 表示 > プレイリスト > ローカルネットワーク > Universal Plug'n'Playに移動します。
3. rcloneのDLNAサーバーがリストに表示されます。
4. メディアを閲覧して直接再生します。

**S3互換ストレージからのメディア配信:**

S3やそれに類するオブジェクトストレージは、ギガバイトあたりの低コストのため、メディアライブラリに最適です。

```bash
# Serve from Wasabi (S3-compatible, no egress fees)
rclone serve dlna wasabi:media-bucket \
  --name "Wasabi Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## FTPサーバーの設定

FTPは、特にレガシーアプリケーション、ネットワーク接続デバイス、自動化ワークフローで今なお広く使われています。rcloneは、あらゆるクラウドリモートを完全に機能するFTPサーバーとして公開できます。

**基本的なFTPサーバーの起動:**

```bash
rclone serve ftp gdrive: --addr :2121 --user ftpuser --pass ftppassword
```

これにより、Google Drive全体へのアクセスを提供するFTPサーバーがポート2121で作成されます。

**高度なFTP設定:**

```bash
rclone serve ftp s3:my-bucket \
  --addr :2121 \
  --user admin \
  --pass secure-password \
  --passive-port 30000-30100 \
  --vfs-cache-mode writes \
  --vfs-cache-max-size 5G \
  --dir-cache-time 5m \
  --log-level INFO
```

**主なFTPフラグ:**

| フラグ | 目的 |
|------|---------|
| `--addr` | リッスンアドレスとポート |
| `--user` / `--pass` | FTP認証情報 |
| `--passive-port` | パッシブモード接続用のポート範囲 |
| `--vfs-cache-mode` | アップロード対応には`writes`、読み書きキャッシュには`full` |
| `--dir-cache-time` | ディレクトリ一覧のキャッシュ保持時間 |
| `--read-only` | アップロードや変更を禁止 |

**FileZillaや他のFTPクライアントからの接続:**

1. FTPクライアントを開きます。
2. ホスト（rcloneを実行しているマシンのIP）、ポート（2121）、ユーザー名、パスワードを入力します。
3. 接続し、従来のFTPサーバーと同じ感覚でクラウドストレージを閲覧します。

**FTP配信のユースケース:**

- **レガシーアプリケーションとの連携:** FTPのみをサポートする古いアプリケーションでも、クラウドストレージにアクセスできるようになります。
- **ネットワークスキャナーからのアップロード:** ドキュメントスキャナーからスキャンしたファイルをFTP経由でクラウドストレージに直接送信するよう設定できます。
- **自動ファイルドロップ:** 外部からファイルを受け取るための書き込み専用FTPエンドポイントを設定します。
- **クロスプラットフォームアクセス:** FTPは追加のソフトウェアをインストールすることなく、あらゆるOSで動作します。

## ストリーミング向けのパフォーマンスチューニング

スムーズなメディアストリーミングには、rcloneのVFS（Virtual File System）キャッシュとネットワーク設定の入念なチューニングが必要です。

**VFSキャッシュモードの理解:**

| モード | 動作 | 最適な用途 |
|------|------|--------|
| `off` | キャッシュなし、直接ストリーミング | 小さなファイル、高帯域幅接続 |
| `minimal` | 開いているファイルのみキャッシュ | 軽いメディア閲覧 |
| `writes` | 書き込みをローカルにキャッシュし、読み込みはストリーミング | アップロードが多いFTP利用 |
| `full` | 読み書き両方の完全キャッシュ | 動画ストリーミング、メディア再生 |

メディアストリーミングには、`full`キャッシュモードがほぼ常に正しい選択です。これにより、ネットワークの遅延やAPIのスロットリングによって動画再生が途切れることを防げます。

**動画ストリーミング向けの最適化:**

```bash
rclone serve dlna gdrive:/Movies \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --vfs-cache-max-age 72h \
  --buffer-size 64M \
  --vfs-read-chunk-size 32M \
  --vfs-read-chunk-size-limit 256M
```

主要なパラメーターの説明:
- **`--vfs-read-ahead 256M`**: 現在の再生位置より256MB先のデータを先読みし、再生中のバッファリングを防ぎます。
- **`--vfs-read-chunk-size 32M`**: 読み込みの初期チャンクサイズ。32MBから始まり、上限まで倍増していきます。
- **`--vfs-read-chunk-size-limit 256M`**: チャンクサイズの上限。チャンクが大きいほどAPI呼び出しは減りますが、初期レイテンシは高くなります。
- **`--buffer-size 64M`**: 開いている各ファイルに対するインメモリバッファ。

**帯域幅の考慮事項:**

動画ストリーミングに必要な帯域幅は、画質によって大きく異なります。

| 動画品質 | ビットレート | 最低限必要な回線速度 |
|--------------|---------|-------------------|
| 720p | 3〜5 Mbps | 10 Mbps推奨 |
| 1080p | 8〜12 Mbps | 25 Mbps推奨 |
| 4K | 25〜40 Mbps | 50 Mbps推奨 |

インターネット回線やクラウドプロバイダーのegress（送信）速度がこれらのレートを維持できない場合は、アップロード前にメディアを低ビットレートにトランスコードするか、Wasabiやegress速度が速いS3バケットとCDNを組み合わせたプロバイダーの利用を検討してください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**ストリーミングパフォーマンスの監視:**

RcloneViewの転送モニタリングを使用して、リアルタイムのスループットを観察し、ボトルネックを特定します。頻繁な一時停止の後にバースト転送が見られる場合は、read-aheadバッファを増やしてください。転送が一貫して遅い場合、ボトルネックはおそらくインターネット回線かクラウドプロバイダー側のスループット制限です。

## アクセス制御とマルチユーザー設定

共有環境では、誰がどのコンテンツにアクセスできるかを制御する必要があります。

**FTPのマルチユーザー設定:**

rcloneのFTPサーバーは、単一のユーザー/パスワードペアを直接サポートします。マルチユーザー環境では、異なるポートで複数のserveインスタンスを実行します。

```bash
# Family media - read only
rclone serve ftp gdrive:/Media/Family \
  --addr :2121 --user family --pass familypass --read-only &

# Admin access - full control
rclone serve ftp gdrive: \
  --addr :2122 --user admin --pass adminpass &
```

**読み取り専用アクセス:**

メディアサーバーの場合、通常は読み取り専用アクセスが適切です。

```bash
rclone serve dlna gdrive:/Media --read-only
rclone serve ftp gdrive:/Media --read-only --user viewer --pass viewerpass
```

**特定のディレクトリへの制限:**

特定のサブディレクトリのみを配信することで、公開範囲を制限します。

```bash
# Only serve the Movies folder, not the entire drive
rclone serve dlna gdrive:/Media/Movies --name "Movies"

# Serve a specific S3 prefix
rclone serve ftp s3:media-bucket/public --user public --pass publicpass
```

**ネットワークレベルの制限:**

特定のインターフェースにバインドすることで、ネットワークアクセスを制御します。

```bash
# Only accessible from local machine
rclone serve dlna gdrive:/Media --addr 127.0.0.1:7879

# Only accessible from local network
rclone serve ftp gdrive: --addr 192.168.1.100:2121 --user admin --pass adminpass
```

## 常駐サービスとしての実行

常時稼働のメディアサーバーにするには、rclone serveを自動起動するよう設定します。

**Linux systemdサービス:**

```bash
sudo cat > /etc/systemd/system/rclone-dlna.service << 'EOF'
[Unit]
Description=Rclone DLNA Media Server
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=rclone
ExecStart=/usr/bin/rclone serve dlna gdrive:/Media \
  --name "Cloud Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --log-file /var/log/rclone-dlna.log \
  --log-level INFO
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable rclone-dlna
sudo systemctl start rclone-dlna
```

**Windowsでのサービス設定:**

Windowsでは、NSSM（Non-Sucking Service Manager）やタスクスケジューラを使用して、起動時にrclone serveコマンドを実行します。

```powershell
# Using Task Scheduler (run at login)
schtasks /create /tn "Rclone DLNA" /tr "rclone serve dlna gdrive:/Media --name CloudMedia --vfs-cache-mode full" /sc onlogon
```

**複数のサーバーを同時に実行:**

互換性を最大化するために、DLNAサーバーとFTPサーバーを同時に実行できます。

```bash
# DLNA for smart TVs and media players
rclone serve dlna gdrive:/Media --name "Cloud Media" &

# FTP for file manager access
rclone serve ftp gdrive: --addr :2121 --user admin --pass adminpass &

# HTTP for browser access
rclone serve http gdrive:/Media --addr :8080 --read-only &
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

## ServeとMountの比較

`rclone serve`と`rclone mount`はどちらもクラウドストレージをローカルからアクセス可能にしますが、それぞれ異なる目的を持っています。

| 機能 | Serve（DLNA/FTP） | Mount |
|---------|------------------|-------|
| プロトコル | DLNA、FTP、HTTP、WebDAV | FUSE/WinFSPファイルシステム |
| クライアント互換性 | プロトコルに対応する任意のクライアント | ファイルシステム経由の任意のアプリケーション |
| ネットワークアクセス | ネットワーク上のすべてのデバイスから利用可能 | デフォルトではローカルマシンのみ |
| セットアップの複雑さ | シンプルなコマンド、ドライバー不要 | FUSE（Linux/Mac）またはWinFSP（Windows）が必要 |
| メディアプレーヤーのサポート | ネイティブなDLNA検出 | プレーヤーにマウントパスを指定する必要あり |
| 複数の同時ユーザー | 対応（組み込み） | ファイルシステムの共有機能に依存 |

**serveを使うべき場面:**
- スマートTV、ゲーム機、ネットワーク対応プレーヤーへのメディアストリーミング
- レガシーアプリケーションやデバイス向けのFTPアクセス提供
- ネットワーク上の複数ユーザーとのクラウドファイル共有
- FUSE/WinFSPドライバーのインストール回避

**mountを使うべき場面:**
- ローカルパスを前提とするデスクトップアプリケーションからクラウドファイルにアクセスする場合
- オフィスアプリケーションでクラウドファイルを直接編集する場合
- ローカルファイルパスを操作するスクリプトを実行する場合

多くの構成では、serveとmountを同時に実行することで、両方の利点を得ることができます。

## 始めてみましょう

rclone serveは、クラウドストレージを受動的なアーカイブから、能動的なメディアサーバー兼ファイル共有プラットフォームへと変えます。まずはクラウドのメディアフォルダを指すシンプルなDLNAサーバーから始め、スマートTVやVLCプレーヤーで再生をテストしてください。ストリーミングが安定して動作することを確認したら、VFSキャッシュを追加してより滑らかな再生を実現し、より幅広いファイルアクセスのためにFTPエンドポイントを設定し、サービスが自動起動するように構成しましょう。RcloneViewでリモートを管理し接続を監視することで、既存のクラウドストレージのサブスクリプション以外に一切追加コストのかからない、完全なクラウドバックエンドのメディアサーバーを手に入れることができます。

---

**関連ガイド:**
- [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [リモートストレージの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [S3リモートストレージ接続設定](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
