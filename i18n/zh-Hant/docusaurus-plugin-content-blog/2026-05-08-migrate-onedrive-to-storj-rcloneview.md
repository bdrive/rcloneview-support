---
slug: migrate-onedrive-to-storj-rcloneview
title: "將 OneDrive 遷移至 Storj — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用 RcloneView 將檔案從 Microsoft OneDrive 遷移至 Storj 去中心化雲端儲存的逐步指南 — 具備校驗碼驗證，且無需任何 CLI 知識。"
keywords:
  - OneDrive to Storj migration RcloneView
  - migrate OneDrive Storj cloud
  - OneDrive Storj file transfer
  - switch OneDrive to Storj
  - decentralized cloud migration
  - Storj backup OneDrive
  - OneDrive Storj sync
  - rclone OneDrive Storj GUI
tags:
  - RcloneView
  - onedrive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 OneDrive 遷移至 Storj — 使用 RcloneView 傳輸檔案

> 將您的 OneDrive 檔案搬移至 Storj 去中心化、端對端加密的物件儲存 — 透過 RcloneView 完成完整、經過驗證且以圖形介面操作的遷移。

對於希望減少對集中式雲端服務供應商依賴的團隊來說，Storj 提供了一個有趣的替代方案。其去中心化架構會將檔案加密並分片，分散存放於全球獨立節點網路中，在不存在單點故障的情況下提供強大的隱私保障。對於目前使用 OneDrive、並考慮轉向注重隱私的替代方案的組織而言，RcloneView 讓遷移變得輕鬆簡單 — 同時連接兩個服務供應商，並直接在兩者之間串流資料。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 OneDrive 與 Storj 連接至 RcloneView

透過 **Remote tab → New Remote** 新增 Microsoft OneDrive 作為遠端，並使用您的 Microsoft 帳號完成 OAuth 驗證。至於 Storj，您有兩種選擇：使用原生 Storj 供應商類型（輸入來自 Storj 主控台的 Access Grant），或使用相容 S3 的存取方式（Access Key + Secret Key + Storj S3 端點 `https://gateway.storjshare.io`）。對於大量批次傳輸，相容 S3 的方式通常能提供更好的效能。

在兩個遠端都設定完成後，於左側面板開啟 OneDrive、於右側面板開啟您的 Storj bucket。在開始遷移之前，請先確認兩側都能正常瀏覽檔案。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Storj as remotes in RcloneView" class="img-large img-center" />

## 執行遷移

透過 **Home tab → Sync** 開啟工作精靈。設定您的 OneDrive 來源資料夾與 Storj 目的地 bucket。在「進階設定」步驟中，啟用 **Checksum** 校驗碼驗證，以確認傳輸後每個檔案的完整性。由於 Storj 的分散式架構會將每個檔案拆分成多個區塊，並在下載時重新組合，因此校驗碼能確認此過程在兩端產生的資料完全一致。

建議先執行 **Dry Run**（模擬執行），預覽哪些檔案將被遷移，並及早發現任何路徑問題或命名衝突。OneDrive 允許檔名中出現某些特殊字元，但 Storj 的相容 S3 介面對這些字元的處理方式可能不同 — 模擬執行的輸出結果會標示出任何編碼問題。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Storj migration in progress in RcloneView" class="img-large img-center" />

## 監控與驗證傳輸

**Transferring tab** 會即時顯示傳輸進度，包括傳輸速度、檔案數量與已傳輸的位元組數。若進行大型遷移，且您的網路連線允許，建議使用 8–16 個並行檔案傳輸。

遷移完成後，請在 OneDrive 來源與 Storj 目的地之間執行 **Folder Compare**（資料夾比對），以確認每個檔案都已正確送達。並在 **Job History** 中查看最終的傳輸摘要與狀態。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of OneDrive to Storj transfer" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 OneDrive（OAuth）與 Storj（相容 S3 或原生）作為遠端。
3. 建立啟用校驗碼的同步工作，並先執行模擬執行。
4. 在 Transferring tab 監控進度，並使用 Folder Compare 進行驗證。

透過 RcloneView 將 OneDrive 遷移至 Storj，是一個乾淨、可稽核的過程，在每個階段都尊重您資料的完整性。

---

**相關指南：**

- [使用 RcloneView 管理 Storj 雲端儲存](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 OneDrive 雲端儲存](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Dropbox 遷移至 Storj](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)

<CloudSupportGrid />
