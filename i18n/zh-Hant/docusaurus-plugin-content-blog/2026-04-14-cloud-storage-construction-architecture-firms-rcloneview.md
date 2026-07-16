---
slug: cloud-storage-construction-architecture-firms-rcloneview
title: "建築與營造公司的雲端儲存 — 用 RcloneView 簡化檔案管理"
authors:
  - tayson
description: "RcloneView 協助建築與營造公司在多家雲端儲存供應商之間管理大型 CAD 檔案、BIM 模型與專案封存，並自動執行備份。"
keywords:
  - 建築營造公司雲端儲存
  - 建築事務所雲端備份
  - CAD 檔案雲端儲存
  - BIM 雲端同步
  - 營造專案檔案管理
  - RcloneView 建築業
  - 建築師雲端備份
  - 專案封存雲端儲存
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

# 建築與營造公司的雲端儲存 — 用 RcloneView 簡化檔案管理

> 建築與營造公司需要處理龐大且不斷更新版本的檔案——Revit 模型、AutoCAD 圖面、點雲掃描資料——這些都需要可靠且排程化的雲端備份。RcloneView 讓你在單一 GUI 中完成所有這些工作。

一間中型建築事務所在每個進行中的專案中，每天都會產生數十 GB 的 BIM（建築資訊模型）資料。Revit 檔案動輒超過 1 GB；來自 LiDAR 測量的點雲掃描資料，每個工地可能達到 50–100 GB。當一個專案為期 18 個月、涉及三個辦公地點的 20 位協作者時，問題已經不是要不要使用雲端儲存，而是該用哪一層儲存方案、以及如何自動化整個工作流程。RcloneView 提供了檔案儲存與 90 多家雲端供應商之間所欠缺的那一層，且不需要 IT 人員維護自訂腳本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 跨雲端供應商管理專案封存

營造公司通常採用分層儲存策略：進行中的專案存放在 NAS 或共享伺服器上以便快速本機存取，而已完成專案的封存資料則轉移到 Backblaze B2 或 Amazon S3 Glacier 這類具成本效益的雲端儲存。RcloneView 可以在同一個介面中管理這兩層儲存。

設定一個同步工作，每晚將 `NAS:/Projects/Active/` 鏡像到 Backblaze B2，並另外設定一個複製工作，在專案標記為完成後，將已完成的專案從 B2 移至相容於 S3 Glacier 的深度封存。工作管理員負責處理排程，而「工作歷史」分頁則提供符合 ISO 19650 BIM 資料管理文件規範的稽核記錄。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly project archive sync jobs in RcloneView" class="img-large img-center" />

## 可靠地處理大型 CAD 與 BIM 檔案

Revit 與 AutoCAD 檔案體積龐大，編輯時經常被鎖定，且對不完整的傳輸相當敏感。RcloneView 由 rclone 驅動的同步引擎，會跳過被其他程序鎖定的檔案，並在「記錄」分頁中標示出來——避免上傳損毀的檔案。針對超大型檔案，可啟用 RcloneView 中的 **Chunker** 虛擬遠端，將超過供應商大小限制的檔案分割成可管理的區塊。

對於使用雲端 BIM 協作平台（Autodesk Construction Cloud、BIM 360）的公司，RcloneView 可將匯出的資料包——DWG 匯出檔、PDF 圖紙集、IFC 檔案——備份到次要雲端儲存，作為離線的安全網。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Uploading CAD project files to cloud storage with RcloneView" class="img-large img-center" />

## 工地照片與空拍測量資料儲存

營造文件記錄包含每日大量的工地照片與空拍測量成果——JPEG、RAW 以及正射影像 TIFF 檔案，數量累積得很快。一個每日進行照片記錄的工地，每週可能產生 5–15 GB 的資料。RcloneView 的篩選規則讓你能在專屬的照片備份工作中，只納入特定檔案類型（`.jpg`、`.tif`、`.raw`），使其與技術圖面封存分開管理。

使用 1 對多同步功能，將工地照片目錄同時備份到 Google Drive（方便團隊分享）與 Amazon S3（用於長期封存）。兩個目的地會在同一次工作執行中收到相同的檔案，且不會因此加倍上傳頻寬——RcloneView 會從來源同時串流到兩個目的地。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing site photos to multiple cloud destinations with RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在「遠端管理員」中新增你的 NAS、Backblaze B2 與 Amazon S3 遠端。
3. 為進行中的專案封存建立每晚執行的同步工作，並為已完成專案的搬移建立複製工作。
4. 新增篩選規則，讓每個工作只納入相關的 CAD、BIM 與照片檔案類型。

RcloneView 將臨時性的雲端上傳，轉變為結構化、排程化的備份系統——在不增加 IT 負擔的情況下，保護無可取代的專案資料。

---

**相關指南：**

- [用 RcloneView 打造建築與工程雲端儲存](https://rcloneview.com/support/blog/cloud-storage-architecture-engineering-cad-rcloneview)
- [用 S3 Glacier 與 RcloneView 打造冷封存](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [1 對多同步 — 用 RcloneView 傳輸至多個目的地](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
