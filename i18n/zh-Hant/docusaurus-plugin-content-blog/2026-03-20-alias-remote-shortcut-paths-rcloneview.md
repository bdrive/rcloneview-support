---
slug: alias-remote-shortcut-paths-rcloneview
title: "別名遠端 — 使用 RcloneView 為深層雲端資料夾建立捷徑"
authors:
  - tayson
description: "了解如何使用 rclone 的別名遠端功能，為巢狀雲端資料夾建立捷徑，並透過 RcloneView 提升生產力。"
keywords:
  - alias remote
  - rclone alias
  - 資料夾捷徑
  - 雲端資料夾捷徑
  - 巢狀資料夾存取
  - rclone remote configuration
  - 生產力捷徑
  - folder shortcuts rclone
  - 快速資料夾存取
  - 雲端組織
tags:
  - feature
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 別名遠端 — 使用 RcloneView 為深層雲端資料夾建立捷徑

> 厭倦了為了到達最常使用的雲端目錄，而必須層層點開無數個資料夾嗎？使用別名遠端建立捷徑，即可瞬間存取。

雲端儲存的階層結構往往會變得雜亂難以管理。要找到那個深藏在資料夾深處的專案資料夾或共用團隊目錄，需要點擊好幾次。Rclone 的別名遠端功能透過建立直接指向特定資料夾的捷徑（別名）解決了這個問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什麼是別名遠端？

別名遠端是一種虛擬遠端，指向另一個遠端內的子資料夾。與其導覽 `/MyDrive/Projects/Client A/2026/Active Cases/Smith vs. Jones`，你可以建立一個名為 `smith-vs-jones` 的別名，直接指向該處。

![File comparison and selection](/images/en/howto/rcloneview-basic/compare-display-select.png)

在 RcloneView 中，你會在遠端清單裡看到 `smith-vs-jones` 成為一個獨立的遠端，只需一次點擊即可存取該資料夾。這個虛擬遠端的行為與真實遠端完全相同，因此你可以將此別名作為起點來複製、移動及同步檔案。

## 建立別名遠端

在你的 rclone 設定檔中，透過指定基礎遠端與子資料夾路徑來設定別名遠端。RcloneView 會將所有已設定的別名遠端與你的標準雲端帳戶一併顯示。

![Job scheduling interface](/images/en/howto/rcloneview-advanced/create-job-schedule.png)

例如，建立一個指向 `/GoogleDrive/Archive/2025` 的別名，命名為 `archive-2025`，然後即可直接從 RcloneView 的遠端選擇器存取它。此別名可作為便利的捷徑，而不會複製資料或需要特殊的儲存空間。

## 提升生產力

常見的使用情境包括：

- 特定專案資料夾，方便在進行中的工作期間快速存取
- 需要頻繁存取的法律或商業事務所客戶目錄
- 多個專案經常參照的共用團隊資料夾
- 較少存取但需要輕鬆取用的封存或備份資料夾
- 用於特定工作流程或活動的臨時工作目錄

每個別名都能減少導覽步驟，讓你的工作流程專注在最重要的事情上。團隊可以共用別名設定，確保每個人都能有效率地存取相同的專案結構。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在你的 rclone 設定中設定別名遠端（將其指向常用的子目錄）。
3. 啟動 RcloneView，即可看到新的別名以獨立遠端的形式出現。
4. 點擊任何別名，即可瞬間導覽至該資料夾。

簡化你的雲端導覽流程，重新奪回數小時的生產力。

---

**相關指南：**

- [虛擬遠端 — 合併與聯合別名](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [遠端管理 — 新增、編輯、刪除](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)
- [聯合遠端 — 合併免費儲存空間](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)

<CloudSupportGrid />
