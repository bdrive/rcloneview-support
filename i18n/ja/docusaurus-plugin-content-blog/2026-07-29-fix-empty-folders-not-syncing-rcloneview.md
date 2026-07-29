---
slug: fix-empty-folders-not-syncing-rcloneview
title: "空フォルダが同期されない問題を解決する — RcloneViewでディレクトリ作成を有効にする"
authors:
  - robin
description: "クラウド同期中に空フォルダが消える理由と、RcloneViewの空ディレクトリ作成オプションで解決する方法を学びましょう。"
keywords:
  - 空フォルダ 同期されない
  - クラウド同期 フォルダ欠落 修正
  - RcloneView 空ディレクトリ作成
  - クラウド同期 フォルダ構造
  - rclone 空ディレクトリ同期
  - フォルダ構造が保持されない
  - 同期で空フォルダが欠落
  - RcloneView 同期設定
tags:
  - RcloneView
  - troubleshooting
  - tips
  - sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 空フォルダが同期されない問題を解決する — RcloneViewでディレクトリ作成を有効にする

> 同期ジョブが丁寧に整理した空フォルダを置き去りにしてしまう場合、解決策はクラウドプロバイダーのバグではなく、RcloneViewの同期設定にあるひとつのトグルです。

rcloneを含むほとんどの同期エンジンは、実際にデータを含むオブジェクトのみを転送します — 空フォルダにはコピーするものがないため、デフォルトでは完全にスキップされます。フラットなバックアップであればこれで問題ありませんが、プロジェクトテンプレートやクライアント受け入れ用ツリー、あるいはファイルが到着する前からチームが目にすることを期待するプレースホルダーディレクトリのように、固定されたフォルダ構造に依存するワークフローでは支障が出ます。RcloneViewはこの動作を制御する設定を同期ウィザードに直接表示するため、設定ファイルを操作したり、手探りでジョブを再実行したりする必要がありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 空フォルダが除外される理由

RcloneViewが(rcloneを介して)同期中にソースツリーをたどるとき、転送リストはディレクトリではなくファイルから構築されます。その下のどこにもファイルが存在しないサブフォルダしか持たないフォルダは、転送可能なオブジェクトを一つも生成しないため、そのフォルダが存在すべきだという情報が宛先側に一切伝わりません。これは不具合ではなく想定された同期の動作ですが、フォルダ間の同期が空の枝も含めてツリー構造をそのまま保持すると思い込んでいる人には驚きとなります。

<img src="/support/images/en/blog/new-remote.png" alt="ステップ1の設定オプションを表示するRcloneViewの同期セットアップウィザード" class="img-large img-center" />

この設定は、ソース、宛先、同期方向とともに同期構成ウィザードのステップ1にあります — デフォルトでオフになっているため、最初は見落としやすい項目です。

## 「空ディレクトリを作成」をオンにする

4ステップの同期ウィザードのステップ1で、ジョブを保存する前に「空ディレクトリを作成」オプションを有効にしてください。これをオンにすると、RcloneViewはrcloneに対し、現在ファイルを含まない枝も含めて宛先にディレクトリ構造全体を複製するよう指示します。これはスケジュールで繰り返し実行されるジョブにおいて最も重要です — 今日は空のフォルダでも来週にはファイルを受け取るかもしれず、宛先の構造があらかじめ用意されていれば、新しいコンテンツをどこに置くべきかという混乱を避けられます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView同期構成ステップ1の空ディレクトリ作成トグル" class="img-large img-center" />

マウント専用ツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダ比較まで行えるため、この修正は1つの宛先だけをミラーリングする場合でも、1:N同期で複数の宛先にソースを展開する場合でも同様に適用されます。

## Dry Runで修正内容を確認する

完全な同期を実行する前に、RcloneViewのDry Run機能を使って、どのフォルダとファイルが作成または変更されるかを正確にプレビューしましょう。Dry Runは宛先に触れることなく保留中の操作一覧を表示し、実際にジョブを実行する前に空フォルダが本当に作成されるかを確認する信頼できる方法です — 特に、すでに長期間実行されてきたジョブにこの設定を後から適用する場合に有用です。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewで同期ジョブを実行する前にドライラン プレビューを実行する" class="img-large img-center" />

このオプションを有効にしないまま既に実行されたスケジュールジョブがある場合は、「空ディレクトリを作成」にチェックを入れて再保存し、もう一度実行してください — 次回の実行で宛先の欠落しているディレクトリ構造が補完されます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. 同期ジョブを開くか新規作成し、ステップ1: ストレージの構成に進んでください。
3. 保存する前に「空ディレクトリを作成」にチェックを入れてください。
4. まずDry Runを実行し、フォルダ構造が期待通りであることを確認してください。

チェックボックスひとつで、同期するすべてのクラウドでフォルダ構造をそのまま維持できます。

---

**関連ガイド:**

- [フォルダ比較ガイド — RcloneViewで差分を検出する](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Dry Run — RcloneViewで転送前にクラウド同期をプレビューする](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [フィルタルール — RcloneViewで選択的同期を行う](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
