---
slug: rclone-filter-rules-include-exclude-explained-rcloneview
title: "Rclone 篩選規則詳解：讓同步更聰明的 Include 與 Exclude 模式"
authors:
  - tayson
description: "掌握 rclone 的篩選規則，只同步你需要的內容。學習 include、exclude、filter-from,以及最小/最大檔案大小與時間的篩選模式——並附上 RcloneView 的實用範例。"
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
  - rclone
  - filters
  - sync
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone 篩選規則詳解：讓同步更聰明的 Include 與 Exclude 模式

> 同步所有內容是浪費的,同步錯誤的內容則是危險的。Rclone 的篩選規則讓你能精準控制要傳輸的內容——但語法可能令人困惑。本指南將以實用範例逐一拆解說明。

當你在雲端之間同步或複製檔案時,通常不需要傳輸所有內容。也許你只需要 `.pdf` 檔案,或是除了 `.tmp` 檔案以外的所有內容,或是最近 7 天內修改過的檔案,又或是小於 100 MB 的檔案。Rclone 的篩選系統能處理這一切——而 RcloneView 讓你可以在工作設定中以視覺化方式配置這些篩選條件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone 篩選規則的運作方式

Rclone 會**由上到下依序**處理篩選規則。針對每個檔案,它會逐一檢查規則:

1. 如果某條規則符合,該檔案就會依該規則被包含或排除。
2. 如果沒有規則符合,該檔案**預設會被包含**。

這種「第一個符合的規則勝出」的行為非常重要,務必理解。順序至關重要。

## 基本模式

### 排除特定檔案或資料夾

```
--exclude "*.tmp"
--exclude "node_modules/**"
--exclude ".DS_Store"
```

這些模式會排除:
- 整個目錄樹中所有的 `.tmp` 檔案。
- 整個 `node_modules` 資料夾及其內容。
- 所有 `.DS_Store` 檔案(macOS 中繼資料)。

### 只包含特定檔案

```
--include "*.pdf"
--include "*.docx"
```

使用 `--include` 時,rclone 會**自動排除其他所有內容**。因此 `--include "*.pdf"` 表示「只同步 PDF,不同步其他任何內容」。

### 結合 include 與 exclude

```
--include "*.jpg"
--include "*.png"
--exclude "*"
```

這明確地只包含 JPG 與 PNG 檔案。最後的 `--exclude "*"` 會捕捉所有其他內容。

## --filter 旗標

`--filter` 旗標可以在單一規則中同時提供 include 與 exclude:

```
--filter "+ *.pdf"
--filter "+ *.docx"
--filter "- *"
```

`+` 前綴表示包含,`-` 表示排除。這與分別使用 `--include` 和 `--exclude` 旗標等效,但更為精簡。

## Filter-From 檔案

對於複雜的規則集,可以將篩選條件放入一個檔案中:

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

以 `#` 開頭的行是註解。對於超過 2-3 條規則的同步工作,建議採用這種方式。

## 目錄篩選

### 排除特定目錄

```
--exclude "backup/**"
```

`**` 表示「這個目錄以及其中的所有內容」。

### 只包含特定目錄

```
--include "/projects/**"
--exclude "*"
```

這只會同步根層級的 `projects` 資料夾。

### 依模式排除目錄

```
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "node_modules/**"
```

這對於同步程式碼儲存庫的開發者來說很常見——跳過版本控制與相依套件資料夾。

## 大小篩選

### 最小檔案大小

```
--min-size 1M
```

跳過小於 1 MB 的檔案。適合用來忽略縮圖或微小的快取檔案。

### 最大檔案大小

```
--max-size 100M
```

跳過大於 100 MB 的檔案。當你只想要文件而不想要影片檔案時很實用。

### 大小單位

- `k` 或 `K` — 千位元組(Kilobytes)
- `M` — 百萬位元組(Megabytes)
- `G` — 十億位元組(Gigabytes)

範例:`--min-size 500k --max-size 2G` 會同步大小介於 500 KB 至 2 GB 之間的檔案。

## 時間篩選

### 僅限最近的檔案

```
--max-age 7d
```

只同步最近 7 天內修改過的檔案。非常適合用於進行中專案的增量備份。

### 僅限較舊的檔案

```
--min-age 30d
```

只同步 30 天內未曾變更的檔案。適合用於封存陳舊資料。

### 時間單位

- `ms` — 毫秒
- `s` — 秒
- `m` — 分鐘
- `h` — 小時
- `d` — 天
- `w` — 週
- `M` — 月
- `y` — 年

## 實用範例

### 範例 1：僅備份文件

從 Google Drive 同步 PDF、Word 文件與試算表到 Backblaze B2:

```
--include "*.pdf"
--include "*.docx"
--include "*.xlsx"
--include "*.pptx"
--exclude "*"
```

### 範例 2：跳過大型影片檔案

同步除了超過 500 MB 的影片檔案以外的所有內容:

```
--exclude "*.mp4"
--exclude "*.mov"
--exclude "*.avi"
--exclude "*.mkv"
```

或者使用大小篩選:`--max-size 500M`

### 範例 3：開發專案同步

在不含相依套件與建置產物的情況下同步程式碼專案:

```
--exclude "node_modules/**"
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "dist/**"
--exclude "build/**"
--exclude "*.pyc"
```

### 範例 4：封存超過 90 天的檔案

將舊檔案從 Google Drive 移至 S3 Glacier:

```
--min-age 90d
```

### 範例 5：相片備份(跳過 RAW,保留 JPEG)

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

## 在 RcloneView 中使用篩選條件

在 RcloneView 中建立同步或複製工作時,你可以在工作設定中加入篩選規則。這些規則會直接傳遞給 rclone:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure filter rules in RcloneView jobs" class="img-large img-center" />

### 使用 Dry Run 進行驗證

測試新的篩選規則時,務必先使用 dry run。這能讓你確切看到哪些檔案會被包含或排除,而不會實際進行任何傳輸。

### 搭配篩選條件的 Folder Comparison

使用[資料夾比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)來查看來源與目的地的狀態。結合篩選條件,這能幫助你確切了解將會同步的內容。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison to verify filter results" class="img-large img-center" />

## 常見錯誤

### 忘記為目錄加上結尾的 `**`

```
# Wrong — only excludes a FILE named "logs"
--exclude "logs"

# Right — excludes the logs DIRECTORY and everything in it
--exclude "logs/**"
```

### 只使用 Include 而不排除其餘內容

```
# This includes PDFs but doesn't exclude anything else
--include "*.pdf"

# This works — include already implies "exclude everything else"
# But only when using --include alone
```

### 順序至關重要

```
# This excludes everything, then tries to include (too late!)
--exclude "*"
--include "*.pdf"

# This works — include first, then exclude the rest
--include "*.pdf"
--exclude "*"
```

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **建立工作**並在設定中加入篩選規則。
3. **先執行 Dry Run**,確認篩選條件能捕捉到正確的檔案。
4. 確認無誤後**執行工作**。
5. 針對複雜且可重複使用的規則集,**使用 filter-from 檔案**。

篩選條件能將粗略的「同步所有內容」轉變為精確的「只同步我需要的內容」。一旦掌握,便能隨處運用。

---

**相關指南:**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [設定頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
