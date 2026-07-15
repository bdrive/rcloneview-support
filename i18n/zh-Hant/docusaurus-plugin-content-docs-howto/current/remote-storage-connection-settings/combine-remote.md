---
sidebar_position: 3
description: "在 RcloneView 中將多個雲端資料夾合併為單一虛擬檢視，無需複製資料，非常適合多雲瀏覽與統一作業。"
keywords:
  - rcloneview
  - combine remote
  - virtual remote
  - multi cloud
  - union remote
  - cloud viewer
  - remote manager
tags:
  - RcloneView
  - combine
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Combine

## 如何使用 RcloneView 新增 Combine

**Combine 遠端**會將多個雲端遠端的資料夾合併成一個虛擬檢視。它不會複製或移動資料——只是讓你能以單一資料夾的形式瀏覽多個位置。

為什麼它很實用：

- 將分散在各雲端的資料集中在同一處檢視。
- 將來自不同服務的專案資料夾視為單一工作區。
- 讓備份／同步作業如同針對單一遠端執行。
- 不需要額外的儲存空間或重複檔案。

Combine 遠端實際上就是一個多雲檢視器。

---

## 建立 Combine 遠端

### 步驟 1 — **New Remote** → **Virtual** → **Combine**

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="new remote add combine" class="img-large img-center" />

### 步驟 2 — 輸入 Combine 詳細資訊

每個項目都需要三個欄位：

- **Remote name**：Combine 遠端的名稱（例如 `MyCombine`）。
- **Directory**：資料夾在 Combine 檢視中顯示的名稱（例如 `Folder1`）。
- **Remote Path**：要納入的實際雲端路徑。點選資料夾圖示可從已註冊的遠端中選取。

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-1.png" alt="combine select folder first" class="img-large img-center" />

選取第一個路徑後：  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-2.png" alt="combine select folder second" class="img-large img-center" />

使用 **Add Remote** 新增 Folder2、Folder3 及更多項目。  
所有項目設定完成後：  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-add-combine-input.png" alt="combine input window" class="img-large img-center" />

點選 **Add Remote** 以建立 Combine 遠端。

### 步驟 3 — 在 Remote Manager 中確認

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-remote-manager-combine.png" alt="remote manager combine" class="img-large img-center" />

---

## 在 Explorer 中檢查合併的資料夾

在 Explorer 中開啟 Combine 遠端，即可看到每個已新增的資料夾。

**Folder1 — Google Drive 範例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="combine check folder google drive" class="img-large img-center" />  
顯示與 `mygoogledrive:Meet Recordings` 相同的內容。

**Folder2 — Dropbox 範例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-2.png" alt="combine check folder dropbox" class="img-large img-center" />  
顯示與 `drop:assets` 相同的內容。

---

## 何時使用 Combine

- 一次檢視多個雲端的資料。
- 整合分散在各遠端的專案資料夾。
- 透過單一虛擬遠端管理備份或同步作業。
- 在統一檢視的同時保留原始結構。
- 在取得整合工作區的同時避免重複儲存。

---

## 總結

| 功能                     | 說明                                            |
| ------------------------ | ----------------------------------------------- |
| **Combine 遠端**         | 將多個資料夾合併為單一虛擬檢視                  |
| **無資料重複**           | 檔案保留在原始位置                              |
| **新增各種遠端**         | 可搭配 Drive、Dropbox、OneDrive、S3 等使用      |
| **使用情境**             | 統一瀏覽、多雲備份、專案管理                    |

Combine 遠端讓你能像管理單一位置的資料一樣管理多雲資料——無需移動或重複檔案。
