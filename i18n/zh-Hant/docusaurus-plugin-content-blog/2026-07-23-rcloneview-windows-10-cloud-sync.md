---
slug: rcloneview-windows-10-cloud-sync
title: "在 Windows 10 上使用 RcloneView — 雲端儲存同步與備份"
authors:
  - kai
description: "在 Windows 10 上安裝並執行 RcloneView,透過單一桌面應用程式掛載、同步並備份 90 多個雲端儲存服務商。"
keywords:
  - RcloneView Windows 10
  - Windows 10 雲端儲存
  - Windows 10 掛載雲端硬碟
  - Windows 10 雲端備份軟體
  - Windows 雲端儲存同步
  - RcloneView 安裝程式 Windows
  - Windows 10 雲端檔案管理器
  - 多雲 Windows 10
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Windows 10 上使用 RcloneView — 雲端儲存同步與備份

> 即使 Windows 11 推出多年之後,Windows 10 仍是數百萬台桌上型電腦每天在用的系統,而 RcloneView 在其上運作同樣完整 —— 掛載、同步與備份功能一應俱全,毫不打折。

許多企業與家庭使用者至今仍在使用 Windows 10,不論是出於個人選擇、硬體限制,或單純因為升級從未被列為優先事項。RcloneView 並不把 Windows 10 當成過時系統來對待 —— 安裝程式、掛載驅動程式與完整功能集,與 Windows 11 版本的表現完全一致,因此即便工作室的電腦混用不同 Windows 版本,較舊的那些也不會因此失去任何功能。RcloneView 能在單一視窗中掛載並同步 90 多個服務商,無論安裝在哪個受支援的 Windows 版本上,都能以 FREE 授權使用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Windows 10 上安裝 RcloneView

Windows 版 RcloneView 以單一的 Inno Setup 安裝程式形式提供(`setup_rclone_view-{version}.exe`),專為 x86-64 架構建置,僅能從 rcloneview.com 官方下載頁面取得 —— 沒有 Windows 市集上架,也不透過任何套件管理器發布。安裝前,請先確認電腦上已安裝 Visual C++ 2015-2022 可轉散發套件;大多數 Windows 10 系統因其他軟體而已預先安裝,但全新安裝或精簡安裝的環境可能需要另外加裝。RcloneView 本身的系統需求將 Windows Vista 列為實際的最低門檻,因此一台更新到位的 Windows 10 系統能輕鬆滿足這項要求,還綽綽有餘。

<img src="/support/images/en/blog/new-remote.png" alt="在 Windows 10 桌面上安裝 RcloneView" class="img-large img-center" />

安裝完成後,RcloneView 內建 rclone 執行檔,因此不需要另外安裝或設定 rclone 就能開始連接雲端帳戶。應用程式透過本機回送位址與內建 rclone 執行個體通訊,啟動後視窗底部的狀態列會顯示 rclone 版本與連線狀態。

## 在 Windows 10 上掛載雲端硬碟

Windows 10 的檔案總管會像對待實體磁碟一樣對待 RcloneView 的掛載硬碟。無論是從 Mount Manager,還是直接從某個遠端的面板工具列,選取一個資料夾並點選 Mount,都會為其指派一個磁碟機代號(自動指派或手動選擇),讓它像本機磁碟一樣可以瀏覽。Windows 上的預設掛載方式是 cmount,唯讀模式、網路磁碟機顯示、VFS 快取模式(off、minimal、writes 或 full)等選項,都與 Windows 11 上完全相同 —— 不會因為系統較舊而被縮減。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="在 Windows 10 上將雲端遠端掛載為磁碟機代號" class="img-large img-center" />

## 不必透過 Windows 工作排程器也能排程備份

RcloneView 的 Job Manager 透過引導式精靈建立同步、複製與備份工作,不必分別設定 Windows 工作排程器與 rclone 命令列參數:選擇來源與目的地、設定傳輸與重試選項、依檔案大小、時間或類型套用篩選規則,並且在 PLUS 授權下,還能直接在應用程式內附加 crontab 風格的排程。之後,工作記錄(Job History)會持續記錄每次執行的狀態、傳輸大小與耗時,比翻查工作排程器的事件記錄更方便稽核。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 Windows 10 上使用 RcloneView 排程備份工作" class="img-large img-center" />

有一點特別值得 Windows 10 使用者注意:RcloneView 的應用程式內自動更新目前僅在 macOS 上透過 Sparkle 運作。在包括 Windows 10 在內的 Windows 系統上,檢查更新只會導向下載頁面而不會自動安裝,因此需要定期重新下載安裝程式,才能讓應用程式保持在最新版本。

## 快速上手

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下載適用於 Windows 的 RcloneView**。
2. 執行安裝程式,並確認已安裝 VC++ 2015-2022 可轉散發套件。
3. 透過 Remote 分頁 > New Remote 新增雲端遠端 —— 支援 OAuth 的服務商會自動開啟瀏覽器登入視窗。
4. 將某個遠端掛載為磁碟機代號,或在 Job Manager 中設定你的第一個同步工作。

Windows 10 裝置完全沒必要在多雲工作流程中被邊緣化 —— RcloneView 為它帶來與其他受支援平台完全相同的掛載、同步與備份工具組。

---

**相關指南:**

- [在 Windows 11 上使用 RcloneView — 雲端儲存同步與備份](https://rcloneview.com/support/blog/rcloneview-windows-11-cloud-sync-backup)
- [如何在 Windows Server 上使用 RcloneView 進行自動化雲端備份](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [解決掛載磁碟機代號衝突 — 使用 RcloneView 排解 Windows 雲端儲存問題](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
