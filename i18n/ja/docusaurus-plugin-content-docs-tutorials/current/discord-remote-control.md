---
sidebar_position: 11
description: "RcloneViewのDiscordリモートコントロールを使用して、ジョブ通知を受け取り、Discordからジョブの一覧表示、開始、停止、ステータス確認をリモートで行う方法。"
keywords:
  - rcloneview
  - discord remote control
  - discord bot
  - job notifications
  - remote job control
  - rclone job manager
tags:
  - RcloneView
  - Tutorial
  - Discord
  - Remote-Control
  - Job-Management
date: 2026-01-20
author: steve
---

# RcloneView Discordリモートコントロール

Discordリモートコントロールを使用すると、PCの前に座ることなく、RcloneViewのジョブ通知を受け取り、Discordから直接ジョブを制御できます。

このチュートリアルでは、以下について説明します。

- Discordアプリケーションとボットの作成
- インストールコンテキストを**Guild Install**に設定
- 必要なID(ボットトークン、アプリケーションID、Discordユーザー ID)の取得
- RcloneViewでDiscordリモートコントロールを有効化
- Discordコマンドを使用したジョブの一覧表示/開始/停止とステータス確認

---

## Discordリモートコントロールとは?

Discordリモートコントロールは、RcloneViewに組み込まれた機能で、以下のことが可能です。

- ジョブの開始、完了、エラーのリアルタイム通知の受信
- 登録済みジョブの一覧表示
- ジョブのリモート開始
- 実行中ジョブの停止
- ジョブの進行状況とステータスのオンデマンド確認

RcloneViewが実行されている限り、Discordクライアントからクラウドジョブを管理できます。

---

## 必要条件

- RcloneViewがインストールされ、実行中であること(デスクトップまたはヘッドレス)
- Discordアカウント
- サーバーにDiscordボットを作成・インストールする権限(Guild Install)
- インターネット接続

---

## ステップ1: Discordアプリケーションとボットを作成する

### ステップ1-1 Discord Developer Portalを開く

1. [Discord Developer Portal](https://discord.com/developers/applications)にアクセスします。
2. **New Application**をクリックし、名前を付けます(例: `RcloneView`)。
   <img src="/support/images/en/tutorials/discord/discord-new-application.png" class="img-large img-center" />

### ステップ1-2 インストールコンテキストをGuild Installに設定する

1. 左側のメニューで**Installation**を開きます。
2. **Installation Contexts**で**Guild Install**を選択します。(User Installが有効な場合は無効にしてください。)
3. 変更を保存します。
   <img src="/support/images/en/tutorials/discord/discord-installation-context.png" class="img-large img-center" />

### ステップ1-3 ボットを追加してボットトークンを発行する

1. **Bot**タブを開きます。
2. **Add Bot**をクリックして確認します。
3. **Reset Token**(または**Copy Token**)をクリックして**Discordボットトークン**を取得します。これは秘密に保管してください。
   <img src="/support/images/en/tutorials/discord/discord-bot-token.png" class="img-large img-center" />

### ステップ1-4 ボットにメッセージの読み取りを許可する(推奨)

スラッシュコマンドではなくテキストコマンドを送信する予定がある場合は、Botタブで**MESSAGE CONTENT INTENT**を有効にし、RcloneViewがDMやチャンネル内のコマンドテキストを読み取れるようにしてください。
   <img src="/support/images/en/tutorials/discord/discord-privileged-intent.png" class="img-large img-center" />

---

## ステップ2: サーバーを作成してボットをインストールする

ボットを使用するには、ボットが動作するDiscordサーバー(「ギルド」とも呼ばれます)が必要です。RcloneViewのログ用のプライベートサーバーをまだお持ちでない場合は、以下の手順に従ってください。

### ステップ2-1 新しいDiscordサーバーを作成する

1. **Discordアプリ**(デスクトップまたはWeb)を開きます。
2. 左側のサーバー一覧の下部にある**プラス(+)アイコン**(Add a Server)をクリックします。
3. **Create My Own**を選択します。
4. **For me and my friends**を選択します。
5. サーバーに名前を付け(例: `RcloneView Control Center`)、**Create**をクリックします。
   

### ステップ2-2 ボットをサーバーにインストールする

1. **Discord Developer Portal**に戻ります。
2. **OAuth2 > URL Generator**を開きます。
3. スコープとして**bot**と**applications.commands**を選択します。
4. **Bot Permissions**で、**Send Messages**、**Use Slash Commands**、そして(ログファイルを受け取りたい場合は)**Attach Files**を選択します。
5. 下部に生成されたURLをコピーし、ブラウザに貼り付けます。
6. 先ほど作成したサーバー(例: `RcloneView Control Center`)を選択し、**Authorize**をクリックします。

---

## ステップ3: RcloneViewに必要な値を収集する

- **Discordボットトークン**: **Bot**タブから取得(ステップ1-3)。
- **Discordアプリケーション ID**: Developer Portalの**General Information**から取得。
- **自分のDiscordユーザー ID(Snowflake)**: あなたを一意に識別する長い数値。

### Discordユーザー IDの取得方法

`Discordユーザー ID`を取得するには、まず開発者モードを有効にします。

1. Discord(デスクトップまたはWeb)を開きます。
2. 左下の**User Settings**(⚙️)をクリックします。
3. **App Settings**で**Advanced**を開きます。
4. **Developer Mode**を**On**に切り替えます。

続いてIDをコピーします。

1. **プロフィール写真**または**ユーザー名**(左下、またはチャット/メンバー一覧内)を右クリックします。
2. **Copy User ID**をクリックします。
3. 長い数値文字列を保存します(例: `123456789012345678`)。
   <img src="/support/images/en/tutorials/discord/discord-copy-userid.png" class="img-large img-center" />

このIDが必要な理由

- セキュリティ: あなたのアカウントからのコマンドのみがFlutterアプリによって処理されます。
- ダイレクト通知: ジョブが開始または失敗したときに、ボットがどのユーザーにDMを送信すべきかを正確に把握できます。

---

## ステップ4: RcloneViewでDiscordリモートコントロールを有効化する

### ステップ4-1 設定を開く

1. RcloneViewを起動します。
2. **Settings** -> **Interfaces & Notifications**に移動します。

### ステップ4-2 認証情報を入力する

1. **Discord Remote Control**をオンに切り替えます。
2. 以下を入力します。
   - **Discordボットトークン**: `...`
   - **Discordアプリケーション ID**: **General Information**から取得。
   - **自分のDiscordユーザー ID**: `123456789012345678`

### ステップ4-3 テストメッセージを送信する

**Send Test Message**をクリックします。成功すると、Discordでボットからのダイレクトメッセージを受信します。
   <img src="/support/images/en/tutorials/discord/discord-test-message-received.png" class="img-large img-center" />

---

## ステップ5: Discordコマンド(ジョブ制御)

ボットにコマンドを送信します(プライバシーのためDMが推奨されますが、ボットが存在し、あなたに実行権限があるチャンネルでも使用できます)。

### `/help`

利用可能なすべてのコマンドを表示します。

### `/joblist`

現在選択されている接続のジョブを一覧表示します。

### `/start <jobName>`

名前を指定して特定のジョブを開始します。

### `/start #<number>`(推奨)

最新の`/joblist`結果のインデックスを使用してジョブを開始します(例: `/start #1`)。

### `/stop <JobId>`

実行中のジョブを停止します。

### `/jobstatus <JobId>`

特定のジョブのリアルタイムの進行状況と統計を確認します。

---

## 自動ジョブ通知

有効にすると、RcloneViewは以下について自動的に通知を送信します。

- ジョブの開始
- ジョブの正常な完了
- エラーによるジョブの失敗

---

## セキュリティに関する注意事項

- コマンドは、設定された**Discordユーザー ID**からのものである場合にのみ処理されます。
- **Discordボットトークン**と**アプリケーションID**は非公開にしてください。
- リモートコントロールを一時停止する必要がある場合は、設定でトグルをオフにするだけです。

---

## まとめ

Discordリモートコントロールを使用すると、PCの前にいなくても長時間の転送を操作できます。

- Discordからのリモートジョブ管理
- 通知によるリアルタイムのステータス更新
- モバイルまたはデスクトップのDiscordによる即座の制御

一度設定すれば、どこからでもクラウド自動化を管理できます。
