---
slug: mount-cloud-storage-local-drive-guide-rcloneview
title: "クラウドストレージをローカルドライブとしてマウントする — Google Drive、S3、OneDriveをローカルフォルダのように使う完全ガイド"
authors:
  - tayson
description: "Google Drive、AWS S3、OneDriveなど70以上のクラウドプロバイダーをパソコン上のローカルドライブとしてアクセス。RcloneViewでクラウドストレージをマウントする完全ガイド。"
keywords:
  - mount cloud storage local drive
  - mount google drive local
  - mount s3 local drive
  - mount onedrive local folder
  - cloud storage as local drive
  - rclone mount guide
  - map cloud drive letter
  - cloud storage network drive
  - mount dropbox local
  - virtual drive cloud storage
tags:
  - RcloneView
  - mount
  - cloud-storage
  - feature
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウドストレージをローカルドライブとしてマウントする — Google Drive、S3、OneDriveをローカルフォルダのように使う完全ガイド

> もしGoogle Drive、S3バケット、OneDriveがパソコン上の普通のフォルダとして表示されたらどうでしょうか？ どのアプリからでもファイルを開き、クラウドに直接保存し、ブラウザ不要でファイルマネージャからすべてを閲覧できます。

クラウドストレージをローカルドライブとしてマウントすると、あらゆるクラウドプロバイダーがパソコン上のUSBドライブやネットワーク共有のように見えて動作するようになります。PhotoshopでGoogle Driveのファイルを開く。ExcelレポートをS3に直接保存する。FinderでDropboxを閲覧する。RcloneViewなら70以上のクラウドプロバイダーでこれが実現します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## クラウドマウントとは？

クラウドストレージを「マウント」すると、オペレーティングシステムはクラウドアカウントに対応する仮想ドライブを作成します。ファイルはファイルマネージャ（Finder、Explorer、Nautilus）上で他のドライブと同じように表示されます。裏側では、rcloneがファイルの読み書きに必要なAPI呼び出しを処理します。

### 仕組み

```
Your App → Local Mount Point → rclone → Cloud API → Cloud Storage
```

ファイルを開くと、rcloneはオンデマンドでダウンロードします。保存すると、rcloneは変更内容をアップロードします。アプリケーションからは透過的に見えます。

## RcloneViewでマウントする

### リモートエクスプローラーから

任意のリモートを右クリックしてMountを選択します。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from remote explorer" class="img-large img-center" />

### マウントマネージャーから

マウント設定をより細かく制御するにはMount Managerを使用します。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager interface" class="img-large img-center" />

## プラットフォーム別セットアップ

### Windows

Windowsでは、マウントされたクラウドストレージはドライブレター（例：Google Driveなら`G:`、S3なら`S:`）として表示されます。

**要件:**
- WinFsp（Windows File System Proxy）— RcloneViewが代わりにインストールできます。

マウント後、クラウドドライブはローカルドライブと並んでExplorerに表示されます。どのWindowsアプリケーションからも読み書きできます。

### macOS

macOSでは、マウントされたストレージは`/Volumes/`とFinderのサイドバーに表示されます。

**要件:**
- macFUSE — macfuse.ioからダウンロードしてください。

マウント後、クラウドストレージはFinder上でボリュームとして表示されます。

### Linux

Linuxでは、マウントされたストレージは指定したマウントポイント（例：`/mnt/gdrive`）に表示されます。

**要件:**
- FUSE 3 — Ubuntu/Debianでは`sudo apt install fuse3`。

## マウントしたクラウドでできること

### どのアプリケーションでもクラウドファイルを開く

- LibreOfficeでGoogle Driveのスプレッドシートを編集する。
- PhotoshopでS3の画像を開く。
- VLCでOneDriveのメディアファイルを再生する。
- Dropbox上のファイルに対してスクリプトを実行する。

### クラウドに直接保存

どのアプリケーションの「名前を付けて保存」ダイアログからも、マウントしたクラウドドライブに保存できます。アップロード作業は不要です。

### スクリプトで自動化

マウントされたクラウドストレージは、あらゆるコマンドラインツールで利用できます。

```bash
# Copy local backups to mounted S3
cp /backups/database.sql /mnt/s3-backup/

# Process files from mounted Google Drive
python analyze.py /mnt/gdrive/reports/*.csv
```

### ファイルマネージャで閲覧

フォルダ、検索、プレビューを使い、ローカルファイルを閲覧するのと同じ感覚でクラウドストレージを探索できます。

## パフォーマンスのヒント

### キャッシュ

VFS（Virtual File System）キャッシュを有効にすると、パフォーマンスが向上します。

- **読み取り専用の作業**: 最小限のキャッシュで十分です。
- **読み書きの作業**: フルキャッシュを有効にすると、より快適に動作します。
- **メディアストリーミング**: 先読み（read-ahead）キャッシュを使用します。

### バッファサイズ

大きなファイルをより高速にストリーミングするには、バッファを増やします。デフォルト値でほとんどのファイルに対応できますが、動画再生では大きめのバッファが効果的です。

### ディレクトリキャッシュ

数千のファイルを含むディレクトリでは、ディレクトリキャッシュを有効にすると、繰り返しのAPI呼び出しを避けられます。これにより閲覧が高速に感じられます。

## 複数のクラウドを同時にマウントする

すべてのクラウドを一度にマウントできます。

| クラウド | マウントポイント（Windows） | マウントポイント（Linux） |
|-------|----------------------|-------------------|
| Google Drive | `G:` | `/mnt/gdrive` |
| OneDrive | `O:` | `/mnt/onedrive` |
| AWS S3 | `S:` | `/mnt/s3` |
| Dropbox | `D:` | `/mnt/dropbox` |
| Backblaze B2 | `B:` | `/mnt/b2` |

すべてのクラウドをマウントすると、ファイルマネージャがすべてのストレージを統合したビューになります。

## マウント vs 同期：使い分け

| シナリオ | マウントを使う | 同期を使う |
|----------|:---------:|:--------:|
| たまにファイルを開く | ✅ | ❌ |
| オフラインで作業する | ❌ | ✅ |
| 大容量メディアのストリーミング | ✅（キャッシュ併用） | ❌ |
| 完全なローカルコピーが必要 | ❌ | ✅ |
| アプリ連携 | ✅ | ❌ |
| バックアップ／アーカイブ | ❌ | ✅ |

**マウント**は、すべてをダウンロードせずにオンデマンドでアクセスしたい場合に最適です。**同期**は、オフライン作業やバックアップのために完全なローカルコピーが必要な場合に最適です。

## よくある問題

### 「マウントポイントが見つかりません」

先にマウントポイントのディレクトリを作成してください（Linux/macOS）。

```bash
sudo mkdir -p /mnt/gdrive
```

Windowsでは、未使用のドライブレターを選択してください。

### ファイル一覧の表示が遅い

大きなディレクトリ（1万ファイル以上）は、初回アクセス時に時間がかかることがあります。ディレクトリキャッシュを有効にすると、以降の一覧表示が高速化します。

### アプリケーションの互換性

ほとんどのアプリケーションはマウントされたドライブで問題なく動作します。ただし、高速なランダムアクセスを必要とするアプリケーション（データベース、大規模プロジェクトを扱う動画編集ソフトなど）は、同期されたローカルコピーの方がパフォーマンスが良い場合があります。

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **FUSEをインストール**します（macOSはmacFUSE、WindowsはWinFsp、LinuxはFUSE3）。
3. **クラウドリモートを追加**します。
4. リモートエクスプローラーまたはMount Managerから**マウント**します。
5. Finder、Explorer、Nautilusなど、他のドライブと同じように**クラウドにアクセス**します。

あなたのクラウドストレージが、あなたのファイルマネージャに。ブラウザタブは不要です。

---

**関連ガイド:**

- [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
