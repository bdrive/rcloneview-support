---
slug: rcloneview-chromeos-linux-cloud-sync
title: "ChromeOSでRcloneViewを実行する — Linux経由でChromebookをクラウド同期"
authors:
  - tayson
description: "ChromeOSはLinuxアプリに対応しています。ChromebookでRcloneViewを実行して、Google Drive以外のクラウドストレージを管理しましょう。S3、OneDrive、Dropboxなど70以上のプロバイダーと同期できます。"
keywords:
  - chromeos cloud sync
  - chromebook cloud storage
  - rcloneview chromebook
  - chromeos rclone
  - chromebook file manager
  - chromeos linux apps
  - chromebook multi cloud
  - chromeos s3 sync
  - chromebook onedrive
  - chromeos cloud management
tags:
  - linux
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ChromeOSでRcloneViewを実行する — Linux経由でChromebookをクラウド同期

> ChromebookはGoogle Driveとの相性は抜群です。しかしOneDrive、S3、Dropbox、あるいは自宅のNASはどうでしょうか。ChromeOSのLinuxサポートを使えば、RcloneViewを実行してChromebook上でフルマルチクラウド管理が可能になります。

Chromebookは基本的にGoogle Driveを中心に設計されていますが、多くのユーザーは他のクラウドプロバイダーへのアクセスも必要としています。学校からOneDriveを支給されている学生、S3アクセスが必要な専門職、他のプラットフォームから乗り換えたためファイルが別の場所にある人もいるでしょう。ChromeOSのLinux(Crostini)環境を使えば、RcloneViewをインストールしてChromebookからすべてのクラウドアカウントを管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ChromeOSでLinuxを有効化する

ChromeOSにはLinux環境(Crostini)が組み込まれています。設定 → 詳細設定 → デベロッパー → Linux開発環境で有効化してください。

有効化すると、RcloneViewがネイティブに動作するDebianベースのフルLinux環境が利用できるようになります。

## RcloneViewをインストールする

標準的なLinuxインストール方法でインストールしてください。Chromebook上のLinuxコンテナは独自のファイルシステムを持ち、ChromeOSのDownloadsフォルダにもアクセスできます。

<img src="/support/images/en/blog/new-remote.png" alt="Set up RcloneView on ChromeOS" class="img-large img-center" />

## できること

### すべてのクラウドを一元管理

Google Drive、OneDrive、S3、Dropboxなど70以上のプロバイダーを1つのインターフェースで閲覧できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multi-cloud on Chromebook" class="img-large img-center" />

### プロバイダー間で転送する

2つのクラウドアカウント間でローカルにダウンロードすることなくファイルを移動できます。ローカルストレージが限られているChromebookでは特に重要な機能です。

### Google以外のクラウドをバックアップする

OneDriveやDropboxからGoogle DriveやS3へのバックアップをスケジュール設定できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule backup on Chromebook" class="img-large img-center" />

### クラウドストレージをマウントする

リモートストレージをローカルドライブとしてマウントし、ChromeOSのファイルマネージャーからアクセスできるようにします。

## ChromeOS向けのヒント

- **ストレージ容量に注意** — Chromebookは小容量のSSDを搭載していることが多いため、ローカルストレージを圧迫しないようクラウド間転送を活用しましょう
- **LinuxコンテナはDownloadsを共有** — ChromeOSのDownloadsフォルダ内のファイルはLinuxからもアクセス可能です
- キャッシュ用にLinuxコンテナへ**十分なディスク容量を割り当てて**ください
- **Linuxを常に最新の状態に保つ** — 定期的に`sudo apt update && sudo apt upgrade`を実行しましょう

## はじめに

1. ChromeOSの設定で**Linuxを有効化**します。
2. Linuxインストールガイドに従って**RcloneViewをインストール**します。
3. **クラウドアカウントを追加**します。
4. Chromebookから**管理、同期、転送**をすべて行います。

これであなたのChromebookはマルチクラウド対応のワークステーションに変わります。

---

**関連ガイド:**

- [Ubuntu/DebianにRcloneViewをインストールする](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [ARM LinuxでRcloneViewを使う](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [WSLでRcloneViewを使う](https://rcloneview.com/support/blog/rcloneview-wsl-windows-subsystem-linux)

<CloudSupportGrid />
