---
sidebar_position: 5
description: "了解如何使用 RcloneView 強大的同步功能，在本機或雲端儲存之間即時鏡像資料夾。內容涵蓋設定、篩選、試跑（Dry Run）以及排程選項。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync folders
  - bidirectional sync
  - sync job
  - dry run
  - scheduled sync
  - job scheduling
  - Job Monitor
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-storage
  - file-synchronization
  - job-scheduler
  - dry-run
  - Remote-Storage
date: 2025-06-04
author: Jay
---
# 即時同步遠端儲存

使用 RcloneView 的 **`Sync`**（同步）功能，即可在雲端遠端或本機儲存之間即時鏡像資料夾。

本指南將帶您完成同步作業的設定與執行流程。
## 選擇來源與目的地資料夾

要開始同步作業，您需要先定義**來源（Source）**與**目的地（Destination）**資料夾。

- 在**檔案總管（Explorer）**面板中，開啟兩個分頁：
	- 在**左側分頁**選取的資料夾將成為**來源**
	- 在**右側分頁**選取的資料夾將成為**目的地**

- 您也可以直接在每個分頁上方的**路徑列（Path Bar）**輸入資料夾路徑。
- 這些設定之後仍可在**同步（Sync）**設定視窗中調整。

選好資料夾後，點擊上方**`首頁（Home）`**選單中的**`Sync`**按鈕以繼續。
<img src="/support/images/en/howto/rcloneview-basic/sync-remote-folder-select.png" alt="sync remote folder select" class="img-medium img-center" />
## 執行同步作業

選好來源與目的地資料夾後，您即可設定並執行同步作業。


<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="sync configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="sync advanced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="sync filtering settings" class="img-medium img-center" />
</div>

### 步驟 1：確認資料夾路徑

- 在**`設定儲存（Configure Storage）`**步驟中，檢查所選的來源與目的地資料夾。
- 在點擊**下一步（Next）**之前，請確認兩者皆已正確設定。

:::caution 同步的運作方式
RcloneView 的同步會讓來源與目的地保持一致。
這表示**`只會修改目的地`**。
- **來源**資料夾的內容會被鏡像至**目的地**。
- 目的地中存在、但來源沒有的檔案將會被**刪除**。

👍 **重要提示：** Rclone 官方僅正式支援**單向同步（one-directional sync）**。
⚠️ **雙向同步（Bidirection）**目前為**測試版（beta）功能**，尚未獲得官方正式支援。此功能可能導致非預期的行為或錯誤，因此**不建議用於正式環境**。
:::

<details>
<summary>設定儲存詳細資訊</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-config-storage-details.png" alt="sync config storage details" class="img-medium img-center" />

1. **選擇來源資料夾**。
 - 點擊左側面板的資料夾圖示以選擇來源。
2. **選擇目的地資料夾**。
- 點擊右側面板的資料夾圖示以選擇目的地。
3. **新增其他目的地**（選用）。
- 點擊**新增目的地（Add Destination）**按鈕，即可同時同步至多個目的地。如有需要，您可以設定**1:N 同步**。
4. **選擇同步方向**。
 - **只修改目的地**：從來源同步至目的地。會更新或刪除目的地內容，使其與來源一致。
 - **雙向同步**（測試版）：比較兩個資料夾，並將變更雙向同步。
⚠️ 此模式可能會意外覆寫較新的檔案，請謹慎使用。
5. **建立空目錄**（選用）。
- 若啟用此選項，任何不含檔案的來源目錄，都會在目的地重新建立為空資料夾。

:::caution 在 RcloneView 中使用雙向同步
RcloneView 使用 `bisync`（rclone 中的測試版指令）來執行雙向同步。
由於此功能仍屬**實驗性質**，建議在啟用前先參閱官方[使用手冊](https://rclone.org/bisync/)，特別是[限制事項（Limitations）](https://rclone.org/bisync/#limitations)一節。

若使用 bisync 不當，可能導致資料遺失，請謹慎使用。
:::


</details>

### 步驟 2：進階設定（選用）

  - 進階設定包含以下選項：
	  - 傳輸效能
	  - 連線方式
	  - 錯誤處理行為

> 💡 除非您需要自訂行為，否則建議使用預設值。

<details>
<summary>進階設定詳細資訊</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**效能：**

1. **`檔案傳輸數量（Number of file transfers）`**：
   平行執行的檔案傳輸數量。若遠端經常發生逾時，將此值設小一些會有所幫助；若您的頻寬充足且遠端速度快，則可將其設大。
2. **`多執行緒傳輸數量（Number of multi thread transfers）`**：
   使用多執行緒傳輸時，此設定為使用的串流（stream）數量。設為 `0` 可停用多執行緒傳輸（預設為 4）。傳輸大於 256MB 且後端支援的檔案時，rclone 會使用多執行緒進行傳輸。
3. **`相等性檢查器數量（Number of equaility checkers）`**：
   檢查器（checker）會在同步期間檢查檔案是否相等。對於部分儲存系統（例如 S3、Swift、Dropbox），此作業可能耗時較長，因此會平行執行。預設會平行執行 8 個檢查器。不過，若後端回應較慢，您可能需要將 `--checkers` 調低（而非調高）至 4 個或更少的執行緒。


**安全性與完整性：**

5. **`啟用檢查碼以比較檔案`**：
   一般情況下，rclone 會透過檔案的修改時間與大小來判斷是否相等。若您啟用此選項，rclone 將檢查檔案的雜湊值與大小以判斷檔案是否相等。當在儲存相同雜湊類型的遠端之間傳輸時（例如 Drive 與 Swift），此功能相當實用。有關各遠端支援的雜湊類型，請參閱[總覽章節](https://rclone.org/overview/)中的表格。


**錯誤控制：**

5. **`失敗達此次數時重試整個同步`**：
   若同步失敗達此次數，將重試整個同步作業（預設為 3 次）。部分遠端連線可能不太穩定，重試幾次有助於抓回因錯誤而未成功傳輸的檔案。設為 `1` 即可停用重試。

</details>



### 步驟 3：篩選檔案與資料夾（選用）

- RcloneView 預設會為 Google Docs 或 Box Docs 等服務套用基本篩選規則。
- 您可以新增更多檔案類型或資料夾，將其排除於同步範圍之外。

<details>
<summary>篩選設定詳細資訊</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings-details.png" alt="sync filtering settings details" class="img-medium img-center" />

1. **`不同步超過此大小的檔案`**：
   控制允許同步的**最大檔案大小**。
   預設單位為 MB。
2. **`不同步早於此時間的檔案`**：
   控制允許同步的**最長檔案存留時間**。
   此設定僅適用於**檔案本身**，不適用於目錄。
   請使用下列單位：
   `y` = 年、`d` = 天、`h` = 小時、`m` = 分鐘、`s` = 秒（範例：2y30d12h30m45s）
3. **`不同步超過此深度的資料夾`**：
   若設定此項，Rclone 只會同步在指定深度以內的資料夾。
   例如，設為 `1` 時，只會同步最上層目錄中的檔案。
   設為 `2` 時，則會同步前兩層資料夾內的檔案，以此類推。
4. **預先定義的篩選器**。
   您可以快速套用內建的常見檔案類型篩選器，例如：
   - Music、Video、Image、Document、Google Docs、Box Docs
     這些篩選器皆可在篩選清單中作為預先定義的選項使用。
1. **其他（=自訂篩選器）**。
   您可以自訂規則以排除或納入特定的檔案類型、資料夾或路徑。
   以下為一些常見範例：
   **`.iso`**：排除所有 .iso 檔案。
   **`/.git/*`**：僅排除根目錄下 .git 資料夾內的檔案，不包含子資料夾。
   **`/.git/`**：排除根目錄下整個 .git 資料夾，包含其中所有內容。
   **`.git/`**：排除所有位置的 .git 資料夾及其中所有內容。
   
   🔗 如需更進階的範例與語法，請參閱 [Rclone 篩選指南](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>

  
  
### 步驟 4：執行同步

- 完成所有設定後，點擊**執行（Run）**以開始同步流程。

:::important 同步排程
若要在指定的日期與時間執行同步任務，請先點擊**儲存為工作（Save to Jobs）**，將此同步任務登錄為工作。接著執行**`工作管理員（Job Manager）`**以設定排程。

> ⚠️ **工作排程屬於 PLUS 功能。**

您需要購買 [**PLUS 授權**](https://rcloneview.com/src/pricing.html)才能啟用此功能。
:::

### 模擬：執行試跑（選用）

您可以執行**試跑（Dry run）**，模擬同步作業而不會實際進行任何變更。

- 此預覽會顯示哪些檔案將被複製到**目的地**，以及哪些檔案將被刪除。
- 點擊**`查看詳細資訊（See details）`**，即可檢視目的地中將會發生的完整操作清單（例如：複製、建立、刪除）。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="sync dry run" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="sync dry run details" class="img-medium img-center" />
</div>

## 監控同步結果

您可以即時查看同步作業的進度與結果。

### 傳輸狀態（進行中）

- 在同步進行期間，開啟**`傳輸（Transfer）`**分頁以檢視每個檔案的即時進度。
- 點擊 **+** 圖示以展開並監控個別檔案的傳輸情形。
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### 已完成的工作（同步完成後）

- 同步完成後，前往**`已完成（Completed）`**分頁以檢視結果。
- 點擊 **+** 圖示可查看每個已完成工作的檔案層級詳細資訊。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip 快速開啟已同步的遠端
在**`已完成（Completed）`**分頁中，您可以雙擊任一已完成的工作，於檔案總管面板中同時開啟來源與目的地資料夾。
這樣一來，即可輕鬆立即檢視已同步的資料夾。
:::

### 完成通知警示（Windows）

同步完成後，Windows 系統匣中會出現通知彈出視窗，顯示此次同步作業的摘要。

  - 您可以點擊**`查看詳細資訊（See details）`**以檢視完整的結果明細。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip 在 Windows 通知中查看警示訊息
若您錯過了彈出視窗，仍可點擊 **Windows 系統匣**中的**通知圖示**來查看同步警示。
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::



## 將同步作業儲存為工作

若您經常執行相同的同步任務，可以將其儲存為**工作（Job）**以便日後重複使用。

- 完成同步設定後，點擊**`儲存為工作（Save to Jobs）`**。
- 輸入**工作名稱（Job Name）**，然後點擊**儲存（Save）**以儲存此工作。
  - ❗允許使用的字元：`a–z`、`A–Z`、`0–9`、`-`、`_`、`.`
- 您之後可以在**`工作管理員（Job Manager）`**中一鍵執行已儲存的工作。

<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="save sync to jobs" class="img-medium img-center" />
您可以點擊**首頁**選單中的**`工作管理員（Job Manager）`**工具列，檢視並執行已儲存的工作。
<img src="/support/images/en/howto/rcloneview-basic/verify-job-in-job-manager.png" alt="verify job in job manager" class="img-medium img-center" />

