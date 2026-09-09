---
slug: rcloneview-kali-linux-cloud-sync
title: "在 Kali Linux 上使用 RcloneView — 雲端儲存同步與備份"
authors:
  - jay
description: "在 Kali Linux 上安裝 RcloneView，掛載、同步並加密用於滲透測試證據、報告與擷取資料的雲端儲存。"
keywords:
  - RcloneView Kali Linux
  - Kali Linux 雲端儲存
  - Kali Linux 雲端同步
  - Kali Linux 掛載雲端磁碟
  - 以 Debian 為基礎的雲端備份
  - 滲透測試雲端備份加密
  - RcloneView Linux 安裝
  - Kali Linux 備份工具
  - GTK 雲端同步應用程式
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Kali Linux 上使用 RcloneView — 雲端儲存同步與備份

> 在不離開現有 XFCE 桌面工作流程的情況下，在 Kali Linux 上掛載、同步和加密雲端儲存。

Kali Linux 是一款主要用於安全測試的以 Debian 為基礎的發行版，滲透測試工作會持續產生截圖、封包擷取檔和報告，需要盡快從本機磁碟移出。RcloneView 為 Kali 使用者提供一種圖形化方式，可連接 90+ 家雲端服務供應商、將其掛載為本機磁碟，並執行排程同步工作，而不需要在終端機中手動撰寫 rclone 指令。由於 Kali 預設內建完整的 X11/Wayland 桌面環境，RcloneView 的圖形介面在 Kali 上的運作方式與在其他 Debian 家族發行版上完全相同。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Kali Linux 上安裝 RcloneView

由於 Kali 以 Debian 為基礎，從 [rcloneview.com](https://rcloneview.com/src/download.html) 取得的官方 `.deb` 套件可透過 `dpkg -i` 安裝，再執行 `apt-get install -f` 解決相依性問題，即可順利完成安裝。RcloneView 需要 GTK+ 3.0，以及 `libayatana-appindicator3-1` 或 `libappindicator3-1` 其中之一用於系統匣圖示；若你打算將遠端掛載為本機磁碟，還需要 `fuse3`。RcloneView 沒有 AUR、Snap、Flatpak 或 APT 儲存庫 — `.deb` 檔案是 Kali 上唯一受支援的安裝方式，請忽略任何聲稱提供其他安裝方式的第三方套件列表。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

RcloneView 內建 rclone 執行檔，因此首次啟動時不需要額外設定 — 應用程式會自動透過 `127.0.0.1:5582` 與其通訊。

## 為現場工作掛載雲端儲存

遠端連線後，在 Explorer 面板中選取它，點擊面板工具列上的 Mount 圖示，即可在 Linux 上以 `nfsmount` 將其顯示為本機磁碟。這對於直接從本機工具檢視儲存在共用 Google Drive 或 Box 資料夾中的證據非常有用，而不需要先下載整個資料集。掛載設定中提供唯讀模式，適用於需要瀏覽卻不希望有任何風險更動來源檔案的情境。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a remote folder from the RcloneView Explorer panel" class="img-large img-center" />

## 加密與自動化備份

敏感的滲透測試資料在離開裝置之前應先加密保護。RcloneView 的 Crypt 虛擬遠端會包覆任何現有遠端，使檔案名稱和內容在上傳前被加密，而用於一般傳輸的同一套 4 步驟同步精靈同樣適用於加密層。S3、Azure 或 Backblaze B2 在 FREE 授權下即可取得完整的讀寫連線，因此加密的異地備份不需要付費方案。用於無人值守備份的 crontab 風格排程是 PLUS 授權功能。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring encrypted sync job in RcloneView" class="img-large img-center" />

## 快速開始

1. **下載 RcloneView**：前往 [rcloneview.com](https://rcloneview.com/src/download.html)，取得適用於 x86_64 或 aarch64 的 `.deb`。
2. 使用 `dpkg -i rclone_view-*.deb && apt-get install -f` 安裝，以引入 GTK+3、appindicator 與 FUSE 相依套件。
3. 新增你的雲端遠端；對於敏感資料，在執行首次同步前先用 Crypt 遠端進行包覆。
4. 每次執行後檢查 Job History，確認傳輸數量並及早發現錯誤。

在 Kali 上安裝 RcloneView 代表滲透測試成果可以快速、加密地從本機磁碟移出，而不需要離開你已經使用的桌面環境。

---

**相關指南：**

- [在 Debian Linux 上使用 RcloneView — 雲端儲存同步與備份](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [將任意 SFTP 伺服器連接到 RcloneView — 用雲端儲存同步遠端伺服器](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [解決防火牆與防毒軟體封鎖雲端同步的問題 — 使用 RcloneView 解決連線錯誤](https://rcloneview.com/support/blog/fix-firewall-antivirus-blocking-cloud-sync-rcloneview)

<CloudSupportGrid />
