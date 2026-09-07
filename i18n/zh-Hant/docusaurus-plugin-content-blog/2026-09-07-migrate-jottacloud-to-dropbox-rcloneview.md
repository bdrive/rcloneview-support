---
slug: migrate-jottacloud-to-dropbox-rcloneview
title: "將 Jottacloud 遷移到 Dropbox — 用 RcloneView 傳輸檔案"
authors:
  - alex
description: "使用 RcloneView 將檔案從 Jottacloud 遷移到 Dropbox。同步資料夾、驗證傳輸,並在同一個視窗中管理兩個遠端連線。"
keywords:
  - Jottacloud 遷移到 Dropbox
  - Jottacloud 到 Dropbox 傳輸
  - Jottacloud Dropbox 遷移
  - RcloneView jottacloud
  - RcloneView dropbox
  - 雲端對雲端傳輸
  - 雲端儲存之間移動檔案
  - Jottacloud 替代方案
  - Dropbox 遷移工具
  - 歐洲雲端儲存遷移
tags:
  - RcloneView
  - jottacloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Jottacloud 遷移到 Dropbox — 用 RcloneView 傳輸檔案

> 不必先下載到桌面,就能把檔案從 Jottacloud 移動到 Dropbox。

因歐洲資料落地而選擇 Jottacloud 的團隊,有時會在與國際夥伴的協作變得更優先後,需要整合到 Dropbox。先把所有內容下載到本機再重新上傳,不僅浪費頻寬,還可能破壞資料夾結構。RcloneView 可同時連接兩個遠端,直接在兩者之間搬移檔案,因此傳輸是雲端對雲端進行的。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 並排連接 Jottacloud 與 Dropbox

透過「遠端」分頁 > 新增遠端,加入這兩個儲存帳戶。Dropbox 只需標準的瀏覽器登入即可連線,不必管理任何 API 金鑰。加入後,每個遠端都會在 Explorer 面板中擁有自己的分頁,你可以在一個面板開啟 Jottacloud、另一個面板開啟 Dropbox,在搬移任何內容之前直接並排檢視兩邊的資料夾結構。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增雲端遠端連線" class="img-large img-center" />

在開始傳輸前先瀏覽兩個帳戶,能確認資料夾命名慣例是否一致,或者如果來源端隨時間變得雜亂,可以在 Dropbox 那一側規劃新的結構。

## 執行雲端對雲端傳輸

使用「首頁」分頁中的同步精靈,將 Jottacloud 設為來源,Dropbox 設為目的地。將同步方向設為單向,如此 Dropbox 會鏡像來源內容,而 RcloneView 不會反過來刪除 Jottacloud 上的任何東西。在步驟 3 套用篩選條件,略過新位置不需要的檔案類型——排除 `.iso` 檔案或整個 `.git/` 資料夾,能讓傳輸專注在真正重要的內容上。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="設定從 Jottacloud 到 Dropbox 的雲端對雲端同步工作" class="img-large img-center" />

先執行一次 Dry Run。它會在不動到任一帳戶的情況下,準確列出即將複製的檔案,是在錯誤設定的篩選條件影響數千個檔案之前發現問題的最好方法。

## 驗證每個檔案是否都正確送達

傳輸完成後,開啟 Folder Compare,並指向 Jottacloud 與 Dropbox 上相同的路徑。大小相符的檔案會顯示為相同;有差異或複製失敗的項目會被標示出來,方便你只重新執行那些項目。RcloneView 可從 Windows、macOS 與 Linux 上的同一個視窗掛載並同步 90 多個服務商,因此無論比較哪兩個雲端,這個驗證步驟都以相同方式運作。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="遷移後比較 Jottacloud 與 Dropbox 資料夾" class="img-large img-center" />

Job History 會記錄已完成同步的大小、速度與檔案數量,為你提供一份紀錄,方便日後有人詢問遷移情況時參考。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 從「遠端」分頁新增你的 Jottacloud 與 Dropbox 遠端連線。
3. 建立一個以 Jottacloud 為來源、Dropbox 為目的地的單向同步工作,然後執行 Dry Run。
4. 執行同步,並用 Folder Compare 確認結果。

驗證完成後,建議讓兩個遠端再保持連線一段時間,以便在切換完全結束前,能捕捉到新增到舊 Jottacloud 帳戶中的任何檔案。

---

**相關指南:**

- [管理 Jottacloud 儲存 — 用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [管理 Dropbox 儲存 — 用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [將 Jottacloud 遷移到 Wasabi — 用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-jottacloud-to-wasabi-rcloneview)

<CloudSupportGrid />
