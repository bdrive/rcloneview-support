---
slug: migrate-ibm-cos-to-scaleway-rcloneview
title: "IBM Cloud Object Storage から Scaleway へ移行 — RcloneView でファイルを転送"
authors:
  - kai
description: "RcloneView を使って IBM Cloud Object Storage から Scaleway Object Storage へバケットを移動し、チェックサムで検証、dry run でプレビューしましょう。"
keywords:
  - IBM COS から Scaleway へ移行
  - IBM Cloud Object Storage 移行
  - Scaleway Object Storage
  - S3互換ストレージ転送
  - RcloneView
  - オブジェクトストレージ移行
  - クラウド間転送
  - チェックサム検証済み同期
  - バケット移行ツール
  - マルチクラウドオブジェクトストレージ
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IBM Cloud Object Storage から Scaleway へ移行 — RcloneView でファイルを転送

> 2つのS3互換オブジェクトストレージプロバイダー間で、dry-run プレビューとチェックサム検証を伴いながらバケットを直接移動しましょう。

チームはデータ所在地の要件、リージョンごとのレイテンシ、あるいは単にインフラを統合するためにオブジェクトストレージプロバイダーを切り替えますが、2つのS3互換エンドポイント間で数テラバイト規模のバケットコンテンツを手動で再アップロードするのは遅く、ミスも発生しやすい作業です。RcloneView は IBM Cloud Object Storage と Scaleway Object Storage の両方を標準的なS3互換リモートとして接続し、ローカルディスクを経由せずにバケット間でデータを直接転送します。S3、Azure File Storage、Backblaze B2 は FREE ライセンスでも完全な読み書きで接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のオブジェクトストレージエンドポイントを接続する

IBM COS と Scaleway はどちらも RcloneView に S3互換リモートとして追加され、それぞれ OAuth ログインではなく Access Key、Secret Key、プロバイダー固有のエンドポイントURLが必要です。まず IBM Cloud インスタンスの API キーとエンドポイントを使って IBM Cloud Object Storage を追加し、続いて Scaleway Object Storage の認証情報でも同じ手順を繰り返します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で IBM Cloud Object Storage と Scaleway のリモートを追加する" class="img-large img-center" />

両方のリモートが設定されると、エクスプローラーパネルにそれぞれ別のタブとして表示されるため、実際に何を移動すべきか決める前に両側のバケットの内容を確認できます。

## 移行のプレビューと実行

IBM COS をソース、Scaleway を移行先として設定した同期またはコピージョブが一括転送を処理します。本番実行に踏み切る前に Dry Run を使って、どのオブジェクトがコピーされるかを正確に確認しましょう — これは2つのプロバイダー間でバケット構造が完全には一致しない場合に特に役立つ、命名やパスの問題を早期に発見する方法です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="IBM Cloud Object Storage から Scaleway へオブジェクトを直接転送する" class="img-large img-center" />

ジョブの詳細設定でチェックサム比較を有効にすると、更新日時だけでなくハッシュとサイズでファイルを検証できます。これはタイムスタンプの扱いが異なる2つの異なるストレージバックエンド間でデータを移動する際に重要です。フィルタリング設定では、バケットの一部だけを移動したい場合に特定のファイル種別やサイズ超過のオブジェクトを除外することもできます。

## 転送の監視とスケジュール設定

大規模なオブジェクトストレージ移行が1回で終わることはまれです。Transferring タブは実行中のジョブのリアルタイムの進捗、速度、ファイル数を表示し、Job History は完了またはキャンセルされたすべての実行記録 — ステータス、所要時間、転送された合計サイズを含む — を保持するため、移行が正常に完了したかを確認したり、キャンセルされたジョブの続きから再開したりできます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="IBM COS から Scaleway へバケットを移行した後にジョブ履歴を確認する" class="img-large img-center" />

ジョブの詳細設定でファイル転送数とマルチスレッド転送数を調整すると、大量のオブジェクトをより効率的に移動できるようになり、失敗時の再試行設定は不安定な接続が数時間に及ぶ転送を台無しにするリスクを減らします。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. IBM Cloud Object Storage の認証情報を新しいS3互換リモートとして追加します。
3. Scaleway Object Storage の認証情報を2つ目のS3互換リモートとして追加します。
4. dry run を実行し、その後2つのリモート間でチェックサム検証済みの同期ジョブを実行します。

両方のエンドポイントが同じエクスプローラー内に並ぶようになれば、オブジェクトストレージプロバイダー間でバケットを移動する作業は、手探りの手作業ではなく監視可能なジョブになります。

---

**関連ガイド:**

- [IBM Cloud Object Storage を管理する — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-ibm-cos-cloud-sync-backup-rcloneview)
- [Scaleway Object Storage を管理する — RcloneView でクラウド同期・バックアップ](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2: 手頃な価格のS3互換ストレージを比較](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
