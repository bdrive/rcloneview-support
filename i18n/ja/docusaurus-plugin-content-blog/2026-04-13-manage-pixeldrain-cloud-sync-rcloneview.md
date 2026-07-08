---
slug: manage-pixeldrain-cloud-sync-rcloneview
title: "Pixeldrainクラウドストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "PixeldrainをRcloneViewに接続して、ホストされているファイルを閲覧し、バックアップや長期アーカイブのために他のクラウドプロバイダーへ同期できます。"
keywords:
  - Pixeldrain RcloneView
  - Pixeldrain クラウド同期
  - Pixeldrain バックアップ
  - Pixeldrain ファイル管理
  - Pixeldrain rclone GUI
  - Pixeldrain ファイル転送
  - クラウドバックアップ Pixeldrain
  - Pixeldrain 同期設定
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Pixeldrainクラウドストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Pixeldrainは個人向けクラウドストレージ機能を備えたファイルホスティングサービスです。RcloneViewはこれをより広いクラウドエコシステムに接続し、バックアップと整理されたファイル管理を可能にします。

Pixeldrainは、ファイルのアップロード、整理、共有ができる、個人向けクラウドストレージとしても機能するファイル共有・ホスティングプラットフォームです。ウェブインターフェースは基本的な操作をカバーしていますが、Pixeldrainのコンテンツを別のクラウドに同期したり、ローカルアーカイブ用にファイルをダウンロードしたりする必要があるユーザーには、専用のツールが役立ちます。RcloneViewはPixeldrainをサポート対象のプロバイダーとして掲載しており、他のすべてのリモートと並べて接続し、単一のインターフェースから転送を管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## PixeldrainをRcloneViewに接続する

RcloneViewを開き、**Remote Manager**に移動します。**New Remote**をクリックし、プロバイダーリストをスクロールして**Pixeldrain**を見つけます。接続にはPixeldrainのAPIキーを使用しますが、これはPixeldrainのウェブサイトのアカウント設定から生成できます。設定フォームにAPIキーを入力して保存します。

保存したら、File Explorerでリモートを開きます。Pixeldrainのファイルとディレクトリがパネルにロードされ、閲覧や転送ができるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Pixeldrain remote in RcloneView" class="img-large img-center" />

## ファイルの閲覧と整理

RcloneViewのFile Explorerは、他のすべてのプロバイダーと同じツリー表示・リスト表示でPixeldrainのストレージを表示します。ディレクトリを移動し、ファイルを選択し、右クリックのオプションでコピー、移動、削除ができます。画像が多いコレクションの場合は、**Thumbnail View**に切り替えるとグリッド表示でプレビューを確認できます。写真やスクリーンショットをPixeldrainでホストしていて、転送前に内容を確認したい場合に便利です。

別のリモート — Google Drive、Backblaze B2、またはローカルフォルダ — を指す2つ目のパネルを開くと、Pixeldrainと転送先の間で直接ファイルをドラッグ&ドロップできます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Pixeldrain folders with another cloud in RcloneView" class="img-large img-center" />

## バックアップジョブの作成

Pixeldrainのコンテンツを体系的にバックアップするには、**Job**機能を使用します。**Jobs**に移動し、**New Job**をクリックして、Pixeldrainをソースに設定します。設定済みの任意のリモートを転送先として選択します。ジョブウィザードのステップ2では、転送オプションを設定します。

- **Number of transfers**: 同時に転送するファイル数
- **Dry Run**: 実際に移動せずに、何がコピーされるかをプレビュー
- **Checksum verification**: 転送後のデータ整合性を確認するために有効化

ジョブを実行すると、RcloneViewは転送速度とファイル数とともにリアルタイムの進捗を表示します。ジョブが完了すると、結果は**Job History**に記録されます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Pixeldrain files to another cloud provider" class="img-large img-center" />

## 検証のためのフォルダ比較

Pixeldrainから別のクラウドへコンテンツを移行した後、**Folder Compare**ツールを使うことで、転送が完全に完了したことを確認できます。Pixeldrainのソースと転送先のフォルダを両方並べて開くと、RcloneViewは片方にしか存在しないファイルやサイズが異なるファイルをハイライト表示します。これは、複数回のセッションにわたって移行を行い、何も見落としがないことを確認したい場合に特に便利です。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Pixeldrain sync records" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. pixeldrain.comのアカウント設定からPixeldrainのAPIキーを生成します。
3. **Remote Manager**を開き、**New Remote**をクリックして**Pixeldrain**を選択し、APIキーを入力します。
4. ファイルを閲覧し、希望する転送先クラウドへのバックアップジョブを設定します。

RcloneViewを使えば、Pixeldrainのコンテンツをより構造化された長期ストレージ環境へ簡単に移行できます。

---

**関連ガイド:**

- [RcloneViewによるクラウド間移行](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [転送後にクラウド同期でファイルが見つからない問題を修正](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [Job Historyと転送ログの監視](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
