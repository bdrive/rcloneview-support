---
sidebar_position: 13
description: "RcloneViewの組み込みターミナルで rclone CLI コマンドを直接実行し、テスト・リモート管理・トラブルシューティングを行う方法。"
keywords:
  - rcloneview
  - rclone
  - terminal
  - cli
  - remote management
  - troubleshooting
  - rclone config
tags:
  - RcloneView
  - Terminal
  - CLI
  - rclone
  - troubleshooting
date: 2025-12-04
author: tayson
---

# RcloneViewでターミナルを使用する

RcloneViewには組み込みのターミナルが搭載されており、CMD、PowerShell、システムシェルを開かなくても完全な `rclone` CLI コマンドを実行できます。クイックテスト、リモートの管理、ログの取得をアプリ内で行うのに最適です。

このガイドでは、ターミナルの開き方、`rclone` コマンドの実行方法、表示の拡大・縮小、結果を共有するためのコピーオプションの使い方について説明します。

---

## ターミナルを開く

- RcloneView下部の **`Terminal`** タブをクリックします。  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="terminal bottom" class="img-medium img-center" />
- ターミナルは標準の `rclone` コマンドラインインターフェースと同様に動作し、現在のRcloneViewのコンテキスト内でコマンドを実行します。

---

## 利用可能なrcloneコマンドの一覧表示

rclone と入力してスペースキーを押すと、サポートされているすべてのコマンドが自動的に表示されます。  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="terminal input rclone" class="img-medium img-center" />

---

## ヘルプとリモートの詳細を表示する（`rclone about`）

- `about` の一般的なヘルプを表示するには:  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about.png" alt="terminal input rclone about" class="img-medium img-center" />
- 特定のリモート（例: `mygoogle`）のストレージ情報を取得するには:
  ```bash
  rclone about "mygoogle:"
  ```
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="terminal input rclone about my google" class="img-medium img-center" />

結果の例:  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle-result.png" alt="terminal about my google result" class="img-medium img-center" />

---

## 設定済みのすべてのリモートを一覧表示する

`listremotes` コマンドを使用して、利用可能なリモートを確認します。

```bash
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes" class="img-medium img-center" />

---

## ターミナル表示の拡大・縮小

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="terminal expand" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="terminal shrink" class="img-medium img-center" />
</div>

- **拡大（Expand）**: 出力が長い場合はフルスクリーンのターミナルに切り替えます。
- **縮小（Shrink）**: デフォルトのレイアウトに戻します。

---

## CLIでリモートを作成する（`rclone config create`）

例: `mygoogledrive` という名前のGoogle Driveリモートを作成し、確認します。

```bash
rclone config create mygoogledrive drive
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="rclone config create drive" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-check.png" alt="rclone config create check" class="img-medium img-center" />

---

## コピー、ペースト、すべてコピー

ターミナルの出力を選択するとコンテキストメニューが開き、**Copy**、**Paste**、**Copy All** を選択できます。  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="terminal select copy" class="img-medium img-center" />

これはサポートへのログ共有やドキュメントへの結果保存に役立ちます。

---

## 推奨される使用例

- 自動化する前に高度な `rclone` コマンド（`lsf`、`tree`、バックエンドフラグ）をテストする。
- RcloneView内でスクリプトやサーバー側のコマンドを検証する。
- GUIでの操作が遅い場合に、リモートを素早く管理・作成する。

:::caution 破壊的なコマンドには注意してください
`delete`、`purge`、または誤った `sync` フラグを使用すると、データが完全に削除される可能性があります。ターミナルで実行する前に、パスとリモートを再確認してください。
:::
