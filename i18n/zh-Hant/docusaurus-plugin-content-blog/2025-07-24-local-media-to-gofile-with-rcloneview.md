---
slug: local-media-to-gofile-with-rcloneview
title: 使用 RcloneView 將本機媒體移轉並同步到 Gofile（免用命令列）
authors:
  - jay
description: 使用 RcloneView 親和的圖形介面，將龐大的媒體庫從硬碟上傳、同步並管理到 Gofile——同時附上連結、去重與排程的小技巧。
keywords:
  - rcloneview
  - gofile
  - 媒體上傳
  - 硬碟轉雲端
  - 雲端檔案傳輸
  - 排程同步
  - rclone 圖形介面
  - 公開連結
tags:
  - RcloneView
  - gofile
  - media
  - cloud-file-transfer
  - sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將本機媒體移轉並同步到 Gofile（免用命令列）

> 透過點擊操作而非命令，將你的媒體庫從**硬碟**移轉並保護到 **Gofile**。

## 簡介——為什麼要把本機媒體託管到 Gofile？

如果你的影片剪輯、原始照片與音訊母帶只存放在單一硬碟中，一旦發生潑灑意外或磁碟故障，這些檔案便可能瞬間消失。將媒體移轉到 **Gofile** 能讓你獲得雲端擴充能力、輕鬆分享，並釋放工作站的儲存空間。透過 **RcloneView**，你可以在親和的圖形介面中享有 rclone 的強大功能：連線、預覽、複製與排程——完全不需要終端機。

<!-- truncate -->
### 認識 Gofile（概覽）
- Gofile 是一個具備完整 REST API 文件的內容儲存與分發平台。你可以建立公開連結，並透過 API 權杖自動化上傳作業。[gofile.io](https://gofile.io/api)
- rclone 提供專屬的 **Gofile** 後端：只要使用你的**帳戶 API 權杖**完成設定，即可列出、複製檔案，甚至透過 `rclone link` 建立公開連結。*（注意：rclone 的 Gofile 後端需要 **付費（premium）** Gofile 帳戶。）*[Rclone](https://rclone.org/gofile/)

### 認識你的本機媒體庫
- 媒體專案通常**體積龐大**（數 GB 起跳）、結構巢狀，且常在不同版本間重複。
- 良好的工具至關重要：預覽、選擇性複製，以及可續傳的傳輸功能，都是順利移轉的關鍵。

### 為什麼要從硬碟移轉到 Gofile？
- **易於分享**：為客戶與協作者產生公開連結。
- **釋放空間並備份**：在保留線上副本的同時，釋出本機儲存空間。
- **掌控工作流程**：在算圖完成後排程推送，並保持資料夾同步。

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 步驟 1——事前準備

上傳前請先：

1. **整理資料夾**（例如 `Footage/`、`Stills/`、`Masters/`），讓每項工作清楚且可重複執行。
2. **決定操作模式**：一次性複製封存檔、對進行中的專案持續同步，或設定每夜排程。


## 步驟 2——在 RcloneView 中連接 Gofile

RcloneView 將 rclone 的設定流程包裝成引導式操作。

1. 開啟 **RcloneView** → 點選 **`+ New Remote`**
2. 選擇 **Gofile**，然後貼上你在 Gofile **My Profile** 頁面取得的**帳戶 API 權杖**。*（rclone 連線需要付費帳戶。）*
3. 為此遠端命名（例如 `MyGofile`）並儲存。

🔍 實用指南：[新增 Gofile 遠端](/howto/remote-storage-connection-settings/gofile)

<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />

## 步驟 3——執行傳輸

RcloneView 提供三種清楚的方式來移轉並維護你的媒體，建議由小範圍開始，再逐步擴大。

### A) 拖放（手動、臨時性）
- 在左側開啟你的**本機**媒體，右側開啟 **Gofile**，然後**跨欄拖曳資料夾／檔案**——操作簡單直覺。

👉 深入了解：[使用拖放複製檔案](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 比對後複製（預覽變更）
- 使用**比對**功能在複製前查看新增或變更的內容，減少意外與重試次數。

👉 深入了解：[比對並管理檔案](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results in RcloneView showing changed files" class="img-medium img-center" />

### C) 同步與排程工作（自動化）
- 使用**同步**功能將本機的 **Projects** 資料夾鏡像到 Gofile。
- 先執行**試跑（dry-run）**，再儲存為可重複使用的工作，並設定排程（例如每夜執行）。

👉 深入了解：
- [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved job in RcloneView" class="img-medium img-center" />

**專業小技巧**
- 若 Gofile 在資料夾中偵測到**重複名稱**，同步過程可能會出現大量提示——上傳後可使用 rclone 的 **dedupe** 功能來清理衝突。
- 需要**分享連結**嗎？rclone 的 `link` 指令可以透過程式化方式建立公開連結（進階／命令列操作）。

---

## 結語——重點回顧與延伸建議

- **你能獲得什麼**：更安全的儲存、更輕鬆的分享，以及更整潔的本機硬碟。
- **如何達成**：RcloneView 透過 API 權杖設定 **Gofile**，接著你可以使用**拖放**、**比對**或**同步**——搭配**排程**功能實現免人工維護。

## 常見問題

**Q. 使用 rclone／RcloneView 是否需要 Gofile 付費帳戶？**
**A.** 需要——rclone 的 Gofile 後端需要**付費**的 Gofile 帳戶，以及從 **My Profile** 取得的**帳戶 API 權杖**。

**Q. 我可以為上傳的檔案產生公開分享連結嗎？**
**A.** 可以。RcloneView 支援使用 `link` 建立公開連結（檔案或資料夾皆可；資料夾可以壓縮成 ZIP 下載；部分後端支援設定到期時間）。


**準備好用你自己的方式，把媒體庫搬上雲端了嗎？**

<CloudSupportGrid />

