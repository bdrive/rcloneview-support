---
slug: rcloneview-endeavouros-cloud-sync
title: "EndeavourOS で RcloneView を使う — クラウドストレージの同期とバックアップ"
authors:
  - steve
description: "公式 AppImage で EndeavourOS 上の RcloneView を実行。GTK+3 と FUSE の要件、クラウドドライブのマウント、90 以上のクラウドプロバイダーの同期を解説します。"
keywords:
  - RcloneView EndeavourOS
  - EndeavourOS クラウド同期
  - EndeavourOS rclone GUI
  - Arch 系 Linux クラウドバックアップ
  - RcloneView AppImage
  - EndeavourOS クラウドドライブ マウント
  - EndeavourOS Google Drive 同期
  - Linux マルチクラウド ファイルマネージャー
  - ローリングリリース クラウドバックアップ
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# EndeavourOS で RcloneView を使う — クラウドストレージの同期とバックアップ

> EndeavourOS はすぐに使えるデスクトップを備えたローリング型の Arch ベースで、公式の RcloneView AppImage はサードパーティ製パッケージなしでその上で動作します。

EndeavourOS のユーザーは、最新のソフトウェアと最小限の手動設定を求めるのが一般的です。しかしクラウドストレージは手薄になりがちです。Google Drive、OneDrive、S3 バケットにはこの環境向けのネイティブデスクトップクライアントがなく、複数の CLI 設定を使い分けるのは手間がかかります。RcloneView は Windows、macOS、Linux で、1 つのウィンドウから 90 以上のプロバイダーをマウント・同期でき、独自の組み込み rclone を同梱しています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 公式 AppImage でインストールする

RcloneView は [rcloneview.com](https://rcloneview.com/src/download.html) からのみ配布されています。AUR パッケージは存在しないため、ほかで見かける `yay` や `paru` の手順は無視してください。Arch 系システムでは AppImage が自然な選択です。お使いのアーキテクチャ（x86_64 または aarch64）のビルドをダウンロードし、実行権限を付けて起動します。

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

RcloneView は Qt アプリではなく Flutter のデスクトップアプリです。GTK+3、稼働中の X11 または Wayland セッション、そしてシステムトレイアイコン用の AppIndicator ライブラリが必要です。EndeavourOS の標準デスクトップエディション（KDE Plasma、Xfce、GNOME など）はディスプレイサーバーを備えており、通常は GTK+3 も含まれています。マウントには FUSE をインストールしてください。fuse3 を推奨します（`sudo pacman -S --needed fuse3`）。

<img src="/support/images/en/blog/new-remote.png" alt="EndeavourOS 上の RcloneView で新しいクラウドリモートを追加する" class="img-large img-center" />

AppImage は自己完結型なので、ローリングの `pacman -Syu` で置き換えられることはありません。自動アップデートは macOS 専用のため、Linux では同じページから新しい AppImage をダウンロードして更新します。

## リモートの接続とドライブのマウント

**Remote > New Remote** を開きます。Google Drive、Dropbox、OneDrive、Box、pCloud はブラウザーの OAuth でサインインします。S3、Backblaze B2、Cloudflare R2 はアクセスキーを入力します。リモートは Explorer にタブとして表示され、最大 4 つのパネルに分割して NAS の共有フォルダーとクラウドバケットを並べて閲覧できます。

Dolphin や Thunar でクラウドのファイルを扱うには、リモートをマウントします。パネルツールバーの Mount アイコンをクリックするか、Mount Manager を開いて新しいマウントを作成します。Linux では `~/cloud/gdrive` のようなローカルパスを選び、既定の `writes` キャッシュモードでほとんどの編集に対応できます。ほかのローカルユーザーがマウントにアクセスする必要がある場合にのみ **Allow other** を有効にしてください。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Linux で RcloneView のエクスプローラーからクラウドリモートをマウントする" class="img-large img-center" />

## 同期とバックアップのスケジュール

`~/Projects` と `~/Documents` がある開発者のワークステーションを想像してください。ローカルディスクから Backblaze B2 への同期ジョブを作成し、Step 3 で `.git/` フィルターを追加し、ドライラン（Dry Run）を実行して転送内容を正確に確認します。一方向同期は転送先だけを変更します。双方向同期（Beta）はまだ実験的なので、重要でないフォルダーで先にテストしてください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Linux のバックアップジョブ中の RcloneView のライブ転送モニタリング" class="img-large img-center" />

PLUS ライセンスでは Step 4 に crontab 形式のスケジュール機能が加わり、RcloneView がトレイにある間、ジョブが毎晩実行されます。RcloneView はデスクトップセッション上で動作する必要があり、systemd サービスとしては実行できません。ヘッドレスの Arch サーバーでは、サーバー側で `rclone rcd` を実行し、デスクトップから Connect Manager で接続してください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView でスケジュール付き同期ジョブを作成する" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**し、お使いのアーキテクチャ用の Linux AppImage を選びます。
2. AppImage に実行権限を付け、マウントが必要なら `fuse3` をインストールし、デスクトップセッションから起動します。
3. クラウドリモートを追加し、ファイルマネージャーで使いたいものをマウントします。
4. 同期ジョブを作成してドライランでテストし、PLUS をお持ちならスケジュールを設定します。

ローリングリリースのデスクトップと 1 つのマルチクラウドウィンドウがあれば、手間の少ないバックアップ環境を構築できます。

---

**関連ガイド：**

- [VFS キャッシュによるマウントのパフォーマンス](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Rclone マウントの FUSE エラーを修正する](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)
- [Connection Manager — 組み込み rclone と外部 rclone](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)

<CloudSupportGrid />
