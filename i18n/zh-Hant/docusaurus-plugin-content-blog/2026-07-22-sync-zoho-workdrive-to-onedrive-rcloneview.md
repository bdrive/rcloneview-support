---
slug: sync-zoho-workdrive-to-onedrive-rcloneview
title: "將Zoho WorkDrive同步到OneDrive — 使用RcloneView進行雲端備份"
authors:
  - steve
description: "使用RcloneView將檔案從Zoho WorkDrive同步到Microsoft OneDrive,讓兩個企業儲存帳號始終保持備份且最新。"
keywords:
  - 將Zoho WorkDrive同步到OneDrive
  - Zoho WorkDrive 備份
  - Zoho WorkDrive OneDrive 遷移
  - RcloneView Zoho WorkDrive
  - 跨雲企業備份
  - Microsoft OneDrive 同步工具
  - 多雲檔案傳輸
  - 雲對雲同步 GUI
  - 企業檔案儲存備份
tags:
  - RcloneView
  - zoho
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將Zoho WorkDrive同步到OneDrive — 使用RcloneView進行雲端備份

> 不必手動匯出檔案,也不必為每個部門個別撰寫傳輸腳本,即可持續將Zoho WorkDrive團隊資料夾備份到Microsoft OneDrive。

許多團隊已將Zoho WorkDrive作為日常協作的標準工具,但仍然需要在Microsoft OneDrive上保留一份存在 —— 可能是因為某個客戶只使用Microsoft生態系,可能是併購導致兩個儲存平台同時在用,也可能只是希望在Zoho基礎架構之外保留一份企業檔案的副本。手動從WorkDrive下載再重新上傳到OneDrive的方式,一旦檔案數量超過幾個就無法擴展,而且不會留下任何關於執行時間與內容的紀錄。RcloneView在同一個介面中連接這兩個平台,將這項傳輸變成一項可重複執行的同步工作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將Zoho WorkDrive和OneDrive連接為遠端

OneDrive透過RcloneView的New Remote精靈中標準的瀏覽器OAuth登入方式連接,不需要另外的API金鑰。Zoho WorkDrive在設定時需要多一個步驟:由於Zoho會依工作區建立時所在的地區,將資料託管在不同的地理區域,因此需要為帳號選擇正確的區域。兩個遠端都新增完成後,會在檔案總管中以獨立分頁顯示,可以像瀏覽本機資料夾一樣瀏覽、篩選,或將兩者互相比較。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Zoho WorkDrive and OneDrive as remotes in RcloneView" class="img-large img-center" />

## 在兩個平台之間建立同步工作

同步精靈的第一步是選擇來源(Zoho WorkDrive資料夾)與目的地(OneDrive資料夾),以及工作名稱與同步方向。僅修改目的端的單向同步是穩定的官方模式,也是讓WorkDrive維持資料來源地位的備份類工作的正確選擇。第2步涉及傳輸並行數與一致性檢查,若WorkDrive的API在高並行請求下回應變慢,可適度調低這些數值。第3步的篩選設定可借助文件與媒體類型的預先定義篩選器,或使用類似`/.tmp/*`的自訂排除規則,將工作範圍限定在真正需要的資料夾或檔案類型。

在Zoho WorkDrive和OneDrive之間同步不需要升級授權,因為1:N同步與基本的Sync & Job Management功能都包含在FREE授權中。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## 驗證並自動化傳輸

在對真實資料執行工作之前,Dry Run會模擬同步過程,並準確列出將要複製的檔案,讓你能在任何內容真正搬移之前發現設定錯誤的篩選器或非預期的資料夾。工作確認無誤後,將其儲存到Job Manager中,之後可以手動重新執行,或是在PLUS授權下將其綁定到crontab風格的排程,讓WorkDrive到OneDrive的備份自動執行,不需要有人記得手動觸發。

Job History會記錄每次執行的開始時間、耗時、狀態以及傳輸的檔案總數,便於確認排定的備份是否真正完成,而不是在夜間悄悄失敗。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## 快速上手

1. 從[rcloneview.com](https://rcloneview.com/src/download.html)**下載RcloneView**。
2. 透過Remote分頁 > New Remote連接Zoho WorkDrive(選擇正確的區域)和OneDrive(透過OAuth登入)。
3. 從WorkDrive資料夾到OneDrive目的地建立一個單向同步工作,並依需求套用篩選器。
4. 執行Dry Run確認檔案清單,然後儲存工作,若使用PLUS授權可設定排程。

當兩個平台在同一個視窗中連接後,讓Zoho WorkDrive和OneDrive保持同步就從反覆的手動作業變成了一項排定的工作。

---

**相關指南:**

- [管理Zoho WorkDrive — 使用RcloneView同步與備份檔案](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [使用RcloneView將Google Drive掛載為本機磁碟](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [篩選規則 — 在RcloneView中進行選擇性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
