---
slug: predefined-filters-sync-file-types-rcloneview
title: "定義済みフィルター — RcloneViewで必要なファイルだけを同期する"
authors:
  - steve
description: "RcloneViewの定義済みフィルターを使い、フォルダ全体を転送する代わりに画像、動画、音楽、ドキュメントだけを同期しましょう。"
keywords:
  - RcloneView フィルター
  - 定義済みフィルター
  - ファイル種別 同期
  - クラウド同期フィルター
  - 選択的同期
  - 画像のみ同期
  - 動画同期フィルター
  - ドキュメント同期フィルター
  - Google Docs フィルター
tags:
  - RcloneView
  - feature
  - filters
  - sync
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 定義済みフィルター — RcloneViewで必要なファイルだけを同期する

> 除外ルールを自分で書かなくても、不要なファイル種別をスキップして必要なものだけを同期できます。

すべての同期ジョブがフォルダ内のすべてのファイルを移動すべきとは限りません。RAWファイル、PSD、そしてその横にある請求書PDFが混在した共有ドライブをバックアップする写真スタジオは、通常、画像だけを気にかけています — 隣にある請求書ではありません。RcloneViewのフィルタリング設定ステップには、一般的なファイルカテゴリ向けのワンクリック定義済みフィルターが用意されており、ゼロからカスタムルールセットを構築しなくても、必要なコンテンツだけに同期ジョブの範囲を絞り込めます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 定義済みフィルターが対象とするもの

同期ウィザードのステップ3、フィルタリング設定では、音楽、動画、画像、ドキュメント、Google Docs、Box Docsに対するワンクリックの定義済みフィルターを提供します。いずれかを選択すると、ジョブは一致するファイル種別のみに制限されます — 例えば画像を選択すると、ソースフォルダの中でどれだけ深くネストされていても、他に何があっても、同期ジョブはそれ以外をすべて無視します。

これは、時間とともに蓄積される混在コンテンツフォルダにとって重要です:エクスポートされた動画、ブランド資料、スプレッドシートでいっぱいのマーケティングチームの共有ドライブは、その全部を動画アーカイブ用リモートにミラーリングする必要はありません。定義済みフィルターを1つ選ぶだけで、後から手動でクリーンアップすることなく、転送先フォルダをきれいに保てます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewの同期ウィザードで定義済みファイル種別フィルターを選択する" class="img-large img-center" />

Google DocsとBox Docsのオプションは、転送中に通常のファイルのように振る舞わないプロバイダー固有のドキュメント形式を特に対象としています — Google DriveやBoxから同期する際に、ネイティブドキュメントとアップロード済みのバイナリファイルを分離したい場合に便利です。

## 定義済みフィルターとカスタムフィルターの組み合わせ

定義済みフィルターはカスタムルールと排他的ではありません。例えば定義済みの画像フィルターに `/thumbnails/*` のパスルールなど追加のカスタム除外を重ねることで、そうしなければきれいな画像限定の同期を汚してしまう生成済みプレビューファイルを除外できます。カスタムフィルターは最大ファイルサイズと最大ファイル経過時間の制約にも対応しているため、2TBのRAWファイルを抱える写真スタジオなら、画像フィルターとファイル経過時間の条件を組み合わせて、過去のアーカイブ全体ではなく最近の撮影分だけを同期することもできます。

マウント専用ツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダ比較を提供するため、一回限りの転送を実行する場合でも、保存済みの繰り返しジョブを実行する場合でも、このフィルタリングは同じように適用されます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="2つのリモート間で画像ファイルのみを転送するフィルター済み同期ジョブ" class="img-large img-center" />

## ドライランでフィルタリング結果を確認する

大規模または不慣れなフォルダにフィルター付き同期を実行する前に、まずドライランモードで実行してみてください。ドライランは現在のフィルター設定でコピーおよび削除される正確なファイルリストを表示するため、定義済みフィルターが期待どおりに機能しているか、そして本来転送したかったファイルを気づかないうちに除外していないかを確認する最も速い方法です。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="フィルター済み同期ジョブの実行前にドライランでプレビューする" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. 新しい同期ジョブを開始し、ソースと転送先のリモートを選択してください。
3. ステップ3のフィルタリング設定で、同期したいコンテンツの種類に合った定義済みフィルターを選択してください。
4. ドライランを実行して結果を確認し、そのジョブを保存して今後の同期でも同じフィルターを再利用してください。

事前に手作業でファイルを整理する代わりに同期レベルでフィルタリングすることで、転送先フォルダを本当に必要なコンテンツだけに集中させておけます。

---

**関連ガイド:**

- [ドライラン — RcloneViewで転送前にクラウド同期をプレビューする](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [フィルター付きフォルダ比較 — RcloneViewで比較範囲を制限する](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Bisync — RcloneViewによる双方向クラウド同期](https://rcloneview.com/support/blog/bisync-bidirectional-cloud-sync-rcloneview)

<CloudSupportGrid />
