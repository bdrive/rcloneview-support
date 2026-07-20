---
slug: lsf-lsjson-remote-file-listing-rcloneview
title: "使用 RcloneView Explorer 列出並分析遠端檔案"
authors:
  - tayson
description: "使用 RcloneView Explorer 以視覺化方式列出、排序並分析遠端雲端檔案。以直覺的 GUI 取代 rclone lsf 與 lsjson 指令來進行檔案管理。"
keywords:
  - rcloneview
  - rclone lsf
  - rclone lsjson
  - 遠端檔案列表
  - 雲端儲存分析
  - 檔案大小分析
  - 雲端檔案管理
  - 儲存空間使用量
  - 目錄比較
  - 雲端檔案總管
tags:
  - RcloneView
  - feature
  - file-management
  - tips
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView Explorer 列出並分析遠端檔案

> 了解雲端帳戶中儲存了哪些內容，是有效管理它們的第一步。**RcloneView** Explorer 提供視覺化的檔案列表體驗，以直覺的瀏覽、排序與分析取代複雜的 CLI 指令。

rclone CLI 提供強大的檔案列表指令，例如 `lsf` 與 `lsjson`，可以各種格式輸出檔案詳細資訊。這些指令對於腳本編寫很有用，但並不適合日常的檔案探索。要在數千行終端機輸出中找出特定檔案或找出佔用大量空間的檔案，既繁瑣又容易出錯。

RcloneView 的 Explorer 將這種體驗轉變為視覺化且可互動的形式。你可以取得相同的底層資料，但呈現方式是熟悉的檔案總管介面，並支援排序、篩選與多欄位檢視。你可以一目了然地看到檔案大小、修改日期與類型，並只需點擊一下即可深入目錄結構。

對於仍需要原始 CLI 輸出的使用者，RcloneView 內建的終端機讓 `rclone lsf` 與 `lsjson` 指令一鍵可用，讓你在同一個應用程式中同時擁有兩者的優點。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Explorer 中的視覺化檔案列表

RcloneView 的 Explorer 面板以標準的檔案總管版面顯示任何已設定遠端的內容。當你選擇一個遠端並瀏覽至某個目錄時，你會看到：

- **檔案與資料夾名稱**，並附有常見檔案類型的易識別圖示。
- **檔案大小**以易讀格式顯示（KB、MB、GB）。
- **修改日期**顯示每個檔案最後更新的時間。
- **檔案數量**針對目錄顯示，讓你能看到每個資料夾包含多少項目。

這在視覺上相當於執行 `rclone lsf --format "pst" remote:path`，但可以直接與每個項目互動。點擊資料夾即可開啟。右鍵點擊檔案可執行複製、移動或刪除等操作。選取多個檔案可進行批次操作。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 依大小、日期與名稱排序

列出遠端檔案最常見的原因之一，就是尋找特定項目或找出模式。RcloneView 的 Explorer 支援以欄位為基礎的排序，讓這件事變得非常簡單：

- **依大小排序**可快速找出佔用最多儲存配額的最大檔案。這對於有儲存空間限制的雲端服務商特別有用，因為少數幾個大檔案可能就佔了大部分用量。
- **依日期排序**可找出最近修改過的檔案、找出數月未曾更動的過時內容，或確認最近一次同步操作是否更新了預期的檔案。
- **依名稱排序**適合在你大致知道要找什麼時進行按字母順序瀏覽。

點擊任一欄標題即可依該欄位排序，再次點擊則反轉排序順序。這個簡單的互動取代了在 CLI 中將 `rclone lsf` 輸出透過管線傳給 `sort` 指令的做法。

## 尋找大型檔案並分析儲存空間使用量

儲存成本會不斷累積，了解空間都花在哪裡對成本管理至關重要。RcloneView 讓你無需執行另外的稽核腳本即可分析儲存空間使用量：

1. 在 Explorer 中導覽至某個遠端的根目錄。
2. 依大小降冪排序，立即顯示出最大的檔案。
3. 深入大型目錄，查看哪些子目錄對總用量的貢獻最多。

此工作流程取代了常見的 CLI 模式，即執行 `rclone lsjson --recursive remote: | jq 'sort_by(.Size) | reverse'`，並嘗試以視覺方式解析 JSON 輸出。在 Explorer 中，相同的資訊會以可排序、可點擊的介面呈現。

如需更深入的分析，你可以使用 RcloneView 內建的終端機執行 `rclone ncdu remote:`，直接在應用程式內取得互動式的儲存空間使用量分析。

## 比較目錄樹

RcloneView 的雙面板 Explorer 版面設計用於比較不同遠端之間的目錄內容。在左側載入一個遠端，右側載入另一個，然後以視覺方式比較它們的結構：

- 找出僅存在於其中一個遠端而另一個沒有的檔案。
- 找出可能顯示傳輸未完成的檔案大小差異。
- 確認同步操作是否產生了預期的結果。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

內建的比較功能更進一步，會自動標示出兩個目錄之間的差異。這在視覺上相當於執行 `rclone check source: dest:`，但具有互動式顯示，讓你能立即針對差異採取行動。

## 使用內建終端機進行進階查詢

對於超出視覺化 Explorer 所能提供的進階檔案列表需求，RcloneView 包含一個內建終端機。這讓你可以直接存取所有 rclone CLI 指令，包括：

**`rclone lsf`** 用於簡單的格式化列表：
```
rclone lsf remote:documents --format "pst" --recursive
```
這會以扁平格式列出所有檔案的路徑、大小與時間戳記，適合用於管線傳輸或儲存。

**`rclone lsjson`** 用於結構化資料：
```
rclone lsjson remote:documents --recursive --no-modtime
```
這會以 JSON 格式輸出檔案中繼資料，適用於程式化分析或提供給其他工具使用。

**`rclone size`** 用於儲存空間摘要：
```
rclone size remote:
```
這會提供遠端上檔案數量與位元組總數的快速摘要。

終端機在 RcloneView 內執行，因此你不需要另外開啟主控台或設定 rclone 路徑。你既有的遠端設定已經可以直接使用。

## 同時瀏覽多個遠端

RcloneView 的 Explorer 支援同時開啟多個遠端。這對於需要跨多個雲端服務商管理檔案的使用者特別有用：

- 在一個面板開啟 Google Drive，在另一個面板開啟 OneDrive，以比較資料夾結構。
- 瀏覽 S3 儲存桶，同時參考對應的本機目錄。
- 並排檢查 Backblaze B2 與 Wasabi 上的檔案，以驗證跨服務商的備份。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

每個面板皆獨立運作，因此你可以按自己的步調瀏覽、排序與檢視，而不影響另一個面板。當你發現需要在遠端之間移動的檔案時，只需拖放即可。

## 實用的檔案分析工作流程

以下是一些常見的檔案分析任務，以及在 RcloneView 中完成它們的方法：

**遷移前稽核雲端儲存：**
瀏覽來源遠端，依日期排序以區分活躍與過時的檔案，並決定哪些要遷移、哪些要封存或刪除。這個準備步驟能大幅減少遷移的時間與成本。

**驗證備份完整性：**
並排開啟來源與備份遠端，分別導覽至相同的目錄，並使用比較功能確認所有檔案都已正確複製。

**尋找重複或過時的檔案：**
依名稱排序以找出名稱相似的檔案，或依日期排序以找出多年未修改的檔案。移除不必要的檔案以釋放儲存配額並降低成本。

**產生檔案清單：**
使用內建終端機執行 `rclone lsjson --recursive remote:`，並將輸出儲存以供文件記錄、合規或稽核之用。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在遠端管理員中新增你的雲端儲存遠端。
3. 開啟 Explorer 並瀏覽任一遠端，查看檔案的大小、日期與類型。
4. 使用排序、比較與內建終端機進行更深入的分析。

無論你需要的是快速的視覺掃描還是詳細的檔案清單，RcloneView 的 Explorer 都能讓所有資訊唾手可得，無需記住 CLI 語法。

---

**相關指南：**

- [瀏覽並管理遠端儲存空間](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
