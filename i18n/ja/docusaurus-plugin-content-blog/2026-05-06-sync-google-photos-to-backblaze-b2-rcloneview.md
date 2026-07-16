---
slug: sync-google-photos-to-backblaze-b2-rcloneview
title: "Google PhotosをBackblaze B2に同期 — RcloneViewによるクラウドバックアップ"
authors:
  - tayson
description: "RcloneViewを使ってGoogle PhotosのライブラリをBackblaze B2にバックアップします。Google Photosからオブジェクトストレージへの写真アーカイブを自動化 — 手動ダウンロードは不要です。"
keywords:
  - sync Google Photos to Backblaze B2
  - Google Photos Backblaze B2 backup
  - RcloneView Google Photos backup
  - Google Photos to B2 transfer
  - backup Google Photos object storage
  - Google Photos archive B2
  - RcloneView photo backup
  - Google Photos cloud backup tool
  - Backblaze B2 photo archive
  - automated Google Photos backup
tags:
  - google-photos
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google PhotosをBackblaze B2に同期 — RcloneViewによるクラウドバックアップ

> RcloneViewはGoogle PhotosからBackblaze B2への自動バックアップパイプラインを構築し、写真ライブラリを低コストのオブジェクトストレージに安全に保管します。手作業は一切不要です。

Google Photosは数十億人のユーザーが利用する写真ライブラリですが、かけがえのない思い出を単一のクラウドプロバイダーに依存させることには実際のリスクが伴います。Google Photosを主要なライブラリとして利用しているプロのフォトグラファー、家族のアーカイブ管理者、コンテンツクリエイターは、コスト効率の高いオブジェクトストレージプラットフォームであるBackblaze B2への自動セカンダリバックアップから大きな恩恵を受けられます。RcloneViewはこのパイプラインを自動的に処理し、定義したスケジュールに従ってGoogle Photosの新しい写真をB2に同期します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでGoogle PhotosとBackblaze B2を接続する

どちらのプロバイダーもRcloneViewで簡単に追加できます。Google Photosの場合は、Remoteタブ > New Remoteに移動し、Google Photosを選択して、ブラウザベースのOAuth認証を完了してください。Backblaze B2の場合は、Backblaze B2を選択し、B2コンソールからApplication Key IDとApplication Keyを入力します。

RcloneViewのGoogle Photos統合では、アルバムと日付ごとに整理されたライブラリが表示されます。年/月フォルダを参照し、ファイルエクスプローラーからすべてのメディアファイル（写真と動画）にアクセスできます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Google PhotosからB2への同期ジョブを設定する

RcloneViewで、Google Photosのリモートをソースとし、Backblaze B2のバケットをデスティネーションとする同期ジョブを作成します。クライアントの撮影データ500GBをバックアップするフォトスタジオであれば、特定のGoogle Photosアルバムをソースフォルダとして指定し、各アルバムを対応するB2のフォルダ構造に振り分けることができます。

同期ジョブの詳細設定で**チェックサム**検証を有効にすると、B2に転送されたすべての写真・動画ファイルがソースと一致していることを確認できます。これは、サイレント破損が致命的な影響をもたらす写真アーカイブにおいて非常に重要です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Photos to Backblaze B2 in RcloneView" class="img-large img-center" />

## 自動写真バックアップをスケジュールする（PLUS）

PLUSライセンスがあれば、Google PhotosからB2への同期を自動的に実行するようスケジュールできます。毎日午前3時の同期であれば、日中のパフォーマンスに影響を与えることなく前日の写真や動画を取り込めます。RcloneViewの増分同期は新規および変更されたファイルのみを転送するため、最初のフルバックアップが完了した後はジョブの所要時間を短く保てます。

**Max file age**フィルターを使うと、増分同期をさらに絞り込めます。`Max file age: 7d`を設定すると、過去1週間に追加された写真のみが転送され、頻度は高いが軽量な同期ジョブに最適です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Photos to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## 進行状況を監視し、バックアップの完全性を確認する

RcloneViewのTransferタブでは、ファイル名、転送速度、総バイト数などのバックアップ進行状況をリアルタイムで確認できます。スケジュールされた各実行の後、Job Historyには完全なサマリーが記録されます。数千ファイルに及ぶ写真ライブラリの場合、この履歴ログはバックアップの完全性を証明するものとなり、クライアントに画像が安全にアーカイブされていることを保証する必要があるフォトグラファーにとって不可欠です。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos to Backblaze B2 sync progress in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Google Photos（OAuth）とBackblaze B2（Application Key）をリモートとして追加します。
3. チェックサムを有効にして、Google PhotosからB2バケットへの同期ジョブを作成します。
4. PLUSで自動デイリー実行をスケジュールし、Job Historyで進行状況を追跡します。

RcloneViewがGoogle PhotosからBackblaze B2へのパイプラインを自動化することで、写真ライブラリは常に独立したセカンダリクラウドアーカイブに保護されます。

---

**関連ガイド:**

- [RcloneViewでGoogle Photosのストレージを管理 — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [RcloneViewでBackblaze B2のストレージを管理 — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneViewでGoogle PhotosをOneDriveに移行する](https://rcloneview.com/support/blog/migrate-google-photos-to-onedrive-rcloneview)

<CloudSupportGrid />
