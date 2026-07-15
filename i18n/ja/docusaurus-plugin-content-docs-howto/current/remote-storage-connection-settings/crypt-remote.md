---
sidebar_position: 2
description: "RcloneViewでCrypt Remoteを追加し、既存のクラウドリモートの上に暗号化レイヤーを追加しながら、アプリ内でアクセスを維持します。"
keywords:
  - rcloneview
  - crypt
  - 仮想リモート
  - 暗号化リモート
  - クラウド暗号化
  - リモートマネージャー
  - プライバシー
tags:
  - RcloneView
  - crypt
  - remote-storage
  - encryption
  - virtual-remote
date: 2025-12-08
author: tayson
---

# Crypt

## RcloneViewでCryptを追加する方法

**Crypt Remote** は、既存のクラウドリモート(Google Drive、OneDriveなど)の上に暗号化レイヤーを追加します。  
ファイルは元のリモートに保存されたままで、Cryptリモートが暗号化と復号を処理します。

Cryptが便利な理由:

- プロバイダーがファイルの内容を見るのを防ぎます。
- 完全なプライバシーのためにファイル名も暗号化できます。
- RcloneView内で復号が自動的に行われます。
- 機密性の高いバックアップに最適です。

---

## Crypt Remoteが空に見える理由

ユーザーは通常、Crypt remote内で通常のファイルが表示されることを期待しますが、実際には次のようになります。

- Cryptには**暗号化された**ファイルのみが表示されます。
- 元のリモート内の通常のファイルはCryptビューには表示されません(これは正常な動作です)。

例:

- `mygoogledrive:Meet Recordings` には通常のファイルが含まれています。
- `MyCryptGoogle:` は同じフォルダをCryptでラップします。
- Cryptリモートでは空に見えます—これは想定どおりの動作です。

**Crypt経由**でアップロードすると、ファイルは暗号化されて保存されるため、次のようになります。

- Cryptリモートでは通常どおり(復号された状態で)表示されます。
- 元のリモートでは暗号化された名前で表示されます。

---

## New RemoteからCrypt Remoteを作成する

### ステップ1 — **New Remote** → **Virtual** → **Crypt** を開く

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="new remote add crypt" class="img-large img-center" />

### ステップ2 — Cryptの詳細を入力する

必須項目:

- **Remote name**: Cryptリモートの名前(例: `MyCryptGoogle`)。
- **Remote (folder to encrypt)**: フォルダピッカーをクリックして、保護対象の既存リモートとフォルダを選択します。

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="select target remote and folder for crypt" class="img-large img-center" />

選択後、設定内容を確認し、**Add Remote** をクリックします。  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-crypt-input.png" alt="crypt input window" class="img-large img-center" />

### ステップ3 — Remote Managerで確認する

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="remote manager crypt" class="img-large img-center" />

---

## Crypt Remoteでのファイルのアップロードと表示

Cryptリモート経由でアップロードすると:

- アップロード時にファイルが**暗号化**されます。
- Cryptビューでは利便性のために**復号された名前**が表示されます。
- 元のリモートでは**暗号化されたファイル名**が表示されます。

比較例:  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="crypt upload file compare" class="img-large img-center" />

| 表示場所                          | 表示内容                             |
| ------------------------------- | ----------------------------------- |
| `MyCryptGoogle:`                | 通常に見えるファイル名(復号済み)      |
| `mygoogledrive:Meet Recordings` | 暗号化されたファイル名(想定どおり)    |

---

## Crypt Remoteを使用する理由

- クラウドプロバイダーがファイルの内容を読み取れません。
- 完全なプライバシーのためにファイル名を暗号化できます。
- RcloneViewでの自動復号により、使い方がシンプルになります。
- 安全なバックアップ、機密文書、共有ドライブに最適です。
- スケジューラーと組み合わせることで、自動化された暗号化バックアップが可能です。

---

## まとめ

| 機能                          | 説明                                             |
| -------------------------- | ------------------------------------------------- |
| **Crypt Remote**           | 既存のリモートの上に追加する暗号化レイヤー           |
| **通常のファイルの可視性**    | 通常のファイルはCryptビューでは非表示(正常な動作)  |
| **Crypt経由のアップロード**   | 暗号化されて保存され、Cryptビューでは復号された状態で表示される |
| **目的**                    | 安全なクラウドバックアップとプライバシー保護          |

