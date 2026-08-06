---
slug: folder-compare-with-filter-rcloneview
title: "フィルター付きフォルダ比較 — RcloneViewでの精密な比較"
authors:
  - alex
description: "RcloneViewのフィルタールールで、フォルダ比較からノイズを除外しましょう — 比較前にビルド成果物、キャッシュ、不要なファイル種別をスキップします。"
keywords:
  - フォルダ比較 フィルター
  - 比較からファイルを除外
  - RcloneView フィルタールール
  - フォルダ比較 除外パターン
  - クラウドフォルダ差分フィルター
  - .gitフォルダ比較をスキップ
  - 選択的フォルダ比較
  - クラウドバックアップ検証フィルター
tags:
  - RcloneView
  - feature
  - folder-comparison
  - filters
  - compare
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# フィルター付きフォルダ比較 — RcloneViewでの精密な比較

> フォルダ全体を比較しても、そもそも気にしていなかったファイルの中に結果が埋もれてしまっては意味がありません。

2つの大規模なストレージ間で通常のフォルダ比較を実行すると、実際に確認したいデータとは無関係な差分が大量に表示されることがよくあります — ビルドキャッシュ、`.git`フォルダ、一時ファイル、そもそもバックアップする必要のなかったISOファイルなどです。RcloneViewのフィルター付きフォルダ比較を使えば、比較を実行する前にこれらのカテゴリを除外できるため、結果には本当に重要なファイルだけが反映されます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## フィルター付き比較が重要な理由

2つの大きなディレクトリツリー間の未加工の比較では、すべてのファイルが等しく重要なものとして扱われます。そのため、大量の`.git`履歴を持つソースリポジトリや`.iso`イメージでいっぱいのプロジェクトフォルダが、本来検出したい差分を覆い隠してしまうことがあります。比較対象を関連するフォルダ名やファイル種別に絞り込むことで、雑然として読みにくい結果が、注目しているデータで実際に何が変更されたかを示す、焦点を絞ったリストへと変わります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewでのフィルター付きフォルダ比較結果" class="img-large img-center" />

RcloneViewはFREEライセンスでも同期とフォルダ比較を提供しており、必要とするチーム向けにPLUS階層の拡張機能としてフィルター付き比較がその上に追加されています。

## フィルタールールの設定

フィルタールールは、RcloneViewの他の箇所で使われているのと同じパターンに従います。拡張子、フォルダパス、または正確なフォルダ名で除外します。`.iso`のようなルールは、場所にかかわらずすべてのISOファイルを比較から除外し、`/.git/*`はルートレベルの`.git`ファイルのみを除外し、`/.git/`はルートの`.git`フォルダそのものを削除し、`.git/`はどれだけ深くネストしていてもすべての`.git`フォルダを除去します。複数のルールを組み合わせることで、確認する価値のあるファイル種別とパスに比較範囲を正確に絞り込めます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでフォルダ比較のフィルタールールを設定する" class="img-large img-center" />

これはPLUSライセンスの機能です — フィルタリングなしの基本フォルダ比較(左のみ、右のみ、同一、差異のあるファイルを表示)はすべてのライセンス階層で利用でき、フィルタリングは同じ比較エンジンの上に構築されています。

## 実践的なフィルタリングのシナリオ

プロジェクトフォルダをクラウドバックアップと比較する開発チームは、通常`node_modules/`、`.git/`、ビルド出力ディレクトリを除外します。これらは再生成可能であり、バックアップが完全かどうかの判断に影響すべきではないためです。RAW写真ライブラリをアーカイブするメディアチームは、サイドカーキャッシュファイルやサムネイルプレビューを除外し、比較を実際の画像アセットに集中させることがよくあります。また、2つのクラウドアカウント間の移行を監査する担当者は、移行後に残る必要のなかった一時フォルダやスクラッチフォルダを除外することで、左のみ・右のみのリストを本当に注意が必要なファイルだけに限定できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="差分に対応する前にフィルター付き比較結果を確認する" class="img-large img-center" />

フィルター付き比較が完了すると、他のフォルダ比較と同じ操作が適用されます。左のみのファイルを右側にコピーし、右のみのファイルは削除前に確認し、差異があるとフラグ付けされたものを更新します — 意図的に除外されたファイルによる邪魔がない状態で行えます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. Homeタブから**比較**を起動し、2つのフォルダを選択してください。
3. フィルター設定を開き、除外したいフォルダ名やファイル種別の除外ルールを追加してください。
4. 比較を実行し、本当に重要な項目に絞られた結果リストを確認してください。

フィルター付き比較は、ノイズの壁を短く実行可能なリストに変えます — コピー、更新、あるいはそのままにするかを決める前に、まさに必要なものです。

---

**関連ガイド:**

- [フォルダ比較の詳細解説 — クラウドストレージ間のすべての差分を検出する](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Rcloneフィルタールール解説 — RcloneViewでの包含・除外パターン](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [選択的同期のためのフィルタールール — RcloneViewガイド](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
