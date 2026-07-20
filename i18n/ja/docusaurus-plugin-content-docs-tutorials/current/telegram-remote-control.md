---
sidebar_position: 9
description: "RcloneViewのTelegramリモートコントロールを使用して、ジョブ通知を受信し、Telegramからジョブの一覧表示・開始・停止・状態確認をリモートで行う方法。"
keywords:
  - rcloneview
  - telegram リモートコントロール
  - telegram ボット
  - ジョブ通知
  - リモートジョブ制御
  - rclone ジョブマネージャー
tags:
  - RcloneView
  - Tutorial
  - Telegram
  - Remote-Control
  - Job-Management
date: 2025-12-17
author: tayson
---

# RcloneView Telegramリモートコントロール

Telegramリモートコントロールを使用すると、PCの前に座っていなくても、RcloneViewのジョブ通知を受信し、Telegramから直接ジョブを制御できます。

このチュートリアルでは、以下について説明します。

- Telegramボットの作成（BotFather）
- Telegram Chat IDの確認方法
- RcloneViewでのTelegramリモートコントロールの有効化
- Telegramコマンドによるジョブの一覧表示・開始・停止・状態確認
- 実践例とセキュリティに関する注意事項

---

## Telegramリモートコントロールとは？

Telegramリモートコントロールは、RcloneViewに組み込まれた機能で、以下のことが可能です。

- ジョブの開始/完了/エラー通知の受信
- ジョブの一覧表示
- ジョブのリモート開始
- 実行中のジョブの停止
- ジョブの進行状況/ステータスの確認

RcloneViewが実行されていれば、スマートフォンだけでジョブを管理できます。

---

## 必要条件

- RcloneViewがインストールされ、実行されていること
- Telegramアカウント
- インターネット接続
- Telegramボットを作成する権限（BotFather経由）

---

## ステップ1 Telegramボットの作成（BotFather）

### ステップ1-1 BotFatherを開く

1. Telegramを開きます。
2. **BotFather** を検索します。
3. BotFatherのチャットを開きます。

<img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

### ステップ1-2 新しいボットを作成する

BotFatherを使用して新しいボットを作成し、以下を設定します。

- **ボット名**（表示名）
- **ボットユーザー名**（末尾は `bot` である必要があります）

例：

- ボット名: `RcloneView_test_bot`
- ボットユーザー名: `rcloneview_test_bot`

<img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

### ステップ1-3 ボットトークンを保存する（重要）

ボットが作成されると、BotFatherから次のようなトークンが発行されます。

```
123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

:::caution トークンは秘密に保管してください
このトークンはRcloneViewの設定に必要です。公開しないでください。
:::

<img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

---

## ステップ2 Telegramでボットを開始する（重要）

`getUpdates` でChat IDを取得する前に、必ずボットとのチャットを開始しておく必要があります。

### ステップ2-1 ボットを検索する

1. 名前またはユーザー名でボットを検索します。
2. ボットのチャットを開きます。

<img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

### ステップ2-2 Startを押してメッセージを送信する

1. **Start**（または `/start` を送信）をクリックします。
2. もう1つメッセージを送信します（例: `hi`）。

これにより、後でTelegramから読み取れる更新レコードが作成されます。

<img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

---

## ステップ3 Telegram Chat IDを確認する

### ステップ3-1 ブラウザでgetUpdatesを開く

このURLを開きます（ご自身のトークンに置き換えてください）。

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

### ステップ3-2 `chat.id` を確認する

JSONレスポンスの中から、以下を探します。

```json
"chat": {
  "id": 987654321
}
```

**Chat ID** は `chat.id` の数値です（例: `987654321`）。

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

---

## ステップ4 RcloneViewでTelegramリモートコントロールを有効にする

### ステップ4-1 設定を開く

1. RcloneViewを開きます。
2. **Settings** に移動します。
3. **Interfaces & Notifications** を選択します。
4. **Telegram Remote Control** を見つけます。

### ステップ4-2 有効化する

**Telegram Remote Control** を有効にします。

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

### ステップ4-3 トークンとChat IDを入力する

- **Telegram Bot Token**: BotFatherから取得したもの
- **Telegram Chat ID**: `getUpdates` から取得したもの

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

### ステップ4-4 テストメッセージを送信する

**Send Test Message** をクリックします。正常に動作すると、次のメッセージを受信します。
`RcloneView Telegram Test Message`

<img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

---

## ステップ5 Telegramコマンド（ジョブ制御）

ボットとのTelegramチャットで、以下のコマンドを入力します。

### `/help`

利用可能なすべてのコマンドを表示します。

```
/help
```

<img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

### `/listjobs`

現在選択されている接続のジョブを一覧表示します。

```
/listjobs
```

出力例：

```
Total: 3
1) Backup_Photos
2) Sync_Documents
3) Archive_To_NAS
```

<img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

### `/start <jobName>`

名前を指定してジョブを開始します。

```
/start Backup_Photos
```

:::note ジョブ名は正確に一致させる必要があります
正確なジョブ名をコピーするには `/listjobs` を使用してください。
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

### `/start #<number>`（推奨）

直近の `/listjobs` 結果の番号を指定してジョブを開始します。

```
/start #2
```

:::important 先に `/listjobs` を実行してください
番号は現在のジョブ一覧の出力に基づいています。
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

### `/stop <jobId>`

実行中のジョブを停止します。

```
/stop 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

### `/status <jobId>`

実行中のジョブの進行状況を表示します。

```
/status 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

---

## 自動ジョブ通知

Telegramリモートコントロールが有効な場合、RcloneViewは以下について自動的に通知を送信できます。

- ジョブの開始
- ジョブの正常完了
- ジョブのエラーによる失敗

<img src="/support/images/en/tutorials/telegram/telegram-job-notifications.jpg" alt="telegram job notifications" class="img-large img-center" />

---

## セキュリティに関する注意事項

- コマンドは設定された **Chat ID** からのみ処理されます。
- **Bot Token** はパスワードと同様に、非公開に保管してください。
- リモートコントロールを一時停止したい場合は、設定内のスイッチをオフにしてください。

---

## まとめ

Telegramリモートコントロールにより、長時間実行されるジョブでもRcloneViewをより簡単に操作できます。

- ジョブをリモートで管理
- リアルタイム通知で状況を把握
- PCを開かずにモバイルからジョブを制御

スケジュールされたバックアップ、同期、大容量の転送を実行する際、どこからでも状況を確認したい場合にお試しください。
