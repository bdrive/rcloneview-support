---
slug: migrate-cloudflare-r2-to-wasabi-rcloneview
title: "將 Cloudflare R2 遷移到 Wasabi — 使用 RcloneView 傳輸檔案"
authors:
  - robin
description: "使用 RcloneView 將儲存貯體從 Cloudflare R2 遷移到 Wasabi：連接兩個 S3 相容遠端，先 Dry Run，再在儲存貯體之間複製，並以 Folder Compare 驗證。"
keywords:
  - 將 Cloudflare R2 遷移到 Wasabi
  - R2 到 Wasabi 傳輸
  - 將 R2 儲存貯體遷移到 Wasabi
  - S3 相容儲存貯體遷移
  - 雲端到雲端傳輸
  - RcloneView Cloudflare R2
  - RcloneView Wasabi
  - 物件儲存遷移 GUI
tags:
  - RcloneView
  - cloudflare-r2
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Cloudflare R2 遷移到 Wasabi — 使用 RcloneView 傳輸檔案

> 在同一個視窗中把 Cloudflare R2 儲存貯體複製到 Wasabi，先做 Dry Run，完成後再直觀核對。

Cloudflare R2 和 Wasabi 都使用 S3 協定，因此兩者之間遷移資料在概念上很簡單——但如果直接使用 CLI 參數，就得處理兩個端點、兩組憑證，而且難以確認究竟傳了什麼過去。RcloneView 將兩者都作為遠端連接，讓你在 GUI 中完成複製、監控和驗證。使用 FREE 授權即可以完整讀寫權限連接 S3 相容服務。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個 S3 相容遠端

開啟 New Remote 對話方塊，先新增 Cloudflare R2。R2 需要 API 權杖、Account ID，以及形如 `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` 的端點。請在建立儲存貯體後到 Cloudflare 控制台產生權杖；RcloneView 的 R2 設定要求權杖具有 Admin Read & Write 權限。

接著新增 Wasabi。輸入 Wasabi 控制台中的 Access Key 和 Secret Key，並選擇與目的儲存貯體所在區域相符的端點。請事先在 Wasabi 中建立目的儲存貯體，或在 Explorer 面板中建立資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Cloudflare R2 和 Wasabi 遠端" class="img-large img-center" />

## 在雙面板中規劃複製

在左側 Explorer 面板開啟 R2 遠端，在右側開啟 Wasabi 遠端，然後進入要遷移的儲存貯體或前綴。對於擁有數 TB 媒體封存的工作室，可以先遷移一個專案前綴，確認權限和命名無誤後再遷移整個儲存貯體。

由於兩端都是遠端，RcloneView 會將其作為兩個遠端之間的雲端到雲端傳輸來執行，你不必自行手動管理先下載再上傳的步驟。當遠端不同時，在面板之間拖放預設為複製；也可以在 Sync 精靈中建立 Copy 作業以便重複執行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中的兩個面板之間進行雲端到雲端傳輸" class="img-large img-center" />

## Dry Run、調整與執行

正式傳輸之前，在作業精靈中啟用 Dry Run。它會準確列出將被複製的檔案，讓你在任何資料移動之前發現錯誤的前綴。在 Advanced Settings 中，對於包含大量小物件的儲存貯體可以提高檔案傳輸數；若希望依雜湊加大小而非僅依大小比對，可以啟用 checksum 比較。使用篩選步驟可以略過暫存資料夾或依檔案時間範圍限制。

從 Job Manager 啟動作業，並在 Transferring 分頁觀察進度：速度、檔案數和已傳輸位元組會即時更新。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 的 Job Manager 中執行遷移作業" class="img-large img-center" />

## 以 Folder Compare 驗證

作業完成後，將 R2 放在左側、Wasabi 放在右側開啟 Compare。篩選 left-only 檔案可查看缺漏項目，篩選 different 檔案可發現大小不一致。如果仍有遺漏，使用 Copy right 補齊，然後重新比較直到結果一致。可在 Job History 中查看本次執行的狀態、耗時和檔案總數。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中以 Folder Compare 驗證儲存貯體遷移" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html)**下載 RcloneView**。
2. 從 New Remote 新增你的 Cloudflare R2 和 Wasabi 遠端。
3. 在並排面板中開啟兩者，並執行 Dry Run 的 Copy 作業。
4. 執行作業，然後以 Folder Compare 確認結果。

在 Compare 顯示完全一致之前，請保持 R2 不變，這樣你就可以放心地切換儲存。

---

**相關指南：**

- [將 Wasabi 遷移到 Cloudflare R2](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 管理 Wasabi 儲存](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Cloudflare R2](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
