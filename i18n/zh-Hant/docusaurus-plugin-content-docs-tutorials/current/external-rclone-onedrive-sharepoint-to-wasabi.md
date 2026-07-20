---
sidebar_position: 12
description: "透過執行外部 Rclone 常駐程式並以 RcloneView 控制，將檔案高速地從 OneDrive 移動到 Wasabi。"
keywords:
  - rcloneview
  - rclone
  - external rclone
  - onedrive
  - wasabi
  - s3 compatible
  - cloud migration
  - cloud sync
  - cloud transfer
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - wasabi
date: 2025-07-15
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 透過外部 Rclone 將 OneDrive 移動到 Wasabi

當 Microsoft 365 的資料量龐大時，透過筆記型電腦來移動資料可能會又慢又不穩定。在雲端 VM（EC2、GCE 或任何 Linux 主機）上執行 **Rclone**，並以 **RcloneView** 來操控它，可以讓流量留在資料中心內，避免家用網路的瓶頸，並讓無瀏覽器驗證成為可能。

您將會：

1. 在遠端伺服器上以外部引擎的形式執行 **rclone rcd**。
2. 開啟一個連接到該外部 Rclone 的**新 RcloneView 視窗**。
3. 新增 **OneDrive** 與 **Wasabi** 遠端（包含僅限無介面/CLI 的驗證方式）。
4. 在不佔用本機頻寬的情況下，執行從 OneDrive 到 Wasabi 的複製、同步或排程工作。

## 第 1 部分：在伺服器上部署 Rclone（外部 Rclone）

1. 啟動一台小型 Linux VM（例如 AWS 上的 `t3.medium` 或同等規格）。  
2. 對您的 IP 開放 TCP **5572** 埠，或透過 SSH 建立通道。  
3. 安裝 Rclone：
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. 啟動具備驗證的遠端控制常駐程式：
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
5. 從您的筆記型電腦確認是否可連線：
```bash
curl -u admin:admin -X POST "http://<SERVER-IP>:5572/rc/noop"
```
   回應為 `{}` 即表示常駐程式已就緒，可供 RcloneView 使用。

👉 需要複習一下嗎？請參閱 [在 AWS EC2 上執行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)。

## 第 2 部分：開啟新的 RcloneView 視窗

每個 RcloneView 視窗都可以配對不同的 Rclone 執行個體。

1. 啟動 **RcloneView**。  
2. 在 **Home** 選單中點選 **`New Window`**。  
3. 系統會開啟第二個視窗；此視窗將連接到您剛才啟動的外部 Rclone。

👉 深入了解：[使用「新視窗」搭配多個 Rclone 連線](/howto/rcloneview-advanced/multi-window)。

## 第 3 部分：將 RcloneView 連接到外部 Rclone

在新視窗中：

1. 開啟 **Settings -> Connection Manager** -> **New Connection**。  
2. 填入以下內容：

| 欄位          | 值                              |
| -------------- | ---------------------------------- |
| Display Name   | `external-rclone`                  |
| Remote Address | `http://<SERVER-IP>:5572`          |
| Username       | `admin`                            |
| Password       | `admin`                            |

3. 點選 **Test Connection** -> **Save** -> **Connect**。狀態列應會顯示已連接到外部常駐程式。

## 第 4 部分：新增 Wasabi 與 OneDrive 遠端（於外部 Rclone 中）

您現在建立的所有遠端都存在於外部 Rclone 處理程序中，並由已連接的 RcloneView 視窗共用。

### ➕ 新增 Wasabi（S3 相容）

1. 前往 **Remote** 分頁 -> **`+ New Remote`**。  
2. 選擇 **S3 / Wasabi**。  
3. 輸入您所在地區的**存取金鑰**、**密鑰**與**端點**（例如 `s3.ap-northeast-2.wasabisys.com`）。  
4. 儲存該遠端（例如命名為 `wasabi-prod`）。

👉 詳情請見：[如何新增 Wasabi 遠端](/tutorials/#2-add-wasabi-as-a-remote-in-rcloneview)。

### ➕ 新增 OneDrive（無需本機瀏覽器也可運作）

1. 再次點選 **`+ New Remote`** 並選擇 **OneDrive**。  
2. 若伺服器有瀏覽器，請在 RcloneView 中完成標準的 OAuth 流程。  
3. 若伺服器為無介面（headless）或無法開啟瀏覽器，請依循無介面/CLI 方法：在有瀏覽器的裝置上產生權杖，再貼到伺服器端的設定中。  

👉 逐步無介面流程說明：[從 EC2/無介面環境新增 Microsoft 遠端](/howto/remote-storage-connection-settings/ec2-onedrive-headless)。
儲存後，您應該會在 Explorer 中看到兩個遠端：**OneDrive** 與 **Wasabi**。

## 第 5 部分：傳輸或同步至 Wasabi

### 方法 A：一次性複製/同步

1. 在 Explorer 中，於一側開啟 **OneDrive**，另一側開啟 **Wasabi**。  
2. 選擇 OneDrive 上的來源資料夾，以及 Wasabi 上的目的地儲存貯體/資料夾。  
3. 點選 **`Sync`**（讓目的地與來源一致），或使用 **Copy ->** 進行簡單複製。  
4. 可選擇先執行 **Dry Run**，再執行 **Run** 以開始作業。進度會顯示於 **Transfer** 分頁。

### 方法 B：儲存或排程工作

1. 依上述方式設定複製/同步後，在對話方塊中選擇 **Save to Jobs**。  
2. 開啟 **Job Manager**，隨時重新執行已儲存的工作。  
3. 若要自動化，請在 Job Manager 中啟用 **Schedule**（PLUS 功能），並設定所需的執行頻率。  
4. 查看 **Job History** 以檢視日誌與結果。

👉 更多有關工作與排程的資訊：  
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)  
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)  
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

## 加快 Wasabi 上傳速度的小技巧

- 盡可能將外部 VM 放在與 Wasabi 相同的地區，以降低延遲。  
- 對於大型物件，提高 `--transfers` 與 `--s3-upload-concurrency` 的數值可提升傳輸量；請依 CPU 與網路狀況逐步調整。  
- 在執行具破壞性的同步之前，請先使用 **Dry Run** 確認變更內容。

## ✅ 總結

透過將 Rclone 架設為遠端常駐程式，並以專用的 RcloneView 視窗來操控它，您就能穩定地完成 OneDrive -> Wasabi 的資料搬遷，且不受本機頻寬限制。當無法使用瀏覽器時，無介面驗證流程能為您提供保障；而工作與排程功能則讓重複執行變得輕鬆省力。

## 🔗 相關指南

- **驗證與遠端**  
  - [從 EC2/無介面環境新增 Microsoft 遠端](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)  
  - [如何新增 S3 相容遠端](/howto/remote-storage-connection-settings/s3)  
- **外部 Rclone 與視窗**  
  - [使用「新視窗」搭配多個 Rclone 連線](/howto/rcloneview-advanced/multi-window)  
  - [在 AWS EC2 上執行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- **傳輸與自動化**  
  - [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)  
  - [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)  
  - [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
