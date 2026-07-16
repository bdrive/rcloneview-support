---
slug: fix-onedrive-sync-errors-rcloneview
title: "OneDriveの同期エラーを修正 — RcloneViewでの解決方法"
authors:
  - tayson
description: "期限切れのOAuthトークンやレート制限から、転送の停止やチェックサムの不一致まで、RcloneViewでよく発生するMicrosoft OneDriveの同期エラーを診断・修正します。"
keywords:
  - onedrive sync errors rcloneview
  - fix onedrive sync issues
  - onedrive rate limit error rclone
  - onedrive authentication expired rcloneview
  - microsoft onedrive transfer stalled
  - fix onedrive connection rcloneview
  - onedrive backup errors troubleshoot
  - cloud sync troubleshooting guide
  - onedrive rclone gui fix
  - resolve onedrive sync failures
tags:
  - onedrive
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveの同期エラーを修正 — RcloneViewでの解決方法

> RcloneViewにおけるOneDriveの同期エラーは、通常、期限切れのOAuthトークン、APIのレート制限、転送設定の誤りという3つの原因のいずれかに起因しており、それぞれアプリ内で明確な修正方法があります。

Microsoft OneDriveは最も広く導入されているビジネス向けクラウドプラットフォームの一つですが、そのAPIの挙動によって、転送が停止したり、不完全に終わったり、静かに失敗したりする同期エラーが時折発生します。RcloneViewでは、コマンドラインを使わずに、タイムスタンプ付きログ、リアルタイムの転送モニタリング、きめ細かなジョブ制御を通じて、これらの問題を体系的に診断できる環境が用意されています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## まずログタブを確認する

設定を変更する前に、RcloneView下部のInfo Viewにある**Log**タブを開いてください。すべての転送・同期操作は、OneDriveのAPIが返すエラーコードを含め、タイムスタンプ付きでここに記録されます。`AccessDenied`や`InvalidAuthenticationToken`というメッセージは期限切れのOAuthトークンを示し、`429 Too Many Requests`というメッセージはレート制限を示します。また`EOF`や接続エラーは、通常OneDrive固有の問題ではなくネットワークの中断を示しています。

変更を加える前に正確なエラーの種類を特定しておくことで時間の節約になります。トークンの問題に対する修正方法とレート制限に対する修正方法はまったく異なります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and log tab in RcloneView for diagnosing OneDrive sync errors" class="img-large img-center" />

## OAuthトークンが期限切れになったら再認証する

RcloneViewにおけるOneDrive接続はOAuthブラウザ認証を使用します。アクセストークンはアクティブなセッション中に自動的に更新されますが、リモートが長期間アイドル状態になっていると、トークンが完全に期限切れになることがあります。これにより、そのOneDriveアカウントを対象とするすべての同期ジョブが認証エラーで失敗します。

修正方法は簡単です。**Remote**タブ > **Remote Manager**に進み、対象のOneDriveリモートを見つけて**Edit**をクリックします。RcloneViewがブラウザウィンドウを開くので、再度ログインして新しいトークンを発行してください。保存が完了したら、失敗したジョブを再実行します。ジョブの設定を変更する必要はなく、認証情報の更新のみで済みます。

<img src="/support/images/en/blog/new-remote.png" alt="Editing a OneDrive remote in RcloneView Remote Manager to refresh OAuth token" class="img-large img-center" />

## レート制限エラーには同時転送数を減らす

OneDriveはユーザーごとにAPIのレート制限を設けており、同時ファイル転送数を高く設定したジョブは`429`レスポンスを引き起こし、部分的な失敗や再試行によってジョブ全体の速度が大きく低下することがあります。デフォルトの再試行回数(3回)は、レート制限の問題を隠してしまい、断続的なエラーのように見せてしまうことがよくあります。

**Job Manager**でジョブを開き、**Edit**をクリックします。Step 2(Advanced Settings)で、**Number of file transfers**をデフォルトから2〜4に下げてください。ジョブで同等性チェッカーの数を多く設定している場合は、その値も減らしましょう。メタデータリクエストへの応答が遅いバックエンドについては、公式には4以下が推奨されています。ジョブを保存し、再度実行してください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing OneDrive job settings to reduce concurrent transfers in RcloneView" class="img-large img-center" />

## 失敗したジョブを再実行する前にドライランを使う

部分的な同期は、一部のファイルは転送済み、一部は未転送という不整合な状態を転送先フォルダに残してしまう場合があります。失敗したジョブを再実行する前に、**dry run**モードを使って、どのファイルがコピーまたは削除される予定なのかを正確にプレビューしましょう。ドライランは実際の変更を行わず、予定されている操作の完全なリストを生成するため、前回の中断箇所からジョブが問題なく完了することを確認できます。

Job Managerでジョブを選択し、実行オプションから**Dry Run**を選びます。特に前回のジョブ実行中にソースフォルダが変更された場合は、ファイルリストを注意深く確認してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Dry run preview of OneDrive sync job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. ジョブが失敗したら、変更を加える前に**Log**タブを開き、具体的なエラーの種類を特定します。
3. 認証エラーの場合は、Remote ManagerでOneDriveリモートを編集し、ブラウザ経由で再認証します。
4. レート制限エラーの場合は、ジョブのStep 2 Advanced Settingsで同時ファイル転送数を2〜4に減らし、まずドライランでプレビューしてから再実行します。

原因に合わせた修正方法を適用すれば、ほとんどのOneDrive同期エラーは数分以内に解決します。RcloneViewのジョブ履歴とログ出力があれば、そこに到達するために必要なものはすべて揃っています。

---

**関連ガイド:**

- [クラウド転送の停止を修正 — RcloneViewでの解決方法](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [OneDriveからAmazon S3への移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [Backblaze B2からOneDriveへの同期 — RcloneViewによるクラウドバックアップ](https://rcloneview.com/support/blog/sync-backblaze-b2-to-onedrive-rcloneview)

<CloudSupportGrid />
