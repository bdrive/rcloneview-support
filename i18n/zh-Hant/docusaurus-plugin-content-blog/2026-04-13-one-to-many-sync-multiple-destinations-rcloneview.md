---
slug: one-to-many-sync-multiple-destinations-rcloneview
title: "1:N 同步 — 在 RcloneView 中將一個來源同步到多個目的地"
authors:
  - tayson
description: "使用 RcloneView 的 1:N 同步功能，將一個來源資料夾同時鏡像到多個雲端目的地。一次工作即可備份到 S3、Google Drive 與 Backblaze B2。"
keywords:
  - 1:N sync RcloneView
  - sync one source multiple destinations
  - multi-destination backup
  - cloud backup multiple clouds
  - RcloneView 1 to N sync
  - cloud replication multiple providers
  - mirror to multiple clouds
  - RcloneView sync feature
  - multi-cloud backup job
  - one to many cloud sync
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1:N 同步 — 在 RcloneView 中將一個來源同步到多個目的地

> RcloneView 的 1:N 同步功能可讓您在一個工作中，將單一來源資料夾鏡像到多個雲端目的地 — 同時備份到 Google Drive、Amazon S3 與 Backblaze B2。

資料韌性的核心原則是 3-2-1 備份法則：三份資料副本、儲存在兩種不同媒介、其中一份異地保存。雲端儲存讓這件事無需實體硬碟即可實現 — 但手動針對每個服務商各自執行同步工作既繁瑣又容易出錯。RcloneView 的 1:N 同步功能可讓您設定單一來源資料夾同時同步到多個雲端目的地，讓一次工作執行就涵蓋所有備份目標。此功能於 FREE 授權即可使用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什麼是 1:N 同步？

1:N 同步（一對多同步）是指在單一工作執行中，將一個來源鏡像到 N 個目的地遠端。當您執行該工作時，RcloneView 會將來源同步至每一個已設定的目的地 — 新增缺少的檔案、更新已變更的檔案，並可選擇性地移除來源中已刪除的檔案。

這與依序執行多個獨立同步工作不同。在 1:N 同步中，所有目的地都會在同一次執行期間被寫入，且每個目的地的進度都會顯示在「傳輸中」分頁。工作記錄會在執行摘要中記錄每個目的地的結果。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="1:N sync job sending source to multiple cloud destinations in RcloneView" class="img-large img-center" />

## 設定 1:N 同步工作

設定多目的地同步工作使用與一般工作相同的 4 步驟同步精靈。差異在於步驟 1：選取來源遠端與資料夾後，點選「新增目的地」按鈕即可加入更多目的地遠端。您可以視需求新增任意數量的目的地 — 例如 Google Drive、Amazon S3 與 Backblaze B2。

**正式環境備份策略的範例工作流程：**

1. **來源：** 本機 NAS 資料夾 `/data/projects`
2. **目的地 1：** Google Drive `/Backups/Projects`
3. **目的地 2：** Amazon S3 儲存桶 `my-company-backup/projects`
4. **目的地 3：** Backblaze B2 儲存桶 `projects-archive`

每個目的地都會收到與來源內容完全相同的副本。同步工作名稱、篩選規則與進階設定都會一致套用到該工作中的所有目的地。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring 1:N sync with multiple cloud destinations in RcloneView" class="img-large img-center" />

## 實際應用情境

**實作 3-2-1 備份：** 設定本機來源 → Google Drive + Amazon S3 + Backblaze B2。一次工作執行，即可在不同雲端服務商產生三份副本。

**內容發佈：** 影片製作團隊可將剪輯伺服器上的最終輸出檔案，同時同步到 Dropbox（供客戶審閱）、Google Drive（供內部歸檔）以及 CDN 來源儲存桶。

**區域複寫：** 組織可將中央文件庫同步到位於不同地理區域的區域雲端儲存桶，以兼顧延遲與可用性考量。

**跨服務商備援：** 將主要的 OneDrive 資料夾同步到 Backblaze B2 與 Cloudflare R2，如此一來，即使某一服務商發生中斷，另一方仍保有最新副本。

## 排程 1:N 同步工作

若 1:N 工作需要定期執行，排程同步（PLUS 授權）同樣適用於多目的地工作，就如同適用於單一目的地工作一樣。在精靈的步驟 4 中設定 crontab 格式的排程，RcloneView 便會在每個排程時間點執行完整的多目的地同步。工作記錄會記錄每次執行的結果，讓您得知所有目的地是否都成功收到更新。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination sync in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在「遠端」分頁中新增所有目標雲端服務商作為遠端。
3. 開啟同步精靈，於步驟 1 使用「新增目的地」為您的來源設定多個目的地。
4. 可選擇性地新增排程（PLUS 授權），自動執行多目的地同步。

1:N 同步是 RcloneView 針對備份策略最省時的功能之一 — 只需設定一次，每次工作執行都能全面守護。

---

**相關指南：**

- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [使用 RcloneView 建立多雲備份策略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [使用 RcloneView 將 NAS 備份到多個雲端](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
