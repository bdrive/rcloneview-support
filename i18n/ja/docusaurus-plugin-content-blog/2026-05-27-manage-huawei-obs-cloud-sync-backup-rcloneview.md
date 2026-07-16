---
slug: manage-huawei-obs-cloud-sync-backup-rcloneview
title: "Huawei OBS ストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - alex
description: "RcloneViewでHuawei OBSバケットを管理 — GUIでファイルを同期、バックアップ、転送。S3互換のセットアップ、スケジュールジョブ、クラウド間転送に対応。"
keywords:
  - Huawei OBS
  - Huawei Object Storage Service
  - RcloneView Huawei OBS
  - Huawei OBS 同期
  - Huawei OBSへのファイルバックアップ
  - クラウドストレージ管理GUI
  - S3互換ストレージ RcloneView
  - Huaweiクラウドファイルマネージャー
  - OBSバケット同期 rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Huawei OBS ストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Huawei OBSバケットをビジュアルファイルマネージャーに接続し、コマンドラインを使わずにクラウド間でファイルを同期・バックアップします。

Huawei Object Storage Service (OBS) は、アジア太平洋地域のデプロイメントやグローバル企業環境で利用されている、スケーラブルでエンタープライズグレードのオブジェクトストレージプラットフォームです。数テラバイト規模のデータレイクを管理する場合でも、地域オフィスのプロジェクトアーカイブをバックアップする場合でも、OBSは大規模組織が求める信頼性を提供します。RcloneViewはS3互換APIを介してHuawei OBSに接続し、バケットの閲覧、ファイル転送、自動バックアップジョブの実行を完全なGUI体験として提供します。これにより、チームはrcloneのフラグを覚えるのではなく、実際の作業に時間を使えるようになります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewをHuawei OBSに接続する

RcloneViewでHuawei OBSをリモートとして追加する手順は、Alibaba Cloud OSSやIDrive E2などのプロバイダーで使用される、同じS3互換セットアップに従います。**Remote**タブから**New Remote**をクリックし、S3プロバイダータイプを選択して、プロバイダーリストからHuawei OBSを選びます。Access Key ID、Secret Access Key、およびOBSバケットの地域エンドポイントURLという3つの認証情報を入力する必要があります。Huaweiのエンドポイントは`obs.{region}.myhuaweicloud.com`というパターンに従います。例えば、中国北部4リージョンの場合は`obs.cn-north-4.myhuaweicloud.com`となります。

設定が完了すると、RcloneViewのファイルエクスプローラーパネルにOBSバケットがトップレベルフォルダーとして表示されます。パンくずリストのパスバーを使ってネストされたオブジェクトプレフィックスを移動し、リスト表示とサムネイル表示を切り替え、ファイル名、サイズ、更新日時などのメタデータを一目で確認できます。左側のフォルダーツリーにより、フラットなファイルリストをスクロールすることなく、複数バケット環境内で特定のデータセットを簡単に見つけることができます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Huawei OBS as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneViewは最大4つの同時エクスプローラーパネルもサポートしているため、1つのパネルをOBSバケットに、もう1つのパネルをローカルドライブや別のクラウドプロバイダーに開くことができ、ウィンドウを切り替えることなく並べて比較できます。

## Huawei OBSへのファイルの同期とバックアップ

RcloneViewの4ステップ同期ウィザードを使えば、Huawei OBSを対象とした定期的なバックアップジョブを簡単に作成できます。ソース(ローカルフォルダー、NASパス、または別のクラウドリモート)とデスティネーション(OBSバケットのプレフィックス)を設定し、ジョブに名前を付けてから、詳細オプションを構成します。同時転送数を増やすことで高帯域接続でのスループットが向上し、チェックサム検証を有効にすることで、すべてのファイルが確実に無傷で到着することを保証します。これは、サイレント破損が許されない2TBのエンジニアリング図面や財務記録のデータセットを移行する際に特に重要です。

フィルタリングにより、OBSバケットを無駄なく、コスト効率よく維持できます。アーカイブする必要のない大きなファイルタイプ(`.iso`、`.vmdk`)を除外したり、最大経過時間フィルターを使用して一定期間内に変更されたファイルのみに同期を限定したり、深くネストされた一時ディレクトリのコピーを避けるためにフォルダーの深さに上限を設定したりできます。コンプライアンス要件のある組織にとって、これらのフィルターにより、実行のたびに手動で選択することなく、適切なファイルのみがOBSに到達することを保証できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Huawei OBS in RcloneView" class="img-large img-center" />

初回の本番実行の前にドライラン(試行)シミュレーションを実行してください。RcloneViewは、実際のデータに一切触れることなく、追加または削除されるファイルを正確に表示します。これは本番バケットを同期する際の重要な安全策です。

## 自動バックアップのスケジューリングとジョブの監視

RcloneView PLUSライセンスがあれば、crontab形式のスケジューリングを使ってHuawei OBSのバックアップを自動運転できます。平日の毎晩02:00の差分バックアップ、日曜日の週次フルバケット同期など、データのライフサイクルに合わせた任意の頻度を設定できます。ウィザード内のスケジュールシミュレーターは次の5回の実行時刻をプレビューするため、コミットする前にパターンを確認できます。

ジョブ履歴は、実行ごとに開始時刻、所要時間、転送速度、ファイル数、転送された総サイズ、最終ステータス(Completed、Errored、Canceled)といった完全な監査証跡を提供します。複数のOBSリージョンにわたるコンプライアンスアーカイブを管理するチームにとって、このログは内部監査の文書としても機能します。PLUSライセンス保有者は、ジョブの完了時や失敗時に適切な担当者へ即座に通知が届くよう、ジョブ完了通知を設定することもできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Huawei OBS sync jobs in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneView**をダウンロードします。
2. **Remote**タブを開く → **New Remote** → **S3**を選択 → **Huawei OBS**を選びます。
3. Access Key ID、Secret Access Key、および地域OBSエンドポイントURLを入力します。
4. ファイルエクスプローラーでバケットを閲覧し、**Job Manager**から同期またはバックアップジョブを作成します。

接続が完了すると、Huawei OBSはRcloneView内で他のドライブと同じように動作し、CLIのオーバーヘッドなしにエンタープライズオブジェクトストレージへの信頼性の高いGUI主導のアクセス経路をチームに提供します。

---

**関連ガイド:**

- [Alibaba Cloud OSSを管理 — RcloneViewでの同期とバックアップ](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)
- [Tencent COS オブジェクトストレージをRcloneViewで管理](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [S3、Wasabi、R2ストレージをRcloneViewで一元管理](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
