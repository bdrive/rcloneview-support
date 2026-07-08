---
slug: fix-cloud-sync-timestamp-mismatch-rcloneview
title: "修正 RcloneView 中雲端同步時間戳記不符的錯誤"
authors:
  - tayson
description: "解決 RcloneView 在雲端同步時發生的時間戳記不符錯誤。內容涵蓋時鐘偏差、時區差異、供應商中繼資料限制、校驗碼比對，以及 --use-server-modtime 與 --no-update-modtime 等旗標。"
keywords:
  - rclone timestamp mismatch
  - cloud sync time error
  - rclone modification time wrong
  - rclone use server modtime
  - rclone no update modtime
  - cloud sync checksum comparison
  - rclone timezone issue
  - rclone clock skew fix
  - cloud provider timestamp support
  - rcloneview sync mismatch fix
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - guide
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修正 RcloneView 中雲端同步時間戳記不符的錯誤

> 時間戳記不符會導致 rclone 重新傳輸未變更的檔案，浪費頻寬與時間。本指南說明其發生原因，以及如何設定 RcloneView 以正確處理這個問題。

當 rclone 在兩個位置之間同步檔案時，會比較修改時間戳記以判斷哪些檔案需要更新。如果來源與目的地對同一個檔案回報的時間戳記不同——即使只差一秒——rclone 也會將該檔案視為已變更並重新傳輸。這會導致不必要的傳輸、增加頻寬成本，並使同步作業始終無法乾淨地完成。這個問題在不同雲端供應商之間同步，或是在本地儲存與處理時間戳記方式不同的雲端遠端之間同步時尤其常見。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 時間戳記不符的原因

時間戳記看似簡單——檔案在某個時間點被修改——但實際上各雲端供應商的處理方式遠比想像複雜。有多種因素可能導致同一個檔案在來源與目的地回報不同的修改時間。

### 供應商之間的時鐘偏差

每個雲端供應商都維護自己的內部時鐘。雖然大多數都透過 NTP 同步到毫秒等級的精確度，但它們儲存檔案時間戳記的時機可能發生在上傳流程中的不同階段。有些供應商會記錄上傳開始的時間，有些則記錄上傳完成的時間。對於大型檔案而言，這個差異可能達到數秒甚至更多。

### 時區與精確度的差異

有些供應商以 UTC 儲存時間戳記，有些則使用使用者的本地時區，還有些會截斷精確度。例如：

- **Google Drive** 以毫秒精確度儲存修改時間，並允許設定自訂的修改時間。
- **OneDrive** 支援以秒為單位的修改時間。
- **Amazon S3** 在物件中繼資料中並不原生支援修改時間——而是以上傳時間記錄為最後修改標頭。
- **Dropbox** 會保留用戶端設定的修改時間，但精確度僅到秒。
- **SFTP** 依賴遠端檔案系統，其精確度可能為秒或微秒。

當你從毫秒精確度的供應商同步到秒精確度的供應商時，四捨五入會造成固定的 1 秒（或不到 1 秒）差異。

### 不支援修改時間

有些雲端儲存後端根本不支援保留修改時間：

- **相容於 S3 的儲存**（AWS S3、Wasabi、Backblaze B2 的 S3 模式、Cloudflare R2）儲存的是上傳時間，而非原始檔案的修改時間。rclone 會透過將原始修改時間儲存在物件中繼資料（X-Amz-Meta-Mtime）中來繞過這個限制，但這僅在該中繼資料是由 rclone 於初次上傳時設定的情況下才有效。
- 透過供應商的網頁介面或其他工具上傳的檔案不會擁有這項中繼資料，導致後續同步時發生不符。

### 傳輸過程中未保留中繼資料

如果檔案最初是由 rclone 以外的工具上傳到目的地，或是中繼資料標頭被代理伺服器或 CDN 移除，rclone 便無法找到預期的修改時間中繼資料。此時它會回退使用供應商的最後修改時間，而這個時間會與來源不同。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

## 診斷問題

在套用修正方案之前，先確認時間戳記確實是問題所在。在 RcloneView 或終端機中執行一次模擬（dry-run）同步：

```bash
rclone sync source: dest: --dry-run -v
```

檢視輸出結果。如果你看到類似以下的訊息：

```
NOTICE: file.txt: Skipped copy (src older)
```

或是檔案內容明明相同卻被標記為需要傳輸，那麼時間戳記很可能就是原因。你也可以比較特定檔案：

```bash
rclone lsl source:path/to/file.txt
rclone lsl dest:path/to/file.txt
```

`lsl` 指令會顯示檔案大小、修改時間與路徑。比較這些時間戳記——如果檔案大小相符但時間相差數秒或顯示不同時區，就代表存在時間戳記不符的情況。

在 RcloneView 中，可使用 **比較資料夾**（Compare Folders）功能來視覺化檢視差異。比較檢視會標示出大小、時間戳記或校驗碼不同的檔案，方便你快速找出僅時間戳記不符的情況。

## 使用 --use-server-modtime

`--use-server-modtime` 旗標會讓 rclone 使用伺服器回報的修改時間，而不是使用儲存在中繼資料中的任何時間。這在以下情況特別有用：

- 你希望無論檔案最初是如何上傳的，都能有一致的行為。
- 中繼資料中的修改時間不可靠或缺失。
- 你正在同步兩個位置，而這兩處的檔案是由不同工具上傳的。

```bash
rclone sync source: dest: --use-server-modtime
```

在 RcloneView 中，你可以在工作設定的進階選項或自訂旗標中加入這個旗標。

**適用時機：** 當你要從相容於 S3 的後端同步，而該處的檔案是由 rclone 以外的工具上傳的，或是中繼資料標頭不一致時。

**取捨考量：** 伺服器修改時間反映的是上傳時間，而非原始檔案的修改時間。這代表 rclone 無法偵測到檔案在重新上傳前是否曾被修改——它只能看到上傳的時間戳記。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 使用 --no-update-modtime

`--no-update-modtime` 旗標會阻止 rclone 在複製檔案後於目的地設定修改時間。預設情況下，rclone 會複製檔案，然後將目的地的修改時間設定為與來源一致。如果目的地不支援設定修改時間（或會進行四捨五入），就會在下次同步時造成持續性的不符情況。

```bash
rclone sync source: dest: --no-update-modtime
```

**適用時機：** 當目的地供應商不支援設定修改時間，或是設定時間的動作本身會產生四捨五入誤差，進而觸發不必要的重新傳輸時。

**取捨考量：** 在沒有相符的修改時間的情況下，rclone 必須使用其他方法（例如校驗碼）來偵測後續同步中的變更。

## 切換為以校驗碼為基礎的比對

如果你的來源與目的地之間的時間戳記本質上不可靠，你可以讓 rclone 改以校驗碼而非修改時間來比較檔案。這是判斷檔案是否真正變更最可靠的方式。

```bash
rclone sync source: dest: --checksum
```

`--checksum` 旗標會讓 rclone 針對兩端的檔案計算或取得雜湊值（MD5、SHA-1 或其他支援的演算法），僅在雜湊值不同時才傳輸檔案。

**優點：**

- 完全忽略時間戳記——不再因時鐘偏差或精確度差異而產生誤判。
- 偵測真正的內容變更，而不僅是中繼資料的差異。
- 在所有供應商之間都能可靠運作。

**缺點：**

- 對於大量檔案集而言速度較慢，因為 rclone 必須為每個檔案計算或擷取校驗碼。
- 部分供應商不會針對所有檔案回傳校驗碼（例如以分段方式上傳的 S3 物件會有複合式 ETag，並非標準的 MD5 雜湊）。
- 會增加 API 呼叫次數，可能計入速率限制或產生額外費用。

在 RcloneView 中，可於同步工作設定中啟用校驗碼比對。對於大型資料集，建議依排程執行校驗碼同步（例如每週一次），並使用以時間戳記為基礎的同步進行每日的增量備份。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## 不同供應商如何處理時間戳記

了解每個供應商的時間戳記行為，有助於你選擇合適的同步策略。

| 供應商 | 修改時間支援 | 精確度 | 備註 |
|---|---|---|---|
| Google Drive | 完整支援 | 毫秒 | 允許透過 API 設定自訂修改時間 |
| OneDrive | 完整支援 | 秒 | 支援設定修改時間 |
| Dropbox | 完整支援 | 秒 | 保留用戶端設定的修改時間 |
| Amazon S3 | 僅限中繼資料 | 秒 | rclone 將修改時間儲存於 X-Amz-Meta-Mtime |
| Backblaze B2 | 僅限中繼資料 | 毫秒 | 儲存於檔案資訊標頭中 |
| Wasabi | 僅限中繼資料 | 秒 | 相容於 S3，使用 X-Amz-Meta-Mtime |
| Cloudflare R2 | 僅限中繼資料 | 秒 | 相容於 S3，以中繼資料為基礎 |
| SFTP | 依檔案系統而定 | 不一定 | 取決於遠端檔案系統 |
| Azure Blob | 僅限中繼資料 | 秒 | rclone 使用中繼資料標頭 |
| Google Cloud Storage | 僅限中繼資料 | 秒 | 以自訂中繼資料記錄修改時間 |

當在兩個皆為「完整支援」修改時間的供應商之間同步時（例如 Google Drive 到 OneDrive），以時間戳記為基礎的比對能可靠運作。而在「完整支援」與「僅限中繼資料」的供應商之間同步時，除非檔案最初是由 rclone 上傳，否則不符的情況相當常見。

## 組合旗標以獲得最佳效果

對於大多數跨供應商的同步情境，組合使用多個旗標能帶來最佳效果：

**適用於 S3 對 S3 或 S3 對雲端的同步，且檔案是由其他工具上傳的情況：**

```bash
rclone sync source: dest: --checksum --no-update-modtime
```

**適用於 Google Drive 到 OneDrive（兩者皆支援修改時間）：**

```bash
rclone sync gdrive: onedrive: --modify-window 1s
```

`--modify-window` 旗標會為時間戳記比對加入容許誤差範圍。將其設定為 `1s` 代表時間戳記相差在一秒以內的檔案會被視為相同。這能處理因精確度差異所產生的四捨五入問題。

**適用於每日增量同步搭配偶爾的完整驗證：**

```bash
# 每日（快速，以時間戳記為基礎並加入容許誤差）
rclone sync source: dest: --modify-window 2s

# 每週（徹底，以校驗碼為基礎）
rclone sync source: dest: --checksum
```

在 RcloneView 中，你可以建立兩個獨立的同步工作——一個使用 `--modify-window` 供每日執行，另一個使用 `--checksum` 供每週執行——並分別排程。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 在新設定中預防時間戳記問題

如果你正在建立新的同步工作流程，可以從一開始就避免大多數的時間戳記問題：

1. **所有傳輸都使用 rclone**——rclone 會一致地設定中繼資料，因此由 rclone 上傳的檔案在各處都會擁有正確的修改時間中繼資料。
2. **從第一次同步起就為你的供應商配對適當設定 --modify-window**。
3. **初次遷移時使用校驗碼模式**——首次將大型資料集搬遷至新供應商時，使用 `--checksum` 以確保建立乾淨的基準。
4. **先以小型資料夾測試**——同步少數幾個檔案，檢查是否有不符情況，再逐步擴大規模。
5. **記錄你的旗標設定**——當你找到適合你所使用供應商的旗標組合時，將其儲存為 RcloneView 工作，日後就不必重新摸索。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在遠端管理員中**新增你的來源與目的地遠端**。
3. **使用比較資料夾功能**在同步前檢視差異。
4. 依你的供應商配對**設定同步旗標**（`--checksum`、`--modify-window`、`--no-update-modtime`）。
5. **建立排程同步工作**，並在工作歷史紀錄中監控結果。

時間戳記不符是造成雲端同步效率不彰最常見的原因之一。只要搭配正確的旗標，並理解各供應商處理修改時間的方式，你就能消除不必要的傳輸，讓同步工作保持乾淨俐落。

---

**相關指南：**

- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [同步遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
