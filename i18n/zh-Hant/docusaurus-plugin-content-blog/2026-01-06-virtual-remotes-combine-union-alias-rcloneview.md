---
slug: virtual-remotes-combine-union-alias-rcloneview
title: "RcloneView 虛擬遠端：使用 Combine、Union 與 Alias 打造單一多雲端工作區"
authors:
  - tayson
description: "使用 RcloneView 虛擬遠端，無需複製資料即可統一多雲端資料夾。了解何時該選擇 Alias、Combine 或 Union，打造更清爽的工作流程。"
keywords:
  - virtual remote
  - combine remote
  - union remote
  - alias remote
  - multi cloud viewer
  - rcloneview virtual remote
  - cloud workspace
  - multi cloud management
  - rcloneview workflow
  - cloud file organization
tags:
  - RcloneView
  - cloud-storage
  - file-management
  - sync
  - multi-cloud
---

import RvCta from '@site/src/components/RvCta';

# RcloneView 虛擬遠端：使用 Combine、Union 與 Alias 打造單一多雲端工作區

> 多雲端資料四處分散，讓資料夾難以尋找。RcloneView 的虛擬遠端讓你無需搬移或複製任何一個檔案，就能統一視圖。

虛擬遠端是整理多雲端工作流程最快的方法之一。你不必在多個分頁之間切換或重新設定工作，而是可以建立一個指向現有遠端與資料夾的虛擬視圖。你的原始資料依然留在原處，但你的工作區會變得更容易瀏覽與自動化。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼虛擬遠端很重要

- 不用每次執行工作或比對資料夾時都在深層路徑中翻找。
- 在不複製資料的情況下，將多個雲端呈現為單一工作區。
- 讓 Explorer、Compare、Sync 與 Jobs 之間的組織方式保持一致。

## 什麼是 RcloneView 中的虛擬遠端？

虛擬遠端建立在既有的遠端與資料夾之上，本身並不儲存資料。它們指向你已經擁有的位置，並以更清爽的新視圖呈現。

從 **New Remote → Virtual** 建立它們：

- **Alias**：指向深層資料夾的捷徑。
- **Combine**：將多個資料夾並排列出的單一視圖。
- **Union**：將多個資料夾混合在一起的單一合併視圖。

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

## Alias 遠端：即時存取深層資料夾

**最適合**：每天都會開啟的跳轉資料夾。

Alias 就像一個書籤，能即時開啟特定資料夾，非常適合重複性工作或團隊共用路徑。

範例：將共用團隊資料夾（例如 `Drive:Team/Projects/Client-A`）加入書籤，並以 `Alias_ClientA` 開啟。

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="Add alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="Alias remote file browser" class="img-large img-center" />

指南：[/support/howto/remote-storage-connection-settings/alias-remote](/howto/remote-storage-connection-settings/alias-remote)

## Combine 遠端：一個視圖，多個資料夾

**最適合**：儀表板與專案集合。

Combine 會在單一遠端內並排顯示多個資料夾。每個資料夾都保留原本的結構，但你可以在同一處瀏覽它們。

範例：建立一個名為 `Marketing_Assets` 的 Combine 遠端，內含：

- `Drive:Marketing`
- `Dropbox:Assets`

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="Add combine remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="Combine view example" class="img-large img-center" />

指南：[/support/howto/remote-storage-connection-settings/combine-remote](/howto/remote-storage-connection-settings/combine-remote)

## Union 遠端：跨雲端的單一合併資料夾

**最適合**：集中式歸檔或多來源匯入。

Union 會將多個資料夾合併成一個混合視圖。當你希望即使檔案分散在不同雲端，也能看起來像單一資料夾時，這非常理想。

範例：將兩個遠端的每月原始素材合併成一個 `Raw_Footage` 視圖。

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="Add union remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="Union view example" class="img-large img-center" />

指南：[/support/howto/remote-storage-connection-settings/union-remote](/howto/remote-storage-connection-settings/union-remote)

## 快速決策指南：Alias vs Combine vs Union

| 需求 | 選擇 | 原因 |
| --- | --- | --- |
| 快速跳轉到深層資料夾 | **Alias** | 指向特定路徑的單一捷徑 |
| 並排檢視多個資料夾 | **Combine** | 保留各自獨立的資料夾結構 |
| 將多個資料夾視為一個 | **Union** | 為集中式資料提供合併視圖 |

## 虛擬遠端的實用工作流程

- **同步前先比對**：在 Combine 或 Union 視圖上執行 Compare，先看清差異。  
  指南：[/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)
- **跨多來源同步**：將 Union 遠端同步到備份目的地，以鏡像混合式歸檔。  
  指南：[/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- **一次儲存工作**：使用 Job Manager 排程虛擬遠端的 Sync，讓它自動持續執行。  
  指南：[/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)
- **選用掛載**：掛載虛擬遠端，並將其當作本機磁碟機瀏覽。  
  指南：[/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-large img-center" />

## 最佳實務與命名慣例

- 使用清楚的前綴：`Alias_ProjectX`、`Combine_Marketing`、`Union_Archive`。
- 將來源說明保留在工作名稱或 Job Manager 的描述中。
- 避免在同一個 Union 中混合不相關的資料夾，以減少混淆。
- 想要清楚時使用 Combine，想要簡單時使用 Union。

## 結論

虛擬遠端能減少多雲端工作流程中的摩擦。Alias、Combine 與 Union 讓你在不複製資料的情況下打造乾淨的工作區，使團隊能更快速地移動並維持結構完整。今天就試試其中一種，看看你的日常導覽會變得多輕鬆。
