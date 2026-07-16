---
slug: migrate-jottacloud-to-onedrive-rcloneview
title: "將 Jottacloud 遷移至 OneDrive — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 Jottacloud 中的所有檔案遷移至 Microsoft OneDrive 的逐步指南。無需任何命令列工具即可移動整個檔案庫。"
keywords:
  - jottacloud to onedrive migration
  - transfer jottacloud to onedrive
  - migrate jottacloud to onedrive
  - cloud to cloud transfer gui
  - jottacloud migration tool
  - onedrive cloud migration
  - rcloneview jottacloud onedrive
  - cloud storage migration guide
tags:
  - jottacloud
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Jottacloud 遷移至 OneDrive — 使用 RcloneView 傳輸檔案

> 無需接觸命令列，即可將整個 Jottacloud 檔案庫移動至 Microsoft OneDrive — RcloneView 提供完整的進度監控與檔案完整性驗證，全程處理雲端對雲端傳輸。

許多團隊在整合至 Microsoft 365 時,會從 Jottacloud 轉換至 OneDrive,以獲得更緊密的 Office 應用程式整合與更廣泛的企業工具支援。挑戰在於如何準確且大規模地傳輸多年累積的檔案。RcloneView 的雲端對雲端工作引擎讓您能夠對應兩個遠端、執行經驗證的複製作業,並透過內建的資料夾比對功能確認完整性 — 全部都在單一 GUI 中完成,無需手動編輯任何 rclone 設定檔。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Jottacloud 與 OneDrive 連接為遠端

開啟 RcloneView 並前往 **Remote** 分頁,然後點擊 **New Remote**。從服務供應商清單中選擇 Jottacloud,並依照畫面上的設定提示驗證您的帳戶。

接著,新增第二個遠端以連接 OneDrive。OneDrive 使用基於瀏覽器的 OAuth 驗證 — RcloneView 會自動開啟您的預設瀏覽器以進行帳戶登入。授權完成後,連線資訊會儲存至您的 rclone 設定,並立即出現在 Explorer 面板中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Jottacloud remote in RcloneView Remote Manager" class="img-large img-center" />

兩個遠端都連接完成後,使用 RcloneView 的雙面板 Explorer 並排開啟它們。在來源資料夾上按右鍵並選擇 **Get Size**,以在開始前確認資料總量 — 這能為您提供明確的遷移基準,並協助您在傳輸完成後發現任何非預期的差異。

## 在 Job Manager 中建立複製作業

前往 **Home → Job Manager**,然後點擊 **Add Job**。將您的 Jottacloud 根目錄(或子資料夾)設為來源,並將目標 OneDrive 資料夾設為目的地。選擇 **Copy** 作為初次遷移的作業類型 — 這能在填入 OneDrive 內容的同時保持來源檔案完好無損,不影響原始資料。

在精靈的第 2 步驟中,提高 **Number of file transfers** 以同時推送多個檔案;對於大型檔案庫,這能大幅縮短整體遷移時間。啟用 **Enable checksum**,讓每個傳輸的檔案都透過雜湊值與大小進行驗證,而不僅僅是檔名比對 — 這對於一次性遷移至關重要,因為在您停用來源之前,必須先找出任何靜默發生的資料損毀。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud-to-cloud migration job in RcloneView Job Manager" class="img-large img-center" />

在正式執行之前,點擊 **Dry Run** 以預覽哪些檔案將被複製。對於擁有數千個巢狀資料夾的專案封存而言,此預覽步驟能在造成傳輸中途失敗之前,先找出路徑長度問題與過大的檔案。

## 監控進度與傳輸速度

作業開始後,底部 Info View 中的 **Transferring** 分頁會顯示即時進度:個別檔案名稱、傳輸速度、已移動的總位元組數,以及即時檔案計數。您可以隨時取消作業而不會損毀已完成傳輸的檔案 — RcloneView 底層的 rclone 引擎能夠乾淨地處理部分傳輸,而恢復執行的 Copy 作業會跳過目的地中已存在且大小與校驗碼皆相符的檔案。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Jottacloud to OneDrive transfer in RcloneView" class="img-large img-center" />

對於需要整夜執行的超大型遷移,可使用系統匣讓 RcloneView 在背景持續執行。作業完成通知會在傳輸結束時提醒您。

## 使用 Folder Compare 驗證完整性

複製作業完成後,從 Home 分頁開啟 **Folder Compare**。將左側面板設為您的 Jottacloud 來源,右側面板設為 OneDrive 目的地。RcloneView 會掃描兩側,並標示出未成功傳輸的僅左側檔案、可能已損毀的大小不同檔案,以及任何僅右側檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Jottacloud source and OneDrive destination to verify migration completeness" class="img-large img-center" />

對任何剩餘的僅左側檔案使用 **Copy Right** 以完成傳輸。當比對結果顯示沒有僅左側或大小不同的項目時,即代表您的 Jottacloud 內容已完整且準確地鏡像至 OneDrive — 可供 Microsoft 365 工作流程使用。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 Remote 分頁 → New Remote 新增您的 Jottacloud 帳戶,並依提示操作。
3. 透過 Remote 分頁 → New Remote 新增您的 OneDrive 帳戶(瀏覽器 OAuth 登入)。
4. 在 Job Manager 中建立 Copy 作業,啟用校驗碼,並先執行 Dry Run。
5. 傳輸完成後,開啟 Folder Compare 以確認沒有僅左側或不相符的檔案。

一次乾淨俐落的 Jottacloud 至 OneDrive 遷移,完全可以在單一工作階段中完成 — 無需撰寫腳本、無需擔心意外狀況,並在停用來源之前獲得可信賴的驗證結果。

---

**相關指南:**

- [管理 Jottacloud 雲端儲存 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [將 Jottacloud 遷移至 Google Drive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [管理 OneDrive 雲端儲存 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
