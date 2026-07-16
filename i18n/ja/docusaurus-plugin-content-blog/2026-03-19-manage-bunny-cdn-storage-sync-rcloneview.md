---
slug: manage-bunny-cdn-storage-sync-rcloneview
title: "Bunny CDN Storageを管理 — RcloneViewでコンテンツを同期・デプロイ"
authors:
  - tayson
description: "Bunny.netは高速で手頃なCDNストレージを提供します。RcloneViewを使ってBunny Storageゾーンを管理し、他のクラウドからコンテンツを同期し、CDNデプロイを自動化しましょう。"
keywords:
  - bunny cdn storage
  - bunny net rclone
  - bunny storage sync
  - bunny cdn file manager
  - bunny storage gui
  - cdn storage management
  - bunny net sync tool
  - bunny cdn deploy
  - bunny storage backup
  - cdn content sync
tags:
  - RcloneView
  - cloud-storage
  - sync
  - s3-compatible
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bunny CDN Storageを管理 — RcloneViewでコンテンツを同期・デプロイ

> Bunny.net storageはCDNコンテンツ向けに高速かつ低価格です。しかし、Webダッシュボードでストレージゾーンを管理するのは、一括操作には不向きです。RcloneViewはCDNアセット用のきちんとしたファイルマネージャーを提供します。

Bunny.netは、そのパフォーマンスと価格設定から人気のCDN選択肢となっています。そのEdge Storageは、CDNネットワークを通じてコンテンツを配信するS3互換のストレージゾーンを提供します。しかし、Bunnyのウェブインターフェースを通じたファイル管理は、一括アップロードでは遅く、同期機能を欠き、スケジューリング機能もありません。RcloneViewはFTPまたはHTTPエンドポイント経由でBunny Storageに接続し、完全なファイル管理を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Bunny StorageをRcloneViewに接続する

<img src="/support/images/en/blog/new-remote.png" alt="Add Bunny CDN remote" class="img-large img-center" />

Bunny.netダッシュボードの認証情報を使用して、Bunny StorageゾーンをFTPリモートとして追加します。

## 主要なワークフロー

### CDNへのコンテンツデプロイ

メインのクラウドストレージからBunny CDNへ、ウェブサイトのアセット、画像、メディアをアップロードします。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Deploy to Bunny CDN" class="img-large img-center" />

### 本番ストレージからの同期

CDNストレージゾーンを、S3やGoogle Drive上の本番アセットストレージと同期した状態に保ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync to Bunny Storage" class="img-large img-center" />

### 自動デプロイのスケジュール設定

スケジュールに基づいてCDNコンテンツを自動的に更新します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CDN deployment" class="img-large img-center" />

### CDNコンテンツの検証

ソースストレージとBunny CDNを比較し、デプロイされたコンテンツが最新であることを確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify CDN content" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Bunny Storage**をFTPリモートとして追加します。
3. メインストレージから**コンテンツを同期**します。
4. 自動更新のために**デプロイをスケジュール**します。

高速なCDNには、高速な管理ツールがふさわしいものです。

---

**関連ガイド:**

- [Vultr Object Storageを同期する](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
