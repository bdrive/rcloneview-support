---
slug: migrate-put-io-to-google-drive-rcloneview
title: "將 Put.io 遷移到 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "使用 RcloneView 將檔案從 Put.io 遷移到 Google Drive,這是一款跨平台 GUI 工具,可傳輸、驗證並整理雲端內容。"
keywords:
  - put.io 遷移到 google drive
  - 遷移 put.io 檔案
  - putio 遷移
  - RcloneView put.io
  - 雲端到雲端傳輸
  - google drive 遷移
  - 將下載的種子移到雲端
  - rclone put.io
  - 從 put.io 傳輸到 drive
  - 雲端儲存遷移工具
tags:
  - RcloneView
  - putio
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Put.io 遷移到 Google Drive — 使用 RcloneView 傳輸檔案

> 不必在兩個獨立的網頁介面之間來回切換,用視覺化的拖放操作,把 Put.io 上儲存的所有內容都遷移到 Google Drive。

Put.io 是存放已下載種子和遠端檔案的絕佳中繼站,但它並不像 Google Drive 那樣適合長期封存或團隊共享。一旦 Put.io 上的下載完成,許多使用者仍然需要手動將檔案拉取下來,再重新上傳到別處。RcloneView 可以同時連線這兩項服務,讓你直接在雲端與雲端之間複製或移動內容,而不必先經過本機磁碟中轉。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 並排連接 Put.io 與 Google Drive

RcloneView 的 Explorer 最多可同時支援四個面板,因此你可以在一個面板中開啟 Put.io 帳戶,在另一個面板中開啟 Google Drive,並排檢視。Put.io 和 Google Drive 的新增方式完全相同 —— 都是透過瀏覽器的 OAuth 登入,不需要手動複製額外的 API 金鑰或存取權杖。兩個遠端都設定完成後,各自會顯示為獨立的分頁,切換也是即時的。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Put.io and Google Drive as separate remotes in RcloneView" class="img-large img-center" />

同時開啟兩個面板後,你可以逐一資料夾瀏覽 Put.io 的下載內容,精確決定要遷移哪些內容,而不是盲目地全部搬過去。與僅支援掛載的工具不同,RcloneView 在 FREE 授權下也提供同步與資料夾比較功能,因此一次性傳輸除了執行所需的時間之外不會產生額外成本。

## 以工作方式執行傳輸

與其逐個拖曳檔案,不如透過 4 步驟同步精靈設定一個 Copy 或 Move 工作。選擇 Put.io 作為來源、Google Drive 資料夾作為目的地,然後在 Advanced Settings 步驟中依照你的網路狀況調整同時檔案傳輸數量。如果不確定工作範圍是否正確,先執行一次 Dry Run —— 它會列出所有將被複製的檔案而不做任何實際變更,在進行大規模媒體遷移前值得一試。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying files from Put.io to Google Drive in RcloneView" class="img-large img-center" />

對於一次性遷移,使用 One-time 執行模式,這樣就不會儲存為重複工作。如果你打算在完成遷移前持續向 Put.io 新增檔案,不妨將其儲存為工作,以便之後重新執行,只擷取新增的內容。

## 使用 Folder Compare 驗證遷移結果

傳輸完成後,開啟 Folder Compare 並排檢查兩個位置。它會標記出僅存在於一側的檔案以及大小不一致的檔案,方便你在從 Put.io 刪除任何內容之前確認遷移已經完整。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Put.io to Google Drive transfer" class="img-large img-center" />

Job History 也會保留本次傳輸的記錄 —— 檔案數量、總大小以及耗時 —— 如果你需要分多次工作階段批次遷移大型資料庫,這會很有幫助。

## 快速上手

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過瀏覽器 OAuth 登入流程新增你的 Put.io 遠端。
3. 用同樣的方式,透過瀏覽器 OAuth 登入新增你的 Google Drive 遠端。
4. 建立一個從 Put.io 到目的資料夾的 Copy 或 Move 工作,先執行 Dry Run,再正式執行。

將 Put.io 中的儲存空間清理乾淨並遷移到一個永久的 Google Drive 歸宿,可以讓你的下載內容保持整齊有序,而不必再進行第二次手動上傳。

---

**相關指南:**

- [將 OneDrive 遷移到 Google Drive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [管理 Put.io 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [將 Put.io 媒體串流並同步到 NAS 或雲端 — RcloneView](https://rcloneview.com/support/blog/stream-sync-putio-media-nas-cloud-rcloneview)

<CloudSupportGrid />
