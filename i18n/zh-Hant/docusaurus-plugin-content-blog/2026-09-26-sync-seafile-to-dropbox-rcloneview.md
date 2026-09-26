---
slug: sync-seafile-to-dropbox-rcloneview
title: "將 Seafile 同步到 Dropbox — 用 RcloneView 實現雲端備份"
authors:
  - casey
description: "使用 RcloneView 的排程同步工作與 Dry Run 預覽,將自架 Seafile 伺服器安全、可驗證地備份到 Dropbox。"
keywords:
  - 將Seafile同步到Dropbox
  - Seafile Dropbox備份
  - 自架雲端備份
  - RcloneView Seafile
  - 雲對雲同步
  - Seafile異地備份
  - Dropbox備份工具
  - Seafile災難復原
  - 自架遷移到Dropbox
tags:
  - RcloneView
  - seafile
  - dropbox
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Seafile 同步到 Dropbox — 用 RcloneView 實現雲端備份

> 不必手動撰寫任何腳本,就能為自架的 Seafile 伺服器在 Dropbox 中建立一份異地副本。

Seafile 之所以受歡迎,正是因為它能讓資料保持在組織自身的掌控之下,但也正因如此,它沒有內建的外部備份途徑。一旦伺服器、其磁碟或主機發生故障,任何未複製到別處的資料都會遺失。RcloneView 可以在同一個視窗中同時連接 Seafile 與 Dropbox,並透過排程同步工作在兩者之間搬移檔案,讓自架伺服器不必任何人手動撰寫 cron 腳本或 rclone 指令,就能取得真正的異地副本。RcloneView 可在單一視窗中掛載並同步 90 多種服務商,支援 Windows、macOS 與 Linux,因此無論同步工作是從管理員的筆記型電腦執行,還是從專用的備份機器執行,設定方式都相同。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Seafile 與 Dropbox

新增 Seafile 為遠端時,只需輸入伺服器 URL、資料庫與帳戶憑證,RcloneView 會在儲存前驗證連線。Dropbox 使用更簡單的 OAuth 流程:開啟瀏覽器視窗,完成帳戶授權後,遠端便會自動以分頁形式顯示。兩者都設定完成後,Remote Manager 會將它們並列顯示,之後可分別編輯而不影響對方。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a self-hosted Seafile server and Dropbox as remotes in RcloneView" class="img-large img-center" />

兩個遠端都連接好之後,可以先開啟雙面板版面配置,在正式執行完整同步之前,一起瀏覽 Seafile 資料庫與 Dropbox 目的地資料夾。

## 建立同步工作

建立一個以 Seafile 資料庫為來源、專用 Dropbox 資料夾為目的地的單向同步工作,確保備份執行不會意外修改原始 Seafile 資料。在 Filtering Settings 中,使用 RcloneView 套用於任何同步工作的相同自訂篩選語法,排除不該離開伺服器的內容 —— 暫存檔案、任何受版本控制專案中的 `.git/` 資料夾,或超過大小門檻的檔案類型。先執行一次 Dry Run:它會列出所有將被複製的檔案而不實際傳輸任何內容,是在耗費頻寬之前發現錯誤來源資料夾最快的方法。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Seafile to Dropbox backup job in RcloneView" class="img-large img-center" />

PLUS 授權使用者可為工作附加 crontab 式排程,讓備份每晚自動執行,不必任何人手動啟動 —— 這對整天都在變動的 Seafile 伺服器相當實用。

## 在 Job History 中驗證備份

在 Advanced Settings 中開啟總和檢查碼比對,讓 RcloneView 透過雜湊值與大小而不僅是檔案大小來確認檔案是否一致,這在 Seafile 的版本控制可能留下大小相同但內容不同的檔案時尤其重要。每次執行後,Job History 會顯示傳輸的檔案總數、耗費時間以及任何發生錯誤的項目,便於在信賴它作為還原點之前,輕鬆確認 Dropbox 副本確實是最新的。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed Seafile to Dropbox sync" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用資料庫路徑與憑證將你的 Seafile 伺服器新增為遠端。
3. 透過 OAuth 登入流程新增 Dropbox。
4. 執行 Dry Run,接著執行同步工作並在 Job History 中確認結果。

有了這份排程且可驗證的 Dropbox 副本,自架 Seafile 部署就從單點故障變成擁有真正備援方案的伺服器。

---

**相關指南:**

- [用 RcloneView 將 Seafile 自架雲端與 Google Drive、S3 及外部儲存一起管理](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [管理 Dropbox — 用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [用 RcloneView 修復 Seafile 同步錯誤](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
