---
slug: move-from-cloudflare-r2-to-aws-s3-with-rcloneview
title: 使用 RcloneView 輕鬆將資料從 Cloudflare R2 同步到 AWS S3
authors:
  - jay
description: 了解如何使用 RcloneView 直覺的圖形介面，輕鬆將檔案從 Cloudflare R2 同步或遷移到 AWS S3——無需終端機。
keywords:
  - rcloneview
  - cloudflare r2 to aws s3
  - object storage sync
  - cloud migration GUI
  - rclone GUI
  - multi-cloud workflow
  - file transfer cloudflare R2
tags:
  - cloudflare
  - aws-s3
  - RcloneView
  - cloud-sync
  - cloud-migration
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 輕鬆將資料從 Cloudflare R2 同步到 AWS S3

> 了解如何以友善的方式備份或複製 Cloudflare R2 資料到 AWS S3——完全不需要碰命令列。


## 為什麼要同步 R2 與 S3

雖然 **Cloudflare R2** 以**零流出費用**脫穎而出，使其成為具成本效益的儲存選擇，但 **AWS S3** 仍憑藉成熟的生態系統——包括生命週期規則、加密與區域可用性——持續主導市場。將資料從 R2 同步到 S3，可同時兼顧兩者的優勢——節省成本並具備策略性的韌性。

<!-- truncate -->
### Cloudflare R2 概覽
- 沒有流出資料費用——非常適合高用量情境
- 簡單的按用量計費，並提供 S3 相容 API

### 為什麼要將資料保留在 AWS S3？
- 進階功能：版本控制、IAM 存取控制、儲存分層
- 與 AWS 工具及服務廣泛整合

**將資料從 R2 同步到 S3 有助於：**
- 藉由可靠的 AWS 基礎架構保護資料
- 維持與依賴 AWS 服務之工作流程的相容性
- 結合 R2 的實惠與 S3 的功能性


<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 逐步教學：使用 RcloneView 執行 R2 → S3 的工作流程

### 步驟 1 – 準備存取權限

請確保你已備妥：
- Cloudflare R2 憑證（Access Key、Secret Key）
- AWS S3 access key/secret 與區域資訊
- 決定要進行一次性備份還是定期同步

🔍 實用指南：
- [如何取得 AWS S3 存取憑證](/howto/cloud-storage-setting/aws-account-info)
- [如何取得 Cloudflare R2 API 憑證與端點](/howto/cloud-storage-setting/cloudflare-r2-credential)
### 步驟 2 – 在 RcloneView 中新增遠端

1. 開啟 **RcloneView**，點選 **`+ New Remote`**
2. 針對 R2：
   - 將提供者選為 **S3-compatible**，選擇 **Cloudflare**
   - 輸入你的 R2 金鑰與端點（例如：`https://<account>.r2.cloudflarestorage.com`）
3. 針對 AWS S3：
   - 選擇 **Amazon S3**，新增憑證，並清楚命名（例如：`MyS3`）
4. 確認兩者在 Explorer 檢視中並列顯示

👉 詳見：[如何新增 S3 遠端](/howto/remote-storage-connection-settings/s3)
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

### 步驟 3 – 執行同步

**方法 A – 拖放**
快速又直覺——將檔案從 R2 窗格拖曳到你的 S3 窗格。

👉 詳見：[使用拖放複製檔案](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

**方法 B – 比較並複製**
使用**比較**功能標示出新增或變更的檔案，並選擇要同步的項目。

👉 詳見：[比較並管理檔案](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />

**方法 C – 同步與排程工作**
設定定期任務：
1. 選擇 R2 資料夾作為來源，S3 作為目的地
2. 點選 **Sync**，預覽（dry-run），然後儲存為工作
3. 可選擇排程，讓 RcloneView 自動處理

👉 詳見：
- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />

## 總結與小提示

### 快速回顧
- **R2**：實惠且零流出費用；**S3**：功能豐富且高度整合
- **RcloneView**：簡單的圖形介面，無需 CLI 技能即可橋接兩者

### 更聰明的作法
- 將 R2 用於面向公眾的資產；同步到 S3 以進行長期封存或稽核
- 在 S3 上套用生命週期規則以進行分層儲存——即使在同步工作流程中也能降低成本
- 透過 RcloneView 的日誌與直覺的視覺回饋監控工作結果


## 常見問答

| 問題                                            | 答案                                                          |
|-----------------------------------------------------|------------------------------------------------------------------|
| 我需要具備技術能力才能做到這件事嗎？              | 完全不需要——RcloneView 提供簡潔的視覺化介面。         |
| 同步會產生流出費用嗎？                     | 從 R2 傳輸沒有流出費用。AWS 可能會依儲存分層對傳入的儲存操作收費。 |
| 排程定期同步有價值嗎？             | 絕對有——能讓你的 AWS 備份保持最新，無需手動操作。  |


**準備好輕鬆橋接你的 Cloudflare R2 與 AWS S3 環境了嗎？**

<CloudSupportGrid />
