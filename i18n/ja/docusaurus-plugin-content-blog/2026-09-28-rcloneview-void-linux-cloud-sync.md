---
slug: rcloneview-void-linux-cloud-sync
title: "Void LinuxでRcloneViewを使う — クラウドストレージの同期とバックアップ"
authors:
  - steve
description: "マルチクラウドのファイル管理、マウント、同期のために、AppImageビルドを使ってVoid LinuxにRcloneViewをインストールして実行します。"
keywords:
  - RcloneView Void Linux
  - void linux クラウドストレージ
  - void linux appimage
  - rclone gui void linux
  - void linuxでクラウドストレージをマウント
  - void linux バックアップツール
  - xbps rclone gui
  - void linux runit クラウド同期
  - void linux クラウドファイルマネージャー
  - クロスプラットフォーム クラウド gui linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Void LinuxでRcloneViewを使う — クラウドストレージの同期とバックアップ

> XBPSパッケージが登場するのを待つことなく、Void Linux上で本格的なグラフィカルなマルチクラウドマネージャーを実行しましょう。

Void Linuxのローリングリリースかつ独立したパッケージ基盤(XBPS、runit)により、多くのGUIアプリは登場が遅れるか、まったくパッケージ化されないことがあります。RcloneViewはXBPSリポジトリには存在しませんが、Linux用の.AppImage、.deb、.rpmとして独自のダウンロードページから配布されているため、Voidユーザーはディストリビューション固有のビルドを待たずに直接実行できます。RcloneViewはネイティブGUIアプリケーションであり、ヘッドレスサービスではないため、X11またはWaylandのデスクトップ環境が必要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## VoidへのRcloneViewインストール

Voidで最も確実な方法は、独自のランタイムをバンドルしXBPSのパッケージ命名や依存関係の不一致を完全に回避できる.AppImageです。x86_64またはaarch64向けの`RcloneView-{version}-{arch}.AppImage`ファイルをダウンロードし、実行権限を付与してから、ファイルマネージャーまたはターミナルから直接実行してください。VoidはAPTやRPMのリポジトリを維持していないため、.debや.rpmビルドを使いたい場合は、`xbps-install`でインストールするのではなく手動で展開する必要があります。RcloneViewはrcloneview.comからのみ配布されており、AUR、Flatpak、Snapパッケージという代替手段はありません。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote setup running on Void Linux" class="img-large img-center" />

起動する前に、システムトレイのサポートのためにGTK+3と`libayatana-appindicator3-1`または`libappindicator3-1`のどちらかが存在することを確認してください — Voidの最小構成のベースは、一部のデスクトップ志向のディストリビューションのようにはこれらをデフォルトでインストールしません。

## リモートとマウントの設定

RcloneViewが起動したら、他のプラットフォームと同じ方法でクラウドリモートを追加します。Google DriveやDropboxのようなサービスはOAuthログイン、S3互換やSFTPのエンドポイントは認証情報の入力です。マウントはLinux上で組み込みrcloneのnfsmount方式を通じて動作し、FUSEが必要です — Voidの最小インストールではしばしば省略されているため、まだ存在しない場合はXBPSで`fuse3`をインストールしてください。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote as a local drive on Void Linux" class="img-large img-center" />

RcloneViewは90以上のプロバイダーに接続し、それらすべてを同じウィンドウでWindows、macOS、Linuxを問わずマウント・同期できます — Void Linuxのワークステーションと他のマシンとで作業を分けている場合に便利です。

## runitを念頭に置いたバックアップのスケジューリング

RcloneViewはsystemdサービスとして実行することはできず、Voidはsystemdをまったく使わず、runitを実行しています。RcloneView自身のJob Managerがinitシステムに依存せず内部的にスケジューリングを処理するため、この違いはここでは問題になりません。アプリがシステムトレイで開いたままの間にバックアップがタイマーで実行されるよう、crontab形式のスケジューラ(PLUS機能)を通じてスケジュール同期ジョブを設定してください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring cloud backup job on Void Linux" class="img-large img-center" />

GUIなしで真にバックグラウンドで動作するデーモンをVoidで使いたい場合、それはRcloneViewではなく`rclone rcd`が担う仕事です — アプリ自体は実行するために常にディスプレイサーバーを必要とします。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**AppImageをダウンロード**し、実行権限を付与します。
2. マウントやトレイ機能がそのまま動作しない場合は、XBPSで`fuse3`とAppIndicatorライブラリをインストールしてください。
3. クラウドリモートを追加し、Explorerパネルでアクセスを確認します。
4. 同期またはバックアップのジョブを作成し、必要に応じて自動実行するようスケジュールします。

Voidのミニマリズムは、クラウドストレージを手作業で管理しなければならないことを意味する必要はありません — RcloneViewはどこでも同じGUIワークフローをここにも持ち込みます。

---

**関連ガイド:**

- [Gentoo LinuxでRcloneViewを使う — クラウドストレージの同期とバックアップ](https://rcloneview.com/support/blog/rcloneview-gentoo-linux-cloud-sync)
- [Arch LinuxでRcloneViewを使う — クラウドストレージの同期とバックアップ](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [UbuntuおよびDebian LinuxへのRcloneViewのインストール](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)

<CloudSupportGrid />
