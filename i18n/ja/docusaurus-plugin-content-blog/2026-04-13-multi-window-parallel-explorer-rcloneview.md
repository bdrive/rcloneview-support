---
slug: multi-window-parallel-explorer-rcloneview
title: "マルチウィンドウ機能 — RcloneViewで複数のクラウドストレージを並べて管理"
authors:
  - tayson
description: "RcloneViewのマルチウィンドウ機能を使って、異なるクラウドストレージ作業ごとに独立したウィンドウを開きましょう。Google Drive、S3、OneDriveを複数のウィンドウで同時に並行管理できます。"
keywords:
  - RcloneView multi-window
  - multiple windows cloud storage
  - parallel cloud management
  - RcloneView PLUS feature
  - cloud storage multi-window
  - side by side cloud management
  - RcloneView independent windows
  - cloud file manager multiple windows
  - RcloneView productivity
  - multi-window cloud sync
tags:
  - RcloneView
  - feature
  - cloud-storage
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# マルチウィンドウ機能 — RcloneViewで複数のクラウドストレージを並べて管理

> RcloneViewのマルチウィンドウ機能(PLUSライセンス)は、独立したアプリケーションウィンドウを開くことで、異なるクラウドストレージ作業をコンテキストの切り替えなしに同時に管理できるようにします。

RcloneViewのExplorerパネルは、1つのウィンドウ内で1〜4パネルをすでにサポートしており、並べて閲覧したりドラッグ&ドロップで転送したりするのに便利です。しかし、複数の異なるタスクが関わる複雑なワークフロー — 実行中の移行を1つのビューで監視しながら別のクラウドを別のビューで閲覧する、あるいはフォルダ比較を実行しながら新しい同期ジョブを設定する、といった場合には、マルチウィンドウ機能によって互いに干渉せずに動作する完全に独立したRcloneViewウィンドウを開くことができます。この機能はPLUSライセンスで利用可能です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## マルチウィンドウの仕組み

マルチウィンドウ機能で開かれる各新規ウィンドウは、独自のExplorerパネル、Transferringタブ、状態を持つ完全に独立したRcloneViewインスタンスです。1つのウィンドウでの変更が他のウィンドウに影響することはありません。ウィンドウはRcloneViewの内部IPC機構を通じて通信しますが、ファイル閲覧の状態とアクティブな操作は分離されています。

新しいウィンドウを開くには、Homeタブの**New Window**ボタンをクリックします。新しいウィンドウはメインウィンドウと同じデフォルト状態で開き、その後は別のリモートへ移動したり、独立して別のジョブを開始したりできます。ウィンドウの位置とサイズはセッション間で自動的に保存されるため、次回RcloneViewを開いたときにマルチウィンドウのレイアウトが保持されます。

<img src="/support/images/en/blog/new-remote.png" alt="Opening a new independent window in RcloneView" class="img-large img-center" />

## 実践的なマルチウィンドウ活用法

**複数のクラウドプロバイダーを並行して閲覧:** ウィンドウ1でAmazon S3バケットを閲覧しながら、ウィンドウ2でGoogle Driveを表示します。ウィンドウ間でファイルをドラッグしてプロバイダー間コピーを実行したり、移行作業中に両プロバイダーの内容を同時に監視したりできます。

**ファイル閲覧と並行したジョブ監視:** ウィンドウ1にTransferringタブを表示してアクティブなジョブの進行状況を確認しながら、ウィンドウ2で別のクラウドを閲覧したり次のジョブを設定したりできます。タブを切り替えたり監視ビューを中断したりする必要はありません。

**専用ウィンドウでのフォルダ比較:** ウィンドウ1で大規模なFolder Compare操作を実行し(大きなクラウドフォルダの場合は時間がかかることがあります)、その間もウィンドウ2でファイル作業を続けられます。比較処理は他の作業をブロックすることなく独立して実行されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Running folder comparison in one window while browsing another in RcloneView" class="img-large img-center" />

**複数ユーザー・複数プロジェクトのワークフロー:** 複数のクライアントやプロジェクトのクラウドストレージを管理する専門家は、各ウィンドウを特定の用途に割り当てることで、リモート間を何度も行き来することなく、コンテキストごとのビューを同時に開いておくことができます。

## マルチウィンドウとパネルレイアウトの組み合わせ

各ウィンドウ内のパネルレイアウト(1〜4パネル、水平または垂直分割)は、Settingsタブ > Layout / View countから個別に設定できます。それぞれ2パネルの2つのウィンドウで構成されたマルチウィンドウ環境は、実質的に2つの整理されたワークスペースにわたる4つの同時Explorerパネルを提供します。

この組み合わせは、同期ワークフローに特に役立ちます。ウィンドウ1でソースと宛先のパネルを表示して同期ジョブを進行させ、ウィンドウ2で別の同期ジョブ用の2つ目のソース・宛先ペアを表示します。両方のジョブは表示状態を共有せずに並行して実行されます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multiple parallel sync operations in RcloneView multi-window mode" class="img-large img-center" />

## はじめ方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**し、PLUSライセンスを有効化します。
2. Homeタブの**New Window**ボタンをクリックして、独立した2つ目のウィンドウを開きます。
3. 各ウィンドウで異なるリモートまたはタスクに移動し、並行して作業します。
4. ワークフローに最も効率的なレイアウトとなるよう、Settings > Layoutでウィンドウごとのパネル数をカスタマイズします。

マルチウィンドウ機能は、RcloneViewを単一タスクのファイルマネージャーから、複数のプロバイダー、プロジェクト、進行中の操作を同時に管理するクラウドストレージ専門家のための並行ワークスペースへと変貌させます。

---

**関連ガイド:**

- [RcloneViewの2ペインExplorer活用のコツ](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)
- [RcloneViewで複数のクラウドアカウントを管理](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [すべてのクラウドを統合 — Google Drive、Dropbox、OneDriveを管理](https://rcloneview.com/support/blog/unify-all-clouds-manage-google-drive-dropbox-onedrive)

<CloudSupportGrid />
