---
slug: folder-compare-size-change-discovery-rcloneview
title: "最大の変更点を見つける — RcloneViewのFolder Compareサイズ変化検出"
authors:
  - steve
description: "RcloneViewのFolder Compareサイズ変化検出ツールを使用して、どのクラウドフォルダが最も、あるいは最も速く変更されたか、または同期前に確認が必要かを特定します。"
keywords:
  - フォルダ比較 サイズ変化検出
  - RcloneView フォルダ比較
  - 最大のフォルダ変更
  - クラウドストレージ監査
  - クラウドフォルダ比較
  - クラウドファイル変更検出
  - クラウドバックアップ検証
  - フォルダサイズ変化トラッキング
  - クラウド同期モニタリング
  - クラウドストレージ変更検出
tags:
  - RcloneView
  - feature
  - compare
  - folder-comparison
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 最大の変更点を見つける — RcloneViewのFolder Compareサイズ変化検出

> クラウドツリーに数千のサブフォルダがある場合、実際に何が変更されたかを見つけ出すことが最も難しい部分です — RcloneViewのサイズ変化検出ツールがそれを代わりに見つけてくれます。

大規模なマルチクラウドアーカイブを管理している人なら誰でも、本当の問題は比較を実行することではなく、結果を読み解くことだと知っています。数千のサブフォルダを持つフォルダツリーは、手作業で確認するには長すぎる比較レポートを生成します。RcloneViewのFolder Compare画面には専用のサイズ変化検出コントロールが搭載されており、整理されていないファイルリストをスクロールする代わりに、調査する価値のあるフォルダへ直接ジャンプできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## サイズ変化検出が実際に行うこと

Folder Compareでは、ローカルまたはクラウドの2つのフォルダを並べて視覚的に比較でき、左側のみのファイル、右側のみのファイル、同一ファイル、異なるファイル、エラーファイルのフィルターが用意されています。このフィルタリングに加えて、RcloneViewはファイル数の変化またはサイズの変化によってフォルダを見つけるナビゲーションショートカットを追加し、最大の変更、次に大きい変更、最小の変更、次に小さい変更があるフォルダへ直接ジャンプできます。

この最後のコントロール群こそが、RcloneViewを単なるdiffビューと区別するものです。変更が発生した場所を把握するためにすべてのサブフォルダを読み通す代わりに、比較ツールに直接そこへ連れて行ってもらうよう指示できます。これは、共有メディアライブラリ、エンジニアリングリポジトリ、あるいは変化の90%が少数のサブディレクトリに集中しているクライアントフォルダ構造など、変化が本質的に不均一なリモートで最も役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting comparison result filters in RcloneView Folder Compare" class="img-large img-center" />

## 実際のシナリオ

Google DriveとBackblaze B2バックアップバケットにまたがる数百のプロジェクトフォルダを持つ共有クラウドアーカイブを利用する映像制作スタジオを考えてみましょう。編集作業で忙しい1週間の後、彼らはフルの同期を実行する前に、実際にどのプロジェクトフォルダが変更されたかを知る必要があります —— 最後の自動ジョブがすべてを正しく処理したと単に信頼するのではなく、それを検証するためです。Folder Compareを実行して「最大の変更」に直接ジャンプすると、アクティブな3〜4件のプロジェクトが即座に浮かび上がる一方、手つかずの数十のアーカイブフォルダは邪魔になりません。RcloneViewはWindows、macOS、Linux全体でひとつのウィンドウから90以上のプロバイダーをマウント・同期できるため、相手側が別のクラウドであれ、NASであれ、ローカルドライブであれ、同じワークフローが適用されます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing cloud-to-cloud folder contents in RcloneView" class="img-large img-center" />

## 検出をアクションに変える

変更されたフォルダを特定したら、同じCompare画面から比較を離れることなく直接操作できます: 右へコピー、左へコピー、または選択項目の削除。この方法でコピーされたファイルは自動的に同一としてマークされるため、比較を再実行すると同じフォルダが再度フラグされる代わりに、修正後の状態が反映されます。定期的な監査のためには、手動のCompareパスとスケジュールされた同期ジョブを組み合わせることで、サイズ検出が唯一の防御線ではなく、スポットチェックとして機能するようになります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a folder compare and sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. Homeタブからコンペア画面を開き、比較する2つのソースフォルダを選択します。
3. 比較を実行し、最大/最小の変更ナビゲーションを使って重要なフォルダへジャンプします。
4. 結果画面から直接コピーまたは削除を行い、Compareを再実行してフォルダが同一として表示されることを確認します。

目で読むには大きすぎるクラウドツリーを管理する人にとって、サイズ検出は圧倒的な比較を、確認すべきフォルダの短い優先順位付きリストに変えてくれます。

---

**関連ガイド:**

- [フォルダ比較ガイド — RcloneViewで差分を検出する](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [RcloneViewのフィルターを使ったフォルダ比較](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Dry Run — クラウド同期前のプレビュー](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
