---
slug: manage-china-mobile-cloud-sync-backup-rcloneview
title: "管理 China Mobile 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - jay
description: "將 China Mobile 的 S3 相容物件儲存連接到 RcloneView,實現跨平台瀏覽、拖放傳輸與排程備份工作。"
keywords:
  - China Mobile 物件儲存
  - 管理 China Mobile 雲端儲存
  - S3 相容儲存 GUI
  - RcloneView China Mobile
  - 同步 China Mobile 物件儲存
  - 備份 S3 相容儲存
  - China Mobile Ecloud EOS
  - 物件儲存檔案管理員
  - 多雲 GUI 用戶端
  - S3 端點存取金鑰設定
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 China Mobile 儲存空間 — 使用 RcloneView 同步與備份檔案

> 無需接觸終端機,即可在與其他所有雲端相同的視窗中瀏覽、傳輸並備份 China Mobile 的 S3 相容物件儲存。

以 China Mobile 的 S3 相容物件儲存來運行基礎設施的團隊,常常最終依賴原始 CLI 呼叫或臨時腳本來管理它,與其他雲端環境彼此獨立。RcloneView 將其視為與任何其他 S3 相容遠端相同的物件——相同的檔案總管、相同的同步工作、相同的資料夾比較——因此 China Mobile 上的儲存貯體可以與 Google Drive、Backblaze B2 或本機磁碟並列出現在同一個介面中。S3、Azure 與 Backblaze B2 在 FREE 授權下即可實現完整的讀寫連線,任何 S3 相容端點亦是如此。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 China Mobile 物件儲存

China Mobile 的物件儲存是透過 rclone 的 S3 協定存取,這與 RcloneView 用於 Wasabi、MinIO 或 Cloudflare R2 的路徑相同。在 New Remote 畫面中選擇 S3 相容的供應商類型,並提供三個值:Access Key ID、Secret Access Key 與服務 Endpoint。這裡沒有 OAuth 流程——僅是憑證輸入,因此請仔細核對端點字串,因為拼寫錯誤是新遠端首次連線測試失敗最常見的原因。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 China Mobile S3 相容遠端" class="img-large img-center" />

遠端連線成功後,它會像其他所有儲存類型一樣以標籤形式出現在 Explorer 面板中。您可以使用 1 到 4 個面板的版面配置,將其與第二個面板並排開啟——無論是本機磁碟、另一個雲端,還是完全不同的儲存貯體。

## 瀏覽與傳輸檔案

開啟遠端後,File List 會以本機檔案總管中常見的欄位顯示儲存貯體與物件:名稱、類型、修改日期、大小。右鍵點擊可使用 Copy、Cut、Paste、Rename、New Folder、Download 與 Upload,或使用 Ctrl+Click 與 Shift+Click 多選後再執行批次操作。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 China Mobile 物件儲存與其他遠端之間傳輸檔案" class="img-large img-center" />

拖放遵循一個簡單的規則:在同一遠端內移動檔案會重新定位它們,而在兩個不同遠端之間拖曳則會複製它們。這使得物件儲存與其他雲端之間的臨時傳輸,變成了在面板之間拖曳所選內容,而不必先下載到本機。

## 排程定期備份

對於任何需要重複執行的工作,Job Manager 的四步精靈可以把一次性傳輸變成已儲存的工作:選擇來源與目的地,調整傳輸並行數與重試行為,套用最大檔案大小或存在時長等篩選條件,並且——在 PLUS 授權下——設定 crontab 風格的排程。在正式執行之前先執行 Dry Run,準確預覽將要複製或刪除的內容。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中為 China Mobile 物件儲存排程備份工作" class="img-large img-center" />

之後,Job History 會追蹤每一次執行——狀態、耗時、傳輸速度、檔案數——如此一來您就有了資料何時移動的紀錄,而無需翻查原始日誌。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 New Remote,選擇 S3 相容的供應商類型,輸入 China Mobile 的 Access Key ID、Secret Access Key 與端點。
3. 在 Explorer 中瀏覽儲存貯體,並測試與其他遠端之間的手動複製。
4. 在 Job Manager 中為需要重複的傳輸建立同步工作,並在首次實際執行前執行 Dry Run。

當 China Mobile 物件儲存與其他遠端一起出現在同一個檔案總管中時,搬移資料就不再是一件需要撰寫腳本的雜事,而變成了拖放操作。

---

**相關指南:**

- [管理 RackCorp 物件儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-rackcorp-object-storage-cloud-sync-rcloneview)
- [管理 Scaleway 物件儲存 — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 Ceph 物件儲存 — RcloneView 為您的 Ceph 叢集提供 S3 相容 GUI](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)

<CloudSupportGrid />
