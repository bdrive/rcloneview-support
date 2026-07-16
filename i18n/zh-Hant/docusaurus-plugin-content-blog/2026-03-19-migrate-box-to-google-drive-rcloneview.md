---
slug: migrate-box-to-google-drive-rcloneview
title: "將 Box 遷移到 Google Drive — 使用 RcloneView 傳輸檔案與資料夾"
authors:
  - tayson
description: "正打算從 Box 轉換到 Google Drive?使用 RcloneView 將整個 Box 帳戶(包含資料夾、共用檔案與封存資料)完整傳輸至 Google Drive,並進行完整驗證。"
keywords:
  - box to google drive
  - migrate box to gdrive
  - box migration tool
  - box to google workspace
  - switch from box
  - box file transfer
  - box to google shared drive
  - box cloud migration
  - box alternative google
  - transfer box files
tags:
  - box
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Box 遷移到 Google Drive — 使用 RcloneView 傳輸檔案與資料夾

> Box 一直表現良好,但現在 Google Workspace 更符合需求。將所有內容——個人檔案、共用資料夾與部門封存資料——傳輸至 Google Drive,且不遺漏任何一個檔案。

Box 在企業環境中相當普及,但許多組織為了與 Gmail、Calendar 及 Docs 有更緊密的整合,選擇整併至 Google Workspace。此次遷移需要保留資料夾結構、處理大型資料集,並驗證資料的完整性。RcloneView 可原生連接 Box 與 Google Drive。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Box 與 Google Drive

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and Google Drive" class="img-large img-center" />

## 遷移流程

### 1) 對應資料夾結構

| Box | Google Drive |
|-----|-------------|
| 個人資料夾 | 我的雲端硬碟 |
| 共用資料夾 | 共用雲端硬碟 |
| 部門封存資料 | 共用雲端硬碟資料夾 |

### 2) 逐一資料夾傳輸

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive" class="img-large img-center" />

### 3) 將大型傳輸排程至離峰時段

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule migration" class="img-large img-center" />

### 4) 驗證完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box migration" class="img-large img-center" />

## Box 特有注意事項

- **Box 檔案版本記錄**不會傳輸——只有目前版本會被遷移
- **Box Notes** 屬於專有格式——請在遷移前先匯出
- **共用連結**不會被保留——遷移完成後請更新書籤
- **大型企業**:建議依部門建立批次工作,以便分批管理

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Box** 與 **Google Drive** 遠端。
3. **分批傳輸**並進行驗證。
4. 過渡期間**保持 Box 帳戶啟用**。

乾淨的遷移,完整的驗證。

---

**相關指南:**

- [將 Box 遷移到 SharePoint](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [將 Dropbox Business 遷移到 Google](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
