---
slug: fix-premiumize-sync-errors-rcloneview
title: "premiumize.me の同期エラーを解決 — RcloneView で認証と転送の問題を解消"
authors:
  - casey
description: "RcloneView のログ、ジョブ履歴、フォルダー比較を使って、認証の期限切れ、転送の失敗、ファイルの欠落といった premiumize.me の同期エラーをトラブルシューティングします。"
keywords:
  - premiumize.me 同期エラー 解決
  - premiumize rclone エラー
  - premiumize 認証失敗
  - premiumize 転送失敗
  - premiumize トラブルシューティング
  - RcloneView premiumize
  - クラウド同期 トラブルシューティング
  - premiumize GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# premiumize.me の同期エラーを解決 — RcloneView で認証と転送の問題を解消

> premiumize.me のジョブが失敗したとき、RcloneView のジョブ履歴、DEBUG ログ、フォルダー比較を使えば、原因がログインなのか、転送の負荷なのか、届いていないファイルなのかを切り分けられます。

premiumize.me のジョブが途中で止まったり、フォルダーが半分だけコピーされた状態で残ったりすると、コマンドラインだけでは原因の特定が困難です。RcloneView ではリモートの確認、ジョブの記録、ログ、左右の比較を 1 つのウィンドウにまとめているため、やみくもに再実行せず本当の原因を修正できます。RcloneView は 1 つのウィンドウから 90 以上のプロバイダーをマウントおよび同期でき、Windows、macOS、Linux で動作します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## リモートを再認証する

premiumize.me はブラウザーの OAuth で接続します。ジョブが数秒で失敗する場合は、まずログインを疑ってください。Remote タブから Remote Manager を開き、premiumize.me のリモートを編集して、ブラウザーの案内に従って再度サインインします。

次に Explorer パネルでリモートを開き、ルートフォルダーを参照します。正常に一覧表示されれば接続に問題はなく、失敗の原因は転送そのものにあります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で premiumize.me のリモートを再認証" class="img-large img-center" />

## ジョブ履歴を確認し、DEBUG ログを有効にする

Job History を開き、失敗した実行のステータス、所要時間、ファイル数を確認します。ジョブが途中でエラーになる場合、多くは認証情報ではなく特定のファイルや負荷が原因です。

ファイルごとの正確なメッセージを確認するには、Settings > Embedded Rclone で rclone のログを有効にし、レベルを DEBUG に設定して Restart Embedded Rclone をクリックします。失敗を再現し、Log タブまたは設定したフォルダー内のログファイルを確認してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="エラーになった premiumize.me ジョブを表示する RcloneView のジョブ履歴" class="img-large img-center" />

## 負荷を下げて再実行をプレビューする

断続的な失敗は、同時転送数を減らすと緩和することがよくあります。同期ウィザードのステップ 2 でファイル転送数を下げ、equality checkers を 4 以下に設定します。一時的なエラーが再試行されるよう、「Retry entire sync if fails」は 3 のままにしておきます。

再実行の前に Dry Run を使えば、コピーまたは削除されるファイルを事前に確認でき、再試行で想定外のことが起きません。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="同時実行数を下げて premiumize.me ジョブを再実行" class="img-large img-center" />

## フォルダー比較で確認する

再実行後、片側にローカルフォルダー、もう片側に premiumize.me を指定して Compare を開きます。左のみ、右のみ、差異ありのファイルで絞り込み、ジョブ全体をやり直すのではなく、まだ不足しているものだけをコピーします。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="premiumize.me に存在しないファイルを表示するフォルダー比較" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. premiumize.me のリモートを再認証し、ルートフォルダーが一覧表示されることを確認します。
3. Job History を確認し、失敗するジョブの DEBUG ログを有効にします。
4. 同時実行数を下げ、Dry Run を実行してから再実行し、フォルダー比較で検証します。

原因がログと比較で見えるようになれば、premiumize.me の障害も短く再現可能な修正作業になります。

---

**関連ガイド:**

- [RcloneView で premiumize.me クラウドストレージを管理する](https://rcloneview.com/support/blog/manage-premiumize-me-cloud-sync-backup-rcloneview)
- [RcloneView で premiumize.me クラウドのダウンロードを同期する](https://rcloneview.com/support/blog/sync-premiumize-cloud-downloads-rcloneview)
- [RcloneView で put.io の同期エラーを解決する](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)

<CloudSupportGrid />
