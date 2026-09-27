---
slug: sync-nextcloud-to-koofr-rcloneview
title: "將 Nextcloud 同步到 Koofr — 使用 RcloneView 進行雲端備份"
authors:
  - robin
description: "使用 RcloneView 將自架的 Nextcloud 實例備份到 Koofr — 在兩個注重隱私的儲存供應商之間進行直接的雲端對雲端同步。"
keywords:
  - 將 Nextcloud 同步到 Koofr
  - Nextcloud 到 Koofr 備份
  - RcloneView Nextcloud
  - RcloneView Koofr
  - 自架雲端備份
  - 雲端對雲端同步
  - Nextcloud Koofr 傳輸
  - 歐洲雲端儲存備份
tags:
  - RcloneView
  - nextcloud
  - koofr
  - cloud-to-cloud
  - sync
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Nextcloud 同步到 Koofr — 使用 RcloneView 進行雲端備份

> 為自架的 Nextcloud 實例設定一個以 Koofr 為基礎的異地備份,依排程自動執行,而不必手動匯出。

Nextcloud 之所以受歡迎,正是因為它讓儲存完全由你掌控,但這種掌控也意味著一次伺服器故障、一次糟糕的更新,或一次磁碟錯誤,就可能讓你唯一的副本全部遺失。Koofr 是作為第二份副本的天然搭配,因為它同樣是一家總部位於歐盟、注重隱私的供應商——備份會落在具有類似資料落地政策的地方,而不是不相關的司法管轄區。RcloneView 將兩者都當作一般遠端連線,並在它們之間直接執行複製,因此備份不需要讓 Nextcloud 伺服器同時充當上傳用戶端。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Nextcloud 與 Koofr

透過「遠端」分頁 > 「新增遠端」,使用 WebDAV 將 Nextcloud 新增為遠端——Nextcloud 會在實例管理面板的「設定」下顯示的 URL 上透過 WebDAV 公開檔案,因此你需要伺服器位址、使用者名稱,以及應用程式密碼,而不是一般的登入密碼。透過其自身的 OAuth 登入流程另外新增 Koofr。RcloneView 可在單一視窗中掛載並同步 90 個以上的供應商,支援 Windows、macOS 與 Linux,因此無論 Nextcloud 伺服器架設在家用 NAS 還是租用的 VPS 上,同樣的兩個遠端設定都能正常運作。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

當兩個遠端都出現在遠端管理器中後,並排開啟兩個檔案總管面板,確認可以瀏覽 Nextcloud 的資料夾結構,並查看(可能是空的)Koofr 目的地,然後再設定任何自動化作業。

## 建立同步工作

對於這類備份,請使用四步驟同步精靈,而不是臨時的拖放操作——將 Nextcloud 設為來源、Koofr 設為目的地,選擇單向同步,讓 Koofr 只接收副本、Nextcloud 保持為權威版本,並在實際傳輸前先執行一次模擬執行,確認檔案清單看起來正確。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync from Nextcloud to Koofr in RcloneView" class="img-large img-center" />

在第 3 步中,排除任何你不想在異地重複保存的內容——Nextcloud 本身的 `.git` 樣式版本資料夾,或已經在別處備份的大型同步媒體庫,都是設定篩選規則的好對象,這樣可以讓 Koofr 上的副本專注於真正需要備援的內容。

## 排程週期性備份

一次性同步只能保護你免於今天的故障,卻無法應對下個月的故障。在 PLUS 授權下,精靈的第 4 步可以新增 crontab 樣式的排程,讓 Nextcloud 到 Koofr 的同步在每晚或每週自動執行,不需要開啟應用程式。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Koofr backup job in RcloneView" class="img-large img-center" />

工作記錄會持續記錄每一次排程執行的完成狀態、檔案數量與耗時,讓你可以確認備份確實已執行,而不是假設排程工作正在背景默默運作。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將你的 Nextcloud 實例新增為 WebDAV 遠端,將 Koofr 新增為 OAuth 遠端。
3. 建立一個從 Nextcloud 到 Koofr 的單向同步工作,並篩選掉不需要重複保存的內容。
4. 排程工作自動執行,並定期查看工作記錄,確認它正常完成。

一台自架伺服器的安全程度取決於它的備份,而將備份指向第二個獨立的供應商,正好補上了自架方案本身留下的單點故障缺口。

---

**相關指南:**

- [將 Koofr 同步到 Proton Drive — 使用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [修復 Nextcloud 同步錯誤 — 使用 RcloneView 解決](https://rcloneview.com/support/blog/fix-nextcloud-sync-errors-rcloneview)
- [將 Koofr 遷移到 Jottacloud — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-koofr-to-jottacloud-rcloneview)

<CloudSupportGrid />
