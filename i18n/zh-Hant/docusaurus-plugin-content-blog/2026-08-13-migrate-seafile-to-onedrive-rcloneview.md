---
slug: migrate-seafile-to-onedrive-rcloneview
title: "將 Seafile 遷移到 OneDrive — 使用 RcloneView 傳輸檔案"
authors:
  - casey
description: "使用 RcloneView 的雙欄瀏覽器與工作精靈,將資料庫從自架 Seafile 伺服器遷移到 Microsoft OneDrive,並透過試執行進行驗證。"
keywords:
  - Seafile 遷移
  - OneDrive
  - RcloneView
  - 從自架到雲端
  - 雲端對雲端傳輸
  - Seafile 到 OneDrive
  - Microsoft 365 遷移
  - rclone seafile onedrive
tags:
  - RcloneView
  - seafile
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Seafile 遷移到 OneDrive — 使用 RcloneView 傳輸檔案

> 淘汰自架 Seafile 伺服器轉向 Microsoft OneDrive,並不代表需要手動下載再重新上傳 — RcloneView 可以直接連接兩者,並在單一工作中將資料庫遷移過去。

超出自架 Seafile 部署規模的團隊,通常會轉向 OneDrive,以便將檔案儲存納入現有的 Microsoft 365 訂閱並減輕伺服器維護負擔。RcloneView 將 Seafile 與 OneDrive 視為同一視窗中的對等遠端,因此您可以瀏覽兩者、比較其內容,並執行受控傳輸,而無需先將資料庫匯出到本機磁碟。RcloneView 可在一個視窗中掛載並同步 90 多個服務商,並支援 Windows、macOS 和 Linux,因此無論您的 Seafile 伺服器位於地端還是私有資料中心,相同的工作流程都同樣適用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接您的 Seafile 伺服器

開啟 **New Remote** 並選擇 **Seafile**,然後輸入您的伺服器 URL、使用者名稱與密碼。如果已啟用兩步驟驗證,請在提示時輸入一次性權杖。連線完成後,RcloneView 會在檔案總管中列出您有權存取的每個資料庫(個人與共用的),資料夾樹與檔案清單與其他遠端一致。

加密資料庫需要先提供其資料庫密碼,RcloneView 才能讀取內容。在排定完整遷移之前,請先在一個較小的加密資料庫上測試存取是否正常,因為缺少密碼會顯示為空白資料夾,而不是明確的錯誤訊息。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Seafile 遠端" class="img-large img-center" />

## 新增 Microsoft OneDrive

透過 **New Remote** > **OneDrive** 新增第二個遠端。RcloneView 會開啟瀏覽器視窗進行 OAuth 登入 — 使用您的 Microsoft 帳戶進行驗證並核准所要求的權限。對於 OneDrive for Business 租用戶,同樣適用相同的 OAuth 流程,一般使用無需另外註冊應用程式。

在開始傳輸之前,於 OneDrive 中建立一個目的地資料夾,例如 `Seafile Import/`。將遷移的內容獨立存放,便於抽查結果,並避免與 OneDrive 根目錄中既有的內容混雜在一起。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中並排開啟 Seafile 與 OneDrive 遠端" class="img-large img-center" />

## 執行遷移工作

在兩個遠端都開啟的情況下,較小的資料庫可以直接拖曳傳輸 — 在兩個不同遠端之間拖放會執行複製操作,Seafile 原始內容保持不變。對於完整的伺服器遷移,請改用四步驟的 **Job Wizard**:將 Seafile 資料庫設為來源,將 OneDrive 資料夾設為目的地,然後在第 2 步驟中設定傳輸數量與相等性檢查器。

在正式傳輸之前,請務必先執行**試執行**。它會列出將要複製的所有檔案,而不會移動任何資料,是在確定傳輸之前發現來源資料夾錯誤或資料庫意外龐大的最快方法。預覽結果無誤後,啟動工作並在 Transferring 分頁中追蹤進度;**Job History** 會永久記錄移動的內容與時間。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行 Seafile 到 OneDrive 的遷移工作" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 點擊 **New Remote** > **Seafile**,輸入您的伺服器 URL 與憑證。
3. 點擊 **New Remote** > **OneDrive**,完成 OAuth 授權。
4. 執行試執行,然後執行遷移工作並在 Job History 中確認結果。

以這種方式將 Seafile 遷移到 OneDrive,可以讓每次傳輸都有據可查,讓您始終清楚知道舊伺服器上離開了什麼內容,以及它們最終前往何處。

---

**相關指南:**

- [使用 RcloneView 管理 Seafile 雲端同步與備份](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 OneDrive 雲端同步與備份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Seafile 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
