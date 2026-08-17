---
slug: cloud-storage-public-libraries-rcloneview
title: "為公共圖書館打造的雲端儲存 — 使用 RcloneView 數位化並共享館藏"
authors:
  - morgan
description: "使用 RcloneView 在雲端儲存中管理公共圖書館的數位化檔案、多分館備份和讀者記錄。"
keywords:
  - 圖書館雲端儲存
  - 圖書館數位化備份
  - RcloneView 圖書館
  - 多分館圖書館同步
  - 數位檔案備份
  - 圖書館雲端遷移
  - 館際檔案共享
  - 公共圖書館IT
  - 圖書館雲端備份
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

# 為公共圖書館打造的雲端儲存 — 使用 RcloneView 數位化並共享館藏

> 數位化檔案、讀者檔案和多分館記錄都需要一個可靠的存放之處,以及無需專職IT團隊即可在分館之間移動的方式。

一個正在數位化數十年本地報紙和歷史照片的公共圖書館系統,會產生數TB的掃描TIFF和PDF檔案,這些檔案需要轉移到永久性的雲端檔案庫,同時又不能佔滿某個分館的本地儲存空間。再加上共享目錄、活動資料和行政記錄的多分館營運,圖書館IT人員——通常只有一名兼職管理員——需要一個無需腳本專業知識即可處理傳輸和備份的工具。RcloneView 為圖書館系統提供了一種點擊式的方法,在各分館和雲端服務商之間移動、同步和歸檔檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 歸檔數位化專案

數位化專案會產生大批高解析度掃描檔案,需要從本地掃描工作站轉移到長期雲端儲存,而不必逐個資料夾手動複製。在 RcloneView 中設定從掃描工作站的本地資料夾到雲端檔案遠端的單向同步作業,如果只想推送已完成的批次而非仍在進行中的部分掃描,可以使用「最大檔案存在時間」或「最大檔案大小」篩選器。

<img src="/support/images/en/blog/new-remote.png" alt="為數位化圖書館資料新增雲端檔案遠端" class="img-large img-center" />

在對任何新的數位化批次進行首次正式同步之前先執行試執行(Dry Run)——它會準確列出將要傳輸的掃描檔案,這樣能在數千張歸檔錯誤的圖像進入檔案庫之前,發現仍在輸出到錯誤資料夾的掃描器。

## 跨多個分館同步記錄

擁有多個分館的圖書館系統通常需要在各處提供相同的目錄、活動資料或共享的行政文件。RcloneView 的 1:N 同步允許一個分館在單次作業中將更新推送到多個目標遠端——這對於將更新的活動日程或共享參考資料從中央分館分發到每個分支館非常有用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在分館之間同步共享圖書館記錄" class="img-large img-center" />

即使在 FREE 授權下,也可以完全讀寫連接 S3、Azure 或 Backblaze B2,這對於預算緊張但仍需要用於長期保存的物件儲存、而非有容量上限的消費級同步資料夾的系統來說非常重要。

## 安排無人值守備份

圖書館IT人員很少有時間盯著夜間傳輸。一旦在分館的本地伺服器與其雲端備份目標之間設定好同步作業,PLUS授權使用者就可以附加類似crontab的排程,讓備份在無人值守的情況下於夜間執行,並在儲存前預覽下一次排程執行的時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="為圖書館分館安排夜間備份作業" class="img-large img-center" />

之後,工作歷史記錄(Job History)會提供簡單的稽核記錄——每次執行的傳輸狀態、檔案數量和耗時——因此負責監管多個分館的單一管理員無需逐一查看每個地點,就能確認備份已完成。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在遠端管理員中將檔案儲存和分館儲存新增為遠端。
3. 為數位化上傳或跨分館記錄共享建立同步作業,先使用試執行。
4. 安排定期備份並檢查工作歷史記錄,確認其執行正常。

圖書館的館藏和記錄,其安全程度取決於上一次真正完成的備份——RcloneView 讓這一過程在每個分館都保持可見和一致。

---

**相關指南:**

- [為博物館和檔案館打造的雲端儲存 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [為K-12學校打造的雲端儲存 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-k12-schools-rcloneview)
- [使用 RcloneView 將 NAS 備份到多個雲端](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
