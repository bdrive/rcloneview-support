---
slug: hybrid-cloud-nas-s3-cloudflare-r2-rcloneview
title: "輕鬆打造混合雲：在同一個工作流程中結合 NAS、S3 與 Cloudflare R2"
authors:
  - steve
description: 在 RcloneView 中統一管理 NAS 裝置、Amazon S3 與 Cloudflare R2，讓多雲備份、分層儲存與內容分發自動化，完全不需要動用命令列。
keywords:
  - 混合雲儲存
  - 多雲備份自動化
  - S3 相容 NAS
  - RcloneView 工作流程
  - rclone gui
  - cloudflare r2
  - 物件儲存
tags:
  - RcloneView
  - hybrid-cloud
  - s3
  - cloudflare-r2
  - nas
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 輕鬆打造混合雲：在同一個工作流程中結合 NAS、S3 與 Cloudflare R2

> 使用 RcloneView 的視覺化工作流程，將您的本地 NAS 與 S3 相容雲端及 Cloudflare R2 連結起來。

## 為什麼混合雲儲存在 2025 年成為趨勢

團隊希望同時擁有區域網路速度的協作能力，以及雲端的持久性與邊緣傳遞優勢。這代表：

- **NAS**（Synology、QNAP、TrueNAS 等）讓日常檔案保持在團隊身邊。  
- **Amazon S3 或 Wasabi** 儲存長期備份、分析資料或合規性快照。  
- **Cloudflare R2** 將內容推送到全球使用者，且不會有意外的傳出流量費用。

手動處理這些工作十分繁瑣——不同的管理介面、腳本與排程工作。RcloneView 將它們統一起來：

- 在同一個 Explorer 中加入 NAS（透過 SMB/NFS/WebDAV）、S3 相容儲存桶與 Cloudflare R2。  
- 使用「比較」、拖放操作與「工作」功能，讓整個工作流程的每個環節自動化。  
- 追蹤歷史紀錄、警示與模擬執行，確保混合雲作業可稽核。

<!-- truncate -->

**需要記住的關鍵字：** *混合雲儲存*、*多雲備份自動化*、*S3 相容 NAS*、*RcloneView 工作流程*。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

---

## 參考架構

1. **本地 NAS 層**——主要的協作磁碟區或監控存檔。  
2. **S3 層**——具備生命週期政策（標準 → Glacier/IA）的持久異地副本。  
3. **Cloudflare R2 層**——適合網站、下載或 CDN 工作負載的邊緣友善儲存庫。

RcloneView 成為控制平面。您可以視覺化地協調：

- NAS → S3 的每夜備份。  
- S3 → R2 的複製以進行分發。  
- 從 R2/S3 隨需還原到 NAS 以進行本地編輯。

---

## 步驟 1 – 準備您的端點

1. **NAS：** 啟用 S3 相容服務（許多 NAS 裝置提供類似 MinIO 的閘道），或啟用 SMB/WebDAV 以進行直接掛載。  
2. **S3：** 建立具有儲存桶層級權限的專用 IAM 使用者。  
3. **Cloudflare R2：** 產生範圍限定於所需儲存桶的 API 權杖。  
4. **連線性：** 確認 NAS 可透過 HTTPS 連上網際網路；若使用反向代理，需開放對應連接埠。  
5. **成本規劃：** 模擬資料流向——NAS→S3 的流量會離開您的 ISP，S3→R2 則只會產生 S3 端的傳出費用。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

---

## 步驟 2 – 在 RcloneView 中新增遠端

1. 開啟 **RcloneView** → **`+ New Remote`**。  
2. 選擇後端類型：
   - **S3 compatible**：適用於 Amazon、Wasabi 或您的 NAS 閘道（輸入自訂端點/IP）。  
   - **WebDAV/SMB**：若您的 NAS 提供檔案分享。  
   - **Cloudflare R2**：使用帳戶專屬端點。  
3. 為每個遠端取一個清楚的名稱（`NAS_Studio`、`S3_Archive`、`R2_Distribution`）。  
4. 測試連線；它們應會出現在 Explorer 面板中，準備好進行拖放傳輸。

🔍 相關文件：[S3 connection settings](/howto/remote-storage-connection-settings/s3)

---

## 步驟 3 – 建立混合工作流程

### A) NAS → S3 備份通道
- 使用**比較**功能預覽 NAS 資料夾與 S3 儲存桶的差異。  
- 啟用 `--backup-dir` 執行**同步**，將變更的檔案移入依日期分類的前綴目錄。  
- 儲存為工作（`NAS_to_S3_Nightly`），並排程在離峰時段執行。

### B) S3 → Cloudflare R2 發布通道
- 備份進入 S3 後，將金鑰前綴複製到 R2 以實現低延遲傳遞。  
- 先使用**模擬執行**確認物件數量。  
- 啟用通知，讓網站團隊知道何時有新版本進入 R2。

### C) R2/S3 → NAS 還原通道
- 開啟雙面板檢視（左側 R2，右側 NAS）。  
- 拖曳特定資料夾以進行本地編輯或災難復原。  
- 在**工作歷史紀錄**中追蹤還原情況，以證明符合 RPO/RTO 要求。

---


## 自動化操作手冊

1. **範本工作：** 複製基礎工作（例如「NAS→S3 Sync」）供每個部門使用，以保持規則一致。  
2. **標記排程：** 在工作名稱前加上 `[Backup]`、`[Publish]`、`[Restore]` 前綴，方便快速篩選。  
3. **使用保留規則：** 將 RcloneView 工作與 S3 生命週期政策搭配使用，讓溫資料自動移轉到成本較低的儲存層。  
4. **監控遙測資料：** 每週匯出工作日誌並傳送到您的 SIEM 或 Slack，讓相關人員隨時掌握狀況。  
5. **測試容錯移轉：** 每季模擬一次 NAS 故障，並從 S3/R2 進行還原以驗證文件的正確性。

---

## 疑難排解提示

- **NAS 上傳速度緩慢？** 在工作設定中啟用分段上傳並提高並行數量。  
- **時間戳不一致？** 在同步前，使用「比較」的中繼資料面板找出時區偏移問題。  
- **權限錯誤？** 仔細檢查 S3 的 IAM 政策與 R2 的權杖範圍；NAS 分享可能需要服務帳戶。  
- **版本衝突？** 為重要封存啟用 `--checksum`，或啟用備份目錄以保留舊版本。  
- **頻寬突增？** 在上班時段限制工作速度，讓離峰時段以全速執行。

---

## 常見問答

**問：我需要在 NAS 上使用命令列嗎？**  
**答：** 不需要。只要 NAS 提供可從執行 RcloneView 的機器連接的 S3/WebDAV/SMB 端點，您就可以完全透過 GUI 進行管理。

**問：我可以在 NAS 與 S3 之間對傳輸中的資料加密嗎？**  
**答：** 可以。請使用 HTTPS 端點，並可選擇在 RcloneView 中設定遠端時啟用 rclone 的伺服器端加密參數。

**問：處理大型媒體庫的最佳方式是什麼？**  
**答：** 將它們拆分成以前綴為基礎的工作（例如 `/projects/a-m/`），並錯開排程時間以避免超出 API 速率限制。

**問：從 S3 拉取資料到 Cloudflare R2 時，R2 會收取傳入費用嗎？**  
**答：** 不會，但 S3 會收取傳出費用。規劃 S3 → R2 發布通道時，請將此費用納入預算考量。

---

<CloudSupportGrid />
