---
slug: migrate-google-drive-to-mega-rcloneview
title: "將 Google Drive 遷移到 Mega — 使用 RcloneView 傳輸檔案"
authors:
  - morgan
description: "使用 RcloneView 將 Google Drive 遷移到 Mega:雲端對雲端複製、試運行預覽、篩選器與驗證都在單一 GUI 中完成,無需手動下載。"
keywords:
  - 遷移 Google Drive 到 Mega
  - Google Drive 到 Mega 傳輸
  - 將檔案移至 Mega
  - RcloneView
  - 雲端對雲端傳輸
  - Mega 雲端儲存
  - Google Drive 遷移
  - rclone GUI
  - 雲端遷移工具
tags:
  - RcloneView
  - google-drive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 遷移到 Mega — 使用 RcloneView 傳輸檔案

> 無需手動下載再重新上傳,即可將整個 Google Drive 資料庫遷移到 Mega。

從 Google Drive 切換到 Mega 通常意味著匯出壓縮檔、等待下載,然後再次上傳。RcloneView 將兩個服務都連接為遠端,並在雙窗格視窗中互相複製,在任何檔案移動之前還能透過試運行預覽結果。RcloneView 在單一視窗中掛載並同步 90 多個供應商,支援 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

Google Drive 使用 OAuth:RcloneView 會開啟瀏覽器,您登入後遠端會自動建立。Mega 使用電子郵件和密碼,直接在「新增遠端」對話方塊中輸入。兩個遠端出現在 Remote Manager 後,即可在兩個檔案總管面板中並排開啟。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Google Drive 與 Mega 遠端" class="img-large img-center" />

設想一位自由工作者,在 Drive 中分散存放著 300 GB 的專案資料夾。在相鄰面板中瀏覽兩個帳戶,可以在開始前確認來源資料夾與目的地配置。

## 雲端之間複製

將資料夾從 Google Drive 面板拖曳到 Mega 面板。在不同遠端之間拖曳會執行複製,因此在您決定之前,Drive 中的資料保持不變。對於較大的任務,可在 Job Manager 中建立 Copy 工作,以便監控進度並保存歷史記錄。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 Google Drive 到 Mega 的雲端對雲端傳輸" class="img-large img-center" />

如果不想在傳輸中包含 Google Docs 檔案,可在篩選步驟中使用預先定義的「Google Docs」篩選器將其排除。您也可以限制檔案大小或時間,只遷移相關資料。

## 預覽並監控工作

先執行試運行。它會列出將被複製的檔案,讓您在浪費數小時之前發現錯誤的來源資料夾。接著啟動工作,在 Transferring 分頁中查看速度、檔案數量與進度。如果長時間執行出現問題,可在 Advanced Settings 中調整並行檔案傳輸數量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中監控傳輸進度" class="img-large img-center" />

## 驗證結果

工作完成後,在 Drive 與 Mega 資料夾上開啟 Folder Compare。它會醒目標示僅左側、僅右側與不同的檔案,遺漏的項目可直接在比較檢視中複製。Job History 會保存每次執行的狀態、時間長度與大小。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Google Drive 與 Mega 之間的 Folder Compare" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView:** [rcloneview.com](https://rcloneview.com/src/download.html) 取得。
2. 在「新增遠端」中新增 Google Drive(OAuth)與 Mega(電子郵件和密碼)。
3. 在兩個面板中開啟兩個遠端,並對測試資料夾執行試運行。
4. 為整個資料庫建立 Copy 工作,然後使用 Folder Compare 進行驗證。

視覺化、無需腳本的遷移會讓您的 Drive 保持完整,直到您確認 Mega 已包含所有內容。

---

**相關指南:**

- [將 Mega 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-mega-to-google-drive-onedrive-rcloneview)
- [管理 Mega 雲端儲存](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [試運行:傳輸前預覽同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
