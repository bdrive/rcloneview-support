---
slug: migrate-pcloud-to-backblaze-b2-rcloneview
title: "將 pCloud 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將檔案從 pCloud 遷移至 Backblaze B2 的逐步指南。透過 OAuth 與 App Key 連接、以 Dry Run 預覽,並執行同步工作。"
keywords:
  - migrate pCloud to Backblaze B2
  - pCloud Backblaze B2 transfer
  - pCloud migration RcloneView
  - pCloud to B2 sync
  - cloud-to-cloud migration
  - Backblaze B2 archive
  - pCloud backup alternative
  - RcloneView cloud migration
tags:
  - pcloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 pCloud 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 從 pCloud 移轉到 Backblaze B2 可以讓您獲得更便宜的封存儲存空間 — RcloneView 直接處理雲端對雲端的傳輸,資料不必經過您的機器。

pCloud 是一個可靠的個人雲端儲存服務,提供終身方案選項,但若要封存大量資料,Backblaze B2 依 GB 計費的方式通常更具成本效益。無論您是要整合雲端服務,還是要新增 B2 作為封存層,RcloneView 都能讓遷移變得簡單:連接兩個服務商、以 Dry Run 預覽,然後執行同步工作。整個傳輸過程都是雲端對雲端進行。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 步驟 1 — 連接 pCloud

開啟 RcloneView 並前往 **Remote Manager**。點選 **New Remote**,並從服務商清單中選擇 **pCloud**。pCloud 使用 OAuth 瀏覽器登入 — RcloneView 會開啟您的瀏覽器,您登入並授權後,權杖(token)即會被儲存。無需手動管理 API 金鑰。

授權完成後,在 File Explorer 中開啟 pCloud 遠端,確認可以看到您的檔案與資料夾。記下您要遷移的頂層目錄。

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 步驟 2 — 連接 Backblaze B2

仍在 **Remote Manager** 中,再次點選 **New Remote**,並選擇 **Backblaze B2**。Backblaze B2 使用 **Application Key ID** 與 **Application Key** 進行驗證 — 兩者皆可在 Backblaze 主控台的 **App Keys** 下找到。建立一組具有適當權限的金鑰(對目標儲存桶擁有讀寫權限,若是遷移作業則可對所有儲存桶開放)。在 RcloneView 中輸入這兩個值並儲存。

開啟 B2 遠端以確認能載入您的儲存桶。如果目標儲存桶尚未建立,您可以直接在 RcloneView 的檔案總管中,於根目錄按右鍵建立。

## 步驟 3 — 設定遷移工作

前往 **Jobs** 並點選 **New Job**。將 pCloud 設為來源,並選擇特定資料夾或根目錄。將 Backblaze B2 設為目的地,並選擇目標儲存桶與路徑。

在工作精靈的第 2 步中,檢視傳輸選項:

- 先啟用 **Dry Run**,以確切了解將複製哪些內容
- 將 **transfers** 設為 4–8,以取得速度與 API 穩定性之間的平衡
- 若想在傳輸後確認檔案完整性,可啟用 **checksum verification**

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from pCloud to Backblaze B2" class="img-large img-center" />

## 步驟 4 — 先執行 Dry Run,再進行實際遷移

啟用 Dry Run 後,點選 **Run**。RcloneView 會記錄它將要傳輸的內容 — 檔案名稱、大小與數量 — 但不會實際進行任何變更。在 **Log** 分頁中檢視輸出結果。如果清單看起來正確,請回到工作設定,停用 Dry Run,再次執行。

實際遷移是以雲端對雲端方式進行:pCloud 直接將資料傳送至 B2,不會經過您的本機,因此本機頻寬不會成為瓶頸。傳輸速度取決於兩個服務商的伺服器。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the pCloud to Backblaze B2 migration job" class="img-large img-center" />

## 驗證遷移結果

工作完成後,開啟 **Folder Compare** 工具,並將其指向 pCloud 來源與 B2 目的地。RcloneView 會比較兩側內容並標示出任何差異。對於高價值資料,這個步驟可以在您從 pCloud 移除檔案之前,確認遷移已完整完成。

Job History 會記錄完整的執行過程:總檔案數、傳輸的資料量、耗時,以及任何錯誤。請保留此紀錄以供參考。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 **Remote Manager** 中,透過 OAuth 連接 pCloud,並透過 Application Key 連接 Backblaze B2。
3. 建立一個以 pCloud 為來源、B2 為目的地的同步工作;先執行一次 Dry Run。
4. 停用 Dry Run 並執行遷移;使用 Folder Compare 進行驗證。

確認遷移完成後,Backblaze B2 將為您在 pCloud 中的所有內容,提供耐用且具成本效益的封存儲存空間。

---

**相關指南:**

- [使用 RcloneView 將 pCloud 備份至 AWS S3](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [使用 RcloneView 將 pCloud 遷移至 OneDrive](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [使用 RcloneView 進行 Checksum 驗證的雲端遷移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
