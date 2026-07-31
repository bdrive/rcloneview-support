---
slug: fix-idrive-e2-sync-errors-rcloneview
title: "修復 IDrive e2 同步錯誤 — 用 RcloneView 排查 S3 相容儲存問題"
authors:
  - kai
description: "修復 RcloneView 中常見的 IDrive e2 同步錯誤,涵蓋存取金鑰問題、傳輸卡住與檔案不符,並提供清楚的逐步解決方案。"
keywords:
  - idrive e2 同步錯誤
  - 修復 idrive e2 rcloneview
  - idrive e2 存取金鑰錯誤
  - idrive e2 連線逾時
  - idrive e2 上傳失敗
  - rcloneview 疑難排解
  - idrive e2 s3 同步
  - idrive e2 備份錯誤
  - s3 相容儲存錯誤
  - 雲端儲存疑難排解
tags:
  - RcloneView
  - idrive-e2
  - troubleshooting
  - tips
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 IDrive e2 同步錯誤 — 用 RcloneView 排查 S3 相容儲存問題

> IDrive e2 同步工作拒絕憑證、傳輸中途卡住,或導致檔案不符?**RcloneView** 讓你能夠找出問題根源,重新讓傳輸順利進行。

IDrive e2 是一個 S3 相容的物件儲存服務,因此大多數同步問題都可歸結為幾種常見原因:錯誤的存取金鑰組合、錯誤的區域端點,或傳輸過程中發生網路異常。RcloneView 在 FREE 授權下即可以完整讀寫權限連接 IDrive e2,其 Job History、Log 分頁與 Dry Run 工具可協助你準確找出工作失敗的位置,而不必盲目重新執行。本指南將介紹最常見的 IDrive e2 同步錯誤,以及如何在 RcloneView 中逐一解決。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 存取金鑰或身分驗證遭拒

若 IDrive e2 遠端儲存突然回傳身分驗證錯誤,最常見的原因是:在 RcloneView 中設定該遠端儲存後,存取金鑰 ID 或私密存取金鑰在 IDrive e2 端被重新產生或撤銷,或是端點 URL 與帳戶所在區域不再相符。

**修復方法:**

開啟 Remote Manager,選取 IDrive e2 遠端儲存,然後從你的 IDrive e2 控制台重新輸入目前的存取金鑰 ID 與私密存取金鑰。仔細核對端點欄位是否與 IDrive e2 帳戶中顯示的確切區域一致,因為端點不符會產生與金鑰錯誤相同的拒絕訊息。若遠端儲存仍然失敗,請刪除後透過 New Remote 精靈重新建立乾淨的設定。

<img src="/support/images/en/blog/new-remote.png" alt="Reconfiguring an IDrive e2 remote in RcloneView" class="img-large img-center" />

## Job History 中同步工作卡住或顯示錯誤

若某項工作只複製了儲存桶的一部分就顯示「Errored」,或看起來在中途停滯,通常是因為暫時性的網路中斷、S3 端點的暫時速率限制,或是某個名稱有問題的物件阻擋了其餘批次。

**修復方法:**

查看 Job History 並以「Errored」篩選,確認究竟是哪次執行、在什麼時間點失敗。在工作精靈的 Step 2 中提高「Retry entire sync if fails」的次數 — 預設值 3 次即可自動復原大多數暫時性失敗。若特定物件持續失敗,可在 Step 3 中以自訂篩選規則將其排除,並確認其餘傳輸能夠完成。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry settings for an IDrive e2 sync job in RcloneView" class="img-large img-center" />

## 上傳緩慢或遭限速

物件儲存端點有時會對開啟過多同時連線串流的連線進行限速,這會表現為上傳速度遠低於預期,而非直接失敗。

**修復方法:**

在同步精靈的 Step 2 中調低「Number of file transfers」與「Number of multi-thread transfers」的數值 — 同時處理數量過高可能會在部分 S3 相容後端觸發限速。變更後在 Transferring 分頁觀察速度是否穩定,並啟用檢查碼比對,避免重試的檔案被不必要地重新傳輸。

## 同步後檔案不符

若同步完成後 IDrive e2 上的物件數量或大小與來源不一致,這通常是同步方向設定錯誤,或篩選規則排除了超出預期的內容,而非儲存端的問題。

**修復方法:**

在正式同步前執行 Dry Run,精確預覽將要複製或刪除的內容,在影響儲存桶之前就發現方向性錯誤。接著在來源與 IDrive e2 遠端儲存之間使用 Folder Compare — Folder Compare 的容量變化偵測工具能快速找出哪些資料夾存在差異,同步與比較功能在 RcloneView 的 FREE 授權下皆可使用。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and IDrive e2 bucket contents in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 若身分驗證失敗,重新輸入或重新建立你的 IDrive e2 遠端儲存。
3. 在 Job History 中確認確切的失敗點,並依此調整重試、篩選或執行緒設定。
4. 修復後執行 Dry Run 與 Folder Compare,確認往後的同步乾淨無誤。

先查看 Job History,再執行 Dry Run,最後進行 Compare — 這套簡短的診斷流程,無需開啟終端機就能解決大多數 IDrive e2 同步問題。

---

**相關指南:**

- [管理 IDrive e2 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [將 IDrive e2 作為 S3 相容雲端備份進行管理 — RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [用 RcloneView 修復 S3 分段上傳失敗問題](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
