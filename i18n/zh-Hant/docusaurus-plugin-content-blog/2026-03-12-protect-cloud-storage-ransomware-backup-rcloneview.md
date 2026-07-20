---
slug: protect-cloud-storage-ransomware-backup-rcloneview
title: "保護您的雲端儲存免受勒索軟體攻擊——使用 RcloneView 建立不可變備份"
authors:
  - tayson
description: "勒索軟體可能透過同步加密您的雲端檔案。了解如何使用 RcloneView 建立不可變、氣隙隔離的雲端備份，抵禦勒索軟體攻擊。"
keywords:
  - ransomware cloud storage protection
  - immutable cloud backup
  - ransomware proof backup
  - cloud ransomware protection
  - air gapped cloud backup
  - protect google drive ransomware
  - ransomware cloud sync
  - immutable s3 backup
  - cloud backup ransomware defense
  - anti ransomware backup strategy
tags:
  - RcloneView
  - ransomware
  - security
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 保護您的雲端儲存免受勒索軟體攻擊——使用 RcloneView 建立不可變備份

> 勒索軟體不只會加密您的本機檔案。如果您的雲端同步處於啟用狀態，它也會用加密後的版本覆蓋您的雲端副本。您的 Google Drive、OneDrive 和 Dropbox 都可能在幾分鐘內遭到入侵。

雲端儲存讓人感覺很安全——「反正都在雲端上，已經備份了」。但雲端同步工具是雙向運作的。當勒索軟體加密您電腦上的檔案時，同步用戶端會盡職地將加密後的版本上傳到您的雲端，取代原始檔案。短短幾分鐘內，您的雲端儲存就會塞滿加密後的垃圾檔案。解決方案是：建立勒索軟體無法觸及的備份副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 勒索軟體如何波及您的雲端

1. **勒索軟體加密本機檔案**——在您的電腦上進行加密。
2. **同步用戶端偵測到變更**——OneDrive、Dropbox 或 Google Drive 同步軟體發現檔案「已修改」。
3. **加密後的檔案被上傳**——同步用戶端用加密版本取代原始檔案。
4. **雲端儲存也遭到加密**——本機與雲端的副本都被入侵。

## 防禦策略：使用複製，而非同步

關鍵在於：**備份時使用「複製」（Copy）工作，而非「同步」（Sync）。** 複製只會新增與更新檔案——絕不會刪除目的地的檔案。即使您的主要雲端遭到勒索軟體加密的檔案入侵，備份仍會保留最後一份正常版本。

### 主要雲端（易受攻擊）

```
Google Drive ← 與本機電腦同步（勒索軟體可觸及此處）
```

### 備份（受保護）

```
Google Drive → 複製 → Backblaze B2（勒索軟體無法刪除舊版本）
```

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create ransomware-resistant backup" class="img-large img-center" />

## 額外的防護層

### 1) S3 物件鎖定（不可變）

AWS S3 支援物件鎖定（Object Lock）——在指定期間內，檔案無法被修改或刪除：

- **治理模式（Governance mode）**——防止意外刪除；管理員可以覆寫。
- **合規模式（Compliance mode）**——任何人都無法刪除或修改，即使是根帳戶也不例外。

備份到已啟用物件鎖定的 S3 儲存桶。即使勒索軟體入侵了您的 AWS 憑證，被鎖定的物件仍能倖存。

### 2) 版本控制

在您的備份儲存空間上啟用版本控制：

- **S3 版本控制**——每次覆寫都會建立新版本，舊版本會被保留。
- **B2 版本控制**——Backblaze 預設會保留先前的版本。

如果遭勒索軟體加密的檔案被複製到備份中，先前乾淨的版本仍然可以存取。

### 3) 使用不同的憑證

為您的備份目的地使用不同的憑證。切勿在主要雲端與備份雲端之間重複使用 AWS 金鑰或 OAuth 權杖。如果勒索軟體竊取了其中一組憑證，另一組仍然安全。

### 4) 使用 crypt 加密備份

使用 rclone 的 crypt 遠端來建立加密備份。即使有人存取了您的備份儲存空間，沒有您的 crypt 密碼也無法修改加密後的資料。

## 備份排程

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ransomware-resistant backup" class="img-large img-center" />

針對重要資料，每天多次執行複製工作：

| 資料類型 | 備份頻率 | 保留期限 |
|-----------|-----------------|-----------|
| 重要文件 | 每 4 小時一次 | 版本保留 90 天 |
| 專案檔案 | 每日 | 版本保留 30 天 |
| 封存資料 | 每週 | 保留 1 年 |

## 驗證備份完整性

定期驗證備份是否遭到損壞：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup integrity" class="img-large img-center" />

## 復原計畫

如果遭到勒索軟體攻擊：

1. **立即停止所有同步用戶端**。
2. **中斷網路連線**以防止擴散。
3. **透過 RcloneView 存取您的備份**（從一台乾淨的機器上操作）。
4. **從最後一份乾淨版本復原**——將檔案從備份複製到乾淨的雲端帳戶。
5. **使用資料夾比對功能驗證**復原後的資料。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **使用「複製」（而非「同步」）設定備份**至另一個獨立的服務商。
3. 在備份儲存空間上**啟用版本控制**。
4. 為備份帳戶**使用不同的憑證**。
5. **排程頻繁的備份**。
6. **測試還原**——在真正需要之前先練習一次。

最好的勒索軟體防禦，就是一份勒索軟體碰不到的備份。

---

**相關指南：**

- [為什麼雲端對雲端備份很重要](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)
- [復原意外刪除的檔案](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)
- [同步、複製與移動的差異](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
