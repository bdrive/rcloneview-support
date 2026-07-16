---
slug: one-to-many-sync-multiple-destinations-rcloneview
title: "1:N 同期 — RcloneViewで1つのソースを複数の宛先に同期する"
authors:
  - tayson
description: "RcloneViewの1:N同期機能を使って、1つのソースフォルダを複数のクラウド宛先に同時にミラーリングします。S3、Google Drive、Backblaze B2へのバックアップを1つのジョブで実行できます。"
keywords:
  - 1:N sync RcloneView
  - sync one source multiple destinations
  - multi-destination backup
  - cloud backup multiple clouds
  - RcloneView 1 to N sync
  - cloud replication multiple providers
  - mirror to multiple clouds
  - RcloneView sync feature
  - multi-cloud backup job
  - one to many cloud sync
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1:N 同期 — RcloneViewで1つのソースを複数の宛先に同期する

> RcloneViewの1:N同期を使えば、1つのソースフォルダを1つのジョブで複数のクラウド宛先にミラーリングできます — Google Drive、Amazon S3、Backblaze B2へ同時にバックアップします。

データのレジリエンスの基本原則の1つが3-2-1バックアップルールです。すなわち、データを3つのコピーとして保持し、2種類の異なるメディアに保存し、うち1つはオフサイトに置くというものです。クラウドストレージを使えば物理的なドライブなしでこれを実現できますが、各プロバイダーに対して個別に同期ジョブを手動で実行するのは手間がかかり、ミスも起こりやすい作業です。RcloneViewの1:N同期機能を使えば、1つのソースフォルダを複数のクラウド宛先に同時に同期するよう設定でき、ジョブを1回実行するだけですべてのバックアップ先をカバーできます。この機能はFREEライセンスでご利用いただけます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 1:N同期とは何か

1:N同期(1対多同期)とは、1つのソースを1回のジョブ実行でN個の宛先リモートにミラーリングすることです。ジョブを実行すると、RcloneViewは設定されたすべての宛先に対してソースを同期し、存在しないファイルを追加し、変更されたファイルを更新し、必要に応じてソースから削除されたファイルを削除します。

これは、複数の同期ジョブを順番に実行するのとは異なります。1:N同期では、すべての宛先が同一の実行ウィンドウ内に書き込まれ、各宛先の進捗状況はTransferringタブで追跡されます。Job Historyには、実行結果のサマリーとして各宛先の結果が記録されます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="1:N sync job sending source to multiple cloud destinations in RcloneView" class="img-large img-center" />

## 1:N同期ジョブの設定

複数宛先の同期ジョブの設定は、通常のジョブと同じ4ステップのSyncウィザードを使用します。異なるのはステップ1で、ソースリモートとフォルダを選択した後、Add Destinationボタンをクリックして宛先リモートを追加します。必要な数だけ宛先を追加できます。たとえば、Google Drive、Amazon S3、Backblaze B2などです。

**本番環境でのバックアップ戦略の例:**

1. **ソース:** ローカルNASフォルダ `/data/projects`
2. **宛先1:** Google Drive `/Backups/Projects`
3. **宛先2:** Amazon S3バケット `my-company-backup/projects`
4. **宛先3:** Backblaze B2バケット `projects-archive`

各宛先はソースコンテンツと同一のコピーを受け取ります。同期ジョブ名、フィルタリングルール、詳細設定は、ジョブ内のすべての宛先に一律に適用されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring 1:N sync with multiple cloud destinations in RcloneView" class="img-large img-center" />

## 実践的な使用例

**3-2-1バックアップの実装:** ローカルソース → Google Drive + Amazon S3 + Backblaze B2 という構成にします。1回のジョブ実行で、異なるクラウドプロバイダーに3つのコピーを作成できます。

**コンテンツ配信:** ビデオ制作チームが編集サーバーからの最終書き出しファイルを、Dropbox(クライアントレビュー用)、Google Drive(社内アーカイブ用)、CDNオリジンバケットに同時に同期するケースです。

**リージョンレプリケーション:** 組織が中央のドキュメントリポジトリを、レイテンシと可用性の観点から、地理的に異なるゾーンのリージョンクラウドバケットに同期するケースです。

**プロバイダー間の冗長性:** メインのOneDriveフォルダをBackblaze B2とCloudflare R2の両方に同期することで、片方のプロバイダーに障害が発生しても、もう片方には最新のコピーが残るようにします。

## 1:N同期ジョブのスケジューリング

定期的に実行する必要がある1:Nジョブについては、スケジュール同期(PLUSライセンス)が単一宛先ジョブと同様に複数宛先ジョブにも適用されます。ウィザードのステップ4でcrontab形式のスケジュールを設定すると、RcloneViewはスケジュールされた間隔ごとに複数宛先への同期をすべて実行します。Job Historyには各実行の結果が記録され、すべての宛先が正常に更新を受け取ったかどうかを確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブで、対象となるすべてのクラウドプロバイダーをリモートとして追加します。
3. Syncウィザードを開き、ステップ1のAdd Destinationを使って、ソースに対して複数の宛先を設定します。
4. 必要に応じて、複数宛先への同期を自動実行するスケジュール(PLUSライセンス)を追加します。

1:N同期は、バックアップ戦略においてRcloneViewの中でも特に時間を節約できる機能の1つです — 一度設定すれば、ジョブが実行されるたびにすべてを保護できます。

---

**関連ガイド:**

- [RcloneViewで毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneViewによるマルチクラウドバックアップ戦略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [RcloneViewでNASを複数のクラウドにバックアップする](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
