---
slug: manage-filebase-decentralized-s3-rcloneview
title: "透過 RcloneView 管理 Filebase 去中心化儲存 — 相容 S3 的 IPFS 同步"
authors:
  - tayson
description: "Filebase 提供相容 S3 的方式來存取 IPFS、Sia、Storj 等去中心化儲存網路。使用 RcloneView 的視覺化檔案總管來管理你的 Filebase 儲存桶。"
keywords:
  - filebase storage
  - filebase rclone
  - filebase s3 gui
  - decentralized storage gui
  - ipfs storage manager
  - filebase sync tool
  - filebase file manager
  - filebase backup
  - filebase to google drive
  - decentralized cloud storage
tags:
  - RcloneView
  - s3-compatible
  - decentralized-storage
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 透過 RcloneView 管理 Filebase 去中心化儲存 — 相容 S3 的 IPFS 同步

> Filebase 讓你能透過 S3 API 存取去中心化儲存網路 — IPFS、Storj 和 Sia。RcloneView 透過 S3 介面連線，為去中心化基礎設施帶來熟悉的檔案管理體驗。

Filebase 將去中心化儲存的複雜性抽象化為標準的相容 S3 API。你的檔案會分散儲存在去中心化網路（IPFS、Sia、Storj）中並具備地理備援，但你操作它們的方式與使用 AWS S3 完全相同。RcloneView 透過此 S3 介面連線至 Filebase，提供視覺化檔案瀏覽、跨雲端同步以及排程備份。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Filebase 連接至 RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Filebase remote" class="img-large img-center" />

使用你的存取金鑰、私密金鑰以及 Filebase 端點，將 Filebase 新增為相容 S3 的遠端。

## 為什麼選擇去中心化儲存 + RcloneView？

### 視覺化瀏覽與管理

透過雙窗格檔案總管瀏覽你以 IPFS 為後端的儲存桶：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Filebase storage" class="img-large img-center" />

### 與傳統雲端同步

將去中心化資料的副本保存在 Google Drive 或 AWS S3，方便分享：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync Filebase to cloud" class="img-large img-center" />

### 排程備份

自動化 Filebase 與其他服務供應商之間的複製作業：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Filebase sync" class="img-large img-center" />

### 驗證資料完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Filebase data" class="img-large img-center" />

## 使用情境

- **Web3 專案儲存**，並搭配傳統雲端備份
- **IPFS 內容固定（pinning）**，並具備視覺化管理
- **封存儲存**，運用去中心化網路提升韌性
- **混合策略** — 去中心化用於持久性，傳統雲端用於速度

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 **Filebase** 新增為相容 S3 的遠端。
3. **瀏覽你的儲存桶**，與傳統雲端並列管理。
4. 在集中式與去中心化儲存之間**同步與備份**。

相容 S3 就等於相容 RcloneView — 即使後端是 IPFS 也一樣。

---

**相關指南：**

- [管理 Storj 去中心化儲存](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [同步 Sia 去中心化儲存](https://rcloneview.com/support/blog/sync-sia-decentralized-storage-cloud-rcloneview)
- [建立同步作業](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
