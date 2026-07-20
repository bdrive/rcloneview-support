---
slug: set-bandwidth-limits-cloud-transfers-rcloneview
title: "如何在 RcloneView 中設定雲端傳輸的頻寬限制"
authors:
  - tayson
description: "控制雲端同步與備份工作所使用的頻寬——利用 RcloneView 的節流設定，在上班時段避免網路變慢,並在夜間發揮最快速度。"
keywords:
  - rclone 頻寬限制
  - 雲端傳輸速度限制
  - 節流雲端同步
  - rcloneview 頻寬控制
  - 限制上傳速度 rclone
  - 雲端備份頻寬
  - rclone bwlimit
  - 網路節流雲端同步
  - 控制雲端傳輸速度
  - rcloneview 傳輸設定
tags:
  - RcloneView
  - cloud-storage
  - performance
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何在 RcloneView 中設定雲端傳輸的頻寬限制

> 在上班時段執行大規模雲端同步？你的團隊一定會發現。以下說明如何節流頻寬,讓備份順利執行而不拖垮大家的網路。

雲端同步與備份工作可能會佔滿你的網路連線——拖慢視訊通話、網頁瀏覽以及其他重要工作。這在辦公室環境、共用連線的居家辦公室,或是同步數 TB 資料時特別容易發生問題。RcloneView 讓你可以設定精確的頻寬限制,讓雲端傳輸在背景執行而不干擾你的網路。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼頻寬限制很重要

### 共用網路

在擁有 100 Mbps 連線的辦公室中,單一未受限制的雲端同步工作就可能佔用超過 80 Mbps——幾乎不留任何頻寬給團隊其他成員。

### 居家辦公室

視訊通話大約需要 5–10 Mbps。如果你的備份工作佔用了所有可用頻寬,你的 Zoom 通話畫質就會慘不忍睹。

### ISP 公平使用政策

部分 ISP 會對持續的高頻寬使用進行節流或額外收費。限制雲端傳輸可避免意外帳單或速度變慢。

### 雲端服務商速率限制

部分服務商(尤其是 Google Drive)在傳輸速度過快時會進行節流或回傳錯誤。頻寬限制能讓你保持在安全範圍內。

## 如何設定頻寬限制

### 方法一:單一工作的頻寬限制

在 RcloneView 中建立或編輯工作時,於 rclone 選項中加入頻寬限制旗標:

- **`--bwlimit 10M`** — 限制為每秒 10 MB
- **`--bwlimit 50M`** — 限制為每秒 50 MB
- **`--bwlimit 1M`** — 限制為每秒 1 MB(適合背景涓流式同步)

### 方法二:依時段排程頻寬

rclone 支援依時段設定頻寬限制——在一天中不同時段使用不同速度:

```
--bwlimit "08:00,5M 18:00,50M 23:00,off"
```

這代表:
- **上午 8 點 – 下午 6 點**:限制為每秒 5 MB(上班時段,影響最小)
- **下午 6 點 – 晚上 11 點**:限制為每秒 50 MB(傍晚,可用頻寬較多)
- **晚上 11 點 – 上午 8 點**:無限制(夜間全速)

這對多數使用者來說是最佳平衡點——傳輸全天候執行,但只有在網路閒置時才會全速運作。

### 方法三:上傳與下載分別限制

為上傳與下載設定不同的限制:

```
--bwlimit "10M:5M"
```

此設定會將上傳限制為每秒 10 MB、下載限制為每秒 5 MB。當你的 ISP 提供非對稱速度(有線電視及 DSL 連線常見)時相當實用。

## 實際範例

### 100 Mbps 連線的居家辦公室

```
--bwlimit "09:00,2M 17:00,off"
```
- 上班時段:每秒 2 MB(搭配視訊通話幾乎不會察覺)
- 下班後:無限制

### 50 Mbps 共用連線的小型辦公室

```
--bwlimit "08:00,3M 18:00,25M 22:00,off"
```
- 上班時段:每秒 3 MB(留下 47 Mbps 給員工使用)
- 傍晚:每秒 25 MB(一半容量)
- 夜間:全速

### 週末進行大型搬移

```
--bwlimit off
```
- 無限制——在維護時段內將傳輸速度最大化。

## 結合工作排程

最有效的做法是:排程**夜間執行且不限頻寬的重型工作**以及**日間執行且嚴格限制頻寬的輕量工作**。

1. 建立兩個版本的同步工作:
   - **日間工作**:`--bwlimit 5M` — 於中午執行快速增量同步
   - **夜間工作**:不限頻寬 — 於凌晨 2 點執行大量傳輸
2. 使用[工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)排程這兩個工作。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers with different bandwidth limits" class="img-large img-center" />

## 監控實際速度

使用即時傳輸監控來確認你的頻寬限制是否生效:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed with bandwidth limits" class="img-large img-center" />

傳輸速度顯示應該會呈現等於或低於你設定限制的數值。如果你看到的速度低於設定的限制,瓶頸可能出在其他地方(網路、服務商 API、磁碟速度)。

## 快速參考

| 情境 | 設定 | 效果 |
|----------|---------|--------|
| 輕量背景同步 | `--bwlimit 2M` | 幾乎不會察覺 |
| 中等傳輸量 | `--bwlimit 10M` | 可察覺但可接受 |
| 僅限上班時段 | `--bwlimit "09:00,5M 17:00,off"` | 上班時段受限 |
| 上傳為主 | `--bwlimit "20M:5M"` | 上傳 20M、下載 5M |
| 無限制 | `--bwlimit off` 或省略 | 最高速度 |

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增你的遠端**並建立同步/複製工作。
3. 在工作的 rclone 旗標中**加入 `--bwlimit`**。
4. **測試並監控**以找到合適的平衡點。
5. **結合排程功能**以兼顧兩者優點。

快速傳輸固然好,但不會導致團隊視訊通話當機的傳輸才是更好的選擇。

---

**相關指南:**

- [加速大型雲端傳輸](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [修正 Google Drive 速率限制錯誤](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)

<CloudSupportGrid />
