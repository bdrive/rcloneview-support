---
slug: rcloneview-mx-linux-cloud-sync
title: "MX LinuxでRcloneViewを使う — クラウドストレージの同期とバックアップ"
authors:
  - casey
description: ".debまたはAppImageでMX Linux上でRcloneViewを実行し、1つのGUIでドラッグ&ドロップ同期、マウント、スケジュールバックアップにより90以上のクラウドプロバイダーを管理します。"
keywords:
  - RcloneView MX Linux
  - MX Linux クラウドストレージ
  - MX Linux rclone GUI
  - RcloneView deb インストール
  - MX Linux クラウド同期
  - MX Linux クラウドバックアップ
  - Debianベースのクラウドクライアント
  - クロスプラットフォーム クラウドマネージャー Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# MX LinuxでRcloneViewを使う — クラウドストレージの同期とバックアップ

> 公式の.debパッケージまたはAppImageを通じてMX LinuxでRcloneViewを実行し、ネイティブGUIからrcloneがサポートするあらゆるクラウドリモートを管理しましょう。

MX Linuxは、Debianの比較的保守的なパッケージバージョンを引き継がずに軽量でDebianベースであるという評判を築いており、古いハードウェアやミニマルなデスクトップ環境でよく選ばれています。この組み合わせは、クラウドファイルマネージャーが邪魔にならないために必要な要素そのものです — 小さなフットプリント、実際のデスクトップ環境、そしてDebianからそのまま受け継いだ.deb互換性です。RcloneViewはWindows、macOS、Linuxで1つのウィンドウから90以上のプロバイダーをマウント・同期できるため、MX Linuxマシンも他のサポート対象プラットフォームと同じ機能セットを、簡略版ではなくそのまま利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## MX LinuxへのRcloneViewのインストール

MX LinuxはDebianベースなので、[公式ダウンロードページ](https://rcloneview.com/src/download.html)の`.deb`パッケージはDebianやUbuntuと同じ方法でインストールできます — x86_64またはaarch64ビルドをダウンロードし、お好みのパッケージマネージャー(MX Package Installer、GDebi、またはターミナルからの`dpkg -i`)でインストールしてください。パッケージマネージャーをまったく使いたくない場合は、`.AppImage`ビルドも利用できます。実行権限を付与してそのまま実行するだけで、インストール手順は不要です。

RcloneView専用のMX Linuxリポジトリやppaは存在せず、AURのようなコミュニティパッケージもありません — ダウンロードページが唯一の公式配布チャネルです。インストール前に、システムトレイアイコンのためにGTK+ 3.0と`libayatana-appindicator3-1`または`libappindicator3-1`のいずれかが存在することを確認し、リモートをローカルドライブとしてマウントする予定であればFUSE(fuse3推奨)がインストールされていることも確認してください。

<img src="/support/images/en/blog/new-remote.png" alt="MX Linuxで新規リモートダイアログが開いているRcloneViewのメインウィンドウ" class="img-large img-center" />

## クラウドリモートの接続

MX Linuxでのリモート設定は、RcloneViewがサポートする他のあらゆるLinuxディストリビューションとまったく同じように機能します。Remoteタブ > New Remoteを開き、プロバイダーを選択して、ブラウザのポップアップで認証する(Google Drive、Dropbox、OneDrive、Box、pCloud)か、資格情報を直接入力します(Amazon S3、Backblaze B2、SFTP)。組み込みのrcloneバイナリはデフォルトで`http://127.0.0.1:5582`と通信するため、ネットワーク上の別の場所で動作している外部rcloneインスタンスに特に接続したい場合を除き、別途管理するrcloneのインストールは必要ありません。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneViewでMX Linux上のクラウドリモートをローカルドライブとしてマウントする" class="img-large img-center" />

接続が完了したら、`nfsmount`経由でリモートをマウントすると、他の通常のローカルパスと同じように動作します — システム上のどのファイルマネージャーやアプリケーションも、それがクラウドに支えられていることを知らなくても参照できます。

## バックアップのスケジュール設定

ほぼ一日中稼働しているMX Linuxマシンでは、スケジュールされた同期ジョブによってアプリを一度設定すればあとは放置できるバックアップツールに変えることができます。4ステップのSyncウィザードを進め、キャッシュディレクトリや大きすぎるファイルをスキップするフィルターを適用し、PLUSライセンスではcrontab形式のスケジュールを設定して、手動で開始しなくてもジョブが実行されるようにします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewでMX Linuxにスケジュールされたクラウド同期ジョブを作成する" class="img-large img-center" />

Job Historyは各実行の所要時間、転送速度、ファイル数を記録するため、スケジュールされたバックアップが夜間に静かに失敗するのではなく実際に完了したことを簡単に確認できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します — お使いのアーキテクチャに合った.debを入手するか、インストール手順を省きたい場合は.AppImageを入手してください。
2. パッケージをインストールする(またはAppImageに実行権限を付与する)とともに、GTK+3とFUSEが存在することを確認します。
3. Remoteタブ > New Remoteから最初のクラウドリモートを追加します。
4. 同期またはマウントを設定して、MX Linuxからのクラウドストレージ管理を開始します。

どちらのパッケージをインストールしても、MX Linuxは他のサポート対象Linuxデスクトップと同じ完全なクラウド同期・マウント体験を得られます。

---

**関連ガイド:**

- [Debian LinuxでRcloneViewを使う — クラウド同期](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [UbuntuおよびDebian LinuxへのRcloneViewのインストール](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Linux MintでRcloneViewを使う — クラウド同期](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)

<CloudSupportGrid />
