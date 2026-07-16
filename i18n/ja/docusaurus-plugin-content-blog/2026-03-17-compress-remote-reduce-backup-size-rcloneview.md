---
slug: compress-remote-reduce-backup-size-rcloneview
title: "圧縮リモート — RcloneViewでクラウドバックアップサイズを自動削減"
authors:
  - tayson
description: "RcloneViewはrcloneのcompressリモートをサポートしており、クラウドストレージへのアップロード前にファイルを自動的に圧縮します。すべてのバックアップでストレージコストと帯域幅を節約できます。"
keywords:
  - rclone compress remote
  - compress cloud backup
  - reduce cloud storage size
  - compressed cloud upload
  - rcloneview compress
  - save cloud storage space
  - compress before upload
  - cloud backup compression
  - reduce backup size
  - rclone compression
tags:
  - RcloneView
  - feature
  - cost-optimization
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 圧縮リモート — RcloneViewでクラウドバックアップサイズを自動削減

> 500 GBのバックアップが圧縮によって300 GBになるかもしれません。圧縮リモートはあらゆるクラウドプロバイダーを自動gzip圧縮でラップします — バックアップは小さく、コストは低く、データは同じです。

クラウドストレージのコストはサイズに比例します。バックアップのサイズを30〜60%削減できれば、毎月のストレージ料金をその分節約できます。rcloneの圧縮リモートは透過的な圧縮を提供します — ファイルはアップロード前に圧縮され、ダウンロード時に自動的に解凍されるため、手動での操作は一切必要ありません。RcloneViewを使えば、これを視覚的に設定し、圧縮されたバックアップを他のクラウドアカウントと一緒に管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 圧縮リモートの仕組み

圧縮リモートは別のリモート(Google Drive、S3、B2など)をラップし、自動的に以下を行います。

1. アップロード前にgzipを使用して**ファイルを圧縮**
2. ダウンロード時に**ファイルを透過的に解凍**
3. CPUの無駄な消費を避けるため、すでに**圧縮済みの形式(jpg、mp4、zipなど)をスキップ**

圧縮リモートは他のリモートと同じように操作できます(閲覧、コピー、同期)が、宛先のファイルは圧縮された状態で保存されます。

## ファイルタイプ別の圧縮効果

| ファイルタイプ | 一般的な圧縮率 | 例 |
|-----------|-------------------|---------|
| テキストファイル、CSV、ログ | 60〜90%削減 | 100 MB → 10〜40 MB |
| Officeドキュメント(docx、xlsx) | 5〜15%削減 | すでにある程度圧縮済み |
| データベースダンプ | 50〜80%削減 | 1 GB → 200〜500 MB |
| ソースコード | 60〜80%削減 | 500 MB → 100〜200 MB |
| 写真(JPG、PNG) | 約0% | すでに圧縮済み |
| 動画(MP4、MKV) | 約0% | すでに圧縮済み |
| ZIP/RARアーカイブ | 約0% | すでに圧縮済み |

最適な用途: テキスト中心のデータ、ログ、データベースバックアップ、ソースコード、非圧縮のデータ形式。
効果が薄い用途: 写真、動画、すでに圧縮済みのアーカイブ。

## 圧縮リモートを設定する

<img src="/support/images/en/blog/new-remote.png" alt="Create compress remote" class="img-large img-center" />

既存のストレージリモートをラップする圧縮リモートを作成します。その後、生のリモートの代わりに圧縮リモートをバックアップ先として使用します。

## ユースケース

### ログバックアップを圧縮する

サーバーログは非常によく圧縮されます(80〜90%)。50 GBのログアーカイブがクラウドストレージ上では5〜10 GBになります。

### データベースバックアップのコストを削減する

日次のデータベースダンプは圧縮率が高いデータです。アップロード前に圧縮することで、クラウドストレージの料金を削減できます。

### ソースコードアーカイブ

数千のテキストファイルを含む開発プロジェクトは、圧縮によって大きな恩恵を受けます。

### 圧縮バックアップをスケジュールする

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule compressed backup" class="img-large img-center" />

## 重要な注意点

- **CPUのオーバーヘッド**: 圧縮はアップロードとダウンロード時にCPUを使用します。最近のCPUであれば問題なく処理できます。
- **すべてのファイルが圧縮されるわけではない**: すでに圧縮済みの形式(JPG、MP4、ZIP)は圧縮されずにそのまま通過します。
- **透過的なアクセス**: 圧縮リモート経由で閲覧すると、ファイルは通常通りに見えます — 解凍は自動的に行われます。
- **暗号化との組み合わせ**: 圧縮とcryptリモートを重ねることで、圧縮かつ暗号化されたバックアップを作成できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. クラウドストレージを通常のリモートとして**追加**します。
3. それをラップする**圧縮リモートを作成**します。
4. **圧縮リモートをバックアップ先として使用**します。
5. **より小さなバックアップ**と低コストをお楽しみください。

バックアップは小さく、料金は安く、データは同じです。

---

**関連ガイド:**

- [隠れたクラウドストレージコスト](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [クラウドバックアップの暗号化](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [仮想リモート: Combine、Union、Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
