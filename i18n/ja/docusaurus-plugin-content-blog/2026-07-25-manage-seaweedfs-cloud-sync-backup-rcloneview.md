---
slug: manage-seaweedfs-cloud-sync-backup-rcloneview
title: "SeaweedFSストレージを管理 — RcloneViewでファイルを同期・バックアップする"
authors:
  - alex
description: "セルフホストのSeaweedFSオブジェクトストレージをRcloneViewに接続して、CLI不要でクロスプラットフォームのマウント、同期、バックアップを実現。"
keywords:
  - SeaweedFS RcloneView
  - SeaweedFS S3互換ストレージ
  - セルフホスト オブジェクトストレージ GUI
  - SeaweedFS マウント
  - SeaweedFS バックアップ
  - SeaweedFS 同期
  - 分散オブジェクトストレージ
  - SeaweedFS S3ゲートウェイ
  - SeaweedFSストレージ管理
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SeaweedFSストレージを管理 — RcloneViewでファイルを同期・バックアップする

> ターミナルに触れることなく、セルフホストのSeaweedFSクラスターをマウント可能なドライブ兼一級の同期先に変えましょう。

SeaweedFSはS3互換ゲートウェイを備えた高速な分散ストレージシステムで、パブリッククラウドの料金の代わりに自前のハードウェアでオブジェクトストレージを持ちたいチームに人気の選択肢です。難点は、ほとんどのSeaweedFSデプロイが設定ファイルとCLIコマンドだけで完全に管理されていることです。RcloneViewはSeaweedFSゲートウェイを他のS3互換リモートと同じように扱うことでこのギャップを埋め、既存のクラスターの上に視覚的なファイルブラウザ、ドラッグ&ドロップ転送、スケジュールバックアップを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SeaweedFSをS3互換リモートとして接続する

SeaweedFSのS3ゲートウェイはAmazon S3と同じプロトコルを話すため、RcloneViewは他のS3互換プロバイダーに接続するのと同じ方法で接続します。アクセスキーID、シークレットアクセスキー、そしてゲートウェイのアドレスとポートを指すカスタムエンドポイントです。Remoteタブ > New Remoteを開き、S3互換オプションを選択して、クラスターのゲートウェイURLをエンドポイントとして入力してください。RcloneViewはローカルのRC API経由で通信する内蔵rcloneインスタンスを同梱しているため、別途バイナリや手動で編集する設定ファイルは不要です — UIに入力する認証情報がすべての設定です。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new S3-compatible remote for a self-hosted SeaweedFS gateway in RcloneView" class="img-large img-center" />

このワークフローは、SeaweedFSクラスターがホームサーバー上、コロケーションラック上、あるいは自分で管理するクラウドVM上のどこで動いていても同じように適用されます — RcloneViewはゲートウェイがS3 API呼び出しに応答しさえすれば構いません。

## SeaweedFSと他のクラウド間でデータを同期・バックアップする

接続後は、SeaweedFSはRcloneViewのExplorer内の他のパネルと同じように動作するため、同じウィンドウ内でGoogle Drive、OneDrive、Backblaze B2、あるいはローカルディスクとの間でファイルをドラッグできます。継続的な保護のためには、4ステップのSyncウィザードを使ってSeaweedFSバケットから2つ目のリモートへの一方向ジョブを構成し、一時ファイルを除外するフィルターを追加し、まずDry Runを実行して実際にコピーまたは削除されるものを事前に確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing files between a SeaweedFS bucket and another cloud remote in RcloneView" class="img-large img-center" />

マウント専用ツールとは異なり、RcloneViewはFREEライセンスでもSeaweedFSと他の対応プロバイダーとの間で同期とフォルダ比較も行えます。

## SeaweedFSをローカルドライブとしてマウントする

ネイティブアプリケーションがファイルを直接読み書きするワークフローが必要な場合、Mount ManagerでSeaweedFSバケットをWindows、macOS、Linuxのローカルドライブとして接続できます。応答性と安全性のバランスを取るにはVFSキャッシュモードを「writes」に設定し、最近使用したファイルへのオフラインアクセスが必要な場合は「full」に設定してください。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a SeaweedFS remote as a local drive from Mount Manager" class="img-large img-center" />

## 転送とジョブ履歴の監視

SeaweedFSリモートに対するすべての同期またはコピージョブは、進捗、速度、ファイル数とともにTransferringタブにリアルタイムで表示され、完了した各実行は所要時間、合計サイズ、ステータスとともにJob Historyに記録されます。この履歴のおかげで、頼りにする前にスケジュールされたバックアップが実際に実行されたことを簡単に確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed sync runs against a SeaweedFS remote" class="img-large img-center" />

## はじめかた

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. SeaweedFSゲートウェイのアクセスキー、シークレットキー、エンドポイントURLを準備します。
3. RcloneViewで新しいS3互換リモートを作成し、接続をテストします。
4. 同期ジョブまたはマウントを設定して、SeaweedFSと他のリモート間でのデータ移動を開始します。

セルフホストのストレージだからといってコマンドライン専用である必要はありません — 適切なGUIがあれば、SeaweedFSも商用クラウドと同じくらい扱いやすくなります。

---

**関連ガイド:**

- [MinIOセルフホストストレージを管理 — RcloneViewでクラウド同期・バックアップ](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [RcloneViewでS3、Wasabi、R2を一元管理](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [RcloneViewにおけるVFSキャッシュとマウントパフォーマンス](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />
