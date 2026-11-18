---
slug: create-empty-directories-sync-option-rcloneview
title: "空のディレクトリを作成 — RcloneView の同期でフォルダ構造をそのまま保持する"
authors:
  - alex
description: "RcloneView の「Create empty directories」同期オプションを使って、空のプロジェクトフォルダを含むフォルダツリー全体をクラウドストレージとローカルドライブ間でコピーしましょう。"
keywords:
  - 空のディレクトリ作成 同期
  - rclone create empty src dirs
  - クラウド同期 フォルダ構造 保持
  - 空のフォルダ クラウド コピー
  - Google ドライブ 空フォルダ 同期
  - フォルダテンプレート バックアップ
  - RcloneView 同期オプション
  - rclone 空フォルダ コピーされない
  - クラウド ディレクトリツリー ミラー
tags:
  - RcloneView
  - feature
  - cloud-sync
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 空のディレクトリを作成 — RcloneView の同期でフォルダ構造をそのまま保持する

> ファイルと同じくらいフォルダ構成が大切なら、チェックボックスを 1 つオンにするだけで空のフォルダも転送先に届きます。

rclone はデフォルトでフォルダではなくファイルをコピーするため、ソース側の空のディレクトリは転送先に現れません。通常は問題ありませんが、バックアップを復元したときにチームが使っていた `/Invoices/2027`、`/Raw`、`/Exports` フォルダが消えていると困ります。RcloneView ではこの動作を同期ウィザードの 1 つのオプションとして提供しているため、rclone のフラグを入力せずにツリー全体を保持できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 空のフォルダが消える理由

rclone はオブジェクトを移動します。同期ジョブはソースを走査してファイルを見つけ、各ファイルのパスを転送先に再作成します。ファイルを含まないフォルダには転送するものがないため、ジョブはそれをスキップします。多くのクラウドサービス、特に S3 形式のオブジェクトストレージでは、フォルダを個別のオブジェクトとして保存しません。そこでの「フォルダ」は、ファイル名に共通するプレフィックスにすぎません。

これはフォルダテンプレートに頼っている人にとって落とし穴になります。映像制作会社は、すべての案件を `01_Footage`、`02_Audio`、`03_Graphics`、`04_Deliverables` という骨組みから始めるかもしれません。会計事務所は、書類が届く前に顧客ごと・年ごとのフォルダを作っておくかもしれません。こうした空の骨組みが同期されないと、転送先側の共同作業者には不完全な構成が見えることになります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a project folder tree between two cloud remotes in RcloneView" class="img-large img-center" />

## Create empty directories を有効にする

このオプションは同期ウィザードの **Step 1: Configure Storage** にあり、ソース、転送先、同期方向の設定と並んでいます。ソースと転送先を選んでから **Create empty directories** にチェックを入れてください。ジョブを実行すると、RcloneView は rclone にソースの空のフォルダを転送先に再作成するよう指示します。これは rclone の `--create-empty-src-dirs` フラグに相当する GUI 機能です。

この設定はジョブと一緒に保存されるため、Job Manager から手動で開始した場合も PLUS のスケジュールで実行した場合も、毎回適用されます。1:N 同期でも機能するので、追加したすべての転送先に同じフォルダの骨組みが届きます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved sync job with empty directory creation enabled in RcloneView" class="img-large img-center" />

## フィルターや Dry Run と組み合わせる

空のフォルダ作成は Step 3 のフィルターと併用できます。`.git/` を除外したり、**Max folder depth** でジョブの範囲を制限したりすると、そのルールを通過したフォルダだけが作成されます。何かが書き込まれる前に、まず **Dry Run** を実行して操作内容をプレビューしましょう。これは、ソースに存在しなくなった転送先の項目も削除する一方向同期で特に重要です。

Amazon S3、Wasabi、Backblaze B2 のようなバケットベースのストレージでは、期待値を現実的に持ってください。これらのバックエンドには本当のディレクトリがないため、空のフォルダが Google Drive、OneDrive、Dropbox、SFTP、ローカルディスクのようには保持されない場合があります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing left-only folders after a sync in RcloneView" class="img-large img-center" />

ジョブが完了したら、同じ 2 つの場所で **Folder Compare** を開き、結果を並べて確認しましょう。同期と Folder Compare はどちらも FREE ライセンスで利用できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Home タブから **Sync** を開き、ソースと転送先のフォルダを選択します。
3. Step 1 で **Create empty directories** にチェックを入れ、Step 3 で必要なフィルターを設定します。
4. Dry Run を実行してから、ジョブを保存して Job Manager から実行します。

空のフォルダが保持されていれば、復元や移行のあとも、チームが用意したとおりの構成で戻ってきます。

---

**関連ガイド：**

- [Max Folder Depth と Max File Size フィルター](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Dry Run — 転送前にクラウド同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [同期フィルターでファイルが除外されない問題の解決](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
