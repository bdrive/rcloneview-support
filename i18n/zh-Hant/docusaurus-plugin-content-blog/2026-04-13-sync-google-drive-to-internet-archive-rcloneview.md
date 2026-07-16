---
slug: sync-google-drive-to-internet-archive-rcloneview
title: "將 Google Drive 同步到 Internet Archive — 使用 RcloneView 進行數位典藏"
authors:
  - tayson
description: "了解如何使用 RcloneView 將 Google Drive 檔案典藏至 Internet Archive，以進行長期數位保存。適合研究人員、記者與教育工作者。"
keywords:
  - Google Drive Internet Archive sync
  - digital preservation RcloneView
  - archive Google Drive files
  - Internet Archive rclone GUI
  - long-term cloud backup
  - researcher data archiving
  - Google Drive backup Internet Archive
  - RcloneView digital archive
tags:
  - google-drive
  - internet-archive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 同步到 Internet Archive — 使用 RcloneView 進行數位典藏

> Internet Archive 提供永久且免費的數位內容儲存空間 — RcloneView 讓你能輕鬆將 Google Drive 檔案推送至該處，以進行長期保存。

研究人員典藏田野資料、記者保存原始文件、教育工作者維護課程教材，都面臨相同的挑戰：Google Drive 便於日常工作，但並非為永久保存而設計。Internet Archive（archive.org）則正是為此而生。它能無限期儲存內容，並讓其長期公開（或私下）存取。RcloneView 連接這兩個服務，讓你無需碰觸命令列，就能將 Google Drive 內容同步至 Internet Archive。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Google Drive

開啟 RcloneView，前往**遠端管理器（Remote Manager）**。點擊**新增遠端（New Remote）**並選擇 **Google Drive**。RcloneView 會開啟瀏覽器進行 OAuth 驗證 — 使用你的 Google 帳號登入並授予存取權限。授權完成後，該遠端會出現在遠端管理器中。開啟它以確認能看到你的 Drive 檔案。

若你需要典藏**共用雲端硬碟（Shared Drive）**，請將遠端設定指向特定的共用雲端硬碟根目錄，而非「我的雲端硬碟」。請在 RcloneView 的遠端進階設定中檢查團隊雲端硬碟（team drive）選項。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Drive and Internet Archive remotes in RcloneView" class="img-large img-center" />

## 連接 Internet Archive

回到**遠端管理器**，點擊**新增遠端**並選擇 **Internet Archive**。Internet Archive 使用電子郵件／密碼憑證（你的 archive.org 帳號登入資訊），或是從你的 archive.org 帳號設定取得的 S3 相容 API 金鑰。在設定表單中輸入 Access Key 與 Secret Key（Internet Archive 的 S3 API 金鑰）並儲存。

開啟 Internet Archive 遠端以確認連線正常。你在 archive.org 上既有的項目將會以頂層項目的形式顯示。

## 設定典藏工作

前往**工作（Jobs）**並點擊**新增工作（New Job）**。將 Google Drive 設為來源 — 選擇包含你要保存資料的特定資料夾。將 Internet Archive 遠端設為目的地，並指定檔案應存放的項目識別碼（item identifier）。

在工作精靈的第 2 步中，設定適合典藏用途的選項：

- 啟用**校驗和驗證（checksum verification）** — 資料完整性對於保存工作至關重要
- 將同時傳輸數設為適中值（2–4），以避免對 Internet Archive 的匯入管線造成過大負擔
- 先啟用**試跑（Dry Run）**，以檢視確切將上傳的內容

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to Internet Archive" class="img-large img-center" />

## 執行保存同步

在「記錄（Log）」分頁中檢視試跑輸出結果後，關閉試跑並執行完整工作。RcloneView 會將檔案直接從 Google Drive 傳輸至 Internet Archive。視檔案大小與 Archive 的匯入佇列而定，大型上傳可能需要一些時間 — 即時進度面板會讓你隨時掌握狀況。

若要進行持續性的保存工作流程，可建立週期性工作（排程功能需要 PLUS 授權），讓新增至 Google Drive 資料夾的檔案能按排程（例如每週）自動典藏。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Google Drive to Internet Archive transfers" class="img-large img-center" />

## 使用情境

- **學術研究人員**：在專案完成時典藏資料集與工作文件
- **記者**：永久保存原始素材與訪談錄音
- **教育工作者**：典藏課程內容與數位學習資源
- **非營利組織**：保存補助申請書、捐款紀錄與機構歷史

Internet Archive 的永久性使其有別於任何商業雲端服務 — 存入其中的內容，其設計初衷就是要比個別組織或訂閱方案存續得更久。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在**遠端管理器**中透過 OAuth 連接 Google Drive。
3. 使用你在 archive.org 帳號設定中取得的 S3 API 憑證連接 Internet Archive。
4. 建立從 Google Drive 到 Internet Archive 的同步工作；先執行試跑，再執行完整典藏。

RcloneView 為典藏人員與研究人員提供了一套可靠、可稽核的工作流程，用於將 Google Drive 內容存入永久紀錄。

---

**相關指南：**

- [使用 RcloneView 進行雲端對雲端遷移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [使用 RcloneView 進行校驗和驗證的雲端遷移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
