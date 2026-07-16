---
slug: manage-amazon-s3-cloud-sync-backup-rcloneview
title: "管理 Amazon S3 儲存空間——使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "使用 RcloneView 管理 Amazon S3 儲存桶——透過簡潔的 GUI 介面在 S3 與其他雲端之間同步、備份及傳輸檔案。"
keywords:
  - Amazon S3 管理
  - S3 備份工具
  - S3 同步 GUI
  - Amazon S3 RcloneView
  - S3 儲存桶同步
  - 雲端儲存管理
  - S3 檔案傳輸
  - AWS S3 備份
  - S3 物件儲存 GUI
  - rclone S3 前端
tags:
  - amazon-s3
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Amazon S3 儲存空間——使用 RcloneView 同步與備份檔案

> Amazon S3 是物件儲存業界的標竿——RcloneView 將其儲存桶管理帶入視覺化、多雲端的介面，同時不犧牲 rclone 底層的強大功能。

Amazon S3 仍是物件儲存的黃金標準，但對於需要在不持續操作命令列的情況下取得成果的團隊來說，透過 AWS 主控台或 CLI 來管理儲存桶、同步資料及排程備份相當繁瑣。RcloneView 直接連接 S3，讓您能以拖放方式輕鬆傳輸、同步及備份檔案——並在同一個視窗中管理您所有其他的雲端遠端。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Amazon S3 連接至 RcloneView

若要在 RcloneView 中新增 S3 作為遠端，請開啟 **Remote** 分頁並點擊 **New Remote**。從供應商清單中選擇 **Amazon S3**，接著輸入您的 Access Key ID、Secret Access Key，以及您的儲存桶所在的 AWS 區域（例如 `us-east-1`）。儲存後，您的 S3 遠端會出現在檔案總管面板中，並以資料夾形式顯示所有可存取的儲存桶與前綴。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Amazon S3 as a new remote in RcloneView" class="img-large img-center" />

在檔案總管中，您可以像瀏覽本機檔案系統一樣瀏覽儲存桶內容——瀏覽前綴、檢查檔案大小，並確認修改時間戳記。麵包屑列會以 rclone 格式顯示您目前的 S3 路徑（例如 `mys3:mybucket/folder`），您可以直接複製並透過內建終端機用於 CLI 指令。

縮圖檢視能讓您一目了然地找出儲存在 S3 中的圖片，而檔案清單中的大小與日期欄則有助於找出佔用您儲存空間預算的大型或過時物件。

## 同步與備份檔案至 S3

RcloneView 的工作管理員可處理 S3 與其他任何儲存空間之間的同步流程。一個典型的情境是：將本地端 NAS 或本機資料夾同步至 S3 以進行災難復原。設定您的來源（本機路徑或另一個雲端遠端）與目的地（您的 S3 儲存桶路徑），配置同步模式，然後排程該工作每日或每週自動執行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Amazon S3 in RcloneView Job Manager" class="img-large img-center" />

多執行緒傳輸與並行檔案上傳設定，能讓大型備份工作明顯加快速度。RcloneView 底層的 rclone 支援 S3 原生的分段上傳功能——大型檔案會自動被拆分為多個區塊，平行上傳，並在 S3 端組裝完成。這能避免使用單一串流方式上傳超過 5 GB 的檔案時常見的逾時失敗問題。

對於需要驗證備份完整性的團隊，啟用校驗碼比對功能可確保檔案同時以大小與雜湊值進行驗證，在損毀悄然影響您的封存資料前及早發現。

## 跨儲存桶與跨帳戶傳輸

基礎架構團隊常見的情境是：在不同帳戶或區域的 S3 儲存桶之間搬移資料。在 RcloneView 中建立多個 S3 遠端——每個指向不同的 IAM 憑證或端點——並使用 Sync 或 Copy 工作類型在它們之間鏡像內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between two Amazon S3 remotes in RcloneView" class="img-large img-center" />

一家軟體公司若需將 500 GB 的部署成品複寫至次要區域以符合合規要求，便可將此設定為每晚排程的工作。工作歷史記錄分頁會記錄每次執行的傳輸大小、速度與狀態——無需額外工具即可提供稽核軌跡。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往 **Remote 分頁 > New Remote**，選擇 **Amazon S3**，並輸入您的 Access Key ID、Secret Access Key 與區域。
3. 在檔案總管面板中瀏覽您的 S3 儲存桶——瀏覽前綴、檢查檔案大小並確認內容。
4. 開啟 **Job Manager**，設定 S3 與您的本機儲存空間或其他雲端之間的同步或備份工作。

可靠的 S3 備份策略需要一致性與驗證——RcloneView 透過 GUI 消除撰寫指令碼的負擔，同時保留 rclone 的完整功能，兩者兼顧。

---

**相關指南：**

- [管理 Cloudflare R2 雲端儲存——使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 修復 S3 存取被拒的權限錯誤](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [使用 RcloneView 將 Backblaze B2 遷移至 AWS S3](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)

<CloudSupportGrid />
