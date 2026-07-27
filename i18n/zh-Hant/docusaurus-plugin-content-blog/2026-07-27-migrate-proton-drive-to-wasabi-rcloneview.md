---
slug: migrate-proton-drive-to-wasabi-rcloneview
title: "將Proton Drive遷移至Wasabi — 使用RcloneView傳輸檔案"
authors:
  - kai
description: "透過RcloneView的直接雲端對雲端傳輸功能,將加密檔案從Proton Drive移動到Wasabi物件儲存,無需先下載至本機。"
keywords:
  - Proton Drive遷移至Wasabi
  - Proton Drive到Wasabi傳輸
  - 雲端對雲端遷移
  - Wasabi物件儲存備份
  - Proton Drive備份
  - 傳輸Proton Drive檔案
  - RcloneView 遷移
  - 加密雲端儲存遷移
tags:
  - RcloneView
  - proton-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將Proton Drive遷移至Wasabi — 使用RcloneView傳輸檔案

> 無需先經過本機磁碟,直接將檔案從Proton Drive移動到Wasabi物件儲存。

Proton Drive專為注重隱私的個人儲存而設計,但並不適合Wasabi所擅長處理的工作負載 —— 大型媒體庫、應用程式備份,或需要從其他工具進行S3相容存取的資料集。當使用者的需求超出Proton Drive的適用範圍,或只是想要一份更便宜的長期副本時,RcloneView可以在兩者之間直接移動檔案,而不必先將所有內容下載到本機,方法是同時連接這兩個遠端連線。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端連線

在RcloneView中,Proton Drive透過電子郵件和密碼(可選雙重驗證)進行設定,而Wasabi則作為S3相容遠端連線新增,需要使用Access Key ID、Secret Access Key以及對應的區域端點。兩個遠端連線都會以分頁形式顯示在檔案總管中,因此使用者可以在開始傳輸之前,於一個面板中瀏覽Proton Drive資料夾,於另一個面板中瀏覽Wasabi儲存貯體。

<img src="/support/images/en/blog/new-remote.png" alt="在RcloneView中設定Proton Drive與Wasabi遠端連線" class="img-large img-center" />

RcloneView在FREE授權下也能以完整的讀寫權限連接S3、Azure與Backblaze B2,因此設定本次遷移的Wasabi端無需任何付費方案。

## 執行雲端對雲端傳輸

在兩個遠端連線都開啟的情況下,將資料夾從Proton Drive面板拖曳到Wasabi面板即可觸發直接複製 —— 資料透過RcloneView從Proton Drive串流至Wasabi,完全不經過本機磁碟。對於更大規模的遷移,同步精靈是更好的工具:它支援從Proton Drive來源到Wasabi目標儲存貯體的正式單向同步,並可設定並行傳輸數量,以充分利用可用頻寬。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在RcloneView中從Proton Drive到Wasabi的雲端對雲端檔案傳輸" class="img-large img-center" />

對於任何大規模遷移,先執行Dry Run(模擬執行)模式都值得一試 —— 它會在實際搬移任何內容之前,列出將要複製的確切檔案清單,以便及早發現篩選設定錯誤或非預期的資料夾結構。

## 確認遷移已完成

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="在RcloneView中將檔案拖放傳輸至Wasabi遠端連線" class="img-large img-center" />

同步工作完成後,底部資訊檢視中的傳輸分頁會顯示已移動的檔案總數、傳輸速度以及工作過程中遇到的任何錯誤。對於以已儲存工作而非一次性傳輸方式執行的遷移,工作記錄會保留永久紀錄 —— 開始時間、耗時、總大小與完成狀態 —— 因此在停用Proton Drive副本之前,有清楚的日誌可以確認每個檔案都已成功抵達Wasabi。

## 開始使用

1. 從[rcloneview.com](https://rcloneview.com/src/download.html)**下載RcloneView**。
2. 使用您的帳戶電子郵件和密碼新增Proton Drive遠端連線。
3. 使用Access Key、Secret Key與區域端點新增Wasabi遠端連線。
4. 先執行Dry Run,然後執行同步,並於工作記錄中確認傳輸結果。

一旦有了經過驗證的日誌,顯示每個檔案都已安全抵達Wasabi,停用Proton Drive資料夾這件事就會輕鬆許多。

---

**相關指南:**

- [管理Proton Drive — 使用RcloneView同步與備份檔案](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [管理Wasabi儲存空間 — 使用RcloneView同步與備份檔案](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [將Proton Drive遷移至Backblaze B2 — 使用RcloneView傳輸檔案](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
