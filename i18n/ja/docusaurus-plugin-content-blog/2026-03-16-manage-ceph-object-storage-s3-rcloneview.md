---
slug: manage-ceph-object-storage-s3-rcloneview
title: "RcloneViewでCephオブジェクトストレージを管理 — Cephクラスタ向けS3互換GUI"
authors:
  - tayson
description: "CephのRADOS GatewayはS3互換ストレージを提供しますが、視覚的に管理するのは面倒です。RcloneViewを使えば、デスクトップのファイルマネージャでCephクラスタを閲覧・同期・バックアップできます。"
keywords:
  - ceph object storage gui
  - ceph s3 file manager
  - ceph rados gateway gui
  - ceph storage management
  - ceph sync tool
  - ceph rclone
  - ceph backup cloud
  - ceph rgw gui
  - ceph s3 compatible
  - ceph visual file manager
tags:
  - s3-compatible
  - self-hosted
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでCephオブジェクトストレージを管理 — Cephクラスタ向けS3互換GUI

> Cephは世界最大級のストレージクラスタの多くを支えています。しかし、バケットの閲覧、外部クラウドへの同期、データの検証は通常CLIツールやスクリプトが必要でした。RcloneViewはCeph管理者がずっと必要としていた視覚的なレイヤーを提供します。

Cephは、企業、研究機関、クラウドプロバイダーにとって定番の分散ストレージシステムです。そのRADOS Gateway（RGW）はS3互換APIを公開しているため、RcloneViewはCephクラスタに直接接続し、バケットの閲覧、外部クラウドへのデータ転送、バックアップのスケジューリング、整合性の検証といった、フル機能の視覚的ファイル管理体験を提供できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## CephをRcloneViewに接続する

<img src="/support/images/en/blog/new-remote.png" alt="Add Ceph S3 remote" class="img-large img-center" />

RGWエンドポイント、アクセスキー、シークレットキーを使って、CephクラスタをS3互換リモートとして追加します。RcloneViewはこれを他のS3プロバイダーと同様に扱います。

## 主なユースケース

### バケットを視覚的に閲覧・管理する

`s3cmd`や`aws cli`を使う代わりに、2ペインのエクスプローラーでCephのバケットとオブジェクトをナビゲートできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Ceph buckets" class="img-large img-center" />

### 外部クラウドへレプリケートする

重要なCephデータのオフサイトコピーを、AWS S3、Google Cloud Storage、Backblaze B2に保持できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Replicate Ceph to cloud" class="img-large img-center" />

### サイト間バックアップをスケジュールする

Cephクラスタから外部クラウドプロバイダーへの夜間レプリケーションを自動化します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Ceph backup" class="img-large img-center" />

### データをCephとの間で移行する

AWS S3から自社のCephクラスタへ移行しますか？それともCephから商用プロバイダーへ移行しますか？2ペインのエクスプローラーがそれを視覚的な操作にしてくれます。

### データ整合性を検証する

フォルダ比較機能を使って、レプリケートされたデータがソースと一致することを確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Ceph replication" class="img-large img-center" />

## パフォーマンスに関する考慮事項

Cephクラスタは高いスループットに対応できます。大規模な移行やバックアップの際は、並列転送数（8〜16）とマルチスレッドストリームを増やして帯域幅を最大限に活用しましょう。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Ceph RGW**をS3互換リモートとして**追加**します。
3. ファイルエクスプローラーで**バケットを閲覧**します。
4. 外部クラウドへの**レプリケーションジョブを設定**します。

エンタープライズストレージには、エンタープライズレベルの管理ツールがふさわしいのです。

---

**関連ガイド:**

- [MinIOストレージを管理する](https://rcloneview.com/support/blog/sync-minio-to-aws-s3-google-drive-gui-rcloneview)
- [OpenStack Swiftを管理する](https://rcloneview.com/support/blog/manage-openstack-swift-object-storage-gui-rcloneview)
- [マルチスレッド転送](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)

<CloudSupportGrid />
