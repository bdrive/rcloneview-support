---
slug: manage-rackcorp-object-storage-cloud-sync-rcloneview
title: "管理 RackCorp 物件儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "將 RackCorp 的 S3 相容物件儲存連接到 RcloneView,享受拖放式檔案瀏覽、排程同步與跨雲備份。"
keywords:
  - RackCorp 物件儲存
  - RackCorp S3
  - RcloneView RackCorp
  - 管理 RackCorp 檔案
  - RackCorp 雲端備份
  - RackCorp 同步
  - S3 相容儲存 GUI
  - 物件儲存 GUI 用戶端
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 RackCorp 物件儲存 — 使用 RcloneView 同步與備份檔案

> 使用與管理其他所有雲端相同的拖放工作流程,瀏覽、同步並備份 RackCorp 物件儲存儲存桶。

RackCorp 的 S3 相容物件儲存為團隊提供了大型超大規模雲端供應商之外的區域性替代方案,但管理儲存桶通常代表要在獨立的 CLI 工具或瀏覽器主控台分頁之間來回切換。RcloneView 透過 rclone 的 S3 通訊協定連接 RackCorp,並將你的儲存桶與 Google Drive、OneDrive 或其他任何已管理的遠端存放在同一個檔案總管視窗中。與僅支援掛載的工具不同,RcloneView 在 FREE 授權下也能同步並比較資料夾。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 RackCorp 連接到 RcloneView

新增 RackCorp 物件儲存的方式與新增其他任何 S3 相容供應商相同:開啟 Remote 分頁 > New Remote,選擇 S3 相容選項,然後輸入你的 Access Key ID、Secret Access Key 以及 RackCorp 端點 URL。RcloneView 會將這些憑證直接傳遞給 rclone 的設定,因此無需安裝額外的驅動程式或外掛 — 內建的 rclone 執行檔會處理通訊協定協商。

遠端建立完成後,會在 Explorer 面板中顯示為新的分頁。你可以使用 List View 瀏覽儲存桶以檢視詳細中繼資料,或切換至 Thumbnail View,如果你儲存的是圖片並想快速進行視覺瀏覽。左側的資料夾樹狀結構可讓你在前綴之間跳轉,而不需要重新輸入路徑。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中為 RackCorp 物件儲存新增新的 S3 相容遠端" class="img-large img-center" />

在檔案清單中對任一物件按右鍵即可存取 Copy、Cut、Rename、Get Size 或 Get Public Link — 與本機檔案使用的相同右鍵選單,直接套用於你的 RackCorp 儲存桶。

## 將 RackCorp 與其他雲端同步

物件儲存很少單獨使用。常見的模式是在 Google Drive 或 OneDrive 中保留一份日常編輯用的工作副本,同時將完成的資產封存到 RackCorp,以獲得更便宜、更長期的保存。RcloneView 的 4 步驟 Sync 精靈可以不使用終端機就完成這一切:選擇 RackCorp 做為來源或目的地,設定篩選器以排除暫存檔案或過大的資產,然後選擇單向同步,讓封存只接收新資料。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中設定 RackCorp 與另一個遠端之間的雲端對雲端同步工作" class="img-large img-center" />

在開始完整傳輸之前,先執行 Dry Run 精確預覽將要複製或刪除的檔案。這在物件儲存情境中特別有用,因為意外重新上傳大型儲存桶可能會浪費頻寬和時間。

## 透過排程工作自動化備份

對於使用 PLUS 授權的團隊,RackCorp 同步工作可以按照 crontab 風格的排程執行,而不需要每次都手動觸發。只要設定一次分鐘、小時與星期欄位,RcloneView 就會在背景保持你的 RackCorp 儲存桶維持最新狀態 — 之後可以在 Job History 分頁中確認每次執行的狀態、傳輸速度與檔案數量。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中為 RackCorp 物件儲存設定排程同步工作" class="img-large img-center" />

如果資料完整性比原始速度更重要,可以在 Advanced Settings 步驟中啟用檢查碼驗證 — RcloneView 會比對檔案雜湊值,而不只是大小與時間戳記,藉此捕捉傳輸過程中的靜默損毀。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往 Remote 分頁 > New Remote,選擇 RackCorp 的 S3 相容選項。
3. 輸入你的 Access Key ID、Secret Access Key 與 RackCorp 端點以完成連接。
4. 設定同步或備份工作,讓 RackCorp 與你的其他雲端遠端保持同步。

連接完成後,RackCorp 的運作方式就與 RcloneView 工作區中的任何其他分頁相同 — 不需要獨立的主控台,也不需要記憶 CLI 參數。

---

**相關指南:**

- [管理 Scaleway 物件儲存 — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 Selectel 雲端儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [VFS 快取 — 在 RcloneView 中實現更快的雲端掛載效能](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />
