---
slug: sync-idrive-e2-s3-google-drive-rcloneview
title: "RcloneViewでIDrive e2オブジェクトストレージをAWS S3やGoogle Driveと同期する"
authors:
  - tayson
description: "RcloneViewのS3互換接続を使って、IDrive e2オブジェクトストレージを視覚的に管理 — バケットを閲覧し、AWS S3やGoogle Driveと同期し、バックアップをスケジュール設定できます。"
keywords:
  - idrive e2 sync
  - idrive e2 backup
  - idrive e2 gui tool
  - idrive e2 to s3
  - idrive e2 rclone
  - idrive e2 file manager
  - idrive e2 mount local drive
  - idrive e2 google drive
  - idrive e2 object storage
  - s3 compatible storage gui
tags:
  - RcloneView
  - idrive-e2
  - s3-compatible
  - cloud-storage
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでIDrive e2オブジェクトストレージをAWS S3やGoogle Driveと同期する

> IDrive e2は月額$0.004/GBという非常に手頃な価格でS3互換ストレージを提供しています。しかし、デスクトップ用の同期クライアントがないため、ファイル管理にはAPI呼び出しやWeb UIが必要でした。RcloneViewは完全なビジュアルインターフェースを提供します。

IDrive e2は、Backblaze B2、Wasabi、AWS S3よりも安価な、最もコスト効率の良いS3互換オブジェクトストレージサービスの一つです。バックアップ、アーカイブ、コールドストレージに最適です。しかし、多くのオブジェクトストレージプロバイダーと同様、IDrive e2にはネイティブのデスクトップクライアントがありません。RcloneViewはS3 API経由で接続し、視覚的なファイル管理、クラウド間同期、スケジュール自動化を実現します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜIDrive e2なのか？

| プロバイダー | 月額TBあたりのコスト | 送信データ量 |
|----------|-------------------|--------|
| IDrive e2 | $4.00 | 無料（ストレージの3倍まで） |
| Backblaze B2 | $6.00 | $0.01/GB |
| Wasabi | $6.99 | 無料 |
| AWS S3 Standard | $23.00 | $0.09/GB |

IDrive e2の料金体系は、手頃で信頼性の高いオブジェクトストレージを必要とするすべての人にとって魅力的な選択肢となります。

## IDrive e2への接続

IDrive e2はS3互換であるため：

1. **リモートを追加**をクリック → **Amazon S3**を選択します。
2. S3プロバイダーのドロップダウンから**IDrive e2**または**Other**を選択します。
3. 認証情報を入力します：
   - IDrive e2ダッシュボードからの**アクセスキー**と**シークレットキー**。
   - **エンドポイント**：お使いのリージョンのエンドポイント（例：`https://s3.us-west-1.idrivecloud.io`）。
4. 保存すると、e2のバケットを閲覧できるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="Add IDrive e2 as S3-compatible remote" class="img-large img-center" />

## 閲覧と管理

他のクラウドと並べてIDrive e2のバケットを表示できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse IDrive e2 buckets" class="img-large img-center" />

## 同期シナリオ

### Google Drive → IDrive e2（手頃なバックアップ）

Google Driveの低コストバックアップとしてe2を利用します。

1. コピージョブを作成：Google Drive → IDrive e2バケット。
2. [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)で毎晩実行するようスケジュール設定します。
3. Googleが同じデータに課金する金額のごく一部で済ませられます。

### IDrive e2 → AWS S3（クロスクラウド冗長化）

1. 同期ジョブを作成：IDrive e2 → S3バケット。
2. 2つの異なるS3互換プロバイダー間で冗長性を維持します。

### ローカル/NAS → IDrive e2（オフサイトアーカイブ）

1. コピージョブを作成：ローカルフォルダまたはNAS → IDrive e2。
2. 最小限のコストでオフサイトバックアップを実現するのに最適です。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run IDrive e2 sync job" class="img-large img-center" />

## ローカルドライブとしてマウント

IDrive e2を通常のフォルダとしてアクセスできます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount IDrive e2 as local drive" class="img-large img-center" />

## 自動化とモニタリング

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule IDrive e2 backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor IDrive e2 transfers" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **IDrive e2をS3互換リモートとして追加**します。
3. 任意の送信先へ**閲覧、マウント、または同期**します。
4. 自動化された低コストのクラウドバックアップのために**スケジュール**を設定します。

IDrive e2はオブジェクトストレージの中でも予算重視のキングです。RcloneViewはそれにふさわしいデスクトップ体験を提供します。

---

**関連ガイド：**

- [AWS S3およびS3互換ストレージの追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [クラウドストレージをローカルドライブとしてマウント](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
