---
slug: rcloneview-windows-11-cloud-sync-backup
title: "RcloneView 在 Windows 11 上 —— 雲端儲存同步與備份"
authors:
  - tayson
description: "在 Windows 11 上安裝 RcloneView，開始跨 90 多個雲端服務商同步檔案。完整設定指南，涵蓋安裝、遠端設定與排程備份。"
keywords:
  - RcloneView Windows 11
  - Windows 11 雲端同步工具
  - Windows 11 雲端儲存備份
  - Windows 11 版 rclone GUI
  - Windows 11 檔案同步雲端
  - RcloneView Windows 安裝
  - Windows 11 雲端備份軟體
  - Windows 11 多雲同步
tags:
  - windows
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView 在 Windows 11 上 —— 雲端儲存同步與備份

> RcloneView 可透過單一 `.exe` 安裝程式原生安裝於 Windows 11，並自動內建 rclone。無需任何命令列設定，即可連接並同步 90 多個雲端儲存服務商。

Windows 11 內建 OneDrive 同步功能，但僅涵蓋單一服務商。RcloneView 填補了這個缺口：一款原生 Windows 應用程式，可同時連接 Google Drive、Dropbox、Amazon S3、Backblaze B2、Cloudflare R2 以及其他 90 多個服務商。無論你是將照片備份到多個雲端的家用使用者，還是將部署成品同步到 S3 的開發者，RcloneView 在 Windows 11 上都能透過視覺化介面完成，無需任何 PowerShell 或命令提示字元腳本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Windows 11 上安裝 RcloneView

從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載 Windows 安裝程式——檔案名稱為 `setup_rclone_view-{version}.exe`，是一個 Inno Setup 安裝程式。雙擊安裝程式，依照設定精靈操作（大多數使用者使用預設安裝目錄即可），RcloneView 便會出現在你的開始功能表與工作列中。

安裝程式已內建 rclone——不需要另外安裝 rclone。RcloneView 啟動時會運行其內嵌的 rclone 實例，位址為 `http://127.0.0.1:5582`。你可以在應用程式底部的頁尾看到 rclone 版本與連線狀態。

**Windows 11 系統需求：**
- 架構：x86-64（Intel/AMD 64 位元）。注意：不支援 Windows ARM64。
- VC++ 2015–2022 Redistributable（通常已預先安裝；RcloneView 安裝程式會自動檢查）
- Windows Vista 或以上版本（完整支援 Windows 11）

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView interface after installation on Windows 11" class="img-large img-center" />

## 新增雲端儲存服務商

安裝完成後，新增你的第一個雲端儲存服務商。點選 **Remote 頁籤 → New Remote**，選擇你的服務商。對於基於 OAuth 的服務（Google Drive、Dropbox、OneDrive、Box、pCloud），RcloneView 會開啟預設瀏覽器進行驗證——登入並授予存取權限。對於基於憑證的服務（Amazon S3、Backblaze B2、Cloudflare R2、Wasabi），則直接輸入你的存取金鑰與密鑰。

Windows 11 的預設瀏覽器（Edge 或 Chrome）能順利處理 OAuth 流程。若你的組織使用代理伺服器或限制以瀏覽器進行 OAuth，請檢查你的網路設定，確保允許 `localhost` 重新導向。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop file upload from Windows 11 Explorer to cloud storage in RcloneView" class="img-large img-center" />

## 將雲端儲存掛載為 Windows 磁碟機

RcloneView 的 Mount Manager 讓你能將雲端儲存掛載為 Windows 磁碟機代號（例如 Google Drive 掛載為 `Z:\`、Backblaze B2 掛載為 `Y:\`）。點選 **Remote 頁籤 → Mount Manager → New Mount**，選擇你的遠端與資料夾，選擇磁碟機代號，然後點選 **Save and Mount**。

掛載後的雲端磁碟機會立即出現在檔案總管中，與本機磁碟機並列。任何應用程式都能對掛載的磁碟機進行讀寫——這在直接從 Office、Adobe Creative Suite 或其他 Windows 應用程式存取雲端檔案時相當實用。啟用 **Auto Mount**（PLUS 授權）可在 Windows 啟動時自動掛載你的雲端磁碟機。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting cloud storage as a Windows drive letter in RcloneView Mount Manager" class="img-large img-center" />

## 設定排程雲端備份

使用 RcloneView 的 Job Manager 建立自動化備份工作。典型的 Windows 11 設定：每晚將 `C:\Users\{user}\Documents\` 同步到 Backblaze B2，每週將 `C:\Users\{user}\Pictures\` 同步到 Google Drive。每項工作會在排定的時間於背景執行——RcloneView 會縮小至 Windows 系統匣，即使不保持主視窗開啟，也能持續執行排程工作。

啟用桌面通知（設定 → Notifications → Show sync completion notification），即可在每項備份工作完成時收到 Windows 11 的提示通知。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**（Windows x86-64 安裝程式）。
2. 執行安裝程式，並從開始功能表啟動 RcloneView。
3. 透過 New Remote 新增你的雲端儲存服務商（OAuth 瀏覽器驗證或輸入憑證）。
4. 在 Job Manager 中建立同步工作並設定排程，以進行自動化備份。

RcloneView 在 Windows 11 上以單一整合介面取代了十幾個各自獨立的雲端同步用戶端——讓你能完全掌控檔案要傳輸到哪裡、以及何時傳輸。

---

**相關指南：**

- [RcloneView 在 Windows Server 上 —— 雲端備份設定](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [使用 RcloneView 將 Amazon S3 儲存貯體掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
