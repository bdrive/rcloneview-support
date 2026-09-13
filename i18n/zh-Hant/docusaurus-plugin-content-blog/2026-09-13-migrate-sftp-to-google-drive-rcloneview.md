---
slug: migrate-sftp-to-google-drive-rcloneview
title: "將 SFTP 遷移到 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - kai
description: "使用 RcloneView 的雙欄瀏覽器、模擬執行預覽與排程同步工作,將檔案從 SFTP 伺服器遷移到 Google Drive。"
keywords:
  - RcloneView
  - 將 SFTP 遷移到 Google Drive
  - SFTP 遷移到雲端
  - 傳輸 SFTP 檔案
  - SSH 檔案傳輸到雲端
  - 雲端儲存遷移
  - SFTP 用戶端 GUI
  - Google Drive 備份
  - 安全檔案傳輸工具
  - 停用 SFTP 伺服器
tags:
  - RcloneView
  - sftp
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 SFTP 遷移到 Google Drive — 使用 RcloneView 傳輸檔案

> 不遺失任何一個檔案,就能淘汰老舊的 SFTP 伺服器——用 RcloneView 把一切直接搬到 Google Drive。

許多團隊仍在運行內部 SFTP 伺服器來傳遞檔案,但維護該伺服器上的 SSH 憑證、防火牆規則與磁碟空間的成本,相較於讓 Google Drive 來處理儲存與分享要高出許多。RcloneView 能在同一個視窗中同時連線 SFTP 主機與 Google Drive,讓你不必動用終端機就能在兩者之間瀏覽、比較與傳輸檔案。對於打算在淘汰舊硬體之前遷移舊有檔案伺服器的小型 IT 團隊來說,這是務實的第一步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 並排連線 SFTP 伺服器與 Google Drive

先新增 SFTP 遠端:在 New Remote 精靈中輸入主機位址與 SSH 憑證,預設使用連接埠 22。接著透過 OAuth 瀏覽器登入新增 Google Drive 作為第二個遠端——不需要輸入 API 金鑰。使用 RcloneView 的分割面板版面配置,在兩個獨立的 Explorer 面板中分別開啟它們,即可同時檢視雙方完整的資料夾結構。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an SFTP remote and a Google Drive remote in RcloneView" class="img-large img-center" />

RcloneView 能在一個視窗內掛載並同步 90 多個服務供應商,支援 Windows、macOS 與 Linux,因此無論 SFTP 主機位於區域網路內,還是僅能透過跳板主機存取,相同的設定都能正常運作。

## 遷移前先預覽

在傳輸多年累積的檔案之前,先在 SFTP 根目錄與目標 Google Drive 資料夾之間執行 Folder Compare,準確掌握目標端缺少哪些內容。接著將傳輸設定為 Sync 工作,並使用 Dry Run 模擬複製過程——RcloneView 會列出所有即將移動的檔案與即將建立的資料夾,在你確認之前不會實際寫入任何內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing SFTP and Google Drive folder contents before migration in RcloneView" class="img-large img-center" />

當 SFTP 伺服器累積了多年、命名不一致的巢狀資料夾時,這個步驟格外重要——模擬執行能在問題演變成夜間支援事件之前先揭露出來。

## 用排程工作自動完成剩餘傳輸

對於大型 SFTP 封存,不要嘗試一次全部遷移完成。將遷移儲存為 Job Manager 中的一個 Job,把檔案傳輸數量設定為與網路實際處理量相符,然後讓它在背景執行,同時你可以繼續在其他 Explorer 面板中工作。若在轉換期間 SFTP 伺服器還需要再運作幾週,PLUS 授權的排程功能可依 crontab 風格的排程重複同步,讓 Google Drive 在舊伺服器關閉之前保持最新狀態。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring SFTP to Google Drive sync job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用主機位址與 SSH 憑證,將你的 SFTP 伺服器新增為遠端。
3. 透過 OAuth 瀏覽器登入流程,將 Google Drive 新增為第二個遠端。
4. 執行 Folder Compare 與 Dry Run,然後在正式執行前將傳輸儲存為 Job。

當同步工作在重複執行時乾淨完成、沒有任何內容需要複製時,舊的 SFTP 伺服器就可以安全關閉了。

---

**相關指南:**

- [管理 SFTP 伺服器儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [管理 Google Drive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 SFTP 與 SMB 掛載為本機磁碟](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
