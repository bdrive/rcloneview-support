---
slug: migrate-pikpak-to-onedrive-rcloneview
title: "將 PikPak 遷移到 OneDrive — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用 RcloneView(一款無需命令列操作即可遷移雲端儲存的 rclone GUI)將檔案從 PikPak 搬移到 OneDrive。"
keywords:
  - pikpak 遷移到 onedrive
  - pikpak onedrive 傳輸
  - pikpak onedrive 遷移
  - rclone gui pikpak
  - 雲對雲遷移工具
  - pikpak onedrive 備份
  - 傳輸 pikpak 檔案
  - rcloneview 遷移
  - pikpak 雲端儲存
  - onedrive 同步工具
tags:
  - RcloneView
  - pikpak
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 PikPak 遷移到 OneDrive — 使用 RcloneView 傳輸檔案

> 不必先下載到本機磁碟,就能把你在 PikPak 累積的檔案整合到 OneDrive。

PikPak 是離線下載與磁力連結的熱門去處,但大多數人並不打算把檔案長期存放在那裡——具備 Microsoft 365 整合的 OneDrive 通常才是長期存放的選擇。手動把檔案從一邊搬到另一邊,代表要先下載到本機磁碟再重新上傳,既慢又容易中斷。RcloneView 可以在單一工作中直接於兩個遠端之間完成搬移。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 PikPak 與 OneDrive 連接為遠端

開啟 **Remote 分頁 > New Remote**,先新增 PikPak,依照畫面提示完成帳戶驗證。接著新增 OneDrive,它使用 RcloneView 的 OAuth 瀏覽器登入方式——視窗開啟後登入即可,不需要複製貼上任何 API 金鑰,遠端會自動連線。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中將 PikPak 與 OneDrive 新增為新遠端" class="img-large img-center" />

當兩個遠端都出現在 Remote Manager 中後,在雙欄 Explorer 中並排開啟它們,確認你看到的是正確的資料夾,再開始設定傳輸。

## 設定遷移工作

在 Home 分頁點選 **Sync**,啟動四步驟精靈。在步驟 1 中,選擇 PikPak 資料夾作為來源、目標 OneDrive 資料夾作為目的地,並選擇 **One-way (modifying destination only)**,讓 PikPak 保持不變,只有 OneDrive 接收副本。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中設定從 PikPak 到 OneDrive 的傳輸工作" class="img-large img-center" />

若要搬移大量小檔案,可在步驟 2 提高檔案傳輸數量;若只想先搬移特定內容,可在步驟 3 套用最大檔案大小或副檔名篩選器。正式傳輸前先執行 **Dry Run**——它會準確列出將要複製的內容,讓你在浪費時間之前就能發現選錯資料夾的問題。

## 監控並驗證傳輸

啟動工作後切換到 **Transferring** 分頁,即時查看進度、速度與檔案數量。RcloneView 可在單一視窗中掛載並同步 90 多個服務商,因此在 PikPak 到 OneDrive 的工作於背景執行時,你仍可以繼續查看其他遠端。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="工作記錄顯示一次已完成的 PikPak 到 OneDrive 遷移" class="img-large img-center" />

工作完成後,在 **Job History** 中查看傳輸的總大小與檔案數量,接著使用 **Folder Compare** 確認兩邊一致,再判定遷移已經完成。

## 快速上手

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 Remote Manager 將你的 PikPak 與 OneDrive 帳戶新增為遠端。
3. 建立一個從 PikPak 到 OneDrive 的單向同步工作,先執行 Dry Run。
4. 執行工作,並用 Job History 與 Folder Compare 驗證結果。

當 PikPak 的內容落腳到 OneDrive 後,就能立即享用 OneDrive 提供的協作與 Office 整合功能。

---

**相關指南:**

- [將 PikPak 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [同步 PikPak、Google Drive 與 S3](https://rcloneview.com/support/blog/sync-pikpak-cloud-google-drive-s3-rcloneview)
- [修復 PikPak 同步錯誤](https://rcloneview.com/support/blog/fix-pikpak-sync-errors-rcloneview)

<CloudSupportGrid />
