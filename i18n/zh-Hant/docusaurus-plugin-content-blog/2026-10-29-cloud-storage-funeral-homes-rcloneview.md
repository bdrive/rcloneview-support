---
slug: cloud-storage-funeral-homes-rcloneview
title: "殯儀館雲端儲存 — 使用 RcloneView 保護家屬記錄"
authors:
  - alex
description: "殯儀館可以使用 RcloneView 將服務記錄、合約、照片和追思影片備份到多個雲端：排程同步、加密和 Folder Compare。"
keywords:
  - 殯儀館雲端儲存
  - 殯儀館檔案備份
  - 殯儀館文件儲存
  - 追思影片備份
  - 加密雲端備份
  - 小型企業雲端備份
  - rcloneview 殯儀館
  - 多雲備份
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 殯儀館雲端儲存 — 使用 RcloneView 保護家屬記錄

> 將安排合約、追思照片和追思影片安全地備份在不只一個地方。

殯儀館保管著家屬期望能保存數十年的記錄：已簽署的合約、訃聞、生前預約文件、照片投影片，以及可能達到數 GB 的儀式錄影。這些資料往往只存放在一台辦公室電腦或單一雲端帳號中。RcloneView 為小型團隊提供視覺化的方式，無需撰寫腳本即可將這些資料複製到第二個和第三個位置。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼只有一份副本是不夠的

試想一家殯儀館，共用磁碟中存有 15 年的案件資料夾，另有一個 Dropbox 帳號用於接收家屬提交的照片。磁碟故障、誤刪除或登入憑證外洩，都會同時影響所有案件。穩妥的做法是：一份主要副本、一份異地雲端副本，以及一份獨立的第二個雲端或本機硬碟副本。

RcloneView 可連接 90 多個供應商，包括 Google Drive、OneDrive、Dropbox、Backblaze B2、Wasabi，以及本機或外接磁碟。將商務雲端硬碟與物件儲存貯體搭配使用，可使備份位於與原始資料不同的帳號和供應商中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中為殯儀館備份新增雲端與本機遠端" class="img-large img-center" />

## 建立可重複的備份工作

透過 4 步驟精靈建立 **Sync** 或 **Copy** 工作：來源為案件記錄資料夾，目的地為備份遠端。如果不希望來源端的刪除動作被傳播，請使用 Copy。請先執行 **Dry Run**，查看將要複製或刪除的內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中將案件資料夾複製到備份雲端" class="img-large img-center" />

使用 PLUS 授權時，精靈的最後一步會增加 crontab 風格的排程功能，因此夜間工作可以在辦公室下班後執行。Job History 會記錄每次執行的狀態、大小和檔案數量，可作為備份確實在執行的依據。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程夜間備份工作" class="img-large img-center" />

## 保護敏感記錄

家庭與財務資訊值得加密。在備份目的地之上建立 **Crypt** 虛擬遠端後，RcloneView 會在檔案離開本機之前加密檔名、資料夾名稱和內容。請將 Crypt 密碼保存在與辦公室電腦分開的地方；沒有它，資料將無法解密。

請定期使用 **Folder Compare** 確認備份與來源一致。僅存在於左側的檔案表示尚未複製的內容，大小不同的檔案則提示上傳不完整。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="使用 Folder Compare 驗證殯儀館備份" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用 **New Remote** 新增主要儲存空間和備份目的地。
3. 為敏感案件檔案，用 Crypt 遠端包裝目的地。
4. 建立 Copy 工作並先執行 Dry Run，然後設定排程（PLUS）或在每場儀式後執行。

比建立者留存更久的記錄，值得擁有比任何單一帳號都更持久的備份計畫。

---

**相關指南：**

- [Cloud Storage for Law Firms — Secure Client Files with RcloneView](https://rcloneview.com/support/blog/cloud-storage-law-firms-rcloneview)
- [Cloud Storage for Tax Preparers](https://rcloneview.com/support/blog/cloud-storage-tax-preparers-rcloneview)
- [Encrypt Cloud Backups with a Crypt Remote](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
