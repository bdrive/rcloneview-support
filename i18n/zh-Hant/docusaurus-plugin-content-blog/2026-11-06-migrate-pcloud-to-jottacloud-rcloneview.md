---
slug: migrate-pcloud-to-jottacloud-rcloneview
title: "將 pCloud 遷移到 Jottacloud — 使用 RcloneView 傳輸檔案"
authors:
  - alex
description: "使用 RcloneView 將 pCloud 遷移到 Jottacloud：連接兩個遠端，透過 Dry Run 預覽，進行雲端到雲端複製，並使用 Folder Compare 驗證。"
keywords:
  - 將 pCloud 遷移到 Jottacloud
  - pCloud 到 Jottacloud 傳輸
  - pCloud Jottacloud 遷移
  - RcloneView pCloud
  - RcloneView Jottacloud
  - 雲端到雲端傳輸
  - 從 pCloud 移動檔案
  - 歐洲雲端儲存遷移
  - rclone GUI 遷移
tags:
  - RcloneView
  - pcloud
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 pCloud 遷移到 Jottacloud — 使用 RcloneView 傳輸檔案

> 在雲端之間將 pCloud 資料庫遷移到 Jottacloud，先預覽，最後再進行驗證。

無論是整合客戶封存檔案的攝影師，還是把共用資料夾遷移到新服務商的家庭，面對的都是同樣的瑣事：存放在一個雲端中的成千上萬個檔案需要轉移到另一個雲端。把所有內容下載到筆記型電腦再重新上傳，既慢又不可靠。RcloneView 在一個視窗中連接 pCloud 與 Jottacloud，執行兩者之間的複製，並提供 Dry Run 與 Folder Compare 來確認結果。RcloneView 可在 Windows、macOS 與 Linux 上透過一個視窗掛載並同步 90 多個服務商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 pCloud 與 Jottacloud 連接為遠端

開啟 Remote 分頁，選擇 New Remote。pCloud 透過 OAuth 登入：瀏覽器會開啟，核准存取後，RcloneView 會自動連線。依照該服務商的畫面提示，新增 Jottacloud 作為第二個遠端。

兩者都出現在 Remote Manager 後，在兩個 Explorer 面板中並排開啟。先瀏覽來源與目的地，有助於決定要移動哪些資料夾以及放到哪裡。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 pCloud 與 Jottacloud 遠端" class="img-large img-center" />

## 使用篩選器與 Dry Run 規劃複製

工作精靈的第 3 步可依最大檔案大小、最大檔案時間或資料夾深度限制傳輸。預先定義的篩選器涵蓋 Music、Video、Image 與 Document 檔案，自訂規則可以排除 `.git/` 資料夾或 `.iso` 檔案等模式，方便略過安裝程式與磁碟映像檔。

在正式工作之前先執行 Dry Run。它會列出將被複製或刪除的檔案，而不會變更任何一端。對於遷移，請選擇 Copy 工作而不是鏡像同步，這樣 Jottacloud 中已有的內容不會被刪除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 pCloud 到 Jottacloud 的雲端到雲端傳輸" class="img-large img-center" />

## 執行傳輸並查看進度

啟動工作，並在 Transferring 分頁中追蹤進度、速度與檔案數量。對於大型資料庫，可以在第 2 步中提高檔案傳輸數量，但若任一後端回應較慢，請將等值檢查器的數量維持在較低水準。"Retry entire sync if fails" 預設值為 3，可以因應暫時性的網路錯誤。

如果一次作業不夠用，請將工作儲存在 Job Manager 中，稍後再執行。Copy 工作只會傳輸缺少或不同的檔案，因此重複執行會從上次停止的地方繼續。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行 pCloud 到 Jottacloud 的 Copy 工作" class="img-large img-center" />

## 使用 Folder Compare 驗證

工作完成後，開啟 Compare，將 pCloud 放在左側，Jottacloud 放在右側。僅左側、僅右側與不同檔案的篩選器會顯示尚未移動的內容，向右複製動作可傳輸遺漏的檔案。Job History 會保留每次執行的狀態、大小、速度與檔案數量，作為遷移的紀錄。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="遷移後比較 pCloud 與 Jottacloud 資料夾" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 pCloud（OAuth）與 Jottacloud 作為遠端。
3. 建立帶篩選器的 Copy 工作，然後執行 Dry Run。
4. 執行工作，然後使用 Folder Compare 確認結果。

在 Compare 顯示兩端一致之前，請保持 pCloud 帳戶不變。

---

**相關指南：**

- [管理 pCloud 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [管理 Jottacloud 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Jottacloud 遷移到 pCloud](https://rcloneview.com/support/blog/migrate-jottacloud-to-pcloud-rcloneview)

<CloudSupportGrid />
