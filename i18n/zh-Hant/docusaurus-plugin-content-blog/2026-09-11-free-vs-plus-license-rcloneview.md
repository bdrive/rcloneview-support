---
slug: free-vs-plus-license-rcloneview
title: "FREE 與 PLUS 授權 — RcloneView 功能比較"
authors:
  - alex
description: "並排比較 RcloneView 的 FREE 與 PLUS 授權功能 —— 排程、多視窗、自動掛載和帶篩選器的比較 —— 協助你選擇合適的方案。"
keywords:
  - RcloneView 授權
  - RcloneView FREE 與 PLUS
  - RcloneView PLUS 功能
  - 排程雲端同步
  - 多視窗檔案管理器
  - 啟動時自動掛載
  - 帶篩選器的資料夾比較
  - RcloneView 授權比較
  - 雲端同步自動化
  - 跨平台檔案管理器
tags:
  - RcloneView
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# FREE 與 PLUS 授權 — RcloneView 功能比較

> 在圍繞它建立雲端儲存工作流程之前,先準確了解每種 RcloneView 授權能解鎖什麼。

在 FREE 與 PLUS 授權之間做選擇,不應該靠猜測。RcloneView 對功能集做了清楚的劃分:FREE 授權已經涵蓋跨 90 多個提供商的完整檔案管理、同步與掛載功能,而 PLUS 則為進階使用者與團隊新增自動化與多實例能力。本指南詳細說明每個層級具體包含哪些內容,協助你根據實際工作方式選擇合適的授權。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## FREE 授權已經包含的內容

FREE 授權並不是精簡版試用 —— 它是一套完整的日常工具集。掛載與卸載雲端硬碟、完整的檔案總管操作(複製、移動、刪除、重新命名)、基本 Folder Compare,以及整個 Sync & Job Management 系統,全部免費包含。這表示 1:N 同步(一個來源鏡像到多個目的地)、帶詳細記錄的 Job History、執行同步前的 Dry Run 預覽,以及工作設定的匯出/匯入,在 FREE 版本中都可以使用。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed sync jobs on the FREE license" class="img-large img-center" />

與僅支援掛載的工具不同,RcloneView 在 FREE 授權下也能對相同的 90 多個雲端提供商進行同步與資料夾比較,透過 Remote Manager 以 OAuth 或(視服務而定的)憑證方式連接。

## PLUS 解鎖的功能

PLUS 專為需要讓 RcloneView 無人值守運作,或同時在多個環境中執行的使用者而設計。其核心功能是 Schedule-Based Sync:支援分鐘、小時、星期、日期與月份欄位的 crontab 風格排程,並配有排程模擬器,可在送出前預覽接下來的執行時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a crontab-style sync schedule in RcloneView PLUS" class="img-large img-center" />

除排程外,PLUS 還新增了 Auto Mount on Startup(機器開機的瞬間掛載好的磁碟機即可就緒)、Auto Start Schedule on Startup、支援執行各自擁有獨立狀態的多個 RcloneView 實例的 Multi-Window 功能,以及可依資料夾名稱或檔案類型限制比較範圍的 Folder Compare with Filter。

## 為你的工作流程選擇合適的授權

如果你手動觸發傳輸、像檔案總管一樣瀏覽雲端儲存,並偶爾執行比較或同步,FREE 就能涵蓋整個工作流程。如果你需要在不開啟應用程式的情況下依排程觸發同步工作、需要磁碟機在重新開機後自動掛載,或是需要為不同專案開啟多個獨立的 RcloneView 視窗,PLUS 能省去這些手動步驟。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job manually from the RcloneView Job Manager" class="img-large img-center" />

## 快速上手

1. **下載 RcloneView**:從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載。
2. 設定好遠端帳戶,並執行一次手動同步或掛載,確認 FREE 功能集是否符合你的日常使用需求。
3. 如果你發現自己每天在同一時間重複執行相同的傳輸,不妨試著建立排程,看看 PLUS 的排程功能是否適合你。
4. 確定哪個層級適合你的工作流程後,在 Help > Activate License 中啟用授權金鑰。

讓授權配合你實際的使用習慣 —— 而不是反過來 —— 能讓你的雲端儲存設定保持簡單且可預測。

---

**相關指南:**

- [排程最佳實務 — RcloneView 中的 Cron 與重試](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [RcloneView 中的多視窗並行 Explorer](https://rcloneview.com/support/blog/multi-window-parallel-explorer-rcloneview)
- [RcloneView 中帶篩選器的 Folder Compare](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
