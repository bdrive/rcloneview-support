---
slug: manage-icloud-drive-cloud-sync-rcloneview
title: "管理 iCloud Drive 儲存空間——使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "使用 RcloneView 管理 iCloud Drive——透過基於 rclone v1.69+ 打造的 GUI，同步、備份並將 iCloud Drive 檔案傳輸至其他雲端。"
keywords:
  - iCloud Drive 管理
  - iCloud Drive 同步
  - iCloud 備份工具
  - RcloneView iCloud
  - iCloud Drive 檔案傳輸
  - Apple 雲端儲存 GUI
  - iCloud 轉 Google Drive
  - 多雲備份
  - iCloud Drive rclone
  - Apple 雲端儲存備份
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 iCloud Drive 儲存空間——使用 RcloneView 同步與備份檔案

> iCloud Drive 是 Apple 原生的雲端儲存服務——由 rclone v1.69+ 支援的 RcloneView 可直接連接 iCloud Drive，將您的 Apple 雲端內容納入多雲檔案管理工作流程。

iCloud Drive 深度整合於 macOS 與 iOS 工作流程之中，但若要將檔案從 iCloud 匯出以備份至第二個服務供應商，或是將 iCloud 內容與 Windows 系統同步，過去往往需要依賴 Apple 自身的生態系統應用程式。RcloneView 利用 rclone v1.69+ 對 iCloud Drive 的支援，能夠直接連接您的 Apple 雲端儲存，並將其整合至跨平台檔案管理介面中。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 iCloud Drive

iCloud Drive 支援需要 **rclone v1.69 或更新版本**。RcloneView 內建 rclone 執行檔，並支援應用程式內的 rclone 自我更新功能——您可以直接透過 **Help** 分頁在應用程式內更新至所需版本。

若要連接 iCloud Drive，請前往 **Remote 分頁 > New Remote**，並從供應商清單中選擇 **iCloud Drive**。輸入您的 Apple 帳號憑證以完成驗證。設定完成後，您的 iCloud Drive 便會以遠端形式出現在檔案總管中，顯示您所有的 iCloud 資料夾與檔案。在 macOS 上，這能精確呈現 iCloud 中儲存的內容，無論檔案是否已下載至本機。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## 將 iCloud Drive 備份至其他雲端

最常見的使用情境是：將 iCloud Drive 的內容進行雲對雲備份，備份至 Amazon S3、Backblaze B2 或 Google Drive，以實現跨平台存取與災難復原。在 RcloneView 的 **Job Manager** 中設定同步工作——來源為您的 iCloud Drive 遠端，目的地則為您的備份雲端遠端。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling iCloud Drive backup to another cloud in RcloneView" class="img-large img-center" />

對於將 iCloud Drive 作為主要文件儲存空間的專業人士而言——例如擁有 500 GB 的設計素材、客戶檔案與專案封存資料——排程每晚備份至 Backblaze B2 可建立一道不受單一供應商限制的安全防護網。iCloud Drive 的資料夾結構包含 Desktop、Documents 以及各應用程式專屬的資料夾。RcloneView 的篩選選項讓您可以納入或排除特定路徑——例如只同步 Documents 資料夾，同時略過大型媒體資料庫。

## 跨平台存取 iCloud

在混合使用 Mac 與 Windows 環境的團隊中，經常因 iCloud 的 Windows 用戶端功能有限而遇到困擾。在 Windows 上執行的 RcloneView 可以連接 iCloud Drive 並提供直接的檔案存取，讓您能夠將 iCloud 內容複製或同步至團隊共用的網路磁碟機或 NAS 系統。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Accessing iCloud Drive from Windows using RcloneView" class="img-large img-center" />

雙面板檔案總管讓跨平台檔案管理變得簡單直覺：一側顯示 iCloud Drive，另一側則是目標的 Windows 共用資料夾或其他雲端。您可以在兩個面板之間拖曳檔案進行複製，或設定同步工作以進行週期性傳輸。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Help > Check for Updates** 確認內建的 rclone 已更新至 v1.69+。
3. 前往 **Remote 分頁 > New Remote**，選擇 **iCloud Drive**，並輸入您的 Apple 帳號憑證。
4. 在 **Job Manager** 中設定同步工作，將您的 iCloud Drive 備份至第二個雲端。

有了 RcloneView，iCloud Drive 不再侷限於 Apple 的生態系統之中——您的 Apple 雲端內容將成為更廣泛的多雲備份與管理策略的一部分。

---

**相關指南：**

- [搭配 RcloneView 使用 iCloud Drive——入門指南](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [管理 Google Drive 雲端儲存——使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [管理 OneDrive 雲端儲存——使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
