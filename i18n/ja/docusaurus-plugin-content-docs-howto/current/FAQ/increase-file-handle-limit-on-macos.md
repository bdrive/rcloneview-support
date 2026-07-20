---
sidebar_position: 1
description: "RcloneViewをスムーズに動作させるために、macOSで「Too many open files」エラーをファイルハンドル数の上限を引き上げて解決する方法を解説します。"
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

# macOSでファイルハンドル数の上限を引き上げる

RcloneViewで大量のファイルを処理する場合(例:数百のファイルを同時に同期またはコピーする場合)、次のエラーが発生することがあります。

> **Too many open files**

これは、macOSがプロセスが開けるファイルディスクリプタ(ファイルハンドル)の数に上限を設けているために発生します。デフォルトでは、この値は多くの場合**256または1024**に設定されており、負荷の高い処理には不十分な場合があります。

---

## 🔍 現在の上限を確認する方法

### ターミナルコマンド:

```bash
ulimit -n             # Current shell session soft limit
launchctl limit maxfiles  # System-wide soft and hard limits
```

---

## 🛠️ 推奨設定

- **ソフトリミット:** 524288
- **ハードリミット:** 524288

この設定により、並列ジョブ、リモートのマウント、大規模な同期処理を、ファイルディスクリプタの上限に達することなく実行できます。

---

## 📘 手順:上限を恒久的に引き上げる

### 1. LaunchDaemon plistファイルを作成する

ターミナルを開き、以下を実行します。

```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

以下の内容を貼り付けます。

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

### 2. 適切な権限を設定する

```bash
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist
```

### 3. Macを再起動する

```bash
sudo reboot
```

### 4. 新しい上限を確認する

```bash
launchctl limit maxfiles
```

---

## 📎 参考資料

- Apple Support Community: [Too many open files](https://discussions.apple.com/thread/1449787)
- Example Gist: [limit.maxfiles.plist configuration](https://gist.github.com/tombigel/d503800a282fcadbee14b537735d202c)
- Blog Guide: [Hiltmon - Increasing file descriptor ulimit on macOS](https://hiltmon.com/blog/2023/01/01/increasing-file-descriptor-ulimit-on-macos/)

---

問題が発生した場合は、**[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)** までお問い合わせください。
