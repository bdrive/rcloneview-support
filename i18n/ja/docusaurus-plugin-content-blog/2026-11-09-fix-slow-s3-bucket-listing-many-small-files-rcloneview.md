---
slug: fix-slow-s3-bucket-listing-many-small-files-rcloneview
title: "小さなファイルが多いS3バケットの一覧取得と同期が遅い問題を解決 — RcloneViewでチューニング"
authors:
  - morgan
description: "小さなファイルが多いバケットでS3の同期や一覧取得が遅い場合、RcloneViewでチェッカー・転送数・フィルターを調整し、Dry Runで確認します。"
keywords:
  - 小さなファイル S3 同期 遅い
  - S3 バケット 一覧取得 遅い
  - rclone checkers チューニング
  - S3 数百万ファイル 同期
  - RcloneView S3
  - S3 同期 高速化
  - 小さなファイル 転送 遅い
  - S3互換 同期 パフォーマンス
tags:
  - RcloneView
  - troubleshooting
  - tips
  - s3
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 小さなファイルが多いS3バケットの一覧取得と同期が遅い問題を解決 — RcloneViewでチューニング

> 数十万の小さなファイルがあるバケットの同期が遅いのは、帯域幅ではなくオブジェクトごとのオーバーヘッドが原因であり、いくつかのジョブ設定で改善できます。

写真家のプロキシフォルダーやアプリケーションのログアーカイブには、非常に多くの小さなオブジェクトが含まれることがあります。各オブジェクトに一覧エントリ、比較、リクエストが必要なため、ネットワークに余裕があっても同期は遅くなります。RcloneViewはジョブウィザードで関連するrcloneの設定を提供するため、フラグを書かずに調整できます。S3、Azure、Backblaze B2はFREEライセンスで読み取り/書き込みの両方が可能です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 小さなファイルが遅い理由

大きなファイルではスループットが支配的です。小さなファイルではリクエスト数が支配的です。すべてのオブジェクトが一覧表示され、サイズ・時刻・チェックサムで比較され、個別にアップロードされます。この場合の遅さは、多くはリクエストごとのレイテンシとプロバイダー側のレート制限が原因であるため、帯域を増やしても効果はありません。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="ファイル数と速度を表示するTransferringタブ" class="img-large img-center" />

実行中にTransferringタブを開いてください。速度は低いのにファイル数が着実に増えている場合、帯域幅ではなくリクエスト数がボトルネックです。

## ジョブ設定の調整

同期ウィザードのステップ2で、ファイル転送数を増やすと、より多くのオブジェクトが並列で移動します。equality checkersの既定値は8ですが、遅い、またはスロットリングされるバックエンドでは4以下を使うのが推奨です。同時チェックが多すぎるとスロットリングが発生し、状況が悪化する可能性があるためです。一度に1つの値だけを変更して再実行してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="転送数とチェッカーのジョブ詳細設定" class="img-large img-center" />

チェックサム比較を有効にすると、サイズ確認に加えてハッシュ計算が必要になるため、速度より整合性が重要な場合にのみ使用してください。一時的なエラーで長時間のジョブが中断されないよう、再試行設定は既定値の3のままにしてください。

## 作業量を減らす

ステップ3のフィルターは一覧取得の負荷を減らします。最大ファイル経過時間で古いオブジェクトをスキップし、不要なフォルダーを除外し、定義済みフィルターで特定のファイル形式を除外します。巨大なジョブ1つをプレフィックスごとのジョブに分割すると、失敗の切り分けと再実行も容易になります。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewでチューニングした同期ジョブを実行" class="img-large img-center" />

フィルターを変更したら、必ずDry Runを実行し、本番の実行前にどのファイルがコピーまたは削除されるかを正確に確認してください。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 遅いジョブを開き、Transferringタブでリクエスト数がボトルネックか確認します。
3. 転送数とチェッカーを一つずつ調整し、フィルターを追加して範囲を絞ります。
4. Job Historyで所要時間を比較し、最も良い設定を維持します。

小さく着実な変更が、一晩かかっていた同期を日常的な作業に変えてくれます。

---

**関連ガイド:**

- [S3マルチパートアップロード失敗の解決](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)
- [クラウド転送速度の低下を解決](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [クラウドAPIレート制限エラーの解決](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
