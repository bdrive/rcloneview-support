---
slug: migrate-jottacloud-to-pcloud-rcloneview
title: "將 Jottacloud 遷移到 pCloud — 使用 RcloneView 傳輸檔案"
authors:
  - casey
description: "使用 RcloneView 將檔案從 Jottacloud 遷移到 pCloud:連接兩個遠端,以 Dry Run 預覽,執行雲端對雲端傳輸,並透過 Folder Compare 驗證。"
keywords:
  - Jottacloud 遷移到 pCloud
  - Jottacloud 到 pCloud 傳輸
  - Jottacloud pCloud 遷移
  - 雲端對雲端傳輸
  - RcloneView Jottacloud
  - RcloneView pCloud
  - 移動 Jottacloud 檔案
  - Jottacloud 替代方案
  - rclone GUI 遷移
tags:
  - RcloneView
  - jottacloud
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Jottacloud 遷移到 pCloud — 使用 RcloneView 傳輸檔案

> RcloneView 透過可預覽、可驗證的雲端對雲端傳輸,將 Jottacloud 資料庫遷移到 pCloud,而不必手動下載再重新上傳。

從 Jottacloud 切換到 pCloud,通常意味著多年累積的照片、文件與封存檔,沒有人願意手動下載再上傳。RcloneView 將兩個服務連接為遠端,並在它們之間傳輸資料,因此你可以在同一個視窗中預覽、執行並驗證遷移。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

開啟 Remote > New Remote 新增 Jottacloud,接著新增 pCloud。pCloud 使用 OAuth,因此會開啟瀏覽器視窗供你登入,遠端會自動連線。Jottacloud 則透過同一個 New Remote 精靈,依照提示完成設定。

在各自的 Explorer 面板中開啟每個遠端並瀏覽根資料夾。兩側都能列出內容,就表示在遷移任何資料之前連線已經正常。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Jottacloud 與 pCloud 遠端" class="img-large img-center" />

## 使用 Dry Run 預覽傳輸

將 Jottacloud 放在左側、pCloud 放在右側,可以拖曳資料夾快速複製,也可以為整個資料庫建立同步作業。在不同遠端之間,拖放執行的是複製而不是移動,因此在你另行決定之前,來源資料保持不變。

若要完整遷移,請在四步驟精靈中建立作業,選擇來源與目的資料夾,並先執行 Dry Run。它會列出將被複製或刪除的檔案,而不會做出任何變更。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 Jottacloud 到 pCloud 的雲端對雲端傳輸" class="img-large img-center" />

## 執行作業並觀察進度

啟動作業,並在 Transferring 分頁中追蹤進度、速度與檔案數量。對於大型資料庫,請在第 2 步中維持適中的傳輸數量,並將「Retry entire sync if fails」維持為 3,這樣短暫的網路中斷就不會使執行終止。

如果打算分階段遷移,可使用篩選步驟依資料夾、檔案時間或 Image、Document 等預先定義的類型加以限制。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中監控 Jottacloud 到 pCloud 的傳輸" class="img-large img-center" />

## 在取消任何帳號之前先驗證

開啟 Compare,將 Jottacloud 與 pCloud 並排顯示。顯示僅左側與不同的檔案,找出未送達的內容,然後只複製這些項目。在決定停用舊帳號之前,請在 Job History 中查看最終狀態。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中使用 Folder Compare 驗證遷移" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView**:從 [rcloneview.com](https://rcloneview.com/src/download.html) 取得。
2. 將 Jottacloud 與 pCloud 新增為遠端,並瀏覽兩者。
3. 建立從 Jottacloud 到 pCloud 的同步或複製作業,並執行 Dry Run。
4. 執行作業,然後用 Folder Compare 與 Job History 確認。

經過預覽與驗證的傳輸,可讓你切換儲存提供者,而不會危及現有檔案。

---

**相關指南:**

- [使用 RcloneView 將 Jottacloud 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [使用 RcloneView 將 pCloud 遷移到 Dropbox](https://rcloneview.com/support/blog/migrate-pcloud-to-dropbox-rcloneview)
- [管理 Jottacloud 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
