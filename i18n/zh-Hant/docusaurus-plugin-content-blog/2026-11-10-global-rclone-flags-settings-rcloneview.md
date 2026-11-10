---
slug: global-rclone-flags-settings-rcloneview
title: "全域 Rclone 旗標 — 為 RcloneView 中的每個作業套用自訂選項"
authors:
  - alex
description: "透過 RcloneView 的 Global Rclone Flags 全域套用額外的 rclone 選項,並了解記錄、設定密碼與執行檔路徑設定。"
keywords:
  - rclone 全域旗標
  - RcloneView 設定
  - rclone 旗標 GUI
  - 內建 rclone 設定
  - no-check-certificate
  - rclone 記錄層級
  - rclone 設定密碼
  - 自訂 rclone 執行檔
  - RcloneView 進階設定
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 全域 Rclone 旗標 — 為 RcloneView 中的每個作業套用自訂選項

> 在設定中一次指定 rclone 旗標,即可套用於整個 RcloneView,無需逐一作業重複設定。

有些環境需要在所有地方加入一個額外的 rclone 選項,例如私人伺服器上的自簽憑證、自訂記錄位置或加密的設定檔。這些選項都位於 Embedded Rclone 設定頁面。RcloneView 可在單一視窗中掛載並同步 90 多個提供者,支援 Windows、macOS 和 Linux,這些設定適用於整個內建引擎。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定位置

開啟 Settings 分頁並選擇 Embedded Rclone。您會看到 rclone 執行檔位置、rclone.conf 位置、預設下載與上傳資料夾、Stop rclone on App Exit 開關、記錄選項、Config Password 欄位以及 Global Rclone Flags 輸入框。

Embedded Rclone 預設監聽 `http://127.0.0.1:5582`,RcloneView 透過 rclone RC API 與其通訊。變更這些設定會改變該引擎的啟動方式,因此編輯後請重新啟動 Embedded Rclone。

<img src="/support/images/en/blog/new-remote.png" alt="使用內建 rclone 設定的 RcloneView 遠端設定" class="img-large img-center" />

## 使用 Global Rclone Flags

Global Rclone Flags 欄位接受適用於全域的額外 rclone 旗標。文件中的範例是 `--no-check-certificate`,當 WebDAV 或以 HTTPS 為基礎的伺服器使用自簽憑證時很實用。請謹慎使用:它會停用憑證驗證,因此應僅用於受信任的私人伺服器,而非公開端點。

調整單一作業時,建議使用作業層級的 Advanced Settings(傳輸數、檢查器數、校驗碼、重試次數)。全域旗標只用於確實適用於所有情境的選項。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView 中與全域旗標互補的作業設定" class="img-large img-center" />

## 記錄與設定保護

勾選 Enable rclone Logging,選擇記錄資料夾與檔名,並選擇層級:DEBUG、INFO、NOTICE 或 ERROR。DEBUG 最為詳細,回報問題時支援團隊通常會要求提供此層級的記錄。點擊 Restart Embedded Rclone,重現問題,然後傳送記錄檔。

如果您的 rclone.conf 已加密,請在此輸入 Config Password,讓內建引擎能讀取您的遠端。您也可以讓 RcloneView 使用自訂 rclone 執行檔或設定路徑,應用程式內的 Self Update 可讓內建 rclone 保持最新。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中搭配 rclone 記錄使用的 Job History" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView**:請從 [rcloneview.com](https://rcloneview.com/src/download.html) 取得。
2. 依序開啟 Settings 和 Embedded Rclone,檢查目前的路徑。
3. 將所需旗標加入 Global Rclone Flags,若需要紀錄可啟用記錄功能。
4. 重新啟動 Embedded Rclone 並執行一個小型測試作業。

精心挑選的幾項全域設定,可讓每個作業保持一致,而無需額外點擊。

---

**相關指南:**

- [Log Debug:排解傳輸問題](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)
- [RcloneView 中的 Rclone Self Update](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)
- [修正 SSL/TLS 憑證錯誤](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
