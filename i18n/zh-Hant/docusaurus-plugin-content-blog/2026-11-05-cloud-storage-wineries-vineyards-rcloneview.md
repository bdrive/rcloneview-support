---
slug: cloud-storage-wineries-vineyards-rcloneview
title: "酒莊與葡萄園的雲端儲存 — 使用 RcloneView 保護生產紀錄"
authors:
  - casey
description: "酒莊和葡萄園可以使用 RcloneView 將採收日誌、酒標設計稿和合規檔案備份到多個雲端：排程同步、加密和 Folder Compare。"
keywords:
  - 酒莊雲端儲存
  - 葡萄園檔案備份
  - 酒莊紀錄備份
  - 酒標設計稿備份
  - 加密雲端備份
  - 排程雲端同步
  - 多雲備份
  - RcloneView
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

# 酒莊與葡萄園的雲端儲存 — 使用 RcloneView 保護生產紀錄

> 讓採收日誌、酒標設計稿和合規文件安全地保存在不只一個地方。

一家小型酒莊會產生出乎意料的各種檔案：採收和發酵試算表、高解析度的酒標與包裝設計稿、品酒室照片、經銷商合約以及法規申報文件。它們往往只存放在一台辦公室電腦和一個雲端帳戶中。RcloneView 為酒莊提供了一種視覺化的方式，將這些資料複製到第二個和第三個位置，並檢查副本是否一致。RcloneView 可以在一個視窗中掛載並同步 90 多個供應商，支援 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接檔案所在的位置

開啟 Remote 分頁，新增你已在使用的儲存空間：用於辦公文件的 Google Drive 或 OneDrive、酒窖辦公室裡的 NAS，以及用於異地副本的 S3 相容儲存貯體，例如 Backblaze B2 或 Wasabi。雲端帳戶透過瀏覽器登入；儲存貯體使用存取金鑰。Synology NAS 可以在區域網路中被自動偵測到。

將兩個遠端並排放在 Explorer 面板中，拖曳資料夾即可在兩者之間複製。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中為酒莊新增雲端和 NAS 遠端" class="img-large img-center" />

## 依排程備份設計稿與紀錄

酒標設計稿和裝瓶紀錄會在年份酒發表前後變動，之後便長期不動。建立一個從辦公室共用資料夾到儲存貯體的同步工作，並先使用 Dry Run 預覽將被複製的內容。篩選器在這裡很有用：排除暫存檔，或設定最大檔案年齡以聚焦目前年份。

排程同步使用 crontab 風格的時間設定，屬於 PLUS 功能。使用 FREE 授權時仍可手動執行工作，非常適合在每次採收或裝瓶之後進行一次複製。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中為酒莊備份工作設定排程" class="img-large img-center" />

## 加密合規與客戶資料

經銷商合約、授權文件和葡萄酒俱樂部客戶名單需要比單純複製更多的保護。Crypt 遠端會在檔案抵達雲端之前加密檔名、資料夾名稱和內容，因此供應商只儲存密文。將備份工作指向 Crypt 遠端，其餘工作流程維持不變。請把密碼保存在與備份分開的地方。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="將酒莊檔案複製到加密的雲端遠端" class="img-large img-center" />

## 驗證副本並保留紀錄

Folder Compare 會顯示辦公室共用資料夾與備份之間僅左側有、僅右側有以及不同的檔案，讓你確認各年份資料夾是否一致。Job History 列出每次執行的狀態、大小和檔案數量，當稽核人員或保險公司詢問最近一次備份何時完成時，這很有幫助。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="酒莊備份執行的 Job History" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增辦公室儲存空間和一個異地遠端。
3. 建立同步工作，然後用 Dry Run 檢查。
4. 對敏感資料夾，用 Crypt 包裝異地遠端，並用 Folder Compare 驗證。

一份經過驗證的第二副本，能讓遺失筆記型電腦只是一件麻煩事，而不是遺失年份酒的紀錄。

---

**相關指南：**

- [使用 RcloneView 為食品與飲料企業提供雲端儲存](https://rcloneview.com/support/blog/cloud-storage-food-beverage-businesses-rcloneview)
- [使用 RcloneView 為農業與農場提供雲端儲存](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [使用 RcloneView 為飯店與接待業提供雲端儲存](https://rcloneview.com/support/blog/cloud-storage-hospitality-hotels-rcloneview)

<CloudSupportGrid />
