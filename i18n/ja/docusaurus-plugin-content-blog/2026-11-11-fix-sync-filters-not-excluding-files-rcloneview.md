---
slug: fix-sync-filters-not-excluding-files-rcloneview
title: "同期フィルターでファイルが除外されないときの対処法 — RcloneViewで正しい除外ルールを書く"
authors:
  - jay
description: "同期フィルターでファイルが除外されない？RcloneViewで除外ルールがフォルダーを取りこぼす理由、正しいパターンの書き方、ドライランでの確認方法を解説します。"
keywords:
  - 同期フィルターが機能しない
  - クラウド同期からフォルダーを除外
  - rclone フィルター 除外されない
  - RcloneView フィルタールール
  - .git フォルダー 同期 除外
  - クラウド同期の除外ルール
  - 最大ファイルサイズ フィルター
  - ドライラン フィルターテスト
  - 選択的クラウド同期のトラブルシューティング
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同期フィルターでファイルが除外されないときの対処法 — RcloneViewで正しい除外ルールを書く

> 除外したはずのファイルが転送先に現れる場合、原因はたいていフィルターの故障ではなく、パターンのアンカー（起点）の指定方法です。

ある開発者がプロジェクトフォルダーを Backblaze B2 に同期し、`.git` の除外ルールを追加しました。ところが翌朝、バケットには何千もの Git オブジェクトがそのまま入っていました。フィルタールールは rclone のマッチングロジックに従うため、スラッシュが 1 つ欠けるだけでルールのマッチ対象が変わります。RcloneView はこれらのルールを同期ウィザードの Step 3 に配置し、実際にファイルが動く前にテストできるドライラン（Dry Run）を提供しています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 除外ルールがファイルを取りこぼす理由

フィルターの問題の多くはアンカーの指定に起因します。`/` で始まるパターンは同期元のルートからのみマッチします。`/` のないパターンはどの階層でもマッチします。RcloneView のフィルター設定にある例がその違いを示しています。

- `.iso` はツリー内のどこにあっても、その拡張子のファイルを除外します。
- `/.git/*` は同期元ルートにある `.git` フォルダー直下のファイルだけを除外します。
- `.git/` はあらゆる階層の `.git` フォルダーを除外します。多くの開発者が求めているのはこちらです。

`/.git/*` だけを書いた場合、`client-a/app/.git` のような入れ子のリポジトリは同期されたままです。`*` はフォルダーの境界で止まるため、そのサブフォルダーも同様です。アンカーなしのフォルダールールに切り替えれば、入れ子のリポジトリも除外されます。

<img src="/support/images/en/blog/new-remote.png" alt="同期フィルターを設定する前に RcloneView でリモートを追加する" class="img-large img-center" />

2 つ目によくある間違いは、同期元フォルダーの選択ミスです。ルートにアンカーされたパターンは Step 1 で選んだフォルダーを基準にするため、同期元を 1 階層上に移すとマッチ対象が変わります。

## ほかのフィルター設定も確認する

ウィザードのフィルターはカスタムルールだけではありません。Step 3 には **Max file size**（MB 単位）、**Max file age**（`y`、`d`、`h`、`m`、`s` 単位）、**Max folder depth**、そして Music、Video、Image、Document、Google Docs、Box Docs 用の定義済みフィルターもあります。これらは組み合わせて適用されるため、以前に複製したジョブが予想外の動作をすることがあります。

たとえば、テスト時に設定したフォルダー階層の制限を忘れていると、深いサブフォルダーが何の表示もなくスキップされます。カスタムルールを書き直す前に、Job Manager でジョブを開き、不要な制限を解除してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="フィルター適用後の同期結果を示す RcloneView のクラウド間転送画面" class="img-large img-center" />

## ドライランと比較で修正を確かめる

フィルターの変更を本番データでテストしてはいけません。まずドライランモードでジョブを実行します。ドライランはコピーされるファイルと削除されるファイルの一覧を表示します。除外したパスがまだコピー一覧に表示されるなら、パターンはまだ間違っています。

除外されたファイルは転送先でも一切変更されない点に注意してください。不要なファイルがすでにバケットに入っている場合、新しいフィルターで一方向同期を実行してもそのまま残ります。Folder Compare でそれらを見つけ、転送先側の不要な `.git` フォルダーを選択してそこで削除してください。PLUS ライセンスでは、Folder Compare with Filter が同じルールを比較に適用するため、ジョブが実際に管理する項目だけが表示されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="片側にのみ存在するファイルを表示する RcloneView の Folder Compare" class="img-large img-center" />

ドライランの結果が正しければジョブを実行し、Job History のファイル数をドライランのプレビューと照らし合わせて確認します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="フィルター修正後に転送されたファイルを示す RcloneView の Job History" class="img-large img-center" />

## はじめに

同期ジョブ、フィルター、ドライラン、Folder Compare はすべて FREE ライセンスに含まれています。

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Job Manager を開いてジョブを編集し、Step 1 の同期元フォルダーと Step 3 のフィルター設定を見直します。
3. フォルダーがどの階層にも現れる可能性がある場合は、`/.git/*` のようなルートアンカーのパターンを `.git/` に置き換えます。
4. ドライランを実行して除外したパスが消えたことを確認し、Folder Compare で残ったファイルを整理します。

正確なフィルタールールはバックアップをスリムに保ち、ビルド成果物やリポジトリデータがクラウド料金に含まれるのを防ぎます。

---

**関連ガイド：**

- [Rclone フィルタールール解説 — インクルードとエクスクルード](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [ドライラン — 転送前に同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [フィルター付き Folder Compare](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
