---
slug: manage-dropbox-business-cloud-sync-backup-rcloneview
title: "管理 Dropbox for Business 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - casey
description: "將 Dropbox for Business 連接到 RcloneView，實現團隊帳戶的跨平台檔案瀏覽、雲端對雲端同步與排程備份。"
keywords:
  - dropbox for business
  - dropbox business 同步
  - rcloneview dropbox business
  - dropbox business 備份
  - dropbox_business rclone
  - 企業級 dropbox 儲存空間
  - 商業雲端儲存 gui
  - dropbox 團隊帳戶同步
  - 多雲端檔案管理
  - dropbox business 遷移
tags:
  - RcloneView
  - dropbox
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Dropbox for Business 儲存空間 — 使用 RcloneView 同步與備份檔案

> 將 Dropbox for Business 團隊帳戶連接到 RcloneView，與你管理的所有其他雲端服務一起瀏覽、同步並備份團隊共用資料夾。

Dropbox for Business 帳戶整理檔案的方式與個人版 Dropbox 不同：團隊資料夾、由管理員管理的空間，以及共用工作區都位於企業登入之後。RcloneView 可直接連接這些團隊帳戶，讓 IT 管理員與團隊主管能在同一個視窗中瀏覽、傳輸並備份企業內容，不必在 Dropbox 網頁應用程式與獨立的桌面用戶端之間來回切換。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定 Dropbox for Business 遠端連線

在 RcloneView 中新增 Dropbox for Business 帳戶的方式，與新增個人版 Dropbox 連線相同：點選 New Remote，選擇 Dropbox，接著在瀏覽器中完成 OAuth 登入。差別僅在一項額外設定——在遠端連線上啟用 `dropbox_business = true`，告訴連線改以團隊帳戶而非個人帳戶進行驗證。設定完成後，企業帳戶的團隊資料夾會像其他遠端連線一樣顯示在 Explorer 面板中。

由於 RcloneView 能在 Windows、macOS 與 Linux 上，從同一個視窗掛載並同步 90 多個服務，同時管理 Dropbox for Business 租戶與其他部門雲端服務的管理員，可以在同一個工作階段中處理一切，不必為每個服務切換不同應用程式。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Dropbox for Business remote in RcloneView" class="img-large img-center" />

## 瀏覽團隊資料夾與共用空間

連線完成後，File Explorer 面板會顯示 Dropbox for Business 的資料夾結構，使用與其他遠端連線相同的名稱、類型、修改日期與大小欄位。橫跨多個部門的團隊資料夾，可透過可摺疊的資料夾樹輕鬆瀏覽，麵包屑路徑列的 Copy Full Path 選項會輸出撰寫指令碼或傳遞給內建 rclone Terminal 所需的 `remote:path` 格式。

使用 Ctrl+Click 或 Shift+Click 進行多選，能輕鬆從龐大的團隊空間中取出特定專案資料夾，而不必處理整個帳戶。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Dropbox for Business team folders in RcloneView Explorer" class="img-large img-center" />

## 將企業資料備份到第二個雲端

僅依賴單一服務存放業務關鍵檔案風險較高，因此許多團隊會將 Dropbox for Business 的內容鏡像到 Amazon S3、Backblaze B2 或其他雲端，作為第二份備份。RcloneView 的 4 步驟 Sync 精靈可直接處理這項需求：選擇 Dropbox for Business 遠端連線作為來源，選擇目的地遠端連線，然後選擇單向同步，使備份目的地始終反映來源內容，而不會覆寫上游資料。篩選設定可讓你排除大型媒體檔案，或將備份限制在一定期限內的資料夾，讓工作聚焦於真正需要保護的內容。

在首次同步前執行 Dry Run，可準確顯示將複製哪些檔案，這在遷移整個團隊帳戶的資料前，有助於先確認範圍。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Dropbox for Business backup job in RcloneView" class="img-large img-center" />

## 自動化定期備份

PLUS 授權使用者可為 Dropbox for Business 備份工作設定 crontab 格式的排程，使其在夜間或每週自動執行，無需人工介入。之後，Job History 會記錄每次排程執行的類型、耗時、狀態與傳輸的總大小，讓管理員無需翻查 Dropbox 自身的活動記錄，即可取得可供檢閱的稽核紀錄。

## 開始使用

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增一個 Dropbox 遠端連線，並在設定過程中啟用 `dropbox_business` 設定。
3. 在 Explorer 面板中瀏覽團隊資料夾，確認可存取所需的共用空間。
4. 建立 Sync 工作，將企業資料鏡像到第二個雲端；若使用 PLUS 授權，亦可設定排程。

正確設定的 Dropbox for Business 遠端連線，能讓 RcloneView 成為團隊資料實用的安全網——這類資料往往只存放在單一位置。

---

**相關指南：**

- [使用 RcloneView 管理 Dropbox 儲存空間 — 同步與備份檔案](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [將 Dropbox Business 遷移到 Google Workspace — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [將 Dropbox 備份到 AWS S3 — 使用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
