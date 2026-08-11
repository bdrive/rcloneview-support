---
slug: predefined-filters-sync-file-types-rcloneview
title: "預先定義篩選器 — 在 RcloneView 中只同步您需要的檔案"
authors:
  - steve
description: "使用 RcloneView 的預先定義篩選器,只同步圖片、影片、音樂或文件,而不是傳輸整個資料夾。"
keywords:
  - RcloneView 篩選器
  - 預先定義篩選器
  - 同步檔案類型
  - 雲端同步篩選器
  - 選擇性同步
  - 僅同步圖片
  - 影片同步篩選器
  - 文件同步篩選器
  - Google Docs 篩選器
tags:
  - RcloneView
  - feature
  - filters
  - sync
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 預先定義篩選器 — 在 RcloneView 中只同步您需要的檔案

> 不必手動撰寫排除規則,即可略過不需要的檔案類型,只同步您真正需要的內容。

並非每個同步工作都應該搬移資料夾中的所有檔案。一間正在備份共用磁碟的攝影工作室,裡面塞滿了 RAW 檔案、PSD 檔案,以及隨手放在旁邊的幾張 PDF 發票,他們通常只在意圖片,而不是那些發票。RcloneView 的篩選設定步驟為常見檔案類別提供了一鍵式預先定義篩選器,讓您無需從零開始建立自訂規則組,就能將同步工作的範圍精確限定在真正重要的內容上。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 預先定義篩選器涵蓋的內容

同步精靈的第 3 步「篩選設定」為音樂、影片、圖片、文件、Google Docs 與 Box Docs 提供一鍵式預先定義篩選器。選擇其中一項會將工作限制在符合的檔案類型 — 例如選擇「圖片」,同步工作就會忽略來源資料夾中的其他所有內容,無論它巢狀嵌套多深,也無論旁邊還有什麼。

這對於隨時間累積而變得雜亂的混合內容資料夾尤其重要:行銷團隊的共用磁碟裡堆滿了匯出的影片、品牌文件和試算表,並不需要將全部內容原封不動地鏡像到影片封存遠端。單一預先定義篩選器就能讓目標資料夾保持整潔,而無需事後手動清理。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 同步精靈中選擇預先定義的檔案類型篩選器" class="img-large img-center" />

Google Docs 與 Box Docs 選項專門針對在傳輸過程中不像一般檔案那樣運作的供應商原生文件格式 — 當您從 Google Drive 或 Box 同步、並希望將原生文件與已上傳的二進位檔案分開時,這非常實用。

## 結合預先定義篩選器與自訂篩選器

預先定義篩選器並不排斥自訂規則。例如,您可以在預先定義的圖片篩選器上疊加額外的自訂排除項 — 例如一條 `/thumbnails/*` 路徑規則 — 以剔除原本會污染純圖片同步的產生縮圖檔案。自訂篩選器也支援最大檔案大小與最大檔案存留時間限制,因此擁有 2TB RAW 檔案的攝影工作室可以將圖片篩選器與檔案存留時間條件結合,只同步近期拍攝的內容,而非整個歷史封存。

與僅支援掛載的工具不同,RcloneView 在 FREE 授權下也提供同步與資料夾比較功能,因此無論您執行的是一次性傳輸,還是已儲存、可重複執行的工作,這種篩選方式都同樣適用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在兩個遠端之間僅傳輸圖片檔案的篩選同步工作" class="img-large img-center" />

## 使用試執行驗證篩選結果

在對較大或不熟悉的資料夾執行篩選同步之前,請先以試執行(Dry Run)模式執行一次。試執行會顯示在目前篩選設定下將被複製與刪除的確切檔案清單,是確認預先定義篩選器是否如預期運作、且沒有悄悄排除您實際想要傳輸的檔案的最快方法。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在執行前使用試執行預覽篩選同步工作" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增一個同步工作,並選擇您的來源遠端與目標遠端。
3. 在第 3 步「篩選設定」中,選擇符合您想同步之內容類型的預先定義篩選器。
4. 執行試執行以確認結果,然後儲存該工作,以便在後續同步中重複使用相同篩選器。

在同步層級進行篩選,而非事先手動整理檔案,能讓目標資料夾始終專注於您真正需要的內容。

---

**相關指南:**

- [試執行 — 在 RcloneView 中傳輸前預覽雲端同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [含篩選器的資料夾比較 — 在 RcloneView 中限制比較範圍](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Bisync — 使用 RcloneView 進行雙向雲端同步](https://rcloneview.com/support/blog/bisync-bidirectional-cloud-sync-rcloneview)

<CloudSupportGrid />
