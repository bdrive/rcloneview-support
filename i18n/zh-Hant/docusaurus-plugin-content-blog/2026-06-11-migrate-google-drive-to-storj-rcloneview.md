---
slug: migrate-google-drive-to-storj-rcloneview
title: "將 Google Drive 遷移至 Storj — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "了解如何使用 RcloneView 將 Google Drive 檔案遷移至 Storj 去中心化儲存空間 — 這是一份雲端對雲端傳輸的逐步指南。"
keywords:
  - migrate Google Drive to Storj
  - Google Drive to Storj migration
  - Storj decentralized cloud storage
  - RcloneView cloud migration
  - move files from Google Drive to Storj
  - cloud-to-cloud transfer RcloneView
  - Storj S3-compatible GUI
  - Google Drive migration tool
  - decentralized cloud backup RcloneView
tags:
  - RcloneView
  - google-drive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 遷移至 Storj — 使用 RcloneView 傳輸檔案

> 不需要輸入任何指令，即可將整個 Google Drive 遷移至 Storj 的去中心化、端對端加密儲存空間。

在 Google Drive 中儲存敏感專案檔案的團隊，往往會走到一個階段：希望擁有更強的資料主權、更低的傳出流量成本，或是為自己的工具鏈提供 S3 相容存取方式。Storj 將檔案區塊分散儲存於全球各地的獨立節點，從設計上就提供端對端加密與地理位置備援。RcloneView 讓這項遷移變得簡單直接：透過瀏覽器驗證設定連接兩個遠端，然後執行複製工作，透過你的本機將檔案從 Google Drive 傳輸至 Storj。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Google Drive 與 Storj 設定為遠端

在開始傳輸之前，兩個雲端帳戶都需要在 RcloneView 中註冊為遠端。Google Drive 使用 OAuth 瀏覽器驗證 — 開啟「Remote」分頁，點擊 **New Remote**，選擇 Google Drive，RcloneView 會為你開啟瀏覽器視窗以授權連線。無需手動管理任何 API 金鑰或憑證。

Storj 使用 S3 相容存取方式。在 RcloneView 的 New Remote 精靈中，選擇 **S3** 提供者類型，並選擇 Storj 作為 S3 提供者。輸入你的 Storj Access Key ID、Secret Access Key，以及 Storj S3 閘道端點。儲存後，該遠端會出現在檔案總管面板中，讓你以熟悉的檔案瀏覽介面檢視 Storj 儲存桶。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Storj as remotes in RcloneView" class="img-large img-center" />

註冊好兩個遠端後，你可以在 RcloneView 的雙面板檔案總管中並排開啟它們。將資料夾從左側面板（Google Drive）拖曳至右側面板（Storj）即可快速執行一次性複製，或設定一個受管理的工作以進行更大規模的遷移。

## 設定遷移工作

若要遷移整個 Google Drive — 例如擁有 300 GB 素材的設計工作室，或累積多年共享文件的研究團隊 — 使用「Job」是正確的做法。在「Home」分頁中點擊 **Job Manager**，然後點擊 **Add Job**。將來源設為你的 Google Drive 遠端與資料夾，目的地設為你的 Storj 儲存桶。選擇 **Copy** 作為工作類型，以傳輸所有來源檔案，同時不會刪除 Google Drive 上的原始檔案。

在第 2 步（Advanced Settings）中，根據你的連線狀況設定同時傳輸檔案的數量。預設的多執行緒傳輸數量 4 適用於大多數的網路連線。啟用 **checksum** 驗證以確保檔案完整性 — RcloneView 會在每次傳輸後比對校驗碼，捕捉傳輸過程中可能發生的任何損毀。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Google Drive to Storj copy job in RcloneView" class="img-large img-center" />

第 3 步可讓你新增篩選規則，如果你只想遷移特定類型的檔案 — 例如排除 `.tmp` 工作檔案，或將傳輸限制在特定期限內建立的檔案。當你要遷移一個仍在使用中的工作空間，而某些暫存檔案不應一併轉移至新的儲存供應商時，這項功能特別實用。

## 監控並驗證傳輸

點擊 **Run** 後，RcloneView 底部的「Transferring」分頁會顯示即時進度：傳輸速度、檔案數量以及已移動的總大小。對於大型遷移，即使你切換到其他遠端，RcloneView 仍會在背景繼續執行該工作 — 若傳輸中斷，在第 2 步中設定重試次數可確保工作從中斷處繼續進行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Google Drive to Storj migration job in RcloneView" class="img-large img-center" />

工作完成後，使用 RcloneView 的 **Folder Compare** 功能（「Home」分頁 > Compare）驗證雙方是否一致。將左側面板指向你的 Google Drive 來源，右側面板指向你的 Storj 目的地。Folder Compare 會找出僅存在於單側，或大小不同的任何檔案，在你開始關閉 Google Drive 工作空間之前，提供清楚的稽核軌跡。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Drive to Storj migration" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Remote tab > New Remote** 新增你的 Google Drive 遠端，並完成 OAuth 瀏覽器登入。
3. 使用 S3 提供者類型，並輸入你的 Storj Access Key、Secret Key 與閘道端點，新增你的 Storj 遠端。
4. 開啟 **Job Manager**，建立一個從你的 Google Drive 資料夾到 Storj 儲存桶的 Copy 工作，在第 2 步啟用 checksum，然後點擊 Run。

Storj 的架構預設就為你的檔案提供地理位置分散與端對端加密 — RcloneView 讓你在幾分鐘內就能達成這個目標，而不需要花費數小時撰寫指令碼。

---

**相關指南：**

- [使用 RcloneView 將 Dropbox 遷移至 Storj](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [使用 RcloneView 將 OneDrive 遷移至 Storj](https://rcloneview.com/support/blog/migrate-onedrive-to-storj-rcloneview)
- [管理 Storj 雲端儲存 — 使用 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
