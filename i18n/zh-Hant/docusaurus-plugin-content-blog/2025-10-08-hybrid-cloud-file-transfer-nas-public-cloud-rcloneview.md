---
slug: hybrid-cloud-file-transfer-nas-public-cloud-rcloneview
title: "使用 RcloneView 在地端 NAS 與公有雲之間進行混合雲檔案傳輸"
authors:
  - tayson
description: "透過 RcloneView 的雙欄式 Explorer、Compare、Sync 及排程 Jobs，掛載、同步並自動化地端 NAS(SMB/SFTP)與 S3、Wasabi、Google Drive、Dropbox 等公有雲之間的傳輸。"
keywords:
  - rcloneview
  - 混合雲
  - nas 備份
  - smb sftp
  - webdav
  - s3 傳輸
  - google drive 同步
  - wasabi 備份
  - 掛載遠端磁碟
  - rclone gui
tags:
  - cloud
  - sync
  - nas
  - mount
  - hybrid-cloud
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在地端 NAS 與公有雲之間進行混合雲檔案傳輸

> 不必玩 CLI 特技，就能連接地端 NAS 與公有雲。RcloneView 讓你新增 SMB/SFTP/WebDAV 遠端、並排開啟雲端、Compare 變更、掛載磁碟,並排程每夜同步——讓混合式儲存維持整潔且可預測。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="RcloneView user interface overview" class="img-medium img-center" />

## 為何混合雲很難(但值得)

- 地端 NAS 為編輯人員與轉譯節點提供快速的區網存取,但缺乏異地容錯能力。
- 公有雲(S3/Wasabi/Drive/Dropbox)提供耐用性與全球分享能力,但頻寬與成本仍須考量。
- 團隊需應對混合權限(NAS 上的 ACL 與 OAuth/雲端 RBAC)以及不同的資料夾慣例。
- 手動複製容易導致覆寫、版本遺失,以及深夜緊急處理。
- 統一兩端的 GUI 能降低認知負擔,讓你更有信心地進行自動化。

## 單一視窗中的本機 FS 與遠端 FS

- **本機/NAS(SMB/SFTP/WebDAV):** 類似 POSIX,對權限敏感,區網延遲低。
- **雲端:** 物件儲存(S3/Wasabi)或磁碟式服務(Google Drive/Dropbox);需要 OAuth 或金鑰。
- RcloneView 將每一項都視為遠端,可在同一介面中開啟、比對、掛載與同步。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="Two-pane Explorer layout" class="img-medium img-center" />

## 新增你的地端 NAS 遠端(SMB/SFTP/WebDAV)

1. 點擊 **Remote → + New Remote** 或 Explorer 中的 **+** 按鈕。
2. 選擇 **SMB**(適用於 Windows/NAS 分享)或 **SFTP**(Linux/UNIX 伺服器)。
3. 輸入伺服器位址、分享路徑與認證資訊(若 SMB 需要,請加入網域)。
4. 儲存並在雙欄式 Explorer 中測試瀏覽。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-medium img-center" />

## 新增你的公有雲遠端

- **S3/Wasabi/B2/R2:** 使用 access/secret 金鑰;選擇區域與儲存桶(bucket)。
- **Google Drive/Dropbox:** 點擊 **Connect** 完成 OAuth;無需貼上權杖。
- **WebDAV 端點:** 貼上 URL 與認證資訊。
- 將 NAS 與雲端遠端都保存在 **Remote Manager** 中以便重複使用。

## 將遠端檔案系統掛載為本機磁碟

掛載功能適合需要本機路徑的應用程式(NLE、DAW、CAD)。RcloneView 的掛載管理員讓你無需接觸 CLI 參數。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-medium img-center" />

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="Mount manager status view" class="img-medium img-center" />

- 從遠端卡片或工具列進行掛載,選擇磁碟機代號/路徑,並設定快取/緩衝區。
- 在 **Mount Manager** 中啟動/停止掛載,無需重新開機。
- 適合直接從 SFTP/SMB 編輯,或將 S3 呈現為資料夾以進行輕量工作。

## 複製前先比對

混合式搬移容易變得雜亂;Compare 能讓差異一目了然。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison results" class="img-medium img-center" />

- 左側開啟 NAS,右側開啟雲端儲存桶,然後按下 **Compare**。
- 標示出**缺少**、**大小不同**與**相符**的檔案。
- 僅將差異從 NAS → 雲端複製(或反向操作),以避免覆寫較新的編輯內容。

## 適合混合雲的同步與複製流程

- **單向複製** 適用於備份/封存;不會刪除目的端的檔案。
- **含刪除的單向同步** 適用於你有意將 NAS 鏡像至雲端的情況。
- **雙向同步** 請謹慎使用(僅限雙方都主動變更時)。
- 使用**包含/排除篩選器**跳過快取、代理檔與暫存轉譯檔。

## 輕鬆處理權限問題

- **SMB:** 對齊網域/工作群組;確認分享 ACL 與檔案系統 ACL 允許寫入。
- **SFTP:** 確認伺服器上的 UID/GID 與資料夾擁有權;必要時於伺服器端調整 `chmod`。
- **WebDAV:** 部分主機會封鎖 MOVE/DELETE;若不確定,請僅使用複製。
- 若掛載為唯讀,請以正確的使用者重新掛載,或在對話框中調整掛載選項。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="Log tab showing transfer details" class="img-medium img-center" />

- 於 **Logs** 中檢查 401/403/550/權限遭拒等線索,修復後再重試。

## NAS 與雲端之間的效能建議

- 在離峰時段排程大型工作;於上班時段限制頻寬。
- 針對 S3/Wasabi,保持適度的並行數以避免受到節流限制;若支援,啟用**校驗碼(checksum)**。
- 若透過 WAN 使用 SFTP 時出現封包遺失,請降低並行傳輸數;僅在 CPU 允許時才考慮壓縮。
- 在不穩定的網路上避免對同一個 SMB 分享重複掛載。

## 以 Jobs 與排程實現自動化

- 將任何同步/複製儲存為一項 **Job**(例如 `nas-to-s3-nightly`)。
- 開啟 **Job Manager → Add Job**,選取已儲存的工作,並排程於**每日凌晨 02:00**執行。
- 錯開多個工作(NAS → S3、NAS → Drive、Drive → NAS)以減少資源爭用。

<!-- Image verified: exists and path corrected with /support -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-medium img-center" />

### 工作組合範例

- **NAS(SMB)→ Wasabi(單向複製)**:每週封存 RAW/PROJECT。
- **NAS(SFTP)→ Google Drive 共用雲端硬碟(單向同步)**:每日同步 EDIT/EXPORT 供協作使用。
- **S3 → NAS(單向複製)**:每月拉取冷封存片段以進行本機還原測試。

### 試跑與驗證

- 首次執行時先進行**試跑(dry-run)**,確認將移動的內容。
- 同步後重新開啟 **Compare**;應只剩下預期中的差異。
- 針對 S3/Wasabi,保留版本控制與生命週期規則,以控制成本並保留歷史紀錄。

## 規劃你的混合式資料夾策略

- 在 NAS 與雲端兩側統一使用相同的範本(例如 `Project/RAW`、`EDIT`、`EXPORT`、`ARCHIVE`)。
- 將代理檔留在雲端以便快速分享;將 RAW 檔留在 NAS/S3 以保留原始品質。
- 對封存使用 **Copy**,對活躍工作區使用 **Sync**,對應用程式相容性使用 **Mount**。
- 記錄每個資料夾的「權威來源(source of truth)」是哪個遠端,以避免意外刪除。

## 實際工作流程(逐步說明)

1. **連接遠端:** 為 NAS 新增 SMB/SFTP,並新增 S3/Wasabi 與 Google Drive。
2. **開啟雙欄:** 左側為 NAS,右側為雲端;確認清單顯示正確。
3. **比對小型試驗資料夾:** 確保差異顯示正確。
4. **執行單向複製至雲端:** 從非破壞性的備份開始。
5. **儲存為 Job 並排程:** 每夜凌晨 02:00 僅同步差異。
6. **為應用程式掛載:** 當編輯人員需要以路徑存取時,掛載 NAS 或 S3。
7. **檢視日誌:** 於 Logs 中檢查重試、節流訊息或權限問題。
8. **定期還原測試:** 從雲端複製回暫存的 NAS 資料夾,以驗證完整性。
9. **調整篩選器:** 排除快取/轉譯檔;封存時僅包含母片與專案檔。
10. **團隊交接:** 分享資料夾範本與工作排程,讓所有人依循同一套規範。

## 疑難排解快速清單

- 出現 403/550？請重新檢查認證資訊、分享 ACL 或儲存桶政策。
- WAN 速度慢？降低並行數並啟用頻寬限制;改為排程於夜間執行。
- 掛載無法寫入？以正確的使用者重新掛載,或調整 SMB 權限。
- WebDAV 刪除失敗？先複製再手動清理;部分主機會封鎖 MOVE/DELETE。
- 出現重複檔案？使用 Compare 安全地清除;除非必要,避免使用雙向同步。

## 上線前檢查清單

- [ ] 已新增並可瀏覽 NAS 遠端(SMB/SFTP/WebDAV)。
- [ ] 已新增並驗證雲端遠端(S3/Wasabi/Drive/Dropbox)。
- [ ] 兩側已鏡像相同的資料夾範本。
- [ ] 已完成試驗性 Compare 與試跑。
- [ ] 已儲存並排程工作(建議 02:00)。
- [ ] 在支援的情況下已啟用校驗碼;已監控日誌。
- [ ] 已執行並記錄還原測試。

## 總結

RcloneView 將混合雲工作轉化為可重複執行的流程:新增 NAS 與雲端遠端、複製前先比對、在應用程式需要本機路徑時進行掛載,並透過 Jobs 與排程自動化備份。憑藉可視化的日誌、重試機制與校驗碼支援,你可以在不接觸 CLI 的情況下,同時保有地端效能與雲端的容錯能力。

<CloudSupportGrid />
