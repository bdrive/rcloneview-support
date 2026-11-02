---
slug: fix-backblaze-b2-sync-errors-rcloneview
title: "Backblaze B2 同期エラーの解決 — RcloneViewで診断して解決"
authors:
  - alex
description: "RcloneViewでBackblaze B2の同期エラーをトラブルシューティング：Application Keyの範囲確認、ログの確認、転送と再試行の調整、Folder Compareでの検証。"
keywords:
  - Backblaze B2 同期エラーの解決
  - Backblaze B2 401 unauthorized
  - B2 application key の権限
  - B2 同期失敗
  - rclone B2 トラブルシューティング
  - RcloneView Backblaze B2
  - B2 アップロードエラー
  - クラウド同期のトラブルシューティング
tags:
  - RcloneView
  - troubleshooting
  - tips
  - backblaze-b2
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 同期エラーの解決 — RcloneViewで診断して解決

> B2の同期失敗の多くは、キーの範囲、再試行、まだ確認していないログという少数の原因に行き着きます。

停止したりエラーを報告したりするBackblaze B2の同期は、rcloneが実際に何を報告しているかを確認できれば、たいてい数分で解決できます。RcloneViewはジョブの状態、ログ、内蔵ターミナルを1つのウィンドウに表示するので、推測せずに診断できます。FREEライセンスでS3、Azure、Backblaze B2に読み書き可能な状態で接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## まずApplication Keyを確認する

B2リモートはApplication Key IDとApplication Keyで認証します。ジョブが認可エラーですぐに失敗する場合、別のバケットに制限されたキー、書き込み権限のないキー、キーIDとキーの取り違えや末尾の空白が混入したコピー＆ペースト時のミスがよくある原因です。

Remote Managerを開いてB2リモートを編集し、両方の値を入力し直してください。Backblazeのキー管理ページで新しいキーを作成する場合、Application Key全体は作成時に一度しか表示されない点に注意してください。その後、Explorerでバケットを参照します。一覧は表示されるのにアップロードが失敗する場合は、キーに書き込み権限がない可能性が高いです。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでBackblaze B2リモートを編集" class="img-large img-center" />

## Job Historyとログを読む

Job Historyを開いて、各実行のステータス（Completed、Errored、Canceled）、所要時間、ファイル数、速度を確認します。一部のファイルだけでエラーになる実行はファイル単位の問題、開始時点で失敗する実行は認証情報や接続の問題を示します。

詳細を見るには、Settings > Embedded Rcloneでrcloneのログを有効にし、ログレベルをDEBUGに設定して内蔵rcloneを再起動し、問題を再現します。Logタブとログファイルにタイムスタンプ付きのエントリが記録され、失敗したファイルやメッセージを検索できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneViewのJob Historyでエラーと完了した実行を表示" class="img-large img-center" />

## 転送と再試行を調整する

大規模な実行中のエラーは、同時実行数が多すぎることが原因であることが少なくありません。ジョブのAdvanced Settingsで、ファイル転送数とequality checkerの数を下げてください（低速なバックエンドではcheckerを4以下にすることが推奨されます）。一時的なネットワーク切断から自動的に回復できるよう、「Retry entire sync if fails」は既定値の3のままにしておきます。夜間に数千枚のRAWファイルを同期する写真家の場合、エラーが出たら同時実行数を下げるのが最初の調整として妥当です。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneViewのTransferringタブで転送状況をライブで監視" class="img-large img-center" />

## 検証して安全に再実行する

変更後は、Dry Runでコピーまたは削除される内容をプレビューします。その後ジョブを実行し、ローカルフォルダーとB2バケットの間でFolder Compareを使用します。left-onlyのファイルはまだアップロードが必要なもの、differentのファイルはサイズの不一致を示します。Copy rightで差分を埋め、問題がなくなるまで再比較してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewのFolder CompareでB2同期を確認" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remote ManagerでB2のApplication Key IDとKeyを入力し直します。
3. DEBUGログを有効にして、失敗したジョブを再実行します。
4. 同時実行数を下げ、Dry Runを行ってから、Folder Compareで検証します。

キー、ログ、設定を順に確認すれば、B2のエラーの多くはすぐに解決できます。

---

**関連ガイド：**

- [RcloneViewでBackblaze B2を管理する](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Wasabiの同期エラーを解決する](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)
- [Dry Run：転送前に同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
