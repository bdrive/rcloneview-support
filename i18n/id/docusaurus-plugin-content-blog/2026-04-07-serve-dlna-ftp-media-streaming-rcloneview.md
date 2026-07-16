---
slug: serve-dlna-ftp-media-streaming-rcloneview
title: "Streaming Media Cloud melalui Server DLNA dan FTP dengan RcloneView"
authors: [tayson]
description: "Siapkan streaming media DLNA dan akses server FTP ke penyimpanan cloud Anda menggunakan rclone serve dan RcloneView untuk pemutaran media yang mulus di perangkat apa pun."
keywords:
  - rclone dlna server
  - streaming media penyimpanan cloud
  - rclone ftp server
  - stream google drive dlna
  - cloud media server
  - rclone serve dlna
  - rcloneview media streaming
  - ftp cloud storage
  - smart tv cloud streaming
  - rclone media player
tags: [feature, media, tips, automation, mount]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Streaming Media Cloud melalui Server DLNA dan FTP dengan RcloneView

> Ubah penyimpanan cloud Anda menjadi media server pribadi dengan melakukan streaming konten langsung ke smart TV, media player, dan klien FTP melalui rclone serve.

Penyimpanan cloud Anda menyimpan terabyte foto, video, dan musik, tetapi mengakses konten tersebut di TV ruang keluarga atau melalui alat transfer file tradisional bisa terasa sangat merepotkan. Perintah `serve` milik rclone mengatasi hal ini dengan mengekspos remote cloud apa pun sebagai server media DLNA, server FTP, server HTTP, atau endpoint WebDAV. Dipadukan dengan antarmuka RcloneView yang intuitif untuk mengelola remote dan memantau koneksi, Anda dapat menyiapkan media server berbasis cloud yang berfungsi penuh hanya dalam hitungan menit. Panduan ini membahas streaming DLNA ke smart TV dan media player, konfigurasi server FTP untuk akses klien lawas, penyetelan performa agar pemutaran lancar, serta kontrol akses untuk lingkungan multi-pengguna.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cara Kerja Rclone Serve

Perintah `serve` milik rclone membuat server lokal yang menerjemahkan permintaan dari protokol standar (DLNA, FTP, HTTP, WebDAV) menjadi panggilan API penyimpanan cloud. Saat smart TV meminta sebuah video melalui DLNA, rclone mengambil file tersebut dari penyedia cloud Anda dan melakukan streaming secara real time. Perangkat klien tidak pernah tahu bahwa ia sedang mengakses penyimpanan cloud -- ia hanya melihat sebuah media server atau file server standar.

**Protokol serve yang tersedia:**

| Protokol | Kasus Penggunaan | Klien Umum |
|----------|----------|----------------|
| DLNA | Streaming media ke TV dan player | Smart TV, VLC, Kodi, Xbox, PlayStation |
| FTP | Transfer file untuk aplikasi lawas | FileZilla, WinSCP, klien FTP command-line |
| HTTP | Akses file berbasis browser | Browser web apa pun |
| WebDAV | Network drive yang dapat di-mount | Windows Explorer, macOS Finder, file manager Linux |
| SFTP | Transfer file aman | Klien SSH, aplikasi yang mendukung SFTP |

**Ikhtisar arsitektur:**

Alur datanya cukup sederhana:

1. Perangkat klien menemukan atau terhubung ke instance rclone serve pada jaringan lokal Anda.
2. Klien meminta daftar file atau file tertentu.
3. Rclone menerjemahkan permintaan tersebut menjadi panggilan API penyimpanan cloud.
4. Data di-streaming dari penyedia cloud melalui rclone ke klien.
5. VFS caching opsional menyimpan data yang sering diakses secara lokal untuk akses ulang yang lebih cepat.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

Arsitektur ini berarti pustaka media Anda dapat sepenuhnya berada di cloud sambil tetap dapat diakses oleh perangkat apa pun di jaringan Anda melalui protokol standar.

## Menyiapkan Streaming Media DLNA

DLNA (Digital Living Network Alliance) adalah standar universal untuk streaming media di jaringan rumah. Hampir setiap smart TV, konsol game, dan media player mendukung penemuan dan pemutaran DLNA.

**Menjalankan server DLNA dasar:**

Melalui terminal terintegrasi RcloneView, jalankan server DLNA yang mengarah ke pustaka media cloud Anda:

```bash
rclone serve dlna gdrive:/Media
```

Ini langsung membuat server DLNA yang mengiklankan dirinya di jaringan lokal Anda. Perangkat apa pun yang mendukung DLNA pada jaringan yang sama akan menemukannya secara otomatis.

**Menyesuaikan server DLNA:**

```bash
rclone serve dlna gdrive:/Media \
  --name "Cloud Media Server" \
  --addr :7879 \
  --log-level INFO \
  --vfs-cache-mode full \
  --vfs-cache-max-size 10G \
  --vfs-read-ahead 128M
```

**Flag DLNA utama:**

| Flag | Tujuan | Nilai yang Direkomendasikan |
|------|---------|-------------------|
| `--name` | Nama server yang terlihat oleh klien | Nama deskriptif seperti "Cloud Movies" |
| `--addr` | Alamat dan port listen | `:7879` (default) |
| `--vfs-cache-mode` | Strategi caching | `full` untuk streaming yang mulus |
| `--vfs-cache-max-size` | Ukuran cache lokal maksimum | 5-20 GB tergantung ruang disk |
| `--vfs-read-ahead` | Buffer prefetch data | 128M-256M untuk streaming video |
| `--vfs-cache-max-age` | Berapa lama file cache bertahan | `24h` untuk pustaka media |

**Menghubungkan dari smart TV:**

1. Jalankan server DLNA dengan perintah di atas.
2. Pada smart TV Anda, buka media player atau browser DLNA (nama pastinya berbeda-beda tergantung produsen -- Samsung menggunakan "SmartThings," LG menggunakan "Media Player," Sony menggunakan "Media Player").
3. Cari nama server yang Anda tentukan (mis., "Cloud Media Server").
4. Jelajahi folder dan pilih media untuk diputar.

**Menghubungkan dari VLC:**

1. Buka media player VLC.
2. Navigasikan ke View > Playlist > Local Network > Universal Plug'n'Play.
3. Server DLNA rclone Anda muncul dalam daftar.
4. Jelajahi dan putar media secara langsung.

**Melayani media dari penyimpanan yang kompatibel dengan S3:**

S3 dan penyedia object storage sejenis sangat cocok untuk pustaka media karena biaya per gigabyte-nya yang rendah:

```bash
# Serve dari Wasabi (kompatibel S3, tanpa biaya egress)
rclone serve dlna wasabi:media-bucket \
  --name "Wasabi Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Menyiapkan Server FTP

FTP masih banyak digunakan untuk transfer file, terutama dengan aplikasi lawas, perangkat network-attached, dan alur kerja otomatis. Rclone dapat mengekspos remote cloud apa pun sebagai server FTP yang berfungsi penuh.

**Menjalankan server FTP dasar:**

```bash
rclone serve ftp gdrive: --addr :2121 --user ftpuser --pass ftppassword
```

Ini membuat server FTP pada port 2121 yang menyediakan akses ke seluruh Google Drive Anda.

**Konfigurasi FTP lanjutan:**

```bash
rclone serve ftp s3:my-bucket \
  --addr :2121 \
  --user admin \
  --pass secure-password \
  --passive-port 30000-30100 \
  --vfs-cache-mode writes \
  --vfs-cache-max-size 5G \
  --dir-cache-time 5m \
  --log-level INFO
```

**Flag FTP utama:**

| Flag | Tujuan |
|------|---------|
| `--addr` | Alamat dan port listen |
| `--user` / `--pass` | Kredensial autentikasi FTP |
| `--passive-port` | Rentang port untuk koneksi mode pasif |
| `--vfs-cache-mode` | `writes` untuk dukungan upload, `full` untuk caching baca/tulis |
| `--dir-cache-time` | Berapa lama daftar direktori di-cache |
| `--read-only` | Mencegah upload dan modifikasi |

**Menghubungkan dari FileZilla atau klien FTP lainnya:**

1. Buka klien FTP Anda.
2. Masukkan host (IP mesin yang menjalankan rclone), port (2121), username, dan password.
3. Hubungkan dan jelajahi penyimpanan cloud Anda seolah-olah itu server FTP tradisional.

**Kasus penggunaan untuk serving FTP:**

- **Integrasi aplikasi lawas:** Aplikasi lama yang hanya mendukung FTP kini dapat mengakses penyimpanan cloud.
- **Upload dari pemindai jaringan:** Konfigurasikan pemindai dokumen untuk mengirim file hasil pindai langsung ke penyimpanan cloud melalui FTP.
- **File drop otomatis:** Siapkan endpoint FTP tulis-saja untuk menerima file dari pihak eksternal.
- **Akses lintas platform:** FTP bekerja pada setiap sistem operasi tanpa perlu menginstal perangkat lunak tambahan.

## Penyetelan Performa untuk Streaming

Streaming media yang lancar membutuhkan penyetelan yang cermat pada cache VFS (Virtual File System) milik rclone dan pengaturan jaringan.

**Memahami mode cache VFS:**

| Mode | Perilaku | Paling Cocok Untuk |
|------|----------|----------|
| `off` | Tanpa caching, streaming langsung | File kecil, koneksi dengan bandwidth tinggi |
| `minimal` | Cache hanya file yang terbuka | Penjelajahan media ringan |
| `writes` | Cache penulisan secara lokal, streaming pembacaan | Penggunaan FTP dengan banyak upload |
| `full` | Caching baca/tulis penuh | Streaming video, pemutaran media |

Untuk streaming media, mode cache `full` hampir selalu menjadi pilihan yang tepat. Ini memastikan pemutaran video tidak tersendat akibat latensi jaringan atau pembatasan API.

**Optimasi untuk streaming video:**

```bash
rclone serve dlna gdrive:/Movies \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --vfs-cache-max-age 72h \
  --buffer-size 64M \
  --vfs-read-chunk-size 32M \
  --vfs-read-chunk-size-limit 256M
```

Penjelasan parameter utama:
- **`--vfs-read-ahead 256M`**: Melakukan prefetch 256 MB data di depan posisi pemutaran saat ini, mencegah buffering selama pemutaran.
- **`--vfs-read-chunk-size 32M`**: Ukuran chunk awal untuk pembacaan. Dimulai dari 32 MB dan berlipat ganda hingga mencapai batas.
- **`--vfs-read-chunk-size-limit 256M`**: Ukuran chunk maksimum. Chunk yang lebih besar berarti lebih sedikit panggilan API tetapi latensi awal yang lebih tinggi.
- **`--buffer-size 64M`**: Buffer dalam memori untuk setiap file yang terbuka.

**Pertimbangan bandwidth:**

Kebutuhan bandwidth streaming video bervariasi secara signifikan tergantung kualitas:

| Kualitas Video | Bitrate | Koneksi Minimum |
|--------------|---------|-------------------|
| 720p | 3-5 Mbps | Direkomendasikan 10 Mbps |
| 1080p | 8-12 Mbps | Direkomendasikan 25 Mbps |
| 4K | 25-40 Mbps | Direkomendasikan 50 Mbps |

Jika koneksi internet Anda atau egress penyedia cloud tidak dapat menopang kecepatan ini, pertimbangkan untuk melakukan transcode media Anda ke bitrate yang lebih rendah sebelum mengunggah, atau gunakan penyedia dengan egress cepat seperti Wasabi atau bucket S3 berbasis CDN.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**Memantau performa streaming:**

Gunakan pemantauan transfer RcloneView untuk mengamati throughput secara real-time dan mengidentifikasi hambatan. Jika Anda melihat jeda yang sering diikuti lonjakan, tingkatkan buffer read-ahead. Jika transfer secara konsisten lambat, hambatannya kemungkinan besar adalah koneksi internet Anda atau batas throughput penyedia cloud.

## Kontrol Akses dan Pengaturan Multi-Pengguna

Untuk lingkungan bersama, Anda perlu mengontrol siapa yang dapat mengakses konten apa.

**Pengaturan multi-pengguna FTP:**

Server FTP rclone mendukung satu pasangan user/password secara langsung. Untuk lingkungan multi-pengguna, jalankan beberapa instance serve pada port yang berbeda:

```bash
# Media keluarga - hanya baca
rclone serve ftp gdrive:/Media/Family \
  --addr :2121 --user family --pass familypass --read-only &

# Akses admin - kontrol penuh
rclone serve ftp gdrive: \
  --addr :2122 --user admin --pass adminpass &
```

**Akses hanya baca:**

Untuk media server, akses hanya baca biasanya sudah tepat:

```bash
rclone serve dlna gdrive:/Media --read-only
rclone serve ftp gdrive:/Media --read-only --user viewer --pass viewerpass
```

**Membatasi ke direktori tertentu:**

Layani hanya subdirektori tertentu untuk membatasi paparan:

```bash
# Hanya serve folder Movies, bukan seluruh drive
rclone serve dlna gdrive:/Media/Movies --name "Movies"

# Serve prefix S3 tertentu
rclone serve ftp s3:media-bucket/public --user public --pass publicpass
```

**Pembatasan tingkat jaringan:**

Bind ke antarmuka tertentu untuk mengontrol akses jaringan:

```bash
# Hanya dapat diakses dari mesin lokal
rclone serve dlna gdrive:/Media --addr 127.0.0.1:7879

# Hanya dapat diakses dari jaringan lokal
rclone serve ftp gdrive: --addr 192.168.1.100:2121 --user admin --pass adminpass
```

## Menjalankan sebagai Layanan Persisten

Untuk media server yang selalu aktif, konfigurasikan rclone serve agar berjalan secara otomatis.

**Layanan systemd di Linux:**

```bash
sudo cat > /etc/systemd/system/rclone-dlna.service << 'EOF'
[Unit]
Description=Rclone DLNA Media Server
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=rclone
ExecStart=/usr/bin/rclone serve dlna gdrive:/Media \
  --name "Cloud Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --log-file /var/log/rclone-dlna.log \
  --log-level INFO
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable rclone-dlna
sudo systemctl start rclone-dlna
```

**Pengaturan layanan di Windows:**

Pada Windows, gunakan NSSM (Non-Sucking Service Manager) atau Task Scheduler untuk menjalankan perintah rclone serve saat startup:

```powershell
# Menggunakan Task Scheduler (jalankan saat login)
schtasks /create /tn "Rclone DLNA" /tr "rclone serve dlna gdrive:/Media --name CloudMedia --vfs-cache-mode full" /sc onlogon
```

**Menjalankan beberapa server secara bersamaan:**

Anda dapat menjalankan server DLNA dan FTP secara bersamaan untuk kompatibilitas maksimum:

```bash
# DLNA untuk smart TV dan media player
rclone serve dlna gdrive:/Media --name "Cloud Media" &

# FTP untuk akses file manager
rclone serve ftp gdrive: --addr :2121 --user admin --pass adminpass &

# HTTP untuk akses browser
rclone serve http gdrive:/Media --addr :8080 --read-only &
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

## Membandingkan Serve vs. Mount

Baik `rclone serve` maupun `rclone mount` membuat penyimpanan cloud dapat diakses secara lokal, tetapi keduanya melayani tujuan yang berbeda.

| Fitur | Serve (DLNA/FTP) | Mount |
|---------|------------------|-------|
| Protokol | DLNA, FTP, HTTP, WebDAV | Filesystem FUSE/WinFSP |
| Kompatibilitas klien | Klien apa pun yang kompatibel dengan protokol | Aplikasi apa pun melalui filesystem |
| Akses jaringan | Tersedia untuk semua perangkat di jaringan | Hanya mesin lokal (secara default) |
| Kompleksitas pengaturan | Perintah sederhana, tanpa driver | Membutuhkan FUSE (Linux/Mac) atau WinFSP (Windows) |
| Dukungan media player | Penemuan DLNA native | Membutuhkan player yang diarahkan ke path mount |
| Beberapa pengguna simultan | Ya, bawaan | Terbatas oleh sharing filesystem |

**Kapan menggunakan serve:**
- Melakukan streaming media ke smart TV, konsol game, atau player berjaringan
- Menyediakan akses FTP untuk aplikasi atau perangkat lawas
- Berbagi file cloud dengan banyak pengguna di jaringan
- Menghindari instalasi driver FUSE/WinFSP

**Kapan menggunakan mount:**
- Mengakses file cloud dari aplikasi desktop yang mengharapkan path lokal
- Mengedit file cloud secara langsung dalam aplikasi office
- Menjalankan skrip yang beroperasi pada path file lokal

Dalam banyak pengaturan, menjalankan serve dan mount secara bersamaan memberi Anda yang terbaik dari kedua dunia.

## Memulai

Rclone serve mengubah penyimpanan cloud Anda dari sekadar arsip pasif menjadi media server aktif dan platform berbagi file. Mulailah dengan server DLNA sederhana yang mengarah ke folder media cloud Anda dan uji pemutaran pada smart TV atau VLC player Anda. Setelah Anda memastikan streaming berjalan andal, tambahkan VFS caching untuk pemutaran yang lebih mulus, siapkan endpoint FTP untuk akses file yang lebih luas, dan konfigurasikan layanan agar berjalan secara otomatis. Dengan RcloneView mengelola remote Anda dan memantau koneksi, Anda memiliki media server berbasis cloud yang lengkap tanpa biaya tambahan selain langganan penyimpanan cloud Anda yang sudah ada.

---

**Panduan Terkait:**
- [Mount Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Jelajahi dan Kelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Pengaturan Koneksi Penyimpanan Remote S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
