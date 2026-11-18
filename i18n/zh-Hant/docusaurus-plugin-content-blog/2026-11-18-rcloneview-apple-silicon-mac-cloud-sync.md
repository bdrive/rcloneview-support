---
slug: rcloneview-apple-silicon-mac-cloud-sync
title: "在 Apple Silicon Mac 上使用 RcloneView — 雲端儲存同步與備份"
authors:
  - robin
description: "透過 Universal .dmg，在 Apple Silicon Mac 上原生執行 RcloneView。在一個 macOS 應用程式中掛載、同步並備份 90 多個雲端服務供應商。"
keywords:
  - rcloneview apple silicon
  - rclone gui m1 mac
  - Apple Silicon Mac 雲端同步
  - MacBook 掛載雲端儲存
  - rclone universal binary macos
  - Mac mini 雲端備份
  - macOS 掛載雲端硬碟
  - rcloneview macOS 安裝
  - Mac 同步 Google Drive OneDrive
  - arm64 Mac 雲端儲存管理工具
tags:
  - RcloneView
  - macos
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Apple Silicon Mac 上使用 RcloneView — 雲端儲存同步與備份

> 一個 Universal 下載檔即可在 Apple Silicon 與 Intel Mac 上原生執行，並內建 rclone 引擎。

許多 Apple Silicon Mac 使用者同時使用多個雲端帳號。RcloneView 提供一個原生 macOS 應用程式，可瀏覽、掛載、比較並同步 Google Drive、OneDrive、Dropbox、S3 儲存貯體、NAS 共用以及數十種其他遠端。本指南說明在 Apple Silicon 機器上安裝前需要了解的事項。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 適用於 Apple Silicon 與 Intel 的單一 Universal .dmg

macOS 版 RcloneView 以單一 `.dmg` 磁碟映像檔發布，其中包含 Universal 二進位檔：同時含有適用於 Apple Silicon 的 ARM64 程式碼與適用於 Intel Mac 的 x86-64 程式碼。在 Apple Silicon 上，應用程式會以原生方式執行。此版本已由開發者完成公證與程式碼簽署，因此 Gatekeeper 無需任何變通方法即可開啟。

最低支援版本為 macOS 12.7（Monterey），並已確認可在 Ventura、Sonoma 與 Sequoia 上運作。請只從官方[下載頁面](https://rcloneview.com/src/download.html)取得安裝程式，因為沒有 Homebrew cask 或其他套件管理工具管道。安裝後，macOS 版本會在應用程式內自行更新。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on an Apple Silicon Mac" class="img-large img-center" />

RcloneView 內含自己的 rclone 二進位檔，因此不需要另外安裝任何東西。開啟 Remote 分頁，點選 **New Remote** 並登入。Google Drive、Dropbox、OneDrive 與 Box 使用瀏覽器 OAuth 登入。Wasabi 或 Cloudflare R2 等 S3 相容服務則會要求輸入存取金鑰。

## 在 Finder 中掛載雲端硬碟

在 macOS 上，RcloneView 預設使用 `nfsmount` 進行掛載，並可選擇自訂掛載路徑。在檔案總管中選取資料夾，點選 Mount 圖示，遠端就會像本機磁碟區一樣出現在 Finder 中。預設的 VFS 快取模式 `writes` 適合大多數編輯工作流程。使用 16 GB MacBook Air 瀏覽 2 TB 典藏資料的攝影師，也可以設定快取最大容量，避免快取塞滿內建 SSD。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager showing cloud drives mounted on macOS" class="img-large img-center" />

你可以從 Mount Manager 或選單列的系統匣圖示管理掛載。在 PLUS 授權下，Auto mount 會在每次登入時重新連接你的磁碟。

## 值得先調整好的兩項 macOS 設定

macOS 的隱私權控制可能讓桌面、文件或下載項目資料夾在 RcloneView 中看起來是空的。請在 **System Settings > Privacy & Security > Files & Folders** 中授予存取權，或將 RcloneView 加入 **Full Disk Access**，然後重新啟動應用程式。

大型同步工作也可能觸及 macOS 預設的開啟檔案數上限（256–1024）。如果看到「too many open files」錯誤，請在 `/Library/LaunchDaemons/limit.maxfiles.plist` 建立 LaunchDaemon plist，將軟限制與硬限制提高到 524288，然後重新開機。

## 從 Mac 進行排程備份

使用同步精靈設定單向工作，例如將 `~/Projects` 同步到 Backblaze B2 儲存貯體，並先執行 Dry Run 確認實際會有哪些變更。RcloneView 可在 Windows、macOS 與 Linux 上透過一個視窗掛載並同步 90 多個供應商。在 PLUS 授權下，當應用程式常駐於選單列時，排程步驟可依 cron 風格的時間表執行工作。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled cloud backup job in RcloneView on macOS" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**，並將它從 Universal `.dmg` 拖曳到 Applications。
2. 在 System Settings 中授予 Files & Folders 或 Full Disk Access 權限，然後重新啟動應用程式。
3. 使用 **New Remote** 新增雲端遠端，並掛載你想在 Finder 中看到的遠端。
4. 建立同步工作，用 Dry Run 檢查，然後在 Transferring 分頁查看進度。

設定好 RcloneView 後，你的 Mac 就能在同一處掛載、同步並備份你正在使用的雲端帳號。

---

**相關指南：**

- [在 macOS Sequoia 上使用 RcloneView — 雲端儲存同步](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [修正 macOS Too Many Open Files 錯誤](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [修正 macOS 空資料夾與權限問題](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
