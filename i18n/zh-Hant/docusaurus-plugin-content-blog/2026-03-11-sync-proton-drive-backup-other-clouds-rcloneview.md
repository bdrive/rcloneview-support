---
slug: sync-proton-drive-backup-other-clouds-rcloneview
title: "使用 RcloneView 將 Proton Drive 與 Google Drive、S3 及其他雲端服務同步"
authors:
  - tayson
description: "Proton Drive 提供端對端加密的雲端儲存。了解如何使用 RcloneView，將 Proton Drive 與 Google Drive、S3 及其他服務商進行同步與備份。"
keywords:
  - proton drive sync
  - proton drive backup
  - proton drive rclone
  - proton drive google drive
  - proton drive s3
  - proton drive transfer files
  - proton drive migration
  - proton drive multi cloud
  - proton drive alternative backup
  - encrypted cloud sync proton
tags:
  - RcloneView
  - proton-drive
  - privacy
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Proton Drive 與 Google Drive、S3 及其他雲端服務同步

> Proton Drive 是由 ProtonMail 團隊打造、專注於隱私保護的雲端儲存服務。但如果你需要為了備份或協作，將它與其他雲端服務同步，該怎麼辦？RcloneView 能將 Proton Drive 與 70 多家服務商連接起來。

Proton Drive 作為 Proton 生態系的一部分，提供端對端加密儲存。它非常適合注重隱私的使用者，但其生態系是封閉的——沒有原生方式可以將 Proton Drive 與 Google Drive、S3 或其他服務同步。RcloneView 透過 rclone 對 Proton Drive 的支援，提供了這座橋樑。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要將 Proton Drive 與其他雲端服務同步？

- **備份冗餘** — 端對端加密固然很好，但單一服務商仍然是單點故障。
- **遷移** — 從 Google Drive 遷移到 Proton Drive（或反之）。
- **協作** — 與不使用 Proton 的人共享檔案。
- **混合隱私策略** — 敏感檔案放在 Proton Drive，共享檔案放在 Google Drive。
- **封存** — 將舊的 Proton Drive 檔案移到更便宜的儲存空間（B2、S3 Glacier）。

## 在 RcloneView 中設定 Proton Drive

### 新增 Proton Drive 遠端

1. 開啟 RcloneView 並點選 **Add Remote**。
2. 選擇 **Proton Drive** 作為類型。
3. 輸入你的 Proton 帳號使用者名稱與密碼。
4. 若你啟用了雙重驗證（2FA），依提示輸入驗證碼。

<img src="/support/images/en/blog/new-remote.png" alt="Add Proton Drive remote" class="img-large img-center" />

在雙欄式檔案總管中瀏覽你的 Proton Drive 檔案——即時解密顯示。

## 主要工作流程

### 1) Google Drive → Proton Drive（隱私遷移）

從 Google 切換到 Proton 以加強隱私保護：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Google Drive to Proton Drive" class="img-large img-center" />

### 2) Proton Drive → S3（次要備份）

在 S3 上建立 Proton Drive 的備份，並加上額外的 crypt 加密：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proton Drive backup" class="img-large img-center" />

### 3) Proton Drive → Google Drive（選擇性共享）

將特定資料夾複製到 Google Drive，與不使用 Proton 的協作者共享。

### 4) Proton Drive ↔ NAS（本機同步）

在你的 NAS 上保留一份 Proton Drive 的本機副本，以便快速存取並增加冗餘。

## 隱私考量

- Proton Drive 的檔案在 Proton 伺服器上是以端對端加密方式靜態儲存的。
- 當你透過 rclone 存取檔案時，會在你的機器本機端解密。
- 傳輸到其他雲端服務（Google Drive、S3）時，目的端的副本並不會以 Proton 的金鑰加密。
- 若要在備份目的地取得最高等級的隱私保護，請使用 crypt 遠端進行雙重加密。

## 驗證傳輸結果

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proton Drive sync" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Proton Drive** 作為遠端。
3. 在 Proton 與任何其他雲端服務之間**同步、備份或遷移**。
4. 使用 **crypt 遠端**，為存放在其他服務商上的 Proton 資料建立加密備份。

隱私優先的儲存方案，搭配多雲端的彈性。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
