---
slug: mount-hetzner-storage-box-sync-cloud-rcloneview
title: "Hetzner Storage BoxをローカルドライブとしてマウントしてRcloneViewで任意のクラウドと同期"
authors:
  - tayson
description: "Hetzner Storage Boxをローカルフォルダのように利用 — SFTP経由でマウントし、ファイルを視覚的に閲覧、RcloneViewでAWS S3、Google Drive、その他のクラウドと同期・バックアップ。"
keywords:
  - hetzner storage box mount
  - hetzner storage box sync
  - hetzner storage box backup
  - hetzner sftp mount local drive
  - hetzner storage box rclone
  - hetzner storage box gui
  - hetzner to s3
  - hetzner cloud backup
  - hetzner storage box file manager
  - mount sftp as local drive
tags:
  - hetzner
  - sftp
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hetzner Storage BoxをローカルドライブとしてマウントしてRcloneViewで任意のクラウドと同期

> Hetzner Storage Boxはヨーロッパで比類なきテラバイト単価を誇りますが、FTPやSCPでのファイル管理は使い勝手が悪いものです。RcloneViewはそれをローカルドライブとしてマウントし、視覚的に任意のクラウドと同期できます。

Hetzner Storage Boxは、ヨーロッパで最もコストパフォーマンスに優れたストレージソリューションの一つです — 信頼性が高く、手頃な価格で、SFTP、FTP、SMB、WebDAV経由でアクセスできます。しかし、ネイティブのデスクトップクライアントがないため、ファイル管理にはコマンドラインツールや基本的なFTPクライアントを使う必要があります。RcloneViewはSFTP経由で接続することでこれを変え、Storage Boxをローカルドライブとしてマウントし、2ペインのエクスプローラーでファイルを閲覧し、AWS S3、Google Drive、その他のクラウドと同期できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜHetzner Storage BoxでRcloneViewを使うのか？

- **ネイティブデスクトップクライアントがない** — Hetznerは生のプロトコル（SFTP、FTP、SMB）を提供しますが、同期アプリはありません。
- **ローカルドライブとしてマウント** — Storage Boxをデスクトップ上の通常のフォルダのようにアクセスできます。
- **クロスクラウド同期** — Storage BoxのデータをS3、Google Drive、OneDriveへ自動的に複製できます。
- **視覚的なファイル管理** — CLIを使わずに閲覧、ドラッグ＆ドロップ、比較、整理ができます。

## SFTP経由でHetzner Storage Boxを接続する

1. RcloneViewを開き、**Add Remote** をクリックします。
2. プロバイダーリストから **SFTP** を選択します。
3. Hetznerの認証情報を入力します：
   - **Host**: `uXXXXXX.your-storagebox.de`（Hetzner Robotパネルから取得）
   - **Port**: `23`（Hetznerは非標準のSFTPポートを使用）
   - **Username**: Storage Boxのユーザー名（例：`u123456`）
   - **Password**: Storage Boxのパスワード
4. 保存すると、Storage Boxのディレクトリが閲覧可能になります。

<img src="/support/images/en/blog/new-remote.png" alt="Add Hetzner Storage Box via SFTP" class="img-large img-center" />

## ローカルドライブとしてマウントする

接続後、Storage Boxをローカルフォルダとしてマウントします：

1. エクスプローラーでSFTPリモートを閲覧します。
2. マウントしたいフォルダを右クリック → **Mount** を選択します。
3. ローカルのマウントポイントを選択します（Windowsではドライブ文字、Mac/Linuxではパス）。
4. Hetznerのストレージがネイティブフォルダとして表示されます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Hetzner Storage Box as local drive" class="img-large img-center" />

これで、ローカルストレージであるかのように、任意のデスクトップアプリケーションでファイルを開いたり、ドラッグ＆ドロップしたり、Storage Boxのデータを扱ったりできます。

## ファイルを閲覧・管理する

2ペインのエクスプローラーで、Hetznerのストレージを他のリモートと並べて管理できます：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Hetzner Storage Box alongside cloud" class="img-large img-center" />

- フォルダ階層をナビゲート
- Hetznerとクラウド間でファイルをドラッグ＆ドロップ
- ファイルやフォルダの作成、名前変更、削除
- ファイルサイズと日付の確認

## クラウドプロバイダーと同期する

### Hetzner → AWS S3（オフサイトバックアップ）

すでに信頼性の高いHetznerストレージに、クラウド層の冗長性を追加します：

1. 同期ジョブを作成します：Hetzner SFTP → S3バケット。
2. [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)で毎晩のスケジュールを設定します。
3. コスト効率の良いコールドアーカイブにはS3 Glacierを使用します。

### Hetzner → Google Drive（チーム共有）

HetznerのデータをGoogle Workspaceユーザーがアクセスできるようにします：

1. コピージョブを作成します：Hetzner → Google Driveフォルダ。
2. [フィルタルール](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)を使って特定のフォルダのみ同期します。

### クラウド → Hetzner（オフサイトバックアップの保存先）

Hetznerを手頃な価格のオフサイトバックアップ先として使用します：

1. 同期ジョブを作成します：Google Drive → Hetzner Storage Box。
2. 毎日スケジュールします — Hetznerのテラバイト単位の価格設定により、非常にコスト効率が良くなります。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Hetzner sync job" class="img-large img-center" />

## 確認とモニタリング

### フォルダ比較

Hetznerとクラウドバックアップ間で同期の完全性を確認します：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Hetzner with cloud backup" class="img-large img-center" />

### スケジュール自動化

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Hetzner backup jobs" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. SFTP（ポート23）経由で**Hetzner Storage Boxを追加**します。
3. ローカルドライブとして**マウント**するか、エクスプローラーで閲覧します。
4. S3、Google Drive、その他のクラウドと**同期**します。
5. 自動化された毎日のバックアップのために**スケジュール**を設定します。

Hetzner Storage Boxはヨーロッパで最も知られていないストレージの秘宝の一つです。RcloneViewはそれにふさわしいデスクトップクライアントを提供し、さらにマルチクラウド同期も可能にします。

---

**関連ガイド：**

- [SFTPとSMBをローカルドライブとしてマウント](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [クラウドストレージをローカルドライブとしてマウント](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [フォルダの内容を比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [選択的同期のためのフィルタルール](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
