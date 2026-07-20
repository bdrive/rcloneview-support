---
sidebar_position: 1
description: "了解如何透過提高檔案控制代碼限制來解決 macOS 上的「Too many open files」錯誤，讓 RcloneView 運作更順暢。"
keywords:
  - rcloneview
  - macos
  - file handle limit
  - rclone
  - plist
  - ulimit
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - Performance
  - system-settings
date: 2025-07-25
author: Jay
---

# 在 macOS 上提高檔案控制代碼限制

當您使用 RcloneView 處理大量檔案時（例如同時同步或複製數百個檔案），可能會遇到以下錯誤：

> **Too many open files**

這是因為 macOS 對於一個處理程序可以開啟的檔案描述符（檔案控制代碼）數量有所限制。預設情況下，此數值通常設定為 **256 或 1024**，這對於高負載操作而言可能不夠用。

---

## 🔍 如何檢查目前的限制

### 終端機指令：

```bash
ulimit -n             # Current shell session soft limit
launchctl limit maxfiles  # System-wide soft and hard limits
```

---

## 🛠️ 建議設定

- **軟性限制（Soft Limit）：** 524288
- **硬性限制（Hard Limit）：** 524288

此設定可支援平行作業、掛載遠端以及大型同步操作，而不會遇到檔案描述符限制。

---

## 📘 逐步說明：永久提高限制

### 1. 建立 LaunchDaemon plist 檔案

開啟終端機並執行：

```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

貼上以下內容：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
   <key>Label</key>
   <string>limit.maxfiles</string>
   <key>ProgramArguments</key>
   <array>
       <string>launchctl</string>
       <string>limit</string>
       <string>maxfiles</string>
       <string>524288</string>
       <string>524288</string>
   </array>
   <key>RunAtLoad</key>
   <true/>
</dict>
</plist>
```

### 2. 設定正確的權限

```bash
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist
```

### 3. 重新啟動您的 Mac

```bash
sudo reboot
```

### 4. 確認新的限制

```bash
launchctl limit maxfiles
```

---

## 📎 參考資源

- Apple 支援社群：[Too many open files](https://discussions.apple.com/thread/1449787)
- 範例 Gist：[limit.maxfiles.plist configuration](https://gist.github.com/tombigel/d503800a282fcadbee14b537735d202c)
- 部落格指南：[Hiltmon - Increasing file descriptor ulimit on macOS](https://hiltmon.com/blog/2023/01/01/increasing-file-descriptor-ulimit-on-macos/)

---

如有任何問題，請聯絡支援團隊：**[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**。
