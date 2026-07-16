---
slug: cloud-api-rate-limits-explained-rcloneview
title: "雲端 API 速率限制解析——為什麼你的傳輸會失敗，以及如何解決"
authors:
  - tayson
description: "Google Drive 出現 403 錯誤？OneDrive 限速？了解什麼是雲端 API 速率限制、它為何會中斷你的傳輸，以及如何設定 RcloneView 來避開這些限制。"
keywords:
  - cloud api rate limit
  - google drive 403 error
  - onedrive throttling
  - s3 rate limit
  - cloud transfer failed
  - api rate limit exceeded
  - cloud sync error fix
  - google drive quota exceeded
  - dropbox rate limit
  - cloud storage api limits
tags:
  - troubleshooting
  - api
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 雲端 API 速率限制解析——為什麼你的傳輸會失敗，以及如何解決

> 你的雲端同步一開始表現強勁，接著突然慢了下來。錯誤訊息開始出現：「Rate limit exceeded」、「403 Forbidden」、「Too many requests」。你的傳輸卡在 60%。到底發生了什麼事？

每個雲端儲存供應商都會限制你與其 API 互動的速度。這些速率限制是為了保護其基礎設施免受濫用，但也會影響正在搬移大量資料的合法使用者。理解這些限制——並設定你的工具去遵守它們——正是傳輸能否穩定完成、還是中途失敗的關鍵差異。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什麼是 API 速率限制？

當你在雲端儲存中上傳、下載、列出或修改檔案時，你的工具會發出 API 呼叫。每個操作都是一次或多次 API 請求。速率限制會限制你在特定時間內能發出的請求數量。

### 限制的類型

- **每秒請求數**——每秒可發出多少次 API 呼叫（例如 S3：每個前綴每秒 3,500 次 PUT 請求）。
- **每日請求數**——每日總 API 呼叫次數（例如 Google Drive：應用程式每日約 100 億次查詢，但每位使用者可用的額度低得多）。
- **每日頻寬**——總資料量（例如 Google Drive：每日上傳約 750 GB）。
- **並行連線數**——允許同時建立多少連線。
- **突發限制**——在觸發限速之前，允許的短期流量高峰。

## 各家供應商的速率限制

### Google Drive

| 限制 | 數值 |
|-------|-------|
| 每日上傳量 | 約 750 GB |
| 每日下載量 | 約 10 TB |
| 每 100 秒 API 查詢次數 | 每位使用者 1,000 次 |
| 每秒檔案操作數 | 約 10 |
| 錯誤碼 | 403（userRateLimitExceeded）、429 |

Google Drive 是速率限制最嚴格的供應商之一。如果你看到 `403` 或 `userRateLimitExceeded`，就代表你已經碰到了上限。

### OneDrive / SharePoint

| 限制 | 數值 |
|-------|-------|
| API 呼叫 | 動態限速 |
| 並行上傳數 | 建議約 4 |
| 錯誤碼 | 429（Too Many Requests）、503 |

Microsoft 採用動態限速——在同一個工作階段中，隨著使用量增加，限制會越來越嚴格。

### AWS S3

| 限制 | 數值 |
|-------|-------|
| PUT/COPY/POST/DELETE | 每個前綴每秒 3,500 次 |
| GET/HEAD | 每個前綴每秒 5,500 次 |
| 每日頻寬限制 | 無限制 |
| 錯誤碼 | 503（Slow Down） |

S3 是最寬鬆的供應商。除非執行數千次小檔案操作，否則大多數使用者不會碰到速率限制。

### Dropbox

| 限制 | 數值 |
|-------|-------|
| API 呼叫 | 應用程式約每分鐘 300 次 |
| 單一工作階段上傳量 | 漸進式限速 |
| 錯誤碼 | 429 |

### Backblaze B2

| 限制 | 數值 |
|-------|-------|
| API 呼叫 | 依方案而定 |
| 並行上傳數 | 無硬性上限 |
| 頻寬 | 按用量計費，無上限 |

B2 相當寬容——速率限制很少成為問題。

## RcloneView 如何處理速率限制

### 自動重試

當 rclone 收到速率限制錯誤（429、403、503）時，它會自動：

1. 暫停受影響的傳輸。
2. 等待伺服器指定的時間（或使用指數退避演算法）。
3. 重試該操作。

你會在傳輸紀錄中看到「rate limited, waiting X seconds」這樣的訊息。

### 可設定的並行傳輸數

降低並行傳輸數以減少你的 API 請求速率：

| 供應商 | 建議並行傳輸數 |
|----------|-------------------------------|
| Google Drive | 3–4 |
| OneDrive | 4 |
| Dropbox | 3–4 |
| S3 | 8–32 |
| B2 | 8–16 |

### 頻寬限制

使用[頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)來控制資料速率，間接減少 API 呼叫次數。

### v1.3 重試失敗的傳輸

如果即使有速率限制處理機制，傳輸仍然失敗，v1.3 的重試功能可以在工作完成後重新執行失敗的檔案。

## 避開速率限制的策略

### 1) 在離峰時段傳輸

將大型傳輸排程在夜間或週末進行，此時其他使用者（以及你自己的應用程式）較少發出 API 呼叫：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers during off-hours" class="img-large img-center" />

### 2) 分散到多天進行

對於超過 Google Drive 每日 750 GB 上傳限制的搬移作業：

- 第一天：傳輸資料夾 A（500 GB）。
- 第二天：傳輸資料夾 B（500 GB）。
- 第三天：傳輸資料夾 C 並驗證全部內容。

### 3) 使用你自己的 API 憑證

Google Drive 及其他一些供應商，在你使用自己的 OAuth 應用程式憑證而非共用憑證時，允許更高的速率限制。設定你自己的 Google API 專案以取得更高的配額。

### 4) 減少檔案檢查

對於初次的大量上傳，可跳過目的地檢查。這能省去一半的 API 呼叫（也就是那些用來檢查每個檔案是否已存在的呼叫）。

### 5) 批次處理小檔案

如果你有數千個小檔案，可以考慮在傳輸前先將它們封裝成 ZIP 檔。一個 1 GB 的 ZIP 只需要 1 次 API 呼叫，而不是 10,000 次個別檔案上傳所產生的 10,000 次呼叫。

## 監控速率限制問題

觀察你的傳輸進度，留意限速的跡象：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor for rate limit errors" class="img-large img-center" />

警訊：

- 傳輸速度在一開始表現強勁後突然下降。
- 傳輸過程中出現週期性暫停。
- 紀錄中出現帶有 429 或 403 代碼的錯誤訊息。
- 傳輸速度來回震盪（快 → 慢 → 快）。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 針對你的雲端供應商**設定適當的並行傳輸數**。
3. 將大型傳輸**排程**在離峰時段。
4. **監控進度**並留意限速跡象。
5. 使用**重試功能**（v1.3）來提升可靠性。

速率限制不會消失——但只要有正確的設定，你就能穩定地在這些限制內工作。

---

**相關指南：**

- [修復 Google Drive 403 速率限制錯誤](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [設定頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
