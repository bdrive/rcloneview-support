---
slug: fix-koofr-sync-errors-rcloneview
title: "修復 Koofr 同步錯誤 — 使用 RcloneView 排查與解決問題"
authors:
  - morgan
description: "在 RcloneView 中修復常見的 Koofr 同步錯誤,從登入失敗到配額超限、傳輸卡住,提供清楚的分步解決方案。"
keywords:
  - Koofr 同步錯誤
  - 修復 Koofr RcloneView
  - Koofr 登入失敗
  - Koofr 連線逾時
  - Koofr 配額超限
  - RcloneView 疑難排解
  - Koofr 雲端同步
  - Koofr 備份錯誤
  - Koofr rclone
  - 雲端儲存疑難排解
tags:
  - RcloneView
  - koofr
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Koofr 同步錯誤 — 使用 RcloneView 排查與解決問題

> Koofr 同步工作停滯、驗證失敗,或悄悄跳過檔案?**RcloneView** 提供診斷與解決問題所需的可見度與控制能力。

Koofr 是相當出色的歐洲雲端儲存選擇,但和任何服務供應商一樣,同步工作也可能遇到驗證問題、配額限制或傳輸錯誤,讓人搞不清楚問題出在哪裡。RcloneView 的 Job History、Log 分頁與 Dry Run 工具,能讓你不必猜測就找出確切原因。本指南將介紹最常見的 Koofr 同步錯誤,以及如何在 RcloneView 中一一修復。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 登入或連線失敗

如果 Koofr 遠端突然無法連線,可能是儲存的憑證已過期,或在 Koofr 帳戶端遭到撤銷,也可能是在 Koofr 上變更的密碼尚未同步到 RcloneView。

**修復方法:**

開啟 Remote Manager,選取該 Koofr 遠端,重新輸入憑證以重新整理連線。若遠端仍然無法連線,請將其刪除,再透過 New Remote 精靈重新新增為新的遠端,而不是編輯已損壞的那一個 — 乾淨的重新驗證可解決大多數過期工作階段的問題。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

## 同步工作中途失敗

若工作複製部分檔案後便停止,或在 Job History 中顯示「Errored」狀態,通常是暫時性的網路問題、速率限制,或某個有問題的檔案(無效字元、路徑過長,或零位元組鎖定檔)阻塞了批次中其餘檔案所致。

**修復方法:**

開啟 Job History 並以「Errored」篩選,確切查看哪次執行在何時失敗。在工作精靈第 2 步中增加「Retry entire sync if fails」的次數 — 預設值 3 可自動處理大多數暫時性網路問題。若同一個檔案反覆失敗,可在第 3 步使用自訂篩選規則暫時排除它,並確認其餘同步能順利完成。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry and advanced sync settings in RcloneView" class="img-large img-center" />

## 儲存配額已用盡

若上傳到 Koofr 的作業在沒有明顯錯誤的情況下於同步中途停止,請檢查帳戶是否已達到儲存上限。Koofr 和多數服務供應商一樣,一旦配額用盡便會直接拒絕新的寫入。

**修復方法:**

在內建的 Rclone Terminal 分頁中執行 `rclone about "koofr:"`,查看目前使用量相對於配額的情況。若空間吃緊,可使用 Folder Compare 的大小變化探索工具找出佔用空間最多的資料夾,再釋放空間或升級你的 Koofr 方案。

## 同步後檔案不相符

若檔案看似已複製,但 Koofr 顯示的大小或時間戳記與來源不同,這通常是同步方向或時間問題,而非 Koofr 本身的錯誤。

**修復方法:**

在實際同步前執行 Dry Run,精確預覽將複製或刪除的內容 — 這能在資料受影響前發現方向上的錯誤。接著在來源與 Koofr 遠端之間使用 Folder Compare,確認兩邊一致。RcloneView 的同步與 Folder Compare 工具在 FREE 授權下皆可使用,因此你無需離開應用程式即可驗證結果。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and Koofr folders in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 若驗證失敗,請重新新增 Koofr 遠端,而不是編輯已過期的那一個。
3. 查看 Job History 以確認確切的失敗點,並據此調整重試或篩選設定。
4. 修復後執行 Dry Run 與 Folder Compare,確認後續同步是乾淨的。

先看 Job History,再執行 Dry Run,最後用 Compare 確認 — 這個小小的診斷流程無需命令列即可解決大多數 Koofr 同步問題。

---

**相關指南:**

- [管理 Koofr 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Koofr 打造為多雲中樞](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [使用 RcloneView 將 Koofr 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)

<CloudSupportGrid />
