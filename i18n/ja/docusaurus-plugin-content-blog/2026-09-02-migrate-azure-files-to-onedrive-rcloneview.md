---
slug: migrate-azure-files-to-onedrive-rcloneview
title: "Azure FilesをOneDriveに移行 — RcloneViewでファイルを転送"
authors:
  - casey
description: "RcloneViewでAzure File StorageをOneDriveに移行します。ドラッグ&ドロップ、同期ジョブ、ドライラン プレビューでクラウド間のビジネスファイルを移動します。"
keywords:
  - azure filesをonedriveに移行
  - azure file storage 移行
  - onedrive クラウド移行
  - azureからonedriveへの転送
  - クラウド間移行
  - RcloneView azure files
  - RcloneView onedrive
  - azure file storageをonedriveへ移動
  - クラウド間ファイル転送
  - ビジネスクラウド移行ツール
tags:
  - RcloneView
  - azure-files
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Azure FilesをOneDriveに移行 — RcloneViewでファイルを転送

> コマンドラインを使わず、2つの別々のコンソールを行き来することもなく、Azure File Storageの共有全体をOneDriveに移行します。

プロジェクトや部門の共有のためにAzure File Storageを導入したチームは、社内の他の部分がMicrosoft 365とOneDriveを日常のコラボレーションツールとして標準化するにつれて、それを使いこなせなくなることがよくあります。2つの異なるWebポータルを使って手作業ですべてを再アップロードするのは、遅く、ミスも起こりやすい作業です。RcloneViewは両方のリモートを1つのウィンドウに並べて表示し、その間で直接ファイルを移動できるようにするため、手作業でのコピー&ペーストの繰り返しではなく、1つの追跡可能なジョブとして移行を行えます。マウントのみのツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダー比較を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure FilesとOneDriveを並べて接続する

Azure File Storageを追加するには、Azure Portalの[アクセスキー]ページにあるストレージアカウント名、共有キー、共有名が必要です — RcloneViewのリモート設定ウィザードは、まさにこの3つの項目を尋ねます。一方OneDriveは、ブラウザベースのOAuthを使用します。New Remoteをクリックし、OneDriveを選択して、RcloneViewが開くポップアップウィンドウでサインインするだけです。コピー&ペーストするAPIキーはありません。

両方のリモートが設定されたら、2ペイン(または4ペイン)レイアウトを使ってそれぞれを独自のExplorerパネルで開きます。片側にはAzure共有のフォルダーツリー、もう片側にはOneDriveの構造が表示され、各パネルの下部にファイル数とサイズが表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでAzure File StorageとOneDriveをリモートとして追加" class="img-large img-center" />

## 2つのリモート間でファイルを転送または同期する

一度限りの移行であれば、Azure Filesパネルでフォルダーやファイルを選択し、OneDriveパネルへドラッグします — 異なる2つのリモート間のドラッグはコピー操作となるため、片付ける準備ができるまでAzure側の元データはそのまま残ります。より大規模な共有の場合は、代わりにSyncウィザードを使用してください。Azure Filesをソース、OneDriveを宛先として指定し、実際に移動が行われる前にどのファイルがコピーされるかを確認するため、まずDry Runを実行します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Azure File StorageからOneDriveへのファイル転送" class="img-large img-center" />

同期のAdvanced Settingsステップでチェックサム比較を有効にすると、RcloneViewはファイル名だけでなくハッシュとサイズによってファイル内容を検証します。これは、移行が確実に完了したことを証明する必要がある場合に重要です。

## 移行の自動化と進捗の追跡

大規模な共有は一度では完了しないことがほとんどです。転送をJob Managerにジョブとして保存しておけば、初回実行後にAzure Filesに追加されたファイルを拾うために再実行でき、実行中は下部のInfo ViewにあるTransferringタブでリアルタイムの進捗、速度、ファイル数を確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewでAzure FilesからOneDriveへの定期同期ジョブをスケジュール" class="img-large img-center" />

Job Historyはすべての実行について、開始時刻、所要時間、ステータス、転送された総サイズを記録するため、Azure共有を廃止する前に移行が完了したことを確認する記録として利用できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. アカウント名、共有キー、共有名を使ってAzure File Storageリモートを追加します。
3. ブラウザベースのサインインフローでOneDriveを追加します。
4. Dry Runを実行してから同期ジョブを実行し、Job Historyで結果を確認します。

クリーンで検証可能な移行は、いつでも急ごしらえの手作業コピーに勝ります。

---

**関連ガイド:**

- [Azure Files Storageの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [OneDriveストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [RcloneViewでAzure Filesの接続エラーを解決する](https://rcloneview.com/support/blog/fix-azure-files-connection-errors-rcloneview)

<CloudSupportGrid />
