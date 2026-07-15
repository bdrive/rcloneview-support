---
sidebar_position: 11
description: "了解如何透過 EC2 上的外部 Rclone 守護程序，在 RcloneView 的完整管理下，以高速將大型檔案從 AWS S3 傳輸到 Cloudflare R2。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - cloudflare r2
  - cloudflare s3 api
  - cloudflare r2 rclone
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
  - aws-ec2
date: 2025-07-13
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 透過 EC2 上的外部 Rclone 在 AWS S3 與 Cloudflare R2 之間進行高效能檔案傳輸

現代團隊經常同時使用多個物件儲存平台，並很快發現當大型資料集透過本機桌面傳輸時，頻寬、延遲與流出費用會成為關鍵的瓶頸。直接在雲端執行個體上執行 **Rclone**，再透過 **RcloneView** 進行控制，可以將大量流量導入雲端的高速骨幹網路，讓你的筆記型電腦不再位於資料傳輸路徑上。

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2-with-external-rclone.png" alt="transfer files between aws s3 and cloudflare r2 with external rclone" class="img-medium img-center" />

以下的操作說明改編自「透過 EC2 同步 AWS S3 與 Google 雲端硬碟」指南的架構，並將其延伸至 S3 ↔ R2 的情境。你將會：

1. 在 AWS EC2 伺服器上啟動 Rclone 作為遠端控制守護程序（**rcd**）。
2. 開啟另一個 RcloneView 視窗並連線至該外部 Rclone。
3. 在 EC2 託管的 Rclone 中新增 AWS S3 與 Cloudflare R2 遠端。
4. 完全透過雲端對雲端的方式傳輸、同步或排程工作，不受本機頻寬限制。

:::danger AWS 資料傳輸費用
在同一可用區內的區域內流量是免費的，但跨可用區與網際網路流出的流量會產生費用（通常為可用區間 $0.02/GB；至網際網路 $0.09/GB）。
參見：[AWS 定價 – 資料傳輸](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
:::

## **為何使用外部 Rclone？**

| 本機內建 Rclone                                                                  | EC2 上的外部 Rclone                                                                    |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 流量路徑：**S3 → 本機電腦 → R2** — 兩段傳輸，且受限於家用上傳速度。 | 流量路徑：**S3 → EC2 → R2** — 在雲端骨幹網路中僅一段傳輸，速度通常達 10-25 Gbit/s。 |
| 家用 ISP 頻寬上限或不對稱頻寬會拖慢大型遷移作業。                         | 吞吐量大幅提升；不受本機頻寬限制。                                                  |
| 本機 CPU 與記憶體必須為每個位元組進行雜湊運算。                                                | 將 CPU 負載卸載至雲端虛擬機；可依需求選擇更大的執行個體規格。                |
| 可能出現 NAT / 防火牆問題。                                                    | 具有公開 IP 並開放連接埠 5572（或透過 SSH 通道）。                                          |

## 第 1 部分：在 EC2 上部署 Rclone（外部 Rclone）

1. **啟動 Ubuntu EC2 執行個體**（多執行緒上傳建議使用 t3.medium 或更高規格）。
2. 在安全群組中**開放 TCP 5572**（或使用 SSH 通道）。
3. **安裝 Rclone**：
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. **以基本驗證方式執行 rcd 守護程序**：
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
    `--rc-addr` 旗標會公開 HTTP 端點，供 RcloneView 呼叫。
    
5. **從你的筆記型電腦進行健康檢查**：
```bash
   curl -u admin:admin -X POST "http://<EC2-IP or DNS-NAME>:5572/rc/noop"
```
    收到 JSON `{}` 回應即表示守護程序正在運作。

👉 深入了解：[如何在 AWS EC2 伺服器上執行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

## 第 2 部分：開啟新的 RcloneView 視窗

為了保持連線的整齊有序，RcloneView 允許每個視窗使用各自獨立的 Rclone 引擎運作。

1. 啟動 **RcloneView**  
2. 從 `首頁` 選單點選 **`新視窗`** 按鈕。 
3. 系統會開啟一個新的應用程式視窗。此視窗執行個體與主視窗互相獨立，並會維持各自的連線內容。  

  📌 _你將在下一步中把此視窗連線至你的外部 Rclone（EC2）。  

👉 深入了解：[使用「新視窗」管理多個 Rclone 連線](/howto/rcloneview-advanced/multi-window)。

## 第 3 部分：連線至 EC2 託管的 Rclone

在**新開啟的視窗**中，依照以下步驟連線至你在 EC2 上託管的外部 Rclone：

1. 在新視窗中，開啟**設定 → 連線管理員**。
2. 點選**新增連線**並填寫表單：

| 欄位          | 值                              |
| -------------- | ---------------------------------- |
| 顯示名稱   | `ec2-rclone`                       |
| 遠端位址 | `http://<EC2-IP or DNS-NAME>:5572` |
| 使用者名稱       | `admin`                            |
| 密碼       | `admin`                            |

4. 點選 **`測試連線`** 以驗證設定。  
   你應該會看到連線成功的回應。  
5. 若測試通過，點選 **`儲存`**，然後點選 **`連線`。  
6. 你現在已連線至你在 EC2 上執行的**外部 Rclone 執行個體**，連線狀態會顯示在視窗頂端。   

<div class="img-grid-2"> <img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="Create EC2 connection" class="img-medium img-center" /> <img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="Connected to EC2" class="img-medium img-center" /> </div>

## 第 4 部分：新增 AWS S3 與 Cloudflare R2 遠端（透過外部 Rclone）


### ➕ 新增 AWS S3 遠端

1. 前往 **`遠端`** 分頁，點選 **`+ 新增遠端`**。
2. 在 **`供應商`** 分頁中，選擇 **Amazon S3**。
3. 在 **`選項`** 分頁中：
   - 將 `provider` 設為 `AWS`
   - 輸入你的**存取金鑰 ID** 與**秘密存取金鑰**
   - 除非有自訂需求，否則區域與端點可維持預設值
4. 點選**儲存**以完成設定。

👉 深入了解：   
- [如何新增 S3 遠端](/howto/remote-storage-connection-settings/s3)
- [如何取得 AWS S3 存取憑證](/howto/cloud-storage-setting/aws-account-info)
    
### ➕ 新增 Cloudflare R2 遠端

1. 同樣地，在 `遠端` 分頁中點選 **`+ 新增遠端`**。
2. 在 **`供應商`** 分頁中，選擇 **S3**（沒錯，再選一次——R2 使用的是 S3 通訊協定）。
3. 在 **`選項`** 分頁中：
   - 將 `provider` 設為 `Cloudflare`
   - 輸入你的 **Cloudflare R2 存取金鑰**與**秘密金鑰**
   - 將 `endpoint` 設為 `https://<accountid>.r2.cloudflarestorage.com`
1. 點選**儲存**以完成 R2 遠端設定。

👉 深入了解：   
- [如何新增 S3 遠端](/howto/remote-storage-connection-settings/s3)
- [如何取得 Cloudflare R2 存取憑證](/howto/cloud-storage-setting/cloudflare-r2-credential)
    
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

## 第 5 部分：在 AWS S3 與 Cloudflare R2 之間同步檔案

### 🔁 方法 A：使用「同步」或「工作」

1. 在總管窗格中，選取你要同步的 **Cloudflare R2** 資料夾與 **AWS S3** 資料夾。
2. 點選 `首頁` 選單中的 **`同步`** 按鈕。
3. 選擇同步選項（單向或雙向）、預覽動作並確認。
4. RcloneView 會執行同步作業，並在 **`傳輸`** 記錄分頁中顯示進度。

- 若要進行重複或排程傳輸：
  1. 在同步彈出視窗中點選 **`儲存為工作`**，或開啟 **`工作管理員`** → **`新增工作`**。
  2. 設定來源、目的地與選項。
  3. 儲存後手動執行，或設定排程。

👉 深入了解：
- [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ 方法 B：排程週期性同步工作

1. 在總管窗格中，選取你想要保持同步的 **Cloudflare R2** 與 **AWS S3** 資料夾。
2. 從 **`首頁`** 或 **`遠端`** 選單開啟 **`工作管理員`**，然後點選 **`新增工作`**。
3. 確認你的來源與目的地。
4. 使用排程編輯器設定工作應執行的時間。儲存前先預覽你的排程。
5. 儲存並啟用排程工作。

RcloneView 將會在你指定的時間執行同步作業。你可以在 **`工作記錄`** 中查看執行詳情與日誌，並在完成時收到通知。

👉 深入了解：[工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

##  ⚡ 效能調校參考表

| 參數                 | 建議值                                    | 影響程度 | 原因說明                                                                                                                                                                         |
| ------------------------- | ---------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--s3-chunk-size`         | `50M`                                                | *****        | 更大的分段可減少 R2 上的 Class-A 操作次數並提升速度[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)。   |
| `--s3-upload-concurrency` | `32–64`                                              | ***          | 增加 R2 分段上傳的執行緒數量。                                                                                                                                               |
| `--transfers`             | `32–64`                                              | *            | 平行物件上傳可在 10 Gbit 連線上提升吞吐量[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)。 |
| `--s3-disable-checksum`   | 僅在外部另行核對<br />校驗碼時才加入 | ****         | 略過逐段雜湊計算的瓶頸——請謹慎使用[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)。        |
## 📈 真實環境調校結果

為了在雲端對雲端傳輸時發揮最大效能，我們依照下述方式微調了 **Cloudflare R2 遠端**設定。

:::caution 僅為實驗性結果

RcloneView 是 Rclone 的圖形化前端介面。此處分享的效能調校建議與基準測試結果，是根據社群貼文（[如何將 Cloudflare R2 的多段上傳速度最大化](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)）啟發下所進行的實驗測試，實際結果可能因你的雲端環境、地區、網路狀況與使用情境而有所不同。

這些結果**並不保證**適用於所有情況，僅供參考。
:::

### 🔧 如何更新 R2 遠端設定

若要變更目標 R2 遠端的設定：

1. 在**總管**窗格中，點選 Cloudflare R2 遠端旁的齒輪圖示，或前往**遠端管理員 → 編輯**。
2. 在 **`選項`** 分頁中，點選 **`顯示進階選項`**。
3. 設定以下數值：
   - `chunk_size = 50Mi`
   - `upload_concurrency = 32`
4. 儲存變更。

`disable_checksum` 選項也可能對傳輸速度造成顯著影響。不過在這次測試中，我們將其保留為預設值（`false`），以在檔案傳輸過程中維持完整性檢查。
<img src="/support/images/en/tutorials/chunk-size-and-upload-concurrency-settings.png" alt="chunk size and upload concurrency settings" class="img-medium img-center" />
### 📉 基準：預設效能

使用**預設設定**時：

```text
- chunk_size = 5Mi 
- upload_concurrency = 4. 
```

我們觀察到透過 **EC2 託管的 Rclone**，從 **AWS S3** 移動大型檔案至 **Cloudflare R2** 的傳輸速度約為 **114 MB/s**。
<img src="/support/images/en/tutorials/transfer-speed-with-default-options.png" alt="transfer speed with default options" class="img-medium img-center" />

### 🚀 調校後：效能提升 4 倍

透過以最佳化設定更新 Cloudflare R2 遠端：

```text
- chunk_size = 50Mi 
- upload_concurrency = 32

```

並維持 `disable_checksum = false`，我們達到約 **440 MB/s** 的速度——相較預設值提升了 **4 倍**。

<img src="/support/images/en/tutorials/high-transfer-speed-with-chunk-size-and-upload-concurrency.png" alt="high transfer speed with chunk size and upload concurrency" class="img-medium img-center" />
## ✅ 摘要

雲端對雲端的傳輸不再需要透過你的筆記型電腦龜速進行。透過將繁重的工作卸載至 EC2 上的外部 Rclone 守護程序，你能達到接近線路速率的遷移速度、避開 AWS 流出費用的意外支出，並在 RcloneView 中以完全視覺化的方式維持工作流程。立即以自信展開你下一次的 S3 ↔ R2 遷移——向本機瓶頸說再見。

---

## 🔗 相關指南

- **儲存空間設定**
	- [如何新增相容 S3 的遠端](/howto/remote-storage-connection-settings/s3)
	- [如何取得 AWS S3 存取憑證](/howto/cloud-storage-setting/aws-account-info)
	- [如何取得 Cloudflare R2 存取憑證](/howto/cloud-storage-setting/cloudflare-r2-credential)
- **EC2 與遠端 Rclone**
	- [如何在 AWS EC2 上執行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- **視窗與連線管理**
	- [使用「新視窗」管理多個 Rclone 連線](/howto/rcloneview-advanced/multi-window)
	- [管理多個 RcloneView 視窗](https://www.perplexity.ai/support/howto/rcloneview-advanced/multi-window) <!-- external duplicate, optional to keep -->
- **同步與工作控制**
	- [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)
	- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
	- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)
	- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)
- **成本考量**
	- [AWS 定價 – 資料傳輸](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
- **效能最佳化**
	- [如何將 Cloudflare R2 的多段上傳速度最大化](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)

<CloudSupportGrid />
