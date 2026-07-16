---
slug: manage-1fichier-cloud-sync-rcloneview
title: "1Fichierクラウドストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - steve
description: "1FichierをRcloneViewに接続して、GUIベースのファイル管理、自動バックアップ、クラウド間転送を実現。コマンドラインツールなしで1Fichierライブラリを管理できます。"
keywords:
  - 1Fichier RcloneView sync
  - manage 1Fichier files GUI
  - 1Fichier cloud backup
  - 1Fichier file transfer RcloneView
  - 1Fichier to Google Drive
  - rclone 1Fichier GUI
  - 1Fichier storage management
  - 1Fichier backup tool
tags:
  - 1fichier
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1Fichierクラウドストレージを管理 — RcloneViewでファイルを同期・バックアップ

> 1FichierアカウントをRcloneViewに接続して、ファイルを管理し、自動バックアップを作成し、他のクラウドプロバイダーへデータを転送できます — コマンドラインに触れることなく。

1Fichierは、寛大なストレージ容量とファイル共有機能で人気のフランスのクラウドストレージ・ファイルホスティングサービスです。1Fichierのウェブインターフェースは閲覧と手動ダウンロードには対応していますが、大量のライブラリを移動したり、自動バックアップを作成したり、1Fichierをマルチクラウドのワークフローに統合したいユーザーには、より高機能なツールが必要です。RcloneViewの1Fichierバックエンドは、これらすべてをシンプルなGUIで処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 1FichierをRcloneViewに接続する

RcloneViewで**リモートタブ → 新規リモート**を開き、プロバイダー一覧から1Fichierを選択します。認証には1Fichier APIキーが必要で、これは1Fichierアカウント設定のAPIセクションから生成できます。APIキーをRcloneViewの設定ダイアログに貼り付けて保存すると、リモートはすぐに使用可能になります。

1Fichierのフォルダとファイルはエクスプローラーパネルに表示され、フォルダツリーで閲覧したり、ファイル一覧をソートしたりできます。任意のフォルダの合計件数とサイズは、右クリック → **サイズを取得**で確認でき、移行やバックアップジョブを計画する前にデータ量を把握するのに便利です。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting 1Fichier to RcloneView as a new remote" class="img-large img-center" />

## 1Fichierのコンテンツをダウンロード・整理する

1Fichierに大量のファイルアーカイブを保存していて、Google Drive、OneDrive、ローカルNASなどより扱いやすいプロバイダーに移動したいユーザーには、RcloneViewのクラウド間コピージョブが最適なツールです。1Fichierを一方のパネルに、転送先をもう一方のパネルに開き、ジョブマネージャーでコピージョブを作成します。適切な転送並行数を設定してください — 1Fichierは無料アカウントにダウンロード速度制限を課しているため、プレミアムアカウント保有者はより高速なスループットを得られます。

ファイルタイプやフォルダ名でジョブをフィルタリングすれば、コンテンツを選択的に移行できます。たとえば、混在コンテンツのアーカイブから動画ファイルのみを抽出したり、特定のフォルダ構造だけをコピーして他はそのまま残したりすることが可能です。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from 1Fichier to another cloud in RcloneView" class="img-large img-center" />

## 1Fichierへファイルをバックアップする

1Fichierのファイルホスティング機能は、特にヨーロッパにアーカイブコピーを保管したいユーザーにとって、有効な二次バックアップ先となります。Google Drive、Dropbox、またはローカルフォルダをソースとし、1Fichierアカウントを転送先として同期またはコピージョブを作成してください。ファイルホスティングサービスはAPIの応答時間が変動しやすいため、失敗時の転送リトライを処理してくれるジョブマネージャーが重要になります。

**転送中タブ**で転送の進捗を監視し、**ジョブ履歴**で何がいつバックアップされたかの完全な監査記録を確認できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring 1Fichier backup transfer progress in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 1Fichierアカウント設定でAPIキーを生成します。
3. **リモートタブ → 新規リモート**で1Fichierをリモートとして追加します。
4. コピーまたは同期ジョブを作成して、1Fichierのデータを移動またはバックアップします。

RcloneViewは、他のどのプロバイダーでも使うのと同じドラッグ&ドロップのインターフェースで、1Fichierをクラウドストレージツールキットの管理しやすい一部にします。

---

**関連ガイド:**

- [RcloneViewで1Fichierストレージをダウンロード・整理する](https://rcloneview.com/support/blog/download-organize-1fichier-cloud-storage-rcloneview)
- [RcloneViewによるクラウド間移行](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [RcloneViewで複数のクラウドアカウントを管理する](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
