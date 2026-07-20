---
slug: sync-azure-blob-to-backblaze-b2-rcloneview
title: "Azure Blob StorageをBackblaze B2に同期 — RcloneViewによるクラウドバックアップ"
authors:
  - tayson
description: "RcloneViewを使ってAzure Blob StorageからBackblaze B2へファイルを同期・移行し、コスト削減、冗長性、自動クラウドバックアップを実現する方法を解説します。"
keywords:
  - Azure Blob Storage
  - Backblaze B2
  - cloud migration
  - RcloneView
  - cloud-to-cloud sync
  - cloud backup
  - storage cost savings
  - rclone azure b2
tags:
  - RcloneView
  - azure
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Azure Blob StorageをBackblaze B2に同期 — RcloneViewによるクラウドバックアップ

> Azure Blob StorageからBackblaze B2にデータを移動すると、ストレージコストを大幅に削減できます。RcloneViewはガイド付きのグラフィカルインターフェースで、移行と継続的な同期をシンプルに行えます。

Azure Blob Storageはエンタープライズワークロードで広く利用されていますが、Backblaze B2はAzureよりも大幅に低いストレージ料金を提供しており、しばしばAzureのコストのごく一部で済むため、セカンダリのバックアップ先や完全な移行先として魅力的です。一度限りの移行でも、冗長性のための継続的な同期でも、RcloneViewはコマンドラインの専門知識を必要とせずに両方に対応します。RcloneViewには組み込みのrcloneバイナリが同梱されているため、追加でインストールするものはありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでAzure Blob Storageを設定する

RcloneViewで**New Remote**をクリックし、プロバイダーリストから**Microsoft Azure Blob Storage**を選択します。Azureポータル(ストレージアカウント > アクセスキー)から**Storage Account Name**と**Storage Account Key**が必要です。オプションとして、SASトークンや接続文字列を使用することもできます。保存すると、RcloneViewは接続し、すべてのBlobコンテナを一覧表示します。

複数のAzureストレージアカウントを使用している場合(例えば、環境やリージョンごとに個別のアカウントを持っている場合)、それぞれを個別の名前付きリモートとして追加してください。RcloneViewはすべてを同じインターフェースから管理するため、コンテナを比較したり、アカウント間でデータを簡単に移動したりできます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## Backblaze B2を接続する

もう一度**New Remote**をクリックし、**Backblaze B2**を選択して、Backblaze B2用の2つ目のリモートを追加します。Backblazeダッシュボードから**Application Key ID**と**Application Key**を入力します。セキュリティを強化するために、キーを特定のバケットに限定することもできます。保存すると、B2リモートがAzureリモートと並んでエクスプローラーに表示されます。

これで両方のリモートをデュアルペインビューで並べて開くことができます。一回限りの転送であれば、個々のファイルやフォルダツリー全体をAzureからB2へドラッグ&ドロップできます。大規模なコンテナの移行には、同期ジョブによる方法の方が信頼性が高く、再開も可能です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Azure Blob to Backblaze B2 in RcloneView" class="img-large img-center" />

## 同期ジョブの作成とスケジューリング

**Job Manager**を開き、4ステップの**Job Wizard**を使用して、Azure Blobをソース、Backblaze B2を宛先とする同期ジョブを作成します。必ず最初に**dry run**を実行してください。これにより、データに触れることなく、すべての追加と削除内容をプレビューできます。プレビューに問題がなければ、実際の同期を実行します。

継続的な冗長性を確保するために、PLUSライセンスのユーザーは**スケジュール**を追加して、Azure-to-B2の同期を毎日または毎週自動的に実行できます。**Job History**パネルには、すべての実行がファイル数と転送サイズとともに記録されるため、バックアップが正常に完了したことを確認したり、コンプライアンス要件を満たしているかを確認したりできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneView**をダウンロードします。
2. Storage Account NameとKeyを使用して**Azure Blob Storage**リモートを追加します。
3. Application Key IDとKeyを使用して**Backblaze B2**リモートを追加します。
4. デュアルペインエクスプローラーで両方のリモートを開き、**Job Wizard**を使用して同期ジョブを作成します。
5. まず**dry run**を実行し、その後PLUSライセンスで定期的な同期をスケジュールします。

RcloneViewを通じてAzure BlobからBackblaze B2へ同期することは、信頼性を犠牲にすることなく、コスト効率の高いクラウドバックアップ戦略を構築する最も効率的な方法の一つです。

---

**関連ガイド:**

- [Azure Blob Storageを管理する — RcloneViewによるクラウド同期](https://rcloneview.com/support/blog/manage-azure-blob-storage-cloud-sync-rcloneview)
- [Backblaze B2を管理する — RcloneViewによるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneViewでOneDriveをBackblaze B2に移行する](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
