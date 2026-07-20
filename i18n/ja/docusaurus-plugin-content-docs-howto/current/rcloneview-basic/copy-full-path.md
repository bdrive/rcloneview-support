---
sidebar_position: 14
description: "RcloneViewのパスバーから、リモート名を含めたフォルダの完全パスを1ステップでコピーし、正確なコマンド作成と自動化に役立てましょう。"
keywords:
  - rcloneview
  - rclone
  - copy path
  - remote path
  - path bar
  - automation
  - terminal
tags:
  - RcloneView
  - path-bar
  - copy-path
  - rclone
date: 2025-12-05
author: tayson
---

# RcloneViewの「完全パスをコピー」機能を使う

**完全パスをコピー**機能を使うと、フォルダの完全パス(リモート名を含めることも可能)を一度の操作で取得できます。`rclone` コマンドの作成、Terminalでのテスト実行、正確なクラウドパスの共有、スクリプトでのミス防止に最適です。

---

## 「完全パスをコピー」の場所

**完全パスをコピー**は、リモートファイルブラウザ上部の**パスバー**からアクセスできます。  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path.png" alt="copy full path path bar" class="img-medium img-center" />

パスバーを右クリックすると、以下のオプションが表示されます。

- **切り取り**
- **コピー**
- **貼り付け**
- **完全パスをコピー(リモート付き)**
- **すべて選択**

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-all.png" alt="copy full path context menu" class="img-medium img-center" />

---

## すべて選択 — パス全体をハイライト表示

**すべて選択**を選ぶと、パスフィールド内のテキスト全体がハイライト表示され、すばやくコピーできます。  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-all.png" alt="copy full path select all" class="img-medium img-center" />

コピーして貼り付けると(例: メモ帳へ)、ローカルフォルダ名(例: `Meet recordings`)がそのまま表示されます。  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-notepad.png" alt="copy full path notepad" class="img-medium img-center" />

---

## 完全パスをコピー(リモート付き) — リモート + フォルダパス

**完全パスをコピー(リモート付き)**は、以下を取得します。

- リモート名
- フォルダの完全パス
- `rclone` 用の正確な `remote:path` 形式

出力例:

```
mygoogledrive:Meet recordings
```

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path.png" alt="copy full path with remote" class="img-medium img-center" />

メモ帳に貼り付けると、そのまま使えるパスが表示されます。  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path-notepad.png" alt="copy full path with remote notepad" class="img-medium img-center" />

この形式は、以下のようなコマンドでそのまま使用できます。

```bash
rclone copy "mygoogledrive:Meet recordings" /local/backup
```

---

## この機能を使うタイミング

- **`rclone` コマンドの作成**: 正確なリモートパスを即座に貼り付けられます。
- **Terminalでのパステスト**: `remote:path` を再入力せずに使えます。
- **スクリプトのミス防止**: 自動化やバッチ処理でのタイプミスを防ぎます。
- **チームメンバーとのパス共有**: サポートやコラボレーションのために正確な場所を送信できます。

---

## クイックリファレンス

| 操作                              | 機能                                        |
| --------------------------------- | ------------------------------------------ |
| **コピー**                        | パスバー内で選択したテキストをコピーします |
| **すべて選択**                    | パステキスト全体を選択します               |
| **完全パスをコピー(リモート付き)** | `remote:path` 形式をコピーします(推奨)   |
| **貼り付け**                      | クリップボードのテキストをパスバーに挿入します |

「完全パスをコピー」機能は一見シンプルですが、自動化、スクリプト作成、正確な転送において、RcloneViewで最も効果的な生産性向上機能の一つです。
