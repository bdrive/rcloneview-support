---
slug: fix-put-io-sync-errors-rcloneview
title: "Put.io 同期エラーの解決 — RcloneView で診断して修復する"
authors:
  - kai
description: "RcloneView で Put.io の同期エラーを解決: OAuth の再認証、転送設定の調整、ジョブ履歴とログの確認、Folder Compare での結果検証。"
keywords:
  - put.io 同期エラー 解決
  - put.io 認証エラー
  - put.io 転送失敗
  - putio rclone エラー
  - RcloneView put.io
  - put.io oauth 再認証
  - クラウド同期 トラブルシューティング
  - put.io ダウンロード失敗
  - rclone ログ デバッグ
  - put.io 同期 GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - putio
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Put.io 同期エラーの解決 — RcloneView で診断して修復する

> 期限切れの認証から過剰な並列転送まで、Put.io 転送が失敗する一般的な原因を RcloneView 内蔵のツールで順に確認します。

Put.io の同期が途中で止まると、ログインなのか、ネットワークなのか、ジョブ設定なのか分からなくなりがちです。RcloneView なら手がかりを一か所で確認できます。Transferring タブ、Job History、ログビューアはそれぞれ異なる側面を示し、Folder Compare は作業後にまだ足りないファイルを教えてくれます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## まず認証を確認する

Put.io はブラウザベースの OAuth で接続します。ジョブが認証や権限のエラーメッセージで即座に失敗する場合は、保存済みの認証情報をまず疑ってください。Remote タブから **Remote Manager** を開き、Put.io のリモートを編集して、ブラウザでのログインをやり直します。ファイルがある Put.io アカウントと同じアカウントでサインインしてください。同じブラウザに別のアカウントでログインしていると、一覧が空になる原因としてよくあります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Put.io リモートを再認証" class="img-large img-center" />

再認証後は F5(macOS では Cmd+R)で Put.io パネルを更新し、ジョブを再実行する前にフォルダが正しく表示されることを確認してください。

## Job History とログを読む

ジョブが途中で失敗したら **Job History** を開きます。各実行には、実行タイプ、開始時刻、所要時間、ステータス(Completed、Errored、Canceled)、合計サイズ、速度、ファイル数が記録されます。失敗した実行を以前の正常な実行と比べると、早期に失敗したのか(認証情報が原因)、後半で失敗したのか(ネットワークや容量が原因)が分かります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Errored と Completed の Put.io 実行が並ぶ Job History" class="img-large img-center" />

詳細を見るには、**Settings > Embedded Rclone** でファイルログを有効にし、ログレベルを DEBUG に設定して Restart Embedded Rclone をクリックします。失敗を再現し、ログタブで失敗したファイルとエラー文を確認してください。Terminal タブで `rclone about "putio:"`(自分のリモート名を使用)を実行して、リモートが応答するかどうかを確かめることもできます。

## ジョブ設定を調整する

リモートサービスでの転送失敗は、自分で招いていることが少なくありません。同期ウィザードの Advanced Settings で、**Number of file transfers** と **Number of equality checkers** を下げてください。低速なバックエンドでは checkers を 4 以下にすることが推奨されています。**Retry entire sync if fails** は既定値の 3 のままにしておくと、短い中断は自動的に回復します。非常に大きなファイルが原因の場合は、最大ファイルサイズのフィルターを使い、小さなファイルを先に処理して、残りを別に処理してください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="設定調整後に Put.io 同期ジョブを実行" class="img-large img-center" />

## 足りないファイルを確認する

再実行後、一方に Put.io、もう一方に転送先を指定して **Compare** を開きます。Left-only のファイルは届かなかったファイルで、**Copy right** はそれらだけを送信します。RcloneView はこの機能をマウントや同期と同様に FREE ライセンスで提供するため、アップグレードなしで復旧を完了できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="転送先にまだないファイルを表示する Folder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Remote Manager で Put.io リモートを再認証し、一覧を更新します。
3. Job History を確認し、原因が分からなければ DEBUG ログを有効にします。
4. 並列数を下げて再実行し、Compare で残ったファイルをコピーします。

まず証拠を読むことで、漠然とした失敗が、具体的で修正可能な設定に変わります。

---

**関連ガイド:**

- [Put.io ストレージの管理](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Put.io から Google Drive への移行](https://rcloneview.com/support/blog/migrate-put-io-to-google-drive-rcloneview)
- [OAuth トークン期限切れによるクラウド同期エラーの解決](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
