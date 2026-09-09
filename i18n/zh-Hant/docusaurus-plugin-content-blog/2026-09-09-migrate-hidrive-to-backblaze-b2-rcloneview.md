---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "將 HiDrive 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - kai
description: "使用 RcloneView 將檔案從 HiDrive 遷移至 Backblaze B2——這是一款跨平台圖形介面工具,可在兩個供應商之間搬移資料,無需先在本機暫存檔案。"
keywords:
  - 將 HiDrive 遷移至 Backblaze B2
  - HiDrive 到 Backblaze B2 傳輸
  - RcloneView HiDrive 遷移
  - HiDrive 雲端備份工具
  - Backblaze B2 遷移 GUI
  - 將 HiDrive 檔案移至 B2
  - 雲端對雲端傳輸 RcloneView
  - HiDrive B2 同步
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 HiDrive 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 使用 RcloneView 將檔案直接從 HiDrive 搬移至 Backblaze B2,無需先下載到本機磁碟。

超出 HiDrive 帳戶容量的團隊,經常因為更低成本的物件儲存與應用程式金鑰模式而轉向 Backblaze B2,但這兩項服務並不能原生互通。RcloneView 可在單一視窗中橋接兩者:將兩者都連接為遠端,在面板之間拖曳檔案,內建的 rclone 引擎會在供應商支援的範圍內處理伺服器對伺服器的傳輸。傳輸本身不需要手動匯出,也不需要本機暫存資料夾。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 HiDrive 與 Backblaze B2

請先透過 **Remote tab → New Remote** 新增 HiDrive。HiDrive 使用 OAuth 瀏覽器登入,因此 RcloneView 會開啟瀏覽器視窗供您登入並授權存取——不需要手動複製 API 金鑰。Backblaze B2 的設定方式不同:選擇 Backblaze B2 作為遠端類型,並輸入從 Backblaze 金鑰管理頁面產生的 Application Key ID 與 Application Key。兩個遠端都出現在 Remote Manager 中後,並排開啟兩個 Explorer 面板——一個指向 HiDrive,另一個指向您的 B2 儲存貯體。

與僅支援掛載的工具不同,RcloneView 也能在這些遠端之間進行同步與資料夾比較——且屬於 FREE 授權方案的功能。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 HiDrive 遠端" class="img-large img-center" />

## 執行一次性傳輸或定期同步

若是一次性遷移,請在 HiDrive 面板選取資料夾,拖曳到 B2 面板並確認傳輸——RcloneView 會將跨遠端拖曳視為複製,在您確認資料已正確送達之前,HiDrive 上的原始檔案會保持不變。若是持續進行的遷移,且 HiDrive 在轉換期間仍持續收到新檔案,則應改為建立 Sync 工作:在 4 步驟精靈中選擇 HiDrive 作為來源、B2 作為目的地,將方向設為單向的「Modifying destination only」,並在需要補齊差異時手動執行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 HiDrive 到 Backblaze B2 的雲端對雲端同步工作" class="img-large img-center" />

在最終切換之前,請執行該工作的 Dry Run 選項,預覽哪些檔案會被複製、哪些檔案(若有)會在目的地端被刪除——這是在讓正式作業流程指向新 B2 儲存貯體之前一個實用的檢查步驟。

## 驗證並自動化遷移

初次遷移完成後,請使用 Folder Compare 逐檔核對雙方,確認檔案數量與大小是否一致,而不要只依賴單一完成狀態訊息。若遷移需要依排程重複執行——例如在過渡階段將新上傳至 HiDrive 的檔案持續鏡像到 B2——PLUS 授權方案可解鎖 crontab 風格的排程功能,讓同步工作依照符合轉換計畫的時間間隔自動無人值守執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="排程從 HiDrive 到 Backblaze B2 的定期同步工作" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote Manager 中透過 OAuth 瀏覽器登入新增 HiDrive。
3. 使用您的 Application Key ID 與 Application Key 新增 Backblaze B2。
4. 執行 Dry Run,接著在兩個面板之間執行傳輸或同步工作。

設定好兩個遠端後,從 HiDrive 遷移到 B2 就只是您日常檔案管理中,同一個介面裡的一次拖放操作或排程工作而已。

---

**相關指南:**

- [管理 HiDrive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [管理 Backblaze B2 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [將 HiDrive 同步至 Amazon S3 — 使用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)

<CloudSupportGrid />
