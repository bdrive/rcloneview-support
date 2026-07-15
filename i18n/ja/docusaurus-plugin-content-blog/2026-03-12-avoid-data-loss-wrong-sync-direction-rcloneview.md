---
slug: avoid-data-loss-wrong-sync-direction-rcloneview
title: "同期がファイルを削除する仕組み — 同期方向の誤りによるデータ損失を防ぐ"
authors:
  - tayson
description: "同期方向を誤るとファイルが失われる可能性があります。rclone sync の仕組み、削除が発生する理由、そしてドライランとフォルダ比較で被害を防ぐ方法を解説します。"
keywords:
  - sync deleted my files
  - rclone sync data loss
  - wrong sync direction
  - sync vs copy safe
  - prevent sync data loss
  - cloud sync deleted files
  - rclone dry run
  - safe cloud sync
  - sync direction wrong
  - cloud sync mistake fix
tags:
  - RcloneView
  - sync
  - data-loss
  - safety
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同期がファイルを削除する仕組み — 同期方向の誤りによるデータ損失を防ぐ

> 「rclone sync を実行したら、500GB のファイルが消えてしまった」。これはクラウドストレージにおける最もよくある悲劇の一つです。同期は強力ですが、削除も行います。ここでは安全に使う方法を解説します。

同期は、送信先を送信元と完全に一致させます。これには、送信元に存在しないファイルを送信先から削除することも含まれます。誤って送信元と送信先を入れ替えたり、空のフォルダから同期を実行したりすると、同期は送信先のすべてを容赦なく削除してしまいます。このガイドでは、その事態を防ぐ方法を説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 同期がファイルを削除する仕組み

```
Source: Folder A (3 files: doc1, doc2, doc3)
Destination: Folder B (5 files: doc1, doc2, doc3, report1, report2)

After Sync A → B:
Folder B: doc1, doc2, doc3
(report1 and report2 are DELETED)
```

同期によって B は A と完全に同一になりました。B にのみ存在していたファイルは削除されています。

## よくある悲劇

### 送信元と送信先の入れ替え

`Cloud → NAS` の同期を意図していたのに、`NAS → Cloud` と入力してしまった場合です。NAS が空(新しいドライブ)であれば、同期によって Cloud 側のすべてが削除されます。

### 空のフォルダや誤ったフォルダからの同期

送信元として空のフォルダを指定することは、「送信先も空にする」という指示になります。

### フィルタ設定の誤り

すべてを除外するフィルタを設定すると、同期からは送信元が空であるように見えます。その結果、送信先のすべてが削除されます。

## RcloneView での安全対策

### 1) 必ず最初にドライランを使用する

ドライランは、実際には実行せずに、同期が何を行うかを正確に表示します。実行を確定する前に、削除される予定のファイル一覧を確認しましょう。

### 2) 同期前にフォルダ比較を使用する

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before syncing" class="img-large img-center" />

送信元と送信先を比較します。「右側のみ」に表示されるファイルが、同期によって削除される対象です。それらを失っても問題ないか確認してください。

### 3) バックアップにはSyncではなくCopyを使用する

コピーは削除を行いません。バックアップ目的であれば、ほとんどの場合コピーが正しい選択です。

| 用途 | Copy を使用 | Sync を使用 |
|-----------|:--------:|:--------:|
| バックアップ | ✅ | ❌ |
| ミラー(完全な複製) | ❌ | ✅ |
| 初回移行 | ✅ | ❌ |
| 継続的な複製 | ❌ | ✅ (慎重に) |

### 4) 送信元と送信先を再確認する

RcloneView の2ペイン エクスプローラーでは、ジョブを実行する前に、どちら側が送信元でどちら側が送信先かを明確に確認してください。

### 5) `--backup-dir` を使用する

rclone は `--backup-dir` オプションをサポートしています。これにより、削除されるはずだったファイルは完全に削除される代わりにバックアップディレクトリへ移動されます。これが安全網となります。

## 誤った同期実行後の復旧

すでに誤った同期を実行してしまった場合:

1. **直ちに停止する** — もう一度同期を実行しないでください。
2. **クラウドプロバイダーのゴミ箱を確認する** — Google Drive(30日間)、OneDrive(93日間)、Dropbox(30〜180日間)。
3. **バージョン管理を確認する** — S3 や B2 のバージョニング機能では、古いコピーが保持されます。
4. **別のバックアップから復元する** — Copy ベースのバックアップがあれば、そこにファイルは安全に保存されています。

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneView をダウンロード**する。
2. 同期操作の前に**フォルダ比較を使用**する。
3. **ドライランを実行**して変更内容を事前に確認する。
4. **バックアップにはCopyを使用**し、意図的なミラーリングのためだけにSyncを使う。
5. Sync操作の安全網として**`--backup-dir` の使用を検討**する。

同期は鋭利な道具です。注意して使いましょう。

---

**関連ガイド:**

- [Sync・Copy・Move の違いを解説](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [誤って削除したファイルを復元する](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)

<CloudSupportGrid />
