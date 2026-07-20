---
sidebar_position: 2
description: "RcloneViewのmacOSで、権限の付与、フルディスクアクセスの有効化、サポート用ログの収集により、Desktop、Documents、Downloadsが表示されない問題を解決します。"
keywords:
  - rcloneview
  - macos
  - permissions
  - files and folders
  - full disk access
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - Permissions
date: 2025-11-07
author: Jay
---
# Macでローカルフォルダが表示されない(Desktop/Documents/Downloads)

RcloneViewをmacOSにインストールしたばかりで、左側の「Local Disk」ペインに**Desktop**、**Documents**、**Downloads**などのフォルダが表示されない場合、ほとんどの場合macOSのプライバシー権限の問題です。このガイドでは、アクセスを許可する方法と、フォルダが引き続き空に見える場合に試すべきことを説明します。

Explorer自体の概要については、以下を参照してください: [リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)。

## この問題が発生する理由

macOS 10.15(Catalina)以降、Appleは保護されたフォルダ(Desktop、Documents、Downloadsなど)にアクセスする前に、アプリが権限を要求することを義務付けています。「許可しない」をクリックした場合や、アプリがまだ権限を持っていない場合、それらのフォルダはRcloneView内で空として表示されます。

## 権限確認のポップアップが表示される場合

RcloneViewを初めて開いたときや、保護されたフォルダをクリックしたときに、macOSのダイアログが表示されることがあります。

1) Documentsフォルダへのアクセスを求めるポップアップが表示された場合は、**許可**をクリックしてください。

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files1.png" alt="mac allow access to folder and files1" class="img-medium img-center" />

2) 左側のペインで保護されたフォルダ(例: Downloads)をクリックし、同様のプロンプトが表示された場合は、**許可**をクリックしてください。

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files2.png" alt="mac allow access to folder and files2" class="img-medium img-center" />

3) **許可しない**をクリックした場合、権限が付与されるまでフォルダは空のままになります。

<img src="/support/images/en/howto/FAQ/empth-folder-by-dont-allow.png" alt="empth folder by dont allow" class="img-large img-center" />

## 対処方法: システム設定でアクセスを許可する(最初の対応)

フォルダが引き続き空に見える場合、または誤って「許可しない」をクリックしてしまった場合は、macOSのシステム設定からアクセスを許可してください。

**手順(macOS Ventura、Sonoma、Sequoia):**

1. `システム設定 > プライバシーとセキュリティ > ファイルとフォルダ` を開きます。
2. **RcloneView** を見つけます。
3. 必要なフォルダ(例: **Documents Folder**、**Downloads Folder**)のトグルを有効にします。  
4. RcloneViewでフォルダを再度開きます。

<img src="/support/images/en/howto/FAQ/change-setting-for-accessing-to-files-and-folders.png" alt="change setting for accessing to files and folders" class="img-large img-center" />

このリストにRcloneViewが表示されない場合は、一度RcloneViewを起動し、保護されたフォルダを開いてみてください。macOSが再度プロンプトを表示するはずです。

## それでも解決しない場合: フルディスクアクセスを追加する(2番目の対応)

「ファイルとフォルダ」のトグルが有効になっているにもかかわらず内容を参照できない場合は、RcloneViewを**フルディスクアクセス**に追加してみてください。

1. `システム設定 > プライバシーとセキュリティ > フルディスクアクセス` を開きます。
2. `+` ボタンをクリックし、`Applications` から **RcloneView** アプリを選択します。
3. RcloneViewのトグルがオンになっていることを確認します。
4. RcloneViewを再起動し、再度試してください。

<img src="/support/images/en/howto/FAQ/mac-allow-full-disk-access.png" alt="mac allow full disk access" class="img-medium img-center" />

## それでも解決しない場合: ログを収集してサポートに連絡する

上記の手順を試してもアクセスがブロックされたままの場合は、ログを送っていただければサポートいたします。

1. RcloneViewで `Settings > Embedded Rclone` を開きます。
2. **Logging Configuration** の下で、ロギングを有効にし、**Log folder** を選択し、ファイル名(例: `rclone.log`)はそのままにして、**Log level** を **DEBUG** に設定します。
3. **Restart Embedded Rclone** をクリックして変更を適用します。
4. 問題を再現し(問題のあるフォルダを開いてみる)、実施した手順の簡単な説明とともに、ログファイルを [rcloneview@bdrive.com](mailto:rcloneview@bdrive.com) までお送りください。

:::caution 再起動が必要です
ログは **Restart Embedded Rclone** をクリックした後にのみ記録されます。この手順を省略しないでください。
:::

<img src="/support/images/en/howto/FAQ/setting-for-collecting-log-file.png" alt="setting for collecting log file" class="img-large img-center" />

## 関連ガイド

- Explorerでのローカル/クラウドファイルの管理: [リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- 設定の全体概要(Embedded Rcloneとロギングを含む): [一般設定](/howto/rcloneview-basic/general-settings#logging-configuration)

---

さらにサポートが必要な場合は、**[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)** までメールでお問い合わせください。
