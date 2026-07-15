---
slug: avoid-data-loss-wrong-sync-direction-rcloneview
title: "同步如何刪除您的檔案——避免因同步方向錯誤造成資料遺失"
authors:
  - tayson
description: "錯誤的同步方向可能會清空您的檔案。了解 rclone 同步的運作方式、為何會刪除檔案，以及如何使用試執行與資料夾比較來預防災難發生。"
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

# 同步如何刪除您的檔案——避免因同步方向錯誤造成資料遺失

> 「我執行了 rclone sync，結果 500 GB 的檔案不見了。」這是雲端儲存最常見的災難之一。同步功能很強大——但它會刪除檔案。以下說明如何安全地使用它。

同步會讓目的地與來源完全一致，這包括刪除目的地中來源不存在的檔案。如果您不小心對調了來源與目的地，或是從一個空資料夾進行同步，同步功能會毫不留情地刪除目的地的所有內容。本指南將說明如何預防這種情況。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 同步如何刪除檔案

```
Source: Folder A (3 files: doc1, doc2, doc3)
Destination: Folder B (5 files: doc1, doc2, doc3, report1, report2)

After Sync A → B:
Folder B: doc1, doc2, doc3
(report1 and report2 are DELETED)
```

同步讓 B 與 A 完全一致。B 中獨有的檔案就被移除了。

## 常見的災難情境

### 來源與目的地對調

您原本想同步 `Cloud → NAS`，卻誤打成 `NAS → Cloud`。如果 NAS 是空的（新硬碟），同步就會刪除雲端上的所有內容。

### 從空的或錯誤的資料夾進行同步

將同步指向一個空的來源，意味著「讓目的地也變成空的」。

### 過濾規則設定錯誤

若過濾規則排除了所有內容，來源在同步功能看來就會是空的，導致目的地的所有內容都被刪除。

## RcloneView 中的安全措施

### 1) 務必先使用試執行

試執行會準確顯示同步將要執行的動作——但不會真正執行。在確定執行前，先檢視將被刪除的檔案清單。

### 2) 同步前先使用資料夾比較

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before syncing" class="img-large img-center" />

比較來源與目的地。查看「僅右側有」的檔案——這些就是同步將會刪除的檔案。您能接受失去它們嗎？

### 3) 備份時請使用複製而非同步

複製絕不會刪除檔案。若您正在進行備份，複製幾乎永遠是正確的選擇。

| Situation | Use Copy | Use Sync |
|-----------|:--------:|:--------:|
| Backup | ✅ | ❌ |
| Mirror (exact replica) | ❌ | ✅ |
| Initial migration | ✅ | ❌ |
| Ongoing replication | ❌ | ✅ (carefully) |

### 4) 再三確認來源與目的地

在 RcloneView 的雙窗格檔案總管中，執行任何工作前，請清楚辨識哪一側是來源、哪一側是目的地。

### 5) 使用 `--backup-dir`

Rclone 支援 `--backup-dir`——原本會被刪除的檔案會改為移動到備份目錄，而不是永久移除。這能為您提供一道安全防線。

## 意外同步後的復原方式

如果您已經執行了錯誤的同步：

1. **立即停止**——不要再執行另一次同步。
2. **檢查雲端服務商的垃圾桶** — Google Drive（30 天）、OneDrive（93 天）、Dropbox（30-180 天）。
3. **檢查版本控制** — S3 與 B2 的版本控制功能會保留舊版本的副本。
4. **從獨立備份中還原**——如果您有以複製方式建立的備份，您的檔案在那裡是安全的。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在執行任何同步操作前，**使用資料夾比較**。
3. **執行試執行**以預覽將發生的變更。
4. **備份時使用複製**——將同步保留給刻意進行的鏡像操作。
5. 針對同步操作，**考慮使用 `--backup-dir`** 作為安全防線。

同步是一項鋒利的工具，請謹慎使用。

---

**相關指南：**

- [同步、複製與移動的差異說明](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [復原意外刪除的檔案](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)

<CloudSupportGrid />
