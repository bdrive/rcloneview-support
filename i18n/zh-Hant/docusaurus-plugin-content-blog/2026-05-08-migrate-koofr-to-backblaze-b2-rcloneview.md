---
slug: migrate-koofr-to-backblaze-b2-rcloneview
title: "將 Koofr 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "了解如何使用 RcloneView 將檔案從 Koofr 雲端儲存遷移至 Backblaze B2 物件儲存 — 具備校驗碼驗證與大型傳輸的自動重試功能。"
keywords:
  - Koofr to Backblaze B2 migration
  - migrate Koofr B2 RcloneView
  - Koofr Backblaze B2 transfer
  - switch Koofr to B2 storage
  - cloud migration Koofr
  - Koofr backup Backblaze B2
  - Koofr to S3 migration guide
  - rclone Koofr B2 GUI
tags:
  - koofr
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Koofr 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 透過單一 RcloneView 工作，將您的 Koofr 雲端儲存資料庫移動至 Backblaze B2 物件儲存 — 具備驗證、監控功能,並可在中斷後接續傳輸。

Koofr 是一個注重隱私的歐洲雲端儲存服務,同時也作為連接其他雲端帳戶的中樞。如果您因封存或成本考量而想整合至 Backblaze B2,RcloneView 可直接在這兩個供應商之間處理遷移作業 — 不需要本機下載。檔案會透過 rclone 的傳輸引擎,從 Koofr 以 WebDAV 為基礎的後端串流直接傳送至您的 B2 儲存桶。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定 Koofr 與 Backblaze B2 遠端

針對 Koofr,前往 **Remote 分頁 → New Remote**,並從供應商清單中選取 Koofr。Koofr 支援 OAuth 登入 — RcloneView 會開啟瀏覽器視窗供您使用 Koofr 帳戶進行驗證。或者,如果您偏好以密碼方式存取,可以在 Koofr 帳戶設定中產生應用程式密碼,並搭配您的 Koofr 電子郵件使用。

針對 Backblaze B2,請輸入從 B2 主控台產生的 Application Key ID 與 Application Key。在設定中指定儲存桶名稱。兩個遠端都儲存完成後,將 Koofr 放在左側檔案總管面板,B2 放在右側,以確認兩者皆可正常瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and Backblaze B2 in RcloneView" class="img-large img-center" />

## 執行遷移

在 Home 分頁點擊 **Sync**,並設定工作:以 Koofr 資料夾作為來源、B2 儲存桶作為目的地。在進階設定中,啟用 **Checksum** 以進行完整性驗證。Koofr 內部使用 WebDAV,這意味著檔案列表速度可能略慢於原生 S3,因此請將 checkers 數量設為 4,以避免對 Koofr API 造成過大負擔。

請先執行 **Dry Run**,以查看將要傳輸的完整檔案清單。這對於大型 Koofr 資料庫特別有用,因為 Koofr 也會彙整來自其他已連接帳戶(Google Drive、Dropbox 等)的檔案 — 試跑可協助您確認自己遷移的僅是實際的 Koofr 儲存內容,而非其他供應商的鏡像檢視畫面。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Backblaze B2 migration in progress in RcloneView" class="img-large img-center" />

## 處理中斷的傳輸

如果遷移過程中斷(網路中斷、電腦休眠等),RcloneView 的同步模式本質上是可接續的。當您重新執行相同的 Sync 工作時,rclone 會比對來源與目的地,僅傳輸尚未存在或在 B2 端有差異的檔案。已經傳輸完成的檔案不需要重新傳送。

遷移完成後,使用 **Folder Compare** 來驗證 Koofr 來源與 B2 目的地是否一致。比對檢視畫面會標示出存在於 Koofr 但缺少於 B2 的任何檔案,提供您一份清晰的檢查清單,列出需要重試的項目。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Koofr to B2 migration runs" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Koofr(OAuth)與 Backblaze B2(Application Key)作為遠端。
3. 執行試跑以確認範圍,然後啟用校驗碼執行遷移。
4. 完成後使用 Folder Compare 驗證遷移是否完全成功。

使用 RcloneView 將 Koofr 遷移至 Backblaze B2 是一個可靠、可接續的流程,能在整個過程中保護您的資料完整性。

---

**相關指南:**

- [使用 RcloneView 管理 Koofr 雲端儲存](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Koofr 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [使用 RcloneView 管理 Backblaze B2 雲端儲存](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
