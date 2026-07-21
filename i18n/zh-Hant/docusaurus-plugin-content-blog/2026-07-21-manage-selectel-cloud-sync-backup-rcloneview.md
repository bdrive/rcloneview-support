---
slug: manage-selectel-cloud-sync-backup-rcloneview
title: "管理Selectel儲存空間 — 使用RcloneView同步與備份檔案"
authors:
  - alex
description: "將Selectel Object Storage連接到RcloneView,在Windows、macOS和Linux上實現S3相容的檔案瀏覽、同步、掛載與備份。"
keywords:
  - Selectel儲存空間
  - Selectel Object Storage
  - S3相容儲存GUI
  - RcloneView Selectel
  - 雲端備份軟體
  - Selectel雲端同步
  - 雲端儲存GUI管理
  - 物件儲存同步工具
  - 多雲檔案管理員
  - S3憑證設定
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

# 管理Selectel儲存空間 — 使用RcloneView同步與備份檔案

> 透過圖形化介面瀏覽、同步並備份Selectel Object Storage儲存桶,不必再手動於設定檔中編輯S3憑證。

Selectel Object Storage透過rclone的S3相容協定進行存取,這代表連線時需要一次就正確輸入Access Key、Secret Key與端點。RcloneView將這項設定流程轉化為引導式表單,並結合完整的檔案總管、同步引擎與工作排程器,讓已在Selectel上儲存資料的團隊,能以管理其他任何遠端儲存相同的方式來管理它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將Selectel連接為S3相容遠端

在RcloneView中新增Selectel的流程,與用於其他S3相容服務的憑證輸入流程相同:開啟Remote分頁 > New Remote,選擇S3相容選項,然後輸入Access Key ID、Secret Access Key以及Selectel的端點。如果你的Selectel整合已透過伺服器上共用的rclone daemon運作,Connect Manager也能讓RcloneView指向外部rclone執行個體,而非使用內建rclone。

儲存後,該遠端會在Explorer面板中以獨立分頁顯示,與已設定的其他雲端或本機儲存並列。Alias遠端可以將層級很深的儲存桶路徑縮短為更容易日常瀏覽的短名稱。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Selectel S3-compatible remote in RcloneView" class="img-large img-center" />

## 瀏覽、同步與備份Selectel資料

遠端連線完成後,File Explorer的雙窗格版面可讓你將Selectel上的內容與本機資料夾或另一個雲端遠端並排比較。在不同遠端之間拖曳檔案會觸發複製操作,右鍵選單則涵蓋重新命名、刪除、取得大小以及下載/上傳等日常檔案管理功能。

對於定期備份,Sync精靈會以四個步驟依序引導你完成來源與目的地的選擇、傳輸並行數以及篩選規則的設定,並提供最大檔案存留時間以及針對媒體或文件類型的預先定義篩選器等選項。像Selectel這樣的S3相容服務,在FREE授權下即可取得完整的讀寫存取權 — 不需升級即可將資料寫回儲存桶。1:N同步可在一次工作中將同一個Selectel儲存桶鏡像至多個目的地,當備份需要同時存放在本機磁碟和第二個雲端遠端時相當實用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Selectel storage and another remote" class="img-large img-center" />

## 自動化定期的Selectel備份

Job Manager將每一個同步、複製或移動工作集中於一份清單中管理,每次執行都會連同狀態、傳輸大小和檔案數量一併記錄在Job History中。Dry Run能在實際執行傳輸之前,精確預覽哪些檔案將被複製或刪除 — 在對新的Selectel儲存桶進行首次大規模同步之前,這一步很值得檢查。

PLUS授權使用者可為工作附加crontab風格的排程,讓Selectel備份按固定週期自動執行,並提供模擬選項,可在儲存排程前預覽接下來的執行時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Selectel storage" class="img-large img-center" />

## 將Selectel掛載為本機磁碟

Selectel儲存空間也可以掛載為虛擬磁碟,讓其他桌面應用程式能像存取本機檔案一樣讀寫儲存桶內容。掛載設定包括VFS快取模式(預設:writes)、快取大小上限與唯讀模式,掛載可以從遠端的面板工具列或專用的Mount Manager啟動。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Selectel bucket as a local drive in RcloneView" class="img-large img-center" />

## 快速上手

1. 從[rcloneview.com](https://rcloneview.com/src/download.html)**下載RcloneView**。
2. 開啟Remote分頁 > New Remote,選擇S3相容選項,輸入你的Selectel憑證與端點。
3. 使用Folder Compare或拖放操作,將現有資料移轉到Selectel,然後設定Sync工作以進行持續備份。
4. 將工作新增至Job Manager,並在PLUS授權下附加排程,使備份無需人工介入即可執行。

設定好遠端後,Selectel儲存空間的運作方式就與RcloneView中的其他連線相同 — 可瀏覽、可同步、可掛載,並隨時能依排程完成備份。

---

**相關指南:**

- [管理IONOS物件儲存 — 使用RcloneView同步與備份檔案](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [管理Vultr物件儲存 — 使用RcloneView同步與備份檔案](https://rcloneview.com/support/blog/manage-vultr-object-storage-cloud-sync-backup-rcloneview)
- [管理Linode物件儲存 — 使用RcloneView同步與備份檔案](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
