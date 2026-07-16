---
slug: remote-management-add-edit-delete-rcloneview
title: "遠端管理指南 — 在 RcloneView 中新增、編輯與整理雲端連線"
authors:
  - tayson
description: "管理 70 多個雲端服務供應商，從有條理地整理遠端開始。了解如何在 RcloneView 的遠端管理員中新增、設定、編輯與整理您的雲端連線。"
keywords:
  - rcloneview remote manager
  - add cloud remote rcloneview
  - manage cloud connections
  - rclone remote setup
  - cloud connection manager
  - rcloneview configure remote
  - add cloud account rcloneview
  - rcloneview setup guide
  - cloud remote configuration
  - organize cloud accounts
tags:
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 遠端管理指南 — 在 RcloneView 中新增、編輯與整理雲端連線

> 您的第一個遠端只需 2 分鐘即可設定完成。但到了第 15 個時，就需要一套系統來管理。以下說明如何在多雲端環境不斷擴大時，有效率地管理所有雲端連線。

RcloneView 中的每個雲端服務供應商都是以「遠端」的形式開始——一個具有憑證與設定的具名連線。當您只有兩、三個遠端時，管理很簡單。但當您加入更多供應商後（許多使用者最終會擁有 10 個以上），保持條理就變得至關重要。本指南涵蓋從新增第一個遠端，到管理複雜多雲端環境的所有內容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 新增遠端

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote" class="img-large img-center" />

遠端管理員會引導您新增 70 多個供應商中的任何一個。每種供應商類型都有不同的設定欄位——Google Drive 使用 OAuth，S3 使用存取金鑰，WebDAV 則使用網址與憑證。

### 常見連線類型

| 連線類型 | 範例 | 驗證方式 |
|----------------|---------|-------------|
| OAuth | Google Drive、OneDrive、Dropbox | 瀏覽器登入 |
| 存取金鑰 | S3、B2、Wasabi、R2 | 金鑰 + 密鑰 |
| 使用者名稱／密碼 | WebDAV、FTP、SFTP | 憑證 |
| 權杖 | Box、Mega | API 權杖 |

## 命名慣例

良好的命名方式可以省去日後的困惑。可考慮以下模式：

- **依供應商命名**：`gdrive-personal`、`gdrive-work`、`s3-backup`
- **依用途命名**：`backup-primary`、`backup-secondary`、`archive`
- **依團隊命名**：`marketing-drive`、`engineering-s3`、`finance-onedrive`

## 編輯遠端設定

需要更新憑證、變更端點或修改設定嗎？您可以透過遠端管理員編輯任何遠端，而無需重新建立。

常見的編輯原因：

- **OAuth 權杖過期** — 重新授權，且不會遺失工作設定
- **存取金鑰變更** — 在金鑰輪替後更新 S3 憑證
- **端點不同** — 切換 S3 地區或自訂端點

## 進階設定

### Crypt 遠端

在既有遠端之上建立加密包裝。Crypt 遠端會在檔案名稱與內容抵達雲端之前先進行加密：

### Union／Combine 遠端

將多個遠端合併為單一虛擬檢視。適合用於整合各供應商間的免費儲存空間額度。

## 整理您的遠端

隨著遠端數量增加：

- **使用一致的命名方式**，讓遠端能依邏輯排序
- **記錄您的設定** — 哪個遠端備份到哪裡
- **清理未使用的遠端** — 移除舊的試用帳戶
- **定期測試連線** — 過期的權杖會導致靜默失敗

## 在檔案總管中使用遠端

設定完成後，遠端會出現在雙窗格檔案總管中。您可以選擇任一遠端作為來源或目的地窗格：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse remotes in explorer" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增您的第一個遠端** — 依照引導式設定進行。
3. **清楚命名**，方便日後參考。
4. 依需求 **新增更多遠端**。
5. 使用一致的命名方式 **保持條理**。

良好的遠端管理，是良好雲端管理的基礎。

---

**相關指南：**

- [連線管理員指南](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [虛擬遠端：Combine、Union、Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
