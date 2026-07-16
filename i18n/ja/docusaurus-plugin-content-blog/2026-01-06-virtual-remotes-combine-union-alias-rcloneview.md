---
slug: virtual-remotes-combine-union-alias-rcloneview
title: "RcloneView仮想リモート:Combine、Union、Aliasで単一のマルチクラウドワークスペースを構築する"
authors:
  - tayson
description: "RcloneViewの仮想リモートを使って、データをコピーせずにマルチクラウドのフォルダを統合しましょう。Alias、Combine、Unionをいつ選ぶべきか、よりクリーンなワークフローの構築方法を学びます。"
keywords:
  - virtual remote
  - combine remote
  - union remote
  - alias remote
  - multi cloud viewer
  - rcloneview virtual remote
  - cloud workspace
  - multi cloud management
  - rcloneview workflow
  - cloud file organization
tags:
  - file-management
  - sync
  - multi-cloud
---

import RvCta from '@site/src/components/RvCta';

# RcloneView仮想リモート:Combine、Union、Aliasで単一のマルチクラウドワークスペースを構築する

> マルチクラウドの乱立により、フォルダを見つけにくくなります。RcloneViewの仮想リモートを使えば、ファイルを移動やコピーすることなく、ビューを統合できます。

仮想リモートは、マルチクラウドのワークフローを整理する最も速い方法の一つです。タブを行き来したりジョブを再設定したりする代わりに、既存のリモートやフォルダを指す仮想ビューを作成できます。元のデータはそのままの場所に保たれますが、ワークスペースはナビゲートや自動化がしやすくなります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 仮想リモートが重要な理由

- ジョブを実行したりフォルダを比較したりするたびに、深い階層のパスを探し回る必要がなくなります。
- データをコピーせずに、複数のクラウドを一つのワークスペースとして表示できます。
- Explorer、Compare、Sync、Jobsの全体で整理の一貫性を保てます。

## RcloneViewの仮想リモートとは?

仮想リモートは既存のリモートやフォルダの上に位置します。それ自体がデータを保存することはありません。代わりに、すでに保有している場所を指し示し、新しくすっきりとしたビューとして表示します。

**New Remote → Virtual** から作成します。

- **Alias**: 深い階層のフォルダへのショートカット。
- **Combine**: 複数のフォルダを並べて一覧表示する単一のビュー。
- **Union**: 複数のフォルダを一つに融合させたマージビュー。

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

## Aliasリモート:深い階層のフォルダへの即時アクセス

**最適な用途**: 毎日開くジャンプ先フォルダ。

Aliasはブックマークです。特定のフォルダを即座に開くため、繰り返し実行するジョブやチーム共有パスに最適です。

例:`Drive:Team/Projects/Client-A` のようなチーム共有フォルダをブックマークし、`Alias_ClientA` として開きます。

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="Add alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="Alias remote file browser" class="img-large img-center" />

ガイド: [/support/howto/remote-storage-connection-settings/alias-remote](/howto/remote-storage-connection-settings/alias-remote)

## Combineリモート:一つのビューに複数のフォルダ

**最適な用途**: ダッシュボードやプロジェクトのコレクション。

Combineは複数のフォルダを一つのリモート内に並べて表示します。各フォルダは元の構造を保ったまま、一箇所でまとめて閲覧できます。

例:以下を含む `Marketing_Assets` Combineリモートを作成します。

- `Drive:Marketing`
- `Dropbox:Assets`

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="Add combine remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="Combine view example" class="img-large img-center" />

ガイド: [/support/howto/remote-storage-connection-settings/combine-remote](/howto/remote-storage-connection-settings/combine-remote)

## Unionリモート:クラウドをまたいだ一つのマージフォルダ

**最適な用途**: プールされたアーカイブや複数ソースからの取り込み。

Unionは複数のフォルダを一つのブレンドされたビューにマージします。異なるクラウドにファイルがあっても、すべてを一つのフォルダのように見せたい場合に理想的です。

例:2つのリモートからの毎月の生映像を、一つの `Raw_Footage` ビューに統合します。

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="Add union remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="Union view example" class="img-large img-center" />

ガイド: [/support/howto/remote-storage-connection-settings/union-remote](/howto/remote-storage-connection-settings/union-remote)

## クイック判断ガイド:Alias vs Combine vs Union

| ニーズ | 選択肢 | 理由 |
| --- | --- | --- |
| 深い階層のフォルダに素早くジャンプしたい | **Alias** | 特定のパスへの単一ショートカット |
| 複数のフォルダを並べて見たい | **Combine** | フォルダ構造をそれぞれ維持 |
| 複数のフォルダを一つとして扱いたい | **Union** | プールされたデータのためのマージビュー |

## 仮想リモートを使った実践的なワークフロー

- **同期前に比較する**: CombineまたはUnionビューでCompareを実行し、事前に差分を確認します。  
  ガイド: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)
- **複数ソースをまたいで同期する**: Unionリモートをバックアップ先に同期し、ブレンドされたアーカイブをミラーリングします。  
  ガイド: [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- **ジョブを一度保存する**: Job Managerを使って仮想リモートのSyncをスケジュールし、自動的に実行し続けます。  
  ガイド: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)
- **オプションのマウント**: 仮想リモートをマウントし、ローカルドライブとして閲覧します。  
  ガイド: [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-large img-center" />

## ベストプラクティスと命名規則

- 明確な接頭辞を使いましょう:`Alias_ProjectX`、`Combine_Marketing`、`Union_Archive`。
- ジョブ名やJob Managerの説明にソースのメモを残しておきましょう。
- 混乱を避けるため、一つのUnionに無関係なフォルダを混在させないようにしましょう。
- 明確さを求めるならCombine、シンプルさを求めるならUnionを使いましょう。

## まとめ

仮想リモートは、マルチクラウドのワークフローにおける摩擦を軽減します。Alias、Combine、Unionを使えば、データをコピーせずにすっきりとしたワークスペースを構築でき、チームはより速く動きながら構造を維持できます。今日から一つ試してみて、日々のナビゲーションがどれほど楽になるか体験してみてください。
