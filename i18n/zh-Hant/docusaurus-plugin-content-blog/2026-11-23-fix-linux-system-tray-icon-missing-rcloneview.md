---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "解決 Linux 上系統匣圖示消失的問題 — 恢復 RcloneView 的背景控制"
authors:
  - steve
description: "在 Linux 上看不到 RcloneView 系統匣圖示？安裝 AppIndicator 程式庫，在桌面環境中啟用系統匣支援，即可重新掌控掛載與背景工作。"
keywords:
  - rcloneview 系統匣圖示 linux 不顯示
  - linux 系統匣圖示 不顯示
  - libayatana-appindicator3-1
  - libappindicator3-1
  - gnome appindicator 系統匣
  - rcloneview linux 疑難排解
  - linux 雲端掛載 系統匣選單
  - linux GUI 背景同步
  - rcloneview ubuntu 系統匣
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
  - ubuntu
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 解決 Linux 上系統匣圖示消失的問題 — 恢復 RcloneView 的背景控制

> 沒有系統匣圖示，就無法快速切換掛載，也不容易回到已最小化的應用程式。以下說明如何把它找回來。

在 Windows 和 macOS 上，RcloneView 的系統匣圖示會直接出現。在 Linux 上，則取決於應用程式無法控制的兩件事：系統中的 AppIndicator 程式庫，以及能顯示指示器圖示的桌面環境。只要缺少其中之一，RcloneView 仍可執行，但用來列出已掛載磁碟、切換掛載及重新開啟視窗的圖示就不會出現。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 圖示消失的原因

RcloneView 是一款 Flutter 桌面應用程式。在 Linux 上，它需要執行中的 X11 或 Wayland 工作階段、GTK+ 3.0，以及用於系統匣的 **libayatana-appindicator3-1** 或 **libappindicator3-1**。`.deb` 和 `.rpm` 套件以 Ubuntu 22.04 LTS 為基準建置與測試，因此在最小化安裝、其他發行版或精簡系統上執行的 AppImage 可能缺少指示器程式庫。

第二個原因在於桌面環境。某些環境，尤其是原生 GNOME，在啟用指示器擴充功能之前不會顯示 AppIndicator 圖示。即使已安裝程式庫，圖示也可能一直保持隱藏。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Linux 系統匣圖示缺失時可作為替代方案的 RcloneView Mount Manager" class="img-large img-center" />

## 步驟 1：安裝 AppIndicator 程式庫

在 Debian、Ubuntu 及其衍生發行版上，從發行版的套件庫安裝 `libayatana-appindicator3-1`（舊版本則為 `libappindicator3-1`）。在 Fedora 與 RHEL 系列系統上，安裝您的版本所提供的 ayatana 或 libappindicator GTK3 套件。同時確認已安裝 GTK+ 3。

完全結束 RcloneView 後再重新啟動。系統匣是在應用程式啟動時設定的，因此在應用程式開啟期間安裝的程式庫，必須重新啟動後才會生效。

## 步驟 2：在桌面環境中啟用指示器支援

在 GNOME 上，透過發行版的擴充功能管理員啟用 AppIndicator/KStatusNotifierItem 擴充功能；Ubuntu 預設已內建並啟用一個。KDE Plasma、Xfce、Cinnamon 和 MATE 則透過各自的面板或通知區域小工具顯示指示器圖示。請確認該小工具已放在面板上且未被隱藏。

如果您使用平鋪式視窗管理員，請加入支援 StatusNotifierItem 的狀態列，否則圖示將無處顯示。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="在 Linux 上從 RcloneView Explorer 掛載雲端遠端" class="img-large img-center" />

## 步驟 3：檢查「最小化啟動」與「關閉時結束」設定

沒有系統匣圖示時，**Start minimized**（最小化啟動）可能讓 RcloneView 看起來根本沒有啟動，因為它會直接啟動到一個您看不見的系統匣中。在圖示恢復正常之前，請開啟 **Settings > General**，關閉 Start minimized，並開啟 **Quit on close**（關閉時結束），這樣關閉視窗後就不會殘留隱藏的處理程序。

核心工作並不需要系統匣。**Mount Manager** 可掛載與卸載磁碟，**Job Manager** 可執行已儲存的工作，**Job History** 可查看執行了哪些工作以及是否完成。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 Linux 上透過 RcloneView 的 Job History 確認背景工作" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**，可選擇適用於 x86_64 或 ARM64 的 `.deb`、`.rpm` 或 `.AppImage`。
2. 安裝 `libayatana-appindicator3-1`（或 `libappindicator3-1`），並確認已安裝 GTK+ 3。
3. 在桌面環境中啟用 AppIndicator 支援，然後完全重新啟動 RcloneView。
4. 當圖示出現且能從系統匣存取掛載後，重新啟用 **Start minimized**。

與僅支援掛載的工具不同，RcloneView 在 FREE 授權下也能進行同步與資料夾比較，系統匣圖示恢復後，所有功能都只需點一下即可使用。

---

**相關指南：**

- [系統匣與背景同步 — 讓雲端工作在 RcloneView 中持續執行](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [如何在 Ubuntu 和 Debian Linux 上安裝 RcloneView — 完整設定指南](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 RcloneView 中修正 rclone 掛載與 FUSE 錯誤](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
