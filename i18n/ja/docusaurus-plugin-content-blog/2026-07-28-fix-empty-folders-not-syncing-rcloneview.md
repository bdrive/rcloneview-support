---
slug: fix-empty-folders-not-syncing-rcloneview
title: "空のフォルダが同期されない問題を修正 — RcloneViewでの解決方法"
authors:
  - morgan
description: "同期後に空のフォルダが消えていませんか？rcloneが既定で空フォルダをスキップする理由と、RcloneViewの空ディレクトリ作成オプションで修正する方法を解説します。"
keywords:
  - 空フォルダが同期されない
  - rclone 空ディレクトリ 欠落
  - クラウド同期 空フォルダ 修正
  - RcloneView 空ディレクトリ作成
  - 同期 フォルダ構造 欠落
  - クラウドバックアップ 空フォルダ
  - rclone 同期 フォルダ構造
  - RcloneView 同期トラブルシューティング
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 空のフォルダが同期されない問題を修正 — RcloneViewでの解決方法

> 同期ジョブが同期先から空のフォルダを黙って除外してしまう場合、修正はほとんどのユーザーがセットアップ時に気づかない、たった一つのチェックボックスです。

クラウド間でプロジェクトアーカイブを移行するチームは、まだファイルを含まないプレースホルダーフォルダも含め、同期先が同期元のフォルダ構造を正確に反映することを期待することがよくあります。既定では、rclone(延いてはRcloneView)は同期先に空のディレクトリを作成しません。これは、多くのオブジェクトストレージのバックエンドには真の意味でのフォルダという概念がなく、ファイルキーのみを追跡しているためです。同期ジョブが正常に完了したにもかかわらず、同期先で一群の空のサブフォルダが欠落している場合、これはバグではなく想定された動作です — そしてRcloneViewにはこれを変更する組み込み設定があります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 空のフォルダが除外される理由

ローカルファイルシステムや一部のプロバイダーはフォルダを実際のオブジェクトとして保存しますが、S3互換ストレージを含む多くのクラウドバックエンドは、「フォルダ」をファイルキーが共有する共通プレフィックスとしてのみ表現します。ディレクトリにファイルが一つもない場合、作成すべきキーが存在しないため、同期先には何も表示されません。rcloneの既定の同期動作はこれを反映しており、ファイルをコピーし、フォルダ構造をファイルパスから暗黙的に生じさせることで転送を高速に保ちますが、実際に空のフォルダはそのまま取り残されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed sync with no errors despite missing empty folders" class="img-large img-center" />

このため、同期ジョブがエラー0件で完了(Completed)と報告されていても、同期先のフォルダツリーは同期元より薄くなっている可能性があります。これは転送の失敗ではなく — ツールが指示された通りに正確に動作しているだけで、多くのユーザーが自動だと思い込んでいる細部が一つ欠けているに過ぎません。

## 空ディレクトリ作成を有効にする

RcloneViewは同期ウィザードでこの動作を直接公開しています。ステップ1(ストレージの設定)では、同期元・同期先の選択と同期方向の切り替えと並んで、**空ディレクトリを作成(Create empty directories)**というオプションがあります。ジョブを実行する前にこれを有効にすると、rcloneに同期先の空フォルダ用のプレースホルダーエントリを明示的に作成するよう指示し、コピーされた構造がフォルダ単位で同期元と一致するようになります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling create empty directories in the RcloneView sync configuration wizard" class="img-large img-center" />

このオプションをチェックせずにすでに同期を実行してしまった場合は、既存のジョブを編集して設定を有効にし、再度実行するだけで済みます — RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期できるため、同じ同期元と同期先に対して再実行することは、全体を再構成するのではなく簡単な修正で済みます。

## 修正後にフォルダ構造を検証する

大規模な移行を一度の実行に任せる前に、Dry Runを使用して修正後のジョブが実際に何を行うかをプレビューしましょう — 同期先に触れることなく作成予定のすべてのファイルとフォルダを一覧表示するため、実行を確定する前に空フォルダの問題が解消されているか確認できます。進行中のプロジェクトでは、その後Folder Compareも役立ちます。両側を指定し、「left-only」または「right-only」でフィルタリングして、残っている構造上の不一致を見つけましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify folder structure matches after enabling empty directory creation" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 空フォルダが欠落している同期ジョブを開き、Editをクリックします。
3. ステップ1で**空ディレクトリを作成(Create empty directories)**チェックボックスを有効にします。
4. Dry Runを実行してフォルダが作成されることを確認してから、同期を実行します。

設定を有効にすると、そのジョブを実行するたびに完全なフォルダツリーが保持されます — 移行後にプレースホルダーディレクトリの欠落を探し回る必要はもうありません。

---

**関連ガイド:**

- [Dry Run — RcloneViewで転送前にクラウド同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [フィルタルール — RcloneViewで選択的に同期する](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneViewで誤った同期方向によるデータ損失を防ぐ](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
