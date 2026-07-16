---
slug: manage-terabox-cloud-sync-backup-rcloneview
title: "管理 Terabox 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - alex
description: "使用 RcloneView 管理 Terabox 雲端儲存 — 透過單一跨平台 GUI，在 90 多個服務供應商之間同步、備份與傳輸檔案，無需使用命令列。"
keywords:
  - Terabox 同步
  - Terabox 備份
  - 管理 Terabox 儲存空間
  - Terabox RcloneView
  - Terabox 雲端管理
  - Terabox 檔案傳輸
  - 將 Terabox 同步到 Google Drive
  - Terabox 雲端備份工具
  - RcloneView Terabox 指南
  - Terabox 雲端儲存管理工具
tags:
  - RcloneView
  - terabox
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Terabox 儲存空間 — 使用 RcloneView 同步與備份檔案

> 將 Terabox 連接到 RcloneView，享有完整功能的雲端管理體驗——瀏覽、同步、備份與傳輸檔案,完全不需要使用命令列。

Terabox 提供大量的免費雲端儲存空間，是儲存影片存檔、專案檔案與個人備份的熱門選擇。但要有效率地管理這些儲存空間——尤其是當你需要將檔案搬移到其他服務供應商，或安排定期備份時——就需要一套合適的工具。RcloneView 能在同一個視窗中掛載並同步 90 多個服務供應商，支援 Windows、macOS 與 Linux，讓 Terabox 自然融入你既有的多雲端工作流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Terabox 連接到 RcloneView

新增 Terabox 為遠端只需要一分鐘。開啟 RcloneView 並前往「**遠端**」分頁，點擊「**新增遠端**」。捲動服務供應商清單並選擇 Terabox，依提示輸入你的帳號憑證後儲存即可。RcloneView 會將連線資訊儲存在其內建的 rclone 設定中，因此你不必重複進行設定。

連接完成後，Terabox 會以分頁形式出現在檔案總管面板中。你可以瀏覽資料夾、建立新目錄、重新命名檔案，並檢查儲存空間使用量——全都在你用來管理其他服務供應商的相同雙面板介面中完成。麵包屑路徑列讓你能輕鬆瀏覽深層資料夾結構，不會迷失方向。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Terabox as a new remote in RcloneView" class="img-large img-center" />

## 從 Terabox 同步與備份檔案

RcloneView 的四步驟同步精靈讓你在幾分鐘內就能設定好 Terabox 備份工作。將 Terabox 設為來源，選擇任何目的地——本機資料夾、外接硬碟，或其他雲端服務供應商——並為工作命名。進階步驟可讓你調整同時傳輸數量，並啟用校驗碼驗證，確保抵達目的地的每個檔案都與原始檔案逐位元組相符。

在執行完整同步之前，先在工作管理員中執行「**試跑**」，預覽哪些檔案將被複製或移除。這在處理大型 Terabox 存檔時特別有用，因為意外刪除的代價可能相當高。確認預覽結果無誤後，即可執行工作，並在畫面底部的「傳輸中」分頁監看即時進度。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Terabox in RcloneView" class="img-large img-center" />

## 將 Terabox 檔案傳輸到其他雲端

一個常見的使用情境是將內容從 Terabox 遷移到區域資料留存更嚴格，或傳出成本更低的服務供應商。透過並排開啟的兩個遠端檔案總管面板，你可以直接將檔案從 Terabox 拖曳到 Amazon S3、Google Drive、Backblaze B2，或 RcloneView 支援的其他任何服務供應商。在不同遠端之間拖放一律是複製而非移動，因此在你決定清理之前，Terabox 上的原始檔案都會保持完整。

若要進行更大規模的遷移，可建立專屬的複製或同步工作。RcloneView 在免費授權下即支援 1:N 同步，也就是說你可以在一次工作執行中，將單一 Terabox 資料夾推送到多個目的地——當你同時需要主要備份與冷存檔副本時非常實用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Terabox to another provider" class="img-large img-center" />

## 檢視工作紀錄與監控傳輸狀態

每次執行完畢後，RcloneView 都會將結果記錄在「**工作紀錄**」中。你可以依日期範圍篩選，查看工作是完成、發生錯誤還是被取消，並檢視總傳輸位元組數與傳輸速度。對於管理跨多個工作流程的大型 Terabox 資料庫的使用者而言，這份稽核紀錄對於發現異常狀況非常有價值——錯誤次數突然飆升，往往代表配額限制或網路問題，值得深入調查。

PLUS 授權持有者可以為任何 Terabox 工作附加類似 cron 的排程，並在完成時啟用通知，讓備份真正做到完全自動化、無需人工介入。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing Terabox sync results in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟「**遠端**」分頁並點擊「**新增遠端**」，選擇 Terabox 並輸入你的憑證。
3. 在檔案總管面板中瀏覽你的 Terabox 資料夾，找出想要備份或傳輸的內容。
4. 使用四步驟精靈建立同步或複製工作，執行試跑以驗證計畫，然後執行工作。

一套設定妥當的 Terabox 備份，只需幾分鐘即可完成設定，並讓你完全放心，你儲存的內容無論在何處都能安全地被複製保存。

---

**相關指南：**

- [使用 RcloneView 將 Terabox 免費儲存空間同步到其他雲端](https://rcloneview.com/support/blog/sync-terabox-free-storage-other-clouds-rcloneview)
- [管理 MEGA 雲端儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [使用 RcloneView 進行雲端到雲端遷移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
