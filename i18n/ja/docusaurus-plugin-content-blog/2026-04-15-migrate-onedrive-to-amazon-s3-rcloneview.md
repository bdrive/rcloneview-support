---
slug: migrate-onedrive-to-amazon-s3-rcloneview
title: "OneDriveからAmazon S3への移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewでOneDriveからAmazon S3へ移行 — GUIを使ってクラウド間でファイルを転送し、ドキュメントをアーカイブし、Microsoftストレージへの依存を減らします。"
keywords:
  - OneDrive to Amazon S3 migration
  - OneDrive to S3 transfer
  - cloud migration tool
  - RcloneView OneDrive
  - S3 archive
  - OneDrive export
  - Microsoft to AWS migration
  - cloud-to-cloud transfer
  - OneDrive S3 backup
  - reduce OneDrive costs
tags:
  - onedrive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveからAmazon S3への移行 — RcloneViewでファイルを転送

> OneDriveはMicrosoft 365のワークフローに適していますが、S3はコスト効率の高いアーカイブやAWS連携に優れています。RcloneViewはローカルへのダウンロードを一切必要とせず、OneDriveのコンテンツを直接S3へ移行します。

OneDriveはMicrosoft 365環境に自然に統合されますが、Microsoftのライセンスコストを削減したい組織、AWSインフラへの統合を進めたい組織、あるいはS3ネイティブなアーカイブが必要な組織では、OneDriveのコンテンツをAmazon S3へ移動する必要が生じることがあります。RcloneViewはクラウド間の直接移行パスを提供し、OneDriveとS3を同時に接続してローカルのディスク容量を消費することなくデータをストリーミングします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDriveとAmazon S3の接続

RcloneViewでOAuthブラウザ認証を使って**Microsoft OneDrive**を追加します — **Remoteタブ > New Remote > Microsoft OneDrive**。続いて、アクセスキーID、シークレットアクセスキー、AWSリージョンを使って**Amazon S3**を追加します。OneDrive for Businessアカウントの場合は、組織のテナントと適切なライブラリを対象とするようにリモートを設定してください。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

両方のリモートが有効になったら、RcloneViewのデュアルパネルエクスプローラーで並べて閲覧できます — 左側にOneDriveのフォルダ階層、右側にS3バケットの構造が表示されます。このビューは、どのOneDriveフォルダをどのS3プレフィックスに配置するかという移行マッピングの計画に役立ちます。

## ファイルの転送

**Job Manager**で、OneDriveフォルダから移行先のS3バケットパスへの**Copy**ジョブを作成します。1.5TBのアーカイブ済みプロジェクトファイルをOneDriveからS3へ移行する企業の場合、Copy（Syncではなく）が適切なジョブタイプです — 移行期間中も元のファイルを保持したままS3へすべてをコピーするため、削除前に検証する時間を確保できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Amazon S3 migration job in RcloneView" class="img-large img-center" />

Advanced Settingsのマルチスレッド転送や同時ファイル数の設定によりスループットを最大化できます。RcloneViewの基盤であるrcloneがOneDriveのAPIスロットリングや自動再試行を処理するため、プロバイダーが一時的にリクエストをレート制限しても、手動での介入なしに移行が継続します。

## 検証とクリーンアップ

移行後は、**Folder Compare**を使ってすべてのファイルが正しく転送されたことを確認します。OneDriveの元データとS3の移行先を比較すると、比較ビューには各側にのみ存在するファイルと一致するファイルが表示され、OneDriveのコンテンツを削除する前の確定チェックリストとして使えます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to S3 migration with Folder Compare in RcloneView" class="img-large img-center" />

確認が完了したら、OneDriveのコンテンツを段階的にアーカイブまたは削除できます。**Job History**ログには、何が、いつ、どれだけのデータが移動したかという移行の永続的な記録が残り、Microsoft 365サブスクリプションを廃止する際のコンプライアンス文書として役立ちます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **OneDrive**リモート（OAuth）と**Amazon S3**リモート（アクセスキー認証情報）を追加します。
3. Job ManagerでOneDriveからS3バケットへの**Copy**ジョブを作成します。
4. **Folder Compare**を使い、OneDriveのコンテンツを削除する前にすべてのファイルが転送されたことを確認します。

RcloneViewを使ったOneDriveからAmazon S3への移行は、複雑なITプロジェクトを、あらゆる段階で完全な可視性と検証を備えた、綿密に監視された自動ジョブへと変えます。

---

**関連ガイド:**

- [RcloneViewでOneDriveからGoogle Driveへ移行](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [RcloneViewでOneDriveからBackblaze B2へ移行](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [OneDriveクラウドストレージの管理 — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
