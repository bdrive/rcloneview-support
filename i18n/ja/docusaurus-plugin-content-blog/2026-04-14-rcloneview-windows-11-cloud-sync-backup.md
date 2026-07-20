---
slug: rcloneview-windows-11-cloud-sync-backup
title: "Windows 11 版 RcloneView — クラウドストレージの同期とバックアップ"
authors:
  - tayson
description: "Windows 11 に RcloneView をインストールして、90以上のクラウドプロバイダー間でファイルの同期を開始しましょう。インストール、リモート設定、スケジュールバックアップを網羅した完全セットアップガイドです。"
keywords:
  - RcloneView Windows 11
  - Windows 11 cloud sync tool
  - cloud storage backup Windows 11
  - rclone GUI Windows 11
  - Windows 11 file sync cloud
  - RcloneView installation Windows
  - cloud backup software Windows 11
  - multi-cloud sync Windows 11
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Windows 11 版 RcloneView — クラウドストレージの同期とバックアップ

> RcloneView は単一の `.exe` インストーラーで Windows 11 にネイティブインストールでき、rclone を自動的にバンドルします。コマンドラインの設定不要で、90以上のクラウドストレージプロバイダーに接続して同期できます。

Windows 11 には OneDrive 同期が標準搭載されていますが、対応するのは1つのプロバイダーのみです。RcloneView はそのギャップを埋めます。Google Drive、Dropbox、Amazon S3、Backblaze B2、Cloudflare R2、その他90以上のプロバイダーに同時接続できるネイティブ Windows アプリケーションです。写真を複数のクラウドにバックアップするホームユーザーでも、デプロイ成果物を S3 に同期する開発者でも、RcloneView on Windows 11 なら PowerShell やコマンドプロンプトのスクリプト作成なしに、ビジュアルインターフェースで処理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Windows 11 への RcloneView インストール

[rcloneview.com](https://rcloneview.com/src/download.html) から Windows インストーラーをダウンロードしてください。ファイル名は `setup_rclone_view-{version}.exe` で、Inno Setup インストーラーです。インストーラーをダブルクリックし、セットアップウィザードに従います（多くのユーザーにとってデフォルトのインストールディレクトリで問題ありません）。すると RcloneView がスタートメニューとタスクバーに表示されます。

インストーラーには rclone がバンドルされているため、別途 rclone をインストールする必要はありません。RcloneView は組み込みの rclone インスタンスを `http://127.0.0.1:5582` で起動した状態で立ち上がります。アプリ下部のフッターに rclone のバージョンと接続ステータスが表示されます。

**Windows 11 のシステム要件:**
- アーキテクチャ: x86-64（Intel/AMD 64ビット）。注意: Windows ARM64 はサポートされていません。
- VC++ 2015–2022 再頒布可能パッケージ（通常はすでにインストール済み。RcloneView インストーラーがチェックします）
- Windows Vista 以降（Windows 11 に完全対応）

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView interface after installation on Windows 11" class="img-large img-center" />

## クラウドストレージプロバイダーの追加

インストール後、最初のクラウドストレージプロバイダーを追加します。**Remote タブ → New Remote** をクリックし、プロバイダーを選択します。OAuth ベースのサービス（Google Drive、Dropbox、OneDrive、Box、pCloud）の場合、RcloneView がデフォルトブラウザを開いて認証を行います。サインインしてアクセスを許可してください。認証情報ベースのサービス（Amazon S3、Backblaze B2、Cloudflare R2、Wasabi）の場合は、アクセスキーとシークレットキーを直接入力します。

Windows 11 のデフォルトブラウザ（Edge や Chrome）は OAuth フローを問題なく処理します。組織がプロキシを使用している場合やブラウザベースの OAuth を制限している場合は、ネットワーク設定を確認し、`localhost` へのリダイレクトが許可されていることを確認してください。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop file upload from Windows 11 Explorer to cloud storage in RcloneView" class="img-large img-center" />

## クラウドストレージを Windows ドライブとしてマウントする

RcloneView の Mount Manager を使うと、クラウドストレージを Windows のドライブレター（例: Google Drive なら `Z:\`、Backblaze B2 なら `Y:\`）としてマウントできます。**Remote タブ → Mount Manager → New Mount** をクリックし、リモートとフォルダを選択してドライブレターを指定し、**Save and Mount** をクリックします。

マウントされたクラウドドライブは、ローカルドライブと並んですぐにエクスプローラーに表示されます。どのアプリケーションもマウントされたドライブに対してファイルの読み書きが可能です。Office や Adobe Creative Suite、その他の Windows アプリケーションから直接クラウドファイルにアクセスする際に便利です。**Auto Mount**（PLUS ライセンス）を有効にすると、Windows 起動時にクラウドドライブを自動的にマウントできます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting cloud storage as a Windows drive letter in RcloneView Mount Manager" class="img-large img-center" />

## スケジュールされたクラウドバックアップの設定

RcloneView の Job Manager を使って自動バックアップジョブを作成します。典型的な Windows 11 の設定例: `C:\Users\{user}\Documents\` を毎晩 Backblaze B2 に同期し、`C:\Users\{user}\Pictures\` を毎週 Google Drive に同期します。各ジョブはスケジュールされた時刻にバックグラウンドで実行されます。RcloneView は Windows のシステムトレイに最小化され、メインウィンドウを開いたままにしなくてもスケジュールされたジョブの実行を継続します。

デスクトップ通知を有効にする（Settings → Notifications → Show sync completion notification）と、各バックアップジョブが完了したときに Windows 11 のトースト通知を受け取れます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**（Windows x86-64 インストーラー）。
2. インストーラーを実行し、スタートメニューから RcloneView を起動します。
3. New Remote からクラウドストレージプロバイダーを追加します（OAuth ブラウザまたは認証情報の入力）。
4. Job Manager で自動バックアップ用のスケジュール付き同期ジョブを作成します。

Windows 11 版 RcloneView は、十数個の個別クラウド同期クライアントを1つの統合インターフェースに置き換え、ファイルの転送先とタイミングを完全にコントロールできるようにします。

---

**関連ガイド:**

- [Windows Server 版 RcloneView — クラウドバックアップの設定](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [RcloneView で Amazon S3 バケットをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [RcloneView で毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
