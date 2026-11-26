---
slug: migrate-zoho-workdrive-to-dropbox-rcloneview
title: "將 Zoho WorkDrive 遷移到 Dropbox — 使用 RcloneView 傳輸檔案"
authors:
  - robin
description: "使用 RcloneView 將檔案從 Zoho WorkDrive 遷移到 Dropbox。連接兩個雲端，以 Dry Run 預覽，在雲端之間直接複製，並以 Folder Compare 驗證。"
keywords:
  - zoho workdrive 遷移到 dropbox
  - zoho workdrive 到 dropbox 傳輸
  - 從 zoho workdrive 移動檔案
  - zoho workdrive 遷移工具
  - dropbox 遷移
  - 雲端對雲端傳輸
  - rcloneview zoho workdrive
  - rcloneview dropbox
  - rclone gui zoho workdrive
tags:
  - RcloneView
  - zoho
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Zoho WorkDrive 遷移到 Dropbox — 使用 RcloneView 傳輸檔案

> 將 Zoho WorkDrive 工作區以雲端對雲端的方式直接遷移到 Dropbox，變更前可預覽，完成後可並排核對。

團隊離開 Zoho WorkDrive 的原因有很多 — 與使用 Dropbox 的公司合併、客戶統一採用 Dropbox，或只是工具整併。把所有內容下載到筆電再重新上傳既慢又容易出錯。RcloneView 在一個視窗中連接兩項服務，並直接在兩者之間複製檔案，還提供 Dry Run、工作記錄和 Folder Compare，確保沒有遺漏。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Zoho WorkDrive 與 Dropbox

開啟 **Remote > New Remote**，先新增 Zoho WorkDrive。與大多數供應商相比，Zoho WorkDrive 多了一個步驟：你必須選擇 Zoho 帳戶所在的**區域**（例如美國或歐盟資料中心）。選錯區域是連線失敗的常見原因，因此開始前請確認你登入 Zoho 時所用的網域。

接著新增 Dropbox。它使用 OAuth：瀏覽器視窗開啟後，登入並核准存取，RcloneView 就會自動完成設定 — 不需要 API 金鑰。如果你的團隊使用 Dropbox Business，請在設定時啟用 `dropbox_business`，以便存取團隊資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Zoho WorkDrive 與 Dropbox 遠端" class="img-large img-center" />

## 使用 Dry Run 預覽複製

在 Explorer 面板中並排開啟兩個遠端，瀏覽到要遷移的 WorkDrive 資料夾。你可以先拖曳一個小資料夾做快速測試 — 在不同遠端之間拖曳一律是複製而非移動，因此來源檔案保持不變。

進行完整遷移時，開啟 **Job Manager** 並新增工作。將 Zoho WorkDrive 設為來源，將新的 Dropbox 資料夾（例如 `/WorkDrive-Archive`）設為目的地。首次執行請使用 **Copy** 工作而非單向同步：Copy 不會刪除目的地上的任何內容。接著執行 **Dry Run**，在任何資料移動之前查看即將傳輸的確切檔案清單。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 Zoho WorkDrive 到 Dropbox 的雲端對雲端傳輸" class="img-large img-center" />

## 調整傳輸並監控進度

Dropbox 會實施 API 速率限制，因此適中的並行檔案傳輸數比設定得很高更可靠。將 **Retry entire sync if fails** 保留為預設值 3，讓暫時性錯誤能自行恢復。如果工作區中有大型影片或設計檔案，多執行緒傳輸設定（預設 4）有助於處理單一大型檔案。

工作執行期間，**Transferring** 分頁會顯示進度、速度與檔案數量。完成後，**Job History** 會記錄狀態、總大小與檔案數 — 當主管要求提供遷移完成的證明時非常實用。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中監控 Zoho WorkDrive 到 Dropbox 的傳輸" class="img-large img-center" />

## 使用 Folder Compare 驗證

開啟 **Home > Compare**，左側為 WorkDrive，右側為 Dropbox。使用 **left-only files** 篩選找出未抵達的檔案，使用 **different files** 篩選找出大小不一致的檔案。選取缺少的項目並使用 **Copy right** 補齊。與僅支援掛載的工具不同，RcloneView 在 FREE 授權下也能同步與比較資料夾。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="遷移後比較 Zoho WorkDrive 與 Dropbox 資料夾" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 Zoho WorkDrive（選擇正確區域）與 Dropbox（OAuth 登入）新增為遠端。
3. 建立從 WorkDrive 到新 Dropbox 資料夾的 Copy 工作，並先執行 Dry Run。
4. 執行工作，再以 Folder Compare 與 Job History 確認結果。

經過規劃與驗證的遷移，讓你的團隊從第一天起就能切換到 Dropbox，無需四處尋找遺失的檔案。

---

**相關指南：**

- [管理 Zoho WorkDrive — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [使用 RcloneView 將 Zoho WorkDrive 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-google-drive-rcloneview)
- [使用 RcloneView 修復 Dropbox 同步錯誤](https://rcloneview.com/support/blog/fix-dropbox-sync-errors-rcloneview)

<CloudSupportGrid />
