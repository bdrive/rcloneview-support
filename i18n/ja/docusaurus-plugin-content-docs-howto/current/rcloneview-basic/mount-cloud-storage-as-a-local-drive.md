---
sidebar_position: 8
description: "RcloneView を使用してリモートクラウドストレージを仮想ドライブとしてマウントする方法を解説します。Remote Explorer、Mount Manager、システムトレイからの設定方法を含みます。"
keywords:
  - rcloneview
  - rclone
  - mount
  - mount manager
  - cloud drive
  - virtual drive
  - rclone mount
  - local drive
  - remote explorer
  - remote storage management
tags:
  - RcloneView
  - mount
  - local-drive
  - virtual-drive
  - cloud-storage
  - Remote-storage-managent
date: 2025-06-19
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# クラウドストレージをローカルドライブとしてマウントする

:::important マウントの事前条件
マウントする前に、対象のリモートが RcloneView にすでに追加されていることを確認してください。   
参照: [新しいリモートを追加する](/howto/rcloneview-basic/remote-manager#add-a-new-remote)
:::

## RcloneView でリモートストレージをマウントする

RcloneView では、リモートストレージを仮想ドライブとしてマウントすることで、より簡単にアクセス・管理できます。  
このガイドでは、2 つの方法を使ってリモートストレージをマウントする方法と、マウント設定を管理する方法を説明します。

### 方法 1: Remote Explorer からマウントする

リモートフォルダを閲覧しながら、直接マウントすることができます。

1. **Remote Explorer** ペインで、マウントしたいリモートフォルダを選択します。 
2. Remote Explorer ペイン上部にある **マウントアイコン** (<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />) をクリックします。
3. 選択したリモートパスが自動的に入力された状態で **Mount** ダイアログが開きます。
4. マウント設定を行います。
   - **Target**: `Auto` を選択するか、リストから手動でドライブレターを割り当てます。
   - (オプション) カスタムのマウント場所を指定する場合は「Mount to local path」にチェックを入れます。
   - **Auto mount** を有効にすると、RcloneView 起動時にこのリモートが自動的にマウントされます。
5. **Save and mount** をクリックすると、設定が適用されすぐにマウントされます。
   - 代わりに **Save** をクリックすると、マウント設定のみ保存され、後でマウントできます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-medium img-center" />

<details>
<summary>高度なマウントオプション</summary>

高度なマウントオプション

| 項目                        | 説明                                                                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Volume name**    | （オプション）マウントされたボリュームのカスタム名を設定します。ファイルマネージャーやシステム UI に表示される場合があります。                                                                                                                                                        |
| **Mount type**     | マウントバックエンドを選択します: <br /> - `cmount`（Windows のデフォルト）: Rclone 内部の C ベースの FUSE ライクなマウントエンジンを使用し、高い互換性を持ちます  <br />- `nfsmount`（代替、主に Linux/macOS 環境向け）。NFS プロトコルを使用してリモートをマウントします |
| **Network drive**  | このチェックボックスをオンにすると、マウントをネットワークドライブとしてマークします。OS がマウントされたフォルダを扱う方法に影響する場合があります。                                                                                                                                       |
| **Read only**      | 読み取り専用モードを有効にし、リモートへの書き込み操作を防止します。                                                                                                                                                                                               |
| **Allow other**    | マウントしたユーザー以外のユーザーによる、マウントされたファイルシステムへのアクセスを許可します（主に Linux で使用されます）。                                                                                                                                                        |
| **Cache mode**     | キャッシュの動作を制御します。以下のオプションがあります: <br />- `off`  <br />- `minimal`  <br />- `writes`  <br />- `full`  <br />デフォルトの `writes` モードは、書き込み操作をキャッシュします。                                                                                              |
| **Cache max size** | 許可される最大キャッシュサイズ（バイト単位）。 <br />例: 1073741824 = 1GB。 <br />制限なしにするには `-1` を設定します。                                                                                                                                            |
| **Cache max age**  | キャッシュされたデータが有効なままでいられる時間です。時間単位は **ナノ秒** です。例: 3600000000000 = 1 時間。                                                                                                                                               |
| **Dir cache time** | ディレクトリキャッシュの有効時間です。時間単位は **ナノ秒** です。例: 300000000000 = 5 分。                                                                                                                                                   |

💡 これらのオプションは、マウント設定に精通している場合のみ使用してください。デフォルト値でほとんどのユーザーに適しています。

</details>
### 方法 2: Mount Manager からマウントする

**Mount Manager** を使用してストレージを設定・マウントすることもできます。

1. 上部メニューバーの **`Remote`** タブにある **`Mount Manager`** ボタンをクリックします。  
2. **`New mount`** をクリックして新しいマウント設定を作成します。  
3. リモートを選択し、必要に応じてマウントするサブディレクトリを指定します。  
4. マウントオプションを設定します。  
   - **Target**: `Auto` を選択するか、リストから手動でドライブレターを割り当てます。  
   - （オプション）カスタムのマウントパスを指定する場合は **Mount to local path** を有効にします。  
   - **Auto mount** を有効にすると、RcloneView 起動時にこのリモートが自動的にマウントされます。  
1. **`Save`** をクリックすると、すぐにマウントせずにマウント設定を保存します。  
   - リモートを保存してすぐにマウントするには、**`Save and mount`** をクリックします。  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-medium img-center" />
## マウント済みドライブの表示と管理

マウント設定を表示・管理するには、メインメニューの **`Remote`** タブにある **`Mount Manager`** ボタンをクリックして **Mount Manager** ダイアログを開きます。

保存されたすべてのマウント設定が Mount Manager ウィンドウに一覧表示されます。  
各設定は現在の **ステータス** に基づいて分類されます。
- **Mounted**: リモートが現在マウントされており、アクティブな状態です。
- **Unmounted**: マウントは保存されていますが、現在マウントされていません。
  <img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="mount manager status" class="img-medium img-center" />
ステータスに応じて、以下の操作を実行できます。


<Tabs>
<TabItem value="Status: mounted" label="🟢 ステータス: mounted">

- <img src="/support/icons/unmount-icon.png" alt="unmount icon" class="inline-icon" /> : **Unmount** — クリックすると、現在マウントされているリモートをアンマウントします。
- <img src="/support/icons/disabled-edit-mount.png" alt="disabled edit mount" class="inline-icon" /> : （無効）Edit
- <img src="/support/icons/open-mount-folder.png" alt="open mount folder" class="inline-icon" /> : **Open** — クリックすると、マウントされたフォルダをファイルエクスプローラーで開きます。
- <img src="/support/icons/disabled-delete-mount-configuration.png" alt="disabled delete mount configuration" class="inline-icon" /> : （無効）Delete
</TabItem>



<TabItem value="Status: Configured" label="🟠 ステータス: Unmounted">

- <img src="/support/icons/mount-run-icon.png" alt="mount run icon" class="inline-icon" /> : **Mount** — クリックすると、選択したリモートを手動でマウントします。
- <img src="/support/icons/edit-mount-configuration.png" alt="edit mount configuration" class="inline-icon" /> : **Edit** — クリックすると、マウント設定を変更します。
- <img src="/support/icons/disabled-open-mount-folder.png" alt="disabled open mount folder" class="inline-icon" /> : （無効）Open
- <img src="/support/icons/delete-mount-configuration.png" alt="delete mount configuration" class="inline-icon" /> : **Delete** — クリックすると、マウント設定を削除します。
</TabItem>

</Tabs>


<br />
<br />

:::tip システムトレイからのクイックマウント
システムトレイアイコンからも、マウントを素早く管理できます。

1. システムトレイの **RcloneView アイコン** を右クリックします。
2. **Mount** メニューにカーソルを合わせます。
3. 以下の操作が可能です。
   - 現在マウントされているドライブを表示し、ドライブをマウントまたはアンマウントする
   - すべてアンマウントする
   - 新しいマウントを開始する
<img src="/support/images/en/howto/rcloneview-basic/mount-from-system-tray.png" alt="mount from system tray" class="img-small img-left" />

:::


