---
slug: fix-gofile-sync-errors-rcloneview
title: "Gofile 同期エラーの解決 — RcloneView でトークン、アップロード、一覧表示の問題を解消"
authors:
  - jay
description: "RcloneView のジョブ履歴、ログ、内蔵ターミナルを使って、無効なトークン、アップロード失敗、空の一覧表示といった Gofile 同期エラーをトラブルシューティングします。"
keywords:
  - Gofile 同期エラー 解決
  - Gofile rclone エラー
  - Gofile 無効なトークン
  - Gofile アップロード失敗
  - Gofile トラブルシューティング
  - RcloneView Gofile
  - Gofile アカウント API トークン
  - rclone Gofile リモート
  - クラウド同期 トラブルシューティング
  - Gofile GUI
tags:
  - RcloneView
  - gofile
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gofile 同期エラーの解決 — RcloneView でトークン、アップロード、一覧表示の問題を解消

> Gofile 同期の失敗の多くは、古いトークン、誤ったルートフォルダー、再試行が必要な転送といった少数の原因に行き着き、RcloneView ならジョブ履歴とログでそれぞれを確認できます。

Gofile はブラウザーのログインではなくアカウント API トークンで認証するため、エラーは「unauthorized」というメッセージや空に見えるフォルダーとして現れるのが一般的です。コマンドラインで推測する代わりに、RcloneView のジョブ履歴、ログ、ターミナルを使えば、どのステップで失敗したのかを正確に確認できます。RcloneView は Windows、macOS、Linux で、ひとつのウィンドウから 90 以上のプロバイダーをマウントし、同期します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## まずアカウント API トークンを確認する

最もよくある失敗は、無効または古いトークンです。Gofile のトークンは、Gofile のプロフィールページにある Account API Token フィールドで確認できます。トークンを再生成した場合や、貼り付けたときに末尾に空白が入った場合、すべてのリクエストが拒否されます。

Remote タブから Remote Manager を開き、Gofile リモートを編集して、トークンをもう一度貼り付けます。次に Explorer パネルでリモートのルートを開きます。一覧が読み込まれれば認証は問題なく、原因は別の場所にあります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Gofile リモートを編集し、アカウント API トークンを再入力する様子" class="img-large img-center" />

## ジョブ履歴とログを確認する

スケジュールされたジョブや手動のジョブが Errored で終了した場合は、Job History を開きます。各エントリーには実行タイプ、所要時間、ステータス、サイズ、ファイル数が記録されているため、ジョブがすぐに失敗したのか(通常は認証)、途中で失敗したのか(通常はネットワークまたはファイル単位の問題)を判断できます。

さらに詳しく調べるには、Settings > Embedded Rclone で rclone のログを有効にし、レベルを DEBUG に設定して、内蔵 rclone を再起動し、失敗を再現します。ログには各ファイルで返された正確なエラーが表示されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Errored 状態の Gofile 同期ジョブを表示する RcloneView のジョブ履歴" class="img-large img-center" />

## Dry Run でアップロード失敗を切り分ける

一部のファイルだけが失敗する場合は、まず Dry Run を実行します。何も変更せずにコピーまたは削除される内容を一覧表示するので、ソースと宛先が想定どおりか確認できます。そのうえで、同期ウィザードのステップ 2 でファイル転送数を減らし、「Retry entire sync if fails」は既定値の 3 のままにします。並列転送を減らすと、断続的なアップロードエラーが解消することがよくあります。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView で転送設定を調整したあとに Gofile 同期ジョブを実行する様子" class="img-large img-center" />

## Folder Compare で検証する

再実行後、Compare を使ってローカルフォルダーと Gofile フォルダーを並べて比較します。左のみ、右のみ、差異ありのフィルターで、まだ不足しているファイルを正確に把握できるため、すべてを再アップロードする必要はありません。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Gofile に存在しないファイルを強調表示する Folder Compare ビュー" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Remote Manager で Gofile の Account API Token を再入力し、ルートフォルダーが一覧表示されることを確認します。
3. ジョブが Errored の場合は Job History を確認し、DEBUG ログを有効にします。
4. Dry Run を実行し、同時転送数を減らしてから、Folder Compare で検証します。

トークン、ログ、差分を明確に把握すれば、漠然とした Gofile の失敗も素早く解決できます。

---

**関連ガイド:**

- [Gofile ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [RcloneView で Put.io の同期エラーを解決](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)
- [RcloneView でクラウド同期のスタックやハングを解決](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
