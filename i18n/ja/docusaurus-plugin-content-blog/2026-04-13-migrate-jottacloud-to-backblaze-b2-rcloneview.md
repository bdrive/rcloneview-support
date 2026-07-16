---
slug: migrate-jottacloud-to-backblaze-b2-rcloneview
title: "JottacloudからBackblaze B2への移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewを使ってJottacloudからBackblaze B2へファイルを移行します。ノルウェーのクラウドストレージを、手頃な価格のS3互換オブジェクトストレージへ直接転送できます。"
keywords:
  - Jottacloud to Backblaze B2
  - migrate Jottacloud
  - Jottacloud migration
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - Jottacloud RcloneView
  - Backblaze B2 backup
  - cloud storage migration
  - Norwegian cloud storage
  - RcloneView transfer
tags:
  - jottacloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# JottacloudからBackblaze B2への移行 — RcloneViewでファイルを転送

> RcloneViewを使って、Jottacloudのファイルを直接Backblaze B2オブジェクトストレージへ移行しましょう。ローカルへの中間ダウンロード不要のクラウド間直接移行です。

Jottacloudは、プライバシー保護を重視したノルウェーのクラウドストレージサービスで、北欧やヨーロッパ全域の個人・企業に利用されています。ストレージのニーズが拡大するにつれ、S3互換API、プログラムによるアクセス、大規模なアーカイブや開発者向けワークフローに適した階層型ストレージオプションを求めて、Backblaze B2へ移行するユーザーもいます。RcloneViewは両方のサービスを接続し、転送を直接処理します。中間のローカルハードドライブは必要ありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## JottacloudとBackblaze B2のセットアップ

両方のリモートをRcloneViewに追加するのは数分で完了します。Jottacloudの場合、Remoteタブを開き、New Remoteをクリックして、プロバイダーリストからJottacloudを選択します。セットアップにはJottacloudアカウントの認証情報を使用します。Backblaze B2の場合は、Backblaze B2を選択し、Backblazeアカウントの「App Keys」から生成したApplication Key IDとApplication Keyを入力します。両方のリモートは、Explorerパネルにアクセス可能なファイルツリーとして表示されます。

Jottacloudのフォルダーを閲覧し、移動したいコンテンツを把握しましょう。Jottacloudはファイルをデバイスとフォルダーに整理しているため、移行ジョブを作成する前に構造を理解しておくことで、正しいソースパスを選択できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 移行の実行

Jottacloudのフォルダーをソース、Backblaze B2バケットを宛先として同期ジョブを作成します。宛先バケットがまだない場合は、移行を実行する前にBackblazeのコンソールで直接作成できます。Syncウィザードの詳細設定ステップでは、同時ファイル転送数の設定やチェックサム検証の有効化が可能です。後者は各ファイルが完全な状態で届いたことを確認するもので、大量の写真や動画アーカイブでは特に重要です。

500GBのJottacloud RAWファイルをBackblaze B2へ移行する写真家の場合、フィルタリングステップによって段階的な移行が管理しやすくなります。まずファイル拡張子（`.raw`、`.cr3`、`.arw`）でフィルタしてカメラファイルを移行し、その後別のジョブで他のアセットタイプを処理します。最大ファイル経過日数のフィルタを使えば、古い素材をアーカイブする前に最近の作業を優先できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Jottacloud files to Backblaze B2 with RcloneView" class="img-large img-center" />

本番の移行を開始する前には、必ずDry Runを使用してください。シミュレーションでは、コピーまたは削除される全ファイルがリストアップされるため、実行前に対象範囲が意図通りであることを確認できます。

## 完了した移行の検証

転送が完了したら、Folder Compareを使用して完全性を検証します。ソースのJottacloudフォルダーとBackblaze B2の宛先を選択すると、比較ビューで片方にしか存在しないファイルやサイズが異なるファイルがハイライト表示されます。これにより、大規模な移行では見落とされがちな未転送ファイルや途中で切れた転送を検出できます。

Job Historyパネルには、各移行実行の所要時間、ファイル数、転送された総データ量、最終ステータスが表示されます。ネットワークの問題やシステムのスリープによって実行が中断された場合でも、同期ジョブを再実行すれば、rcloneの差分転送の仕組みにより、不足しているファイルや変更されたファイルのみが再転送されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Jottacloud to Backblaze B2 migration job history in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Jottacloudアカウントの認証情報を使って、Jottacloudをリモートとして追加します。
3. Application Key IDとApplication Keyを使って、Backblaze B2を追加します。
4. Dry Runでプレビューを確認してから、同期を実行してB2バケットへファイルを移行します。

RcloneViewを通じたJottacloudからBackblaze B2への移行は、差分転送・再開可能・完全GUI操作で、スクリプト作成は一切不要です。

---

**関連ガイド:**

- [RcloneViewでJottacloudのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [RcloneViewでDropboxをBackblaze B2にバックアップする](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [RcloneViewでWasabiをBackblaze B2に移行する](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
