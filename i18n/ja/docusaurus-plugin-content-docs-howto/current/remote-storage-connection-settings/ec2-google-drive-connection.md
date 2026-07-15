---
sidebar_position: 11
description: "ウェブブラウザを使用せずに、AWS EC2 で動作する外部 Rclone に Google Drive リモートを追加する方法を、ローカルで生成した OAuth トークンを使って説明します。"
keywords:
  - rcloneview
  - rclone
  - google drive
  - OAuth
  - token
  - ec2
  - external rclone
  - no browser login
  - headless
  - cloud storage
  - Remote Connection
  - remote storage
tags:
  - Remote-Storage
  - google-drive
  - external-rclone
  - aws-ec2
  - remote-connection
  - cloud-storage
date: 2025-07-07
author: Jay
---
# AWS EC2 上の外部 Rclone に Google Drive を追加する(ウェブブラウザなし)

このガイドでは、**AWS EC2 の Ubuntu サーバー**のようにウェブブラウザが利用できない環境で動作している**外部 Rclone インスタンス**に、**Google Drive リモート**を追加する方法を説明します。

このような環境では、ブラウザ経由の標準的な OAuth ログインフローを完了することができません。代わりに、ローカルの RcloneView インストールを使用して必要な **OAuth トークン**を取得し、それを EC2 上で動作している外部 Rclone で再利用します。

:::info EC2 で Rclone デーモンを実行する
EC2 インスタンスに Rclone をインストールして実行する方法については、

以下をご覧ください: 👉 [AWS EC2 で Rclone エンジンを実行する方法](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

:::

手順の概要: ブラウザのあるマシンで Google Drive の OAuth トークンを生成し、そのトークンを RcloneView 経由で EC2 上の外部 Rclone に貼り付けます。

---
## ✅ ステップ 1: Google Drive トークンを生成する(いずれかの方法を選択)

**方法 A: `rclone authorize "drive"`(最速)**

1. ブラウザがあり、同じ rclone バージョンのマシンで、以下を実行します。
   ```bash
   rclone authorize "drive"
   ```
2. ブラウザで Google のログイン/同意を完了します。
3. 出力された JSON トークンブロックをコピーします(JSON 全体を保持してください)。これはステップ 3 で EC2 に貼り付けます。

**方法 B: RcloneView の組み込みリモートを使用してトークンをコピーする**

1. ローカル PC で、組み込みの Rclone(通常のブラウザ OAuth)を使用して Google Drive を追加します。
   👉 [クイックガイド: Google Drive リモートを追加する](../#step-2-adding-remote-storage-google-drive-example)
2. **Remote Manager** を開き、Google Drive リモートを編集して **Show advanced options** をクリックし、**Token** フィールド(JSON)をコピーします。

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-from-embedded-rclone.png" alt="copy google oauth token from embedded rclone" class="img-medium img-center" />

👉 リモートの編集について詳しくは: [リモート設定の編集](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## ✅ ステップ 2: 外部 Rclone(EC2)に接続する

RcloneView で **`new window`** を開くか、現在のセッションを使用して、EC2 でホストされている Rclone に接続します。

- `Settings` -> **`Connection Manager`** を開き、EC2 でホストされている Rclone への新しい接続を作成するか、既に設定済みの接続があればそれに接続します。

👉 詳しくは: [外部 Rclone に接続する](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
👉 詳しくは: [新規ウィンドウ機能](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## ✅ ステップ 3: 外部 Rclone に Google Drive リモートを追加する(トークンを貼り付ける)

1. EC2 に接続したウィンドウで、`Remote` メニューから **`+ New Remote`** を選択します。
2. プロバイダーとして **Google Drive** を選択します。
3. **`Remote Name`** を入力し、**`Show advanced options`** をクリックします。
4. 先ほどコピーした **OAuth Token** を **`Token`** フィールドに貼り付けます。
5. **`Add Remote`** ボタンをクリックして、通常どおりセットアップを完了します。


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-to-external-rclone.png" alt="copy google oauth token to external rclone" class="img-medium img-center" />

:::info **このエラーポップアップは無視してください**
**以下のようなエラーメッセージが RcloneView に表示された場合は、無視して問題ありません。**
このメッセージが表示されても、ほとんどの場合トークンの設定は正常に完了しています。
ダイアログを閉じた後、通常どおり Google Drive にアクセスできるはずです。
これは既知の UI 上の問題であり、次のリリースでユーザー体験を改善する予定です。
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
設定が完了すると、EC2 ベースの Rclone はブラウザのサポートなしでも Google Drive にアクセスできるようになります。通常どおり RcloneView を使用してファイルの管理、同期、転送が行えます。

---

## 🔗 関連ガイド

- [AWS EC2 で Rclone エンジンを実行する方法](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Google Drive リモートを追加する](/howto/#step-2-adding-remote-storage-google-drive-example)
- [リモート設定の編集](/howto/rcloneview-basic/remote-manager#edit-remote-settings)
- [外部 Rclone に接続する](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [マルチウィンドウの使い方](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)
