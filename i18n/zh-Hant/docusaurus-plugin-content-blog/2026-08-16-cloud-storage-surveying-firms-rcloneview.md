---
slug: cloud-storage-surveying-firms-rcloneview
title: "測繪公司的雲端儲存 — 使用 RcloneView 管理大型現場資料檔案"
authors:
  - tayson
description: "測繪公司需要處理龐大的 LiDAR、點雲與 GPS 資料集。了解 RcloneView 如何在雲端儲存之間同步、備份與掛載現場資料。"
keywords:
  - 測繪人員雲端儲存
  - LiDAR 點雲備份
  - 土地測繪資料管理
  - GPS 現場資料同步
  - 測繪公司雲端儲存
  - 大檔案雲端同步工具
  - 用於測繪的 RcloneView
  - 地理空間資料雲端備份
  - 無人機測繪資料儲存
  - 工程公司多雲備份
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

# 測繪公司的雲端儲存 — 使用 RcloneView 管理大型現場資料檔案

> 點雲、LiDAR 掃描資料與 GPS 測繪資料累積得很快 —— RcloneView 讓現場團隊與辦公室以同一份同步資料集協作。

土地測繪、地理空間與土木工程公司產生了各行業中最沉重的檔案負載之一:原始 LiDAR 掃描、無人機攝影測量資料集,以及每個工地很容易達到數十 GB 的全站儀點雲資料。現場筆電很快就會存滿,而在沒有緩慢的每晚手動上傳的情況下,將這些資料安全送入中央封存,是一個實際存在的作業瓶頸。RcloneView 為測繪團隊提供單一視窗,可在現場儲存、雲端封存與辦公室之間移動資料,不論公司已在使用哪些服務商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 集中管理多個工地的資料

測繪團隊從現場返回時,資料通常存放在本機硬碟、NAS 裝置,或工地拖車中架設的 FTP/SFTP 伺服器上。RcloneView 可連接所有這些儲存,加上 90+ 雲端服務商 —— 包括許多公司用於長期封存原始掃描資料的 S3 相容物件儲存。同時開啟兩個以上的檔案總管面板,專案經理就能並排瀏覽現場筆電的原始資料夾與公司的雲端封存,在清空本機儲存前確認資料是否已準確到位。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中於本機儲存與雲端封存之間傳輸測繪資料" class="img-large img-center" />

**Get Size(取得大小)**動作在這裡特別有用 —— 在開始傳輸前於專案資料夾按右鍵計算總大小,讓團隊能依遠端站點的頻寬限制來規劃,而不是啟動一個會中途卡住的上傳。

## 自動化現場儲存的夜間上傳

與其依賴有人在每天結束時記得複製檔案,不如從現場工作站的專案資料夾到雲端封存遠端設定一個 Sync 工作。篩選規則可排除暫時的掃描器快取檔案或縮圖預覽,確保只上傳完成的資料集。RcloneView 可在單一視窗中掛載並同步 90+ 服務商,支援 Windows、macOS 與 Linux,因此不論現場裝置是 Windows 筆電還是執行掃描軟體的 Linux 工作站,同一份工作設定都能正常運作。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="執行排程同步工作將測繪資料上傳至雲端儲存" class="img-large img-center" />

## 清空本機儲存前驗證上傳

因上傳失敗而遺失一天的 LiDAR 掃描資料,重新採集的代價相當高。在任何同步操作前執行 **Dry Run(模擬執行)**,預覽將要傳輸的內容,之後再使用 **Folder Compare(資料夾比較)**逐檔確認雲端副本與現場資料一致 —— 包含大小檢查 —— 接著才刪除本機原始檔案,為下一個工地騰出磁碟空間。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="將本機測繪資料資料夾與雲端封存進行比較以驗證" class="img-large img-center" />

## 保持辦公室封存井然有序

資料抵達雲端後,排程中的同步工作可將已完成的專案鏡射至第二個封存遠端以提供備援,Job History(工作歷史)提供帶時間戳記的傳輸紀錄 —— 有助於客戶交付物追蹤與內部品保。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程定期的測繪資料備份工作" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 連接你的現場儲存(SFTP、本機磁碟或 NAS)與雲端封存遠端。
3. 建立一個含篩選規則(排除暫時掃描器檔案)的 Sync 工作,然後執行 Dry Run。
4. 安排此工作於每個現場工作日後執行,並在 Job History 中確認完成情況。

隨著現場資料每晚可靠地傳輸至雲端,測繪團隊能減少盯著上傳進度的時間,把更多心力投入下一個工地。

---

**相關指南:**

- [營建專案管理的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [建築、工程與 CAD 的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-architecture-engineering-cad-rcloneview)
- [使用 RcloneView 的多雲備份策略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
