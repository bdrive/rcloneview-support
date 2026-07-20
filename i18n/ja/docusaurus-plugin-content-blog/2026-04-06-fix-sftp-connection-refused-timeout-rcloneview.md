---
slug: fix-sftp-connection-refused-timeout-rcloneview
title: "RcloneViewでSFTPの接続拒否とタイムアウトエラーを修正する"
authors:
  - tayson
description: "RcloneViewでSFTPの接続拒否、タイムアウト、認証エラーを解決します。ファイアウォールルール、SSHキー、ポート設定、タイムアウトの調整について解説します。"
keywords:
  - sftp connection refused rclone
  - sftp timeout error rcloneview
  - fix sftp connection rclone
  - rclone sftp ssh key error
  - sftp firewall blocked
  - sftp port configuration rclone
  - rcloneview sftp setup
  - ssh connection timeout fix
  - sftp authentication failed rclone
  - rclone sftp troubleshoot
tags:
  - RcloneView
  - troubleshooting
  - sftp
  - guide
  - tips
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでSFTPの接続拒否とタイムアウトエラーを修正する

> RcloneViewでのSFTPエラーは、ほとんどの場合、ネットワーク設定、認証設定、またはサーバー側の設定に原因があります。このガイドでは、よくある原因とその修正方法をひとつずつ解説します。

SFTP(SSH File Transfer Protocol)は、rcloneで最も広く使われているリモートの一つで、RcloneViewをSSHアクセス可能な任意のサーバー(NASデバイス、Linuxサーバー、共有ホスティング、セルフホスト型インフラなど)に接続します。クラウドプロバイダーのAPIとは異なり、SFTPはネットワークの到達性、ファイアウォールルール、SSH設定に依存するため、障害のポイントが多くなります。ここでは、最もよくあるSFTPの問題を診断し解決する方法を紹介します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## よくあるSFTPエラーメッセージ

| エラーメッセージ | 考えられる原因 |
|--------------|-------------|
| `connection refused` | SSHサーバーが起動していない、ポートが間違っている、またはファイアウォールでブロックされている |
| `connection timed out` | ファイアウォールによるパケット破棄、サーバーへの到達不能、またはネットワークの問題 |
| `ssh: handshake failed` | SSHキーの不一致、アルゴリズムの非互換性、またはサーバー側の設定 |
| `permission denied (publickey)` | キーファイルの誤り、サーバー上でキーが承認されていない、またはパスフレーズの問題 |
| `permission denied (password)` | パスワードが間違っている、またはサーバーでパスワード認証が無効になっている |
| `no supported methods remain` | rcloneが未設定の認証方式をサーバーが要求している |
| `ssh: unable to authenticate` | 認証情報が提供されていない、または拒否された |
| `too many authentication failures` | 正しいキーが試される前にSSHエージェントが多数のキーを提示している |

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="View SFTP error details in RcloneView job history" class="img-large img-center" />

## 修正1: 接続拒否(Connection Refused)

「connection refused」エラーは、TCP接続が能動的に拒否されたことを意味します。サーバーのネットワークスタック自体には到達できていますが、対象のポートで何も待ち受けていません。

### SSHが起動しているか確認する

リモートサーバー上で `sudo systemctl status sshd` を実行します。SSHが起動していない場合は、`sudo systemctl start sshd && sudo systemctl enable sshd` で起動してください。

### ポートを確認する

デフォルトのSSHポートは22ですが、多くのサーバーはカスタムポートを使用しています。`grep -i "^Port" /etc/ssh/sshd_config` で確認してください。RcloneViewでは、SFTPリモートのポート設定がこれと一致していることを確認します。ポート22とカスタムポート(例: 2222)の不一致は、最もよくある原因の一つです。

<img src="/support/images/en/blog/new-remote.png" alt="Configure SFTP remote port in RcloneView" class="img-large img-center" />

### ローカルファイアウォールによるブロックを確認する

サーバー上で、SSHポートへのインバウンド接続がファイアウォールで許可されているか確認します。`sudo ufw status`(Ubuntu/Debian)、`sudo firewall-cmd --list-ports`(RHEL/Fedora)、または `sudo iptables -L -n | grep 22` を使用してください。ポートがブロックされている場合は、許可するルールを追加します。

## 修正2: 接続タイムアウト

タイムアウトは、パケットは送信されているが応答が返ってきていないことを意味します。これは通常、サーバー側の設定の問題というより、ネットワークレベルの問題です。

### ネットワークの到達性

自分のマシンから基本的な接続性をテストします。

```bash
ping server-hostname
telnet server-hostname 22
```

`ping` は成功するが `telnet` でポート22への接続が失敗する場合、あなたとサーバーの間にあるファイアウォールがSSHポートをブロックしています。

### ルーターとNATファイアウォール

SFTPサーバーがNATルーターの背後にある場合、外部トラフィックをSSHポート経由で内部サーバーIPへルーティングするポートフォワーディングが設定されていることを確認してください。ポートフォワーディングがないと、ローカルネットワーク外からの接続はタイムアウトします。

### ISPまたは企業ファイアウォールによるブロック

一部のISPや企業ネットワークでは、ポート22への送信接続がブロックされています。代替ポートでテストするか、VPNを使用して制限を回避してください。

### Rcloneのタイムアウト調整

Rcloneのデフォルトの接続タイムアウトは、高レイテンシの接続には短すぎる場合があります。`--contimeout` フラグを追加することで延長できます。SFTP特有のサーバー応答遅延については、`--timeout` をより大きな値(例: 低速なサーバーには `5m`)に設定することを検討してください。

## 修正3: SSHキー認証の失敗

キーベースの認証はSFTP接続において最も安全で推奨される方式ですが、設定ミスがよく見られます。

### キーファイルのパスを確認する

RcloneViewのSFTPリモート設定には、SSHキーファイルのパスを指定するフィールドがあります。次の点を確認してください。

- パスが**秘密**鍵(例: `~/.ssh/id_rsa` または `~/.ssh/id_ed25519`)を指しており、公開鍵ではないこと。
- ファイルが存在し、自分のユーザーアカウントから読み取り可能であること。
- キーファイルの権限が正しく設定されていること(Linux/macOSでは `600`)。

### サーバー上でキーを承認する

公開鍵はサーバー上の `~/.ssh/authorized_keys` に記載されている必要があります。`cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys` で追記した後、ファイルの権限を `600`、`.ssh` ディレクトリの権限を `700` に設定してください。

### パスフレーズ保護されたキー

秘密鍵にパスフレーズが設定されている場合、rcloneはキーを復号するためにそのパスフレーズを必要とします。RcloneViewのSFTPリモート設定で、該当するフィールドにパスフレーズを入力してください。空欄のままにすると、認証が静かに失敗します。

### SSHエージェントの競合

多数のキーがロードされたSSHエージェントが動作している場合、サーバーは失敗したキー試行が多すぎることを理由に接続を拒否することがあります(デフォルトの上限は通常6回)。エージェントを経由させないようrclone設定で正確なキーファイルを指定するか、エージェントにロードするキーの数を減らしてください。

## 修正4: パスワード認証の問題

### サーバーでパスワード認証が無効になっている

多くのサーバーは、セキュリティのためパスワード認証を無効にしています。`grep -i "PasswordAuthentication" /etc/ssh/sshd_config` で確認してください。`no` に設定されている場合は、代わりにキーベースの認証を使用する必要があります。

### パスワードが間違っている

RcloneViewのSFTPリモート設定で正しいパスワードを入力していることを確認してください。Rcloneはパスワードを `rclone.conf` 内で難読化した形式で保存します。設定ファイルを手動で編集する場合は、`rclone obscure` を使用してパスワードを正しくエンコードしてください。

## 修正5: 同時接続数の制限

SFTPサーバーは同時セッション数を制限していることがよくあります。Rcloneはデフォルトで同時転送数4を使用しますが、サーバーによっては1つまたは2つの接続しか許可しない場合があります。

大きな転送中に断続的な接続失敗が発生する場合は、並列度を下げてください。

- `--transfers 1` または `--transfers 2` を設定して並列接続数を制限する。
- `--checkers 1` を設定して、同時実行されるチェック操作の数を減らす。

一部の共有ホスティングプロバイダーは特に制限が厳しい場合があります。低い並列度から始めて、徐々に増やしてください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SFTP transfer progress in RcloneView" class="img-large img-center" />

## 修正6: SSHアルゴリズムの非互換性

古いサーバーは最新のSSHアルゴリズムに対応していない場合があり、逆に強化されたサーバーが古いアルゴリズムを拒否する場合もあります。「handshake failed」エラーが表示された場合は、可能であればSSHサーバーソフトウェアを更新するか、`/etc/ssh/sshd_config` の `KexAlgorithms`、`Ciphers`、`MACs` の制限を確認してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer with SFTP remote connected" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneViewをダウンロード**します。
2. 正しいホスト、ポート、認証設定で**SFTPリモートを追加**します。
3. エクスプローラーでリモートを参照して**接続をテスト**します。
4. エラーが発生した場合は、上記の**チェックリストを順番に確認**します。

SFTPの問題は、ソフトウェアのバグではなくほとんどの場合が設定の問題です。ネットワーク、ファイアウォール、認証、サーバー設定という各レイヤーを順序立てて確認することで、大多数のケースが解決します。

---

**関連ガイド:**

- [RcloneViewでrcloneのエラーをトラブルシューティングする](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [rclone設定の破損を修正する](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [中断された転送を復旧する](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
