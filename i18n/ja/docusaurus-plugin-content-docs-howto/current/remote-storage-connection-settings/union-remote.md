---
sidebar_position: 4
description: "RcloneViewでUnionリモートを追加し、複数のRemote:Pathの場所をデータを複製せずに1つの統合フォルダビューにまとめる方法。"
keywords:
  - rcloneview
  - union remote
  - virtual remote
  - merged folder
  - multi cloud
  - remote manager
  - union
tags:
  - RcloneView
  - union
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Union

## RcloneViewを使ったUnionの追加方法

**Unionリモート**は、複数のクラウドリモートのフォルダを1つの統合フォルダにマージします。Combineとは異なります。

- **Combine**は複数のフォルダを並べて表示します。
- **Union**は複数のフォルダを1つのビューにマージします。

Unionは次のような場合に便利です。

- 複数のリモートにまたがるデータを、あたかも1つのフォルダであるかのようにアクセスする。
- シングルペインでの閲覧やマルチクラウドバックアップの構成。
- データをコピーや移動することなく、仮想ファイルシステムを構築する。

---

## Unionリモートを作成する

### ステップ1 — **New Remote** → **Virtual** → **Union**

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="new remote add union" class="img-large img-center" />

### ステップ2 — Unionの詳細を入力する

以下を入力します。

- **Remote name**: 例: `MyUnion`。
- **Upstreams (Remote:Path)**: 各Upstreamは実際の1つのフォルダの場所です。

リモートとフォルダを選択して最初のUpstreamを追加します。  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-1.png" alt="union select folder first" class="img-large img-center" />

さらにUpstreamを追加するには、**Add Remote**をクリックして次のフォルダを選択します。  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-2.png" alt="union select folder second" class="img-large img-center" />

必要なだけUpstreamを追加したら、設定内容を確認します。  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-add-union-input.png" alt="union input window" class="img-large img-center" />

**Add Remote**をクリックしてUnionリモートを作成します。

### ステップ3 — Remote Managerで確認する

<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-remote-manager-union.png" alt="remote manager union" class="img-large img-center" />

---

## Explorerでunionを確認する

ExplorerでUnionリモートを開きます。すべてのUpstreamの内容が1つのマージされたフォルダとして表示されます。

**Upstreams 1 — Google Driveの例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="union check folder google drive" class="img-large img-center" />  
`mygoogledrive:Meet Recordings`に一致します。

**Upstreams 2 — Dropboxの例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-2.png" alt="union check folder dropbox" class="img-large img-center" />  
`drop:assets`に一致します。

---

## CombineとUnionの主な違い

| 機能           | Combineリモート                   | Unionリモート                          |
| -------------- | --------------------------------- | ------------------------------------- |
| 表示スタイル   | 複数のフォルダを個別に表示        | 単一のマージされたビューを表示        |
| 書き込みルール | マージされない、個別のフォルダ    | 新しい書き込みはUnionポリシーに従う   |
| フォルダ構造   | Folder1 / Folder2                 | 1つに統合された仮想フォルダ           |
| 最適な用途     | 整理・分類                        | マルチクラウドのマージと統一的な利用  |

---

## Unionを使うべき場面

- 複数のクラウドのデータを1つのフォルダで同時に閲覧したい場合。
- 複数のリモートに分散したプロジェクトを統合したビューで扱いたい場合。
- 1つの仮想リモートに対してSync/バックアップジョブを実行したい場合。
- ストレージを複製することなく、マージされたビューを提供したい場合。

---

## まとめ

| 項目                | 説明                                                 |
| ------------------- | ----------------------------------------------------- |
| **Unionリモート**   | 複数の`Remote:Path`エントリを1つのビューにマージする |
| **Upstreams**       | Unionを構成する実際のリモートフォルダ                |
| **メリット**        | マルチクラウドの統合、シングルペインでのアクセス     |
| **目的**            | 統合的な閲覧、バックアップ/Sync、プロジェクトの統一  |

Unionリモートは、1つのマージされたフォルダビューを通じてマルチクラウド環境を管理するための強力な仮想リモートです。
