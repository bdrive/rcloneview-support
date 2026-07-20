---
slug: manage-1fichier-cloud-sync-rcloneview
title: "管理 1Fichier 雲端儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - steve
description: "將 1Fichier 連接到 RcloneView，享受圖形化檔案管理、自動化備份與跨雲端傳輸。無需命令列工具即可管理您的 1Fichier 資料庫。"
keywords:
  - 1Fichier RcloneView sync
  - manage 1Fichier files GUI
  - 1Fichier cloud backup
  - 1Fichier file transfer RcloneView
  - 1Fichier to Google Drive
  - rclone 1Fichier GUI
  - 1Fichier storage management
  - 1Fichier backup tool
tags:
  - RcloneView
  - 1fichier
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 1Fichier 雲端儲存 — 使用 RcloneView 同步與備份檔案

> 將您的 1Fichier 帳戶連接到 RcloneView，即可管理檔案、建立自動化備份，並將資料傳輸到其他雲端供應商 — 全程無需使用命令列。

1Fichier 是一項法國的雲端儲存與檔案代管服務，以其慷慨的儲存空間與檔案分享功能而廣受歡迎。雖然 1Fichier 的網頁介面可以處理瀏覽與手動下載，但需要搬移大型資料庫、建立自動化備份，或將 1Fichier 整合進多雲端工作流程的使用者，則需要更強大的工具。RcloneView 的 1Fichier 後端透過簡潔的圖形介面滿足這一切需求。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 1Fichier 連接到 RcloneView

在 RcloneView 中，開啟 **Remote tab → New Remote**，並從供應商清單中選擇 1Fichier。驗證需要您的 1Fichier API 金鑰，您可以在 1Fichier 帳戶設定的 API 區塊中產生此金鑰。將 API 金鑰貼到 RcloneView 的設定對話方塊中並儲存，遠端即可立即使用。

您的 1Fichier 資料夾與檔案會出現在檔案總管面板中,可透過資料夾樹狀結構瀏覽,並支援檔案清單排序。任何資料夾的總數量與大小,都可以透過右鍵選單 → **Get Size** 取得,這對於在規劃遷移或備份工作前，稽核資料量非常有用。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting 1Fichier to RcloneView as a new remote" class="img-large img-center" />

## 下載與整理 1Fichier 內容

對於在 1Fichier 上儲存大量檔案並希望搬移到更方便存取的供應商（例如 Google Drive、OneDrive 或本地 NAS）的使用者來說,RcloneView 的跨雲端 Copy 工作是合適的工具。在一個面板中開啟 1Fichier,在另一個面板中開啟目標位置,然後在 Job Manager 中建立 Copy 工作。設定合適的傳輸並行數 — 1Fichier 對免費帳戶施加下載速率限制,因此付費帳戶會有更快的傳輸速度。

依檔案類型或資料夾名稱篩選工作,可以選擇性地遷移內容。例如,從混合內容的資料庫中僅擷取影片檔案,或複製特定的資料夾結構,同時保留其餘部分不變。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from 1Fichier to another cloud in RcloneView" class="img-large img-center" />

## 將檔案備份到 1Fichier

1Fichier 的檔案代管功能使其成為一個可行的次要備份目標,特別適合想要在歐洲保留封存副本的使用者。以 Google Drive、Dropbox 或本地資料夾作為來源,以您的 1Fichier 帳戶作為目標,建立 Sync 或 Copy 工作。Job Manager 會在傳輸失敗時自動重試,這一點很重要,因為檔案代管服務的 API 回應時間可能不穩定。

在 **Transferring tab** 中監控傳輸進度,並查看 **Job History** 以取得完整的稽核記錄,了解何時備份了哪些內容。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring 1Fichier backup transfer progress in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在您的 1Fichier 帳戶設定中產生 API 金鑰。
3. 在 **Remote tab → New Remote** 中新增 1Fichier 作為遠端。
4. 建立 Copy 或 Sync 工作,以搬移或備份您的 1Fichier 資料。

RcloneView 讓 1Fichier 成為您雲端儲存工具箱中可輕鬆管理的一部分,並提供與其他任何供應商相同的拖放操作介面。

---

**相關指南：**

- [使用 RcloneView 下載與整理 1Fichier 儲存空間](https://rcloneview.com/support/blog/download-organize-1fichier-cloud-storage-rcloneview)
- [使用 RcloneView 進行雲端到雲端遷移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [使用 RcloneView 管理多個雲端帳戶](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
