---
slug: cloud-storage-performing-arts-theaters-rcloneview
title: "舞台芸術劇場のためのクラウドストレージ — RcloneViewで台本、キュー、リハーサル映像を守る"
authors:
  - tayson
description: "劇団がRcloneViewを使って台本、照明・音響キューファイル、リハーサル映像を複数のクラウドとNAS間で同期し、スケジュールバックアップする方法を紹介します。"
keywords:
  - 劇場向けクラウドストレージ
  - 舞台制作ファイルのバックアップ
  - 舞台芸術のクラウドストレージ
  - 照明・音響キューファイルのバックアップ
  - リハーサル映像のクラウドバックアップ
  - 舞台デザインファイルの同期
  - 劇場アーカイブをNASからクラウドへ
  - 劇団のためのRcloneView
  - 芸術団体のためのマルチクラウドバックアップ
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 舞台芸術劇場のためのクラウドストレージ — RcloneViewで台本、キュー、リハーサル映像を守る

> 初日の成否はファイル次第です。正しい台本の改訂版、最終版の音響キュー、そしてデザイナーが承認した照明プロット。

地方の劇団が扱うデータ量は意外に多いものです。演出家はGoogle Driveで台本の改訂版を共有し、音響デザイナーはDropboxでキュースタックを納品し、リハーサル映像は調整室のSynology NASに溜まり、過去シーズンのアーカイブは古くなった外付けドライブに眠っています。RcloneViewはこれらすべてを一つのウィンドウにまとめ、制作チームが複数のアプリを行き来することなく、すべての公演フォルダーを同期、比較、バックアップできるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 制作で使うすべてのストレージを接続する

部署ごとに独自のツールを選びがちなので、最初のステップはすべてを見える状態にすることです。RcloneViewでGoogle DriveとDropboxをブラウザーログインで追加し、Synologyの自動検出で調整室のNASを接続し、長期アーカイブ用にBackblaze B2やWasabiなどのオブジェクトストレージバケットを追加します。外部デザイナーがGoogle Drive経由で送ってくる共有フォルダーは、Google Drive Shared with Meリモートとして追加できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive, Dropbox, and Backblaze B2 remotes for a theater production in RcloneView" class="img-large img-center" />

最大4つのエクスプローラーパネルを並べて開けば、舞台監督はDriveにある最新のプロンプトブックをNASの公演フォルダーへドラッグしたり、Dropboxにあるデザイナーのレンダリングをアーカイブバケットへ取り込んだりできます。異なるリモート間でドラッグするとファイルはコピーされるため、オリジナルはデザイナーが置いた場所にそのまま残ります。

## テクニカルウィーク前にキューファイルと台本の整合性を保つ

テクニカルウィークの典型的な失敗は、古いキューファイルで本番を進行してしまうことです。RcloneViewのFolder Compareは、音響デザイナーの納品フォルダーを調整室のコピーと並べて表示し、片側にしか存在しないファイルやサイズが異なるファイルをハイライトします。変更されたキューファイルをワンクリックでコピーすると、比較ビューで同一として表示されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing sound cue folders between Dropbox and the booth NAS in RcloneView" class="img-large img-center" />

公演フォルダー全体については、Sync ジョブを実行する前にDry Runでコピーまたは削除される内容を正確に確認できます。演出家が台本フォルダーをこっそり整理し直していた場合に特に重要です。

## リハーサル映像を2つの保存先へ同時にバックアップする

リハーサルやアーカイブ用の収録映像は容量が大きく、代わりがききません。RcloneViewの1:N同期は、1つのソースフォルダーを1つのジョブで複数の保存先にミラーリングするため、NASの映像フォルダーをB2バケットと2つ目のクラウドの両方へ送れます。マウント専用ツールとは異なり、RcloneViewは同期とフォルダー比較にも対応しており、FREEライセンスで利用できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing rehearsal video from a Synology NAS to two cloud destinations with RcloneView" class="img-large img-center" />

俳優の契約書や給与データのエクスポートには、さらに注意が必要です。クラウドフォルダーをCryptリモートで包めば、ファイル名と内容はオフィスを出る前に暗号化されます。

## 公演期間中の夜間バックアップを自動化する

PLUSライセンスがあれば、ジョブウィザードのcrontab形式のスケジューラーで、毎晩の公演後、たとえば午前1時にバックアップを実行でき、Simulate scheduleで次回の実行時刻をプレビューできます。Job Historyはすべての実行のステータス、サイズ、ファイル数を記録するため、公演期間中に疑問が生じたときに制作マネージャーへ明確な記録を提供します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly theater backup job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 各部署がすでに使っているリモートを追加します：Google Drive、Dropbox、NAS、アーカイブ用バケット。
3. Folder Compareで、調整室のキューファイルのコピーがデザイナーの最新納品物と一致していることを確認します。
4. リハーサル映像用の1:N Syncジョブを作成し、PLUSで毎晩実行するようスケジュールします。

ファイルが守られていれば、スタッフは公演に集中できます。

---

**関連ガイド：**

- [映像制作チームのためのクラウドストレージワークフロー — RcloneViewでデイリー、プロキシ、完成版を同期する](https://rcloneview.com/support/blog/cloud-storage-video-production-teams-rcloneview)
- [音楽制作のためのクラウドストレージ — RcloneViewでセッション、ステム、バックアップを管理する](https://rcloneview.com/support/blog/cloud-storage-music-production-rcloneview)
- [1:N同期 — RcloneViewで1つのソースを複数の保存先に同期する](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
