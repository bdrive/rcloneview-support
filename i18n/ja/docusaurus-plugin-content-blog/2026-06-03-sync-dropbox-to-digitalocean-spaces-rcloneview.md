---
slug: sync-dropbox-to-digitalocean-spaces-rcloneview
title: "DropboxをDigitalOcean Spacesに同期 — RcloneViewによるクラウドバックアップ"
authors:
  - morgan
description: "RcloneViewを使ってDropboxのファイルをDigitalOcean Spacesに同期・バックアップする方法を解説します。CLI不要で自動化されたクラウド間転送を設定できます。"
keywords:
  - sync Dropbox to DigitalOcean Spaces
  - Dropbox to DigitalOcean backup
  - RcloneView Dropbox DigitalOcean
  - cloud-to-cloud sync
  - DigitalOcean Spaces backup
  - Dropbox backup object storage
  - cloud sync GUI
  - RcloneView S3 sync
  - automated cloud backup
  - DigitalOcean Spaces rclone
tags:
  - dropbox
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DropboxをDigitalOcean Spacesに同期 — RcloneViewによるクラウドバックアップ

> DropboxのファイルをDigitalOcean Spacesのオブジェクトストレージに自動でバックアップ — CLIコマンドは一切不要です。

Dropboxは、チームが日々ファイルを共有するための自然なコラボレーションツールです。DigitalOcean Spacesは、インフラと統合されたスケーラブルで低コストなストレージを求める開発者向けに構築された、S3互換のオブジェクトストレージを提供します。この2つをRcloneViewと組み合わせることで、自動化されたオフサイトバックアップのパイプラインを実現できます。ファイルはアクティブなコラボレーションのためにDropboxに置き、耐久性のあるバックアップコピーはSpacesに保存します。RcloneViewはクラウド間の転送全体を視覚的に処理します — ターミナルは不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## DropboxとDigitalOcean Spacesの接続

まず、両方のサービスをRcloneViewにリモートとして追加します。Dropboxの場合は、**Remoteタブ > New Remote** に移動し、**Dropbox** を選択して、OAuthブラウザフローをクリックして進みRcloneViewを認証します。APIキーをコピーする必要はありません — 開いたブラウザウィンドウが自動的に認証を処理し、完了するとRcloneViewに戻ります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

DigitalOcean Spacesの場合は、2つ目の新しいリモートを作成し、**S3** を選択して、プロバイダーとして **DigitalOcean** を選びます。DigitalOceanコントロールパネル（API > Spaces Keys配下）から取得した **アクセスキー** と **シークレットキー**、そしてSpacesリージョンの **リージョンエンドポイント**（例: ニューヨークの場合は `nyc3.digitaloceanspaces.com`）が必要です。両方のリモートが保存されると、RcloneViewのファイルエクスプローラーに閲覧可能なタブとして表示されます。

## 同期ジョブの設定

両方のリモートを接続したら、**Homeタブ** の **Sync** をクリックして4ステップの同期ウィザードを開きます。ステップ1では、Dropboxフォルダを **ソース** に、DigitalOcean Spacesのバケット（またはその中のサブディレクトリ）を **宛先** に設定します。ジョブにはわかりやすい名前を付けましょう — `dropbox-spaces-backup` などが適しています — そして **一方向同期** を選択し、宛先をソースの忠実なレプリカとして保ちます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job from Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

ステップ2では、同時ファイル転送数を接続容量に合わせて設定します。多数のDropboxフォルダに数千の小さなアセットファイルが散在するデザイン会社の場合、この値を増やすことで初回のフル同期が明らかに高速化します。ステップ3では、Spacesに不要なものを除外するフィルタルールを追加します — 例えば `.DS_Store` ファイル、Dropbox Paperドキュメント、一時的な下書き専用フォルダなどです。

初めてジョブを実行する前に、**Dry Run** をクリックして、どのファイルが転送または削除されるかを正確に確認しましょう。これにより、実際にデータが移動する前にフィルタルールが意図通りに機能しているかを確認できます。

## アクティブな転送の監視

**Run Job** をクリックすると、RcloneView下部の **Transferring** タブにライブ進捗が表示されます — ファイル数、転送速度、転送済みの総バイト数です。大規模な初回同期 — 例えばコンテンツスタジオがDropboxアカウント全体から8万件のファイルを移行する場合 — では、このビューでジョブの所要時間を見積もったり、初期のエラーを早期に発見したりするのが容易になります。実行中のジョブはいつでもキャンセルでき、リトライ設定（ステップ2で設定可能）により一時的なネットワークの不具合も自動的に処理されます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

## 自動バックアップのスケジュール設定（PLUSライセンス）

手間をかけないバックアップ運用のために、**PLUSライセンス** ユーザーは同期ウィザードのステップ4でcrontab形式のスケジュールを追加できます。ジョブを毎晩、数時間ごと、または特定の曜日に実行するよう設定できます。保存前に **Simulate Schedule** をクリックすると、次の数回の実行時刻をプレビューし、タイミングが正しいか確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Dropbox to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

スケジュール設定後は、RcloneViewがバックグラウンドでジョブを実行し、完了時にデスクトップ通知を送信します。**Job History** ビューには、すべての実行記録 — 開始時刻、所要時間、ファイル数、合計サイズ、最終ステータス — が記録されるため、Dropboxのバックアップが最後にいつ実行され、成功したかどうかを常に明確に把握できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. OAuthブラウザログインフローで **Dropbox** をリモートとして追加します。
3. アクセスキー、シークレットキー、リージョンエンドポイントを使って、**DigitalOcean Spaces** をS3リモートとして追加します。
4. 同期ウィザードを開き、Dropboxをソース、Spacesを宛先に設定して **Run Job** をクリックします。

この設定が完了すると、Dropboxのコンテンツは継続的にDigitalOcean Spacesにミラーリングされ、継続的な手作業を必要としない、耐久性のある自動保守型のオフサイトバックアップを実現できます。

---

**関連ガイド:**

- [Dropboxを管理 — RcloneViewによるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [DigitalOcean Spacesを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [DropboxをBackblaze B2にバックアップ — RcloneViewによる手頃なクラウドストレージ](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
