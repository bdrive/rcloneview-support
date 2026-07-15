---
sidebar_position: 3
description: "RcloneViewのドラッグ&ドロップインターフェースと右クリックメニューを使って、ローカルとクラウドストレージ間でファイルを参照、コピー、管理する方法を学びます。"
keywords:
  - rcloneview
  - ファイル管理
  - ファイルのコピー
  - ファイルの移動
  - ドラッグ&ドロップ
  - クラウドファイル転送
  - クラウドストレージ
  - ファイルエクスプローラー
  - クラウド間転送
  - リモートブラウザ
  - アップロード
  - ダウンロード
  - パージ
  - 削除
tags:
  - howto
  - file-management
  - cloud-storage
  - drag-and-drop
  - cloud-file-transfer
  - file-explorer
date: 2025-05-27
author: Jay
---
# RcloneViewでのファイル管理  

RcloneViewを使用すると、使い慣れたExplorer風のインターフェースで、ローカルディスクと複数のクラウドストレージサービス間でファイルを簡単に参照、転送、整理できます。   

このガイドでは、次の内容について説明します。   

- リモートストレージの参照
- ドラッグ&ドロップによるファイルのコピー
- 右クリックメニューによるファイル管理
 
## リモートストレージの参照

接続済みのクラウドリモートを開いて、ローカルフォルダのように表示できます。

### リモートを参照する方法：

1. **Explorerペイン**の**`+`**タブをクリックします。
2. 開きたいリモートストレージを選択します。
3. 選択したリモートが新しいタブで開き、ファイル操作の準備が整います。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-open-remote.png" alt="file explorer open remote" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-remote-open-complete.png" alt="file explorer remote open complete" class="img-medium img-center" />
</div>

:::tip 表示レイアウト
**`Settings > Layout`**に移動して、縦表示と横表示を切り替えます 
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="explorer view layout" class="img-small img-left" />
:::

## ドラッグ&ドロップによるファイルのコピー

シンプルなドラッグ&ドロップ操作で、ローカルとクラウドストレージ間でファイルを転送できます。
#### 2つのリモート間でコピーする

RcloneView内であるリモートタブから別のリモートタブへファイルをドラッグすると、クラウドストレージ間でファイルをコピーできます。
<video src="/support/videos/en/howto/rcloneview-basic/rclonview-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  rclonview explorer drag and drop
</video>

**👉  複数選択と一括操作**
複数のファイルを一度に選択して、一括操作を行うことができます。
- **`Ctrl + クリック`**で複数の個別ファイルを選択します。
- **`Shift + クリック`**で範囲選択します。

**👉  ドラッグ&ドロップの動作 **
- **同一リモート内** = 移動操作  
- **異なるリモート間** = コピー操作


:::tip ヒント
- コピー時に確認用ポップアップを表示したくない場合は、**Confirm drag and drop**チェックボックスのチェックを外してください。
- 後でポップアップを再度有効にするには、**Settings > General settings > Confirm drag and drop**に移動して再度チェックを入れてください。
:::

#### Windows ExplorerからRcloneViewのリモートへコピーする
- **Windows File Explorer**から直接RcloneViewのタブにファイルをドラッグして、クラウドストレージにアップロードすることもできます。
<video src="/support/videos/en/howto/rcloneview-basic/windows-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  windows explorer drag and drop
</video>
### 右クリックメニューによるファイル管理

RcloneViewは、便利な右クリックメニューを通じてファイル操作全般をサポートしています。

### 利用可能な操作：

- <img src="/support/icons/download-icon.png" alt="download icon" class="inline-icon" />**ダウンロード** – ファイルをローカルディスクに保存  
- <img src="/support/icons/upload-icon.png" alt="upload icon" class="inline-icon" />**アップロード** – ローカルファイルをクラウドリモートに送信  
- <img src="/support/icons/copy icon.png" alt="copy icon" class="inline-icon" />**コピー / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />貼り付け** – フォルダやリモート間でファイルをコピー  
- <img src="/support/icons/cut-icon.png" alt="cut icon" class="inline-icon" />**切り取り / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />貼り付け** – ファイルを別の場所に移動  
- <img src="/support/icons/delete-icon.png" alt="delete icon" class="inline-icon" />**削除** – ファイルやフォルダを削除  
- <img src="/support/icons/rename-icon.png" alt="rename icon" class="inline-icon" />**名前の変更** – ファイルやフォルダの名前を変更  
- <img src="/support/icons/new-folder-icon.png" alt="new folder icon" class="inline-icon" />**新しいフォルダ** – 新しいフォルダを作成  
- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" />**再読み込み** – フォルダの内容を更新
