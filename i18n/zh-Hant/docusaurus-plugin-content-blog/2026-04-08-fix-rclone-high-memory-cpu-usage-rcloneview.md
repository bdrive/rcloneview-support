---
slug: fix-rclone-high-memory-cpu-usage-rcloneview
title: "使用 RcloneView 解決 Rclone 傳輸時記憶體與 CPU 使用率過高的問題"
authors:
  - tayson
description: "解決雲端傳輸期間 rclone 記憶體與 CPU 使用率過高的問題。學習使用 RcloneView 的視覺化介面調整傳輸數、檢查器、VFS 快取與緩衝區設定。"
keywords:
  - rcloneview
  - rclone high memory usage
  - rclone cpu usage
  - rclone performance tuning
  - rclone transfers checkers
  - rclone vfs cache
  - rclone buffer size
  - cloud sync performance
  - rclone slow transfer
  - fix rclone memory
tags:
  - RcloneView
  - troubleshooting
  - performance
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 解決 Rclone 傳輸時記憶體與 CPU 使用率過高的問題

> Rclone 傳輸吃光你的 RAM 或讓 CPU 使用率飆到 100%？**RcloneView** 讓你輕鬆找出原因，並調整效能設定，無需記住命令列參數。

如果你發現在雲端傳輸期間系統變得極為緩慢,你並不孤單。Rclone 功能強大,但其預設設定或設定錯誤的選項可能會消耗大量系統資源——尤其是在處理大量檔案、掛載磁碟或平行傳輸時。這些症狀很常見:風扇狂轉、應用程式無回應,以及傳輸似乎消耗了比預期更多的資源。

好消息是,大多數高資源消耗情況都有直接的解決方法。本指南將介紹 rclone 中造成記憶體與 CPU 使用率過高的最常見原因,並說明如何使用 RcloneView 的視覺化設定工具來解決這些問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常見症狀

在深入探討解決方案之前,先來看看 rclone 操作期間資源使用率過高的典型表現:

- **RAM 使用率過高**:rclone 行程消耗 1 GB 或更多記憶體,有時會持續增長直到系統耗盡記憶體。
- **CPU 飆升**:傳輸期間,尤其是列出大型目錄時,一個或多個 CPU 核心被固定在 100%。
- **系統無回應**:rclone 執行時,其他應用程式凍結或延遲。
- **傳輸失敗**:記憶體不足錯誤導致傳輸意外中止。
- **效能緩慢**:矛盾的是,過多的平行操作會因資源爭用而拖慢整體速度。

## 過多的並行傳輸與檢查器

資源使用率過高最常見的原因,是同時執行過多的平行傳輸與檢查器。Rclone 預設為 4 個傳輸與 8 個檢查器,但使用者常會提高這些數字,以為這樣能加快速度。同時執行 32 或 64 個並行傳輸,可能會使你的系統與網路連線都不堪負荷。

**在 RcloneView 中的修正方法:**

建立或編輯同步工作時,將 `--transfers` 旗標設定為合理數值。先從 4 開始,只有在頻寬與系統能夠負荷時才提高。將 `--checkers` 設定為 8 或更低。對於大多數家用連線,2-4 個傳輸與 4-8 個檢查器能在速度與資源消耗之間取得良好平衡。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## 大型檔案清單與目錄掃描

當 rclone 掃描包含數十萬或數百萬個檔案的目錄時,它會在記憶體中建立每個檔案及其中繼資料的清單。在非常大的目錄上,這可能消耗數 GB 的 RAM。

**修正方法:**

- 在支援的情況下使用 `--fast-list`。此旗標透過較少的 API 呼叫取得目錄清單,對某些供應商(如 S3)而言可實際降低記憶體使用量,但對其他供應商則可能提高。請針對你使用的特定供應商進行測試。
- 將大型同步工作拆分為較小的區塊,針對特定子目錄進行同步,而非一次同步整個雲端帳戶。
- 使用篩選規則(`--include`、`--exclude`)來限制每次同步操作的範圍。要列出的檔案越少,消耗的記憶體就越少。

## 掛載磁碟造成的 VFS 快取膨脹

如果你將雲端儲存掛載為本機磁碟,VFS(虛擬檔案系統)快取可能會顯著增長。預設情況下,rclone 可能會快取大量資料,以在掛載磁碟上提供流暢的讀寫效能。隨著時間推移,此快取可能會消耗大量磁碟空間與記憶體。

**修正方法:**

- 將 `--vfs-cache-max-size` 設定為合理限制,例如 `1G` 或 `5G`,視你的可用資源而定。
- 設定 `--vfs-cache-max-age` 以自動清理舊的快取檔案。像 `1h` 或 `4h` 這樣的數值對大多數工作流程都很合適。
- 選擇正確的 `--vfs-cache-mode`。如果你只需要讀取存取或偶爾寫入,請使用 `minimal` 或 `writes`,而非 `full`。完整快取模式會在檔案可存取之前快取整個檔案,這會使用最多的記憶體與磁碟空間。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## 緩衝區大小設定錯誤

`--buffer-size` 旗標控制 rclone 在傳輸期間為每個檔案緩衝分配多少記憶體。預設值為每次傳輸 16 MB。如果你同時執行 16 個並行傳輸,光是緩衝區記憶體就是 256 MB。若將 `--buffer-size` 提高到 256 MB 並搭配 16 個傳輸,單是緩衝區就會消耗 4 GB。

**修正方法:**

- 除非有特定理由需要提高,否則將 `--buffer-size` 保持在預設的 `16M`。
- 如果你為了大型檔案傳輸而提高了此值,請相應地減少 `--transfers`,以維持在可用 RAM 範圍內。
- 對於 RAM 有限的系統(4 GB 或更少),可考慮將 `--buffer-size` 降至 `8M` 甚至 `4M`。

## 掛載開銷與 FUSE 操作

掛載磁碟會增加 CPU 開銷,因為每個檔案操作(開啟、讀取、寫入、狀態查詢)都需經過 FUSE 層並觸發 API 呼叫。積極掃描目錄的應用程式——例如防毒軟體、縮圖產生器或搜尋索引器——可能會在掛載磁碟上造成持續的 CPU 與 API 使用量。

**修正方法:**

- 在防毒軟體掃描中排除掛載磁碟路徑。
- 在檔案總管設定中停用掛載磁碟的縮圖產生功能。
- 使用 `--dir-cache-time` 延長目錄清單的快取時間(例如 `5m` 或 `30m`),以減少重複的 API 呼叫。
- 設定 `--attr-timeout` 以延長檔案屬性的快取時間,這可減少狀態查詢呼叫。
- 如果你只需要讀取檔案,請使用 `--read-only` 以避免與寫入相關的開銷。

## 在 RcloneView 中監控資源使用情況

RcloneView 提供即時傳輸監控,協助你識別資源何時被過度消耗。在傳輸進行期間,你可以觀察傳輸速度、檔案數量與整體進度。如果速度下降或介面變得遲鈍,這就是應該降低並行度的訊號。

使用工作歷史記錄檢視功能,回顧過去的傳輸並找出模式。如果某些工作持續耗時較長或失敗,這些就是需要調整的候選項目。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 快速參考:建議設定

| 設定 | 低資源系統 | 標準系統 | 高效能系統 |
|---|---|---|---|
| `--transfers` | 2 | 4 | 8-16 |
| `--checkers` | 4 | 8 | 16 |
| `--buffer-size` | 4M | 16M | 32M |
| `--vfs-cache-max-size` | 512M | 2G | 10G |
| `--vfs-cache-mode` | minimal | writes | full |

請根據你的可用 RAM、CPU 核心數與網路頻寬調整這些數值。從保守設定開始,再逐步提高。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟現有的同步工作或建立新工作,並檢查傳輸與檢查器設定。
3. 如果系統在傳輸期間出現卡頓,請減少 `--transfers` 與 `--checkers`。
4. 對於掛載磁碟,請設定 VFS 快取限制,以防止記憶體無限增長。

對並行度與快取設定進行小幅調整,即可在不明顯影響傳輸速度的情況下,大幅改善系統回應能力。

---

**相關指南:**

- [瀏覽與管理遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [將雲端儲存掛載為本機磁碟](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
