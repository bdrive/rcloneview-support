---
slug: migrate-yandex-disk-to-wasabi-rcloneview
title: "將 Yandex Disk 遷移到 Wasabi — 使用 RcloneView 傳輸檔案"
authors:
  - alex
description: "使用 RcloneView 將 Yandex Disk 遷移到 Wasabi 物件儲存：連接兩個遠端，執行 Dry Run，進行雲端到雲端複製，並透過 checksum 驗證。"
keywords:
  - 將 Yandex Disk 遷移到 Wasabi
  - Yandex Disk 備份
  - Wasabi 遷移
  - RcloneView Yandex Disk
  - RcloneView Wasabi
  - 雲端到雲端傳輸
  - S3 備份
  - rclone GUI
  - 物件儲存遷移
  - 雲端遷移工具
tags:
  - RcloneView
  - yandex-disk
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Yandex Disk 遷移到 Wasabi — 使用 RcloneView 傳輸檔案

> 無需經過本機中轉，將 Yandex Disk 封存複製到 Wasabi 儲存貯體，並確認每個檔案都已送達。

Yandex Disk 適合作為個人雲端硬碟，但長期封存和共享專案資料通常更適合放在 S3 相容的物件儲存中，由您自行掌控儲存貯體和存取金鑰。RcloneView 在一個視窗中將 Yandex Disk 和 Wasabi 連接為遠端並執行兩者之間的傳輸，因此您無需先把數 TB 的資料暫存到本機磁碟。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定兩個遠端

Yandex Disk 透過瀏覽器登入：在 **Remote > New Remote** 下選擇它，核准存取，遠端即可連接。Wasabi 以 S3 相容提供者的方式設定。在 Wasabi 主控台中建立儲存貯體，產生 Access Key 和 Secret Key，然後將它們連同儲存貯體所在區域的端點一起輸入 RcloneView。

Wasabi 是 S3 相容提供者，因此可以使用與其他 S3 相容服務相同的遠端設定方式。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Yandex Disk 和 Wasabi 遠端" class="img-large img-center" />

## 選擇要遷移的內容

在一個檔案總管面板中瀏覽 Yandex Disk，在另一個面板中瀏覽您的 Wasabi 儲存貯體。常見做法是用一個儲存貯體存放封存，並讓儲存貯體中的頂層資料夾與 Yandex 的資料夾一一對應。物件儲存沒有真正的資料夾，因此請保持命名一致，並避免過長的路徑。

如果磁碟上有可捨棄的檔案，請使用作業的篩選步驟依副檔名、最大大小或檔案存在時間將其排除，這樣只會遷移您需要的內容。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="在 RcloneView 中於 Yandex Disk 和 Wasabi 之間拖放檔案" class="img-large img-center" />

## Dry Run 與傳輸

建立一個以 Yandex Disk 為來源、以 Wasabi 儲存貯體為目的地的作業。選擇 Copy，使來源資料在您驗證結果之前保持完整。執行 **Dry Run** 預覽檔案清單，然後啟動作業。在 Advanced Settings 中，您可以啟用 **checksum** 比較（在提供者支援時檢查雜湊值和大小），並在 Yandex 變慢時調整並行檔案傳輸數量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="即時監控從 Yandex Disk 到 Wasabi 的傳輸" class="img-large img-center" />

## 驗證並安排後續作業

作業完成後，對兩個位置開啟 **Compare**，找出 left-only 或不相符的檔案，並在比較檢視中複製遺漏的檔案。如果過渡期間仍在使用 Yandex Disk，PLUS 授權允許您依 crontab 風格的時間排程作業，使新檔案持續進入 Wasabi，直到您完成切換。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="排程從 Yandex Disk 到 Wasabi 的定期作業" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Remote > New Remote** 新增 Yandex Disk 和 Wasabi。
3. 建立 Copy 作業，執行 Dry Run，然後開始傳輸。
4. 在刪除來源端任何內容之前，先用 Folder Compare 進行驗證。

一旦封存存放在您掌控的儲存貯體中，停用舊副本就成為一個深思熟慮的決定，而不是一場賭注。

---

**相關指南：**

- [管理 Yandex Disk 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [管理 Wasabi 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 進行 checksum 驗證的雲端遷移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
