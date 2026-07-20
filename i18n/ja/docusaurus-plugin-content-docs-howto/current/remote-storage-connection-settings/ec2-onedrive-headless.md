---
sidebar_position: 12
description: "AWS EC2にRcloneをインストールして実行し、PC上のRcloneViewから接続して、サーバー上でブラウザを使わずにOneDriveリモートを追加する方法。"
keywords:
  - rcloneview
  - rclone
  - onedrive
  - headless
  - external rclone
  - aws ec2
  - rclone rcd
  - remote storage
  - cloud migration
tags:
  - Remote-Storage
  - onedrive
  - external-rclone
  - aws-ec2
  - headless
date: 2025-07-15
author: Jay
---
# AWS EC2上の外部RcloneにOneDriveを追加する(ヘッドレス)

:::info 関連する前提条件
EC2の完全なセットアップ手順が必要な場合は、👉 [AWS EC2でRcloneエンジンを実行する方法](/howto/cloud-storage-setting/run-rclone-on-aws-ec2) を参照してください。
:::

---

手順の概要:ブラウザが使えるマシンでOneDriveのOAuthトークンを生成し、そのトークンをRcloneView経由でEC2上で実行中の外部Rcloneに貼り付けます。

---

## ステップ1. OneDriveトークンを生成する(いずれかの方法を選択)

**方法A: `rclone authorize "onedrive"` を使う(最速)**

1. ブラウザが使えるマシンで、同じバージョンのrcloneを使って以下を実行します。
   ```bash
   rclone authorize "onedrive"
   ```  
2. ブラウザでMicrosoftのログインと同意を完了します。  
3. 表示されたJSONトークンブロックをコピーします(JSON全体を保持してください)。このトークンはステップ3でEC2に貼り付けます。

**方法B: RcloneViewの内蔵リモートを使い、そのトークンをコピーする**

1. ローカルPCで、内蔵Rcloneを使って(通常のブラウザOAuthで)OneDriveを追加します。  
2. **リモートマネージャー**を開き、OneDriveリモートを編集し、**詳細オプションを表示**をクリックして、**Token**フィールド(JSON)をコピーします。

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-from-embedded-rclone.png" alt="copy onedrive oauth token from embedded rclone" class="img-medium img-center" />


👉 リモートの編集について詳しくは:[リモート設定の編集](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## ステップ2. 外部Rclone(EC2)に接続する

RcloneViewで**新しいウィンドウ**を開くか、現在のセッションを使って、EC2にホストされたRcloneに接続します。

- `Settings` -> **`Connection Manager`** を開き、EC2にホストされたRcloneへの新しい接続を作成するか、既に設定済みの接続がある場合はそれに接続します。

👉 詳しくはこちら:[外部Rcloneへの接続](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 詳しくはこちら:[新しいウィンドウ機能](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## ステップ3. 外部RcloneにOneDriveリモートを追加する(トークンを貼り付け)

1. EC2に接続されたウィンドウで、`Remote`メニューを開き、**`+ New Remote`**を選択します。
2. プロバイダーとして**OneDrive**を選択します。
3. **Remote Name**を入力し、**詳細オプションを表示**をクリックします。
4. 先ほどコピーした**OAuthトークン**を**Token**フィールドに貼り付けます。
5. **Add Remote**をクリックして設定を完了します。


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-to-external-rclone.png" alt="copy onedrive oauth token to external rclone" class="img-medium img-center" />
:::info **このエラーポップアップは無視してください**
以下のようなエラーメッセージがRcloneViewに表示された場合は、無視して問題ありません。
このメッセージが表示されても、ほとんどの場合、トークンの設定は正常に完了しています。
ダイアログを閉じた後、通常どおりOneDriveにアクセスできるはずです。  
これは既知のUIの問題であり、次回のリリースでユーザー体験を改善する予定です。
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
設定が完了すると、EC2上のRcloneはブラウザのサポートなしでもOneDriveにアクセスできるようになります。通常どおりRcloneViewを使って、ファイルの管理・同期・転送が可能です。

---

## 関連リンク

- [AWS EC2でRcloneエンジンを実行する方法](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- [コネクションマネージャー](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
- [マルチウィンドウの使い方](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)  
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)  
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)  
- [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)
