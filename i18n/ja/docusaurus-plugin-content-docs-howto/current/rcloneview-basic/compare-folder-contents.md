---
sidebar_position: 4
description: "RcloneViewの高度な比較機能を使ってローカルフォルダとリモートフォルダを比較し、結果をフィルタリングし、ファイルを直接コピーまたは削除する方法を学びます。"
keywords:
  - rcloneview
  - rclone
  - フォルダ比較
  - フォルダコピー
  - ファイルの差分
  - クラウド同期
  - ファイル管理
  - ファイル転送
  - ファイルエクスプローラー
  - リモートストレージ管理
tags:
  - RcloneView
  - compare
  - cloud-storage
  - folder-differences
  - Remote-storage-managent
date: 2025-05-30
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# フォルダの内容を比較する

RcloneViewは、組み込みの比較機能を使用して、ローカルディスク上またはクラウドリモート間の2つのフォルダの違いを特定し、ファイルを効率的にコピーまたは管理できるようにします。

## 比較するフォルダの選択

フォルダの比較を開始するには:
- エクスプローラーペインで2つのタブを開きます。
- フォルダツリーから比較したいフォルダを選択するか、パスバーを使ってフルパスを手動で入力します。
- 上部の**`Home`**メニューにある**`Compare`**ボタンをクリックして比較を開始します。

<img src="/support/images/en/howto/rcloneview-basic/select-compare-folder.png" alt="select compare folder" class="img-medium img-center" />
比較が完了すると、サマリーのポップアップが表示されます。
今後このメッセージを表示しないようにするには、**「Don't show this message again.」**にチェックを入れてください。
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="folder comparison completed" class="img-medium img-center" />
フォルダ比較画面のレイアウトや各アイコンの意味の詳細については、フォルダ比較のガイドを参照してください。

## 比較結果とファイル管理

フォルダ比較を使用すると、管理したいファイルを直接比較・選択できます。

ただし、大きなフォルダを同期したり、複数のリモートフォルダを効率的に管理したりする必要がある場合は、**`Sync`**を使用する方が便利です。

### 選択した結果タイプで表示

比較結果をフィルタリングして、操作に関連するファイルのみを表示できます。
これにより、コピーやレビューが必要な対象に集中できます。

例えば、左側のリモートのフォルダから右側にファイルをコピーしたい場合:

- **`Show left-only files`**アイコン<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" />をクリックすると、左側のフォルダにのみ存在し、右側には存在しないファイルのみが表示されます。
- **`Show different files`**アイコン<img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />をクリックすると、両方のフォルダに存在するがサイズが異なるファイルが表示されます。
- この方法により、既に同期済みのファイルに惑わされることなく、右側にコピーする対象ファイルのみに集中できます。

> ✅ これにより、一方向に必要なファイルのみを選択してコピーすることが格段に簡単になります。
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />



<details>
<summary>アイコンの詳細</summary>

#### 比較ウィンドウ内のアイコンについて
<Tabs>
<TabItem value="Display Icons" label="表示アイコン">
各アイコンをマウスでクリックすると、次のフィルタリング動作が適用されます。
再度クリックするとフィルターのオン/オフが切り替わります。

複数のアイコンが選択されている場合、選択された条件の**いずれか**に一致するファイルが表示されます(論理**OR**)。

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : 左側のフォルダにのみ存在し、右側には存在しないファイルのみを表示します。

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : 右側のフォルダにのみ存在し、左側には存在しないファイルのみを表示します。

<img src="/support/icons/same-file-icon.png" alt="same file icon" class="inline-icon" /> : 両方のフォルダに存在し、内容が同一のファイルのみを表示します。

<img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />  : 両方のフォルダに存在するがサイズが異なるファイルを表示します。

<img src="/support/icons/show-errored-files.png" alt="show errored files" class="inline-icon" /> : エラーまたは競合を表示します。

</TabItem>

<TabItem value="Navigate Icons" label="ナビゲーションアイコン">
これらのアイコンは、現在のフラットなフォルダリスト構造に基づいて、**Compare**ビューでフォルダ階層を上下に移動するために使用されます。

<img src="/support/icons/navigate-to-upper-folder.png" alt="navigate to upper folder" class="inline-icon" /> : 現在のリストで**上位フォルダ**に移動します。

<img src="/support/icons/navigate-to-lower-folder.png" alt="navigate to lower folder" class="inline-icon" /> : 現在のリストで**下位フォルダ**に移動します。

</TabItem>

<TabItem value="Operation Icons" label="操作アイコン">
これらのアイコンは、ファイルの削除や左右へのコピーなど、フォルダ内でのファイル操作を実行するために使用されます。

<img src="/support/icons/copy-file-to-right.png" alt="copy file to right" class="inline-icon" /> : 選択したファイルを右側のフォルダにコピーします。

<img src="/support/icons/copy-files-to-left.png" alt="copy files to left" class="inline-icon" /> : 選択したファイルを左側のフォルダにコピーします。

<img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> : 選択したファイルをどちらか一方から削除します。

</TabItem>

<TabItem value="Find Icons" label="検索アイコン">
**Find**アイコンは、**Compare**ビューでファイル数またはファイルサイズの変化が最も大きいフォルダを見つけるために使用されます。

<img src="/support/icons/find-folder-by-count.png" alt="find folder by count" class="inline-icon" /> : 比較中に変更されたファイル数に基づいてフォルダを検索します。

<img src="/support/icons/find-folder-by-size.png" alt="find folder by size" class="inline-icon" /> : 比較中に変更されたファイルの合計サイズに基づいてフォルダを検索します。

<img src="/support/icons/find-folder-with-largest-change.png" alt="find folder with largest change" class="inline-icon" /> : ファイル数またはサイズの変化が最も大きいフォルダを検索して移動します。

<img src="/support/icons/find-folder-with-next-large-change.png" alt="find folder with next large change" class="inline-icon" /> : ファイル数またはサイズの差がより大きい次のフォルダに移動します。

<img src="/support/icons/find-folder-with-smallest-change.png" alt="find folder with smallest change" class="inline-icon" /> : 変化量が最も少ないフォルダを検索して移動します。

<img src="/support/icons/find-folder-with-next-smaller-change.png" alt="find folder with next smaller change" class="inline-icon" /> : ファイル数またはサイズの差がより小さい次のフォルダに移動します。

</TabItem>

</Tabs>


</details>


### リモートフォルダ間でのファイルコピー

#### コピーするファイルの選択

- 個々のファイルを選択するには`Ctrl + Click`を使用します
- 範囲を選択するには`Shift + Click`を使用します
- または、ペイン間でドラッグ＆ドロップするだけでも構いません

#### コピー操作の実行

ファイルを選択したら:
- **`Copy →`**ボタンをクリックすると、選択したファイルを左側から右側にコピーします。
- **`← Copy`**ボタンをクリックすると、右側から左側にコピーします。

💡 コピーが行われるのは、以下の場合のみです:
- ファイルがコピー先に存在しない場合
- ファイルが両方に存在するがサイズが異なる場合

コピーが完了すると:
- コピーされたファイルは比較画面で**`equal`**アイコン<img src="/support/icons/equal-icon.png" alt="equal icon" class="inline-icon" />としてマークされます
- 下部のステータスバーに完了の詳細が表示されます
<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation.png" alt="compare copy operation" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation-completed.png" alt="compare copy operation completed" class="img-medium img-center" />
</div>
:::important チェックサム(近日公開)
デフォルトでは、RcloneViewはファイル名とサイズでファイルを比較します。
ただし、ファイル名とサイズが同じ場合、これだけでは内容の違いを検出するには不十分な場合があります。
✅ チェックサム比較により、ファイル内容のバイトレベルでの検証が可能になります。
この機能は今後のアップデートで提供予定であり、さらに高い同期精度の確保に役立ちます。
:::
#### ファイルの削除

いずれかのフォルダから選択したファイルを削除することもできます:
- 左側の**`Delete`**ボタンをクリックすると、左側のフォルダからファイルを削除します
- 右側の**`Delete`**ボタンをクリックすると、右側のフォルダからファイルを削除します

⚠️ 削除は元に戻せません。実行前に選択したファイルを再度ご確認ください。
 
## フィルターを使用した比較の絞り込み

フィルター機能を使用すると、特定のファイルやフォルダを結果から除外することで、フォルダ比較をより効率的に実行できます。

 :::important Plusライセンスが必要です
フィルタリング機能はRcloneViewの**Plus**ライセンス版で利用できます。
:::

### なぜフィルターを使用するのか?

比較タスクに関係のない特定のフォルダやファイルタイプを除外したい場合があります。
フィルターツールを使用すると、比較中に無視するファイルやフォルダを簡単に定義できます。

### 特定のフォルダを除外する方法:

例えば、`folder2`という名前のすべてのフォルダを比較から除外するには:
1. Compare画面の**`Filter`**アイコン<img src="/support/icons/filter-run-icon.png" alt="filter run icon" class="inline-icon" />をクリックします。
2. フィルター入力欄に`folder2/`と入力し、**`Add`**をクリックします。
3. フォルダが**`Others`**カテゴリに表示されます。
4. `folder2/`の横のチェックボックスをオンにし、**`OK`**をクリックしてフィルターを適用します。
5. 比較を再実行します。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="add custom filter rule" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="addjust custom filter rule" class="img-medium img-center" />
</div>

💡 フィルタリングは、`cache`や`temp`、個人設定用ディレクトリのように参照用にのみ存在し、比較やコピーが不要なフォルダがある場合に特に役立ちます。



<details>
<summary>よく使われるフィルタールール</summary>

#### よく使われるフィルターの例

**`.iso`** : すべての.isoファイルを除外します

**`/.git/*`** : ルート直下の.gitフォルダ内のファイルのみを除外し、サブフォルダは除外しません

**`/.git/`** : ルート直下の.gitフォルダ全体を、その中身も含めて除外します

**`.git/`** : 場所を問わず、すべての.gitフォルダとその中身を除外します

</details>
