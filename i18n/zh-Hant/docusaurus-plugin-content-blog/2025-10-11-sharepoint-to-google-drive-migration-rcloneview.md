---
slug: sharepoint-to-google-drive-migration-rcloneview
title: "使用 RcloneView 精通 SharePoint 遷移至 Google Drive：企業逐步操作指南"
authors:
  - tayson
description: "使用 RcloneView 進行視覺化、可節流且可稽核的 SharePoint 遷移至 Google Drive 作業 — 專為需要無 CLI、符合政策要求切換流程的企業 IT 團隊打造。"
keywords:
  - SharePoint to Google Drive
  - move files from SharePoint to Drive
  - RcloneView SharePoint
  - cloud migration for business
  - Microsoft 365 migration tool
  - migrate sharepoint document library
  - google drive workspace migration
  - rclone sharepoint connector
  - office 365 to google drive
  - sharepoint migration guide
tags:
  - migration
  - sharepoint
  - google-drive
  - microsoft-365
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 精通 SharePoint 遷移至 Google Drive：企業逐步操作指南

> 透過視覺化、可節流且可重複執行的流程，將 SharePoint 文件庫遷移至 Google Drive（Workspace），讓企業管理員無需碰觸 CLI 即可完成。

RcloneView 將 rclone 的 SharePoint 與 Google Drive 連接器封裝成具備稽核友善日誌、排程器及即時監控功能的 GUI。本指南說明如何規劃並執行分階段遷移，讓您能在不中斷服務的情況下搬移團隊網站、專案資料夾或整個業務單位的資料。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 為何選擇 RcloneView 進行 SharePoint → Google Drive 遷移

- 無需 CLI：透過引導式對話框設定 Microsoft 365（SharePoint/OneDrive for Business）與 Google Drive 遠端。
- 企業友善：對請求進行節流，避免觸及 SharePoint 與 Drive API 速率限制，並可在維護時段排程切換作業。
- 作業可視性：並排總管介面、比較與複製、工作歷程記錄，以及供稽核使用的即時傳輸監控。
- 靈活的搬移方式：單次複製、雙向同步，或維持來源與目的地一致的分階段差異同步。

## 先決條件（企業就緒）

- 已安裝 RcloneView，並以擁有目標 SharePoint 網站及 Google Drive 目的地（共用雲端硬碟或我的雲端硬碟）存取權限的帳戶登入。
- 若您的租用戶限制第三方應用程式，需已授予 Microsoft Graph 的管理員同意。
- 已排定切換時段（或允許分階段同步），並具備足夠的 Drive/共用雲端硬碟配額。

## 步驟 1 — 連接 SharePoint 與 Google Drive 遠端

1) 在 **RcloneView ? 設定 ? 遠端儲存**中，新增一個遠端。  
<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2) 選擇 **OneDrive/SharePoint（Microsoft 365）**，以擁有或可存取該網站的帳戶登入，並選取正確的**網站／文件庫**（例如 `/sites/Marketing/Shared Documents`）。  
3) 新增 **Google Drive**（Workspace）：選擇要落地至**我的雲端硬碟**還是該專案專屬的**共用雲端硬碟**。  
4) 測試每個遠端並儲存。

## 步驟 2 — 對應正確的文件庫與目標資料夾

- 針對每個 SharePoint 文件庫，記下您在連線對話框中選取的路徑；在總管中開啟以確認根目錄（應能看到預期的部門資料夾）。
- 若 Google Drive/共用雲端硬碟中尚未存在對應的資料夾結構，請先建立。
- 若您有分團隊隔離的需求，可針對多個 SharePoint 遠端（每個網站或敏感集合各一個）重複此流程。

## 步驟 3 — 以並排檢視進行驗證

- 在雙窗格總管中開啟兩個遠端。  
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
- 使用**比較**功能，在複製前預覽差異（大小、缺漏檔案）。  
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- 先複製一個小型試點資料夾，以驗證權限、版本化檔案與命名規則（SharePoint 的 `# % & { }` 在 Drive 上會變為有效字元，但過長路徑可能仍需清理）。

## 步驟 4 — 選擇您的遷移模式

- **一次性複製（最快）**：使用**複製**功能將資料一次性搬遷至新的共用雲端硬碟。適用於切換期間來源將轉為唯讀的情況。
- **同步（可選雙向）**：當使用者在遷移期間仍持續編輯檔案時，使用**同步**功能；並在切換時段以最終的差異同步收尾。
- **盡可能採用伺服器端傳輸**：若您的 SharePoint 與 Drive 皆可透過網際網路存取，RcloneView 會在支援的情況下利用伺服器端複製以減少出站流量。

拖放操作同樣適用於臨時搬移與快速修正。  
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## 步驟 5 — 建立可重複執行的工作並排程切換

1) 在**工作**中，建立一個從 SharePoint 文件庫至目標共用雲端硬碟路徑的新**複製**或**同步**工作。  
2) 設定**頻寬限制**與**傳輸數**，以符合 Microsoft 365 與 Google Drive 的節流要求（例如 `tpslimit`、`--drive-chunk-size`，或**最大傳輸量**滑桿）。  
3) 儲存後，將大量搬移排程於非上班時段執行；再新增第二個排程用於差異同步。  
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## 步驟 6 — 執行、監控並處理節流狀況

- 啟動工作並即時觀察進度（傳輸速率、預估完成時間、錯誤）。  
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
- 若看到 `throttled` 或 `403`/`429` 回應，請降低傳輸數或加入短暫的退避等待；RcloneView 會直接呈現這些日誌，無需開啟終端機。
- 使用**工作歷程記錄**匯出結果以供合規之用，並可直接從 UI 重試任何失敗的物件。

## 步驟 7 — 遷移後檢查與交接

- 重新執行**比較**功能，在開放使用者存取前確認目的地與 SharePoint 內容一致。
- 抽查權限：雖然 Drive ACL 不會自動鏡射 SharePoint 的權限設定，但您可以將新的根目錄批次分享給正確的 Workspace 群組。
- 若團隊仍在 SharePoint 上活動，可將此工作保留為排程差異同步數天，之後再將來源切換為唯讀。

## 企業環境的疑難排解提示

- **複雜的網站結構**：建議依每個網站／文件庫個別連接，而非整個租用戶，以避免範圍意外擴大。
- **過長路徑或特殊字元**：在進階選項中啟用 Rclone 的 Unicode 正規化與路徑長度處理；在切換前於總管中重新命名邊緣案例。
- **資料主權**：對於受監管的團隊，請以區域性共用雲端硬碟為目標，並保留工作歷程記錄匯出以供稽核。

## 相關資源

- [透過瀏覽器登入新增遠端（OAuth）](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [新增 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [即時同步遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [將雲端儲存掛載為本機磁碟機](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## 總結

RcloneView 為 IT 團隊提供一條視覺化、低風險的路徑，將 SharePoint 文件庫遷移至 Google Drive 或共用雲端硬碟。憑藉符合政策的節流機制、排程切換與即時監控，您可以在不使用命令列腳本的情況下搬移業務關鍵資料、隨時讓相關人員掌握進度，並保留一個可重複執行的工作，供未來整合作業使用。

<CloudSupportGrid />
