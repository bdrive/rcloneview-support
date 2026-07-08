---
slug: fix-cloud-sync-interrupted-network-retry-rcloneview
title: "修復因網路錯誤中斷的雲端同步——使用 RcloneView 重試與恢復"
authors:
  - tayson
description: "了解如何在 RcloneView 中恢復因網路中斷而中止的雲端同步工作。使用重試設定、工作歷史記錄重新執行，以及模擬執行（Dry Run）來驗證中斷後的狀態。"
keywords:
  - cloud sync interrupted network RcloneView
  - resume interrupted sync rclone
  - fix network error cloud sync
  - retry cloud sync RcloneView
  - cloud backup network drop fix
  - interrupted transfer recovery
  - rclone network retry settings
  - RcloneView sync resume
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復因網路錯誤中斷的雲端同步——使用 RcloneView 重試與恢復

> 同步過程中的網路中斷令人沮喪，但並非災難性問題——RcloneView 的重試機制與工作歷史記錄重新執行功能，能讓您的傳輸重回正軌。

同步過程中發生網路中斷是現實中常見的情況，尤其是在家用網路連線、VPN 或計量計費連線上進行的長時間傳輸。當同步工作進行期間連線中斷時，已經傳輸完成的檔案是安全的——但您需要知道哪些已完成、哪些失敗，以及該如何正確恢復。RcloneView 提供了重試設定、從歷史記錄重新執行工作，以及模擬執行（Dry Run）驗證等功能，能乾淨俐落地處理這種情況。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 網路中斷時會發生什麼事

當同步工作進行期間網路連線中斷時，rclone（RcloneView 背後的引擎）會依照該工作的重試設定，嘗試重試失敗的操作。如果網路在重試時限內沒有恢復，該工作就會回報為失敗。中斷前已成功傳輸的檔案會保留在目的地——它們不會損毀，但下次執行時也不會被不必要地重新傳輸。

關鍵在於理解 RcloneView 的同步工作具有冪等性：重新執行同步工作時，會比對來源與目的地，只傳輸缺少或已變更的內容。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing an interrupted sync in RcloneView" class="img-large img-center" />

## 設定重試行為

在 RcloneView 中，開啟您的同步工作並前往步驟 2（傳輸選項）。尋找重試設定：

- **失敗時重試整個同步**：啟用此選項後，若有任何傳輸失敗，會自動重新執行整個同步。預設為重試 3 次。
- **低階重試次數**：控制個別檔案傳輸在被標記為失敗之前會被重試的次數（預設：10 次）
- **失敗時重試**：確保暫時性錯誤（包括網路逾時）會觸發帶有退避機制的自動重試

對於連線不穩定的同步工作，將**重試整個同步**設為 5，並保持**低階重試次數**為 10，能提供相當可觀的韌性。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring retry settings in RcloneView job options" class="img-large img-center" />

## 從工作歷史記錄恢復

如果工作在重試後仍然失敗，請前往**工作歷史記錄**並找到失敗的執行紀錄。該歷史記錄項目會顯示已傳輸的檔案數量與失敗的檔案數量。點擊**重新執行**——RcloneView 會以相同設定再次啟動同一項工作。由於同步會比對來源與目的地的狀態，已傳輸的檔案會被跳過，只會處理剩餘或失敗的檔案。

這比從頭開始快得多，也能避免重複上傳已安全抵達目的地的資料。

## 使用模擬執行（Dry Run）驗證狀態

在網路中斷後，您可能無法確定目前的同步狀態——尤其是當中斷發生在傳輸大型檔案的過程中時。在該工作上啟用**模擬執行（Dry Run）**並重新執行。模擬執行會顯示下一次執行時會傳輸哪些內容，而不會實際搬移任何檔案。這能讓您在進行真正的同步之前，清楚掌握還剩下多少檔案待處理。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Using Dry Run to verify sync state after network interruption" class="img-large img-center" />

## 處理大型檔案中斷

對於非常大的個別檔案（數 GB）傳輸，若在檔案傳輸過程中發生網路中斷，該檔案在下次執行時會被完整重新傳輸（除非雲端供應商支援可續傳上傳，以及 rclone 的分塊傳輸模式）。為了將大型檔案的重新傳輸開銷降到最低，請在支援此功能的服務（S3 相容供應商、Google Drive）的工作進階設定中啟用**分塊上傳**。這能讓部分上傳從最後完成的區塊繼續進行。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟您的同步工作設定，並啟用**失敗時重試整個同步**，設定重試 3 到 5 次。
3. 在網路中斷導致工作失敗後，前往**工作歷史記錄**並使用**重新執行**來恢復。
4. 在進行最終重新執行前，使用**模擬執行（Dry Run）**驗證剩餘的傳輸範圍。

只要有適當的重試設定與工作歷史記錄重新執行功能，網路中斷就只是個小麻煩，而不會演變成同步失敗。

---

**相關指南：**

- [使用 RcloneView 恢復中斷與失敗的傳輸](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [工作歷史記錄與傳輸日誌監控](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [使用 RcloneView 排解 rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
