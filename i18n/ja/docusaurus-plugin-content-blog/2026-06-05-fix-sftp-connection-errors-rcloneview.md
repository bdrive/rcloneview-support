---
slug: fix-sftp-connection-errors-rcloneview
title: "SFTP接続エラーを修正 — RcloneViewでSSHファイル転送の問題を解決"
authors:
  - alex
description: "RcloneViewでよくあるSFTP接続エラー(認証失敗、ホストキーの不一致、タイムアウト)を診断・修正し、SSH転送を正常に動作させる方法を解説します。"
keywords:
  - RcloneView SFTP接続エラーの修正
  - SFTP SSHファイル転送のトラブルシューティング
  - RcloneView SFTPセットアップガイド
  - SFTP認証失敗 rclone
  - SSHファイル転送エラー
  - SFTPホストキー不一致の修正
  - rclone SFTPトラブルシューティング
  - SFTP同期エラーの解決
  - SFTPリモートクラウド同期
  - RcloneViewトラブルシューティングのヒント
tags:
  - RcloneView
  - sftp
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SFTP接続エラーを修正 — RcloneViewでSSHファイル転送の問題を解決

> RcloneViewでのSFTPエラーは、ほとんどの場合、認証設定の誤り、ファイアウォールのルール、ホストキー検証の失敗といった、いくつかの根本原因に集約されます。それぞれに直接的な解決策があります。

SFTP(SSH File Transfer Protocol、ポート22)は、ローカルマシンとサーバー間でファイルを転送する際の定番プロトコルです。Webホスト、オンプレミスのNASデバイス、クラウドVMの多くがSFTPインターフェースを公開しています。RcloneViewがSFTPリモートに接続できない場合、Logタブのエラーメッセージが原因を示しますが、認証情報の誤り、ポートのブロック、ホストキーの不一致、パスの制限など、考えられる問題は多岐にわたるため、診断は手探りのように感じられることがあります。このガイドでは、よくあるSFTPエラーと、それぞれを体系的に解決する方法を解説します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTPリモートを正しく設定する

接続エラーの多くはリモートの設定から始まります。RcloneViewで**Remote タブ > New Remote**を開き、プロバイダー一覧から**SFTP**を選択します。必須項目は**Host**(ホスト名またはIPアドレスのみ — `sftp://`は不要)、**Port**(デフォルトは22)、**Username**、そしてパスワードまたはSSH秘密鍵ファイルのパスによる**Authentication**方式です。

よくある間違いは、Hostフィールドに`sftp://hostname`と入力してしまうことです。RcloneView(rclone経由)はホスト名またはIPアドレスのみを想定しており、`sftp://`のプレフィックスがあると接続は即座に拒否されます。サーバーが鍵ベースの認証を使用している場合は、秘密鍵ファイルのパスがローカルマシン上の正しいファイルを指していることを確認してください。LinuxおよびmacOSでは、鍵ファイルのパーミッションを`600`以下に設定する必要があります。SSHクライアントは、誰でも読み取り可能な鍵の使用を拒否します。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new SFTP remote in RcloneView" class="img-large img-center" />

## 認証失敗を診断する

認証失敗は、RcloneViewの**Logタブ**に`ssh: handshake failed`や`Permission denied (publickey,password)`といったメッセージとして表示されます。以下の手順を順番に確認してください。

1. **ユーザー名を確認する** — ターミナルのSSHクライアントで一度接続し、正確なアカウント名を確認します。RcloneViewは同じ認証情報を使用するため、大文字・小文字の違いが問題になることがあります。
2. **鍵認証かパスワード認証かを確認する** — サーバーが鍵ベースのログインを強制している場合、RcloneViewでのパスワード入力は失敗します。パスワード欄は空欄のままにし、代わりに秘密鍵のパスを指定してください。
3. **DEBUGログを有効にする** — Settings > Embedded Rclone > Enable rclone Loggingに移動し、レベルをDEBUGに設定して、エラーを再現します。ログファイルにはSSHハンドシェイクの全過程が記録され、正確な拒否ポイントを特定できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView transfer view for an active SFTP sync job" class="img-large img-center" />

## ホストキー不一致エラーを解決する

rcloneがSFTPサーバーに初めて接続する際、サーバーのホストキーを記録します。その後、サーバーの再構築、OSの再インストール、証明書のローテーションなどにより鍵が変更されると、rcloneは`host key mismatch`エラーを出し、中間者攻撃を防ぐために接続を拒否します。これを解決するには、RcloneViewで**Rclone Terminal**タブを開き、以下を実行します。

```
rclone config show <remote-name>
```

出力に表示される`known_hosts_file`のパスを確認し、そのファイルをテキストエディタで開いて、該当ホストの古いエントリを削除します。次回の接続時に新しい鍵を信頼するよう促され、正しく保存されます。

## ファイアウォールとタイムアウトの問題を修正する

接続試行がエラーなしで止まってしまう場合、または`dial tcp: connection timed out`が発生する場合、サーバー側またはクライアント側のネットワークでポート22がファイアウォールによってブロックされている可能性が高いです。Terminalタブで`rclone about <remote-name>:`を使い、rcloneがサーバーに到達できるかをテストし、直接ターミナルからのSSH接続の結果と比較してください。SSHクライアントは成功するのにrcloneがタイムアウトする場合は、お使いのマシンや社内ネットワークが、ブラウザ以外の接続に影響するアウトバウンドのファイアウォールルールを適用していないか確認してください。アウトバウンドのポート22をブロックするネットワークの場合、サーバー管理者にSFTPを別のポート(よくあるのはポート443)で公開してもらうよう依頼し、RcloneViewのリモート設定のPortフィールドをそれに応じて更新してください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP sync job in the RcloneView Job Manager" class="img-large img-center" />

## 失敗した転送後にジョブ履歴を確認する

接続が安定したら、**Job History**ビューを確認し、これまでの失敗した実行によって転送先に不完全なファイルが残っていないかを確認します。RcloneViewは各ジョブのステータス、転送件数、速度、エラーコードを記録します。ざっと確認するだけで、再実行が必要な不完全な同期を特定でき、Dry Runオプションを使えば、操作を実行する前にどのファイルがコピーまたは削除されるかを正確にプレビューできます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing SFTP sync results in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote タブ > New Remote > SFTP**を開き、ホスト名(`sftp://`プレフィックスなし)、ポート、ユーザー名、認証情報を入力します。
3. Settingsで DEBUGログを有効にし、エラー発生時にSSHハンドシェイクの全過程を記録できるようにします。
4. 転送に失敗した場合は**Job History**を確認し、再実行が必要な不完全な同期を特定します。

正しい認証情報とrcloneのログ出力を明確に把握していれば、ほとんどのSFTPエラーは迅速に解決できます。RcloneViewを使えば、結果の検証や生産的なファイル転送への復帰も簡単に行えます。

---

**関連ガイド:**

- [FTPサーバーファイルを管理 — RcloneViewでクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [RcloneViewでSFTPとSMBをローカルドライブとしてマウント](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [RcloneViewでrcloneのエラーをトラブルシューティング](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
