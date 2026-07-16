---
slug: manage-premiumize-me-cloud-sync-backup-rcloneview
title: "管理 Premiumize.me 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "透過 OAuth 瀏覽器登入，將 Premiumize.me 連接至 RcloneView，並將儲存的檔案同步至任何其他雲端供應商，以便備份與長期管理。"
keywords:
  - premiumize.me RcloneView
  - premiumize 雲端同步
  - premiumize 備份
  - 管理 premiumize 檔案
  - premiumize rclone GUI
  - premiumize 媒體儲存
  - premiumize 雲端傳輸
  - premiumize 檔案管理
tags:
  - media
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Premiumize.me 儲存空間 — 使用 RcloneView 同步與備份檔案

> Premiumize.me 結合了高階檔案託管與個人雲端儲存 — RcloneView 讓你可以透過簡潔的 GUI 管理並備份這些內容。

Premiumize.me 最為人熟知的是其高階連結產生器與雲端下載服務，但它同時也提供個人雲端儲存空間，用來存放你抓取的內容。如果你用它來儲存媒體檔案、下載內容或專案檔案，遲早會需要一種方式將這些檔案搬移 — 移至另一個雲端進行封存，或移至本機儲存以便離線存取。RcloneView 透過 OAuth 瀏覽器登入連接 Premiumize.me，設定只需不到一分鐘。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 透過 OAuth 連接 Premiumize.me

啟動 RcloneView 並開啟 **Remote Manager**（遠端管理員）。點擊 **New Remote**（新增遠端），在供應商清單中找到 **Premiumize**。選取後，RcloneView 會開啟你的預設瀏覽器，並將你重新導向至 Premiumize.me 的 OAuth 授權頁面。登入並授予存取權限 — RcloneView 會將權杖儲存在本機，因此除非你撤銷存取權限，否則不需要重新授權。

授權完成後，該遠端會出現在你的 Remote Manager 清單中。雙擊即可在 File Explorer（檔案總管）中開啟。你的 Premiumize.me 檔案樹會載入所有透過該服務累積的資料夾與檔案。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Premiumize.me remote in RcloneView" class="img-large img-center" />

## 瀏覽你的 Premiumize.me 資料庫

RcloneView 的 File Explorer 提供熟悉的雙面板版面配置。在一側瀏覽你的 Premiumize.me 儲存空間，在另一側則是任何其他已設定的遠端 — Google Drive、Backblaze B2 或本機資料夾。你可以選取多個檔案，右鍵點擊以複製或移動，並在傳輸面板中追蹤進度。

對於媒體檔案較多的資料庫，**Thumbnail View**（縮圖檢視）模式會以格狀顯示圖片預覽，這在你的 Premiumize.me 儲存空間中含有照片或影片縮圖、且想在傳輸前以視覺方式辨識時特別有用。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing and transferring Premiumize.me files in RcloneView" class="img-large img-center" />

## 將 Premiumize.me 同步至其他雲端

手動瀏覽檔案適用於偶爾的搬移，但若要定期備份，**Job**（工作）系統才是正確的工具。前往 **Jobs**，點擊 **New Job**（新增工作），並將 Premiumize.me 設為來源。選擇任何目的地遠端 — 若要長期封存媒體檔案，Backblaze B2 是具成本效益的選擇，而若你想從行動裝置存取檔案，Google Drive 則表現良好。

在工作精靈的第二步驟中，你可以設定 **transfer options**（傳輸選項）：設定同時傳輸的數量、啟用或停用校驗碼，並開啟 **Dry Run**（模擬執行）以在任何檔案移動前預覽將複製的內容。如果你的 Premiumize.me 儲存空間是隨時間逐漸累積而成、你不確定其確切結構，這項功能會特別有用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring and running a Premiumize.me backup job" class="img-large img-center" />

## 監控與工作歷史記錄

工作執行後，RcloneView 會將結果記錄在 **Job History**（工作歷史記錄）中。每筆記錄會顯示開始時間、持續時間、已傳輸的檔案數量、移動的總資料量，以及任何錯誤。這提供了每次同步操作的稽核軌跡，若你正在多個工作階段中系統性地遷移龐大的 Premiumize.me 資料庫，這一點格外重要。

如果傳輸因網路問題或 Premiumize.me API 的速率限制而中途失敗，你可以直接從 Job History 重新執行同一個工作，無需重新設定。RcloneView 會略過已成功傳輸的檔案，因此中斷的同步作業會從中斷處繼續進行。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Premiumize.me sync results" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 **Remote Manager**，點擊 **New Remote**，並選取 **Premiumize**。
3. 完成 OAuth 瀏覽器登入以授權你的帳戶。
4. 建立一個同步工作，將 Premiumize.me 設為來源，並將你選擇的雲端設為目的地。

有了 RcloneView，你的 Premiumize.me 檔案不再被鎖定在單一服務中 — 依你自己的排程進行備份、封存或遷移。

---

**相關指南：**

- [管理 Put.io 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [使用 RcloneView 進行雲端對雲端遷移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [工作歷史記錄與傳輸日誌監控](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
