---
slug: migrate-onedrive-to-backblaze-b2-rcloneview
title: "使用 RcloneView 將 OneDrive 遷移至 Backblaze B2，實現實惠的雲端備份"
authors:
  - tayson
description: "透過 RcloneView 將 OneDrive 檔案遷移至 Backblaze B2，降低儲存成本。這份逐步指南教您如何將個人或企業資料搬移到更便宜的 S3 相容儲存空間。"
keywords:
  - migrate onedrive to backblaze b2
  - onedrive to b2 migration
  - rcloneview onedrive backblaze
  - move onedrive to backblaze b2
  - rclone onedrive backblaze b2
  - onedrive cheaper storage alternative
  - backblaze b2 from onedrive
  - cloud storage cost reduction
  - onedrive backup to b2
  - transfer onedrive backblaze
tags:
  - RcloneView
  - onedrive
  - backblaze-b2
  - cloud-migration
  - migration
  - backup
  - cost-optimization
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 OneDrive 遷移至 Backblaze B2，實現實惠的雲端備份

> OneDrive 的儲存費用會逐漸累積——尤其是對於存有大量歸檔資料的團隊或擁有數 TB 資料的個人用戶而言。Backblaze B2 提供 S3 相容的物件儲存服務,價格僅為 OneDrive 的一小部分。RcloneView 讓遷移過程變得輕鬆簡單。

OneDrive 對於即時協作來說相當方便,但對於長期歸檔、冷備份或大型媒體收藏而言,並非最具成本效益的選擇。以每月每 GB 約 $0.006 美元計算,Backblaze B2 對於不常存取的資料而言,遠比 OneDrive 的按使用者收費方案便宜許多。將歸檔資料從 OneDrive 遷移到 Backblaze B2——同時將常用的工作檔案保留在 OneDrive 中——是一個聰明的成本優化策略,而 RcloneView 讓您無需任何命令列知識就能完成這項任務。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什麼時候適合進行這項遷移?

- 您的 Microsoft 365 儲存配額已用盡,但不想升級方案。
- OneDrive 中存放著大量您很少存取的媒體歸檔(相片、影片、專案檔案)。
- 您打算將 Backblaze B2 作為主要備份目的地,取代 OneDrive。
- 您需要具備原生 rclone 支援、且跨區域傳輸無需支付出口費用的 S3 相容儲存空間。

## 費用比較:OneDrive vs Backblaze B2

| 儲存空間 | 每月 1 TB | 每月 5 TB |
|---------|-----------|-----------|
| OneDrive(Microsoft 365) | 約 $9.99 美元/使用者 | 約 $50 美元以上(依使用者限制) |
| Backblaze B2 | 約 $6.00 美元 | 約 $30.00 美元 |

對於歸檔資料量大的用戶而言,Backblaze B2 可以將儲存費用降低 40% 至 60%。

## 步驟 1 — 在 RcloneView 中連接 OneDrive

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive in RcloneView" class="img-large img-center" />

1. 開啟 RcloneView 並點選 **New Remote**。
2. 選擇 **Microsoft OneDrive**。
3. 點選 **Authorize**——會開啟瀏覽器視窗進行 Microsoft OAuth 驗證。
4. 登入並授予存取權限。
5. 選擇您的 OneDrive 類型(Personal、Business 或 SharePoint),並將遠端儲存為 `onedrive`。

## 步驟 2 — 在 RcloneView 中連接 Backblaze B2

1. 登入 [Backblaze 控制台](https://www.backblaze.com),前往 **App Keys**。
2. 建立一個對目標儲存桶擁有**讀寫**權限的新應用程式金鑰。
3. 記下 **keyID** 和 **applicationKey**。
4. 在 RcloneView 中,新增一個類型為 **Backblaze B2** 的遠端。
5. 輸入 keyID 和 applicationKey,將其命名為 `b2` 並儲存。

## 步驟 3 — 建立目標儲存桶

在 Backblaze B2 中,先建立遷移的目標儲存桶:

- **儲存桶名稱**:選擇一個唯一名稱(例如 `onedrive-archive-2026`)
- **儲存桶類型**:Private(適用於個人備份)或 Public(適用於媒體傳遞)
- **版本控制**:可選——可讓您復原被覆寫的檔案

## 步驟 4 — 執行遷移

在 RcloneView 中開啟 **Jobs** 並設定:

| 設定項目 | 值 |
|---------|-------|
| 來源 | `onedrive:/Archives/`(或您要遷移的任何資料夾) |
| 目的地 | `b2:onedrive-archive-2026/` |
| 模式 | **Copy**(在確認完成前保留 OneDrive 副本) |
| 傳輸數 | 4–8 個並行傳輸(依您的頻寬調整) |
| 檢查碼 | 已啟用 |

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transfer OneDrive to Backblaze B2 in progress" class="img-large img-center" />

點選 **Run**。RcloneView 會顯示逐檔案的進度、傳輸速度以及預估完成時間。

## 步驟 5 — 使用資料夾比較功能驗證遷移結果

工作完成後,使用 RcloneView 的**資料夾比較(Folder Comparison)**功能來確認每個 OneDrive 檔案都已成功傳輸至 B2:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive to B2 migration" class="img-large img-center" />

任何差異都會以醒目方式標示出來。重新執行該工作——rclone 會跳過已存在的檔案,只重新傳輸遺漏的部分。

## 步驟 6 — 排程持續備份(選用)

如果您希望之後將 B2 作為 OneDrive 的即時備份:

1. 將工作模式從 Copy 切換為 **Sync**。
2. 開啟 **Schedule**,設定一個重複執行的時間間隔(例如每晚凌晨 2 點)。
3. 新增或變更的 OneDrive 檔案將會自動備份到 B2。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to B2 backup" class="img-large img-center" />

## 大型 OneDrive 遷移的小技巧

- **依資料夾分批遷移**——將大型帳戶拆分成 100–500 GB 的區塊。
- **避開尖峰時段**——在高負載情況下,Microsoft 會對 OneDrive API 存取進行限速。
- **使用頻寬限制**——在 RcloneView 中設定限制,避免在工作時間影響日常業務。
- **保留 OneDrive 資料**——在 B2 驗證完成前,請勿刪除 OneDrive 中的檔案。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 RcloneView 的設定精靈**新增 OneDrive 和 Backblaze B2** 遠端。
3. 在 Backblaze 控制台中**建立您的 B2 儲存桶**。
4. **複製、驗證,然後決定**是要繼續將 OneDrive 作為使用中的儲存空間,還是完全轉換至 B2。

減少對 Microsoft 的依賴、降低成本,並具備 S3 相容性——Backblaze B2 是存放 OneDrive 歸檔資料的絕佳選擇。

---

**相關指南:**

- [將 Dropbox 備份至 Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [將 Google Drive 遷移至 OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [隱藏的雲端儲存成本——使用 RcloneView 省錢](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
