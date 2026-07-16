---
slug: fix-cloud-oauth-token-expired-refresh-rcloneview
title: "クラウドストレージの期限切れOAuthトークンを修正 — RcloneViewで再接続する"
authors:
  - tayson
description: "Google Drive、Dropbox、OneDrive、その他のOAuthベースのクラウドプロバイダーで発生するRcloneViewの期限切れOAuthトークンエラーの診断と修正方法を解説します。"
keywords:
  - expired OAuth token cloud storage
  - fix rclone OAuth token expired
  - Google Drive token expired RcloneView
  - Dropbox authorization token error
  - OneDrive token refresh rclone
  - cloud storage authentication error
  - rclone reconnect cloud provider
  - fix cloud login expired RcloneView
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウドストレージの期限切れOAuthトークンを修正 — RcloneViewで再接続する

> Google Drive、Dropbox、OneDrive、その他のプロバイダーのOAuthトークンは定期的に期限切れになります。RcloneViewでこのエラーを見分け、リモート設定を失うことなく再認証する方法を紹介します。

Google Drive、Dropbox、Microsoft OneDrive、Box、pCloud、Yandex DiskなどのOAuthベースのクラウドプロバイダーは、パスワードではなくトークンを通じてアクセスを許可します。これらのトークンには有効期限のポリシーがあり、アプリが使用され続けている限り自動的に更新されるものもあれば、90〜180日間使用がない場合やプロバイダーのセキュリティシステムが異常なアクセスパターンを検知した場合に期限切れとなるものもあります。トークンが期限切れになると、RcloneViewの同期ジョブは一見深刻に見える認証エラーで失敗し始めますが、修正は簡単です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 期限切れトークンエラーを見分ける

期限切れOAuthトークンエラーは、RcloneViewの**Logタブ**に次のようなメッセージで表示されます。

- Google Drive: `oauth2: cannot fetch token: 401 Unauthorized` または `Token has been expired or revoked`
- Dropbox: `invalid_grant` または `Token is expired`
- OneDrive: `AADSTS70008: The refresh token has expired`
- Box: `401 Unauthorized: The access token provided has expired`

Transferringタブでは、ジョブがファイルを一切転送せずに0%の時点で即座に失敗として表示されます。リモートはExplorerパネルでも到達不能として表示されることがあり、リモートを参照するとフォルダ一覧の代わりにエラーが返されます。

<img src="/support/images/en/blog/new-remote.png" alt="Viewing remote configuration in RcloneView to fix token errors" class="img-large img-center" />

## Remote Managerから再認証する

期限切れのOAuthトークンを更新するには、**Remoteタブ → Remote Manager**に移動し、対象のリモートを選択して**Edit**をクリックします。リモート設定画面でOAuthトークンのセクションを見つけ、再認証ボタンをクリックします（または既存のトークンをクリアします）。RcloneViewはブラウザでプロバイダーのOAuth認証ページを開きます。

クラウドアカウントの認証情報でログインし、（rclone経由で）RcloneViewへのアクセスを再度許可すると、新しいトークンが自動的に保存されます。ブラウザのタブを閉じてRcloneViewに戻ると、リモートは正常に接続できるようになっているはずです。Explorerパネルでリモートを参照して動作を確認してください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring reconnected cloud remote transfer in RcloneView" class="img-large img-center" />

## より厳格なトークンポリシーを持つプロバイダー

**Google Drive**のリフレッシュトークンは、アカウント所有者によってアプリが認可されており、Googleのセキュリティ設定でrcloneアプリが取り消されていない限り、無期限に有効です。Googleアカウント → サードパーティ製アプリでアクセスを取り消した場合は、最初から再認可する必要があります。

**Microsoft OneDrive**のトークンは、90日間使用がないと期限切れになります。3か月間同期していない場合は、再認証が必要になると考えてください。OneDrive for Businessのトークンは、Azure AD管理者が設定した組織のポリシーによって、さらに早く期限切れになることもあります。

**Box**と**Dropbox**のトークンは一般的に長期間有効ですが、アカウントのパスワードを変更した場合、初めて二要素認証を有効にした場合、またはプロバイダーがセキュリティイベントを検知した場合には期限切れになります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing failed jobs due to token expiry in RcloneView job history" class="img-large img-center" />

## 今後の中断を防ぐ

各OAuthリモートに対して、たとえ何も転送しなくても、少なくとも1つの小さな同期ジョブを毎週実行するようスケジュールしてください。トークンをアクティブに使用することで、OneDriveのようなプロバイダーにおける未使用による期限切れを防げます。Job Historyタブを定期的に確認し、ジョブの失敗が数日間気づかれないまま放置されることなく、速やかに検知できるようにしましょう。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 同期ジョブが失敗した後、LogタブでOAuth期限切れのエラーメッセージを確認します。
3. Remote Managerを開き、対象のリモートを選択して、Editをクリックして再認証します。
4. 失敗したジョブを再実行する前に、Explorerパネルで接続をテストします。

RcloneViewでのOAuthトークンの更新は2分もかかりません。再認証さえ完了すれば、これまで設定していたすべての同期ジョブは、他に何も変更することなく動作を再開します。

---

**関連ガイド:**

- [RcloneViewでGoogle Driveの容量制限とレート制限エラーを修正する](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [RcloneViewでrcloneのエラーをトラブルシューティングする](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [RcloneViewで同期完了時の通知アラートを設定する](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)

<CloudSupportGrid />
