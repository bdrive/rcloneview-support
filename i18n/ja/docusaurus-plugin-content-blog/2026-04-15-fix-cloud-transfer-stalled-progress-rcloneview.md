---
slug: fix-cloud-transfer-stalled-progress-rcloneview
title: "クラウド転送の進捗停止を修正 — RcloneViewでの解決方法"
authors:
  - tayson
description: "RcloneViewで停止・フリーズしたクラウド転送を修正 — 動かなくなった同期ジョブの診断、タイムアウトの解決、データを失わずに転送を再開する方法。"
keywords:
  - クラウド転送 停止
  - 同期 停止 修正
  - RcloneView 転送フリーズ
  - クラウドアップロード 停止
  - 同期停止の修正
  - rclone 転送タイムアウト
  - クラウドバックアップ 進まない
  - フリーズした転送の解決
  - クラウド転送 ハング
  - rclone タイムアウト復旧
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウド転送の進捗停止を修正 — RcloneViewでの解決方法

> 何時間も99%のまま表示される転送は、特定の根本原因を示しています — RcloneViewはその停止を診断し、データを失うことなくクリーンに再開するための監視・制御ツールを提供します。

完了間際でフリーズするクラウド転送や、終わらずに延々と実行され続ける同期ジョブは、クラウド管理における最も厄介な問題の一つです。転送の停止は通常、大きなファイルがAPIのタイムアウト制限に達したこと、rcloneのリトライロジックでは回復できないネットワークの中断、あるいは接続をハングさせるプロバイダー側のスロットリングが原因で発生します。RcloneViewは何が起きているかを可視化し、的確に介入できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 停止の診断

RcloneViewの下部Info Viewにある**Transferring**タブを開きます。このパネルには、転送速度、ファイル数、現在処理中の具体的なファイルなど、実行中のジョブのリアルタイムな進捗が表示されます。停止はここですぐに確認でき、特定のファイルの進捗が変化しない状態で速度が0 B/sまで低下します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView Transferring tab showing a stalled cloud transfer" class="img-large img-center" />

エラーメッセージについては**Log**タブに切り替えてください。停止のよくある原因は、タイムスタンプ付きでここに表示されます。
- **"too many requests"** — APIのレート制限が転送をスロットリングしている
- **"connection reset by peer"** — ネットワークの中断がアクティブなセッションを切断した
- **"EOF"**やタイムアウトメッセージ — 大きなファイルのアップロード中にプロバイダーが接続を閉じた

非常に大きなファイル(数GBの動画ファイル、データベースダンプなど)の場合、問題はマルチパートアップロードの組み立て中にプロバイダー側でセッションタイムアウトが発生していることがよくあります。アップロード自体は完了しているものの、完了したパーツが確認される前にプロバイダーのセッションが期限切れとなり、rcloneが無期限に待機してしまいます。

## 停止した転送の復旧

Transferringタブでアクティブなジョブの**Cancel**をクリックして、停止したジョブをキャンセルします。RcloneViewの同期・コピージョブは安全に再開できるよう設計されており、同じジョブを再実行すると、rcloneは転送先に既に存在するものを比較し、正常に転送済みのファイルをスキップします。停止していたファイル(と開始されていなかったファイル)のみが再試行されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Canceling and restarting a stalled transfer job in RcloneView" class="img-large img-center" />

S3互換バックエンドへの特定の大きなファイルで停止が繰り返し発生する場合は、RcloneViewのグローバルrcloneフラグ(Settings > Embedded Rclone > Global Rclone Flags)でチャンクサイズを増やしてください。`--s3-chunk-size 256M`を追加すると、大きなファイルの組み立てに必要なAPI呼び出しの総数を減らせます。

## 今後の停止を防ぐ

ジョブ設定のリトライ回数(Step 2: Advanced Settings > **Retry entire sync if fails**)を3回以上に設定してください。これにより、一時的なネットワーク問題が即座のジョブ失敗ではなく自動リトライを引き起こすようになります。低速または不安定な接続(VPN、モバイルホットスポットなど)での転送では、**Number of file transfers**(同時転送数)を減らすことで、回線上の競合を軽減できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing recovered transfers after stall resolution in RcloneView" class="img-large img-center" />

**Job History**タブでは、時間の経過に伴うパターンを確認できます。同じジョブが1日の特定の時間帯に一貫して停止する場合、原因はピーク時のプロバイダー側のレート制限である可能性が高いです。スケジュールをオフピーク時間帯に調整することで、設定変更なしにこの問題を解決できます。

## はじめに

1. **Transferringタブ**で転送を監視し、特定のファイルで速度が0 B/sになっていないか確認します。
2. **Logタブ**で根本原因(タイムアウト、レート制限、ネットワークリセット)を示すエラーメッセージを確認します。
3. ジョブをキャンセルして再開します — rcloneは完了済みファイルをスキップし、停止した箇所から再開します。
4. 今後の停止を防ぐため、Advanced Settingsでリトライ回数を増やし、チャンクサイズを調整します。

停止した転送はほぼ常に復旧可能です。重要なのは、原因がプロバイダー側なのか、ネットワーク側なのか、それとも設定に関するものなのかを見極め、的確な対処を行うことです。

---

**関連ガイド:**

- [RcloneViewで中断・失敗したクラウド転送を復旧する](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [クラウドアップロードの低速化を修正 — RcloneViewによる速度最適化](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [RcloneViewによるジョブ履歴と転送ログの監視](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
