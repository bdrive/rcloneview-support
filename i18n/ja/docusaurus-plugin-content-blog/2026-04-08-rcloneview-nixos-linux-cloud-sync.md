---
slug: rcloneview-nixos-linux-cloud-sync
title: "NixOSでRcloneViewを使ってクラウド同期とバックアップを行う"
authors:
  - tayson
description: "AppImageのセットアップ、FUSEマウント、NixOS固有の設定のコツを含む、NixOSでRcloneViewをインストールしてクラウド同期とバックアップを行うためのステップバイステップガイド。"
keywords:
  - rcloneview
  - nixos cloud sync
  - rclone nixos
  - nixos appimage
  - nixos cloud backup
  - nixos fuse mount
  - nix package manager rclone
  - nixos cloud storage
  - appimage-run nixos
  - declarative cloud sync
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# NixOSでRcloneViewを使ってクラウド同期とバックアップを行う

> NixOSはシステム設定に対する独自の宣言的アプローチを提供しますが、サードパーティ製のGUIアプリケーションを実行するにはいくつかの追加手順が必要です。**RcloneView**は、AppImageサポートとFUSEをセットアップすれば、Linuxの中でも最も再現性の高いディストリビューションの1つでスムーズに動作し、強力なビジュアルクラウドマネージャーを提供します。

NixOSは、Nixパッケージマネージャーと完全に宣言的な設定モデルを中心に構築されたLinuxディストリビューションです。パッケージを命令的にインストールする代わりに、システム全体の状態を設定ファイルで定義し、それを再ビルドします。このアプローチにより、システムは再現性が高く、ロールバックが容易になり、環境を完全に制御したい開発者やパワーユーザーに最適です。

しかし、NixOSの独特なファイルシステムレイアウト（`/lib`や`/usr/lib`がなく、従来のFHSも存在しない）のため、AppImageを含む標準的なLinuxバイナリはそのままでは動作しません。RcloneViewはLinux向けにAppImageとして配布されているため、起動する前にNixOSでAppImageの互換性を有効にする必要があります。

このガイドでは、rcloneのインストール、AppImageサポートの有効化、RcloneViewの実行、クラウドマウント用のFUSEの設定、systemdサービスとしての自動同期の設定まで、一連のプロセスを解説します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## NixOSの概要とクラウドストレージにとって重要な理由

NixOSはシステム設定をコードとして扱います。`/etc/nixos/configuration.nix`ファイルには、インストールされているすべてのパッケージ、有効化されたサービス、システム設定が定義されています。`nixos-rebuild switch`を実行すると、システムは新しい状態へアトミックに移行します。何か問題が起きても、数秒で以前の世代にロールバックできます。

クラウドストレージのワークフローにおいて、これは同期とバックアップの設定全体をバージョン管理できることを意味します。rcloneのインストール、FUSEの設定、systemdサービスはすべて1つのファイルで定義され、任意のNixOSマシンで再現できます。

## Nixpkgs経由でRcloneをインストールする

Rcloneは公式のNixpkgsリポジトリで利用可能です。システム設定に追加します。

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
  rclone
];
```

その後、システムを再ビルドします。

```bash
sudo nixos-rebuild switch
```

`rclone version`を実行してインストールを確認してください。これにより、RcloneViewのGUIが管理するrcloneバックエンドが利用可能になります。

## NixOSでRcloneViewのAppImageを実行する

AppImageはすべての依存関係を1つの実行ファイルにまとめていますが、NixOSが提供していないFHSパスに依存しています。NixOSには主に2つの解決策があります。`appimage-run`と`nix-ld`です。

### オプションA: appimage-runを使用する

`appimage-run`をシステムパッケージに追加します。

```nix
environment.systemPackages = with pkgs; [
  rclone
  appimage-run
];
```

再ビルド後、[rcloneview.com](https://rcloneview.com/src/download.html)からRcloneViewのAppImageをダウンロードし、実行権限を付与して起動します。

```bash
chmod +x RcloneView-*.AppImage
appimage-run RcloneView-*.AppImage
```

### オプションB: nix-ldを使用する

`nix-ld`モジュールは、標準的なLinuxバイナリが動的ライブラリを見つけられるようにする互換性シムを提供します。設定で有効化します。

```nix
programs.nix-ld.enable = true;
```

再ビルド後は、`appimage-run`ラッパーなしでAppImageを直接実行できるはずです。

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

どちらの方法でも動作します。シンプルさを求めるなら`appimage-run`を、多くのサードパーティ製バイナリを実行するなら`nix-ld`を選んでください。

## クラウドマウント用にFUSEを設定する

RcloneViewはクラウドストレージをローカルディレクトリとしてマウントできますが、そのためにはFUSE（Filesystem in Userspace）が必要です。NixOSでは、設定でFUSEを有効化します。

```nix
# FUSEを有効化
environment.systemPackages = with pkgs; [
  fuse
  fuse3
];

# 一般ユーザーによるFUSEファイルシステムのマウントを許可
programs.fuse.userAllowOther = true;
```

再ビルドして、`/dev/fuse`が存在することを確認してください。これで、RcloneViewのマウント機能を使って、クラウドストレージをローカルフォルダーのようにアクセスできるようになります。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## RcloneViewでクラウドリモートを設定する

RcloneViewを起動し、リモート設定ウィザードを使ってクラウドプロバイダーを追加します。プロセスは他のLinuxディストリビューションと同じです。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

RcloneViewはGoogle Drive、OneDrive、Dropbox、AWS S3、Wasabi、Backblaze B2、Cloudflare R2など、数十種類のプロバイダーをサポートしています。GUIは、ブラウザで開くOAuthフローを含め、各プロバイダーの認証をガイドしてくれます。

rcloneの設定はデフォルトで`~/.config/rclone/rclone.conf`に保存されます。NixOSでは、このパスはNixストアの外にあるホームディレクトリ内に存在するため、通常どおり機能します。

## 同期ジョブの作成と転送のスケジューリング

リモートの設定が完了したら、RcloneViewの2ペインエクスプローラーを使ってクラウドストレージを閲覧し、同期ジョブを作成します。ペイン間でファイルをドラッグして転送を開始するか、ジョブスケジューラーで定期実行のジョブを設定します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

システムの宣言的モデルとの統合を好むNixOSユーザー向けに、rcloneの同期コマンドをタイマーで実行するsystemdサービスを定義し、RcloneViewの組み込みスケジューラーと併用することもできます。

## 自動同期用のsystemdサービスを設定する

NixOSでは、カスタムsystemdサービスを宣言的に定義するのは簡単です。タイマーベースの同期サービスを設定に追加します。

```nix
systemd.user.services.rclone-backup = {
  description = "Rclone cloud backup";
  serviceConfig = {
    ExecStart = "${pkgs.rclone}/bin/rclone sync /home/user/documents remote:backup/documents";
    Type = "oneshot";
  };
};

systemd.user.timers.rclone-backup = {
  description = "Run rclone backup daily";
  timerConfig = {
    OnCalendar = "daily";
    Persistent = true;
  };
  wantedBy = [ "timers.target" ];
};
```

これはRcloneViewのGUIスケジューラーと併用できます。ヘッドレスサーバーにはsystemdによる方法を、対話的に使用するワークステーションにはRcloneViewのスケジューラーを使用してください。

## NixOS固有のヒント

**rcloneのバージョンを固定する。** NixOSでは、オーバーレイやフレークを使ってパッケージのバージョンを簡単に固定できます。新しいrcloneのリリースで破壊的変更が発生した場合でも、アップグレードの準備が整うまで既知の安定バージョンにとどまることができます。

**ユーザーレベルの設定にはHome Managerを使う。** Home Managerを使用している場合、rcloneの設定ファイル、AppImageのデスクトップエントリ、自動起動設定をユーザー環境内で宣言的に管理できます。

**アプリケーションランチャー用のデスクトップエントリ。** RcloneViewがアプリケーションメニューに表示されるように、`.desktop`ファイルを作成します。

```nix
xdg.desktopEntries.rcloneview = {
  name = "RcloneView";
  exec = "appimage-run /home/user/Applications/RcloneView.AppImage";
  icon = "rcloneview";
  type = "Application";
  categories = [ "Utility" "FileManager" ];
};
```

**ロールバックの安全性。** NixOSはアトミックなロールバックをサポートしているため、rcloneの設定を安心して試すことができます。同期ジョブの設定に誤りがあった場合は、NixOSの世代をロールバックすれば、システムは以前の状態に戻ります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. `rclone`、`appimage-run`、`fuse3`をNixOSの設定に追加し、再ビルドします。
3. `appimage-run`でRcloneViewを起動し、クラウドリモートを追加して同期を開始します。
4. 必要に応じて、完全に宣言的な自動バックアップのために、NixOSの設定にsystemdタイマーを定義します。

NixOSとRcloneViewを組み合わせることで、どのマシンにも複製できる、再現性がありバージョン管理されたクラウドストレージのワークフローを実現できます。

---

**関連ガイド:**

- [リモートストレージの参照と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [AWS S3およびS3互換ストレージを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
