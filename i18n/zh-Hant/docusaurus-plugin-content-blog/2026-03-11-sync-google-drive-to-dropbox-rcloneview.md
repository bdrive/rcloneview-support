---
slug: sync-google-drive-to-dropbox-rcloneview
title: "如何將 Google Drive 與 Dropbox 同步——使用 RcloneView 讓兩個雲端保持一致"
authors:
  - tayson
description: "同時使用 Google Drive 和 Dropbox？了解如何使用 RcloneView 讓兩者保持同步，確保檔案在兩個平台上都是最新版本。"
keywords:
  - sync google drive dropbox
  - google drive to dropbox
  - keep google drive dropbox in sync
  - google drive dropbox sync tool
  - transfer google drive dropbox
  - google drive dropbox bridge
  - multi cloud sync google dropbox
  - google drive dropbox backup
  - sync two cloud accounts
  - google drive dropbox migration
tags:
  - google-drive
  - dropbox
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何將 Google Drive 與 Dropbox 同步——使用 RcloneView 讓兩個雲端保持一致

> 你的公司使用 Google Workspace，但客戶使用 Dropbox。你的團隊在 Drive 上共享檔案，但設計師偏好 Dropbox。無論原因為何，你都需要讓兩個雲端保持同步。以下告訴你該怎麼做。

Google Drive 和 Dropbox 是兩個最受歡迎的雲端儲存平台，但它們彼此之間並不會原生互通。當你需要讓檔案同時在兩個平台上可用時，一般做法是手動複製貼上或透過電子郵件附件傳送。RcloneView 能自動完成同步，讓兩個平台的內容保持一致。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常見情境

- **客戶協作** — 你的團隊使用 Google Drive，客戶使用 Dropbox。
- **部門橋接** — 工程部門使用 Drive，行銷部門使用 Dropbox。
- **個人與工作分離** — 工作使用 Google Workspace，個人使用 Dropbox。
- **遷移緩衝期** — 正在逐步從一個平台遷移到另一個平台。
- **備援保護** — 兩個平台上都保留檔案，互為備份。

## 設定步驟

### 1) 新增兩個帳號

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Drive and Dropbox" class="img-large img-center" />

### 2) 並排瀏覽

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive and Dropbox side by side" class="img-large img-center" />

### 3) 選擇你的同步策略

**單向（Google Drive → Dropbox）：** 以 Google Drive 為主要來源，變更會推送到 Dropbox。

**單向（Dropbox → Google Drive）：** 以 Dropbox 為來源，變更會推送到 Drive。

**資料夾層級同步：** 只同步特定資料夾，而非整個帳號。例如，僅同步 `Projects/ClientA/` 資料夾。

### 4) 排程定期同步

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Google Drive Dropbox sync" class="img-large img-center" />

### 5) 驗證同步狀態

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Google Drive and Dropbox" class="img-large img-center" />

## 小技巧

- **使用篩選器** 只同步相關資料夾——而非整個雲端空間。
- **使用複製功能進行備份** — 可避免意外刪除的內容被同步傳播。
- **使用同步功能維持鏡像** — 讓兩端內容保持完全一致。
- **留意速率限制** — Google 和 Dropbox 都會對高流量使用進行限流。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Google Drive 與 Dropbox** 作為遠端。
3. 為所需的資料夾**建立同步或複製工作**。
4. **排程自動更新**。
5. **使用資料夾比對功能驗證結果**。

兩個雲端，一次同步。不再需要手動分享檔案。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Rclone 篩選規則說明](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [同步、複製、移動的差異](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)

<CloudSupportGrid />
