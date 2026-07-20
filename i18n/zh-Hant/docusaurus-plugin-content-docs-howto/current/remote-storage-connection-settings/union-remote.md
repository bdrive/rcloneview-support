---
sidebar_position: 4
description: "在 RcloneView 中新增聯合遠端（Union Remote），將多個 Remote:Path 位置合併成單一統一資料夾檢視，無需複製資料。"
keywords:
  - rcloneview
  - union remote
  - virtual remote
  - merged folder
  - multi cloud
  - remote manager
  - union
tags:
  - RcloneView
  - union
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Union

## 如何使用 RcloneView 新增 Union

**聯合遠端（Union Remote）** 會將多個雲端遠端的資料夾合併成單一統一資料夾。它與 Combine 不同：

- **Combine** 會並排顯示各個資料夾。
- **Union** 會將多個資料夾合併成一個檢視畫面。

Union 適用於以下情境：

- 將多個遠端的資料視為單一資料夾來存取。
- 單一畫面瀏覽及多雲備份配置。
- 在不複製或搬移資料的情況下建立虛擬檔案系統。

---

## 建立 Union 遠端

### 步驟 1 —**新增遠端** → **虛擬** → **Union**

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="new remote add union" class="img-large img-center" />

### 步驟 2 — 輸入 Union 詳細資訊

請填入：

- **遠端名稱**：例如 `MyUnion`。
- **上游來源（Upstreams，Remote:Path）**：每個上游來源皆為一個實際的資料夾位置。

選擇遠端與資料夾以新增第一個上游來源：  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-1.png" alt="union select folder first" class="img-large img-center" />

要新增另一個上游來源，請點選 **Add Remote** 並選取下一個資料夾：  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-2.png" alt="union select folder second" class="img-large img-center" />

視需要新增多個上游來源，然後檢視設定：  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-add-union-input.png" alt="union input window" class="img-large img-center" />

點選 **Add Remote** 以建立 Union 遠端。

### 步驟 3 — 在遠端管理員中確認

<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-remote-manager-union.png" alt="remote manager union" class="img-large img-center" />

---

## 在檔案總管中檢查 Union

在檔案總管中開啟 Union 遠端，所有上游來源的內容會以單一合併資料夾呈現。

**上游來源 1 — Google Drive 範例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="union check folder google drive" class="img-large img-center" />  
對應 `mygoogledrive:Meet Recordings`。

**上游來源 2 — Dropbox 範例**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-2.png" alt="union check folder dropbox" class="img-large img-center" />  
對應 `drop:assets`。

---

## Combine 與 Union 的主要差異

| 功能         | Combine 遠端           | Union 遠端                  |
| ------------ | ----------------------- | ----------------------------- |
| 檢視方式     | 分別顯示多個資料夾      | 顯示單一合併檢視畫面           |
| 寫入規則     | 不合併；各資料夾獨立    | 新寫入的內容遵循 Union 策略    |
| 檔案結構     | Folder1 / Folder2       | 一個合併後的虛擬資料夾          |
| 最適合場景   | 資料組織                | 多雲合併與統一使用              |

---

## 何時使用 Union

- 在單一資料夾中同時檢視多個雲端的資料。
- 分散於多個遠端、需要統一檢視的專案。
- 針對單一虛擬遠端執行同步／備份工作。
- 提供合併檢視畫面，且不重複儲存資料。

---

## 摘要

| 功能               | 說明                                              |
| ------------------ | ------------------------------------------------- |
| **Union 遠端**      | 將多個 `Remote:Path` 項目合併成單一檢視畫面        |
| **上游來源**        | 組成 Union 的實際遠端資料夾                        |
| **優點**            | 多雲整合、單一畫面存取                             |
| **用途**            | 統一瀏覽、備份／同步、專案整合                     |

Union 遠端是透過單一合併資料夾檢視畫面來管理多雲環境的強大虛擬遠端。
