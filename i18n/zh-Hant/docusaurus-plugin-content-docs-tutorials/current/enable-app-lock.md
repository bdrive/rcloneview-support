---
sidebar_position: 13
description: 在 RcloneView 中啟用應用程式鎖定，要求啟動時輸入密碼，以保護遠端、傳輸、工作、掛載及內部資料庫。
keywords:
  - rcloneview
  - app lock
  - password
  - security
  - rclone_view.db
  - job history
  - transfer history
  - settings
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - password
date: 2025-12-08
author: tayson
---

# 使用應用程式鎖定（密碼保護）

**應用程式鎖定（App Lock）** 會在 RcloneView 啟動或重新開啟時要求輸入密碼，藉此保護您的遠端、傳輸紀錄、工作、掛載資訊、工作歷史記錄以及內部資料庫（`rclone_view.db`）。此功能非常適合多人共用的共享或企業電腦環境。

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## 為什麼要使用應用程式鎖定？

- 保護 RcloneView 的工作、掛載及傳輸歷史記錄的隱私。  
- 適用於共享電腦或辦公環境。  
- 保護敏感的同步／掛載作業及自動化工作。  
- 即使自動工作在背景執行，也能增加一層安全防護。

## 如何啟用應用程式鎖定

### 步驟 1 — 開啟設定

- 從頂部選單前往 **設定 → 一般設定**。  
  <img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open settings menu" />

### 步驟 2 — 在一般分頁中開啟應用程式鎖定

- 在 **一般** 中，勾選 **啟用應用程式鎖定**。  
- 輸入您想要使用的密碼。  
- 點擊 **關閉** 以儲存設定。  

<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

## 應用程式鎖定的運作方式

啟用應用程式鎖定後，啟動 RcloneView 或重新開啟其視窗時，會先要求輸入密碼才能取得存取權限。

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## 重設應用程式鎖定（重設應用程式）

如果您忘記密碼，請在密碼輸入畫面點擊 **重設應用程式**。

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

**警告：** 重設應用程式會清除所有 RcloneView 內部資料：

- 應用程式鎖定密碼  
- 所有設定值  
- 傳輸歷史記錄  
- 工作定義  
- 工作歷史記錄  

不會重設的項目：**rclone 設定**（`rclone.conf`）會被保留，因此遠端定義仍會維持完整。

## 建議使用情境

- 共享或公用電腦。  
- 公司或機構環境。  
- 執行大量自動化工作，且想防止被竄改時。  
- 需要保護工作／傳輸歷史記錄及內部資料時。

## 摘要

| 項目 | 說明 |
| --- | --- |
| 功能 | RcloneView 啟動／重新開啟時要求輸入密碼 |
| 保護對象 | 設定、工作、傳輸歷史記錄、資料庫檔案 |
| 觸發時機 | 應用程式啟動或重新開啟 |
| 重設 | **重設應用程式** 會清除內部資料，並保留 `rclone.conf` |
| 適用情境 | 共享電腦、高安全性環境 |

應用程式鎖定是一個小小的開關，卻能提供強大的保護。啟用它，讓您的 RcloneView 活動與歷史記錄保持隱私。
