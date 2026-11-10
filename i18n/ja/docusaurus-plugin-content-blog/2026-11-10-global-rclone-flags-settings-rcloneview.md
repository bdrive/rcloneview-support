---
slug: global-rclone-flags-settings-rcloneview
title: "グローバルRcloneフラグ — RcloneViewのすべてのジョブにカスタムオプションを適用"
authors:
  - alex
description: "RcloneViewのGlobal Rclone Flagsで追加のrcloneオプションを全体に適用する方法と、ログ、構成パスワード、バイナリパスの設定を解説します。"
keywords:
  - rclone グローバルフラグ
  - RcloneView 設定
  - rclone フラグ GUI
  - 組み込みrclone設定
  - no-check-certificate
  - rclone ログレベル
  - rclone 構成パスワード
  - カスタムrcloneバイナリ
  - RcloneView 詳細設定
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# グローバルRcloneフラグ — RcloneViewのすべてのジョブにカスタムオプションを適用

> rcloneフラグを設定で一度指定すれば、ジョブごとに繰り返さずRcloneView全体に適用されます。

環境によっては、すべての場所で追加のrcloneオプションが1つ必要になります。プライベートサーバーの自己署名証明書、カスタムのログ保存先、暗号化された構成ファイルなどです。これらはEmbedded Rcloneの設定ページにあります。RcloneViewは90以上のプロバイダーを1つのウィンドウでマウントおよび同期でき、Windows、macOS、Linuxで動作します。これらの設定は組み込みエンジン全体に適用されます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定の場所

Settingsタブを開き、Embedded Rcloneを選択します。rcloneバイナリの場所、rclone.confの場所、既定のダウンロード/アップロードフォルダー、Stop rclone on App Exitの切り替え、ログオプション、Config Passwordフィールド、Global Rclone Flagsボックスがあります。

Embedded Rcloneは既定で`http://127.0.0.1:5582`で待ち受け、RcloneViewはrclone RC API経由で通信します。設定を変更するとエンジンの起動方法が変わるため、編集後はEmbedded Rcloneを再起動してください。

<img src="/support/images/en/blog/new-remote.png" alt="組み込みrclone設定を使用するRcloneViewのリモート設定" class="img-large img-center" />

## Global Rclone Flagsの使い方

Global Rclone Flagsフィールドには、全体に適用される追加のrcloneフラグを指定できます。ドキュメントにある例は`--no-check-certificate`で、WebDAVやHTTPSベースのサーバーが自己署名証明書を使っている場合に便利です。証明書の検証を無効にするため、公開エンドポイントではなく信頼できるプライベートサーバーに限って使用してください。

単一のジョブを調整する場合は、ジョブごとのAdvanced Settings(転送数、チェッカー数、チェックサム、リトライ)を使うことをおすすめします。グローバルフラグは、本当にすべてに必要なオプションだけに使いましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="グローバルフラグを補完するRcloneViewのジョブ設定" class="img-large img-center" />

## ログと構成の保護

Enable rclone Loggingにチェックを入れ、ログフォルダーとファイル名を指定し、DEBUG、INFO、NOTICE、ERRORからレベルを選びます。DEBUGは最も詳細で、問題を報告する際にサポートから求められるレベルです。Restart Embedded Rcloneをクリックし、問題を再現してからログファイルを送ってください。

rclone.confが暗号化されている場合は、組み込みエンジンがリモートを読み取れるよう、ここにConfig Passwordを入力します。カスタムのrcloneバイナリや構成パスを指定することもでき、アプリ内のSelf Updateで組み込みrcloneを最新に保てます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneViewでrcloneログと併用するJob History" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード**: [rcloneview.com](https://rcloneview.com/src/download.html)から入手してください。
2. Settings、Embedded Rcloneの順に開き、現在のパスを確認します。
3. 必要なフラグをGlobal Rclone Flagsに追加し、記録が必要ならログを有効にします。
4. Embedded Rcloneを再起動し、小さなテストジョブを実行します。

厳選したいくつかのグローバル設定で、余計な操作なしにすべてのジョブを一貫して保てます。

---

**関連ガイド:**

- [Log Debug: 転送のトラブルシューティング](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)
- [RcloneViewのRclone Self Update](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)
- [SSL/TLS証明書エラーの修正](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
