---
slug: drag-drop-cloud-transfer-guide-rcloneview
title: "在雲端之間拖放檔案——使用 RcloneView 最快速的傳輸方式"
authors:
  - tayson
description: "只需在 RcloneView 的雙窗格檔案總管中拖放，即可在 Google Drive、OneDrive、S3 及 70 多個雲端之間傳輸檔案。無需指令，無需腳本。"
keywords:
  - drag drop cloud transfer
  - drag and drop cloud files
  - easy cloud file transfer
  - visual cloud transfer
  - cloud file manager drag drop
  - transfer files between clouds
  - simple cloud migration
  - no code cloud transfer
  - cloud explorer drag drop
  - easy multi cloud transfer
tags:
  - RcloneView
  - drag-and-drop
  - feature
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在雲端之間拖放檔案——使用 RcloneView 最快速的傳輸方式

> 在 Google Drive 上選取檔案，拖曳到你的 S3 儲存桶，完成。無需命令列，無需腳本，也不需要五個步驟的上傳流程。只需在任意兩個雲端之間拖放即可。

雲端檔案傳輸不應該需要電腦科學學位。RcloneView 的雙窗格檔案總管可以將任意兩個雲端儲存位置並排顯示——Google Drive 與 S3、OneDrive 與 Dropbox、NAS 與 Backblaze B2——只要從一側拖曳到另一側，即可傳輸檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 運作方式

### 雙窗格檔案總管

RcloneView 會並排顯示兩個儲存位置——就像雙窗格檔案管理員一樣：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane cloud explorer" class="img-large img-center" />

- **左窗格**：任何雲端、NAS 或本機磁碟機。
- **右窗格**：任何其他雲端、NAS 或本機磁碟機。

### 拖放即可傳輸

1. 導覽至一側的來源資料夾。
2. 導覽至另一側的目的地資料夾。
3. 選取檔案或資料夾。
4. 從一側拖曳到另一側。
5. 傳輸隨即開始。

### 即時監控

觀察檔案傳輸時的進度：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor drag and drop transfer" class="img-large img-center" />

## 可以在哪些位置之間拖曳

任意組合都可以：

| 來源 | 目的地 | 範例 |
|------|-----|---------|
| Google Drive | AWS S3 | 將文件備份到 S3 |
| OneDrive | Dropbox | 與使用 Dropbox 的客戶共享 |
| 本機磁碟機 | Backblaze B2 | 將本機備份上傳到雲端 |
| NAS | Google Drive | 讓 NAS 檔案可遠端存取 |
| S3 | Azure Blob | 跨雲端遷移 |
| Dropbox | NAS | 將雲端檔案下載到本機儲存空間 |

## 不僅止於簡單的拖放

### 針對重複性傳輸 → 建立工作

如果你經常拖曳相同的檔案，可以將其儲存為具名工作，然後排程自動執行：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Save drag-drop as scheduled job" class="img-large img-center" />

### 針對驗證 → 使用資料夾比對

傳輸完成後，比對雙方以確保所有檔案都已送達：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer completeness" class="img-large img-center" />

### 針對大型傳輸 → 監控進度

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Track large file transfer" class="img-large img-center" />

## 小技巧

- **拖曳資料夾**以傳輸整個目錄樹。
- 拖曳前**選取多個檔案**以進行批次傳輸。
- **按右鍵**可取得其他選項（複製、移動、同步）。
- **使用網址列**快速導覽至特定路徑。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增你的雲端帳戶**——任意兩個（或更多）供應商。
3. 在雙窗格檔案總管中**將它們並排開啟**。
4. **拖放**即可傳輸。

雲端傳輸，簡單化。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [掛載雲端儲存](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
