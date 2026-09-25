---
slug: fix-embedded-rclone-crash-restart-rcloneview
title: "組み込みRcloneのクラッシュを修正 — RcloneViewで再起動して復旧する"
authors:
  - tayson
description: "再起動手順、ログ記録、外部rcloneへのフォールバックオプションを使って、RcloneViewの組み込みrclone接続断を解決する方法。"
keywords:
  - 組み込みrclone クラッシュ
  - rclone 接続断
  - RcloneView トラブルシューティング
  - 組み込みrclone 再起動
  - rclone rc api エラー
  - rclone ログファイル
  - 外部rclone接続
  - rcloneview 接続できない
  - rclone セルフアップデート
  - rclone エラー修正
tags:
  - RcloneView
  - troubleshooting
  - tips
  - reference
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 組み込みRcloneのクラッシュを修正 — RcloneViewで再起動して復旧する

> フッターにバージョン番号の代わりに「切断」と表示された場合、組み込みrcloneエンジンが応答を停止しています — ジョブ履歴を失わずに復旧する方法を紹介します。

RcloneViewには、デフォルトで `http://127.0.0.1:5582` というローカルAPIアドレスでアプリと通信する組み込みrcloneバイナリが同梱されています。ほとんどの場合、この接続は意識されません — 常に正常に動作するため気にする必要がないからです。しかし、OSのリソース制限、競合するローカルファイアウォールルール、破損した設定ロックなどが原因で組み込みプロセスが強制終了されると、フッターの接続情報がバージョンを表示しなくなり、Explorerパネル内のすべてのリモートが一斉に応答しなくなります。これは単一リモートの認証問題ではなく、組み込みrcloneのクラッシュを扱っているという合図です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 単一リモートの問題ではなく組み込みエンジンの問題かを確認する

見分ける最も早い方法は次の通りです。他のパネルは正常に動作しているのに1つのタブやリモートだけ読み込みに失敗する場合は、リモート固有の問題です — OAuthトークンの不具合、認証情報の誤り、プロバイダー側の障害などです。すべてのパネルのすべてのリモートが同時に応答を停止し、フッターのrcloneバージョンが消えた場合は、組み込みプロセス自体が停止しています。Settingsタブ > Embedded Rcloneを確認してください。バージョンフィールドが空欄またはエラー表示であれば確認できたことになります。

RcloneViewはWindows、macOS、Linuxにまたがる90以上のプロバイダーを1つのウィンドウでマウントおよび同期しており、そのすべてがこの単一の組み込みプロセスを経由しているため、ここでのクラッシュはプロバイダー固有のエラーではなく全面的な停止に見えるのです。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView settings tab showing embedded rclone connection status" class="img-large img-center" />

## 組み込みプロセスを再起動する

Settingsタブ > Embedded Rcloneに移動し、そこにある再起動コントロールを使用してください — RcloneView自体を終了して再度開くことなく、バンドルされたバイナリを再起動します。クラッシュ発生時に転送中だったジョブはJob HistoryでCompletedではなくErroredと表示されるため、その後確認して未完了のものを再実行してください。RcloneViewのRetry entire sync if fails設定(各ジョブのAdvanced Settingsステップにあります)は、今後の実行でこの種の中断を自動的に吸収するのに役立ちます。

再起動が失敗し続ける場合は、Settings > Embedded Rclone > Local Rclone locationでrcloneバイナリのパスを確認してください。移動、削除、またはウイルス対策ソフトによって隔離されたバイナリを指すパスは、再起動ボタンをクリックしてもプロセスの起動を妨げます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling and retry settings" class="img-large img-center" />

## 繰り返すクラッシュのためにログ記録を有効にする

一度きりのクラッシュは深く調査する必要がほとんどありませんが、繰り返すクラッシュは別です。Settings > Embedded RcloneでEnable rclone Loggingを有効にし、Log levelをDEBUGに設定して、組み込みプロセスを再起動し新しいログファイルを開始してください。クラッシュを再現した後、下部のInfo ViewにあるLogタブか、Log folderで設定されたパスのログファイルを直接確認してください。解釈に助けが必要な場合、RcloneViewのサポートチームはrcloneview@bdrive.comでログファイルを受け付けています — 正確なエラー行が重要なので、要約ではなくDEBUGレベルのログを添付してください。

同じ設定セクションのGlobal Rclone Flagsフィールドに、以前のトラブルシューティングセッションから残った不正または非互換なフラグが含まれていないかも確認してください — 無効なフラグは、毎回組み込みプロセスの正常な起動を妨げる可能性があります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing errored jobs after a connection interruption" class="img-large img-center" />

## 外部Rcloneインスタンスへのフォールバック

特定のマシンで組み込みエンジンが繰り返しクラッシュする場合 — 多くはリソースが限られたハードウェアで発生します — 代わりにRcloneViewを外部rcloneインスタンスに接続できます。ターミナルで `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572` を実行し、そのアドレスと認証情報を使ってSettingsタブ > Connect Manager > New Connectionに追加してください。これにより、rcloneプロセスのライフサイクルがRcloneViewアプリから切り離され、GUI側の問題が転送エンジンを道連れにすることがなくなり、その逆も同様です。

## はじめに

1. 新規インストールが必要な場合は[rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. Settings > Embedded Rcloneでバージョンフィールドが空欄かどうかを確認し、クラッシュを確認してください。
3. 再起動コントロールを使用し、その後Job HistoryでErroredと表示された項目を確認してください。
4. クラッシュが繰り返す場合はDEBUGログを有効にし、それでも続く場合は外部rclone接続に切り替えてください。

クラッシュした組み込みプロセスは、すべてのリモートが一斉に反応しなくなるため深刻に見えますが、対処法はほとんどの場合再起動だけで済みます — そしてログ記録は、次に同じ問題が起きたときに謎を一行の診断に変えてくれます。

---

**関連ガイド:**

- [Rclone設定パスワードエラーの修正 — RcloneViewで暗号化された設定の問題を解決する](https://rcloneview.com/support/blog/fix-rclone-config-password-errors-rcloneview)
- [Rclone転送時の高いメモリ・CPU使用率を修正する — RcloneView活用](https://rcloneview.com/support/blog/fix-rclone-high-memory-cpu-usage-rcloneview)
- [Rcloneセルフアップデート — RcloneViewで組み込みエンジンを最新に保つ](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)

<CloudSupportGrid />
