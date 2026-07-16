---
slug: migrate-onedrive-to-azure-blob-rcloneview
title: "OneDriveからAzure Blobへ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewを使ってOneDriveのファイルをAzure Blob Storageに移行しましょう。CLIツールやスクリプトを使わずに、エンタープライズドキュメントをスケーラブルなオブジェクトストレージへ移動できます。"
keywords:
  - onedrive to azure blob
  - migrate onedrive to azure
  - onedrive azure blob transfer
  - cloud-to-cloud migration
  - azure blob storage migration
  - rcloneview onedrive transfer
  - microsoft cloud migration
  - enterprise cloud migration
  - onedrive backup azure
  - object storage migration
tags:
  - onedrive
  - azure
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveからAzure Blobへ移行 — RcloneViewでファイルを転送

> OneDriveからAzure Blob Storageへステップアップすることで、チームはスケーラブルでプログラム可能なオブジェクトストレージを手に入れられます。RcloneViewを使えば、その移行も手間なく行えます。

OneDriveは日常的なドキュメントのコラボレーションには適していますが、エンタープライズチームはストレージの上限を超えたり、Azure REST API経由でファイルへプログラムからアクセスする必要が出てくることがよくあります。Azure Blob Storageは階層型の料金体系（Hot、Cool、Archive）、大規模なスケーラビリティ、そしてAzure Functions、Logic Apps、Data Factoryとの緊密な統合を提供します。RcloneViewはこの2つのMicrosoftサービスを橋渡しし、コードを一行も書かずにOneDriveからAzure Blobコンテナへファイルを移行できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDriveが限界に達したとき

OneDrive for Businessは、ほとんどのMicrosoft 365プランでユーザーあたり1 TBを提供し、オプションで最大5 TBまで追加できます。これは十分に思えますが、組織が数年分のプロジェクトアーカイブ、メディアアセット、コンプライアンス記録を蓄積していくと話は変わってきます。Azure Blob Storageはエクサバイト規模までスケールし、Coolティアでは1 GBあたり月額わずか0.018ドルという料金です。これは同等のOneDrive容量にかかる費用のごく一部です。

単なる容量だけでなく、Azure BlobはOneDriveでは実現できない機能もサポートしています。規制対応のための不変ストレージポリシー、グローバルなコンテンツ配信のためのAzure CDN統合、そして共有アクセス署名（SAS）によるきめ細かなアクセス制御などです。アーカイブデータや大規模データをOneDriveからAzure Blobへ移行することで、既存のインフラがあるところにストレージを集約できます。

<img src="/support/images/en/blog/new-remote.png" alt="Creating OneDrive and Azure Blob remotes in RcloneView" class="img-large img-center" />

## 両方のリモートを設定する

RcloneViewでプロバイダータイプに「Microsoft OneDrive」を選択し、OneDriveリモートを追加します。OAuthフローによりブラウザが開き、Microsoftアカウントで認証を行います。ソースファイルの所在に応じて、OneDrive Personal、OneDrive for Business、または特定のSharePointドキュメントライブラリのいずれかを選択します。認証が完了すると、RcloneViewは選択したドライブのルートを表示します。

Azure Blobについては、新しいリモートを作成し「Microsoft Azure Blob Storage」を選択します。ストレージアカウント名と、アカウントキーまたはSAS URLのいずれかを入力します。組織がAzure Active Directory認証を必須としている場合も、RcloneViewはそのパスをサポートします。対象コンテナを選択するか、ジョブ設定用にコンテナ名をメモしておきます。RcloneViewは接続を確認し、既存のコンテナとblobを一覧表示します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up a cloud-to-cloud transfer from OneDrive to Azure Blob" class="img-large img-center" />

## 移行を実行する

OneDriveを片側に、Azure Blobをもう片側に配置した2ペインエクスプローラーを開きます。移行したいOneDriveフォルダー（例：`/Documents/Projects`やルート全体）へ移動します。Azure側では対象コンテナへ移動します。

構造化された移行を行うには、ジョブマネージャーでCopyジョブを作成します。OneDriveをソースパスに、Azure Blobコンテナを保存先に設定します。移行期間中にOneDriveからファイルを削除せずに転送するには、「Copy」モードを選択します。ジョブを複数回実行する予定がある場合は、`--ignore-existing`フラグを有効にすると、すでに転送済みのファイルを効率的にスキップできます。

OneDriveのAPIにはレート制限があり、大規模な転送を遅くすることがあります。RcloneViewはスロットリングと再試行を自動的に処理し、Microsoftの制限内でスループットを最適化するために並列転送数（`--transfers`フラグ）を設定することもできます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Migration job history showing OneDrive to Azure Blob transfers" class="img-large img-center" />

## 移行後の検証

ジョブが完了したら、RcloneViewの比較機能を使ってOneDriveとAzure Blob間のファイル数とサイズを比較します。両方のリモートを並べて開き、比較を実行して差異がないか確認します。Azure Blobはアップロードされたオブジェクトに対してMD5ハッシュを保存するため、チェックサム検証によって転送中に発生したあらゆる破損を検出できます。

検証が完了したら、アプリケーションがOneDriveの代わりにAzure Blobから読み込むように設定します。移行期間中はRcloneView上でOneDriveリモートの接続を維持し、切り替えが完了するまでにユーザーがOneDriveへ追加し続けるファイルを取りこぼさないよう、定期的な同期ジョブを実行してください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling periodic OneDrive to Azure Blob sync during migration" class="img-large img-center" />

## はじめ方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Microsoft OAuthでOneDriveアカウントを認証し、正しいドライブタイプを選択します。
3. ストレージアカウント名とアクセスキーまたはSASトークンを使ってAzure Blobリモートを追加します。
4. OneDriveからAzure BlobへのCopyジョブを作成し、チェックサム検証を有効にして実行します。

すべてのファイルがAzure Blobで確認できたら、ワークフローを切り替え、自分のペースでOneDriveストレージを廃止してください。

---

**関連ガイド：**

- [RcloneViewでOneDriveからGoogle Driveへ移行する](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [RcloneViewでAzure Blob Storageをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [RcloneViewでAzure BlobとAWS S3を同期する](https://rcloneview.com/support/blog/sync-azure-blob-to-aws-s3-rcloneview)

<CloudSupportGrid />
