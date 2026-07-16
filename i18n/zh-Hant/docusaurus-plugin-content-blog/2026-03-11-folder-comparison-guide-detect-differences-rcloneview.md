---
slug: folder-comparison-guide-detect-differences-rcloneview
title: "資料夾比較深度解析——偵測任意兩個雲端儲存位置之間的所有差異"
authors:
  - tayson
description: "RcloneView 的資料夾比較功能可找出任意兩個雲端儲存位置之間遺失的檔案、大小不符與同步偏差。含實務範例的完整指南。"
keywords:
  - folder comparison tool
  - compare cloud folders
  - detect missing files cloud
  - cloud sync verification
  - compare google drive onedrive
  - folder diff tool
  - cloud storage comparison
  - verify cloud backup
  - find missing cloud files
  - cloud folder diff
tags:
  - folder-comparison
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 資料夾比較深度解析——偵測任意兩個雲端儲存位置之間的所有差異

> 你上週執行了一次備份。所有檔案都成功傳輸了嗎？大小正確嗎？有沒有遺漏什麼？唯一確定的方法，就是逐一比對來源與目的地的檔案。這正是資料夾比較（Folder Comparison）的用途。

資料夾比較是 RcloneView 最實用的功能之一。它會比較兩個儲存位置——可以是本機、NAS、雲端的任意組合——並清楚呈現兩者之間的差異。遺失的檔案、大小不符、日期差異，以及僅存在於單邊的檔案，都會被明確標示出來。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 資料夾比較會顯示什麼

### 檔案分類

比較兩個位置後，檔案會被分類為：

- **相符（Match）**——檔案同時存在於兩個位置，且大小與修改時間相同。✅
- **僅左側（Left only）**——檔案只存在於來源（左側）。可能需要複製過去。
- **僅右側（Right only）**——檔案只存在於目的地（右側）。可能是孤立檔案或多餘的副本。
- **不同（Different）**——檔案同時存在於兩個位置，但大小或日期不同。可能需要更新。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison results" class="img-large img-center" />

## 何時該使用資料夾比較

### 1）備份後——驗證完整性

在執行任何複製或同步工作後，比較來源與目的地：

- **全部相符？** → 備份完整。
- **有僅左側的檔案？** → 這些檔案沒有被備份。請調查原因。
- **有僅右側的檔案？** → 檔案已從來源刪除，但仍存於備份中（在複製工作中屬正常情況）。

### 2）同步前——預覽變更

在執行同步工作之前，先比較以了解將發生哪些變更：

- **僅左側** → 將被複製到目的地。
- **僅右側** → 將從目的地被「刪除」（僅限同步工作！）。
- **不同** → 將被覆寫。

這就像是一次視覺化的模擬演練。

### 3）遷移後——確認沒有遺漏

從一個雲端遷移到另一個雲端之後：

- 比較舊雲端與新雲端。
- 每個檔案都應該是「相符」或「僅右側」（已存在於目的地）。
- 任何「僅左側」的檔案表示遺漏，需要重新傳輸。

### 4）定期稽核——偵測偏差

即使有排程同步，事情仍可能悄悄出錯。每月比較可以抓出：

- 未被回報的傳輸失敗。
- 因速率限制而被跳過的檔案。
- 損毀的檔案（大小不同）。
- 在工作進行中過期的 OAuth 權杖。

## 實務範例

### 比較 Google Drive 與 S3 備份

來源：Google Drive（主要）。
目的地：S3（備份）。

**健康備份後的預期結果：**
- 大多數檔案：相符 ✅
- 部分「僅左側」：自上次備份以來新增到 Google Drive 的檔案（下次會被複製）。
- 少數「僅右側」：已從 Google Drive 刪除但仍保留在備份中的檔案（這是好事——代表你的備份保留了它們）。

### 比較兩個 NAS 磁碟區

左側：NAS 磁碟區 1（使用中的資料）。
右側：NAS 磁碟區 2（鏡像）。

**任何差異都代表鏡像已失去同步。** 請立即修正。

### 在停用雲端帳號前進行比較

在取消 Dropbox 之前：
1. 比較 Dropbox 與 Google Drive（資料遷移的目的地）。
2. 確保「僅左側」檔案數量為零（Dropbox 上的所有內容都已存在於 Google Drive）。
3. 確認無誤後，才能取消 Dropbox。

## 比較選項

### 檢查方式

- **大小**——比較檔案大小。速度快，但無法偵測位元層級的損毀。
- **修改時間**——比較時間戳記。適合偵測已更新的檔案。
- **校驗碼**——比較檔案雜湊值（MD5、SHA1）。最耗時但也最徹底，可偵測位元衰減與損毀。

對於關鍵資料，請使用校驗碼；對於例行檢查，大小加上修改時間就已足夠。

### 效能建議

- **大型目錄（10,000 個以上檔案）**——比較可能需要數分鐘，請耐心等候。
- **跨雲端比較**——需要列出兩邊雲端的內容。可使用 `--fast-list` 提升效率。
- **縮小範圍**——比較特定子目錄，而非整個雲端，以獲得更快的結果。

## 針對差異採取行動

比較完成後，你可以直接採取行動：

- **僅左側的檔案** → 選取並複製到右側。
- **不同的檔案** → 選取並在右側更新。
- **僅右側的檔案** → 檢視是否要保留或移除。

這使得資料夾比較不只是診斷工具，更是一項工作流程工具。

## 與批次工作整合

v1.3 的批次工作可以包含比較步驟：

1. 從來源複製到目的地。
2. 比較來源與目的地。
3. 透過 Slack 回報任何差異。

這種自動化的「備份後驗證」工作流程，能確保你隨時掌握備份的狀態。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增你想比較的兩個位置**。
3. **在兩者之間執行資料夾比較**。
4. **檢視結果**——相符、僅左側、僅右側、不同。
5. **針對差異採取行動**——複製、更新或進一步調查。

如果你無法驗證，就無法信任。

---

**相關指南：**

- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作歷史與傳輸紀錄](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
