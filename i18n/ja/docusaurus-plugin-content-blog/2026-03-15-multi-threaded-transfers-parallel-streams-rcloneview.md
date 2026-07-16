---
slug: multi-threaded-transfers-parallel-streams-rcloneview
title: "クラウド転送を高速化 — RcloneViewでのマルチスレッドアップロードと並列ストリーム"
authors:
  - tayson
description: "クラウド転送が遅い必要はありません。RcloneViewでマルチスレッドアップロード、並列ファイル転送、転送最適化設定を使ってスループットを最大化する方法を学びましょう。"
keywords:
  - multi threaded cloud upload
  - parallel cloud transfer
  - speed up cloud sync
  - rclone parallel transfers
  - fast cloud upload
  - cloud transfer optimization
  - rcloneview transfer speed
  - concurrent cloud uploads
  - multi stream upload
  - maximize cloud transfer speed
tags:
  - performance
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウド転送を高速化 — RcloneViewでのマルチスレッドアップロードと並列ストリーム

> 500 GBをS3に1ファイルずつアップロードすると数日かかります。並列転送とマルチスレッドアップロードを使えば、数時間で完了します。RcloneViewを最大速度で設定する方法を紹介します。

デフォルトでは、クラウド転送ツールはファイルを逐次処理し、各ファイルを単一ストリームでアップロードします。これでは、ネットワークとクラウドプロバイダーが処理できる能力のごく一部しか使えていません。rcloneを基盤とするRcloneViewは、並列ファイル転送(複数ファイルの同時転送)とマルチスレッドアップロード(大きなファイルを複数の並列ストリームに分割)の両方をサポートしています。これらを適切に設定することで、転送時間を大幅に短縮できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 2種類の並列処理

### 並列ファイル転送

複数のファイルを同時に転送します。ファイル1、ファイル2、ファイル3の順にアップロードするのではなく、3つを同時にアップロードします。これは`--transfers`設定(デフォルト: 4)で制御されます。

### マルチスレッド単一ファイルアップロード

1つの大きなファイルを複数のチャンクに分割し、並行してアップロードします。10 GBの動画ファイルは複数のパートに分割され、それぞれが並列でアップロードされた後、転送先で再結合されます。これは`--multi-thread-streams`(デフォルト: 4)で制御されます。

## RcloneViewでの設定方法

### 並列転送数を調整する

ジョブ設定またはRcloneViewのターミナルで、同時ファイル転送数を設定します。

- **4転送**(デフォルト) — ほとんどの状況で安全
- **8〜16転送** — 小さなファイルが多い高速接続に最適
- **2〜4転送** — 低速接続や厳格なレート制限があるプロバイダーに適している

### マルチスレッドストリーム数を調整する

大きなファイルのアップロードでは、ストリーム数を増やします。

- **4ストリーム**(デフォルト) — バランスの取れたパフォーマンス
- **8〜16ストリーム** — 高速接続での大きなファイルに最適
- **1ストリーム** — マルチパートアップロードをサポートしないプロバイダーで使用

## 効果を監視する

変更の効果を確認するため、転送速度をリアルタイムで監視します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed" class="img-large img-center" />

## シナリオ別の最適設定

| シナリオ | 転送数 | ストリーム数 | 理由 |
|----------|-----------|---------|-----|
| 小さなファイルが多い(写真、文書) | 16 | 1 | ファイルオーバーヘッドが支配的なため、並列ファイル数を増やすと効果的 |
| 大きなファイルが少ない(動画、バックアップ) | 2-4 | 8-16 | 単一ファイルの速度が重要なため、ストリーム数を増やすと効果的 |
| 混在するファイルサイズ | 8 | 4 | バランスの取れたアプローチ |
| 低速ネットワーク(< 50 Mbps) | 2-4 | 2-4 | 接続への過負荷を避ける |
| 高速ネットワーク(> 500 Mbps) | 16+ | 8-16 | 利用可能な帯域幅をすべて使用 |
| レート制限のあるプロバイダー | 2-4 | 4 | APIの制限内に収める |

## プロバイダー固有のヒント

### Google Drive
Googleは1日あたりのアップロード上限(750 GB)と秒間APIレート制限を課しています。転送数を適度(4〜8)に保ち、`--tpslimit`を使ってレート制限内に収めましょう。

### S3 / S3互換ストレージ
S3は高い並列処理をうまく扱えます。最大スループットを得るには、転送数を16以上、ストリーム数を8〜16まで引き上げましょう。

### OneDrive
OneDriveは高い同時実行数に敏感な場合があります。まず4転送から始め、徐々に増やしていきましょう。

### Backblaze B2
B2はマルチパートアップロードをうまく扱えます。4〜8転送、4〜8ストリームを使用してください。

## RcloneViewのターミナルで微調整する

高度なチューニングには、組み込みのターミナルを使って特定のフラグ付きでrcloneコマンドを実行します。異なる設定をテストし、リアルタイム監視で結果を測定しましょう。

## ジョブ履歴で結果を確認する

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Review transfer performance" class="img-large img-center" />

最適化の前後でジョブの所要時間を比較しましょう。ジョブ履歴には、合計時間、転送されたファイル数、平均速度が表示されます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **デフォルト設定**(4転送、4ストリーム)から始めます。
3. 転送中に**速度を監視**します。
4. ネットワークとプロバイダーに応じて**徐々に増やして**いきます。
5. **ジョブ履歴を比較**して改善を測定します。

並列処理を増やすほど転送は速くなります — ネットワークとプロバイダーの限界まで。

---

**関連ガイド:**

- [クラウドアップロードの低速問題を解決する](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [帯域幅制限を設定する](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [ジョブ履歴と転送ログ](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
