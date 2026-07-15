---
sidebar_position: 3
description: "了解如何使用 RcloneView 的新視窗功能，同時管理內嵌與外部的 Rclone 執行個體。"
keywords:
  - rcloneview
  - new window
  - multi-connection
  - external rclone
  - embedded rclone
  - multiple rclone
tags:
  - RcloneView
  - new-window
  - multi-connection
  - external-rclone
  - embedded-rclone
  - multi-windows
date: 2025-06-22
author: Jay
---
# 使用「新視窗」管理多個 Rclone 連線

RcloneView 提供靈活的介面，可同時管理多個 Rclone 執行個體。這在同時使用內嵌與外部 Rclone 設定時特別有用。

## 內嵌 Rclone 架構

在預設設定中，RcloneView 內含一個內建的 Rclone 執行檔（內嵌 Rclone）。此執行個體讓使用者能透過易用的 GUI 介面管理雲端遠端。

### 🔹 內嵌模式

- RcloneView 內含 Rclone，並透過 API 與其通訊。
- 檔案直接透過 Rclone 存取與管理。
- 適合大多數本機桌面使用情境。

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-medium img-center" />
## 外部 Rclone 架構

對於更進階的使用情境，例如管理遠端伺服器或雲端執行個體上的遠端，RcloneView 可以連線至在其他位置執行的外部 Rclone 執行個體。

### 🔹 外部模式

- RcloneView 連線至遠端 Rclone 伺服器（透過 Rclone RC）。
- 遠端 Rclone 負責存取與同步雲端儲存。
- 適合管理託管在雲端的 Rclone 環境（例如 AWS EC2、Linux 伺服器）。

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-medium img-center" />
## 新視窗功能：同時管理兩種模式

為了支援同時使用內嵌與外部 Rclone 執行個體，RcloneView 提供了**新視窗**功能。此功能讓使用者能開啟多個 RcloneView GUI 視窗，每個視窗連線至不同的 Rclone 後端。

### ✅ 主要優點

- 每個視窗都可以連線至獨立的 Rclone 執行個體。
- 可同時並行管理本機與遠端環境。
- 能在不同雲端或環境之間無縫進行比較、同步與複製。

### 🔸 範例：主視窗（內嵌 Rclone）

此視窗連線至 RcloneView 內建的 Rclone。

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-home-window.png" alt="rcloneview home window" class="img-medium img-center" />
:::important 主視窗的首頁圖示
主要的 RcloneView 視窗（連線至內嵌 Rclone）可透過位於右上角 RcloneView 標誌旁的**首頁圖示** <img src="/support/icons/home-icon.png" alt="home icon" class="inline-icon" /> 來辨識。

:::
### 🔸 範例：新視窗（外部 Rclone）

此視窗連線至在 AWS Linux 伺服器上執行的外部 Rclone。

:::info 如何在 AWS EC2 上執行 Rclone 引擎  
若要了解如何在以 Ubuntu 為基礎的 EC2 執行個體上部署與管理 Rclone 的 API 常駐程式（`rcd`），請參閱：[如何在 AWS EC2 伺服器上執行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
:::
<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="rcloneview new window" class="img-medium img-center" />
## 🚩比較：內嵌 Rclone 與外部 Rclone

| 功能                                   | 內嵌 Rclone                          | 外部 Rclone                                  |
| ------------------------------------- | ------------------------------------ | ------------------------------------------- |
| 在本機執行                             | ✅ 是                                 | ❌ 否（於遠端伺服器執行）                     |
| 存取本機磁碟                           | 是 — RcloneView 所在的本機 PC         | 是 — 外部 Rclone 所在的伺服器                 |
| 使用內建 Rclone 執行檔                 | ✅ 預設內含                           | ❌ 需另行安裝                                 |
| 可於 `Settings > Location` 中設定       | ✅ 支援                               | ❌ 不適用                                     |
| 需要網路設定                           | ❌ 否                                 | ✅ 是（需要主機、連接埠、驗證資訊）            |
| 網路效能                               | 取決於本機／家用網路                  | 取決於伺服器／雲端網路                        |

 💡 可利用**新視窗**功能同時並行管理多個 Rclone 執行個體 — 例如，將一個視窗連線至內嵌 Rclone 以執行本機工作，另一個視窗則連線至外部 Rclone 以處理雲端端的操作。
