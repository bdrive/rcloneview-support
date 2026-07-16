---
slug: sync-onedrive-to-hetzner-storage-box-rcloneview
title: "將 OneDrive 同步至 Hetzner Storage Box — 使用 RcloneView 進行雲端備份"
authors:
  - jay
description: "使用 RcloneView 將 OneDrive 同步至 Hetzner Storage Box。設定 SFTP 備份、排程自動同步，並以歐洲儲存空間保護您的 Microsoft 檔案。"
keywords:
  - sync OneDrive to Hetzner Storage Box
  - Microsoft OneDrive Hetzner backup
  - RcloneView OneDrive Hetzner
  - Hetzner Storage Box SFTP backup
  - cloud storage to Hetzner sync
  - OneDrive backup Europe GDPR
  - cloud file sync automation
  - Hetzner cloud backup tool
  - OneDrive off-site backup
tags:
  - onedrive
  - hetzner
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 OneDrive 同步至 Hetzner Storage Box — 使用 RcloneView 進行雲端備份

> 透過 RcloneView 將 OneDrive 檔案同步至 Hetzner Storage Box，建立獨立的異地備份——無需撰寫任何指令碼。

Hetzner Storage Box 是一款經濟實惠、於歐洲代管的 SFTP 儲存方案，深受希望在大型雲端服務供應商之外，尋求可靠且注重隱私的備份儲存空間的開發者與 IT 團隊青睞。使用 RcloneView 將您的 Microsoft OneDrive 內容同步至 Hetzner Storage Box，可建立一份完全獨立於 Microsoft 生態系之外的異地備份——適用於災難復原、注重 GDPR 的資料落地需求，或防範帳戶意外遭停權的情況。整個工作流程皆可透過 RcloneView 的視覺化介面設定完成，無需撰寫任何一行 rclone 指令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 OneDrive 與 Hetzner Storage Box 設定為遠端

在同步之前，您需要先將兩項服務都註冊為 RcloneView 中的遠端。OneDrive 採用 OAuth 瀏覽器驗證——點選 **Remote** 分頁 → **New Remote** → **OneDrive**，RcloneView 便會開啟您的瀏覽器，讓您一鍵完成 Microsoft 登入。無需手動管理任何 API 金鑰或用戶端憑證。個人版 OneDrive 帳戶與 Microsoft 365 商務版 OneDrive 皆適用此流程。

Hetzner Storage Box 則透過 SFTP 連線。在「New Remote」對話框中選擇 **SFTP**，然後輸入您的 Storage Box 主機名稱（格式為 `u{number}.your-storagebox.de`）、使用者名稱，以及密碼或 SSH 私密金鑰的路徑。Hetzner 同時支援密碼與金鑰驗證——管理多個備份目的地的團隊通常偏好使用 SSH 金鑰，以便在無人值守的自動化情境下運作，而不需儲存明文密碼。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Hetzner Storage Box as remotes in RcloneView" class="img-large img-center" />

當兩個遠端都出現在 RcloneView 的檔案總管分頁後，請分別瀏覽兩側以確認連線正常，再建立您的同步工作。

## 建立 OneDrive 至 Hetzner 的同步工作

兩個遠端都準備就緒後，從 Home 分頁開啟 **Job Manager** 並點選 **Add Job**。在 4 步驟精靈中，設定您的 OneDrive 來源資料夾——可以是整個 OneDrive 根目錄，也可以是特定子資料夾，例如 `Documents/Contracts` 或某個共用的 Teams 資料夾。接著將 Hetzner Storage Box 路徑設為目的地。

在「Advanced Settings」步驟中，依您的網路連線速度調整並行傳輸數量，並針對重要資料啟用校驗碼驗證。舉例來說，一家法律事務所要將 30GB 的案件檔案備份至 Hetzner 時，可依賴校驗碼模式來確認每份文件都完整送達——藉此偵測傳輸過程中可能發生的任何毀損。「Filtering」步驟則可讓您排除暫存的 Office 鎖定檔案（`.tmp`、`.lock`），或將工作限定為特定文件類型，例如 PDF 與試算表。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Hetzner Storage Box sync job configuration in RcloneView" class="img-large img-center" />

建議先執行一次模擬測試（dry-run）——RcloneView 會準確顯示哪些檔案將被複製或移除，而不會實際進行任何變更。確認預覽結果無誤後，即可執行該工作。畫面底部的 **Transferring** 分頁會即時顯示傳輸進度、傳輸速度與檔案數量。

## 排程與監控自動化備份

擁有 RcloneView PLUS 授權後，您可以依 crontab 排程自動執行 OneDrive 至 Hetzner 的備份。將每日同步時間設定為凌晨 03:00，即可確保您的 OneDrive 檔案每晚都會自動備份至 Hetzner，無需手動介入。精靈中的排程模擬器會預覽下一次的執行時間，方便您在儲存工作前先確認排程模式是否正確。

工作歷史記錄會保留完整的稽核日誌——每次執行都會記錄開始時間、耗時、傳輸速度、檔案數量與結果。若備份因暫時性網路問題而失敗，RcloneView 可設定的重試機制會自動再次嘗試執行該工作。搭配工作完成通知功能（PLUS 版提供），您的團隊便能在下一個工作日開始前，及時收到任何失敗警示——確保不會有任何備份時段被悄悄遺漏。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling daily OneDrive to Hetzner Storage Box sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 Remote 分頁 → **New Remote** → OneDrive，將 **OneDrive** 新增為 OAuth 遠端。
3. 使用您的主機名稱與憑證，將 **Hetzner Storage Box** 新增為 SFTP 遠端。
4. 在 **Job Manager** 中建立同步工作，以 OneDrive 為來源、Hetzner 路徑為目的地。

將 OneDrive 備份至 Hetzner Storage Box，能為您提供一套成本低廉、於歐洲代管且可自動執行的安全防護網——確保即使雲端服務發生意外中斷，您的 Microsoft 檔案依然受到保護。

---

**相關指南：**

- [使用 RcloneView 管理 Hetzner Storage Box 同步](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [管理 OneDrive 儲存空間 — 使用 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Dropbox 同步至 Hetzner Storage Box](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)

<CloudSupportGrid />
