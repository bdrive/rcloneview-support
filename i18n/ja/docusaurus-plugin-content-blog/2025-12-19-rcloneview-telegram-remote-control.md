---
slug: rcloneview-telegram-remote-control
title: "RcloneView Telegramリモートコントロール: スマホからクラウドジョブを管理"
authors:
  - tayson
description: "セキュアなボットと簡単なコマンドで、Telegramから直接ジョブの即時アラートを受け取り、RcloneViewのジョブを開始・停止・確認できます。"
keywords:
  - rcloneview telegram
  - rclone telegram bot
  - rclone remote control
  - rcloneview notifications
  - mobile job control
  - rclone chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
  - rclone cli telegram
tags:
  - job-management
  - security
  - automation
---


import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Telegramリモートコントロール: スマホからクラウドジョブを管理

> RcloneViewをチャットオプス・コンソールに変えましょう。ジョブのアラートを受け取り、ジョブ一覧を確認し、PCから離れていてもTelegramから開始・停止できます。

Telegramリモートコントロールを使うと、RcloneViewはジョブの開始・完了・エラーアラートをスマホに送信し、簡単なチャットコマンドでジョブの実行や停止を受け付けます。長時間のバックアップや夜間の同期、ヘッドレスサーバーで手早く制御したい場合に最適です。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Telegramでできること

- 通知の受信: ジョブ開始、ジョブ完了、ジョブエラー。
- 利用可能なジョブの一覧表示。
- 名前またはインデックスによるジョブの開始。
- 実行中のジョブの停止。
- ジョブの進捗とステータスをオンデマンドで確認。

Telegramコマンドを処理するには、RcloneViewが実行されている必要があります(デスクトップまたはヘッドレス)。

## 前提条件

- RcloneViewがインストールされ、実行中であること。
- Telegramアカウント。
- インターネット接続。
- Telegramボットを作成する権限(BotFather経由)。

## Telegramボットを作成する(BotFather)

1. Telegramを開いて**BotFather**を検索し、チャットを開きます。  
   <img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

2. ボットを作成します: **Bot Name**と、末尾が`bot`で終わる**Bot Username**を設定します。  
   例: `RcloneView_test_bot` / `rcloneview_test_bot`。  
   <img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

3. BotFatherに表示される**Bot Token**をコピーします。これは秘密情報として扱ってください。RcloneViewのセットアップに必要です。  
   <img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

## ボットを開始する(重要)

Telegramがチャットの更新情報を返せるように、一度ボットを開始しておく必要があります。

1. 名前またはユーザー名でボットを検索し、チャットを開きます。  
   <img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

2. **Start**をタップ(または`/start`を送信)した後、さらにもう1件メッセージを送信します(例: `hi`)。  
   <img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

## TelegramチャットIDを確認する

1. ブラウザで以下を開きます。  
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

2. JSONレスポンス内の`chat.id`の数値をメモします(例: `987654321`)。これがあなたのチャットIDです。  
   <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

:::caution トークンは非公開に保ってください
Bot TokenとChat IDはパスワードと同様に扱ってください。設定されたChat IDのみがジョブを制御できます。
:::

## RcloneViewでTelegramリモートコントロールを有効にする

1. **Settings -> Interfaces & Notifications**を開きます。
2. **Telegram Remote Control**をオンにします。  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

3. **Bot Token**と**Chat ID**を入力します。  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

4. **Send Test Message**をクリックします。`RcloneView Telegram Test Message`というメッセージが届くはずです。  
   <img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

## コマンドガイド(ジョブ用チャットオプス)

ボットのチャットで以下を使用します。

- `/help` - すべてのコマンドを表示します。  
  <img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

- `/listjobs` - 現在の接続のジョブ一覧を表示します。  
  <img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

- `/start <jobName>` - 正確な名前でジョブを開始します。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

- `/start #<n>`(推奨) - 直近の`/listjobs`のリストインデックスで開始します。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

- `/stop <jobId>` - 実行中のジョブを停止します。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

- `/status <jobId>` - 進捗と転送済みサイズを確認します。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

## 自動化にとって重要な理由

- 夜間や長時間の転送: アラートを受け取り、マシンにVPN接続せずに再開・停止できます。
- スケジュールされたバックアップ: 成功・失敗を即座に確認し、スマホから再実行できます。
- マルチクラウドジョブ: コンソールの前にいなくても、統合された制御タワーを維持できます。
- 迅速なインシデント対応: 暴走したジョブを停止したり、再スケジュールしたり、別のプリセットに素早く切り替えたりできます。

## セキュリティに関するヒント

- 設定されたChat IDのみがコマンドを実行できます。
- Bot Tokenが漏洩した場合はローテーションしてください。
- 一時的にリモートコマンドが不要な場合は、設定でTelegramリモートコントロールを無効にしてください。

## 関連リソース

- [Telegramリモートコントロールの使い方(チュートリアル)](https://rcloneview.com/support/tutorials/telegram-remote-control)
- [ジョブの作成と管理](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブの実行と管理](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [内蔵ターミナルを使う](https://rcloneview.com/support/tutorials/rcloneview-terminal-rclone-cli-inside-gui) <!-- replace with actual link if different -->

## まとめ

Telegramは、RcloneViewをモバイルコマンドセンターに変えます。常に通知を受け取り、ジョブを即座に開始・停止でき、障害への対応も迅速になります。一度設定してトークンを安全に保管すれば、デスクから離れていてもクラウド自動化を安心して運用できます。

<CloudSupportGrid />
