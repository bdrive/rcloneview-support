---
slug: fix-smb-windows-network-share-mount-errors-rcloneview
title: "SMBネットワーク共有のマウントエラーを解決 — RcloneViewで接続の問題を修正"
authors:
  - tayson
description: "RcloneViewでSMB/CIFSネットワーク共有の接続・マウントエラーを診断して修正します。Windows共有における認証失敗、プロトコルの不一致、権限の問題を解決します。"
keywords:
  - SMB mount error RcloneView
  - fix SMB connection error rclone
  - CIFS network share troubleshooting
  - Windows network share mount error
  - rclone SMB authentication error
  - SMB protocol mismatch fix
  - fix network drive connection RcloneView
  - SMB share permission error
tags:
  - troubleshooting
  - smb
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SMBネットワーク共有のマウントエラーを解決 — RcloneViewで接続の問題を修正

> RcloneViewでのSMB/CIFSネットワーク共有エラーは、多くの場合、認証の不一致、プロトコルバージョンの競合、またはファイアウォールによるブロックが原因です。それぞれのケースの診断方法と修正方法を紹介します。

SMB(Server Message Block)/CIFSは、Windowsがネットワークファイル共有に使用するプロトコルで、NASデバイス、Windowsファイルサーバー、Samba共有はすべてこれを使用します。RcloneViewはSMB共有にリモートとして接続し、SMBとクラウドストレージ間の同期や、他のクラウドプロバイダーと並べてSMB共有をマウントできます。ただし、SMB接続はネットワーク構成の影響を受けやすく、認証モード、ダイアレクトのバージョン、ファイアウォールルールのすべてが接続の成否に影響します。このガイドでは、よくあるSMBエラーとその修正方法を解説します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでよく見られるSMBエラーメッセージ

SMB接続に失敗した後は、**Logタブ**を確認してください。よく見られるエラーのシグネチャは以下の通りです。

- `NT_STATUS_LOGON_FAILURE` — ユーザー名またはパスワードが誤っている
- `NT_STATUS_ACCESS_DENIED` — 認証情報は正しいが、共有の権限がアクセスを拒否している
- `connection refused` または `no route to host` — ファイアウォールがポート445(SMB)をブロックしている
- `SMB negotiation failed: Protocol negotiate error` — クライアントとサーバー間でプロトコルバージョンが一致しない
- `NT_STATUS_IO_TIMEOUT` — SMBサーバーに到達できない、または応答がない

それぞれのエラーは異なる根本原因と修正方法を示しています。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring an SMB remote connection in RcloneView" class="img-large img-center" />

## 認証エラーと権限エラーの修正

`NT_STATUS_LOGON_FAILURE` の場合は、ユーザー名の形式を確認してください。SMB認証では、サーバーに応じた正しい形式のユーザー名が必要です。
- ドメインアカウント: `DOMAIN\username` または `username@domain.com`
- NAS上のローカルアカウント: ドメインプレフィックスなしの `username` のみ
- ゲストアクセス: ユーザー名とパスワードを空欄にするか、`guest` を使用

`NT_STATUS_ACCESS_DENIED` の場合、認証情報自体は有効ですが、共有のACLが認証済みユーザーへのアクセスを許可していません。NASまたはWindowsサーバーの管理パネルにログインし、共有の権限に自分のアカウントの読み取り(または読み書き)アクセスが含まれているか確認してください。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Testing SMB share connection and browsing files in RcloneView" class="img-large img-center" />

## プロトコルバージョンの問題の修正

古いNASデバイスやSambaサーバーは、rcloneがデフォルトでネゴシエートする最新のSMB3ダイアレクトをサポートしていない場合があります。RcloneViewのRemote Managerで、SMBリモートを編集し、**SMB version** フィールドを明示的に設定してください。レガシーハードウェアの場合は `SMB2` または `SMB1` を試してください。なお、SMB1はセキュリティ上の理由からWindows 10/11およびWindows Server 2016以降ではデフォルトで無効になっているため、可能な限りSMB1の使用は避けてください。

Sambaサーバー(Linux NAS、Synology、QNAP上で稼働するSamba)の場合は、`smb.conf` ファイルの `min protocol` と `max protocol` の設定を確認してください。Sambaが少なくともSMB2を提供するよう構成されていることを確認します。

## ファイアウォールと接続性の問題の修正

SMBにはTCPポート445が必要です。RcloneViewに `connection refused` または `no route to host` が表示される場合は、以下を確認してください。
- サーバー側のファイアウォール(Windowsファイアウォール、NASファイアウォール)がクライアントIPからのTCP 445の受信を許可しているか
- ルーターやネットワークスイッチがポート445上のVLAN間トラフィックをブロックしていないか
- インターネット経由のリモートSMBの場合: SMBを直接公開するのではなく、VPN経由でトンネリングする必要がある

設定を修正した後、RcloneViewのTerminalタブで `rclone about smb-remote:` を実行してください。応答が正常に返れば、接続が機能していることを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting an SMB share as a virtual drive through RcloneView Mount Manager" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneViewをダウンロード**します。
2. 接続に失敗した後、Logタブで具体的なSMBエラーコードを確認します。
3. エラーが示す内容に応じて、認証、プロトコルバージョン、またはファイアウォールの問題を修正します。
4. 同期やマウントのジョブを作成する前に、Remote Managerで接続を再テストします。

RcloneViewにおけるSMBエラーは、何かを再インストールしなくてもほぼ必ず解決できます。適切な設定変更によって、ネットワーク共有が確実に接続・同期されるようになります。

---

**関連ガイド:**

- [RcloneViewでSFTPとSMBをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [RcloneViewでSFTPの接続拒否とタイムアウトエラーを修正する](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [RcloneViewでrcloneのエラーをトラブルシューティングする](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
