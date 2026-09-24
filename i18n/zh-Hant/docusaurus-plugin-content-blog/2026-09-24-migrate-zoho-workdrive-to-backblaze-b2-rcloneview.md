---
slug: migrate-zoho-workdrive-to-backblaze-b2-rcloneview
title: "將 Zoho WorkDrive 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用 RcloneView 將檔案從 Zoho WorkDrive 直接遷移到 Backblaze B2,支援雲端到雲端傳輸、Dry Run 預覽與工作排程。"
keywords:
  - 將Zoho WorkDrive遷移到Backblaze B2
  - Zoho WorkDrive備份
  - Backblaze B2遷移
  - 雲端到雲端傳輸
  - RcloneView遷移指南
  - Zoho WorkDrive到B2
  - 雲端儲存遷移工具
  - rclone Zoho WorkDrive
  - 跨雲端檔案傳輸
  - 經濟實惠的雲端存檔
tags:
  - RcloneView
  - zoho
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Zoho WorkDrive 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 不需先經過本機磁碟,直接將 Zoho WorkDrive 的檔案遷移到 Backblaze B2。

日常使用 Zoho WorkDrive 進行協作的團隊,通常需要為已完成的專案和舊客戶資料夾尋找更便宜的長期儲存層,而 Backblaze B2 是常見的存檔選擇。RcloneView 在一個視窗中連接兩個遠端,直接進行雲端到雲端的檔案複製,因此不需先將裝滿文件與媒體的共用磁碟下載到筆記型電腦本機儲存再重新上傳。RcloneView 可在 Windows、macOS 與 Linux 上,於一個視窗內掛載並同步 90 多個服務商,瀏覽 Zoho WorkDrive 並存檔到 Backblaze B2 不需切換應用程式。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Zoho WorkDrive 與 Backblaze B2

透過 New Remote 新增 Zoho WorkDrive 作為遠端,並選擇以 OAuth 為基礎的設定;由於設定過程中 Zoho WorkDrive 需要選擇地區,請在完成設定前選擇與你帳戶相符的資料中心。Backblaze B2 則改用憑證輸入方式 — 從 B2 金鑰管理頁面輸入 Application Key ID 與 Application Key,RcloneView 會在儲存前驗證連線。之後兩個遠端都會以標籤形式出現在 Explorer 面板中,可以並排瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Zoho WorkDrive 與 Backblaze B2 作為遠端" class="img-large img-center" />

連線完成後,開啟 Remote Manager 確認兩個項目,並在首次傳輸前調整資料夾範圍等設定。

## 執行雲端到雲端傳輸

開啟雙面板版面,一側放置 Zoho WorkDrive,另一側放置你的 Backblaze B2 儲存桶,然後拖曳要遷移的資料夾 — 在兩個不同遠端之間拖曳一律執行複製操作,Zoho WorkDrive 原始檔案在你準備清理之前會保持不變。若是更大規模的遷移,建議改用 Sync 工作:選擇 Zoho WorkDrive 作為來源、B2 儲存桶作為目的地,在 Advanced Settings 中設定同時檔案傳輸數,並先執行 Dry Run 以準確預覽哪些檔案將會移動,然後才真正開始傳輸。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 Zoho WorkDrive 到 Backblaze B2 的雲端到雲端傳輸工作" class="img-large img-center" />

## 驗證並排程遷移

在同步工作的 Advanced Settings 中啟用檢查碼比較,讓 RcloneView 依雜湊值與大小而非僅依檔案大小確認檔案是否相符,並設定重試次數以應對大批量傳輸中發生的暫時性網路錯誤。工作完成後,查看 Job History 檢查傳輸的檔案總數、耗費時間以及任何發生錯誤的項目,然後再將來源資料夾存檔。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="顯示 Zoho WorkDrive 到 Backblaze B2 傳輸完成的 Job History" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增你的 Zoho WorkDrive 遠端,並選擇正確的地區。
3. 使用你的 Application Key ID 與 Key 新增 Backblaze B2 遠端。
4. 執行 Dry Run,然後執行同步或複製工作,並在 Job History 中確認結果。

一次乾淨的雲端到雲端遷移能讓你的 Zoho WorkDrive 工作空間保持精簡,同時為已完成的檔案提供持久且低成本的存放位置。

---

**相關指南:**

- [管理 Zoho WorkDrive — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [管理 Backblaze B2 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [將 Zoho WorkDrive 同步到 OneDrive — 使用 RcloneView 實現雲端備份](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)

<CloudSupportGrid />
