---
slug: fix-onedrive-sync-errors-delta-token-path-length-rcloneview
title: "修復 OneDrive 同步錯誤:Delta Token 過期、路徑過長與驗證失敗"
authors:
  - tayson
description: "使用 rclone 與 RcloneView 解決常見的 OneDrive 同步錯誤——delta token 過期、Windows 路徑長度限制、驗證失敗以及超出配額錯誤。"
keywords:
  - fix onedrive sync errors rclone
  - onedrive delta token expired rclone
  - onedrive path too long sync error
  - rclone onedrive authentication error
  - onedrive sync failed rcloneview
  - onedrive quota exceeded rclone
  - troubleshoot onedrive rclone
  - onedrive sync troubleshooting
  - rcloneview onedrive errors
  - onedrive 400 bad request rclone
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 OneDrive 同步錯誤:Delta Token 過期、路徑過長與驗證失敗

> OneDrive 是一個功能強大的雲端儲存平台,但它的同步行為有一些特殊之處,可能會讓 rclone 使用者感到困惑。本指南涵蓋在 RcloneView 中最常遇到的 OneDrive 錯誤,以及如何逐一解決。

OneDrive 在絕大多數 rclone 操作中都運作良好,但某些錯誤情況是 Microsoft 平台特有的。Delta token 過期、Windows 路徑長度限制、驗證權杖刷新失敗,以及按檔案或按天計算的上傳配額,都是實際使用中會遇到的問題。以下是逐一診斷與修復這些問題的系統化指南。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 錯誤 1:Delta Token 過期

**症狀:** 出現以下錯誤訊息:
```
Failed to sync: invalidDeltaToken: The token is expired.
```

**原因:** rclone 使用 delta token 來追蹤 OneDrive 中的增量變更。此權杖的有效期約為 30 天。如果您超過一個月未執行同步——或 Microsoft 使該權杖失效——rclone 便無法繼續進行增量掃描。

**修復方式:** 移除快取的 delta token,強制執行完整重新掃描:

1. 在 RcloneView 中開啟 **終端機** 面板。
2. 執行:`rclone backend remove-expiry onedrive:`(將 `onedrive` 替換為您的遠端名稱)。
3. 或者,從 RcloneView 的設定中刪除該遠端的 `vfs/delta` 快取項目。
4. 重新執行同步工作——這次 rclone 將進行完整掃描。

修復後第一次執行會花費較長時間,但可以完全解決此錯誤。

## 錯誤 2:路徑過長(超過 400 字元)

**症狀:**
```
ERROR: path too long: cannot handle path > 400 characters
```
或是位於深層巢狀資料夾中的檔案同步失敗。

**原因:** OneDrive 對路徑長度設有上限,OneDrive Personal 為 400 字元,OneDrive for Business 同樣為 400 字元。Windows 也有舊有的 260 字元 MAX_PATH 限制,會影響 OneDrive 桌面同步用戶端,不過 rclone 本身並沒有這個 Windows 限制。

**修復方式:**
- **縮短您的資料夾結構**——保持目錄巢狀層級較淺。將過長的資料夾名稱重新命名。
- **在 OneDrive 中使用較短的基礎路徑**——如果您正在同步到 `OneDrive/Clients/Projects/2026/Active/Reports/`,可以考慮將其扁平化為 `OneDrive/Projects-2026/Reports/`。
- **使用 RcloneView 的篩選規則** 在重新調整結構期間,跳過已知有路徑長度問題的資料夾。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Use folder comparison to identify path issues" class="img-large img-center" />

## 錯誤 3:驗證錯誤(401 Unauthorized)

**症狀:**
```
401 Unauthorized
Failed to refresh token
AADSTS700082: The refresh token has expired
```

**原因:** Microsoft 的 OAuth 刷新權杖若閒置 90 天未使用,或在密碼變更/安全性原則重設後,便會過期。當 rclone 設定中儲存的權杖失效時,所有操作都會失敗。

**修復方式:** 在 RcloneView 中重新授權 OneDrive 遠端:

1. 開啟 RcloneView 中的 **遠端**。
2. 選取您的 OneDrive 遠端並選擇 **編輯**。
3. 點擊 **重新授權**——將開啟瀏覽器視窗進行 Microsoft 登入。
4. 登入並再次授予存取權限。
5. 儲存更新後的權杖。

之後的操作將使用新的權杖。如果您的同步工作執行頻率較低(每月一次或更少),請設定提醒以定期重新授權。

## 錯誤 4:429 Too Many Requests / 速率限制

**症狀:**
```
429 Too Many Requests: request throttled
```

**原因:** OneDrive 的 API 對每位使用者設有速率限制。快速同步數千個小檔案會觸發限流。

**修復方式:**

- **減少並行傳輸數量**——在 RcloneView 的工作設定中,將傳輸數量降低至 2–4。
- **加入速率限制**——在 RcloneView 的自訂旗標欄位中使用 `--tpslimit 10` 旗標,以限制每秒交易數。
- **排程在離峰時段執行**——Microsoft 的限流機制在上班時段更為嚴格。
- **對大型檔案使用分塊上傳**——RcloneView 會自動為超過 100 MB 的檔案處理此項目。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive jobs during off-peak hours" class="img-large img-center" />

## 錯誤 5:超出配額

**症狀:**
```
403 Forbidden: insufficient storage
```
或當 OneDrive 空間接近上限時,上傳會靜默失敗。

**原因:** 目標 OneDrive 帳戶的可用空間不足。

**修復方式:**
- 在 Microsoft 365 系統管理中心或 onedrive.live.com 檢查您的 OneDrive 配額。
- **釋放空間**,刪除或移動 OneDrive 中的舊檔案。
- 若帳戶確實已滿,**升級您的方案**。
- **拆分遷移作業**——將檔案移至另一個 OneDrive 帳戶,或將超出的部分改為傳輸至其他目的地。

## 錯誤 6:檔名包含無效字元

**症狀:** 含有特定字元的檔案無法傳輸至 OneDrive。

**原因:** OneDrive 禁止在檔名中使用某些字元:`\`、`/`、`:`、`*`、`?`、`"`、`<`、`>`、`|`。來自 Linux 系統的檔案名稱中經常含有冒號或其他字元。

**修復方式:** RcloneView(透過 rclone)內建 `--onedrive-enc` 編碼選項,可自動將禁用字元替換為 Unicode 相似字元。請在您的 OneDrive 遠端進階設定中啟用此選項。

## 在 RcloneView 中監控錯誤

RcloneView 的 **工作歷史紀錄** 面板會顯示傳輸記錄,並列出每個檔案的完整錯誤訊息:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="View OneDrive error logs in RcloneView" class="img-large img-center" />

利用此功能可以快速找出哪些檔案傳輸失敗及其原因,而不必翻查 rclone 的原始記錄輸出。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 當同步失敗時,**檢查工作歷史紀錄** 以取得錯誤訊息。
3. 依照上方指引,**針對特定錯誤類型套用修復方式**。
4. **重新執行工作**——rclone 會跳過已成功傳輸的檔案,只重試失敗的部分。

大多數 OneDrive 錯誤都有直接的修復方式。關鍵在於準確辨識錯誤訊息,並套用對應的解決方案,而非盲目除錯。

---

**相關指南:**

- [修復 Google Drive 403 速率限制錯誤](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [使用 RcloneView 排解 Rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [解決雲端同步衝突](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)

<CloudSupportGrid />
