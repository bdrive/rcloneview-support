---
slug: manage-hetzner-object-storage-cloud-sync-rcloneview
title: "Hetznerオブジェクトストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - kai
description: "HetznerオブジェクトストレージをRcloneViewに接続して、自動同期・バックアップを行う方法を解説します。S3互換バケットをシンプルなGUIで管理でき、CLIは不要です。"
keywords:
  - Hetzner Object Storage
  - Hetzner cloud backup
  - RcloneView Hetzner
  - S3-compatible cloud storage
  - Hetzner sync files
  - cloud backup GUI
  - Hetzner rclone
  - object storage backup
  - European cloud storage
  - Hetzner bucket management
tags:
  - RcloneView
  - hetzner
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hetznerオブジェクトストレージを管理 — RcloneViewでファイルを同期・バックアップ

> HetznerオブジェクトストレージをRcloneViewに接続し、CLIコマンドを一切書かずにバックアップジョブを自動化しましょう。

Hetznerオブジェクトストレージは、信頼性の高いヨーロッパ拠点のデータストレージを求めるチームに競争力のある価格を提供するS3互換のクラウドストレージサービスです。プロジェクトファイルをアーカイブする場合でも、サーバーのスナップショットをバックアップする場合でも、別のクラウドからデータを複製する場合でも、RcloneViewはそのすべてを管理できるビジュアルインターフェースを提供します。Hetznerの設定方法は、他のS3互換プロバイダーと同様に、アクセスキー、シークレットキー、バケットのエンドポイントを使用して行い、その後は他のリモートと同じデュアルパネルのファイルエクスプローラーですべてを管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewにHetznerオブジェクトストレージを接続する

HetznerオブジェクトストレージはS3プロトコルを使用しているため、RcloneViewでの設定はAmazon S3やWasabiと同じ手順に従います。**Remoteタブ**を開き、**New Remote**をクリックします。プロバイダー一覧から**S3**を選択し、プロバイダーとして**Hetzner**を選びます。Hetzner Cloud Consoleから、**Access Key ID**、**Secret Access Key**、選択したリージョンの**エンドポイントURL**（例: Falkensteinリージョンの場合は`fsn1.your-objectstorage.com`）の3つの情報が必要です。

認証情報とリージョンのエンドポイントを入力したら、**Save**をクリックします。RcloneViewが接続を確立すると、Hetznerのバケットがすぐにファイルエクスプローラー内で閲覧可能なフォルダとして表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Hetzner Object Storage remote in RcloneView" class="img-large img-center" />

接続後は、ターミナルを一切使わずに、バケットの閲覧、ドラッグ&ドロップによるファイルのアップロード、オブジェクトのダウンロード、項目のリネーム、ファイルの削除、新規フォルダの作成が行えます。パンくずリストのパスバーにはバケット階層内の現在位置が表示され、フッターには選択したディレクトリの合計ファイル数とサイズが表示されます。

## ファイルのアップロードと整理

RcloneViewのデュアルパネルエクスプローラーを使えば、Hetznerオブジェクトストレージとローカルマシンや別のクラウドとの間でデータを移動するのが簡単になります。左パネルにローカルディスクを、右パネルにHetznerリモートを開き、ファイルをドラッグして移動します。Windowsエクスプローラーからのアップロードでは、ファイルをRcloneViewのパネルに直接ドラッグするだけで、一度の操作でHetznerバケットに配置されます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to Hetzner Object Storage in RcloneView" class="img-large img-center" />

大規模なデータセット（例えば、メディア制作会社が500GBのレンダリング出力をバックアップする場合など）では、同期ウィザードの**マルチスレッド転送**設定を使うことで、より多くのデータを並列で転送できます。デフォルトの同時4ストリームはほとんどの接続でうまく機能しますが、高帯域幅の回線で大きなファイルを扱う場合は、この数値を増やすことで転送時間を大幅に短縮できます。

## 同期・バックアップジョブの実行

継続的なバックアップワークフローには、RcloneViewの**Job Manager**を使うと、設定済みの同期ジョブを一覧として保持し、必要なときやスケジュールに従って実行できます。**Homeタブ**から開き、**Add Job**をクリックすると、4ステップの同期ウィザードが起動します。

1. **ステップ1:** ソース（ローカルフォルダまたは別のリモート）とデスティネーション（Hetznerバケットまたはその中のサブディレクトリ）を設定し、ジョブに名前を付けます
2. **ステップ2:** 同時実行設定を構成します — ファイル転送数、マルチスレッド数、整合性チェックのためのチェックサム検証を有効にするかどうかなど
3. **ステップ3:** `.tmp`ファイルや`/cache/`ディレクトリなど、Hetznerに含めたくないファイルタイプやパスを除外するフィルタリングルールを追加します
4. **ステップ4（PLUSライセンス）:** crontab形式のスケジュールを設定し、定義した間隔でバックアップを自動実行します

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Hetzner Object Storage in RcloneView" class="img-large img-center" />

新しいジョブを実行する前に、**Dry Run**オプションを使って、どのファイルがコピーまたは削除されるかを正確にプレビューしましょう。これは、初めて同期を設定するときや、フィルタルールを変更したときに、重要なものが誤って除外されていないかを確認するのに特に役立ちます。

## 転送履歴の確認

ジョブが実行されると、**Job History**ビューに開始時刻、所要時間、転送された合計サイズ、平均速度、ファイル数、最終ステータスといったすべての実行記録が保存されます。Hetznerオブジェクトストレージへの毎晩のバックアップを実行しているチームにとって、このログはどの実行が問題なく完了し、どの実行でエラーが発生したかを示すシンプルな監査証跡となり、トラブルシューティングとデータ保持ポリシーへの準拠を示す両方の用途に役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Hetzner Object Storage sync in RcloneView" class="img-large img-center" />

履歴フィルターを使うと、日付範囲（今日、昨日、先週、先月）で結果を絞り込めるため、ログ全体をスクロールすることなく、特定のバックアップ期間の記録をすばやく取得できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneView**をダウンロードします。
2. **Remoteタブ > New Remote**に進み、**S3**を選択し、プロバイダーとして**Hetzner**を選びます。
3. Hetzner Cloud ConsoleからHetznerのAccess Key ID、Secret Access Key、リージョンのエンドポイントを入力します。
4. **Job Manager**を開き、Hetznerバケットをデスティネーションとする同期ジョブを作成し、**Run Job**をクリックします。

Hetznerオブジェクトストレージを接続すれば、rcloneコマンドを一切必要とせず、洗練されたGUIから完全に管理できる、信頼性の高いヨーロッパ拠点のオブジェクトストレージを利用できます。

---

**関連ガイド:**

- [Hetzner Storage Boxを管理 — RcloneViewで同期・バックアップ](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Wasabiクラウドストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Cloudflare R2を管理 — RcloneViewでクラウド同期](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
