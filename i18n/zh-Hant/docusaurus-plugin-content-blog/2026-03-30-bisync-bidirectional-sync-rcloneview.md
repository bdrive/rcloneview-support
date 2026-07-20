---
slug: bisync-bidirectional-sync-rcloneview
title: "Bisync 雙向同步 — RcloneView 中的雙向雲端同步"
authors:
  - tayson
description: "了解如何使用 RcloneView 的 bisync 雙向同步功能，在多台裝置與多個服務供應商之間保持本機與雲端檔案的雙向同步。"
keywords:
  - bisync rcloneview
  - bidirectional sync
  - two-way cloud sync
  - rclone bisync
  - cloud file synchronization
  - two-way file sync
  - bisync setup
  - rcloneview sync
  - multi-device sync
  - bidirectional backup
tags:
  - RcloneView
  - feature
  - cloud-sync
  - sync
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync 雙向同步 — RcloneView 中的雙向雲端同步

> Bisync 會將變更同時傳播到兩個方向，讓您的本機檔案與雲端儲存完美鏡像，且不會覆蓋任何一方的資料。

標準的同步操作是單向的：它們會讓目的地與來源保持一致，並刪除目的地中來源不存在的任何項目。Bisync 的運作方式不同。它會追蹤自上次執行以來雙方的變更，並將新增、修改與刪除同時傳播到兩個方向。RcloneView 透過其圖形化介面公開了 rclone 的 bisync 功能，讓您無需撰寫命令列腳本即可使用雙向雲端同步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Bisync 的運作方式

Rclone 的 bisync 指令會維護一對清單檔案，記錄每次成功執行後來源（Path1）與目的地（Path2）雙方的狀態。在後續執行時，bisync 會將每一方目前的狀態與其儲存的清單進行比對，以判斷發生了哪些變更。Path1 上的新檔案會複製到 Path2，Path2 上的新檔案會複製到 Path1，而刪除動作也會在兩個方向上同步鏡像。

系統內建了衝突偵測機制。如果同一個檔案在兩次執行之間於雙方都被修改，bisync 會將其標記為衝突，而不會默默地覆蓋其中一個版本。預設行為會重新命名發生衝突的副本，保留雙方版本，讓您可以手動解決差異。這對於多位使用者或裝置可能編輯同一份文件的共享工作流程來說至關重要。

首次執行 bisync 需要使用 `--resync` 旗標來建立初始的基準清單。RcloneView 在您建立新的 bisync 工作時會自動處理這件事——初次執行會進行 resync，而之後所有排程執行都會以一般的差異模式運作。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Bisync bidirectional transfer configuration in RcloneView" class="img-large img-center" />

## 在 RcloneView 中設定 Bisync

若要在 RcloneView 中建立 bisync 工作，請開啟工作管理員並選擇 bisync 作為操作類型。選擇您的兩個路徑——例如，將本機目錄 `/home/user/Documents` 設為 Path1，將 Google Drive 資料夾設為 Path2。您也可以在兩個雲端遠端之間進行 bisync，例如讓 Dropbox 資料夾與 OneDrive 保持鏡像。

篩選規則對 bisync 的作用方式與標準同步相同。使用包含與排除模式，將 bisync 限制在特定的檔案類型或子目錄。例如，您可以只在本機專案資料夾與共享的 OneDrive 目錄之間 bisync `*.docx` 與 `*.xlsx` 檔案，忽略暫存檔與作業系統中繼資料。

RcloneView 的工作排程器支援以固定間隔執行 bisync——每 15 分鐘、每小時，或依自訂的 cron 排程執行。較頻繁的間隔可以縮小發生衝突的時間窗口，並確保本機裝置與雲端儲存之間近乎即時的同步。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a bisync job from the RcloneView job manager" class="img-large img-center" />

## Bisync 的實際應用情境

**多裝置文件同步：** 在桌機與雲端儲存之間保持工作文件資料夾的同步。當您在筆記型電腦上編輯檔案（該裝置也透過自己的 bisync 工作同步到同一個雲端資料夾）時，變更會在下一次執行時傳播到所有連接的裝置。

**協作專案資料夾：** 共用雲端儲存資料夾的團隊可以使用 bisync 來維護本機工作副本。每位團隊成員的本機變更會被推送到雲端，而同事的遠端變更也會自動被拉取下來。衝突偵測機制可確保同時進行的編輯不會被默默地互相覆蓋。

**混合式本機-雲端工作流程：** 需要快速本機檔案存取，同時也想要雲端備份的開發人員或設計師，可以對其專案目錄進行 bisync。本機檔案操作依然保持即時反應，而雲端副本則持續保持最新，以供備份與分享之用。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring bisync job in RcloneView" class="img-large img-center" />

## Bisync 最佳實務

以固定的排程執行 bisync，以降低衝突發生的機率。執行間隔越長，發生衝突編輯的機率就越高。對於活躍的工作目錄，15 到 30 分鐘的間隔可以在即時性與資源使用量之間取得良好的平衡。避免在沒有篩選條件的情況下，對極大型的目錄樹執行 bisync，因為清單比對可能會相當耗時。使用 RcloneView 的工作歷史記錄來監控是否出現重複發生的衝突，並據此調整您的工作流程。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Bisync job history showing completed two-way synchronization runs" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 設定您的來源與目的地遠端（本機資料夾、Google Drive、OneDrive 等）。
3. 在工作管理員中建立新的 bisync 工作，並執行初始的 resync。
4. 依您偏好的間隔排程執行 bisync 工作，以進行持續的雙向同步。

RcloneView 中的 Bisync 為您的桌面帶來真正的雙向雲端同步，無需腳本、cron 工作，也不需要處理命令列的複雜性。

---

**相關指南：**

- [Sync、Copy、Move — RcloneView 中的差異說明](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [RcloneView 中的篩選規則與選擇性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView 與 Syncthing 比較](https://rcloneview.com/support/blog/rcloneview-vs-syncthing-comparison)

<CloudSupportGrid />
