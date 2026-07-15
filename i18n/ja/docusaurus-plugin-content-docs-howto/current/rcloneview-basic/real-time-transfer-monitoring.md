---
sidebar_position: 11
description: RcloneViewのJob Monitorインターフェースで、同期・コピー・削除などの実行中および完了したファイル操作を追跡できます。
keywords:
  - rcloneview
  - Job Monitor
  - Transfer Log
  - Rclone API Logs
  - file transfer
  - sync progress
  - job logs
tags:
  - RcloneView
  - Job-Management
  - Monitoring
  - Transfer-log
  - Completed-log
  - API-log
  - Sync
date: 2025-06-22
author: Jay
---
# Job Monitor

RcloneViewは、同期・コピー・削除などの実行中および完了したファイル操作の状態を追跡・確認・管理できる**Job Monitor**インターフェースを提供します。このインターフェースは、3つの主要なタブで構成されています。

## Transferタブ - 実行中のジョブ

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="transfer log" class="img-medium img-center" />
このタブには、現在アクティブなすべてのファイル転送ジョブが表示されます。

**列:**
- **Job**: 操作の種類を示します(例: Sync、Copy、Delete)。
- **Source / Destination**: 転送元と転送先のパスを表示します。
- **Received Size**: 転送済みデータ量 / 合計サイズ。
- **Speed**: 現在の転送速度。
- **Progress**: 現在のジョブの進行状況を示すプログレスバー。
- **Percentage**: 転送完了率。
- **Time Left**: 残り時間の見積もり。
- **Job ID**: このジョブを参照するための内部ID。
- **Cancel**: ❌アイコンをクリックすると、進行中のジョブをキャンセルできます。

## Completedタブ - ジョブ履歴

<img src="/support/images/en/howto/rcloneview-basic/completed-log.png" alt="completed log" class="img-medium img-center" />
このタブには、これまでに実行されたすべてのジョブとその結果が一覧表示されます。

**列:**
- **Job**: 操作の種類(Sync、Copy、Deleteなど)。
- **Source / Destination**: 転送元と転送先のパス。
- **Status**: 結果のステータス(例: Success、Errors)。
- **Started At**: ジョブの開始時刻。
- **Time Spent**: ジョブの合計所要時間。
- **Files**: 転送されたファイル数。
- **Size**: 合計データサイズ。
- **Speed**: 平均転送速度。
- **Job ID**: 内部ジョブ参照ID。
- **Delete**: <img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> アイコンをクリックすると記録を削除できます。

## Logタブ - API通信ログ

<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="log tab" class="img-medium img-center" />

このタブには、RcloneViewとRclone API間の通信のバックエンドログが表示されます。

**列:**
- **Time**: 操作リクエストのタイムスタンプ。
- **Event Type**: ログレベル(例: INFO、ERROR)。
- **Job Type**: 操作の種類(Sync、Copy、Deleteなど)。
- **Message**: 操作の結果。
- **Details**: 追加の内部メタデータ(例: JSON形式のジョブID)。

このタブは、トラブルシューティングやシステムレベルのやり取りの確認に使用してください。

:::tip
- 各ジョブの記録は、**Job ID**によって各タブ間で関連付けられています。
- ログはリアルタイムで自動的に更新されます。
- CompletedタブとLogタブの履歴は、手動で削除しない限り、アプリケーションを再起動しても保持されます。
:::
