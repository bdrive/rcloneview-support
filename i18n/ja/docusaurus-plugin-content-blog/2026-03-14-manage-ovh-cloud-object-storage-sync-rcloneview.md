---
slug: manage-ovh-cloud-object-storage-sync-rcloneview
title: "OVH Cloud Object Storageを管理 — RcloneViewでS3、Google Driveなどと同期"
authors:
  - tayson
description: "OVH Cloud Object Storageは手頃な価格でEUを拠点としていますが、Horizonダッシュボードからの管理は面倒です。RcloneViewを使ってOVHストレージをビジュアルなファイルマネージャーで閲覧、同期、バックアップしましょう。"
keywords:
  - ovh cloud object storage
  - ovh cloud rclone
  - ovh cloud sync google drive
  - ovh object storage gui
  - ovh cloud file manager
  - ovh openstack swift gui
  - ovh cloud backup
  - ovh cloud transfer
  - ovh cloud sync s3
  - ovh cloud storage management
tags:
  - RcloneView
  - cloud-storage
  - openstack
  - swift
  - s3-compatible
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OVH Cloud Object Storageを管理 — RcloneViewでS3、Google Driveなどと同期

> OVH Cloudは、OpenStack Swiftをベースにした手頃な価格でGDPR準拠のオブジェクトストレージを提供しています。しかし、Horizonダッシュボードを通じたコンテナ管理は、ファイル管理というよりインフラ作業のように感じられます。RcloneViewがそれを変えます。

OVHcloudのObject Storageは、GDPR準拠で手頃な価格のクラウドストレージを必要とするヨーロッパの企業にとって有力な選択肢です。OpenStack Swiftをベースにしており、信頼性が高く価格も適正です。課題は日々の管理です。Horizonダッシュボードはインフラ管理者向けに設計されており、ファイルの閲覧、他のクラウドとの同期、自動バックアップの実行には向いていません。RcloneViewは、OVH Cloudに欠けているビジュアルなファイル管理レイヤーを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜOVH Cloud + RcloneViewなのか？

OVH Cloud Object StorageはS3互換およびSwift互換のアクセスを提供します。RcloneViewは両方のプロトコルをサポートしているため、使い慣れた2ペインのファイルエクスプローラーでコンテナを接続・管理できます。

### 得られるもの

- すべてのOVHコンテナとオブジェクトの**ビジュアル閲覧**
- OVHと70以上のプロバイダー間の**クロスクラウド同期**
- OVHストレージからの、またはOVHストレージへの**スケジュールバックアップ**
- 転送検証のための**フォルダ比較**

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Manage OVH Cloud in two panes" class="img-large img-center" />

## OVH CloudをRcloneViewに接続する

<img src="/support/images/en/blog/new-remote.png" alt="Add OVH Cloud remote" class="img-large img-center" />

S3互換API(新規プロジェクトに推奨)またはネイティブのSwift APIのいずれかで接続できます。どちらの方法でも、OVHコンテナはすぐにファイルエクスプローラーに表示されます。

## よくあるワークフロー

### OVHをGoogle Driveと同期する

チームでのコラボレーションのために、OVHファイルの作業用コピーをGoogle Driveでアクセスできるようにします。変更はOVHに同期し直し、長期的でコスト効率の良いストレージとして利用できます。

### OVHを別のプロバイダーにバックアップする

Backblaze B2やAWS S3にバックアップを維持することで、ベンダーロックインを防ぎます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OVH backup" class="img-large img-center" />

### OVHへ、またはOVHから移行する

コスト削減のためにAWS S3からOVHへ移行しますか？それともOVHからAzureへ統合しますか？2ペインのエクスプローラーを使えば、移行はドラッグ&ドロップの操作になります。

### 転送を監視する

リアルタイムの転送モニタリングで進捗を追跡できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor OVH transfers" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **OVH Cloudを追加**します(S3互換またはSwiftリモートとして)。
3. 2ペインのエクスプローラーで**コンテナを閲覧**します。
4. クロスクラウドワークフローのために**同期ジョブを設定**します。

手頃な価格のEUストレージには、優れたファイルマネージャーがふさわしいです。

---

**関連ガイド:**

- [OpenStack Swiftストレージを管理する](https://rcloneview.com/support/blog/manage-openstack-swift-object-storage-gui-rcloneview)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
