---
slug: rcloneview-kali-linux-cloud-sync
title: "Kali LinuxでRcloneViewを使う — クラウドストレージの同期とバックアップ"
authors:
  - jay
description: "Kali LinuxにRcloneViewをインストールし、安全で監査可能なGUIワークフローで90以上のクラウドプロバイダーをマウント、同期、バックアップしましょう。"
keywords:
  - RcloneView Kali Linux
  - cloud storage Kali Linux
  - install RcloneView Debian
  - cloud sync penetration testing
  - mount cloud drive Kali
  - rclone GUI Kali Linux
  - backup forensic evidence cloud
  - cloud backup security professionals
  - Kali Linux cloud storage GUI
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

> CLIに触れることなく、案件データ、フォレンジックイメージ、クライアント成果物を同期できるグラフィカルなマルチクラウドファイルマネージャーをKali Linuxで動かしましょう。

Kali Linuxはペネトレーションテストとデジタルフォレンジックのために作られたDebianベースのディストリビューションで、Kaliで作業するセキュリティチームは大容量の証拠セット、パケットキャプチャ、クライアントレポートをローカルストレージとクラウドアカウントの間で移動させる必要がよくあります。RcloneViewはそのワークフローにグラフィカルなファイルマネージャーをもたらし、他のツールを実行しているのと同じデスクトップからクラウドストレージの閲覧、同期、マウントを行えるようにします。KaliはX11を含むフルのXfceデスクトップを標準搭載しているため、RcloneViewの実行に必要な表示要件を満たしています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kali LinuxへのRcloneViewインストール

KaliはDebianをベースにしているため、[rcloneview.com](https://rcloneview.com/src/download.html)で配布されている公式`.deb`パッケージは、DebianやUbuntuと同じ方法でインストールできます — `rclone_view-{version}-linux-{arch}.deb`ファイルをダウンロードし、`dpkg -i`でインストールして、不足している依存関係は`apt --fix-broken install`で解決してください。Kaliは`x86_64`ビルドを直接提供しており、パッケージをシステム全体にインストールしたくない場合は、インストールなしで直接実行できる`.AppImage`形式が良い代替手段になります。

RcloneViewはFlutterベースのGUIアプリケーションでありコマンドラインツールではないため、Kaliが標準で実行するグラフィカルなXfce/X11セッションを必要とします — X11フォワーディングやリモートデスクトップセッションなしのヘッドレスSSH接続では起動しません。また、システムトレイアイコンのためにGTK+3とAppIndicatorライブラリに依存しており、どちらも標準のKaliデスクトップインストールに含まれています。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

## 案件データ用のクラウドストレージ接続

インストール後は、RemoteタブのNew Removeウィザードからリモートを追加します。Amazon S3、Cloudflare R2、Backblaze B2はアクセスキーとシークレットの認証情報入力方式で、大容量のフォレンジックディスクイメージやパケットキャプチャの保存に適しています。一方、Google Drive、OneDrive、BoxはOAuthブラウザログインでクライアント向けレポートの受け渡しを処理します。RcloneViewの同期とFolder Compare機能はFREEライセンスでも利用できるため、アップグレードなしでキャプチャした証拠をクラウドストレージへ転送し、破損なく到着したかを確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between cloud remotes in RcloneView on Kali" class="img-large img-center" />

## 証拠バックアップの同期と検証

証拠保全の連続性（チェーン・オブ・カストディ）ワークフローでは、同期ジョブを実行する前にDry Runを実行して、コピーまたは削除されるファイルを正確に事前確認し、その後Folder Compareで転送元と転送先が一致しているか検証してください。比較画面はサイズの差異でファイルを表示し、同一ファイルは並べて一致表示するため、フォレンジックイメージが破損なく転送されたかを確認する必要がある場合に便利です。同期ジョブのAdvanced Settingsステップでチェックサム比較を有効にすると、サイズのみの照合より強力な整合性検証が行えます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder compare results view in RcloneView" class="img-large img-center" />

## 案件対応中のクラウドストレージマウント

Mount Managerを使ってクラウドリモートをローカルドライブとしてマウントすることもでき、Linuxでは`nfsmount`方式のFUSEを利用します — `fuse3`がインストールされていることを確認してください。これにより、手動でダウンロードするステップなしに、他のKaliツールからクラウド上の事件ファイルを直接開けるようになり、共有中の証拠への誤った書き込みを防ぎたい場合には読み取り専用でマウントするオプションも使えます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote from the Mount Manager in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください — `x86_64`用の`.deb`または`.AppImage`ビルドを取得します。
2. `dpkg -i`でインストールします（またはAppImageを実行可能にして直接実行します）。
3. プロバイダーに応じてOAuthログインまたは認証情報入力を使い、New Remoteウィザードでクラウドリモートを追加します。
4. Dry Runを実行し、続いて実際の同期ジョブを実行して、Folder Compareで結果を検証します。

毎回の転送前に目視で確認できるGUIを使うことで、ローカルディスクとクラウドストレージ全体にわたる証拠とクライアント成果物の整理がはるかにミスの少ない作業になります。

---

**関連ガイド:**

- [Ubuntu / Debian LinuxへのRcloneViewインストール](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Debian LinuxでRcloneViewを使う — クラウドストレージの同期とバックアップ](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [RcloneViewによるサイバーセキュリティ企業向けクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-cybersecurity-companies-rcloneview)

<CloudSupportGrid />
