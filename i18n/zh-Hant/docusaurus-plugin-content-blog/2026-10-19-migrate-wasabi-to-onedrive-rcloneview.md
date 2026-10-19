---
slug: migrate-wasabi-to-onedrive-rcloneview
title: "將 Wasabi 遷移到 OneDrive — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 Wasabi 遷移到 OneDrive：連接兩個遠端，先以 Dry Run 預覽，再以雲端對雲端方式複製儲存貯體資料，並透過 Folder Compare 驗證。"
keywords:
  - Wasabi 遷移到 OneDrive
  - Wasabi 到 OneDrive 傳輸
  - 將 Wasabi 儲存貯體移到 OneDrive
  - RcloneView Wasabi
  - RcloneView OneDrive
  - 雲端對雲端遷移
  - Wasabi OneDrive 同步
  - S3 到 OneDrive
tags:
  - RcloneView
  - wasabi
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Wasabi 遷移到 OneDrive — 使用 RcloneView 傳輸檔案

> 透過可預覽、可驗證的雲端對雲端複製，把 Wasabi 儲存貯體中的資料移入 OneDrive，而不必先下載再重新上傳。

將專案封存存放在 Wasabi 的團隊，有時需要將這些資料放入 OneDrive，因為同事們已在 Microsoft 365 中工作。物件儲存和檔案同步服務的行為不同，盲目複製可能會帶來意外。RcloneView 並排連接兩個服務，以 Dry Run 預覽作業，並在完成後驗證結果。您可以在 FREE 授權下以完整讀寫權限連接 S3、Azure 或 Backblaze B2，同時還能使用其他 90 多個提供者。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Wasabi 和 OneDrive

Wasabi 透過 rclone 的 S3 通訊協定存取，因此您需要輸入 Access Key、Secret Key 以及 Wasabi 區域的端點。OneDrive 使用瀏覽器 OAuth：RcloneView 會開啟 Microsoft 登入頁面，您核准存取後，無需複製任何金鑰即可連接遠端。

在兩個 Explorer 面板中開啟這兩個遠端。瀏覽儲存貯體和 OneDrive 資料夾樹，了解資料目前的位置以及應該存放的位置。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Wasabi 和 OneDrive 遠端" class="img-large img-center" />

## 規劃複製

試想一家設計工作室，有多個存放已完成專案資料夾的儲存貯體。與其一次遷移全部內容，不如每個作業複製一個儲存貯體或前綴。較短的作業更容易重試，也更容易檢查。

若 OneDrive 中已有需要保留的檔案，請選擇 Copy 而非 Sync，因為單向同步會讓目的地與來源保持一致。在篩選步驟中，您可以限制檔案大小或時間範圍，並使用 Document、Image、Video 等預先定義的群組。另外，請事先檢查檔案名稱：物件金鑰可能包含 OneDrive 會拒絕的字元或過長的路徑，因此花一分鐘執行 Dry Run 是值得的。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="遷移前比較 Wasabi 和 OneDrive 資料夾" class="img-large img-center" />

## 執行傳輸

若只是快速的一次性操作，請將資料夾從 Wasabi 面板拖曳到 OneDrive 面板。在不同遠端之間拖曳執行的是複製而非移動，因此在您滿意之前，儲存貯體保持不變。若需重複執行，可透過四步驟精靈儲存作業：儲存空間、進階設定、篩選器和排程（排程功能需要 PLUS）。

在 Transferring 索引標籤中查看速度、檔案數量和進度。如果大規模執行時 OneDrive 變慢，請在 Advanced Settings 中降低同時檔案傳輸數。同步作業失敗時會重試整個執行（預設：3 次）。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 Wasabi 到 OneDrive 的雲端對雲端傳輸" class="img-large img-center" />

## 驗證並保留紀錄

複製完成後，在兩個根目錄上開啟 Folder Compare。篩選器會顯示僅在左側、僅在右側、相同和不同的檔案，您可以一鍵複製缺少的項目。Job History 會記錄開始時間、持續時間、狀態和已傳輸的檔案數，同時也可作為遷移日誌。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Wasabi 遷移到 OneDrive 的作業歷史記錄" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Wasabi 遠端（存取金鑰、密鑰、區域端點）和 OneDrive 遠端（瀏覽器登入）。
3. 對一個前綴執行 Dry Run，然後執行複製作業。
4. 使用 Folder Compare 驗證，並對其餘儲存貯體重複上述步驟。

分階段且經過驗證的遷移，意味著在停用儲存貯體之前，每個檔案都已獲得確認。

---

**相關指南：**

- [將 OneDrive 遷移到 Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [管理 Wasabi 儲存空間](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Dry Run：傳輸前預覽同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
