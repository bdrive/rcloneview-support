---
slug: migrate-dropbox-to-google-drive-with-rcloneview
title: "Dropbox → Google Drive 輕鬆搞定：使用 RcloneView 傳輸、同步與排程"
authors:
  - jay
description: 使用 RcloneView 將檔案從 Dropbox 移動並同步到 Google Drive。
keywords:
  - rcloneview
  - dropbox to google drive
  - cloud file transfer
  - cloud sync
  - rclone GUI
  - multi-cloud migration
tags:
  - dropbox
  - google-drive
  - cloud-file-transfer
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox → Google Drive 輕鬆搞定：使用 RcloneView 傳輸、同步與排程

> 讓檔案更靠近團隊協作的地方。透過簡潔、點選式的操作流程，將內容從 **Dropbox** 移動到 **Google Drive**——無需使用 CLI。


## 簡介 — 為什麼要從 Dropbox 整合到 Google Drive？

許多團隊一開始使用 **Dropbox**，因為它同步快速可靠且整合廣泛。隨著時間推移，他們開始採用 **Google Drive**，以善用 Google 文件／試算表／簡報以及 Workspace 的協作、共用與搜尋功能。整合到 Google Drive 可減少來回切換的情況，並讓你擁有統一的權限與治理機制。

<!-- truncate -->

**認識 Dropbox（概覽）**  
- 跨裝置快速、可靠的同步；應用程式生態系廣泛。  
- 檔案大小限制依上傳方式而異（網頁版 vs. 桌面應用程式）。Dropbox 表示網站上傳**最高可達 375 GB**，透過桌面應用程式單一項目**最高可達 2 TB**。 [Dropbox 說明中心](https://help.dropbox.com/sync/upload-limitations)

**認識 Google Drive（概覽）**  
- 與 Workspace（文件／試算表／簡報）深度整合，強大的共用與搜尋功能。  
- Google 說明文件指出**單一檔案最大 5 TB**（非文件格式），且 Drive API 對每位使用者設有**每日 750 GB** 的上傳與複製配額。請據此規劃大型搬移作業。 [Google 說明中心](https://support.google.com/drive/answer/37603?hl=en&utm_source=chatgpt.com) [Google for Developers](https://developers.google.com/workspace/drive/api/guides/limits)

### 快速比較

| 項目 | Dropbox | Google Drive |
|---|---|---|
| 生態系適配 | 中立／跨平台 | 與 Google Workspace 緊密整合 |
| 大型檔案（單一項目） | 網站：約 375 GB；桌面版：最高 2 TB | 單一項目最高 5 TB（非文件格式） |
| 操作注意事項 | 限制依方式而異（網頁／桌面） | API：每位使用者每日 750 GB（上傳／複製） |

資料來源： [Dropbox 說明中心](https://help.dropbox.com/sync/upload-limitations)； [Google 說明中心](https://support.google.com/drive/answer/37603?hl=en&utm_source=chatgpt.com) 與 [Google for Developers](https://developers.google.com/workspace/drive/api/guides/limits)

### 從 Dropbox 切換到 Google Drive 的原因

- **在工作發生的地方協作** — 在文件／試算表／簡報中即時共同編輯。  
- **整合** — 在 Gmail、日曆與 Drive 之間擁有統一的身分與政策層。  
- **營運規劃** — 遷移時留意各服務商的限制，避免工作失敗。  

> 好消息是：**rclone** 同時支援 Dropbox 與 Google Drive，而 **RcloneView** 將這股力量帶入友善的圖形介面。無需終端機。 

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 步驟 1 — 準備工作

開始之前：

1. **確認搬移範圍** — 決定哪些資料夾要搬移，哪些保留封存。  
2. **檢查 Drive 容量** — 確保你的 Google 帳戶／Workspace 有足夠儲存空間。  
3. **留意大型檔案** — 為接近 Dropbox 單一項目限制及 Drive 每日 750 GB API 配額的項目做好規劃。  
4. **選擇策略** — 一次性遷移、分階段切換，或針對混合式工作流程持續同步。


## 步驟 2 — 在 RcloneView 中連接 Dropbox 與 Google Drive

RcloneView 將 **rclone config** 包裝成引導式、點選操作的體驗：

1. 開啟 **RcloneView** → 點選 **`+ New Remote`**  
2. 選擇 **Dropbox** → 完成 OAuth 登入 → 為其命名（例如：`MyDropbox`）  
3. 選擇 **Google Drive** → 使用你的 Google 帳戶登入 → 為其命名（例如：`MyGoogleDrive`）  
4. 確認兩個遠端都並排顯示在 Explorer 面板中

🔍 實用指南：  
- **自動登入（Google Drive、Dropbox）** — 在 RcloneView 中透過 OAuth 快速設定。 [RcloneView](/howto/remote-storage-connection-settings/add-oath-online-login)  
- **新增與管理遠端** — 了解在哪裡找到 **New Remote** 對話框與遠端管理員。 [RcloneView](https://rcloneview.com/support/howto/rcloneview-basic/remote-manager/)

<img src="/support/images/en/tutorials/open-dropbox-and-google-drive.png" alt="open dropbox and google drive" class="img-medium img-center" />

## 步驟 3 — 執行傳輸

RcloneView 提供三種直接的做法。先從小規模開始，再逐步擴大。

### A) 拖放（手動、隨需）
- 在一側開啟 Dropbox，另一側開啟 Google Drive，然後**跨視窗拖放資料夾／檔案**。  
- 適合快速搬移與抽查。  

👉 深入了解： [使用拖放複製檔案](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 比較與複製（預覽變更）
- 執行 **Compare** 以在複製前查看新增／變更的項目，減少意外與重試。  

👉 深入了解： [比較並管理檔案](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results in RcloneView showing changed files" class="img-medium img-center" />

### C) 同步與排程工作（自動化）
- 使用 **Sync** 將選定的 Dropbox 資料夾鏡射到 Google Drive。  
- 先執行**試跑（Dry-run）**，再將該任務儲存為可重複使用的 **Job**；並新增排程以便每晚／每週執行。  

👉 深入了解：
- [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)


<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved job in RcloneView" class="img-medium img-center" />

**專業提示**
- 將非常大型的遷移拆分成多個批次；遵守**單一項目**與**每日**限制，以避免中斷。   
- 在切換期間讓來源資料夾保持唯讀，以防止資料漂移。  
- 需要共用連結嗎？rclone 支援在受支援的後端上產生公開連結（進階功能）。


## 結論 — 重點回顧與額外建議

- **為何搬移**：在團隊工作的地方協作（Google Workspace），統一共用與政策，並簡化日常工作流程。 
- **如何進行**：RcloneView 連接 Dropbox 與 Google Drive，接著讓你選擇**拖放**、**比較**或**同步**——並可搭配**排程**實現無人值守維護。 
- **依限制規劃**：了解 Dropbox 的上傳上限，以及 Drive 的單一檔案 5 TB／每日 750 GB 指引。


## 常見問題

**問：RcloneView 可以處理非常大的檔案嗎？**  
**答：** 可以——rclone 支援分塊／串流傳輸。只需將項目大小保持在各服務商的限制內（Dropbox 網頁版 vs. 桌面版；Google Drive 單一項目 5 TB 及透過 API 每日 750 GB）。  

**問：我需要具備命令列技能嗎？**  
**答：** 不需要。RcloneView 是建立在 rclone 的 Dropbox 與 Google Drive 後端之上的完整圖形介面。  

**問：我可以自動化週期性傳輸嗎？**  
**答：** 當然可以——將你的 Sync 儲存為 **Job**，並在 RcloneView 的工作管理員中設定排程。  



**準備好簡化你從 Dropbox 到 Google Drive 的搬移了嗎？**  


<CloudSupportGrid />
