---
slug: job-history-transfer-logs-monitoring-rcloneview
title: "ジョブ履歴と転送ログでクラウド転送を追跡 — RcloneViewですべての同期とバックアップを監視"
authors:
  - tayson
description: "RcloneViewのジョブ履歴と転送ログで、すべてのクラウド同期・コピー・バックアップジョブを追跡しましょう。成功、失敗、パフォーマンスを長期的に監視できます。"
keywords:
  - cloud transfer history
  - sync job log
  - cloud backup monitoring
  - transfer log cloud
  - rclone job history
  - cloud sync monitoring
  - backup job tracking
  - cloud transfer status
  - rclone transfer log
  - cloud job monitoring tool
tags:
  - RcloneView
  - monitoring
  - job-history
  - feature
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ジョブ履歴と転送ログでクラウド転送を追跡 — RcloneViewですべての同期とバックアップを監視

> 先週バックアップをスケジュールしましたね。実際に実行されましたか？正常に完了しましたか？何ファイル転送されましたか？ジョブ履歴がなければ、それは推測にすぎません。RcloneViewなら、すべてのジョブに記録が残ります。

クラウド同期を設定するのは最初のステップです。それが確実に機能していることを知るのは2番目のステップであり、おそらくより重要です。RcloneViewのジョブ履歴は、すべての実行を記録します — いつ実行されたか、どれくらい時間がかかったか、何ファイル転送されたか、エラーが発生したかどうか。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ジョブ履歴が重要な理由

### サイレント障害

最悪のバックアップ障害は、あなたが気づかないものです。よくあるサイレント問題:

- **OAuthトークンの期限切れ** — クラウドプロバイダーがアクセスを取り消し、ジョブが静かに失敗する。
- **ディスク容量不足** — 転送先の空き容量が転送中になくなる。
- **レート制限** — プロバイダーが転送をスロットリングし、一部のファイルがスキップされる。
- **ネットワークタイムアウト** — 断続的な接続不良により転送が一部だけ完了する。

ジョブ履歴がなければ、こうした問題は復元が必要になるまで気づかれません — そしてその時になって、あなたの「バックアップ」が数ヶ月前のものだと発覚するのです。

### コンプライアンスと監査

一部の業界では、バックアップが実行されたことを証明する文書が必要です。ジョブ履歴は以下を提供します:

- すべてのジョブ実行のタイムスタンプ。
- ファイル数と転送量。
- 成功/失敗のステータス。
- トラブルシューティング用のエラー詳細。

## RcloneViewのジョブ履歴

### 過去の実行履歴を表示

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view" class="img-large img-center" />

各エントリには以下が表示されます:

- **ジョブ名** — どの同期/コピー/移動ジョブが実行されたか。
- **開始時刻** — 実行がいつ開始されたか。
- **所要時間** — どれくらい時間がかかったか。
- **ステータス** — 成功、部分的成功、または失敗。
- **転送ファイル数** — 移動されたファイル数。
- **データ量** — 転送された合計バイト数。
- **エラー** — エラー数（存在する場合）。

### 傾向を把握する

時間の経過とともに、ジョブ履歴はパターンを明らかにします:

- **所要時間の増加** — データセットが増大している、またはパフォーマンスが低下している。
- **断続的な失敗** — 特定の日にネットワークまたはプロバイダーの問題が発生している。
- **転送ゼロ** — 変更がなかった（増分同期では想定内）、またはジョブが正しく動作していない。
- **エラーの急増** — レート制限、権限の問題、ストレージ容量不足。

## リアルタイム転送監視

ジョブの実行中は、進行状況をリアルタイムで監視できます:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring" class="img-large img-center" />

ライブモニタリングでは以下が表示されます:

- **現在の速度** — MB/sまたはGB/s。
- **アクティブな転送** — 並行して実行中のファイル操作数。
- **進捗** — 完了率。
- **ETA** — 残り推定時間。
- **エラー** — リアルタイムのエラー数。

## 失敗時の通知

v1.3ではSlack、Discord、Telegramへの通知が追加されました。以下のタイミングで即座に把握できるようアラートを設定できます:

- スケジュールされたジョブが失敗したとき。
- ジョブがエラー付きで完了したとき。
- ジョブが正常に完了したとき（任意の確認通知）。

これは「たぶんバックアップは実行された」と「確実にバックアップが実行された — Slackメッセージで確認した」の違いです。

## ログによるトラブルシューティング

ジョブが失敗したとき、転送ログはその正確な理由を教えてくれます:

- **403 Forbidden** — レート制限または権限の問題。
- **404 Not Found** — 転送中にソースファイルが削除された。
- **429 Too Many Requests** — プロバイダーによるスロットリング。
- **Timeout** — ネットワーク接続の問題。
- **Disk full** — 転送先の容量不足。

## ベストプラクティス

### 毎週ジョブ履歴を確認する

毎週月曜日に2分間かけて、過去1週間のジョブ実行を確認しましょう。問題が深刻化する前に発見できます。

### 失敗アラートを設定する

手動確認に頼らないでください。ジョブ失敗時にSlackまたはDiscordの通知を設定しましょう。

### エラー後に検証する

ジョブがエラーを報告したときは、フォルダ比較を使って、どのファイルが欠落または異なっているかを正確に特定しましょう:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify after job errors" class="img-large img-center" />

### 失敗した転送を再試行する

v1.3のリトライ機能は、失敗したファイル転送を自動的に再実行できます。失敗が繰り返される場合は、ログを使って根本原因を調査してください。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**する。
2. **同期/バックアップジョブを作成・スケジュール**する。
3. ジョブ履歴で**実行を監視**する。
4. 失敗アラート用に**通知を設定**する。
5. **毎週確認する** — 信頼しつつも検証する。

監視していないバックアップは、信頼できないバックアップです。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
