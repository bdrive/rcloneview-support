---
slug: manage-cubbit-ds3-cloud-sync-backup-rcloneview
title: "Cubbit DS3ストレージの管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - alex
description: "Cubbit DS3をRcloneViewに接続し、シンプルなデスクトップGUIから地理分散型ヨーロッパクラウドストレージを同期、バックアップ、管理する方法を解説します。"
keywords:
  - Cubbit DS3 同期
  - Cubbit DS3 バックアップ
  - Cubbit S3互換ストレージ
  - RcloneView Cubbit
  - ヨーロッパクラウドストレージバックアップ
  - 地理分散型オブジェクトストレージ
  - Cubbit DS3セットアップガイド
  - プライベートクラウドバックアップ RcloneView
  - S3互換ストレージ管理
  - Cubbit DS3ファイルマネージャー
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cubbit DS3ストレージの管理 — RcloneViewでファイルを同期・バックアップ

> RcloneViewはS3プロトコル経由でCubbit DS3に接続し、CLIコマンドを一切書くことなく、地理分散型ヨーロッパクラウドストレージの閲覧、同期、バックアップを可能にします。

Cubbit DS3は、ヨーロッパ各地のノードにまたがって構築された、地理分散型でS3互換のオブジェクトストレージサービスです。中央集権型プロバイダーとは異なり、Cubbitはデータを分散セルのネットワーク全体にシャーディングおよび暗号化して保存するため、GDPR要件の対象となるチームや、プライバシー・バイ・デザインなストレージを求めるユーザーにとって魅力的な選択肢となります。Cubbit DS3は完全にS3互換であるため、RcloneViewは他のS3プロバイダーと同じ認証情報フローを使用して接続します — 特別なプラグインや設定は一切不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cubbit DS3をRcloneViewに接続する

RcloneViewを開き、**リモートタブ > 新規リモート**に移動します。リモートタイプとして**Amazon S3**を選択し、S3プロバイダーのリストから**Cubbit DS3**を選びます。CubbitコンソールダッシュボードからコピーしたCubbitのアクセスキーID、シークレットアクセスキー、およびS3エンドポイントURLを入力します。リージョンは空欄のままにするか、Cubbitのドキュメントで推奨されている値を使用してください。**保存**をクリックすると、Cubbit DS3リモートがファイルエクスプローラーに新しいタブとして表示されます。

接続はすぐに有効になります。左側のフォルダツリーでバケットを展開したり、詳細リスト表示でオブジェクトを閲覧したり、サムネイル表示に切り替えてバケット内に保存された画像アセットをプレビューしたりできます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cubbit DS3 as a new S3-compatible remote in RcloneView" class="img-large img-center" />

## Cubbit DS3でファイルをアップロード・管理する

RcloneViewのデュアルペインレイアウトにより、Cubbit DS3へのファイルアップロードが簡単になります。片方のパネルにローカルフォルダを開き、もう片方にCubbit DS3バケットを開きます。フォルダ — 例えば建築設計事務所のCAD図面のコレクション — を左パネルから右のCubbitパネルにドラッグします。RcloneViewは並行マルチスレッドアップロードを自動的に処理し、下部の転送モニターにライブの転送速度、ファイル数、進捗状況が表示されます。

Cubbitパネル内の任意のオブジェクトを右クリックすると、完全なコンテキストメニューが表示されます: コピー、切り取り、削除、名前変更、サイズ取得、公開リンク取得。**サイズ取得**オプションは、同期戦略を決定する前に大規模なバケットフォルダ全体のストレージ消費量を計算するのに特に便利です。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Cubbit DS3 bucket in RcloneView" class="img-large img-center" />

## Cubbit DS3へのスケジュール同期ジョブを設定する

自動バックアップには、ホームタブの**同期**ボタンを使用して4ステップのジョブウィザードを起動します。ソースとしてローカルフォルダまたは別のクラウドリモートを選択し、宛先としてCubbit DS3バケットを選択します。ステップ2では、Cubbitの分散帯域幅を最大限に活用するために、同時ファイル転送数を増やします。ステップ3では、ファイルタイプフィルターを適用します — 例えば、バックアップをクリーンに保つために`.tmp`ファイルや`.log`ファイルを除外します。

PLUSライセンスユーザーはステップ4を利用できます: cron形式のスケジューリングです。毎晩午前3時に実行するジョブを設定し、最近更新されたファイルのみを同期する最大ファイル経過時間フィルターを追加し、各実行を確認するメール通知を設定します。これは、準拠したヨーロッパのストレージバックエンドにデータセットアーカイブの夜間自動スナップショットを必要とする研究チームに最適です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated sync jobs to Cubbit DS3 in RcloneView" class="img-large img-center" />

## ジョブ履歴で転送を追跡する

同期実行後、RcloneViewの**ジョブ履歴**ビューは実行時刻、所要時間、転送された総バイト数、転送速度、最終ステータスを記録します。Cubbit DS3の場合、この監査ログは重要なバックアップが正常に完了したことを確認する必要がある場合や、失敗した実行を調査してエラーの原因となったファイルを特定する場合に役立ちます。

破壊的な操作を行う前には**ドライラン**機能を使用してください — 同期をシミュレートし、コピーまたは削除されるすべてのファイルを一覧表示するため、バケットに触れることなく範囲を確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Cubbit DS3 sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **リモートタブ > 新規リモート**に移動し、Amazon S3を選択、プロバイダーとしてCubbit DS3を選びます。
3. Cubbitコンソールからアクセスキー、シークレットキー、S3エンドポイントを入力します。
4. ファイルエクスプローラーでバケットを閲覧し、ファイルをドラッグしてすぐにアップロードを開始します。

Cubbit DS3をRcloneViewに接続すれば、地理分散型ヨーロッパストレージのための完全なビジュアルワークフローが手に入ります — ターミナルは一切不要です。

---

**関連ガイド:**

- [RcloneViewでCloudflare R2クラウドストレージを管理する](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [DigitalOcean Spacesの管理 — RcloneViewで同期・バックアップ](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [RcloneViewでS3、Wasabi、R2ストレージを一元管理する](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
