---
slug: email-smtp-job-notifications-rcloneview
title: "メールSMTPジョブ通知 — RcloneViewで同期状況を常に把握"
authors:
  - tayson
description: "RcloneView PLUSでメールSMTP通知を設定し、同期ジョブ完了アラートを受信、複数の受信者を設定し、無人バックアップジョブをメールで監視する方法。"
keywords:
  - RcloneView メール通知
  - SMTP 同期通知
  - クラウド同期 メールアラート
  - ジョブ通知 SMTP
  - バックアップ監視 メール
  - RcloneView PLUS 通知
  - 同期完了アラート
  - rclone メール通知
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# メールSMTPジョブ通知 — RcloneViewで同期状況を常に把握

> RcloneView PLUSでは、同期ジョブ完了時の直接SMTPメール通知を設定できるため、手動で確認しなくても、チームはバックアップの完了(または失敗)を常に把握できます。

クラウド同期やバックアップジョブをスケジュール実行することは、自動化の半分にすぎません。もう半分は、アプリケーションを開いてジョブ履歴を手動で確認しなくても結果を知ることです。RcloneView PLUSは直接SMTP設定によるメール通知に対応しており、ジョブが完了した瞬間に同期状況のメッセージを受信トレイに直接届けます。これにより、個人でもチームでも無人バックアップの監視が実用的になります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでのSMTP設定

メール通知を設定するには、RcloneViewの通知設定(PLUSライセンスで利用可能)を開きます。SMTPサーバーの詳細を入力してください。

- **SMTPホスト**: メールプロバイダーの送信メールサーバー(例: Gmailの場合は`smtp.gmail.com`、または組織のExchange/SMTPサーバー)。
- **ポート**: 通常はSTARTTLS(推奨)の場合はポート**587**、SSLの場合はポート465です。ポート25は多くのコンシューマー環境やクラウド環境でブロックされていることが多いため、避けてください。
- **認証**: メールのユーザー名とパスワード、またはアプリ専用パスワードを入力します。Gmailの場合、アカウントで2FAが有効になっている場合はアプリパスワードを使用してください。
- **送信元アドレス**: 通知メールに表示される送信者アドレス。

詳細を入力したら、**テスト**ボタンを使用してテストメールを送信し、本番の通知で使用する前にSMTP接続が機能することを確認してください。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring SMTP email notification settings in RcloneView PLUS" class="img-large img-center" />

## 受信者とジョブ単位の設定を追加する

SMTPをグローバルに設定したら、ジョブ単位で通知の受信者を追加できます。同期ジョブの設定を開き、そのジョブが完了したときに通知する1つ以上のメールアドレスを入力します。異なるジョブごとに異なる担当者に通知することができます。たとえば、財務書類のバックアップジョブは財務チームに通知し、メディア同期ジョブはコンテンツチームに通知する、といった具合です。

RcloneViewでは通知のしきい値も設定できます。たとえば、ジョブが設定可能なメガバイト数を超えて転送した場合のみメールを送信する、といった具合です。これは頻繁に実行され、変更がないまま完了することが多いジョブに便利です。実質的な変化があったときだけ通知を受け取ることで、アラート疲れを軽減できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting email notification recipients on a sync job in RcloneView" class="img-large img-center" />

## メール通知のユースケース

**無人バックアップの監視**が主なユースケースです。ローカルファイルをBackblaze B2へ毎晩バックアップするようスケジュールしている場合、自分のアドレス宛にメール通知を設定します。ネットワーク障害、認証情報の問題、またはディスクの容量不足でジョブが失敗した場合、復旧作業中に何週間も後になって問題を発見するのではなく、翌朝に失敗メールを受け取ることができます。

**チームでの状況共有**も同様に価値があります。共有クラウド同期ジョブが完了したとき(例えば、共有プロジェクトフォルダをAmazon S3へ週次同期する場合)、チーム全体に通知することで、誰もRcloneViewにログインすることなく同期が最新であることを確認できます。ジョブごとに異なる受信者に通知するよう設定できるため、担当領域に応じて適切な人に情報が届きます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and notification log in RcloneView PLUS" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**し、PLUSライセンスを有効化します。
2. **通知設定**を開き、SMTPホスト、ポート587、認証情報を入力します。
3. **テスト**をクリックしてテストメールを送信し、接続を確認します。
4. 各同期ジョブの設定を開き、通知先のメールアドレスを追加します。
5. 必要に応じて転送サイズのしきい値を設定し、重要なデータが移動したときのみ通知が発生するようにします。

RcloneView PLUSのメールSMTP通知は、自動バックアップ監視のループを完結させます。クラウド同期ジョブが正常に実行されているという安心感を得られ、正常に実行されていない場合はすぐにアラートを受け取ることができます。

---

**関連ガイド:**

- [RcloneViewによる同期完了の通知アラート](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [RcloneViewで毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneView Telegramリモートコントロール](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)

<CloudSupportGrid />
