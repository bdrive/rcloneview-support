---
slug: migrate-wasabi-to-cloudflare-r2-rcloneview
title: "RcloneViewでWasabiからCloudflare R2へ移行する"
authors:
  - tayson
description: "RcloneViewを使ってWasabiからCloudflare R2へ移行します。料金を比較し、両方のS3互換リモートを設定し、データを転送して、移行を段階的に検証します。"
keywords:
  - rcloneview
  - wasabi to cloudflare r2
  - migrate wasabi to r2
  - cloudflare r2 migration
  - wasabi migration tool
  - s3 compatible migration
  - cloud storage migration
  - r2 no egress fees
  - wasabi data transfer
  - object storage migration gui
tags:
  - RcloneView
  - wasabi
  - cloudflare-r2
  - migration
  - cloud-migration
  - s3-compatible
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでWasabiからCloudflare R2へ移行する

> WasabiとCloudflare R2はどちらもS3互換で、AWS S3の低コストな代替として提供されていますが、料金モデルには重要な違いがあります。**RcloneView**は視覚的なインターフェースで両者間の移行を処理します。

Wasabiはエグレス料金なしでホットクラウドストレージを$6.99/TB/月で提供していますが、90日間の最低保存期間と月額最低料金が課されます。Cloudflare R2はエグレス料金ゼロで最低保存期間もなく、$0.015/GB/月(約$15.36/TB)で課金されます。データ取得頻度が高いワークロードや短期間しか存在しないオブジェクトの場合、R2は大幅に安くなる可能性があります。RcloneViewは両方をS3互換リモートとして接続し、シンプルな移行パスを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## WasabiからCloudflare R2へ移行する理由

両プロバイダーともエグレス料金を撤廃しており、これがAWS S3に対する主なセールスポイントです。移行を検討する決め手は通常、以下の要素に絞られます。

- **最低保存期間**: Wasabiはオブジェクトごとに最低90日分の保存料金を課金します。たとえそれより早く削除しても同様です。R2には最低保存期間がないため、一時的または頻繁に置き換わるデータに適しています。
- **CDN連携**: R2はCloudflareのCDNネットワークとネイティブに連携し、追加設定なしでCloudflareドメイン経由での保存オブジェクトへの即時パブリックアクセスを実現します。
- **Workers連携**: アプリケーションがCloudflare Workersを利用している場合、R2はエッジコンピュートからのゼロレイテンシーアクセスを提供します。
- **スケール時の料金**: ストレージ量の多いワークロードでは、WasabiのフラットなTB単位料金の方が安くなる場合があります。API呼び出し量が多いワークロードでは、R2の料金モデル(月間最初の1,000万Class Bリクエストが無料)が有利になる場合があります。

## 両方のリモートを設定する

### Wasabiリモート

RcloneViewのRemote Managerを開き、S3互換リモートを追加します。プロバイダーとして**Wasabi**を選択し、WasabiのAccess KeyとSecret Keyを入力し、リージョンエンドポイント(例: `s3.us-east-1.wasabisys.com`)を指定します。移行対象のバケットを選択します。

### Cloudflare R2リモート

別のS3互換リモートを追加し、プロバイダーとして**Cloudflare R2**を選択します。R2のAccess Key IDとSecret Access Key(Cloudflareダッシュボードの R2 > Manage R2 API Tokens から生成)を入力します。エンドポイントは`https://<account-id>.r2.cloudflarestorage.com`の形式に従います。Cloudflareダッシュボードでターゲットバケットを作成するか、RcloneViewのセットアップ中に作成させます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Wasabi and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## 移行を実行する

左ペインでWasabiを、右ペインでR2を開きます。Wasabi側でソースバケットに、R2側でターゲットバケットに移動します。

両プロバイダーともS3 APIを使用しているため、メタデータの転送はシンプルです。コンテンツタイプ、キャッシュコントロールヘッダー、カスタムメタデータがそのまま引き継がれます。RcloneViewは転送時にサーバーサイドメタデータを使用し、追加設定なしでオブジェクトのプロパティを保持します。

初回移行にはコピージョブを使用します。RcloneViewはMD5チェックサムでファイルを比較し(WasabiとR2はどちらもマルチパートアップロードでないオブジェクトに対して標準のMD5 ETagを返します)、新規または変更されたファイルのみを転送します。並行数を設定可能なマルチスレッド転送により、移行を効率的に行えます。大規模なバケット移行では、転送数を8〜16に設定してください。

Wasabiの最低保存期間に注意してください。オブジェクトが最近(過去90日以内)アップロードされた場合、削除後でもWasabi上で90日分すべての料金が課金されます。移行タイムラインを計画してください。まず移行し、検証してから、90日間の期間が経過した後にWasabiから削除します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Wasabi to Cloudflare R2 in RcloneView" class="img-large img-center" />

## 移行を検証する

転送後、RcloneViewの比較機能を使って、すべてのオブジェクトがR2に到着したことを確認します。Wasabiのソースとターゲットとなる R2の宛先を選択し、フォルダー比較を実行します。一致するオブジェクトは「matched」と表示され、欠落または相違があるオブジェクトはレビュー用にハイライトされます。

さらに確信を得るため、両側でチェックサムを計算するチェック操作を実行します。これによりバイトレベルでのデータ整合性を検証できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Wasabi to R2 migration in RcloneView" class="img-large img-center" />

## 移行後のクリーンアップ

移行を検証したら:

1. アプリケーションの設定を、WasabiではなくR2のエンドポイントを指すように更新します。
2. アプリケーションのアクセスをテストして、R2ですべて正常に動作することを確認します。
3. 早期削除の課金を避けるため、Wasabiで90日間の最低保存期間が経過するまで待ってからオブジェクトを削除します。
4. Wasabiのバケットを削除し、Wasabiのアクセスキーを無効化します。

移行期間中に両プロバイダーを並行して運用する必要がある場合は、RcloneViewで毎日の同期ジョブをスケジュールし、Wasabiに追加された新しいオブジェクトをR2に反映し続けます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling sync from Wasabi to R2 during transition" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. WasabiとCloudflare R2をS3互換リモートとして追加します。
3. WasabiからR2へのコピージョブを実行します。
4. 比較とチェック操作で検証します。
5. アプリケーションのエンドポイントを更新し、保持期間経過後にWasabiをクリーンアップします。

WasabiとR2はどちらも優れたS3互換の選択肢ですが、ワークロードのプロファイルが変化したときは、RcloneViewが移行を苦労なく行えるようにします。

---

**関連ガイド:**

- [AWS S3とS3互換ストレージを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [フォルダーの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
