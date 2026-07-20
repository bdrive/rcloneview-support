---
sidebar_position: 10
description: 了解如何在 RcloneView 中設定一般偏好、介面版面配置、通知,以及內建 Rclone 設定。
keywords:
  - rcloneview
  - rclone
  - rcloneview settings
  - 一般偏好設定
  - 深色模式
  - rclone log
  - rclone configurations
tags:
  - RcloneView
  - settings
  - configuration
  - preferences
date: 2025-06-22
author: Jay
---
# 一般設定

RcloneView 的**設定**選單分為四個分頁,以便更清楚地進行分類與自訂:

- **一般**
- **介面與通知**
- **內建 Rclone**
- **網路與其他**

每個分頁都可以讓您設定應用程式的不同部分。以下為各區段的詳細說明。

---

## 🛠 一般

<img src="/support/images/en/howto/rcloneview-basic/general-settings.png" alt="general settings" class="img-medium img-center" />
### 語言

- **語言**:從下拉選單中選擇您偏好的介面語言。

### 啟動行為

- **登入時啟動**:在您登入系統時自動啟動 RcloneView。

:::important 自動啟動:排程與掛載

啟用**登入時啟動**時:  

- [**工作排程器**](/howto/rcloneview-advanced/job-scheduling-and-execution) 中定義的任何排程工作,都會在登入後自動執行。  
- [**掛載管理員**](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer) 中設定為自動掛載的任何遠端,都會在 RcloneView 啟動時自動掛載。  
:::

- **最小化啟動**:將 RcloneView 啟動到系統匣中。

- **自動偵測 Synology NAS**:自動掃描區域網路以尋找 Synology NAS 裝置。

### 重設

- **還原預設設定**:將所有選項重設為原始預設值。

---

## 🎛  介面與通知

<img src="/support/images/en/howto/rcloneview-basic/interface-settings.png" alt="interface settings" class="img-medium img-center" />
### 介面外觀

- **深色模式**:在淺色與深色主題之間切換。
- **主題色彩**:從可用的重點色彩中選擇。

### 拖放

- **確認拖放**:透過拖放移動檔案時,啟用確認彈出視窗。

### 顯示工作類型(傳輸記錄篩選)

選擇要在傳輸記錄面板中顯示的工作類型:
- **下載**
- **上傳**
- **同步**

<img src="/support/images/en/howto/rcloneview-basic/notification-dialogs-settings.png" alt="notification dialogs settings" class="img-medium img-center" />
### 通知對話方塊

決定使用 RcloneView 時,您希望收到哪些類型的彈出式通知:

- **顯示工作狀態記錄**:每個傳輸工作完成後,顯示詳細的記錄對話方塊。
- **顯示比較完成**:資料夾比較工作成功完成時通知您。
- **在比較中刪除檔案前顯示確認**:在資料夾比較過程中刪除任何檔案前,要求確認。
- **顯示同步完成通知**:同步作業完成時顯示訊息。
- **顯示網路錯誤對話方塊**:工作進行期間若發生網路連線錯誤,立即提醒您。

---

## ⚙️ 內建 Rclone

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-settings.png" alt="embedded rclone settings" class="img-medium img-center" />

### 內建生命週期

- **應用程式結束時停止 rclone**:RcloneView 關閉時,自動關閉內建的 `rclone` 處理程序。

:::caution 任何變更後皆需重新啟動

在**內建 Rclone**分頁中修改任何設定後(包括路徑設定、全域旗標或記錄選項)——請按一下**重新啟動內建 Rclone**以套用變更。  
這將重新啟動內建的 Rclone 處理程序,並可能中斷任何正在執行的工作。

:::
### 路徑設定

- **本機 Rclone 位置**:您 `rclone` 執行檔的絕對路徑。
- **本機 Rclone 設定位置**:您 `rclone.conf` 檔案的路徑(包含遠端資訊)。
- **預設下載資料夾**:已下載檔案的儲存目錄。
- **預設上傳資料夾**:用作上傳工作來源的目錄。

   <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-advanced-options-settings.png" alt="embedded rclone advanced options settings" class="img-medium img-center" />
### 進階選項

- **全域 Rclone 旗標**:傳遞給 rclone 的其他旗標(例如 `--s3-directory-markers`)。
- **設定密碼**:用於加密 rclone 設定的密碼。若您設定此密碼,rclone 設定檔將會被加密。

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-logging-configuration-settings.png" alt="embedded rclone logging configuration settings" class="img-medium img-center" />
### 記錄設定

- **啟用 rclone 記錄**:為 Rclone 作業啟用以檔案為基礎的記錄功能。
- **記錄資料夾**:儲存記錄檔的目錄。
- **記錄檔名稱**:記錄的預設檔案名稱。
- **記錄層級**:選擇詳細程度(DEBUG、INFO、NOTICE、ERROR)。

---

## 🌐 網路與其他

<img src="/support/images/en/howto/rcloneview-basic/network-etc-settings.png" alt="network etc settings" class="img-medium img-center" />

### 網路

- **代理伺服器設定**:設定代理伺服器(功能即將推出)。
- **Rclone 連線管理員**:檢視或管理現用的 Rclone 連線。  
  → [進一步了解](/howto/rcloneview-basic/connection-manager)

### 診斷

- **應用程式記錄**:開啟內部記錄,以協助疑難排解或錯誤回報。

---

## ✅ 總結

這些設定可讓您完全掌控 RcloneView 在啟動時的行為方式、與 Rclone 的互動方式,以及如何向您通報工作結果或錯誤。無論您是要排程同步、自動掛載磁碟機,還是要疑難排解網路問題,都可依據您的工作流程進行調整。
