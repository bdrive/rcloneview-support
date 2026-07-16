---
slug: transfer-google-drive-to-another-account-easily
title: 使用 RcloneView 輕鬆將 Google Drive 傳輸至另一個帳號
authors:
  - jay
description: 使用 RcloneView 在 Google Drive 帳號之間移動檔案。規劃遷移、掌控 Google 配額限制，並自動化傳輸——完全不需要指令列。
keywords:
  - rcloneview
  - google drive 傳輸
  - 遷移 google drive
  - 跨帳號傳輸
  - 雲端同步
  - rclone 圖形化介面
tags:
  - RcloneView
  - google-drive
  - cloud-sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 輕鬆將 Google Drive 傳輸至另一個帳號

> 更換帳號也不失去掌控。RcloneView 以友善的圖形化介面包裝 rclone 的 Google Drive 後端，讓你能清楚地在 Drive 帳號之間交接、整合或封存資料——無需撰寫任何腳本。

## 為什麼要在 Google Drive 帳號之間轉移資料？

畢業、換工作、企業合併，以及單純的整理專案，經常需要在 Google 帳號之間移動檔案。Google 內建的傳輸工具雖然有幫助，但仍存在缺口：它們僅涵蓋「我的雲端硬碟」、缺乏細部篩選功能,也無法暫存或排程遷移作業。[Google Help](https://support.google.com/accounts/answer/6386856?hl=en&utm_source=chatgpt.com) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

<!-- truncate -->

### 開始前先了解限制

- **單一檔案大小**：非 Google 格式的檔案單一項目最高可達 **5 TB**；文件、試算表和簡報則另有各自的限制。[Google Help](https://support.google.com/drive/answer/37603?hl=en)
- **每日傳輸配額**：Drive API 允許每位使用者每天上傳（含複製操作）**750 GB**；配額每 24 小時重置一次。[Google for Developers](https://developers.google.com/drive/api/guides/limits)
- **擁有權規則**：個人傳輸僅涵蓋 Gmail 與「我的雲端硬碟」。Workspace 管理員可在同一網域內重新指派擁有權，但跨網域的共用雲端硬碟則需要用複製的方式處理。[Google Help](https://support.google.com/accounts/answer/6386856?hl=en) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

### 各種方法一覽

| 方法 | 最適合情境 | 限制 |
|---|---|---|
| Google「傳輸你的內容」工具 | 離校學生或轉移到個人 Gmail 帳號 | 僅限「我的雲端硬碟」與 Gmail；無篩選功能；無法針對共用雲端硬碟 |
| 分享給第二個帳號後再複製 | 同一網域內的小規模交接 | 需手動操作；版本記錄與留言可能會分散 |
| RcloneView 跨帳號傳輸 | 混合「我的雲端硬碟」與共用雲端硬碟、細部資料夾移動、可重複執行的同步 | 每個帳號都需要設定 rclone 遠端（由 RcloneView 精靈輔助處理） |

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 事前準備

1. **釐清擁有權與範圍**：列出需要移動或保留的資料夾（「我的雲端硬碟」與共用雲端硬碟）。決定目的地副本應由誰擁有。
2. **檢查配額**：確認儲存空間是否足夠，並留意可能觸及每日 750 GB 上限的大型影片檔案庫。
3. **規劃切換時段**：溝通凍結期或分階段時程，讓協作者清楚該在哪裡作業。
4. **標記篩選規則**：決定要包含/排除的規則（例如跳過 `/Backups/old/`，或只移動 `/Projects/2024/`）。
5. **備份重要資料夾**：對於受規範的內容，在移動前先匯出清單或版本記錄。

🔍 實用指南
- [在 RcloneView 中快速設定 Google OAuth](/howto/remote-storage-connection-settings/add-oath-online-login)
- [新增 Google 共用雲端硬碟遠端](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)

## 在 RcloneView 中連接兩個 Google Drive 帳號

RcloneView 將 `rclone config` 轉化為引導式精靈，讓你只需註冊一次每個 Google 帳號,即可重複用於傳輸作業。

1. 開啟 **RcloneView** → 點擊 **`+ New Remote`**。
2. 選擇 **Google Drive** → 使用**來源帳號**登入 → 為該遠端取一個清楚的名稱（例如 `Drive-Source`）。
3. 針對**目的地帳號**重複上述步驟（例如 `Drive-Destination`）。
4. 若涉及共用雲端硬碟，請在精靈中啟用該選項或新增雲端硬碟 ID。
5. 確認兩個遠端都出現在檔案總管窗格中,並且可以瀏覽雙方的資料夾。

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="open multiple google drive remotes" class="img-medium img-center" />

## 在 RcloneView 中選擇合適的傳輸流程

在複製整個帳號之前，先從一個試驗資料夾開始。等樣本執行結果理想後,再進行更大範圍的移動或排程同步。

### 拖放（手動移動）

在左側開啟來源遠端、右側開啟目的地遠端，然後將檔案或資料夾拖曳過去。非常適合臨時交接或移動少數共用雲端硬碟資料夾。
👉 詳見：[使用拖放複製檔案](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### 比較與複製（預覽差異）

執行**比較**功能，列出兩個帳號之間新增、變更或缺少的內容。檢視差異清單，取消勾選你想略過的項目，再進行複製。非常適合分階段遷移,或用於凍結期結束後的整理工作。
👉 詳見：[比較與管理檔案](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-medium img-center" />
### 同步與排程工作（自動化切換）

使用**同步**功能鏡射選定的資料夾，直到目的地完全取代來源為止。務必先執行**試跑（dry-run）**，再儲存工作並排程每晚或每小時執行，直到切換完成為止。
👉 詳見：
- [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved sync job in RcloneView" class="img-medium img-center" />

**專業建議**

- 將遷移拆分成多個批次，維持在每日 750 GB 的 API 配額之內；配額重置後再排入下一批次。
- 將共用雲端硬碟內容複製到個人「我的雲端硬碟」時，請確認權限設定，並從目的地帳號重新分享重要資料夾。
- 在最後一次同步前，將來源資料夾設為唯讀，讓最後的差異量保持小且可預測。
- 從 RcloneView 的工作記錄中匯出 rclone 日誌，以保留一份記載移動內容與時間的稽核軌跡。

## 遷移完成後

- **抽查擁有權**：確認目的地帳號擁有關鍵檔案（尤其是文件/試算表），且協作者仍保有存取權限。
- **重建捷徑與書籤**：Google 捷徑不會自動帶過去；請在新帳號中重新建立重要連結。
- **清理來源端**：在目的地成為權威版本後，封存或刪除舊資料夾,以避免意外編輯。
- **監控共用雲端硬碟權限**：大型團隊可能需要更新群組成員資格，以符合新的擁有權結構。

## 結論——重點整理

- Google 原生的傳輸工具雖有幫助,但僅適用於大範圍的粗略操作。
- RcloneView 讓你能在 Google Drive 帳號之間進行細部資料夾選擇、預覽差異,以及排程同步——而且完全以圖形化介面操作。
- 請圍繞 Google 的配額限制進行規劃、先進行試驗性移動，並記錄切換過程，讓同事清楚在哪裡能找到最新檔案。

## 常見問答

**RcloneView 會保留檔案版本與留言嗎？**
非 Google 格式的檔案（PDF、影片、ZIP）會完整保留。Google 文件/試算表/簡報則會保留內容,但複製時會產生新的 ID；RcloneView 會將它們顯示為新檔案,方便你依需要重新分享。

**我可以在不同網域之間移動共用雲端硬碟資料夾嗎？**
Google 不允許共用雲端硬碟直接變更網域。請使用 RcloneView 將內容複製到由目的地網域擁有的共用雲端硬碟中，再重新套用權限設定。[Google Workspace Admin Help](https://support.google.com/a/answer/7212025?hl=en)

**如果我觸及每日 750 GB 的配額上限會怎樣？**
傳輸會因速率限制錯誤而暫停。等待 24 小時（或改用其他仍有配額的帳號）後再繼續執行工作。RcloneView 的日誌會顯示傳輸中斷的位置，讓你能接續進行而不會重複複製檔案。

**準備好讓跨帳號傳輸變成清單上的另一個項目了嗎？**

<CloudSupportGrid />
