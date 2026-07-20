---
slug: serve-webdav-http-from-cloud-rcloneview
title: "Menyajikan Penyimpanan Cloud sebagai WebDAV atau HTTP dengan RcloneView"
authors:
  - tayson
description: "Gunakan perintah serve dari rclone melalui RcloneView untuk mengekspos penyimpanan cloud sebagai server WebDAV atau HTTP lokal. Akses file di aplikasi yang mendukung WebDAV tanpa perlu melakukan mount drive."
keywords:
  - rclone serve webdav
  - expose cloud storage webdav
  - rcloneview serve http
  - cloud storage webdav server
  - rclone webdav local server
  - access cloud via webdav
  - serve google drive webdav
  - rclone serve command guide
  - webdav from cloud storage
  - rcloneview serve feature
tags:
  - RcloneView
  - webdav
  - cloud-storage
  - feature
  - guide
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Menyajikan Penyimpanan Cloud sebagai WebDAV atau HTTP dengan RcloneView

> RcloneView dapat mengekspos penyedia penyimpanan cloud apa pun sebagai server WebDAV atau HTTP lokal. Aplikasi apa pun yang mendukung WebDAV — pengelola file, alat DAM, aplikasi kreatif, klien mobile — kemudian dapat membaca dan menulis file cloud secara langsung.

Melakukan mount drive cloud dengan lapisan VFS milik rclone adalah cara paling umum untuk mengekspos penyimpanan cloud secara lokal. Namun beberapa skenario memerlukan pendekatan yang berbeda: server WebDAV yang dapat dihubungi aplikasi melalui jaringan, server HTTP biasa untuk menyajikan file ke browser, atau cara ringan untuk mengakses penyimpanan cloud dari perangkat yang tidak dapat melakukan mount drive FUSE. Perintah `serve` milik rclone menangani semua ini — dan RcloneView memberi Anda akses ke sana melalui antarmuka terminal dan job.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Bisa Disajikan Rclone

Rclone mendukung berbagai protokol server melalui perintah `rclone serve`:

| Protokol | Kasus Penggunaan |
|----------|-------------------|
| `webdav` | Pengelola file, alat DAM, aplikasi dengan dukungan WebDAV |
| `http` | Akses browser hanya-baca ke file cloud |
| `ftp` | Kompatibilitas dengan aplikasi lama |
| `sftp` | Akses file berbasis secure shell |
| `s3` | Mengekspos cloud apa pun sebagai kompatibel-S3 (gunakan dengan klien S3) |
| `dlna` | Streaming media ke perangkat yang kompatibel dengan DLNA |

Panduan ini berfokus pada WebDAV dan HTTP, yang paling berguna secara luas untuk alur kerja desktop.

## Kasus Penggunaan 1: WebDAV untuk Integrasi Aplikasi

Banyak aplikasi profesional mendukung WebDAV secara native: Cyberduck, Finder (macOS), Adobe Bridge, alat DAM, alat manajemen proyek, dan lainnya. Mengekspos penyimpanan cloud Anda sebagai WebDAV membuatnya dapat diakses oleh aplikasi-aplikasi ini tanpa mount drive.

### Menjalankan server WebDAV dari RcloneView

Buka panel **Terminal** di RcloneView dan jalankan:

```bash
rclone serve webdav gdrive:/Documents/ --addr 127.0.0.1:8888 --user myuser --pass mypassword
```

Ini akan menjalankan server WebDAV di `http://127.0.0.1:8888` yang mengekspos folder `/Documents/` dari Google Drive Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Open RcloneView terminal to start serve command" class="img-large img-center" />

### Menghubungkan dari aplikasi

Di aplikasi mana pun yang mendukung WebDAV, tambahkan koneksi WebDAV:
- **URL**: `http://127.0.0.1:8888`
- **Username**: `myuser`
- **Password**: `mypassword`

Aplikasi tersebut akan melihat folder Documents Google Drive Anda sebagai share WebDAV — dapat dijelajahi, dibaca, dan ditulis.

## Kasus Penggunaan 2: HTTP untuk Akses Browser Hanya-Baca

Untuk berbagi file dengan rekan kerja tanpa memberikan akses ke akun cloud mereka, sajikan sebuah folder sebagai HTTP:

```bash
rclone serve http s3-remote:my-bucket/reports/ --addr 0.0.0.0:8080
```

Siapa pun di jaringan dapat membuka `http://your-machine-ip:8080` di browser dan melihat daftar direktori dengan tautan unduhan — tanpa memerlukan akun cloud.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse served cloud files in browser" class="img-large img-center" />

## Kasus Penggunaan 3: Menyajikan S3 untuk Kompatibilitas Klien S3

Sebuah teknik yang ampuh: mengekspos cloud non-S3 (seperti Google Drive atau API native Backblaze B2) sebagai endpoint yang kompatibel dengan S3, sehingga klien S3 apa pun dapat mengaksesnya:

```bash
rclone serve s3 gdrive:/Backups/ --addr 127.0.0.1:9000 --auth-key ACCESSKEY,SECRETKEY
```

Klien S3 (AWS CLI, s3cmd, SDK S3 apa pun) kemudian dapat terhubung ke `http://127.0.0.1:9000` dan berinteraksi dengan Google Drive seolah-olah itu adalah S3.

## Membuat Job Serve yang Persisten

Untuk menjalankan perintah serve saat startup atau sesuai jadwal:

1. Di RcloneView, buat **Job** baru dengan mode **Custom Command**.
2. Masukkan perintah `rclone serve webdav` Anda dengan flag yang diinginkan.
3. Atur agar dijalankan secara otomatis saat RcloneView dijalankan, atau jadwalkan sesuai kebutuhan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule serve job to run on startup" class="img-large img-center" />

## Pertimbangan Keamanan

| Skenario | Rekomendasi |
|----------|-------------|
| Hanya penggunaan lokal | Bind ke `127.0.0.1` — tidak dapat diakses dari luar mesin Anda |
| Berbagi di LAN | Bind ke IP lokal mesin Anda, tambahkan `--user` dan `--pass` |
| Menghadap internet | Gunakan HTTPS (tambahkan flag `--cert` dan `--key`) atau letakkan di belakang reverse proxy |
| Server HTTP publik | Gunakan `rclone serve http` dengan VFS hanya-baca: tambahkan `--read-only` |

Selalu atur username/password untuk server apa pun yang dapat diakses di luar `127.0.0.1`:

```bash
rclone serve webdav remote:path --addr 0.0.0.0:8888 --user admin --pass strongpassword --read-only
```

## Flag Serve yang Berguna

| Flag | Tujuan |
|------|--------|
| `--addr host:port` | Alamat dan port bind |
| `--user` / `--pass` | HTTP Basic Auth |
| `--read-only` | Mencegah penulisan |
| `--vfs-cache-mode full` | Menyimpan cache file secara lokal untuk performa yang lebih baik |
| `--no-modtime` | Menonaktifkan pelaporan modtime (berguna untuk beberapa aplikasi) |
| `--htpasswd /path/file` | Menggunakan file htpasswd untuk banyak pengguna |

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Buka Terminal** di RcloneView.
3. **Jalankan `rclone serve webdav remote:path --addr 127.0.0.1:8888`** untuk memulai server WebDAV.
4. **Hubungkan dari aplikasi Anda** menggunakan URL WebDAV dan kredensial.

WebDAV membuka akses penyimpanan cloud untuk puluhan aplikasi yang sebelumnya tidak dapat membaca file cloud Anda. Tidak perlu mount.

---

**Panduan Terkait:**

- [Mount Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Mount SFTP dan SMB sebagai Drive Lokal](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Terminal RcloneView: CLI di Dalam GUI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)

<CloudSupportGrid />
