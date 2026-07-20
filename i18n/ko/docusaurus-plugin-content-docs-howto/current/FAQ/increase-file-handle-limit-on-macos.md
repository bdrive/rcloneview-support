---
sidebar_position: 1
description: "macOS에서 파일 핸들 제한을 늘려 \"Too many open files\" 오류를 해결하고 RcloneView를 더 원활하게 사용하는 방법을 알아보세요."
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

# macOS에서 파일 핸들 제한 늘리기

RcloneView로 대량의 파일을 처리할 때(예: 수백 개의 파일을 동시에 동기화하거나 복사할 때) 다음과 같은 오류가 발생할 수 있습니다.

> **Too many open files**

이는 macOS가 프로세스가 열 수 있는 파일 디스크립터(파일 핸들) 수를 제한하기 때문에 발생합니다. 기본적으로 이 값은 흔히 **256 또는 1024**로 설정되어 있으며, 이는 대규모 작업에는 충분하지 않을 수 있습니다.

---

## 🔍 현재 제한값 확인하는 방법

### 터미널 명령어:

```bash
ulimit -n             # Current shell session soft limit
launchctl limit maxfiles  # System-wide soft and hard limits
```

---

## 🛠️ 권장 설정값

- **소프트 제한(Soft Limit):** 524288
- **하드 제한(Hard Limit):** 524288

이 설정을 적용하면 파일 디스크립터 제한에 걸리지 않고 병렬 작업, 리모트 마운트, 대용량 동기화 작업을 수행할 수 있습니다.

---

## 📘 단계별 안내: 영구적으로 제한값 늘리기

### 1. LaunchDaemon plist 파일 생성

터미널을 열고 다음을 실행합니다.

```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

다음 내용을 붙여넣습니다.

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

### 2. 적절한 권한 설정

```bash
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist
```

### 3. Mac 재부팅

```bash
sudo reboot
```

### 4. 새 제한값 확인

```bash
launchctl limit maxfiles
```

---

## 📎 참고 자료

- Apple Support Community: [Too many open files](https://discussions.apple.com/thread/1449787)
- Example Gist: [limit.maxfiles.plist configuration](https://gist.github.com/tombigel/d503800a282fcadbee14b537735d202c)
- Blog Guide: [Hiltmon - Increasing file descriptor ulimit on macOS](https://hiltmon.com/blog/2023/01/01/increasing-file-descriptor-ulimit-on-macos/)

---

문제가 있으시면 **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**으로 문의해 주세요.
