---
slug: cloud-storage-genealogy-family-history-rcloneview
title: "給族譜研究者的雲端儲存 — 使用 RcloneView 保存家族史檔案"
authors:
  - tayson
description: "使用 RcloneView 保護掃描檔案、族譜檔案與口述歷史錄音：為族譜檔案提供多雲備份、加密與驗證。"
keywords:
  - 族譜研究雲端儲存
  - 家族史備份
  - 族譜檔案備份
  - 備份家譜檔案
  - 掃描家族文件上雲端
  - 口述歷史錄音備份
  - 族譜學會檔案儲存
  - 在多個雲端保存家族照片
  - 加密 DNA 資料備份
  - RcloneView 族譜
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 給族譜研究者的雲端儲存 — 使用 RcloneView 保存家族史檔案

> 數十年的研究成果可能只存放在一顆筆電硬碟上。RcloneView 會將其複製到多個雲端，並檢查每份副本是否一致。

族譜檔案的成長方式五花八門。一位家族史研究者可能同時保存著 40,000 張教區登記簿的 TIFF 掃描檔、幾個匯出的家譜 GEDCOM 檔案、數小時與年長親屬的 WAV 訪談錄音，以及原始 DNA 資料檔。由志工營運的族譜學會也把同樣的資料存放在共用磁碟與閒置的 USB 磁碟上。RcloneView 為這兩類使用者提供一個桌面應用程式，用來把檔案複製到他們已在使用的雲端儲存，並讓副本保持最新。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在一個視窗中管理所有檔案位置

大多數研究者的資料分散在多個服務中：與表親共用的 Google Drive 資料夾、遠方檔案館寄來的 Dropbox 連結，以及存放原始掃描檔的外接硬碟。在 RcloneView 中，您可以將它們分別新增為遠端。Google Drive、Dropbox、OneDrive 與 pCloud 透過瀏覽器登入連線。Backblaze B2 需要 Application Key ID 與金鑰。Synology NAS 可以在區域網路中被偵測到。

最多可並排開啟四個 Explorer 面板，把外接硬碟中的掃描資料夾拖曳到雲端遠端。在不同遠端之間拖曳會執行複製，因此原始檔案保持不變。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud storage remote in RcloneView for a genealogy archive" class="img-large img-center" />

## 為無可取代的掃描檔保留多份副本

重新掃描一頁人口普查紀錄只是麻煩而已。但遺失一段祖父母聲音的錄音，就再也找不回來了。使用 1:N 同步，可以在一個工作中把一個來源資料夾傳送到多個目的地，例如把原始掃描資料夾同時傳送到 pCloud 與 Backblaze B2 儲存貯體。在 FREE License 下，也能以完整讀寫權限連線 S3、Azure 或 Backblaze B2。

首次執行前，請使用 Dry Run 列出將被複製與刪除的內容。單向同步只會修改目的地，因此您硬碟上的原始資料夾不會被更動。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying family history scans between cloud remotes in RcloneView" class="img-large img-center" />

## 保護 DNA 資料與在世親屬的紀錄

原始 DNA 檔案與關於在世人士的紀錄，需要比 19 世紀婚姻登記簿更謹慎地處理。用 **Crypt** 遠端包裝雲端資料夾後，RcloneView 會在上傳前加密檔案名稱、資料夾名稱與檔案內容。服務商只儲存加密資料，而您在 RcloneView 中仍可像平常一樣瀏覽解密後的內容。請妥善保管 Crypt 密碼：沒有它，檔案將無法解密。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView showing differences between archive copies" class="img-large img-center" />

## 驗證副本並自動更新

使用 Folder Compare 將本機原始檔案與每個雲端副本進行比較。篩選器可以顯示只存在於一側或大小不同的檔案，使用 Copy right 或 Copy left 一鍵補齊缺漏。擁有 PLUS License 時，可以使用 crontab 風格的排程在每週日晚上執行同步，Job History 會記錄每次執行的狀態、大小與檔案數。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a weekly family archive backup job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增您的外接硬碟或 NAS，以及兩個雲端遠端，例如 pCloud 與 Backblaze B2。
3. 建立一個同步工作，以原始檔案資料夾為來源、兩個雲端為目的地，然後執行 Dry Run。
4. 為 DNA 檔案與在世親屬的紀錄新增 Crypt 遠端，並用 Folder Compare 檢查副本。

有了兩份經過驗證的異地副本，您的研究成果將比任何單一硬碟都更長久。

---

**相關指南：**

- [給博物館與檔案館的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [一對多同步到多個目的地](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)
- [使用 Crypt 遠端加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
