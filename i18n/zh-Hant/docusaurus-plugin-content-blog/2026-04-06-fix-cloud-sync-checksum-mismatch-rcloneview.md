---
slug: fix-cloud-sync-checksum-mismatch-rcloneview
title: "修復 RcloneView 中雲端同步的檢查碼不符錯誤"
authors:
  - tayson
description: "解決在 RcloneView 中雲端同步時發生的檢查碼不符錯誤。了解 rclone 如何處理檢查碼、雲端服務商雜湊差異，以及何時該使用 --ignore-checksum。"
keywords:
  - rclone checksum mismatch
  - cloud sync checksum error
  - rclone hash mismatch fix
  - rcloneview checksum error
  - rclone ignore checksum
  - md5 sha1 cloud storage hash
  - rclone data integrity check
  - fix sync mismatch rclone
  - cloud provider hash comparison
  - rclone checksum verification
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

# 修復 RcloneView 中雲端同步的檢查碼不符錯誤

> 雲端同步時出現檢查碼不符,通常代表來源與目的地使用了不同的雜湊演算法,而不是資料已經損毀。以下說明如何診斷並解決這個問題。

當 rclone 在雲端服務商之間同步檔案時,會比較檢查碼以確認傳輸後的資料與原始檔案相符。如果來源與目的地服務商使用不同的雜湊演算法——或其中一方根本不回傳檢查碼——rclone 可能會回報不符,或不必要地重新傳輸檔案。本指南將說明發生了什麼事,以及如何在 RcloneView 中修復。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 檢查碼不符代表什麼

檢查碼(或雜湊值)是根據檔案內容計算出的固定長度字串。如果兩個檔案產生相同的檢查碼,代表它們內容相同。Rclone 使用檢查碼來:

- **驗證上傳** — 確認傳輸後目的地檔案與來源檔案相符。
- **偵測變更** — 在同步時,跳過檢查碼與大小都未改變的檔案。
- **確保完整性** — 若檔案雜湊值與預期不符,則標記為可能損毀。

不符代表其中一方計算出的雜湊值與另一方不同。這有可能代表資料確實損毀,但更常見的情況是反映了服務商之間的**雜湊演算法不相容**。

## 各服務商的雜湊差異

不同的雲端服務商支援不同的雜湊演算法:

| 服務商 | 支援的雜湊 |
|----------|-----------------|
| **本機磁碟** | MD5、SHA-1、SHA-256(依作業系統而定) |
| **Google Drive** | MD5 |
| **OneDrive** | SHA-1、QuickXorHash |
| **Dropbox** | Dropbox 內容雜湊(自訂) |
| **Amazon S3** | MD5(ETag,但不適用於分段上傳) |
| **Backblaze B2** | SHA-1 |
| **Azure Blob** | MD5 |
| **SFTP** | MD5、SHA-1(若伺服器支援) |
| **Wasabi** | MD5(ETag) |
| **Cloudflare R2** | MD5(ETag) |

當在共用相同雜湊的服務商之間同步時(例如 Google Drive MD5 對 Azure Blob MD5),檢查碼比對可以順利運作。當沒有共用雜湊時(例如 Google Drive MD5 對 OneDrive QuickXorHash),rclone 就無法直接比較檢查碼。

## Rclone 如何處理不一致的雜湊

Rclone 在雜湊比較方面相當智慧:

1. **找到共用雜湊** — rclone 使用共用的演算法比較檔案,不會有問題。
2. **沒有共用雜湊** — rclone 會退回比較檔案大小與修改時間。大小與時間都相符的檔案會被視為相同。
3. **啟用 `--checksum` 旗標** — rclone 只使用檢查碼(不比較時間)。如果沒有共用雜湊,rclone 會因為無法確認檔案相符而重新傳輸所有檔案。

第三種情況是造成非預期行為最常見的原因:在不相容的服務商之間啟用 `--checksum`,會強制產生不必要的重新傳輸。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中比較資料夾以找出不符的檔案" class="img-large img-center" />

## 常見錯誤情境

### 情境一:S3 分段上傳的 ETag 不符

當你使用分段上傳將大型檔案上傳到 S3 時,產生的 ETag 並非單純的 MD5 雜湊——而是各分段的複合雜湊值。Rclone 在本機計算的檔案 MD5 不會與 S3 的 ETag 相符,因而在下一次同步時觸發不符錯誤。

**解法:** 這是預期中的行為。Rclone 會盡可能將預期的雜湊值儲存在中繼資料中來處理這個問題。如果你看到大型檔案被重新傳輸,可以針對該特定同步工作安全地使用 `--ignore-checksum`。

### 情境二:Google Drive 同步到 OneDrive

Google Drive 使用 MD5,而 OneDrive 使用 QuickXorHash,兩者沒有重疊的雜湊演算法。

**解法:** Rclone 會自動退回比較大小與修改時間。這種組合請勿使用 `--checksum`,否則每個檔案都會被重新傳輸。

### 情境三:加密(Crypt)遠端

使用 rclone crypt 時,加密後的檔案雜湊值會與明文來源不同。Rclone 會在內部處理這個問題,但如果你直接拿 crypt 遠端的雜湊值與原始服務商的雜湊值比較,兩者永遠不會相符。

**解法:** 務必透過 crypt 遠端層來比較檔案,而不是直接查看底層的加密儲存內容。

## 在 RcloneView 中設定檢查碼行為

### 使用 --checksum 旗標

`--checksum` 旗標會告訴 rclone 只用檢查碼(而非修改時間)來判斷檔案是否需要傳輸。在以下情況啟用:

- 來源與目的地都支援相同的雜湊演算法。
- 你想要最強的完整性保證。
- 你正在本機磁碟與支援 MD5 的服務商之間同步。

不要在以下情況使用:

- 來源與目的地沒有共用雜湊——這會強制重新傳輸所有檔案。
- 你正在將大型檔案同步到 S3(分段上傳的 ETag 不會相符)。

### 使用 --ignore-checksum 旗標

`--ignore-checksum` 旗標會跳過所有檢查碼驗證。在以下情況使用:

- 你已確認資料正確,但檢查碼永遠不會相符(例如 S3 分段上傳的 ETag)。
- 你想在非常大量的資料集上跳過雜湊運算以加快同步速度。
- 某個服務商回傳的雜湊值不一致或不正確(罕見但可能發生)。

不要將它當作預設選項——檢查碼的存在正是為了抓出真正的資料損毀。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在執行前於 RcloneView 中設定同步工作旗標" class="img-large img-center" />

## 驗證資料完整性

如果你懷疑是資料真的損毀,而不是雜湊演算法不符:

1. **執行 `rclone check`** — 這會比較來源與目的地檔案,並回報任何差異。在 RcloneView 中,你可以使用資料夾比較檢視。
2. **下載後在本機比較** — 從來源與目的地分別下載檔案,再用 `md5sum` 或 `sha256sum` 計算本機檢查碼。
3. **檢查傳輸紀錄** — 檢視 RcloneView 的工作歷史記錄,查看原始傳輸過程中是否有錯誤。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中監控傳輸進度並驗證檢查碼" class="img-large img-center" />

## 快速參考:雜湊相容性對照表

| 同步方向 | 共用雜湊 | 可安全使用檢查碼旗標? |
|---------------|-------------|-------------------|
| 本機到 Google Drive | MD5 | 可以 |
| 本機到 OneDrive | SHA-1 | 可以 |
| 本機到 S3(小型檔案) | MD5 | 可以 |
| 本機到 S3(分段上傳) | 無(ETag 不同) | 不可以 |
| Google Drive 到 OneDrive | 無 | 不可以 |
| Google Drive 到 S3 | MD5 | 可以(小型檔案) |
| S3 到 Backblaze B2 | 無(MD5 對 SHA-1) | 不可以 |
| S3 到 Azure Blob | MD5 | 可以(小型檔案) |

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用上方表格**檢查你的服務商支援的雜湊**。
3. **避免在不相容的服務商之間使用 `--checksum`**,以防止不必要的重新傳輸。
4. 在 RcloneView 中**使用資料夾比較**功能,以視覺化方式驗證同步結果。

大多數檢查碼不符的錯誤並非資料損毀——而是服務商之間的雜湊演算法不一致。了解每個服務商支援哪些雜湊,是快速解決這類問題的關鍵。

---

**相關指南:**

- [在 RcloneView 中排解 Rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [修復 S3 存取被拒錯誤](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [修復 OneDrive 同步錯誤](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)

<CloudSupportGrid />
