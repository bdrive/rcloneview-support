---
slug: migrate-backblaze-b2-to-google-drive-rcloneview
title: "Backblaze B2からGoogle Driveへ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "ローカルにダウンロードせずにBackblaze B2からGoogle Driveへファイルを移動。RcloneViewは進捗モニタリングとフィルタリング機能を備えたクラウド間直接転送を実現します。"
keywords:
  - Backblaze B2 to Google Drive
  - migrate B2 to Google Drive
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - B2 to GDrive RcloneView
  - transfer Backblaze files
  - cloud storage migration
  - Backblaze B2 sync
  - Google Drive import
  - RcloneView migration
tags:
  - RcloneView
  - backblaze-b2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2からGoogle Driveへ移行 — RcloneViewでファイルを転送

> RcloneViewを使えば、Backblaze B2バケットからGoogle Driveへファイルを直接転送できます。ローカルストレージを経由する必要はなく、リアルタイムの進捗トラッキングとフィルタ機能も利用できます。

Backblaze B2は優れたオブジェクトストレージソリューションですが、Google Workspaceを多用しているチームにとっては、コラボレーションを容易にするために作業ファイルをGoogle Driveに集約する方が実用的な場合があります。従来、数年分のB2アーカイブデータをGoogle Driveへ移行するには、まずすべてをローカルにダウンロードする必要があり、これは時間がかかりストレージも消費する作業でした。RcloneViewは同期エンジンを通じてB2とGoogle Drive間のクラウド間直接転送を可能にし、ローカルディスクに触れることなく両プロバイダー間でデータをやり取りします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを設定する

移行を始める前に、Backblaze B2とGoogle Driveの両方をRcloneViewにリモートとして追加します。Backblaze B2の場合は、Remoteタブに移動し、New Remoteをクリックして、Backblaze B2を選択します。Backblazeアカウントの「App Keys」から生成されたApplication Key IDとApplication Keyを入力します。Google Driveの場合は、プロバイダーリストからGoogle Driveを選択すると、OAuth認証用のブラウザウィンドウが開きます。Googleアカウントでサインインし、アクセスを許可してください。

両方のリモートが設定できたら、RcloneViewのデュアルパネルFile Explorerで両者を並べて開くことができます。片側でB2バケットを、もう片側でGoogle Driveのフォルダを閲覧し、構築したい移行構造を視覚的に確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Google Drive remotes in RcloneView" class="img-large img-center" />

## 移行を実行する

両方のリモートが接続できたら、Sync wizardを使って転送を設定します。移行元としてBackblaze B2のバケット（またはその中の特定のパス）を、移行先としてGoogle Driveのフォルダを選択します。Advanced Settingsのステップでは、チェックサム検証によって各ファイルが正しく転送されたことを確認できます。これは、サイレントなデータ破損が見逃されがちな大規模アーカイブにおいて重要な機能です。

Filteringのステップは、大規模なB2バケットの移行時に役立ちます。ファイルの更新日時によるフィルタを使って特定の日付より古いファイルのみを移行したり、特定の拡張子（一時ファイルの`.tmp`など）を除外したり、最大ファイルサイズを制限して移行を分割して段階的に進めることができます。これは、あるデザイン会社の3TBに及ぶプロジェクトアーカイブを移行する際に特に役立ちます。ファイルタイプやフォルダの階層でフィルタをかけ、各バッチで移動する対象をコントロールできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 files to Google Drive with RcloneView" class="img-large img-center" />

本番の移行を実行する前に、Dry Runモードを使って、どのファイルがコピーされるかを正確にプレビューしましょう。このシミュレーションでは、実際に変更を加えることなく、計画されている操作の完全な一覧が表示されます。本番データを移行する際の重要な安全対策です。

## 転送の監視と検証

RcloneView下部のTransferringタブでは、ジョブの進捗状況（ファイル数、転送ステータス、発生したエラーなど）をリアルタイムで確認できます。数時間にわたる大規模な移行の場合、Job Historyには各実行の開始時刻、所要時間、転送された総データ量、最終ステータスが記録されます。

転送が完了したら、Folder Compareを使って、B2の移行元にあったすべてのデータがGoogle Driveに存在することを検証します。この比較機能は、片方にしか存在しないファイルやサイズが異なるファイルをハイライト表示するため、正常に完了しなかった項目を特定して再転送するのが簡単になります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing migration job history for B2 to Google Drive transfer in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Application Key IDとApplication Keyを使ってBackblaze B2を追加します。
3. OAuthブラウザ認証フローでGoogle Driveを追加します。
4. Sync wizardとDry Runを使って、本番転送を実行する前に移行内容をプレビューします。

クラウド間の直接移行により、ローカル中間ストレージがボトルネックになることがなくなり、B2からGoogle Driveへの転送をプロバイダー側のスループットで実行し続けることができます。

---

**関連ガイド:**

- [RcloneViewでBackblaze B2からAmazon S3へ移行](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [RcloneViewでGoogle Driveのクラウド同期とバックアップを管理](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneViewでDropboxを手頃な価格のBackblaze B2にバックアップ](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
