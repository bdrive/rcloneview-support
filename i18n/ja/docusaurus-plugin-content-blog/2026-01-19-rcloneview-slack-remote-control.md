---
slug: rcloneview-slack-remote-control
title: "RcloneView Slackリモートコントロール:スマホからクラウドジョブを管理する"
authors:
  - steve
description: "セキュアなアプリとシンプルなスラッシュコマンドで、Slackから直接RcloneViewのジョブ通知を受け取り、開始・停止・確認ができます。"
keywords:
  - rcloneview slack
  - rclone slack bot
  - rclone remote control
  - rcloneview notifications
  - slack chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import RvCta from '@site/src/components/RvCta';

# RcloneView Slackリモートコントロール:スマホからクラウドジョブを管理する

> RcloneViewをChatOpsコンソールに変えましょう。ジョブの通知を受け取り、ジョブの一覧表示、開始・停止をSlackから行えます。PCから離れていても操作可能です。

Slackリモートコントロールを使うと、RcloneViewはジョブの開始・完了・エラーの通知をスマホに送信し、シンプルなスラッシュコマンドでジョブの実行や停止を受け付けます。長時間のバックアップや夜間の同期、リモートサーバーなど、モバイルから素早く操作したい場合に最適です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Slackからできること

- **リアルタイム通知**:ジョブの開始、完了、エラー発生時に即座に通知を受け取れます。
- **ジョブ一覧**:登録済みのRcloneViewジョブをすべて見やすい一覧で表示します。
- **リモートジョブコントロール**:名前またはインデックス(#N)でジョブを開始したり、即座に停止したりできます。
- **オンデマンドステータス確認**:進捗状況、転送速度、残り推定時間をいつでも確認できます。

*注:Slackコマンドを処理するには、RcloneViewがPCまたはサーバー上で実行されている必要があります。*

## 前提条件

- RcloneViewがインストールされ、実行されていること(デスクトップまたはヘッドレス)。
- Slackアカウントと自分専用のワークスペース。
- インターネット接続。

---

## ステップ1:Slackアプリを作成する(マニフェストを使用)

セキュリティを最大限確保するため、RcloneViewでは自分自身のボットを作成する「プライベートアプリ」方式を採用しています。これにより、データがサードパーティのサーバーを経由することなく、PCからSlackへ直接送信されます。

1. [Slack API Dashboard](https://api.slack.com/apps)にアクセスし、**[Create New App]**をクリックします。
   
2. **[From a manifest]**を選択します。
   
3. アプリをインストールしたい**Workspace**を選択し、**[Next]**をクリックします。
4. **[JSON]**タブを選択し、既存の内容を削除して、以下のコードを貼り付けます。

```json
{
    "display_information": {
        "name": "RcloneView",
        "description": "Effortlessly browse, organize, transfer files across your cloud storages.",
        "background_color": "#3f2f3f"
    },
    "features": {
        "bot_user": {
            "display_name": "RcloneView",
            "always_online": false
        },
        "slash_commands": [
            {
                "command": "/help",
                "description": "Show all commands",
                "should_escape": false
            },
            {
                "command": "/joblist",
                "description": "List jobs",
                "should_escape": false
            },
            {
                "command": "/start",
                "description": "Start a job (Enter number or name)",
                "usage_hint": "<#number> or <jobName>",
                "should_escape": false
            },
            {
                "command": "/stop",
                "description": "Stop a running job by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            },
            {
                "command": "/jobstatus",
                "description": "Check status by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            }
        ]
    },
    "oauth_config": {
        "scopes": {
            "bot": [
                "commands",
                "chat:write",
                "chat:write.public",
                "im:write",
                "app_mentions:read",
                "files:write"
            ]
        }
    },
    "settings": {
        "interactivity": {
            "is_enabled": true
        },
        "org_deploy_enabled": false,
        "socket_mode_enabled": true,
        "token_rotation_enabled": false
    }
}

```

5. **[Next]**をクリックし、続けて**[Create]**をクリックしてアプリの作成を完了します。

---

## ステップ2:トークンを取得する

RcloneViewの設定には2種類のトークンが必要です。**これらはパスワードと同様に扱い、決して他人と共有しないでください。**

### ① アプリトークンを取得する(ソケットモード用)

1. 左側のメニューから**[Basic Information]**に移動します。
2. 下にスクロールして**[App-Level Tokens]**セクションを見つけ、**[Generate Token and Scopes]**をクリックします。
3. 名前を`RcloneView`に設定し、**[Add Scope]**をクリックして`connections:write`を選択し、**[Generate]**をクリックします。
4. `xapp-...`で始まるトークンをコピーして保存します。

### ② ボットトークンを取得する(メッセージ送信用)

1. 左側のメニューから**[Install App]**に移動します。
2. 緑色の**[Install to Workspace]**ボタンをクリックし、**[Allow]**をクリックします。
3. `xoxb-...`で始まる**Bot User OAuth Token**をコピーして保存します。

---

### ステップ3:メッセージタブを有効にする

1. 左側のメニューで**App Home**をクリックします。
2. `Messages Tab`をオンにします。
3. `Allow users to send Slash commands and messages from the messages tab`にチェックを入れます。

これにより、ボットに直接スラッシュコマンドを送信できるようになります。

---

## ステップ4:メンバーIDを確認する

通知(DM)をどのユーザーに送るかを判断するために、ボットはあなた固有のIDを必要とします。

1. Slackアプリを開き、プロフィール画像をクリックして**[Profile]**を選択します。
2. **[More (···)]**ボタンをクリックします。
3. メニューの下部にある**[Copy member ID]**を選択します。(例:`U1234567890`)
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />


---

## ステップ5:RcloneViewでSlackコントロールを有効にする

1. RcloneViewを開き、**Settings -> Interfaces & Notifications**に移動します。
2. **Slack Remote Control**スイッチをオンにします。
3. **App Token**、**Bot Token**、**Member ID**をそれぞれのフィールドに入力します。
4. **[Send Test Message]**をクリックして、スマホにメッセージが届くか確認します。

---

## ⌨️ コマンドガイド(ChatOps)

ボットが存在するどのチャットでも、以下のコマンドを入力できます。

* `/help` - 利用可能なすべてのコマンドを表示します。
* `/joblist` - 現在の接続に登録されているすべてのジョブを一覧表示します。
* `/start <jobName>` - 正確な名前を指定してジョブを開始します。
* `/start #<number>` - `/joblist`のインデックスを使ってジョブを開始します(例:`/start #1`)。
* `/stop <JobId>` - Job IDを指定して実行中のジョブを停止します。
* `/jobstatus <JobId>` - 特定のジョブのリアルタイムの進捗と統計を確認します。

---

## セキュリティと管理のヒント

* **ユーザー識別**:設定されたMember IDのみがコマンドの実行を許可されます。
* **トークンのローテーション**:トークンが漏洩した場合は、すぐにSlack APIページにアクセスし、`Regenerate`をクリックしてください。
* **オフライン時の状態**:RcloneViewが実行されていない場合、Slackボットはコマンドに応答しません。

## 関連リソース

* [RcloneView基本ガイド](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
* [ジョブのスケジューリングと自動化](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
* [リアルタイム転送モニタリング](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## まとめ

Slackは、RcloneViewをモバイルコマンドセンターに変えます。通知を受け取りながら、ジョブを即座に開始・停止でき、障害にも素早く対応できます。一度設定すれば、トークンを安全に保管しておくだけで、デスクから離れていてもクラウド自動化を安心して管理できます。

<CloudSupportGrid />
