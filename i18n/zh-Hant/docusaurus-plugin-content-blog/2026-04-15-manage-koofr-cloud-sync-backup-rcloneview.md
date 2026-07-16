---
slug: manage-koofr-cloud-sync-backup-rcloneview
title: "管理 Koofr 儲存空間——使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "使用 RcloneView 管理 Koofr 雲端儲存空間——透過建構於 rclone 之上的圖形化介面，進行同步、備份，並將 Koofr 與其他雲端服務串接。"
keywords:
  - Koofr 管理
  - Koofr 同步工具
  - Koofr 備份
  - RcloneView Koofr
  - Koofr 雲端儲存 GUI
  - Koofr 檔案傳輸
  - 歐洲雲端儲存
  - 多雲管理
  - GDPR 雲端備份
  - Koofr rclone
tags:
  - koofr
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Koofr 儲存空間——使用 RcloneView 同步與備份檔案

> Koofr 是一家注重隱私的歐洲雲端儲存服務供應商，擁有嚴謹的 GDPR 認證——RcloneView 可連接 Koofr，並將其整合進您的多雲備份與同步工作流程。

Koofr 是一項重視隱私的歐洲雲端儲存服務，以其對資料安全的承諾以及整合外部雲端帳戶的能力而著稱。搭配 RcloneView 使用 Koofr，能為您帶來額外一層的彈性——透過一個支援 90 多家雲端供應商、可同時運作的專屬多雲檔案管理介面，來管理 Koofr 的原生儲存空間。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Koofr 連接至 RcloneView

若要在 RcloneView 中新增 Koofr 作為遠端，請前往 **Remote tab > New Remote**，並從供應商清單中選擇 **Koofr**。輸入您的 Koofr 帳號憑證即可完成設定。儲存完成後，您的 Koofr 儲存空間會以可瀏覽遠端的形式顯示在檔案總管面板中——您可以直接瀏覽資料夾、檢視檔案大小，並管理內容，而無需開啟 Koofr 的網頁介面。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr as a new remote in RcloneView" class="img-large img-center" />

對於已經在使用 Koofr 帳戶聚合功能（透過 Koofr 介面連接 Dropbox、Google Drive 或 OneDrive 帳戶）的團隊來說，RcloneView 提供了一個互補的檢視方式——可獨立管理 Koofr 自身的儲存空間，同時與那些外部服務並行運作。

## 使用 Koofr 進行檔案同步

一位以 Koofr 作為個人備份目的地的自由接案開發者，可以在 RcloneView 的 **Job Manager** 中設定同步工作：以本機專案資料夾作為來源，Koofr 遠端作為目的地。RcloneView 會處理增量同步——後續執行時僅傳輸有變更的檔案，相較於完整重新上傳，能大幅減少頻寬使用量。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Syncing files to Koofr in RcloneView Job Manager" class="img-large img-center" />

Koofr 的資料中心位於歐洲，使其成為符合 GDPR 規範的理想備份目的地。需要以歐洲主機進行備份以符合法規要求的公司，可以使用 RcloneView 的排程功能（PLUS 授權）設定從內部檔案伺服器到 Koofr 的自動化傳輸。**Dry Run（試跑）**預覽功能可在任何資料被實際異動之前，確切確認哪些檔案將會移動，避免意外覆寫。

## 涉及 Koofr 的跨供應商傳輸

RcloneView 將 Koofr 視為與其他雲端遠端無異——您可以在 Koofr 與任何其他供應商之間自由設定傳輸作業。一家小型設計工作室每月將其 Google Drive 專案資料夾備份至 Koofr，做法是在雙面板檔案總管中於兩個遠端之間建立複製工作，並在執行前先確認雙方內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cross-provider transfer from Google Drive to Koofr in RcloneView" class="img-large img-center" />

**Folder Compare（資料夾比對）**功能可讓您將 Koofr 儲存空間與任何其他遠端進行比對，找出僅存在於其中一方而另一方沒有的檔案。這對於驗證近期傳輸是否完整、或在差異演變成資料遺失事件之前及早發現問題，都相當有幫助。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往 **Remote tab > New Remote**，選擇 **Koofr**，並輸入您的帳號憑證。
3. 在檔案總管面板中瀏覽您的 Koofr 儲存空間。
4. 在 **Job Manager** 中，於 Koofr 與您的本機儲存空間或其他雲端服務之間建立同步或複製工作。

對於重視隱私的使用者與需符合 GDPR 規範的團隊而言，透過 RcloneView 使用 Koofr 能提供專業級的雲端管理體驗，同時確保資料完全存放於歐洲境內。

---

**相關指南：**

- [Koofr 作為多雲樞紐——透過 RcloneView 串接 Google Drive、OneDrive、Dropbox](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Koofr 對比 Jottacloud——透過 RcloneView 比較歐洲雲端儲存服務](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)
- [使用 RcloneView 管理 Jottacloud 雲端同步與備份](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
