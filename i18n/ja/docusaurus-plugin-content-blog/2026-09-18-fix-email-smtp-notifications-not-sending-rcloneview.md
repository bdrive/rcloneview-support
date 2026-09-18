---
slug: fix-email-smtp-notifications-not-sending-rcloneview
title: "メール SMTP 通知が送信されない問題を修正 — RcloneView トラブルシューティングガイド"
authors:
  - morgan
description: "送信されない RcloneView のメール SMTP 通知を修正します。ジョブアラートのポートブロック、認証エラー、しきい値の設定ミスを解決します。"
keywords:
  - RcloneView メール通知 修正
  - SMTP 通知が送信されない
  - RcloneView メールアラートエラー
  - SMTP 認証失敗
  - 同期ジョブ通知 トラブルシューティング
  - ポート587 ブロック SMTP
  - バックアップアラート未受信
  - RcloneView PLUS 通知
tags:
  - RcloneView
  - troubleshooting
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# メール SMTP 通知が送信されない問題を修正 — RcloneView トラブルシューティングガイド

> RcloneViewのメール通知が届かなくなった場合、原因はほぼ常にSMTP設定、ポートのブロック、または高すぎる転送しきい値です — それぞれを診断して修正する方法を解説します。

メールアラートは実際に届いて初めて役立ちます。スケジュールされたバックアップが静かに失敗し、通知が受信トレイに届かない場合、無人監視の意味そのものが失われます。RcloneViewのSMTP通知システムは、間違えやすいいくつかの設定に依存しており、このガイドではジョブアラートが再び確実に機能するように、最も一般的な失敗ポイントを解説します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 認証とホストのエラー

無音の通知失敗の最も多い原因は、SMTP認証の誤りです。メールプロバイダーがアプリ専用パスワードを要求する場合(二要素認証が有効なGmailやMicrosoft 365アカウントで一般的)、通常のアカウントパスワードを入力すると、フィールドが明確なエラーなくその値を受け付けても接続に失敗します。プロバイダーのセキュリティ設定からアプリパスワードを生成し、代わりに使用してください。

**SMTPホスト**フィールドも再確認してください — `smtp.gmial.com`のようなタイプミスや、SMTPホストの代わりにプロバイダーのIMAPホストを使用すると接続が失敗します。認証情報を修正した後は、実際のジョブに設定を使用する前に必ず**テスト**ボタンを使用してください。これにより認証の問題とジョブレベルの設定の問題を切り分けられます。

<img src="/support/images/en/blog/new-remote.png" alt="Testing SMTP authentication settings in RcloneView notification configuration" class="img-large img-center" />

## ポートのブロックとネットワークの問題

RcloneViewはSMTP配信にSTARTTLSを使用する**ポート587**を推奨しています。送信を制限するファイアウォールルールを持つネットワーク(企業ネットワーク、一部のVPSプロバイダー、特定の住宅用ISPで一般的)でRcloneViewを実行している場合、ポート587(特にポート25)が完全にブロックされ、明確なエラーではなくテストメールがタイムアウトすることがあります。

テストが認証エラーを返す代わりに一貫してタイムアウトする場合、問題はほぼ間違いなく認証情報レベルではなくネットワークレベルです。プロバイダーが対応していればポート465(SSL)への切り替えを試すか、ネットワーク管理者にアウトバウンドSMTPトラフィックが許可されているか確認してください。リモートサーバーやDockerコンテナ上の外部rcloneインスタンスに接続している場合、接続は実際にrcloneが実行されている場所から発信されるため、そのサーバーのアウトバウンドルールもSMTPトラフィックを許可しているか確認してください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Reviewing job notification settings after an SMTP connection failure" class="img-large img-center" />

## しきい値と受信者の設定ミス

SMTPが接続してテストが成功するのに、実際のジョブの通知が届かない場合は、ジョブレベルの通知しきい値を確認してください。RcloneViewでは通知が送信される前の最小転送サイズ(MBまたはGB単位)を設定できます — これは頻繁に実行され、データ移動がほとんどないジョブでアラート疲れを軽減するのに役立ちますが、逆に数ファイルしか転送しないジョブはしきい値を下回り、メールがまったく生成されないことがあります。これが原因かどうかを確認するために、一時的にしきい値を下げるか削除してください。

グローバルSMTP設定だけでなく、ジョブレベルでも受信者アドレスが正しく入力されているか確認してください — RcloneViewは通知の受信者をジョブごとに設定する必要があり、特定のジョブに受信者が割り当てられていないと、グローバルには正常に動作しているSMTP接続でもそのジョブのアラートは送信されません。メール通知はPLUSライセンスの機能なので、SMTP、受信者、しきい値がすべて問題ないのにアラートが届かない場合は、さらにトラブルシューティングする前にライセンスのレベルを確認してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history and notification recipients for a completed sync job" class="img-large img-center" />

## はじめに

1. まだダウンロードしていない場合は[rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**し、通知設定を開きます。
2. プロバイダーがアプリ専用パスワードを要求する場合はそれを使用してSMTP認証情報を再入力し、**テスト**をクリックします。
3. テストがタイムアウトする場合は、ポート587からポート465に切り替えるか、アウトバウンドSMTPをブロックしているファイアウォールルールを確認します。
4. 各ジョブの通知しきい値と受信者リストが想定通りに設定されているか確認します。

SMTP認証情報、ネットワークアクセス、ジョブレベルの設定がすべて確認できれば、メール通知はバックグラウンドで実行されるすべてのスケジュール同期にとって信頼できる安全網になります。

---

**関連ガイド:**

- [メールSMTPジョブ通知 — RcloneViewで同期状況を常に把握](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)
- [RcloneViewでクラウド同期の通知とアラートを設定する](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [スケジュール同期が実行されない問題を解決 — RcloneViewの自動クラウドジョブをトラブルシューティング](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
