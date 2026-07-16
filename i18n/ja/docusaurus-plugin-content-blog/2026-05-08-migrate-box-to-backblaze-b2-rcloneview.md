---
slug: migrate-box-to-backblaze-b2-rcloneview
title: "BoxからBackblaze B2への移行 — RcloneViewでファイルを転送"
authors:
  - steve
description: "RcloneViewを使ってBoxのクラウドストレージをBackblaze B2オブジェクトストレージに移行しましょう。ファイルの移行、転送の検証、今後のバックアップの自動化までを網羅した完全ガイドです。"
keywords:
  - Box to Backblaze B2 migration
  - migrate Box Backblaze B2 RcloneView
  - Box Backblaze B2 file transfer
  - switch Box to B2 storage
  - cloud storage migration Box
  - Box backup Backblaze B2
  - Box to S3 migration
  - rclone Box B2 GUI
tags:
  - box
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# BoxからBackblaze B2への移行 — RcloneViewでファイルを転送

> RcloneViewのGUIによる移行ワークフローを使って、Boxのワークスペース全体をBackblaze B2オブジェクトストレージへ移行、あるいはBoxコンテンツのセカンダリバックアップコピーを作成しましょう。

Boxは広く使われているエンタープライズ向けコラボレーションプラットフォームですが、アーカイブやバックアップ用途では、Backblaze B2のような専用オブジェクトストレージと比較してストレージコストが高くなる場合があります。Boxからアーカイブデータをオフロードしたい、あるいはよりコスト効率の良い階層にBoxコンテンツのバックアップコピーを作成したいチームは、RcloneViewを使うことで、事前にローカルへダウンロードすることなく直接移行できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## BoxとBackblaze B2の接続

Boxの場合、**Remoteタブ → New Remote**に移動し、Boxを選択して、Boxアカウントでのoauth認証を完了させます。Box for Businessのユーザーは、ワークスペース全体へのアクセス権を得るために、リモート設定で`box_sub_type = enterprise`も設定してください。Backblaze B2の場合は、リモート設定時にApplication Key IDとApplication Keyを入力します。

両方のリモートを設定したら、左側のエクスプローラーパネルにBox、右側にB2を配置します。移行したい特定のBoxフォルダーを参照し、転送を開始する前に、対象のB2バケットが正しく命名され、アクセス可能であることを確認してください。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Box and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 移行ジョブの設定

Homeタブの**Sync**ボタンを使って移行ジョブを作成します。ソースにBoxフォルダーを、宛先にB2バケット(またはその中のサブフォルダー)を設定します。Step 2では**Checksum**を有効にして、転送中にすべてのファイルの整合性を検証します。リトライ回数は5回以上に設定してください。B2のAPIは大規模な一括転送中にリクエストをスロットリングすることがあり、自動リトライによって手動介入なしに移行を完了できます。

実際の移行の前に、**Dry Run**を実行して、転送されるファイルの完全なリストを確認しましょう。これは、共有ファイルやBox Notes(`.boxnote`形式)が想定通りに転送されない可能性があるBoxの移行では特に重要です。Dry Runの出力は、本番データに影響を与える前に失敗するファイルを明らかにします。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

## Box Notesと特殊ファイル形式の扱い

Box Notesは、Box以外では正しく表示されない可能性がある独自形式(`.boxnote`)です。移行前に、保持する必要があるBox NotesをBoxのWebインターフェースから標準形式(`.docx`や`.pdf`など)でエクスポートしてください。RcloneViewは`.boxnote`ファイルをバイナリデータとして移行しますが、B2や他の非Boxクライアントでは編集できません。

共有フォルダーや外部コラボレーターのコンテンツについては、移行を予定しているすべてのコンテンツにBoxアカウントがアクセスできることを確認してください。RcloneViewの**Logタブ**には、アカウントがアクセスできないファイルの権限エラーが表示されます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Box to B2 migration progress in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Box(OAuth)とBackblaze B2(Application Key)をリモートとして追加します。
3. 実行前にDry Runで移行内容をプレビューします。
4. Checksum検証を有効にして実際の移行を実行します。

RcloneViewを使ったBoxからBackblaze B2への移行は、アーカイブコンテンツに対してコスト効率が高く耐久性のあるストレージを実現する、クリーンで検証可能なプロセスです。

---

**関連ガイド:**

- [RcloneViewでBoxをAWS S3へ移行](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [RcloneViewでBackblaze B2クラウドストレージを管理](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneViewでBoxからS3 Glacierへアーカイブ](https://rcloneview.com/support/blog/box-to-s3-glacier-archive-rcloneview)

<CloudSupportGrid />
