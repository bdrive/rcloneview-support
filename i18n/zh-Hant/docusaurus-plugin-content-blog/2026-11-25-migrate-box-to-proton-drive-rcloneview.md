---
slug: migrate-box-to-proton-drive-rcloneview
title: "將 Box 移轉到 Proton Drive — 使用 RcloneView 傳輸檔案"
authors:
  - casey
description: "使用 RcloneView 將檔案從 Box 移到 Proton Drive。連接兩個雲端、用 Dry Run 預覽、複製資料夾，並以 Folder Compare 驗證移轉結果。"
keywords:
  - 將 box 移轉到 proton drive
  - box 到 proton drive 傳輸
  - 將檔案從 box 移到 proton drive
  - box 移轉工具
  - proton drive 移轉
  - 雲端到雲端移轉
  - 加密雲端儲存移轉
  - RcloneView box
  - RcloneView proton drive
tags:
  - RcloneView
  - box
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Box 移轉到 Proton Drive — 使用 RcloneView 傳輸檔案

> 不必先把所有內容下載到筆電，就能將 Box 資料夾移到 Proton Drive 的端對端加密儲存空間。

團隊與自由工作者常因協作功能而從 Box 起步，之後再把敏感的封存資料移到重視隱私的 Proton Drive。手動操作代表要從 Box 下載數 GB 資料，再透過瀏覽器重新上傳。RcloneView 在同一個視窗中連接這兩項服務，讓你能直接複製資料夾、檢查結果，並保留一個可重複執行的工作來處理之後新增的內容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Box 與 Proton Drive

開啟 **Remote tab > New Remote**，先新增 Box。Box 使用 OAuth，因此會開啟瀏覽器視窗讓你登入並核准存取——不需要複製 API 金鑰。如果你的組織使用 Box for Business，請在遠端設定中設定 `box_sub_type = enterprise`，讓 RcloneView 能看到你的企業資料夾。

接著，使用你的 Proton 電子郵件與密碼新增 Proton Drive；若帳戶啟用了 2FA，還需輸入 2FA 驗證碼。Proton Drive 支援需要 rclone v1.69 或更新版本；RcloneView 內建的嵌入式 rclone 符合此要求，底部列會顯示目前使用的版本。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Box 與 Proton Drive 遠端" class="img-large img-center" />

## 規劃傳輸

在左側 Explorer 面板開啟 Box，右側開啟 Proton Drive。對 Box 的最上層資料夾使用 **Get Size**，查看要搬移的資料量，並在 Proton Drive 中建立與你想保留之結構相對應的目的地資料夾結構。

Box Notes 和其他 Box 原生文件並不是一般檔案。在同步精靈的 **Filtering Settings** 中，預先定義的 **Box Docs** 篩選器可以幫助你有意識地處理它們，而不是在傳輸過程中才發現。請在移轉前，先在 Box 內匯出這些格式中你需要的內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中並排開啟 Box 與 Proton Drive 進行雲端到雲端傳輸" class="img-large img-center" />

## 執行移轉

如果只有少量資料夾，直接將它們從 Box 面板拖曳到 Proton Drive 面板即可——在不同遠端之間拖曳會複製資料。若要完整移轉，請建立以 Box 為來源、Proton Drive 為目的地的 **Sync** 工作。Proton Drive 會在用戶端加密檔案，因此從適中的並行數開始較為穩妥；如果出現錯誤，可以在 Advanced Settings 中降低檔案傳輸數量。

務必先點擊 **Dry Run**。它會列出將被複製與將被刪除的內容，防止意外鏡像破壞 Proton Drive 中的現有內容。接著執行工作，並在 **Transferring** 分頁中查看進度、速度與檔案數。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 的 Transferring 分頁中監控 Box 到 Proton Drive 的傳輸" class="img-large img-center" />

## 取消 Box 之前先驗證

工作完成後，開啟 **Compare**，一側是 Box 資料夾，另一側是 Proton Drive 資料夾。僅左側存在的檔案代表未能移轉過去的內容；使用 Copy right 補齊缺口。Job History 會記錄每次執行的狀態、大小與檔案數，供你留存紀錄。

RcloneView 在 Windows、macOS 和 Linux 上透過一個視窗掛載與同步 90+ 供應商，因此同樣的設定也適用於你的下一次移轉。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History 確認 Box 到 Proton Drive 的移轉已完成" class="img-large img-center" />

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過瀏覽器登入新增 Box，並使用電子郵件、密碼與選用的 2FA 新增 Proton Drive。
3. 建立從 Box 到 Proton Drive 的 Sync 工作，並以 Dry Run 預覽。
4. 執行工作，然後在關閉 Box 帳戶之前用 Folder Compare 確認結果。

經過仔細驗證的移轉，讓你能放心地搬到加密儲存空間，確信沒有遺漏任何內容。

---

**相關指南：**

- [管理 Box 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Proton Drive — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 將 Dropbox 移轉到 Proton Drive](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)

<CloudSupportGrid />
