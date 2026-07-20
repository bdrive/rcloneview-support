---
slug: drag-drop-cloud-transfer-guide-rcloneview
title: "クラウド間のドラッグ&ドロップ — RcloneViewで最速のファイル転送方法"
authors:
  - tayson
description: "RcloneViewの2ペインエクスプローラーでドラッグ&ドロップするだけで、Google Drive、OneDrive、S3など70以上のクラウド間でファイルを転送。コマンドもスクリプトも不要。"
keywords:
  - drag drop cloud transfer
  - drag and drop cloud files
  - easy cloud file transfer
  - visual cloud transfer
  - cloud file manager drag drop
  - transfer files between clouds
  - simple cloud migration
  - no code cloud transfer
  - cloud explorer drag drop
  - easy multi cloud transfer
tags:
  - RcloneView
  - drag-and-drop
  - feature
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウド間のドラッグ&ドロップ — RcloneViewで最速のファイル転送方法

> Google Drive上のファイルを選択。S3バケットへドラッグ。これで完了です。コマンドラインもスクリプトも、5ステップのアップロード手順も不要。2つのクラウド間をドラッグ&ドロップするだけです。

クラウドのファイル転送に情報科学の学位は必要ありません。RcloneViewの2ペインエクスプローラーは、任意の2つのクラウドストレージの場所を並べて表示します — Google DriveとS3、OneDriveとDropbox、NASとBackblaze B2 — 片方からもう片方へドラッグするだけでファイルを転送できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 仕組み

### 2ペインエクスプローラー

RcloneViewは2つのストレージの場所を並べて表示します — デュアルペインのファイルマネージャーのように:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane cloud explorer" class="img-large img-center" />

- **左ペイン**: 任意のクラウド、NAS、またはローカルドライブ。
- **右ペイン**: 任意の別のクラウド、NAS、またはローカルドライブ。

### ドラッグ&ドロップで転送

1. 片方でソースフォルダに移動します。
2. もう片方でデスティネーションフォルダに移動します。
3. ファイルまたはフォルダを選択します。
4. 片方からもう片方へドラッグします。
5. 転送が開始されます。

### リアルタイムで監視

ファイルが移動する様子をリアルタイムで確認できます:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor drag and drop transfer" class="img-large img-center" />

## ドラッグできる組み合わせ

どんな組み合わせでも動作します:

| 転送元 | 転送先 | 例 |
|------|-----|---------|
| Google Drive | AWS S3 | ドキュメントをS3にバックアップ |
| OneDrive | Dropbox | Dropboxを使用するクライアントと共有 |
| ローカルドライブ | Backblaze B2 | ローカルバックアップをクラウドにアップロード |
| NAS | Google Drive | NASのファイルをリモートからアクセス可能にする |
| S3 | Azure Blob | クラウド間移行 |
| Dropbox | NAS | クラウドファイルをローカルストレージにダウンロード |

## シンプルなドラッグ&ドロップを超えて

### 定期的な転送には → ジョブを作成

同じファイルを定期的にドラッグするなら、名前付きジョブとして保存しましょう。その後、自動実行するようにスケジュール設定できます:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Save drag-drop as scheduled job" class="img-large img-center" />

### 検証には → フォルダ比較を使用

転送後、両側を比較してすべてが正しく届いたことを確認します:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer completeness" class="img-large img-center" />

### 大容量転送には → 進捗を監視

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Track large file transfer" class="img-large img-center" />

## ヒント

- **フォルダをドラッグ**してディレクトリツリー全体を転送できます。
- **複数ファイルを選択**してからドラッグすると一括転送できます。
- **右クリック**で追加のオプション(コピー、移動、同期)を利用できます。
- **アドレスバー**を使って特定のパスにすばやく移動できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **クラウドアカウントを追加**します — 任意の2つ(またはそれ以上)のプロバイダー。
3. 2ペインエクスプローラーで**並べて開きます**。
4. **ドラッグ&ドロップ**で転送します。

クラウド転送を、シンプルに。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [クラウドストレージのマウント](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
