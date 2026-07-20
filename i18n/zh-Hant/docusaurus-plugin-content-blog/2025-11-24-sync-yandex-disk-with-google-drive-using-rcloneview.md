---
slug: sync-yandex-disk-with-google-drive-using-rcloneview
title: "使用 RcloneView 同步 Yandex Disk 與 Google Drive — 讓多雲工作流程變簡單"
authors:
  - tayson
description: "連接 Yandex Disk 與 Google Drive，預覽差異，並在 RcloneView 中執行具備校驗碼驗證的排程同步。"
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud sync
  - rclone sync
  - multi cloud
  - checksum verification
  - scheduler
  - compare
  - mount
  - webdav
  - backup
  - migration
  - gui
  - cloud to cloud
  - transfer monitor
  - job history
  - bandwidth limits
  - dry run
  - sync jobs
tags:
  - RcloneView
  - cloud-storage
  - cloud-to-cloud
  - sync
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 同步 Yandex Disk 與 Google Drive — 讓多雲工作流程變簡單

> 不需碰觸 CLI 參數，即可在 Yandex Disk 與 Google Drive 之間搬移並同步檔案。RcloneView 提供並排比對、校驗碼驗證的同步工作，以及排程器，讓兩個雲端保持同步。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 為什麼要同步 Yandex Disk 與 Google Drive？

- 整合分散在個人與團隊帳號中的資料夾。
- 保留即時鏡像以達成備援或區域存取。
- 在正式切換前，透過預覽、模擬執行與校驗碼安全地規劃遷移。
- 降低廠商鎖定：無需手動匯出即可在另一個雲端保留經驗證的副本。
- 維持可用性：若某個服務商發生限速，另一個仍可正常使用。

## 步驟 1 — 連接兩個遠端

- 透過 `+ New Remote` 新增 Yandex Disk（WebDAV 或 OAuth）。指南：[add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login)。
- 以相同流程新增 Google Drive；選擇正確的範圍（My Drive 或共用雲端硬碟）。
- 在 **Remote Explorer** 中驗證兩者，確認路徑與權限正確無誤。
- 建議額外檢查：在幾個測試檔案上確認時區與修改時間的一致性，以避免意外覆寫。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 步驟 2 — 同步前先比對

- 開啟 **Compare** 查看 Yandex Disk 與 Google Drive 之間的差異：[compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)。
- 依副檔名篩選，聚焦於文件、媒體或封存檔案。
- 將比對結果儲存為工作，以便每次同步後重新檢查。
- 將比對當作模擬執行使用：它會顯示新增/更新/刪除項目，而不會變更任何資料。
- 若看到非預期的刪除項目，請將工作模式改為 `copy`（而非 `sync`），直到你確信無誤為止。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  
  

## 步驟 3 — 建立安全的同步工作

- 建立從 Yandex Disk 到 Google Drive 的工作（如有需要也可雙向）：[create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)。
- 首次執行時先使用 **copy**，避免非預期的刪除；驗證無誤後再切換為 **sync**。
- 啟用校驗碼驗證，以捕捉任何無聲的資料損毀。
- 排除暫存/快取資料夾，只搬移真正重要的內容。
- 對於共用雲端硬碟，請選擇正確的目的資料夾（避免使用根目錄），以保持 ACL 乾淨。
- 保持路徑大小寫一致，避免在區分大小寫與不區分大小寫的後端之間產生看似重複的資料夾。
- 只有在遇到 API 限制時才需考慮區塊大小與並行數；預設值對大多數使用者已足夠。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />



## 步驟 4 — 排程與監控

- 設定排程器於離峰時段執行，以降低 API 限速：[Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)    
- 在 **Transfer Monitor** 中觀察即時傳輸量與停滯的檔案：[real-time-transfer-monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring)。
- 建議養成通知習慣：在遷移週期間，每天早上檢查 Job History，及早發現異常。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />


## 步驟 5 — 掛載以隨需存取（選用）

- 在本機掛載任一雲端，無需下載全部內容即可瀏覽：[mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。
- Windows：指定磁碟機代號；macOS：選擇 `/Volumes` 底下的掛載路徑。
- 便於驗證：同步完成後，直接從每個掛載點開啟幾個檔案，確認權限與可讀性。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  

## 還原或反向操作

- 若要反轉方向（從 Google Drive 到 Yandex Disk），複製該工作並互換來源/目標。
- 若要選擇性還原，請針對限定的包含清單執行 **copy**，以避免覆寫良好的資料。
- 保留一個已知狀態良好的小型「金絲雀」資料夾，並確保每次執行都不會變更它；這是你的快速健康檢查。

## 快速提示

- 在雙方保持一致的資料夾結構，以減少路徑不匹配的情況。
- 依團隊建立預設集（文件、媒體、封存），讓每次執行結果都可預測。
- 先用小型資料夾測試，再擴大到完整的目錄樹。
- 記錄你的工作設定（模式、篩選條件、排程），讓團隊中任何人都能安全地重新執行。
- 在大量遷移期間，將掛載點設為唯讀，避免使用者在執行過程中進行編輯。

RcloneView 讓 Yandex Disk 與 Google Drive 之間的同步變得簡單直接：先比對、安全複製、排程其餘工作，並透過單一儀表板監控一切。


<CloudSupportGrid />
