---
slug: fix-embedded-rclone-crash-restart-rcloneview
title: "修復內建 Rclone 當機 — 使用 RcloneView 重新啟動與復原"
authors:
  - tayson
description: "透過重新啟動步驟、記錄檔與外部 rclone 備援方案，排解 RcloneView 中內建 rclone 連線中斷的問題。"
keywords:
  - 內建rclone當機
  - rclone連線中斷
  - RcloneView疑難排解
  - 重新啟動內建rclone
  - rclone rc api錯誤
  - rclone記錄檔
  - 外部rclone連線
  - rcloneview無法連線
  - rclone自我更新
  - 修復rclone錯誤
tags:
  - RcloneView
  - troubleshooting
  - tips
  - reference
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復內建 Rclone 當機 — 使用 RcloneView 重新啟動與復原

> 當頁尾顯示「已中斷連線」而非版本號碼時，代表內建 rclone 引擎已停止回應 —— 以下說明如何在不遺失工作記錄的情況下將其復原。

RcloneView 內建了一個 rclone 執行檔，透過本機 API 位址（預設為 `http://127.0.0.1:5582`）與應用程式通訊。多數時候這個連線是不可見的 —— 你幾乎不會注意到它，因為它一直正常運作。但如果內建處理程序因作業系統資源限制、衝突的本機防火牆規則或損毀的設定鎖定而被終止，頁尾的連線資訊將不再顯示版本，Explorer 面板中的所有遠端也會同時停止回應。這代表你遇到的是內建 rclone 當機，而非單一遠端的驗證問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 確認是內建引擎問題，而非單一遠端問題

最快的區分方式是：若只有一個分頁或遠端無法載入，而其餘面板都正常運作，那就是特定遠端的問題 —— 例如 OAuth 權杖失效、憑證錯誤或服務商故障。若每個面板中的每個遠端同時停止回應，且頁尾的 rclone 版本消失，那就是內建處理程序本身已停止。請檢查 Settings 分頁 > Embedded Rclone；若版本欄位空白或顯示錯誤，即可確認此狀況。

RcloneView 可在單一視窗中跨 Windows、macOS 及 Linux 掛載並同步 90 多個服務商，而這一切都透過這個單一內建處理程序執行，這正是為何此處發生的當機看起來像是全面中斷，而非特定服務商的錯誤。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView settings tab showing embedded rclone connection status" class="img-large img-center" />

## 重新啟動內建處理程序

前往 Settings 分頁 > Embedded Rclone，使用其中的重新啟動控制項 —— 這會重新啟動內建的執行檔，而不需要結束並重新開啟 RcloneView 本身。當機發生當下正在傳輸的工作，會在 Job History 中顯示為 Errored 而非 Completed，因此請事後檢查並重新執行任何未完成的工作；RcloneView 的 Retry entire sync if fails 設定（位於每項工作的 Advanced Settings 步驟中）有助於在日後執行時自動吸收此類中斷。

若重新啟動持續失敗，請檢查 Settings > Embedded Rclone > Local Rclone location 下的 rclone 執行檔路徑。指向已移動、已刪除或遭防毒軟體隔離之執行檔的路徑，即使點擊重新啟動按鈕，也會阻止處理程序啟動。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling and retry settings" class="img-large img-center" />

## 為反覆發生的當機開啟記錄功能

單次的當機通常不需要深入調查，但反覆發生的當機則不同。在 Settings > Embedded Rclone 中開啟 Enable rclone Logging，將 Log level 設為 DEBUG，然後重新啟動內建處理程序以建立新的記錄檔。重現當機後，檢查底部 Info View 中的 Log 分頁，或直接查看 Log folder 設定路徑下的記錄檔。若需要協助解讀，RcloneView 支援團隊可透過 rcloneview@bdrive.com 接收記錄檔 —— 由於確切的錯誤行才是關鍵，請附上 DEBUG 等級的完整記錄檔，而非摘要。

同時請確認同一設定區塊中的 Global Rclone Flags 欄位，沒有殘留先前疑難排解時遺留的雜散或不相容旗標 —— 無效的旗標可能導致內建處理程序每次都無法正常啟動。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing errored jobs after a connection interruption" class="img-large img-center" />

## 回退至外部 Rclone 執行個體

若內建引擎在特定機器上持續當機 —— 通常發生在資源受限的硬體上 —— 你可以改讓 RcloneView 連接至外部 rclone 執行個體。在終端機中執行 `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`，接著使用該位址與憑證，在 Settings 分頁 > Connect Manager > New Connection 中新增連線。如此可將 rclone 處理程序的生命週期與 RcloneView 應用程式脫鉤，讓 GUI 問題不會拖垮你的傳輸引擎，反之亦然。

## 快速上手

1. 若需要全新安裝，請至 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 檢查 Settings > Embedded Rclone 中版本欄位是否空白，以確認是否發生當機。
3. 使用重新啟動控制項，接著在 Job History 中檢視標記為 Errored 的工作。
4. 若當機反覆發生，請開啟 DEBUG 記錄功能；若問題持續，請切換至外部 rclone 連線。

當機的內建處理程序看起來令人擔憂，因為所有遠端會同時失去回應，但解決方法幾乎總是重新啟動一次即可 —— 而記錄功能能讓下次發生問題時，從一頭霧水變成一行就能診斷清楚。

---

**相關指南：**

- [修復 Rclone 設定密碼錯誤 — 使用 RcloneView 解決加密設定問題](https://rcloneview.com/support/blog/fix-rclone-config-password-errors-rcloneview)
- [修復 Rclone 傳輸時的高記憶體與 CPU 使用率 — 使用 RcloneView](https://rcloneview.com/support/blog/fix-rclone-high-memory-cpu-usage-rcloneview)
- [Rclone 自我更新 — 在 RcloneView 中保持內建引擎為最新版本](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)

<CloudSupportGrid />
