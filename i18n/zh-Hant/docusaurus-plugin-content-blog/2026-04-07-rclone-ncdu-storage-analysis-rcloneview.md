---
slug: rclone-ncdu-storage-analysis-rcloneview
title: "在 RcloneView 中使用 Rclone NCDU 分析雲端儲存空間使用情況"
authors: [tayson]
description: "透過 RcloneView 使用 rclone ncdu 分析雲端儲存空間使用情況、找出大型檔案，並跨多個雲端服務供應商管理磁碟空間。"
keywords:
  - rclone ncdu
  - 雲端儲存空間分析
  - 雲端磁碟使用量
  - rcloneview 儲存空間分析工具
  - 尋找雲端大型檔案
  - 雲端儲存空間
  - rclone 磁碟使用量
  - 儲存空間使用細目
  - 雲端資料夾大小
  - 分析遠端儲存空間
tags: [feature, tips, cli, monitoring, dashboard, performance]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 中使用 Rclone NCDU 分析雲端儲存空間使用情況

> 透過 RcloneView 內建的終端機直接使用 rclone 強大的 NCDU 工具,精確掌握您的雲端儲存空間都用到哪裡去了。

雲端儲存費用可能在不知不覺中攀升。這裡一個被遺忘的備份資料夾,那裡一批未壓縮的影片檔案,轉眼間您就在為自己根本不知道正在使用的數 TB 儲存空間付費。Rclone 內建了 NCDU(NCurses Disk Usage)工具,可掃描您的遠端儲存空間,並呈現互動式、可瀏覽的目錄大小細目。透過 RcloneView 內建的終端機與檔案總管,您可以執行 ncdu 掃描、找出佔用空間的檔案與資料夾,並立即採取行動釋放儲存空間。本指南涵蓋從基本掃描到跨多個雲端服務供應商的進階分析工作流程的所有內容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什麼是 Rclone NCDU?

Rclone NCDU 是經典 Linux `ncdu`(NCurses Disk Usage)工具的雲端版本。原版的 ncdu 分析本機檔案系統,而 rclone 的實作則可搭配 rclone 支援的任何遠端儲存後端運作,包括 Google Drive、Amazon S3、Dropbox、OneDrive、Backblaze B2,以及其他 70 多個服務供應商。

當您執行 `rclone ncdu` 時,它會遞迴掃描指定的遠端路徑,計算每個檔案與目錄的大小。結果會呈現在互動式終端機介面中,您可以在其中:

- **瀏覽目錄**以深入查看巢狀資料夾結構
- **依大小排序**以立即查看佔用空間最多的項目
- **依數量排序**以找出包含過多小型檔案的目錄
- **直接從介面標記檔案以刪除**
- **匯出結果**以供離線分析或製作報告

相較於單純瀏覽雲端儲存空間,其主要優勢在於速度與全面性。手動檢視數千個資料夾是不切實際的,但 ncdu 可以一次掃描所有內容,並以有優先順序、可採取行動的格式呈現結果。

**與服務供應商專屬工具的差異:**

大多數雲端服務供應商都提供某種形式的儲存空間使用量顯示,但這些顯示通常有其侷限:
- Google Drive 顯示總使用量,但不會依資料夾細分
- S3 需要 CloudWatch 指標或第三方工具才能進行詳細分析
- Dropbox 顯示每個共用資料夾的使用量,但會遺漏巢狀結構

無論您使用哪個服務供應商,Rclone ncdu 都能提供一致且詳細的分析。

## 執行您的第一次 NCDU 掃描

透過 RcloneView 開始使用 ncdu 相當簡單。開啟 RcloneView 內建的終端機,或使用檔案總管以視覺化方式操作。

**透過 RcloneView 的終端機:**

```bash
rclone ncdu remote:
```

將 `remote:` 替換為您已設定的遠端名稱。例如:

```bash
rclone ncdu gdrive:
rclone ncdu s3:my-bucket
rclone ncdu dropbox:/Documents
```

**掃描特定子目錄:**

如果您只想分析部分儲存空間,請指定路徑:

```bash
rclone ncdu gdrive:/Projects/2025
```

這比掃描整個遠端要快得多,對於大型儲存空間帳戶尤其如此。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

**了解掃描過程:**

當 ncdu 啟動時,它會遞迴列出遠端上的每個檔案與目錄。所需時間取決於:

| 因素 | 影響 |
|--------|--------|
| 檔案總數 | 主要因素;10 萬個檔案可能需要數分鐘 |
| API 速率限制 | Google Drive 限制約每秒 10 次請求 |
| 網路延遲 | 較高的延遲會拖慢 API 呼叫速度 |
| 目錄深度 | 深層巢狀結構需要更多 API 呼叫 |

對於擁有 50,000 個檔案的 Google Drive,掃描時間預計為 2 到 5 分鐘。對於擁有數百萬個物件的 S3 儲存桶,建議掃描特定前綴,而非整個儲存桶。

## 瀏覽 NCDU 介面

掃描完成後,系統會顯示互動式畫面。以下說明如何有效地進行操作。

**鍵盤控制:**

| 按鍵 | 動作 |
|-----|--------|
| 方向鍵上/下 | 在項目間移動選取 |
| Enter / 方向鍵右 | 進入選取的目錄 |
| 方向鍵左 | 返回上層目錄 |
| d | 刪除選取的檔案或目錄 |
| s | 切換依大小排序 |
| c | 切換依數量排序(檔案數) |
| g | 切換圖表顯示 |
| n | 依名稱排序 |
| q | 結束 ncdu |

**閱讀畫面內容:**

ncdu 輸出中的每一行會顯示:
- 目錄或檔案的大小(以易讀格式呈現)
- 顯示相對於同層項目大小的視覺化長條圖
- 所包含的檔案數量(適用於目錄)
- 目錄或檔案的名稱

預設情況下,最大的項目會顯示在最上方,讓您能立即看出儲存空間都消耗在哪裡。

**實用的瀏覽流程:**

1. 從根目錄開始,查看哪些頂層資料夾最大。
2. 進入最大的資料夾以查看其內容。
3. 持續深入,直到找到消耗空間的具體檔案或子目錄。
4. 記下您想清理的項目路徑。
5. 使用 RcloneView 的檔案總管刪除、移動或封存這些項目。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 尋找大型檔案與被遺忘的資料

ncdu 最常見的用途是找出意外龐大的檔案與被遺忘的資料。以下是識別不同類型儲存空間浪費的策略。

**識別大型媒體檔案:**

影片檔案、磁碟映像檔與未壓縮的封存檔是常見的問題來源。當您在 ncdu 中依大小排序時,這些通常會立即浮現在最上方。常見的元兇包括:

- 遺留在工作目錄中的螢幕錄影與影片匯出檔
- 以備份形式上傳的虛擬機器磁碟映像檔
- 可壓縮卻未壓縮的 ZIP 或 TAR 封存檔
- 分散在不同資料夾中的大型資料集重複副本

**尋找過時的備份:**

許多使用者設定自動備份後就忘了它們的存在。請留意:
- 名稱包含 `backup`、`archive`、`old` 或日期戳記的目錄
- 同一份資料的多個帶時間戳記副本
- 未經清理而持續累積的資料庫傾印檔

**偵測跨服務供應商的重複檔案:**

如果您跨多個遠端使用 ncdu,可能會發現同一份資料被重複儲存:

```bash
# Scan Google Drive
rclone ncdu gdrive:/Backups

# Scan S3
rclone ncdu s3:my-backup-bucket

# Compare the results to find overlapping data
```

**各服務供應商的常見大型檔案類型:**

不同的服務供應商會吸引不同類型的儲存空間浪費:

| 服務供應商 | 常見的大型檔案 |
|----------|--------------------|
| Google Drive | 共用影片、帶有輸出結果的 Colab 筆記本、舊的 Takeout 匯出檔 |
| S3 | 日誌封存檔、舊的部署產物、未壓縮的資料湖 |
| OneDrive | OneNote 二進位資料、共用團隊檔案、Outlook 附件副本 |
| Dropbox | 相機上傳重複檔案、舊的共用資料夾 |

## 匯出並比較結果

為了持續進行儲存空間管理,您會需要匯出 ncdu 結果並追蹤隨時間的變化。

**將掃描結果匯出至檔案:**

Rclone 的 `size` 指令可搭配 ncdu 使用,提供可供指令碼處理的輸出:

```bash
# Get total size of a remote
rclone size gdrive: --json

# List directories with their sizes
rclone lsf gdrive: --dirs-only -R --format "sp" | sort -t ';' -k1 -rn | head -20
```

**建立儲存空間使用報告:**

結合多個 rclone 指令來建立完整的報告:

```bash
# Generate a JSON report of all file sizes
rclone lsjson gdrive: -R --no-modtime --no-mimetype > storage-report.json

# Use rclone size for quick summaries
rclone size gdrive:/Projects
rclone size gdrive:/Backups
rclone size gdrive:/Media
```

**跨服務供應商比較使用量:**

如果您管理多個雲端帳戶,可對每個帳戶執行 ncdu 或 size 指令以進行比較:

```bash
echo "=== Google Drive ===" && rclone size gdrive:
echo "=== S3 ===" && rclone size s3:my-bucket
echo "=== Dropbox ===" && rclone size dropbox:
echo "=== OneDrive ===" && rclone size onedrive:
```

這能讓您清楚了解儲存空間的分布情況,以及優化工作在何處能發揮最大效益。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 進階 NCDU 技巧

除了基本掃描外,還有幾種進階技巧可讓您的儲存空間分析更有效率。

**篩選掃描範圍:**

使用 rclone 的篩選旗標來聚焦您的分析:

```bash
# Only scan files larger than 100 MB
rclone ncdu gdrive: --min-size 100M

# Exclude certain directories from the scan
rclone ncdu gdrive: --exclude "node_modules/**" --exclude ".git/**"

# Only scan specific file types
rclone ncdu s3:my-bucket --include "*.{mp4,avi,mkv,mov}"
```

**快取掃描結果:**

對於非常大的遠端,掃描可能需要很長時間。啟用 rclone 的目錄快取可加快重複掃描的速度:

```bash
rclone ncdu gdrive: --fast-list
```

`--fast-list` 旗標透過批次要求目錄清單來減少 API 呼叫次數。在支援此功能的服務供應商(S3、Google Drive、B2)上,這可將掃描時間縮短 50% 或更多。

**分析共用儲存空間:**

在 Google Drive 上,與您共用的檔案所使用的儲存空間不會計入您的配額,但您在共用雲端硬碟中擁有的檔案則會。使用 ncdu 掃描特定的共用雲端硬碟:

```bash
rclone ncdu gdrive: --drive-shared-with-me
rclone ncdu gdrive,shared_drive_id=DRIVE_ID:
```

**排程定期掃描:**

使用 cron 或 RcloneView 的工作排程器設定自動化儲存空間報告:

```bash
# Weekly storage report
0 8 * * MON rclone size gdrive: --json >> /var/log/storage-usage.json
```

## 根據發現結果採取行動

在找出儲存空間浪費的情況後,直接使用 RcloneView 採取行動。

**刪除不需要的檔案:**

在 ncdu 介面中,對任何檔案或目錄按下 `d` 即可將其刪除。或者,使用 RcloneView 的檔案總管瀏覽至找到的路徑,並透過圖形介面刪除檔案。

**將冷資料移至更便宜的儲存空間:**

如果您發現需要保留但很少存取的大型資料集,可將它們移至更便宜的儲存空間層級:

```bash
# Move old archives from Google Drive to Backblaze B2
rclone move gdrive:/Archives/2023 b2:cold-archive/2023 --progress
```

RcloneView 的雙窗格檔案總管讓拖放操作變得輕鬆簡單。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

**封存前先壓縮:**

對於日誌與 CSV 等文字為主的資料,在傳輸至冷儲存空間前先進行壓縮:

```bash
# Compress locally, then upload
tar czf archive.tar.gz /path/to/data
rclone copy archive.tar.gz b2:compressed-archives/
```

**設定生命週期政策:**

清理完成後,透過設定自動化清理來防止未來儲存空間再度膨脹。使用 RcloneView 的工作排程功能執行定期清理任務:

- 刪除超過特定期限的檔案:`rclone delete remote: --min-age 365d`
- 移除空目錄:`rclone rmdirs remote: --leave-root`
- 在 Google Drive 上去除重複檔案:`rclone dedupe gdrive: --dedupe-mode newest`

## 開始使用

Rclone NCDU 是 rclone 生態系統中最能立即發揮價值的工具之一。單次掃描就能揭露數 GB 您完全不知道存在的被遺忘資料、重複檔案與儲存空間浪費。透過 RcloneView,您可以執行這些掃描、檢視結果並採取行動,完全不需要離開應用程式。從掃描您最大的雲端儲存空間帳戶開始,依大小排序,並逐一處理前 10 大項目。您在第一次操作時很可能就能發現顯著的節省空間。

---

**相關指南:**
- [瀏覽並管理遠端儲存空間](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
