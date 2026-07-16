---
slug: fix-cloud-sync-file-modified-during-transfer-rcloneview
title: "修正傳輸過程中檔案被修改的問題 — 使用 RcloneView 解決雲端同步衝突"
authors:
  - tayson
description: "解決 RcloneView 傳輸過程中因檔案被修改而導致的雲端同步錯誤。學習處理檔案使用中衝突、部分上傳，以及同步不一致的問題。"
keywords:
  - fix files modified during cloud transfer
  - cloud sync conflict resolution RcloneView
  - file modified during upload error
  - rclone file in use error
  - cloud sync incomplete transfer fix
  - RcloneView sync conflict
  - file locked during sync troubleshooting
  - partial upload cloud sync fix
  - rclone modified during transfer
  - cloud backup file conflict resolution
tags:
  - troubleshooting
  - tips
  - data-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修正傳輸過程中檔案被修改的問題 — 使用 RcloneView 解決雲端同步衝突

> 當 RcloneView 正在同步檔案時，如果檔案內容發生變化，可能導致傳輸失敗、產生部分上傳，或造成雲端副本不一致 — 以下說明如何偵測並解決每種情況。

雲端同步錯誤的常見原因之一，是檔案在同步作業進行中被修改、鎖定或寫入。應用程式正在寫入的資料庫檔案、在 Office 中開啟的文件，或正在被執行中服務持續附加內容的日誌檔案，都可能導致部分上傳或傳輸失敗。RcloneView 會在其日誌中清楚顯示這些錯誤，而 rclone 也提供了多個旗標來妥善處理這類情況。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 日誌中識別檔案使用中錯誤

當檔案在同步過程中被鎖定或修改時，rclone 通常會回報如下錯誤：
- `Failed to copy: file changed under us - trying again`
- `source file is being written to`
- `partial read detected`

在 RcloneView 中，這些錯誤會顯示在介面底部的**日誌（Log）分頁**中。同步作業完成後，請檢查日誌中是否有標示 `ERROR` 的項目，指出檔案修改衝突。**作業歷史（Job History）**檢視畫面也會針對任何傳輸失敗的檔案，顯示 `Errored` 狀態。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing file transfer errors in RcloneView" class="img-large img-center" />

## 使用 --ignore-errors 與重試機制

預設情況下，RcloneView 的同步作業會配置重試次數（預設為 3 次），自動重新嘗試失敗的傳輸。對於暫時性被鎖定的檔案（例如應用程式短暫開啟後隨即關閉的檔案），重試通常能在後續嘗試中成功。

若同步作業中有些檔案持續被鎖定（例如正在使用中的資料庫檔案），請在同步作業設定的自訂 rclone 旗標中加入 `--ignore-errors`。這會讓 rclone 在部分檔案失敗時，仍繼續同步其他檔案，盡可能完成同步，並將失敗記錄下來供後續檢視。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring sync job settings to handle file-in-use errors in RcloneView" class="img-large img-center" />

## 從同步範圍中排除使用中的應用程式檔案

解決檔案使用中衝突的最佳長期方法，是將永遠處於使用狀態的檔案從同步作業的範圍中排除。RcloneView 的篩選設定（同步精靈中的第 3 步）支援自訂排除規則：

- 排除 SQLite 資料庫：新增 `*.db-journal` 與 `*.db-wal`，排除使用中的預寫日誌
- 排除 Office 暫存檔：新增 `~$*`，排除 Word/Excel 的鎖定檔案
- 排除正在寫入的日誌檔案：新增 `*.log` 或特定的比對模式

這些篩選規則可避免 RcloneView 嘗試同步在作業進行期間必然處於使用中的檔案，從根本上消除此類錯誤。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up file exclusion filters to avoid sync conflicts in RcloneView" class="img-large img-center" />

## 執行試跑（Dry Run）以驗證篩選效果

新增排除篩選規則後，請對同步作業執行**試跑（dry run）**，確認被篩選的檔案不再出現在傳輸清單中。試跑輸出會顯示所有將被複製的檔案 — 在實際執行同步之前，請先確認使用中的資料庫檔案、鎖定檔案與開啟中的文件都已不在清單內。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using dry run to verify filtered file list before syncing in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 同步失敗後，檢查日誌分頁與作業歷史中的檔案修改錯誤。
3. 在同步精靈中為永遠使用中的檔案新增自訂排除篩選規則。
4. 執行試跑以確認篩選規則有效，然後重新執行同步作業。

在 RcloneView 中處理檔案使用中衝突，關鍵在於了解該排除哪些檔案，以及如何配置重試機制 — 一旦正確設定完成，你的同步作業就能每次都順利執行。

---

**相關指南：**

- [修正雲端同步傳輸後檔案遺失的問題 — 使用 RcloneView 解決](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [RcloneView 中的篩選規則與選擇性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [使用 RcloneView 復原中斷或失敗的傳輸](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
