---
slug: min-age-max-age-time-based-filters-rcloneview
title: "在 RcloneView 中使用 Min-Age 與 Max-Age 時間篩選器"
authors:
  - tayson
description: "在 RcloneView 中使用 min-age 和 max-age 時間篩選器,僅同步、複製或備份在特定時間範圍內修改過的檔案。傳輸最近的變更或跳過舊檔案。"
keywords:
  - rcloneview
  - min-age filter
  - max-age filter
  - time-based sync
  - rclone min-age
  - rclone max-age
  - sync recent files only
  - filter by date
  - incremental sync time
  - cloud sync filter date
tags:
  - feature
  - filters
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 中使用 Min-Age 與 Max-Age 時間篩選器

> 並非每個同步工作都需要傳輸所有檔案。RcloneView 的時間篩選器讓您只針對特定時間範圍內修改過的檔案進行操作——同步今天的變更、跳過超過 30 天的舊檔案,或只備份最近上傳的內容。

Rclone 的 `--min-age` 與 `--max-age` 旗標是強大的工具,可根據檔案的修改時間來控制哪些檔案參與同步、複製或移動操作。RcloneView 透過其自訂旗標介面公開這些選項,讓您無需操作命令列即可精確控制以時間為基礎的檔案篩選。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解 Min-Age 與 Max-Age

這兩個旗標作為以檔案修改日期為基礎的時間篩選器運作:

- **`--max-age`**:僅包含在指定時間範圍內修改過的檔案。2 小時前修改的檔案通過 `--max-age 24h`。3 天前修改的檔案未通過 `--max-age 24h`,將被跳過。
- **`--min-age`**:僅包含在指定時間範圍*之前*修改的檔案。30 天前修改的檔案通過 `--min-age 7d`。昨天修改的檔案未通過 `--min-age 7d`,將被跳過。

可以這樣理解:
- `--max-age 24h` = 「24 小時內的新檔案」(最近修改過)
- `--min-age 7d` = 「超過 7 天的舊檔案」(非最近修改)

## 時間格式

這兩個旗標都接受靈活的時間格式:

| 格式 | 範例 | 意義 |
|---|---|---|
| 持續時間 | `30s`、`5m`、`2h`、`7d`、`4w` | 秒、分鐘、小時、天、週 |
| 組合格式 | `1d2h30m` | 1 天 2 小時 30 分鐘 |
| 絕對日期 | `2026-04-01` | 2026 年 4 月 1 日之前/之後的檔案 |
| 日期與時間 | `2026-04-01T15:00:00` | 4 月 1 日下午 3 點之前/之後的檔案 |

持續時間值是相對於工作執行時的目前時間。

## 使用案例 1:僅同步今天的變更

當您有大量雲端儲存空間(數 TB 資料),但只想同步今天變更的檔案時:

```
--max-age 24h
```

將此加入 RcloneView 工作設定中的自訂旗標欄位。同步工作將只考慮過去 24 小時內修改過的檔案,大幅減少列出和比對檔案所花費的時間。這對於已知每天只有一小部分檔案變更的每日增量備份非常有用。

## 使用案例 2:歸檔舊檔案

將超過 90 天的檔案從使用中儲存空間移至冷儲存:

```
--min-age 90d
```

搭配 **move**(移動)操作(而非 sync)使用,將超過 90 天的檔案從 Google Drive 傳輸至 S3 Glacier。傳輸成功後,檔案會從 Google Drive 中移除,釋放使用中儲存空間的空間,同時保留於歸檔中。

## 使用案例 3:時間視窗同步

結合兩個旗標以鎖定特定時間範圍。例如,同步 7 到 30 天前修改的檔案:

```
--min-age 7d --max-age 30d
```

這對於分階段的歸檔工作流程非常有用——不到 7 天的檔案留在使用中儲存空間,7 到 30 天之間的檔案移至溫儲存,超過 30 天的檔案移至冷儲存。

## 使用案例 4:跳過最近修改的檔案

在遷移過程中,您可能想跳過正在積極編輯的檔案,以避免傳輸未完成的工作:

```
--min-age 1h
```

這可確保只有至少穩定一小時的檔案才會被傳輸。目前正在編輯或儲存的檔案將留待下次同步執行時處理。

## 使用案例 5:每晚備份近期工作

對於僅擷取當天工作內容的每晚備份工作:

```
--max-age 25h
```

使用 25 小時(而非 24 小時)可與前一天的備份有 1 小時的重疊,確保不會因備份排程與檔案修改時間之間的時間差而遺漏任何檔案。

## 在 RcloneView 中套用時間篩選器

在 RcloneView 的工作設定中:

1. 開啟同步或複製工作設定。
2. 前往進階選項或自訂旗標區段。
3. 在旗標欄位中加入 `--max-age 24h` 或 `--min-age 7d`(或兩者皆加)。
4. 儲存工作並執行。

這些旗標會套用於工作期間的每次檔案比對。不符合時間條件的檔案會完全被跳過——不會被列出、比對或傳輸。這可大幅縮短大型遠端儲存空間的工作時間。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a time-filtered sync job in RcloneView" class="img-large img-center" />

## 與其他篩選器結合使用

時間篩選器可與其他 rclone 篩選選項一起運作:

- **搭配 include/exclude**:`--max-age 24h --include "*.pdf"` 只同步過去 24 小時內修改過的 PDF 檔案。
- **搭配大小篩選器**:`--max-age 7d --min-size 1M` 只同步過去一週內修改過且大於 1 MB 的檔案。
- **搭配目錄篩選器**:`--max-age 24h --include "/projects/**"` 將範圍限制在特定目錄。

這種可組合性讓您無需複雜的腳本即可建立精確的傳輸規則。

## 先進行乾跑測試

在正式資料上執行時間篩選工作之前,請使用 RcloneView 的乾跑(dry run)模式預覽哪些檔案會受到影響。乾跑會列出符合您篩選條件的檔案,但不會實際傳輸。這可在正式執行操作前,確認您的 `--min-age` 與 `--max-age` 值選取了正確的檔案。

## 常見陷阱

- **時區**:修改時間是以 UTC 進行比較。如果您的本地時區與 UTC 有顯著偏移,請相應調整您的持續時間值,或改用絕對日期格式。
- **供應商精確度**:某些雲端儲存供應商(尤其是 Google Drive)回報的修改時間精確度有限。在 Google Drive 上「今天」修改的檔案,其時間戳記可能與實際修改時間相差數秒。
- **搭配 min-age 使用 Sync 與 Copy 的差異**:將 `--min-age` 與 sync 搭配使用可能有風險——sync 會刪除目的地上存在但來源中不存在的檔案。如果 `--min-age` 從來源清單中篩掉了最近的檔案,sync 可能會在目的地刪除這些檔案。使用 `--min-age` 時,請使用 copy(而非 sync)以避免非預期的刪除。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在工作管理員中建立同步或複製工作。
3. 在自訂旗標區段中加入 `--max-age` 或 `--min-age` 旗標。
4. 使用乾跑測試以驗證檔案選取結果。
5. 排程工作以進行自動化的時間篩選備份。

時間篩選器讓 RcloneView 成為執行增量備份、分階段歸檔與目標式同步操作的精密工具。使用它們來縮短傳輸時間、減少頻寬使用量,並實作精細的資料生命週期工作流程。

---

**相關指南:**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理工作](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
