---
sidebar_position: 1
description: "Erfahren Sie, wie Sie unter macOS „Too many open files“-Fehler beheben, indem Sie das File-Handle-Limit erhöhen, um RcloneView reibungsloser zu betreiben."
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

# Erhöhen des File-Handle-Limits unter macOS

Wenn Sie mit RcloneView eine große Anzahl von Dateien verarbeiten (z. B. beim gleichzeitigen Synchronisieren oder Kopieren von Hunderten von Dateien), kann folgender Fehler auftreten:

> **Too many open files**

Dies liegt daran, dass macOS die Anzahl der Datei-Deskriptoren (File Handles) begrenzt, die ein Prozess öffnen kann. Standardmäßig ist dieser Wert oft auf **256 oder 1024** gesetzt, was für aufwendige Operationen unzureichend sein kann.

---

## 🔍 So prüfen Sie die aktuellen Limits

### Terminal-Befehl:

```bash
ulimit -n             # Current shell session soft limit
launchctl limit maxfiles  # System-wide soft and hard limits
```

---

## 🛠️ Empfohlene Konfiguration

- **Soft Limit:** 524288
- **Hard Limit:** 524288

Diese Konfiguration unterstützt parallele Jobs, das Einbinden (mount) von Remotes und umfangreiche Synchronisationsvorgänge, ohne an die Grenzen der Datei-Deskriptoren zu stoßen.

---

## 📘 Schritt-für-Schritt-Anleitung: Dauerhafte Erhöhung des Limits

### 1. LaunchDaemon-plist-Datei erstellen

Öffnen Sie das Terminal und führen Sie Folgendes aus:

```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

Fügen Sie den folgenden Inhalt ein:

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

### 2. Richtige Berechtigungen setzen

```bash
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist
```

### 3. Mac neu starten

```bash
sudo reboot
```

### 4. Neue Limits bestätigen

```bash
launchctl limit maxfiles
```

---

## 📎 Weiterführende Ressourcen

- Apple Support Community: [Too many open files](https://discussions.apple.com/thread/1449787)
- Beispiel-Gist: [limit.maxfiles.plist configuration](https://gist.github.com/tombigel/d503800a282fcadbee14b537735d202c)
- Blog-Anleitung: [Hiltmon - Increasing file descriptor ulimit on macOS](https://hiltmon.com/blog/2023/01/01/increasing-file-descriptor-ulimit-on-macos/)

---

Bei Fragen wenden Sie sich an den Support unter **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**.
