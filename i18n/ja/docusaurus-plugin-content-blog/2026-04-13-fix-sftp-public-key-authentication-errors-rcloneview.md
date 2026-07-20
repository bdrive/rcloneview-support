---
slug: fix-sftp-public-key-authentication-errors-rcloneview
title: "SFTP公開鍵認証エラーを修正 — RcloneViewでSSHの問題を解決する"
authors:
  - tayson
description: "RcloneViewでのSFTP公開鍵認証失敗をトラブルシューティングします。誤った鍵のパス、権限、パスフレーズの問題、鍵形式の問題を診断します。"
keywords:
  - SFTP public key error RcloneView
  - fix SFTP authentication failure
  - SSH key auth rclone SFTP
  - SFTP permission denied public key
  - RcloneView SFTP troubleshooting
  - SSH key format rclone
  - SFTP key passphrase error
  - rclone SFTP connection fix
tags:
  - RcloneView
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SFTP公開鍵認証エラーを修正 — RcloneViewでSSHの問題を解決する

> SFTP公開鍵認証の失敗は、ほとんどの場合、鍵のパス、ファイル権限、またはパスフレーズの不一致が原因です。このガイドでは、それぞれを体系的に確認していきます。

SFTPはRcloneViewでリモートのLinuxサーバーに接続する最も一般的な方法の一つであり、公開鍵認証はパスワードよりも推奨されるセキュリティ方式です。鍵認証が失敗すると、エラーは分かりにくいことがあります。`ssh: handshake failed`、`permission denied (publickey)`、`no supported methods remain`などです。このガイドでは、最も頻繁に発生する原因と、それぞれの診断・修正方法について解説します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでのSFTPリモート設定

RcloneViewでSFTPリモートを作成する際、鍵ベース認証に関連するフィールドは次のとおりです。

- **Host**: サーバーのホスト名またはIP
- **User**: SSHユーザー名
- **Key file**: 秘密鍵ファイルへのパス（例: `~/.ssh/id_rsa` または `C:\Users\you\.ssh\id_ed25519`）
- **Key file passphrase**: 鍵を復号するパスフレーズ（設定されている場合）

パスワード認証と鍵認証は、リモートごとに排他的です。鍵ファイルを指定する場合は、パスワードフィールドを空にしてください。

<img src="/support/images/en/blog/new-remote.png" alt="SFTP remote configuration with key auth in RcloneView" class="img-large img-center" />

## よくあるエラー1: 鍵ファイルのパスが間違っている

鍵認証失敗の最も頻繁な原因は、鍵ファイルのパスが間違っているか、到達できないことです。以下を確認してください。

- パスが存在し、**秘密**鍵（`.pub`公開鍵ではない）を指しているか
- Windowsでは、完全な絶対パスを使用する（例: `C:\Users\username\.ssh\id_rsa`）
- Linux/macOSでは、`~/.ssh/id_rsa`が正しく展開されるか — 不明な場合は完全なパスを使用する

RcloneViewでSFTPリモートの設定を開き、鍵ファイルのパスを確認してください。指定した場所にファイルが存在しない場合、認証は静かに失敗するか、分かりにくいエラーが表示されます。

## よくあるエラー2: 鍵ファイルの権限が緩すぎる

LinuxとmacOSでは、SSHは誰でも読み取り可能な秘密鍵ファイルの使用を拒否します。鍵ファイルの権限が緩すぎる場合、`Permissions 0644 for '~/.ssh/id_rsa' are too open`というエラーが表示されます。修正方法は次のとおりです。

```
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh
```

Windowsでは、鍵ファイルの権限はファイルセキュリティ設定で管理されます。鍵ファイルが自分のユーザーアカウントのみアクセス可能で、Everyoneと共有されていないことを確認してください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP connection test in RcloneView" class="img-large img-center" />

## よくあるエラー3: パスフレーズの不一致

秘密鍵がパスフレーズで保護されている場合、RcloneViewのSFTPリモート設定にあるパスフレーズフィールドは正確に一致する必要があります。鍵にパスフレーズが設定されているのにフィールドが空の場合、認証は失敗します。逆に、パスフレーズが設定されていない鍵に対してパスフレーズを入力した場合も失敗します。

鍵のパスフレーズが正しいかテストするには、ターミナルを開いて`ssh -i /path/to/key user@host`を実行してください。パスフレーズの入力を求められ、それが受け入れられれば、資格情報は正しいということです。その後、RcloneViewのリモート設定を更新してください。

## よくあるエラー4: サポートされていない鍵形式

古いOpenSSH秘密鍵（PEM形式）は広くサポートされていますが、OpenSSHネイティブ形式の一部の新しいED25519鍵は、rcloneに組み込まれたGo SSHライブラリのバージョンによっては問題を引き起こすことがあります。`ssh: no supported methods remain`というエラーが発生した場合は、次を試してください。

- 鍵をPEM形式に変換する: `ssh-keygen -p -m PEM -f ~/.ssh/id_ed25519`
- またはRSA鍵を生成する: `ssh-keygen -t rsa -b 4096`

## 診断のためのログの確認

SFTP接続の試行が失敗した後、RcloneViewの**Log**タブを開いてください。ログにはSSHハンドシェイクエラーの全体が表示されます。さらに詳細な情報が必要な場合は、RcloneViewの**Terminal**タブを使用して`-vv`フラグを付けてrcloneコマンドを直接実行すると、SSHネゴシエーションの全過程が出力されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing SFTP connection errors in RcloneView logs" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. SFTPリモート設定を開き、鍵ファイルのパスが正しい秘密鍵を指しているか確認してください。
3. Linux/macOSでは、`ls -la ~/.ssh/`で鍵ファイルの権限を確認し、`chmod 600`で修正してください。
4. パスフレーズフィールドが鍵のパスフレーズと一致していることを確認し、Remote Managerから接続をテストしてください。

パス、権限、パスフレーズを体系的に確認することで、SFTP公開鍵認証失敗の大部分を解決できます。

---

**関連ガイド:**

- [SFTP接続拒否とタイムアウトエラーを修正する](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [RcloneViewでrcloneエラーをトラブルシューティングする](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [ネットワークエラーによるクラウド同期の中断を修正する](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)

<CloudSupportGrid />
