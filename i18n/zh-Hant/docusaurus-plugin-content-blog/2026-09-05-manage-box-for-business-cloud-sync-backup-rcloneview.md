---
slug: manage-box-for-business-cloud-sync-backup-rcloneview
title: "管理 Box for Business — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "將 Box for Business 連接到 RcloneView,與 90 多個其他服務商一起瀏覽、同步、掛載並備份企業雲端檔案。"
keywords:
  - Box for Business
  - Box 企業儲存
  - RcloneView
  - 企業雲端同步
  - 雲端儲存管理
  - 雲端備份軟體
  - box_sub_type enterprise
  - 多雲檔案管理
  - 企業雲端儲存
  - 資料夾比較工具
tags:
  - RcloneView
  - box
  - enterprise
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Box for Business — 使用 RcloneView 同步與備份檔案

> 把企業的 Box for Business 帳戶當成任何其他磁碟機來處理 — 在一個桌面應用程式中完成瀏覽、同步、掛載與備份。

Box for Business 帳戶中往往存放著多年累積、分散在層層巢狀團隊資料夾裡的部門共用檔案,IT 人員需要一種可靠的方式來檢視、搬移並保護這些內容,而不必整天待在瀏覽器分頁裡。RcloneView 透過與個人 Box 帳戶相同的 OAuth 登入方式連接到 Box for Business,接著套用企業專屬的設定旗標,讓應用程式能看到組織完整的資料夾結構。連接後,該帳戶在 RcloneView 的檔案總管、同步與掛載工具中的運作方式與其他遠端相同,同步與資料夾比較功能在 FREE 授權下即可使用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定 Box for Business 遠端

在 RcloneView 中建立新遠端並選擇 Box — 應用程式會開啟瀏覽器進行標準 OAuth 登入,因此不需要 API 金鑰或手動輸入權杖。使用公司的 Box 帳號登入以授權連線。

Box for Business 帳戶除了個人 Box 登入之外,還需要一項額外設定:在遠端的進階設定中輸入 `box_sub_type = enterprise`。這會告訴 rclone 檢視組織的共用團隊結構,而非單一個人帳戶,這正是讓全公司資料夾出現在 RcloneView 檔案總管面板中的原因。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中建立新的 Box for Business 遠端" class="img-large img-center" />

如果你需要管理跨多個部門的多個 Box for Business 帳戶,Remote Manager 會將每個帳戶分開保存,方便你各自獨立編輯憑證或 enterprise 旗標。

## 比較與同步企業資料夾

在將某個部門從舊檔案伺服器遷移出來,或整理重複的團隊資料夾之前,使用 Folder Compare 準確查看 Box for Business 資料夾與目標位置之間的差異。比較畫面會依僅左側存在、僅右側存在、相同、不同來篩選結果,讓你只複製缺少的內容,而不必重新上傳所有檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="將 Box for Business 資料夾與另一個雲端遠端進行比較與同步" class="img-large img-center" />

為了持續保護資料,單向同步工作會在不動到來源的情況下,讓重要 Box for Business 資料夾的副本保持最新,而 dry run 會在實際搬移任何檔案之前,準確顯示將複製或刪除哪些檔案。

## 排程備份並監控工作

使用 Job Manager 可以設定將相同的 Box for Business 內容同時鏡像到兩個目的地的同步、複製或 1:N 工作 — 例如同時鏡像到本機 NAS 與一個 S3 相容儲存貯體,這樣一項同步工作就能同時滿足現場與異地備份需求。之後 Job History 會記錄每次執行的開始時間、耗時、狀態與檔案數量,方便管理員確認夜間備份是否確實完成。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程定期的 Box for Business 備份工作" class="img-large img-center" />

PLUS 授權使用者可以透過 crontab 風格的排程進一步自動化,讓備份在夜間執行,不需要任何人手動觸發。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增一個 Box 遠端,並使用公司帳戶完成 OAuth 登入。
3. 編輯遠端的進階設定,設定 `box_sub_type = enterprise` 以解鎖公司資料夾。
4. 設定同步工作或掛載,開始管理你的 Box for Business 內容。

當企業 Box 帳戶與所有其他遠端並列出現在同一介面中時,日常檔案管理與災難復原備份就不再是兩套獨立的工作流程了。

---

**相關指南:**

- [管理 Box 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [如何從 Box 遷移到 SharePoint 或 OneDrive — 使用 RcloneView 進行企業雲端遷移](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [使用 RcloneView 將 Box 儲存空間掛載為網路磁碟機,實現無縫團隊存取](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
