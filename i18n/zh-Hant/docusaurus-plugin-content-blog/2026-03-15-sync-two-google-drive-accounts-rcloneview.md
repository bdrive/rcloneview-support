---
slug: sync-two-google-drive-accounts-rcloneview
title: "如何同步兩個 Google Drive 帳號——使用 RcloneView 同步個人與工作雲端硬碟"
authors:
  - tayson
description: "許多人擁有多個 Google Drive 帳號——個人、工作、學校。了解如何使用 RcloneView 在不下載到本機的情況下,在這些帳號之間同步檔案。"
keywords:
  - sync two google drive accounts
  - google drive to google drive
  - transfer between google drives
  - multiple google drive sync
  - google drive personal to work
  - sync google accounts
  - google drive account transfer
  - google drive cross account
  - two google drive sync tool
  - google drive migration between accounts
tags:
  - RcloneView
  - google-drive
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何同步兩個 Google Drive 帳號——使用 RcloneView 同步個人與工作雲端硬碟

> 你的個人 Google Drive 有家庭照片。你的工作 Drive 有專案檔案。你的大學 Drive 即將到期。Google 並未原生支援跨帳號同步——但 RcloneView 可以做到。

幾乎每個人最終都會擁有多個 Google Drive 帳號。一個個人 Gmail 帳號、一個公司的 Workspace 帳號,或許還有一個即將到期的學校帳號。Google 讓你能輕鬆單獨使用每個帳號,但沒有提供在帳號之間同步或傳輸檔案的方法。你最終只能從一個帳號下載,再上傳到另一個帳號——手動、緩慢,還會占用你的本機儲存空間。RcloneView 能同時連接多個 Google Drive 帳號,並在它們之間直接傳輸。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 新增多個 Google Drive 帳號

<img src="/support/images/en/blog/new-remote.png" alt="Add multiple Google Drive accounts" class="img-large img-center" />

將每個 Google Drive 帳號都新增為 RcloneView 中獨立的遠端。清楚地命名它們——例如「GDrive-個人」、「GDrive-工作」、「GDrive-學校」——這樣你才能分辨清楚。

## 在帳號之間傳輸

在左側面板開啟一個帳號,在右側面板開啟另一個帳號。將檔案和資料夾在兩者之間拖曳:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer between Google Drive accounts" class="img-large img-center" />

檔案會直接透過 Google 的伺服器傳輸——不會下載到你的電腦,而且傳輸速度很快。

## 常見使用情境

### 保存即將到期的學校帳號中的檔案

大學的 Google Workspace 帳號通常在畢業後會被刪除。在失去存取權限之前,將所有內容傳輸到你的個人 Drive。

### 分開個人與工作檔案

不小心把個人檔案存到工作 Drive 了嗎?將它們移到你的個人帳號,不需要驚動 IT 部門。

### 整合舊帳號

將舊的 Gmail 帳號中的檔案合併到目前使用的帳號。RcloneView 讓這變成一個簡單的拖放操作。

### 鏡像重要資料夾

讓特定資料夾在兩個帳號之間保持同步。建立一個自動執行的同步工作:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync job between accounts" class="img-large img-center" />

## 排程持續同步

對於你希望在帳號之間持續同步的資料夾,可以排程自動同步:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cross-account sync" class="img-large img-center" />

## 驗證傳輸結果

使用資料夾比較功能,確認檔案已正確在帳號之間傳輸完成:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify cross-account transfer" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView**,前往 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **新增兩個 Google Drive 帳號**作為獨立的遠端。
3. **在雙面板檔案總管中開啟兩個帳號**。
4. **直接傳輸**——無需下載到本機。

你的 Google 帳號,終於連接在一起了。

---

**相關指南:**

- [將 Google Drive 遷移到 OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [同步 Google Drive 到 Dropbox](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)
- [上傳大型檔案到 Google Drive](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)

<CloudSupportGrid />
