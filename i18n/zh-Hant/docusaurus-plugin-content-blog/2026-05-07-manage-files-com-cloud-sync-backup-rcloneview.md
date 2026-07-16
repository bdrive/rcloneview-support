---
slug: manage-files-com-cloud-sync-backup-rcloneview
title: "管理 Files.com 儲存空間——使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "透過 SFTP 或 WebDAV 將 Files.com 連接至 RcloneView,瀏覽企業檔案共享,並執行自動化同步與備份工作以進行安全的檔案管理。"
keywords:
  - Files.com RcloneView
  - Files.com SFTP
  - Files.com WebDAV
  - 企業檔案管理
  - Files.com 雲端同步
  - Files.com 備份
  - SFTP 雲端同步
  - 安全檔案傳輸
tags:
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Files.com 儲存空間——使用 RcloneView 同步與備份檔案

> Files.com 是一個強大的企業檔案管理平台,而 RcloneView 透過 SFTP 或 WebDAV 與其連接,讓您能透過簡潔的桌面 GUI 進行同步、備份與管理檔案。

Files.com 提供企業級的受管理檔案傳輸服務,具備大型組織所仰賴的合規功能、自動化與存取控制。對於需要將 Files.com 整合進更廣泛的多雲端工作流程的團隊而言——例如將內容同步至雲端備份、將檔案移轉至其他儲存供應商,或批次管理檔案——RcloneView 提供了一個建構於標準 SFTP 與 WebDAV 協定之上的圖形化介面。您不需要另外安裝 rclone,因為它已內建於 RcloneView 之中。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 透過 SFTP 連接 Files.com

SFTP 是將 RcloneView 連接至 Files.com 最可靠的方式。在 RcloneView 中,點選 **New Remote** 並選擇 **SFTP**。輸入您的 Files.com 主機名稱(通常為 `<your-subdomain>.files.com`)、使用者名稱,以及密碼或 SSH 金鑰。Files.com 同時支援這兩種驗證方式——對於自動化工作流程,建議使用 SSH 金鑰驗證,因為可避免儲存密碼。

儲存後,Files.com 的 SFTP 遠端會出現在雙窗格檔案總管中。您可以瀏覽 Files.com 的資料夾結構,透過拖放上傳與下載檔案,並直接從 RcloneView 介面管理您的企業檔案共享。所有操作都會顯示即時傳輸進度。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Files.com as an SFTP remote in RcloneView" class="img-large img-center" />

## 透過 WebDAV 連接

Files.com 也支援 WebDAV,若 SFTP 被防火牆封鎖,或您偏好使用基於 HTTP 的存取方式,這是另一種選擇。在 RcloneView 中,點選 **New Remote** > **WebDAV**,然後輸入 Files.com 的 WebDAV 網址、使用者名稱與密碼。Files.com 的 WebDAV 端點通常位於 `https://<subdomain>.files.com/dav/`。

WebDAV 適合一般檔案瀏覽與中等傳輸量的作業。對於高吞吐量的大量操作——例如在備份工作中同步數千個檔案——SFTP 通常能提供更好的效能,並更可靠地處理大型檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Files.com to cloud backup storage in RcloneView" class="img-large img-center" />

## 執行同步與備份工作

連接 Files.com 之後,您可以使用 **Job Wizard** 建立同步工作。將 Files.com 資料夾設為來源,並將雲端備份目標(例如 Amazon S3、Backblaze B2 或 Google Drive)設為目的地。這是企業備份的常見模式:Files.com 作為主要的檔案管理平台,而雲端物件儲存則保存歸檔副本。

在執行任何同步工作前,請先執行**試跑(dry run)**以確認範圍內的檔案是否正確。對於合規敏感的檔案,RcloneView 的 **Job History** 提供每次傳輸的完整稽核紀錄。PLUS 授權使用者可以排程這些備份工作自動執行——例如每晚執行一次——確保 Files.com 資料在無需人工介入的情況下持續獲得備份。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Files.com backup sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 點選 **New Remote** > **SFTP**,輸入您的 Files.com 主機名稱、使用者名稱,以及 SSH 金鑰或密碼。
3. 在雙窗格檔案總管中瀏覽您的 Files.com 資料夾結構。
4. 使用 **Job Wizard** 建立從 Files.com 到您選擇的雲端儲存的備份同步工作。
5. 透過 PLUS 授權排程定期備份,以實現自動化資料保護。

RcloneView 將 Files.com 的企業檔案管理能力與更廣泛的雲端儲存生態系統橋接在一起,為您的所有檔案操作提供單一的圖形化工具。

---

**相關指南:**

- [管理 Seafile——使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [管理 Citrix ShareFile——使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修復 SFTP 連線被拒與逾時錯誤](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
