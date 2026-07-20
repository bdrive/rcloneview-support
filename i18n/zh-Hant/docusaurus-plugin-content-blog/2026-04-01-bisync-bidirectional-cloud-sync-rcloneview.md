---
slug: bisync-bidirectional-cloud-sync-rcloneview
title: "Bisync：透過 RcloneView 實現真正的雙向雲端同步"
authors:
  - tayson
description: "透過 RcloneView 使用 rclone 的 bisync 功能，讓兩個雲端位置在雙向上保持同步。了解何時該使用 bisync、如何設定，以及如何處理衝突。"
keywords:
  - bisync rcloneview
  - bidirectional cloud sync rclone
  - rclone bisync guide
  - two-way cloud sync
  - sync both directions cloud
  - rcloneview bisync setup
  - rclone bidirectional sync
  - google drive bidirectional sync
  - onedrive two-way sync
  - cloud folder two-way mirror
tags:
  - RcloneView
  - sync
  - cloud-sync
  - feature
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync：透過 RcloneView 實現真正的雙向雲端同步

> 標準的 rclone Sync 是單向的——它會讓目的地與來源保持一致。Bisync 更進一步：任一位置的變更都會傳播到另一邊。如果你在位置 A 新增一個檔案，它會出現在位置 B，反之亦然。以下說明如何在 RcloneView 中設定它。

大多數雲端同步情境都是單向的：本機備份到雲端，或主要雲端鏡像到備份雲端。但有些工作流程需要真正的雙向同步——例如兩人共同編輯的共享資料夾、必須保持同步的工作機與家用機，或是作為對等關係的兩個雲端帳號。Rclone 的 `bisync` 指令提供了這項功能，而 RcloneView 讓你不需要使用命令列即可設定它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Sync 與 Bisync：差異何在？

| 行為 | rclone sync | rclone bisync |
|----------|------------|--------------|
| 方向 | 單向（來源 → 目的地） | 雙向（兩個方向） |
| 刪除 | 若來源缺少檔案，則從目的地刪除 | 雙向傳播刪除動作 |
| 衝突 | 來源永遠優先 | 需要明確的衝突處理 |
| 資料遺失風險 | 若方向錯誤則可能發生 | 風險較低；兩側都會檢查 |
| 複雜度 | 簡單 | 較複雜；需要謹慎設定 |

## 何時該使用 Bisync

**在以下情況使用 bisync：**
- 兩個人或系統會對同一個資料夾進行變更。
- 你在多個裝置上編輯檔案，而這些裝置無法始終同時保持連線。
- 你正將兩個雲端帳號當作雙邊都會有變更的主動鏡像來維護。

**在以下情況使用一般的 Sync：**
- 你有明確的主要（來源）與次要（備份／目的地）位置。
- 只有一側會建立新檔案——另一側為唯讀。
- 簡單性與可預測性是優先考量。

## 在 RcloneView 中設定 Bisync

Bisync 需要進行一次性的初始化（resync），以在後續執行追蹤變更之前建立基準狀態。

### 步驟 1 — 新增你的兩個遠端

確認兩個位置都已在 RcloneView 中設定為遠端。例如：
- `gdrive-work:/Projects/Active/`（Google Drive 工作帳號）
- `onedrive-home:/Projects/Active/`（OneDrive 家用帳號）

<img src="/support/images/en/blog/new-remote.png" alt="Configure remotes for bisync in RcloneView" class="img-large img-center" />

### 步驟 2 — 執行初始 resync

第一次執行 bisync 時必須使用 `--resync` 來建立基準。在 RcloneView 的 **Terminal（終端機）** 中：

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --resync --verbose
```

這會建立基準狀態檔案（儲存在 `~/.cache/rclone/bisync/` 中），供 bisync 在後續執行時用來偵測變更。resync 會透過將較新的檔案複製到每一側，使兩側保持一致。

### 步驟 3 — 在 RcloneView 中建立 Bisync 工作

1. 開啟 RcloneView 中的 **Jobs（工作）**。
2. 選擇 **Custom Command（自訂指令）** 或使用 Terminal 面板。
3. 輸入用於後續執行的 bisync 指令：

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --verbose --log-file /tmp/bisync.log
```

4. 儲存為工作，並排程使其每小時或每天執行一次。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule bisync job in RcloneView" class="img-large img-center" />

## 衝突處理

當某個檔案在兩次執行之間於兩個位置都被修改時，bisync 會偵測到衝突。預設情況下，rclone bisync 會標記這些衝突，且不會覆寫任一版本。

新增 `--conflict-resolve newer` 可自動優先採用較新的檔案：

```bash
rclone bisync path1 path2 --conflict-resolve newer
```

或使用 `--conflict-resolve larger` 來優先採用較大的檔案（適用於文件持續成長的情境）。

未自動解決的衝突檔案會被加上 `.conflict` 後綴並重新命名，以保留兩個版本。

## 常見的 Bisync 旗標

| 旗標 | 用途 |
|------|---------|
| `--resync` | 初始化或重新建立基準（僅使用一次） |
| `--conflict-resolve newer` | 透過優先採用較新的檔案來自動解決衝突 |
| `--filters-file /path/to/filters` | 套用包含／排除規則 |
| `--max-delete 10` | 若將刪除超過 10 個檔案則中止（安全機制） |
| `--dry-run` | 預覽將會變更的內容，而不實際執行任何動作 |
| `--verbose` | 提供詳細輸出以利偵錯 |

`--max-delete` 旗標特別重要——它能防止 bisync 因設定錯誤而意外刪除大量檔案。

## 監控 Bisync 執行結果

在每次執行後，於 RcloneView 的 **Job History（工作紀錄）** 中檢查 bisync 的輸出：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor bisync results in RcloneView" class="img-large img-center" />

一次健康的 bisync 執行會顯示：
- 從 path1 複製到 path2 的檔案
- 從 path2 複製到 path1 的檔案
- 偵測到的任何衝突以及其解決方式
- 總耗時與傳輸統計資料

## Bisync 的限制

- **不適用於對同一檔案的同時編輯**——bisync 是在多次執行之間進行比較，而非即時比較。
- **刪除傳播可能有風險**——一側刪除的檔案，會在下次執行後於另一側也被刪除。
- **需要在各次執行之間維持穩定狀態**——如果某次執行中途失敗，請以 `--resync` 重新執行以重建基準。
- **路徑越大速度越慢**——基準比對會在每次執行時完整掃描兩個位置。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 RcloneView 中**設定兩個遠端**。
3. 從 RcloneView 的終端機**執行初始的 `--resync`** 以建立基準。
4. **排程定期的 bisync 執行**以進行持續同步。

Bisync 為任何一對 rclone 支援的遠端——本機磁碟、雲端服務商、NAS 共享等等——帶來真正的雙向同步。

---

**相關指南：**

- [Sync、Copy、Move——差異說明](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [篩選規則與選擇性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [避免因同步方向錯誤而造成資料遺失](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
