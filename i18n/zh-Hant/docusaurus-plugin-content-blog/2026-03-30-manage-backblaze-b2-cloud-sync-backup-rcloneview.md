---
slug: manage-backblaze-b2-cloud-sync-backup-rcloneview
title: "管理 Backblaze B2 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "了解如何使用 RcloneView 管理 Backblaze B2 雲端儲存。輕鬆在 B2 儲存桶與其他雲端服務之間同步、備份與傳輸檔案。"
keywords:
  - backblaze b2 sync
  - backblaze b2 backup
  - rcloneview backblaze
  - b2 cloud storage manager
  - backblaze b2 file transfer
  - b2 bucket management
  - s3 compatible backup
  - backblaze b2 rclone gui
  - cloud to cloud sync b2
  - b2 lifecycle rules
tags:
  - backblaze-b2
  - Backblaze
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Backblaze B2 儲存空間 — 使用 RcloneView 同步與備份檔案

> Backblaze B2 以遠低於 AWS S3 的成本提供企業級物件儲存，而 RcloneView 讓管理它變得毫不費力。

對於需要價格實惠、可靠的雲端儲存,又不想面對傳統 S3 服務複雜度的團隊與個人來說,Backblaze B2 已成為首選。儲存費用為每 GB/月 $0.006,傳出流量為每 GB $0.01(在 Cloudflare 頻寬聯盟下,每日前 10 GB 免費),B2 的價格明顯低於大多數競爭對手。RcloneView 提供完整的圖形介面來管理你的 B2 儲存桶 — 瀏覽檔案、排程備份、執行同步,並在不使用命令列的情況下與其他雲端服務互相傳輸資料。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Backblaze B2

在 RcloneView 中設定 Backblaze B2 不到一分鐘即可完成。開啟遠端管理員,選擇 **Backblaze B2** 作為提供者,然後輸入你的 Application Key ID 與 Application Key。你可以使用主金鑰,也可以使用限定於單一儲存桶的應用程式專用金鑰。強烈建議在正式環境的工作流程中使用應用程式專用金鑰,因為它遵循最小權限原則 — 即使金鑰外洩,也只有一個儲存桶會受到影響。

連接完成後,RcloneView 會在雙窗格檔案總管中列出所有可存取的儲存桶。你可以瀏覽目錄、預覽檔案,並檢查中繼資料,例如檔案大小、修改時間,以及 B2 在伺服端計算的 SHA-1 校驗碼。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote in RcloneView Remote Manager" class="img-large img-center" />

## 使用 B2 同步與傳輸檔案

RcloneView 支援在 Backblaze B2 與任何其他已設定的遠端之間執行**同步**、**複製**與**移動**操作 — 包括本機磁碟、Google Drive、Dropbox、AWS S3 與 Wasabi。雙窗格檔案總管讓你可以直接拖放檔案,而工作系統會自動處理排隊與重試邏輯。

對於大型遷移作業,透過 Cloudflare 或 Fastly CDN 合作夥伴關係提供的 B2 免費傳出流量,意味著你可以將資料移出 B2,而不會產生高昂的頻寬費用。RcloneView 內建的頻寬節流與多執行緒傳輸,讓你可以在需要速度時充分利用連線頻寬,或在上班時間降低使用量。

在同步資料夾時,RcloneView 預設會比對校驗碼。B2 會為每個檔案儲存 SHA-1 雜湊值,而 RcloneView 會利用它們跳過未變更的檔案 — 同時節省時間與 API 呼叫次數。這一點格外重要,因為 B2 每 10,000 次 Class B(下載)交易會收取 $0.004 的費用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Backblaze B2 and another cloud in RcloneView" class="img-large img-center" />

## 排程自動備份至 B2

B2 最強大的用途之一就是作為備份目標。RcloneView 的工作排程器讓你可以定義週期性的備份工作 — 每日、每週,或依自訂的 cron 排程執行。將本機資料夾或其他雲端遠端設為來源,B2 設為目的地,其餘交給排程器處理即可。

B2 的生命週期規則能與此工作流程完美搭配。你可以設定儲存桶在一段時間後自動隱藏檔案,或永久刪除舊版本,讓儲存成本保持可預測。RcloneView 的工作歷史面板提供每次傳輸的清楚稽核記錄,包括檔案數量、傳輸位元組數、錯誤與經過時間。

對於受合規要求約束的團隊,將 RcloneView 的排程同步與 B2 的物件鎖定(Object Lock)功能結合使用,可以在保留期間內提供無法修改或刪除的不可變備份。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an automated backup job to Backblaze B2" class="img-large img-center" />

## 將 B2 掛載為本機磁碟

RcloneView 的掛載功能讓你可以將 B2 儲存桶對應為 Windows 上的本機磁碟機代號,或是 macOS 與 Linux 上的掛載點。這對於需要本機檔案存取的應用程式很有用 — 例如媒體播放器、相片編輯器,或是處理目錄中檔案的指令碼。VFS 快取層會處理預讀緩衝,因此即使在中等網路連線下,循序讀取的效能依然良好。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Backblaze B2 bucket as a local drive in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在你的 Backblaze B2 控制台中產生一組 Application Key,並在 RcloneView 中將其新增為新遠端。
3. 在雙窗格檔案總管中瀏覽你的儲存桶,拖曳檔案以進行同步或傳輸。
4. 建立排程工作,自動化每晚備份至 B2。

Backblaze B2 提供了讓雲端備份得以規模化實現的儲存經濟效益,而 RcloneView 則消除了命令列的門檻,讓你的整個團隊都能輕鬆管理它。

---

**相關指南:**

- [使用 RcloneView 將 Backblaze B2 遷移至 AWS S3](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [使用 RcloneView 將 Google Drive 同步至 Backblaze B2](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [將 Dropbox 備份至 Backblaze B2 — 使用 RcloneView 打造實惠儲存方案](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
