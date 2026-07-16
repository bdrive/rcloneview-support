---
slug: fix-scheduled-sync-not-running-rcloneview
title: "修復排程同步無法執行的問題 — 在 RcloneView 中排查自動化雲端工作"
authors:
  - steve
description: "診斷並修復 RcloneView 排程同步工作無法啟動或執行時間錯誤的問題。內容涵蓋授權檢查、crontab 語法、啟動設定與日誌檢視。"
keywords:
  - rcloneview scheduled sync not running
  - fix scheduled cloud backup rcloneview
  - rcloneview schedule troubleshooting
  - cloud sync cron job not starting
  - automated cloud backup not running
  - rcloneview plus schedule fix
  - fix cloud sync schedule
  - rcloneview crontab troubleshooting
tags:
  - troubleshooting
  - tips
  - automation
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復排程同步無法執行的問題 — 在 RcloneView 中排查自動化雲端工作

> 如果您的 RcloneView 自動備份不再按排程觸發——或是根本從未啟動過——本指南將依序說明所有可能的原因，從授權驗證、crontab 語法到啟動設定，逐一排查。

以排程為基礎的同步是 RcloneView 最實用的 PLUS 功能之一：只需設定一次工作，即可依 crontab 排程自動執行，無需人工介入。當它停止運作時，根本原因幾乎都是以下四項之一——授權問題、排程設定錯誤、工作到期時應用程式未在執行，或工作本身發生了未顯示的錯誤。逐層系統性排查即可在幾分鐘內解決問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 檢查 1：確認您的 PLUS 授權處於有效狀態

以排程為基礎的同步是 PLUS 或 Lifetime 授權專屬的功能。FREE 授權不啟用 crontab 排程功能，在 FREE 授權下儲存的工作，其排程會被靜默停用。請查看 RcloneView 視窗底部的頁尾列——它會顯示「FREE License」或「PLUS License」，以及 rclone 版本與連線資訊。

如果授權顯示為 FREE 或已過期，請前往 **Help → Activate License**，重新輸入您的電子郵件地址與授權金鑰。折扣優惠券每個電子郵件地址僅能使用一次，因此使用相同優惠券重複啟用不會延長訂閱期限——如果金鑰在最近續訂後仍顯示無效，請聯絡客服。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Verifying a sync job is configured and ready to run in RcloneView" class="img-large img-center" />

確認 PLUS 已啟用後，請在工作管理員中重新開啟受影響的工作，並檢查第 4 步（排程）是否已填入實際數值，而非空白欄位。先前儲存的工作可能需要在 PLUS 啟用狀態下重新編輯並儲存，才能鎖定排程設定。

## 檢查 2：檢視工作第 4 步中的 Crontab 語法

RcloneView 的排程器使用五個 crontab 樣式的欄位：**Minute**（分鐘，0–59）、**Hour**（小時，0–23）、**Day of Week**（星期幾，0–6，週日為 0）、**Day of Month**（每月第幾天，1–31）以及 **Month**（月份，1–12）。留空欄位表示「每個」——填入數值則表示「僅限此值」。最常見的設定錯誤是在錯誤的欄位輸入 `0`，或使用不相容的組合，例如同時指定 Day of Week 與 Day of Month，導致兩者永遠無法對齊。

RcloneView 在第 4 步中直接內建了 **Simulate Schedule**（模擬排程）按鈕。點擊它即可在儲存前預覽接下來的多次執行時間。如果預覽結果不如預期——例如每分鐘都執行、跳過預期的日期，或完全沒有顯示即將執行的時間——請調整欄位並重新模擬。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring crontab schedule fields in RcloneView Job Manager Step 4" class="img-large img-center" />

清單語法（`1,3,5`）、範圍語法（`1-5` 表示工作日）以及步進語法（`0-23/4` 表示每 4 小時）都受到支援。例如，每日午夜執行的工作可設定 Minute=`0`、Hour=`0`，其餘欄位留空。

## 檢查 3：確保排程時間 RcloneView 保持執行狀態

排程工作要能觸發，RcloneView 必須處於**開啟並執行**的狀態——它並不是以背景系統服務或常駐程式的方式運作。如果電腦處於睡眠狀態、使用者已登出，或應用程式已被關閉，在該時段到期的任何排程都會被靜默跳過。

解決方法很簡單：在 **Settings → General** 下啟用 **Launch at login**（開機時啟動），讓應用程式在作業系統開機時自動啟動。搭配 **Start minimized**（最小化啟動），讓 RcloneView 在系統匣中啟動，不打擾您的桌面，同時仍在背景執行所有排程工作。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView running a scheduled sync transfer in the background" class="img-large img-center" />

如果目標機器經常在夜間關機，可考慮將排程調整至工作時段，或設定作業系統在工作到期前自睡眠中喚醒。

## 檢查 4：檢視工作歷史記錄與傳輸日誌

如果某項工作看似已執行卻沒有產生任何輸出，第一個該查看的地方是下方資訊面板中的 **Job History**（工作歷史記錄）分頁。它會記錄每一次執行，包含 Status（狀態：Completed / Errored / Canceled）、Time Spent（耗時）、Transfer Speed（傳輸速度）以及 File Count（檔案數量）。將歷史記錄篩選為僅顯示「Errored」項目，即可快速找出失敗的執行記錄。每筆記錄都連結至對應的日誌輸出，可用以識別具體的失敗原因——網路逾時、驗證錯誤、找不到路徑，或目的地權限問題。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled sync execution records and status" class="img-large img-center" />

若需要更深入的診斷，請在 **Settings → Embedded Rclone** 中啟用 **Enable rclone Logging**，並將日誌等級設為 **INFO** 或 **DEBUG**。下次工作執行時（或手動觸發時），日誌檔會擷取完整的 rclone 輸出——包括導致失敗的確切錯誤代碼與檔案——即使是間歇性問題，也能輕鬆進行根因分析。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 查看頁尾列——crontab 排程功能需要 PLUS 授權。
3. 開啟受影響的工作 → Edit → Step 4，然後使用 Simulate Schedule 驗證 cron 語法。
4. 在 Settings → General 中啟用 **Launch at login** 與 **Start minimized**。
5. 檢查 Job History 中的錯誤執行記錄，並啟用 rclone 日誌以取得詳細診斷資訊。

系統性地逐一排查這四個層面，幾乎可以快速解決所有排程同步失敗的問題——無需臆測。

---

**相關指南：**

- [使用 RcloneView 自動執行每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [排程最佳實踐 — RcloneView 中的 Cron、重試與監控](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [工作歷史記錄與傳輸日誌 — RcloneView 中的監控](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
