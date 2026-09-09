---
slug: rcloneview-kali-linux-cloud-sync
title: "Kali LinuxでRcloneViewを使う — クラウドストレージの同期とバックアップ"
authors:
  - jay
description: "Kali LinuxにRcloneViewをインストールし、エンゲージメントの証拠、レポート、キャプチャデータ用のクラウドストレージをマウント、同期、暗号化します。"
keywords:
  - RcloneView Kali Linux
  - Kali Linux クラウドストレージ
  - クラウド同期 Kali Linux
  - クラウドドライブ マウント Kali Linux
  - Debianベースのクラウドバックアップ
  - 侵入テスト クラウドバックアップ暗号化
  - RcloneView インストール Linux
  - Kali Linux バックアップツール
  - GTK クラウド同期アプリ
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kali LinuxでRcloneViewを使う — クラウドストレージの同期とバックアップ

> 既存のXFCEデスクトップのワークフローを離れることなく、Kali Linuxでクラウドストレージをマウント、同期、暗号化します。

Kali Linuxは主にセキュリティテストに使用されるDebianベースのディストリビューションであり、エンゲージメントはスクリーンショット、パケットキャプチャ、レポートを継続的に生成し、それらをローカルディスクから素早く移動させる必要があります。RcloneViewは、Kaliユーザーにターミナルでrcloneコマンドを手書きすることなく、90以上のクラウドプロバイダーを接続し、ローカルドライブとしてマウントし、スケジュールされた同期ジョブを実行するグラフィカルな方法を提供します。Kaliはデフォルトで完全なX11/Waylandデスクトップを搭載しているため、RcloneViewのGUIは他のDebianファミリーのディストリビューションと同じように動作します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kali LinuxへのRcloneViewのインストール

KaliはDebianをベースにしているため、[rcloneview.com](https://rcloneview.com/src/download.html)からの公式`.deb`パッケージは、`dpkg -i`の後に依存関係を解決する`apt-get install -f`を実行することでクリーンにインストールできます。RcloneViewはシステムトレイアイコンのためにGTK+ 3.0と`libayatana-appindicator3-1`または`libappindicator3-1`のいずれかを必要とし、リモートをローカルドライブとしてマウントする予定がある場合は`fuse3`も必要です。RcloneView用のAUR、Snap、Flatpak、APTリポジトリは存在しません — `.deb`ファイルがKaliでサポートされている唯一のインストール方法であるため、そうでないと主張するサードパーティのパッケージリストは無視してください。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

RcloneViewには組み込みのrcloneバイナリが同梱されているため、初回起動時に追加設定は不要です — アプリは自動的に`127.0.0.1:5582`経由で通信します。

## フィールドワーク向けにクラウドストレージをマウントする

リモートが接続されたら、Explorerパネルで選択し、パネルツールバーのMountアイコンをクリックして、Linuxの`nfsmount`でローカルドライブとして公開します。これは、共有されたGoogle DriveやBoxフォルダに保存された証拠を、データセット全体を先にダウンロードすることなく、ローカルツールから直接確認する際に役立ちます。ソースファイルを変更するリスクなしに閲覧する必要があるエンゲージメントのために、マウント設定で読み取り専用モードを利用できます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a remote folder from the RcloneView Explorer panel" class="img-large img-center" />

## バックアップの暗号化と自動化

機密性の高いエンゲージメントデータは、マシンから出る前に暗号化しておく必要があります。RcloneViewのCrypt仮想リモートは既存のリモートをラップし、アップロード前にファイル名と内容を暗号化します。通常の転送に使われるのと同じ4ステップの同期ウィザードが、暗号化されたレイヤーに対しても機能します。S3、Azure、Backblaze B2はFREEライセンスでも完全な読み書きで接続できるため、暗号化されたオフサイトコピーに有料プランは必要ありません。無人バックアップのためのcrontab形式のスケジューリングはPLUSライセンスの機能です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring encrypted sync job in RcloneView" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード**: [rcloneview.com](https://rcloneview.com/src/download.html)からx86_64またはaarch64用の`.deb`を入手してください。
2. GTK+3、appindicator、FUSEの依存関係を取得するために`dpkg -i rclone_view-*.deb && apt-get install -f`でインストールします。
3. クラウドリモートを追加し、機密データについては最初の同期を実行する前にCryptリモートでラップします。
4. 各実行後にJob Historyを確認して転送件数を確かめ、早期にエラーを発見してください。

RcloneViewを導入したKaliは、既に作業しているデスクトップを離れることなく、エンゲージメントの成果物を高速かつ暗号化された形でローカルディスクから移動できることを意味します。

---

**関連ガイド:**

- [Debian LinuxでRcloneViewを使う — クラウドストレージの同期とバックアップ](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [任意のSFTPサーバーをRcloneViewに接続する — クラウドストレージでリモートサーバーを同期](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [ファイアウォールとウイルス対策ソフトによるクラウド同期のブロックを解決する — RcloneViewで接続エラーを解消](https://rcloneview.com/support/blog/fix-firewall-antivirus-blocking-cloud-sync-rcloneview)

<CloudSupportGrid />
