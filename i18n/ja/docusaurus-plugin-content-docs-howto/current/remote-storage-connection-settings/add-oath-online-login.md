---
sidebar_position: 2
description: "RcloneViewでOAuthまたはブラウザベースのログインを使用してクラウドリモートを設定する方法を学びます。"
keywords:
  - rcloneview
  - SSO
  - OAuth
  - Dropbox
  - Onedrive
  - Box
  - pCloud
  - Yandex
  - premiumize
  - put
  - zoho
  - google cloud storage
  - citrix
  - sharefile
  - hidrive
  - rclone
  - リモート接続
tags:
  - SSO
  - OAuth
  - dropbox
  - onedrive
  - box
  - pcloud
  - yandex
  - premiumizw
  - PLUS-Feature
  - zoho
  - google-cloud-storage
  - citrix
  - sharefile
  - hidrive
date: 2025-06-23
author: Jay
---
# 自動ログイン(OneDrive、Box など)

RcloneViewを使用すると、シンプルなブラウザベースのログイン(OAuth)で**Google Drive、OneDrive、Dropbox、Box**などの主要なクラウドプロバイダーに簡単に接続できます。

:::important オプション設定は不要です
**✅ ほとんどのプロバイダーでは、リモート名を入力するだけで済みます。**  
**✅ オプションタブをスキップして、そのままブラウザログインに進むことができます。**
:::

**保存**をクリックすると、RcloneViewはブラウザウィンドウを開き、クラウドアカウントにサインインできます。ログインが完了すると、リモートが自動的に追加され、すぐに使用できるようになります。手動での設定は必要ありません。

## クイックセットアップガイド

1. **RcloneView**を起動し、上部メニューまたはエクスプローラーパネルから**`+ New Remote`**をクリックします。
2. **Provider**タブで、使用するクラウドサービス(例:Google Drive、OneDrive)を選択します。
3. **Options**タブはスキップします(追加情報の入力を求められる場合を除く)。詳細は以下の表を参照してください。
4. **Save**ステップに進み、**Save**をクリックします。
5. ブラウザウィンドウが開くので、クラウドアカウントにログインします。
6. ログイン後、リモートが自動的に追加されます。

👉 詳しい例をご覧になりたいですか?こちらをご覧ください:[Google Driveの接続方法](../#step-2-adding-remote-storage-google-drive-example)
## 対応クラウドプロバイダーとセットアップ要件

| クラウドプロバイダー           | 必要なオプション                                                   |
| --------------------------- | ---------------------------------------------------------------- |
| Google Drive                | なし                                                             |
| Google Drive Shared with Me | **Advanced Options:**<br />`shared_with_me` = **true**           |
| Google Drive Computers      | **Advanced Options:**<br />`root_folder_id` = `<your folder ID>` |
| Dropbox                     | なし                                                             |
| Dropbox for Business        | **Advanced Options:**<br />`dropbox_business` = **true**         |
| Microsoft OneDrive          | なし                                                             |
| Box                         | なし                                                             |
| Box for Business            | `box_sub_type = enterprise`                                      |
| pCloud                      | なし                                                             |
| Yandex Disk                 | なし                                                             |
| premiumize.me               | なし                                                             |
| put.io                      | なし                                                             |
| Zoho WorkDrive              | `Region` が必要                                                   |
| Google Cloud Storage        | `Project Number` が必要                                           |
| Citrix ShareFile            | `Root Folder ID` が必要                                           |
| HiDrive                     | なし                                                             |

## 例:Google Drive Shared with Me(高度なオプションが必要)

**Google Drive Shared with Me**を使用すると、他のユーザーが明示的に共有したファイルやフォルダに、自分のドライブに追加することなくアクセスできます。これは、ストレージを重複させることなく、組織やチームをまたいで共同作業を行う場合に便利です。

RcloneViewは、リモート設定時の高度なオプション設定を通じてこの機能をサポートしています。

**Options**タブで:

1. 画面下部までスクロールし、**`Show advanced options`**をクリックします。
2. `shared_with_me`フィールドを見つけ、ドロップダウンから**`true`**に設定します。
3. カスタム設定が必要な場合を除き、他のオプションはデフォルトのままにします。
4. **Next**をクリックし、表示されたらブラウザでログインを完了します。

:::tip
`shared_with_me = true`の設定により、Rcloneはあなたが所有するGoogleアカウントに共有されているファイルとフォルダのみを表示するようになります。
:::

<img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-shared-with-me-options.png" alt="google drive shared with me options" class="img-medium img-center" />
## 例:Google Drive Computers(高度なオプションが必要)

**Google Driveの「Computers」**は、Google Driveの特別な「Computers」セクションの下に、デバイス(ノートパソコンやデスクトップなど)のローカルファイルを同期する機能です。各コンピューターは個別のフォルダとして表示され、Rclone経由でアクセスするには一意の`root_folder_id`が必要です。

🔗 この機能について詳しくは、こちらをご覧ください:[Google Driveで同期されたコンピューターにアクセスする](https://support.google.com/drive/answer/3096479)

### RcloneViewでGoogle Drive Computersを接続する方法

1. [drive.google.com](https://drive.google.com/)を開き、**Computers**セクションの下にある対象のコンピューター(例:**My Laptop**)をクリックします。
2. URLから**Computer ID**をコピーします。  
   例えば、  
   `https://drive.google.com/drive/folders/1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ`  
   というURLの場合、`folders/`の後ろの文字列がIDです。  
   `1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ  
3. **RcloneView**を開き、**Remote**メニューの下にある**`+ New Remote`**をクリックし、**Google Drive**を選択して**Options**タブに進みます。
4. 画面下部までスクロールし、**`Show advanced options`**をクリックします。
5. コピーしたComputer IDを`root_folder_id`フィールドに貼り付けます。
6. **Next**をクリックし、OAuthログインに従ってセットアップを完了します。

<div class="img-grid-3">
  <img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-computers-id-copy.png" alt="google drive computers id copy" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computer-remote-options.png" alt="add google drive computer remote options" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computers-options-root-folder-id.png" alt="add google drive computers options root folder id" class="img-medium img-center" />
</div>

✅ セットアップが完了すると、RcloneView内で直接デバイス同期されたGoogle Driveフォルダを閲覧・アクセスできるようになります。

## 例:Box for Businessの接続

**Options**タブで:
- `box_sub_type`に**enterprise**を選択します
- デフォルト設定のまま進めます  
- プロンプトが表示されたら、ブラウザで組織のSSOポータルからサインインします


✅ ログインが完了すると、リモートがRcloneViewに表示され、すぐに使用できるようになります。
