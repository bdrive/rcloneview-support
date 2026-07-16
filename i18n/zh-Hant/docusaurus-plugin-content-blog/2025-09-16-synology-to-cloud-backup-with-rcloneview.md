---
slug: synology-to-cloud-backup-with-rcloneview
title: "Synology → 雲端，輕鬆搞定：使用 RcloneView 進行異地備份與同步"
authors:
  - jay
description: 透過 RcloneView 的 GUI 規劃、預覽並自動化備份流程，將您的 Synology NAS 異地備份至 Backblaze、Google Drive、Amazon S3、pCloud、Wasabi 等雲端儲存服務。
keywords:
  - rcloneview
  - synology nas backup
  - backblaze b2
  - google drive
  - amazon s3
  - wasabi
  - pcloud
  - cloud backup
  - scheduled sync
  - rclone GUI
tags:
  - synology
  - cloud-backup
  - s3
  - google-drive
  - Backblaze
  - wasabi
  - pcloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology → 雲端，輕鬆搞定：使用 RcloneView 進行異地備份與同步

> 不需要腳本或終端機，即可保留一份異地副本。將您的 **Synology NAS** 備份至 **Backblaze、Google Drive、Amazon S3、pCloud、Wasabi** 等服務——以視覺化、可靠且排程化的方式進行。

## 簡介 — 為什麼要將 Synology 備份推送至異地？

NAS 非常適合快速的本地存取——家庭照片、創意專案與團隊共用資料夾只需透過區域網路即可取得。但**僅限本地端**存在風險：竊盜、火災、意外刪除，或多顆硬碟同時故障。加上一份**異地雲端副本**可以帶來：

<!-- truncate -->

- **韌性**：即使遭遇本地災難，仍有遠端可還原的副本。
- **彈性**：無論您身在辦公室或家中，都能隨處還原。
- **治理**：結合 NAS 保留原則與雲端儲存桶的版本控制及政策。

**Synology NAS 概覽**
- 可透過 **SMB/NFS**（掛載為本地資料夾）或 **WebDAV**、**SFTP** 等網路端點存取的集中式儲存。
- 適合全天候備份、媒體託管與團隊檔案中心。

**雲端目的地概覽**
- **Google Drive**：Google Workspace 中的協作與共用。
- **Amazon S3 / Wasabi / Backblaze B2**：具備儲存桶、區域與生命週期規則的物件儲存。
- **pCloud**：使用者友善、檔案處理彈性大的儲存服務。

**為什麼現在就要把 NAS 資料送上雲端？**
- 建立一道**異地安全網**。
- 將備份**標準化**到單一目的地（或多雲）。
- 善用許多雲端平台提供的**政策與版本控制**。

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## 步驟 1 — 準備工作

開始之前，請先確認：

1. **選定範圍** — Synology 上哪些共用資料夾（例如 `/photo`、`/projects`、`/backup`）要送到雲端？
2. **確認雲端容量** — 確保目標帳號或儲存桶有足夠空間（並保留版本備份的餘裕）。
3. **選擇 NAS 連線方式**
   - **本地路徑**：在作業系統上透過 **SMB/NFS** 掛載 NAS 共用資料夾，並在 RcloneView 中作為 **Local** 使用。
   - **WebDAV**：啟用 Synology 的 **WebDAV Server**，並在 RcloneView 中以 WebDAV 連線。
   - **SFTP**：在 Synology 上啟用 SSH/SFTP，並以 **SFTP** 連線。
4. **選擇雲端服務** — Google Drive、Amazon S3/Wasabi、Backblaze B2、pCloud 等。
5. **決定執行頻率** — 一次性封存、定期同步，或**每夜排程作業**。
6. **先進行試點測試** — 執行小規模測試，驗證路徑、權限與傳輸速度。

🔍 實用概覽：
- [雲端 ↔ Synology 教學](/tutorials/synology-nas-cloud-transfer)


## 3) 步驟 2 — 在 RcloneView 中建立連線

RcloneView 將 rclone 的設定包裝成引導式的點選流程。

1. 開啟 **RcloneView** → 點擊 **`+ New Remote`**
2. 透過以下其中一種方式**新增 Synology（來源）**：
   - **Local**：選取已掛載的 NAS 資料夾（例如 `Z:\NAS\Projects` 或 `/Volumes/NAS/Projects`）
   - **WebDAV**：使用 Synology 的 WebDAV 端點/憑證 → 命名（例如 `NAS-WebDAV`）
   - **SFTP**：輸入主機/IP、連接埠與帳號 → 命名（例如 `NAS-SFTP`）
3. **新增雲端（目的地）**，例如：
   - **Google Drive**：OAuth 登入 → 命名為 `MyGoogleDrive`
   - **Amazon S3 / Wasabi**：**S3** 供應商 → 輸入 access key/secret、區域、儲存桶 → 命名為 `MyS3` / `MyWasabi`
   - **Backblaze B2**：**B2** 供應商（或視情況使用 S3 相容端點）→ 命名為 `MyB2`
   - **pCloud**：登入/權杖流程 → 命名為 `MyPcloud`
4. 確認兩者並排顯示於 Explorer 面板中。

🔍 實用指南：
- [快速 OAuth 設定（Google Drive 等）](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [新增 S3 遠端（Amazon S3/Wasabi）](/howto/remote-storage-connection-settings/s3)
- [雲端 ↔ Synology 教學](/tutorials/synology-nas-cloud-transfer)

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## 4) 步驟 3 — 執行備份/同步（三種實用方法）

RcloneView 提供三種簡單易懂的方法。從小規模開始，再逐步放心擴大規模。

### A) 拖放（手動複製）
- 在一側開啟 **Synology（Local/WebDAV/SFTP）**，另一側開啟您的**雲端**，然後**拖曳資料夾/檔案跨側複製**。
- 適合選擇性搬移與快速上手。

👉 詳見：[使用拖放複製檔案](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 比較與複製（預覽變更）
- 執行**比較（Compare）**，查看 NAS 與雲端儲存桶/雲端硬碟之間有哪些新增或變更。
- 只複製差異部分——減少意外，加快執行速度。

👉 詳見：[比較並管理檔案](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) 同步與排程作業（自動化）
- 使用**同步（Sync）**將選定的 NAS 資料夾鏡像到雲端目的地。
- 先進行 **Dry-run**（模擬執行），再儲存為可重複使用的**作業（Job）**，並加入排程（每夜/每週）。

👉 詳見：
- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步作業](/howto/rcloneview-basic/create-sync-jobs)
- [作業排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

**專業提示**
- 對於 **S3 類型的雲端**（S3/Wasabi/B2 S3 相容），請預先建立儲存桶並選擇正確的區域。
- 在支援的儲存桶上啟用**版本控制**，以便更安全地回復。
- 在轉換期間讓 NAS 來源保持**唯讀**，以防止資料漂移。
- 使用篩選條件，將快取/暫存資料夾排除於備份之外。


## 5) 結論 — 重點回顧與額外提示

- **為什麼要這麼做**：獲得持久的異地安全網、更快的災難復原選項，以及統一的保留政策。
- **運作方式**：RcloneView 連接您的 Synology NAS 與雲端目的地，讓您可以**拖放**、**比較**或**同步**——並可**排程**以實現無人值守的備份。
- **安全擴展**：先進行試點測試，遵守服務商配額，並監控作業紀錄以保留清楚的稽核軌跡。


## 常見問題

**Q. 我可以備份到多個雲端嗎？**
**A.** 可以——新增多個目的地（例如 S3 與 Google Drive），並為每個目的地建立各自的作業或排程。

**Q. 我需要使用命令列嗎？**
**A.** 不需要。RcloneView 是完整的 GUI——無需 CLI，即可設定遠端、預覽變更、執行同步並排程作業。


**準備好讓您的 Synology 備份自動運行——異地保存且盡在掌控？**

<CloudSupportGrid />
