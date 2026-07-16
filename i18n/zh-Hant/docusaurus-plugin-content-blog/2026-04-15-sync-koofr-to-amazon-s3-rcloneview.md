---
slug: sync-koofr-to-amazon-s3-rcloneview
title: "將 Koofr 同步至 Amazon S3 — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "使用 RcloneView 將 Koofr 同步至 Amazon S3 — 透過可靠的 rclone GUI，在歐洲雲端儲存與 AWS S3 之間傳輸檔案。"
keywords:
  - Koofr to Amazon S3 sync
  - Koofr backup to S3
  - cloud sync tool
  - RcloneView Koofr
  - S3 archiving
  - cloud-to-cloud sync
  - AWS backup
  - European cloud to S3
  - Koofr rclone sync
  - GDPR cloud to S3
tags:
  - RcloneView
  - koofr
  - amazon-s3
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Koofr 同步至 Amazon S3 — 使用 RcloneView 進行雲端備份

> Koofr 在歐洲代管的儲存服務與 Amazon S3 的全球耐久性扮演著互補的角色 — RcloneView 直接在兩者之間進行同步，打造無需佔用本機硬碟空間的跨供應商備份策略。

Koofr 位於歐洲的資料中心與符合 GDPR 規範的基礎架構，使其成為強大的主要儲存平台，而 Amazon S3 則提供世界級的耐久性以及 CDN 整合，非常適合用於封存與內容發布。在兩者之間進行同步，可以建立穩健的雙層策略：將工作資料保留在 Koofr 位於歐洲的資料中心，同時封存至 S3 以達到長期成本最佳化。RcloneView 直接在兩個遠端之間處理同步，完全不需要經過本機硬碟。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定兩個遠端

在 RcloneView 中，透過 **Remote tab > New Remote > Koofr** 新增 Koofr 並輸入您的憑證。接著新增 **Amazon S3**：從供應商清單中選取，並輸入您的 Access Key ID、Secret Access Key 與 AWS Region。啟用兩個遠端後，開啟雙面板檔案總管 — 一側顯示 Koofr，另一側顯示您的 S3 儲存桶 — 即可並排檢視您的儲存內容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Amazon S3 remotes in RcloneView" class="img-large img-center" />

這種直接比對的方式有助於規劃：檢視 Koofr 中的內容、確認您想要的 S3 儲存桶結構，並在開始同步工作之前驗證資料夾名稱。

## 設定同步工作

在 **Job Manager** 中，建立一個從 Koofr 資料夾同步到目標 S3 儲存桶路徑的同步工作。以某合規團隊為例，他們需要將 Koofr 中的敏感文件備份至 S3 Standard-IA 以達到具成本效益的保留策略，此同步工作可透過排程功能（PLUS 授權）每週執行一次。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Amazon S3 sync job in RcloneView" class="img-large img-center" />

RcloneView 的篩選選項可讓您將同步範圍限制在特定檔案類型 — 例如，僅同步 `.pdf` 與 `.docx` 檔案，同時排除暫存檔與縮圖。**Max File Age** 篩選功能可進一步將同步限制在近期修改過的檔案上，讓漸進式執行保持快速且聚焦。

## 監控與驗證

在初次同步完成後，後續執行只會傳輸有變動的內容 — RcloneView 會比對檔案大小與修改日期以找出差異。**Job History** 分頁會顯示每次同步的結果，包含傳輸的位元組數、檔案數量、耗時與狀態。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to S3 sync runs in RcloneView" class="img-large img-center" />

對於將 Koofr 作為符合 GDPR 規範的主要儲存空間、並將 S3 作為封存層的組織而言，此同步模式建立了清晰的資料生命週期：資料在 Koofr 中保持活躍狀態，並依排程封存至 S3。**Folder Compare** 功能可在需要時提供時間點驗證，確認兩個平台的內容是否同步一致。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 **Koofr** 遠端（憑證）與 **Amazon S3** 遠端（Access Key）。
3. 在 **Job Manager** 中建立從 Koofr 到 S3 的同步工作。
4. 啟用排程功能（PLUS）以自動執行定期備份。

RcloneView 將雙雲端架構轉變為受管理的自動化工作流程 — Koofr 負責合規，S3 負責封存，透過同步讓兩者保持最新狀態。

---

**相關指南：**

- [管理 Koofr 儲存空間 — 使用 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr 作為多雲端樞紐 — 使用 RcloneView 整合 Google Drive、OneDrive、Dropbox](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [使用 RcloneView 將 Dropbox 備份至 AWS S3](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
