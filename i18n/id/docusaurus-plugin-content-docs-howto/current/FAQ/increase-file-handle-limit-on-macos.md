---
sidebar_position: 1
description: Pelajari cara mengatasi error "Too many open files" di macOS dengan meningkatkan batas file handle agar RcloneView berjalan lebih lancar.
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

# Meningkatkan Batas File Handle di macOS

Saat menggunakan RcloneView untuk memproses banyak file (misalnya, sinkronisasi atau menyalin ratusan file secara bersamaan), Anda mungkin mengalami error berikut:

> **Too many open files**

Hal ini terjadi karena macOS menerapkan batas pada jumlah file descriptor (file handle) yang dapat dibuka oleh sebuah proses. Secara default, nilai ini sering diatur ke **256 atau 1024**, yang mungkin tidak cukup untuk operasi berat.

---

## 🔍 Cara Memeriksa Batas Saat Ini

### Perintah Terminal:

```bash
ulimit -n             # Current shell session soft limit
launchctl limit maxfiles  # System-wide soft and hard limits
```

---

## 🛠️ Konfigurasi yang Direkomendasikan

- **Soft Limit:** 524288
- **Hard Limit:** 524288

Konfigurasi ini mendukung pekerjaan paralel, mounting remote, dan operasi sinkronisasi besar tanpa mengalami batas file descriptor.

---

## 📘 Langkah demi Langkah: Meningkatkan Batas Secara Permanen

### 1. Buat file plist LaunchDaemon

Buka Terminal dan jalankan:

```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

Tempelkan konten berikut:

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

### 2. Atur izin yang sesuai

```bash
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist
```

### 3. Reboot Mac Anda

```bash
sudo reboot
```

### 4. Konfirmasi batas yang baru

```bash
launchctl limit maxfiles
```

---

## 📎 Sumber Referensi

- Apple Support Community: [Too many open files](https://discussions.apple.com/thread/1449787)
- Contoh Gist: [limit.maxfiles.plist configuration](https://gist.github.com/tombigel/d503800a282fcadbee14b537735d202c)
- Panduan Blog: [Hiltmon - Increasing file descriptor ulimit on macOS](https://hiltmon.com/blog/2023/01/01/increasing-file-descriptor-ulimit-on-macos/)

---

Jika ada masalah, hubungi dukungan di **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**.
