---
slug: rcloneview-elementary-os-cloud-sync
title: "Elementary OSでRcloneViewを使う — クラウドストレージの同期とバックアップ"
authors:
  - alex
description: "Elementary OSにRcloneViewをインストールし、ドラッグ&ドロップの同期、マウント、スケジュールバックアップで90以上のクラウドプロバイダーを1つのGUIから管理。"
keywords:
  - RcloneView Elementary OS
  - Elementary OS クラウドストレージ
  - Elementary OS rclone GUI
  - install RcloneView deb Elementary
  - Elementary OS クラウド同期
  - Elementary OS クラウドバックアップ
  - Pantheon クラウドストレージクライアント
  - cross-platform cloud manager Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Elementary OSでRcloneViewを使う — クラウドストレージの同期とバックアップ

> Elementary OSでRcloneViewを実行し、PantheonデスクトップになじむネイティブなGUIから90以上のクラウドプロバイダーを閲覧・同期・マウント・バックアップしましょう。

Elementary OSはUbuntu LTSをベースにしながら独自のPantheonデスクトップを搭載しており、macOSのようなすっきりしたワークフローを求めてこのディストリビューションを選んだユーザーは、クラウドストレージツールにも同じ完成度を求め、素のターミナルに頼りたくないと考えることが多いものです。RcloneViewはElementary OSにネイティブな.debパッケージとしてインストールされ、Google DriveからAmazon S3、SFTPサーバーまで、rcloneがサポートするあらゆるリモートに対して本格的なファイルマネージャー風のインターフェースを提供します。マウント専用のツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダ比較を行えるため、ドライブのマウントとスケジュールバックアップの実行を同じアプリから行えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Elementary OSにRcloneViewをインストールする

Elementary OSはDebian/Ubuntuベースなので、RcloneViewは公式[ダウンロードページ](https://rcloneview.com/src/download.html)で配布されている.debパッケージからインストールします — x86_64版を、ARM64ハードウェアでElementaryを動かしている場合はaarch64版を入手し、ターミナルで `sudo dpkg -i rclone_view-*-linux-{arch}.deb` を実行してインストールしてください。ここにはFlathubもSnap Storeパッケージもありません — .debの直接ダウンロードが唯一サポートされているインストール方法で、パッケージ管理を完全に避けたい場合はAppImageも利用できます。

Elementary OSはPantheonを通じて標準でGTK+とWayland/X11セッションを備えており、RcloneViewが必要とするディスプレイとツールキットの要件を最初から満たしています。インストール後に確認する価値があるのは `libayatana-appindicator3-1` です。RcloneViewのシステムトレイアイコンはこのライブラリに依存していますが、一部の最小構成のElementaryインストールではデスクトップを軽量に保つためインジケーターライブラリが省かれていることがあります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView main window running on Elementary OS with a new remote dialog open" class="img-large img-center" />

## クラウドリモートを接続する

RcloneViewをインストールすれば、他のどのプラットフォームとも同じ手順でリモートを追加できます。Remoteタブ > New Remoteでプロバイダーを選び、ブラウザのポップアップで認証するか(Google Drive、Dropbox、OneDrive、Box)、または認証情報を直接入力します(Amazon S3、Backblaze B2、SFTP)。組み込みのrcloneバイナリが `http://127.0.0.1:5582` を通じてすべてを処理するため、別に稼働している外部rcloneインスタンスにRcloneViewを接続したい場合を除き、Elementary OS上で追加のインストールや設定は必要ありません。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote as a local drive on Elementary OS with RcloneView" class="img-large img-center" />

マウントにはLinuxで `nfsmount` が使われます — Explorerでリモートフォルダを選択し、パネルツールバーのマウントアイコンをクリックすると、クラウドフォルダはどのPantheonアプリからも直接開けるローカルパスとして表示されます。マウント機能を使うにはFUSE(fuse3推奨)がインストールされている必要があります。

## 同期ジョブをスケジュールする

一日中電源が入ったままのElementary OSマシンであれば、スケジュールされた同期ジョブによってRcloneViewを手動で起動するツールではなく、手をかけずに済むバックアップツールに変えられます。4ステップのSyncウィザードでジョブを作成し、一時ファイルや大きすぎるファイルをスキップするフィルターを追加した上で — PLUSライセンスでは — crontab形式のスケジュールを設定し、必要な頻度で自動実行させましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled sync job on Elementary OS in RcloneView" class="img-large img-center" />

Job Historyはステータス、所要時間、転送速度とともにすべての実行を記録するため、見ていない間に静かに失敗していないか、夜間バックアップが実際に完了したかを簡単に確認できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください — Elementary OS用にx86_64またはaarch64の.debを入手します。
2. `sudo dpkg -i rclone_view-*-linux-{arch}.deb` でインストールします。
3. Remoteタブ > New Remoteから最初のクラウドリモートを追加します。
4. 同期またはマウントを設定し、Pantheonデスクトップから直接クラウドストレージの管理を始めましょう。

.debをインストールすれば、Elementary OSでもWindowsやmacOSのユーザーと同じドラッグ&ドロップによるクラウド管理体験が得られ、デスクトップならではのすっきりとした統一感を損なうこともありません。

---

**関連ガイド:**

- [Ubuntu と Debian LinuxにRcloneViewをインストールする](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Linux MintでRcloneViewを使う — クラウドストレージの同期とバックアップ](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)
- [Zorin OSでRcloneViewを使う — クラウドストレージの同期とバックアップ](https://rcloneview.com/support/blog/rcloneview-zorin-os-linux-cloud-sync)

<CloudSupportGrid />
