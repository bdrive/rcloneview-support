---
slug: migrate-box-to-cloudflare-r2-rcloneview
title: "BoxからCloudflare R2へ移行 — RcloneViewでファイルを転送"
authors:
  - robin
description: "RcloneViewでBoxからCloudflare R2へ移行します。2つのリモートを接続し、ドライランでコピーを確認し、クラウド間転送を実行して結果を検証します。"
keywords:
  - BoxからCloudflare R2へ移行
  - Box R2 転送
  - Box クラウド移行
  - Cloudflare R2 バックアップ
  - RcloneView
  - クラウド間転送
  - BoxからS3互換ストレージへ
  - Boxアーカイブをオブジェクトストレージへ
  - rclone GUI
tags:
  - RcloneView
  - box
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# BoxからCloudflare R2へ移行 — RcloneViewでファイルを転送

> 長年蓄積したBoxのコンテンツを、自分のディスクにダウンロードすることなくCloudflare R2オブジェクトストレージへ移動します。

Boxのプランが負担になった経理チームや、過去のプロジェクトを整理する部門は、代わりにオブジェクトストレージのアーカイブを求めることがよくあります。RcloneViewはBoxとCloudflare R2を並べて接続し、両者の間で直接コピーします。S3、Azure、Backblaze B2はFREEライセンスで読み書きの全機能を使って接続でき、R2も同様です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## BoxとCloudflare R2を接続する

BoxはOAuthのリモートです。RcloneViewがブラウザーを開き、サインインするとAPIキーなしでリモートが作成されます。会社でBox for Businessを使っている場合、リモートに`box_sub_type = enterprise`が必要です。個人用タイプのリモートでは企業のコンテンツが表示されないため、最初に確認してください。

Cloudflare R2は認証情報を使用します。CloudflareダッシュボードでR2バケットを作成し、Admin Read & Write権限のAPIトークンを生成して、New Remoteダイアログにトークン情報とアカウントのエンドポイント`https://<ACCOUNT_ID>.r2.cloudflarestorage.com`を入力します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでBoxとCloudflare R2のリモートを追加" class="img-large img-center" />

## フォルダー構成を計画する

一方のExplorerパネルでBox、もう一方でR2を開きます。R2はフラットなオブジェクトストレージなので、コピー前にプレフィックス構成を決めておきましょう。たとえばBoxの部門ごとに最上位フォルダーを1つ作り、その下に元のサブフォルダーを置きます。大きなBoxフォルダーにはGet Sizeを使い、移動するデータ量を見積もります。

Box NotesなどのBox Docsは通常のファイルではありません。同期ウィザードの定義済みフィルターにはBox Docsオプションがあり、アーカイブに含めたくない場合は除外できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewのExplorerパネルに並べて表示したBoxとCloudflare R2" class="img-large img-center" />

## ドライラン、そしてコピー

最初はSyncジョブではなくCopyジョブを作成し、どちら側からも何も削除されないようにします。まずDry Runで実行すると、RcloneViewは転送せずにコピー対象のファイルを一覧表示するため、コピー元フォルダーの間違いを見つけやすくなります。

Advanced Settingsの手順で、小さなファイルが多い場合はファイル転送数を増やし、ハッシュとサイズで照合したい場合はチェックサム比較を有効にします。その後ジョブを実行し、Transferringタブで進行状況を確認します。進捗率、速度、ファイル数がライブで更新されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewでBoxからR2へのコピージョブを実行" class="img-large img-center" />

## 移行を検証する

ジョブが完了したら、左にBox、右にR2を指定してFolder Compareを開きます。left-onlyフィルターで届いていない項目を確認し、different-filesフィルターでサイズの不一致を見つけます。Job Historyには各実行のステータス、所要時間、合計サイズ、ファイル数が残るため、監査証跡の資料として役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder CompareでBoxからR2への移行を検証" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード**: [rcloneview.com](https://rcloneview.com/src/download.html)から入手してください。
2. Boxリモート(OAuth)とCloudflare R2リモート(APIトークンとエンドポイント)を追加します。
3. BoxフォルダーからR2バケットのプレフィックスへのCopyジョブを作成し、Dry Runを実行します。
4. ジョブを実行し、Folder Compareで結果を確認します。

2つのリモートを接続すれば、BoxのコンテンツをR2へ移すのは数回のクリックで済みます。

---

**関連ガイド:**

- [BoxからAWS S3へ移行](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [RcloneViewでBoxストレージを管理](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dry Run: 転送前に同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
