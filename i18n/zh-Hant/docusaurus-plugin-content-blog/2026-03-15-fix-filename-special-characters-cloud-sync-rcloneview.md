---
slug: fix-filename-special-characters-cloud-sync-rcloneview
title: "修正雲端同步中的檔名過長與特殊字元錯誤——RcloneView 指南"
authors:
  - tayson
description: "雲端同步因檔名而失敗？過長的路徑、特殊字元與編碼不一致會造成隱藏的錯誤。了解如何在 RcloneView 中診斷並修正這些問題。"
keywords:
  - filename too long cloud
  - special characters cloud sync
  - cloud sync filename error
  - path too long error
  - rclone filename encoding
  - cloud storage filename limit
  - unicode filename cloud
  - onedrive path length limit
  - google drive filename issues
  - fix cloud sync file errors
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修正雲端同步中的檔名過長與特殊字元錯誤——RcloneView 指南

> 你的同步工作在 47 個檔案上失敗了。錯誤訊息顯示「filename too long」或「invalid character」。這些檔案在你這邊看起來完全正常。歡迎來到跨供應商檔名相容性的世界。

每個雲端供應商對檔名都有不同的規則。在 Google Drive 上完全合法的檔名，在 OneDrive 上可能是不合法的。在 S3 上正常運作的路徑，在 Dropbox 上可能超過字元限制。當你在不同供應商之間進行同步時，這些差異會產生令人困擾的錯誤，甚至可能阻擋整個傳輸工作。本指南將說明最常見的問題以及如何修正它們。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常見的檔名問題

### 路徑長度限制

| 供應商 | 最大路徑長度 |
|----------|----------------|
| OneDrive | 400 個字元 |
| SharePoint | 400 個字元 |
| Google Drive | 32,768 個字元 |
| S3 | 1,024 個字元 |
| Dropbox | 260 個字元 |
| 本機（Windows） | 260 個字元（預設值） |

深層巢狀且名稱過長的資料夾，很快就會超過 OneDrive 或 Dropbox 的限制。

### 不合法的字元

| 字元 | Google Drive | OneDrive | S3 | Dropbox |
|-----------|-------------|----------|-----|---------|
| `\` | 允許 | 不允許 | 允許 | 不允許 |
| `?` | 允許 | 不允許 | 允許 | 不允許 |
| `*` | 允許 | 不允許 | 允許 | 不允許 |
| `:` | 允許 | 不允許 | 允許 | 不允許 |
| `<` `>` `\|` | 允許 | 不允許 | 允許 | 不允許 |

在 Google Drive 上建立、檔名中含有 `?` 或 `:` 的檔案，同步到 OneDrive 時就會失敗。

### 結尾空格與句點

OneDrive 與 Windows 會拒絕以空格或句點結尾的檔名，而 Google Drive 則允許。這會造成不易察覺的同步失敗。

### Unicode 與編碼問題

非 ASCII 字元（日文、韓文、中文、表情符號）在多數供應商上都能正常運作，但在較舊的系統或特定相容 S3 的供應商上，可能會產生問題。

## 如何診斷

### 檢查工作記錄

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Find filename errors in job history" class="img-large img-center" />

工作記錄會清楚顯示哪些檔案失敗以及失敗原因。留意包含「invalid」、「too long」或「not allowed」等關鍵字的錯誤訊息。

### 找出有問題的檔案

透過 RcloneView 的終端機，你可以執行帶有詳細輸出的 `rclone check`，在正式開始傳輸之前，先列出所有可能失敗的檔案。

## 解決方案

### 在來源端重新命名有問題的檔案

最乾淨的解法：在同步之前，先移除不合法字元或縮短路徑來重新命名檔案。

### 使用 rclone 的編碼旗標

Rclone 可以在傳輸過程中自動編碼不合法的字元。你可以在 RcloneView 的遠端設定中進行相關設定，以處理跨供應商的相容性問題。

### 攤平過深的資料夾結構

如果問題出在路徑長度，可以將深層巢狀的資料夾重新整理成較扁平的結構。

### 使用資料夾比較找出不一致的地方

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find filename mismatches" class="img-large img-center" />

資料夾比較功能會標示出存在於來源端但不存在於目的端的檔案——這些往往就是因檔名問題而失敗的檔案。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 先在小型資料夾上**執行測試同步**。
3. **檢查工作記錄**中與檔名相關的錯誤。
4. 在來源端**修正檔名**或設定編碼。
5. 使用資料夾比較**重新執行並驗證**。

修正方式通常比錯誤訊息看起來的還要簡單。

---

**相關指南：**

- [修正權限被拒錯誤](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [雲端 API 速率限制](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)
- [疑難排解 Rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
