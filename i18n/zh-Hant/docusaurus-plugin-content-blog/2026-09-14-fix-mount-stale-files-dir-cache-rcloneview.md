---
slug: fix-mount-stale-files-dir-cache-rcloneview
title: "修復掛載顯示過期檔案的問題 — RcloneView Dir Cache Time詳解"
authors:
  - morgan
description: "透過在RcloneView中正確調整Dir cache time和VFS cache mode,修復掛載的雲端硬碟顯示過期或遺失檔案的問題。"
keywords:
  - 掛載顯示舊檔案
  - RcloneView dir cache time
  - 掛載硬碟中的過期檔案
  - 修復過期的掛載清單
  - 雲端硬碟不刷新
  - VFS cache mode不匹配
  - RcloneView掛載疑難排解
  - 雲端掛載目錄快取
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復掛載顯示過期檔案的問題 — RcloneView Dir Cache Time詳解

> 已掛載的雲端硬碟仍顯示一個已刪除的檔案,或隱藏了一個剛建立的新檔案,這通常不是故障——只是它的目錄快取還沒有過期。以下說明如何在RcloneView中解決這個問題。

將遠端掛載為本地硬碟時,RcloneView並不會在每次點擊時都重新列出所有資料夾——它會保留一個短期的目錄快取,讓瀏覽體驗感覺即時,而不必每次都往返雲端供應商。這在速度上很有優勢,但也代表從另一台裝置、另一個RcloneView視窗,或供應商自己的網頁應用程式所做的變更,可能需要一點時間才會出現在掛載的資料夾中。本指南說明這種延遲何時屬於正常現象,以及在不正常時如何調整。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解Dir Cache Time

RcloneView的掛載設定中包含**Dir cache time**設定,它控制資料夾清單在掛載重新檢查遠端變更之前保持有效的時長。這與管理檔案內容快取(而非目錄結構)的VFS **Cache mode**設定(off / minimal / writes / full)是分開的。較短的Dir cache time代表掛載幾乎能立即反映遠端變更,但會向供應商發出更多清單請求;較長的Dir cache time能減少API呼叫,但代價是新檔案或已刪除檔案出現的延遲更長。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView中包含Dir cache time的掛載設定選項" class="img-large img-center" />

如果你掛載的遠端有多個人或多台裝置同時寫入——例如共用的Google Drive資料夾——預設的快取時間可能會讓人覺得RcloneView「漏掉」了一個實際上幾秒前從其他位置新增的檔案。它並沒有漏掉任何東西,只是掛載還沒有刷新那個資料夾的清單。

## 修復不顯示新檔案的掛載

在假定確實存在問題之前,先嘗試手動刷新。在Explorer面板或指向該掛載的作業系統檔案瀏覽器中,強制重新載入資料夾(按F5,或先離開再返回該目錄)通常可以立即顯示變更,而不必等待快取自行過期。如果手動刷新後檔案仍未出現,可能需要透過**Mount Manager**卸載並重新掛載,因為卡住的rclone VFS處理程序有時會持有比設定的Dir cache time更舊的清單。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在RcloneView中刷新已掛載遠端資料夾的清單" class="img-large img-center" />

對於接近即時可見性比原始API效率更重要的遠端,可以在儲存並重新掛載之前,在該掛載的Edit設定中降低Dir cache time值。這裡存在取捨:在使用頻繁的遠端上把該值設得過低,會增加RcloneView發出的清單請求數量,可能觸發限制每分鐘API呼叫次數的供應商端速率限制。

## 同時選擇Dir Cache Time和Cache Mode

Dir cache time和VFS Cache mode解決的是不同的問題,所以只檢查其中一個而不檢查另一個,往往只能解決一半的根本問題。如果已刪除的檔案在掛載中仍顯示為可存取(而不是新檔案無法出現),這更可能是Cache mode的症狀——預設的**writes**會在本地快取最近寫入的檔案內容,而**full**還會快取讀取的內容,這兩種情況都可能導致本地快取的副本在快取被驗證之前,比遠端的目前狀態更「舊」。將較短的Dir cache time與適合該遠端實際使用方式的Cache mode搭配調整,可以解決大多數過期清單問題。

<img src="/support/images/en/blog/new-remote.png" alt="在RcloneView中調整遠端的掛載快取設定" class="img-large img-center" />

RcloneView可以在Windows、macOS和Linux上透過同一視窗掛載並同步90多個供應商,因此無論掛載指向Google Drive、S3儲存桶,還是自架的WebDAV伺服器,這些快取設定的套用方式都相同。

## 快速上手

1. 從[rcloneview.com](https://rcloneview.com/src/download.html)**下載RcloneView**。
2. 開啟**Mount Manager**,選擇受影響的掛載,並檢查其目前的Dir cache time值。
3. 對於會被多個來源頻繁變更的遠端,降低Dir cache time,並卸載/重新掛載以套用設定。
4. 如果真正的問題是檔案*內容*而不僅是清單過期,請同時檢查Cache mode設定。

一個能準確反映雲端狀態、並依照遠端實際使用方式設定節奏的掛載,遠勝過每次都靠猜測「為什麼沒有同步」。

---

**相關指南:**

- [VFS Cache — 在RcloneView中提升雲端硬碟的掛載效能](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [修復VFS Cache磁碟已滿錯誤 — 用RcloneView管理掛載快取](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [在RcloneView中修復Rclone掛載和FUSE錯誤](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
