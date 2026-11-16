---
slug: cloud-storage-performing-arts-theaters-rcloneview
title: "表演藝術劇院的雲端儲存 — 用 RcloneView 保護劇本、Cue 檔案與排練影片"
authors:
  - tayson
description: "了解劇團如何使用 RcloneView 在多個雲端與 NAS 之間同步劇本、燈光與音響 Cue 檔案以及排練影片，並進行排程備份。"
keywords:
  - 劇院雲端儲存
  - 劇目製作檔案備份
  - 表演藝術雲端儲存
  - 備份燈光與音響 Cue 檔案
  - 排練影片雲端備份
  - 舞台設計檔案同步
  - 劇院典藏從 NAS 到雲端
  - 為劇團打造的 RcloneView
  - 藝術機構的多雲備份
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

# 表演藝術劇院的雲端儲存 — 用 RcloneView 保護劇本、Cue 檔案與排練影片

> 首演之夜取決於檔案：正確的劇本修訂版、最終的音響 Cue，以及設計師簽核的燈光圖。

一個地方劇團要處理的資料量超乎想像。導演在 Google Drive 中分享劇本修訂版，音響設計師透過 Dropbox 交付 Cue 清單，排練影片堆積在控制室的 Synology NAS 上，往季的典藏則存放在老舊的外接硬碟裡。RcloneView 將這一切匯集到一個視窗中，讓製作團隊不必在多個應用程式之間切換，就能同步、比較並備份每一個劇目資料夾。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接製作中使用的所有儲存位置

每個部門往往各自選擇工具，因此第一步是讓一切都一目了然。在 RcloneView 中，透過瀏覽器登入新增 Google Drive 和 Dropbox，透過 Synology 自動偵測連接控制室的 NAS，再新增一個 Backblaze B2 或 Wasabi 等物件儲存貯體作為長期典藏。外部設計師透過 Google Drive 傳來的共用資料夾，可以新增為 Google Drive Shared with Me 遠端。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive, Dropbox, and Backblaze B2 remotes for a theater production in RcloneView" class="img-large img-center" />

最多可並排開啟四個檔案總管面板，舞台監督可以把 Drive 中最新的提詞本拖到 NAS 的劇目資料夾，或把 Dropbox 中設計師的渲染圖拉進典藏貯體。在不同遠端之間拖曳會複製檔案，因此原始檔案會留在設計師放置的位置。

## 技術週前保持 Cue 檔案與劇本一致

技術週的典型失誤是用過時的 Cue 檔案執行演出。RcloneView 的 Folder Compare 會將音響設計師的交付資料夾與控制室副本並排顯示，並標示只存在於一側或大小不同的檔案。一鍵複製已變更的 Cue 檔案後，它們會在比較檢視中被標記為相同。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing sound cue folders between Dropbox and the booth NAS in RcloneView" class="img-large img-center" />

對於整個劇目資料夾，先用 Dry Run 執行 Sync 工作，可以準確顯示將要複製或刪除的內容——當導演悄悄重新整理了劇本資料夾時，這一點尤其重要。

## 將排練影片同時備份到兩個目的地

排練與典藏錄影檔案龐大且無可取代。RcloneView 的 1:N 同步可在單一工作中將一個來源資料夾鏡像到多個目的地，因此 NAS 上的影片資料夾可以同時傳送到 B2 貯體和第二個雲端。與僅支援掛載的工具不同，RcloneView 也能同步與比較資料夾——在 FREE 授權下即可使用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing rehearsal video from a Synology NAS to two cloud destinations with RcloneView" class="img-large img-center" />

演員合約與薪資匯出檔案需要格外小心。用 Crypt 遠端包裝雲端資料夾，檔案名稱和內容會在離開辦公室之前被加密。

## 在演出期間自動執行夜間備份

擁有 PLUS 授權後，工作精靈中的 crontab 風格排程器可以在每晚演出結束後執行備份，例如凌晨 1:00，並可透過 Simulate schedule 預覽下次執行時間。Job History 會記錄每次執行的狀態、大小與檔案數，在演出期間出現疑問時為製作經理提供清楚的紀錄。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly theater backup job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增各部門已在使用的遠端：Google Drive、Dropbox、NAS 和典藏貯體。
3. 使用 Folder Compare 確認控制室的 Cue 檔案副本與設計師的最新交付一致。
4. 為排練影片建立 1:N Sync 工作，並使用 PLUS 將其排程為每晚執行。

檔案受到保護後，劇組就能專注於演出。

---

**相關指南：**

- [影片製作團隊的雲端儲存工作流程 — 用 RcloneView 同步毛片、代理檔與成品](https://rcloneview.com/support/blog/cloud-storage-video-production-teams-rcloneview)
- [音樂製作的雲端儲存 — 用 RcloneView 管理專案、分軌與備份](https://rcloneview.com/support/blog/cloud-storage-music-production-rcloneview)
- [1:N 同步 — 在 RcloneView 中將一個來源同步到多個目的地](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
