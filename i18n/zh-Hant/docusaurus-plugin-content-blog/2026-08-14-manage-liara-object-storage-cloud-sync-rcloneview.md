---
slug: manage-liara-object-storage-cloud-sync-rcloneview
title: "管理 Liara 物件儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - robin
description: "將相容 S3 的 Liara 物件儲存連接到 RcloneView,在同一個圖形介面中實現跨平台瀏覽、同步、備份與掛載。"
keywords:
  - Liara RcloneView
  - Liara 物件儲存
  - 相容 S3 的物件儲存
  - Liara 備份
  - Liara 同步
  - 掛載 Liara 儲存
  - 物件儲存圖形介面
  - Liara 檔案管理
  - 雲端儲存管理工具
  - Liara 儲存桶同步
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

# 管理 Liara 物件儲存 — 使用 RcloneView 同步與備份檔案

> 將 Liara 儲存桶納入你管理其他所有雲端儲存所使用的同一個檔案總管視窗中。

Liara 是一項相容 S3 的物件儲存服務,RcloneView 連接它的方式與連接 Amazon S3、Wasabi 或任何其他 S3 協定供應商完全相同 — 透過 Access Key、Secret Key 與端點位址。新增遠端後,Liara 儲存桶會以一般分頁的形式出現在檔案總管中,可與本機磁碟及其他雲端帳戶一起瀏覽、傳輸與排程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Liara 新增為新遠端

在 Remote 分頁中開啟 Remote Manager,點擊 New Remote。由於 Liara 是透過 rclone 的 S3 協定存取,請選擇 S3 相容選項,並輸入你在 Liara 主控台取得的 Access Key、Secret Key 與端點 URL。無需完成任何 OAuth 瀏覽器登入步驟 — 測試連線成功後,儲存桶便會像其他遠端一樣出現在分頁列中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 S3 相容遠端" class="img-large img-center" />

RcloneView 可在 Windows、macOS 與 Linux 上透過同一個視窗掛載並同步 90 多個供應商 — Liara 無需獨立的用戶端,也無需與其他雲端帳戶不同的工作流程。

## 瀏覽、傳輸與同步儲存桶

將檔案總管分割為兩個面板 — 一個顯示本機檔案或其他雲端,另一個顯示你的 Liara 儲存桶,然後在兩者之間拖曳檔案。同一遠端內的移動即為移動(move),不同遠端之間的拖曳則為複製(copy),因此你可以在不影響來源資料夾的情況下,將備份準備到 Liara。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在本機資料夾與 Liara 儲存桶之間傳輸檔案" class="img-large img-center" />

對於定期作業,請使用四步驟同步精靈:選擇來源與目的地,在進階設定中調整並行傳輸數與相等性檢查器數量,再於儲存前套用依檔案類型、大小或存留時間的篩選條件。在實際執行同步之前,先執行 Dry Run 以精確預覽將被複製或刪除的內容。

## 排程備份並監控作業

同步作業儲存到 Job Manager 後,PLUS 授權使用者可以連接 crontab 格式的排程,讓 Liara 備份以固定週期自動執行,並在儲存前預覽即將到來的執行時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="為 Liara 同步作業設定定期備份排程" class="img-large img-center" />

無論是手動執行或排程執行,每次執行都會連同狀態、傳輸速度、檔案數量與總大小一起記錄在 Job History 中,方便你確認 Liara 備份是否順利完成,或找出需要重試的失敗作業。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在你的 Liara 主控台中產生 Access Key 與 Secret Key,並記下端點 URL。
3. 在 Remote Manager 中將 Liara 新增為新的 S3 相容遠端,並測試連線。
4. 在為 Liara 儲存桶排程定期備份之前,先執行一次 Dry Run 同步。

連接 Liara 後,你的物件儲存便與你管理的所有其他雲端並列在一起 — 一個檔案總管,一組同步作業,無需維護獨立的用戶端。

---

**相關指南:**

- [使用 RcloneView 管理 Petabox 儲存 — 檔案同步與備份](https://rcloneview.com/support/blog/manage-petabox-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Scaleway 物件儲存 — 同步與備份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [使用 RcloneView 管理 Wasabi 儲存 — 檔案同步與備份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
