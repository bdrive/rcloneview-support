---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "修復 Linux 上消失的系統匣圖示 — 使用 RcloneView 恢復背景掛載與工作"
authors:
  - alex
description: "Linux 上看不到 RcloneView 系統匣圖示？了解如何透過 AppIndicator 函式庫、桌面設定與 RcloneView 選項恢復系統匣掛載與背景工作。"
keywords:
  - rcloneview 系統匣圖示 linux 消失
  - linux 系統匣圖示不顯示
  - libayatana-appindicator3-1
  - gnome appindicator 系統匣圖示
  - rcloneview linux 疑難排解
  - rclone gui 系統匣 linux
  - linux 背景雲端同步
  - 掛載管理員 系統匣
  - rcloneview 最小化啟動
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Linux 上消失的系統匣圖示 — 使用 RcloneView 恢復背景掛載與工作

> 如果 RcloneView 在 Linux 上可以執行，但系統匣圖示始終沒有出現，原因幾乎都是缺少 AppIndicator 函式庫，或是桌面環境隱藏了系統匣圖示。

RcloneView 的系統匣圖示不只是裝飾。它會列出已掛載的磁碟、切換掛載與卸載、啟動新的掛載，並在工作於背景執行時讓應用程式隨時可用。當 Linux 上的這個圖示消失時 — 這在全新安裝的 Ubuntu、Fedora 或精簡桌面環境中很常見 — 使用者不是整天開著主視窗，就是在關閉視窗後找不到應用程式。以下說明如何診斷並修復這個問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 系統匣圖示為何消失

在 Linux 上，RcloneView 透過 D-Bus 與 AppIndicator 和桌面整合。這需要以下兩個函式庫之一：**libayatana-appindicator3-1** 或 **libappindicator3-1**。如果兩者都未安裝，應用程式本身仍可開啟 — 開啟應用程式需要 GTK+ 3.0 以及 X11 或 Wayland 工作階段 — 但系統匣圖示沒有可註冊的對象。

第二個原因是桌面環境。部分桌面，特別是 GNOME，預設不顯示 AppIndicator 圖示，需要啟用 AppIndicator 擴充功能。KDE Plasma、Xfce、Cinnamon 和 MATE 通常不需額外步驟即可顯示這些圖示。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Linux 系統匣圖示無法使用時所用的 RcloneView 掛載管理員" class="img-large img-center" />

## 逐步修復

1. **安裝 AppIndicator 函式庫。** 使用發行版的套件管理員安裝 libayatana-appindicator3-1（在仍提供它的發行版上也可安裝 libappindicator3-1）。不同發行版的套件名稱略有差異，請在套件管理員中搜尋 "appindicator"。
2. **在桌面中啟用系統匣支援。** 在 GNOME 上，啟用 AppIndicator/KStatusNotifierItem 擴充功能，然後登出並重新登入。
3. **完全重新啟動 RcloneView。** 不要只關閉視窗，而是結束應用程式後重新啟動，讓它在啟動時向系統匣註冊。

如果圖示仍未出現，請開啟底部 Info View 中的 **Log** 分頁查看錯誤，或在 Settings > Embedded Rclone 中啟用 DEBUG 等級的 rclone 記錄，以收集提供給支援團隊的詳細資訊。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="在 Linux 上從 RcloneView 檔案總管掛載雲端遠端" class="img-large img-center" />

## 檢查依賴系統匣的設定

General 設定中有兩項與系統匣相關。**Start minimized** 會讓 RcloneView 直接啟動到系統匣 — 如果系統匣圖示無法運作，應用程式看起來就像完全沒有啟動。**Quit on close** 決定關閉按鈕是結束應用程式，還是讓它在背景繼續執行。在系統匣修復之前，請關閉 Start minimized，並留意 Quit on close 的設定，以免意外中止正在執行的工作。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 工作記錄確認背景工作已完成" class="img-large img-center" />

## 確認背景工作正在執行

圖示恢復後，關閉主視窗並檢查系統匣選單是否仍列出你的掛載。工作會在背景繼續執行，每項工作完成時都會顯示通知。之後，**Job History** 會顯示每次執行是已完成、發生錯誤還是已取消。RcloneView 可在 Windows、macOS 和 Linux 上透過單一視窗掛載並同步 90 多個供應商 — 而系統匣讓這個視窗不會妨礙你。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**，可選擇 .deb、.rpm 或 .AppImage 格式。
2. 使用發行版的套件管理員安裝 libayatana-appindicator3-1 或 libappindicator3-1。
3. 如果桌面環境隱藏系統匣圖示，請啟用 AppIndicator 支援。
4. 完全重新啟動 RcloneView，並確認系統匣選單中顯示了你的掛載。

系統匣正常運作後，你的雲端磁碟與同步工作只需一次點擊即可使用，而且不會佔用螢幕空間。

---

**相關指南：**

- [RcloneView 的系統匣與背景同步](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [在 Ubuntu 與 Debian Linux 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [使用 RcloneView 修復 Rclone 掛載 FUSE 錯誤](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
