---
slug: migrate-box-to-pcloud-rcloneview
title: "BoxからpCloudへ移行 — RcloneViewでファイルを転送"
authors:
  - jay
description: "RcloneViewでBoxからpCloudへ移行します。両方のリモートを接続し、Dry Runを実行し、クラウド間コピーを行い、Folder Compareで結果を検証します。"
keywords:
  - BoxからpCloudへ移行
  - Box to pCloud 転送
  - BoxのファイルをpCloudへ移動
  - Box pCloud 移行
  - RcloneView クラウド間転送
  - Box to pCloud 同期
  - rclone GUI
  - クラウド移行ツール
  - クラウド転送の検証
  - Box 代替ストレージ
tags:
  - RcloneView
  - box
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# BoxからpCloudへ移行 — RcloneViewでファイルを転送

> コピー前にプレビューを確認し、コピー後に比較まで行いながら、BoxのフォルダーをpCloudへ一度に管理された形で移動しましょう。

Boxのワークスペースが合わなくなったチームや、個人用ストレージを自分で管理したいフリーランスは、同じ作業に直面しがちです。入れ子になったプロジェクトフォルダーにある数千ものファイルを、新しいアカウントへそのまま移す必要があります。ブラウザーでダウンロードして再アップロードする方法は遅く、途中で失敗しやすいものです。RcloneViewはBoxとpCloudを並べて接続し、両者の間で直接転送するため、ローカルディスクに一時保存する必要がありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## BoxとpCloudをリモートとして接続する

RcloneViewでは、どちらのサービスもブラウザーベースのOAuthサインインを使用します。**Remote > New Remote**を開いてBoxを選択し、開いたブラウザーウィンドウでアクセスを承認してください。pCloudも同様に繰り返します。ファイルがBox Businessアカウントにある場合は、エンタープライズのサブタイプ設定(`box_sub_type = enterprise`)が必要です。個人アカウントでは不要です。

RcloneViewはWindows、macOS、Linuxで、1つのウィンドウから90以上のプロバイダーをマウントおよび同期できるため、両方のリモートが同じExplorerのタブとして表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでBoxとpCloudを新しいリモートとして追加" class="img-large img-center" />

## コピー前に両側を確認する

一方のExplorerパネルでBoxを、もう一方でpCloudを開きます。Folder TreeとGet Sizeで移動するデータ量を見積もり、すべてを移行するか一部だけにするかを決めましょう。異なる2つのリモート間でドラッグすると**コピー**が実行されるため、Boxを整理する準備が整うまで元のデータはそのまま残ります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="クラウド間転送のためにBoxとpCloudを並べて開いた画面" class="img-large img-center" />

## Dry RunでCopyジョブを作成する

数個を超えるファイルを扱う場合は、ドラッグではなくジョブを作成します。Syncウィザードで、Boxをソース、pCloudのフォルダーを宛先に設定し、**Copy**ジョブタイプを選ぶと、宛先で何も削除されません。詳細設定ではチェックサム比較を有効にし、Boxがスロットリングを始める場合はequality checkerの数を低めに保ってください。フィルタリングでは、Max file sizeや`.git/`のような除外ルールで不要なファイルをスキップできます。

最初に**Dry Run**を実行してください。コピーされるファイルと削除されるファイルが一覧表示されるため、フォルダーの選択ミスをデータが移動する前に発見できます。あらかじめ用意された**Box Docs**フィルターを使えば、Box独自のクラウドネイティブドキュメントをコピー対象から除外できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewでBox to pCloudのCopyジョブを実行" class="img-large img-center" />

## Folder Compareで検証する

ジョブが完了したら、左にBox、右にpCloudを置いて**Compare**を開きます。左側のみに存在するファイルと異なるファイルでフィルターし、まだ一覧に残っているものはもう一度処理が必要です。Job Historyには実行ごとにステータス、サイズ、速度、ファイル数が記録され、移行が完了した証拠として役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="BoxとpCloudの差分を表示するFolder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote > New Remote**でBoxとpCloudを追加し、OAuthでサインインします。
3. BoxからpCloudへのCopyジョブを作成し、Dry Runを実行します。
4. ジョブを実行し、Boxを整理する前にFolder Compareで結果を確認します。

コピーしてから検証する段階的な移行なら、pCloudに必要なものがすべてそろうまでBoxのデータを安全に保てます。

---

**関連ガイド:**

- [BoxからBackblaze B2へ移行](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)
- [BoxからGoogle Driveへ移行](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [pCloudストレージの管理](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
