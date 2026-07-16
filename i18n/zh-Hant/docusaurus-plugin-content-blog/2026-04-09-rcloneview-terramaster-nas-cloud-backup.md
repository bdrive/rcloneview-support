---
slug: rcloneview-terramaster-nas-cloud-backup
title: "在 TerraMaster NAS 上使用 RcloneView 進行雲端備份與同步"
authors:
  - tayson
description: "設定 RcloneView 搭配 TerraMaster NAS，將 NAS 資料同步並備份到雲端儲存。透過 SFTP 或 SMB 連線，並自動化備份至 S3、B2 或 Google Drive。"
keywords:
  - rcloneview
  - terramaster nas cloud backup
  - terramaster cloud sync
  - terramaster backup to cloud
  - terramaster rclone
  - nas cloud backup gui
  - terramaster google drive
  - terramaster s3 backup
  - terramaster file sync
  - nas to cloud transfer
tags:
  - nas
  - platform
  - cloud-backup
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 TerraMaster NAS 上使用 RcloneView 進行雲端備份與同步

> TerraMaster NAS 裝置提供實惠的網路儲存,但其內建的雲端備份選項相當有限——**RcloneView** 透過視覺化 GUI，為您的 TerraMaster 擴充多雲備份、同步與檔案管理功能。

TerraMaster 生產運行 TOS(TerraMaster Operating System)的熱門 NAS 裝置。雖然 TOS 內建了少數幾家供應商的基本雲端同步功能，但並不支援企業與進階使用者所需的完整雲端儲存服務範圍。RcloneView 透過 SFTP 或 SMB 連線至您的 TerraMaster NAS，並將其橋接至 70 多家雲端供應商——實現自動化備份、雲端到 NAS 的同步，以及跨雲端檔案管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要為 TerraMaster 加入雲端備份

NAS 提供快速的本機儲存與 RAID 冗餘保護，但無法防範以下情況:

- **站點級災難**：火災、水災、竊盜或電湧可能同時摧毀 NAS 及其所有硬碟。RAID 只能防範硬碟故障，無法防範站點損失。
- **勒索軟體**：若勒索軟體侵入您的網路，可能會加密 NAS 共用資料夾。雲端備份(尤其是不可變儲存)提供了一個復原點。
- **超出 RAID 保護範圍的硬體故障**：控制器主機板故障、電源供應器損壞或韌體損毀，可能使整台 NAS 無法存取，無論 RAID 等級為何。

雲端備份提供了本機 NAS 無法做到的地理冗餘。RcloneView 自動化此備份流程，同時讓您的主要工作流程維持在快速的本機 NAS 上。

## 將 RcloneView 連接至您的 TerraMaster

RcloneView 執行於您的桌面電腦或另一台機器上（而非 TerraMaster 本身），並透過網路連線至 NAS。提供兩種連線方式:

### SFTP 連線

在您的 TerraMaster 上啟用 SSH（TOS 控制台 > 服務 > SSH）。然後在 RcloneView 的遠端管理員中新增 SFTP 遠端:

- 主機：您的 TerraMaster IP 位址（例如 `192.168.1.100`）
- 連接埠：22（預設 SSH 連接埠）
- 使用者名稱：您的 TOS 管理員使用者名稱
- 密碼或 SSH 金鑰：您的 TOS 憑證

SFTP 提供加密的檔案傳輸，是從 RcloneView 存取 NAS 資料的建議方式。

### SMB 連線

若您的 TerraMaster 共用資料夾可透過 SMB（Windows 檔案分享）存取，請在 RcloneView 中新增 SMB 遠端。此方式使用標準的 Windows 網路路徑格式，若您已經設定好 SMB 共用資料夾則相當方便。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting RcloneView to TerraMaster NAS via SFTP" class="img-large img-center" />

## 將 NAS 資料備份至雲端儲存

連線完成後，設定從您的 TerraMaster 到雲端目的地的備份工作:

1. 在左側面板開啟 TerraMaster SFTP 遠端。
2. 在右側面板開啟您的雲端目的地（AWS S3、Backblaze B2、Google Drive、Wasabi）。
3. 瀏覽至您要備份的 NAS 資料夾。
4. 建立將 NAS 資料複製至雲端的同步工作。

RcloneView 的差異偵測功能，確保只傳輸自上次備份以來變更的檔案。對於擁有數 TB 資料的 NAS，初次備份可能需要數天，但後續每日備份只傳輸當天變更的內容——通常在幾分鐘內即可完成。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backing up TerraMaster NAS to cloud storage in RcloneView" class="img-large img-center" />

## 選擇雲端備份目的地

對於 NAS 備份而言，具成本效益且無出站流量費用的儲存服務最為理想:

- **Backblaze B2**：每 TB 每月 6 美元，透過 Cloudflare 合作可免費出站流量。定價簡單，適合直接了當的備份需求。
- **Wasabi**：每 TB 每月 6.99 美元，無出站流量費用。適用最短 90 天的儲存期限規定。
- **AWS S3 Glacier Deep Archive**：封存資料每 TB 每月 0.99 美元。取回需要數小時且每 GB 收取取回費用，但儲存成本是所有選項中最低的。
- **Google Drive**：若您的團隊已在使用 Google Workspace，則相當方便。儲存成本較高，但整合相當順暢。

對大多數 TerraMaster 使用者而言，Backblaze B2 在成本、簡便性與取回速度之間提供了最佳平衡。

## 排程自動化備份

設定 RcloneView 的排程器，自動執行 NAS 備份:

- **每日增量備份**：每晚將 NAS 上變更的檔案同步至雲端。初次匯入完成後，頻寬使用量極低。
- **每週完整驗證**：每週執行一次比對作業，驗證所有 NAS 檔案是否與雲端備份相符。這能捕捉因傳輸中斷或無聲資料損毀所導致的任何差異。

請設定頻寬限制，避免備份流量在上班時段佔用您的網路。將備份排程安排在夜間或離峰時段執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling TerraMaster NAS backup in RcloneView" class="img-large img-center" />

## 將雲端資料同步至您的 TerraMaster

反向的工作流程同樣實用：將雲端資料拉取至您的 NAS 以供本機存取。若您的團隊在 Google Drive 上協作，但需要快速本機存取專案檔案，可將相關的 Drive 資料夾同步至您的 TerraMaster。以 NAS 速度在本機編輯檔案，RcloneView 會依排程將變更同步回雲端。

這種混合式做法讓您同時擁有雲端儲存的協作優勢，以及本機 NAS 存取的效能。

## 加密 NAS 備份

對於敏感資料，請使用 RcloneView 的加密遠端功能，在檔案離開您的網路之前先進行加密。加密作業在您的桌面電腦上（RcloneView 執行所在處）進行，於上傳至雲端之前完成。即使雲端供應商遭到入侵，您的 NAS 備份資料仍然無法被讀取。

## 監控與驗證

RcloneView 的工作歷史記錄會記錄每次備份執行的統計資訊：已傳輸檔案數、已略過檔案數、總位元組數、耗費時間，以及任何錯誤。請定期檢視歷史記錄，確認備份順利完成。定期使用比對功能，驗證雲端備份是否與 NAS 內容相符。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitoring TerraMaster NAS backup history in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在您的 TerraMaster 上啟用 SSH，並在 RcloneView 中將其新增為 SFTP 遠端。
3. 新增一個雲端目的地（B2、S3、Google Drive 或 Wasabi）。
4. 建立並排程從 NAS 到雲端的每日備份工作。
5. 使用比對功能定期驗證備份。

您的 TerraMaster NAS 負責本機儲存與分享，而 RcloneView 則加入了雲端備份層，保護您的資料免受站點級災難、勒索軟體，以及超出 RAID 保護範圍的硬體故障所影響。

---

**相關指南：**

- [瀏覽並管理遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [工作歷史記錄](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
