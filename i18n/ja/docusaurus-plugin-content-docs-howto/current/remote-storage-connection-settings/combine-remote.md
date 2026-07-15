---
sidebar_position: 3
description: "RcloneViewでデータをコピーせずに複数のクラウドフォルダを1つの仮想ビューに統合。マルチクラウド閲覧や統合ジョブに最適です。"
keywords:
  - rcloneview
  - combine remote
  - virtual remote
  - multi cloud
  - union remote
  - cloud viewer
  - remote manager
tags:
  - RcloneView
  - combine
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Combine

## RcloneViewでCombineを追加する方法

**Combine Remote**は、複数のクラウドリモートのフォルダを1つの仮想ビューに統合します。データをコピーしたり移動したりすることはなく、複数の場所を1つのフォルダとして閲覧できるようにするだけです。

便利な理由:

- 複数のクラウドに散らばったデータを1か所で確認できる。
- 異なるサービスのプロジェクトフォルダを1つのワークスペースとして扱える。
- バックアップ/同期ジョブを1つのリモートであるかのように実行できる。
- 追加のストレージや重複ファイルが発生しない。

Combine Remoteは、実質的にマルチクラウドビューアーです。

---

## Combine Remoteの作成

### ステップ1 — **New Remote** → **Virtual** → **Combine**

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="new remote add combine" class="img-large img-center" />

### ステップ2 — Combineの詳細を入力

各エントリには3つのフィールドが必要です。

- **Remote name**: Combineリモートの名前(例: `MyCombine`)。
- **Directory**: Combineビュー内に表示されるフォルダ名(例: `Folder1`)。
- **Remote Path**: 含める実際のクラウドパス。フォルダアイコンをクリックすると、登録済みのリモートから選択できます。

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-1.png" alt="combine select folder first" class="img-large img-center" />

最初のパスを選択した後:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-2.png" alt="combine select folder second" class="img-large img-center" />

**Add Remote**を使って、Folder2、Folder3などを追加します。  
すべてのエントリを設定したら:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-add-combine-input.png" alt="combine input window" class="img-large img-center" />

**Add Remote**をクリックして、Combineリモートを作成します。

### ステップ3 — Remote Managerで確認

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-remote-manager-combine.png" alt="remote manager combine" class="img-large img-center" />

---

## Explorerで統合されたフォルダを確認する

Explorerで Combineリモートを開き、追加した各フォルダを確認します。

**Folder1 — Google Driveの例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="combine check folder google drive" class="img-large img-center" />  
`mygoogledrive:Meet Recordings`と同じ内容が表示されます。

**Folder2 — Dropboxの例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-2.png" alt="combine check folder dropbox" class="img-large img-center" />  
`drop:assets`と同じ内容が表示されます。

---

## Combineを使うタイミング

- 複数のクラウドにまたがるデータを一度に確認したい場合。
- 複数のリモートに分散したプロジェクトフォルダを統合したい場合。
- 1つの仮想リモートを通じてバックアップや同期ジョブを管理したい場合。
- 元の構造を維持したままビューを統合したい場合。
- ストレージの重複を避けつつ、統合されたワークスペースを得たい場合。

---

## まとめ

| 機能                     | 説明                                              |
| ------------------------ | ------------------------------------------------- |
| **Combine Remote**       | 複数のフォルダを1つの仮想ビューに統合             |
| **データの重複なし**     | ファイルは元の場所にそのまま保持される             |
| **各種リモートを追加**   | Drive、Dropbox、OneDrive、S3などに対応             |
| **ユースケース**         | 統合閲覧、マルチクラウドバックアップ、プロジェクト |

Combine Remoteを使えば、ファイルを移動したり重複させたりすることなく、マルチクラウドのデータを1か所にあるかのように管理できます。
