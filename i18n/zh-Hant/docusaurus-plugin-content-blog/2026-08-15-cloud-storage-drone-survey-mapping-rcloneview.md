---
slug: cloud-storage-drone-survey-mapping-rcloneview
title: "無人機測繪公司的雲端儲存 — 使用 RcloneView 管理大型資料集"
authors:
  - jay
description: "使用 RcloneView 的同步、掛載與比較工具,跨多個雲端儲存供應商管理無人機測繪影像、正射影像與 LiDAR 資料集。"
keywords:
  - 無人機測繪雲端儲存
  - 測繪公司備份
  - 正射影像檔案儲存
  - LiDAR資料雲端同步
  - 無人機影像備份
  - 地理空間資料管理
  - RcloneView 無人機測繪
  - 測繪公司雲端儲存
  - 無人機資料傳輸
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

# 無人機測繪公司的雲端儲存 — 使用 RcloneView 管理大型資料集

> 原始飛行影像、處理後的正射影像與點雲資料累積得很快 — RcloneView 協助團隊在使用的每一個雲端上保持資料井然有序。

單次無人機測繪飛行就可能產生數萬張原始影像,而正射影像、LiDAR 點雲等處理後的成果,每個場址通常都能達到數十 GB。測繪公司通常會將資料分散存放:以高速本機硬碟進行處理、以雲端儲存向客戶交付,再以成本較低的封存層保存已完成的專案 — 這代表檔案需要在不同位置之間持續移動。RcloneView 讓你在單一介面中管理這種資料流動,而不必在各家供應商各自的上傳工具之間來回切換。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 整理原始影像與處理後的交付成果

為原始影像封存、處理工作區,以及與客戶共用成果的雲端位置分別設定獨立的遠端。RcloneView 的多面板 Explorer 最多可同時檢視四個位置,方便你在將原始影像從本機磁碟封存之前,確認處理後的正射影像與對應的原始飛行資料夾一致。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中為無人機測繪資料設定雲端遠端" class="img-large img-center" />

在 FREE 授權下即可以完整的讀寫權限連線 S3、Azure 或 Backblaze B2,這對需要將大量處理後的資料集遷移到物件儲存以供長期客戶存取、且不希望按席次付費的測繪公司來說格外重要。

## 無需手動上傳即可同步大型飛行資料集

將同步工作的來源設定為本機影像資料夾,目的地設定為雲端儲存,接著在 Advanced Settings 中依照上傳頻寬調整並行檔案傳輸數 — 當有大量小尺寸原始影像時,較高的並行度會比處理少量大型檔案更有優勢。使用 max file age 篩選器,可以在外業繁忙的日子裡只同步最近的飛行資料,為時效性較強的交付成果保留頻寬。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="使用 RcloneView 將無人機測繪影像同步到雲端儲存" class="img-large img-center" />

在首次同步新場址之前先執行 Dry Run,確認資料夾結構與檔案數量是否與飛行紀錄相符,以便在遺漏的資料夾演變成客戶端問題之前及早發現。

## 使用 Folder Compare 核實交付成果

在將專案交付客戶或封存之前,使用 Folder Compare 檢查已上傳到雲端儲存的所有內容是否與本機處理資料夾一致。它會標示出僅存在於一側的檔案以及大小不同的檔案,讓你能在客戶發現正射影像中缺少圖磚之前,及早察覺中斷的上傳。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中將本機無人機測繪檔案與雲端儲存進行比較" class="img-large img-center" />

對於經常合作的測繪客戶,可以將這些流程儲存為排程同步工作(需要 PLUS 授權),讓每次新的飛行資料依照你設定的排程送達正確的客戶資料夾,而 Job History 會記錄每個資料集確切的交付時間。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 為本機影像磁碟、處理工作區與客戶交付用的雲端儲存新增遠端。
3. 依照典型的飛行資料集大小調整傳輸並行度,設定一項同步工作。
4. 在封存原始影像之前,每次上傳後都執行 Folder Compare,確認資料集已完整傳輸。

在多個儲存層之間保持飛行資料井然有序,能減少尋找檔案的時間,並讓你更有信心確保每一次客戶交付都是完整的。

---

**相關指南:**

- [農業領域的雲端儲存 — 使用 RcloneView 管理田間資料](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [使用 RcloneView 進行建築專案管理的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [使用 RcloneView 加速大型雲端傳輸](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
