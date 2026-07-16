---
slug: manage-oracle-cloud-object-storage-sync-rcloneview
title: "Oracle Cloud Object Storageを管理する — RcloneViewでS3、Google Drive、NASと同期する"
authors:
  - tayson
description: "Oracle Cloud Infrastructureは競争力のあるオブジェクトストレージ価格を提供しています。RcloneViewを使って他のクラウドと合わせてOracle Cloud Object Storageを管理・同期・バックアップする方法を学びましょう。"
keywords:
  - oracle cloud object storage
  - oracle cloud storage sync
  - oracle oci rclone
  - oracle cloud s3 compatible
  - oracle cloud backup tool
  - oracle object storage gui
  - oracle cloud file manager
  - oracle oci storage transfer
  - sync oracle cloud google drive
  - oracle cloud storage migration
tags:
  - RcloneView
  - oracle-cloud
  - s3-compatible
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Oracle Cloud Object Storageを管理する — RcloneViewでS3、Google Drive、NASと同期する

> Oracle Cloud Infrastructure(OCI)は10GBの無料オブジェクトストレージと、それ以降も競争力のある価格を提供しています。しかし、OCIストレージを他のクラウドと合わせて管理するには適切なツールが必要です。

Oracle Cloud Object StorageはS3互換で、耐久性が高く、コスト効率に優れています——特にOracleの寛大な無料枠とAlways Freeリソースを考慮すると顕著です。多くの組織がAWS、Google Cloud、Azureと合わせてOCIを利用しています。RcloneViewはそれらすべてを接続し、70以上の他のプロバイダーと合わせてOracle Cloud Object Storageを管理できるビジュアルインターフェースを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜOracle Cloud Object Storageなのか？

### 競争力のある価格

| 機能 | Oracle Cloud | AWS S3 | Google Cloud |
|---------|-------------|--------|-------------|
| ストレージ(TB/月) | $26 | $23 | $20 |
| エグレス(最初の10TB) | 無料 | $90 | $120 |
| 無料枠 | 10GB + Always Free | 5GB(12か月) | 5GB |

Oracleの最大の強み: 最初の10TB/月の**エグレスが無料**であることです。頻繁にデータをダウンロードするなら、これだけで数百ドルを節約できます。

### S3互換性

OCI Object StorageはS3互換APIを提供しており、rcloneやRcloneViewを含むS3対応のツールであればどれでもOracle Cloudで動作します。

### エンタープライズ機能

- **ストレージ階層**: Standard、Infrequent Access、Archive。
- **オブジェクトバージョニング**: 誤削除からの保護。
- **ライフサイクルポリシー**: 階層間でデータを自動的に移動。
- **レプリケーション**: 災害復旧のためのクロスリージョンレプリケーション。

## RcloneViewでOracle Cloudをセットアップする

### 認証情報を取得する

1. OCI Consoleにログインします。
2. Identity → Users → Your user → Customer Secret Keysに移動します。
3. Access KeyとSecret Keyを生成します。
4. 自分のネームスペースとリージョン(例: `us-phoenix-1`)を確認します。

### Oracle Cloudをリモートとして追加する

1. RcloneViewを開き、**Add Remote**をクリックします。
2. タイプとして**S3 Compatible**を選択します。
3. プロバイダーとして**Oracle**(またはOther S3)を選択します。
4. Access Key、Secret Key、リージョン、エンドポイントを入力します。

<img src="/support/images/en/blog/new-remote.png" alt="Add Oracle Cloud Object Storage remote" class="img-large img-center" />

エンドポイントの形式は次の通りです: `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com`

## 実践的なワークフロー

### 1) Oracle Cloudをビジュアルに閲覧する

ファイル管理のためにOCI Consoleを使う必要はもうありません。RcloneViewの2ペインエクスプローラーでバケットとオブジェクトを閲覧できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Oracle Cloud in RcloneView" class="img-large img-center" />

### 2) AWS S3からOracle Cloudへ移行する

Oracleの無料エグレスを活用してS3からデータを移動しましょう。

1. S3とOracle Cloudの両方をリモートとして追加します。
2. S3 → Oracle CloudへのCopyジョブを作成します。
3. 転送を監視し、Folder Comparisonで検証します。

### 3) Oracle CloudをGoogle Driveと同期する

Google Driveにコラボレーション向けのコピーを保持しつつ、Oracle Cloudにアーカイブします。

- Google Drive → Oracle Cloudへの毎日の同期をスケジュールします。
- Oracle Cloudは耐久性が高くコスト効率の良いアーカイブとして機能します。

### 4) マルチクラウドバックアップ戦略

Oracle Cloudをマルチクラウドバックアップの一部として利用します。

```
Primary (Google Drive) → Oracle Cloud (archive with free egress)
Primary (Google Drive) → Backblaze B2 (second archive)
```

### 5) NASからOracle Cloudへのバックアップ

SynologyやQNAPのNASをOracle Cloudにバックアップします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS to Oracle Cloud backup" class="img-large img-center" />

## 転送を検証する

転送元とOracle Cloudの転送先を比較します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Oracle Cloud transfer" class="img-large img-center" />

## 大容量転送を監視する

Oracle Cloudへのアップロードの進捗を追跡します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Oracle Cloud upload" class="img-large img-center" />

## Oracle Cloudストレージ階層

用途に応じて適切な階層を使用しましょう。

| 階層 | 最適な用途 | 価格 |
|------|----------|-------|
| Standard | 頻繁にアクセスするデータ | $26/TB/月 |
| Infrequent Access | 月次アクセス | $10/TB/月 |
| Archive | 年次アクセス | $3/TB/月 |

ライフサイクルポリシーは、経過期間に基づいて階層間でデータを自動的に移動できます。

## はじめに

1. **Oracle Cloudアカウントを作成する**(10GBの無料ストレージ付き)。
2. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロードする**。
3. **Oracle Cloud**をS3互換リモートとして追加する。
4. 他のクラウドと合わせて**閲覧、転送、同期**する。
5. 手間のかからない運用のために**自動バックアップをスケジュール**する。

Oracle Cloudの無料エグレスは、定期的にアクセスするデータにとって特に魅力的な選択肢となります。

---

**関連ガイド:**

- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
