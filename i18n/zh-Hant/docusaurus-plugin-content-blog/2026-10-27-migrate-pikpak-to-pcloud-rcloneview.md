---
slug: migrate-pikpak-to-pcloud-rcloneview
title: "將 PikPak 遷移到 pCloud — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 PikPak 遷移到 pCloud：連接兩個遠端，以 Dry Run 預覽，在雲端之間複製，並透過 Folder Compare 驗證結果。"
keywords:
  - 將 PikPak 遷移到 pCloud
  - PikPak 到 pCloud 傳輸
  - 將 PikPak 檔案移到 pCloud
  - PikPak pCloud 遷移
  - RcloneView 雲端到雲端
  - PikPak 到 pCloud 同步
  - rclone GUI
  - 雲端遷移工具
  - pCloud 檔案傳輸
  - 驗證雲端傳輸
tags:
  - RcloneView
  - pikpak
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 PikPak 遷移到 pCloud — 使用 RcloneView 傳輸檔案

> 在兩個雲端之間直接將 PikPak 資料庫遷移到 pCloud，先預覽，最後再驗證。

PikPak 常常成為儲存下載內容與媒體檔案的落腳處，而這些檔案遲早需要一個長期的歸宿。把所有內容下載到筆電再重新上傳到 pCloud，既慢又不可靠。RcloneView 在同一個視窗中連接兩項服務並直接在它們之間傳輸，工作可以預覽、重複執行，並在歷程中檢視。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 PikPak 與 pCloud 新增為遠端

開啟 **New Remote**，先新增 PikPak，再新增 pCloud。pCloud 使用 OAuth：瀏覽器會開啟，登入後無需任何 API 金鑰即可連接遠端。為每個遠端取一個清楚的名稱，例如 `pikpak-source` 與 `pcloud-dest`，讓之後的工作清單保持易讀。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 PikPak 與 pCloud 遠端" class="img-large img-center" />

儲存兩個遠端後，分別在 Explorer 面板中開啟。並排瀏覽來源與目的地，可以在移動任何內容之前確認你查看的是正確的帳號。

## 在雲端之間複製

將資料夾從 PikPak 面板拖曳到 pCloud 面板上。在不同遠端之間拖曳會執行複製，因此在你決定刪除之前，原始檔案會保留在 PikPak 中。對於較大的資料庫，儲存的 Copy 工作比拖曳更合適：連線中斷時可以重新執行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 PikPak 到 pCloud 的雲端到雲端傳輸" class="img-large img-center" />

RcloneView 可在 Windows、macOS 與 Linux 上透過一個視窗管理 90 多種雲端儲存服務，因此同一個工具既能完成這次遷移，也能用於你接下來連接的任何服務。

## 使用 Dry Run 預覽

透過 Sync 或 Job Manager 精靈建立工作，選擇來源與目的地資料夾，並在實際傳輸之前執行 **Dry Run**。它會列出將被複製的檔案，讓你以零成本發現選錯的資料夾。若需要遷移較少的檔案，請使用篩選步驟：設定最大檔案大小，或排除你不想放進 pCloud 的檔案類型。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行複製工作" class="img-large img-center" />

預覽無誤後，執行工作，並在 Transferring 分頁中查看速度與進度。如果 PikPak 開始回應變慢，請降低檔案傳輸數。

## 使用 Folder Compare 驗證

工作完成後，開啟 **Compare**，將 PikPak 放在左側、pCloud 放在右側。篩選僅存在於左側的檔案，查看尚未抵達的內容，然後將它們複製過去。Job History 會記錄每次執行的狀態、大小與檔案數量。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="PikPak 與 pCloud 之間的 Folder Compare" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **New Remote** 新增 PikPak 與 pCloud。
3. 建立從 PikPak 到 pCloud 的 Copy 工作並執行 **Dry Run**。
4. 執行工作，然後在刪除來源端任何內容之前使用 **Compare** 驗證。

可以預覽與驗證的遷移，才是可以放心相信它能順利完成的遷移。

---

**相關指南：**

- [將 PikPak 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [將 pCloud 遷移到 Mega](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [管理 PikPak 雲端下載](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)

<CloudSupportGrid />
