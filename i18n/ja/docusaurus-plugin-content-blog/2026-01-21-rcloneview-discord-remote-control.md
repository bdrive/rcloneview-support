---
slug: rcloneview-discord-remote-control
title: "RcloneView Discord リモートコントロール: Discordからクラウドジョブを管理する"
authors:
  - steve
description: "自分専用の安全なボット、Application ID、Discord User IDを使って、Discordでジョブアラートを受け取り、RcloneViewのコマンドを実行しましょう。"
keywords:
  - rcloneview discord
  - rclone discord bot
  - rclone remote control
  - rcloneview notifications
  - discord chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import RvCta from '@site/src/components/RvCta';

# RcloneView Discord リモートコントロール: Discordからクラウドジョブを管理する

> RcloneViewをDiscordのチャットオプスコンソールに変える: ジョブアラートを受け取り、ジョブの一覧を表示し、PCを開かずにDiscordから開始・停止できます。

Discordリモートコントロールを使うと、RcloneViewはジョブの開始・完了・エラーのアラートをあなたに送信し、シンプルなコマンドでジョブの実行や停止を受け付けます。長時間のバックアップや夜間の同期、そしてデスクトップやモバイルのDiscordから素早くコントロールしたいリモートサーバーに最適です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Discordからできること

- **リアルタイム通知**: ジョブが開始・完了・エラーになった際に即座に通知を受け取れます。
- **ジョブ一覧**: 登録済みのRcloneViewジョブをすべて見やすい一覧で表示します。
- **リモートジョブコントロール**: 名前またはインデックス（#N）でジョブを開始したり、即座に停止したりできます。
- **オンデマンドステータス**: 進捗、転送速度、推定残り時間をいつでも確認できます。

*注: DiscordのコマンドをRcloneViewが処理するには、PCまたはサーバーでRcloneViewが起動している必要があります。*

## 前提条件

- RcloneViewがインストールされ、起動していること（デスクトップまたはヘッドレス）。
- Discordアカウント。
- ボットをインストールできるDiscordサーバー（Guild Install）。
- インターネット接続。

---

## ステップ1: Discord ApplicationとBotを作成する

セキュリティを最大限確保するため、RcloneViewは「自分専用のボットを持ち込む（bring your own bot）」方式を採用しています。データはRcloneViewとDiscordの間を直接やり取りし、サードパーティのリレーは介在しません。

1. [Discord Developer Portal](https://discord.com/developers/applications)にアクセスし、**New Application**をクリックします。名前を付けます（例: `RcloneView`）。
2. **Installation**を開き、Installation Contextとして**Guild Install**を選択し（User Installが有効な場合はオフにします）、保存します。
3. **Bot**タブを開き、**Add Bot**をクリックし、**Discord Bot Token**をコピーまたはリセットして取得します。これは秘密にしてください。
4. スラッシュコマンドだけでなくプレーンテキストコマンドを送信する予定がある場合は、Botタブで**MESSAGE CONTENT INTENT**を有効にし、RcloneViewがコマンドテキストを読み取れるようにします。

---

## ステップ2: サーバーを作成し、ボットをインストールする

ボットを使用するには、ボットが存在できるDiscordサーバー（「Guild」とも呼ばれます）が必要です。RcloneViewのログ用の専用サーバーがまだない場合は、以下の手順に従ってください。

### ステップ2-1 新しいDiscordサーバーを作成する

1. **Discordアプリ**を開きます（デスクトップまたはWeb）。
2. 左側のサーバー一覧の下部にある**プラス（+）アイコン**（サーバーを追加）をクリックします。
3. **Create My Own**を選択します。
4. **For me and my friends**を選択します。
5. サーバー名を入力し（例: `RcloneView Control Center`）、**Create**をクリックします。
   

### ステップ2-2 ボットをサーバーにインストールする

1. **Discord Developer Portal**に戻ります。
2. **OAuth2 > URL Generator**を開きます。
3. スコープとして**bot**と**applications.commands**を選択します。
4. **Bot Permissions**で**Send Messages**、**Use Slash Commands**、そして（ログファイルを受け取りたい場合は）**Attach Files**を選択します。
5. 下部に生成されたURLをコピーし、ブラウザに貼り付けます。
6. 先ほど作成したサーバー（例: `RcloneView Control Center`）を選択し、**Authorize**をクリックします。

---

## ステップ3: RcloneViewに必要な値を集める

- **Discord Bot Token**: **Bot**タブから取得（ステップ1-3）。
- **Discord Application ID**: Developer Portalの**General Information**から取得。
- **My Discord User ID (Snowflake)**: あなたを一意に識別する長い数値ID。

### Discord User IDの取得方法

1. Discord（デスクトップまたはWeb）で**User Settings**（⚙️）を開きます。
2. **Advanced**に移動し、**Developer Mode**をオンに切り替えます。
3. **プロフィール画像**または**ユーザー名**（左下またはメンバーリスト内）を右クリックし、**Copy User ID**を選択します。表示された数値を保存してください（例: `123456789012345678`）。

なぜこのIDが必要なのか?

- **セキュリティ**: あなたのアカウントからのコマンドのみがアプリによって処理されます。
- **ダイレクト通知**: ジョブの開始や失敗時に、ボットがDMを送るべきユーザーを正確に把握できます。

---

## ステップ4: RcloneViewでDiscordコントロールを有効にする

1. RcloneViewを開き、**Settings -> Interfaces & Notifications**に移動します。
2. **Discord Remote Control**スイッチをオンにします。
3. **Discord Bot Token**、**Discord Application ID**、**My Discord User ID**を各フィールドに入力します。
4. **Send Test Message**をクリックし、ボットからDMが届くことを確認します。

---

## ⌨️ コマンドガイド（ChatOps）

ボットにコマンドを送信します（プライバシーのためDM推奨。ボットにアクセス権があればチャンネルでも動作します）:

- `/help` — 利用可能なすべてのコマンドを表示します。
- `/joblist` — 現在の接続に登録されているすべてのジョブを一覧表示します。
- `/start <jobName>` — ジョブを正確な名前で開始します。
- `/start #<number>` — `/joblist`のインデックスを使ってジョブを開始します（例: `/start #1`）。
- `/stop <JobId>` — Job IDを使って実行中のジョブを停止します。
- `/jobstatus <JobId>` — 特定のジョブのリアルタイム進捗と統計情報を確認します。

---

## セキュリティと管理のヒント

- **ユーザー識別**: 設定されたDiscord User IDのみがコマンドを実行できます。
- **トークンの安全性**: Bot TokenとApplication IDはパスワードと同様に扱ってください。漏洩した場合はリセットしてください。
- **オンラインステータス**: RcloneViewが起動していない場合、Discordボットはコマンドに応答しません。

## 関連リソース

- [RcloneView 基本ガイド](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
- [ジョブのスケジューリングと自動化](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
- [リアルタイム転送モニタリング](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## まとめ

Discordを使えば、RcloneViewはモバイルコマンドセンターになります。通知を常に受け取り、ジョブを即座に開始・停止でき、障害にも素早く対応できます。一度セットアップしてトークンを安全に保管すれば、デスクから離れていても自信を持ってクラウド自動化を管理できます。

<CloudSupportGrid />
