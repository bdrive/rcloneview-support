---
slug: migrate-opendrive-to-onedrive-rcloneview
title: "將 OpenDrive 移轉到 OneDrive — 用 RcloneView 傳輸檔案"
authors:
  - alex
description: "用 RcloneView 的雲對雲傳輸、Dry Run 預覽與 Job History 追蹤功能,將檔案從 OpenDrive 移動到 Microsoft OneDrive。"
keywords:
  - opendrive 移轉到 onedrive
  - opendrive onedrive 傳輸
  - rcloneview opendrive 移轉
  - opendrive onedrive 同步
  - 雲對雲移轉
  - opendrive 替代方案
  - onedrive 移轉工具
  - 傳輸 opendrive 檔案
  - 多雲檔案傳輸
  - 雲端儲存移轉 gui
tags:
  - RcloneView
  - opendrive
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 OpenDrive 移轉到 OneDrive — 用 RcloneView 傳輸檔案

> 用 RcloneView 將 OpenDrive 帳戶的檔案直接移轉到 Microsoft OneDrive,不需要先下載到本機再重新上傳。

將儲存空間整合到較少的供應商,是許多人離開 OpenDrive 的常見原因,對於已經在 Microsoft 365 上統一協作的團隊來說尤其如此。RcloneView 在同一個視窗中連接這兩項服務,並在它們之間直接傳輸資料,因此移轉過程不必依賴用本機磁碟空間暫存所有資料的副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

透過 New Remote 精靈新增 OpenDrive 作為遠端,輸入所需的帳戶資訊,然後使用以瀏覽器為基礎的 OAuth 登入,新增 OneDrive 作為第二個遠端。兩個遠端會在 Explorer 面板中以各自獨立的分頁顯示,而且 RcloneView 可以在單一視窗內掛載並同步 90 個以上的供應商,因此一旦兩個帳戶都連接完成,就不需要另一個工具。

兩個遠端並排顯示後,拖放會觸發直接複製——在不同遠端之間拖曳一律是複製而非移動,因此在你確認傳輸完成之前,原始的 OpenDrive 檔案都會保持不變。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## 以 Sync 工作執行移轉

若要進行完整帳戶移轉,而不只是一次性的資料夾複製,4 步驟 Sync 精靈是較可靠的方式。選擇 OpenDrive 遠端及其資料夾作為來源,OneDrive 作為目的地,並選擇單向同步,這樣目的地就會依照來源建置,而不會有任何變更回流。Advanced 設定可以調整並行檔案傳輸數,並啟用總和檢查碼比對,它會依照雜湊值與大小確認每個檔案是否一致,而不只依賴大小——對於資料完整性比原始速度更重要的移轉,值得開啟此選項。

在送出完整執行之前,Dry Run 會準確預覽將被複製的檔案,讓你能在過時的共用資料夾之類的意外項目進入 OneDrive 之前先發現它們。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from OpenDrive to OneDrive with RcloneView Sync" class="img-large img-center" />

## 驗證傳輸是否順利完成

同步完成後,Compare 功能會將 OpenDrive 來源與 OneDrive 目的地並排比對,標示出僅左側存在的檔案、僅右側存在的檔案,以及大小不同的檔案。這能在你認為可以安全關閉 OpenDrive 帳戶之前,找出部分傳輸或被跳過的檔案,而在比對畫面中發現的任何缺漏,都可以直接從那裡複製過去。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and OneDrive after migration in RcloneView" class="img-large img-center" />

## 在 Job History 中追蹤移轉

移轉工作的每一次執行——無論是為了補齊遺漏檔案的手動重新執行,還是網路問題後的重試——都會連同開始時間、耗時、狀態、總大小與檔案數一起記錄在 Job History 中。當你之後需要說明這次移轉的細節時,這份紀錄能協助你確認究竟移轉了什麼、發生在何時。

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 OpenDrive 與 OneDrive 都新增為遠端。
3. 設定一個從 OpenDrive 到 OneDrive 的單向 Sync 工作,先執行 Dry Run,再執行傳輸。
4. 在停用 OpenDrive 帳戶之前,用 Compare 驗證每個檔案都已送達。

直接的雲對雲移轉讓整個流程更快速,並避免了先下載所有內容所帶來的本機儲存空間壓力。

---

**相關指南:**

- [用 RcloneView 管理 OneDrive 儲存空間 — 同步與備份檔案](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [將 OpenDrive 同步到 Google Drive — 用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/sync-opendrive-to-google-drive-rcloneview)
- [將 OpenDrive 備份到 AWS S3 — RcloneView 外部儲存](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)

<CloudSupportGrid />
