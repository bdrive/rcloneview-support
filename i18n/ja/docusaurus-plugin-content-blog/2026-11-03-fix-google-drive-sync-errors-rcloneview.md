---
slug: fix-google-drive-sync-errors-rcloneview
title: "Google Drive の同期エラーを解決 — RcloneView で見つからないフォルダ、失敗したジョブ、空のリストに対処"
authors:
  - steve
description: "RcloneView のログと Folder Compare を使って、共有フォルダの欠落、空の Computers 一覧、エラーになったジョブなど Google Drive の同期エラーをトラブルシューティングします。"
keywords:
  - Google Drive 同期エラー 解決
  - Google Drive rclone エラー
  - Google Drive 共有アイテム 表示されない
  - Google Drive Computers フォルダ 空
  - Google Drive 同期 失敗
  - RcloneView Google Drive
  - Google Docs 同期フィルター
  - Google Drive トラブルシューティング
  - クラウド同期 トラブルシューティング
  - Google Drive GUI
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive の同期エラーを解決 — RcloneView で見つからないフォルダ、失敗したジョブ、空のリストに対処

> Google Drive の同期トラブルの多くは、設定の不足、ログインの期限切れ、フィルターが原因であり、RcloneView はその特定を支援します。

Google Drive のジョブが Errored で終了したり、期待した項目がリモートに表示されなかったりしても、ログを確認できれば原因が謎のままということはあまりありません。よくある原因は、特定の設定が必要な共有フォルダ、フォルダ ID が必要なバックアップ済みコンピューター、通常のファイルとは動作が異なる Google Docs ファイルです。RcloneView はリモート設定、ジョブ履歴、ログを一か所にまとめているため、原因を素早く絞り込めます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 表示されないフォルダ

共有されたファイルがルートの一覧に表示されない場合、リモートに `shared_with_me = true` の設定が必要な可能性があります。この設定で Google Drive Shared with Me ビューが使えます。Drive for desktop でバックアップされたコンピューターは別のケースで、Google Drive Computers リモートでは `root_folder_id` にそのコンピューターの ID を設定する必要があります。

Remote タブから Remote Manager を開き、リモートを編集してこれらの値を確認してください。その後、F5 で Explorer パネルを再読み込みします。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView の Remote Manager で Google Drive リモートの設定を編集" class="img-large img-center" />

## ログインの期限切れと認証の失敗

Google Drive はブラウザの OAuth で接続します。すべてのリクエストが認証エラーで失敗する場合は、リモートを編集して再度サインインし、新しいトークンを発行してください。以前は動作していたリモートが突然失敗した場合の一般的な対処法です。

クォータやレート制限のメッセージについては、Google Drive のレート制限とストレージクォータに関する専用ガイドをご覧ください。いずれの場合も、同期ウィザードのステップ 2 でファイル転送数を減らすのが妥当な最初の対処です。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView の Job History でエラーになった Google Drive 同期を確認" class="img-large img-center" />

## ログで正確なエラーを確認する

Job History を開いて、ジョブがすぐに失敗したのか途中で失敗したのかを確認します。詳細が必要な場合は、Settings > Embedded Rclone で rclone のログを有効にし、レベルを DEBUG に設定して Restart Embedded Rclone をクリックします。障害を再現してログを読むと、ファイルとエラーが記載されています。内蔵の Terminal タブで `rclone about "remote:"` などのコマンドを実行して、接続を確認することもできます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="設定を修正した後に Google Drive ジョブを再実行" class="img-large img-center" />

## Google Docs の扱いと結果の確認

Google Docs、Sheets、Slides は通常のファイルではないため、転送後に見え方が異なることがあります。除外したい場合は、同期ウィザードのステップ 3 に定義済みの Google Docs フィルターがあります。再実行後は Compare で両側を確認します。左のみ、右のみ、差異のあるファイルを見れば、まだ対応が必要なものが分かります。ファイルが削除される可能性のある同期の前には、Dry Run を実行してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare で Google Drive の同期結果を検証" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. リモートに `shared_with_me` または `root_folder_id` があるか確認し、必要に応じて再認証します。
3. Job History を確認し、エラーになったジョブには DEBUG ログを有効にします。
4. Dry Run を実行し、ジョブを再実行して、Folder Compare で検証します。

設定、ログ、比較が 1 つのウィンドウにそろっているため、失敗した Drive ジョブも短いチェックリストで対処できます。

---

**関連ガイド:**

- [Google Drive ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView で Google Drive の 403 レート制限エラーを解決](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [RcloneView で Google Drive のストレージ容量超過を解決](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
