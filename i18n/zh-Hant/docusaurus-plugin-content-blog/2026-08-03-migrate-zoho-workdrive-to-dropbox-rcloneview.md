---
slug: migrate-zoho-workdrive-to-dropbox-rcloneview
title: "將 Zoho WorkDrive 遷移到 Dropbox — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用 RcloneView 將檔案從 Zoho WorkDrive 移動到 Dropbox——在傳輸前比較資料夾,並確認每個檔案都完整送達。"
keywords:
  - 將 zoho workdrive 遷移到 dropbox
  - zoho workdrive 遷移
  - zoho workdrive 到 dropbox 傳輸
  - 雲端間遷移工具
  - rcloneview zoho workdrive
  - dropbox 遷移工具
  - 跨雲端檔案傳輸
  - zoho workdrive 備份
  - 企業雲端遷移
  - 在雲端之間移動檔案
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

> 不必先將所有內容下載到本機磁碟,即可將團隊的檔案從 Zoho WorkDrive 移動到 Dropbox。

切換協作平台通常代表必須有人把多年累積的共用資料夾從舊系統搬到新系統。透過瀏覽器完成這項工作——從 Zoho WorkDrive 下載,再重新上傳到 Dropbox——過程緩慢,佔用本機磁碟空間,而且很難確認過程中沒有遺漏任何內容。RcloneView 直接連接這兩項服務,進行雲端對雲端的傳輸,因此只要供應商支援,檔案就會在伺服器端移動,而不會經過你機器上的儲存空間。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Zoho WorkDrive 與 Dropbox

在開始遷移之前,先將兩項服務都新增為遠端。由於 Zoho 在多個資料中心地區託管資料,設定 Zoho WorkDrive 時需要選擇你的帳戶地區。Dropbox 透過標準的 OAuth 瀏覽器登入進行連接——點擊 Authorize,登入後,RcloneView 會自動取得存取權限。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Zoho WorkDrive 與 Dropbox 作為遠端" class="img-large img-center" />

與僅支援掛載的工具不同,RcloneView 在 FREE 授權下也提供同步與資料夾比較功能,因此兩個遠端不僅能用於一般瀏覽,還能支援完整的遷移工作流程。

## 在搬移任何內容之前先比較資料夾

在傳輸之前,開啟 **Compare**,指向你要遷移的 Zoho WorkDrive 資料夾,以及一個空的(或部分已填入)Dropbox 目的地。比較畫面會將僅存在於一側的檔案與已經相符的檔案區分開來,如果你正在繼續先前開始的遷移,或是在部分失敗後重新執行,這一點特別實用。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中比較 Zoho WorkDrive 資料夾與 Dropbox 目的地" class="img-large img-center" />

## 執行並驗證傳輸

若是一次性搬移,設定一個以 Zoho WorkDrive 為來源、Dropbox 為目的地的 Copy 工作,套用你需要的任何篩選條件(例如排除已刪除的檔案或特定資料夾),然後先執行 **Dry Run**,準確查看將要傳輸的內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="設定從 Zoho WorkDrive 到 Dropbox 的複製工作" class="img-large img-center" />

在同步設定中啟用總和檢查碼比較,讓 RcloneView 透過雜湊值而不只是大小來驗證檔案完整性,然後在傳輸後查看 **Job History**,確認準確傳輸了哪些內容、花了多久時間,以及是否有檔案發生錯誤。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增你的 Zoho WorkDrive 帳戶,並選擇正確的地區。
3. 透過瀏覽器式的 OAuth 登入連接 Dropbox。
4. 比較來源與目的地,然後執行經總和檢查碼驗證的 Copy 工作以完成遷移。

在 Job History 中確認傳輸完成後,你的團隊就能放心在 Dropbox 中開始協作,確信沒有任何內容遺留在 WorkDrive 中。

---

**相關指南:**

- [使用 RcloneView 管理 Zoho WorkDrive](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [使用 RcloneView 將 Zoho WorkDrive 同步到 OneDrive](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [使用 RcloneView 將 Dropbox 遷移到 OneDrive](https://rcloneview.com/support/blog/migrate-dropbox-to-onedrive-rcloneview)

<CloudSupportGrid />
