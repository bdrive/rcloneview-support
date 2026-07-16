---
slug: chunker-remote-split-large-files-rcloneview
title: "Chunker 遠端 — 在 RcloneView 中為有大小限制的雲端供應商分割大型檔案"
authors:
  - tayson
description: "部分雲端供應商會拒絕超過特定大小的檔案。Rclone 的 chunker 遠端可自動將大型檔案分割成多個片段上傳，並在下載時重新組合。"
keywords:
  - rclone chunker remote
  - split large files cloud
  - cloud file size limit
  - upload large files cloud
  - chunked upload cloud
  - large file cloud storage
  - rclone split files
  - file size limit workaround
  - cloud upload size limit
  - chunker rcloneview
tags:
  - RcloneView
  - feature
  - performance
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Chunker 遠端 — 在 RcloneView 中為有大小限制的雲端供應商分割大型檔案

> 你的影片檔案有 15 GB，但雲端供應商的上傳限制是 5 GB。與其重新編碼影片或另尋供應商，chunker 遠端可以自動幫你分割檔案。

部分雲端儲存供應商會設有檔案大小上限。Google Drive 的上限是 5 TB（很少會遇到問題），但其他供應商——尤其是免費方案、WebDAV 端點以及部分相容 S3 的服務——限制往往低得多。Rclone 的 chunker 遠端透過在上傳時透明地將大型檔案分割成多個片段、並在下載時重新組合，解決了這個問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Chunker 的運作方式

chunker 遠端會包裝另一個遠端，並：

1. **分割檔案**：將超過可設定大小的檔案分割成編號的片段
2. **逐一上傳片段**至雲端供應商
3. **下載時**，將片段重新組合成原始檔案
4. **完全透明**——你在檔案總管中看到的是原始檔案，而非各個片段

舉例來說，一個 15 GB 的檔案在片段大小設為 5 GB 時，會在供應商端變成三個 5 GB 的片段。當你瀏覽或下載時，它會顯示為單一的 15 GB 檔案。

## 何時需要使用 Chunker

| 情境 | 解決方案 |
|----------|----------|
| 供應商有檔案大小限制 | Chunker 會分割超出限制的部分 |
| WebDAV 伺服器拒絕大型上傳 | 分割成較小的片段 |
| 免費方案有單檔限制 | 分割檔案以符合限制 |
| 大型上傳時網路中斷 | 片段越小，重試越容易 |

## 設定 Chunker 遠端

<img src="/support/images/en/blog/new-remote.png" alt="Create chunker remote" class="img-large img-center" />

建立一個包裝目標儲存遠端的 chunker 遠端，並根據你所使用供應商的限制設定片段大小。

## 與其他遠端組合使用

Chunker 可以與其他特殊遠端疊加使用：

- **Chunker + Crypt**：分割並加密大型檔案
- **Chunker + Compress**：分割並壓縮大型檔案
- **Chunker + 任何供應商**：可搭配全部 70 多個供應商使用

## 重要注意事項

- **片段與供應商相關**：為某個供應商分割的片段，必須透過相同的 chunker 設定來存取
- **請勿直接修改片段**：務必透過 chunker 遠端存取，以維持資料完整性
- **謹慎選擇片段大小**：太小會產生大量檔案（列表速度變慢）；太大則失去分割的意義

## 使用情境

### 備份虛擬機映像檔

虛擬機的磁碟映像檔通常有 50-200 GB。Chunker 可為有上傳限制的供應商分割這些檔案。

### 封存大型媒體檔案

超過單一檔案限制的 4K 影片檔案、原始音訊母帶及大型資料集。

### 提升上傳可靠性

當網路連線不穩定時，較小的片段更容易重試。如果一個 1 GB 的片段上傳失敗，你只需要重試 1 GB，而不是整個 50 GB 的檔案。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 正常方式**新增你的儲存遠端**。
3. **建立一個 chunker 遠端**來包裝它。
4. 透過 chunker **上傳大型檔案**。

沒有太大的檔案，也沒有太小的供應商限制。

---

**相關指南：**

- [Compress 遠端](https://rcloneview.com/support/blog/compress-remote-reduce-backup-size-rcloneview)
- [虛擬遠端：Combine、Union、Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
