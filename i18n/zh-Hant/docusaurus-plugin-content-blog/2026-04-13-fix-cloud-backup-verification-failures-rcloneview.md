---
slug: fix-cloud-backup-verification-failures-rcloneview
title: "修復雲端備份驗證失敗——使用 RcloneView 確保資料完整性"
authors:
  - tayson
description: "疑難排解 RcloneView 中的雲端備份校驗和不符與驗證失敗問題。使用資料夾比較、檢查設定並重新執行傳輸以確保資料完整性。"
keywords:
  - cloud backup verification failure RcloneView
  - checksum mismatch cloud sync
  - fix backup integrity error rclone
  - cloud transfer checksum error
  - RcloneView data integrity check
  - rclone checksum verification failure
  - backup corruption fix rclone
  - cloud sync verification troubleshooting
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復雲端備份驗證失敗——使用 RcloneView 確保資料完整性

> 雲端傳輸後出現的校驗和不符,可能代表服務商差異,也可能代表真正的資料損毀——了解你面對的是哪種情況,才能對症下藥。

大型備份完成後,你可能會遇到驗證失敗的情況:校驗和不符、明明應該相同卻被標記為不同的檔案,或是 RcloneView 比較工具中出現的錯誤。這些失敗可能有多種成因,從無害的服務商中繼資料差異,到真正的資料損毀都有可能。本指南將逐一說明如何診斷每種情況並套用正確的修復方式。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解校驗和類型

不同的雲端服務商支援不同的校驗和演算法。AWS S3 對標準上傳使用 MD5,對校驗和使用 SHA-256。Google Drive 使用 MD5。Backblaze B2 使用 SHA1。Dropbox 則使用自訂的區塊雜湊(block hash)。當 rclone 比較兩個使用不同雜湊演算法的服務商之間的檔案時,會退而改用大小與修改時間比較,而非雜湊比較。

這代表 RcloneView「資料夾比較」畫面中出現的「不符」,不一定代表資料損毀——也可能代表兩個服務商使用不相容的雜湊類型,rclone 只能依大小進行比較。真正的資料損毀會呈現大小相符,但在同一演算法下雜湊值不同的情況。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify backup verification failures" class="img-large img-center" />

## 在同步工作中啟用校驗和驗證

若要在傳輸當下就抓出真正的資料損毀,請在同步工作設定中啟用校驗和驗證。在 RcloneView 中,開啟該工作並前往步驟 2,啟用**校驗和(checksum)**選項。啟用後,rclone 會在傳輸過程中計算並比對雜湊值。若上傳後檔案的雜湊值不相符,rclone 會重試該次傳輸。

注意:啟用校驗和驗證會略微增加 CPU 使用率與傳輸時間,但能捕捉到原本可能被忽略的資料損毀。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling checksum verification in RcloneView sync job settings" class="img-large img-center" />

## 使用資料夾比較偵測不符情況

備份完成後,開啟 RcloneView 中的**資料夾比較**。將一側指向來源,另一側指向備份目的地。RcloneView 會將檔案分為三個類別:

- **相符**:兩側相同
- **僅來源**:存在於來源但目的地缺少
- **僅目的地**:存在於目的地但來源沒有
- **不同**:名稱相同但屬性(大小、雜湊值或修改時間)不同

「不同」類別中的檔案值得進一步檢查。下載並比對樣本,以確認內容是否真的不同,或只是服務商的中繼資料差異所致。

## 透過終端機執行檢查

若要進行深入的完整性檢查,可使用 RcloneView 的**終端機**分頁直接執行 rclone 指令。使用 `rclone check` 徹底比較來源與目的地:

```
rclone check source:path destination:path --one-way
```

此指令會列出兩側所有不一致的檔案,並針對各服務商使用其可用的最佳雜湊方式。輸出結果會確切顯示哪些檔案有不符情況,有助於判斷問題是系統性的還是個別發生的。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running rclone check command in RcloneView Terminal" class="img-large img-center" />

## 使用不同設定重新執行

若驗證失敗持續發生,且檔案確實存在差異,請以下列設定重新執行備份工作:

- **啟用校驗和驗證**:確保 rclone 重新傳輸並進行驗證
- **忽略已存在檔案**:即使檔案看似已存在,也強制重新傳輸
- **提高低階重試次數**:增加成功傳輸的機會

對於雜湊演算法不同的跨服務商備份,請在工作的進階設定中,將比較模式從「僅雜湊」切換為**大小與修改時間**比較。這能減少因雜湊不相容而產生的誤判。

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在同步工作步驟 2 的傳輸選項中啟用**校驗和驗證**。
3. 備份完成後,使用**資料夾比較**找出任何差異。
4. 如需更深入的分析,可從**終端機**分頁執行 `rclone check`。

系統性的校驗和驗證與備份後比對,能讓你確信你的雲端備份是逐位元組準確無誤的。

---

**相關指南:**

- [使用 RcloneView 修復雲端同步校驗和不符](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [使用 RcloneView 進行校驗和驗證的雲端遷移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [修復雲端同步傳輸後遺失檔案的問題](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
