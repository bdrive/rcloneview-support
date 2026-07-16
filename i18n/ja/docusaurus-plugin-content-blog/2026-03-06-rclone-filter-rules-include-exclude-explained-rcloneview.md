---
slug: rclone-filter-rules-include-exclude-explained-rcloneview
title: "rcloneのフィルタルール徹底解説:インクルード・エクスクルードパターンで賢く同期する"
authors:
  - tayson
description: "rcloneのフィルタルールを使いこなして、必要なものだけを同期しましょう。include、exclude、filter-from、min/maxサイズ・日数パターンをRcloneViewでの実践例とともに解説します。"
keywords:
  - rclone filter rules
  - rclone include exclude
  - rclone exclude folder
  - rclone filter from file
  - rclone sync specific files
  - rclone ignore files
  - rclone exclude pattern
  - rclone filter examples
  - rclone min size max size
  - rclone selective sync
tags:
  - RcloneView
  - rclone
  - filters
  - sync
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# rcloneのフィルタルール徹底解説:インクルード・エクスクルードパターンで賢く同期する

> すべてを同期するのは無駄ですし、間違ったものを同期するのは危険です。rcloneのフィルタルールを使えば、転送対象を精密にコントロールできます——ただし構文が分かりにくいこともあります。このガイドでは、実践的な例を交えてすべてを分かりやすく解説します。

クラウド間でファイルを同期またはコピーする際、すべてのファイルが必要になることはほとんどありません。`.pdf`ファイルだけが必要だったり、`.tmp`ファイル以外すべてが必要だったり、過去7日間に更新されたファイルだけ、あるいは100MB未満のファイルだけが必要な場合もあるでしょう。rcloneのフィルタシステムはこれらすべてに対応しており、RcloneViewではジョブ設定でこれらのフィルタをビジュアルに設定できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## rcloneフィルタの仕組み

rcloneはフィルタルールを**上から順に**処理します。各ファイルに対して、ルールを一つずつチェックします:

1. ルールに一致した場合、そのファイルは(ルールに応じて)インクルードまたはエクスクルードされます。
2. どのルールにも一致しない場合、そのファイルは**デフォルトでインクルード**されます。

この「最初に一致したものが優先される」という動作を理解することが重要です。順序が意味を持ちます。

## 基本パターン

### 特定のファイルやフォルダを除外する

```
--exclude "*.tmp"
--exclude "node_modules/**"
--exclude ".DS_Store"
```

これらのパターンは以下を除外します:
- ツリー内のどこにあっても、すべての`.tmp`ファイル。
- `node_modules`フォルダとその中身全体。
- すべての`.DS_Store`ファイル(macOSのメタデータ)。

### 特定のファイルのみをインクルードする

```
--include "*.pdf"
--include "*.docx"
```

`--include`を使用すると、rcloneは**それ以外のすべてを自動的に除外**します。つまり`--include "*.pdf"`は「PDFだけを同期し、他は同期しない」という意味になります。

### includeとexcludeを組み合わせる

```
--include "*.jpg"
--include "*.png"
--exclude "*"
```

これは、JPGファイルとPNGファイルのみを明示的にインクルードします。末尾の`--exclude "*"`が残りのすべてを捕捉します。

## --filterフラグ

`--filter`フラグを使うと、1つのルールでインクルードとエクスクルードの両方を指定できます:

```
--filter "+ *.pdf"
--filter "+ *.docx"
--filter "- *"
```

`+`プレフィックスはインクルード、`-`はエクスクルードを意味します。これは個別の`--include`と`--exclude`フラグと同等ですが、より簡潔です。

## filter-fromファイル

複雑なルールセットの場合は、フィルタをファイルにまとめましょう:

```
--filter-from /path/to/filters.txt
```

**filters.txt:**
```
# Include documents
+ *.pdf
+ *.docx
+ *.xlsx

# Include images
+ *.jpg
+ *.png

# Exclude everything else
- *
```

`#`で始まる行はコメントです。2〜3個以上のルールを持つ同期ジョブには、この方法が推奨されます。

## ディレクトリフィルタ

### 特定のディレクトリを除外する

```
--exclude "backup/**"
```

`**`は「このディレクトリとその中身すべて」を意味します。

### 特定のディレクトリのみをインクルードする

```
--include "/projects/**"
--exclude "*"
```

これは、ルート階層の`projects`フォルダのみを同期します。

### パターンでディレクトリを除外する

```
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "node_modules/**"
```

コードリポジトリを同期する開発者によく使われます——バージョン管理フォルダや依存関係フォルダをスキップします。

## サイズフィルタ

### 最小ファイルサイズ

```
--min-size 1M
```

1MB未満のファイルをスキップします。サムネイルや小さなキャッシュファイルを無視するのに便利です。

### 最大ファイルサイズ

```
--max-size 100M
```

100MBを超えるファイルをスキップします。ドキュメントは欲しいが動画ファイルは不要な場合に便利です。

### サイズの単位

- `k`または`K` — キロバイト
- `M` — メガバイト
- `G` — ギガバイト

例:`--min-size 500k --max-size 2G`は、500KBから2GBの範囲のファイルを同期します。

## 日数フィルタ

### 最近のファイルのみ

```
--max-age 7d
```

過去7日間に更新されたファイルのみを同期します。稼働中プロジェクトの差分バックアップに最適です。

### 古いファイルのみ

```
--min-age 30d
```

30日間変更されていないファイルのみを同期します。古いデータのアーカイブに便利です。

### 日数の単位

- `ms` — ミリ秒
- `s` — 秒
- `m` — 分
- `h` — 時間
- `d` — 日
- `w` — 週
- `M` — 月
- `y` — 年

## 実践例

### 例1:ドキュメントのみをバックアップ

Google DriveからBackblaze B2へ、PDF、Wordドキュメント、スプレッドシートを同期します:

```
--include "*.pdf"
--include "*.docx"
--include "*.xlsx"
--include "*.pptx"
--exclude "*"
```

### 例2:大きな動画ファイルをスキップ

500MBを超える動画ファイル以外のすべてを同期します:

```
--exclude "*.mp4"
--exclude "*.mov"
--exclude "*.avi"
--exclude "*.mkv"
```

またはサイズフィルタを使用:`--max-size 500M`

### 例3:開発者のプロジェクト同期

依存関係やビルド成果物を除いたコードプロジェクトを同期します:

```
--exclude "node_modules/**"
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "dist/**"
--exclude "build/**"
--exclude "*.pyc"
```

### 例4:90日以上経過したファイルをアーカイブ

Google DriveからS3 Glacierへ古いファイルを移動します:

```
--min-age 90d
```

### 例5:写真バックアップ(RAWをスキップ、JPEGは保持)

```
--include "*.jpg"
--include "*.jpeg"
--include "*.png"
--include "*.heic"
--exclude "*.cr2"
--exclude "*.nef"
--exclude "*.arw"
--exclude "*"
```

## RcloneViewでのフィルタ使用

RcloneViewで同期またはコピージョブを作成する際、ジョブ設定でフィルタルールを追加できます。これらはrcloneに直接渡されます:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure filter rules in RcloneView jobs" class="img-large img-center" />

### ドライランで確認する

新しいフィルタルールをテストする際は、必ず最初にドライランを使用してください。これにより、実際に転送を行うことなく、どのファイルがインクルードまたはエクスクルードされるかを正確に確認できます。

### フィルタとフォルダ比較

[フォルダ比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)を使用すると、同期元と同期先の状態を確認できます。フィルタと組み合わせることで、実際に何が同期されるかを正確に把握できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison to verify filter results" class="img-large img-center" />

## よくある間違い

### ディレクトリの末尾に`**`を付け忘れる

```
# Wrong — only excludes a FILE named "logs"
--exclude "logs"

# Right — excludes the logs DIRECTORY and everything in it
--exclude "logs/**"
```

### 残りを除外せずにインクルードのみ行う

```
# This includes PDFs but doesn't exclude anything else
--include "*.pdf"

# This works — include already implies "exclude everything else"
# But only when using --include alone
```

### 順序が重要

```
# This excludes everything, then tries to include (too late!)
--exclude "*"
--include "*.pdf"

# This works — include first, then exclude the rest
--include "*.pdf"
--exclude "*"
```

## はじめかた

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 設定でフィルタルールを指定して**ジョブを作成**します。
3. フィルタが正しいファイルを捕捉しているか**まずドライランで確認**します。
4. 確信が持てたら**ジョブを実行**します。
5. 複雑で再利用可能なルールセットには**filter-fromファイルを使用**します。

フィルタは、大雑把な「すべてを同期する」を、正確な「必要なものだけを同期する」に変えてくれます。一度マスターすれば、あらゆる場面で活用できます。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [フォルダ比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [帯域幅制限の設定](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
