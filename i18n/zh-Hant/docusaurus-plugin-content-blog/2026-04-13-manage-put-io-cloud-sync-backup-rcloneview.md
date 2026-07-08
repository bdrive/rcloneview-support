---
slug: manage-put-io-cloud-sync-backup-rcloneview
title: "管理 Put.io 儲存空間——使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "了解如何使用 OAuth 將 Put.io 連接到 RcloneView，瀏覽您的雲端檔案，並輕鬆將媒體內容同步到其他雲端服務或從其他雲端服務同步而來。"
keywords:
  - put.io RcloneView
  - put.io cloud sync
  - put.io backup
  - manage put.io files
  - put.io rclone GUI
  - put.io media management
  - cloud file transfer put.io
  - put.io sync cloud
tags:
  - RcloneView
  - putio
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Put.io 儲存空間——使用 RcloneView 同步與備份檔案

> Put.io 是一項雲端 BT 下載與下載服務，會將抓取的內容直接儲存在雲端——RcloneView 讓您輕鬆瀏覽、同步並備份這些檔案。

Put.io 讓您能夠將 BT 種子、直接連結和付費檔案託管內容直接抓取到雲端儲存中，因此深受媒體愛好者的喜愛。一旦檔案進入 Put.io，您就需要一種可靠的方式來搬移它們——無論是搬到本機磁碟、另一個雲端，還是個人封存空間。RcloneView 使用 OAuth 瀏覽器登入方式連接 Put.io，並提供完整的圖形化介面，讓您無需接觸命令列即可管理傳輸作業。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Put.io 連接到 RcloneView

開啟 RcloneView 並前往**遠端管理員**。點選**新增遠端**，捲動供應商清單，選擇 **Put.io**。RcloneView 會自動開啟瀏覽器進行 OAuth 驗證——登入您的 Put.io 帳號並授予存取權限。無需手動複製 API 金鑰，OAuth 流程會處理一切。

授權完成後，該遠端會出現在您的遠端管理員中。點選**開啟**即可啟動檔案總管並瀏覽您的 Put.io 儲存空間。您將會看到已儲存的檔案、依 BT 種子或下載工作分類的資料夾，以及您手動建立的任何目錄。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Put.io remote in RcloneView" class="img-large img-center" />

## 瀏覽與管理 Put.io 檔案

RcloneView 檔案總管以熟悉的樹狀與清單檢視方式顯示您的 Put.io 內容。您可以瀏覽資料夾、選取多個檔案，並直接從面板發起傳輸作業。如果您擁有龐大的媒體庫——電影、電視劇、音訊檔案——縮圖檢視能提供圖片網格，讓您快速辨識內容。

若要在 Put.io 與另一個雲端（例如 Google Drive 或 Backblaze B2）之間複製或搬移檔案，請開啟指向目的地遠端的第二個面板。在 Put.io 面板中選取檔案，按右鍵，選擇**複製**或**搬移**。在執行雲端對雲端操作時，RcloneView 會直接處理傳輸，不需先下載到本機。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Put.io to another provider" class="img-large img-center" />

## 為 Put.io 設定同步工作

對於定期備份，或是從 Put.io 單向同步到您的長期儲存空間，**工作**功能比手動傳輸更可靠。前往**工作**頁面，點選**新增工作**，並選擇您的 Put.io 遠端作為來源。將目的地設定為任何其他已設定的遠端——Backblaze B2 是經濟實惠的媒體封存常見選擇。

在工作設定步驟中，您可以啟用**試跑**功能，在正式執行前先預覽將要傳輸的檔案。當您的 Put.io 媒體庫很龐大，而您想確認同步範圍時，這個功能非常實用。確認無誤後，關閉試跑並執行工作。RcloneView 會在**工作紀錄**分頁中記錄每次傳輸的檔案數量、速度與狀態。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Put.io sync job in RcloneView" class="img-large img-center" />

## 使用情境：媒體內容工作流程

Put.io 使用者通常有幾種常見模式：將抓取的媒體封存到冷儲存空間、將內容鏡像到家用伺服器，或同步到 Google Drive 以透過第三方播放器串流播放。RcloneView 都能涵蓋這些需求。您可以為不同的 Put.io 子目錄建立獨立的工作——一個工作處理電影，另一個處理電視劇——並使用 PLUS 授權獨立排程這些工作。

當您不確定哪些內容已經複製過時，**資料夾比較**功能非常實用。並排開啟 Put.io 資料夾與您的目的地資料夾，RcloneView 會突顯差異之處，讓您只傳輸缺少的檔案。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Put.io transfer logs in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟**遠端管理員**，點選**新增遠端**，並選擇 **Put.io**。
3. 完成 OAuth 瀏覽器登入以授權存取。
4. 在檔案總管中開啟 Put.io 遠端，並設定同步工作到您偏好的目的地。

RcloneView 讓 Put.io 從被動的下載接收槽，轉變為您雲端儲存工作流程中積極運作的一環。

---

**相關指南：**

- [使用 RcloneView 將 pCloud 備份到 AWS S3](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [使用 RcloneView 進行雲端對雲端遷移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [工作紀錄與傳輸日誌監控](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
