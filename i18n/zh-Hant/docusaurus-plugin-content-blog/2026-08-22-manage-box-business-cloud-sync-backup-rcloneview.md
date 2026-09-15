---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "管理 Box for Business 儲存空間 — 用 RcloneView 同步與備份檔案"
authors:
  - robin
description: "將 Box for Business 連接到 RcloneView,實現企業 Box 帳戶的跨平台檔案瀏覽、雲對雲同步與排程備份。"
keywords:
  - box for business
  - box 企業儲存
  - rcloneview box business
  - box business 同步
  - box_sub_type enterprise
  - 企業雲端儲存 gui
  - box 團隊帳戶備份
  - 企業雲端儲存管理
  - box business 移轉
  - 多雲檔案管理
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Box for Business 儲存空間 — 用 RcloneView 同步與備份檔案

> 將 Box for Business 企業帳戶連接到 RcloneView,與你管理的所有其他雲端一起瀏覽、同步並備份共用的公司資料夾。

Box for Business 帳戶是以企業管理的資料夾為核心來組織內容,而不是單一的個人帳戶,因此標準的 Box 連接需要一項額外設定才能正常運作。RcloneView 直接處理這一點,讓 IT 管理員可以在單一視窗中瀏覽、傳輸並保護企業 Box 內容,不必在 Box 網頁應用程式與另一個獨立的同步用戶端之間切換。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定 Box for Business 遠端

新增 Box for Business 帳戶的方式與新增個人 Box 連接相同:點選 New Remote,選擇 Box,然後在瀏覽器中完成 OAuth 登入。差別只在於一項額外設定——`box_sub_type = enterprise`——此設定會將遠端指向企業帳戶結構,而非個別使用者的空間。套用該設定後,企業帳戶的資料夾會像其他任何遠端一樣載入 Explorer 面板。

與僅支援掛載的工具不同,RcloneView 在 FREE 授權下也能同步與比較資料夾,因此需要同時管理 Box 與其他部門雲端的管理員,不必為了在它們之間搬移檔案而另外使用一個應用程式。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## 瀏覽企業資料夾

連線後,File Explorer 面板會顯示企業資料夾結構,使用與所有其他遠端相同的 Name、Type、Modified date 與 Size 欄位,並提供可折疊的資料夾樹,方便瀏覽深層的部門階層。麵包屑路徑列的 Copy Full Path 選項會以 `remote:path` 格式輸出路徑,在把位置交給內建的 rclone Terminal 進行快速的 `rclone about` 儲存空間檢查時相當實用。

使用 Ctrl+Click 與 Shift+Click 多選,可以從龐大的企業空間中取出特定的專案資料夾,而不必逐一瀏覽整個帳戶。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Box for Business enterprise folders in RcloneView Explorer" class="img-large img-center" />

## 將企業資料備份到第二個雲端

將企業檔案只保留在單一供應商,是許多 IT 團隊不願承擔的風險,因此將 Box for Business 內容鏡像到 Amazon S3、Backblaze B2 或其他雲端作為第二份副本,是常見的做法。RcloneView 的 4 步驟 Sync 精靈可以完成這項工作:選擇 Box for Business 遠端作為來源,選擇目的地遠端,並將同步方向設為單向,這樣備份目的地會反映來源內容,而不會影響上游的任何東西。Filtering 設定可以排除過大的媒體檔案,或將工作限制在一定期限內的檔案,讓備份範圍聚焦在真正重要的內容上。

在第一次完整同步之前執行 Dry Run,可以顯示將被複製與刪除的檔案確切清單,這在搬移整個企業帳戶的資料之前相當值得一做。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Box for Business backup job in RcloneView" class="img-large img-center" />

## 自動化定期備份

PLUS 授權使用者可以為 Box for Business 備份工作附加 crontab 格式的排程,使其每晚或每週自動執行,不需人工介入。之後,Job History 會記錄每次執行的執行類型、耗時、狀態與傳輸的總大小,讓管理員不必查閱 Box 本身的管理主控台就能檢視紀錄。

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增一個新的 Box 遠端,並在設定時設定 `box_sub_type = enterprise`。
3. 在 Explorer 面板中瀏覽企業資料夾,確認可以存取所需的部門。
4. 建立一個 Sync 工作,將企業資料鏡像到第二個雲端,若是 PLUS 授權使用者,也可以設定排程。

正確設定的 Box for Business 遠端,能讓 RcloneView 成為原本只存在於一處的公司資料的實用保障。

---

**相關指南:**

- [用 RcloneView 管理 Box 儲存空間 — 同步與備份檔案](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [將 Box 移轉到 OneDrive — 用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)
- [將 Box 儲存空間掛載為網路磁碟機 — 使用 RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
