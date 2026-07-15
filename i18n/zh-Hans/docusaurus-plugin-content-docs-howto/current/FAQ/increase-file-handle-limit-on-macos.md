---
sidebar_position: 1
description: "了解如何通过提高 macOS 上的文件句柄限制来解决“打开文件过多”错误，从而让 RcloneView 运行更加顺畅。"
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

# 提高 macOS 上的文件句柄限制

在使用 RcloneView 处理大量文件时（例如同时同步或复制数百个文件），你可能会遇到以下错误：

> **Too many open files（打开文件过多）**

出现这种情况是因为 macOS 对一个进程可以打开的文件描述符（文件句柄）数量设有限制。默认情况下，该值通常被设置为 **256 或 1024**，对于繁重的操作来说可能不够用。

---

## 🔍 如何查看当前限制

### 终端命令：

```bash
ulimit -n             # Current shell session soft limit
launchctl limit maxfiles  # System-wide soft and hard limits
```

---

## 🛠️ 推荐配置

- **软限制（Soft Limit）：** 524288
- **硬限制（Hard Limit）：** 524288

此配置可支持并行任务、挂载远程存储以及大型同步操作，而不会触及文件描述符限制。

---

## 📘 分步说明：永久提高限制

### 1. 创建 LaunchDaemon plist 文件

打开终端并运行：

```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

粘贴以下内容：

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

### 2. 设置正确的权限

```bash
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist
```

### 3. 重启你的 Mac

```bash
sudo reboot
```

### 4. 确认新的限制

```bash
launchctl limit maxfiles
```

---

## 📎 参考资源

- Apple 支持社区：[Too many open files](https://discussions.apple.com/thread/1449787)
- 示例 Gist：[limit.maxfiles.plist configuration](https://gist.github.com/tombigel/d503800a282fcadbee14b537735d202c)
- 博客指南：[Hiltmon - Increasing file descriptor ulimit on macOS](https://hiltmon.com/blog/2023/01/01/increasing-file-descriptor-ulimit-on-macos/)

---

如有任何问题，请联系支持团队：**[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**。
