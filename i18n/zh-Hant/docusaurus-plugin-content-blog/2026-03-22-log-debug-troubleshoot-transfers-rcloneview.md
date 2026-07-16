---
slug: log-debug-troubleshoot-transfers-rcloneview
title: "記錄與偵錯雲端傳輸——在 RcloneView 中疑難排解問題"
authors:
  - tayson
description: "掌握 RcloneView 的記錄與偵錯功能以診斷傳輸問題。學習如何讀取日誌、啟用偵錯模式，並有系統地解決雲端同步問題。"
keywords:
  - cloud transfer logs
  - debug mode transfer issues
  - transfer troubleshooting
  - rcloneview logging
  - debug cloud sync
  - transfer error diagnosis
  - rclone logging configuration
  - troubleshoot cloud transfers
tags:
  - feature
  - troubleshooting
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 記錄與偵錯雲端傳輸——在 RcloneView 中疑難排解問題

> 傳輸失敗會讓使用者感到挫折，但難以理解的錯誤訊息更令人苦惱。RcloneView 完善的記錄與偵錯功能能準確揭露問題所在以及解決方法。

檔案傳輸中途停止，只留下一則神秘的逾時訊息。同步工作回報成功，但檔案其實仍未同步。你排程的備份悄悄地錯過了執行時段。若無法掌握實際發生的狀況，疑難排解就只能靠猜測。RcloneView 的記錄與偵錯功能能將模糊不清轉化為清晰明瞭，準確顯示哪些檔案成功、哪些失敗，以及失敗的確切原因。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中啟用偵錯模式

偵錯模式會揭露 RcloneView 與 rclone 執行的每一項操作。你可以透過偏好設定選單存取：Logging > Debug Level，然後設為「DEBUG」。這會以最高詳細程度擷取網路請求、驗證流程、檔案比對與權限檢查。

啟用後，RcloneView 的日誌會記錄每一筆交易。現在執行你有問題的傳輸工作。每一次 API 呼叫、檔案檢查與判斷都會被記錄下來。這種詳盡程度有助於診斷細微的問題：驗證時機問題、權限拒絕、供應商特有的 API 怪異行為、特定時間點的網路故障。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView preferences and logging configuration" class="img-large img-center" />

## 讀取與解讀 RcloneView 日誌

RcloneView 會將日誌儲存在你的使用者設定目錄中。在 Windows 上，可於 `%APPDATA%/RcloneView/logs/` 中找到；在 Linux/Mac 上，則位於 `~/.config/rcloneview/logs/`。每個工作都會建立一個帶有時間戳記的日誌檔。用任何文字編輯器開啟相關的日誌檔即可。

需要檢查的重點區段：「Authentication」顯示憑證是否正確運作。「File Enumeration」揭露 RcloneView 發現了哪些檔案及其屬性。「Transfer」日誌顯示個別檔案的上傳／下載情況，包含位元組數與所耗時間。「Errors」區段會標示出問題：權限遭拒、配額不足、校驗碼不符、逾時發生等。

搜尋與你的問題相符的關鍵字。想找逾時錯誤？搜尋「timeout」或「deadline exceeded」。要調查權限失敗？搜尋「permission denied」或「access denied」。大多數錯誤會持續重複出現，在同一次傳輸中出現多次。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing detailed transfer records" class="img-large img-center" />

## 進階偵錯：詳細模式與追蹤記錄

當標準偵錯模式的細節不足時，可以在偵錯等級之外另外啟用詳細模式（Logging > Verbose）。詳細模式會輸出 HTTP 標頭、請求內文與原始的 API 回應。在調查供應商特有的問題時可使用此功能：為什麼 Google Drive 會拒絕這個檔案？為什麼 S3 會對你的傳輸進行速率限制？

若要進行專家級診斷，可啟用 Trace 模式（最高的記錄等級）。Trace 會擷取每一次系統呼叫、記憶體操作以及網路封包的細節。這會使日誌檔案迅速暴增，但能揭露網路堆疊或檔案系統互動中的深層問題。請將追蹤模式保留給在受控條件下可重現的問題使用。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job configuration with logging options" class="img-large img-center" />

## 日誌揭露的常見問題

日誌能精準指出反覆發生的問題。「Insufficient quota」錯誤代表你的雲端供應商儲存空間已滿。「Rate limit exceeded」代表你觸及了 API 呼叫限制——請減少平行執行緒數量，或增加請求之間的間隔。「Checksum mismatch」顯示傳輸過程中發生檔案損毀，或供應商快取出現問題。

網路逾時會以「context deadline exceeded」或「connection reset by peer」的形式出現——請提高逾時數值，或降低傳輸速度。權限錯誤「403 Forbidden」代表憑證問題或資料夾權限不足。只要讀懂日誌，每一種錯誤類型都對應著特定的解決方案。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView real-time transfer monitoring with detailed metrics" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 Preferences > Logging > Debug Level 啟用偵錯模式。
3. 執行你有問題的傳輸工作，讓它自然失敗。
4. 開啟對應的日誌檔，搜尋錯誤關鍵字以找出根本原因。

不要再把傳輸失敗當作神秘的黑盒子。RcloneView 的記錄功能能將疑難排解從令人沮喪的過程，轉變為有系統的問題解決方式。答案就在日誌裡——你只需要知道該往哪裡找。

---

**相關指南：**

- [修復緩慢的雲端傳輸——在 RcloneView 中優化速度](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [修復雲端同步卡住或無回應——在 RcloneView 中解決傳輸停滯問題](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)
- [修復雲端 API 速率限制錯誤——在 RcloneView 中解決供應商節流問題](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
