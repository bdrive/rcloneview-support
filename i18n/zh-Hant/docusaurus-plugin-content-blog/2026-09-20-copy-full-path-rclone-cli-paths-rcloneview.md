---
slug: copy-full-path-rclone-cli-paths-rcloneview
title: "複製完整路徑 — 在 RcloneView 中即時取得 Rclone 可用路徑"
authors:
  - jay
description: "了解 RcloneView 的複製完整路徑功能如何將任意路徑列一鍵轉換為可直接使用的 rclone CLI 路徑。"
keywords:
  - copy full path rclone
  - rclone cli path format
  - breadcrumb path bar
  - rclone remote path syntax
  - RcloneView terminal
  - cloud file path copy
  - rclone command line paths
  - GUI to CLI workflow
  - cloud storage path management
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 複製完整路徑 — 在 RcloneView 中即時取得 Rclone 可用路徑

> 不用再手動重新輸入遠端名稱和資料夾路徑 —— 直接複製到終端機即可。

同時使用 RcloneView 圖形介面與 rclone 命令列的人都很清楚這種麻煩:先在介面中視覺化找到某個資料夾,接著還得手動重新拼出路徑,才能執行 `rclone copy` 或 `rclone check` 指令。RcloneView 透過複製完整路徑功能徹底省去這個步驟——在路徑列上按一次右鍵,就能複製出 rclone 所期望的正確 remote:path 字串。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 複製完整路徑的運作方式

RcloneView 的每個檔案總管面板在檔案清單上方都有一個路徑列,顯示該分頁中目前啟用遠端的資料夾層級。在路徑列上任意位置按右鍵,會開啟包含剪下、複製、貼上、全選,以及——最重要的——複製完整路徑(含遠端)的右鍵選單。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar showing a connected remote folder" class="img-large img-center" />

選擇此選項後,系統會將類似 `mygoogledrive:Meet recordings` 的字串複製到剪貼簿,格式與 rclone CLI 所期望的完全一致。圖形介面看到的內容與命令列中 rclone 所需要的內容之間無需手動轉換——遠端名稱、冒號和資料夾路徑,包括巢狀子資料夾,都會正確無誤地帶過來。

當你設定了不只幾個遠端時,這項功能的價值就更加明顯。遠端名稱——尤其是為 S3 相容端點或 SFTP 伺服器設定的名稱——未必好記,而雲端硬碟上的資料夾結構也可能巢狀很多層。複製完整路徑省去了這種猜測。

## 在 CLI 工作流程中的應用

複製路徑後,可以直接貼到 RcloneView 內建的 Rclone 終端機——位於底部資訊檢視的終端機分頁——針對該確切位置執行 `rclone size` 或 `rclone lsf` 等臨時指令。與僅支援掛載的工具不同,RcloneView 在同一個 FREE 授權下還提供同步與資料夾比較功能,因此終端機、同步工作與檔案總管都會參照相同的遠端,不必重複輸入憑證。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView terminal tab used alongside the file explorer" class="img-large img-center" />

複製的路徑在 RcloneView 之外同樣適用——只要是指向同一個 `rclone.conf` 檔案的獨立 rclone 安裝,都能直接使用——這在撰寫排程工作指令碼或偵錯遠端伺服器上的同步作業時很有幫助。

## 實際案例

假設某個影片製作團隊將原始素材分別儲存在 Google Drive 與一個 S3 相容的封存儲存貯體中。與其手動輸入 `s3archive:projects/2026/client-x/raw`——並冒著因打字錯誤而悄悄指向錯誤資料夾的風險——剪輯人員可以直接在介面中導覽過去,右鍵點擊路徑列,在啟動大量傳輸之前複製出用於驗證指令的正確路徑。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView file explorer with a deeply nested cloud folder open" class="img-large img-center" />

## 快速開始

1. **從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載 RcloneView**
2. 透過 Remote Manager 連接你最常用的遠端。
3. 導覽至任意資料夾,右鍵點擊其路徑列。
4. 選擇複製完整路徑(含遠端),然後貼到 Rclone 終端機或任意命令列中。

像這樣的小便利,在你每天於視覺化檔案總管與原始 rclone 指令之間切換時,會不斷累積價值。

---

**相關指南:**

- [RcloneView 終端機 — GUI 內的 Rclone CLI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [自訂 Rclone 參數 — RcloneView 中的進階選項](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)
- [使用 RcloneView 進行拖放式雲端傳輸指南](https://rcloneview.com/support/blog/drag-drop-cloud-transfer-guide-rcloneview)

<CloudSupportGrid />
