---
slug: rclone-about-storage-usage-analysis-rcloneview
title: "使用 RcloneView 分析雲端儲存使用量與配額"
authors:
  - tayson
description: "使用 RcloneView 的儀表板與 rclone about 指令,監控雲端儲存使用量、檢查配額、找出佔用空間最大的資料夾,並在多個服務商之間規劃容量。"
keywords:
  - rclone about storage usage
  - cloud storage quota monitor
  - rcloneview storage analysis
  - check cloud storage space
  - cloud capacity planning
  - storage usage per remote
  - rclone disk usage
  - cloud quota monitoring tool
  - compare cloud storage usage
  - rcloneview dashboard storage
tags:
  - RcloneView
  - feature
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - dashboard
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 分析雲端儲存使用量與配額

> 在優化雲端成本之前,你需要確切知道儲存空間都用到哪裡去了。RcloneView 將每個已連接遠端的使用量資料與配額資訊集中呈現在同一個地方。

大多數雲端儲存成本都取決於用量。無論你是在 S3 上按 GB 付費、在 Google Drive 上維持免費額度內,還是與團隊共用 OneDrive 配額,了解每個遠端消耗多少空間對成本控管與容量規劃都至關重要。Rclone 的 `about` 指令會向服務商的 API 查詢總量、已用、可用與已清空垃圾桶的空間。RcloneView 將這些資訊以視覺化方式呈現,讓你不必在各家服務商的儀表板之間切換,就能監控所有遠端。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone About 回報的內容

`rclone about` 指令會直接從服務商的 API 傳回儲存空間指標。典型的回應內容包括:

| 指標 | 說明 |
|--------|-------------|
| **Total（總量）** | 帳戶分配到的總儲存配額 |
| **Used（已用）** | 檔案目前佔用的空間 |
| **Free（可用）** | 剩餘可用空間 |
| **Trashed（垃圾桶）** | 垃圾桶/資源回收筒中項目所佔用的空間 |
| **Other（其他）** | 其他服務所佔用的空間（例如 Google 帳戶的 Gmail） |

並非每個服務商都會回報所有欄位。舉例來說,S3 相容服務通常只回報已用空間,因為儲存貯體（bucket）沒有固定配額。Google Drive 則會回報全部五個欄位,是資訊最完整的服務之一。

## 在 RcloneView 中查看儲存使用量

RcloneView 提供已連接遠端的視覺化總覽:

1. 開啟 **RcloneView**,前往**儀表板（Dashboard）**或**遠端瀏覽器（Remote Explorer）**。
2. 選擇你想檢查的遠端。
3. 檢視顯示已用、可用與總空間的儲存摘要。

若要快速檢查所有遠端,儀表板可讓你一目了然地查看每個已連接服務商的消耗狀況。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote list showing connected cloud providers" class="img-large img-center" />

## 從終端機執行 Rclone About

如需原始數字或進行指令碼處理,可在 RcloneView 中開啟**終端機（Terminal）**並執行:

```bash
rclone about gdrive:
```

範例輸出:

```
Total:   15 GiB
Used:    9.2 GiB
Free:    5.8 GiB
Trashed: 1.4 GiB
Other:   3.1 GiB
```

若要快速檢查多個遠端:

```bash
rclone about gdrive:
rclone about onedrive:
rclone about s3-backup:
```

使用 `--json` 可取得便於指令碼解析的機器可讀輸出:

```bash
rclone about gdrive: --json
```

## 找出佔用空間最大的資料夾

了解總使用量只是第一步。要找出哪些資料夾佔用最多空間,需要使用 `rclone size` 指令:

```bash
rclone size gdrive:/Photos
```

此指令會傳回指定路徑中所有檔案的總數與總大小。若要找出最大的資料夾,可對頂層目錄逐一執行並比較結果。

在 RcloneView 的**瀏覽器（Explorer）**中,你可以瀏覽任何遠端,並在導覽過程中即時看到資料夾大小,無需執行指令即可輕鬆找出佔用大量空間的來源。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer browsing cloud folders with size information" class="img-large img-center" />

## 跨服務商的配額監控

不同服務商處理配額的方式各不相同:

| 服務商 | 配額模式 | 備註 |
|----------|------------|-------|
| **Google Drive** | 在雲端硬碟、Gmail、相簿間共用 | 免費 15 GB;Workspace 方案容量各異 |
| **OneDrive** | 按使用者分配 | 免費 5 GB;Microsoft 365 方案提供 1 TB 以上 |
| **Dropbox** | 按帳戶配額 | 免費 2 GB;Plus 方案提供 2 TB |
| **Backblaze B2** | 按用量付費,無固定配額 | 依每月儲存的 GB 數計費 |
| **Amazon S3** | 按用量付費,無固定配額 | 依儲存類別採分級計價 |
| **pCloud** | 終身或訂閱制配額 | 免費 10 GB;提供終身方案 |

對於 S3、B2 等按用量付費的服務商而言,沒有配額上限的問題,但直接監控使用量能有效控管帳單金額。對於配額制服務商而言,空間用盡會在無聲無息中導致同步與備份失敗。

## 規劃容量與估算成本

利用儲存使用量資料做好事前規劃:

1. **追蹤長期成長趨勢** -- 定期執行 `rclone about` 並記錄結果。用一份簡單的試算表追蹤每個遠端的每月使用量,即可看出趨勢。
2. **估算按用量付費服務商的每月成本**:
   - Backblaze B2:每月每 GB $0.006 儲存費
   - Amazon S3 Standard:每 GB $0.023
   - Wasabi:每 GB $0.0069（最低 1 TB）
3. **設定警示** -- 若配額制遠端使用量超過 80%,提前規劃清理或升級方案。
4. **比較服務商** -- 若某個遠端每 GB 費用較低,可考慮將冷資料遷移過去。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare storage consumption across cloud providers" class="img-large img-center" />

## 從垃圾桶回收空間

最容易被忽略的空間消耗來源之一就是垃圾桶。Google Drive 與 OneDrive 都會將垃圾桶中的檔案計入配額。`rclone about` 的輸出會明確顯示垃圾桶佔用的空間,你可以透過以下指令回收:

```bash
rclone cleanup gdrive:
```

在 RcloneView 中,無需輸入指令,透過介面即可完成此操作。回收垃圾桶空間通常是釋放數 GB 空間最快的方法,而且不會刪除任何有效檔案。

## 比較各服務商的使用量

在管理多個雲端帳戶時,跨服務商比較有助於做出以下決策:

- **新備份要存到哪裡** -- 將資料導向剩餘空間最多的遠端。
- **該擴充哪個服務商** -- 若 S3 的成本增長速度快於 B2,則應深入了解原因。
- **何時該封存資料** -- 將不常存取的資料從昂貴的儲存空間移至較便宜的層級。

RcloneView 的多遠端儀表板讓這種比較變得一目了然。你不必登入三個不同服務商的儀表板,就能在同一個介面中看到所有使用量資料。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView dashboard showing multiple remote storage status" class="img-large img-center" />

## 最佳實務

- **開始大型傳輸前先檢查配額** -- 目的地空間不足會導致無聲的傳輸失敗。
- **監控垃圾桶使用量**並定期清理,以避免幽靈式的配額消耗。
- **每月記錄使用量**,以利成本追蹤與趨勢分析。
- **對特定資料夾使用 `rclone size`**,找出佔用空間最大的來源。
- **自動化檢查** -- 將 `rclone about` 指令儲存為 RcloneView 中的排程工作。

---

**相關指南:**

- [清理雲端儲存空間：清空垃圾桶並移除舊版本檔案](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Wasabi 對比 Backblaze B2 對比 IDrive e2](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Google Drive 對比 OneDrive for Business](https://rcloneview.com/support/blog/google-drive-vs-onedrive-for-business-rcloneview)

<CloudSupportGrid />
