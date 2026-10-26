---
slug: migrate-box-to-pcloud-rcloneview
title: "將 Box 遷移到 pCloud — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "使用 RcloneView 將 Box 遷移到 pCloud:連接兩個遠端,執行 Dry Run,進行雲端對雲端複製,並用 Folder Compare 驗證結果。"
keywords:
  - 將 Box 遷移到 pCloud
  - Box 到 pCloud 傳輸
  - 將 Box 檔案移動到 pCloud
  - Box pCloud 遷移
  - RcloneView 雲端對雲端
  - Box 到 pCloud 同步
  - rclone GUI
  - 雲端遷移工具
  - 驗證雲端傳輸
  - Box 替代儲存
tags:
  - RcloneView
  - box
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Box 遷移到 pCloud — 使用 RcloneView 傳輸檔案

> 在複製之前先預覽,複製之後再比較,一次可控地將 Box 資料夾遷移到 pCloud。

不再適合使用 Box 工作區的團隊,或希望自行掌控個人儲存空間的自由工作者,常常面臨同樣的麻煩:巢狀的專案資料夾中有數千個檔案,需要完整地轉移到新帳戶。透過瀏覽器下載再重新上傳既慢又不穩定。RcloneView 將 Box 和 pCloud 並排連接,並在兩者之間直接傳輸,因此無需在本機磁碟上暫存任何內容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Box 和 pCloud 連接為遠端

在 RcloneView 中,這兩項服務都使用以瀏覽器為基礎的 OAuth 登入。開啟 **Remote > New Remote**,選擇 Box,並在開啟的瀏覽器視窗中核准存取。對 pCloud 重複同樣的步驟。如果您的檔案位於 Box Business 帳戶中,則需要設定企業子類型(`box_sub_type = enterprise`);個人帳戶不需要。

RcloneView 可在 Windows、macOS 和 Linux 上透過一個視窗掛載並同步 90 多個提供者,因此兩個遠端會作為同一個 Explorer 中的分頁出現。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中將 Box 和 pCloud 新增為新遠端" class="img-large img-center" />

## 複製之前先瀏覽兩端

在一個 Explorer 面板中開啟 Box,在另一個面板中開啟 pCloud。使用 Folder Tree 和 Get Size 估算要遷移的資料量,並決定是遷移全部內容還是只遷移一部分。在兩個不同的遠端之間拖曳會執行**複製**,因此在您準備好停用 Box 之前,原始檔案都不會受到影響。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="並排開啟 Box 和 pCloud 以進行雲端對雲端傳輸" class="img-large img-center" />

## 使用 Dry Run 建立 Copy 作業

對於超過少量檔案的情況,請建立作業而不是拖曳。在 Sync 精靈中,將 Box 設為來源,將 pCloud 資料夾設為目的地,然後選擇 **Copy** 作業類型,這樣目的地不會刪除任何內容。在進階設定中,啟用檢查碼比較;如果 Box 開始限流,請將 equality checker 的數量保持在較低水準。在篩選中,可以使用 Max file size 或 `.git/` 等排除規則略過不需要的檔案。

請先執行 **Dry Run**。它會列出將被複製和刪除的檔案,因此選錯資料夾的問題會在任何資料移動之前顯現。如果您不想複製 Box 的雲端原生文件,可以使用預先定義的 **Box Docs** 篩選器將其排除。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行 Box 到 pCloud 的 Copy 作業" class="img-large img-center" />

## 使用 Folder Compare 驗證

作業完成後,將 Box 放在左側、pCloud 放在右側,開啟 **Compare**。篩選僅存在於左側的檔案和有差異的檔案;仍然列出的項目需要再處理一次。Job History 會記錄每次執行的狀態、大小、速度和檔案數,可作為遷移已完成的有力證據。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 顯示 Box 與 pCloud 之間的差異" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Remote > New Remote** 新增 Box 和 pCloud,並使用 OAuth 登入。
3. 建立從 Box 到 pCloud 的 Copy 作業並執行 Dry Run。
4. 執行作業,然後在清理 Box 之前使用 Folder Compare 確認結果。

先複製後驗證的分階段遷移,可在 pCloud 擁有您所需的全部內容之前,確保 Box 資料的安全。

---

**相關指南:**

- [將 Box 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)
- [將 Box 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [管理 pCloud 儲存空間](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
