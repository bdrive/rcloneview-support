---
slug: manage-multiple-cloud-accounts-rcloneview
title: "使用 RcloneView 在單一畫面管理多個雲端帳戶(Google、OneDrive、Dropbox、S3)"
authors:
  - tayson
description: 不需要碰 CLI，也能輕鬆管理 Google Drive、OneDrive、Dropbox 與 S3。RcloneView 整合多個雲端帳戶,讓您在單一直覺介面中瀏覽、傳輸與同步資料。
keywords:
  - rcloneview
  - multiple cloud accounts
  - google drive
  - onedrive
  - dropbox
  - s3
  - cloud sync
  - rclone gui
  - migrate files
tags:
  - RcloneView
  - cloud-sync
  - google-drive
  - onedrive
  - dropbox
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在單一畫面管理多個雲端帳戶(Google、OneDrive、Dropbox、S3)

> 一個乾淨的儀表板管理所有雲端——無需命令列即可瀏覽、比較、傳輸與自動化。

雲端儲存分散是真實存在的問題。個人 Gmail 加上一個公司 Google 帳戶、綁定 Microsoft 365 的 OneDrive、仍與供應商共用的舊 Dropbox,還有用於封存的 S3 儲存桶。在不同入口網站之間反覆登入登出既浪費時間,也很容易搞不清楚哪些資料存放在哪裡。RcloneView 透過 rclone 驅動的單一視覺化檔案總管解決了這個問題——讓您能藉由預覽、乾跑測試與排程工作,自信地在各家服務商之間移動資料。

<!-- truncate -->

使用 RcloneView,您不需要學習 `rclone config` 或記住各種參數。應用程式會引導您將每個帳戶連接一次,之後即可在複製、比較與同步的工作流程中重複使用這些連線。它非常適合:

- 只想在帳戶之間拖曳檔案的一般使用者
- 需要整合散落於多個雲端之專案資料的工程師
- 需要標準化多帳戶備份與遷移作業的 IT 管理員

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

### 了解挑戰

- 介面各自為政:每家服務商都有自己的網頁主控台,而且對批次操作有各種限制。
- API 與配額不同:Google、Microsoft、Dropbox 與 S3 在大量資料搬移時的行為都不一樣。
- 稽核與可重複性:您需要的是預覽、日誌與排程執行——而不是在瀏覽器裡一次性手動拖曳。

### 統一介面帶來的改變

- 單一檔案總管:並排開啟多個帳戶——不需要反覆重新登入
- 先比較再動作:在複製前先看清差異,避免重複與意外
- 工作與紀錄:儲存同步設定、排程離峰時段執行,並保留稽核紀錄

| 做法                          | 操作位置               | 差異預覽             | 排程與重複執行     | 多服務商支援        |
| ---------------------------- | --------------------- | -------------------- | ------------------ | ------------------- |
| 原生雲端網頁介面               | 各自獨立的瀏覽器分頁     | 有限                  | 手動                | 僅限單一服務商         |
| RcloneView 多帳戶 GUI          | 單一桌面應用程式        | 有(比較功能)         | 有(工作排程)        | 任何 rclone 後端      |



## 事前準備

1. 盤點帳戶與目標:列出您使用的帳戶(例如個人 Google Drive、公司 OneDrive、Dropbox、S3/Wasabi/R2)以及您想達成的目標:整合、備份或重新整理資料。
2. 確認存取權限:視情況您需要登入權限或 API 金鑰。
3. 從小規模開始:先以一個小資料夾測試,在擴大規模前先驗證預覽與結果。

實用連結

- [Google OAuth 快速設定](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Microsoft/SharePoint 登入](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
- [S3/Wasabi/R2 設定](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2 憑證](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [Dropbox OAuth 設定](/howto/remote-storage-connection-settings/add-oath-online-login)

## 在 RcloneView 中連接您的帳戶

RcloneView 以友善的精靈介面封裝了 rclone 的設定流程。將每個雲端加入一次,即可在左側檔案總管中重複使用。

1. 開啟 RcloneView → 點選 `+ New Remote`。

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2. 選擇服務商並依照提示操作:
   - Google Drive:透過 OAuth 登入,並清楚命名(例如 `Drive-Personal`、`Drive-Work`)。參閱:[OAuth 登入指南](/howto/remote-storage-connection-settings/add-oath-online-login)
   - OneDrive/SharePoint:使用您的 Microsoft 帳戶登入。參閱:[Microsoft/SharePoint 設定](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
   - Dropbox:使用 RcloneView 的 Dropbox OAuth 精靈連接。參閱:[OAuth 登入指南](/howto/remote-storage-connection-settings/add-oath-online-login)
   - S3/Wasabi/R2:設定端點/地區與金鑰。→ [S3 連線設定](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2 憑證](/howto/cloud-storage-setting/cloudflare-r2-credential)
3. 對每個帳戶重複上述步驟。您可以同時開啟多個遠端並排瀏覽。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 順暢地移動與同步資料

無論您連接哪些帳戶,RcloneView 都支援相同的三種操作模式。先從小規模的試行資料夾開始,再逐步擴大規模。

### 拖放操作

在左側開啟來源,右側開啟目的地,將檔案或資料夾拖曳過去即可。

參閱:[使用拖放複製檔案](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### 複製前先比較

執行比較功能,列出兩個資料夾之間新增、變更或缺少的項目——即使是跨不同服務商也適用。取消勾選您想略過的項目,然後再進行複製。

參閱:[比較結果與檔案管理](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Preview and select differences before copying" class="img-large img-center" />

### 同步與排程

使用同步功能在帳戶之間鏡像所選資料夾。務必先執行乾跑測試,再儲存工作並排程離峰時段執行。可在工作管理員中監控進度與紀錄。

參閱:[同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)、[建立同步工作](/howto/rcloneview-basic/create-sync-jobs)、[工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure and run a sync job in RcloneView" class="img-large img-center" />

## 實務應用情境

- 個人與公司 Google Drive:在公司帳戶中保留部分個人資料夾的唯讀鏡像,反之亦然,搭配排程同步與清晰的日誌紀錄。
- OneDrive ↔ Google Drive 團隊交接:使用比較功能規劃切換,再於每晚執行同步,直到目的地成為權威來源。
- Dropbox 整理與封存:將少用的共用資料拖曳到 S3/Wasabi 儲存桶以降低儲存成本,同時保留線上副本供協作者使用。
- 多雲端備份:在 S3 相容的儲存桶中維護加密封存,同時將日常協作保留在 Drive/OneDrive 中。如需用戶端加密,可搭配 rclone `crypt` 使用。參閱:/blog/encrypt-cloud-backups-google-drive-onedrive-s3-with-rcloneview

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-account jobs in RcloneView" class="img-large img-center" />

## 順暢操作的小技巧

- 清楚命名遠端:`Drive-Personal`、`Drive-Work`、`OneDrive-DeptA`、`Dropbox-Shared`、`S3-Archive`。
- 先試行:在執行批次工作前,先比較並複製小樣本。
- 留意配額限制:Google Drive 的上傳/複製限制與 API 節流可能影響大規模執行,請盡量排程在夜間進行。
- 保留稽核紀錄:從工作紀錄匯出日誌以追蹤變更。

## 總結

RcloneView 將雜亂的登入與瀏覽器分頁,轉變為單一、可靠的工作空間。一次連接所有帳戶、預覽每一項變更,並將可重複的部分自動化——完全不需要輸入任何指令。無論您是要整合個人資料、協調團隊交接,還是執行 IT 遷移,統一的多帳戶 GUI 都能讓雲端工作更快速、更安全。

想了解如何設定特定服務商嗎?接著看看這些內容:

- 遠端管理員概覽:[遠端管理員](/howto/rcloneview-basic/remote-manager)
- 即時傳輸監控:[即時傳輸監控](/howto/rcloneview-basic/real-time-transfer-monitoring)
- 將雲端掛載為本機磁碟機:[將雲端儲存掛載為本機磁碟機](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
