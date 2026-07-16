---
slug: union-remote-combine-free-storage-rcloneview
title: "Union 遠端 — 用 RcloneView 將多個免費雲端帳號合併成一個巨大的儲存池"
authors:
  - tayson
description: "Google Drive 提供 15 GB 免費空間。OneDrive 提供 5 GB。Dropbox 提供 2 GB。透過 RcloneView 中 rclone 的 union 遠端，將它們全部合併成一個 22 GB 的虛擬儲存池。"
keywords:
  - combine free cloud storage
  - union remote rclone
  - merge cloud accounts
  - combine cloud storage
  - rclone union drive
  - free cloud storage pool
  - multi cloud storage pool
  - combine google drive onedrive
  - virtual cloud storage
  - aggregate cloud storage
tags:
  - feature
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Union 遠端 — 用 RcloneView 將多個免費雲端帳號合併成一個巨大的儲存池

> Google 提供 15 GB，OneDrive 提供 5 GB，Dropbox 提供 2 GB，Terabox 提供 1 TB。個別來看都很小，但合併成一個 union 遠端後，就是一個免費的多 TB 儲存池。

大多數雲端服務都提供免費儲存方案，但單獨使用時空間都太小，難以應付正式用途。Rclone 的 union 遠端可以將多個儲存位置合併成單一虛擬檔案系統。RcloneView 讓你能以視覺化的方式完成設定，接著就能像瀏覽一個巨大的雲端硬碟一樣，瀏覽、同步並管理這個合併後的儲存池。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Union 遠端的運作方式

Union 遠端會將多個遠端合併成一個虛擬視圖：

- **讀取**：所有底層遠端的檔案都會顯示在同一個目錄清單中
- **寫入**：新檔案會寫入剩餘空間最多的遠端（或依照你設定的策略）
- **透明化**：你只需要操作一個遠端，rclone 會自動管理檔案的分配

## 你可以合併的免費儲存空間

| 服務商 | 免費方案 |
|----------|----------|
| Google Drive | 15 GB |
| OneDrive | 5 GB |
| Dropbox | 2 GB |
| pCloud | 10 GB |
| Terabox | 1 TB |
| MEGA | 20 GB |
| Icedrive | 10 GB |
| Koofr | 10 GB |

合併後：可能超過 1 TB 的免費儲存空間。

## 設定 Union 遠端

<img src="/support/images/en/blog/new-remote.png" alt="Create union remote" class="img-large img-center" />

1. 將每個免費雲端帳號加入為個別遠端
2. 建立一個 union 遠端，將它們全部合併
3. 將這個聯合體當作單一儲存池瀏覽

## 使用情境

### 最大化免費儲存空間

學生、自由工作者及注重預算的使用者，都能透過合併免費方案取得可觀的免費儲存空間。

### 將備份分散到多個服務商

將備份資料分散到多個免費帳號，以提高冗餘性。若其中一個服務商發生問題，其他服務商仍保有資料。

### 建立分層儲存池

在同一個儲存池中，結合快速儲存（Google Drive）與大容量儲存（Terabox）。

## 瀏覽合併後的儲存池

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse union remote" class="img-large img-center" />

雙欄檔案總管會將 union 遠端顯示得如同任何其他遠端一樣。來自所有底層服務商的檔案會一起呈現。

## 重要注意事項

- **檔案不會在底層遠端之間搬移** — 每個檔案都會保留在寫入時所屬的服務商上
- **刪除**動作會從儲存該檔案的服務商中將其移除
- **效能**在列出清單時，取決於底層服務商中速度最慢的一個
- **寫入策略**決定新檔案會寫入哪個服務商

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增免費雲端帳號**作為個別遠端。
3. **建立一個 union 遠端**，將它們合併起來。
4. **瀏覽並使用**，如同單一儲存池一般。

將零碎的免費方案，合併成真正實用的空間。

---

**相關指南：**

- [虛擬遠端：Combine、Union、Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [管理雲端帳號蔓延問題](https://rcloneview.com/support/blog/manage-cloud-sprawl-too-many-accounts-rcloneview)
- [遠端管理指南](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)

<CloudSupportGrid />
