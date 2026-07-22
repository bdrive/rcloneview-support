---
slug: get-size-calculate-cloud-storage-usage-rcloneview
title: "取得大小 — 在RcloneView中即時計算雲端儲存用量"
authors:
  - jay
description: "使用RcloneView的取得大小(Get Size)功能,在同步或遷移之前計算90多個雲端服務商中任意資料夾或所選內容的總大小。"
keywords:
  - 取得大小功能
  - 計算雲端儲存大小
  - 雲端儲存資料夾大小
  - RcloneView 取得大小
  - 雲端儲存用量檢查
  - 傳輸前檢查資料夾大小
  - 多雲儲存稽核
  - rclone about 指令 GUI
  - 雲端檔案管理工具
  - 儲存用量分析
tags:
  - RcloneView
  - feature
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 取得大小 — 在RcloneView中即時計算雲端儲存用量

> 在RcloneView中右鍵點擊任意資料夾或所選內容,不必等待完整傳輸,即可立即知道要搬移多少資料。

雲端服務商很少能讓你在真正嘗試搬移之前就清楚一個資料夾究竟有多大。一個包含成千上萬個巢狀子資料夾的「Media」資料夾,可能隱藏著數GB的資料,而這些資料往往要等到同步工作卡在半途,或是傳輸過程中出現配額警告時才會顯現出來。RcloneView在檔案總管右鍵選單中提供的取得大小(Get Size)指令解決了這個問題:在提交同步、掛載或遷移之前,依需求計算任意所選檔案或資料夾的總大小。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在搬移任何內容之前檢查資料夾大小

在任一檔案總管面板中選取一個或多個檔案或資料夾,右鍵點擊並選擇取得大小(Get Size)。RcloneView會遍歷所選內容並回傳總大小,這對子目錄樹很深的資料夾特別有用,因為僅憑檔案清單底部的摘要資訊無法反映巢狀內容。無論所選內容位於Google Drive、Amazon S3、自架的Nextcloud實例還是本機磁碟,運作方式都完全相同 —— RcloneView可在同一視窗中掛載並同步90多個服務商,因此無論瀏覽哪個遠端,同樣的右鍵選單都適用。

取得大小(Get Size)最常作為事前檢查工具使用。在開始一項大型同步工作或兩個雲端之間的一次性遷移之前,先檢查來源資料夾的實際大小,有助於估算傳輸時間、確認目的端是否有足夠的可用配額,並判斷是否需要篩選規則來精簡工作範圍。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder in RcloneView to check its total size" class="img-large img-center" />

## 跨多個遠端稽核儲存用量

由於所有已連線的遠端(無論雲端或本機)都位於同一個檔案總管中,取得大小(Get Size)同樣可以作為快速稽核工具,用來查看多雲環境中儲存空間的消耗位置。依序在每個遠端的頂層資料夾執行,可以大致了解哪些帳號正接近其額度上限,這比逐一登入各服務商各自的網頁主控台查看用量要快得多。

如果需要在遠端整體層級(而非特定資料夾)取得更精確的用量數字,內建的Rclone Terminal支援`rclone about "remote:"`指令,可直接從服務商API回報已用及可用的總儲存空間。取得大小(Get Size)與終端機的`about`指令相輔相成:一個聚焦於特定所選內容,另一個回報帳號層級的總量。

<img src="/support/images/en/blog/new-remote.png" alt="Multiple cloud remotes connected in RcloneView for storage auditing" class="img-large img-center" />

## 利用大小檢查規劃同步與篩選規則

一旦了解資料夾的實際大小,RcloneView的同步精靈就能提供相應工具來據此採取行動。工作設定的第3步包含依最大檔案大小、最大檔案存續期間篩選,以及針對媒體、影片、圖片和文件類型的預先定義篩選器,讓體積過大的資料夾也能被精簡到只保留真正需要傳輸的檔案。之後執行Dry Run可以預覽在目前篩選設定下究竟哪些檔案會被複製或刪除,在任何資料真正搬移之前確認工作內容符合預期。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring sync filters after checking folder size in RcloneView" class="img-large img-center" />

## 快速上手

1. 從[rcloneview.com](https://rcloneview.com/src/download.html)**下載RcloneView**。
2. 透過Remote分頁 > New Remote連接你想稽核的遠端。
3. 在檔案總管中選取一個資料夾,右鍵點擊並選擇取得大小(Get Size)以查看其總佔用空間。
4. 在執行完整傳輸之前,利用這個數字在同步精靈中規劃篩選器或排程。

準確掌握自己正在處理多少資料,能把猜測變成計畫,而取得大小(Get Size)讓這項檢查從一張潛在的支援單,變成動動手指就能完成的習慣。

---

**相關指南:**

- [工作歷史與傳輸記錄 — 在RcloneView中監控每一次同步](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Dry Run 預覽 — 在RcloneView中執行前模擬雲端同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [使用RcloneView尋找並移除雲端儲存中的重複檔案](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-rcloneview)

<CloudSupportGrid />
