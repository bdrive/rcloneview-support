---
slug: combine-remote-merge-cloud-folders-rcloneview
title: "Combine リモート — RcloneViewで複数のクラウドフォルダを1つのツリーに統合"
authors:
  - alex
description: "RcloneViewのCombineリモートを使って、異なるクラウドプロバイダーのフォルダを1つの仮想フォルダツリーに統合する方法。"
keywords:
  - combine remote rclone
  - merge cloud folders
  - virtual remote RcloneView
  - unify multiple cloud storage
  - rclone combine backend
  - multi-cloud folder structure
  - virtual file tree cloud
  - RcloneView virtual remotes
  - organize cloud storage folders
  - cross-provider folder merge
tags:
  - RcloneView
  - feature
  - multi-cloud
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Combine リモート — RcloneViewで複数のクラウドフォルダを1つのツリーに統合

> 5つのリモートタブを行き来するのはもうやめましょう。RcloneViewのCombineリモートは、異なるクラウドプロバイダーのフォルダを1つの仮想フォルダツリーに結合します。

生の映像素材をGoogle Driveに、プロジェクトファイルをDropboxに、完成したレンダリング結果をBackblaze B2に保存している映像制作スタジオを想像してください。それぞれのリモートは単体では問題なく機能しますが、「プロジェクトXのマスター編集はどこ?」という疑問に答えるには、毎回3つのタブを確認する必要があります。RcloneViewのCombineリモート——rcloneの仮想リモートラッパーの1つ——は、複数のアップストリームフォルダを1つの仮想リモート内の名前付きサブディレクトリとして表示することでこれを解決します。これにより、制作物全体が1つのルートの下に収まり、実際にファイルを移動することはありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Combineリモートが実際に行うこと

Combineは、複数のソースを1つの統合ビューにマージし、ファイルが単一のディレクトリを共有しているように見せるUnionとは異なります。Combineは代わりに、各アップストリームリモート(またはその中の特定のサブフォルダ)を、結果として得られる仮想ツリー内の名前付きサブディレクトリに割り当てます。そのため`footage:`と`renders:`は、1つのリモートの下で`production/footage`と`production/renders`として表示され、完全に分離されながらも一緒に閲覧できます。何もコピーや複製はされません。RcloneViewは読み取りと書き込みをリアルタイムで元のリモートに直接ルーティングします。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Combine virtual remote in RcloneView" class="img-large img-center" />

## RcloneViewでCombineリモートを設定する

Remoteタブから、Remote Managerを開き、タイプがCombineの新しいリモートを作成します。各アップストリームリモート(またはremote:path)を、結合されたツリー内で表示させたいサブディレクトリ名にマッピングし、保存します。結果は他のリモートと同様にExplorerパネルに表示されます。展開すると、マッピングされた各ソースがそれぞれ独立したトップレベルフォルダとして表示され、ネイティブリモートで使うのと同じコピー、移動、ドラッグ&ドロップ操作がすぐに行えます。RcloneViewは90以上のプロバイダーを1つのウィンドウからマウント・同期でき、Windows、macOS、Linuxで動作します。そのため、Google Drive、Dropbox、B2のフォルダから構築されたCombineリモートは、どのOSで実行していても同じように動作します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing a Combine remote's merged folder structure" class="img-large img-center" />

## 実践的なユースケース

映像制作以外にも、Combineリモートは自然にクラウドアカウントが増えてしまった人に適しています。例えば、古いDropboxプランと新しいS3バケットにRAWファイルが分散している写真スタジオや、契約書はSharePointに、請求書はGoogle Driveにあるという小規模チームなどです。両方を1つのCombineリモートでラップすれば、単一のFolder CompareジョブやSyncジョブでプロバイダーごとに別々のジョブを実行する代わりに、論理構造全体を対象にすることができ、Job Historyも複数の断片的なログではなく、1つに統合された履歴として表示されます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job against a Combine remote" class="img-large img-center" />

## Combineと他の仮想リモートの比較

間違ったラッパーを選んでしまうのは簡単なことです。Aliasは深くネストされたパスに短い名前を付けるだけで、マージは行いません。Unionは複数のソースを1つの共有フォルダのように見せるようブレンドし、無料ストレージ容量をまとめて使う際に便利です。Cryptは既存のリモートの上にファイルとフォルダ名を暗号化します。Combineは、異なるソースを分離したまま、1つのルートから閲覧可能にしたい場合に特に選ぶべきものです。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Combine remote from Mount Manager" class="img-large img-center" />

## はじめに

1. まだの場合は、[rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. まだ設定していない場合は、結合したい個々のリモートを追加します(Remoteタブ > New Remote)。
3. Remote Managerで新しいCombineリモートを作成し、各アップストリームソースをサブディレクトリ名にマッピングします。
4. Explorerパネルで結合されたツリーを閲覧し、最初のCompareジョブまたはSyncジョブを実行します。

散らばったクラウドアカウントが1つのCombineリモートの下にまとまれば、フォルダ構造はファイルを探すたびに払わなければならない負担ではなくなります。

---

**関連ガイド:**

- [Union リモート — RcloneViewでプロバイダー間の無料ストレージを結合](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)
- [仮想リモート — Combine、Union、Aliasの解説](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Alias リモート — RcloneViewのショートカットパス](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
