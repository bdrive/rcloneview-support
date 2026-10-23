---
slug: fix-box-sync-errors-rcloneview
title: "Box同期エラーの解決方法 — RcloneViewで対処する"
authors:
  - kai
description: "RcloneViewでBox同期エラーを解決: Dry Run、ログ、ジョブ履歴を使って、OAuth、Box for Business、レート制限、ファイル名の問題に対処します。"
keywords:
  - Box同期エラーの解決
  - Box同期が動かない
  - Boxレート制限エラー
  - Box OAuthトークン期限切れ
  - Box for Business rclone
  - RcloneView box
  - Boxのトラブルシューティング
  - Box転送失敗
tags:
  - RcloneView
  - box
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box同期エラーの解決方法 — RcloneViewで対処する

> RcloneViewに組み込まれたツールを使って、失敗したBox転送を診断するための実践的なチェックリストです。

Box同期ジョブが失敗する原因は、たいてい繰り返し起こるいくつかのパターンです。ログインの期限切れ、アカウントの種類の誤り、APIコールの制限、そしてBoxが通常のドキュメントとは異なる扱いをするファイルなどです。RcloneViewには、これらを素早く切り分けるためのジョブ履歴、ログ、内蔵ターミナルが用意されています。さらに、RcloneViewは1つのウィンドウで90以上のプロバイダーをマウントおよび同期でき、Windows、macOS、Linuxで動作するため、同じファイルを別のリモートでテストすることもできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ジョブ履歴とログタブから確認する

ジョブ履歴(Job History)を開き、失敗した実行のステータス(Completed、Errored、Canceled)と、転送されたサイズおよびファイル数を確認します。一部だけ転送されている場合は、ファイル単位の問題が考えられます。ジョブがすぐに失敗する場合は、多くは認証または設定の問題です。

詳細を見るには、下部のログ(Log)タブに切り替えます。より多くの情報を記録するには、Embedded Rcloneの設定でrcloneログを有効にし、レベルをDEBUGに設定して、内蔵rcloneを再起動し、障害を再現してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneViewで失敗したジョブ履歴を確認する" class="img-large img-center" />

## 再認証とアカウントの種類の確認

すべてのリクエストが失敗する場合は、OAuthトークンの期限切れまたは失効が考えられます。リモートマネージャー(Remote Manager)を開き、Boxリモートを編集して、ブラウザから再度サインインしてください。

ログインできてもフォルダが表示されない、または権限エラーが出る場合は、アカウントの種類を確認してください。Box for Businessでは、リモートに`box_sub_type = enterprise`の設定が必要です。ビジネスアカウントに対して個人アカウント向けの設定を使うと、原因の分かりにくい結果になることがよくあります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでBoxリモートの設定を編集する" class="img-large img-center" />

## スロットリングと大規模ジョブへの対処

数千もの小さなファイルを一度に処理すると、Boxがリクエストを制限することがあります。ジョブの詳細設定(Advanced Settings)で、ファイル転送数と等価チェッカー(equality checkers)の数を下げてください(低速なバックエンドでは4以下を推奨)。一時的な失敗が自動的に回復するよう、リトライは既定値の3のままにしておきます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferringタブで転送を監視する" class="img-large img-center" />

## 問題のあるファイルを除外する

Box Notesのようなオンライン専用の項目は、通常のファイルではありません。フィルタリングステップにあらかじめ用意されているBox Docsフィルタを使うと、これらが除外され、ジョブが失敗しなくなります。カスタムルールの追加、最大ファイルサイズの設定、調査中の問題フォルダの除外も可能です。その後、Dry Runを実行して、コピーされる内容を確認してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="フォルダを比較して同期に失敗したファイルを見つける" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. ジョブ履歴とログタブで正確なエラーを確認します。
3. Boxリモートを再認証し、該当する場合はBox for Businessの設定を確認します。
4. 同時実行数を下げ、Box Docsフィルタを適用してから、Dry Runを行って再実行します。

Boxの失敗の多くは、ログを数分確認すれば判明する設定上の問題です。

---

**関連ガイド:**

- [Boxアップロードエラーの解決](https://rcloneview.com/support/blog/fix-box-upload-errors-rcloneview)
- [OAuthトークン期限切れによるクラウド同期エラーの解決](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)
- [クラウドAPIレート制限エラーの解決](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
