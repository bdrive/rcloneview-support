---
slug: hasher-remote-add-checksums-rcloneview
title: "Hasher 遠端 — 在 RcloneView 中為缺少檢查碼的儲存空間加入檢查碼"
authors:
  - steve
description: "使用 RcloneView 的 Hasher 虛擬遠端，為本身不提供檢查碼的遠端加入以雜湊為基礎的完整性檢查。"
keywords:
  - rclone Hasher 遠端
  - 為雲端儲存加入檢查碼
  - 雲端檔案完整性檢查
  - 驗證雲端檔案雜湊
  - Hasher 虛擬遠端
  - RcloneView 虛擬遠端
  - 檢查碼同步
  - rclone GUI
tags:
  - RcloneView
  - feature
  - rclone
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hasher 遠端 — 在 RcloneView 中為缺少檢查碼的儲存空間加入檢查碼

> Hasher 虛擬遠端在現有遠端之上增加雜湊功能，因此即使儲存空間本身沒有檢查碼，完整性檢查仍然可用。

某些儲存後端無法提供檔案雜湊，這會削弱傳輸後的比對和驗證。RcloneView 支援 rclone 的 Hasher 虛擬遠端，這是一個在您既有遠端之上疊加雜湊功能的封裝層。本指南介紹它在什麼情況下有幫助以及如何使用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hasher 遠端的作用

虛擬遠端透過封裝現有遠端來增加功能。Alias 縮短路徑，Crypt 負責加密，Hasher 則為完整性檢查增加雜湊。如果後端不提供檢查碼，比對會退回到檔案大小和修改時間，這可能漏掉內容已變更但大小和時間未變的情況。

用 Hasher 遠端封裝該後端後，它便具備了雜湊能力，以檢查碼為基礎的比對也就有了依據。它適合正確性比速度更重要的封存和備份情境。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中建立新的虛擬遠端" class="img-large img-center" />

## 建立 Hasher 遠端

開啟 Remote 分頁並選擇 New Remote，然後選擇 Hasher 類型。指向您想封裝的底層遠端和資料夾，並給它取一個便於辨識的名稱，例如 `archive-hashed`。儲存後，它會像其他遠端一樣出現在檔案總管中。

在任何會用到原遠端的地方，都可以使用封裝後的遠端：瀏覽、複製，或作為同步的來源或目的地。請注意，雜湊與封裝層綁定，因此對於需要驗證的資料，請一律使用 Hasher 遠端。

## 搭配同步與比較使用

在同步工作的 Advanced Settings 中開啟 **Enable checksum**，檔案將依雜湊加大小進行比對。與 Hasher 遠端結合使用，比僅靠大小和時間能得到更可靠的結果。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="顯示兩個資料夾之間差異的 Folder Compare 檢視" class="img-large img-center" />

請先執行 Dry Run 預覽將被複製或刪除的內容，然後再執行。RcloneView 在 Windows、macOS 和 Linux 上，可在一個視窗中對 90 多個供應商進行掛載和同步，因此同樣的驗證方法適用於您的所有雲端。

## 在 Job History 中檢視結果

執行結束後，開啟 Job History 確認狀態、已傳輸的檔案數和總大小。如果工作回報錯誤，可在 Log 分頁中查看詳細資訊。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="顯示已完成同步執行的工作紀錄" class="img-large img-center" />

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 如果尚未新增，請新增缺少檢查碼的遠端。
3. 在 Remote > New Remote 中建立封裝它的 Hasher 遠端。
4. 建立開啟 **Enable checksum** 的同步工作，並先執行 Dry Run。

更嚴謹的驗證意味著您能在問題發生之前發現隱蔽的差異。

---

**相關指南：**

- [虛擬遠端 — 使用 RcloneView 組合 Combine、Union 和 Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [使用 RcloneView 修復雲端同步檢查碼不符](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [使用 RcloneView 修復雲端備份驗證失敗](https://rcloneview.com/support/blog/fix-cloud-backup-verification-failures-rcloneview)

<CloudSupportGrid />
