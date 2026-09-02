---
slug: migrate-azure-files-to-onedrive-rcloneview
title: "將 Azure Files 遷移至 OneDrive — 使用 RcloneView 傳輸檔案"
authors:
  - casey
description: "使用 RcloneView 將 Azure File Storage 遷移至 OneDrive。透過拖放、同步工作與 dry-run 預覽,在雲端之間移動業務檔案。"
keywords:
  - 將 azure files 遷移至 onedrive
  - azure file storage 遷移
  - onedrive 雲端遷移
  - azure 到 onedrive 傳輸
  - 雲端到雲端遷移
  - RcloneView azure files
  - RcloneView onedrive
  - 將 azure file storage 移至 onedrive
  - 跨雲端檔案傳輸
  - 企業雲端遷移工具
tags:
  - RcloneView
  - azure-files
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Azure Files 遷移至 OneDrive — 使用 RcloneView 傳輸檔案

> 無需接觸命令列,也不必在兩個不同的主控台之間來回切換,即可將整個 Azure File Storage 共用遷移至 OneDrive。

為某個專案或部門共用而部署了 Azure File Storage 的團隊,常常會在公司其他部分都以 Microsoft 365 與 OneDrive 作為日常協作標準之後,發現自己已超出其使用範圍。透過兩個不同的網頁入口手動重新上傳所有內容,既緩慢又容易出錯。RcloneView 會在同一個視窗中並排開啟兩個遠端,讓你可以直接在它們之間移動檔案,如此一來,遷移就會成為一項可追蹤的工作,而不是一場手動複製貼上的馬拉松。與僅支援掛載的工具不同,RcloneView 在 FREE 授權下也提供同步與資料夾比較功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 並排連接 Azure Files 與 OneDrive

新增 Azure File Storage 需要 Azure 入口網站「存取金鑰」頁面中的儲存體帳戶名稱、共用金鑰與共用名稱——RcloneView 的遠端設定精靈正好會要求填寫這三個欄位。相較之下,OneDrive 使用以瀏覽器為基礎的 OAuth:點選 New Remote,選擇 OneDrive,然後在 RcloneView 為你開啟的彈出視窗中登入即可。無需複製或貼上任何 API 金鑰。

兩個遠端都設定完成後,使用雙欄(或四欄)版面配置,在各自的 Explorer 面板中開啟它們。你會在一側看到 Azure 共用的資料夾樹狀結構,另一側則是你的 OneDrive 結構,每個面板底部都會顯示檔案數量與大小。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中將 Azure File Storage 與 OneDrive 新增為遠端" class="img-large img-center" />

## 在兩個遠端之間傳輸或同步檔案

若為一次性遷移,只需在 Azure Files 面板上選取資料夾或檔案,並將其拖曳到 OneDrive 面板上——在兩個不同遠端之間拖曳所執行的是複製操作,因此在你準備好清理之前,Azure 端的原始資料不會被更動。若共用規模較大,可改用 Sync 精靈:選擇 Azure Files 作為來源、OneDrive 作為目的地,然後先執行 Dry Run,以便在真正移動任何內容之前預覽將複製哪些檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="將檔案從 Azure File Storage 傳輸至 OneDrive" class="img-large img-center" />

在同步的 Advanced Settings 步驟中啟用檢查碼比對,代表 RcloneView 會透過雜湊值與大小而非僅憑檔案名稱來驗證檔案內容,這在需要證明遷移已完全完成時相當重要。

## 自動化遷移並追蹤進度

大型共用很少能一次就完成遷移。將此傳輸工作儲存到 Job Manager 中,以便重新執行以擷取初次遷移後新增至 Azure Files 的檔案,並在執行期間透過底部 Info View 中的 Transferring 分頁查看即時進度、速度與檔案數量。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程從 Azure Files 到 OneDrive 的定期同步工作" class="img-large img-center" />

Job History 會記錄每次執行的開始時間、耗時、狀態與總傳輸大小,讓你在停用 Azure 共用之前,能有據可查地確認遷移切換已經完成。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用帳戶名稱、共用金鑰與共用名稱新增 Azure File Storage 遠端。
3. 透過以瀏覽器為基礎的登入流程新增 OneDrive。
4. 執行 Dry Run,然後執行同步工作並在 Job History 中確認結果。

乾淨、可驗證的遷移,永遠勝過倉促的手動複製。

---

**相關指南:**

- [管理 Azure Files Storage — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [管理 OneDrive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修復 Azure Files 連線錯誤](https://rcloneview.com/support/blog/fix-azure-files-connection-errors-rcloneview)

<CloudSupportGrid />
