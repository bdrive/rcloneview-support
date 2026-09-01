---
slug: auto-mount-startup-rcloneview
title: "啟動時自動掛載 — RcloneView 中隨時就緒的雲端硬碟"
authors:
  - tayson
description: "設定 RcloneView 的啟動時自動掛載功能，讓您的雲端硬碟在電腦開機的瞬間就已就緒，無需每次手動重新掛載。"
keywords:
  - auto mount cloud drive startup
  - rcloneview 自動掛載
  - 開機自動掛載雲端儲存
  - 常在線雲端硬碟
  - windows 自動雲端掛載
  - 登入時啟動雲端硬碟
  - rcloneview plus 功能
  - 持久雲端掛載
  - mount manager rcloneview
  - 雲端硬碟啟動自動化
tags:
  - RcloneView
  - feature
  - mount
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 啟動時自動掛載 — RcloneView 中隨時就緒的雲端硬碟

> 無需每天早上打開 RcloneView 手動掛載每個雲端硬碟，啟動時自動掛載會在裝置開機的瞬間自動將它們上線。

任何將已掛載的雲端硬碟作為日常工作流程一部分的人——無論是直接在 Google Drive 中編輯檔案、從 S3 儲存桶擷取素材，還是像瀏覽本機資料夾一樣瀏覽 SFTP 伺服器——都清楚每次重新開機後重新掛載的麻煩。RcloneView 的啟動時自動掛載設定徹底消除了這個步驟，在應用程式隨系統啟動的瞬間即可重新連接您設定好的掛載點。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 啟動時自動掛載的作用

在特定掛載上啟用後，RcloneView 會在每次應用程式啟動時自動重新連接該遠端的掛載點，使用您第一次建立時設定的確切快取模式、磁碟機代號或路徑，以及唯讀設定。與一般設定中的「登入時啟動」搭配使用，代表在您打開 RcloneView 視窗之前，已掛載的磁碟機可能就已出現在檔案總管中。這是一項 PLUS 授權功能，與排程同步和多視窗支援並列——FREE 授權仍涵蓋手動掛載、卸載以及對所有掛載的完整檔案總管存取。

此設定是依掛載而非全域生效，因此您可以精確選擇哪些磁碟機自動重新連接。極少使用的封存遠端可以保持手動模式，而您每天使用的主要工作磁碟機——例如一個 Google Drive 資料夾和一個 S3 儲存桶——則可以每次自動掛載。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager 顯示帶有自動掛載選項的已設定掛載" class="img-large img-center" />

## 在 Mount Manager 中設定

從 Remote 分頁開啟 Mount Manager，建立新掛載或編輯現有掛載。在掛載設定畫面中，與快取模式、磁碟區名稱和唯讀狀態等其他設定一起切換 Auto mount 選項，然後儲存。RcloneView 可以在一個視窗中掛載並同步 90+ 家服務供應商，因此無論底層遠端是 Google Drive、S3 相容儲存桶還是 SFTP 伺服器，同一個自動掛載切換的運作方式都相同。

對於已在執行中的掛載，請記得在掛載處於啟用狀態時 Edit 會被停用；請先卸載，套用 Auto mount 切換,再重新掛載以確認已正確儲存。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="直接從 Explorer 面板工具列掛載遠端資料夾" class="img-large img-center" />

## 將自動掛載與系統匣搭配使用

啟動時自動掛載與「最小化啟動」和系統匣搭配使用效果最佳，這種組合可讓 RcloneView 在背景啟動、掛載您設定的磁碟機，並在您需要之前保持在背景不打擾。系統匣圖示中的 Mount 選單仍可讓您隨時查看狀態或卸載磁碟機，因此自動化不會讓您失去手動控制的能力。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="顯示已掛載磁碟機狀態的系統匣選單" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**，並在 Help > Activate License 中確認您的 PLUS 授權已啟用。
2. 開啟 Mount Manager 並選擇您希望自動重新連接的掛載。
3. 在該掛載的設定中啟用 Auto mount 切換並儲存。
4. 在一般設定中開啟「登入時啟動」，讓 RcloneView 及其自動掛載的磁碟機在您坐下之前就已就緒。

設定完成後，您的雲端儲存將像檔案系統的永久組成部分一樣運作，無需手動重新掛載。

---

**相關指南：**

- [Mount Cloud Storage as a Local Drive — Complete Guide to Using Google Drive, S3, and OneDrive Like Local Folders](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [System Tray and Background Sync — Keep Cloud Jobs Running in RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [RcloneView Mount Performance Tuning: Cache, Read Ahead, and VFS Settings for Smooth Cloud Drives](https://rcloneview.com/support/blog/mount-performance-tuning-rcloneview)

<CloudSupportGrid />
