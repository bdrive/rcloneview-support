---
sidebar_position: 5
description: "了解如何透過連接至執行於 AWS EC2 上的外部 Rclone 執行個體的 RcloneView，直接在雲端同步 Google Drive 與 AWS S3。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - google drive
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - aws-ec2
  - google-drive
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - cloud-to-cloud
  - aws-s3
date: 2025-06-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 透過 EC2 上的外部 Rclone 同步 AWS S3 與 Google Drive

在雲端儲存服務之間（例如 Google Drive ↔ AWS S3）同步資料，使用 **RcloneView** 非常簡單，這要歸功於其內建的 **Embedded Rclone**。安裝 RcloneView 時，這個內嵌引擎會自動包含在內，通常用於從您的**本機電腦**管理檔案傳輸。

不過，使用 Embedded Rclone 意味著**所有傳輸流量都會經過您的本機電腦**。這在同步大型資料集或在較慢的網路環境下操作時，可能會大幅拖慢速度。

舉例來說，使用 Embedded Rclone 將檔案從 **Google Drive 同步到 AWS S3** 時，需要先將檔案下載到本機，再上傳到 S3。這種雙重傳輸不僅增加延遲，也會消耗您的本機頻寬。

<img src="/support/images/en/tutorials/sync-aws-s3-and-google-drive-via-ec2.png" alt="sync aws s3 and google drive via ec2" class="img-medium img-center" />
在這種情況下，更好的解決方案是**直接在雲端執行個體上執行 Rclone**——例如**一台 AWS EC2 伺服器**。透過將 RcloneView 連接到執行於 EC2 上的**外部 Rclone**，您可以：

- 避免流量經過本機電腦  
- 直接在雲端內執行雲端對雲端的傳輸（Google → EC2 → S3）  
- 善用更高速的雲端網路基礎架構    

這種架構能大幅提升效能，並減輕本機裝置的負擔。

在本教學中，我們將引導您使用 **RcloneView 的「新視窗」功能**連接到 EC2 上的**外部 Rclone**，然後完全在雲端中同步 **Google Drive** 與 **AWS S3** 之間的檔案。

:::caution 可能產生 AWS EC2 與網路傳輸費用  

在 EC2 執行個體上執行 Rclone 可以加快傳輸速度，但請注意，**AWS 可能會針對運算用量以及傳送到其他服務的輸出資料收取費用**。

參閱：[AWS 定價 – 資料傳輸](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)

:::
  
本指南將引導您完成以下步驟：

1. 在 AWS EC2 執行個體上啟動並設定 **Rclone**  
2. 開啟新的 RcloneView 視窗  
3. 連接到 EC2 上的**外部 Rclone**  
4. 新增 **Google Drive** 與 **AWS S3** 遠端  
5. 直接在兩者之間同步檔案，並獲得更佳效能

---

## 第 1 部分：在 EC2 上部署 Rclone（外部 Rclone）

依照 AWS EC2 指南啟動 Ubuntu、開啟連接埠 5572、安裝 Rclone，並執行 `rcd` 常駐程式  

👉 參閱：[如何在 AWS EC2 伺服器上執行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
 
**重點**：

- `rclone rcd` 正在以 `--rc-addr=0.0.0.0:5572` 執行  
- 在您的 EC2 安全群組中開啟連接埠 `5572`
- 已設定 HTTP Basic 驗證（`--rc-user`、`--rc-pass`）  
- 使用以下指令執行常駐程式：

 ```bash
   rclone rcd --rc-user=admin --rc-pass=admin --rc-addr=0.0.0.0:5572
```

- 您可以透過以下方式驗證存取：

```bash
curl -X POST -u admin:admin "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"

```



---

## 第 2 部分：開啟新的 RcloneView 視窗

為了保持連線的整齊有序，RcloneView 允許每個視窗以獨立的 Rclone 引擎運作。

1. 啟動 **RcloneView**
    
2. 從 `Home` 選單點選 **`New Window`** 按鈕
    
3. 系統將開啟一個新的應用程式視窗。此執行個體獨立於主視窗運作，並會維護自己的連線內容。
    

  📌 _您將在下一步中將此視窗連接到您的外部 Rclone（EC2）。_

  
👉 深入了解：[使用「新視窗」建立多個 Rclone 連線](/howto/rcloneview-advanced/multi-window)

---

## 第 3 部分：連接 EC2 主機上的外部 Rclone

在**新開啟的視窗**中，依照以下步驟連接到您在 EC2 主機上的外部 Rclone：

1. 從 `Settings` 選單開啟 **`Connection Manager`**。

2. 點選 **`New Connection`** 建立新的 Rclone 連線設定檔。

3. 填寫必要欄位：

    - **Display Name**：`ec2-rclone`（或您偏好的任何名稱）

    - **Remote Address**：`http://<EC2-PUBLIC-IP-or-DNS-NAME>:5572`

    - **Username / Password**：使用您在第 1 部分啟動 Rclone 常駐程式時所設定的值  
      （例如 `--rc-user=admin`、`--rc-pass=admin`）

4. 點選 **`Test Connection`** 以驗證設定。  
   您應該會看到連線成功的回應。

5. 若測試通過，點選 **`Save`**，然後點選 **`Connect`**。

6. 現在您已連接到執行於 EC2 上的**外部 Rclone 執行個體**，連線狀態應會顯示在視窗頂部。

<div class="img-grid-2">
<img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="new connection to ec2 rclone" class="img-medium img-center" />
<img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="connected to ec2 rclone" class="img-medium img-center" />
</div>

👉 深入了解：[新增外部 Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)


---

## 第 4 部分：新增 AWS S3 與 Google Drive 遠端（透過外部 Rclone）

  
仍在已連接 EC2 的 RcloneView 視窗中：

### ➕ 新增 AWS S3 遠端

1. 在 `Remote` 選單中點選 **`+ New Remote`**
    
2. 在 **Provider** 分頁中，搜尋並選取 S3
    
3. 在 **`Options`** 分頁中：
    
    - 將 **`Provider`** 設定為 AWS
        
    - 輸入您的 AWS **`Access Key ID`** 與 **`Secret Access Key`**
        
    - 設定 **`Region`**，並可選擇性地為相容 S3 的服務設定 **Endpoint**
        
    
4. 點選 **Save**，並為其命名（例如 ec2-s3）
    
👉 深入了解：[新增 AWS S3 遠端](/howto/remote-storage-connection-settings/s3)

### ➕ 新增 Google Drive 遠端（使用 OAuth Access Token）

您可以依照以下指南中的步驟，使用先前取得的 **OAuth Access Token**，而不必重新完成以瀏覽器為基礎的登入流程：

👉 參閱：[在無瀏覽器的情況下於外部 Rclone 上設定 Google Drive](/howto/remote-storage-connection-settings/ec2-google-drive-connection)

1. 從 `Remote` 選單前往 **`+ New Remote`**
2. 選取 **Google Drive** 作為提供者
3. 在 **Options** 分頁中，向下捲動並點選 **Show advanced options**
4. 將先前複製的權杖貼到 **`token`** 欄位中
5. 為遠端命名（例如 `ec2-gdrive`）並儲存

  <img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />


---

## 第 5 部分：在 AWS S3 與 Google Drive 之間同步檔案

 現在您可以透過您的 EC2 Rclone 執行個體，在 Google Drive 與 S3 之間傳輸檔案。

  ### **📁 方法 A：依需求比較並同步**

1. 前往 **Browse** 分頁
    
2. 在左側面板載入 **Google Drive 遠端**（ec2-gdrive:）
    
3. 在右側面板載入 **AWS S3 遠端**（ec2-s3:）
    
4. 在頂部選單點選 **Compare**
    
5. 檢視差異：
    
    - 僅存在於其中一側的檔案
        
    - 大小不同的檔案
        
    - 完全相符的檔案
        
    
6. 使用 **Copy →**、**← Copy** 或 **Delete** 進行同步
    

💡 進度會顯示於狀態列與傳輸紀錄分頁中。

  👉 深入了解：[比較資料夾內容](/howto/rcloneview-basic/compare-folder-contents)

---

### **🕒 方法 B：設定排程同步工作**

1. 前往 **Home → Job Manager**，然後點選 **Add Job**
    
2. 選取 **Sync**
    
    - 來源：ec2-gdrive:folder
        
    - 目的地：ec2-s3:folder
        
    
3. 設定：
    
    - 同步方向
        
    - 篩選規則（選填）
        
    
4. （選填）啟用 **Scheduling**
    
    - 設定時間規律
        
    - 使用內建模擬器預覽排程
        
    
5. 點選 **Save & Enable**
    

  排程設定完成後，RcloneView 將使用您在 EC2 上的 Rclone 後端自動執行同步。

👉 深入了解：
- [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)
  
---

## 最終檢查

- 透過 **Transfer Log** 或 **Job History** 面板確認同步是否成功完成
    
- 定期檢查 EC2，確認其仍保持連線並正常回應
    

---

## 🔗 相關指南

- [如何在 AWS EC2 伺服器上執行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [使用「新視窗」建立多個 Rclone 連線](/howto/rcloneview-advanced/multi-window)
- [新增外部 Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [新增 AWS S3 遠端](/howto/remote-storage-connection-settings/s3)
- [比較資料夾內容](/howto/rcloneview-basic/compare-folder-contents)
-  [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)



<CloudSupportGrid />
