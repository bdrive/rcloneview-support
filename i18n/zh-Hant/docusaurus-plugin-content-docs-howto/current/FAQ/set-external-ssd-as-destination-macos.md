---
sidebar_position: 3
description: "修正 RcloneView 在 macOS 上無法存取外接 SSD 的問題：透過瀏覽 /Volumes 並建立快速的 Alias 捷徑來解決。"
keywords:
  - rcloneview
  - macos
  - external drive
  - offline backup
  - sync destination
  - alias remote
  - volumes
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - external-drive
  - alias
date: 2025-02-20
author: Jay
---

# 我無法在 RcloneView（macOS）中存取外接 SSD

如果 RcloneView 在 macOS 上無法連接到您的外接 SSD（您看不到該磁碟機，或不知道該在哪裡輸入其路徑），請使用這個快速解決方法。目前有一個暫時性的 UX 問題（將在下個版本修正）隱藏了平常的捷徑，但您仍可以手動瀏覽到該 SSD，並將其儲存為 Alias（我的最愛），方便日後一鍵存取。

---

## 快速修正選項（擇一即可）

- **使用修正版建置（已包含 UX 修正）：** [下載 RcloneView 1.1.517 (macOS)](https://downloads.bdrive.com/rclone_view/builds/RcloneView-1.1.517.dmg) 並安裝，即可立即取得 SSD 路徑修正。這是為遇到此問題的使用者所提供的暫時性建置，直到下一個正式版發布為止。
- **繼續使用目前的正式版本：** 依照下方的手動步驟瀏覽 `/Volumes` 並為您的 SSD 建立一個 Alias。此方法適用於目前的公開版本。

---

## 逐步說明：從 /Volumes 新增您的 SSD

您可以在 RcloneView 左側面板看到 **`Local Disk`**。

1) 在路徑列中輸入 `/Volumes` 並按下 **Enter**。這是 macOS 掛載外接磁碟機的位置（例如 Samsung T7）。
2) 在 `/Volumes` 清單中，雙擊您的 SSD（例如 `SAMSUNG`）。部分磁碟機需要一些時間載入——請等待資料夾開啟。

<img src="/support/images/en/howto/FAQ/browse-volumes-in-mac-system.png" alt="browse volumes in mac system" class="img-large img-center" />

3) 確認您已進入該 SSD 內部（路徑列應顯示 `/Volumes/<您的磁碟機>`）。
4) 點擊路徑列中的 **☆**（Alias）圖示，將此位置加入書籤。
5) 輸入一個簡單的名稱（例如 `MySSD`），然後
6) 點擊 **Create**。這會新增一個 Alias 遠端，日後都會直接開啟您的 SSD 根目錄。
<img src="/support/images/en/howto/FAQ/creat-alias-remote-for-external-hdd.png" alt="creat alias remote for external hdd" class="img-large img-center" />

7) 該 Alias 會在新分頁中開啟，同時也會出現在左側清單中，方便日後快速使用。

<img src="/support/images/en/howto/FAQ/open-alias-remote-for-external-ssd.png" alt="open alias remote for external ssd" class="img-large img-center" />

---

## 如何在備份中使用 SSD Alias

- 建立同步／複製／移動工作時，選擇您剛才建立的 Alias 遠端（例如 `MySSD`）作為**目的地**，並選擇您的來源遠端（例如 Google Drive、Dropbox 或其他本機資料夾）作為**來源**。
- 該 Alias 指向 SSD 根目錄；您可以在開始工作之前，在該分頁中選擇或建立子資料夾。

---

## 如果找不到 SSD

- 請確認該 SSD 已在 Finder 中掛載（如有需要可拔除後重新插入）。
- 在路徑列中重新開啟 `/Volumes`，並等待幾秒鐘讓磁碟機清單載入完成。
- 仍然看不到嗎？請重新啟動 RcloneView，然後再次嘗試 `/Volumes`。如果問題持續發生，請至 [RcloneView 論壇](https://forum.rcloneview.com) 回報。

---

## 相關指南

- Alias 概觀與其他虛擬遠端：[Alias 遠端指南](/howto/remote-storage-connection-settings/alias-remote)
- 一般 Explorer 控制項與分頁：[瀏覽與管理遠端儲存空間](/howto/rcloneview-basic/browse-and-manage-remote-storage)
