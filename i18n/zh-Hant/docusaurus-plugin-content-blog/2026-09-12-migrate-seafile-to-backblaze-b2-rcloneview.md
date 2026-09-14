---
slug: migrate-seafile-to-backblaze-b2-rcloneview
title: "將 Seafile 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用跨平台 GUI 工具 RcloneView,將自架 Seafile 的資料庫遷移至 Backblaze B2,實現可靠的雲端對雲端傳輸。"
keywords:
  - 將 seafile 遷移至 backblaze b2
  - seafile backblaze b2 遷移
  - seafile 雲端備份
  - 自架到雲端遷移
  - backblaze b2 gui
  - rcloneview seafile
  - 跨平台檔案傳輸
  - seafile 資料庫備份
tags:
  - RcloneView
  - seafile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Seafile 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 不需要碰觸命令列,就能將您自架的 Seafile 資料庫遷移至 Backblaze B2 物件儲存空間。

在自有硬體或私有伺服器上運行 Seafile 的團隊,最終都會遇到瓶頸:本地磁碟空間耗盡、伺服器維護變得繁重,或是專案需要一份異地副本以進行災難復原。Backblaze B2 為這類資料提供了具成本效益且耐用可靠的儲存目的地,但要在自架同步平台與物件儲存之間協調傳輸,是大多數檔案管理工具都處理得不太好的一件事。RcloneView 能在同一個視窗中將 Seafile 與 Backblaze B2 都連接為遠端,讓您直接瀏覽、比較並移動資料庫。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Seafile 與 Backblaze B2 連接為遠端

Seafile 的新增方式與其他遠端相同,加入 RcloneView 後,您會取得一份可瀏覽的資料庫檔案清單,並附有資料夾樹狀結構與路徑導覽列。Backblaze B2 則需要在建立遠端時直接輸入 Application Key ID 與 Application Key——不需要 OAuth 轉向,也不需要另外設定 CLI。兩個遠端都會以分頁顯示,您可以使用水平或垂直分割,在一個面板開啟 Seafile,在另一個面板開啟您的 B2 儲存桶。

與僅支援掛載的工具不同,RcloneView 即使在 FREE 授權下也能進行同步與資料夾比較,因此您不必只靠簡單的拖放來完成一次性遷移。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote alongside Seafile in RcloneView" class="img-large img-center" />

當兩個遠端都顯示出來後,較小的資料庫可以直接在面板之間拖放傳輸,而需要重試與篩選的大型持續傳輸,則可以設定為 Sync 工作。

## 以 Sync 工作執行遷移

若要完整遷移一個資料庫,請設定一個以 Seafile 為來源、以您的 Backblaze B2 儲存桶為目的地的 Sync 工作。四步驟精靈中可以設定同時檔案傳輸數與多執行緒傳輸數,這在遷移共享文件庫中常見的數千個小型檔案時格外重要。啟用總和檢查碼比較後,系統會依雜湊值與檔案大小驗證檔案,而不是傳輸一次後就視為正確無誤。

在正式執行傳輸之前,先執行 Dry Run,準確預覽將會複製哪些檔案。這在遷移一個已使用多年的資料庫時特別有用,因為它能在過時或異常龐大的檔案佔用 B2 儲存空間之前先揭露出來。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Seafile to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

## 篩選並驗證傳輸結果

Seafile 資料庫中常混雜著各種文件類型、暫存檔案,以及版本歷程留下的產物,而您並不希望這些內容在 B2 中重複出現。RcloneView 的篩選設定讓您能依檔案類型、路徑或存留時間排除項目——例如,在與程式碼相關的資料庫中略過 `.git/` 資料夾,或在封存遷移時排除超過指定年限的檔案。自訂篩選器使用簡單的模式,例如 `.iso` 用於排除副檔名,`/.git/*` 用於排除根層級路徑。

工作完成後,Job History 會記錄執行類型、耗時、總大小、傳輸速度與檔案數量,讓您在有人詢問遷移是否順利完成時,能有記錄可供參考。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Seafile to Backblaze B2 migration" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用您的帳戶憑證,將 Seafile 伺服器新增為遠端。
3. 使用 Application Key ID 與 Application Key 建立 Backblaze B2 遠端。
4. 設定從 Seafile 到 B2 的 Sync 工作,先執行 Dry Run,再執行並於 Job History 中確認。

擺脫自架基礎架構,並不代表要從零重建您的工作流程——當兩端都在同一個檔案總管視窗中時,遷移就成為一項可追蹤的單一工作。

---

**相關指南:**

- [管理 Storj 去中心化雲端同步](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [將 Nextcloud 同步至 Backblaze B2](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [解決 Seafile 同步錯誤](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
