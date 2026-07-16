---
slug: sync-tencent-cos-to-amazon-s3-rcloneview
title: "Tencent COS を Amazon S3 に同期 — RcloneView によるクラウドバックアップ"
authors:
  - tayson
description: "RcloneView を使って Tencent Cloud COS のデータを Amazon S3 に同期し、グローバルな可用性、クロスリージョン冗長性、自動クラウドバックアップジョブを実現する方法を学びます。"
keywords:
  - Tencent COS to S3
  - Tencent COS sync
  - Amazon S3 backup
  - RcloneView Tencent
  - cloud-to-cloud sync
  - S3-compatible storage
  - China cloud to global
  - cross-region cloud sync
tags:
  - tencent-cos
  - amazon-s3
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Tencent COS を Amazon S3 に同期 — RcloneView によるクラウドバックアップ

> 中国リージョンのデータに Tencent Cloud COS を利用している企業は、RcloneView を使ってそのデータを Amazon S3 に同期することで、グローバルな可用性とクロスリージョン冗長性を確保できます。

Tencent Cloud Object Storage（COS）は、中国本土にユーザーや業務拠点を持つ企業に広く利用されており、低レイテンシと現地のデータ規制への準拠を実現しています。しかし、グローバルな可用性や災害復旧のためには、より広範な国際的展開を持つ Amazon S3 にそのデータを複製する必要がある場合が多くあります。RcloneView は、両プロバイダーに対する S3 互換リモートサポートにより、このクロスクラウド同期を単一のグラフィカルインターフェースからシンプルに実現します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Tencent COS リモートのセットアップ

Tencent COS と Amazon S3 はどちらも S3 互換であるため、RcloneView は同じ S3 プロバイダーフレームワークを通じて両者を扱います。RcloneView で **New Remote** をクリックし、**S3 Compatible Storage** を選択します。プロバイダーのドロップダウンから **Tencent Cloud COS** を選択してください。Tencent Cloud コンソールから取得した **SecretId** と **SecretKey**、および COS のリージョンに対応した正しい **エンドポイント**（例：広州の場合は `cos.ap-guangzhou.myqcloud.com`）を入力します。

保存すると、Tencent COS リモートがデュアルペインのエクスプローラーに表示されます。COS のバケットとオブジェクトを参照し、コンテンツにアクセスできることを確認し、同期ジョブを設定する前にフォルダー構造が期待通りであることを確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Tencent Cloud COS as an S3-compatible remote in RcloneView" class="img-large img-center" />

## 転送先として Amazon S3 を追加

再度 **New Remote** をクリックし、**Amazon S3** を選択します。AWS の **Access Key ID** と **Secret Access Key** を入力し、転送先バケットが存在する AWS リージョンを指定します。転送先バケットがまだ存在しない場合は、まず AWS S3 コンソールで作成してください。設定時に RcloneView がそのバケットに接続します。

両方のリモートを設定したら、デュアルペインのエクスプローラーで並べて開き、コンテンツを比較して接続を確認します。フル同期ジョブを実行する前に、双方のいくつかのフォルダーを参照してスポットチェックを行うことができます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud view of Tencent COS and Amazon S3 in RcloneView" class="img-large img-center" />

## 同期ジョブの作成とスケジューリング

**Job Manager** を開き、**Job Wizard** を起動します。Tencent COS のバケット（または特定のプレフィックス）をソースとして、Amazon S3 のバケットを転送先として設定します。実際に同期を実行する前に、**dry run**（ドライラン）オプションを使って何が転送されるかをプレビューしてください。既存の COS バケットの初回一括移行の場合、ドライランは転送サイズの見積もりや、パスやエンコーディングの問題の検出に役立ちます。

ジョブが正常に実行されたら、定期的なスケジュールとして設定することを検討してください。PLUS ライセンスユーザーは、毎日または毎週のペースで実行される自動同期ジョブを設定でき、新しいデータが Tencent COS に到着するたびに S3 のレプリカを最新の状態に保てます。**Job History** パネルにはすべての実行履歴が記録され、転送量やエラーを確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Tencent COS to Amazon S3 sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. **New Remote** > **S3 Compatible Storage** > **Tencent Cloud COS** から **Tencent Cloud COS** リモートを追加します。
3. AWS の認証情報を使って **Amazon S3** リモートを追加します。
4. **Job Wizard** を使って COS から S3 への同期ジョブを作成し、まずドライランを実行します。
5. PLUS ライセンスで定期的な同期ジョブをスケジュールし、継続的なクロスクラウドレプリケーションを実現します。

RcloneView を使って Tencent COS から Amazon S3 に同期することは、中国リージョンのプライマリストアからグローバルなデータ可用性を実現する最もクリーンな方法の一つです。

---

**関連ガイド:**

- [Tencent COS の管理 — RcloneView によるクラウド同期](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [Amazon S3 の管理 — RcloneView によるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [RcloneView で S3、Wasabi、R2 を一元管理](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
