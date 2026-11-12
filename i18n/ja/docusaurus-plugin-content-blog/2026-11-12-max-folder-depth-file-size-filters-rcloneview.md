---
slug: max-folder-depth-file-size-filters-rcloneview
title: "最大フォルダ深度と最大ファイルサイズのフィルター — RcloneViewで同期対象をコントロールする"
authors:
  - kai
description: "RcloneViewのMax folder depthとMax file sizeフィルターで深いサブフォルダや大きすぎるファイルをスキップし、クラウド同期ジョブを素早く的確に保ちましょう。"
keywords:
  - 最大フォルダ深度 同期
  - 最大ファイルサイズ フィルター
  - rclone max depth GUI
  - クラウド同期で大きなファイルをスキップ
  - 同期するフォルダ階層を制限
  - RcloneView 同期フィルター
  - バックアップから大きなファイルを除外
  - 選択的なクラウド同期
  - 浅いフォルダ同期
tags:
  - RcloneView
  - feature
  - filters
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 最大フォルダ深度と最大ファイルサイズのフィルター — RcloneViewで同期対象をコントロールする

> 同期ウィザードにある2つの数値フィールドが、ジョブがどこまで深く処理するか、そしてどの大きさのファイルを対象外にするかを決めます。

すべての同期ジョブにツリー全体が必要なわけではありません。デザインチームは、クライアントのDropboxにある入れ子の作業フォルダすべてではなく、最上位の納品フォルダだけを必要とするかもしれません。DocumentsをOneDriveにバックアップする家庭のユーザーは、30 GBのディスクイメージをいくつか除外したいかもしれません。RcloneViewは同期ウィザードのステップ3にある**Max folder depth**と**Max file size**でどちらのケースにも対応し、どちらもFREE Licenseで利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Max Folder Depth：ジョブが処理する深さを制限する

Max folder depthは、ソースの下の何階層までのフォルダをジョブが処理するかを設定します。それより深いものはスキップされます。小さな値にすると、大きく広がったソースを上位階層だけの浅い同期に変えられます。

重要なファイルが上位にまとまっている場合に役立ちます。たとえば、ある代理店の`Clients/`フォルダには、クライアントごとのフォルダと最終納品物があり、その下に10階層にも及ぶ`working/`や`cache/`のツリーがあるかもしれません。深さを制限すれば、長い除外ルールのリストなしで、納品物は残しつつ不要なものをスキップできます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a remote in RcloneView before configuring a depth-limited sync job" class="img-large img-center" />

深さの制限は通知なしに適用されます。テスト実行で残った深さ制限があると、以降の同期でより深いサブフォルダがエラーなしに抜け落ちます。宛先にファイルが見当たらない場合は、まずこのフィールドを確認してください。

## Max File Size：大きすぎるファイルを除外する

Max file sizeはMB単位で入力し、この値より大きいファイルは除外されます。よくある使い方：

- 作業フォルダをバックアップする際に、ISOイメージ、VMディスク、未加工の動画を除外する。
- 容量の小さい無料プランのアカウントへの同期を上限内に収める。
- ときどき発生する巨大なエクスポートファイルをスキップして、夜間のオフィスファイルのジョブを素早く終わらせる。

このフィールドは上限のみを設定します。サイズに関係なく特定のファイル形式を除外するには、同じステップで`.iso`のようなカスタムルールを追加します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job with file size filters in RcloneView Job Manager" class="img-large img-center" />

## 他のフィルターと組み合わせる

どちらのフィールドも、ステップ3のほかの項目と組み合わせて動作します。Max file age（単位は`y`、`d`、`h`、`m`、`s`）、定義済みのMusic、Video、Image、Document、Google Docs、Box Docsフィルター、そしてカスタムルールです。たとえば、50 MB未満で、過去30日以内に変更され、上位3階層のフォルダ内にあるドキュメントだけを同期するジョブも作れます。

フィルターは一方向同期がソースの一部とみなす範囲を変えるため、まず**Dry Run**を実行してください。コピーされるファイルと削除されるファイルの一覧が表示されるので、何かが変更される前に厳しすぎる制限に気づけます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView showing file counts for filtered sync runs" class="img-large img-center" />

ジョブの実行後、Job Historyに各実行のファイル数と合計サイズが表示されます。急に減った場合は、たいていフィルターの設定ミスです。

## はじめに

RcloneViewは、Windows、macOS、Linux上で、ひとつのウィンドウから90以上のプロバイダーをマウント・同期できます。

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Syncを開き、ソースと宛先を選んでジョブに名前を付けます。
3. ステップ3でMax folder depthとMax file size（MB）を設定します。
4. Dry Runを実行してファイル一覧を確認し、Job Managerにジョブを保存します。

小さく目的の明確なジョブは早く終わり、使うストレージも少なく、確認もしやすくなります。

---

**関連ガイド:**

- [ファイル形式ごとの同期に使える定義済みフィルター](https://rcloneview.com/support/blog/predefined-filters-sync-file-types-rcloneview)
- [Min AgeとMax Ageの時間ベースフィルター](https://rcloneview.com/support/blog/min-age-max-age-time-based-filters-rcloneview)
- [同期フィルターでファイルが除外されない問題を解決する](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
