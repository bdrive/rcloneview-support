---
sidebar_position: 1
description: "RcloneViewでエイリアスリモートを作成し、クラウドの深いフォルダを仮想リモートとしてブックマークして、より速くアクセスし、整理された構成を実現します。"
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - alias remote
  - virtual remote
  - quick access
  - cloud remote shortcut
  - remote shortcut
  - cloud storage
  - remote manager
  - bookmark
tags:
  - RcloneView
  - alias
  - remote-storage
  - shortcut
  - virtual-remote
date: 2025-12-05
author: tayson
---

# エイリアス

## RcloneViewを使ってエイリアスを追加する方法

**エイリアスリモート**とは、既存のクラウドリモート内の特定のフォルダをブックマークする仮想リモートです。毎回深いフォルダツリーをたどる代わりに、エイリアスをクリックするだけで対象フォルダがすぐに開きます。

エイリアスは次のような場合に活用してください。

- 深い階層のプロジェクトフォルダに頻繁にアクセスする場合。
- 複雑なフォルダ構造を維持しつつ、素早く入れるエントリーポイントが必要な場合。
- 多数のリモートを管理しており、レイアウトをすっきりさせたい場合。
- Sync / Compare / Jobsで特定のフォルダをより速く選択したい場合。

**要約:** エイリアス = クラウドフォルダのブックマーク。

---

### エイリアスリモートを追加する（New Remote経由）

#### ステップ1 — **New Remote**を開き、**Virtual > Alias**を選択

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="alias remote selection" class="img-large img-center" />

#### ステップ2 — エイリアス情報を入力

1. **Remote name**: エイリアス名を入力します（例: `MyAlias`）。
2. **Remote (target folder)**: フォルダアイコンをクリックし、対象の既存リモートとフォルダを選択します。  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-select-remote-and-folder.png" alt="select target remote and folder" class="img-medium img-center" />

   選択後、エイリアスの詳細を確認します。  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-alias-input.png" alt="alias input window" class="img-large img-center" />

3. **Add Remote**をクリックしてエイリアスを作成します。

#### ステップ3 — Remote Managerでエイリアスを確認

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-remote-manager-alias.png" alt="remote manager alias" class="img-large img-center" />

ファイルブラウザで開いて、正しい対象フォルダを指しているか確認します。  
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="alias file browser" class="img-large img-center" />

---

### Explorerからより素早くエイリアスを作成する

Explorerペインから、よく使うリモートフォルダをブックマークするエイリアスリモートを素早く作成し、より速く簡単にアクセスできます。

1. **Explorer**ペインで、パスバー右側にある**`☆` Alias**アイコンをクリックします。
2. 新しい**エイリアス**の名前を入力します。
3. リモートが即座に追加され、**エイリアスリモート**として開かれ、すぐに使用できるようになります。
<div class="img-grid-3">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote.png" alt="add new alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-name.png" alt="add new alias remote name" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-complete.png" alt="add new alias remote complete" class="img-large img-center" />
</div>

---

### RcloneViewで追加したエイリアスリモートを確認する

追加したエイリアスリモートは、RcloneView内の他のクラウドリモートと同じ方法で確認できます。

1. 上部メニューから、**`Remote`**タブの下にある**`Remote Manager`**をクリックします。
2. **`Remote Manager`**ウィンドウに、新しく作成した**エイリアスリモート**が表示されていることを確認します。
3. または、**`☆`**ボタンを使ってExplorerペインで新しいタブを開き、エイリアスリモートを参照できるか確認します。

<div class="img-grid-3">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-verify.png" alt="added alias remote verify" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-explorer-verify.png" alt="added alias remote explorer verify" class="img-medium img-center" />
</div>

---

### エイリアスリモートを使う理由

- 時間の節約: ワンクリックで深いフォルダに直接アクセスできます。
- 主要なパスを個別のエントリーとして表示することで、Remote Managerを整理された状態に保てます。
- 複雑なチーム/共有ドライブ構造に最適です。
- 他のリモートと同様に、Sync / Compare / Jobのワークフローで完全に利用できます。

---

### 要約

| 機能                        | 説明                                          |
| -------------------------- | -------------------------------------------- |
| **New Remote経由のエイリアス**   | 深い階層のフォルダ専用のリモートを作成する  |
| **Explorer経由のエイリアス**     | 現在のフォルダを即座にエイリアスとして追加する |
| **Remote Managerでの表示**  | 他のリモートと同様にリスト表示される                 |
| **ユースケース**              | 素早いアクセス、整理、自動化        |

エイリアスはシンプルながら強力な機能です。複雑なツリーをフラット化し、重要な場所へ直接ジャンプし、あらゆるクラウド作業を高速化します。

