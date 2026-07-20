---
sidebar_position: 1
description: "啟用 RcloneView 內建的 Web Server，即可在本機網路上的任何瀏覽器存取 Explorer、Jobs、Remotes 和 Settings。"
keywords:
  - rcloneview
  - web frontend
  - web server
  - browser access
  - remote access
  - web ui
  - rclone web interface
tags:
  - RcloneView
  - Tutorial
  - Web-Frontend
  - Remote-Access
date: 2026-03-27
author: steve
---

# RcloneView Web 前端

RcloneView 內建 Web Server，讓你可以透過任何網頁瀏覽器存取完整的 RcloneView 介面。你可以瀏覽遠端、管理工作以及設定選項——完全不需要開啟桌面應用程式視窗。

本教學涵蓋：

- 在 RcloneView 設定中啟用 Web Server
- 設定連接埠、使用者名稱和密碼
- 從瀏覽器存取 Web 前端
- 允許網路上其他裝置的遠端存取

---

## 什麼是 Web 前端？

Web 前端是 RcloneView 的瀏覽器介面，重現了桌面應用程式的使用體驗。一旦內建的 Web Server 執行後，你就可以開啟瀏覽器，透過熟悉的介面與 RcloneView 互動，內容包括：

- **Explorer** — 瀏覽本機與遠端儲存空間
- **Jobs** — 檢視並管理同步／複製工作
- **Remotes** — 管理遠端連線
- **Settings** — 設定 RcloneView 選項

當你想從同一網路上的其他裝置管理傳輸作業，或單純偏好以瀏覽器為主的工作流程時，這項功能會非常實用。

---

## 需求

- 已安裝並執行 RcloneView（桌面版）
- 現代網頁瀏覽器（Chrome、Firefox、Safari、Edge 等）
- 若需遠端存取：裝置需位於同一本機網路

---

## 步驟 1：開啟 Web Server 設定

1. 啟動 **RcloneView**。
2. 前往 **Settings** > **Network & Misc**。
3. 找到 **Web Server** 區塊（標示為 **Beta**）。

<img src="/support/images/en/tutorials/web-frontend/web-server-settings.png" alt="Web Server settings in RcloneView" class="img-large img-center" />

---

## 步驟 2：設定 Web Server

在 **Web Server** 區塊中，設定以下項目：

- **Port**：Web Server 使用的連接埠號（預設值：`8580`）。若預設連接埠與其他服務衝突，請變更此設定。
- **Username**：設定用於驗證的使用者名稱（例如：`admin`）。
- **Password**：設定密碼以保護 Web 前端的存取權限。

---

## 步驟 3：啟用 Web Server

1. 將 **Enable Web Server** 切換為 **On**。
2. 狀態會從 **Stopped** 變為 **Running on port 8580**（或你設定的連接埠）。
3. 畫面上會出現 **Restart Server** 按鈕，在變更任何設定後可使用它。

<img src="/support/images/en/tutorials/web-frontend/web-server-running.png" alt="Web Server running on port 8580" class="img-large img-center" />

---

## 步驟 4：存取 Web 前端

1. 在同一台機器上開啟網頁瀏覽器。
2. 前往 `http://localhost:8580`（或你所設定的連接埠）。
3. 系統會顯示 RcloneView 登入畫面。輸入你在步驟 2 中設定的 **Username** 和 **Password**，然後點選 **Sign In**。

<img src="/support/images/en/tutorials/web-frontend/web-frontend-login.png" alt="RcloneView Web Frontend login screen" class="img-large img-center" />

4. RcloneView Web 前端載入後即可使用完整介面——Explorer、Jobs、Remotes 和 Settings 全都可以從左側側邊欄存取。

<img src="/support/images/en/tutorials/web-frontend/web-frontend-explorer.png" alt="RcloneView Web Frontend Explorer" class="img-large img-center" />

---

## 步驟 5：允許遠端存取（選用）

預設情況下，Web Server 僅接受來自 **localhost (127.0.0.1)** 的連線。若要從網路上的其他裝置存取 RcloneView：

1. 將 **Allow remote access** 切換為 **On**。
2. 點選 **Restart Server** 以套用變更。
3. 在另一台裝置上開啟瀏覽器，前往 `http://<your-computer-ip>:8580`。

> **安全性提醒：** 啟用遠端存取後，網路上的任何裝置都能連上 Web 前端。請務必使用強度足夠的使用者名稱和密碼來保護存取權限。

---

## 總結

RcloneView Web 前端讓你能透過瀏覽器存取所有核心功能：

- 從 **Settings > Network & Misc** 啟用 Web Server
- 設定連接埠、使用者名稱和密碼以確保存取安全
- 透過 `http://localhost:8580` 存取完整介面
- 可選擇啟用遠端存取，供網路上的其他裝置使用

讓 RcloneView 保持在背景執行，即可透過任何瀏覽器管理你的雲端儲存。

