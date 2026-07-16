---
slug: vfs-cache-mount-performance-rcloneview
title: "VFS 快取——在 RcloneView 中提升雲端硬碟的掛載效能"
authors:
  - tayson
description: "在 RcloneView 中設定 VFS 快取模式，提升已掛載雲端硬碟的效能。了解 minimal、writes 與 full 快取策略，找出最適合你工作流程的方案。"
keywords:
  - VFS 快取
  - 掛載效能
  - 雲端硬碟速度
  - rclone 快取
  - VFS 模式
  - 快取最佳化
  - 已掛載的雲端儲存
  - 磁碟快取策略
  - 效能調校
  - 檔案存取最佳化
tags:
  - vfs
  - mount
  - performance
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# VFS 快取——在 RcloneView 中提升雲端硬碟的掛載效能

> 掛載雲端硬碟預設感覺很慢——RcloneView 的 VFS 快取以磁碟空間換取速度，讓你能以本機硬碟的速度工作。

當你透過 RcloneView 掛載雲端硬碟（Google Drive、Dropbox、AWS S3）時，每次檔案存取都會透過網路進行。這樣雖然可行，但感覺很遲鈍——開啟文件要花一兩秒、列出資料夾會卡頓、讀取檔案感覺處處受限。VFS 快取透過在本機快取常用檔案來解決這個問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什麼是 VFS 快取？

VFS（虛擬檔案系統）快取會將最近存取的檔案與資料夾中繼資料儲存在本機磁碟上。當你從已掛載的雲端硬碟開啟檔案時，RcloneView 會先檢查快取——若快取中已有該檔案就能立即存取，若沒有則會透過網路擷取。隨著你持續使用，快取會逐漸增長；較舊的項目會被清除以騰出空間。

這種簡單的策略能消除常見操作中的網路延遲。

## VFS 快取模式

RcloneView 支援三種快取模式，各自在速度與磁碟使用量之間取得不同平衡：

### 模式 1：關閉（無快取）
每次存取都會透過網路進行。對動態檔案來說最安全，但重複存取時速度最慢。僅在磁碟空間吃緊或快取衝突是重要考量時才使用此模式。

### 模式 2：Minimal 快取
快取檔案中繼資料（名稱、大小）以及最近開啟的檔案。對資料夾瀏覽與重複讀取來說速度很快。磁碟使用量極小——大多數工作流程通常低於 1 GB。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneView remote explorer and mount interface" width="600" />

**適合對象**：文件編輯、瀏覽照片，以及在磁碟空間有限的機器上進行一般檔案存取。

### 模式 3：Writes 快取
與 minimal 類似，但同時也會快取寫入操作。你剛修改過的檔案會先保留在本機，之後才進行背景同步。可大幅加快頻繁寫入的工作流程。

**適合對象**：內容創作、影片編輯、批次檔案操作——在雲端同步前有大量變更的情境。

### 模式 4：Full 快取
積極的快取策略——所有存取過的檔案都會永久快取，直到手動清除為止。重複存取速度最快，但磁碟佔用空間也最大。需要手動管理快取。

**適合對象**：封存資料、以讀取為主的工作流程，以及磁碟空間充裕的機器。

## 在 RcloneView 中設定 VFS 快取

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView cloud-to-cloud transfer configuration" width="600" />

開啟 RcloneView 並前往掛載設定：

1. 選擇你的雲端遠端（例如 Google Drive）
2. 前往**進階設定** → **VFS 快取**
3. 選擇快取模式：Minimal、Writes 或 Full
4. 設定快取目錄（預設值：Linux 上為 `/tmp/rcloneview-cache`，Windows 上為 `%TEMP%\rcloneview-cache`）
5. 設定快取大小上限（例如 10 GB）——超過限制時 RcloneView 會自動清除舊檔案
6. 若使用本機 SSD 以取得額外速度，可啟用快取後端

套用並重新掛載——效能立即提升。

## 快取目錄最佳實踐

- **將快取放在高速儲存裝置上**：優先選擇 SSD 而非 HDD
- **與系統分開**：使用獨立的分割區，避免佔滿作業系統磁碟
- **監控磁碟使用量**：定期檢查快取大小；若清除頻率過高則提高上限
- **定期清理**：若停止使用某個遠端，可清除舊快取（安全無虞——快取會重新建立）

## 實際效能提升

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView monitoring and performance tracking" width="600" />

在沒有快取的情況下，列出一個 50 MB 的資料夾內容需要 2-3 秒。啟用 minimal 快取後，第二次存取即可立即完成。寫入已掛載的硬碟呢？啟用 writes 快取後，你會體驗到本機磁碟的速度（毫秒等級），而非網路延遲（秒等級）。

取捨之處：依你的工作流程而定，需要 5-50 GB 的磁碟空間。對大多數使用者來說，這是值得的。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 為你的雲端儲存建立新的掛載。
3. 在進階設定中，啟用 Minimal 快取（先從保守的設定開始）。
4. 重新掛載並測試——開啟檔案、瀏覽資料夾，評估速度提升的效果。
5. 若你的工作流程涉及大量寫入，可升級為 Writes 快取模式。
6. 在統計面板中監控快取命中率；視需要調整大小上限。

VFS 快取是 RcloneView 隱藏的強大功能之一——微小的調整，帶來巨大的速度提升。

---

**相關指南：**

- [掛載雲端儲存為本機硬碟——RcloneView 完整指南](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [修復緩慢的雲端傳輸——在 RcloneView 中加快同步速度](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [別名遠端——在 RcloneView 中建立捷徑與自訂路徑](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
