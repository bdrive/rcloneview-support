---
slug: lsf-lsjson-remote-file-listing-rcloneview
title: "RcloneView Explorer でリモートファイルを一覧・分析する"
authors:
  - tayson
description: "RcloneView Explorer を使って、リモートのクラウドファイルを視覚的に一覧表示、並べ替え、分析しましょう。rclone lsf と lsjson コマンドを、直感的なファイル管理 GUI に置き換えます。"
keywords:
  - rcloneview
  - rclone lsf
  - rclone lsjson
  - remote file listing
  - cloud storage analysis
  - file size analysis
  - cloud file management
  - storage usage
  - directory comparison
  - cloud file explorer
tags:
  - feature
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Explorer でリモートファイルを一覧・分析する

> クラウドアカウント全体に何が保存されているかを把握することは、効果的に管理するための第一歩です。**RcloneView** Explorer は、複雑な CLI コマンドを直感的なブラウジング、並べ替え、分析に置き換える、視覚的なファイル一覧表示体験を提供します。

rclone CLI には、`lsf` や `lsjson` のような、さまざまな形式でファイルの詳細を出力する強力なファイル一覧コマンドが用意されています。これらのコマンドはスクリプト作成には便利ですが、日常的なファイル探索には理想的とは言えません。特定のファイルを見つけたり、ストレージを大量に消費しているファイルを特定したりするために、何千行ものターミナル出力を読み込むのは面倒で、ミスも起こりやすい作業です。

RcloneView の Explorer は、この体験を視覚的でインタラクティブなものへと変えます。基盤となるデータは同じですが、おなじみのファイルマネージャー形式のインターフェースで、並べ替え、フィルタリング、複数列表示とともに提示されます。ファイルサイズ、更新日、種類を一目で確認でき、ディレクトリ構造も一クリックで掘り下げられます。

生の CLI 出力が依然として必要なユーザーのために、RcloneView 内蔵のターミナルなら `rclone lsf` や `lsjson` コマンドをキー一つで実行できるため、一つのアプリケーションで両方の良さを得られます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Explorer での視覚的なファイル一覧表示

RcloneView の Explorer パネルは、設定済みの任意のリモートの内容を、標準的なファイルマネージャーのレイアウトで表示します。リモートを選択してディレクトリに移動すると、以下が確認できます。

- 一般的なファイル種類を識別しやすい**アイコン付きのファイル名・フォルダ名**。
- 人が読みやすい形式（KB、MB、GB）で表示される**ファイルサイズ**。
- 各ファイルが最後に更新された時期を示す**更新日**。
- 各フォルダに含まれる項目数がわかる、ディレクトリの**ファイル数**。

これは `rclone lsf --format "pst" remote:path` を実行した場合の視覚的な等価物ですが、すべての項目に直接インタラクションできる点が異なります。フォルダをクリックすれば開けます。ファイルを右クリックすれば、コピー、移動、削除といった操作ができます。複数のファイルを選択して一括操作も可能です。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## サイズ、日付、名前で並べ替える

リモートファイルを一覧表示する最も一般的な理由の一つは、特定の項目を見つけたり、パターンを特定したりすることです。RcloneView の Explorer は列単位の並べ替えをサポートしており、これを簡単に行えます。

- **サイズで並べ替え**て、ストレージの割り当てを消費している最大のファイルを素早く見つけます。ストレージ制限のあるクラウドプロバイダーでは、ごく少数の大きなファイルが使用量の大半を占めていることが多いため、特に有用です。
- **日付で並べ替え**て、最近更新されたファイルを特定したり、何か月も触れられていない古いコンテンツを見つけたり、最近の同期操作で想定通りのファイルが更新されたかを確認したりします。
- 大まかに探しているものがわかっている場合は、**名前で並べ替え**てアルファベット順に閲覧します。

列のヘッダーをクリックするとその列で並べ替えられます。もう一度クリックすると並べ替え順序が反転します。このシンプルな操作は、CLI で `rclone lsf` の出力を `sort` コマンドにパイプする作業を置き換えます。

## 大きなファイルを見つけ、ストレージ使用量を分析する

ストレージのコストは積み重なっていくため、容量がどこに使われているかを把握することはコスト管理に不可欠です。RcloneView なら、別途監査スクリプトを実行することなくストレージ使用量を分析できます。

1. Explorer でリモートのルートに移動します。
2. サイズの降順で並べ替え、最大のファイルをすぐに表示させます。
3. 大きなディレクトリを掘り下げて、どのサブディレクトリが合計使用量に最も寄与しているかを確認します。

このワークフローは、`rclone lsjson --recursive remote: | jq 'sort_by(.Size) | reverse'` を実行して JSON 出力を視覚的に解析しようとする、よくある CLI パターンを置き換えます。Explorer では、同じ情報が並べ替え可能でクリック可能なインターフェースで提示されます。

さらに詳しい分析のためには、RcloneView 内蔵のターミナルで `rclone ncdu remote:` を実行できます。これはアプリケーション内で直接、インタラクティブなストレージ使用量の内訳を提供します。

## ディレクトリツリーを比較する

RcloneView の 2 ペイン Explorer レイアウトは、複数のリモート間でディレクトリの内容を比較するために設計されています。左側に一つのリモートを、右側に別のリモートを読み込み、その構造を視覚的に比較します。

- 一方のリモートには存在するが、もう一方には存在しないファイルを特定します。
- 転送が不完全であることを示唆する可能性のあるファイルサイズの違いを見つけます。
- 同期操作が期待通りの結果を生成したことを確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

内蔵の比較機能はさらに進んでおり、二つのディレクトリ間の違いを自動的にハイライト表示します。これは `rclone check source: dest:` を実行した場合の視覚的な等価物ですが、違いに対してすぐに対応できるインタラクティブな表示になっています。

## 高度なクエリのために内蔵ターミナルを使う

視覚的な Explorer が提供する範囲を超える高度なファイル一覧表示のニーズに対応するため、RcloneView には内蔵のターミナルが含まれています。これにより、以下を含むすべての rclone CLI コマンドに直接アクセスできます。

シンプルな整形済み一覧表示のための **`rclone lsf`**：
```
rclone lsf remote:documents --format "pst" --recursive
```
これは、パス、サイズ、タイムスタンプを含むすべてのファイルを、パイプや保存に適したフラット形式で一覧表示します。

構造化データのための **`rclone lsjson`**：
```
rclone lsjson remote:documents --recursive --no-modtime
```
これはファイルのメタデータを JSON として出力し、プログラムによる分析や他のツールへの入力に有用です。

ストレージ概要のための **`rclone size`**：
```
rclone size remote:
```
これは、リモートに保存されているファイル数とバイト数の合計を素早く提供します。

ターミナルは RcloneView 内で動作するため、別途コンソールを開いたり rclone のパスを設定したりする必要はありません。既存のリモート設定はすでに利用可能な状態になっています。

## 複数のリモートを同時に閲覧する

RcloneView の Explorer は、複数のリモートを同時に開くことをサポートしています。これは、複数のクラウドプロバイダーにまたがってファイルを管理するユーザーにとって特に有用です。

- 一方のペインで Google Drive を、もう一方で OneDrive を開いて、フォルダ構造を比較します。
- S3 バケットを閲覧しながら、対応するローカルディレクトリを参照します。
- Backblaze B2 と Wasabi のファイルを並べて確認し、プロバイダーをまたいだバックアップを検証します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

各ペインは独立して動作するため、もう一方のペインに影響を与えることなく、自分のペースでナビゲート、並べ替え、閲覧ができます。リモート間で移動が必要なファイルを見つけたら、ドラッグ＆ドロップするだけです。

## 実践的なファイル分析ワークフロー

一般的なファイル分析タスクと、それを RcloneView で実現する方法をいくつか紹介します。

**移行前にクラウドストレージを監査する：**
ソースのリモートを閲覧し、日付で並べ替えてアクティブなファイルと古いファイルを見分け、何を移行し、何をアーカイブまたは削除するかを判断します。この準備段階により、移行にかかる時間とコストを大幅に削減できます。

**バックアップの完全性を検証する：**
ソースとバックアップのリモートを並べて開き、それぞれ同じディレクトリに移動し、比較機能を使ってすべてのファイルが正しくコピーされたことを確認します。

**重複ファイルや不要なファイルを見つける：**
名前で並べ替えて似た名前のファイルを見つけたり、日付で並べ替えて何年も更新されていないファイルを見つけたりします。不要なファイルを削除して、ストレージの割り当てを解放し、コストを削減します。

**ファイル一覧（インベントリ）を生成する：**
内蔵のターミナルで `rclone lsjson --recursive remote:` を実行し、その出力をドキュメント作成、コンプライアンス、または監査目的で保存します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. リモートマネージャーでクラウドストレージのリモートを追加します。
3. Explorer を開き、任意のリモートを閲覧して、サイズ、日付、種類とともにファイルを確認します。
4. 並べ替え、比較、内蔵ターミナルを使って、さらに詳しい分析を行います。

素早く視覚的に確認したい場合でも、詳細なファイル一覧が必要な場合でも、RcloneView の Explorer は CLI の構文を覚える必要なく、すべての情報を手元に提供します。

---

**関連ガイド：**

- [リモートストレージの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
