---
slug: equality-checkers-slow-backends-sync-tuning-rcloneview
title: "Number of Equality Checkers — RcloneViewで低速なバックエンド向けに同期の比較を調整する"
authors:
  - kai
description: "RcloneViewの同期ウィザードにあるNumber of equality checkers設定の役割と、SFTP、FTP、WebDAV、レート制限のあるクラウドリモート向けの調整方法を解説します。"
keywords:
  - rclone checkers 設定
  - number of equality checkers
  - rclone checkers GUI
  - 低速バックエンド向けの同期調整
  - SFTP 同期パフォーマンス
  - WebDAV 同期が遅い
  - クラウド API レート制限 同期
  - RcloneView 詳細同期設定
  - チェックサム比較 同期
tags:
  - RcloneView
  - feature
  - performance
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Number of Equality Checkers — RcloneViewで低速なバックエンド向けに同期の比較を調整する

> 同期は何かをコピーする前に、どのファイルがすでに一致しているかを判断する必要があります。checkerの数は、その段階がストレージにどれだけ負荷をかけるかを決めます。

RcloneViewのすべてのSyncジョブは、実際に転送が必要なものを把握するため、ソースと宛先のファイルを比較することから始まります。この処理を担うのがequality checkerで、同期ウィザードのStep 2で並列実行する数を設定できます。デフォルトの8はほとんどのクラウドプロバイダーに適していますが、小規模なSFTPサーバー、WebDAV共有、API制限の厳しいプロバイダーでは、少ない値のほうが安定することがよくあります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Equality Checkerの役割

checkerは両側のファイルを調べ、同じかどうかを判断します。デフォルトではサイズと更新日時で比較します。同じステップで**Enable checksum**にチェックを入れると、代わりにハッシュとサイズで比較します。より厳密ですが、すべてのファイルについてバックエンドにハッシュを要求することになります。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Opening a sync job in RcloneView to adjust advanced settings" class="img-large img-center" />

checkerは、同時にコピーするファイル数を制御する**Number of file transfers**とは別物です。ほとんどが変更されていない200,000個の小さなファイルを同期する場合、転送よりもチェックにはるかに多くの時間がかかるため、checker数のほうが転送数より重要になることがあります。

## Checker数を下げるべきとき

RcloneViewの推奨は、低速なバックエンドでは4以下にすることです。典型的なケース：

- **控えめなスペックのサーバー上のSFTPやFTP。** 並列チェックは同時接続の増加を意味し、小さなVPSや古いNASは追加のセッションを拒否したり制限したりすることがあります。
- メタデータ要求への応答が遅い**WebDAV共有**。
- 並列リクエストが集中するとレート制限エラーと再試行が発生する、**リクエスト制限の厳しいクラウドプロバイダー**。

checkerを下げると、純粋な並列性と引き換えに、より安定した進行が得られます。比較フェーズ中にログで再試行や接続エラーが繰り返される場合は、4、次に2へと下げて再実行してください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring sync progress and speed in the RcloneView Transferring tab" class="img-large img-center" />

## デフォルトのままで問題ないとき

Amazon S3、Wasabi、Cloudflare R2などのS3互換オブジェクトストレージは通常8つのcheckerを問題なく処理でき、ローカルディスクや高速なLAN上のNASはほとんど調整を必要としません。RcloneViewはWindows、macOS、Linux上で、1つのウィンドウから90+のプロバイダーをマウントし同期できるため、1台のマシンでジョブごとに異なるcheckerの値が必要になることはよくあります。S3のジョブはデフォルトのままにし、SFTPのジョブだけを下げましょう。

## Dry RunとJob Historyで効果を測定する

設定は一度に1つずつ変更します。Dry Runでジョブの範囲を確認してから同期を実行し、Job Historyを開きます。Job Historyには各実行のTime Spent、Status、ファイル数が記録されます。同じジョブを異なるcheckerの値で実行した2回分を比較すれば、変更が効果的だったかどうかがわかります。再試行設定（**Retry entire sync if fails**、デフォルト3）が何度も働く場合も、バックエンドがより少ない並列リクエストを求めているサインです。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Comparing sync run durations in RcloneView Job History after changing the checker count" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Job Managerを開き、低速なリモートを対象とする同期ジョブを編集します。
3. Step 2で**Number of equality checkers**を4に設定し、**Enable checksum**が必要かどうかを判断します。
4. ジョブを実行し、Job Historyで以前の実行とTime Spentやステータスを比較します。

数分の調整で、比較フェーズで止まっていた同期を着実に完了する同期に変えられます。

---

**関連ガイド：**

- [クラウド転送を高速化 — RcloneViewのマルチスレッドアップロードと並列ストリーム](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)
- [遅いクラウド転送を解決 — RcloneViewで同期とコピーを高速化する](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [RcloneViewによるチェックサム検証付きクラウド移行（Drive、Dropbox、S3、R2）](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
