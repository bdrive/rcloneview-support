---
sidebar_position: 15
description: "了解 RcloneView 中的虛擬遠端，並學習如何新增 Alias、Crypt、Combine、Union 等虛擬層，以打造更快速、更安全的雲端工作流程。"
keywords:
  - rcloneview
  - virtual remote
  - alias
  - crypt
  - union
  - combine
  - cache
  - chunker
  - hasher
  - compress
tags:
  - RcloneView
  - virtual-remote
  - remote-storage
  - encryption
  - multi-cloud
date: 2025-12-08
author: tayson
---

# 虛擬遠端概觀與設定

虛擬遠端會在現有雲端遠端之上新增功能層。它們本身不會儲存資料，而是讓您目前的遠端變得更方便、更快速、更安全，或更具彈性。

---

## 什麼是虛擬遠端？

虛擬遠端是一種功能層，可以：

- 在不搬移資料的情況下擴充現有遠端。
- 讓儲存位置維持在原本的遠端，同時增加便利性。
- 協助達成更快速的存取、隱私保護，或統一檢視。

---

## 虛擬遠端的類型

RcloneView 提供九種虛擬遠端類型：

1. **Alias**  
   直接跳轉至特定雲端資料夾的捷徑。  
   範例：將 Google Drive 中較深層的路徑加入書籤以便即時存取。  
   👉 參閱：[Alias 遠端指南](/howto/remote-storage-connection-settings/alias-remote)

2. **Crypt**  
   加密檔案名稱、內容與資料夾以保護隱私。  
   👉 參閱：[Crypt 遠端指南](/howto/remote-storage-connection-settings/crypt-remote)

3. **Memory**  
   將資料儲存於 RAM 中，可用於超高速的暫時性用途；關閉後即清空。

4. **Cache**  
   透過快取加速較慢的遠端；提升重複讀取與串流的速度。

5. **Chunker**  
   將大型檔案拆分成區塊，以繞過服務的檔案大小限制並提升穩定性。

6. **Combine**  
   在單一遠端下，將多個資料夾以個別子資料夾的形式呈現。  
   👉 參閱：[Combine 遠端指南](/howto/remote-storage-connection-settings/combine-remote)

7. **Union**  
   將多個資料夾合併為單一統一檢視。  
   👉 參閱：[Union 遠端指南](/howto/remote-storage-connection-settings/union-remote)

8. **Hasher**  
   為缺乏雜湊功能的後端新增雜湊值，可用於完整性檢查。

9. **Compress**  
   在上傳前壓縮檔案以節省空間。

---

## 如何新增虛擬遠端

所有虛擬遠端皆從 **New Remote > Virtual** 建立。

<img src="/support/images/en/howto/remote-storage-connection-settings/add-remote-virtual.png" alt="add virtual remote" class="img-large img-center" />

### 步驟 1 — 開啟 New Remote

- 從頂端選單：**`Remote` > `New Remote`**。
- 選擇 **`Virtual`** 分頁以檢視所有虛擬遠端類型。

### 步驟 2 — 選擇虛擬遠端類型

每種類型都有各自需要填寫的欄位。範例如下：

- **Alias**：名稱 + 目標資料夾。
- **Crypt**：加密密碼 + 目標資料夾。
- **Union**：多個 `Remote:Path` 上游來源。
- **Combine**：目錄標籤 + 遠端路徑清單。
- **Chunker**：來源遠端 + 分塊設定。

RcloneView 會引導您完成每種類型所需的輸入。

### 步驟 3 — 使用虛擬遠端

建立完成後，虛擬遠端會如同一般遠端般出現在：

- **Remote Manager**
- **Explorer** 檔案瀏覽器
- **Sync / Compare / Job** 對話框

請記得：虛擬遠端只是功能層，實際檔案仍儲存於底層遠端的路徑中。

---

## 何時該使用虛擬遠端

| 需求                           | 建議使用的虛擬遠端 |
| ------------------------------ | -------------------------- |
| 強化雲端安全性      | Crypt                      |
| 一併檢視多個資料夾 | Union                      |
| 為複雜路徑加入書籤或整理 | Alias                      |
| 整理複雜的專案      | Combine                    |
| 上傳非常大的檔案        | Chunker                    |
| 加快重複讀取速度        | Cache                      |
| 驗證資料完整性          | Hasher                     |
| 透過壓縮節省儲存空間  | Compress                   |

---

## 快速參考

| 虛擬遠端 | 角色                                     |
| -------------- | ---------------------------------------- |
| Alias          | 資料夾捷徑                          |
| Crypt          | 加密儲存                        |
| Memory         | 以 RAM 為基礎的暫存               |
| Cache          | 透過快取加速                  |
| Chunker        | 將大型檔案分塊以便上傳             |
| Combine        | 將多個資料夾以個別檢視方式分組 |
| Union          | 將多個資料夾合併為單一檢視     |
| Hasher         | 新增雜湊值以進行完整性檢查         |
| Compress       | 上傳前壓縮檔案             |

虛擬遠端讓雲端工作流程更強大、更具彈性。在 RcloneView 中，只需點擊幾下即可啟用這些功能，無需複雜的設定。
