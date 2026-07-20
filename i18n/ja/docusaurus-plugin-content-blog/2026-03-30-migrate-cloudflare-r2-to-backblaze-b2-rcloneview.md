---
slug: migrate-cloudflare-r2-to-backblaze-b2-rcloneview
title: "Cloudflare R2からBackblaze B2への移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewのビジュアルインターフェースを使ってCloudflare R2からBackblaze B2へファイルを移行する方法を解説します。CLIコマンドなしでS3互換ストレージを転送できます。"
keywords:
  - cloudflare r2 to backblaze b2
  - migrate r2 to b2
  - cloudflare r2 migration
  - backblaze b2 transfer
  - cloud-to-cloud migration
  - rcloneview cloud transfer
  - s3 compatible migration
  - object storage migration
  - r2 backup to b2
tags:
  - RcloneView
  - cloudflare-r2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudflare R2からBackblaze B2への移行 — RcloneViewでファイルを転送

> Cloudflare R2からBackblaze B2への移行は、ターミナルでスクリプトを書いたりAPIトークンを管理したりする必要はありません。

Cloudflare R2はゼロエグレス料金を提供していますが、チームによってはBackblaze B2の豊富なエコシステム統合、ライフサイクルポリシー、Bandwidth Allianceパートナーシップの方が長期的に適していると感じる場合があります。オブジェクトストレージを統合する場合でも、ワークロードを移行する場合でも、RcloneViewを使えばポイント&クリックのインターフェースだけでR2からB2へすべてのバケットを移行できます。CLIは不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cloudflare R2からBackblaze B2へ移行する理由

Backblaze B2はCloudflare(Bandwidth Alliance経由)やFastlyといったCDNパートナーとのネイティブな統合を提供しており、これらのネットワークを通じたB2からのエグレスは無料または大幅に割引されます。B2は独自のネイティブAPIに加えてS3互換のAPIエンドポイントもサポートしているため、アプリケーションの接続方法に柔軟性があります。アプリケーションレベルのライフサイクルルール、サーバーサイド暗号化キー管理、イベント通知が必要なチームにとって、B2はR2の現在の機能セットではまだ実現できない機能を提供します。

コストの予測可能性も重要な要素です。Backblaze B2はストレージに対して月額TBあたり定額6ドルを請求し、パートナーネットワーク経由のエグレスは無料です。すでにアーキテクチャがCloudflareのCDNを通じてトラフィックをルーティングしている場合、コンピュートとWorkersのコストを考慮すると、B2ストレージとCloudflare配信の組み合わせはR2単体より経済的になる可能性があります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudflare R2 and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## RcloneViewで両方のリモートを設定する

RcloneViewを開き、Cloudflare R2用の新しいリモートを作成します。プロバイダータイプとして「Amazon S3 Compliant」を選択し、S3プロバイダーのドロップダウンから「Cloudflare R2」を選びます。R2のAccess Key ID、Secret Access Key、およびエンドポイントURL(通常は`https://<account-id>.r2.cloudflarestorage.com`の形式)を入力します。RcloneViewは保存前に接続を検証します。

次に、Backblaze B2のリモートを追加します。ネイティブのB2プロバイダータイプ、またはS3互換インターフェースのどちらかを使用できます。ネイティブオプションの場合は、B2のApplication Key IDとApplication Keyを入力します。接続が完了すると、RcloneViewは既存のバケットを自動的にリストアップします。対象バケットがまだ存在しない場合は、まずB2コンソールで希望のリージョンと暗号化設定でバケットを作成してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from R2 to B2" class="img-large img-center" />

## 移行を実行する

両方のリモートを設定したら、RcloneViewの2ペインエクスプローラーを開きます。片側にR2リモート、もう片側にB2リモートを選択します。R2の移行元バケットとB2の移行先バケットに移動します。バケットの内容全体をドラッグ&ドロップするか、特定のプレフィックスやフォルダーを選択して転送できます。

大規模な移行の場合は、代わりに同期または コピージョブを作成します。ジョブマネージャーに移動し、R2を移行元、B2を移行先に設定して、「Copy」モードを選択します。これにより、移行期間中にR2から何も削除することなくファイルがB2に届くようにできます。チェックサム検証を有効にすると、すべてのオブジェクトが完全な状態で到着したことを検証できます。R2とB2はどちらもS3互換アップロードでMD5チェックサムをサポートしているため、RcloneViewはエンドツーエンドの整合性を検証できます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Cloudflare R2 to Backblaze B2" class="img-large img-center" />

## 転送のスケジュール設定と監視

R2バケットに数テラバイトのデータが含まれている場合は、移行をスケジュールされたジョブに分割してください。RcloneViewのスケジューラーを使えば、ネットワークの飽和を避けるためにオフピーク時間帯に転送を実行できます。ジョブごとに帯域幅制限を設定して、他のサービスをスムーズに稼働させ続けましょう。

転送ダッシュボードで進捗を監視できます。リアルタイムのスループット、ファイル数、エラーが表示されます。初回のコピーが完了したら、ジョブを「Sync」モードに切り替え、アプリケーションのエンドポイントをR2からB2に切り替えるまで定期的に実行します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling R2 to B2 migration jobs in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. S3互換の認証情報とアカウントのエンドポイントを使ってCloudflare R2リモートを追加します。
3. Application Key IDとApplication KeyでBackblaze B2リモートを追加します。
4. チェックサム検証を有効にしてR2からB2へのコピージョブを作成し、オフピーク時間帯に実行するようスケジュールします。

B2内のすべてのオブジェクトが検証されたら、アプリケーションのエンドポイントを更新し、自分のペースでR2バケットを廃止してください。

---

**関連ガイド:**

- [RcloneViewでCloudflare R2からAWS S3へ移行する](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [RcloneViewでCloudflare R2とAWS S3を比較する](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [RcloneViewでS3、Wasabi、R2を一元管理する](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
