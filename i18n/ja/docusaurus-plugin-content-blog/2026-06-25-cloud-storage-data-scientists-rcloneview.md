---
slug: cloud-storage-data-scientists-rcloneview
title: "データサイエンティストのためのクラウドストレージ — RcloneViewでトレーニングデータとモデルを管理"
authors:
  - alex
description: "RcloneViewを使って、S3、Google Driveなど複数のクラウドにまたがる機械学習データセット、モデルチェックポイント、実験ファイルを管理します。データサイエンスチームのために作られたツールです。"
keywords:
  - データサイエンティストのためのクラウドストレージ
  - 機械学習データセット クラウドストレージ
  - MLモデルチェックポイント バックアップ クラウド
  - データサイエンス クラウドファイル管理
  - トレーニングデータ S3 バックアップ RcloneView
  - AI研究者のためのクラウドストレージ
  - MLデータセット バックアップ Google Drive S3
  - データサイエンス マルチクラウドツール
  - RcloneView データサイエンスワークフロー
tags:
  - RcloneView
  - cloud-storage
  - ai
  - backup
  - guide
  - industry
  - amazon-s3
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# データサイエンティストのためのクラウドストレージ — RcloneViewでトレーニングデータとモデルを管理

> データサイエンティストは日々ギガバイト単位のデータを扱います。RcloneViewは、S3、Google Driveなど複数のクラウドにまたがるトレーニングデータセット、モデルチェックポイント、実験結果を管理できるマルチクラウドGUIを提供します。

機械学習のワークフローは、膨大な量のファイルを生み出します。数百ギガバイトに及ぶ生データセット、前処理済みの特徴量ストア、学習済みモデルのチェックポイント、長期保存が必要な実験ログなどです。これらをローカルマシン、クラウドオブジェクトストレージ、チーム共有ドライブの間で移動させる作業は、転送が静かに失敗すると時間がかかり、リスクも伴います。RcloneViewは、Windows、macOS、Linux上のひとつのウィンドウから90以上のクラウドプロバイダーを横断できるビジュアルファイルマネージャーを、データサイエンスチームに提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## すべてのストレージをひとつのビューで接続

MLパイプラインは、しばしば複数のストレージシステムに同時にまたがります。トレーニングの実行とモデル成果物用のAmazon S3バケット、チームのデータセット用の共有Google Drive、生データ収集用のローカルNAS、そしてコスト効率の良い長期アーカイブ用のBackblaze B2バケットなどです。RcloneViewでは、それぞれを名前付きのリモートとして追加し、エクスプローラーパネルを並べて開くことができます。ブラウザのタブやCLIセッションを切り替えることなく、プロバイダー間でファイルをドラッグして転送を監視できます。

RcloneViewは、S3、Google Drive、Backblaze B2など90以上のクラウドプロバイダーをひとつのウィンドウから管理でき、FREEライセンスで同期と比較を無料で利用できます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging training data files between cloud storage providers in RcloneView" class="img-large img-center" />

200GBのアノテーション付き画像を処理するコンピュータビジョンチームは、アノテーション用の共有ドライブとS3のトレーニングバケットを同時に接続し、両方のパネルを見比べながら変更されたディレクトリだけを選んで新しいバッチのみをコピーできます。機関のWebDAVやGoogle Driveで共有されている公開データセットもリモートとして扱えるため、プライベートなS3バケットと同じセッション内で並べて利用できます。

## ライブ転送モニタリングで大容量モデルファイルを転送

15GBのチェックポイントファイルのアップロードや、マルチパートデータセットのS3への同期には、信頼できるフィードバックが不可欠です。RcloneViewの**Transferring タブ**では、実行中の各ジョブについて転送速度、完了バイト数、ファイル数がリアルタイムで表示されます。設定可能なマルチスレッド転送機能は、大きなファイルのアップロードを複数の並列ストリームに分割し、ファイルごとのオーバーヘッドが積み重なりやすいWasabiやCloudflare R2などS3互換プロバイダーへのアップロードを大幅に高速化できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring for large ML dataset uploads in RcloneView" class="img-large img-center" />

ネットワークの瞬断やVPNのタイムアウトで転送が中断された場合でも、同期ジョブを再実行すれば中断した箇所から再開できます。RcloneViewはすでに転送済みのファイルをスキップし、残りの部分から再開します。テラバイト規模のデータセットでは、これにより無駄な再試行に何時間も費やすことを避けられます。

## フォルダ比較でデータセットの整合性を検証

前処理パイプラインがローカルのデータセットを変更または拡張した後、トレーニングを開始する前にクラウドバックアップが現在の状態を反映していることを確認すれば、高価なGPU時間を節約できます。RcloneViewの**Folder Compare**ビューは、任意の2つのフォルダ(ローカルまたはクラウド)の差分を並べて表示し、左のみに存在するファイル、右のみに存在するファイル、サイズが異なるファイルを識別します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison view showing dataset differences between local disk and S3 storage" class="img-large img-center" />

データサイエンティストにとって、これはトレーニング前のサニティチェックとして機能します。GPU予算を投入する前に、クラウド上のトレーニング用ディレクトリが想定されるローカルのベースラインと一致しているかを検証できます。差分ありとマークされたファイルは、個別にコピーして不一致を解消できます。同期ジョブで**チェックサム検証**を有効にすれば、サイズ比較だけでは見逃してしまう破損も検出できます。

## スケジュール同期でデータセットのバックアップを自動化

継続的に稼働するデータ収集パイプラインは、手動トリガーを必要としない自動クラウドバックアップの恩恵を受けます。PLUSライセンスを使うと、RcloneViewのcrontab形式のスケジューラーが定義した間隔で同期ジョブを実行します。パイプライン完了後の毎晩、あるいはアクティブな収集期間中の毎時などです。**1:N同期**機能は、ひとつのソースディレクトリを複数の宛先に同時にミラーリングするため、ひとつの生データフォルダを単一のジョブ実行でS3とGoogle Driveの両方にバックアップできます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an automated dataset backup job in RcloneView" class="img-large img-center" />

同期ウィザードのステップ3にあるフィルタールールを使えば、一時ファイル、チェックポイントの中間ファイル、キャッシュディレクトリなど、クリーンなバックアップに含めるべきでないものを除外できます。カスタムスクリプトを書かずにストレージコストを抑えられます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remote タブ > New Remote から、S3バケット(Amazon S3、Wasabi、Cloudflare R2)をリモートとして追加します。
3. 同じセッション内に、Google Driveなど他のコラボレーション用ストレージを2つ目のリモートとして追加します。
4. ローカルのデータディレクトリからクラウドの宛先への同期ジョブを作成します。ステップ3のフィルタールールを使って、一時ファイルやパイプラインのキャッシュディレクトリを除外しましょう。

チームのデータセット、チェックポイント、実験結果は、すべてのメンバーにコマンドライン操作の専門知識を求めることなく、閲覧可能かつ確実にバックアップされた状態になります。

---

**関連ガイド:**

- [RcloneViewによるAIトレーニングデータセットパイプライン](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)
- [RcloneViewでAmazon S3のクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [RcloneViewによるDevOpsおよびソフトウェアチーム向けクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />
