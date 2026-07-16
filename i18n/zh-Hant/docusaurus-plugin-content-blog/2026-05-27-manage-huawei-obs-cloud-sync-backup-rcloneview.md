---
slug: manage-huawei-obs-cloud-sync-backup-rcloneview
title: "管理華為 OBS 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - alex
description: "使用 RcloneView 管理華為 OBS 儲存桶 — 透過 GUI 同步、備份與傳輸檔案。相容 S3 的設定、排程工作，以及跨雲端傳輸。"
keywords:
  - Huawei OBS
  - Huawei Object Storage Service
  - RcloneView Huawei OBS
  - sync Huawei OBS
  - backup files to Huawei OBS
  - cloud storage management GUI
  - S3-compatible storage RcloneView
  - Huawei cloud file manager
  - OBS bucket sync rclone
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理華為 OBS 儲存空間 — 使用 RcloneView 同步與備份檔案

> 將華為 OBS 儲存桶連接至視覺化檔案管理員，然後在不使用命令列的情況下跨雲端同步與備份檔案。

華為物件儲存服務（Object Storage Service，OBS）是一套可擴展的企業級物件儲存平台，廣泛應用於亞太地區部署以及全球企業環境。無論您是在管理數 TB 等級的資料湖，還是在備份區域辦公室的專案封存資料，OBS 都能提供大型組織所期待的可靠性。RcloneView 透過其相容 S3 的 API 連接至華為 OBS，提供完整的 GUI 體驗，讓您可以瀏覽儲存桶、傳輸檔案並執行自動化備份工作——讓您的團隊可以把時間花在實際工作上，而不是記憶 rclone 的參數。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 RcloneView 連接至華為 OBS

在 RcloneView 中新增華為 OBS 作為遠端，其設定流程與阿里雲 OSS 或 IDrive E2 等相容 S3 的供應商相同。在 **Remote** 分頁中，點擊 **New Remote**，選擇 S3 供應商類型，然後從供應商清單中選取華為 OBS。您需要提供三項憑證：Access Key ID、Secret Access Key，以及您 OBS 儲存桶的區域端點 URL。華為的端點格式為 `obs.{region}.myhuaweicloud.com`——例如華北 4 區的端點為 `obs.cn-north-4.myhuaweicloud.com`。

設定完成後，RcloneView 的檔案總管面板會將您的 OBS 儲存桶顯示為最上層資料夾。您可以使用麵包屑路徑列瀏覽巢狀物件前綴，在清單檢視與縮圖檢視之間切換，並一目瞭然地檢視檔案中繼資料——名稱、大小與修改日期。左側的資料夾樹狀結構讓您在多儲存桶環境中，能輕鬆找到特定資料集，而不必在扁平的檔案清單中不斷捲動。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Huawei OBS as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView 也支援最多四個同時開啟的檔案總管面板，因此您可以開啟一個面板連接您的 OBS 儲存桶，另一個面板連接本機磁碟機或其他雲端供應商——不必切換視窗即可進行並排比較。

## 將檔案同步與備份至華為 OBS

RcloneView 的 4 步驟同步精靈讓您可以輕鬆建立以華為 OBS 為目標的定期備份工作。設定您的來源（本機資料夾、NAS 路徑，或其他雲端遠端）與目的地（OBS 儲存桶前綴），為工作命名，然後設定進階選項。提高並行傳輸數量可加快高頻寬連線上的傳輸速度，而啟用校驗碼驗證則可確保每個檔案都完整送達——這在遷移一個 2TB 的工程圖面或財務記錄資料集，且不容許出現無聲損毀時，特別有價值。

篩選功能可讓您的 OBS 儲存桶保持精簡且具成本效益。排除您不需要封存的大型檔案類型（`.iso`、`.vmdk`），使用最大存在時間篩選器將同步範圍限制在最近一段時間內修改過的檔案，或限制資料夾深度以避免複製深層巢狀的暫存目錄。對於有法規遵循要求的組織而言，這些篩選器可確保每次執行時只有正確的檔案會送達 OBS，而不需要每次都手動選取。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Huawei OBS in RcloneView" class="img-large img-center" />

在第一次正式執行前，請先執行試跑模擬——RcloneView 會準確顯示哪些檔案將被新增或移除，而不會實際變動任何資料，這在同步正式環境儲存桶時是相當重要的安全防護機制。

## 排程自動化備份與監控工作

擁有 RcloneView PLUS 授權後，您的華為 OBS 備份可透過類似 crontab 的排程方式自動執行。您可以設定每個工作日凌晨 02:00 執行差異備份、每週日執行一次完整儲存桶同步，或任何符合您資料生命週期的排程週期。精靈中的排程模擬器會預覽接下來五次的執行時間，方便您在確認排程前先行驗證。

工作歷程記錄提供每次執行的完整稽核軌跡——開始時間、持續時間、傳輸速度、檔案數量、傳輸總大小，以及最終狀態（已完成、發生錯誤或已取消）。對於需要跨多個 OBS 區域管理法規封存的團隊而言，這份記錄同時也可作為內部稽核的文件依據。PLUS 授權持有者還可以設定工作完成通知，讓相關人員能在工作完成或失敗的當下立即收到提醒。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Huawei OBS sync jobs in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 **Remote** 分頁 → **New Remote** → 選擇 **S3** → 選取 **Huawei OBS**。
3. 輸入您的 Access Key ID、Secret Access Key，以及區域 OBS 端點 URL。
4. 在檔案總管中瀏覽您的儲存桶，並透過 **Job Manager** 建立同步或備份工作。

連接完成後，華為 OBS 在 RcloneView 中的行為就如同任何其他磁碟機一般——讓您的團隊擁有可靠、以 GUI 驅動的方式，無需 CLI 負擔即可存取企業級物件儲存。

---

**相關指南：**

- [管理阿里雲 OSS — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理騰訊雲 COS 物件儲存](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 與 R2 儲存空間](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
