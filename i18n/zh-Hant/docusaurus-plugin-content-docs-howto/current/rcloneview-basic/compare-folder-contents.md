---
sidebar_position: 4
description: "了解如何比較本機與遠端資料夾、篩選結果，並使用 RcloneView 的進階比較功能直接複製或刪除檔案。"
keywords:
  - rcloneview
  - rclone
  - 比較資料夾
  - 資料夾複製
  - 檔案差異
  - 雲端同步
  - 檔案管理
  - 檔案傳輸
  - 檔案總管
  - 遠端儲存管理
tags:
  - RcloneView
  - compare
  - cloud-storage
  - folder-differences
  - Remote-storage-managent
date: 2025-05-30
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 比較資料夾內容

RcloneView 可協助你找出兩個資料夾之間的差異——無論是在本機磁碟上，還是跨雲端遠端——並透過內建的比較功能有效率地複製或管理檔案。

## 選擇要比較的資料夾

要開始比較資料夾：
- 在檔案總管窗格中開啟兩個分頁。
- 從資料夾樹選取要比較的資料夾，或使用路徑列手動輸入完整路徑。
- 點擊上方 **`Home`** 選單中的 **`Compare`** 按鈕以開始比較。

<img src="/support/images/en/howto/rcloneview-basic/select-compare-folder.png" alt="select compare folder" class="img-medium img-center" />
比較完成後，會出現一個摘要彈出視窗。
若要在未來停用此訊息，請勾選「**不再顯示此訊息**」。
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="folder comparison completed" class="img-medium img-center" />
有關資料夾比較畫面的版面配置以及各圖示意義的詳細說明，請參閱資料夾比較指南。

## 比較結果與管理檔案

資料夾比較功能可讓你直接比較並選取檔案進行管理。

不過，如果你需要同步大型資料夾或有效率地管理多個遠端資料夾，使用 **`Sync`** 會是更方便的方法。

### 依選取的結果類型顯示

你可以篩選比較結果，只顯示與你的操作相關的檔案。
這有助於你專注於需要複製或檢視的內容。

例如，如果你想將檔案從左側遠端的資料夾複製到右側：

- 點擊 **`Show left-only files`** 圖示 <img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" />，只顯示存在於左側資料夾但不存在於右側的檔案。
- 點擊 **`Show different files`** 圖示 <img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />，顯示兩側資料夾都存在但大小不同的檔案。
- 如此一來，你就能專注於要複製到右側的目標檔案，不受已同步檔案的干擾。

> ✅ 這讓你能更輕鬆地只選取並複製單一方向所需的檔案。
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />



<details>
<summary>更多圖示說明</summary>

#### 了解比較視窗中的圖示
<Tabs>
<TabItem value="Display Icons" label="顯示圖示">
用滑鼠點擊每個圖示時，會套用以下篩選行為。
再次點擊會切換該篩選的開啟或關閉。

當選取多個圖示時，會顯示符合任一選取條件的檔案（邏輯 **OR**）。

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" />：只顯示存在於左側資料夾但不存在於右側的檔案。

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" />：只顯示存在於右側資料夾但不存在於左側的檔案。

<img src="/support/icons/same-file-icon.png" alt="same file icon" class="inline-icon" />：只顯示兩側資料夾都存在且完全相同的檔案。

<img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />：顯示兩側資料夾都存在但大小不同的檔案。

<img src="/support/icons/show-errored-files.png" alt="show errored files" class="inline-icon" />：顯示任何錯誤或衝突

</TabItem>

<TabItem value="Navigate Icons" label="導覽圖示">
這些圖示用於在**比較**畫面中，依目前的平面資料夾清單結構向上或向下移動資料夾階層。

<img src="/support/icons/navigate-to-upper-folder.png" alt="navigate to upper folder" class="inline-icon" />：移動到目前清單中的**上層資料夾**。

<img src="/support/icons/navigate-to-lower-folder.png" alt="navigate to lower folder" class="inline-icon" />：移動到目前清單中的**下層資料夾**。

</TabItem>

<TabItem value="Operation Icons" label="操作圖示">
這些圖示用於在資料夾中執行檔案操作——例如刪除檔案，或將檔案複製到左側或右側。

<img src="/support/icons/copy-file-to-right.png" alt="copy file to right" class="inline-icon" />：將選取的檔案複製到右側資料夾。

<img src="/support/icons/copy-files-to-left.png" alt="copy files to left" class="inline-icon" />：將選取的檔案複製到左側資料夾。

<img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" />：從任一側刪除選取的檔案。

</TabItem>

<TabItem value="Find Icons" label="尋找圖示">
**尋找**圖示用於在**比較畫面**中，找出檔案數量或檔案大小變化最顯著的資料夾。

<img src="/support/icons/find-folder-by-count.png" alt="find folder by count" class="inline-icon" />：依比較過程中變更的檔案數量尋找資料夾。

<img src="/support/icons/find-folder-by-size.png" alt="find folder by size" class="inline-icon" />：依比較過程中變更檔案的總大小尋找資料夾。

<img src="/support/icons/find-folder-with-largest-change.png" alt="find folder with largest change" class="inline-icon" />：尋找並移動到檔案數量或大小變化最顯著的資料夾。

<img src="/support/icons/find-folder-with-next-large-change.png" alt="find folder with next large change" class="inline-icon" />：移動到檔案數量或大小差異次大的下一個資料夾。

<img src="/support/icons/find-folder-with-smallest-change.png" alt="find folder with smallest change" class="inline-icon" />：尋找並移動到變化最小的資料夾。

<img src="/support/icons/find-folder-with-next-smaller-change.png" alt="find folder with next smaller change" class="inline-icon" />：移動到檔案數量或大小差異較小的下一個資料夾。

</TabItem>

</Tabs>


</details>


### 在遠端資料夾之間複製檔案

#### 選取要複製的檔案

- 使用 `Ctrl + Click` 選取個別檔案
- 使用 `Shift + Click` 選取範圍
- 或直接在窗格之間拖放

#### 執行複製操作

選取檔案後：
- 點擊 **`Copy →`** 按鈕，將選取的檔案從左側複製到右側。
- 點擊 **`← Copy`** 按鈕，從右側複製到左側。

💡 只有在以下情況才會執行複製：
- 目標端不存在該檔案
- 該檔案兩側都存在，但大小不同

複製完成後：
- 已複製的檔案會在比較畫面中標記為 **`equal`** 圖示 <img src="/support/icons/equal-icon.png" alt="equal icon" class="inline-icon" />
- 底部的狀態列會更新完成的詳細資訊
<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation.png" alt="compare copy operation" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation-completed.png" alt="compare copy operation completed" class="img-medium img-center" />
</div>
:::important 校驗碼（即將推出）
預設情況下，RcloneView 會依名稱與大小比較檔案。
不過，當檔案名稱與大小相同時，這可能不足以偵測內容差異。
✅ 校驗碼比較功能將可對檔案內容進行位元組層級的驗證。
此功能規劃於未來更新中推出，將有助於確保更高的同步準確性。
:::
#### 刪除檔案

你也可以從任一資料夾刪除選取的檔案：
- 點擊左側的 **`Delete`** 按鈕，從左側資料夾移除檔案
- 點擊右側的 **`Delete`** 按鈕，從右側資料夾移除檔案

⚠️ 刪除操作為永久性。請在執行前仔細確認選取的檔案。
 
## 使用篩選功能精簡比較

篩選功能可讓你透過排除特定檔案或資料夾，更有效率地執行資料夾比較。

 :::important 需要 Plus 授權
篩選功能僅在 RcloneView 的 **Plus** 授權版本中提供。
:::

### 為什麼要使用篩選？

你可能想排除與比較工作無關的特定資料夾或檔案類型。
透過篩選工具，你可以輕鬆定義在比較過程中應忽略哪些檔案或資料夾。

### 如何排除特定資料夾：

例如，若要從比較中排除所有名為 `folder2` 的資料夾：
1. 在比較畫面中點擊 **`Filter`** 圖示 <img src="/support/icons/filter-run-icon.png" alt="filter run icon" class="inline-icon" />。
2. 在篩選輸入欄位中輸入 `folder2/`，然後點擊 **`Add`**。
3. 該資料夾會出現在 **`Others`** 類別中。
4. 勾選 `folder2/` 旁的核取方塊，然後點擊 **`OK`** 套用篩選。
5. 重新執行比較。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="add custom filter rule" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="addjust custom filter rule" class="img-medium img-center" />
</div>

💡 當像 `cache`、`temp` 或個人設定目錄之類的資料夾僅供參考、不需要比較或複製時，篩選功能特別有用。



<details>
<summary>常用的篩選規則</summary>

#### 常見篩選範例

**`.iso`**：排除所有 .iso 檔案

**`/.git/*`**：只排除根目錄中 .git 資料夾內的檔案，不含子資料夾

**`/.git/`**：排除根目錄中整個 .git 資料夾，包括其中的所有內容

**`.git/`**：排除所有位置的所有 .git 資料夾及其中的所有內容

</details>
