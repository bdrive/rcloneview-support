---
sidebar_position: 3
description: "了解如何在本機網路中自動偵測 Synology NAS，並使用 WebDAV、SMB 或 SFTP 將其連接至 RcloneView。"
keywords:
  - rcloneview
  - Synology NAS
  - 自動偵測
  - NAS 到雲端傳輸
  - SMB
  - WebDAV
  - SFTP
  - Synology 整合
  - 雲端儲存同步
  - 雲端備份
  - google drive
  - onedrive
  - 拖放
  - 工作排程器
  - 多雲端管理
tags:
  - RcloneView
  - Tutorial
  - synology
  - NAS
  - auto-detection
  - cloud-file-transfer
  - webdav
  - sftp
  - cloud-migration
  - multi-cloud
  - sync
  - job
  - drag-and-drop
date: 2025-09-11
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 輕鬆整合 Synology NAS 與 RcloneView：自動偵測、設定與檔案傳輸

使用 **RcloneView**，輕鬆將您的 Synology NAS 連接到 Google Drive、OneDrive 或 iCloud 等雲端服務。透過自動偵測、內建的 SMB、WebDAV 與 SFTP 支援，無需複雜設定，即可在使用者友善的圖形介面中，於 NAS 與雲端硬碟之間傳輸、同步或排程工作。

## **✅ 為何要使用 RcloneView 進行 NAS 到雲端的傳輸？**

如果您將 Synology NAS 用作家用伺服器、辦公室備份或媒體儲存庫,您很可能也擁有雲端儲存帳戶。使用 RcloneView，您無需手動下載檔案，也不必學習命令列工具。

您將可以獲得：

- 🚀 自動偵測本機網路中的 NAS 裝置
    
- 🔄 在 NAS 與雲端儲存之間進行同步與傳輸工作
    
- 👨‍💻 以圖形介面設定 WebDAV、SMB、FTP 與 SFTP
    
- 📅 排程從 NAS 到雲端的自動備份工作
    
- ✅ 在同步前比對資料夾內容
    
- 🧠 無需命令列技能
  

無論您是初學者還是系統管理員，**RcloneView 都能讓 NAS 到雲端的管理變得簡單**。

## **🧰 步驟 1：偵測本機網路中的 NAS**
  

RcloneView 會自動掃描您的本機網路，尋找 Synology NAS 裝置。

<img src="/support/images/en/tutorials/synology-nas-auto-detect.png" alt="synology nas auto detect" class="img-medium img-center" />


- 請確認您的 NAS 與電腦位於**同一個本機網路**中。
    
- 偵測到的 NAS 裝置會出現在清單中，顯示：
    
    - 裝置名稱、IP、MAC 位址、DSM 連接埠
        
    - 開啟 **DSM（DiskStation Manager）**的連結


:::info NAS 自動偵測在 VLAN 環境下無法運作
如果您使用 VLAN（虛擬區域網路），RcloneView 可能無法自動偵測您的 Synology NAS。

這是因為自動探索功能依賴多播（multicast）或廣播（broadcast）協定，而基於安全性與流量隔離的考量，這類協定通常會在 VLAN 之間受到限制或封鎖。
:::

  
### 選擇連線方式

  在下拉選單中，選擇連線方式：

- **WebDAV**（預設且建議使用）
- **SMB**
- **FTP**
- **SFTP**

**🔗 需要先在 Synology 上設定這些項目嗎？**

請參閱官方 DSM 設定指南：

- [在 Synology 上設定 WebDAV](https://kb.synology.com/en-global/DSM/help/WebDAVServer/webdav_server)
- [在 Synology 上啟用 SMB](https://kb.synology.com/en-global/DSM/help/SMBService/smbservice_smb_settings)
- [在 Synology 上設定 FTP](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_setting) 
- [在 Synology 上設定 SFTP](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_sftp) 

:::important 連接埠轉發與 DDNS 設定

如果您的 NAS 位於路由器後方，或處於 NAT（網路位址轉譯）環境中，在 DSM 中啟用 WebDAV、SMB、FTP 或 SFTP 後，您必須在路由器上**設定連接埠轉發**。

📘 進一步了解：[Synology 連接埠轉發指南](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id5)

此外，若要透過網際網路使用**網域而非 IP 位址**存取您的 NAS，您可以設定 Synology 的 **DDNS（動態 DNS）**服務。

🌐 進一步了解：[Synology DDNS 設定指南](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id3)

:::


## **🔗 步驟 2：將 Synology NAS 新增為遠端**

選擇您的 NAS 與連線方式後，RcloneView 會自動引導您完成 **`+ 新增遠端`** 精靈：

- **供應商**會根據您選擇的連線方式（例如 WebDAV、SMB、SFTP）自動選取。
- **遠端名稱**會自動填入（例如 `Synology-28`）——但您可以視需要自行修改。
- **URL 與連接埠**：  
  - 對於 **WebDAV**，請輸入完整的 URL（例如 `https://abc.synology.me:5006`）  
  - 對於 **SMB / FTP / SFTP**，請輸入**主機**（例如 `192.168.1.100`）以及對應的**連接埠**：
    - SMB 為 `445`  
    - FTP 為 `21`  
    - SFTP 為 `22`
- **使用者名稱與密碼**：輸入您用於存取共用資料夾的 NAS 帳戶憑證。

<div class="img-grid-3">
<img src="/support/images/en/tutorials/add-synology-webdav-remote.png" alt="add synology webdav remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-smb-remote.png" alt="add synology smb remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-sftp-remote.png" alt="add synology sftp remote" class="img-medium img-center" />
</div>

📌 **需要每種方式的更多說明？**  
以下是詳細的設定指南：

- 👉 [如何新增 SFTP 遠端](/howto/remote-storage-connection-settings/sftp)
- 👉 [如何新增 WebDAV 遠端](/howto/remote-storage-connection-settings/webdav)



✅ 新增完成後，您的 NAS 遠端會出現在遠端清單中。  
接著您可以在**檔案總管（Explorer）**面板中開啟它，瀏覽檔案或開始傳輸。

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## **💽 步驟 2.5：將 NAS 掛載為本機磁碟機（檔案總管／Finder）**

使用檔案總管工具列中的「掛載」按鈕，可將任何 NAS 資料夾掛載為 Windows 上的本機磁碟機（例如 `W:`），或在 macOS Finder 中呈現為一個位置。

### 如何掛載

1. 在 RcloneView 的**瀏覽／檔案總管**中，開啟您的 NAS 遠端，並瀏覽至要掛載的資料夾。
2. 點擊上方工具列中的**掛載（<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />）**圖示。
3. 設定選項：
   - Windows：選擇一個磁碟機代號（自動或手動選取）
   - macOS：確認掛載資料夾名稱（預設如 `~/homefolder/<Remote name>`），
4. 點擊**儲存並掛載**。該資料夾會以本機磁碟顯示：
   - Windows：位於「本機」中，例如 `synology-28-webdav … (W:)`
   - macOS：位於 Finder 的「位置」中

<img src="/support/images/en/tutorials/mount-synology-nas-as-local-drive.png" alt="mount synology nas as local drive" class="img-medium img-center" />
                
:::tip 取消掛載
若要取消掛載，請在 RcloneView 中點擊**取消掛載**，或從作業系統中退出該磁碟機。
:::

:::note 先決條件
透過 `rclone mount` 進行掛載可能需要作業系統的檔案系統驅動程式。若尚未安裝，請參考以下連結：
- Windows：[WinFsp](https://winfsp.dev/)
- macOS：[macFUSE](https://osxfuse.github.io/)

為提升效能，RcloneView 會在高負載操作期間啟用 **VFS 快取**。初次載入中繼資料可能會因網路狀況而需要一些時間。
:::

如需完整說明與其他方式，請參閱：

- [方法 1：從遠端檔案總管掛載](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- [方法 2：透過掛載管理員掛載](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)
- [檢視與管理已掛載的磁碟機](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)
- [從系統匣快速掛載](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)

## **🚚 步驟 3：傳輸或同步檔案**

  
一旦您的 NAS 已連接為遠端，RcloneView 便提供**4 種強大的方式**，讓您在 NAS 與雲端儲存之間管理檔案。

  
### **🖱️ 方法 1：拖放**

1. 開啟**瀏覽**分頁。
    
2. 在其中一個窗格載入您的 **NAS** 遠端，並在另一個窗格載入您的雲端遠端（例如 Google Drive）。
    
3. 只需將檔案從一個窗格拖曳並放到另一個窗格。
    
4. 傳輸會立即開始。您可以在**傳輸紀錄**分頁中監控進度。
    
<img src="/support/images/en/tutorials/synology-nas-to-google-drag-and-drop.png" alt="synology nas to google drag and drop" class="img-medium img-center" />

  👉 進一步了解：[瀏覽遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)


### **🔍 方法 2：比對資料夾內容**

1. 在檔案總管窗格中開啟 NAS 與雲端資料夾。
    
2. 在頂部選單的**首頁**分頁中點擊**比對**。
    
3. RcloneView 會標示出：
    
    - 僅存在於其中一側的檔案
        
    - 大小或校驗碼有衝突的檔案
        
    - 相同的檔案
        
    
4. 使用**複製 →**、**← 複製**或**刪除**對檔案進行操作。
    
<img src="/support/images/en/tutorials/compare-synology-nas-and-google-drive.png" alt="compare synology nas and google drive" class="img-medium img-center" />

  👉 進一步了解：[比對資料夾](/howto/rcloneview-basic/compare-folder-contents)


### **🔁 方法 3：同步或單次工作**

1. 選擇來源（NAS）與目的地（雲端）。
    
2. 點擊**同步**以開啟同步選項。
    
3. 選擇方向、試執行（dry-run）、篩選條件等。
    
4. 立即執行同步，或點擊**儲存至工作**。
    

  <img src="/support/images/en/tutorials/sync-job-synology-to-google-drive.png" alt="sync job synology to google drive" class="img-medium img-center" />
  

👉 進一步了解：

- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
    
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
    


### **⏰ 方法 4：排程重複執行的工作**

1. 前往**工作管理員** → 點擊**新增工作**。
    
2. 選擇您的 NAS 與雲端資料夾。
    
3. 定義排程（每日、每週、cron）。
    
4. 儲存並啟用該工作。
    

  ✅ 工作將在排程時間於背景自動執行。
 

👉 進一步了解：[工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)



## **🧾 總結**

  

透過 RcloneView 的 Synology NAS 整合功能，您可以：

- 無需技術設定即可偵測並連接 NAS
    
- 輕鬆使用 SMB、SFTP、FTP 或 WebDAV
    
- 將備份工作傳輸、同步或排程至任何雲端
    
  
無需命令列，無需腳本。只需快速、強大且靈活的雲端檔案管理。

  
## **🔗 相關指南**

- [如何新增 SFTP 遠端](/howto/remote-storage-connection-settings/sftp)
- [如何新增 WebDAV 遠端](/howto/remote-storage-connection-settings/webdav)
- [比對資料夾內容](/howto/rcloneview-basic/compare-folder-contents)
- [瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

🧠 **立即透過 RcloneView，開始將您的 NAS 連接至雲端。**

<CloudSupportGrid />
