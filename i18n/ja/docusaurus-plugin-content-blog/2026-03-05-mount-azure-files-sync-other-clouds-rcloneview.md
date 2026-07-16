---
slug: mount-azure-files-sync-other-clouds-rcloneview
title: "RcloneViewでAzure Filesをローカルドライブとしてマウントし、他のクラウドと同期する方法"
authors:
  - tayson
description: "Azure Filesの共有をデスクトップ上のローカルドライブとしてアクセスし、AWS S3、Google Drive、その他のクラウドへ同期・バックアップする方法を、RcloneViewのビジュアルインターフェースで解説します。"
keywords:
  - azure files mount local
  - azure files sync
  - azure files to s3
  - azure files gui
  - azure files local drive
  - mount azure file share
  - azure files backup
  - azure files multi-cloud
  - azure smb mount
  - azure files rclone
tags:
  - azure-files
  - mount
  - sync
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでAzure Filesをローカルドライブとしてマウントし、他のクラウドと同期する方法

> Azure Filesはクラウド上でフルマネージドなSMBファイル共有を提供します。しかし、デスクトップからのアクセスやAzure以外のストレージとの同期には、依然として回避策が必要です。RcloneViewはその両方をシンプルにします。

Azure FilesはMicrosoftが提供するマネージド型ファイル共有サービスで、リフト&シフト移行、共有アプリケーションストレージ、オンプレミスのファイルサーバーの置き換えに最適です。しかし、VPNなしでデスクトップからこれらの共有にアクセスしたい場合や、AWS S3やGoogle Driveと同期したい場合、Azureの標準ツールでは物足りません。RcloneViewはAzure Filesにネイティブに接続し、共有をローカルドライブとしてマウントし、70以上のクラウドプロバイダーと同期できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure FilesとAzure Blobの違いとは？

Azureには主に2つのストレージサービスがあり、それぞれ異なる用途を持ちます。

- **Azure Blob Storage** — 非構造化データ（画像、動画、バックアップなど）向けのオブジェクトストレージ。REST API経由でアクセスします。[以前のガイド](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)ですでに解説済みです。
- **Azure Files** — マネージド型のSMB/NFSファイル共有。従来のネットワークドライブのように動作します。ディレクトリ構造、ファイルロック、POSIXパーミッションをサポートします。

データがAzure Files（SMB共有）にある場合は、このガイドが役立ちます。

## Azure Filesへの接続

1. RcloneViewを開き、**Add Remote**（リモートを追加）をクリックします。
2. プロバイダー一覧から**Azure Files**（アクセス方法によっては**SMB**）を選択します。
3. 接続情報を入力します。
   - **Storage Account Name**（ストレージアカウント名）: Azureストレージアカウント。
   - **Share Name**（共有名）: 対象のファイル共有。
   - **Account Key or SAS Token**（アカウントキーまたはSASトークン）: Azureポータルから取得した認証情報。
4. 保存すると、Azureファイル共有が閲覧可能になります。

<img src="/support/images/en/blog/new-remote.png" alt="Add Azure Files as remote in RcloneView" class="img-large img-center" />

## ローカルドライブとしてマウントする

Azure Files共有を通常のフォルダのようにアクセスできます。

1. Explorer（エクスプローラー）でAzure Filesのリモートを参照します。
2. マウントする共有またはサブフォルダを選択します。
3. 右クリック → **Mount**（マウント）（または高度なオプションにはMount Managerを使用）。
4. ローカルのマウントポイントを選択します。
5. Azureファイル共有がデスクトップ上のドライブとして表示されます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Azure Files as local drive" class="img-large img-center" />

### マウントしたAzure Filesの活用例

- **ドキュメントを直接編集** — マウントされたドライブ上でWord、Excel、PowerPointファイルを開きます。
- **開発ワークフロー** — 共有コードベースとしてIDEからAzure Filesを参照します。
- **メディアアクセス** — 画像、動画、音声をダウンロードせずに閲覧・プレビューします。
- **アプリケーション設定** — カスタムコードなしで、アプリケーションにAzure Filesから設定を読み込ませます。

## Azure Filesを他のクラウドと同期する

### Azure Files → AWS S3

マルチクラウド冗長化 — Azure FilesデータのコピーをS3に保持します。

1. 同期ジョブを作成します：Azure Files → S3バケット。
2. 毎日または毎週スケジュールします。
3. [Folder Comparison（フォルダ比較）](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)で検証します。

### Azure Files → Google Drive

Azure Filesのコンテンツを Google Workspace ユーザーと共有します。

1. コピージョブを作成します：Azure Files → Google Driveフォルダ。
2. フィルターを使用して必要なフォルダのみ同期します。
3. 定期更新のためにスケジュールします。

### Azure Files → ローカルNAS

高速アクセスのためにローカルのキャッシュコピーを保持します。

1. 同期ジョブを作成します：Azure Files → NAS共有フォルダ。
2. Azure Filesを正とするデータソースとしながら、高速なLANアクセスを実現します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync Azure Files with other clouds" class="img-large img-center" />

## ファイルの閲覧と管理

RcloneViewの2ペイン方式Explorerにより、Azure Filesを本格的なファイルマネージャーとして扱えます。

- ディレクトリ階層を移動します。
- Azure Filesと他の任意のリモートの間でドラッグ＆ドロップします。
- ファイルやフォルダの作成、リネーム、削除を行います。
- サイズや更新日時を確認します。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files with Azure Files" class="img-large img-center" />

## 自動化とモニタリング

### スケジュールバックアップ

Azure Filesから別のクラウドへのバックアップを自動化します。

1. コピーまたは同期ジョブを作成します。
2. [Job Scheduling（ジョブスケジューリング）](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)でスケジュールします。
3. ジョブの完了・失敗時に[Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control)で通知を受け取ります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Azure Files sync" class="img-large img-center" />

### 転送モニタリング

大容量のAzure Files転送でもリアルタイムで進捗を追跡できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Azure Files transfer" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. ストレージアカウントの認証情報で**Azure Filesをリモートとして追加**します。
3. 共有をローカルドライブとして**マウント**するか、Explorerで参照します。
4. マルチクラウド冗長化のためにS3、Google Drive、NASへ**同期**します。
5. 自動化された無人バックアップのために**スケジュール**します。

Azure Filesはマネージド型ファイル共有として優れています。RcloneViewは、ローカルアクセス、マルチクラウド同期、自動バックアップといった、それ以外のあらゆる用途をより優れたものにします。

---

**関連ガイド：**

- [Azure Blob Storageをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [リモートの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
