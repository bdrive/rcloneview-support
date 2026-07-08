---
slug: manage-oracle-cloud-storage-sync-rcloneview
title: "Oracle Cloud Object Storageを管理 — RcloneViewで同期とバックアップ"
authors:
  - tayson
description: "S3互換のアクセスキーを使ってOracle Cloud Object StorageをRcloneViewに接続し、バケットを閲覧して、自動同期・バックアップジョブを簡単に実行しましょう。"
keywords:
  - Oracle Cloud Object Storage
  - RcloneView
  - S3-compatible
  - cloud sync
  - cloud backup
  - OCI storage
  - object storage
  - rclone oracle
tags:
  - RcloneView
  - oracle-cloud
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Oracle Cloud Object Storageを管理 — RcloneViewで同期とバックアップ

> Oracle Cloud Object Storageは競争力のある価格設定と強力なエンタープライズSLAを提供します — RcloneViewを使えば、OCIバケットをシンプルなグラフィカルインターフェースで管理、同期、バックアップできます。

Oracle Cloud Infrastructure(OCI)Object Storageは、完全にS3互換のオブジェクトストアで、寛大なAlways Freeティアとエンタープライズグレードの耐久性保証を備えています。OCI上でワークロードを運用しているチームや、AWS S3の費用対効果の高い代替手段を探しているチームにとって、Oracle Cloud Object Storageは魅力的な選択肢です。RcloneViewはS3互換APIを通じてOCIに接続し、CLI不要で、バケット管理、ファイル転送、自動同期ジョブのための本格的なGUIを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでOracle Cloud Object Storageをセットアップする

RcloneViewをOracle Cloud Object Storageに接続するには、3つのものが必要です。**Customer Access Key**(OCI APIキーではありません)、**namespace**、そして**リージョナルエンドポイント**です。アクセスキーはOCIコンソールのユーザープロファイル > Customer Secret Keysで生成します。エンドポイントの形式は`https://<namespace>.compat.objectstorage.<region>.oraclecloud.com`です — 例えば、`https://axyz1234abcd.compat.objectstorage.us-ashburn-1.oraclecloud.com`のようになります。

RcloneViewで**New Remote**をクリックし、**S3 Compatible Storage**を選択し、プロバイダーのドロップダウンから**Oracle Cloud Infrastructure Object Storage**を選びます。Access Key ID、Secret Key、リージョナルエンドポイントを貼り付けます。regionフィールドをOCIのリージョンコードに合わせて設定します。**Save**をクリックすると、RcloneViewはすぐに接続し、バケットの一覧を表示します。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Oracle Cloud Object Storage remote in RcloneView" class="img-large img-center" />

## バケットの閲覧とファイル管理

接続が完了すると、Oracle Cloud Object StorageはRcloneViewのデュアルペインエクスプローラー内で他のリモートと同様に動作します。バケットのネームスペースとオブジェクトのプレフィックスを移動し、ドラッグ&ドロップでファイルをアップロードし、オブジェクトをローカルマシンにダウンロードできます。RcloneViewはライブ転送メトリクスを表示するため、大容量アップロードの進行状況を監視できます。

地理的冗長性のために複数のOCIリージョンを使用している場合は、各リージョナルエンドポイントを個別の名前付きリモートとして追加してください。そうすれば、エクスプローラーで並べて開き、クラウド間転送でリージョン間のオブジェクトを直接コピーできます — ローカルへのダウンロードは不要です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer between OCI buckets in RcloneView" class="img-large img-center" />

## バックアップ用の同期ジョブを作成する

RcloneViewの**Job Wizard**は、Oracle Cloud Object Storageとの間で同期ジョブを作成する手順を4つのステップで案内します。ソースの選択、宛先の選択、オプションの設定、実行前のレビューです。まず**dry run**モードを使用して、どのファイルが転送または削除されるかを正確に確認しましょう — これはOCIへの同期時に特に重要です。同期操作では、ソースに存在しなくなったファイルが宛先から削除される可能性があるためです。

**Job History**パネルは、すべてのジョブ実行をタイムスタンプと転送統計とともに記録し、コンプライアンス目的の監査証跡を提供します。PLUSライセンスユーザーは各ジョブに**スケジュール**を追加できるため、バックアップは手動操作なしで自動的に実行されます — 例えば毎晩午前2時に実行するといった具合です。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Oracle Cloud sync jobs in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. OCIコンソールで**Customer Secret Key**を生成し、namespaceとregionをメモします。
3. RcloneViewで**New Remote** > **S3 Compatible Storage** > **Oracle Cloud Infrastructure Object Storage**をクリックします。
4. Access Key ID、Secret Key、リージョナルエンドポイントURLを入力します。
5. バケットを閲覧し、**Job Wizard**を使って最初の同期またはバックアップジョブを作成します。

Oracle Cloud Object StorageのS3互換性により、RcloneViewで管理するあらゆるマルチクラウド戦略にそのまま組み込むことができます。

---

**関連ガイド:**

- [Amazon S3を管理 — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [RcloneViewでS3、Wasabi、R2を一元管理](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [IDrive e2を管理 — RcloneViewでクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
