---
slug: manage-synology-c2-cloud-sync-backup-rcloneview
title: "管理 Synology C2 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "將 Synology C2 連接到 RcloneView，輕鬆管理您的雲端備份。透過精緻的桌面圖形化介面同步檔案、排程工作並監控傳輸狀態。"
keywords:
  - Synology C2 RcloneView
  - Synology C2 備份
  - 管理 Synology C2 儲存空間
  - Synology C2 rclone 圖形化介面
  - S3 相容雲端同步
  - Synology 雲端儲存備份
  - 自動化 Synology C2 同步
  - RcloneView S3 設定
  - Synology C2 檔案傳輸
  - Synology C2 排程備份
tags:
  - RcloneView
  - synology
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Synology C2 儲存空間 — 使用 RcloneView 同步與備份檔案

> Synology C2 是 Synology 專為其打造的雲端儲存服務 — 而透過 RcloneView，您可以在視覺化介面中管理它，完全不需要輸入任何指令。

Synology C2 是專為擴展 Synology NAS 使用者生態系統而設計的雲端儲存服務，提供與 rclone 相關工具無縫整合的 S3 相容物件儲存。無論您是在家中運行 DiskStation、管理小型企業的檔案伺服器，或是需要額外的異地備份層級，RcloneView 都能讓您輕鬆瀏覽、同步並自動化與 Synology C2 之間的傳輸工作。由於 Synology C2 提供標準的 S3 相容 API，您可以獲得如同任何主流物件儲存供應商一樣可靠的 rclone 效能 — 並且包裝在簡潔的桌面圖形化介面中。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Synology C2 連接為 S3 相容遠端

Synology C2 物件儲存使用標準的 S3 相容 API，因此您可以在 RcloneView 中選擇 Amazon S3 作為遠端類型，並指向 Synology C2 的端點來完成連線。開啟「遠端」分頁，點擊「新增遠端」，並選擇 Amazon S3 作為提供者。輸入您的 C2 存取金鑰 ID（Access Key ID）、私密存取金鑰（Secret Access Key），以及您 C2 帳戶的區域端點 — 這些資訊可在建立儲存空間並產生存取金鑰組後，於 Synology C2 入口網站取得。將區域欄位設定為與您的 C2 區域相符，然後儲存。

遠端建立完成後，會如同其他任何雲端儲存一樣出現在您的檔案總管面板中。您可以瀏覽儲存桶（bucket）與資料夾、檢視檔案大小與修改日期，並在不離開圖形化介面的情況下瀏覽巢狀目錄結構。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Synology C2 S3-compatible remote in RcloneView" class="img-large img-center" />

## 瀏覽與傳輸檔案

當您在其中一個檔案總管面板開啟 Synology C2 遠端，並在相鄰面板開啟本機磁碟或另一個雲端服務時，您可以將檔案拖曳到另一側以立即開始傳輸。RcloneView 會在執行任何動作前先向您確認操作內容，畫面下方的「傳輸中」分頁則會顯示即時進度：檔案數量、已傳輸位元組數，以及目前的傳輸速率。

對於大量資料 — 例如一間攝影工作室要備份 2 TB 的 RAW 檔案 — RcloneView 的多執行緒引擎可以平行移動多個檔案。您可以在工作的「進階設定」中設定並行傳輸串流數，在不佔滿網路連線的前提下將傳輸效率最大化。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into Synology C2 storage in RcloneView" class="img-large img-center" />

## 建立同步工作以持續備份

除了單次傳輸外，RcloneView 的工作管理員（Job Manager）還能讓您定義「同步」工作，依需求或依排程將來源資料夾與 Synology C2 儲存桶保持鏡像同步。選擇「同步」作為工作類型，選取來源 — 可以是本機資料夾、Synology NAS 遠端，或另一個雲端服務 — 將目的地指向您的 C2 儲存桶，並設定篩選偏好設定：檔案存留時間限制、大小上限，以及副檔名排除規則，全部都能在不編輯任何設定檔的情況下進行配置。

在第一次正式執行同步之前，請先執行內建的「試跑」（Dry Run）功能。它會準確顯示哪些檔案將被複製或移除，讓您在處理數千個檔案時也不會有任何意外。工作歷史記錄會記載每一次執行的時間戳記、檔案數量、傳輸大小與狀態代碼，提供完整的稽核軌跡。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Synology C2 in RcloneView" class="img-large img-center" />

## 排程自動化備份（PLUS 授權）

若要實現免人工介入的資料保護，RcloneView 的 PLUS 授權可解鎖如同 crontab 般的排程功能。只需在工作精靈的「排程」步驟中填入分鐘、小時與星期欄位，即可設定 Synology C2 同步工作在每晚、每週或任何自訂間隔執行。RcloneView 會在設定的時間執行傳輸，並將結果記錄在工作歷史中 — 讓您擁有完整的稽核軌跡，即使您不在電腦旁，也能確認備份已經執行，並準確得知傳輸了哪些檔案。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Synology C2 backup job in RcloneView" class="img-large img-center" />

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Synology C2 入口網站中，建立一個儲存桶並產生一組存取金鑰。
3. 在 RcloneView 中，開啟「遠端」分頁 > 「新增遠端」，選擇 Amazon S3，並輸入您的 C2 存取金鑰 ID、私密存取金鑰與區域端點。
4. 在檔案總管面板中開啟 C2 儲存桶並與來源並排顯示，在工作管理員中建立同步工作，並先執行試跑。
5. 啟用排程功能（PLUS 授權），無需人工介入即可自動執行每晚或每週的備份。

Synology C2 為您提供緊密整合的異地備份層級 — RcloneView 則能將其轉化為只需數分鐘即可設定完成、具備排程與監控功能的工作流程。

---

**相關指南：**

- [使用 RcloneView 將 NAS 備份到多個雲端](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [使用 RcloneView 管理 Wasabi 雲端同步與備份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [不使用 Hyper Backup 備份 Synology — RcloneView](https://rcloneview.com/support/blog/backup-synology-without-hyper-backup-rcloneview)

<CloudSupportGrid />
