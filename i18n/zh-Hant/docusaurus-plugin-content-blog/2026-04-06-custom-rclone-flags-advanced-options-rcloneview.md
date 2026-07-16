---
slug: custom-rclone-flags-advanced-options-rcloneview
title: "在 RcloneView 工作中使用自訂 Rclone 旗標與進階選項"
authors:
  - tayson
description: "了解如何在 RcloneView 中新增自訂 rclone 旗標以進行效能調校、除錯與進階工作設定，涵蓋 transfers、checkers、fast-list 等內容。"
keywords:
  - rclone custom flags
  - rcloneview advanced options
  - rclone transfers flag
  - rclone fast-list performance
  - rclone checkers setting
  - rclone no-traverse flag
  - rclone size-only flag
  - rcloneview job configuration
  - rclone performance tuning
  - rclone debugging flags
tags:
  - feature
  - rclone
  - tips
  - cli
  - performance
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 工作中使用自訂 Rclone 旗標與進階選項

> RcloneView 會自動處理常見情境，但 rclone 真正的威力在於它的旗標。知道該加入哪些旗標，以及該加在哪裡，能將傳輸時間縮短一半，甚至解決棘手的邊緣案例。

Rclone 擁有數百個命令列旗標，可控制從傳輸並行度、校驗碼行為到重試邏輯的一切。RcloneView 為最常見的操作提供了簡潔的介面，但也允許你在任何工作中注入自訂旗標，以應對預設值不足以應付的情況。本指南將介紹最實用的旗標、使用時機，以及如何在 RcloneView 中設定它們。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中新增自訂旗標的位置

RcloneView 支援在兩個地方新增自訂旗標：

1. **工作設定** -- 在建立或編輯工作（複製、同步、移動）時，會有一個欄位可供輸入額外旗標。輸入方式與在命令列上輸入完全相同。
2. **終端機** -- 對於一次性的指令，可開啟終端機面板，輸入完整的 rclone 指令以及所需的任何旗標。

新增到已儲存工作的旗標會在每次執行時保留，因此你只需設定一次，之後每次執行該工作（包括排程執行）都會套用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView job configuration with custom flags" class="img-large img-center" />

## 效能調校旗標

這些旗標會直接影響傳輸速度與資源使用量。

### --transfers N

控制同時並行傳輸的檔案數量。預設值為 4。

```bash
--transfers 16
```

當檔案數量眾多且體積較小，或該供應商支援高並行度時，可提高此值。S3、B2 與 Wasabi 對 16-32 個並行傳輸的處理效果良好。Google Drive 在超過 8-10 個並行傳輸時可能會限速。

### --checkers N

控制同時並行比對（檢查）的檔案數量。預設值為 8。

```bash
--checkers 32
```

當對包含大量檔案的目錄執行同步或檢查操作時，可提高此值。檢查階段往往才是瓶頸所在，而非傳輸本身。

### --fast-list

透過單次請求取得所有物件，以較少的 API 呼叫次數列出目錄內容。對於擁有大型儲存桶的 S3 相容供應商而言，速度會大幅提升。

```bash
--fast-list
```

取捨之處：由於整個列表都會保存在記憶體中，因此會消耗更多記憶體。在擁有數百萬個物件的儲存桶上，這可能會消耗數 GB 的 RAM。

### --no-traverse

完全跳過列出目的地內容的步驟。適用於將少量檔案複製到已有數百萬個既有檔案的目的地時。

```bash
--no-traverse
```

若不使用此旗標，rclone 會列出整個目的地以檢查既有檔案。如果你知道目的地大部分內容與此次操作無關（例如，將 10 個新檔案複製到擁有 500 萬個物件的儲存桶中），`--no-traverse` 可節省數分鐘的列表時間。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane view for configuring transfer jobs" class="img-large img-center" />

### --buffer-size

控制每個檔案傳輸所使用的記憶體內緩衝區大小。預設值為 16 MiB。

```bash
--buffer-size 64M
```

在高頻寬連線上傳輸大型檔案時提高此值，可減少 I/O 停滯。若記憶體有限，則可降低此值。

### --multi-thread-streams N

單一檔案進行多執行緒下載時所使用的串流數量。預設值為 4。

```bash
--multi-thread-streams 8
```

在從支援位元組範圍請求的供應商下載大型單一檔案時很有幫助。

## 比對與行為旗標

這些旗標會改變 rclone 判斷要傳輸哪些內容的方式。

### --size-only

僅以檔案大小進行比對，忽略修改時間與校驗碼。

```bash
--size-only
```

當時間戳記不可靠時（某些 SFTP 伺服器常見此情況），或你希望以最快速度進行比對，並可接受漏掉相同大小但內容已變更的檔案時，可使用此旗標。

### --ignore-existing

跳過目的地已存在的檔案，無論其大小或日期為何。

```bash
--ignore-existing
```

非常適合用於增量上傳，即你從不修改既有檔案、只新增新檔案的情境。這比逐一比對每個檔案快得多。

### --ignore-size

僅以修改時間進行比對，忽略檔案大小。

```bash
--ignore-size
```

較少用到，但在某些供應商回報特定檔案類型的大小不正確時很有用。

### --update

跳過目的地上較新的檔案。

```bash
--update
```

適用於雙向式工作流程，即你只想複製目的地上較舊的檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders with custom comparison flags" class="img-large img-center" />

## 重試與可靠性旗標

### --retries N

失敗操作的重試次數。預設值為 3。

```bash
--retries 10
```

在網路不穩定或供應商偶爾出錯時，可提高此值。

### --retries-sleep DURATION

重試之間的等待時間。預設值為 0。

```bash
--retries-sleep 5s
```

在重試之間加入延遲，適用於受到供應商速率限制的情況。

### --low-level-retries N

低階操作（HTTP 請求）的重試次數。預設值為 10。

```bash
--low-level-retries 20
```

### --timeout DURATION

IO 閒置逾時時間。預設值為 5m0s。

```bash
--timeout 10m
```

在連線非常緩慢或供應商延遲較高時，可提高此值。

## 除錯與日誌旗標

當工作失敗或行為異常時，這些旗標有助於診斷問題。

### -v / -vv

詳細與極詳細輸出。

```bash
-v
```

顯示每個檔案傳輸的過程與基本進度資訊。使用 `-vv` 可取得包含 HTTP 請求在內的詳細除錯輸出。

### --log-file PATH

將日誌寫入檔案而非主控台。

```bash
--log-file /tmp/rclone-debug.log
```

### --log-level DEBUG

明確設定日誌等級。

```bash
--log-level DEBUG
```

產生最詳細的輸出。適合用於回報問題或調查異常行為時。

### --dry-run

模擬操作而不實際進行任何變更。

```bash
--dry-run
```

測試新的旗標組合時，務必先執行此選項，以確認其行為符合預期。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer with verbose logging in RcloneView" class="img-large img-center" />

## 各工作的旗標設定

RcloneView 允許你為不同的工作儲存不同的旗標組合。以下是一些實用的組合：

**大型檔案同步至 S3：**
```
--transfers 8 --checkers 16 --fast-list --buffer-size 64M
```

**小型檔案的增量備份：**
```
--transfers 32 --checkers 64 --ignore-existing --fast-list
```

**先進行 dry-run 的謹慎同步：**
```
--dry-run -v
```
然後移除 `--dry-run` 進行實際執行。

**除錯失敗的傳輸：**
```
-vv --log-file /tmp/debug.log --retries 1
```

## 除非你清楚自己在做什麼，否則應避免使用的旗標

| 旗標 | 風險 |
|------|------|
| `--delete-before` | 在傳輸前先刪除目的地檔案 -- 若傳輸中途失敗會非常危險 |
| `--max-delete N`（未經測試） | 若設定過低，可能會阻止清理動作 |
| `--no-check-certificate` | 停用 TLS 驗證 -- 安全風險 |
| `--ignore-checksum` | 跳過完整性驗證 -- 使校驗碼失去其原本的意義 |

## 最佳實務

- **從預設值開始** -- rclone 的預設值對大多數工作負載而言已相當合理。只有在遇到特定問題或可量測的瓶頸時，才需要新增旗標。
- **套用新旗標至正式工作前先以 --dry-run 測試**。
- **記錄你的旗標** -- 儲存帶有自訂旗標的工作時，請註明每個旗標的用途，以便未來的你（或團隊成員）能了解其意圖。
- **前後進行效能比較** -- 在使用與不使用效能旗標的情況下分別測量傳輸時間，以確認它們對你的工作負載確實有幫助。
- **正式工作建議使用 -v** -- 些微的額外負擔，換來每次執行過程的可見性，是值得的。

---

**相關指南：**

- [使用檢查與比對驗證雲端檔案完整性](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [復原中斷與失敗的傳輸](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [雲端對雲端傳輸與同步](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
