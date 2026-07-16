---
slug: cloud-storage-data-scientists-rcloneview
title: "資料科學家的雲端儲存——用 RcloneView 管理訓練資料與模型"
authors:
  - alex
description: "透過 RcloneView 在 S3、Google Drive 等平台上管理機器學習資料集、模型檢查點與實驗檔案——專為資料科學團隊打造。"
keywords:
  - cloud storage for data scientists
  - machine learning dataset cloud storage
  - ml model checkpoint backup cloud
  - data science cloud file management
  - training data s3 backup rcloneview
  - cloud storage ai researchers
  - backup ml datasets google drive s3
  - data science multi-cloud tool
  - rcloneview data science workflow
tags:
  - ai
  - industry
  - amazon-s3
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 資料科學家的雲端儲存——用 RcloneView 管理訓練資料與模型

> 資料科學家每天都要搬移大量資料——RcloneView 提供一個多雲端 GUI，讓你能在 S3、Google Drive 等平台上管理訓練資料集、模型檢查點與實驗輸出結果。

機器學習工作流程會產生龐大的檔案量：可能高達數百 GB 的原始資料集、預處理後的特徵儲存、訓練完成的模型檢查點，以及需要長期歸檔的實驗紀錄。在本機、雲端物件儲存與團隊共享磁碟之間搬移這些檔案既耗時，又可能因傳輸靜默失敗而帶來風險。RcloneView 為資料科學團隊提供一個視覺化檔案管理工具，可在 Windows、macOS 與 Linux 上，於單一視窗中橫跨 90 多個雲端服務商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在單一畫面中連接所有儲存空間

ML 流程往往同時橫跨多個儲存系統：用於訓練運行與模型產出的 Amazon S3 儲存桶、供團隊資料集使用的共享 Google Drive、用於原始資料收集的本地 NAS，或許還有用於低成本長期歸檔的 Backblaze B2 儲存桶。RcloneView 讓你能將每一個都新增為具名遠端，並在並排的檔案總管面板中開啟——在服務商之間拖放檔案並監控傳輸進度，無需在瀏覽器分頁或 CLI 工作階段之間切換。

RcloneView 可在單一視窗中管理 90 多個雲端服務商——S3、Google Drive、Backblaze B2 等——在 FREE 授權下即可免費同步與比較。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging training data files between cloud storage providers in RcloneView" class="img-large img-center" />

一個處理 200 GB 標註影像的電腦視覺團隊，可以同時連接他們的標註共享磁碟與 S3 訓練儲存桶，然後透過瀏覽兩個面板並選取變動的目錄，只複製新的批次資料。透過機構 WebDAV 或 Google Drive 分享的公開資料集，也能作為遠端使用，與私有 S3 儲存桶並存於同一個工作階段中。

## 透過即時傳輸監控傳輸大型模型檔案

上傳一個 15 GB 的檢查點檔案，或將多部分資料集同步至 S3，都需要可靠的回饋機制。RcloneView 的 **Transferring 分頁**會為每一個進行中的工作顯示每次傳輸的速度、已完成的位元組數與檔案數量。可設定的多執行緒傳輸設定會將大型檔案上傳拆分為並行的多股資料流，這對於像 Wasabi 或 Cloudflare R2 這類單檔案額外開銷會迅速累積的 S3 相容服務商而言，能大幅提升上傳速度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring for large ML dataset uploads in RcloneView" class="img-large img-center" />

如果傳輸因網路短暫中斷或 VPN 逾時而被打斷，重新執行同步工作會從中斷處接續：RcloneView 會跳過已經傳輸完成的檔案，並從剩餘部分繼續。對於 TB 等級的資料集而言，這能避免在重複重試上浪費數小時時間。

## 透過資料夾比較驗證資料集完整性

當預處理流程修改或擴增了本地資料集後，在啟動訓練運行之前，先確認雲端備份反映了目前狀態，能節省寶貴的 GPU 時間。RcloneView 的 **Folder Compare（資料夾比較）**檢視畫面會並排顯示任兩個資料夾——不論是本地或雲端——之間的差異，找出僅存在於左側、僅存在於右側，或檔案大小不同的項目。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison view showing dataset differences between local disk and S3 storage" class="img-large img-center" />

對資料科學家而言，這是訓練前的健全性檢查：在投入 GPU 預算之前，先確認雲端訓練目錄與預期的本地基準是否一致。被標記為不同的檔案可以個別複製以解決差異。在同步工作中啟用 **checksum verification（校驗和驗證）**，可以捕捉到僅靠檔案大小比對會遺漏的資料損毀情況。

## 透過排程同步自動化資料集備份

持續運行的資料收集流程，能從不需要手動觸發的自動雲端備份中受益。使用 PLUS 授權，RcloneView 的 crontab 風格排程器可在指定的時間間隔觸發同步工作——例如每晚在流程完成後，或在資料收集活躍期間每小時執行一次。**1:N 同步**功能可將一個來源目錄同時鏡像至多個目的地，因此單一個原始資料資料夾能在一次工作執行中同時備份到 S3 與 Google Drive。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an automated dataset backup job in RcloneView" class="img-large img-center" />

同步精靈第 3 步的過濾規則，讓你可以排除暫存檔案、檢查點中間產物與快取目錄，這些不該出現在乾淨備份中的內容——在不需撰寫自訂腳本的情況下降低儲存成本。

## 開始使用

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 Remote 分頁 > New Remote，將你的 S3 儲存桶（Amazon S3、Wasabi、Cloudflare R2）新增為遠端。
3. 在同一個工作階段中，將 Google Drive 或任何其他協作儲存空間新增為第二個遠端。
4. 建立從本地資料目錄到雲端目的地的同步工作——利用第 3 步的過濾規則排除暫存檔案與流程快取目錄。

你團隊的資料集、檢查點與實驗輸出結果，將變得可瀏覽且能可靠地備份，而不需要每位團隊成員都具備命令列專業知識。

---

**相關指南：**

- [使用 RcloneView 建立 AI 訓練資料集流程](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)
- [使用 RcloneView 管理 Amazon S3 雲端同步與備份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [使用 RcloneView 為 DevOps 與軟體團隊提供雲端儲存](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />
