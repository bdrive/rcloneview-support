---
sidebar_position: 6
description: "了解如何在 RcloneView 中建立與管理同步工作，以便重複執行或排程同步遠端資料夾。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync job
  - job manager
  - scheduled sync
  - create sync
  - rclone automation
  - plus license
  - cloud storage
  - remote storage
tags:
  - RcloneView
  - Cloud
  - Sync
  - job-scheduler
  - create-job
  - Job-Management
date: 2025-06-04
author: Jay
---
# 建立同步工作

您可以將常用的同步任務儲存為 **工作（Jobs）**，只需點擊幾下即可重複執行。  

建立工作主要有兩種方式：  
- 直接從同步任務（即時同步）建立工作。 
- 使用 **工作管理員（Job Manager）** 手動設定並儲存工作。 

## 從即時同步建立工作

您可以在同步視窗中設定好同步任務後，點擊 **儲存為工作（Save to Jobs）** 來建立工作。  

👉 參閱：[從同步即時建立工作](/howto/rcloneview-basic/synchronize-remote-storages#save-sync-operation-as-a-job)

您可以點擊主頁選單中的 **`工作管理員（Job Manager）`** 工具列，來檢視並執行已儲存的工作。

## 透過工作管理員建立工作


### （選用）選擇來源與目的資料夾

在使用 **工作管理員** 建立工作之前，您可以選擇性地先指定來源與目的資料夾。  

若您想在稍後新增工作時預先指定資料夾，這會很有幫助。  

您也可以直接在 **工作管理員** 的 **新增工作（Add Job）** 視窗中設定來源與目的資料夾。  

若要開啟工作管理員，請點擊主頁工具列中的 **工作管理員** 按鈕。

<img src="/support/images/en/howto/rcloneview-basic/create-job-using-job-manager.png" alt="create job using job manager" class="img-medium img-center" />

### 新增工作

若要新增工作，請在 **工作管理員（=`Jobs`）** 彈出視窗中點擊 **`新增工作（Add Job）`**。  

#### 步驟 0：開啟工作管理員並點擊 `新增工作`

  您會看到以下 `Jobs` 視窗。點擊 **新增工作** 按鈕以開啟工作建立精靈。

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add job in job manager" class="img-medium img-center" />
  工作精靈會引導您完成三個步驟：

1. **設定儲存空間** – 選擇來源與目的資料夾  
2. **進階設定（選用）** – 設定同步行為  
3. **篩選設定（選用）** – 定義檔案類型或資料夾的篩選條件
<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="add job configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-advnaced-settings.png" alt="add job advnaced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-filtering-settings.png" alt="add job filtering settings" class="img-medium img-center" />
</div>
#### 步驟 1：設定儲存空間

- 在 **`設定儲存空間`** 步驟中，檢查所選的來源與目的資料夾。
- 輸入 **`工作名稱（Job Name）`**（❗允許的字元：`a–z`、`A–Z`、`0–9`、`-`、`_`）
- 若要將一個來源同步至多個目的地，請點擊 **新增目的地（Add Destination）** 以加入其他遠端資料夾。  
  這可實現 **1:N（一對多）** 同步。  
- 請在點擊 **下一步** 之前，確認所有資料夾皆已正確設定。

:::caution 同步運作方式
RcloneView 同步會使來源與目的地內容一致。  
這代表 **`僅修改目的地`**。  
- **來源** 資料夾的內容會被鏡像複製到 **目的地**。  
- 目的地中若存在來源沒有的檔案，將會被 **刪除**。  

👍 **重要：** Rclone 官方僅支援 **單向同步**。  
⚠️ **雙向同步（=Bidirection）** 目前為 **測試版功能**，並非官方正式支援。它可能導致非預期行為或錯誤，因此**不建議用於正式環境**。
:::

<details>
<summary>設定儲存空間詳情</summary>

<img src="/support/images/en/howto/rcloneview-basic/job-config-storage-details.png" alt="job config storage details" class="img-medium img-center" />

1. **`工作名稱`**。 
 - ❗允許的字元：`a–z`、`A–Z`、`0–9`、`-`、`_` 
2. **選擇來源資料夾**。   
 - 點擊左側窗格中的資料夾圖示以選擇來源。  
1. **選擇目的資料夾**。 
- 點擊右側窗格中的資料夾圖示以選擇目的地。  
1. **新增其他目的地**（選用）。 
- 點擊 **新增目的地** 按鈕，即可同時同步至多個目的地。您可依需求設定 **1:N 同步**。  
5. **選擇同步方向**。 
 - **僅修改目的地**：從來源同步至目的地。更新或刪除目的地內容以與來源一致。  
 - **雙向（Bidirection）**（測試版）：比較兩邊資料夾並雙向同步變更。  
⚠️ 此模式可能會無意間覆蓋新檔案，請謹慎使用。  
6. **建立空目錄（選用）**。   
- 若啟用，來源中不含任何檔案的目錄，將在目的地中重建為空資料夾。  

:::caution 在 RcloneView 中使用雙向同步
RcloneView 使用 `bisync`（rclone 中的一項測試版指令）來執行雙向同步。    
由於此功能仍屬 **實驗性質**，建議您在啟用前先閱讀官方[使用手冊](https://rclone.org/bisync/)——特別是 [限制事項（Limitations）](https://rclone.org/bisync/#limitations) 章節。

不當使用 bisync 可能導致資料遺失，請務必謹慎使用。
:::


</details>

#### 步驟 2：進階設定（選用）

  - 進階設定包含以下選項：
	  - 傳輸效能
	  - 連線方式
	  - 錯誤處理行為

> 💡 除非您需要自訂行為，否則建議使用預設值。

<details>
<summary>進階設定詳情</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**效能：**

1. **`檔案傳輸數量`**：   
   同時並行執行的檔案傳輸數量。若遠端經常逾時，可將此數值調小；若頻寬充足且遠端速度快，則可調大。  
2. **`多執行緒傳輸數量`**：  
   使用多執行緒傳輸時，此設定決定使用的串流數量。設為 `0` 可停用多執行緒傳輸（預設為 4）。傳輸超過 256MB 的檔案至支援的後端時，rclone 會使用多個執行緒來傳輸該檔案。  
3. **`相等性檢查數量`**：  
   檢查器（checkers）在同步過程中會執行檔案相等性檢查。對於某些儲存系統（例如 S3、Swift、Dropbox），此過程可能耗時較長，因此會並行執行。預設會並行執行 8 個檢查器。但若後端反應較慢，您可能需要將 `--checkers` 調低（而非調高）至 4 個或更少的執行緒。  


**安全性與完整性：**

5. **`啟用檢查碼比對檔案`**：  
   一般情況下，rclone 會透過檔案的修改時間與大小來判斷檔案是否相同。若啟用此選項，rclone 將檢查檔案的雜湊值與大小來判斷檔案是否相同。這在兩個遠端儲存相同雜湊類型的物件時（例如 Drive 與 Swift）非常實用。各遠端支援的雜湊類型，請參閱[概覽章節](https://rclone.org/overview/)中的表格。  


**錯誤控制：**

5. **`失敗此次數後重試整個同步`**：  
   若同步失敗達此次數，則重試整個同步（預設為 3）。部分遠端可能不夠穩定，重試有助於補傳因錯誤而未成功傳輸的檔案。設為 `1` 可停用重試。  

</details>



#### 步驟 3：篩選設定（選用）

- RcloneView 預設會針對 Google Docs 或 Box Docs 等服務套用基本篩選條件。
- 您可以新增更多要從同步中排除的檔案類型或資料夾。

<details>
<summary>篩選設定詳情</summary>


<img src="/support/images/en/howto/rcloneview-basic/jobs-filtering-setttings-details.png" alt="jobs filtering setttings details" class="img-medium img-center" />
1. **`不同步超過此大小的檔案`**：  
   控制同步允許的**最大檔案大小**。  
   預設單位為 MB。  
2. **`不同步早於此時間的檔案`**：    
   控制同步允許的**最長檔案存留時間**。  
   此設定僅套用於**檔案**，不適用於目錄。  
   使用以下單位：  
   `y` = 年、`d` = 天、`h` = 小時、`m` = 分鐘、`s` = 秒（範例：2y30d12h30m45s）  
3. **`不同步超過此深度的資料夾`**：   
   若設定此項，Rclone 將只同步指定深度內的資料夾。  
   例如，設為 `1` 將只同步最上層目錄中的檔案。  
   設為 `2` 則會同步前兩層資料夾內的檔案，依此類推。
4. **預設篩選條件**。   
   您可以快速套用常見檔案類型的內建篩選條件，例如：  
   - 音樂、影片、圖片、文件、Google Docs、Box Docs  
     這些篩選條件在篩選清單中以預設選項的形式提供。
1. **其他（=自訂篩選條件）**。  
   您可以自訂規則來排除或包含特定的檔案類型、資料夾或路徑。  
   以下為一些常見範例：  
   **`.iso`**：排除所有 .iso 檔案。  
   **`/.git/*`**：僅排除根目錄下 .git 資料夾內的檔案，不包含子資料夾。  
   **`/.git/`**：排除根目錄下整個 .git 資料夾，包含其中所有內容。   
   **`.git/`**：排除所有 .git 資料夾及其內部所有內容，無論位於何處。   
   
   🔗 更多進階範例與語法，請參閱 [Rclone 篩選指南](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>


#### 步驟4：排程（需要 PLUS 授權）

工作排程可讓您依指定的間隔或時間自動執行工作。   

💡 此功能僅限 [**PLUS 授權**](https://rcloneview.com/src/pricing.html) 使用者使用。  

更多詳情請參閱 [設定工作排程](/howto/rcloneview-advanced/job-scheduling-and-execution)。   

最後，請檢視清單中已建立的工作，確認所有設定皆正確無誤。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="add job scheduling" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-completed.png" alt="add job completed" class="img-medium img-center" />
</div>

  





