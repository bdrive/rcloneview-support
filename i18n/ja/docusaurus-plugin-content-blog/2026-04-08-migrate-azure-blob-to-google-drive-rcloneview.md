---
slug: migrate-azure-blob-to-google-drive-rcloneview
title: "RcloneViewでAzure Blob StorageからGoogle Driveへ移行する"
authors:
  - tayson
description: "RcloneViewを使ってAzure Blob StorageからGoogle Driveへ移行する方法。セットアップ、大規模コンテナの処理、検証、増分同期のステップバイステップガイド。"
keywords:
  - rcloneview
  - azure blob to google drive
  - migrate azure storage
  - azure blob migration
  - cloud to cloud migration
  - azure to google workspace
  - cloud storage migration tool
  - azure blob transfer
  - google drive migration gui
  - enterprise cloud migration
tags:
  - azure
  - google-drive
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでAzure Blob StorageからGoogle Driveへ移行する

> Azure Blob Storageは開発者向けに作られていますが、チームにコラボレーション機能が必要な場合、Google Driveが移行先となります。**RcloneView**はオブジェクトストレージとコンシューマー向けクラウドの橋渡しをします。

Azure Blob Storageはアプリケーションへのサービス提供に優れており、ホット、クール、アーカイブの各階層により、開発者は構造化されたワークロードに対してきめ細かなコスト管理が可能です。しかし、ビジネスニーズがドキュメントのコラボレーション、共同編集、Google Workspace統合へとシフトすると、AzureコンテナからGoogle Driveへデータを移動する必要が出てきます。RcloneViewは両方のプラットフォームに接続し、大規模なコンテナを処理し、フォルダ構造を維持し、転送されたすべてのファイルを検証する視覚的な移行ワークフローを提供します。

このガイドでは、両方のリモートの設定から移行期間中の増分同期の設定まで、移行プロセス全体を説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure BlobからGoogle Driveへ移行する理由

この移行の理由は、通常いくつかのカテゴリに分類されます。

- **コラボレーション要件**: Azure Blob Storageには組み込みのドキュメント編集や共有機能がありません。Google DriveはDocs、Sheets、Slidesによるリアルタイムコラボレーションに加え、チーム向けのきめ細かな共有権限を提供します。
- **Google Workspace統合**: Google Workspaceへ移行する組織は、ファイルをGoogle Driveに置くことで、Gmail、カレンダー、Meetなどの他のWorkspaceアプリと連携できるメリットがあります。
- **コストの簡素化**: Azure Blobの料金体系には、ストレージ階層、送信料金、読み取り/書き込み操作、データ冗長化オプションが関わります。Google Workspaceはストレージをユーザーごとの料金にまとめているため、予算管理がよりシンプルになる場合があります。
- **エンドユーザーのアクセスしやすさ**: 技術に詳しくないユーザーにとって、Google DriveはAzure Storage ExplorerやAzureポータルよりもはるかに扱いやすいと感じられます。

## RcloneViewでAzure Blob Storageを設定する

リモートマネージャーを開き、**Microsoft Azure Blob Storage**リモートを追加します。必要なものは以下の通りです。

- **アカウント名**: Azureストレージアカウント名
- **アカウントキー**または**SAS URL**: Azureポータルからのプライマリアクセスキー、または読み取りとリストの権限を持つ共有アクセス署名（SAS）

設定が完了すると、RcloneViewはストレージアカウント内のすべてのコンテナを一覧表示します。各コンテナはエクスプローラーのトップレベルフォルダとして表示されます。コンテナ内に移動して、プレフィックスベースの仮想ディレクトリ構造で整理されたBlobを参照できます。

Azure Blob Storageは、ホット、クール、アーカイブという3つのアクセス階層をサポートしています。RcloneViewはホットとクールの各階層から直接読み取ることができます。アーカイブ階層のBlobは、転送前にホットまたはクールにリハイドレート（復元）する必要があります。移行対象にアーカイブ済みBlobが含まれる場合は、まずAzureポータルでリハイドレートを開始し、Blobにアクセス可能になってからRcloneViewでの作業を進めてください。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## RcloneViewでGoogle Driveを設定する

OAuth 2.0フローを使ってGoogle Driveリモートを追加します。リモートマネージャーで「認証」をクリックし、Googleアカウントにログインしてアクセスを許可します。Google Workspaceアカウントの場合、マイドライブまたは特定の共有ドライブに接続できます。

移行先が共有ドライブの場合は、設定時にそれを選択します。共有ドライブは所有権のルールが異なり、ファイルは個々のユーザーではなく組織に属するため、チームでの移行に最適です。

Google Driveにはユーザーごとのストレージ容量制限があります（無料枠は15GB、またはWorkspaceプランではプール容量）。大規模な移行を開始する前に、移行先に十分な容量があることを確認してください。転送中に容量を超過すると、RcloneViewはエラーを報告します。

## 大規模なコンテナの処理

Azureコンテナには数百万のBlobが格納され、合計で数テラバイトから数ペタバイトのデータになることがあります。一度にすべてを移行することは可能ですが、計画が必要です。

- **まず列挙する**: RcloneViewのエクスプローラーを使ってコンテナを参照し、フォルダ構造と合計サイズを把握します。これにより、移行にかかる時間とGoogle Driveの必要容量を見積もることができます。
- **プレフィックスごとに移行する**: コンテナが論理的なフォルダ構造を使用している場合（例: `/projects/2024/`、`/projects/2025/`）、一度に1つのプレフィックスずつ移行します。これにより検証が容易になり、アクティブなデータを優先できます。
- **並列転送**: RcloneViewの設定で同時転送数を増やします。Azure Blob Storageは高い同時実行数に対応しており、Google Driveも適切なレート制限処理を行いながら並列アップロードをサポートします。

Google DriveはAPIレート制限を課しており、ほとんどのアカウントで1秒あたり10回のアップロードが上限です。RcloneViewは自動的にスロットリングを行い、403（レート制限超過）または429のレスポンスに対して再試行しますが、この制約により大規模な移行は自然と時間がかかります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Azure Blob Storage to Google Drive in RcloneView" class="img-large img-center" />

## 移行の実行

左側にAzure Blob、右側にGoogle Driveを表示する2ペインエクスプローラーを開きます。移行元のコンテナ（または特定のプレフィックス）と、Google Drive上の移行先フォルダを選択します。

コピージョブまたは同期ジョブを作成します。RcloneViewは各Blobをファイルとして転送し、プレフィックスベースのディレクトリ構造をGoogle Drive上の実際のフォルダとして維持します。ファイル名、サイズ、変更日時は保持されます。Azureのメタデータ（カスタムBlobプロパティ）は、Google Driveが任意のキーバリュー形式のメタデータをサポートしていないため転送されません。

転送中、リアルタイム監視パネルには以下が表示されます。

- ファイルごとの転送進捗と速度
- 完了ファイル数と残りファイル数
- 完了までの推定時間
- エラーや再試行の状況

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Azure Blob to Google Drive migration in RcloneView" class="img-large img-center" />

## 移行の検証

転送が完了したら、RcloneViewの比較機能を使って移行を検証します。Azureコンテナと移行先のGoogle Driveフォルダを比較します。比較ビューでは以下がハイライトされます。

- **欠落ファイル**: 転送されなかったBlob（エラーやアーカイブ階層の制限による可能性があります）
- **サイズの不一致**: 不完全に転送されたファイル
- **一致ファイル**: 正常に移行された項目

Azure Blob Storageはコンテンツ検証にMD5を使用し、Google Driveは独自のチェックサムを使用するため、RcloneViewはデフォルトでファイルサイズと変更日時を比較に使用します。重要な移行の場合は、ジョブ設定でチェックサム検証を有効にすることでバイト単位の精度を確保できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Azure to Google Drive migration with compare" class="img-large img-center" />

## 移行後の増分同期のスケジュール設定

移行が瞬時に完了することはほとんどなく、転送が進行している間にもAzure Blob Storageに新しいデータが届くことがあります。移行期間中はRcloneViewでスケジュール同期ジョブを設定し、毎日（またはより頻繁に）実行するようにしましょう。この増分同期により、新規または変更されたBlobを検出し、差分のみをGoogle Driveへ転送します。

すべてのシステムがGoogle Driveを参照するようになり、Azureコンテナへの新規データの受信が止まったら、最終同期を実行して残りのデータを回収します。その後、スケジュールジョブを無効化します。

長期にわたる移行期間には、RcloneViewのジョブ履歴が、転送されたファイル、移動したバイト数、エラー、実行時間など、すべての同期実行の完全なログを提供します。この監査証跡は、移行スケジュールの検証やステークホルダーへの報告に非常に役立ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Azure to Google Drive" class="img-large img-center" />

## 移行期間の管理

共存期間中は、RcloneViewで両方のリモートをマウントし、並行してアクセスできるようにすることを検討してください。ユーザーはAzureコンテナとGoogle Driveを同時に参照し、ファイルが新しい場所で利用可能であることを確認できます。マウント機能により、ユーザーはGoogle Driveをローカルドライブレターとしてアクセスでき、マップされたドライブに慣れているチームにとって移行が容易になります。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as local drive during migration" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Azure Blob Storage（アカウントキーまたはSAS）とGoogle Drive（OAuth経由）をリモートとして追加します。
3. 2ペインエクスプローラーから移行を実行し、管理しやすいようにコンテナまたはプレフィックス単位で移行します。
4. 比較機能で検証し、移行が完了するまで増分同期をスケジュールします。

Azure Blob Storageはアプリケーションへのサービス提供に優れていますが、チームにGoogle Workspaceでのコラボレーションが必要な場合、RcloneViewはデータをクリーンかつ検証可能な形で移動します。

---

**関連ガイド:**

- [Google Driveを追加する](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [リモートストレージを即座に同期する](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
