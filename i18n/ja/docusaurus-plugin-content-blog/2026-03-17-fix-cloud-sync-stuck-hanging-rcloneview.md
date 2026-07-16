---
slug: fix-cloud-sync-stuck-hanging-rcloneview
title: "クラウド同期が99%で止まる・ハングする場合の対処法 — RcloneViewで転送の停止をトラブルシューティング"
authors:
  - tayson
description: "クラウド同期が何時間も動いているのに、止まっているように見える。進捗は99%のまま完了しない。転送が停止する原因と、その修正方法を解説します。"
keywords:
  - cloud sync stuck
  - cloud transfer hanging
  - sync stuck 99 percent
  - cloud upload frozen
  - rclone transfer stuck
  - cloud sync not completing
  - fix stalled cloud transfer
  - cloud sync timeout
  - cloud upload hanging
  - rclone sync frozen
tags:
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウド同期が99%で止まる・ハングする場合の対処法 — RcloneViewで転送の停止をトラブルシューティング

> 進捗バーは99%を示している。しかも45分間ずっと99%のままだ。動いているのか？止まっているのか？キャンセルすべきか？停止したクラウド転送の診断方法と修正方法を解説します。

停止したクラウド転送は、クラウド同期において最もイライラする問題の一つです。ジョブは実行中に見えるものの、進捗インジケーターがほとんど動かず、待つべきか再起動すべきか判断がつきません。良いニュースとして、停止した転送にはほぼ常に特定の、修正可能な原因があります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## よくある原因

### 1) 大きなファイルがほぼ完了している

最もよくある「誤検知」です。50GBのファイルが98%完了していても、残り1GBが存在します。10MB/sの速度なら、あと100秒かかりますが、進捗バーはバイト数ではなくファイル数を計測しているため、ほとんど動いていないように見えます。

**対処法**: 転送速度インジケーターを確認してください。バイトが流れ続けているなら、転送は正常に動作しています — 最後の大きなファイルの処理に時間がかかっているだけです。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Check if bytes are flowing" class="img-large img-center" />

### 2) APIレート制限によるスロットリング

Google Drive、OneDrive、その他のプロバイダーは、API制限に達すると転送をスロットリングします。転送は非常に遅くなりますが、失敗はしません。

**対処法**: 同時転送数を減らしてください。組み込みターミナルから `--tpslimit` を追加します。

### 3) 大きなファイルでのネットワークタイムアウト

一部のプロバイダーは、長時間実行中のアップロードを静かに切断します。転送はアクティブに見えますが、データは移動していません。

**対処法**: リモート設定でタイムアウトを設定してください。`--timeout` を使うと停止をより早く検知できます。

### 4) 別のプロセスによるファイルロック

ソースファイルが別のアプリケーションで開かれています。転送はアクセスできるようになるまで待機します。

**対処法**: ファイルを使用している可能性のあるアプリケーションを閉じるか、フィルターで使用中のファイルを除外してください。

### 5) プロバイダー側の処理

一部のプロバイダーは、完了を確認する前にアップロードされたファイルを処理します（ウイルススキャン、インデックス作成など）。これにより、アップロード完了と確認の間にギャップが生じます。

**対処法**: 待ってください。通常1〜5分で解決します。

### 6) メモリ不足

非常に大規模な転送リスト（数百万ファイル）は、利用可能なメモリを枯渇させ、処理を大幅に遅くする可能性があります。

**対処法**: 転送をフォルダ単位で小さなバッチに分割してください。

## 診断手順

### ジョブ履歴を確認する

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check job status" class="img-large img-center" />

### ターミナルで詳細出力を確認する

RcloneViewのターミナルから `-vv` フラグを付けて同じ操作を実行し、詳細な診断出力を確認します。

### キャンセルして再実行する

転送が本当に停止している場合は、ジョブをキャンセルして再実行してください。RcloneViewはすでに転送済みのファイルをスキップし、停止した箇所から再開します。

## 予防策

- リモート設定で**適切なタイムアウトを設定する**
- レート制限を避けるために**適度な同時実行数**（4〜8転送）を使用する
- 大きなジョブを**小さなバッチに分割する**
- **リトライをスケジュールする** — 夜間ジョブが停止した場合、2回目のスケジュール実行で追いつけます

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneViewをダウンロード**します。
2. **転送速度を確認** — バイトが流れていれば、正常に動作しています。
3. レート制限がかかっている場合は**同時実行数を減らす**。
4. 本当に停止している場合は**キャンセルして再実行**。

99%完了で止まっているように見える場合、ほとんどは最後の大きなファイルの処理に時間がかかっているだけです。

---

**関連ガイド:**

- [クラウドアップロードが遅い場合の対処法](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [失敗した転送を再開する](https://rcloneview.com/support/blog/resume-failed-cloud-transfers-rcloneview)
- [クラウドAPIレート制限の解説](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)

<CloudSupportGrid />
