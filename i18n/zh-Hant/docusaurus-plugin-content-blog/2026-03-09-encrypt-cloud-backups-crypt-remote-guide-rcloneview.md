---
slug: encrypt-cloud-backups-crypt-remote-guide-rcloneview
title: "使用 Rclone Crypt 加密雲端備份 — 為 Google Drive、S3 等提供零知識加密"
authors:
  - tayson
description: "在上傳前使用 rclone 的 crypt 遠端加密您的雲端檔案。這是一份完整指南，說明如何使用 RcloneView 為 Google Drive、OneDrive、S3 及任何雲端服務商實現零知識加密。"
keywords:
  - 加密雲端儲存
  - rclone crypt 遠端
  - 雲端零知識加密
  - 加密 google drive 檔案
  - 加密雲端備份
  - rclone 加密指南
  - 加密 onedrive 檔案
  - 雲端用戶端加密
  - 加密 s3 檔案
  - 加密雲端儲存工具
tags:
  - encryption
  - crypt
  - security
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 Rclone Crypt 加密雲端備份 — 為 Google Drive、S3 等提供零知識加密

> 當您將檔案上傳到 Google Drive 時，Google 可以讀取這些檔案。當您將資料儲存在 S3 上時，Amazon 也能存取它。Rclone 的 crypt 遠端改變了這一點——您的檔案在離開您的電腦之前就已經加密。

雲端服務商會在其伺服器上對「靜態資料」進行加密，但金鑰掌握在他們手中。這代表服務商（以及可能的政府機構、入侵服務商的駭客或內部員工）都能存取您的檔案。Rclone 的 crypt 遠端提供真正的零知識加密：檔案在您的電腦上加密後才上傳，只有您擁有金鑰。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什麼是 Crypt 遠端？

crypt 遠端是一個虛擬層，位於任何現有雲端遠端之上：

```
您的檔案 → Crypt 遠端（加密） → 雲端遠端（上傳加密後的資料塊）
```

讀取檔案時：

```
雲端遠端（加密資料塊） → Crypt 遠端（解密） → 您的檔案
```

雲端服務商只儲存加密後的資料。檔案名稱、目錄名稱與檔案內容全部都會被加密。服務商無法看到您儲存的內容。

## Crypt 加密的運作方式

### 加密標準

- **檔案內容**：採用 CTR 模式的 AES-256，並搭配 HMAC-SHA256 驗證。
- **檔案名稱**：AES-256 EME（encrypt-mix-encrypt），可選加入混淆處理。
- **目錄名稱**：與檔案名稱相同（預設加密）。

### 哪些內容會被加密

| 元件 | 標準模式 | 啟用名稱加密 |
|-----------|:---:|:---:|
| 檔案內容 | ✅ 已加密 | ✅ 已加密 |
| 檔案名稱 | ❌ 可見 | ✅ 已加密 |
| 目錄名稱 | ❌ 可見 | ✅ 已加密 |
| 檔案大小 | ❌ 可見（略有填補） | ❌ 可見（略有填補） |
| 目錄結構 | ❌ 可見 | ✅ 已加密 |

**建議**：務必啟用檔案名稱加密以獲得最大隱私保護。

## 在 RcloneView 中設定 Crypt

### 步驟 1：先擁有一個現有的遠端

首先，將您的雲端儲存新增為一般遠端（例如 Google Drive、S3、Backblaze B2）：

<img src="/support/images/en/blog/new-remote.png" alt="Add base cloud remote" class="img-large img-center" />

### 步驟 2：在其上建立一個 Crypt 遠端

新增一個類型為 **Crypt** 的遠端。將其設定指向現有遠端上的某個資料夾：

- **Remote**：`gdrive:encrypted-backup/`（Google Drive 上的一個資料夾）。
- **File name encryption**：Standard（加密）。
- **Directory name encryption**：True。
- **Password**：一個強密碼（這是您的加密金鑰——**請勿遺失**）。
- **Password2 (salt)**：用於增強安全性的額外密碼。

### 步驟 3：使用 Crypt 遠端

現在，當您透過 crypt 遠端瀏覽或傳輸檔案時，一切都會被透明地加密。透過 crypt 遠端上傳 → 檔案以加密形式抵達 Google Drive。透過 crypt 遠端下載 → 檔案會自動解密。

## 加密備份工作流程

### 設定加密備份工作

從本機儲存（或其他雲端）建立一個 Copy 工作，目標為 crypt 遠端：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create encrypted backup job" class="img-large img-center" />

### 排程每日加密備份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule encrypted backup" class="img-large img-center" />

### 雲端服務商看到的內容

如果有人瀏覽您的 Google Drive，他們會看到：

```
encrypted-backup/
  q6r2v8s3f1g4h5j6k7l8/
    a1b2c3d4e5f6g7h8i9j0k1l2m3n4.bin
    p5q6r7s8t9u0v1w2x3y4z5a6b7c8.bin
  m9n0o1p2q3r4s5t6u7v8/
    d9e0f1g2h3i4j5k6l7m8n9o0p1q2.bin
```

檔案名稱不可辨識，內容也已加密。就連資料夾結構也被隱藏起來。

### 您（透過 crypt 遠端）看到的內容

```
encrypted-backup/
  Documents/
    tax-return-2025.pdf
    passport-scan.jpg
  Medical/
    lab-results-march.pdf
```

正常、可讀的檔案——即時解密顯示。

## 實際應用場景

### 1）加密的 Google Drive 備份

您日常使用的個人 Google Drive。在同一個 Google Drive 上，對敏感檔案進行加密備份：

```
gdrive:Documents/     ← 一般檔案（Google 可見）
gdrive-crypt:Sensitive/ ← 已加密（Google 僅能看到資料塊）
```

### 2）加密的 S3 封存

在 S3 上使用用戶端加密封存敏感資料。即使您的 AWS 帳號遭到入侵，沒有您的密碼，這些資料也無法被讀取。

### 3）HIPAA／法規遵循儲存

醫療、法律及金融資料需要靜態加密。Crypt 遠端提供可驗證的用戶端加密。

### 4）跨境資料保護

在您不完全信任服務商資料存取政策的雲端區域儲存資料。

## 驗證加密備份

透過 crypt 遠端使用資料夾比對功能，驗證您的加密備份與來源是否一致：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify encrypted backup" class="img-large img-center" />

## 重要警告

### 不要遺失您的密碼

沒有「忘記密碼」的復原機制。如果您遺失了 crypt 密碼，您的加密資料將永久無法存取。沒有任何人——不論是 rclone、Google 還是 Amazon——能夠復原它。

**請妥善保存您的密碼：**

- 寫下來並存放在實體保險箱中。
- 使用密碼管理器（與您正在加密的雲端服務分開）。
- 在不同地點至少保存兩份副本。

### 不要直接修改加密後的檔案

切勿直接在雲端服務商上編輯加密後的資料塊。務必透過 crypt 遠端存取這些檔案。直接修改會導致檔案損毀。

### 效能影響

加密會帶來一些 CPU 額外負擔：

- 在現代桌上型電腦與筆記型電腦上幾乎可忽略不計。
- 在 Raspberry Pi 或低功耗裝置上較為明顯。
- 不會影響網路速度（加密在上傳前就已完成）。

## 多個 Crypt 遠端

您可以為不同用途建立不同的 crypt 遠端：

| Crypt 遠端 | 指向位置 | 密碼 | 使用場景 |
|-------------|-----------|----------|----------|
| crypt-personal | gdrive:encrypted/ | Password A | 個人敏感檔案 |
| crypt-work | s3:work-encrypted/ | Password B | 工作文件 |
| crypt-archive | b2:archive-encrypted/ | Password C | 長期封存 |

每一個都使用不同的密碼與不同的底層儲存空間。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增您的雲端儲存**作為一般遠端。
3. **建立一個 crypt 遠端**，指向該雲端上的某個資料夾。
4. **設定一個強密碼**並妥善保存。
5. 對所有敏感檔案操作**使用 crypt 遠端**。
6. **排程加密備份**以實現自動化。

您的資料。您的金鑰。您的掌控。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [符合 HIPAA 規範的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)

<CloudSupportGrid />
