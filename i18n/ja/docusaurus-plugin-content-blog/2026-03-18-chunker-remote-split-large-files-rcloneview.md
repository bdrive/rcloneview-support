---
slug: chunker-remote-split-large-files-rcloneview
title: "Chunker リモート — RcloneViewでサイズ制限のあるクラウドプロバイダー向けに大きなファイルを分割"
authors:
  - tayson
description: "一部のクラウドプロバイダーは一定サイズを超えるファイルを拒否します。Rcloneのchunkerリモートは、大きなファイルを自動的に分割してアップロードし、ダウンロード時に再結合します。"
keywords:
  - rclone chunker remote
  - split large files cloud
  - cloud file size limit
  - upload large files cloud
  - chunked upload cloud
  - large file cloud storage
  - rclone split files
  - file size limit workaround
  - cloud upload size limit
  - chunker rcloneview
tags:
  - feature
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Chunker リモート — RcloneViewでサイズ制限のあるクラウドプロバイダー向けに大きなファイルを分割

> 動画ファイルが15GBあるのに、クラウドプロバイダーのアップロード上限は5GB。動画を再エンコードしたり別のプロバイダーを探したりする代わりに、chunkerリモートが自動的に分割してくれます。

一部のクラウドストレージプロバイダーには、最大ファイルサイズの制限があります。Google Driveは5TBまで対応しており（問題になることはほとんどありません）、しかし他のプロバイダー — 特に無料プラン、WebDAVエンドポイント、一部のS3互換サービス — ははるかに低い制限を設けています。Rcloneのchunkerリモートは、大きなファイルを透過的にチャンク（分割片）に分けてアップロードし、ダウンロード時に再結合することでこの問題を解決します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Chunkerの仕組み

chunkerリモートは別のリモートをラップし、以下を行います。

1. 設定可能なサイズを超える**ファイルを分割**し、番号付きのチャンクにする
2. 各チャンクを個別にクラウドプロバイダーに**アップロード**する
3. **ダウンロード時**にチャンクを元のファイルに再結合する
4. **透過的に動作** — エクスプローラーにはチャンクではなく元のファイルが表示される

例えば、チャンクサイズを5GBに設定した15GBのファイルは、プロバイダー上では5GBのチャンク3つになります。閲覧やダウンロードの際には、単一の15GBファイルとして表示されます。

## Chunkerが必要な場面

| シナリオ | 解決策 |
|----------|--------|
| プロバイダーにファイルサイズ制限がある | Chunkerが制限を超える部分を分割 |
| WebDAVサーバーが大きなアップロードを拒否する | 小さな断片に分割 |
| ファイル単位の制限がある無料プラン | 制限内に収まるよう分割 |
| 大きなアップロードでネットワークが切断される | チャンクを小さくすれば再試行が容易に |

## Chunkerリモートのセットアップ

<img src="/support/images/en/blog/new-remote.png" alt="Create chunker remote" class="img-large img-center" />

対象のストレージリモートをラップするchunkerリモートを作成します。プロバイダーの制限に応じてチャンクサイズを設定してください。

## 他のリモートとの組み合わせ

Chunkerは他の特殊リモートと重ねて使用できます。

- **Chunker + Crypt**: 大きなファイルの分割と暗号化を同時に
- **Chunker + Compress**: 大きなファイルの分割と圧縮を同時に
- **Chunker + 任意のプロバイダー**: 70以上のプロバイダー全てに対応

## 重要な注意点

- **チャンクはプロバイダー固有**: あるプロバイダー用に分割されたチャンクは、同じchunker設定を通してのみアクセスする必要があります
- **チャンクを直接変更しない**: 整合性を保つため、必ずchunkerリモート経由でアクセスしてください
- **チャンクサイズは慎重に選ぶ**: 小さすぎるとファイル数が増え（一覧表示が遅くなる）、大きすぎると本来の目的が果たせません

## ユースケース

### VMイメージのバックアップ

仮想マシンのディスクイメージはしばしば50〜200GBに及びます。Chunkerはアップロード制限のあるプロバイダー向けにそれらを分割します。

### 大容量メディアファイルのアーカイブ

4K動画ファイル、生音声マスター、単一ファイルの上限を超える大規模データセットなど。

### アップロードの信頼性向上

ネットワーク接続が不安定な場合、チャンクが小さいほど再試行が容易になります。1GBのチャンクが失敗しても、50GB全体ではなく1GB分だけ再試行すれば済みます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 通常どおり**ストレージリモートを追加**します。
3. それをラップする**chunkerリモートを作成**します。
4. chunker経由で**大きなファイルをアップロード**します。

大きすぎるファイルも、小さすぎるプロバイダー制限もありません。

---

**関連ガイド:**

- [Compressリモート](https://rcloneview.com/support/blog/compress-remote-reduce-backup-size-rcloneview)
- [仮想リモート: Combine、Union、Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [クラウドバックアップの暗号化](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
