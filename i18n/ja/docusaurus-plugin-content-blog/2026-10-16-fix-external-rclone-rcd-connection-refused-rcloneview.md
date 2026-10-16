---
slug: fix-external-rclone-rcd-connection-refused-rcloneview
title: "外部Rcloneの接続拒否を解決 — RcloneViewでrcdアクセスをトラブルシューティング"
authors:
  - casey
description: "RcloneViewの外部rclone接続エラーを解決：rclone rcd、ポート5572、認証情報、ファイアウォール、SSL設定を接続テストで確認します。"
keywords:
  - rclone rcd 接続拒否
  - RcloneView 外部rclone
  - rclone リモートコントロール 接続できない
  - rclone rcd ポート5572
  - RcloneView 接続マネージャー
  - rclone rcd 認証失敗
  - rclone rc 接続の修正
  - rclone rcd ファイアウォール
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cli
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 外部Rcloneの接続拒否を解決 — RcloneViewでrcdアクセスをトラブルシューティング

> RcloneViewが外部のrcloneサーバーに接続できない原因は、ほとんどの場合、数分で確認できる5つのうちのいずれかです。

RcloneViewには組み込みのrcloneが同梱されていますが、多くのユーザーは接続マネージャー（Connect Manager）を使って、NAS、VPS、AWS EC2インスタンス上で動作する外部rcloneに接続します。この接続が「connection refused」、タイムアウト、認証エラーで失敗した場合、短いチェックリストで原因を特定できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## rclone rcdが実際に動作しているか確認

RcloneViewは、`rclone rcd`で起動するリモートコントロール（Remote Control）APIを通じて外部rcloneと通信します。サーバーで認証情報とアドレスを明示して起動してください。例：`rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`。外部rcloneのデフォルトポートは5572で、組み込みインスタンスはローカルホストの5582を使用します。

よくある間違いは、`127.0.0.1`にバインドしたまま別のマシンから接続することです。ループバックはローカルからの通信のみ受け付けます。リモートサーバーの場合は`0.0.0.0:5572`にバインドし、ファイアウォールでIPによりアクセスを制限してください。RcloneViewはGUIツールであり、サーバーにはインストールしません。サーバーで動作させるのはrcloneのみです。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneViewを外部rcloneホストに接続" class="img-large img-center" />

## ネットワーク経路と認証情報の確認

rcdが動作しているのに接続が拒否される場合は、経路をテストします。RcloneViewを実行しているマシンから、ユーザー名とパスワードを付けて`/rc/noop`にヘルスチェックを送ると、応答が返るはずです。応答がなくハングする場合は、ファイアウォールまたはクラウドのセキュリティグループがポート5572をブロックしています。AWS EC2では、制限付きのSSHに加えて、5572用のカスタムTCPルールが必要です。

認証失敗は別の問題です。RcloneViewに入力したユーザー名とパスワードは、大文字小文字も含めて`--rc-user`および`--rc-pass`と完全に一致している必要があります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewで外部接続の詳細を入力" class="img-large img-center" />

## 接続マネージャーで設定を確認

Settings > Connect Manager > New Connectionを開き、表示名、`http://<host>:5572`形式のアドレス、認証情報を入力します。サーバーが自己署名証明書を使用している場合は、SSL証明書の検証を無効にするオプションで接続を続行できます。保存する前にTest Connectionを押して、結果をすぐに確認してください。

それでも失敗する場合は、Settings > Embedded Rcloneでrcloneのログを有効にし、ログレベルをDEBUGに設定して再起動し、問題を再現してログを取得します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneViewでログと履歴を確認" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード** ： [rcloneview.com](https://rcloneview.com/src/download.html)から入手できます。
2. サーバーでユーザー、パスワード、到達可能なアドレスを指定して`rclone rcd`を起動します。
3. ファイアウォールまたはセキュリティグループでポートを開放します。
4. 接続マネージャーで接続を追加し、Test Connectionを押します。

接続が安定すれば、デスクトップからリモートサーバーのクラウドストレージを管理できます。

---

**関連ガイド：**

- [RcloneView接続マネージャー — 組み込みと外部](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [SSL/TLS証明書エラーの修正](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)
- [SFTP接続拒否とタイムアウトの修正](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
