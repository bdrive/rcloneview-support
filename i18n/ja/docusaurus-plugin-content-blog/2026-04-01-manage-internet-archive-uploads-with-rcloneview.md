---
slug: manage-internet-archive-uploads-with-rcloneview
title: "RcloneViewでInternet Archiveへのアップロードを管理する方法"
authors:
  - tayson
description: "RcloneViewを使ってInternet Archiveにファイルをアップロードし、コレクションを整理し、ローカルアーカイブを同期する方法。rcloneのInternet Archiveバックエンド向けのビジュアルGUI。"
keywords:
  - internet archive rcloneview
  - upload to internet archive rclone
  - internet archive rclone gui
  - archive.org file upload
  - internet archive cloud sync
  - rcloneview internet archive
  - archive.org bulk upload
  - internet archive backup
  - rclone internet archive backend
  - preserve files internet archive
tags:
  - internet-archive
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでInternet Archiveへのアップロードを管理する方法

> Internet Archiveは、書籍、音楽、ソフトウェア、動画、Webページなど、人類の知識を無料で永久に保存しています。RcloneViewを使えば、コマンドラインを使わずに自分のファイルをarchive.orgへアップロード、整理、同期できます。

Internet Archive（archive.org）は、公開共有可能なファイルのための無料かつ永続的なクラウドストレージを提供しています。研究者、アーキビスト、教育者、そしてデジタルコモンズに貢献したいすべての人に利用されています。rcloneのInternet Archiveバックエンドはこれをスクリプト化可能にし、RcloneViewはその機能をビジュアルインターフェースでラップします。これにより、アーカイブアイテムの閲覧、新しいファイルのアップロード、コレクションの同期を数クリックで行えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView + Internet Archiveでできること

- **既存または新規のarchive.orgアイテムへファイルやフォルダをアップロード**
- **アップロード済みのアイテムをファイルマネージャーのようにビジュアルに閲覧**
- **保存目的でローカルコレクションをInternet Archiveに同期**
- **Internet Archiveと他のクラウドプロバイダー間でファイルをコピー**
- **転送の進行状況をリアルタイムで監視**

## Internet Archiveリモートのセットアップ

### ステップ1 — Internet Archiveの認証情報を取得する

1. [archive.org](https://archive.org)で無料アカウントを作成します。
2. **My Account → Settings → Security**に移動し、**S3-like APIキー**（アクセスキー＋シークレットキー）を生成します。名前とは異なり、これはAWSではなく、archive.org独自のS3互換APIです。

### ステップ2 — RcloneViewでリモートを追加する

RcloneViewを開き、**New Remote**をクリックします。

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote in RcloneView" class="img-large img-center" />

1. リモートタイプのリストから**Internet Archive**を選択します。
2. archive.orgの**Access Key ID**と**Secret Access Key**を入力します。
3. リモートに名前を付け（例：`internet-archive`）、保存します。

### ステップ3 — アイテムを閲覧する

接続後、RcloneViewはarchive.orgのアイテムをフォルダとして表示します。Internet Archive上の各「アイテム」は、1回のアップロード（アルバム、書籍のスキャン、動画コレクションなど）のコンテナです。

## Internet Archiveへのファイルアップロード

### 新しいアイテムをアップロードする

新しいarchive.orgアイテムを作成してファイルをアップロードするには次のようにします。

1. RcloneViewの右パネルで、`internet-archive`リモート内へ移動します。
2. 一意のアイテム識別子を持つ新しいフォルダを作成します（例：`my-1980s-radio-recordings`）。
3. ローカルパネルからアイテムフォルダへファイルをドラッグ＆ドロップします。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse and upload to Internet Archive items" class="img-large img-center" />

RcloneViewはファイルを転送し、進行状況をリアルタイムで表示します。Internet Archiveはアップロードを非同期で処理するため、ファイルサイズに応じて数分から数時間でアイテムが公開されます。

### 既存のアイテムへアップロードする

既存のアイテムフォルダへ移動し、ファイルをコピーまたは移動します。RcloneViewはマルチパートアップロードとリトライ処理を自動的に行います。

## ローカルアーカイブコレクションの同期

進行中のアーカイブプロジェクトに最適な、ローカルフォルダをInternet Archiveのアイテムと同期し続ける方法です。

1. RcloneViewで**Jobs**を開きます。
2. **Source**をローカルフォルダに設定します（例：`D:\my-archive-project`）。
3. **Destination**をInternet Archiveのアイテムに設定します（例：`internet-archive:my-1980s-radio-recordings`）。
4. 新規または変更されたファイルのみをアップロードする**Sync**モードを選択します。
5. 週次または手動実行でスケジュールします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync job to Internet Archive" class="img-large img-center" />

## Internet Archiveからのダウンロードとコピー

RcloneViewは双方向で動作します。以下のこともできます。

- 公開されているarchive.orgアイテムから**ファイルをダウンロード**してローカルマシンに保存する。
- 冗長的な保存のために、Internet Archiveから別のクラウド（例：archive.org → Google DriveまたはBackblaze B2）へ**アイテムをコピー**する。

## Internet Archiveバックエンドに関する重要な注意点

| 動作 | 詳細 |
|----------|--------|
| アイテムの作成 | 新しいフォルダは新しいarchive.orgアイテムになります |
| 可視性 | アップロードされたアイテムはデフォルトで公開されます |
| ファイルの削除 | 削除はキューに入り、archive.orgがゆっくり処理します |
| チェックサム | アップロード時にMD5チェックサムが検証されます |
| レート制限 | archive.orgのクロール制限を尊重し、APIへの過度なアクセスを避けてください |

## ユースケース

**デジタルアーカイブプロジェクト** — パブリックドメインで永久に保存したいスキャン、録音、文書をアップロードします。

**ソフトウェアの保存** — ライセンスが許す範囲で、古いソフトウェア、ゲーム、ROMをアーカイブに寄贈します。

**バックアップの冗長化** — 機密性のない公開共有可能なデータのための無料のセカンダリバックアップ層として、Internet Archiveを利用します。

**研究用データセット** — 世界中の研究者がアクセスできるよう、パブリックライセンス付きのデータセットをアップロードします。

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. archive.orgのAccount Settingsで**archive.orgのAPIキーを生成**します。
3. RcloneViewのリモートセットアップウィザードで**Internet Archiveリモートを追加**します。
4. **アップロード、同期、そして保存**しましょう — あなたのファイルはarchive.org上で無料かつ永久に残ります。

Internet Archiveは1996年からWebと人類の文化を保存し続けています。RcloneViewは、自分のデジタル資料を寄贈することを簡単にします。

---

**関連ガイド:**

- [RcloneViewでクラウドバックアップを暗号化する](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [マルチクラウドバックアップ戦略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
