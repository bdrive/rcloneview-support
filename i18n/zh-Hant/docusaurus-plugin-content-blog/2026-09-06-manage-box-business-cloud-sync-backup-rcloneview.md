---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "管理 Box for Business — 使用 RcloneView 進行企業級雲端同步與備份"
authors:
  - casey
description: "在 RcloneView 中設定 Box for Business,為你管理員配置的 Box 帳戶實現企業級同步、備份與掛載工作流程。"
keywords:
  - Box for Business
  - 管理 Box for Business
  - Box 企業雲端同步
  - Box 商業備份
  - RcloneView Box
  - box_sub_type enterprise
  - 企業雲端儲存同步
  - Box 帳戶備份工具
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

# 管理 Box for Business — 使用 RcloneView 進行企業級雲端同步與備份

> Box for Business 帳戶需要額外設定一項,RcloneView 才能看到管理員配置的所有內容 — 以下說明如何正確設定。

標準 Box 遠端對個人帳戶來說運作良好,但 Box for Business(企業版)帳戶在底層的資料夾與權限結構上有所不同。如果你以連接個人 Box 帳戶的方式連接它,某些企業管理的內容可能不會出現在檔案總管中。RcloneView 透過在遠端上設定專用的 `box_sub_type = enterprise` 來解決這個問題,讓團隊的共用資料夾、共同擁有的內容以及管理員配置的儲存空間都能正確顯示。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定 Box for Business 遠端

首先建立新的遠端,並選擇 Box 作為供應商 — 以瀏覽器為基礎的 OAuth 登入方式與個人帳戶相同,因此不需要另外學習憑證流程。差異出現在驗證之後:開啟該遠端的進階設定,並設定 `box_sub_type = enterprise`。這會告訴 rclone(RcloneView 運作所仰賴的引擎)解析企業範圍的資料夾結構,而非個人帳戶的預設結構。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中建立新的 Box for Business 遠端" class="img-large img-center" />

設定完成後,瀏覽該遠端的方式與其他遠端相同 — 資料夾樹狀導覽、縮圖預覽,以及檔案操作(複製、剪下、重新命名、刪除)在個人帳戶或商業級帳戶下都運作一致。

## 同步與備份企業版 Box 內容

IT 團隊常見的情境是將 Box for Business 帳戶備份到次要位置 — 內部部署的 NAS、另一個雲端,或用於冷歸檔的 S3 相容物件儲存。建立一個以 Box for Business 為來源的同步工作,將方向設定為單向的「僅修改目的地」,以達成安全且非破壞性的備份,並先執行一次 dry run,準確預覽將要複製的內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中設定 Box for Business 備份同步工作" class="img-large img-center" />

對於需要在數十個 Box 資料夾之間管理共用磁碟機的部門,依最大檔案存留時間或預先定義的文件篩選器進行篩選,可讓夜間工作只專注於發生變更的內容,而不必每次都重新掃描整個帳戶。RcloneView 在 FREE 授權下也支援同步與資料夾比較,因此企業備份工作流程不需要升級即可開始使用。

## 排程定期的企業備份

對於每天有多位貢獻者新增檔案的企業帳戶而言,手動匯出難以擴充。透過 Job Manager,你可以將 Box for Business 同步儲存為具名工作,再附加 crontab 風格的排程(PLUS 授權功能),使其在每晚或依合規政策要求的任何頻率自動執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="排程定期的 Box for Business 同步工作" class="img-large img-center" />

每次執行都會記錄在 Job History 中,包含開始時間、持續時間、傳輸速度與檔案數量 — 當稽核詢問備份如何驗證時,這些是實用的佐證。

## 開始使用

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 建立新的 Box 遠端,並使用你的 Box for Business 憑證完成瀏覽器 OAuth 登入。
3. 開啟該遠端的進階設定,設定 `box_sub_type = enterprise` 以啟用企業範圍的資料夾。
4. 將 Box for Business 與任何其他受支援的遠端或本機儲存空間配對,建立同步或備份工作。

一開始就正確完成這項設定,能在日後省去數小時「檔案跑去哪了」的排查工作。

---

**相關指南:**

- [管理 Box 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Dropbox for Business — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [將 Box 遷移到 OneDrive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
