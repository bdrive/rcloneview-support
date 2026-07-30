---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "管理 Petabox 儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - steve
description: "將相容 S3 的物件儲存服務 Petabox 連接至 RcloneView，實現跨平台檔案瀏覽、同步與自動備份。"
keywords:
  - Petabox 儲存
  - Petabox 物件儲存
  - S3 相容儲存 GUI
  - RcloneView Petabox
  - 雲端備份軟體
  - 將 Petabox 同步至雲端
  - 管理雲端儲存 GUI
  - 物件儲存同步工具
  - 多雲檔案管理員
  - S3 憑證設定
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

# 管理 Petabox 儲存 — 使用 RcloneView 同步與備份檔案

> 透過圖形介面瀏覽、同步並備份 Petabox 物件儲存儲存桶，不必在設定檔中手動編輯 S3 憑證。

Petabox 透過 rclone 的 S3 相容協定連接，因此連接時需要提供 Access Key、Secret Key 與端點 URL —— 這類設定在命令列中很容易出錯。RcloneView 將這個流程轉換為引導式表單，並搭配完整的雙面板檔案總管、同步引擎與工作排程器，讓已在 Petabox 上儲存資料的團隊，能在同一個視窗中與所有其他遠端一起管理它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Petabox 新增為 S3 相容遠端

在 RcloneView 中新增 Petabox 使用的憑證輸入流程與其他任何 S3 相容服務相同：開啟 Remote 分頁 > New Remote，選擇 S3 相容類型，然後輸入 Access Key ID、Secret Access Key 與 Petabox 端點。若您的 Petabox 整合已透過伺服器上共用的 rclone 常駐程式運作，Connect Manager 可讓 RcloneView 指向該外部 rclone 執行個體，而非使用內建的執行個體。

儲存後，該遠端會以獨立分頁的形式出現在 Explorer 面板中，與已設定的其他雲端或本機儲存並列。使用 Alias 遠端可將深層巢狀的儲存桶路徑縮短為便於日常導覽的簡短名稱。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

## 瀏覽、同步與備份 Petabox 資料

遠端連接後，File Explorer 的雙面板版面配置讓您能輕鬆比較 Petabox 上既有的內容與本機資料夾或另一個雲端遠端。在不同遠端之間拖放會觸發複製，右鍵選單則涵蓋重新命名、刪除、取得大小以及下載/上傳等日常檔案操作。

對於定期備份，四步驟 Sync 精靈可處理來源與目的地、傳輸並行數，以及篩選規則，包括最大檔案存在時間，以及針對媒體或文件類型的預先定義篩選器等選項。像 Petabox 這樣的 S3 相容服務在 FREE 授權下即可獲得完整的讀寫存取權 —— 無需升級授權即可將資料寫回儲存桶。1:N 同步可在單一工作中將同一個 Petabox 儲存桶鏡射到多個目的地，當備份需要同時存放於本機硬碟與第二個雲端供應商時十分實用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Petabox storage and another remote" class="img-large img-center" />

## 自動化定期的 Petabox 備份

Job Manager 將所有同步、複製或搬移工作集中於一個清單，每次執行都會連同狀態、傳輸大小與檔案數一併記錄在 Job History 中。Dry Run 會在實際執行傳輸前，準確預覽將要複製或刪除的檔案 —— 在對新的 Petabox 儲存桶進行大規模首次同步之前值得先確認一下。

PLUS 授權使用者可為工作附加 crontab 形式的排程，讓 Petabox 備份按週期自動執行，並提供模擬選項，可在儲存前預覽即將到來的執行時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Petabox storage" class="img-large img-center" />

## 將 Petabox 掛載為本機磁碟機

Petabox 儲存也可以掛載為虛擬磁碟機，讓其他桌面應用程式能像讀寫本機檔案一樣讀寫儲存桶內容。掛載設定包括 VFS 快取模式（預設：writes）、快取大小限制與唯讀模式，掛載動作可從遠端的面板工具列啟動，也可從專用的 Mount Manager 啟動。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Petabox bucket as a local drive in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Remote 分頁 > New Remote，選擇 S3 相容選項以輸入您的 Petabox 憑證與端點。
3. 使用 Folder Compare 或拖放操作將現有資料移至 Petabox，然後設定 Sync 工作以進行持續備份。
4. 將工作加入 Job Manager，並於 PLUS 上附加排程，讓備份無需人工介入即可執行。

設定好遠端後，Petabox 儲存的運作方式就與 RcloneView 中的任何其他連線相同 —— 可瀏覽、可同步，並準備好依排程進行備份。

---

**相關指南：**

- [管理 Outscale 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-outscale-cloud-sync-backup-rcloneview)
- [管理 Scaleway 物件儲存 — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 Selectel 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
