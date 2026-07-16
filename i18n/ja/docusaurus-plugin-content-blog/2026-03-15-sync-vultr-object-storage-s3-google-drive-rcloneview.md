---
slug: sync-vultr-object-storage-s3-google-drive-rcloneview
title: "RcloneViewでVultr Object StorageをS3、Google Driveなどと同期する"
authors:
  - tayson
description: "Vultr Object Storageは手頃な価格のS3互換クラウドストレージを提供します。RcloneViewのビジュアルファイルマネージャーを使ってVultrバケットを管理、同期、バックアップする方法を学びましょう。"
keywords:
  - vultr object storage
  - vultr s3 compatible
  - vultr cloud sync
  - vultr backup tool
  - vultr object storage gui
  - vultr to google drive
  - vultr to aws s3
  - vultr storage manager
  - vultr rclone
  - vultr file transfer
tags:
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでVultr Object StorageをS3、Google Driveなどと同期する

> Vultr Object Storageは手頃な価格のS3互換クラウドストレージを提供します。しかしVultrのダッシュボードは開発者向けに設計されており、ファイル管理向けではありません。RcloneViewがビジュアルなレイヤーを追加します。

Vultrは開発者にやさしいクラウドインフラで知られており、そのObject StorageサービスはS3互換APIを備えた競争力のある価格を提供しています。しかし、Vultrのウェブダッシュボードでファイルを管理するには、ファイル操作ではなくAPI設定向けに設計されたインターフェースを操作する必要があります。RcloneViewはS3互換エンドポイント経由でVultr Object Storageに接続し、使い慣れたファイルマネージャーの操作感を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## VultrをRcloneViewに接続する

<img src="/support/images/en/blog/new-remote.png" alt="Add Vultr Object Storage" class="img-large img-center" />

Vultrのアクセスキー、シークレットキー、リージョンエンドポイントを使用して、VultrをS3互換リモートとして追加します。バケットはすぐにエクスプローラーに表示されます。

## 主なワークフロー

### ファイルをビジュアルに閲覧・管理する

開発者向けダッシュボードの代わりに、2ペインのエクスプローラーでVultrバケットを操作できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Vultr storage" class="img-large img-center" />

### Vultrを他のクラウドと同期する

チームでのアクセスのためにGoogle DriveにVultrデータのコピーを保持したり、Backblaze B2に冗長バックアップを維持したりできます。

### Vultrへ、またはVultrからの移行

コスト削減のためAWS S3からVultrへ移行しますか？バケット構造全体をプロバイダー間でドラッグ&ドロップできます。

### 自動バックアップをスケジュールする

メインストレージからVultrへ、またはVultrからバックアッププロバイダーへの夜間同期を設定できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Vultr sync" class="img-large img-center" />

### 監視と検証

転送の進捗をリアルタイムで追跡し、Folder Comparisonで完全性を検証できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Vultr transfer" class="img-large img-center" />

## バックアップ層としてのVultr

Vultr Object Storageは、セカンダリのバックアップ先として非常に適しています。S3互換APIを備えているため、AWS S3と同じツールやワークフローで利用できますが、ストレージ負荷の高いワークロードにはより低価格で対応できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Vultr Object Storage**をS3互換リモートとして追加します。
3. 2ペインのエクスプローラーで**バケットを閲覧**します。
4. 70以上の他のプロバイダーと**同期・スケジュール**します。

S3互換であることは、RcloneView互換であることを意味します。

---

**関連ガイド:**

- [Linode Object Storageを同期する](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)
- [DigitalOcean Spacesを同期する](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
