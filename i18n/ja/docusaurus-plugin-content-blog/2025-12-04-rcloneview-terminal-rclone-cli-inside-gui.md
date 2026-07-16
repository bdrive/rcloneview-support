---
slug: rcloneview-terminal-rclone-cli-inside-gui
title: "RcloneView Terminal: GUI内でrclone CLIのフルパワーを使う"
authors:
  - tayson
description: "RcloneViewのTerminalで、オートコンプリート、全画面モード、コピー可能なログを備えた完全なrclone CLIを実行--別のシェルは不要です。"
keywords:
  - rclone terminal
  - rcloneview terminal
  - rclone cli gui
  - rclone commands
  - cloud storage cli tool
  - cloud automation
  - rclone beginners
  - rclone power users
  - cloud devops tools
  - rcloneview
tags:
  - RcloneView
  - cloud-storage
  - sync
  - file-management
  - cli

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Terminal: GUI内でrclone CLIのフルパワーを使う

> RcloneViewを離れることなく、あらゆるrcloneコマンドを実行できます。新しいTerminalは、ブラウズ、比較、同期に使うのと同じウィンドウに、オートコンプリート、コピー可能なログ、全画面出力をもたらします。

RcloneViewには組み込みのTerminalが搭載され、アプリ内で完全なrclone CLIを実行できるようになりました--CMD、PowerShell、Terminalウィンドウを別途開く必要はありません。初心者はビジュアルなコンテキストを見ながらコマンドを学べる一方、エンジニアやパワーユーザー、IT管理者は、コンテキストスイッチなしに自動化フラグ、詳細ログ、スクリプトのフローを維持できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜCLIをGUIに組み込むのか?

- ブラウズ用のGUIと、高度なフラグや診断用のシェルとの間を行き来する必要がなくなります。
- rcloneの出力とログを、転送、マウント、スケジュールされたジョブのそばに保持できます。
- 空白のターミナルではなく、ガイド付きのUIヒントで、チームメイトに安全にrcloneを教えられます。

## RcloneView Terminalとは?

TerminalはRcloneViewのワークスペースの下部にあり、アプリですでに使用しているのと同じrcloneバイナリを実行します。`rclone`と入力してスペースバーを押すと、サポートされているすべてのコマンドが表示され、すぐに実行できます--Windows、macOS、Linuxすべてで同じ体験が得られます。

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="Terminal tab in RcloneView" class="img-medium img-center" />

## 初心者にとってのメリット

- セットアップの手間なし: rcloneはすでにバンドルされているため、インストールやシステムパスの検索なしでコマンドを練習できます。
- オートコンプリートで発見が簡単に--`rclone `と入力するだけで、実行前にコマンド一覧を確認できます。
- 出力はアプリ内に留まるため、GUIで見ている内容とコピー、再実行、比較がしやすくなります。

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="Autocomplete list for rclone commands" class="img-medium img-center" />

## エンジニア・パワーユーザーにとってのメリット

- マウント、Compare、Scheduler、CLI実験を単一のワークスペースに保ち、コンテキストスイッチをなくします。
- クラウドのレイテンシやAPIスロットリングのトラブルシューティング用に、詳細ログ(`-vv`)を取得し、ワンクリックですべてコピーできます。
- `rclone config create`でリモートをより速く設定し、バックエンドを検証してから、スクリプト化されたジョブに進めます。
- 拡張表示を使って、長い出力や複数行のスクリプトを快適に読めます。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="Expanded Terminal view" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="Shrink Terminal view" class="img-medium img-center" />
</div>

## 主な機能の概要

- **コマンド自動発見**: `rclone` + スペースを入力すると、実行前にすべてのコマンドをコンテキストとともに確認できます。
- **全画面Terminal**: 長いリストは拡大表示し、CompareやTransfersを確認したいときは縮小できます。
- **コピー、貼り付け、すべてコピー**: ファイルをエクスポートすることなく、ログをチームメイトやサポートと共有できます。

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="Copy and paste options in the Terminal" class="img-medium img-center" />

## 今すぐ試せる実用的なコマンド

### 1) リモートのストレージ使用量を確認する
```bash
rclone about "mygoogle:"
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="rclone about output in RcloneView Terminal" class="img-medium img-center" />

### 2) 設定済みのすべてのリモートを確認する
```bash
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes in RcloneView Terminal" class="img-medium img-center" />

### 3) CLIで新しいリモートを作成する
```bash
rclone config create mygoogledrive drive
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="Create Google Drive remote with rclone config create" class="img-medium img-center" />

### 4) 転送前にフォルダをプレビューする
```bash
rclone lsf mygoogledrive:Projects --dirs-only --recursive --max-depth 2
```

### 5) 詳細ログで移行をリハーサルする
```bash
rclone sync mygoogledrive:Projects s3backup:Projects --dry-run -vv --progress
```
`--dry-run`で変更をシミュレートし、`-vv`で実際のジョブを実行する前に、遅いバックエンドやスロットリングを検出しましょう。

## GUIとTerminal、どちらを選ぶか

- **GUIを使う**: クラウド間でドラッグ&ドロップしたり、差分を視覚的に比較したり、定期的なジョブをスケジュールしたり、ストレージをドライブとしてマウントしたりする場合。
- **Terminalを使う**: バックエンドのフラグをテストしたり、その場限りの診断を実行したり、クリックよりタイプする方が速い高度なrcloneコマンドを実行したりする場合。
- **両方を併用する**: Compareでプレビューし、CLIフラグでプランを調整してから、そのワークフローをスケジュールされたジョブとして保存します。

## クイックスタートと安全性

1. **Terminal**タブを開き、`rclone `と入力して、リストからコマンドを選びます。
2. 同期や削除の操作を実行する前に、読み取り専用のコマンド(`listremotes`、`lsf`、`about`)から始めましょう。
3. スクリーンショット付きのガイド付きウォークスルーは、[Using the Terminal in RcloneView](/howto/rcloneview-basic/using-terminal-in-rcloneview)を参照してください。

> プロのヒント: `delete`、`purge`、または未確認の`sync`のような破壊的なコマンドは、データを削除する可能性があります。Enterを押す前に、パスとリモートを再確認してください。

## まとめ

RcloneView Terminalは、すでに使っているビジュアルツールと並んで完全なrclone CLIを提供するため、初心者はより速く学べ、エキスパートはより速く動けます。今すぐ試して、クラウド操作、自動化実験、デバッグログを1つの場所にまとめましょう。

<CloudSupportGrid />
