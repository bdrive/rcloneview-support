---
slug: multi-window-parallel-explorer-rcloneview
title: "多視窗支援 — 在 RcloneView 中並排管理多個雲端儲存"
authors:
  - tayson
description: "使用 RcloneView 的多視窗功能，為不同的雲端儲存任務開啟獨立視窗。並行管理 Google Drive、S3 與 OneDrive。"
keywords:
  - RcloneView multi-window
  - multiple windows cloud storage
  - parallel cloud management
  - RcloneView PLUS feature
  - cloud storage multi-window
  - side by side cloud management
  - RcloneView independent windows
  - cloud file manager multiple windows
  - RcloneView productivity
  - multi-window cloud sync
tags:
  - feature
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 多視窗支援 — 在 RcloneView 中並排管理多個雲端儲存

> RcloneView 的多視窗功能（PLUS 授權）可開啟獨立的應用程式視窗，讓您同時管理不同的雲端儲存任務，無需來回切換情境。

RcloneView 的 Explorer 面板已支援在單一視窗中顯示 1 到 4 個面板，方便並排瀏覽與拖放傳輸。但對於涉及多項獨立任務的複雜工作流程——例如在一個視圖中監控正在進行的遷移，同時在另一個視圖中瀏覽不同的雲端；或是在執行資料夾比對的同時設定新的同步任務——多視窗功能可開啟完全獨立的 RcloneView 視窗，彼此互不干擾。此功能需要 PLUS 授權。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 多視窗運作方式

透過多視窗開啟的每個新視窗，都是完全獨立的 RcloneView 實例，擁有各自的 Explorer 面板、Transferring 分頁與狀態。某個視窗中的變更不會影響其他視窗。視窗之間透過 RcloneView 內部的 IPC 機制通訊，但其檔案瀏覽狀態與進行中的操作彼此隔離。

若要開啟新視窗，請點選 Home 分頁中的 **New Window** 按鈕。新視窗會以與主視窗相同的預設狀態開啟——接著您可以將其導向不同的遠端，或獨立啟動不同的任務。視窗的位置與大小會在工作階段之間自動儲存，因此下次開啟 RcloneView 時，您的多視窗版面配置會被保留。

<img src="/support/images/en/blog/new-remote.png" alt="Opening a new independent window in RcloneView" class="img-large img-center" />

## 實用的多視窗工作流程

**跨雲端供應商並行瀏覽：** 開啟視窗 1 瀏覽您的 Amazon S3 儲存桶，同時視窗 2 顯示您的 Google Drive。在視窗之間拖放檔案即可觸發跨供應商複製，或在遷移期間同時監控兩個供應商的內容。

**任務監控與檔案瀏覽並行：** 讓視窗 1 保持顯示 Transferring 分頁以檢視進行中任務的進度，同時視窗 2 可讓您瀏覽不同的雲端或設定下一個任務——無需切換分頁或中斷您的監控視圖。

**在專屬視窗中進行資料夾比對：** 在視窗 1 執行大型資料夾比對操作（大型雲端資料夾可能需要較長時間），同時繼續在視窗 2 中處理檔案。比對作業獨立執行，不會阻擋您的其他活動。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Running folder comparison in one window while browsing another in RcloneView" class="img-large img-center" />

**多使用者或多專案工作流程：** 為多個客戶或專案管理雲端儲存的專業人士，可以為每個客戶或專案分配一個視窗，讓與情境相關的視圖同時保持開啟，而不必在不同遠端之間反覆切換。

## 結合多視窗與面板版面配置

在每個視窗內，面板版面配置（1 到 4 個面板，水平或垂直分割）可透過 Settings 分頁 > Layout / View count 獨立設定。若使用 2 個視窗、每個視窗各 2 個面板的多視窗設定，實際上就能在兩個有組織的工作區中同時擁有四個 Explorer 面板。

這種組合對同步工作流程特別有用：視窗 1 顯示來源與目的地面板，並執行中的同步任務；視窗 2 顯示另一組來源與目的地，用於不同的同步任務。兩個任務並行執行，且不共用顯示狀態。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multiple parallel sync operations in RcloneView multi-window mode" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView** 並啟用 PLUS 授權。
2. 點選 Home 分頁中的 **New Window** 按鈕，開啟獨立的第二個視窗。
3. 將每個視窗導向不同的遠端或任務，以並行作業。
4. 在 Settings > Layout 中依視窗自訂面板數量，找出最適合您工作流程的版面配置。

多視窗功能將 RcloneView 從單一任務的檔案管理器，轉變為適合同時管理多個供應商、專案或進行中操作的雲端儲存專業人士的並行工作區。

---

**相關指南：**

- [RcloneView 雙面板 Explorer 生產力技巧](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)
- [使用 RcloneView 管理多個雲端帳戶](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [統一管理所有雲端 — 管理 Google Drive、Dropbox 與 OneDrive](https://rcloneview.com/support/blog/unify-all-clouds-manage-google-drive-dropbox-onedrive)

<CloudSupportGrid />
