---
slug: migrate-pikpak-to-google-drive-rcloneview
title: "將 PikPak 遷移至 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 的雲端對雲端傳輸功能，逐步將檔案從 PikPak 遷移至 Google Drive 的完整指南 — 設定兩個遠端，無需下載至本機即可傳輸。"
keywords:
  - PikPak to Google Drive
  - PikPak migration
  - RcloneView PikPak
  - cloud-to-cloud transfer
  - PikPak export
  - Google Drive import
  - rclone PikPak
  - cloud file migration
tags:
  - RcloneView
  - pikpak
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 PikPak 遷移至 Google Drive — 使用 RcloneView 傳輸檔案

> 想將檔案從 PikPak 搬移到 Google Drive 的使用者，可以透過 RcloneView 完全在雲端完成 — 不需要先將所有內容下載到本機電腦。

PikPak 是一款廣受亞洲地區使用者歡迎的雲端儲存與離線下載服務，以能夠將 BT 種子與磁力連結直接保存至雲端而著稱。當使用者想要遷移出 PikPak，或只是想在 Google Drive 上保留一份 PikPak 檔案的備份時，RcloneView 提供了最乾淨的方式：直接在兩個服務商之間進行雲端對雲端傳輸，無需經過本機硬碟。RcloneView 內建 rclone 執行檔，因此無需另外安裝任何工具。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定你的 PikPak 遠端

在 RcloneView 中點選 **New Remote**，並從供應商清單中選擇 **PikPak**。輸入你的 PikPak **使用者名稱**（電子郵件地址）與**密碼**。RcloneView 會透過 PikPak API 進行驗證並連接至你的帳號。儲存後，你的 PikPak 遠端會出現在雙窗格檔案總管中，讓你可以像瀏覽本機檔案系統一樣瀏覽你的檔案與資料夾。

在開始遷移之前，花幾分鐘瀏覽你的 PikPak 資料夾結構，了解你的內容是如何組織的。留意任何較大的資料夾或層級較深的結構，這些內容或許適合拆分成多個獨立的傳輸工作，而不是一次進行大量批次傳輸。

<img src="/support/images/en/blog/new-remote.png" alt="Adding PikPak as a remote in RcloneView" class="img-large img-center" />

## 新增 Google Drive

再次點選 **New Remote**，並選擇 **Google Drive**。RcloneView 會開啟瀏覽器分頁進行 Google OAuth 授權 — 使用你的 Google 帳號登入，並授予所要求的權限。OAuth 流程完成後，Google Drive 遠端便會與你的 PikPak 遠端一同出現在檔案總管中。

在開始傳輸之前，建議在 Google Drive 中建立一個專用的遷移目標資料夾 — 例如 `PikPak Import/`。這樣可以讓遷移後的內容保持整齊有序，也方便透過比較 PikPak 與 Google Drive 之間的資料夾大小，來確認傳輸是否完整。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="PikPak and Google Drive open side by side for migration in RcloneView" class="img-large img-center" />

## 執行雲端對雲端傳輸

在雙窗格檢視中同時開啟兩個遠端後，若是小規模遷移，你可以直接將資料夾從 PikPak 拖曳至 Google Drive。若是較大規模的遷移，使用 **Job Wizard** 會更為可靠。將 PikPak 設定為來源，將你的 Google Drive 目標資料夾設定為目的地，並選擇 **Copy** 模式（複製檔案而不刪除 PikPak 上的任何內容）。

務必先執行一次**試跑（dry run）**。PikPak 帳號中可能累積了大量透過離線下載得來的檔案，試跑可以讓你在正式執行前清楚了解傳輸的資料量。確認無誤後，再執行正式工作。RcloneView 的 **Job Manager** 會即時顯示進度，包括目前傳輸中的檔案名稱與傳輸數量。完成後請至 **Job History** 檢查，確認所有檔案都已成功傳輸。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a PikPak to Google Drive migration job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 點選 **New Remote** > **PikPak**，輸入你的 PikPak 使用者名稱與密碼。
3. 點選 **New Remote** > **Google Drive**，並完成 OAuth 授權。
4. 在 Google Drive 中建立 `PikPak Import/` 資料夾，作為你的遷移目標。
5. 使用 **Job Wizard** 建立複製工作，先執行試跑，再執行完整遷移。

透過 RcloneView 將檔案從 PikPak 遷移至 Google Drive 是一個流暢的流程，即使面對龐大的雲端資料庫也能可靠處理，且無需佔用本機儲存空間。

---

**相關指南：**

- [使用 RcloneView 管理 PikPak 雲端下載](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)
- [管理 Google Drive — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 進行雲端對雲端遷移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
