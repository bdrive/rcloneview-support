---
slug: rcloneview-windows-10-cloud-sync
title: "RcloneView di Windows 10 — Sinkronisasi dan Cadangan Penyimpanan Cloud"
authors:
  - kai
description: "Instal dan jalankan RcloneView di Windows 10 untuk me-mount, menyinkronkan, dan mencadangkan 90+ penyedia penyimpanan cloud dari satu aplikasi desktop."
keywords:
  - RcloneView Windows 10
  - penyimpanan cloud Windows 10
  - mount drive cloud Windows 10
  - perangkat lunak cadangan cloud Windows 10
  - sinkronisasi penyimpanan cloud Windows
  - installer RcloneView Windows
  - manajer file cloud Windows 10
  - multi-cloud Windows 10
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView di Windows 10 — Sinkronisasi dan Cadangan Penyimpanan Cloud

> Windows 10 tetap menjadi sistem harian jutaan desktop bertahun-tahun setelah Windows 11 dirilis, dan RcloneView berjalan penuh di atasnya — fitur mount, sinkronisasi, dan cadangan yang sama, tanpa ada fungsi yang hilang.

Banyak bisnis dan pengguna rumahan masih menjalankan Windows 10, baik karena pilihan, keterbatasan perangkat keras, atau sekadar karena pembaruan belum menjadi prioritas. RcloneView tidak memperlakukan Windows 10 sebagai sistem usang — installer, driver mount, dan seluruh rangkaian fiturnya berperilaku identik dengan build Windows 11, sehingga studio yang menjalankan versi Windows campuran di berbagai mesinnya tidak kehilangan fungsi apa pun pada mesin yang lebih lama. RcloneView me-mount DAN menyinkronkan 90+ penyedia dari satu jendela, dengan lisensi GRATIS, terlepas dari versi Windows yang didukung tempatnya terpasang.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menginstal RcloneView di Windows 10

RcloneView untuk Windows dirilis sebagai satu installer Inno Setup (`setup_rclone_view-{version}.exe`), dibangun untuk arsitektur x86-64, hanya tersedia dari halaman unduhan resmi di rcloneview.com — tidak ada listing di Windows Store atau distribusi melalui package manager. Sebelum menginstal, pastikan Visual C++ 2015-2022 Redistributable sudah ada di mesin tersebut; sebagian besar sistem Windows 10 sudah memilikinya karena perangkat lunak lain, tetapi instalasi baru atau minimal mungkin perlu menambahkannya secara terpisah. Persyaratan sistem RcloneView sendiri mencantumkan Windows Vista sebagai batas bawah praktis, sehingga instalasi Windows 10 yang telah diperbarui sepenuhnya dengan nyaman melampaui batas tersebut.

<img src="/support/images/en/blog/new-remote.png" alt="Menginstal RcloneView di desktop Windows 10" class="img-large img-center" />

Setelah terpasang, RcloneView dilengkapi binary rclone bawaan, sehingga tidak perlu instalasi atau konfigurasi rclone terpisah untuk mulai menghubungkan akun cloud. Aplikasi ini berkomunikasi dengan instance rclone bawaan melalui alamat loopback lokal, dan bilah footer di bagian bawah jendela menampilkan versi rclone dan status koneksi setelah berjalan.

## Me-mount Drive Cloud di Windows 10

File Explorer Windows 10 memperlakukan mount RcloneView sama seperti huruf drive fisik. Baik dari Mount Manager maupun langsung dari toolbar panel sebuah remote, memilih folder lalu memilih Mount akan menetapkan huruf drive (ditetapkan otomatis atau dipilih manual) dan membuatnya dapat dijelajahi seperti disk lokal mana pun. Jenis mount default di Windows adalah cmount, dan opsi seperti mode hanya-baca, tampilan drive jaringan, serta mode cache VFS (off, minimal, writes, atau full) semuanya tersedia persis seperti di Windows 11 — tidak ada yang dikurangi untuk OS yang lebih lama.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Me-mount remote cloud sebagai huruf drive di Windows 10" class="img-large img-center" />

## Menjadwalkan Cadangan Tanpa Task Scheduler Windows

Alih-alih menyusun Task Scheduler Windows dan flag baris perintah rclone secara terpisah, Job Manager RcloneView membangun tugas sinkronisasi, salin, dan cadangan melalui wizard terpandu: pilih sumber dan tujuan, atur pengaturan transfer dan percobaan ulang, terapkan filter berdasarkan ukuran, usia, atau jenis file, dan — di lisensi PLUS — lampirkan jadwal bergaya crontab langsung di dalam aplikasi. Job History kemudian terus mencatat setiap eksekusi dengan status, ukuran yang ditransfer, dan durasi, yang lebih mudah diaudit daripada menggali log peristiwa Task Scheduler.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan tugas cadangan di RcloneView pada Windows 10" class="img-large img-center" />

Satu catatan yang perlu ditandai khusus untuk pengguna Windows 10: pembaruan otomatis dalam aplikasi RcloneView saat ini hanya berjalan di macOS melalui Sparkle. Di Windows, termasuk Windows 10, memeriksa pembaruan akan mengarah ke halaman unduhan alih-alih menginstal secara otomatis, sehingga mengunduh ulang installer secara berkala membuat aplikasi tetap terkini.

## Memulai

1. **Unduh RcloneView** untuk Windows dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Jalankan installer dan pastikan VC++ 2015-2022 Redistributable sudah ada.
3. Tambahkan remote cloud Anda melalui tab Remote > New Remote — penyedia OAuth akan otomatis membuka login browser.
4. Mount sebuah remote sebagai huruf drive atau siapkan tugas Sync pertama Anda di Job Manager.

Mesin Windows 10 tidak perlu terpinggirkan dari alur kerja multi-cloud — RcloneView membawa rangkaian alat mount, sinkronisasi, dan cadangan yang sama seperti pada platform lain yang didukung.

---

**Panduan Terkait:**

- [RcloneView di Windows 11 — Sinkronisasi dan Cadangan Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-windows-11-cloud-sync-backup)
- [Cara Menggunakan RcloneView di Windows Server untuk Cadangan Cloud Otomatis](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [Memperbaiki Konflik Huruf Drive Mount — Pemecahan Masalah Penyimpanan Cloud Windows dengan RcloneView](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
