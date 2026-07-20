---
sidebar_position: 2
description: "透過授予權限、啟用完全磁碟取用權，以及收集記錄檔以供支援使用，修復 RcloneView 在 macOS 上遺失「桌面」、「文件」或「下載項目」的問題。"
keywords:
  - rcloneview
  - macos
  - 權限
  - 檔案與資料夾
  - 完全磁碟取用權
  - 疑難排解
  - 常見問題
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - Permissions
date: 2025-11-07
author: Jay
---
# 在 Mac 上看不到本機資料夾（桌面／文件／下載項目）

如果你剛在 macOS 上安裝 RcloneView，卻在左側「本機磁碟」窗格中看不到 **桌面**、**文件** 或 **下載項目** 等資料夾，這幾乎都是 macOS 隱私權限的問題。本指南將說明如何授予存取權限，以及當資料夾仍顯示為空白時可以嘗試的做法。

若想快速瀏覽 Explorer 本身的功能,請參閱:[瀏覽與管理遠端儲存空間](/howto/rcloneview-basic/browse-and-manage-remote-storage)。

## 為什麼會發生這個問題

自 macOS 10.15（Catalina）起，Apple 要求應用程式在存取「桌面」、「文件」和「下載項目」等受保護的資料夾前，必須先取得使用者授權。如果你點選了「不允許」，或應用程式尚未取得權限，這些資料夾就會在 RcloneView 中顯示為空白。

## 當出現權限彈出視窗時

首次開啟 RcloneView 或點選受保護的資料夾時，你可能會看到 macOS 的對話方塊。

1) 如果出現要求存取「文件」資料夾的彈出視窗，請點選 **允許**。

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files1.png" alt="mac allow access to folder and files1" class="img-medium img-center" />

2) 如果你在左側窗格點選受保護的資料夾（例如「下載項目」）並出現類似的提示，請點選 **允許**。

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files2.png" alt="mac allow access to folder and files2" class="img-medium img-center" />

3) 如果你點選了 **不允許**，該資料夾在取得授權之前都會顯示為空白。

<img src="/support/images/en/howto/FAQ/empth-folder-by-dont-allow.png" alt="empth folder by dont allow" class="img-large img-center" />

## 解決方法：在系統設定中授予存取權限（第一步）

如果資料夾仍顯示為空白，或你不小心點選了「不允許」，請從 macOS 系統設定中授予存取權限。

**步驟（macOS Ventura、Sonoma、Sequoia）：**

1. 開啟 `系統設定 > 隱私權與安全性 > 檔案與資料夾`。
2. 找到 **RcloneView**。
3. 開啟你想要的資料夾對應的切換開關（例如 **文件資料夾**、**下載項目資料夾**）。
4. 在 RcloneView 中重新開啟該資料夾。

<img src="/support/images/en/howto/FAQ/change-setting-for-accessing-to-files-and-folders.png" alt="change setting for accessing to files and folders" class="img-large img-center" />

如果清單中沒有看到 RcloneView，請先啟動一次 RcloneView，並嘗試開啟受保護的資料夾，macOS 應該會再次跳出提示。

## 仍然無法運作？新增完全磁碟取用權（第二步）

如果「檔案與資料夾」的切換開關已開啟，但你仍無法瀏覽內容，請嘗試將 RcloneView 新增至 **完全磁碟取用權**。

1. 開啟 `系統設定 > 隱私權與安全性 > 完全磁碟取用權`。
2. 點選 `+` 按鈕，並從 `應用程式` 中選擇 **RcloneView** 應用程式。
3. 確認 RcloneView 的切換開關已開啟。
4. 重新啟動 RcloneView 並再試一次。

<img src="/support/images/en/howto/FAQ/mac-allow-full-disk-access.png" alt="mac allow full disk access" class="img-medium img-center" />

## 仍需要協助？收集記錄檔並聯絡支援團隊

如果依照上述步驟操作後存取仍被封鎖，請將記錄檔傳送給我們,以便協助你排解問題。

1. 在 RcloneView 中,開啟 `設定 > 內嵌式 Rclone`。
2. 在 **記錄設定** 下,啟用記錄功能、選擇一個 **記錄資料夾**、保留檔案名稱（例如 `rclone.log`）,並將 **記錄層級** 設為 **DEBUG**。
3. 點選 **重新啟動內嵌式 Rclone** 以套用變更。
4. 重現問題（嘗試開啟發生問題的資料夾）,然後將記錄檔連同你所執行步驟的簡短說明,寄送至 [rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)。

:::caution 需要重新啟動
只有在你點選 **重新啟動內嵌式 Rclone** 之後,系統才會開始擷取記錄。請勿略過此步驟。
:::

<img src="/support/images/en/howto/FAQ/setting-for-collecting-log-file.png" alt="setting for collecting log file" class="img-large img-center" />

## 相關指南

- 在 Explorer 中管理本機／雲端檔案:[瀏覽與管理遠端儲存空間](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- 設定功能總覽（包含內嵌式 Rclone 與記錄設定）:[一般設定](/howto/rcloneview-basic/general-settings#logging-configuration)

---

如需更多協助，請透過電子郵件與我們聯絡:**[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**。
