---
slug: manage-qiniu-cloud-storage-sync-rcloneview
title: "Qiniu Cloudオブジェクトストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - kai
description: "Qiniu Cloud Kodoオブジェクトストレージ RcloneViewに接続し、Windows、macOS、Linux上の1つのGUIから90以上のクラウドプロバイダー間でファイルを同期、バックアップ、転送しましょう。"
keywords:
  - Qiniu Cloud storage sync
  - Kodo object storage GUI
  - RcloneView Qiniu setup
  - Qiniu S3 compatible rclone
  - sync files to Qiniu Cloud
  - Qiniu backup client Windows
  - Qiniu cloud storage manager
  - transfer files Qiniu RcloneView
  - Qiniu Kodo S3 desktop client
  - manage Qiniu buckets GUI
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Qiniu Cloudオブジェクトストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Qiniu CloudのKodoオブジェクトストレージをRcloneViewのデュアルペインインターフェースに接続し、CLIを一切使わずにアップロード、バックアップ、クロスクラウド転送を行いましょう。

Qiniu Cloud（七牛云）は中国を代表するクラウドインフラプロバイダーの1つであり、そのKodoオブジェクトストレージサービスはメディア配信、アプリケーションアセット管理、大規模データアーカイブに広く利用されています。KodoはS3互換APIを実装しているため、RcloneViewはAmazon S3、Wasabi、Cloudflare R2と同じワークフローで接続でき、特別なプラグインは不要です。マウント専用ツールとは異なり、RcloneViewはFREEライセンスでもKodoおよび90以上の他のプロバイダーに対してフォルダの同期と比較を行えるため、混在クラウド環境を持つチームにとって実用的な単一ツールとなります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでQiniu KodoをS3リモートとして設定する

Qiniu Kodoを追加するには、**Remote**タブを開き、**New Remote**をクリックします。プロバイダーリストからS3プロトコルを選択し、S3プロバイダーとして**Qiniu**を選びます。Qiniu Cloud Consoleから3つの認証情報、**Access Key**、**Secret Key**、バケットのゾーンに対応する**リージョンエンドポイント**が必要です。入力後、RcloneViewはローカルのrclone設定ファイルに構成を保存し、リモートはすぐにエクスプローラーパネルに表示されます。

別途rcloneをインストールする必要はありません。RcloneViewにはすべてのAPI通信を処理する組み込みのrcloneバイナリが同梱されています。すでに外部でrcloneを管理している場合は、Settings > Connect Managerからそのインスタンスに接続することもできます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Qiniu Cloud S3 remote in RcloneView" class="img-large img-center" />

保存すると、Kodoバケットがパネルのタブバーに表示されます。任意のバケットをクリックすると、ファイルリストに名前、種類、更新日時、サイズの各列とともに内容が表示されます。

## Kodoバケットの閲覧と管理

RcloneViewのデュアルペインレイアウトでは、Qiniu Kodoをローカルフォルダ、Google Drive、企業のS3バケットなど他の任意のリモートと同じウィンドウ内で並べて操作できます。ローカルパネルからKodoパネルへファイルをドラッグするとアップロードでき、逆方向にドラッグするとダウンロードできます。2つのQiniuリモート(またはバケット)間でファイルを移動する場合は、ローカルディスクを経由せずに直接コピーされます。

一括作業を行う場合は、Shift+ClickまたはCtrl+Clickで複数のオブジェクトを選択し、1回の操作でコピー、移動、削除を実行します。サムネイル表示モードは、画像が多いKodoバケットを閲覧する際に便利です。破壊的な操作を行う前に、**Dry Run**ボタンで影響を受けるファイルを正確にプレビューできます。これは本番アセットをクリーンアップする際の重要なセーフガードです。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files between local storage and Qiniu Kodo buckets in RcloneView" class="img-large img-center" />

## Qiniu Cloudでのファイル同期とバックアップ

RcloneViewの4ステップの同期ウィザードを使うと、Kodoに対する繰り返し可能なジョブを構成できます。**Step 1**では、Qiniuをソースまたは宛先として選択し、別のリモートとペアリングします。例えば、ローカルのメディアライブラリをCDN配信用にKodoバケットへ同期する、といった構成が可能です。**Step 2**では、並列転送数を調整し、チェックサム検証を有効にすることで、アップロードされたすべてのオブジェクトがソースとビット単位で一致していることを確認できます。**Step 3**ではファイルタイプフィルター、更新日時の範囲、サイズ制限を利用でき、キャッシュファイルを除外したり、最近更新されたアセットのみに同期を限定したりできます。

PLUSライセンスでは、**Step 4**でcron形式のスケジューリングが利用可能になります。本番サーバーディレクトリからKodoへの夜間バックアップを構成すれば、RcloneViewがバックグラウンドで自動実行します。**1:N同期**機能を使うと、単一のソースを複数の宛先に同時に複製できます。これは、同じアセットセットをQiniu Kodoとセカンダリのs3アーカイブの両方に、1つのジョブで配布する際に便利です。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Qiniu Cloud Kodo in RcloneView" class="img-large img-center" />

## 転送とジョブ履歴の監視

RcloneView下部の**Transferring**タブには、実行中のKodoジョブのライブ進捗が表示されます。ファイル名、転送済みバイト数、現在の速度、全体の完了率などです。数百ギガバイトの動画アセットを新しいバケットに初回アップロードするような大規模な作業でも、このライブ転送監視ビューにより別途の監視ダッシュボードは不要になります。

**Job History**タブには、完了したすべての実行の開始時刻、所要時間、合計サイズ、転送速度、ファイル数、ステータスが記録されます。日付範囲やジョブタイプでフィルタリングすることで、数週間から数ヶ月にわたる同期アクティビティを監査できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Qiniu Cloud sync runs in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote**タブを開き、**New Remote**をクリックしてS3プロトコルを選択し、プロバイダーとして**Qiniu**を選びます。
3. Qiniu Cloud Consoleから**Access Key**、**Secret Key**、リージョンエンドポイントを入力します。
4. Kodoバケットを指す同期ジョブを作成し、実行してローカルファイルをバックアップするか、Qiniuと別のクラウド間でデータを転送します。

Qiniu Kodoを接続すれば、RcloneViewは他のすべてのプロバイダーで使っているのと同じインターフェースから、中国のクラウドオブジェクトストレージを完全にコントロールできます。

---

**Related Guides:**

- [Amazon S3ストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Cloudflare R2ストレージを管理 — RcloneViewでのクラウド同期](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Wasabi Cloudストレージを管理 — RcloneViewでの同期とバックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
