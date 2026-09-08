---
slug: rcloneview-kali-linux-cloud-sync
title: "RcloneView di Kali Linux — Sinkronisasi dan Pencadangan Penyimpanan Cloud"
authors:
  - jay
description: "Instal RcloneView di Kali Linux untuk me-mount, menyinkronkan, dan mengenkripsi penyimpanan cloud untuk bukti pengujian penetrasi, laporan, dan data yang ditangkap."
keywords:
  - RcloneView Kali Linux
  - penyimpanan cloud Kali Linux
  - sinkronisasi cloud Kali Linux
  - mount drive cloud Kali Linux
  - pencadangan cloud berbasis Debian
  - enkripsi pencadangan cloud pentest
  - instalasi RcloneView Linux
  - alat pencadangan Kali Linux
  - aplikasi sinkronisasi cloud GTK
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView di Kali Linux — Sinkronisasi dan Pencadangan Penyimpanan Cloud

> Mount, sinkronkan, dan enkripsi penyimpanan cloud di Kali Linux tanpa meninggalkan alur kerja desktop XFCE yang sudah ada.

Kali Linux adalah distribusi berbasis Debian yang paling sering digunakan untuk pengujian keamanan, dan pekerjaan pengujian penetrasi menghasilkan aliran tetap berupa tangkapan layar, hasil tangkapan paket, dan laporan yang perlu segera dipindahkan dari disk lokal. RcloneView memberi pengguna Kali cara grafis untuk menghubungkan 90+ penyedia cloud, me-mount-nya sebagai drive lokal, dan menjalankan pekerjaan sinkronisasi terjadwal tanpa menulis perintah rclone secara manual di terminal. Karena Kali dilengkapi desktop X11/Wayland penuh secara default, GUI RcloneView berjalan dengan cara yang sama seperti pada distribusi keluarga Debian lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menginstal RcloneView di Kali Linux

Karena Kali dibangun di atas Debian, paket `.deb` resmi dari [rcloneview.com](https://rcloneview.com/src/download.html) terinstal dengan bersih menggunakan `dpkg -i` diikuti dengan `apt-get install -f` untuk menyelesaikan dependensi. RcloneView memerlukan GTK+ 3.0 dan salah satu dari `libayatana-appindicator3-1` atau `libappindicator3-1` untuk ikon system tray, ditambah `fuse3` jika Anda berencana me-mount remote sebagai drive lokal. Tidak ada repositori AUR, Snap, Flatpak, atau APT untuk RcloneView — file `.deb` adalah satu-satunya jalur instalasi yang didukung di Kali, jadi abaikan daftar paket pihak ketiga mana pun yang mengklaim sebaliknya.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

RcloneView hadir dengan binary rclone bawaan, jadi tidak ada yang perlu dikonfigurasi tambahan saat pertama kali dijalankan — aplikasi ini berkomunikasi dengannya secara otomatis melalui `127.0.0.1:5582`.

## Me-mount Penyimpanan Cloud untuk Pekerjaan Lapangan

Setelah remote terhubung, pilih di panel Explorer dan klik ikon Mount pada toolbar panel untuk menampilkannya sebagai drive lokal melalui `nfsmount` di Linux. Ini berguna untuk meninjau bukti yang tersimpan di folder Google Drive atau Box bersama langsung dari alat lokal tanpa harus mengunduh seluruh kumpulan data terlebih dahulu. Mode baca-saja tersedia dalam konfigurasi mount untuk pekerjaan yang mengharuskan Anda menelusuri tanpa risiko mengubah file sumber.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a remote folder from the RcloneView Explorer panel" class="img-large img-center" />

## Mengenkripsi dan Mengotomatiskan Pencadangan

Data pengujian penetrasi yang sensitif harus dienkripsi sebelum meninggalkan mesin. Remote virtual Crypt milik RcloneView membungkus remote yang sudah ada sehingga nama file dan isinya dienkripsi sebelum diunggah, dan wizard sinkronisasi 4 langkah yang sama yang digunakan untuk transfer biasa juga berfungsi pada lapisan terenkripsi tersebut. Anda dapat menghubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, sehingga salinan terenkripsi di luar lokasi tidak memerlukan paket berbayar. Penjadwalan bergaya crontab untuk pencadangan tanpa pengawasan adalah fitur lisensi PLUS.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring encrypted sync job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) — ambil `.deb` untuk x86_64 atau aarch64.
2. Instal dengan `dpkg -i rclone_view-*.deb && apt-get install -f` untuk menarik dependensi GTK+3, appindicator, dan FUSE.
3. Tambahkan remote cloud Anda, dan untuk data sensitif, bungkus dengan remote Crypt sebelum menjalankan sinkronisasi pertama Anda.
4. Periksa Job History setelah setiap proses untuk mengonfirmasi jumlah transfer dan menangkap kesalahan sejak dini.

Instalasi Kali dengan RcloneView berarti artefak pengujian penetrasi dapat dipindahkan dari disk lokal dengan cepat, terenkripsi, dan tanpa pernah meninggalkan desktop yang sudah Anda gunakan.

---

**Panduan Terkait:**

- [RcloneView di Debian Linux — Sinkronisasi dan Pencadangan Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Menghubungkan Server SFTP Apa Pun ke RcloneView — Sinkronkan Server Jarak Jauh dengan Penyimpanan Cloud](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Memperbaiki Firewall dan Antivirus yang Memblokir Sinkronisasi Cloud — Selesaikan Kesalahan Koneksi dengan RcloneView](https://rcloneview.com/support/blog/fix-firewall-antivirus-blocking-cloud-sync-rcloneview)

<CloudSupportGrid />
