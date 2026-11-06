---
slug: migrate-dropbox-to-koofr-rcloneview
title: "將 Dropbox 遷移到 Koofr — 使用 RcloneView 傳輸檔案"
authors:
  - robin
description: "使用 RcloneView 將 Dropbox 遷移到 Koofr：連接兩個遠端，執行 Dry Run，進行雲端到雲端複製，並透過 Folder Compare 驗證結果。"
keywords:
  - 將 Dropbox 遷移到 Koofr
  - Dropbox 到 Koofr 傳輸
  - Dropbox Koofr 遷移
  - RcloneView Dropbox
  - RcloneView Koofr
  - 雲端到雲端傳輸
  - 從 Dropbox 移動檔案
  - Koofr 歐洲雲端儲存
  - rclone GUI 遷移
  - Dropbox for Business 遷移
tags:
  - RcloneView
  - dropbox
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Dropbox 遷移到 Koofr — 使用 RcloneView 傳輸檔案

> 在雲端之間將 Dropbox 帳戶遷移到 Koofr，複製前先預覽，複製後再進行比較。

設計公司要結束某個客戶帳戶，或自由工作者希望把封存檔案託管在歐洲的服務商。無論哪種情況，把成千上萬個 Dropbox 資料夾經由筆記型電腦拖來拖去，既慢又容易出錯。RcloneView 在一個視窗中連接 Dropbox 與 Koofr，執行兩者之間的複製，並提供 Dry Run 與 Folder Compare 來確認結果。RcloneView 可在 Windows、macOS 與 Linux 上透過一個視窗掛載並同步 90 多個服務商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Dropbox 與 Koofr 連接為遠端

開啟 Remote 分頁，選擇 New Remote。Dropbox 透過 OAuth 登入：瀏覽器會開啟，核准存取後，RcloneView 會自動連線。對於公司帳戶，Dropbox for Business 需要在遠端設定中加入 `dropbox_business = true`。

將 Koofr 新增為第二個遠端。兩者都出現在 Remote Manager 後，在兩個 Explorer 面板中並排開啟。在移動任何內容之前，先瀏覽來源與目的地的目錄樹，這樣就能知道哪些資料夾重要。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Dropbox 與 Koofr 遠端" class="img-large img-center" />

## 使用篩選器與 Dry Run 規劃複製

大多數 Dropbox 帳戶中都有不想帶走的暫存檔案。工作精靈的第 3 步提供最大檔案大小、最大檔案時間與資料夾深度限制。預先定義的篩選器涵蓋 Music、Video、Image 與 Document 檔案，自訂規則可以排除 `.git/` 資料夾或 `.iso` 檔案等模式。

在正式工作之前先執行 Dry Run。它會列出將被複製或刪除的檔案，而不會變更任何一端。對於遷移，請選擇 Copy 工作而不是鏡像同步，這樣 Koofr 上已有的內容不會被刪除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 Dropbox 到 Koofr 的雲端到雲端傳輸" class="img-large img-center" />

## 執行傳輸並查看進度

啟動工作，並在 Transferring 分頁中追蹤進度、速度與檔案數量。對於大型資料庫，可以在第 2 步中提高檔案傳輸數量，但若任一服務回應較慢，請將等值檢查器的數量維持在較低水準。"Retry entire sync if fails" 預設值為 3，可以因應暫時性的網路錯誤。

如果資料庫太大，一次無法完成，請將工作儲存在 Job Manager 中，稍後再執行。Copy 工作只會傳輸缺少或不同的檔案，因此第二次執行會從第一次停止的地方繼續。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 分頁中監控 Dropbox 到 Koofr 的傳輸" class="img-large img-center" />

## 使用 Folder Compare 驗證

工作完成後，開啟 Compare，將 Dropbox 放在左側，Koofr 放在右側。僅左側、僅右側與不同檔案的篩選器會顯示剩餘內容。向右複製動作會傳輸任何遺漏的檔案。Job History 會記錄每次執行的狀態、大小、速度與檔案數量，可作為遷移的實用紀錄。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="顯示已完成的 Dropbox 到 Koofr 遷移的 Job History" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Dropbox（OAuth）與 Koofr 作為遠端。
3. 建立帶篩選器的 Copy 工作，然後執行 Dry Run。
4. 執行工作，然後使用 Folder Compare 確認結果。

在 Compare 顯示兩端一致之前，請保持 Dropbox 帳戶不變。

---

**相關指南：**

- [管理 Koofr 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Koofr 遷移到 Dropbox](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [使用 RcloneView 將 Dropbox 遷移到 pCloud](https://rcloneview.com/support/blog/migrate-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
