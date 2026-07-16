---
slug: zero-downtime-box-to-dropbox-rcloneview
title: "使用 RcloneView 進行零停機 Box 到 Dropbox 合規遷移"
authors:
  - tayson
description: 在使用分階段的 RcloneView 複製、比較、同步、掛載與排程工作流程將 Dropbox Business 填入資料的同時，讓 Box Business 團隊持續在線,並為合規稽核留下完整證據。
keywords:
  - rcloneview
  - box to dropbox migration
  - zero downtime cloud transfer
  - multi cloud compare
  - rclone scheduler
  - dropbox business
  - compliance backup
  - oauth connectors
  - delta sync
  - audit logs
tags:
  - box
  - dropbox
  - migration
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 進行零停機 Box 到 Dropbox 合規遷移

> 在不要求使用者登出的情況下，播種、驗證並切換整個 Box Business 資料庫。

Box 支援行銷審批、法務審閱室與代理商工作流程，但許多團隊希望改用 Dropbox Business，以獲得 Smart Sync、外部協作或更簡單的配額控管。暫停每個專案來執行匯出並不是可行的做法。RcloneView 在 rclone 之上疊加了一個友善的圖形介面，讓你可以註冊 Box 與 Dropbox 遠端、比較資料夾、排程複製工作，並在稽核人員監看日誌的同時掛載目的地以進行 QA。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼 Box 團隊需要零停機遷移

- **法規壓力**：合約與財務資料夾在遷移期間必須保持可存取且可留存,因此你需要不可竄改的日誌與可還原的回滾路徑。
- **API 護欄**：Box 與 Dropbox 都會強制執行請求限制；採用排程器驅動的方式可避免流量突增造成的限流,並讓差異變化保持可預測。
- **混合現實**：代理商通常會將部分即時資料夾保留在 Box,而 Dropbox 則接收封存或共用工作區,因此共存數週是很常見的情況。

RcloneView 透過 Remote Manager、雙窗格 Explorer、Compare 預覽、Sync 工作、Mount Manager 以及內建排程器來因應這一切。

## RcloneView 遷移藍圖

1. 在 [Remote Manager](/howto/rcloneview-basic/remote-manager) 中使用 [Add OAuth Online Login](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide) 文件記載的 OAuth 精靈**連接** Box 與 Dropbox。
2. 使用色彩標籤與範圍限定的根路徑來**整理**遠端,讓每個工作只觸及單一 Box 資料庫或 Dropbox 團隊資料夾。參見 [Browse and manage remote storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)。
3. 透過 [Create sync jobs](/howto/rcloneview-basic/create-sync-jobs) 與 [Synchronize remote storages](/howto/rcloneview-basic/synchronize-remote-storages) 來**建立範本** Copy/Sync 工作,再用 [Compare folder contents](/howto/rcloneview-basic/compare-folder-contents) 預覽變更。
4. 透過 [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution) **自動化**差異變化,同時在 [Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring) 中追蹤傳輸量。
5. 使用 [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) 的唯讀掛載來**驗證**,讓利害關係人能在切換前再次確認 Dropbox。

## 步驟 1 -- 準備連接器與存取控制

- 使用委派的管理員帳號設定 Box 與 Dropbox 的 OAuth 遠端。  
- 為遠端名稱加上前綴(例如 `box-legal`、`box-studio`、`dropbox-hq`)。  

## 步驟 2 -- 以比較快照建立基準

1. 開啟雙窗格 Explorer,在左側載入 Box 資料庫,右側載入空的 Dropbox 目的地。
2. 執行 **Compare** 以擷取物件數量、大小與時間戳記。
3. 標記過時的資料夾,並決定它們應該進入 Dropbox 還是冷封存儲存桶。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Box to Dropbox folders inside RcloneView" class="img-large img-center" />

Compare 快照就是你的起始清單。

## 步驟 3 -- 播種複製工作並保留中繼資料

- 使用 [Create sync jobs](/howto/rcloneview-basic/create-sync-jobs) 中的範本為每個業務單位建立 Copy 工作；Copy 可確保 Box 保持不受影響。
- 啟用 Box Docs 篩選器(同一份指南中有記載),以避免暫時性的 Box Notes 或網站捷徑弄亂 Dropbox。  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  
    
- 手動執行每個工作一次,並在 [Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring) 中觀察傳輸量。  

  <img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />  
    

## 步驟 4 -- 以排程器自動化差異窗口

開啟 **Scheduler**,全域啟用它,並依下列頻率指派工作(皆記載於 [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution)):

- **日內小型同步**,用於快速變動的資料夾(創意簡報、交易室)。將並行數保持在低檔以避免 Box 限流。
- **夜間完整同步**,用於資料庫其餘部分,讓 Dropbox 在最終切換前始終與 Box 保持在數分鐘之內的差距。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Box to Dropbox deltas inside RcloneView" class="img-large img-center" />
  
排程器提供集中式的可視性：未執行的排程會被標記出來,每次執行都會被記錄以供稽核使用。

## 步驟 5 -- 切換與以掛載為基礎的 QA

1. 宣布 Box 進入寫入凍結狀態(唯讀存取仍可使用),並觸發最終的 Sync + Compare 序列。
2. 透過 [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) 以唯讀方式掛載 Dropbox 目的地,讓業務負責人可以驗證資料夾深度、預覽與共用捷徑。


<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  
## 合規作業手冊

| 頻率 | RcloneView 動作 | 產生的證據 |
| --- | --- | --- |
| 每晚 | 從 Box 到 Dropbox 的排程 Copy 工作 + Compare 報告 | 傳輸日誌(CSV)、Compare 匯出檔、校驗碼摘要 |
| 切換日 | 手動 Sync + Compare + 以掛載為基礎的驗證 | 掛載截圖、執行日誌、利害關係人簽核 |
| 切換後 2 週 | 透過 Copy 工作將 Box 遠端封存至 Wasabi/S3 以進行法務保留 | 工作備忘錄、backup-dir 清單、保留工單 |

## 常見問題

**我可以長期讓 Box 與 Dropbox 保持同步嗎?**  
可以。將 Sync 工作保持每週或每月啟用即可。

RcloneView 將 rclone 的企業級引擎轉化為一個引導式控制面板,讓你能以零停機、透明的差異變化,以及每次稽核都有記錄可查的檢查點,將 Box 遷移至 Dropbox。

<CloudSupportGrid />
