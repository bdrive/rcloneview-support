---
slug: migrate-google-photos-to-onedrive-rcloneview
title: "使用 RcloneView 將 Google 相簿遷移至 OneDrive"
authors:
  - tayson
description: "逐步指南：使用 RcloneView 將 Google 相簿的相片庫遷移至 OneDrive。涵蓋唯讀存取、資料夾結構、中繼資料處理與整理方式。"
keywords:
  - rcloneview
  - google photos to onedrive
  - google photos migration
  - migrate google photos
  - google photos rclone
  - onedrive photos
  - photo migration
  - cloud photo transfer
  - google photos backup
  - google photos export
tags:
  - google-photos
  - onedrive
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Google 相簿遷移至 OneDrive

> 相片庫是你所擁有最私人、最無可取代的收藏之一——在雲端之間搬移它需要格外謹慎。**RcloneView** 提供視覺化、逐步操作的方式，讓你能將整個 Google 相簿相片庫遷移至 OneDrive，同時不會失去原本的組織結構。

多年來，Google 相簿一直是相片儲存的預設選擇，這得益於它與 Android 及 Google 生態系統的整合。但情況總會改變。也許你正在轉移到 Microsoft 365，或是你的 Google 儲存空間即將用盡，又或者你偏好 OneDrive 與 Windows 更緊密的整合。無論原因為何，遷移一個擁有數千張（甚至數萬張）相片與影片的相片庫，都需要一套可靠的流程。

挑戰在於，Google 相簿並非單純的檔案系統。它是依照日期、相簿與中繼資料來組織相片，而非傳統的資料夾結構。Rclone 透過將 Google 相簿呈現為結構化目錄來處理這個問題，而 RcloneView 則提供視覺化介面，讓你能瀏覽、選取並將所有內容傳輸至 OneDrive——並附帶監控與驗證功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解作為遠端的 Google 相簿

在開始遷移之前，了解 Google 相簿在 RcloneView 中作為雲端遠端的運作方式非常重要。

### 唯讀存取

Google 相簿的 API 僅提供對你相片庫的**唯讀存取**。這代表：

- 你可以透過 RcloneView **瀏覽並下載**所有相片與影片。
- 你**無法透過 API 刪除、重新命名或修改** Google 相簿上的檔案。
- 你**無法透過此遠端上傳**新檔案至 Google 相簿。

這是 Google API 的限制，而非 RcloneView 的限制。就遷移用途而言，唯讀存取已經足夠——因為你是要把資料從 Google 相簿取出，而不是寫入其中。

### 資料夾結構

Google 相簿透過兩種主要的目錄類型來呈現你的相片庫：

- **`media/by-year/`**——所有相片依年份分類（例如 `media/by-year/2024/`、`media/by-year/2025/`）。這裡包含你相片庫中的每一張相片，並依時間順序組織。
- **`media/by-month/`**——相同的相片，但依年份與月份分類（例如 `media/by-month/2024/2024-06/`）。
- **`album/`**——你手動建立的相簿。每個相簿會以資料夾的形式呈現，內含該相簿的相片。

出現在相簿中的相片，同時也會出現在依日期分類的目錄裡。這代表可能會出現表面上的重複——同一張相片同時列在 `media/by-year/2024/` 與 `album/Vacation/` 之下。在遷移過程中，你會希望選擇一種組織方式，以避免同一檔案被複製兩次。

## 設定兩個遠端

### 新增 Google 相簿

1. 開啟 RcloneView，點擊 **+ New Remote**。
2. 從供應商清單中選擇 **Google Photos**。
3. 依照 OAuth 流程操作——你會被導向 Google 進行授權。授予對你相片庫的唯讀權限。
4. 為此遠端命名（例如 `MyGooglePhotos`）並儲存。

### 新增 OneDrive

1. 再次點擊 **+ New Remote**。
2. 從供應商清單中選擇 **Microsoft OneDrive**。
3. 依照 OAuth 流程授權存取你的 OneDrive 帳號。
4. 選擇磁碟機類型（Personal、Business 或 SharePoint）。
5. 為此遠端命名（例如 `MyOneDrive`）並儲存。

現在兩個遠端都會出現在 RcloneView 的 Explorer 中。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 規劃 OneDrive 上的資料夾結構

在開始傳輸之前，先決定你希望相片在 OneDrive 上如何組織。你有幾種選擇：

### 選項一：鏡射依年份分類的結構

將 Google 相簿中的 `media/by-year/` 目錄複製到 OneDrive 上的 `Photos/` 資料夾。你的 OneDrive 結構將會如下所示：

```
Photos/
  2020/
  2021/
  2022/
  2023/
  2024/
  2025/
  2026/
```

這是最簡單的方式，並且能與 OneDrive 內建的相片功能良好搭配，該功能可以以時間軸方式顯示影像。

### 選項二：使用依月份分類的組織方式

複製 `media/by-month/` 以取得更精細的組織方式：

```
Photos/
  2024/
    2024-01/
    2024-02/
    ...
  2025/
    2025-01/
    ...
```

如果你的相片庫龐大，且希望快速找到特定月份的相片，這種方式會很有幫助。

### 選項三：依相簿分類的組織方式

如果你已經細心地將 Google 相簿整理成各個相簿，可以複製 `album/` 目錄：

```
Photos/Albums/
  Vacation 2024/
  Birthday Party/
  Work Events/
```

請注意，依相簿遷移可能會遺漏從未加入任何相簿的相片。若要完整遷移，請將此方式與其中一種依日期分類的方式結合使用。

### 建議做法

對大多數使用者而言，**選項一（依年份分類）是最佳的起點**。它能以簡潔、依時間順序的結構涵蓋相片庫中的每一張相片。如果相簿對你來說很重要，可以再執行一次，只複製 `album/` 目錄到 OneDrive 上另一個獨立的資料夾。

## 執行遷移

在設定好兩個遠端並決定好資料夾策略後，即可開始傳輸。

### 步驟 1：瀏覽與預覽

在其中一個 Explorer 窗格中開啟 Google 相簿，並在另一個窗格中開啟 OneDrive。瀏覽 Google 相簿的目錄結構，確認你能看到依年份、月份與相簿組織的相片。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### 步驟 2：建立目標資料夾

在 OneDrive 窗格中，建立一個 `Photos` 資料夾（或你選擇的任何名稱），作為此次遷移的目標。

### 步驟 3：從測試批次開始

在遷移整個相片庫之前，先用一個年份進行測試：

1. 在 Google 相簿窗格中，瀏覽至 `media/by-year/2025/`（或任何相片數量較易管理的近期年份）。
2. 將該資料夾拖曳至 OneDrive 上的 `Photos/` 目錄。
3. 監控傳輸過程，確認相片能正確送達。
4. 在 OneDrive 上開啟幾張已傳輸的相片，確認它們能正確顯示並保留原有畫質。

### 步驟 4：執行完整遷移

測試成功後，傳輸剩餘的年份：

1. 建立一個從 Google 相簿的 `media/by-year/` 到 OneDrive 的 `Photos/` 的**複製（Copy）**工作。
2. 先執行**模擬測試（Dry Run）**，以查看檔案總數與預估傳輸量。
3. 執行此複製工作。

對於大型相片庫（10,000 張以上的相片），這可能需要數小時。RcloneView 會即時顯示進度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

### 步驟 5：遷移相簿（選用）

如果你也希望在 OneDrive 上保留相簿結構：

1. 建立第二個複製工作，從 Google 相簿的 `album/` 到 OneDrive 的 `Photos/Albums/`。
2. 執行此複製工作。請注意，這會在已存在於依年份分類資料夾中的相片之外，額外建立重複的副本。若你顧慮儲存空間，可以選擇跳過此步驟，或只選擇性地複製特定相簿。

## 了解中繼資料與檔案格式

### 會傳輸的內容

- **原始解析度的相片與影片**——檔案會以原始畫質傳輸，而非壓縮過的「Storage saver」版本。
- **檔案名稱**——原始相機檔名會被保留（例如 `IMG_20240615_143022.jpg`）。
- **檔案日期**——在格式支援的情況下，建立與修改的時間戳記會被保留。

### 不會傳輸的內容

- **Google 相簿中繼資料**——描述、標籤、人臉辨識資料，以及儲存在 Google 相簿資料庫中的位置資訊，都不會被傳輸。這些中繼資料屬於 Google 平台的專有內容。
- **在 Google 相簿中所做的編輯**——如果你曾在 Google 相簿中編輯過相片（裁切、濾鏡等），透過 API 只能取得未經編輯的原始版本，編輯後的版本無法存取。
- **共享相簿的內容脈絡**——他人與你共享的相片，能否存取取決於 Google 的共享設定，結果可能因情況而異。

### EXIF 資料

好消息是，大部分重要的中繼資料是直接嵌入在相片檔案中的 EXIF 資料。這包括：

- 拍攝相片的**日期與時間**。
- **相機型號**與設定（光圈、快門速度、ISO）。
- **GPS 座標**（若拍攝時已啟用定位功能）。

這些 EXIF 資料會隨著檔案一同傳輸，並可被 OneDrive、Windows 相片應用程式，以及幾乎任何相片管理應用程式讀取。

## 驗證遷移結果

傳輸完成後，請驗證所有內容是否正確送達。

### 資料夾比對

使用 RcloneView 的**比對（Compare）**功能：

1. 在其中一個窗格中開啟 Google 相簿，另一個窗格中開啟 OneDrive。
2. 瀏覽至對應的目錄（例如 `media/by-year/2024/` 與 `Photos/2024/`）。
3. 執行比對，找出存在於 Google 相簿但在 OneDrive 上缺失的檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

### 抽查相片

在 OneDrive 上開啟數張已傳輸的相片，確認：

- 影像能正確顯示且未損壞。
- 影片能正常播放。
- 檔案大小符合預期（Google 相簿上 5MB 的 JPEG 檔案，在 OneDrive 上也應該約為 5MB）。

### 檢視工作紀錄

檢查 **Job History（工作紀錄）**面板，確認傳輸過程中是否有任何錯誤。常見問題包括：

- 因檔名含有不支援字元而**跳過的檔案**。
- 極大型影片檔案發生的**逾時錯誤**。
- 來自 Google API 的**速率限制**（雖不常見，但在極大型相片庫中仍有可能發生）。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## 順利遷移的小技巧

- **在離峰時段執行遷移。** 大型相片庫可能需要數小時才能傳輸完成。在夜間開始能讓整個流程不受干擾地進行。
- **針對超大型相片庫使用排程功能。** 如果你有 50,000 張以上的相片，可以建立每日執行的排程工作。每次執行都會從上次中斷的地方繼續，讓遷移在數天內完成，而不需要你持續盯著進度。
- **暫時不要刪除 Google 相簿。** 在完全驗證 OneDrive 上的副本之前，請保持你的 Google 相簿相片庫完整無缺。反正 Google 相簿透過 API 本來就是唯讀的，因此不會有因 RcloneView 而意外刪除的風險。
- **檢查 OneDrive 的儲存空間上限。** 確認你的 OneDrive 方案有足夠空間容納整個相片庫。Microsoft 365 個人版提供 1 TB，而家庭方案則提供最多 6 TB 的共享空間。
- **考慮使用 OneDrive 的相機膠卷整合功能。** 遷移完成後，你可以設定 OneDrive 行動應用程式自動上傳新拍攝的相片，讓你從此無縫接軌，不再依賴 Google 相簿。
- **留意 Google API 的速率限制。** Google 相簿 API 有使用配額限制。若你觸及速率限制，RcloneView 會自動重試，但傳輸速度可能暫時變慢。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在新增遠端精靈中透過 OAuth **連接 Google 相簿**（唯讀存取）。
3. 透過 OAuth **連接 OneDrive**。
4. **瀏覽、複製並驗證**——安全地遷移你珍貴的相片回憶。

你的相片是無可取代的。RcloneView 確保它們能安全抵達 OneDrive。

---

**相關指南：**

- [新增 OAuth 線上登入](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [執行與管理工作](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
