---
slug: rclone-ncdu-storage-analysis-rcloneview
title: "RcloneViewでrclone ncduを使ってクラウドストレージの使用状況を分析する"
authors: [tayson]
description: "RcloneViewを通じてrclone ncduを使用し、クラウドストレージの使用状況を分析し、大きなファイルを見つけ、複数のクラウドプロバイダーにわたるディスク容量を管理します。"
keywords:
  - rclone ncdu
  - cloud storage analysis
  - disk usage cloud
  - rcloneview storage analyzer
  - find large files cloud
  - cloud storage space
  - rclone disk usage
  - storage usage breakdown
  - cloud folder size
  - analyze remote storage
tags: [feature, tips, cli, monitoring, dashboard, performance]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでrclone ncduを使ってクラウドストレージの使用状況を分析する

> RcloneViewの統合ターミナルから直接アクセスできる、rcloneの強力なNCDUツールを使って、クラウドストレージの容量がどこに使われているのかを正確に把握しましょう。

クラウドストレージのコストは、気づかないうちに膨らんでいくことがあります。忘れられたバックアップフォルダや、未圧縮の動画ファイルの山などが積み重なり、いつの間にか使っている自覚のないテラバイト単位のストレージ料金を支払うことになります。rcloneには、リモートストレージをスキャンしてディレクトリサイズの内訳をインタラクティブに操作できる、組み込みのNCDU(NCurses Disk Usage)ツールが含まれています。RcloneViewの統合ターミナルとファイルエクスプローラーを通じて、ncduスキャンを実行し、容量を消費しているファイルやフォルダを特定し、すぐにストレージを回収するための対策を講じることができます。このガイドでは、基本的なスキャンから、複数のクラウドプロバイダーにまたがる高度な分析ワークフローまで、すべてを解説します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## rclone ncduとは

rclone ncduは、Linuxの古典的なユーティリティである`ncdu`(NCurses Disk Usage)をクラウド向けに適応させたバージョンです。オリジナルのncduがローカルファイルシステムを分析するのに対し、rcloneの実装はGoogle Drive、Amazon S3、Dropbox、OneDrive、Backblaze B2をはじめとする、rcloneがサポートする70以上のあらゆるリモートストレージバックエンドで動作します。

`rclone ncdu`を実行すると、指定したリモートパスを再帰的にスキャンし、すべてのファイルとディレクトリのサイズを計算します。結果はインタラクティブなターミナルインターフェースに表示され、次のようなことができます。

- **ディレクトリを移動**して、ネストしたフォルダ構造を掘り下げる
- **サイズでソート**して、最も容量を消費しているものをすぐに確認する
- **件数でソート**して、小さなファイルが大量にあるディレクトリを見つける
- インターフェースから直接**削除対象としてファイルをマークする**
- オフライン分析やレポート用に**結果をエクスポートする**

単にクラウドストレージを閲覧する方法に対する最大の利点は、速度と網羅性です。何千ものフォルダを手動で確認するのは現実的ではありませんが、ncduは一度のスキャンですべてを調べ、優先順位付けされた実用的な形式で結果を提示します。

**プロバイダー固有のツールとの違い:**

ほとんどのクラウドプロバイダーは何らかのストレージ使用状況表示機能を提供していますが、多くの場合次のような制限があります。
- Google Driveは合計使用量を表示しますが、フォルダ別の内訳は表示しません
- S3では詳細な分析にCloudWatchメトリクスやサードパーティ製ツールが必要です
- Dropboxは共有フォルダ単位で使用量を表示しますが、ネストした構造は反映されません

rclone ncduは、使用しているプロバイダーに関わらず、一貫性のある詳細な分析を提供します。

## 最初のNCDUスキャンを実行する

RcloneViewを通じてncduを使い始めるのは簡単です。RcloneViewの統合ターミナルを開くか、ファイルエクスプローラーで視覚的なアプローチを使用してください。

**RcloneViewのターミナル経由:**

```bash
rclone ncdu remote:
```

`remote:`の部分を、設定済みのリモート名に置き換えてください。例えば次のようになります。

```bash
rclone ncdu gdrive:
rclone ncdu s3:my-bucket
rclone ncdu dropbox:/Documents
```

**特定のサブディレクトリをスキャンする:**

ストレージの一部分だけを分析したい場合は、パスを指定します。

```bash
rclone ncdu gdrive:/Projects/2025
```

これは、特に大容量のストレージアカウントの場合、リモート全体をスキャンするよりも大幅に高速です。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

**スキャンプロセスを理解する:**

ncduが開始すると、リモート上のすべてのファイルとディレクトリを再帰的にリストします。かかる時間は次の要因に左右されます。

| 要因 | 影響 |
|--------|--------|
| 総ファイル数 | 主な要因。10万ファイルでは数分かかることがあります |
| API レート制限 | Google Driveは約10リクエスト/秒に制限されています |
| ネットワークレイテンシ | レイテンシが高いほどAPI呼び出しが遅くなります |
| ディレクトリの深さ | ネストが深い構造ほど多くのAPI呼び出しが必要になります |

5万ファイルのGoogle Driveであれば、スキャン時間は2〜5分程度と見込まれます。数百万オブジェクトを含むS3バケットの場合は、バケット全体ではなく特定のプレフィックスをスキャンすることを検討してください。

## NCDUインターフェースを操作する

スキャンが完了すると、インタラクティブな表示が提示されます。効果的に操作する方法を見ていきましょう。

**キーボード操作:**

| キー | 動作 |
|-----|--------|
| 上下矢印キー | 項目間で選択を移動 |
| Enter / 右矢印キー | 選択したディレクトリに入る |
| 左矢印キー | 親ディレクトリに戻る |
| d | 選択したファイルまたはディレクトリを削除 |
| s | サイズ順ソートの切り替え |
| c | 件数(ファイル数)順ソートの切り替え |
| g | グラフ表示の切り替え |
| n | 名前順ソート |
| q | ncduを終了 |

**表示内容の読み方:**

ncduの出力の各行には次の情報が表示されます。
- ディレクトリまたはファイルのサイズ(人間が読みやすい形式)
- 兄弟項目と比較した相対的なサイズを示すビジュアルバーグラフ
- 含まれるファイル数(ディレクトリの場合)
- ディレクトリまたはファイルの名前

デフォルトでは最大の項目が上位に表示されるため、どこでストレージが消費されているかが一目で分かります。

**実践的なナビゲーションの流れ:**

1. ルートレベルから始めて、最上位のフォルダのうちどれが最大かを確認します。
2. 最大のフォルダに入り、その中身を確認します。
3. 容量を消費している特定のファイルやサブディレクトリが見つかるまで、掘り下げを続けます。
4. 整理したい項目のパスをメモします。
5. RcloneViewのファイルエクスプローラーを使って、それらの項目を削除、移動、またはアーカイブします。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 大きなファイルや忘れられたデータを見つける

ncduの最も一般的な使い方は、予想外に大きなファイルや忘れられたデータを見つけることです。ここでは、さまざまな種類のストレージ浪費を特定するための戦略を紹介します。

**大きなメディアファイルを特定する:**

動画ファイル、ディスクイメージ、未圧縮のアーカイブは、よくある原因です。ncduでサイズ順にソートすると、通常これらがすぐに上位に現れます。よくある原因には以下が含まれます。

- 作業用ディレクトリに残された画面録画や動画の書き出しファイル
- バックアップとしてアップロードされた仮想マシンのディスクイメージ
- 圧縮可能な未圧縮のZIPやTARアーカイブ
- 異なるフォルダにまたがる大規模データセットの重複コピー

**古いバックアップを見つける:**

多くのユーザーは自動バックアップを設定した後、その存在を忘れてしまいます。次のようなものを探してください。
- `backup`、`archive`、`old`という名前や、日付が含まれるディレクトリ
- 同じデータの、タイムスタンプ付きの複数コピー
- クリーンアップされないまま蓄積されるデータベースダンプ

**プロバイダー間の重複ファイルを検出する:**

複数のリモートにわたってncduを使用している場合、同じデータが冗長に保存されていることに気づくかもしれません。

```bash
# Google Driveをスキャン
rclone ncdu gdrive:/Backups

# S3をスキャン
rclone ncdu s3:my-backup-bucket

# 結果を比較して重複するデータを見つける
```

**プロバイダー別の大きなファイルの種類:**

プロバイダーが異なれば、発生しやすいストレージ浪費の種類も異なります。

| プロバイダー | よくある大きなファイル |
|----------|--------------------|
| Google Drive | 共有された動画、出力結果を含むColabノートブック、古いTakeoutエクスポート |
| S3 | ログアーカイブ、古いデプロイ成果物、未圧縮のデータレイク |
| OneDrive | OneNoteのblobデータ、共有チームファイル、Outlookの添付ファイルコピー |
| Dropbox | カメラアップロードの重複、古い共有フォルダ |

## 結果のエクスポートと比較

継続的なストレージ管理のためには、ncduの結果をエクスポートして経時変化を追跡したくなるでしょう。

**スキャン結果をファイルにエクスポートする:**

rcloneの`size`コマンドは、スクリプト向けの出力を提供することでncduを補完します。

```bash
# リモートの合計サイズを取得
rclone size gdrive: --json

# ディレクトリをサイズ付きで一覧表示
rclone lsf gdrive: --dirs-only -R --format "sp" | sort -t ';' -k1 -rn | head -20
```

**ストレージ使用状況レポートを作成する:**

rcloneコマンドを組み合わせて、包括的なレポートを作成します。

```bash
# すべてのファイルサイズのJSONレポートを生成
rclone lsjson gdrive: -R --no-modtime --no-mimetype > storage-report.json

# rclone sizeで手早く要約を取得
rclone size gdrive:/Projects
rclone size gdrive:/Backups
rclone size gdrive:/Media
```

**プロバイダー間の使用状況を比較する:**

複数のクラウドアカウントを管理している場合は、それぞれに対してncduまたはsizeコマンドを実行して比較します。

```bash
echo "=== Google Drive ===" && rclone size gdrive:
echo "=== S3 ===" && rclone size s3:my-bucket
echo "=== Dropbox ===" && rclone size dropbox:
echo "=== OneDrive ===" && rclone size onedrive:
```

これにより、ストレージがどのように分散しているか、そしてどこに最適化の労力を注げば最も効果があるかが明確に把握できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 高度なNCDUテクニック

基本的なスキャンに加えて、いくつかの高度なテクニックを使うことで、ストレージ分析をより効果的にできます。

**スキャンをフィルタリングする:**

rcloneのフィルターフラグを使って分析対象を絞り込みます。

```bash
# 100MBより大きいファイルのみをスキャン
rclone ncdu gdrive: --min-size 100M

# 特定のディレクトリをスキャンから除外
rclone ncdu gdrive: --exclude "node_modules/**" --exclude ".git/**"

# 特定のファイルタイプのみをスキャン
rclone ncdu s3:my-bucket --include "*.{mp4,avi,mkv,mov}"
```

**スキャン結果をキャッシュする:**

非常に大きなリモートの場合、スキャンに長い時間がかかることがあります。rcloneのディレクトリキャッシュを有効にすると、繰り返しのスキャンを高速化できます。

```bash
rclone ncdu gdrive: --fast-list
```

`--fast-list`フラグは、ディレクトリの一覧を一括で取得することでAPI呼び出し回数を削減します。これに対応しているプロバイダー(S3、Google Drive、B2)では、スキャン時間を50%以上短縮できることがあります。

**共有ストレージを分析する:**

Google Driveでは、自分に共有されたファイルによって使用される容量はクォータに加算されませんが、共有ドライブ内で自分が所有しているファイルは加算されます。ncduを使って特定の共有ドライブをスキャンするには、以下のようにします。

```bash
rclone ncdu gdrive: --drive-shared-with-me
rclone ncdu gdrive,shared_drive_id=DRIVE_ID:
```

**定期的なスキャンをスケジュールする:**

cronやRcloneViewのジョブスケジューラを使って、自動化されたストレージレポートを設定します。

```bash
# 週次ストレージレポート
0 8 * * MON rclone size gdrive: --json >> /var/log/storage-usage.json
```

## 分析結果に基づいて対処する

ストレージの浪費を特定したら、RcloneViewを使って直接対策を実行します。

**不要なファイルを削除する:**

ncduのインターフェースから、任意のファイルまたはディレクトリで`d`を押すと削除できます。あるいは、RcloneViewのファイルエクスプローラーを使って特定したパスに移動し、GUIでファイルを削除することもできます。

**コールドデータをより安価なストレージに移動する:**

保持しておく必要はあるものの、めったにアクセスしない大きなデータセットを見つけた場合は、より安価なストレージ階層に移動します。

```bash
# 2023年の古いアーカイブをGoogle DriveからBackblaze B2に移動
rclone move gdrive:/Archives/2023 b2:cold-archive/2023 --progress
```

RcloneViewの2ペインエクスプローラーなら、これをドラッグ&ドロップで簡単に行えます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

**アーカイブ前に圧縮する:**

ログやCSVなどのテキスト中心のデータについては、コールドストレージに転送する前に圧縮してください。

```bash
# ローカルで圧縮してからアップロード
tar czf archive.tar.gz /path/to/data
rclone copy archive.tar.gz b2:compressed-archives/
```

**ライフサイクルポリシーを設定する:**

クリーンアップを終えたら、今後のストレージ肥大化を防ぐために自動クリーンアップを設定しましょう。RcloneViewのジョブスケジューリングを使って、定期的なクリーンアップタスクを実行します。

- 一定期間より古いファイルを削除する: `rclone delete remote: --min-age 365d`
- 空のディレクトリを削除する: `rclone rmdirs remote: --leave-root`
- Google Drive上のファイルを重複排除する: `rclone dedupe gdrive: --dedupe-mode newest`

## はじめに

rclone NCDUは、rcloneエコシステムの中でも特にすぐに価値を実感できるツールの一つです。たった一度のスキャンで、存在すら知らなかった何ギガバイトもの忘れられたデータ、重複ファイル、ストレージの浪費が明らかになることがあります。RcloneViewを通じて、アプリケーションを離れることなく、これらのスキャンを実行し、結果を確認し、対策を講じることができます。まずは最も容量の大きいクラウドストレージアカウントをスキャンし、サイズ順にソートして、上位10件の項目を順に確認してみてください。最初のセッションで、大きな節約効果を得られる可能性が高いでしょう。

---

**関連ガイド:**
- [リモートストレージの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
