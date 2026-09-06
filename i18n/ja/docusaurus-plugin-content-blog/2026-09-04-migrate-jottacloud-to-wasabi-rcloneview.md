---
slug: migrate-jottacloud-to-wasabi-rcloneview
title: "JottacloudからWasabiへの移行 — RcloneViewでファイルを転送する"
authors:
  - steve
description: "RcloneViewを使ってJottacloudからWasabiオブジェクトストレージへファイルを移行し、Dry Runプレビューとチェックサム検証で安全に転送します。"
keywords:
  - jottacloud wasabi 移行
  - jottacloud wasabi 転送
  - jottacloud wasabi マイグレーション
  - rcloneview jottacloud
  - rcloneview wasabi
  - jottacloud wasabi ファイル移動
  - クラウド間移行ツール
  - wasabi オブジェクトストレージ移行
  - jottacloud バックアップ wasabi
tags:
  - RcloneView
  - jottacloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# JottacloudからWasabiへの移行 — RcloneViewでファイルを転送する

> ローカルディスクに何もダウンロードすることなく、JottacloudのファイルをWasabiの低コストなオブジェクトストレージへ直接移動します。

Jottacloudのようなコンシューマー向けクラウドから、より安価な長期オブジェクトストレージへ移行するチームは、しばしば壁にぶつかります。ファイルはノルウェーでホストされる個人向けクラウドアカウントにあり、新しい移行先は全く異なるアクセスモデルを持つS3互換バケットだからです。RcloneViewは両方のサービスをリモートとして接続し、ローカルストレージを経由せずにクラウド間で直接転送できるようにすることで、1つのウィンドウでこのギャップを埋めます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewで両方のリモートを接続する

まずブラウザベースのOAuthログインフローでJottacloudをリモートとして追加し、次にAccess Key ID、Secret Access Key、正しいリージョンエンドポイントを使ってWasabiをS3互換リモートとして追加します。両方のリモートはExplorerパネルに別々のタブとして表示され、2パネルレイアウトを使って左にJottacloud、右にWasabiを開くことができます。

マウント専用ツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダー比較をサポートします。つまり、単純なドラッグ&ドロップコピーに限定されず、この移行のためのフル機能の同期エンジン、フィルタリング、Dry Runツールを利用できます。

<img src="/support/images/en/blog/new-remote.png" alt="クラウド間移行のためにRcloneViewで新しいリモートを追加する" class="img-large img-center" />

## Dry Runで移行をプレビューする

何かを移動する前に、Jottacloudをソース、対象のWasabiバケットを宛先とする同期ジョブを設定します。同期方向を一方向の「Modifying destination only」に設定し、Jottacloud側は何も変更されないようにします。まずDry Runモードでジョブを実行してください — RcloneViewは1バイトも転送せずに、どのファイルがコピーされるかを正確に表示します。これは、何年も完全には整理していないフォルダー構成を移行する際に不可欠です。

Jottacloudアカウントに新しいバケットには不要な大容量メディアライブラリやアーカイブがある場合は、実際の転送を開始する前に、フィルタリングステップでファイルタイプを除外するか、最大ファイルサイズを設定してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでのJottacloudからWasabiへのクラウド間転送" class="img-large img-center" />

## 転送を検証・モニタリングする

Dry Runの結果に問題がなければ、Advanced Settingsステップでチェックサム比較を有効にし、RcloneViewが更新日時ではなくハッシュとサイズでファイルを比較するようにします — これは、大きく異なる2つのストレージバックエンド間で移動する際に重要です。ジョブを開始し、下部のInfo ViewにあるTransferringタブに切り替えて、データがWasabiに到着する様子をリアルタイムの進捗、転送速度、ファイル数とともに確認します。

大規模なライブラリの場合は、ファイル転送数とマルチスレッド転送設定を調整して帯域幅をより効果的に活用し、Job Historyに実行全体を記録させて後で参照できるようにします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="JottacloudからWasabiへの移行後のジョブ履歴を確認する" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**。
2. OAuthログインでJottacloudをリモートとして追加し、次にAccess Key IDとSecret Access KeyでWasabiをS3互換リモートとして追加します。
3. JottacloudからWasabiバケットへの一方向同期ジョブを作成し、Dry Runを実行してコピーされる正確なファイルをプレビューします。
4. チェックサム検証を有効にし、実際の同期を実行してから、Job Historyで転送完了を確認します。

汎用クラウドから専用のオブジェクトストレージへの移行は、別々のアプリを使い分けたり、遅いローカル再アップロードを行ったりする必要はありません — RcloneViewは1つのインターフェースで全経路を処理します。

---

**関連ガイド:**

- [Jottacloud同期エラーの修正 — RcloneViewでの解決方法](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)
- [Wasabiストレージの管理 — RcloneViewでファイルを同期・バックアップする](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Backblaze B2からWasabiへの移行 — RcloneViewでファイルを転送する](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)

<CloudSupportGrid />
