---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "管理 Box for Business — 使用 RcloneView 同步與備份"
authors:
  - robin
description: "在 RcloneView 中連接 Box for Business，透過一個跨平台 GUI 瀏覽、同步和備份企業檔案。"
keywords:
  - box for business
  - box 企業雲端儲存
  - RcloneView box business
  - box_sub_type enterprise
  - 同步 box business 檔案
  - 備份 box for business
  - 管理 box 企業帳戶
  - box 雲端儲存 GUI
  - box business 檔案管理
tags:
  - RcloneView
  - box
  - cloud-storage
  - cloud-sync
  - backup
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Box for Business — 使用 RcloneView 同步與備份

> Box for Business 帳戶在連接時需要一個額外設定 — RcloneView 會處理它，然後為你提供完整的檔案管理員。

Box for Business 使用與個人 Box 帳戶不同的帳戶類型運作，正確連接它需要在遠端設定期間啟用一個企業旗標。對於在數十個席位間共用企業資料夾的設計代理商來說，無法承受一個悄悄瀏覽錯誤工作區的損壞遠端連線。RcloneView 會在設定期間加入正確的設定，然後將 Box for Business 像其他任何遠端一樣對待 —— 可以在一個視窗中瀏覽、同步和掛載。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Box for Business 帳戶

Box for Business 使用與個人 Box 帳戶相同的 OAuth 瀏覽器登入方式，但需要在建立遠端時設定 `box_sub_type = enterprise`，以便 RcloneView 指向正確的企業工作區，而不是個人資料夾樹狀結構。開啟 Remote 頁籤 > New Remote，選擇 Box，完成瀏覽器登入，並在儲存前設定子類型。與僅支援掛載的工具不同，RcloneView 在 Box for Business 遠端上也支援同步和資料夾比較 —— 在 FREE 授權下即可使用。

連接完成後，該遠端會像其他任何雲端儲存一樣出現在 Explorer 頁籤列中。你可以瀏覽企業資料夾，在底部摘要中查看檔案數量和大小，並在多個 Box 工作區之間切換而不需要每次重新進行身分驗證。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## 備份企業資料夾

同步工作以保護其他遠端相同的方式保護 Box for Business 內容：在同步精靈的第 1 步設定來源和目標，選擇單向「僅修改目標」以取得穩定的備份方向，並在第 3 步加入篩選器以排除暫存檔案或過大的附件。對於處理合約或客戶交付項目的團隊，每晚向本機儲存空間或第二個雲端帳戶進行的單向同步，可以在共用工作區之外保留一份復原副本。

之後 Job History 會追蹤每次執行 —— 狀態、檔案數量、傳輸大小和持續時間 —— 讓管理員能夠確認備份是否真正完成，而不是假設排程在背景悄悄執行。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box for Business backup runs" class="img-large img-center" />

## 將 Box for Business 掛載為本機磁碟機

掛載會將企業帳戶轉變為磁碟機代號或掛載點，任何桌面應用程式都可以直接開啟它，而不需要先下載檔案。這對於依賴本機檔案路徑而不是網頁上傳對話方塊的設計或文件軟體團隊來說非常重要。將快取模式設定為「writes」以在回應性和可靠性之間取得平衡，並為不應修改共用內容的審閱者啟用 Read only。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Box for Business folder from the Remote Explorer panel" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 建立一個新的 Box 遠端，並在設定期間啟用企業子類型。
3. 設定單向同步工作以備份關鍵的企業資料夾。
4. 為需要直接本機檔案存取的團隊掛載該遠端。

企業帳戶應該獲得與其他任何雲端儲存相同的可靠同步和備份保障 —— RcloneView 只是確保連線從一開始就設定正確。

---

**相關指南：**

- [管理 Box 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Dropbox for Business 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Box 儲存空間掛載為網路磁碟機，實現團隊無縫存取](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
