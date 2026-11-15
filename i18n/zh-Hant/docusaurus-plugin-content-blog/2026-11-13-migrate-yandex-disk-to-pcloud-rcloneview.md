---
slug: migrate-yandex-disk-to-pcloud-rcloneview
title: "將 Yandex Disk 遷移到 pCloud — 用 RcloneView 傳輸檔案"
authors:
  - morgan
description: "使用 RcloneView 將檔案從 Yandex Disk 搬移到 pCloud。透過 OAuth 連接兩個雲端，用 Dry Run 預覽，進行雲端對雲端複製，並以 Folder Compare 驗證。"
keywords:
  - yandex disk 遷移到 pcloud
  - yandex disk 到 pcloud 傳輸
  - yandex disk 遷移
  - pcloud 遷移工具
  - 雲端對雲端傳輸
  - 從 yandex disk 搬移檔案
  - rcloneview yandex disk
  - rcloneview pcloud
  - rclone gui 雲端遷移
tags:
  - RcloneView
  - yandex-disk
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Yandex Disk 遷移到 pCloud — 用 RcloneView 傳輸檔案

> 透過可預覽、可監控、可驗證的圖形化複製工作，將多年累積的 Yandex Disk 檔案搬到 pCloud。

整合儲存帳戶通常卡在同一個地方：必須先把所有檔案下載到筆電，再重新上傳。RcloneView 將 Yandex Disk 與 pCloud 並排連接，並透過 rclone 在兩者之間複製檔案，無需先暫存到本機磁碟。兩項服務都透過瀏覽器 OAuth 登入連接，因此也不必產生 API 金鑰。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Yandex Disk 與 pCloud 連接為遠端

開啟 Remote 分頁並點選 **New Remote**。選擇 Yandex Disk，為遠端取一個簡短名稱，例如 `yandex`，然後完成瀏覽器登入。對 pCloud 重複相同步驟，名稱可設為 `pcloud`。兩者都會顯示在 Remote Manager 中，之後可以編輯或移除。

連接後，開啟兩個 Explorer 面板 — 每個遠端一個 — 並瀏覽資料夾樹。在最上層資料夾按右鍵並選擇 **Get Size**，即可查看要搬移的資料量。有了這個數字，就能在複製第一個檔案前確認 pCloud 方案是否有足夠空間。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and pCloud remotes in RcloneView" class="img-large img-center" />

## 規劃並預覽複製工作

對於一次性遷移，**Copy** 工作是較安全的選擇：它只會將檔案新增到 pCloud，不會刪除任何內容。只有在你希望 pCloud 完全鏡像 Yandex Disk（包括刪除）時才使用 **Sync**。

在 Job Manager 中建立工作。在 Step 1 中，選擇 Yandex Disk 資料夾作為來源，pCloud 資料夾作為目的地。在 Step 2 中，可考慮啟用總和檢查碼比較，在兩端支援相同雜湊類型時以雜湊加大小比較檔案（Yandex Disk 使用 MD5，而 pCloud 僅在 US 區域帳戶提供 MD5），並為不穩定的連線保留重試設定（預設：3）。Step 3 可讓你略過不再需要的內容 — 例如最大檔案存在時間，或排除 `.iso` 映像檔或 `.git/` 資料夾的自訂規則。

執行前請使用 **Dry Run**。它會列出將被複製的每個檔案，因此即使是要搬移 400 GB RAW 封存檔的攝影師，也能在投入數小時傳輸前確認資料夾結構正確。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from Yandex Disk to pCloud in RcloneView" class="img-large img-center" />

## 執行並監控傳輸

啟動工作，在 Transferring 分頁中查看進度、速度與檔案數。大型資料庫最好拆成多個工作 — 每個最上層資料夾一個 — 這樣網路異常只會影響一個批次。每次執行都會連同狀態、總大小與檔案數記錄在 Job History 中，為搬移提供稽核紀錄。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to pCloud transfer in the Transferring tab" class="img-large img-center" />

## 以 Folder Compare 驗證

工作完成後，開啟 **Compare**，左側放 Yandex Disk 資料夾，右側放 pCloud 資料夾。篩選「left-only」與「different」檔案，即可找出被略過的內容。使用 Copy right 一鍵補傳剩餘檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Yandex Disk and pCloud folders after migration" class="img-large img-center" />

## 開始使用

RcloneView 可在 Windows、macOS 與 Linux 上，從單一視窗掛載並同步 90+ 種儲存服務。

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 瀏覽器登入將 Yandex Disk 與 pCloud 新增為遠端。
3. 建立從 Yandex Disk 到 pCloud 的 Copy 工作，並以 Dry Run 檢查。
4. 執行工作，然後在關閉 Yandex Disk 帳戶前以 Folder Compare 確認結果。

經過驗證的遷移，讓你能確信每個資料夾都已完整搬移，再放心停用舊帳戶。

---

**相關指南：**

- [管理 Yandex Disk 儲存空間 — 用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [管理 pCloud 儲存空間 — 用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [解決 Yandex Disk 同步錯誤 — 用 RcloneView 診斷並解決傳輸失敗](https://rcloneview.com/support/blog/fix-yandex-disk-sync-errors-rcloneview)

<CloudSupportGrid />
