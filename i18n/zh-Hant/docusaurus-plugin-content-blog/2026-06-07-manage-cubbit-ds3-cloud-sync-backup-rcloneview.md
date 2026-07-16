---
slug: manage-cubbit-ds3-cloud-sync-backup-rcloneview
title: "管理 Cubbit DS3 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - alex
description: "了解如何將 Cubbit DS3 連接至 RcloneView，並透過簡單的桌面 GUI 同步、備份或管理您的地理分散式歐洲雲端儲存。"
keywords:
  - Cubbit DS3 同步
  - Cubbit DS3 備份
  - Cubbit S3 相容儲存
  - RcloneView Cubbit
  - 歐洲雲端儲存備份
  - 地理分散式物件儲存
  - Cubbit DS3 設定指南
  - RcloneView 私有雲備份
  - S3 相容儲存管理
  - Cubbit DS3 檔案管理員
tags:
  - s3-compatible
  - object-storage
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Cubbit DS3 儲存空間 — 使用 RcloneView 同步與備份檔案

> RcloneView 透過 S3 協定連接至 Cubbit DS3，讓您無需撰寫任何 CLI 指令，即可瀏覽、同步並備份您的地理分散式歐洲雲端儲存。

Cubbit DS3 是一項地理分散式、S3 相容的物件儲存服務，建構於歐洲各地的節點之上。與集中式供應商不同，Cubbit 會將您的資料切割並加密後分散至一個分散式儲存單元網路中，對於需要遵守 GDPR 規範的團隊，或是希望採用「原生私密」設計儲存方案的使用者而言，是相當具吸引力的選擇。由於 Cubbit DS3 完全相容 S3，RcloneView 使用與其他 S3 供應商相同的憑證流程連接 — 無需任何特殊外掛或設定。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Cubbit DS3 連接至 RcloneView

開啟 RcloneView，前往 **遠端分頁 > 新增遠端**。選擇 **Amazon S3** 作為遠端類型，然後從 S3 供應商清單中選擇 **Cubbit DS3**。輸入從 Cubbit 主控台儀表板複製的 Cubbit 存取金鑰 ID、私密存取金鑰及 S3 端點 URL。地區欄位可留空，或使用 Cubbit 文件中建議的值。點擊 **儲存**，您的 Cubbit DS3 遠端便會以新分頁的形式出現在檔案總管中。

連線會立即生效。您可以在左側的資料夾樹中展開您的儲存貯體（bucket），透過詳細清單檢視瀏覽物件，或切換至縮圖檢視以預覽儲存貯體中的影像資源。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cubbit DS3 as a new S3-compatible remote in RcloneView" class="img-large img-center" />

## 在 Cubbit DS3 中上傳與管理檔案

RcloneView 的雙面板配置讓上傳檔案至 Cubbit DS3 變得相當簡單。在一個面板中開啟本機資料夾，在另一個面板中開啟您的 Cubbit DS3 儲存貯體。將資料夾（例如一批建築事務所的 CAD 圖檔）從左側面板拖曳至右側的 Cubbit 面板。RcloneView 會自動處理並行多執行緒上傳，畫面底部的傳輸監控器則會即時顯示傳輸速度、檔案數量與進度。

在 Cubbit 面板中對任何物件按右鍵，即可開啟完整的操作選單：複製、剪下、刪除、重新命名、取得大小及取得公開連結。**取得大小** 選項在您決定同步策略之前，特別適合用來計算大型儲存貯體資料夾的儲存空間用量。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Cubbit DS3 bucket in RcloneView" class="img-large img-center" />

## 設定 Cubbit DS3 的排程同步工作

若要進行自動化備份，請在首頁分頁使用 **同步** 按鈕啟動 4 步驟工作精靈。選擇您的本機資料夾或另一個雲端遠端作為來源，並將您的 Cubbit DS3 儲存貯體設為目的地。在步驟 2 中，提高並行檔案傳輸數量以充分利用 Cubbit 的分散式頻寬。在步驟 3 中，套用檔案類型篩選 — 例如排除 `.tmp` 與 `.log` 檔案，讓備份內容保持乾淨。

PLUS 授權使用者可解鎖步驟 4：cron 風格排程。您可以設定工作於每晚凌晨 3 點執行，加入最大檔案存留時間篩選以僅同步近期修改過的檔案，並設定電子郵件通知以確認每次執行結果。這對於需要將資料集封存自動每晚快照至符合規範的歐洲儲存後端的研究團隊而言，是理想的解決方案。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated sync jobs to Cubbit DS3 in RcloneView" class="img-large img-center" />

## 透過工作記錄追蹤傳輸狀態

每次同步執行後，RcloneView 的 **工作記錄** 檢視會記錄執行時間、持續時間、傳輸總位元組數、傳輸速度及最終狀態。對於 Cubbit DS3 而言，當您需要確認某次關鍵備份是否成功完成，或是需要調查失敗的執行以找出造成錯誤的檔案時，這份稽核記錄會相當有價值。

在進行任何具破壞性的操作之前，請使用 **模擬執行（Dry Run）** 功能 — 它會模擬同步過程並列出所有將被複製或刪除的檔案，讓您可以在不觸動儲存貯體的情況下確認操作範圍。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Cubbit DS3 sync in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往 **遠端分頁 > 新增遠端**，選擇 Amazon S3，並選擇 Cubbit DS3 作為供應商。
3. 輸入您從 Cubbit 主控台取得的 Cubbit 存取金鑰、私密金鑰及 S3 端點。
4. 在檔案總管中瀏覽您的儲存貯體，並拖曳檔案立即開始上傳。

將 Cubbit DS3 連接至 RcloneView 後，您將擁有一套完全視覺化的地理分散式歐洲儲存工作流程 — 無需使用終端機。

---

**相關指南：**

- [使用 RcloneView 管理 Cloudflare R2 雲端儲存](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [管理 DigitalOcean Spaces — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 與 R2 儲存空間](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
