---
sidebar_position: 14
description: "在 RcloneView 路徑列中一步複製完整資料夾路徑——包含遠端名稱，方便產生精確的指令與自動化流程。"
keywords:
  - rcloneview
  - rclone
  - copy path
  - remote path
  - path bar
  - automation
  - terminal
tags:
  - RcloneView
  - path-bar
  - copy-path
  - rclone
date: 2025-12-05
author: tayson
---

# 在 RcloneView 中使用複製完整路徑功能

**複製完整路徑**功能可讓您透過單一動作取得整個資料夾路徑——也可選擇是否包含遠端名稱。這對於撰寫 `rclone` 指令、執行終端機測試、分享確切的雲端路徑,以及避免在腳本中出錯,都非常實用。

---

## 在哪裡找到複製完整路徑

您可以從遠端檔案瀏覽器頂端的**路徑列**存取複製完整路徑功能。
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path.png" alt="copy full path path bar" class="img-medium img-center" />

在路徑列上按右鍵即可看到以下選項:

- **剪下**
- **複製**
- **貼上**
- **複製完整路徑(含遠端)**
- **全選**

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-all.png" alt="copy full path context menu" class="img-medium img-center" />

---

## 全選——反白整個路徑

選擇**全選**會反白路徑欄位中的所有文字,方便您快速複製。
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-all.png" alt="copy full path select all" class="img-medium img-center" />

複製並貼上(例如貼到記事本)後,本機資料夾名稱(例如 `Meet recordings`)會完整顯示。
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-notepad.png" alt="copy full path notepad" class="img-medium img-center" />

---

## 複製完整路徑(含遠端)——遠端 + 資料夾路徑

**複製完整路徑(含遠端)**會擷取:

- 遠端名稱
- 完整資料夾路徑
- 供 `rclone` 使用的精確 `remote:path` 格式

範例結果:

```
mygoogledrive:Meet recordings
```

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path.png" alt="copy full path with remote" class="img-medium img-center" />

貼到記事本後會顯示可直接使用的路徑:
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path-notepad.png" alt="copy full path with remote notepad" class="img-medium img-center" />

此格式可直接用於下列指令:

```bash
rclone copy "mygoogledrive:Meet recordings" /local/backup
```

---

## 何時使用此功能

- **撰寫 `rclone` 指令**:立即貼上正確的遠端路徑。
- **在終端機中測試路徑**:直接使用 `remote:path`,無需重新輸入。
- **避免腳本錯誤**:防止在自動化或批次作業中打錯字。
- **與團隊成員分享路徑**:傳送精確位置以利支援或協作。

---

## 快速參考

| 動作                              | 功能說明                                    |
| --------------------------------- | ------------------------------------------- |
| **複製**                          | 複製路徑列中選取的文字                      |
| **全選**                          | 選取整個路徑文字                            |
| **複製完整路徑(含遠端)**          | 複製 `remote:path` 格式(建議使用)          |
| **貼上**                          | 將剪貼簿文字插入路徑列                      |

複製完整路徑功能看似簡單,但對於自動化、腳本撰寫與精確傳輸而言,它是 RcloneView 中最快速的生產力提升工具之一。
