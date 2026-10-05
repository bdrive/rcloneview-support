---
slug: migrate-mega-to-cloudflare-r2-rcloneview
title: "將 Mega 遷移到 Cloudflare R2 — 使用 RcloneView 傳輸檔案"
authors:
  - robin
description: "使用 RcloneView 將 Mega 遷移到 Cloudflare R2：連接兩個遠端，執行 Dry Run，進行雲端對雲端傳輸，並透過 Folder Compare 驗證。"
keywords:
  - 將 Mega 遷移到 Cloudflare R2
  - Mega 到 R2 傳輸
  - Mega 備份到 R2
  - 雲端對雲端遷移
  - Cloudflare R2 物件儲存
  - Mega 雲端儲存
  - RcloneView
  - rclone GUI
  - 從 Mega 移動檔案
tags:
  - RcloneView
  - mega
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Mega 遷移到 Cloudflare R2 — 使用 RcloneView 傳輸檔案

> 使用 RcloneView 將 Mega 資料庫遷移到 Cloudflare R2 儲存貯體，並在執行前預覽作業。

Mega 適合個人儲存，但需要儲存貯體式存取、S3 相容 API，或希望將儲存與分享明確分開的專案，往往最終會遷移到物件儲存。RcloneView 將 Mega 與 Cloudflare R2 作為遠端連接起來，並在一個作業中完成兩者之間的傳輸，同時提供預覽、監控以及每次執行的歷程記錄。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Mega 與 Cloudflare R2

開啟 New Remote 並選擇 Mega。它使用帳戶憑證：您的電子郵件與密碼。接著建立 R2 遠端。在 Cloudflare 儀表板中建立儲存貯體，並產生具有 Admin Read & Write 權限的 API 權杖。RcloneView 會要求您提供權杖憑證、Account ID 以及格式為 `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` 的端點。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Mega 與 Cloudflare R2 遠端" class="img-large img-center" />

RcloneView 在 Windows、macOS 與 Linux 上支援 90 多種雲端儲存服務，儲存後兩個遠端會並排顯示在 Explorer 中。

## 傳輸前先預覽

開啟兩個 Explorer 面板，左側放 Mega，右側放 R2 儲存貯體。在不同遠端之間拖曳是複製而不是移動，因此要快速複製可以直接拖曳資料夾。對於整個資料庫，請改用同步精靈：選擇 Mega 資料夾作為來源、儲存貯體作為目的地，然後執行 Dry Run 查看哪些檔案將被複製或刪除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mega 到 Cloudflare R2 的傳輸作業設定" class="img-large img-center" />

想像一位影片剪輯師在 Mega 上有 800 GB 的專案封存檔。在 Step 2 中，對於大量小檔案，您可以提高檔案傳輸數量；如果需要雜湊與大小檢查，可以啟用檢查碼比較。Step 3 的篩選器可以排除資料夾或限制檔案大小。

## 監控與驗證

作業開始後，Transferring 索引標籤會顯示進度、速度與檔案數量，必要時您可以取消執行。請留意錯誤，如果工作階段提前中斷，請重新執行作業。Job History 會保存狀態、耗時、大小與檔案數量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中監控 Mega 到 R2 的傳輸" class="img-large img-center" />

完成後，開啟 Folder Compare，一側放 Mega，另一側放 R2。Left-only 檔案會顯示儲存貯體中缺少的內容，您可以直接在比較檢視中將它們複製過去。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Mega 與 Cloudflare R2 之間的 Folder Compare" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView** [rcloneview.com](https://rcloneview.com/src/download.html)。
2. 使用電子郵件與密碼新增 Mega，使用 API 權杖、Account ID 與端點新增 Cloudflare R2。
3. 建立從 Mega 到 R2 儲存貯體的同步作業並執行 Dry Run。
4. 開始傳輸，然後使用 Folder Compare 確認結果。

經過預覽並以 Folder Compare 做最終檢查的遷移，可以讓您確認哪些內容已抵達 R2。

---

**相關指南：**

- [管理 Mega 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [管理 Cloudflare R2 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — 在 RcloneView 中傳輸前預覽同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
