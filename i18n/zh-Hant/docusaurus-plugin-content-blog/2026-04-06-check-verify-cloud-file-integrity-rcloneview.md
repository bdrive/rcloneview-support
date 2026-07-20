---
slug: check-verify-cloud-file-integrity-rcloneview
title: "使用 RcloneView 的檢查與比較功能驗證雲端檔案完整性"
authors:
  - tayson
description: "使用 RcloneView 的檢查與比較功能來驗證雲端檔案完整性、偵測位元衰減、驗證校驗碼，並確認跨供應商遷移是否成功。"
keywords:
  - rclone check files
  - verify cloud file integrity
  - rcloneview compare folders
  - cloud checksum verification
  - detect bit rot cloud storage
  - post migration verification
  - rclone file validation
  - compare source destination cloud
  - rcloneview check feature
  - cloud data integrity tool
tags:
  - RcloneView
  - feature
  - cloud-sync
  - guide
  - tips
  - best-practices
  - security
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 的檢查與比較功能驗證雲端檔案完整性

> 將檔案複製到雲端只完成了一半的工作。驗證每個位元組是否完整送達，才是可靠工作流程與僅止於期望之間的差別。

無論是跨供應商搬移數 TB 的資料、執行每夜備份，還是封存重要資料集，都共同面臨一個風險：無聲的損毀。檔案可能因傳輸中斷、供應商端的錯誤，或單純隨時間發生的位元衰減，而在目的地看似存在，內容卻與來源不同。Rclone 提供了專用的 `check` 指令，可逐檔比對來源與目的地，而 RcloneView 讓這個流程變得視覺化且易於操作。本指南將說明何時以及如何驗證你的雲端檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼檔案完整性驗證很重要

雲端供應商會在內部複寫資料，但沒有任何系統能完全免於錯誤。以下是驗證能夠揪出真實問題的常見情境：

- **傳輸中斷** -- 大型複製過程中若網路中斷，可能在目的地留下部分檔案，但僅從檔名來看卻像是完整的。
- **位元衰減** -- 儲存媒體可能在數月或數年間退化，導致極少被存取的檔案位元翻轉。
- **供應商錯誤** -- 偶發的 API 錯誤可能導致零位元組上傳或寫入被截斷，卻不會觸發任何錯誤提示。
- **遷移驗證** -- 在跨供應商搬移數十萬個檔案後，你需要證據來確認沒有任何檔案遺失或被更改。

若缺少驗證步驟，這些問題往往要等到你真正需要用到該檔案時才會被發現。

## Rclone Check 的運作方式

`rclone check` 指令會比較來源與目的地路徑，並回報有差異的檔案。依照涉及的供應商不同，它會使用以下其中一種方法：

| 方法 | 運作方式 | 使用時機 |
|--------|-------------|-----------|
| **校驗碼比對（Hash check）** | 比較兩個供應商回報的校驗碼（MD5、SHA1 等） | 兩個供應商都支援共同的雜湊演算法 |
| **大小比對（Size check）** | 僅比較檔案大小 | 沒有可用的共同雜湊演算法 |
| **下載比對（Download check）** | 下載兩份檔案並逐位元組比較 | 使用 `--download` 旗標強制啟用 |

當兩個供應商都支援時，基於校驗碼的比對是最快且最可靠的方式。Google Drive、OneDrive、S3 相容供應商以及 Backblaze B2 都會回報檔案雜湊值，但類型不一定相同。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView compare folders showing file differences" class="img-large img-center" />

## 在 RcloneView 中使用比較功能

RcloneView 內建的 **比較（Compare）** 功能，可讓你以並排視覺化方式檢視來源與目的地資料夾：

1. 開啟 **檔案總管（Explorer）** 面板，在一側選擇來源遠端，另一側選擇目的地。
2. 導覽至你想比較的資料夾。
3. 點擊 **比較（Compare）** 以執行分析。
4. 檢視結果 -- 檔案會依狀態以顏色標示：相符、僅來源有、僅目的地有，或不同。

這種視覺化方式非常適合用來抽查特定資料夾，或在不必記住命令列輸出格式的情況下檢視遷移後的結果。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane explorer with source and destination" class="img-large img-center" />

## 透過終端機執行 Rclone Check

若要對整個遠端進行完整的完整性掃描，請在 RcloneView 中開啟 **終端機（Terminal）** 並執行：

```bash
rclone check source:path dest:path
```

以下是幾個實用的旗標：

| 旗標 | 用途 |
|------|-------------|
| `--size-only` | 僅依大小比對，略過雜湊檢查 |
| `--download` | 透過下載兩份檔案，強制進行逐位元組比較 |
| `--one-way` | 僅檢查來源檔案是否存在於目的地（不反向檢查） |
| `--combined report.txt` | 將相符與不符的合併報告寫入檔案 |
| `--missing-on-src missing.txt` | 記錄存在於目的地但來源缺失的檔案 |
| `--missing-on-dst missing.txt` | 記錄存在於來源但目的地缺失的檔案 |
| `--error errors.txt` | 記錄檢查失敗的檔案 |

以下是遷移後徹底檢查的範例：

```bash
rclone check gdrive:/Archive s3-backup:archive-bucket --combined /tmp/check-report.txt
```

## 遷移後驗證工作流程

在供應商之間遷移資料後，請依照以下流程確認遷移成功：

1. **執行單向檢查**，從來源到目的地，以確認所有來源檔案都已送達：
   ```bash
   rclone check source:path dest:path --one-way
   ```
2. **檢視不符項目** -- 任何回報的差異都代表需要重新複製的檔案。
3. **重新傳輸失敗的檔案**，使用 RcloneView 的複製或同步功能，並移除 `--ignore-existing` 設定。
4. **重新執行檢查**，確認所有差異都已解決。
5. **保存報告**，使用 `--combined` 旗標以供稽核用途。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed check operations" class="img-large img-center" />

## 偵測長期的位元衰減

對於長期封存的資料，請排程定期的完整性檢查：

1. 在 RcloneView 中建立一個 **工作（Job）**，執行 `rclone check` 來檢查你的封存資料。
2. 使用 **工作排程器（Job Scheduler）** 將其排程為每週或每月執行一次。
3. 每次執行後檢視工作歷程記錄，以揪出任何新出現的損毀檔案。

這對於冷儲存層級（S3 Glacier、Backblaze B2 封存）尤其重要，因為這類檔案通常只寫入一次，且極少被讀取。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule periodic integrity check in RcloneView" class="img-large img-center" />

## 供應商之間的校驗碼相容性

並非每個供應商都支援相同的雜湊演算法。以下為快速參考：

| 供應商 | MD5 | SHA1 | 其他 |
|----------|-----|------|-------|
| Google Drive | 支援 | 不支援 | 提供 Quickxor |
| OneDrive | 不支援 | 不支援 | QuickXorHash |
| Amazon S3 | 支援（單一分段的 ETag） | 不支援 | -- |
| Backblaze B2 | 不支援 | 支援 | 原生 SHA1 |
| Dropbox | 不支援 | 不支援 | Dropbox 內容雜湊 |
| SFTP/Local | 支援 | 支援 | 多種 |

當兩個供應商沒有共同的雜湊演算法時，rclone 會退回至僅比對大小的方式。在這種情況下，可使用 `--download` 來取得位元組層級的確定性。

## 最佳實務

- **大型遷移後務必進行驗證** -- 複製指令成功執行，不代表每個檔案都完整無誤。
- **使用 `--combined` 報告**，建立可稽核的相符與不符記錄。
- **為長期未變動的封存資料排程定期檢查**。
- **盡可能優先使用雜湊比對**而非僅比對大小 -- 相同大小的損毀雖然罕見，但確實存在。
- **在檢查後執行 dry-run 同步**，以自動修正任何不符之處。

---

**相關指南：**

- [雲端對雲端傳輸與同步](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)
- [從 Google Drive 到 Amazon S3 的增量備份](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [復原中斷與失敗的傳輸](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
