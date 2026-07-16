---
slug: rcloneview-linux-mint-cloud-sync
title: "Linux MintでRcloneViewをインストールしてクラウド同期を使う"
authors:
  - tayson
description: "Linux MintにRcloneViewをインストールし、クラウド同期、バックアップ、ファイル管理をセットアップします。Cinnamon、MATE、Xfceエディション向けのステップバイステップガイド。"
keywords:
  - rcloneview
  - linux mint cloud sync
  - rcloneview linux mint
  - linux mint cloud storage
  - linux mint google drive
  - linux mint onedrive
  - linux mint cloud backup
  - linux mint file manager cloud
  - mint rclone gui
  - linux mint dropbox alternative
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Linux MintでRcloneViewをインストールしてクラウド同期を使う

> Linux Mintは最も人気のあるデスクトップLinuxディストリビューションの1つですが、基本的なNemoファイルマネージャーのプラグイン以上のクラウドストレージ統合機能を備えていません — **RcloneView**はこのギャップをマルチクラウド対応の完全なサポートで埋めます。

Linux Mintには、Nemoファイルマネージャー、システムバックアップ用のTimeshift、洗練されたCinnamon(またはMATE/Xfce)デスクトップなど、優れたデスクトップツールが搭載されています。しかし、クラウドストレージとの統合は最小限です。システム標準のGoogle Drive、OneDrive、Dropboxクライアントはありません。サードパーティ製のソリューション(Insync、rclone CLI、MATEのGNOME Online Accountsなど)は存在しますが、包括的なマルチクラウドGUIを提供するものはありません。RcloneViewはLinux Mintのすべてのエディションでネイティブに動作し、70以上のクラウドプロバイダーに接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Linux Mintへのインストール

Linux MintはUbuntu LTSをベースにしているため、インストール手順はUbuntu/Debianシステムと同じです。

### 方法1: AppImage(推奨)

AppImageは最も簡単なインストール方法で、Linux Mintのすべてのエディション(Cinnamon、MATE、Xfce)で動作します。

1. [rcloneview.com](https://rcloneview.com/src/download.html)からRcloneViewのAppImageをダウンロードします。
2. 実行可能にします。Nemoでファイルを右クリックし、プロパティ > 権限を選択して、「プログラムとして実行を許可する」にチェックを入れます。またはターミナルで`chmod +x RcloneView-*.AppImage`を実行します。
3. ダブルクリックして起動します。

AppImageには、埋め込まれたrcloneバイナリを含め、RcloneViewに必要なすべてが含まれています。システムパッケージは不要です。

### 方法2: .debパッケージ

RcloneViewのウェブサイトから`.deb`パッケージをダウンロードします。ダブルクリックしてインストールする(パッケージマネージャーが開きます)か、ターミナルから実行します。

```
sudo dpkg -i rcloneview_*.deb
sudo apt-get install -f
```

`.deb`パッケージはシステムと統合されます — アプリケーションメニューにRcloneViewを追加し、デスクトップファイルの関連付けを処理します。

## マウント用のFUSEセットアップ

Linux Mintでクラウドストレージをローカルディレクトリとしてマウントするには、FUSEが利用可能である必要があります。ほとんどのMintのインストールにはデフォルトでFUSEが含まれています。以下を実行して確認してください。

```
fusermount --version
```

FUSEがインストールされていない場合は、追加してください。

```
sudo apt install fuse3
```

ユーザーが`fuse`グループに属していることを確認してください。

```
sudo usermod -a -G fuse $USER
```

グループの変更を有効にするには、一度ログアウトして再度ログインしてください。これで、RcloneViewは任意のクラウドプロバイダーをローカルディレクトリとしてマウントでき、Nemo上でローカルフォルダと並んで表示されるようになります。

## クラウドストレージリモートの追加

RcloneViewを起動し、リモートマネージャーを開きます。クラウドアカウントを追加します。

- **Google Drive**: Google Driveを選択し、デフォルトブラウザ(MintではFirefoxまたはChromium)でOAuth認証を行います。
- **OneDrive**: Microsoft OneDriveを選択し、OAuth認証を行います。
- **Dropbox**: Dropboxを選択し、OAuth認証を行います。
- **S3互換**: AWS S3、Wasabi、Backblaze B2 S3などのアクセスキー、シークレットキー、エンドポイントを入力します。

各リモートはエクスプローラーのドロップダウンに表示されます。Linux Mintのデフォルトブラウザは、特別な設定なしでOAuthフローをスムーズに処理します。

<img src="/support/images/en/blog/new-remote.png" alt="Adding cloud remotes on Linux Mint in RcloneView" class="img-large img-center" />

## クラウドファイルの閲覧と管理

RcloneViewの2ペインエクスプローラーは、クラウド操作においてNemoを補完します。Nemoはローカルファイルを優れた形で処理しますが、RcloneViewはその機能をクラウドストレージにも拡張します。一方のペインでGoogle Driveを閲覧し、もう一方のペインでローカルのホームディレクトリを閲覧します。両者の間、あるいは異なる2つのクラウドプロバイダーの間でファイルをドラッグアンドドロップできます。

Nemoのデュアルペインモード(Nemo拡張機能として利用可能)に慣れているユーザーにとって、RcloneViewのレイアウトは自然に感じられるでしょう。違いは、RcloneViewのペインはローカルとネットワークパスだけでなく、任意のクラウドプロバイダーを開けることです。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing cloud storage on Linux Mint with RcloneView" class="img-large img-center" />

## Nemoでのクラウドストレージのマウント

マウントすると、クラウドストレージのディレクトリは他のフォルダと同様にNemo上に表示されます。マウントされたクラウドストレージ上のファイルを、Linux Mintのアプリケーション(LibreOffice、GIMP、VLCなど)から直接開くことができます。

Google Driveを`~/GoogleDrive`にマウントすると、Nemoのサイドバーに表示されます。スムーズなパフォーマンスのためにVFSキャッシュを有効にしてください — 最近アクセスしたファイルはローカルにキャッシュされるため、繰り返しのアクセスは即座に行われます。利用可能なディスク容量に基づいてキャッシュサイズを設定してください。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting cloud storage as local drive on Linux Mint" class="img-large img-center" />

## システム統合によるバックアップのスケジューリング

RcloneViewの組み込みスケジューラーは、定期的なバックアップジョブを処理します。ホームディレクトリ(または特定のフォルダ)からGoogle Drive、Backblaze B2、その他のクラウドプロバイダーへの毎晩の同期を設定します。RcloneViewはスケジュールされたジョブを自動的に実行します。

システムレベルのスケジューリングを好むLinux Mintユーザーは、RcloneViewの外部rclone接続モードを使用して、cronやsystemdタイマー経由でrcloneコマンドをトリガーすることもできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud backup on Linux Mint in RcloneView" class="img-large img-center" />

## ログイン時の自動起動

Linux Mintにログインしたときに自動的にRcloneViewを起動するには、以下の手順に従ってください。

1. システムメニューから**スタートアップアプリケーション**を開きます。
2. 「追加」をクリックし、RcloneViewのAppImageまたはインストールされたバイナリへのパスを入力します。
3. RcloneViewはデスクトップセッションとともに起動し、スケジュールされたジョブとマウントされたドライブの準備が整います。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します — AppImageまたは.deb。
2. クラウドストレージをマウントする予定がある場合は、FUSEをインストールしてください。
3. リモートマネージャーでクラウドアカウントを追加します。
4. Linux Mintのデスクトップからファイルを閲覧、同期、バックアップします。

Linux Mintは洗練されたデスクトップ環境を提供し、RcloneViewはシステムにネイティブでは備わっていないマルチクラウドのファイル管理機能を追加します。両者を組み合わせることで、ローカルとクラウドストレージを完全にコントロールできます。

---

**関連ガイド:**

- [Google Driveの追加](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
