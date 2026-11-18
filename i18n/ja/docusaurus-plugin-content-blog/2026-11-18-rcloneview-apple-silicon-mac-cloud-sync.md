---
slug: rcloneview-apple-silicon-mac-cloud-sync
title: "Apple Silicon Mac で RcloneView を使う — クラウドストレージの同期とバックアップ"
authors:
  - robin
description: "Universal .dmg で RcloneView を Apple Silicon Mac 上でネイティブに実行。1 つの macOS アプリで 90 以上のクラウドプロバイダーをマウント、同期、バックアップできます。"
keywords:
  - rcloneview apple silicon
  - rclone gui m1 mac
  - Apple Silicon Mac クラウド同期
  - MacBook クラウドストレージ マウント
  - rclone universal binary macos
  - Mac mini クラウドバックアップ
  - macOS クラウドドライブ マウント
  - rcloneview macOS インストール
  - Mac Google ドライブ OneDrive 同期
  - arm64 Mac クラウドストレージ管理
tags:
  - RcloneView
  - macos
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Apple Silicon Mac で RcloneView を使う — クラウドストレージの同期とバックアップ

> 1 つの Universal ダウンロードで Apple Silicon と Intel の両方の Mac でネイティブに動作し、rclone エンジンも内蔵されています。

Apple Silicon Mac のユーザーの多くは、複数のクラウドアカウントを使い分けています。RcloneView は、Google Drive、OneDrive、Dropbox、S3 バケット、NAS 共有をはじめ数十種類のリモートを閲覧、マウント、比較、同期できる 1 つのネイティブ macOS アプリを提供します。このガイドでは、Apple Silicon マシンにインストールする前に知っておきたいことを説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apple Silicon と Intel に対応する 1 つの Universal .dmg

macOS 版 RcloneView は、Universal バイナリを含む単一の `.dmg` ディスクイメージとして提供されます。Apple Silicon 向けの ARM64 コードと Intel Mac 向けの x86-64 コードの両方が含まれており、Apple Silicon ではアプリがネイティブに動作します。ビルドは開発元によって公証およびコード署名されているため、Gatekeeper で回避策なしに開けます。

最小サポートバージョンは macOS 12.7（Monterey）で、Ventura、Sonoma、Sequoia での動作が確認されています。インストーラーは公式の[ダウンロードページ](https://rcloneview.com/src/download.html)からのみ入手してください。Homebrew cask やその他のパッケージマネージャーのチャネルはありません。インストール後は、macOS 版がアプリ内で自動的にアップデートされます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on an Apple Silicon Mac" class="img-large img-center" />

RcloneView には独自の rclone バイナリが含まれているため、他に何もインストールする必要はありません。Remote タブを開き、**New Remote** をクリックしてサインインします。Google Drive、Dropbox、OneDrive、Box はブラウザの OAuth ログインを使用します。Wasabi や Cloudflare R2 などの S3 互換サービスでは、代わりにアクセスキーを求められます。

## Finder でクラウドドライブをマウントする

macOS では、RcloneView はデフォルトで `nfsmount` を使ってマウントし、任意のマウントパスを選択できます。エクスプローラーでフォルダを選択して Mount アイコンをクリックすると、リモートが Finder にローカルボリュームのように表示されます。デフォルトの VFS キャッシュモード `writes` は、ほとんどの編集作業に適しています。16 GB の MacBook Air で 2 TB のアーカイブを閲覧する写真家なら、キャッシュが内蔵 SSD を埋め尽くさないようにキャッシュの最大サイズを設定することもできます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager showing cloud drives mounted on macOS" class="img-large img-center" />

マウントは Mount Manager またはメニューバーのトレイアイコンから管理できます。PLUS ライセンスでは、Auto mount によりログインのたびにドライブが再接続されます。

## 最初に整えておきたい macOS の設定 2 つ

macOS のプライバシー制御により、RcloneView 内でデスクトップ、書類、ダウンロードの各フォルダが空に見えることがあります。**System Settings > Privacy & Security > Files & Folders** でアクセスを許可するか、RcloneView を **Full Disk Access** に追加してから、アプリを再起動してください。

大規模な同期ジョブでは、macOS のデフォルトのオープンファイル数上限（256–1024）に達することもあります。「too many open files」エラーが出た場合は、`/Library/LaunchDaemons/limit.maxfiles.plist` に LaunchDaemon plist を作成してソフトリミットとハードリミットを 524288 に引き上げ、再起動してください。

## Mac からのスケジュールバックアップ

同期ウィザードで一方向のジョブを設定します。たとえば `~/Projects` を Backblaze B2 バケットへ送るジョブを作り、まず Dry Run で何が変わるかを正確に確認します。RcloneView は Windows、macOS、Linux で、1 つのウィンドウから 90 以上のプロバイダーをマウントし同期します。PLUS ライセンスでは、アプリがメニューバーに常駐している間、スケジュール設定ステップで cron 形式のスケジュールに従ってジョブを実行できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled cloud backup job in RcloneView on macOS" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**し、Universal `.dmg` から Applications にドラッグします。
2. System Settings で Files & Folders または Full Disk Access の権限を付与し、アプリを再起動します。
3. **New Remote** でクラウドリモートを追加し、Finder で表示したいものをマウントします。
4. 同期ジョブを作成して Dry Run で確認し、Transferring タブで進行状況を確認します。

RcloneView を設定すれば、Mac 1 台で使用中のクラウドアカウントをまとめてマウント、同期、バックアップできます。

---

**関連ガイド：**

- [macOS Sequoia で RcloneView を使う — クラウドストレージ同期](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [macOS の Too Many Open Files エラーを解決する](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [macOS の空フォルダと権限の問題を解決する](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
