---
slug: manage-rackcorp-cloud-sync-backup-rcloneview
title: "管理 RackCorp 物件儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - morgan
description: "將 RackCorp 物件儲存連接到 RcloneView,與 90+ 種其他雲端服務供應商一起實現跨平台同步、備份與掛載。"
keywords:
  - RackCorp 儲存
  - RackCorp 雲端備份
  - RackCorp RcloneView
  - S3 相容物件儲存 GUI
  - 同步 RackCorp 儲存
  - 備份 RackCorp
  - 掛載物件儲存到本機磁碟機
  - 多雲端檔案管理員
  - 雲端儲存同步工具
  - 物件儲存備份軟體
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

> 將 RackCorp 的 S3 相容物件儲存與其他雲端、本機磁碟機和 NAS 共用資料夾整合到同一個視窗中。

已經在 RackCorp 上運行基礎架構的團隊,常常還得同時使用另一個 S3 用戶端,才能在儲存貯體中搬移檔案。RcloneView 將 RackCorp 視為與其他遠端完全相同的物件來處理,省去了這道額外步驟——在同一個檔案總管中瀏覽、同步、掛載,並與 Google Drive、S3 或本機磁碟並列備份。與僅支援掛載的工具不同,RcloneView 在 FREE 授權下也提供同步與資料夾比較(Folder Compare)功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 RackCorp 新增為遠端

RackCorp 透過 rclone 的 S3 通訊協定存取,因此設定方式與其他 S3 相容服務相同:需要 Access Key ID、Secret Access Key,以及正確的區域端點。開啟 Remote 分頁 > New Remote,選擇 S3 相容選項,貼上來自 RackCorp 帳戶的憑證。

儲存後,RackCorp 會以獨立分頁的形式出現在檔案總管面板中,與你已設定的其他遠端並列。無需記住儲存貯體路徑——資料夾樹狀結構與路徑列可讓你直覺瀏覽,若需要在內建的 rclone 終端機中使用,按右鍵 > Copy Full Path 即可取得 `remote:bucket/path` 格式的字串。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增一個 S3 相容遠端" class="img-large img-center" />

## 與 RackCorp 之間的同步與備份

遠端連線後,使用 Sync 精靈建立可重複執行的備份工作。步驟 1 設定本機或雲端來源與 RackCorp 目標資料夾;步驟 2 可調整同時檔案傳輸數與多執行緒傳輸數,以應付大型資料集;步驟 3 依檔案類型、大小或期限套用篩選規則,避免將暫存檔與快取傳送到儲存貯體中。

先執行一次 Dry Run,準確預覽即將複製或刪除的檔案,再正式提交傳輸——這能在影響正式環境資料之前,先發現資料夾對應的錯誤。若是需要重複執行的工作,將其儲存於 Job Manager 中,之後即可在 Job History 裡查看完整的傳輸記錄。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="設定傳送到 RackCorp 儲存的排程備份工作" class="img-large img-center" />

## 將 RackCorp 掛載為本機磁碟機

若你希望將 RackCorp 中的物件當作一般檔案來使用,可以將儲存貯體掛載為虛擬磁碟機。在檔案總管中選取遠端資料夾,點擊面板工具列中的掛載圖示,然後選擇一種 VFS 快取模式——Writes 模式會先在本機緩衝變更再上傳,是穩妥的預設選擇。

已掛載的儲存貯體會顯示在 Mount Manager 中,你可以在那裡卸載、於原生檔案瀏覽器中重新開啟,或無需將主視窗切換至前景,直接從系統匣切換掛載狀態。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="從 Remote Explorer 將 RackCorp 儲存貯體掛載為本機磁碟機" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 RackCorp 帳戶中產生 Access Key ID 與 Secret Access Key。
3. 使用 Remote 分頁 > New Remote,將 RackCorp 新增為新的 S3 相容遠端。
4. 依照你的工作流程,建立同步工作或直接掛載儲存貯體。

一旦 RackCorp 連接到 RcloneView,它就不再是需要切換情境才能使用的獨立工具,而是成為你日常備份流程中的另一個目的地。

---

**相關指南:**

- [管理 Linode 物件儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)
- [管理 Hetzner 物件儲存 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)
- [使用 RcloneView 將 Amazon S3 遷移至 Cloudflare R2](https://rcloneview.com/support/blog/migrate-amazon-s3-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
