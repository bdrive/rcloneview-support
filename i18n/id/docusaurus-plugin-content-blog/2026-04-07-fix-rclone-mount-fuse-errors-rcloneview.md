---
slug: fix-rclone-mount-fuse-errors-rcloneview
title: "Memperbaiki Error Mount Rclone dan FUSE di RcloneView"
authors:
  - tayson
description: "Cara mengatasi dan memperbaiki error mount rclone yang umum di RcloneView, termasuk FUSE tidak terpasang, WinFsp hilang, macFUSE tidak ditemukan, permission denied, mount yang macet (stale), dan masalah direktori cache di Windows, macOS, dan Linux."
keywords:
  - rclone mount error
  - FUSE not installed rclone
  - WinFsp missing rclone
  - macFUSE not found rclone
  - rclone mount permission denied
  - stale mount rclone fix
  - rclone mount point busy
  - rclone cache directory error
  - rcloneview mount troubleshooting
  - fix rclone FUSE error
tags:
  - RcloneView
  - troubleshooting
  - mount
  - vfs
  - guide
  - tips
  - linux
  - windows
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Mount Rclone dan FUSE di RcloneView

> Mount penyimpanan cloud sebagai drive lokal adalah salah satu fitur paling andal di rclone, tetapi dependensi FUSE dan keunikan tiap OS dapat menyebabkan error yang membingungkan. Panduan ini membahas setiap kegagalan mount yang umum terjadi beserta cara memperbaikinya.

Fitur mount rclone memungkinkan Anda mengakses penyimpanan cloud jarak jauh seolah-olah itu adalah folder atau drive letter lokal. RcloneView mempermudah hal ini dengan Mount Manager-nya, tetapi di balik layar, mount bergantung pada lapisan FUSE (Filesystem in Userspace) yang harus terpasang dan dikonfigurasi dengan benar pada sistem operasi Anda. Ketika terjadi masalah, pesan errornya sering kali sulit dipahami. Panduan ini membahas error mount dan FUSE yang paling umum ditemui di Windows, macOS, dan Linux, lengkap dengan langkah-langkah perbaikan untuk masing-masing.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memahami Cara Kerja Mount Rclone

Sebelum membahas perbaikannya, penting untuk memahami arsitekturnya terlebih dahulu. Saat Anda melakukan mount remote di RcloneView, rclone membuat filesystem virtual yang menerjemahkan operasi file (open, read, write, list) menjadi panggilan API ke penyedia cloud Anda. Filesystem virtual ini diekspos ke sistem operasi Anda melalui driver FUSE:

- **Windows** menggunakan [WinFsp](https://winfsp.dev/) (Windows File System Proxy).
- **macOS** menggunakan [macFUSE](https://osxfuse.github.io/) (dahulu OSXFUSE).
- **Linux** menggunakan modul kernel FUSE (`fuse` atau `fuse3`).

Jika driver FUSE hilang, sudah usang, atau konfigurasinya salah, mount akan gagal bahkan sebelum rclone mulai menyajikan file. Lapisan cache VFS (Virtual File System) berada di atas ini dan menangani caching, buffering, serta read-ahead — masalahnya sendiri dapat menyebabkan gangguan meskipun FUSE-nya bekerja dengan baik.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

## WinFsp Hilang atau Tidak Terdeteksi di Windows

### Gejala

- Pesan error: `mount helper not found` atau `cannot find WinFsp`.
- Perintah mount langsung keluar tanpa drive letter yang muncul.
- RcloneView menampilkan notifikasi kegagalan mount.

### Langkah Perbaikan

1. **Unduh dan pasang WinFsp** dari [winfsp.dev](https://winfsp.dev/rel/). Pilih rilis stabil terbaru (installer .msi).
2. **Jalankan installer sebagai Administrator** — WinFsp memasang driver kernel-mode yang membutuhkan hak akses tinggi.
3. **Restart** setelah instalasi. Meski tidak selalu wajib, restart memastikan driver termuat sepenuhnya.
4. **Verifikasi instalasi** dengan membuka command prompt dan menjalankan:
   ```
   dir "C:\Program Files (x86)\WinFsp"
   ```
   Anda seharusnya melihat direktori WinFsp dengan folder `bin`, `lib`, dan lainnya.
5. **Periksa PATH** — direktori `bin` WinFsp harus berada di PATH sistem Anda. Installer biasanya menambahkannya secara otomatis, tetapi jika Anda terus mengalami error, tambahkan `C:\Program Files (x86)\WinFsp\bin` ke variabel environment sistem Anda secara manual.
6. **Coba mount lagi** di Mount Manager RcloneView.

Jika Anda menjalankan versi WinFsp yang lama, tingkatkan ke rilis terbaru. Beberapa versi rclone membutuhkan fitur WinFsp yang lebih baru, dan ketidakcocokan versi dapat menyebabkan kegagalan yang tidak terdeteksi.

## macFUSE Tidak Ditemukan di macOS

### Gejala

- Error: `FUSE library not found` atau `mount helper not found`.
- Mount gagal secara diam-diam atau keluar dengan kode 1.
- Pada macOS Ventura atau lebih baru, Anda mungkin melihat peringatan system extension yang diblokir.

### Langkah Perbaikan

1. **Unduh macFUSE** dari [osxfuse.github.io](https://osxfuse.github.io/). Pasang rilis stabil terbaru.
2. **Izinkan system extension** — setelah instalasi, buka **System Settings > Privacy & Security** dan setujui kernel extension macFUSE. Pada Mac Apple Silicon, ini mungkin membutuhkan restart ke Recovery Mode untuk mengaktifkan kernel extension.
3. **Restart** Mac Anda setelah menyetujui extension tersebut.
4. **Verifikasi** dengan menjalankan di Terminal:
   ```
   ls /Library/Filesystems/macfuse.fs
   ```
   Jika direktori tersebut ada, macFUSE sudah terpasang dengan benar.
5. **Periksa Gatekeeper** — jika macOS memblokir mount dengan peringatan keamanan, buka pengaturan Privacy & Security dan klik "Allow Anyway."

Untuk Mac Apple Silicon yang menjalankan macOS Sonoma atau lebih baru, Anda mungkin perlu menurunkan level keamanan menjadi "Reduced Security" di Recovery Mode agar kernel extension pihak ketiga diizinkan. Ini adalah persyaratan macOS, bukan keterbatasan rclone.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## FUSE Tidak Terpasang di Linux

### Gejala

- Error: `fusermount: command not found` atau `fuse: device not found`.
- Mount gagal dengan pesan `mount helper program not found`.
- Permission denied saat mengakses `/dev/fuse`.

### Langkah Perbaikan

**Pasang FUSE:**

```bash
# Debian/Ubuntu
sudo apt install fuse3

# Fedora/RHEL
sudo dnf install fuse3

# Arch Linux
sudo pacman -S fuse3

# Alpine
sudo apk add fuse3
```

**Aktifkan modul kernel FUSE:**

```bash
sudo modprobe fuse
```

Agar tetap aktif setelah restart, tambahkan `fuse` ke `/etc/modules-load.d/fuse.conf`.

**Perbaiki izin pada /dev/fuse:**

```bash
sudo chmod 666 /dev/fuse
```

Atau tambahkan pengguna Anda ke grup `fuse`:

```bash
sudo usermod -aG fuse $USER
```

Log out lalu masuk kembali agar perubahan grup berlaku.

**Izinkan pengguna non-root untuk melakukan mount:**

Edit `/etc/fuse.conf` dan hapus tanda komentar pada baris:

```
user_allow_other
```

Ini diperlukan jika Anda ingin menggunakan flag `--allow-other`, yang memungkinkan pengguna lain (dan layanan sistem) mengakses filesystem yang di-mount.

## Error Permission Denied

Masalah izin muncul secara berbeda di tiap OS, tetapi penyebab utamanya biasanya sama: pengguna yang menjalankan rclone tidak memiliki hak akses yang diperlukan untuk membuat atau mengakses mount.

### Windows

- **Jalankan RcloneView sebagai Administrator** jika melakukan mount ke path level sistem.
- Pastikan mount point (drive letter atau folder) belum digunakan oleh program lain.
- Periksa apakah antivirus Anda memblokir WinFsp atau rclone.

### macOS

- Jika Anda melihat `operation not permitted`, periksa apakah rclone dan RcloneView memiliki Full Disk Access di **System Settings > Privacy & Security > Full Disk Access**.
- Pastikan direktori mount point ada dan dapat ditulis oleh pengguna Anda.

### Linux

- Verifikasi bahwa pengguna Anda dapat mengakses `/dev/fuse`:
  ```bash
  ls -la /dev/fuse
  ```
- Jika menjalankan rclone sebagai service (systemd), pastikan file service menyertakan `User=youruser` dan pengguna tersebut ada di grup `fuse`.
- Kebijakan SELinux atau AppArmor dapat memblokir mount FUSE. Periksa log dengan `ausearch -m avc` (SELinux) atau `dmesg` (AppArmor) dan tambahkan pengecualian yang sesuai.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Mount Point Busy atau Mount yang Macet (Stale)

Mount yang macet (stale) terjadi ketika rclone keluar secara tidak terduga (crash, sinyal kill, sistem sleep) tetapi mount point tetap terdaftar di OS. Setiap upaya mengakses path tersebut atau melakukan remount akan gagal dengan pesan "transport endpoint is not connected" (Linux), "resource busy" (macOS), atau jendela Explorer yang hang (Windows).

### Perbaikan di Linux

```bash
# Paksa unmount mount yang macet
fusermount -uz /path/to/mount

# Jika fusermount gagal, gunakan lazy unmount
sudo umount -l /path/to/mount
```

### Perbaikan di macOS

```bash
# Unmount path yang macet
diskutil unmount force /path/to/mount

# Atau gunakan umount
sudo umount -f /path/to/mount
```

### Perbaikan di Windows

- Buka **Task Manager** dan hentikan proses `rclone.exe` yang masih berjalan.
- Jika drive letter tampak macet, buka Command Prompt sebagai Administrator dan jalankan:
  ```
  net use X: /delete
  ```
  Ganti `X:` dengan drive letter yang macet.
- Restart Windows Explorer dari Task Manager jika drive letter tidak juga hilang.

Setelah membersihkan mount yang macet, coba mount ulang dari Mount Manager RcloneView.

## Masalah Direktori Cache VFS

Cache VFS rclone menyimpan salinan sementara dari file yang sedang dibaca atau ditulis. Jika direktori cache kehabisan ruang, memiliki izin yang salah, atau berada pada filesystem yang lambat, mount akan gagal atau berjalan tidak stabil.

### Masalah Umum

- **Disk penuh** — lokasi cache default berada di direktori temp pengguna Anda, yang mungkin berada pada partisi sistem yang kecil.
- **Permission denied** — direktori cache dimiliki oleh pengguna lain atau memiliki izin yang terlalu ketat.
- **Drive cache lambat** — menempatkan cache di network drive atau hard disk berputar menyebabkan performa mount yang buruk.

### Perbaikan

**Ubah direktori cache** ke lokasi dengan penyimpanan cepat yang memadai:

```bash
rclone mount remote: /mnt/cloud --cache-dir /path/to/fast/ssd/cache
```

Di RcloneView, Anda dapat mengatur direktori cache pada opsi konfigurasi mount.

**Atur batas ukuran cache** untuk mencegah cache menghabiskan seluruh ruang yang tersedia:

```bash
--vfs-cache-max-size 10G
--vfs-cache-max-age 1h
```

**Periksa izin** pada direktori cache:

```bash
ls -la /path/to/cache
# Pastikan pengguna Anda memilikinya
chown -R $USER:$USER /path/to/cache
```

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Mount Hilang Setelah Restart

Secara default, mount rclone tidak bersifat persisten — mount tidak akan bertahan setelah sistem di-restart. Jika Anda membutuhkan mount agar kembali otomatis, ada beberapa opsi yang tersedia.

### Menggunakan Job Scheduling RcloneView

RcloneView memungkinkan Anda membuat job terjadwal yang dapat membangun kembali mount saat sistem startup. Konfigurasikan job mount dan atur jadwalnya agar berjalan saat login atau boot.

### Layanan systemd Linux

Buat systemd user service:

```ini
[Unit]
Description=Rclone Mount - Remote
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
ExecStart=/usr/bin/rclone mount remote: /mnt/cloud --vfs-cache-mode full
ExecStop=/bin/fusermount -uz /mnt/cloud
Restart=on-failure
RestartSec=5

[Install]
WantedBy=default.target
```

Aktifkan dengan:

```bash
systemctl --user enable rclone-mount.service
systemctl --user start rclone-mount.service
```

### Task Scheduler Windows

Buat scheduled task yang berjalan saat logon, menjalankan `rclone mount` dengan parameter yang diinginkan. Job scheduler RcloneView juga dapat menangani hal ini untuk Anda.

### launchd macOS

Buat plist di `~/Library/LaunchAgents/` untuk memulai mount saat login.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Pasang driver FUSE** untuk OS Anda — WinFsp (Windows), macFUSE (macOS), atau fuse3 (Linux).
3. **Buka Mount Manager** di RcloneView untuk mengonfigurasi dan menjalankan mount pertama Anda.
4. **Atur opsi cache VFS** yang sesuai dengan penyimpanan dan kecepatan jaringan Anda.

Sebagian besar error mount disebabkan oleh driver FUSE yang hilang atau salah konfigurasi. Pasang driver yang tepat untuk platform Anda, verifikasi izinnya, dan mount cloud Anda akan berjalan andal dalam hitungan menit.

---

**Panduan Terkait:**

- [Mount Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Menjelajahi dan Mengelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Penjadwalan dan Eksekusi Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
