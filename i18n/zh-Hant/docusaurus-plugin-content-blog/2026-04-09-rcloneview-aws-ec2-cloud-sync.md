---
slug: rcloneview-aws-ec2-cloud-sync
title: "在 AWS EC2 上執行 RcloneView 進行伺服器端雲端同步"
authors:
  - tayson
description: "在 AWS EC2 執行個體上執行 RcloneView，進行伺服器端雲端同步、遷移與備份。遠端存取 GUI 並利用 EC2 頻寬實現快速傳輸。"
keywords:
  - rcloneview
  - aws ec2 cloud sync
  - rcloneview ec2
  - server cloud sync
  - ec2 rclone gui
  - cloud migration server
  - headless cloud sync
  - ec2 data transfer
  - aws ec2 file manager
  - server-side cloud transfer
tags:
  - platform
  - amazon-s3
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 AWS EC2 上執行 RcloneView 進行伺服器端雲端同步

> 在 AWS EC2 執行個體上執行 RcloneView，可為雲端傳輸提供伺服器等級的頻寬、支援排程作業全天候運作，並免除將資料透過本機路由傳輸的需求。

在雲端服務供應商之間遷移數 TB 資料時，本機的網路連線會成為瓶頸。具有 gigabit 網路的 AWS EC2 執行個體可以達到您的住家或辦公室連線無法匹敵的雲端服務間傳輸速度。在 EC2 上執行 RcloneView 也代表傳輸作業可以全天候持續進行，而不需要讓本機保持開機，並且在 S3 與其他 AWS 服務之間移動的資料會留在 Amazon 的網路內——通常不會產生傳出流量費用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要在 EC2 上執行 RcloneView

- **速度**：AWS 資料中心內的 EC2 執行個體擁有多 gigabit 的網路連線。S3 與外部供應商之間的傳輸會利用這項頻寬，而非您的本機連線。
- **免費的 S3 傳輸**：在相同區域內，EC2 與 S3 之間的資料傳輸是免費的。對於大型的 S3 到雲端遷移作業而言，在 EC2 上執行可以消除最大的成本——本機傳出流量費用。
- **全天候運作**：排程作業可以持續執行，而不需要讓桌上型電腦保持開機。EC2 執行個體可以處理每夜備份、每週遷移以及持續進行的同步作業。
- **貼近資料**：如果您的來源資料位於 AWS（S3、EBS、EFS）中，在 EC2 上執行 RcloneView 可讓其貼近資料，將延遲降至最低。
- **團隊存取**：多位團隊成員可以遠端存取同一個 RcloneView 執行個體，共用設定與作業紀錄。

## 設定 EC2 執行個體

### 選擇執行個體

對於大多數 RcloneView 工作負載而言，中小型執行個體已經足夠：

- **t3.medium**（2 vCPU，4 GB RAM）：適合輕量同步作業與小型遷移。
- **m5.large**（2 vCPU，8 GB RAM）：更適合同時進行的傳輸與大型檔案操作。
- **c5.xlarge**（4 vCPU，8 GB RAM）：適合具有大量平行傳輸的重度遷移工作負載。

請選擇與您的 S3 儲存貯體相同區域的執行個體，以避免跨區域傳輸費用。

### 作業系統

以 Ubuntu Server LTS 或 Amazon Linux 2 啟動執行個體。兩者皆能順利支援 RcloneView。安裝輕量桌面環境以使用 GUI：

```
# Ubuntu
sudo apt update && sudo apt install -y xfce4 xrdp

# Amazon Linux 2
sudo yum install -y xrdp xfce
```

啟用並啟動 RDP 服務，以便您可以遠端連線至 GUI。

### 安全群組設定

在您的 EC2 安全群組中開啟以下連接埠：

- **連接埠 3389**（RDP）：用於遠端桌面存取 GUI。請限制僅限您的 IP 位址存取。
- **連接埠 22**（SSH）：用於終端機存取。請限制僅限您的 IP 位址存取。
- **連接埠 53682**（選用）：如果您需要從 EC2 執行個體執行 OAuth 流程，這是 rclone 預設的 OAuth 回呼連接埠。您也可以改用無頭（headless）OAuth 設定。

## 在 EC2 上安裝 RcloneView

透過 SSH 連線至執行個體並下載 RcloneView：

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載 Linux 版 AppImage 或 .deb 套件。
2. 將 AppImage 設定為可執行：`chmod +x RcloneView-*.AppImage`
3. 透過 RDP 連線並從桌面環境啟動 RcloneView。

## 雲端服務供應商的無頭（Headless）OAuth

EC2 執行個體通常沒有本機瀏覽器可以執行 OAuth 流程。對於需要 OAuth 的供應商（Google Drive、OneDrive、Dropbox），請使用無頭驗證：

1. 在您的本機上執行 `rclone authorize "drive"`（或相關供應商指令）以完成 OAuth 流程。
2. 複製產生的權杖（token）。
3. 在 EC2 執行個體上，將該權杖貼到 RcloneView 的遠端設定中。

或者，您也可以將 RcloneView 設定為使用外部 rclone 執行個體，並透過 RcloneView 的連線管理員設定 OAuth 權杖。

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="Configuring external rclone on EC2 for RcloneView" class="img-large img-center" />

## 設定 S3 存取

若要從 EC2 存取 S3，請使用 IAM 執行個體角色，而非靜態存取金鑰。將具有 S3 權限的 IAM 角色附加至 EC2 執行個體，rclone 將會使用執行個體中繼資料服務自動取得暫時憑證。這比在執行個體上儲存存取金鑰更為安全。

在 RcloneView 的 S3 遠端設定中，將存取金鑰與私密金鑰欄位留空，並將環境驗證設定為使用執行個體設定檔（instance profile）。

## 執行大型遷移作業

透過 EC2 的頻寬，原本在住家連線上需要數天才能完成的大型遷移作業，可以在數小時內完成：

- **1 TB Google Drive 到 S3**：以持續傳輸速度計算，約需 2-4 小時。
- **10 TB S3 到 Backblaze B2**：視 B2 API 節流狀況而定，約需 1-2 天。
- **跨區域 S3 複寫**：在 AWS 內部幾乎可達線速。

RcloneView 的多執行緒傳輸能充分利用 EC2 的網路容量。在較大的執行個體上，將傳輸數（transfers）設為 16-32、檢查數（checkers）設為 16，以達到最大輸送量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Large-scale migration running on EC2 in RcloneView" class="img-large img-center" />

## 排程伺服器端作業

RcloneView 內建的排程器可以處理重複性作業。您可以設定從 Google Drive 到 S3 的每夜備份、S3 與 Backblaze B2 之間的每週同步，或是每日複寫至災難復原（DR）區域。無論您是否透過 RDP 連線，EC2 執行個體都會執行這些作業。

您可以讓 EC2 執行個體持續運作以執行排程作業，或使用啟動/停止排程（透過 AWS Instance Scheduler 或 Lambda 函式）僅在備份時段內執行執行個體。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling server-side sync jobs on EC2 in RcloneView" class="img-large img-center" />

## 成本管理

EC2 成本會因執行個體類型與執行時間而異：

- **t3.medium 隨需執行個體**：約 $0.042/小時（若全天候執行則約 $30/月）
- **Spot 執行個體**：對於一次性遷移等可中斷的工作負載，最多可節省 90% 成本。
- **預留執行個體**：適合長期執行的伺服器端同步設定，可享有較低的每小時費率。

對於一次性遷移作業，請使用 spot 執行個體——啟動、執行遷移、驗證，然後終止。對於持續進行的排程備份，預留 t3.small 或 t3.medium 是較符合成本效益的選擇。

請注意：從 EC2 在相同區域內傳輸 S3 資料是免費的。傳輸至網際網路（例如傳輸至 Backblaze B2 或 Google Drive）則會產生標準的 AWS 傳出流量費用。

## 開始使用

1. 以 Ubuntu 或 Amazon Linux 搭配桌面環境啟動 EC2 執行個體。
2. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**並安裝於該執行個體上。
3. 使用無頭 OAuth 設定雲端服務供應商的遠端連線，並使用 IAM 角色設定 S3。
4. 利用 EC2 的頻寬執行遷移作業並排程備份工作。
5. 在不需要時終止或停止執行個體，以控管成本。

在 EC2 上執行 RcloneView，能讓您同時享有 AWS 資料中心網路的速度、GUI 管理傳輸作業的便利性，以及排程作業的全天候運作——是大規模雲端遷移與持續性伺服器端同步的理想設定。

---

**相關指南：**

- [新增 AWS S3 與相容 S3 服務](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [新增 OneDrive（無頭模式）](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)
- [無頭 Google Drive](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)
- [外部 rclone 範例](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
