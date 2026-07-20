---
sidebar_position: 8
description: "了解如何使用 RcloneView 將遠端雲端儲存掛載為虛擬磁碟機，包括透過 Remote Explorer、Mount Manager 及系統匣進行設定。"
keywords:
  - rcloneview
  - rclone
  - mount
  - mount manager
  - cloud drive
  - virtual drive
  - rclone mount
  - local drive
  - remote explorer
  - remote storage management
tags:
  - RcloneView
  - mount
  - local-drive
  - virtual-drive
  - cloud-storage
  - Remote-storage-managent
date: 2025-06-19
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 將雲端儲存掛載為本機磁碟機

:::important 掛載前的必要條件
在掛載之前，請確認目標遠端已加入 RcloneView。   
參閱：[新增遠端](/howto/rcloneview-basic/remote-manager#add-a-new-remote)
:::

## 在 RcloneView 中掛載遠端儲存

RcloneView 可讓你將遠端儲存掛載為虛擬磁碟機，以便更輕鬆地存取與管理。  
本指南說明如何使用兩種方式掛載遠端儲存，以及如何管理掛載設定。

### 方法一：從 Remote Explorer 掛載

你可以在瀏覽遠端資料夾內容時直接進行掛載。

1. 在 **Remote Explorer** 面板中，選擇你要掛載的遠端資料夾。 
2. 點擊 Remote Explorer 面板頂角的**掛載圖示**（<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />）。
3. 系統會開啟 **Mount** 對話框，並自動填入所選的遠端路徑。
4. 設定掛載選項：
   - **Target**：選擇 `Auto`，或從清單中手動指定磁碟機代號。
   - （選用）勾選「Mount to local path」以指定自訂的掛載位置。
   - 啟用 **Auto mount**，讓此遠端在 RcloneView 啟動時自動掛載。
5. 點擊 **Save and mount** 以套用設定並立即掛載。
   - 或者，點擊 **Save** 僅儲存掛載設定，稍後再進行掛載。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-medium img-center" />

<details>
<summary>進階掛載選項</summary>

進階掛載選項

| 欄位                        | 說明                                                                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Volume name**    | （選用）為掛載的磁碟區設定自訂名稱。此名稱可能會顯示在你的檔案總管或系統介面中。                                                                                                                                                        |
| **Mount type**     | 選擇掛載後端：<br /> - `cmount`（Windows 預設）：使用 Rclone 內建的、以 C 語言為基礎的類 FUSE 掛載引擎，相容性較高 <br />- `nfsmount`（替代方案，主要用於 Linux/macOS 環境）。使用 NFS 通訊協定來掛載遠端 |
| **Network drive**  | 勾選此方塊可將掛載標記為網路磁碟機。這可能會影響作業系統處理已掛載資料夾的方式。                                                                                                                                                       |
| **Read only**      | 啟用唯讀模式，防止對遠端進行寫入操作。                                                                                                                                                                                               |
| **Allow other**    | 允許非掛載者以外的其他使用者存取已掛載的檔案系統（主要用於 Linux）。                                                                                                                                                        |
| **Cache mode**     | 控制快取行為。可選項目包括：  <br />- `off`  <br />- `minimal`  <br />- `writes`  <br />- `full`  <br />預設的 `writes` 模式會快取寫入操作。                                                                                              |
| **Cache max size** | 允許的最大快取大小（以位元組為單位）。  <br />範例：1073741824 = 1GB。  <br />設為 `-1` 表示不限制。                                                                                                                                            |
| **Cache max age**  | 快取資料保持有效的時間。時間單位為**奈秒**。範例：3600000000000 = 1 小時。                                                                                                                                                               |
| **Dir cache time** | 目錄快取的有效時間。時間單位為**奈秒**。範例：300000000000 = 5 分鐘。                                                                                                                                                   |

💡 僅在你熟悉掛載設定的情況下才使用這些選項。預設值對大多數使用者來說已經適用。

</details>
### 方法二：透過 Mount Manager 掛載

你也可以使用 **Mount Manager** 來設定並掛載儲存。

1. 點擊頂端選單列 **`Remote`** 分頁下的 **`Mount Manager`** 按鈕。  
2. 點擊 **`New mount`** 建立新的掛載設定。  
3. 選擇遠端，並可選擇性指定要掛載的子目錄。  
4. 設定掛載選項：  
   - **Target**：選擇 `Auto`，或從清單中手動指定磁碟機代號。  
   - （選用）啟用 **Mount to local path** 以指定自訂的掛載路徑。  
   - 啟用 **Auto mount**，讓此遠端在 RcloneView 啟動時自動掛載。  
1. 點擊 **`Save`** 以儲存掛載設定，但不立即掛載。  
   - 若要立即儲存並掛載遠端，請點擊 **`Save and mount`**。  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-medium img-center" />
## 檢視與管理已掛載的磁碟機

若要檢視或管理你的掛載設定，請點擊主選單 **`Remote`** 分頁下的 **`Mount Manager`** 按鈕以開啟 **Mount Manager** 對話框。

所有已儲存的掛載設定都會列在 Mount Manager 視窗中。  
每一項設定會依目前的**狀態**進行分類：
- **Mounted**：該遠端目前已掛載並處於使用中狀態。
- **Unmounted**：該掛載設定已儲存，但目前尚未掛載。
  <img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="mount manager status" class="img-medium img-center" />
你可以依據狀態執行以下操作：


<Tabs>
<TabItem value="Status: mounted" label="🟢 狀態：已掛載">

- <img src="/support/icons/unmount-icon.png" alt="unmount icon" class="inline-icon" /> ：**卸載** — 點擊以卸載目前已掛載的遠端。
- <img src="/support/icons/disabled-edit-mount.png" alt="disabled edit mount" class="inline-icon" /> ：（已停用）編輯
- <img src="/support/icons/open-mount-folder.png" alt="open mount folder" class="inline-icon" /> ：**開啟** — 點擊以在檔案總管中開啟已掛載的資料夾。
- <img src="/support/icons/disabled-delete-mount-configuration.png" alt="disabled delete mount configuration" class="inline-icon" /> ：（已停用）刪除
</TabItem>



<TabItem value="Status: Configured" label="🟠 狀態：未掛載">

- <img src="/support/icons/mount-run-icon.png" alt="mount run icon" class="inline-icon" /> ：**掛載** — 點擊以手動掛載所選的遠端。
- <img src="/support/icons/edit-mount-configuration.png" alt="edit mount configuration" class="inline-icon" /> ：**編輯** — 點擊以修改掛載設定。
- <img src="/support/icons/disabled-open-mount-folder.png" alt="disabled open mount folder" class="inline-icon" /> ：（已停用）開啟
- <img src="/support/icons/delete-mount-configuration.png" alt="delete mount configuration" class="inline-icon" /> ：**刪除** — 點擊以移除此掛載設定。
</TabItem>

</Tabs>


<br />
<br />

:::tip 從系統匣快速掛載
你也可以透過系統匣圖示快速管理掛載。

1. 在系統匣中的 **RcloneView 圖示**上按右鍵。
2. 將滑鼠移到 **Mount** 選單上。
3. 你可以：
   - 檢視目前已掛載的磁碟機，並掛載或卸載該磁碟機
   - 卸載全部
   - 開始新的掛載
<img src="/support/images/en/howto/rcloneview-basic/mount-from-system-tray.png" alt="mount from system tray" class="img-small img-left" />

:::

