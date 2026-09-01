---
slug: fix-crypt-remote-password-decrypt-errors-rcloneview
title: "Cryptリモートの復号エラーを修正する — RcloneViewでのパスワードと設定の問題"
authors:
  - kai
description: "RcloneViewでのcryptリモートの復号失敗、bad-decryptエラー、パスワード紛失をトラブルシューティングします。暗号化されたクラウドストレージのための実用的な修正方法です。"
keywords:
  - crypt remote decryption error
  - rclone crypt bad decrypt
  - fix rclone crypt password
  - 暗号化クラウドストレージ エラー
  - rclone 設定 パスワード紛失
  - crypt remote troubleshooting
  - rcloneview 暗号化エラー
  - クラウドファイル復号 rclone
  - crypt remote config corrupted
  - rclone crypt filename error
tags:
  - RcloneView
  - troubleshooting
  - tips
  - encryption
  - crypt
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cryptリモートの復号エラーを修正する — RcloneViewでのパスワードと設定の問題

> Cryptリモートが突然「bad decrypt」エラーを出したり、ファイルの一覧表示を拒否したりする場合、通常は一つの理由に集約されます。データを読み取るために使われたパスワードが、暗号化時に使われたパスワードと一致していないのです。

Rcloneのcrypt仮想リモートは、既存のリモートをラップし、ファイル名、フォルダ名、ファイル内容をマシンから出る前に暗号化します。この保護は強力ですが、同時に、パスワードの不一致や設定エントリの破損一つで、クラウド上でそのまま無事なはずのファイルにアクセスできなくなる可能性があることも意味します。RcloneViewはこれらのエラーをLogタブとTerminalに直接表示するため、推測に頼らず正確に何が問題なのかを診断できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cryptの復号が失敗する理由

Cryptリモートは2つの秘密情報を保存します。メインパスワードと、任意の2つ目のパスワード(「ソルト」)です。どちらもRcloneViewのNew Remoteウィザードでリモートを設定する際に、難読化されてrclone設定に保存されます。復号が失敗するのは、いずれかの値が元々使われていたものと一致しない場合です。よくある原因は、設定リセット後に記憶を頼りにcryptリモートを再作成したり、正確な難読化パスワード文字列をコピーせずに`rclone.conf`ファイルだけをマシン間でコピーしたりすることです。

もう一つよくある原因は、誤ったcrypt「ファイル名暗号化」モードを適用することです。元のリモートが標準のファイル名暗号化を使用していたのに、再構築したリモートで「off」や「obfuscate」を使うと、RcloneViewは文字化けした名前を表示するか、解釈できないディレクトリ構造を読み込もうとして完全に失敗します。

<img src="/support/images/en/blog/new-remote.png" alt="パスワードフィールドを持つRcloneViewでのcryptリモート作成" class="img-large img-center" />

## Bad Decryptと文字化けしたファイル名エラーの修正

Remote Managerでcryptリモートの設定を開き、ラップしている元のリモートの設定と比較することから始めます。パスワードとpassword2フィールド、ファイル名暗号化モード、対象パスがすべて元々使われていたものと一致しているか確認してください。正確な設定が分からない場合は、Settingsでrcloneのログレベルを DEBUG に設定した後、Logタブを確認してください。エラーテキストには通常、rcloneが拒否した具体的なフィールド名が記載されています。

設定のワイプ後にcryptリモートを再構築し、元の`rclone.conf`をまだ持っている場合は、パスワードを手で入力し直さないでください。rclone設定ファイルに保存されているパスワードは難読化されているだけでプレーンテキストではないため、正確な難読化文字列をそのまま貼り付けることで正確に保持されます。手入力し直すと、見た目は同じでも実際には微妙に異なり何も復号できないパスワードになるリスクがあります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="cryptリモートのエラーによって失敗した同期を示すジョブ履歴" class="img-large img-center" />

## パスワードを本当に紛失した場合の復旧

裏口はありません。rcloneのcrypt暗号化は、正しいパスワードなしにはデータを復元できないよう設計されています — RcloneViewでも、rcloneでも、クラウドプロバイダーでも同様です。パスワードを本当に紛失した場合、現実的な対処法は復旧ではなく予防です。Settingsを通じてrclone設定を定期的にエクスポートし、エクスポートしたファイル(少なくともcryptパスワード)をRcloneViewが動作しているマシンとは別の安全な場所に保管してください。

RcloneViewはFREEライセンスでも同期とフォルダ比較を行えるため、cryptリモートが正しく動作していることを確認した後は、Dry Runの同期を実行して、新しいデータを信頼する前に復号が成功することを確認できます。これにより、バックアップジョブが失敗する前にパスワードの不一致を発見できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="cryptリモートの内容が期待どおりであることを確認するフォルダ比較ビュー" class="img-large img-center" />

## 使い始める

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remote Managerを開き、エラーが発生しているcryptリモートを見つけます。
3. Settingsでrcloneのログレベルを DEBUG に設定してから、エラーを再現して正確な失敗メッセージを取得します。
4. cryptリモートのパスワード、password2、ファイル名暗号化モードを、元のセットアップメモやエクスポートした設定と比較します。

Cryptリモートのエラーを素早く解決できるかどうかは、ちょっとした設定確認で済むか、本当に復元不可能なバックアップになるかの分かれ目です。暗号化パスワードは、それが守っているデータと同じくらい大切に扱ってください。

---

**関連ガイド:**

- [Zero-CLI Encryption with RcloneView Crypt Remote: Protect Any Cloud Folder](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [How to Backup, Migrate, and Manage Your Rclone Config with RcloneView](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [Fix Rclone Config Corruption and Recovery Issues in RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)

<CloudSupportGrid />
