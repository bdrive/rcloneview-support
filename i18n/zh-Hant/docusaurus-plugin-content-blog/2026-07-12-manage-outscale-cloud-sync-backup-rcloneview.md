---
slug: manage-outscale-cloud-sync-backup-rcloneview
title: "管理 Outscale 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - morgan
description: "將 Outscale Object Storage 連接至 RcloneView，於 Windows、macOS 與 Linux 上進行 S3 相容的檔案瀏覽、同步與備份。"
keywords:
  - Outscale storage
  - Outscale Object Storage
  - S3-compatible storage GUI
  - RcloneView Outscale
  - cloud backup software
  - sync Outscale to cloud
  - manage cloud storage GUI
  - object storage sync tool
  - multi-cloud file manager
  - S3 credentials setup
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

# 管理 Outscale 儲存空間 — 使用 RcloneView 同步與備份檔案

> 透過圖形化介面瀏覽、同步並備份 Outscale Object Storage 的儲存桶，不必再於命令列中手動處理 S3 憑證。

Outscale Object Storage 是透過 rclone 的 S3 相容協定進行存取，這代表設定時需要 Access Key、Secret Key 以及 endpoint——這些資訊在設定檔中很容易打錯。RcloneView 將此設定流程包裝成引導式表單，並在此之上加入完整的檔案總管、同步引擎與工作排程器，讓已將資料儲存於 Outscale 的團隊能以管理其他遠端相同的方式進行管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Outscale 連接為 S3 相容遠端

在 RcloneView 中新增 Outscale 的流程,與其他 S3 相容服務相同：開啟 Remote 分頁 > New Remote，選擇 S3-compatible 類型，然後輸入 Access Key ID、Secret Access Key 以及 Outscale 的 endpoint。若您的 Outscale 整合已透過伺服器上共用的 rclone daemon 運作，Connect Manager 也可讓 RcloneView 指向外部的 rclone 執行個體。

遠端儲存完成後，會以獨立分頁的形式出現在 Explorer 面板中，與其他已設定的雲端或本機儲存空間並列。您可以透過 Alias 遠端為此連線重新命名，將深層巢狀的儲存桶路徑縮短為日常操作更容易辨識的名稱。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Outscale S3-compatible remote in RcloneView" class="img-large img-center" />

## 瀏覽、同步與備份 Outscale 資料

連接遠端後，File Explorer 會提供雙面板檢視，讓您比較 Outscale 上的內容與本機資料夾或另一個雲端遠端的差異。在兩個不同遠端之間以拖放方式操作，會觸發複製動作；右鍵選單則涵蓋重新命名、刪除、取得大小以及下載/上傳等日常檔案操作。

針對定期備份，Sync 精靈可在四個步驟中設定來源與目的地、傳輸並行數，以及篩選規則，包括最大檔案存留天數等選項與媒體或文件類型的預設篩選器。像 Outscale 這類 S3 相容服務，在 FREE 授權下即可連接並取得完整的讀寫權限——無需升級即可將資料寫回儲存桶。1:N 同步可在單一工作中將同一個 Outscale 儲存桶鏡像至多個目的地，適用於備份需要同時存放於本機硬碟與第二個雲端遠端的情境。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Outscale storage and another remote" class="img-large img-center" />

## 自動化定期 Outscale 備份

Job Manager 會將您建立的每個同步、複製或移動工作彙整於單一清單中，每次執行都會記錄於 Job History，並附上狀態、傳輸大小與檔案數量。Dry Run 可讓您在實際傳輸前，預覽究竟會複製或刪除哪些檔案——這在對新的 Outscale 儲存桶進行首次大量同步前，是相當實用的安全檢查。

PLUS 授權使用者可為工作附加類似 crontab 的排程，讓 Outscale 備份依循固定間隔自動執行，並可透過模擬功能在儲存前預覽即將執行的時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Outscale storage" class="img-large img-center" />

## 將 Outscale 掛載為本機磁碟機

Outscale 儲存空間也可掛載為虛擬磁碟機，讓其他桌面應用程式能像存取本機檔案一樣讀寫儲存桶內容。掛載設定包括 VFS cache 模式（預設：writes）、快取大小限制與唯讀模式，掛載動作可直接從遠端面板的工具列或專用的 Mount Manager 啟動。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting an Outscale bucket as a local drive in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Remote 分頁 > New Remote，選擇 S3-compatible 選項以輸入您的 Outscale 憑證與 endpoint。
3. 使用 Folder Compare 或拖放方式，將現有資料移至 Outscale，接着設定 Sync 工作以進行持續備份。
4. 將此工作加入 Job Manager，若使用 PLUS 授權，可附加排程使備份無需人工介入即可自動執行。

遠端設定完成後，Outscale 儲存空間的運作方式就與 RcloneView 中的其他連線相同——可瀏覽、可同步，並可依排程進行備份。

---

**相關指南：**

- [管理 Wasabi 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [管理 Scaleway Object Storage — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 Hetzner Object Storage — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
