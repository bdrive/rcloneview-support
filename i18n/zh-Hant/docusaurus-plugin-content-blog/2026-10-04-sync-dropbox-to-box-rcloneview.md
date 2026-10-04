---
slug: sync-dropbox-to-box-rcloneview
title: "將 Dropbox 同步到 Box — 使用 RcloneView 進行雲端備份"
authors:
  - casey
description: "使用 RcloneView 將 Dropbox 同步到 Box:連接兩個 OAuth 遠端、透過試運行預覽、排程工作,並使用 Folder Compare 驗證結果。"
keywords:
  - 將 Dropbox 同步到 Box
  - Dropbox 到 Box 備份
  - Dropbox Box 同步
  - 雲端對雲端同步
  - RcloneView
  - Dropbox 備份
  - Box 雲端儲存
  - 多雲備份
  - rclone GUI
tags:
  - RcloneView
  - dropbox
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Dropbox 同步到 Box — 使用 RcloneView 進行雲端備份

> 在 Box 中保留 Dropbox 檔案的第二份副本,並在單一桌面視窗中管理。

團隊常在 Dropbox 中工作,而客戶或合作夥伴卻堅持使用 Box。手動讓兩者保持一致意味著不斷下載與重新上傳。RcloneView 將兩個帳戶連接為遠端,並在它們之間直接同步資料夾,同時提供預覽與歷史記錄,讓您始終清楚發生了什麼變化。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Dropbox 和 Box 新增為遠端

兩個供應商都使用 OAuth 瀏覽器登入,因此不需要 API 金鑰。點擊 New Remote,選擇 Dropbox,在瀏覽器中核准存取;對 Box 重複同樣的操作。對於企業帳戶,請使用 Dropbox for Business 設定(`dropbox_business = true`)或 Box for Business 設定(`box_sub_type = enterprise`),因此在相關時選擇這些變體。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中建立 Dropbox 和 Box 遠端" class="img-large img-center" />

## 設定單向同步工作

開啟同步精靈,選擇 Dropbox 資料夾作為來源、Box 資料夾作為目的地,並使用字母、數字、連字號或底線為工作命名。單向模式只修改目的地,適合備份角色。由於同步會使目的地與來源一致,請務必先執行試運行,查看哪些檔案將被複製或刪除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dropbox 到 Box 的同步工作設定" class="img-large img-center" />

設想一家擁有 150 GB 客戶交付物的設計公司。依檔案大小或時間的篩選器可將體積較大的工作檔排除在 Box 副本之外,預先定義的篩選器還能略過影片等類別。

## 排程與監控

使用 PLUS 授權時,精靈的第 4 步支援 crontab 風格的排程,模擬選項可預覽下次執行時間。每晚執行可讓 Box 保持最新,無需任何手動操作。Transferring 分頁顯示即時速度與進度,Job History 記錄每次執行的狀態、時間長度、大小與檔案。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="為 Dropbox 到 Box 的同步工作排程" class="img-large img-center" />

## 使用 Folder Compare 驗證

執行後,在這兩個資料夾上開啟 Folder Compare。僅左側與不同的檔案會被列出,您可以在比較檢視中複製缺少的項目。Job History 有助於發現出錯的執行。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dropbox 到 Box 同步的工作歷史" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView:** [rcloneview.com](https://rcloneview.com/src/download.html) 取得。
2. 透過 OAuth 登入新增 Dropbox 和 Box 遠端。
3. 建立單向同步工作並執行試運行。
4. 執行它,如果有 PLUS 授權,再排程。

在不同供應商處保留第二份副本,可將單點故障轉變為安全網。

---

**相關指南:**

- [零停機 Box 到 Dropbox](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [將 Box 同步到 Google Drive](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [管理 Dropbox 儲存](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
