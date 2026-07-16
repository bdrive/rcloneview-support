---
slug: combine-remote-merge-cloud-folders-rcloneview
title: "Combine 遠端 — 在 RcloneView 中將多個雲端資料夾合併為單一樹狀結構"
authors:
  - alex
description: "使用 RcloneView 的 Combine 遠端，將來自不同雲端服務商的資料夾合併成單一虛擬資料夾樹狀結構。"
keywords:
  - combine remote rclone
  - merge cloud folders
  - virtual remote RcloneView
  - unify multiple cloud storage
  - rclone combine backend
  - multi-cloud folder structure
  - virtual file tree cloud
  - RcloneView virtual remotes
  - organize cloud storage folders
  - cross-provider folder merge
tags:
  - RcloneView
  - feature
  - multi-cloud
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Combine 遠端 — 在 RcloneView 中將多個雲端資料夾合併為單一樹狀結構

> 不用再於五個遠端分頁之間來回切換 — RcloneView 的 Combine 遠端能將來自不同雲端服務商的資料夾拼接成單一虛擬資料夾樹狀結構。

想像一間影片製作工作室，將原始素材存放在 Google Drive、專案檔案存放在 Dropbox、成品渲染檔存放在 Backblaze B2。每個遠端各自運作都沒問題，但每次要找「Project X 的主剪輯檔在哪」都得檢查三個分頁。RcloneView 的 Combine 遠端 — rclone 虛擬遠端包裝器之一 — 就是為了解決這個問題：它會將多個上游資料夾以命名子目錄的形式，呈現在單一虛擬遠端中，讓整個製作專案都位於同一個根目錄之下，而不需要實際搬動任何檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Combine 遠端實際的運作方式

Combine 與 Union 不同，Union 是將多個來源合併成一個看起來共用單一目錄的統一視圖。而 Combine 則是將每個上游遠端（或某個遠端內的特定子資料夾）指派為結果虛擬樹狀結構中的一個命名子目錄 — 因此 `footage:` 與 `renders:` 會分別顯示為單一遠端底下的 `production/footage` 與 `production/renders`，彼此完全分離，但可以一起瀏覽。沒有任何檔案會被複製或重複儲存；RcloneView 會即時將讀取與寫入操作直接導向原始遠端。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Combine virtual remote in RcloneView" class="img-large img-center" />

## 在 RcloneView 中設定 Combine 遠端

從「遠端」分頁開啟遠端管理員，建立一個類型為 Combine 的新遠端。將每個上游遠端（或 remote:path）對應到你希望它在合併樹狀結構中顯示的子目錄名稱，然後儲存。結果會像其他任何遠端一樣顯示在檔案總管面板中 — 展開它，每個對應的來源都會以獨立的頂層資料夾呈現，可執行與原生遠端相同的複製、移動及拖放操作。RcloneView 可在單一視窗中掛載並同步 90 多個服務商，支援 Windows、macOS 與 Linux，因此無論在哪一種作業系統上執行，由 Google Drive、Dropbox 與 B2 資料夾組成的 Combine 遠端，行為都完全一致。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing a Combine remote's merged folder structure" class="img-large img-center" />

## 實用場景

除了媒體製作之外，Combine 遠端也適合那些逐漸累積出多個雲端帳號的使用者 — 例如攝影工作室的 RAW 檔案分散在舊的 Dropbox 方案與較新的 S3 儲存桶中，或是小團隊的合約放在 SharePoint、發票卻在 Google Drive。把這兩者包在同一個 Combine 遠端下，就能用單一的資料夾比對或同步工作，鎖定整個邏輯結構，而不必為每個服務商各自執行工作；工作記錄也會顯示一份整合的紀錄，而不是多份互不相連的日誌。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job against a Combine remote" class="img-large img-center" />

## Combine 與其他虛擬遠端的比較

很容易選錯包裝器。Alias 只是幫一個很深的巢狀路徑取個簡短名稱 — 不涉及任何合併。Union 會將多個來源混合成看起來像單一共用資料夾的樣子，適合用來整合免費儲存空間額度。Crypt 則是在既有遠端之上為檔案與資料夾名稱加密。而當你想要讓不同的來源保持分離、但又能從單一根目錄瀏覽時，Combine 就是最適合的選擇。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Combine remote from Mount Manager" class="img-large img-center" />

## 開始使用

1. 若尚未安裝，先從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 若尚未設定，先新增你想要合併的個別遠端（遠端分頁 > 新增遠端）。
3. 在遠端管理員中建立一個新的 Combine 遠端，並將每個上游來源對應到子目錄名稱。
4. 在檔案總管面板中瀏覽合併後的樹狀結構，並針對它執行你的第一個比對或同步工作。

當你分散各處的雲端帳號都整合到同一個 Combine 遠端之下後，資料夾結構就不再是每次找檔案都得付出的代價。

---

**相關指南：**

- [Union 遠端 — 在 RcloneView 中整合多個服務商的免費儲存空間](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)
- [虛擬遠端 — Combine、Union 與 Alias 完整解說](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Alias 遠端 — RcloneView 中的捷徑路徑](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
