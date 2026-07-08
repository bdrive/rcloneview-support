---
slug: fix-cloud-sync-encoding-unicode-errors-rcloneview
title: "修復 RcloneView 中的雲端同步編碼與 Unicode 檔名錯誤"
authors:
  - tayson
description: "排解並修復在 RcloneView 中進行雲端同步時發生的編碼與 Unicode 檔名錯誤,解決跨服務商的字元不相容問題。"
keywords:
  - rcloneview
  - unicode filename error
  - cloud sync encoding error
  - special characters cloud sync
  - filename encoding fix
  - rclone encoding
  - cloud file name error
  - unicode cloud transfer
  - character encoding fix
  - cross-platform filename issues
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 RcloneView 中的雲端同步編碼與 Unicode 檔名錯誤

> 不同的雲端服務商與作業系統對檔名的處理方式各不相同。Unicode 字元、特殊符號與編碼不一致會導致同步失敗——本文將說明如何在 RcloneView 中診斷並修復這些問題。

一個名為 `résumé_2026.pdf` 的檔案在 Google Drive 上可能無法同步到 OneDrive for Business。本地 NAS 上帶有日文字元的資料夾可能無法傳輸到 S3。檔名中包含 `#`、`%` 或 `:` 的檔案在 Dropbox 上可以正常運作,但在 SharePoint 上卻會被拒絕。這類編碼與字元相容性問題是最令人困擾的雲端同步問題之一,因為它們會悄悄跳過檔案,或產生難以理解的錯誤。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常見症狀

- **「無效檔名」或「不支援的字元」錯誤**:目的地服務商拒絕包含其不支援字元的檔名。
- **同步過程中檔案被悄悄跳過**:傳輸「成功」完成,但目的地卻缺少部分檔案。這些檔案通常在名稱中含有有問題的字元。
- **目的地檔名亂碼**:檔案抵達後,其名稱包含 `%xx` 逸出序列、替代字元(`?`),或亂碼(字元顯示錯誤)。
- **「路徑過長」錯誤**:編碼後的檔名長度超過目的地的路徑長度限制(例如 SharePoint 為 400 字元,S3 為 1024 字元)。
- **出現名稱相似的重複檔案**:兩個看起來相同的檔案(例如 `café` 的組合式與分解式 Unicode 表示)被視為不同的檔案。

## 了解問題成因

### 服務商的字元限制

每個雲端服務商對允許的檔名字元都有不同的規則:

| 服務商 | 受限字元 |
|---|---|
| OneDrive Business | `" * : < > ? / \ \|`,在某些情境下也包含 `#` `%` |
| SharePoint | `" * : < > ? / \ \| #` `%` `~`,以及開頭或結尾的空格 |
| Google Drive | 僅限制 `/` 與空字元 |
| Dropbox | `/` 與空字元;在 Windows 上限制結尾的空格與句點 |
| AWS S3 | 幾乎沒有限制(任何 UTF-8 位元組序列皆可) |
| 本地檔案系統(Windows) | `" * : < > ? / \ \|` 及保留名稱(CON、PRN 等) |

當從限制較寬鬆的服務商(Google Drive、S3)同步到限制較嚴格的服務商(OneDrive Business、SharePoint)時,含有受限字元的檔案除非經過編碼,否則會失敗。

### Unicode 標準化

Unicode 提供多種方式來表示同一個字元。例如,`é` 可以是:
- **NFC(組合式)**:單一碼位 U+00E9
- **NFD(分解式)**:兩個碼位 U+0065 + U+0301

macOS 通常使用 NFD,而 Windows 與 Linux 使用 NFC。Google Drive 會保留原始編碼,而 OneDrive 則會標準化為 NFC。這意味著在 macOS 上建立並上傳到 Google Drive 的檔案,在與 OneDrive 上的同一檔案比對時可能無法相符——儘管對人眼來說檔名看起來完全一樣。

## 修復方法 1:啟用自動字元編碼

RcloneView(透過 rclone)在服務商之間傳輸時會自動編碼受限字元。預設情況下,每種遠端類型都有一套編碼預設值,用以處理其特定限制。例如,在複製到 OneDrive 時,`"`、`*`、`:` 等字元會自動替換為外觀相似但允許使用的 Unicode 對應字元。

如果儘管如此仍出現編碼錯誤,請確認編碼功能未被停用。在遠端設定中,檢查 `encoding` 參數是否設為預設值(不要將其設為 `None`)。你可以在 RcloneView 的遠端管理員中檢視並修改此設定。

## 修復方法 2:處理 Unicode 標準化

如果你正在 macOS 產生的檔案與以 Windows 為基礎的雲端服務商之間進行同步,Unicode 標準化的差異可能導致比對時出現誤判(檔案明明相同卻顯示為不同),或在目的地產生重複檔案。

若你想保留檔名的精確位元組序列,可以在 RcloneView 的自訂旗標中使用 `--no-unicode-normalization` 旗標。另外,大多數雲端服務商會在伺服器端標準化檔名,而 rclone 的預設行為在多數常見情況下都能正確處理。

若問題持續發生,`--fix-case` 旗標可協助處理服務商之間大小寫敏感度差異造成的問題(例如 S3 區分大小寫,而 Windows 本地檔案系統則不區分)。

## 修復方法 3:重新命名有問題的檔案

若只有少數檔案含有問題字元,最簡單的解決方式是在來源端重新命名它們。使用 RcloneView 的檔案總管找出含有特殊字元的檔案,並直接重新命名。所有服務商都應避免使用的常見字元包括:

- `# % & { } \ < > * ? / $ ! ' " : @ + \`` \| =`
- 開頭或結尾的空格與句點
- Windows 保留名稱(CON、PRN、AUX、NUL、COM1-9、LPT1-9)

## 修復方法 4:使用篩選規則跳過有問題的檔案

如果你無法重新命名檔案(例如檔案位於你無法控制的共用磁碟機上),可以使用篩選規則將含有特定字元模式的檔案排除在同步之外。這只是一種變通做法,而非真正的修復,但可以避免同步在有問題的檔案上失敗或卡住。

在 RcloneView 的工作設定中,新增類似以下的篩選規則:
- `--exclude "**/*#*"` 跳過包含 `#` 的檔案
- `--exclude "**/*%*"` 跳過包含 `%` 的檔案

事後請檢閱同步日誌,找出哪些檔案被跳過,並視需要手動處理。

## 修復方法 5:檢查路徑長度限制

當檔名經過編碼後,長度會變長(每個受限字元都會被替換為多位元組的 Unicode 序列)。如果來源路徑已經接近目的地的限制,編碼後就可能超出上限。

SharePoint 的路徑長度限制為 400 字元。Windows 預設限制為 260 字元(可設定)。S3 的鍵值長度限制為 1024 字元。

若遇到路徑過長的錯誤,請縮短來源階層中的資料夾名稱,或攤平過深的巢狀結構。RcloneView 的檔案總管會顯示完整路徑,方便你找出過深的巢狀檔案。

## 預防未來的問題

- **上傳前先統一檔名格式**:從一開始就避免在檔名中使用特殊字元,盡量只使用英數字元、連字號、底線與句點。
- **以試跑(dry run)進行測試**:在不同字元規則的服務商之間進行大型同步前,使用 RcloneView 的試跑模式,在不實際傳輸資料的情況下找出潛在的編碼問題。
- **檢閱同步日誌**:每次同步後,檢查工作歷史記錄中關於檔案被跳過或重新命名的警告,並在問題累積之前主動處理。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 確認你的遠端設定使用預設的編碼設定。
3. 使用試跑模式,在正式傳輸前找出編碼問題。
4. 視需要重新命名或篩選有問題的檔案。

編碼與 Unicode 問題雖然細微,卻是跨服務商同步時常見的狀況。RcloneView 的自動編碼功能能處理大多數情況,而上述的疑難排解步驟則能解決其餘的問題。

---

**相關指南:**

- [瀏覽與管理遠端儲存空間](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作歷史記錄](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
