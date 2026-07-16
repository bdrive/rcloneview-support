---
slug: sync-copy-move-difference-explained-rcloneview
title: "同期 vs コピー vs 移動 — どのクラウド転送操作を使うべきか？"
authors:
  - tayson
description: "クラウド転送で同期・コピー・移動のどれを使うべきか迷っていますか？このガイドでは、それぞれの違いと、RcloneViewでどの操作が適切かを解説します。"
keywords:
  - rclone sync vs copy
  - cloud sync vs copy difference
  - when to use sync or copy
  - rclone move command
  - cloud transfer operations
  - sync copy move explained
  - rclone operations guide
  - cloud file operations
  - which cloud sync type
  - safe cloud transfer method
tags:
  - sync
  - copy
  - move
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同期 vs コピー vs 移動 — どのクラウド転送操作を使うべきか？

> クラウド間でファイルを転送したい場合、RcloneViewには同期、コピー、移動の3つの操作があります。似ているように見えますが、間違った操作を選ぶと意図せずファイルを失うことがあります。それぞれの仕組みと使いどころを解説します。

これはクラウドファイル管理における最も重要な判断の一つです。各操作は、送信先には存在するが送信元には存在しないファイルをどう扱うかについて異なる挙動を持ちます。これを理解することで、意図しないデータ損失を防げます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 3つの操作

### コピー

**動作内容**: 送信元から送信先へファイルをコピーします。送信先に同一のファイルがすでに存在する場合はスキップされます。存在はするが内容が異なる場合は上書きされます。

**動作しないこと**: 送信先から何かを削除することはありません。絶対に。

```
Source:      A, B, C
Destination: B, D
After Copy:  B, D, A, C  (D is untouched, A and C are added)
```

### 同期

**動作内容**: 送信先を送信元と同一の状態にします。新規・変更されたファイルをコピーします。**送信元に存在しないファイルは送信先から削除されます。**

```
Source:      A, B, C
Destination: B, D
After Sync:  A, B, C  (D is deleted! A and C are added)
```

### 移動

**動作内容**: コピーと同様ですが、ファイルの転送が成功した後、**送信元からファイルを削除します**。

```
Source:      A, B, C
Destination: B, D
After Move:
  Source: (empty)
  Destination: B, D, A, C
```

## クイックリファレンス

| 動作 | コピー | 同期 | 移動 |
|----------|:----:|:----:|:----:|
| 送信先に新規ファイルを追加 | ✅ | ✅ | ✅ |
| 変更されたファイルを更新 | ✅ | ✅ | ✅ |
| 送信先から削除 | ❌ | ✅ | ❌ |
| 送信元から削除 | ❌ | ❌ | ✅ |
| バックアップに安全 | ✅ | ⚠️ | ❌ |
| 完全なミラーを作成 | ❌ | ✅ | ❌ |

## どの操作をいつ使うか

### コピーを使う場面：

- **バックアップ** — 安全策が欲しい場合。コピーは送信先から削除を行わないため、送信元からファイルを削除しても、バックアップにはそのファイルが残ります。
- **初回の移行** — 新しいクラウドへ初めてデータを移す場合。
- **ファイルの追加** — 既存のファイルに影響を与えずに新しいコンテンツを追加したい場合。
- **判断に迷う場合** — コピーは最も安全なデフォルトです。送信先のデータを失うことがありません。

**例：**
- 毎日のバックアップ: Google Drive → Backblaze B2。
- 初回移行: OneDrive → Google Drive。
- クライアント納品: 完成したファイルをクライアントのDropboxへコピー。

### 同期を使う場面：

- **ミラーリング** — 送信先を常に送信元の完全なコピーにしたい場合。
- **稼働中の作業フォルダ** — 削除も含め、送信先に全ての変更を反映させたい場合。
- **ストレージの整理** — 送信元から削除されたファイルは、ミラーからも削除されるべき場合。

**例：**
- S3上にNASのミラーを維持する（完全なレプリカ）。
- 2人のチームメンバー間でプロジェクトフォルダをミラーリングする。
- ステージングサーバーを本番のアセットフォルダと同期状態に保つ。

**警告**: 同期はファイルを削除します。実行前には必ず**ドライラン**で何が削除されるかプレビューしてください。

### 移動を使う場面：

- **アーカイブ** — 古いファイルを安価なストレージへ移動し、コストの高い送信元から削除する場合。
- **処理パイプライン** — ファイルが受信フォルダに届き、処理された後、アーカイブへ移動される場合。
- **容量の解放** — 容量が一杯のドライブからクラウドストレージへファイルを移動し、ローカルのコピーを削除する場合。

**例：**
- Google Driveから90日以上経過したファイルをS3 Glacierへ移動。
- ステージングバケットの処理済みアップロードをアーカイブバケットへ移動。
- 容量が一杯の携帯電話バックアップから写真をクラウドアーカイブへ移動。

## ドライランという安全策

任意の操作（特に同期）を実行する前に、**ドライラン**を使って何が起こるかを正確にプレビューしましょう。

- どのファイルがコピーされるか。
- どのファイルが削除されるか（同期のみ）。
- どのファイルが移動されるか（移動のみ）。

このプレビューはコストがかからず、予期しない事態を防いでくれます。

## まず先にフォルダ比較を

転送を行う前に、フォルダ比較機能を使って現在の状態を把握しましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before transferring" class="img-large img-center" />

これにより次のことがわかります：
- 両方の場所に存在するファイル（内容が一致しているかどうかも）。
- 送信元にのみ存在するファイル。
- 送信先にのみ存在するファイル。

## よくある間違い

### バックアップに同期を使う

```
Day 1: Sync Google Drive → S3  (all files backed up)
Day 2: Accidentally delete a folder from Google Drive
Day 3: Sync Google Drive → S3  (folder deleted from S3 too!)
```

これを防ぐには、バックアップには**コピー**を使いましょう。

### ミラーを作りたいのにコピーを使う

```
Day 1: Copy Source → Dest  (files transferred)
Day 2: Delete old files from Source
Day 3: Copy Source → Dest  (old files still on Dest, taking up space)
```

送信先を常にきれいな状態に保ちたい場合は、**同期**を使いましょう。

### 両方にコピーを残したいのに移動を使う

移動は送信元を削除します。両方の場所にファイルを残す必要がある場合は、**コピー**を使いましょう。

## 判断フローチャート

1. **両方の場所にファイルが必要ですか？**
   - はい → コピーまたは同期。
   - いいえ（送信元から削除する） → 移動。

2. **送信先を送信元と完全に一致させるべきですか？**
   - はい（削除も含めて） → 同期。
   - いいえ（新しいファイルの追加のみ） → コピー。

3. **これはバックアップですか？**
   - はい → ほぼ常にコピー。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**。
2. **フォルダを比較**して現在の状態を把握する。
3. 目的に応じて**適切な操作を選択**する。
4. 変更内容をプレビューするために**まずドライラン**を行う。
5. 自信を持って**実行**する。

正しい仕事には正しい操作を。推測せず、理解しましょう。

---

**関連ガイド：**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rcloneフィルタルール](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
