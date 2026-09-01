---
slug: manage-netease-cloud-sync-backup-rcloneview
title: "管理 Netease 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - morgan
description: "將 Netease 的 S3 相容物件儲存連接到 RcloneView,實現跨平台瀏覽、拖放傳輸與排程備份工作。"
keywords:
  - Netease 物件儲存
  - 管理 Netease 雲端儲存
  - S3 相容儲存 GUI
  - RcloneView Netease
  - 同步 Netease 物件儲存
  - 備份 S3 相容儲存
  - Netease NOS 儲存
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

# 管理 Netease 儲存空間 — 使用 RcloneView 同步與備份檔案

> 在你已用於其他所有雲端服務的同一個視窗中瀏覽、傳輸並備份 Netease 的 S3 相容物件儲存,不需要另外的 CLI 工作流程。

透過 Netease 的 S3 相容物件服務佈建儲存空間的團隊,常常最終將其與其餘雲端環境分開撰寫指令碼管理,因為大多數桌面檔案管理員只認得主流的消費型雲端硬碟。RcloneView 將 Netease 視為其他任何 S3 相容遠端一樣處理——相同的檔案總管、相同的同步工作、相同的資料夾比對——因此 Netease 儲存貯體可以和 Google Drive、Dropbox 或本機磁碟並排出現在同一個介面中。RcloneView 在同一個視窗中掛載並同步 90 多家提供商,支援 Windows、macOS 與 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Netease 物件儲存

在 RcloneView 中新增 Netease 依循標準的 S3 相容遠端流程:建立一個新的遠端,選擇 S3 通訊協定類型,然後輸入你的 Access Key ID、Secret Access Key,以及對應儲存貯體所在區域的 Netease 端點 URL。儲存後,該遠端會在檔案總管中以獨立的分頁顯示,其中每個資料夾都以本機磁碟相同的方式瀏覽——不需要另外的主控台分頁或 CLI 工作階段來檢視貯體中實際的內容。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中為 Netease 物件儲存新增新的 S3 相容遠端" class="img-large img-center" />

由於 RcloneView 會獨立儲存每個遠端的設定,你可以並排註冊多個 Netease 儲存貯體——或是以不同存取範圍註冊同一個貯體——接著只需點擊即可切換,而不必每次都在終端機中重新驗證。

## 在 Netease 與其他雲端之間搬移資料

一旦連接了 Netease,面板之間的拖放操作會自動處理跨遠端傳輸:將檔案從 Netease 拖曳到另一個遠端的面板會觸發複製,而在同一個 Netease 貯體內拖曳則會移動檔案。這使得臨時遷移作業——例如為了備援而將 Netease 中的部分物件鏡射到 Backblaze B2——只需開啟兩個面板即可完成,不必撰寫一次性的 rclone 指令。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中 Netease 物件儲存與另一個遠端之間的雲端對雲端傳輸" class="img-large img-center" />

若需重複執行的傳輸,4 步驟同步精靈可讓你將 Netease 設為來源或目的地,套用檔案大小或檔案存留時間篩選條件,並在實際執行前先執行一次試跑,精確預覽將被複製或刪除的內容。

## 排程定期備份

相較於一次性傳輸,為了達成持續性保護,針對 Netease 的同步工作可以使用 crontab 風格的分鐘、小時、日、月欄位,依排程(需要 PLUS 授權)重複執行。之後,工作記錄會記錄每一次執行——開始時間、耗費時間、傳輸速度、檔案數量——讓你不必翻查原始記錄檔,就能取得何時搬移了什麼的具體稽核軌跡。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中為 Netease 物件儲存排程定期備份工作" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 建立一個新的遠端,選擇 S3 相容類型,並輸入你的 Netease Access Key、Secret Key 與端點。
3. 在 Explorer 面板中開啟 Netease 遠端,確認你的儲存貯體與物件正確載入。
4. 設定一個同步工作,將貯體鏡射到另一個遠端或本機磁碟,先執行一次試跑。

一旦 Netease 被設定為遠端,它的行為就和 RcloneView 中的其他任何儲存供應商一樣——你需要另外管理的系統又少了一個。

---

**相關指南:**

- [管理 China Mobile 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-china-mobile-cloud-sync-backup-rcloneview)
- [管理 Alibaba OSS 雲端儲存 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)
- [管理 Huawei OBS 雲端儲存 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-huawei-obs-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
