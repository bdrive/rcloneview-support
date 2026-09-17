---
slug: sync-seafile-to-wasabi-rcloneview
title: "將 Seafile 同步到 Wasabi — 使用 RcloneView 進行雲端備份"
authors:
  - kai
description: "使用 RcloneView 將自架的 Seafile 資料庫同步到 S3 相容儲存 Wasabi。不必手動匯出檔案也能保留異地副本。"
keywords:
  - 將 Seafile 同步到 Wasabi
  - Seafile 備份
  - Wasabi 雲端同步
  - 自架雲端備份
  - Seafile RcloneView
  - Wasabi S3 相容儲存
  - 雲對雲同步
  - 自架異地備份
  - RcloneView Seafile
  - RcloneView Wasabi
tags:
  - RcloneView
  - seafile
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Seafile 同步到 Wasabi — 使用 RcloneView 進行雲端備份

> 不必寫一行同步腳本，就能為自架的 Seafile 資料庫在 Wasabi 上建立異地備份。

Seafile 是許多希望在自己的伺服器上執行檔案同步平台的團隊常見的選擇，但自行架設也代表備份完全是自己的責任——一旦伺服器磁碟故障，唯一的副本也隨之消失。Wasabi 是理想的異地存放目標：相容 S3、大規模使用也很實惠，且可隨處存取。RcloneView 能直接連接兩者，讓 Seafile 資料庫可以依排程鏡像到 Wasabi儲存貯體，不必仰賴手動匯出。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Seafile 與 Wasabi 連接為遠端

先新增你的 Seafile 伺服器作為遠端，將 RcloneView 指向你的伺服器網址與資料庫憑證。接著使用你的 Access Key ID、Secret Access Key 以及對應的 Wasabi 區域端點，另外新增 Wasabi。兩個遠端都設定完成後，會在 Explorer 面板中顯示為可瀏覽的檔案樹，方便你在建立同步工作前確認資料庫結構與檔案數量。RcloneView 可在 Windows、macOS 與 Linux 上從單一視窗掛載並同步 90 個以上的服務商，因此 Seafile 與 Wasabi 能與你已設定的其他雲端並列使用。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Seafile 與 Wasabi 遠端" class="img-large img-center" />

## 建立單向同步工作

將 Seafile 資料庫設為來源、Wasabi 儲存貯體設為目的地，並使用「僅修改目的地」選項設定同步工作，讓 Wasabi 維持純粹的鏡像、不會回寫到 Seafile。若是擁有 500GB 共用資料庫(包含來源檔案與匯出內容)的設計團隊，Filtering 步驟可讓你排除 Seafile 內部產生的暫存檔與鎖定檔，避免 Wasabi 副本被同步產生的雜項檔案弄亂。

在 Advanced Settings 步驟中啟用檢查碼比對，讓檔案依雜湊值與大小比對，而不只是修改時間——由於 Seafile 與 S3 相容儲存追蹤檔案中繼資料的方式不同，這一點相當實用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="使用 RcloneView 將 Seafile 資料庫同步到 Wasabi 儲存貯體" class="img-large img-center" />

在第一次正式同步前先執行 Dry Run。它會準確列出將傳輸的內容而不移動任何資料——在你還不清楚資料庫實際大小的第一次執行中格外重要。

## 排程並驗證備份

在 PLUS 授權下，為工作附加 crontab 格式的排程，讓它自動重新執行——常用的資料庫可以每晚執行，偏封存性質的資料庫則每週執行一次即可。Job History 會記錄每次執行的耗時、傳輸速度與狀態，清楚記錄 Wasabi 副本最後一次更新到最新狀態的時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程定期的 Seafile 到 Wasabi 同步工作" class="img-large img-center" />

完成第一次完整同步後，在 Seafile 來源與 Wasabi 目的地之間執行 Folder Compare，確認所有檔案都已送達且大小相符——這是找出因網路中斷而遺漏內容的快速方法。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用伺服器網址與資料庫憑證，將你的 Seafile 伺服器新增為遠端。
3. 使用 Access Key ID、Secret Access Key 與區域端點，將 Wasabi 新增為遠端。
4. 建立單向同步工作、執行 Dry Run，接著排程定期執行以保持備份最新。

自架資料庫唯有在別處也存在副本時才算安全，而排程的 Seafile 到 Wasabi 同步能讓這項需求自動運作。

---

**相關指南：**

- [使用 RcloneView 管理 Seafile 自架雲端同步](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [使用 RcloneView 管理 Wasabi 雲端同步與備份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Seafile 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-seafile-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
