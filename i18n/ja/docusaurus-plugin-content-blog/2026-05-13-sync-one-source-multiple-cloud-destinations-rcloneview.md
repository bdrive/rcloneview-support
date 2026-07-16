---
slug: sync-one-source-multiple-cloud-destinations-rcloneview
title: "1:N 同期 — RcloneViewで1つのソースを複数のクラウド宛先にバックアップ"
authors:
  - kai
description: "RcloneViewの1:N同期を使って、1つのソースフォルダを複数のクラウド宛先に同時にバックアップします。冗長なマルチクラウドバックアップでファイルを保護しましょう。"
keywords:
  - 1 to N sync RcloneView
  - multiple cloud backup destinations
  - sync one source multiple clouds
  - redundant cloud backup RcloneView
  - multi-cloud sync backup
  - backup multiple cloud providers
  - RcloneView multiple destinations
  - parallel cloud backup
  - one source multiple backups RcloneView
  - automated multi-destination sync
tags:
  - multi-cloud
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1:N 同期 — RcloneViewで1つのソースを複数のクラウド宛先にバックアップ

> 1つの同期ジョブで複数の宛先へ — RcloneViewは、1回の実行で1つのソースを必要な数だけのクラウドプロバイダーにミラーリングします。

多くのバックアップ戦略は冗長性の面で失敗します。ファイルが1つの宛先にしか送られず、単一障害点が生まれてしまうのです。RcloneViewの1:N同期を使えば、1つのジョブ内で1つのソースフォルダを複数のクラウド宛先にバックアップでき、Google Drive、Backblaze B2、S3互換プロバイダーへ同時にデータを送ることができます。宛先ごとに別々のジョブを実行する必要はありません。この機能はFREEライセンスで利用でき、設定済みのあらゆるクラウドリモートの組み合わせで動作します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewにおける1:N同期の仕組み

RcloneViewのJob Managerで同期ジョブを作成すると、4ステップのウィザードのステップ1で複数の宛先フォルダを追加できます。ソースと最初の宛先を選択した後、**Add Destination**をクリックしてターゲットを追加します。各宛先は個別に同期されますが、同じソースによって駆動されます。つまり、ソースは1回だけ読み込まれ、書き込みはすべての宛先へ並行して行われます。これは、別々のジョブを実行する場合と大きく異なります。別々に実行すると、実行の間にソースが変化した場合、宛先ごとにわずかに異なるスナップショットが記録される可能性があります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring 1:N sync with multiple destinations in RcloneView" class="img-large img-center" />

デジタルメディア企業における実用的な構成の例は次のようになります。ソースはマスター動画ファイルを格納するローカルの制作用NASフォルダ、宛先1はチームアクセス用のGoogle Drive、宛先2は長期アーカイブ用のBackblaze B2、宛先3は追加のオフサイトコピー用のWasabiです。この3つの宛先はすべて、1回のジョブ実行によって同じソースの状態と同期された状態を保ちます。

## マルチ宛先同期ジョブの設定

Homeタブから**Job Manager**を開き、**Add Job**をクリックして新しいSyncジョブを作成します。ステップ1では、ソース(設定済みのリモートまたはローカルフォルダ)を選択します。最初の宛先フォルダを選んだ後、**Add Destination**をクリックして、それぞれ異なるリモートとフォルダパスを指す追加のターゲットを挿入します。マルチ宛先の意図が伝わるような説明的な名前をジョブに付けましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a 1:N sync job to multiple cloud destinations in RcloneView" class="img-large img-center" />

ステップ2では、すべての宛先で共有される転送設定(同時転送数、マルチスレッド設定、チェックサム検証の有効化の有無)を構成します。異なるレート制限を持つクラウドプロバイダーへ同期する1:Nジョブでは、同時転送数を控えめに保ちましょう。多数の宛先に対して積極的に並列化しすぎると、制限の厳しいプロバイダーでスロットリングが発生する可能性があります。ステップ3では、すべての宛先に一律に適用されるフィルタルールを追加できるため、ターゲットごとに除外ロジックを重複させる必要はありません。

## ドライランでジョブを検証する

大規模な1:N同期を実行する前に、Job Managerの**Dry Run**オプションを使用しましょう。ドライランでは、実際の変更を一切加えることなく、各宛先へコピーされるファイルなど、計画されているすべての操作が表示されます。3つのプロバイダーへ同期するジョブの場合、プレビューには宛先ごとの操作が一覧表示されるため、パスが正しいこと、範囲が想定どおりであることを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing 1:N sync job history in RcloneView" class="img-large img-center" />

実行後、**Job History**タブには各ジョブ実行の開始時刻、所要時間、転送された合計バイト数、最終ステータス(Completed、Errored、Canceled)が記録されます。バックアップ検証に関するコンプライアンス要件があるチームにとって、このログは追加のツールを使わずにそのまま監査証跡として利用できます。

## 自動化されたマルチ宛先バックアップのスケジューリング

PLUSライセンスがあれば、ステップ4で1:Nジョブにcron形式のスケジュールを設定し、選択した間隔で自動的に実行できます。**Simulate schedule**ボタンで、保存前に今後の実行時刻をプレビューできます。有効化すると、RcloneViewのシステムトレイ統合によりジョブがバックグラウンドで実行され続け、ジョブ完了通知によってすべての宛先が最新データを受け取ったことが確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination backup in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote** > **New Remote**から2つ以上のクラウドリモートを追加します。
3. **Sync**ジョブを作成し、ステップ1の**Add Destination**を使って各ターゲットプロバイダーとフォルダを追加します。
4. **Dry Run**を実行して範囲を確認し、スケジュールを設定して保存すれば、自動化されたマルチクラウド冗長化が完成します。

1:N同期を使えば、RcloneViewの1つのジョブが、追加のスクリプトも追加の手順も必要としない、完全なマルチクラウドバックアップ戦略になります。

---

**関連ガイド:**

- [RcloneViewでクラウドバックアップを毎日自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneViewによるマルチクラウドバックアップ戦略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [ジョブのエクスポートとインポート — RcloneViewによるポータブルワークフロー](https://rcloneview.com/support/blog/job-export-import-portable-workflow-rcloneview)

<CloudSupportGrid />
