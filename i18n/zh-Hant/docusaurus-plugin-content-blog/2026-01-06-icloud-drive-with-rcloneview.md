---
slug: icloud-drive-with-rcloneview
title: "RcloneView + iCloud Drive：使用內建終端機安全備份 Apple 雲端"
authors:
  - tayson
description: "透過 RcloneView 終端機新增 iCloud Drive，再以 Compare、Sync 和 Jobs 進行視覺化管理。適用於 Windows 或 macOS 的 Apple 雲端備份安全工作流程。"
keywords:
  - icloud drive backup
  - rclone icloud
  - rcloneview icloud
  - apple id 2fa rclone
  - icloud to google drive
  - icloud to s3
  - cloud to cloud backup
  - rclone terminal gui
  - rcloneview terminal
  - apple cloud migration
tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# RcloneView + iCloud Drive：使用內建終端機安全備份 Apple 雲端

> iCloud Drive 很受歡迎，但並未內建企業級的備份工作流程。RcloneView 透過內建終端機新增 iCloud，再以 Compare、Sync 和 Jobs 進行視覺化管理，補上了這個缺口。

如果你想要可靠地將 iCloud Drive 備份到 Google Drive、S3 或本機磁碟，你需要兩樣東西：**rclone 的 iCloud 後端**與**能安全、可重複執行工作流程的 GUI**。RcloneView 將兩者整合於一處。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼 iCloud 備份不容易

- iCloud 需要互動式的 Apple ID 登入與 2FA。
- 原生工具缺乏跨雲端備份或排程功能。
- 純 CLI 設定雖然強大，但很容易設定錯誤。

RcloneView 讓你可以在內建終端機中執行所需的 CLI 步驟，之後再於 GUI 中管理所有內容，解決了這個問題。

## 步驟 1：開啟 RcloneView 終端機

使用內建終端機執行 rclone 指令，無需開啟外部殼層。

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="RcloneView Terminal tab" class="img-large img-center" />

## 步驟 2：使用 rclone config 新增 iCloud Drive

由於 Apple 2FA 的限制，iCloud 目前需要透過 CLI 設定。在終端機中執行 `rclone config` 並依提示操作：

```bash
rclone config
```

你會看到的主要提示：

- **Storage**：選擇 `iclouddrive`（或其對應編號）
- **Apple ID**：你的 iCloud 電子郵件
- **Password**：你的 Apple ID 密碼
- **2FA code**：輸入傳送到受信任裝置的驗證碼

參考指南（含截圖與完整步驟）：  
[/support/howto/remote-storage-connection-settings/connect-using-cli/add-icloud-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-icloud-drive)

## 步驟 3：在 RcloneView 中確認新遠端

遠端建立完成後，會自動顯示在**遠端管理員（Remote Manager）**中。

<img src="/support/images/en/blog/remote-manager.png" alt="Remote Manager" class="img-large img-center" />

從這裡開始，你可以在 Explorer 中開啟它，並使用一般的 GUI 工作流程。

## 步驟 4：使用 GUI 工具進行安全備份

### 同步前先進行 Compare

執行 **Compare**，在同步變更資料前先確認會有哪些改動。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

指南：[/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)

### 將 iCloud 同步到另一個雲端

選擇 iCloud 作為來源，並選擇你的備份目標（Drive、S3、外接磁碟）作為目的地。

<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />

指南：[/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)

### 儲存為 Job 並排程執行

將此次 Sync 儲存為 Job，以便定期執行備份（需 Plus 授權）。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />
</div>

指南：[/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)、[/support/howto/rcloneview-advanced/job-scheduling-and-execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## iCloud 備份的最佳實務

- **使用專屬的目的資料夾**，讓備份維持有條理。
- **先進行 dry run**，確認同步方向是否正確。
- **在初次設定時準備好 Apple ID 2FA**。
- **監控 Job 歷史紀錄**，及早發現失敗情況。

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history" class="img-large img-center" />

## 這個工作流程適合誰

- **初學者**：想要視覺化的安全防護。
- **工程師**：需要 CLI 的彈性，但偏好 GUI 操作。
- **IT 管理員**：想要可重複執行、可稽核的備份工作。

## 結論

當你將 rclone CLI 與視覺化控制層結合時，iCloud Drive 就能安全且可重複地進行備份。只需使用一次 RcloneView 終端機完成 iCloud 設定，之後所有操作都能在 GUI 中完成，兼顧速度、安全與清晰度。
