---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "如何使用 RcloneView 將所有 Google 相簿備份到外接硬碟或 NAS"
authors:
  - tayson
description: "使用 RcloneView，自動下載並備份你完整的 Google 相簿資料庫到外接硬碟、NAS 或另一個雲端儲存——不遺失相簿結構。"
keywords:
  - google photos backup
  - download all google photos
  - google photos to external drive
  - google photos to nas
  - backup google photos automatically
  - google photos to hard drive
  - google photos rclone
  - google photos sync nas
  - save google photos locally
  - google photos export alternative
tags:
  - google-photos
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 將所有 Google 相簿備份到外接硬碟或 NAS

> Google 相簿儲存著你的回憶，但如果帳號被鎖定、儲存空間用盡，或 Google 變更政策時該怎麼辦？本地備份能確保這些照片永遠屬於你。

Google 相簿很方便——直到出問題為止。儲存空間限制、帳號停權以及政策變更，都可能威脅到你多年來無可取代的照片與影片的存取權。Google Takeout 雖然存在，但速度極慢、在大型資料庫上經常失敗,而且不支援增量更新。

RcloneView 提供更好的方式：直接連接 Google 相簿、以視覺化方式瀏覽你的資料庫，並將所有內容同步到外接硬碟、NAS 或另一個雲端——搭配自動排程，未來的新照片也能一併備份。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要在本地備份 Google 相簿？

### Google Takeout 並不足夠

Google Takeout 可以匯出照片，但有明顯的限制：

- **速度慢且不穩定**——大型資料庫經常在匯出過程中失敗,必須重新開始。
- **無增量更新**——每次匯出都是完整傾印。這個月新增了 500 張照片？就得重新匯出所有內容。
- **ZIP 壓縮檔格式**——你會拿到數十個 ZIP 檔案,需要手動解壓縮與整理。
- **無自動化**——每次都是完全手動的流程。

### 純雲端儲存的真實風險

- **超過儲存配額**——一旦達到 15 GB（與 Gmail 及雲端硬碟共用），Google 就會開始提示你刪除檔案或付費。
- **帳號被鎖定**——即使是無心的政策違規，也可能凍結你整個 Google 帳號。
- **服務變更**——Google 過去曾停止提供某些產品（Google+、Picasa）。你的資料策略應該考慮到這一點。

將資料備份到外接硬碟或 NAS 能讓你擁有一份獨立副本，不受任何政策變更影響。

## 將 Google 相簿設定為遠端

### 步驟 1：在 RcloneView 中新增 Google 相簿

開啟 RcloneView 並建立新的遠端：

1. 在遠端管理器中點選 **Add Remote** 按鈕。
2. 從提供者清單中選擇 **Google Photos**。
3. 依照 OAuth 驗證流程——RcloneView 會開啟你的瀏覽器以授權存取。
4. 授權完成後，你的 Google 相簿資料庫就會以可瀏覽遠端的形式呈現。

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Photos as a remote in RcloneView" class="img-large img-center" />

### 步驟 2：瀏覽你的照片資料庫

連接完成後,你可以直接在 RcloneView 的[檔案總管](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)中瀏覽你的 Google 相簿資料庫。Google 相簿以下列方式組織檔案：

- **年份/月份資料夾**——照片依 `media/by-year/2024/01` 這樣的路徑格式排列。
- **相簿**——你的相簿會顯示為 `album` 路徑下的個別資料夾。
- **共用相簿**——可在 `shared-album` 下存取。

這讓你在開始傳輸之前,能清楚確認自己究竟要備份什麼內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Photos library in RcloneView Explorer" class="img-large img-center" />

## 備份策略 1：Google 相簿 → 外接硬碟

最簡單的做法——將所有內容複製到透過 USB 連接的外接硬碟。

### 如何設定

1. **連接你的外接硬碟**,並記下磁碟機代號（Windows）或掛載點（Mac/Linux）。
2. 在 RcloneView 中**建立複製工作**：
   - **來源**：你的 Google 相簿遠端（選擇 `media/by-year` 資料夾以取得所有照片）
   - **目的地**：你的外接硬碟路徑（例如 `E:\Google Photos Backup`）
3. **執行工作**——RcloneView 會下載所有照片與影片,同時保留資料夾結構。

### 建議設定

- **並行傳輸數**：4–6（Google 相簿 API 有速率限制）
- **工作類型**：複製（而非同步——你不會希望在從 Google 相簿刪除照片時,連本地檔案也一併被刪除）

### 增量更新

完成初次備份後,後續執行只會下載新照片。RcloneView 會比對硬碟上已有的內容,並跳過已存在的檔案。這能將耗時數小時的首次備份,轉變為快速的每日更新。

## 備份策略 2：Google 相簿 → Synology NAS

對於使用 Synology NAS 的使用者,RcloneView 提供更整合的體驗。自 v1.0 起,Synology NAS 裝置會在你的網路上被[自動偵測](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)。

### 如何設定

1. **啟動 RcloneView**——你的 Synology NAS 應該會自動出現在「本地」標籤中。
2. **建立複製工作**：
   - **來源**：Google 相簿遠端
   - **目的地**：NAS 上的共用資料夾（例如 `/photos/google-backup`）
3. 使用[工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)**排定工作**每日或每週執行。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection for Google Photos backup" class="img-large img-center" />

### 為什麼 NAS 是照片備份的理想選擇

- **全天候運作**——與外接硬碟不同,你的 NAS 隨時保持連線並待命。
- **RAID 保護**——大多數 NAS 設定都採用 RAID,以防止磁碟故障造成的資料損失。
- **隨處存取**——從網路上的任何裝置檢視你已備份的照片。
- **次要雲端備份**——使用另一個 RcloneView 工作,將 NAS 同步到 S3 或 Backblaze B2,以取得異地備援。

## 備份策略 3：Google 相簿 → 另一個雲端

想在不同的雲端提供者保留一份副本？RcloneView 讓雲端對雲端傳輸變得輕鬆自如：

- **Google 相簿 → OneDrive**——善用你的 Microsoft 365 儲存空間。
- **Google 相簿 → AWS S3**——封存至低成本、耐用的物件儲存。
- **Google 相簿 → Backblaze B2**——低成本無限量備份儲存空間。
- **Google 相簿 → Wasabi**——相容 S3、無資料傳出費用。

只需建立一個以 Google 相簿為來源、目標雲端為目的地的複製工作即可。資料不會經過你本機的儲存空間——RcloneView 透過其 rclone 引擎直接處理傳輸。

## 自動化你的照片備份

一次性備份很好,但自動化、週期性的備份更好。

### 設定排程備份

1. 使用上述任一策略**建立你的複製工作**。
2. **開啟工作排程**,設定週期性排程：
   - **每天凌晨 2 點**——捕捉前一天新增的所有照片。
   - **每週日**——適合較小資料庫的輕量方案。
3. **新增通知**,讓你隨時掌握執行結果：
   - 給團隊使用的 [Slack 通知](https://rcloneview.com/support/blog/rcloneview-slack-remote-control)
   - 給個人使用的 [Telegram 通知](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)
   - 給社群使用的 [Discord 通知](https://rcloneview.com/support/blog/rcloneview-discord-remote-control)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automatic Google Photos backups" class="img-large img-center" />

### 使用批次工作進行多目的地備份

透過 v1.3 的[批次工作](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview)，你可以在一次自動化序列中,將 Google 相簿備份到多個目的地：

1. 複製 Google 相簿 → 外接硬碟
2. 複製 Google 相簿 → NAS
3. 複製 Google 相簿 → Backblaze B2

只需一次點擊（或一次排程觸發）,即可執行全部三項工作。

## 監控與驗證

### 即時傳輸監控

即時查看備份進度——包括檔案數量、傳輸速度以及預估完成時間。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Photos backup progress" class="img-large img-center" />

### 使用資料夾比對進行驗證

備份完成後,使用[資料夾比對](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)來確認本地副本與 Google 相簿資料庫是否一致。這能讓你確信沒有遺漏任何內容。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Google Photos with local backup" class="img-large img-center" />

### 查看工作歷史記錄

檢視[工作歷史記錄](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history),查看過往備份執行的完整記錄,包括已傳輸的檔案、遇到的錯誤以及總耗時。

## 大型 Google 相簿資料庫的建議

如果你有數萬張照片：

1. **從近幾年開始**——先備份最近 2–3 年的內容,再往回處理。這樣能最快保護你最近的回憶。
2. **使用增量複製**——初次執行後,只有新檔案會被傳輸。
3. **耐心應對速率限制**——Google 相簿 API 的限制比 Google 雲端硬碟更嚴格。請將並行傳輸數保持在 4–6。
4. **失敗時重試**——v1.3 的「重試失敗工作」功能能妥善處理暫時性的 API 錯誤。
5. **考慮排在離峰時段**——在夜間執行大型備份,以避免網路壅塞。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**（支援 Windows、macOS、Linux）。
2. 使用 OAuth 驗證**新增 Google 相簿**作為遠端。
3. 在檔案總管中**瀏覽你的資料庫**,確認你要備份的內容。
4. 針對你選擇的目的地（外接硬碟、NAS 或雲端）**建立複製工作**。
5. **排程**以進行自動週期性備份。
6. 首次執行後,使用資料夾比對**進行驗證**。

你的照片是無可取代的。你的備份不應該只依賴單一提供者。RcloneView 讓你能輕鬆保有一份獨立副本——自動、可靠,且完全不需要使用命令列。

---

**相關指南：**

- [透過瀏覽器登入新增遠端（OAuth）](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [瀏覽與管理遠端](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NAS 自動偵測與連接](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
