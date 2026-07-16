---
slug: migrate-dropbox-to-storj-rcloneview
title: "將 Dropbox 遷移至 Storj — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 Dropbox 遷移至去中心化雲端儲存 Storj — 不佔用本機硬碟空間即可進行雲對雲傳輸，並以資料夾比對功能驗證結果。"
keywords:
  - Dropbox to Storj migration
  - Storj decentralized cloud
  - Dropbox migration tool
  - RcloneView Dropbox
  - Storj backup
  - cloud migration GUI
  - decentralized storage transfer
  - cloud-to-cloud migration
  - Storj rclone
  - Dropbox alternatives
tags:
  - RcloneView
  - dropbox
  - storj
  - cloud-to-cloud
  - migration
  - decentralized-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Dropbox 遷移至 Storj — 使用 RcloneView 傳輸檔案

> Storj 提供具備端對端加密與優異耐用性的去中心化雲端儲存服務 — RcloneView 可將您的 Dropbox 內容直接遷移至 Storj，無需經過本機下載再上傳的流程。

Storj 是一個去中心化的雲端儲存網路，透過抹除編碼提供高度耐用性，預設即採用端對端加密，並具備高性價比 — 對開發者及注重隱私的使用者而言相當具吸引力。若手動從 Dropbox 遷移檔案，就必須先將所有內容下載至本機，但 RcloneView 可實現直接的雲對雲傳輸，將資料從 Dropbox 串流至 Storj，完全不佔用本機硬碟空間。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Dropbox 與 Storj

透過 OAuth 瀏覽器流程在 RcloneView 中新增 **Dropbox** — **遠端頁籤 > 新增遠端 > Dropbox**。至於 Storj，則新增一個遠端，並使用您的憑證設定 rclone 的 Storj 後端。設定好兩個遠端後，在雙欄式檔案總管中並排開啟 — 左側為 Dropbox，右側為 Storj 儲存桶 — 以便在遷移前先檢視您的內容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Storj remotes in RcloneView" class="img-large img-center" />

若使用 **Dropbox for Business** 帳號，請在建立遠端時設定 `dropbox_business` 旗標，以正確存取團隊空間與成員資料夾。

## 執行遷移

在**工作管理員**中，將來源設為您的 Dropbox 資料夾，目的地設為您的 Storj 儲存桶路徑。若要乾淨地遷移一個 300 GB 的專案封存，請使用**複製**工作類型而非同步 — 這樣可在複製所有內容至 Storj 的同時，保留 Dropbox 上的原始檔案，讓您有時間在移除原始檔案前先驗證遷移結果。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dropbox to Storj migration job running in RcloneView" class="img-large img-center" />

在工作設定中啟用校驗和驗證，可確保每個檔案都正確傳輸。Storj 的架構會將抹除編碼後的分片分散至全球節點網路，因此您獲得的不只是一份副本 — 而是一份具備高度冗餘保護的封存。RcloneView 的**傳輸中**頁籤會在整個遷移過程中顯示即時進度、傳輸速度與檔案數量。

## 遷移後驗證

工作完成後，使用 RcloneView 的**資料夾比對**功能，將 Dropbox 來源與 Storj 目的地進行比對。顯示為「相同」的檔案代表大小與修改時間皆一致。僅出現於左側的檔案，代表尚未傳輸的內容 — 再次執行該工作即可解決，因為 rclone 只會傳輸缺少或有差異的部分。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Dropbox to Storj migration with Folder Compare in RcloneView" class="img-large img-center" />

一旦比對結果確認所有檔案皆已存在於 Storj 上，您就可以安心封存或刪除 Dropbox 中的內容。**工作歷史紀錄**頁籤會永久記錄此次遷移：傳輸了什麼、何時傳輸，以及移動了多少資料。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 **Dropbox** 遠端（OAuth）與 **Storj** 遠端（憑證）。
3. 在工作管理員中建立從 Dropbox 到您 Storj 儲存桶的**複製**工作。
4. 在移除 Dropbox 內容前，使用**資料夾比對**驗證遷移是否完整。

透過 RcloneView 遷移至 Storj，能享有去中心化儲存的高韌性與隱私優勢，同時省去本機下載再上傳的繁瑣流程。

---

**相關指南：**

- [使用 RcloneView 管理 Storj 去中心化雲端同步](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [將 Dropbox 備份至 Backblaze B2 — 使用 RcloneView 實現實惠儲存](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [使用 RcloneView 傳輸 Storj 與 Google Drive 檔案](https://rcloneview.com/support/blog/transfer-storj-and-google-drive-with-rcloneview)

<CloudSupportGrid />
