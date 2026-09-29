---
slug: migrate-gofile-to-backblaze-b2-rcloneview
title: "將 Gofile 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 Gofile 遷移到 Backblaze B2:連接兩個遠端、試執行複製、以 Folder Compare 驗證,並保留可靠的備份。"
keywords:
  - 將 gofile 遷移到 backblaze b2
  - gofile 到 b2
  - gofile 備份
  - backblaze b2 遷移
  - RcloneView gofile
  - 雲端對雲端傳輸
  - gofile 檔案傳輸工具
  - 從 gofile 移動檔案
  - rclone gofile backblaze
  - 雲端遷移 GUI
tags:
  - RcloneView
  - gofile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Gofile 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 將透過 Gofile 分享的檔案遷移到 Backblaze B2 物件儲存,無需撰寫任何指令,並確認每個檔案都已抵達。

Gofile 便於把檔案交給他人,但不適合作為重要檔案唯一副本的存放位置。Backblaze B2 是為長期保存而設計的物件儲存,可在儲存貯體層級控制保留的內容。RcloneView 在同一個視窗中連接這兩項服務,並在一個介面中完成複製,因此您不必手動逐一下載再重新上傳檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Gofile 與 Backblaze B2

Gofile 使用 Access Token 進行驗證。請從 Gofile 個人資料頁面的 API 權杖欄位複製,然後在 **New Remote** 中選擇 Gofile 並貼上。Backblaze B2 需要 Application Key ID 與 Application Key,可在 Backblaze 的金鑰管理頁面產生。請建立僅限目標儲存貯體的金鑰,而不是主金鑰,這樣遷移憑證就只能存取所需的內容。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Gofile 與 Backblaze B2 遠端" class="img-large img-center" />

兩個遠端都建立後,在一個 Explorer 面板中開啟 Gofile,在另一個中開啟 B2 儲存貯體。RcloneView 最多可同時顯示四個面板,因此您還可以開啟一個本機資料夾用於抽查。在 FREE 授權下即可對 S3、Azure 或 Backblaze B2 進行完整的讀寫連線。

## 複製前先規劃配置

先決定 Gofile 內容如何對應到儲存貯體。例如,一家攝影工作室把客戶交付內容放在十幾個 Gofile 資料夾中,可以建立一個 B2 儲存貯體,並將每個資料夾鏡像為頂層前綴,方便日後閱讀路徑。請先在 B2 面板中使用 **New Folder** 建立目的地資料夾。

將資料夾從 Gofile 面板拖曳到 B2 面板。在不同遠端之間,拖放執行的是複製,因此在您決定刪除之前,Gofile 上的原始檔案維持不變。對於需要重複執行的大規模遷移,請改用 Sync 精靈:選擇 Gofile 作為來源、儲存貯體路徑作為目的地,並以字母、數字、連字號或底線為作業命名。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 Gofile 到 Backblaze B2 的雲端對雲端傳輸" class="img-large img-center" />

## Dry Run、傳輸與監控

正式執行之前,請使用 **Dry Run**。它會列出將要複製的檔案以及將要刪除的檔案,因此在造成損失之前就能發現來源或目的地選錯了。如果選擇單向同步,請記住它會修改目的地以符合來源,所以花一分鐘做一次 Dry Run 是值得的。

在 Advanced Settings 中,您可以調整並行檔案傳輸數量並啟用校驗和比較。首次執行請保守設定,傳輸穩定後再提高並行數。在視窗底部的 **Transferring** 分頁中查看進度、速度與檔案數。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 分頁中監控傳輸進度" class="img-large img-center" />

## 使用 Folder Compare 驗證

傳輸完成後,從 Home 分頁開啟 **Compare**,左側選擇 Gofile,右側選擇 B2。篩選 left-only 檔案可以看到未能抵達的檔案,篩選 different 檔案可以發現大小不一致的檔案。Copy right 會補齊缺少的檔案,而不會重新傳送已經一致的檔案。Job History 會記錄每次執行的狀態、大小與耗時,為這次遷移留下紀錄。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 顯示 Gofile 與 B2 之間的差異" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用 Access Token 新增 Gofile 遠端,並使用限定儲存貯體的應用程式金鑰新增 Backblaze B2 遠端。
3. 並排開啟兩個遠端,執行 **Dry Run**,然後複製或同步資料夾。
4. 在清理 Gofile 端之前,使用 **Compare** 確認沒有遺漏。

在 B2 中擁有經過驗證的副本,能把臨時的分享連結變成由您掌控的備份。

---

**相關指南:**

- [將 Gofile 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-gofile-to-google-drive-rcloneview)
- [管理 Gofile 儲存空間](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [將 IDrive e2 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-idrive-e2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
