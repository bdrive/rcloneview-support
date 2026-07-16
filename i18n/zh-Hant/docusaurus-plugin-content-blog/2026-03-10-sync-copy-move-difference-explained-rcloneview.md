---
slug: sync-copy-move-difference-explained-rcloneview
title: "同步 vs 複製 vs 移動——雲端傳輸該選哪一種操作？"
authors:
  - tayson
description: "不確定雲端傳輸該用同步、複製還是移動？本指南說明三者的差異，以及在 RcloneView 中各自適合的使用情境。"
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

# 同步 vs 複製 vs 移動——雲端傳輸該選哪一種操作？

> 你想在雲端之間傳輸檔案。RcloneView 提供同步、複製與移動三種操作。它們聽起來很類似，但選錯操作可能會刪除你原本不想遺失的檔案。以下說明每種操作的運作方式，以及各自適合的使用時機。

這是雲端檔案管理中最重要的決策之一。每種操作對「存在於目的地但不存在於來源」的檔案，處理方式都不同。理解這一點可以避免意外的資料遺失。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 三種操作

### 複製 (Copy)

**它做什麼**：將檔案從來源複製到目的地。如果目的地已存在相同檔案，則跳過；如果存在但內容不同，則覆寫。

**它不做什麼**：絕不會從目的地刪除任何東西。

```
Source:      A, B, C
Destination: B, D
After Copy:  B, D, A, C  (D is untouched, A and C are added)
```

### 同步 (Sync)

**它做什麼**：讓目的地與來源完全一致。複製新增與變更的檔案，**並刪除目的地中來源不存在的檔案**。

```
Source:      A, B, C
Destination: B, D
After Sync:  A, B, C  (D is deleted! A and C are added)
```

### 移動 (Move)

**它做什麼**：與複製類似，但檔案成功傳輸後**會從來源刪除**。

```
Source:      A, B, C
Destination: B, D
After Move:
  Source: (empty)
  Destination: B, D, A, C
```

## 快速對照表

| 行為 | 複製 | 同步 | 移動 |
|----------|:----:|:----:|:----:|
| 將新檔案加入目的地 | ✅ | ✅ | ✅ |
| 更新變更的檔案 | ✅ | ✅ | ✅ |
| 從目的地刪除 | ❌ | ✅ | ❌ |
| 從來源刪除 | ❌ | ❌ | ✅ |
| 適合備份 | ✅ | ⚠️ | ❌ |
| 建立完全鏡像 | ❌ | ✅ | ❌ |

## 何時使用各種操作

### 適合使用複製的情境：

- **備份** — 你想要一個安全網。複製絕不會從目的地刪除檔案，所以即使你從來源刪除了某個檔案，備份中仍會保留它。
- **初次遷移** — 首次將資料搬移到新的雲端服務。
- **新增檔案** — 想在不影響現有檔案的情況下新增內容。
- **不確定該選哪個** — 複製是最安全的預設選擇，不會在目的地造成資料遺失。

**範例：**
- 每日備份：Google Drive → Backblaze B2。
- 初次遷移：OneDrive → Google Drive。
- 交付客戶：將完成的檔案複製到客戶的 Dropbox。

### 適合使用同步的情境：

- **鏡像** — 目的地應該隨時是來源的完全複本。
- **正在使用中的工作資料夾** — 希望目的地反映所有變更，包括刪除。
- **儲存空間清理** — 從來源移除的檔案，也應該從鏡像中移除。

**範例：**
- 在 S3 上維護 NAS 的鏡像（完全複本）。
- 在兩位團隊成員之間鏡像同一個專案資料夾。
- 讓測試伺服器與正式環境的素材資料夾保持同步。

**注意**：同步會刪除檔案。務必先執行**試跑（dry run）**以預覽將被刪除的內容。

### 適合使用移動的情境：

- **封存** — 將舊檔案移動到便宜的儲存空間，並從較昂貴的來源移除。
- **處理流程** — 檔案進入收件匣、經過處理後，再移動到封存區。
- **釋放空間** — 將檔案從已滿的硬碟移動到雲端儲存，並移除本機副本。

**範例：**
- 將 Google Drive 中超過 90 天的檔案移動到 S3 Glacier。
- 將處理完成的上傳檔案從暫存儲存桶移動到封存儲存桶。
- 將照片從已滿的手機備份移動到雲端封存。

## 試跑安全網

在執行任何操作（尤其是同步）之前，使用**試跑**準確預覽將發生的事情：

- 哪些檔案將被複製。
- 哪些檔案將被刪除（僅限同步）。
- 哪些檔案將被移動（僅限移動）。

這項預覽不會產生任何費用，卻能避免意外狀況。

## 先進行資料夾比對

在任何傳輸之前，先使用「資料夾比對」了解目前的狀態：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before transferring" class="img-large img-center" />

這會顯示：
- 兩處都存在的檔案（以及是否一致）。
- 僅存在於來源的檔案。
- 僅存在於目的地的檔案。

## 常見錯誤

### 用同步來做備份

```
Day 1: Sync Google Drive → S3  (all files backed up)
Day 2: Accidentally delete a folder from Google Drive
Day 3: Sync Google Drive → S3  (folder deleted from S3 too!)
```

備份請使用**複製**以避免此問題。

### 想要鏡像卻用了複製

```
Day 1: Copy Source → Dest  (files transferred)
Day 2: Delete old files from Source
Day 3: Copy Source → Dest  (old files still on Dest, taking up space)
```

如果希望目的地保持乾淨，請使用**同步**。

### 想要保留兩份副本卻用了移動

移動會刪除來源檔案。如果需要在兩處都保留檔案，請使用**複製**。

## 決策流程

1. **兩處都需要保留檔案嗎？**
   - 是 → 複製或同步。
   - 否（要從來源移除）→ 移動。

2. **目的地應該與來源完全一致嗎？**
   - 是（包含刪除）→ 同步。
   - 否（只新增檔案）→ 複製。

3. **這是備份嗎？**
   - 是 → 幾乎總是選擇複製。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **比對資料夾**以了解目前狀態。
3. 根據你的目標**選擇正確的操作**。
4. **先試跑**以預覽變更。
5. 有信心地**執行**。

正確的操作用在正確的地方。不要用猜的——要理解。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rclone 篩選規則說明](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
