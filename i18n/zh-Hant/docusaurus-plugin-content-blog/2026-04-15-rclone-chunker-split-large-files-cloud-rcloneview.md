---
slug: rclone-chunker-split-large-files-cloud-rcloneview
title: "Rclone Chunker 遠端 — 在 RcloneView 中為任何雲端儲存分割大型檔案"
authors:
  - tayson
description: "在 RcloneView 中使用 rclone 的 Chunker 虛擬遠端來分割大型檔案，並上傳到具有嚴格單檔大小限制的雲端服務。"
keywords:
  - rclone chunker
  - split large files cloud
  - chunker remote RcloneView
  - large file upload limit
  - cloud file size limit workaround
  - rclone chunker guide
  - split file upload cloud
  - virtual remote chunker
  - rclone virtual remote
  - large file cloud storage
tags:
  - RcloneView
  - feature
  - cloud-storage
  - cloud-sync
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone Chunker 遠端 — 在 RcloneView 中為任何雲端儲存分割大型檔案

> 當雲端服務的單檔大小限制阻擋了您的上傳時，rclone 的 Chunker 虛擬遠端可以透明地分割檔案 — RcloneView 無需任何命令列即可設定並使用它。

許多雲端儲存服務都對單一檔案設有嚴格的大小限制 — Dropbox 將單檔上傳上限設為 50 GB，部分免費或入門方案更將上限壓低至 5–10 GB。對於需要儲存資料庫備份檔、未壓縮的影片匯出檔，或超出這些限制的大型封存檔的使用者來說，rclone 的 **Chunker** 虛擬遠端提供了解決方案：它會在上傳前將檔案分割成較小的區塊，並在下載時透明地重新組合。RcloneView 透過其標準的遠端管理介面來設定並使用 Chunker。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什麼是 Chunker 遠端？

Chunker 是 rclone 的**虛擬遠端包裝器**之一 — 這是一種在檔案送達實際雲端後端之前，改變檔案處理方式的層級。與直接連接雲端服務的標準遠端不同，Chunker 會攔截超過設定大小限制的檔案，並在上傳前將其分割成多個片段。每個區塊都以一種命名慣例儲存為獨立檔案，rclone 能夠識別這種命名方式，以便您透過同一個 Chunker 遠端讀取或下載時進行透明重組。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Chunker virtual remote in RcloneView" class="img-large img-center" />

在 RcloneView 中，像 Chunker 這樣的虛擬遠端與標準遠端一樣，都是透過相同的**「遠端」分頁 > 「新增遠端」**流程建立的 — 您只需選擇 Chunker 作為供應商，指定基礎遠端，並設定區塊大小。建立完成後，結果會與您其他的遠端一同顯示在檔案總管中，分割過程對您的操作流程完全透明。

## 在 RcloneView 中建立 Chunker 遠端

1. 首先，確認您的基礎遠端已完成設定（例如您的 Dropbox 或 OneDrive 遠端）。
2. 前往**「遠端」分頁 > 「新增遠端」**，並在虛擬遠端區段中選擇 **Chunker**。
3. 指定**底層遠端**（您已預先設定好的基礎遠端）以及選填的子目錄。
4. 將**區塊大小**設定在低於您所使用服務的檔案大小限制之下 — 例如，大多數服務可設為 4 GB，若是 Dropbox 則可設為 45 GB，以維持在 50 GB 上限之下。
5. 儲存 Chunker 遠端 — 它現在會與其他遠端一樣顯示在檔案總管中。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Using a Chunker remote for large file uploads in RcloneView" class="img-large img-center" />

當您將一個 30 GB 的影片檔拖曳到 Chunker 遠端時，RcloneView 會將其分割成多個區塊（例如八個 4 GB 的檔案）上傳到底層雲端服務。透過同一個 Chunker 遠端讀取該檔案時，會透明地將其重組 — 您的應用程式看到的仍是一個連續完整的檔案。

## 實際應用案例

一位資料工程師每晚將 20 GB 的資料庫備份檔案封存到某個檔案上限為 10 GB 的雲端服務，他建立了一個 Chunker 遠端來包裝該服務，並將區塊大小設為 8 GB。工作管理員的同步作業運作方式與其他任何雲端傳輸完全相同 — 分割過程對作業設定而言完全透明。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling large file uploads via Chunker remote in RcloneView" class="img-large img-center" />

**將 Chunker 與 Crypt 結合使用**可打造更進階的虛擬遠端組合：先用 **Crypt** 包裝您的基礎遠端（進行端對端加密），再用 **Chunker** 包裝該 Crypt 遠端（進行分割）。結果是：區塊會在上傳前先經過加密，服務供應商只會看到分割成大小受限片段的不透明加密資料塊。對於任何雲端服務上的敏感大型檔案，這是一種絕佳的做法 — RcloneView 透過其標準的遠端管理功能處理這兩層，完全無需命令列。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將您的基礎雲端遠端（具有檔案大小限制的服務）新增為標準遠端。
3. 前往**「遠端」分頁 > 「新增遠端」**，選擇 **Chunker**，並指定您的基礎遠端與區塊大小。
4. 透過 Chunker 遠端傳輸大型檔案 — 分割與重組會透明地自動完成。

Chunker 讓原本會拒絕上傳的雲端服務也能儲存大型檔案 — 對於檔案大小限制原本會阻礙操作的資料密集型工作流程而言，這是一個強大的虛擬遠端工具。

---

**相關指南：**

- [虛擬遠端 — 使用 RcloneView 結合 Combine、Union、Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [使用 RcloneView 進行零命令列 Crypt 遠端設定](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [使用 RcloneView 修正雲端檔案大小限制錯誤](https://rcloneview.com/support/blog/fix-cloud-file-size-limit-errors-rcloneview)

<CloudSupportGrid />
