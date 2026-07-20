---
slug: fix-slow-folder-compare-large-directories-rcloneview
title: "大規模ディレクトリでのフォルダ比較が遅い問題を解決 — RcloneViewガイド"
authors:
  - jay
description: "RcloneViewで大規模ディレクトリのフォルダ比較を高速化する方法 — チェッカーの並行数、フィルタルール、数百万ファイルを効率的に比較するための戦略について解説します。"
keywords:
  - slow folder compare RcloneView
  - fix slow cloud directory comparison
  - RcloneView folder compare large files
  - speed up cloud folder comparison
  - RcloneView compare performance
  - large directory cloud comparison
  - folder compare timeout fix
  - optimize RcloneView compare
tags:
  - RcloneView
  - folder-comparison
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 大規模ディレクトリでのフォルダ比較が遅い問題を解決 — RcloneViewガイド

> 設定が最適化されていないと、数万ファイルを含むディレクトリの比較には時間がかかることがあります。大規模なクラウドディレクトリに対してRcloneViewのフォルダ比較を調整する方法を紹介します。

RcloneViewのフォルダ比較は最も強力な機能の一つです。2つの場所の間でどのファイルが異なるか、どちらか一方にしか存在しないか、そして同一であるかを正確に表示します。しかし、50万ファイルを含む2つのS3バケットや、NASディレクトリとクラウドアーカイブを比較する場合、ワークロードに合わせて設定が調整されていないと非常に時間がかかることがあります。以下の調整により、比較にかかる時間を数時間から数分に短縮できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 比較前にフィルタで範囲を絞り込む

フォルダ比較を高速化する最も簡単な方法は、比較対象のファイル数を減らすことです。**Folder Compare with Filter**(PLUSライセンス)を使用して、データ整合性の評価に影響しないファイルタイプを除外しましょう。例えば `.tmp`、`.log`、`.DS_Store` ファイルなどです。また、フォルダ名でフィルタリングして、大規模なツリーの中の特定のサブディレクトリのみを比較することもできます。

フィルタの構文はrcloneのフィルタルールに従います。`.tmp` はその拡張子を持つすべてのファイルを除外し、`/.git/*` はルートの `.git` ディレクトリ内のファイルを除外し、`/archive/` はトップレベルのフォルダ全体をスキップします。比較を開始する前にこれらのルールを適用することで、rcloneが列挙・ハッシュ化する必要のあるアイテム数を大幅に削減できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare with filter to reduce scope in RcloneView" class="img-large img-center" />

## 遅いバックエンドに対してチェッカーの並行数を調整する

RcloneViewのジョブ設定には**Number of equality checkers**という項目があり、デフォルトは8です。遅延の大きい、またはAPIレート制限の厳しいクラウドバックエンドの場合、このデフォルト値が高すぎるとチェッカーがAPIレスポンス待ちで滞留し、逆に処理が遅くなることがあります。Google Drive、OneDrive、または低速なWebDAVサーバーのようなプロバイダーでは、チェッカー数を2〜4に減らしてみてください。

逆に、WasabiやCloudflare R2のような高速なS3互換バックエンドでは、チェッカー数を16以上に増やすことで、大規模バケットの一覧取得を大幅に高速化できます。最適な値はプロバイダーやネットワーク状況によって異なるため、いくつかの値を試してみてください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring checker concurrency for folder compare in RcloneView" class="img-large img-center" />

## 初回パスにはサイズのみモードを使用する

デフォルトでは、rcloneはファイルをサイズと更新日時の両方で比較します。非常に大規模なディレクトリの初回パスを素早く行いたい場合は、サイズのみの比較を使用することで、チェックサム検証のオーバーヘッドをかけずに明らかな不一致(片側にのみ存在するファイルや、サイズが明らかに異なるファイル)を特定できます。

RcloneViewでは、比較セッションの**Settings → Embedded Rclone → Global Rclone Flags**でGlobal Rclone Flagとして `--size-only` を指定できます。これは精度と引き換えに速度を得る方法です。大規模な初期監査にはこれを使用し、疑わしいファイルについては後で完全なチェックサム比較を行いましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing folder compare history and timing in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 比較前に**Folder Compare with Filter**(PLUS)を使用して、無関係なファイルタイプを除外します。
3. 遅いバックエンドではチェッカーの並行数を2〜4に下げ、高速なS3プロバイダーでは増やします。
4. 非常に大規模なディレクトリの初期監査には、サイズのみモードを使用します。

適切な設定を行うことで、フォルダ比較は不要な遅延なく、複数のクラウドプロバイダーにまたがる数百万ファイルにも対応できるようになります。

---

**関連ガイド:**

- [フォルダ比較ガイド — RcloneViewで差分を検出する](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [RcloneViewによるフィルタルールと選択的同期](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneViewでクラウドファイルの整合性をチェック・検証する](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)

<CloudSupportGrid />
