---
slug: migrate-yandex-disk-to-backblaze-b2-rcloneview
title: "將 Yandex Disk 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - morgan
description: "使用 RcloneView 將 Yandex Disk 遷移到 Backblaze B2：連接兩個遠端，先試執行複製，用 Folder Compare 驗證，並保留一份可靠的備份。"
keywords:
  - 將 Yandex Disk 遷移到 Backblaze B2
  - yandex disk to b2
  - Yandex Disk 備份
  - Backblaze B2 遷移
  - RcloneView Yandex Disk
  - 雲端到雲端傳輸
  - 從 Yandex Disk 移動檔案
  - rclone yandex backblaze
  - 雲端遷移 GUI
  - 匯出 Yandex Disk 檔案
tags:
  - RcloneView
  - yandex-disk
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Yandex Disk 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 將 Yandex Disk 中的所有內容複製到 Backblaze B2 儲存桶，並確認每個檔案都已抵達，無需使用命令列。

如果您的檔案存放在 Yandex Disk，但希望在 Backblaze B2 中擁有一份獨立的、以儲存桶為基礎的副本，通常的做法是透過自己的電腦手動下載再重新上傳。RcloneView 在一個視窗中連接這兩個服務並執行它們之間的傳輸，事前可以試執行，事後可以進行資料夾比較。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Yandex Disk 與 Backblaze B2

Yandex Disk 使用 OAuth：在 **New Remote** 中選擇它，RcloneView 會開啟瀏覽器，供您登入並授權存取，無需 API 金鑰。Backblaze B2 使用來自 Backblaze 金鑰管理頁面的 Application Key ID 與 Application Key。請建立僅限目的地儲存桶的金鑰，使遷移憑證無法存取其他任何內容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

在一個 Explorer 面板中開啟 Yandex Disk，在另一個面板中開啟 B2 儲存桶。RcloneView 可在 Windows、macOS 與 Linux 上，透過一個視窗掛載並同步 90 多個服務供應商，因此作業時兩側始終可見。

## 規劃目錄結構並複製

決定資料夾如何對應到儲存桶。例如，一間擁有十年專案資料夾的小型設計工作室，可以將 Yandex Disk 的每個頂層資料夾作為前綴鏡像到同一個儲存桶中，這樣日後路徑依然易讀。請先使用 **New Folder** 建立目的地資料夾。

將資料夾從 Yandex Disk 面板拖曳到 B2 面板；在不同遠端之間，拖放執行的是複製，因此原始檔案保持不變。對於較大或需要重複的遷移，請改用 Sync 精靈：將 Yandex Disk 設為來源，儲存桶路徑設為目的地，作業名稱可使用字母、數字、連字號或底線。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Yandex Disk to Backblaze B2" class="img-large img-center" />

## Dry Run 並監控傳輸

請先執行 **Dry Run**。它會列出將被複製與將被刪除的檔案，因此來源或目的地設定錯誤時，可以在造成損失之前發現。這對於會修改目的地以符合來源的單向同步尤為重要。

在 Advanced Settings 中，調整同時檔案傳輸數量，如需雜湊加大小的驗證，請啟用校驗和比較。先從保守的設定開始，待傳輸穩定後再提高並行數。可在 **Transferring** 分頁中查看進度、速度與檔案數。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to B2 transfer in real time" class="img-large img-center" />

## 使用 Folder Compare 驗證

作業完成後，從 Home 分頁開啟 **Compare**，左側為 Yandex Disk，右側為 B2。篩選僅存在於左側或存在差異的檔案以發現遺漏，然後使用 Copy right 補齊。Job History 會記錄每次執行的狀態、大小、速度與檔案數，可作為遷移紀錄。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between Yandex Disk and Backblaze B2" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 新增 Yandex Disk，並使用限定儲存桶的應用程式金鑰新增 Backblaze B2。
3. 執行 Dry Run，然後開始複製或同步作業。
4. 使用 Folder Compare 確認儲存桶與來源一致。

在物件儲存中擁有一份經過驗證的第二副本，意味著 Yandex Disk 不再是您的檔案唯一的存放位置。

---

**相關指南：**

- [將 HiDrive 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [將 Yandex Disk 遷移到 Dropbox](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)
- [Dry Run：傳輸前預覽同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
