---
slug: dry-run-preview-cloud-sync-rcloneview
title: "試跑預覽——在 RcloneView 中提交變更前先測試雲端同步"
authors:
  - tayson
description: "使用 RcloneView 的試跑模式，在任何雲端同步執行前預覽哪些檔案將被複製或刪除——這是大型或敏感傳輸不可或缺的安全檢查。"
keywords:
  - dry run cloud sync
  - test sync before running
  - RcloneView dry run
  - preview cloud sync changes
  - simulate cloud backup
  - cloud sync safety check
  - rclone dry run GUI
  - avoid accidental file deletion
  - cloud sync simulation
  - verify sync before commit
tags:
  - feature
  - tips
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 試跑預覽——在 RcloneView 中提交變更前先測試雲端同步

> 在同步大量資料或從目的地刪除檔案之前，先使用 RcloneView 的試跑模式預覽每一項計畫中的變更——不移動任何一個檔案。

在雲端同步流程中，最代價高昂的錯誤之一，就是事後才發現某個工作刪除了重要檔案、覆蓋了較新的版本，或引入了數千個原本不該包含的檔案。RcloneView 內建的試跑功能徹底消除了這種風險。透過在執行前模擬同步操作，您可以精確檢視哪些檔案會被複製、哪些檔案會被刪除，在任何實際傳輸開始之前就對工作設定充滿信心。這在首次設定新工作，或調整既有工作的篩選規則之後，特別有價值。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 試跑會顯示什麼

當您在 RcloneView 中執行試跑時，工作引擎會針對您設定的來源與目的地執行完整的同步邏輯，但不會進行任何實際的檔案操作。結果會呈現一份詳細的預覽，分為兩個關鍵類別：**將從來源複製到目的地的檔案**，以及**將從目的地刪除以符合來源的檔案**。您可以捲動瀏覽完整的操作清單，在核准任何變更之前逐一確認。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing planned file operations in a dry run simulation in RcloneView" class="img-large img-center" />

這在單向同步工作中尤其重要，因為目的地會被修改成與來源完全一致。如果某個檔案最近從來源資料夾中被移除，但您仍需要目的地上保留該檔案，試跑會在刪除發生之前先揭露這項計畫中的操作。舉例來說，一家將 50 萬份案件文件備份到 Amazon S3 的律師事務所，在執行每個排程批次之前先加以驗證，能大幅避免任何意外的資料遺失，獲益良多。

## 如何在 RcloneView 中執行試跑

在 RcloneView 中使用試跑非常直觀。在**工作管理員（Job Manager）**中，建立或開啟一個同步工作，並設定來源、目的地，以及任何篩選選項，例如檔案類型排除、最大檔案大小或資料夾深度限制。準備測試時，選擇**試跑（Dry Run）**選項，而非一般執行。RcloneView 會執行模擬並在「傳輸中」分頁顯示完整的計畫操作清單——在您主動啟動實際執行之前，不會移動任何資料。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a dry run simulation for a cloud sync job in RcloneView" class="img-large img-center" />

檢視試跑結果後，您可以調整篩選設定，並依需要重複進行模擬。唯有當計畫中的操作清單完全符合您的預期時，才應觸發實際的同步。這種反覆調校的方式，在跨多個雲端服務商的大型目錄結構中，處理複雜篩選規則時特別有用。

## 在工作歷程中檢查試跑結果

RcloneView 會在**工作歷程（Job History）**檢視畫面中記錄每一次試跑，並清楚標示為模擬執行，與實際工作執行並列顯示。您可以檢視模擬的檔案數量、預估總大小、耗費時間，以及任何浮現的警告或錯誤——在提交變更之前，完整掌握該工作的行為。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dry run simulation recorded in RcloneView job history with status details" class="img-large img-center" />

對於執行定期排程備份的團隊而言，每次設定變更後執行一次試跑，是不可妥協的安全步驟。它不需要任何成本——不會傳輸任何資料，也不會消耗任何儲存空間——但能防止那些原本要等到同步完成後才會顯現、且難以還原的錯誤。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟**首頁分頁 > 同步（Home tab > Sync）**，並使用您的來源與目的地設定一個新的同步工作。
3. 在工作管理員中選擇**試跑（Dry Run）**模式，以預覽所有計畫中的檔案操作。
4. 檢視複製與刪除清單，如有需要調整篩選條件，接著放心觸發實際同步。

試跑是最簡單的習慣，卻能將謹慎、可還原的雲端操作，與代價高昂的意外區分開來。

---

**相關指南：**

- [使用 RcloneView 進行篩選規則與選擇性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [使用 RcloneView 進行校驗碼驗證的雲端遷移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
