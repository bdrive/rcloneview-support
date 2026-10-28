---
slug: fix-mailru-cloud-sync-errors-rcloneview
title: "Mail.ru Cloud の同期エラーを解決 — RcloneView トラブルシューティングガイド"
authors:
  - casey
description: "RcloneView でよく発生する Mail.ru Cloud の同期失敗(認証エラー、タイムアウト、スキップされたファイル、不一致)を、実用的な対処法で解決します。"
keywords:
  - Mail.ru Cloud 同期エラー 解決
  - mailru cloud 同期 失敗
  - mail.ru cloud rcloneview
  - mailru 認証エラー
  - mailru タイムアウト
  - mail.ru cloud トラブルシューティング
  - クラウド同期エラー
  - rcloneview トラブルシューティング
  - mailru バックアップエラー
tags:
  - RcloneView
  - mailru
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mail.ru Cloud の同期エラーを解決 — RcloneView トラブルシューティングガイド

> RcloneView での Mail.ru Cloud 同期失敗の多くは、認証情報、同時実行数、フィルターのいずれかが原因で、数クリックで解決できます。

Mail.ru Cloud のジョブが止まったりエラーを報告したりしても、原因が謎であることはまれです。RcloneView はすべての実行を Job History と Log タブに記録するため、メッセージを既知の原因と照らし合わせられます。このガイドでは、最もよく発生する問題とその解決に役立つ設定を取り上げます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 認証と接続の失敗

先週まで動いていたジョブがすぐに失敗する場合は、保存された認証情報をまず疑います。Remote Manager を開き、Mail.ru Cloud のリモートを選択して編集し、アカウント情報を再入力してください。アカウントに追加のセキュリティが有効な場合は、入力した認証情報がサービス側でサードパーティアクセス用として受け付けられるものか確認してください。保存後、Explorer パネルでリモートを参照します。フォルダー一覧が読み込まれれば接続は正常で、問題はジョブ自体にあります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Mail.ru Cloud のリモートを再作成する" class="img-large img-center" />

## タイムアウトと停滞した転送

転送が遅い、または中断される場合は、たいてい接続に対して同時実行数が多すぎます。ジョブの Advanced Settings で Number of file transfers を下げ、Number of equality checkers を 4 以下に設定してください。低速なバックエンドは並列チェック数が少ないほうがうまく動作します。長時間のジョブでは、一時的なネットワーク切断から自動的に回復できるよう、"Retry entire sync if fails" をデフォルトの 3 より大きくします。Transferring タブで速度が安定することを確認しましょう。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring タブで Mail.ru Cloud の転送を監視する" class="img-large img-center" />

## 欠落または不一致のファイル

同期完了後にファイルが異なって見える場合は、ソースと Mail.ru Cloud のリモート間で Compare を実行します。left-only ファイルを表示すれば届かなかったものが分かり、比較ビューから直接コピーできます。内容の不一致には、Sync ウィザードのステップ 2 でチェックサムオプションを有効にし、タイムスタンプだけでなくハッシュとサイズでファイルを比較させます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="フォルダーを比較して Mail.ru Cloud にないファイルを見つける" class="img-large img-center" />

## フィルター、Dry Run、Job History

ジョブが仕様どおりファイルをスキップしている場合もあります。ステップ 3 の Filtering Settings で、忘れていた最大ファイルサイズ、最大ファイル経過期間、カスタム除外ルールがないか確認してください。次に Dry Run を実行し、実データに触れる前にどのファイルがコピーまたは削除されるかを正確に確認します。その後、Job History を開き、ステータス、サイズ、ファイル数を以前の成功した実行と比較します。RcloneView は 90 以上のプロバイダーを 1 つのウィンドウでマウントおよび同期できるため、Mail.ru Cloud のリモートをマウントしてローカルドライブのように内容を確認することもできます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView で Mail.ru Cloud のジョブ履歴を確認する" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Job History を開き、失敗した Mail.ru Cloud ジョブの Log タブのエントリを読みます。
3. 上記の該当する対処(認証情報、同時実行数、チェックサム、フィルター)を適用します。
4. Dry Run を実行してからジョブを再実行し、Compare で確認します。

推測よりも体系的な確認が勝ります。原因を一度解決すれば、Mail.ru Cloud のジョブは再びきれいに実行されます。

---

**関連ガイド:**

- [Mail.ru Cloud の管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Mail.ru Cloud から Backblaze B2 へ移行 — RcloneView でファイルを転送](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)
- [RcloneView でクラウド API レート制限エラーを解決](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
