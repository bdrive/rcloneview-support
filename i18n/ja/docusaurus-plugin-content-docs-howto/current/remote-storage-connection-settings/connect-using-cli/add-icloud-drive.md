---
sidebar_position: 1
description: "Windows で CLI を使用して rclone に iCloud Drive をリモートとして設定する方法（二要素認証の手順や RcloneView との連携を含む）を学びます。"
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - icloud
  - cli
  - icloud drive
  - rclone cli
  - windows
  - 2fa
  - リモートストレージ
  - クラウドストレージ
  - リモート接続
  - apple id
tags:
  - cli
  - icloud
  - windows
  - 2fa
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-05-21
author: Jay
---
# iCloud Drive

iCloud リモートは、現在のところ rclone の CLI からのみ追加できます。

:::info
現在、iCloud のようにインタラクティブな二要素認証（2FA）に対応しているリモートは、CLI からのみ設定できます。これらのリモートを UI から設定できる機能は、今後のリリースで実装される予定です。
:::

## rclone CLI を使用して iCloud Drive を追加する方法（Windows）

#### ステップ1: コマンドプロンプトを開く

- Win + R キーを押し、cmd と入力して Enter キーを押します。

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />

#### ステップ2: rclone の設定を開始する

コマンドプロンプトを開き、rclone の設定プロセスを開始します。

```windows
rclone config
```

以下のようなメニューが表示されます。

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

n と入力して Enter キーを押し、新しいリモートを作成します。

#### ステップ3: iCloud Drive リモートを設定する

画面の指示に従って進めます。

- **名前**: 新しいリモートに名前を割り当てます（例: icloud）。

```windows
Enter name for new remote.
name> Myicloud
```

- **ストレージ**: ストレージオプションの一覧から `iclouddrive` と入力するか、対応する番号（通常は `59`）を入力して iCloud Drive を選択します。リストに表示されない場合は、rclone v1.69 以降を使用していることを確認してください。

```
Storage> iclouddrive
```

- **Apple ID**: Apple ID のメールアドレスを入力します。

```
apple_id> your_email@icloud.com
```

- **パスワード**: パスワードを直接入力することを選択します。

```
y) Yes, type in my own password
g) Generate random password
y/g> y
```

- プロンプトが表示されたら、Apple ID のパスワードを入力します。

```
Enter the password
password:
Confirm the password
password:
```

- **詳細設定**: 特別な要件がない限り、詳細設定はスキップして構いません。

```
Edit advanced config? (y/n)
y/n> n
```

- **二要素認証（2FA）**: Apple ID で 2FA が有効になっている場合（有効にすることを推奨します）、信頼できるデバイスに送信された 2FA コードの入力を求められます。

```
Two-factor authentication: please enter your 2FA code
Enter a value.
config_2fa> 123456
```

- **設定内容の確認**: 設定内容を確認し、確定します。

```
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

これで iCloud Drive リモートの設定が完了しました。

以下のように、iCloud Drive が正常に追加されたことを確認できます。q を入力して rclone config を終了します。

```
Current remotes:

Name                 Type
====                 ====
Myicloud             iclouddrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```
#### ステップ4: 接続をテストする

設定が正しく行われたかを確認するため、iCloud Drive の内容を一覧表示します。

```
rclone lsd Myicloud:
```

iCloud Drive 内のディレクトリ一覧が表示されるはずです。

#### ステップ5: RcloneView で追加された iCloud Drive を確認する

**RcloneView** を起動します。

1. メニューバーの **Remote** タブから **Remote Manager** をクリックします。
2. **Remote Manager** ウィンドウに **iCloud Drive** が表示されていることを確認します。

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step2.png" alt="add icloud drive verify step2" class="img-medium img-center" />
</div>

:::danger 重要な注意事項
- **Advanced Data Protection**: Apple ID で **Advanced Data Protection（ADP）** を有効にしている場合、rclone は iCloud Drive にアクセスできません。iCloud Drive を rclone で使用するには、ADP を無効にする必要があります。iPhone では、以下の手順で設定できます。

```
Settings > [Your Name] > iCloud > Advanced Data Protection
```

- 「Advanced Data Protection」が**オフ**になっていることを確認してください。さらに、「Access iCloud Data on the Web」を**有効**にする必要があります。

- **セッションの有効期限**: 設定時に取得される信頼トークンの有効期間は**30日間**です。この期間が過ぎると、以下のコマンドで再認証する必要があります。

```
rclone reconnect Myicloud:
```

- **アプリ用パスワード**: 現時点では、rclone は iCloud Drive 用のアプリ専用パスワードに対応して**いません**。設定時には、通常の Apple ID パスワードと 2FA を併用する必要があります。

詳細については、rclone の公式ドキュメント [iCloud Drive](https://rclone.org/iclouddrive/) を参照してください。
:::
