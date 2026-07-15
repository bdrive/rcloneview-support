---
slug: fix-oauth-token-expired-cloud-sync-rcloneview
title: "OAuthトークン期限切れエラーを修正 — RcloneViewでクラウドアカウントを再認証する"
authors:
  - tayson
description: "スケジュールされたバックアップが動作しなくなったのは、OAuthトークンの有効期限が切れたためです。RcloneViewでGoogle Drive、OneDrive、Dropbox、その他のOAuthプロバイダーの期限切れトークンを診断・修正する方法を紹介します。"
keywords:
  - oauth token expired
  - rclone token expired
  - google drive token refresh
  - onedrive oauth expired
  - fix cloud auth error
  - rclone re-authorize
  - cloud sync authentication
  - oauth refresh token
  - fix cloud connection
  - rcloneview re-auth
tags:
  - RcloneView
  - troubleshooting
  - cloud-storage
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OAuthトークン期限切れエラーを修正 — RcloneViewでクラウドアカウントを再認証する

> 夜間バックアップが2週間、静かに失敗し続けていました。エラー内容は「token expired」。Google Drive、OneDrive、またはDropboxの接続を再認証するだけで解決します — その方法を解説します。

OAuthトークンは、RcloneViewをGoogle Drive、OneDrive、Dropbox、Boxなどのクラウドプロバイダーに接続します。これらのトークンには有効期限のポリシーがあります — Googleのトークンは失効されない限り無期限に有効ですが、Microsoftのトークンは90日間使用されないと期限切れになり、パスワード変更やセキュリティイベントが発生するとすべてのトークンが無効になります。トークンが期限切れになると、気づくまで同期ジョブは静かに失敗し続けます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## トークン期限切れの一般的な原因

| プロバイダー | トークンの挙動 |
|----------|---------------|
| Google Drive | リフレッシュトークンは失効されるまで有効(ただしユーザーまたは管理者によって失効される場合がある) |
| OneDrive | 未使用の場合は90日で失効。パスワード変更でも無効化される |
| Dropbox | 明示的に失効されるまで有効 |
| Box | リフレッシュなしで60日 |

## 症状

- スケジュールされたジョブが「authentication」または「token」エラーで失敗する
- 手動でブラウジングすると「unauthorized」メッセージが表示される
- ジョブ履歴で直近の日数にわたって失敗が増加している

## 修正方法

### まずジョブ履歴を確認する

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Identify auth errors" class="img-large img-center" />

パターンを確認しましょう — 特定のプロバイダーのすべてのジョブが同じ日付から失敗し始めた場合は、トークンの問題です。

### リモートを再認証する

リモートマネージャーを開き、該当するリモートを再認証します。これにより新しいOAuthフローがトリガーされます — プロバイダーにサインインして、再度アクセスを許可してください。

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorize remote" class="img-large img-center" />

既存のジョブ設定はそのまま保持されます。更新されるのは認証トークンのみです。

### 修正を確認する

テスト同期を実行して、接続が機能することを確認します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Test after re-auth" class="img-large img-center" />

## 予防策

- **通知を有効にする** — Slack/Discord/Telegramのアラートで、ジョブが失敗したときにすぐに気づけます
- **毎週ジョブ履歴を確認する** — 失敗が蓄積する前に発見しましょう
- クラウドリモートを再認証せずに**パスワードを変更しない**
- Google Workspaceには**サービスアカウントを使用する**(ユーザートークンのように期限切れになりません)

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 認証関連の失敗がないか**ジョブ履歴を確認**します。
3. リモートマネージャーで該当するリモートを**再認証**します。
4. 今後の失敗を早期に発見できるよう**通知を設定**します。

2分の再認証で、数週間分のバックアップ漏れを防げます。

---

**関連ガイド:**

- [Permission Deniedエラーを修正する](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Rcloneエラーのトラブルシューティング](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Slack通知](https://rcloneview.com/support/blog/automate-cloud-sync-slack-notifications-rcloneview)

<CloudSupportGrid />
