---
slug: job-export-import-portable-workflow-rcloneview
title: "任務匯出與匯入——RcloneView 中可攜式同步工作流程"
authors:
  - tayson
description: "了解如何在 RcloneView 中匯出與匯入同步任務，以便跨機器分享工作流程、統一團隊設定，並在系統遷移後快速復原。"
keywords:
  - RcloneView job export
  - sync job import
  - portable sync workflow
  - job manager export
  - team sync configuration
  - backup sync jobs
  - migrate RcloneView jobs
  - job portability
tags:
  - RcloneView
  - feature
  - job-management
  - automation
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 任務匯出與匯入——RcloneView 中可攜式同步工作流程

> RcloneView 讓您可以將所有同步任務匯出成一個 JSON 檔案，並在其他任何機器上匯入——讓您的工作流程真正可攜，也讓團隊設定保持一致。

設定複雜的同步任務需要花費不少時間：選擇正確的來源與目的地遠端、設定過濾規則、設定頻寬限制，以及為每個任務調整選項。您最不希望發生的事，就是在升級到新電腦、新增第二台工作站，或有新團隊成員加入時，又得重複這些工作。RcloneView 的任務匯出與匯入功能解決了這個問題，它會將您整套任務設定封裝成一個可攜式 JSON 檔案，可以載入到任何一台安裝了 RcloneView 的電腦上。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 匯出您的同步任務

若要匯出任務，請開啟 RcloneView 的**任務管理器**，並在工具列或右鍵選單中尋找**匯出**選項。RcloneView 會將所有已設定的同步任務——包括其來源／目的地路徑、過濾規則、rclone 旗標與排程資訊——匯出成一個 JSON 檔案。您可以自行選擇儲存位置。

建議將匯出任務納入您整體備份策略中，並定期執行。將匯出的 JSON 檔案儲存在雲端資料夾中（例如您的 Google Drive 或 Backblaze B2 備份儲存桶），這樣無論本機發生什麼狀況，都能隨時存取。可以把它想成是「備份設定的備份」。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager in RcloneView showing export option" class="img-large img-center" />

## 在新機器上匯入任務

在目的地機器上，從 [rcloneview.com](https://rcloneview.com/src/download.html) 安裝 RcloneView，並設定所需的雲端遠端（匯入的任務要正確運作，必須存在相同名稱的遠端）。接著開啟**任務管理器**，使用**匯入**功能載入您匯出的 JSON 檔案。所有同步任務會立即出現，可直接執行。

在電腦遷移之後，這項工作流程特別有價值。與其手動重新建立十幾個同步任務，匯入只需幾秒鐘即可完成。同樣的流程也適用於團隊標準化：團隊負責人建立並匯出一套標準任務設定，然後將 JSON 檔案分發給所有團隊成員，讓他們匯入到各自的 RcloneView 安裝中。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Imported jobs visible in RcloneView Job Manager" class="img-large img-center" />

## 團隊標準化與災難復原

對於管理多個雲端目的地的團隊來說，同步任務設定的一致性至關重要。如果每位團隊成員都各自手動設定任務，過濾規則或目的地路徑上的差異可能導致檔案遺漏或意外覆寫。透過維護一份主要任務匯出檔案，並將其匯入所有團隊機器，您可以確保每個人執行的都是完全相同的工作流程。

匯出／匯入功能也可作為同步設定的輕量級災難復原機制。如果需要重新安裝 RcloneView 或更換機器，復原整套工作流程只需兩個步驟：匯入 rclone 遠端設定，以及匯入任務 JSON。RcloneView 的匯出／匯入功能在免費方案中即可使用——此功能不需要 PLUS 授權。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Standardized sync jobs shared across team machines in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在您的主要機器上，於**任務管理器**中設定同步任務。
3. 在任務管理器中使用**匯出**，將所有任務儲存為 JSON 檔案。
4. 將匯出檔案儲存在雲端備份位置，妥善保管。
5. 在新機器上安裝 RcloneView、設定相符的遠端名稱，並**匯入** JSON 以還原所有任務。

任務匯出與匯入讓 RcloneView 成為一個真正可攜式的同步平台——您在工作流程上的投入，不再受限於單一機器。

---

**相關指南：**

- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [使用 RcloneView 備份與遷移 Rclone 設定](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [RcloneView 中的批次操作](https://rcloneview.com/support/blog/batch-operations-rcloneview)

<CloudSupportGrid />
