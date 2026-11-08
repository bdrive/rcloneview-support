---
slug: migrate-zoho-workdrive-to-wasabi-rcloneview
title: "將 Zoho WorkDrive 遷移到 Wasabi — 使用 RcloneView 傳輸檔案"
authors:
  - morgan
description: "使用 RcloneView 將 Zoho WorkDrive 遷移到 Wasabi 物件儲存：連接兩個遠端、Dry Run、雲端到雲端複製，並用 Folder Compare 驗證。"
keywords:
  - 將 Zoho WorkDrive 遷移到 Wasabi
  - Zoho WorkDrive 到 Wasabi
  - Zoho WorkDrive 匯出
  - Wasabi 物件儲存遷移
  - Zoho WorkDrive 備份
  - 雲端到雲端傳輸
  - rclone GUI 遷移
  - RcloneView Wasabi
tags:
  - RcloneView
  - zoho
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Zoho WorkDrive 遷移到 Wasabi — 使用 RcloneView 傳輸檔案

> 將 Zoho WorkDrive 團隊資料夾封存到 Wasabi 儲存貯體，無需在自己的磁碟上暫存任何內容。

當專案結束、部門更換工具，或財務部門希望採用成本更低的長期封存時，團隊會離開 Zoho WorkDrive。Wasabi 是適合這種封存角色的 S3 相容目標，但手動移動成千上萬個檔案很慢。RcloneView 在一個視窗中連接這兩項服務，先進行 Dry Run，再執行雲端到雲端複製，之後再進行比較。像 Wasabi 這樣的 S3 相容儲存，在 FREE 授權下即可連接並擁有完整的讀寫權限。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Zoho WorkDrive 和 Wasabi

開啟 Remote 分頁並選擇 New Remote。Zoho WorkDrive 在設定時需要選擇區域，請選擇與你的 Zoho 帳戶相符的資料中心。Wasabi 作為 S3 相容遠端新增：輸入存取金鑰、私密金鑰以及儲存貯體所在區域的端點。

當兩者都出現在 Remote Manager 中後，在兩個 Explorer 面板中開啟它們。在移動任何內容之前，先在左側瀏覽團隊資料夾，在右側瀏覽儲存貯體。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Zoho WorkDrive 和 Wasabi 遠端" class="img-large img-center" />

## 規劃複製並執行 Dry Run

確定哪些內容屬於封存。在工作精靈的第 3 步中，你可以設定最大檔案年齡、最大檔案大小或資料夾深度限制，並新增自訂規則，例如排除 `.git/` 資料夾。請選擇 Copy 工作而不是鏡像同步，這樣目的地端不會有任何內容被刪除。

然後執行 Dry Run。它會列出所有將被複製或刪除的檔案，而不會更改任何一方，這是發現資料夾或篩選器錯誤成本最低的時機。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 Zoho WorkDrive 到 Wasabi 的雲端到雲端傳輸" class="img-large img-center" />

## 執行傳輸並監控

啟動工作，並在 Transferring 分頁中追蹤進度，其中顯示進度、速度和檔案數量。在第 2 步中，對於大型封存，你可以提高檔案傳輸數量；如果 Zoho 一側回應較慢，請讓 equality checkers 保持適中。"Retry entire sync if fails" 預設值為 3，可應對暫時性的網路錯誤。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="監控從 Zoho WorkDrive 到 Wasabi 的傳輸" class="img-large img-center" />

## 使用 Folder Compare 和 Job History 驗證

工作完成後，開啟 Compare，一側放 Zoho WorkDrive，另一側放 Wasabi 儲存貯體。僅左側有、僅右側有和不同檔案的篩選器會顯示仍然缺少的內容，複製操作可傳輸剩餘檔案。Job History 記錄每次執行的狀態、大小和檔案數量，也可以作為遷移紀錄。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="遷移後比較 Zoho WorkDrive 和 Wasabi" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 Zoho WorkDrive（含其區域）和 Wasabi 新增為遠端。
3. 建立帶有篩選器的 Copy 工作並執行 Dry Run。
4. 執行工作，然後在停用來源端之前用 Folder Compare 確認。

在 Compare 顯示兩側一致之前，請保留 Zoho 中的資料。

---

**相關指南：**

- [使用 RcloneView 管理 Zoho WorkDrive 儲存空間](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [使用 RcloneView 將 Zoho WorkDrive 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-backblaze-b2-rcloneview)
- [管理 Wasabi 儲存空間 — 使用 RcloneView 同步和備份檔案](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
