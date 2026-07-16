---
slug: rcloneview-zorin-os-linux-cloud-sync
title: "Zorin OSでRcloneViewを使う — クラウドストレージの同期とバックアップ"
authors:
  - tayson
description: "Zorin OSにRcloneViewをインストールし、クラウドストレージの同期とバックアップに活用する方法。Google Drive、OneDrive、S3など90以上のサービスをGUIで管理できます。"
keywords:
  - RcloneView Zorin OS
  - Zorin OS cloud storage
  - Zorin OS cloud sync
  - Zorin OS cloud backup
  - RcloneView Linux Debian
  - Zorin OS file manager cloud
  - install RcloneView Zorin
  - Linux cloud storage GUI
  - Zorin OS Google Drive
  - Ubuntu-based cloud sync
tags:
  - linux
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zorin OSでRcloneViewを使う — クラウドストレージの同期とバックアップ

> Zorin OSにRcloneViewをインストールし、90以上のクラウドストレージサービスをGUIで管理しましょう。Google Drive、OneDrive、Amazon S3などをZorin OSデスクトップ上で同期できます。

Zorin OSは、使い慣れた洗練されたデスクトップインターフェースを備えたUbuntuベースのLinuxディストリビューションで、WindowsやmacOSからの移行ユーザーに特に人気があります。Ubuntu/Debianをベースにしているため、`.deb`パッケージとシームレスに連携し、RcloneViewのインストールも簡単です。RcloneViewはFlutterで構築されたGUIデスクトップアプリケーションであり、ディスプレイサーバー(X11またはWayland)と稼働中のデスクトップ環境が必要ですが、Zorin OSのGNOMEベースのデスクトップはこれらの要件を満たしています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zorin OSへのRcloneViewのインストール

RcloneViewは[rcloneview.com](https://rcloneview.com/src/download.html)からの直接ダウンロードで配布されています。aptリポジトリやSnapパッケージは存在しないため、`apt install rcloneview`や`snap install rcloneview`を実行しないでください。公式ダウンロードページから、お使いのアーキテクチャに対応する`.deb`パッケージをダウンロードしてください。

**.debパッケージのインストール:**

```bash
sudo dpkg -i rclone_view-*-linux-x86_64.deb
```

`dpkg`が依存関係の不足を報告した場合は、次のコマンドで解決します。

```bash
sudo apt install -f
```

これにより、Zorin OS(Ubuntuのaptリポジトリを継承)上で不足しているGTKやシステムライブラリが自動的にインストールされます。

代わりに、システムへの統合が不要なポータブルインストールとして`.AppImage`を使用することもできます。

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

<img src="/support/images/en/blog/new-remote.png" alt="Setting up cloud storage remotes in RcloneView on Zorin OS" class="img-large img-center" />

## Zorin OSで必要なライブラリ

Zorin OSは、デフォルトのGNOMEデスクトップインストールの一部としてGTK+ 3.0とX11/Waylandを標準搭載しています。システムトレイのサポートには、まだインストールされていない場合はAppIndicatorライブラリをインストールしてください。

```bash
sudo apt install libayatana-appindicator3-1
```

クラウドドライブのマウント(仮想ドライブ機能)には、FUSE3をインストールしてください。

```bash
sudo apt install fuse3
```

インストール後、アプリケーションメニューまたはターミナルからRcloneViewを起動します。このアプリケーションはZorin OSのデスクトップと統合されており、システムトレイアイコンのサポートやジョブ完了時のネイティブデスクトップ通知にも対応しています。

## クラウドストレージへの接続

RcloneViewには組み込みのrcloneバイナリが同梱されているため、別途rcloneをインストールする必要はありません。Remoteタブからクラウドサービスを追加するには、New Remoteをクリックしてプロバイダーを選択します。Google Drive、OneDrive、DropboxなどOAuthベースのサービスでは、アカウント認証用のブラウザウィンドウが開きます。S3互換サービスの場合は、Access Key、Secret Key、エンドポイントURLを入力します。

Zorin OSのGNOMEベースのデスクトップは、OAuthのブラウザリダイレクトをスムーズに処理します。認証ウィンドウはデフォルトのブラウザで開き、認証情報は自動的にRcloneViewに渡されます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync running in RcloneView on Zorin OS" class="img-large img-center" />

## クラウドストレージの同期とマウント

リモートを設定したら、Sync Wizardを使ってバックアップや移行用のジョブを作成します。ソースと保存先のリモートを選択し、転送オプションとフィルターを設定し、必要に応じて定期実行をスケジュールできます(PLUSライセンス)。RcloneViewはZorin OS上でGUIアプリケーションとして動作するため、アクティブなデスクトップセッションとディスプレイサーバーが必要です。systemdのバックグラウンドサービスとして直接構成することはできません。ユーザーセッションなしで無人のスケジュールタスクを実行するには、rclone自身の`rclone rcd`をsystemdサービスとして使用し、そこにRcloneViewから接続してください。

クラウドストレージをローカルディレクトリとしてマウントするには、Remoteタブの Mount Manager を使用します。Zorin OSでは、マウントポイントのパスを指定して Save and Mount をクリックします。マウントされたフォルダーはNautilus(Zorin OSのデフォルトファイルマネージャー)に表示され、通常のローカルディレクトリと同じようにアクセスできます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as a local folder on Zorin OS with RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。x86_64向けのLinux `.deb`を選択してください。
2. `sudo dpkg -i rclone_view-*-linux-x86_64.deb`でインストールし、依存関係が不足している場合は`sudo apt install -f`を実行します。
3. マウントおよびトレイのサポートに必要であれば、`fuse3`と`libayatana-appindicator3-1`をインストールします。
4. クラウドリモートを追加し、使い慣れたZorin OSのデスクトップ環境から同期を開始しましょう。

Zorin OSのUbuntu互換性により、RcloneViewのインストールは容易になり、ユーザーはZorin OSの洗練されたデスクトップワークフローに自然に溶け込む、GUI主導のクラウドストレージ管理ツールを利用できます。

---

**関連ガイド:**

- [UbuntuおよびDebian LinuxへのRcloneViewのインストール](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Pop!_OS LinuxでRcloneViewを使う — クラウド同期](https://rcloneview.com/support/blog/rcloneview-pop-os-linux-cloud-sync)
- [Fedora、RHEL、CentOS LinuxでRcloneViewを使う](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-centos-linux)

<CloudSupportGrid />
