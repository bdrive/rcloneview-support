---
slug: system-tray-background-sync-rcloneview
title: "系統匣與背景同步——讓 RcloneView 中的雲端工作持續執行"
authors:
  - steve
description: "了解 RcloneView 的系統匣整合如何讓同步工作在背景持續執行、管理雲端掛載，並在不需保持視窗開啟的情況下傳送工作完成通知。"
keywords:
  - RcloneView system tray background sync
  - cloud sync background mode
  - RcloneView minimize to tray
  - background cloud backup RcloneView
  - RcloneView tray icon jobs
  - cloud sync notifications RcloneView
  - keep cloud sync running background
  - RcloneView continuous backup
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 系統匣與背景同步——讓 RcloneView 中的雲端工作持續執行

> RcloneView 的系統匣整合功能讓您可以將應用程式最小化，同時保持同步工作持續執行、雲端硬碟維持掛載狀態，並持續接收通知——完全不會打斷您的工作流程。

大多數雲端同步工具都需要保持視窗開啟才能確認工作是否正在執行。RcloneView 的系統匣支援打破了這項限制。設定完成後，您可以將 RcloneView 完全最小化，而排程的同步工作、進行中的傳輸以及已掛載的雲端硬碟仍會在背景持續運作。系統匣圖示讓您可以快速存取所有功能，而不會佔用您的工作空間。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 啟用背景模式與系統匣

預設情況下，RcloneView 可以設定為在您關閉視窗時最小化到系統匣，而非直接結束程式。在**「設定」分頁 → 一般**中，找到**「關閉時結束程式」**選項。停用此選項，即可確保按下 X 按鈕時 RcloneView 會移至系統匣，而不是完全退出。

您也可以啟用**「開機時啟動」**，讓 RcloneView 隨系統自動啟動，並立即開始監控排程工作。搭配**「啟動時最小化」**使用，可讓 RcloneView 從電腦開機的那一刻起就在背景靜默執行。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView running in background with system tray active" class="img-large img-center" />

## 從系統匣管理雲端掛載

系統匣最實用的功能之一，就是快速掛載管理。以滑鼠右鍵點擊 RcloneView 系統匣圖示，即可看到所有已設定雲端掛載的清單及其目前狀態（已掛載或未掛載）。點擊任一項目即可切換其掛載狀態——將雲端硬碟掛載為本機磁碟區，或取消掛載——完全不需要開啟主視窗。

這對於整天都保持多個雲端硬碟掛載狀態的專業人士來說特別實用。開發人員可能會將 S3 儲存貯體掛載為網路磁碟機、掛載 Google Drive 以存取文件，以及掛載 NAS 以進行本機檔案傳輸。系統匣讓您可以即時掌控所有這些項目。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Quick access to cloud mounts via system tray in RcloneView" class="img-large img-center" />

## 工作完成通知

當同步工作完成時——無論是排程觸發還是手動觸發——RcloneView 都能顯示桌面通知，顯示工作名稱、耗時與最終狀態。請在**「設定」分頁 → 介面與通知 → 顯示同步完成通知**中啟用此功能。

這代表您可以啟動一個大型的隔夜備份工作、將 RcloneView 最小化到系統匣，並在工作完成時收到桌面通知。如果工作發生錯誤，您也會立即知道。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing background sync completions in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在**「設定」→ 一般**中，停用**「關閉時結束程式」**並啟用**「開機時啟動」**。
3. 依照平常方式設定同步工作或排程任務。
4. 將 RcloneView 最小化——工作與掛載會在背景持續執行。

設定完成後，RcloneView 就像是您雲端儲存的靜默背景服務，不需要您一直保持視窗開啟。

---

**相關指南：**

- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [同步完成時的通知提醒——RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [RcloneView 中的電子郵件 SMTP 工作通知](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />
