---
slug: system-tray-background-sync-rcloneview
title: "System Tray dan Sinkronisasi Latar Belakang — Jaga Tugas Cloud Tetap Berjalan di RcloneView"
authors:
  - steve
description: "Pelajari bagaimana integrasi system tray RcloneView menjaga tugas sinkronisasi tetap berjalan di latar belakang, mengelola mount cloud, dan mengirim notifikasi penyelesaian tugas tanpa perlu membuka jendela aplikasi."
keywords:
  - RcloneView system tray background sync
  - cloud sync background mode
  - RcloneView minimize to tray
  - background cloud backup RcloneView
  - RcloneView tray icon jobs
  - cloud sync notifications RcloneView
  - keep cloud sync running background
  - RcloneView continuous backup
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# System Tray dan Sinkronisasi Latar Belakang — Jaga Tugas Cloud Tetap Berjalan di RcloneView

> Integrasi system tray RcloneView memungkinkan Anda meminimalkan aplikasi sambil tetap menjalankan tugas sinkronisasi, mount drive cloud, dan notifikasi — tanpa mengganggu alur kerja Anda.

Sebagian besar alat sinkronisasi cloud mengharuskan jendela aplikasi tetap terbuka untuk memastikan tugas sedang berjalan. Dukungan system tray RcloneView menghilangkan batasan tersebut. Setelah dikonfigurasi, Anda dapat meminimalkan RcloneView sepenuhnya, dan tugas sinkronisasi terjadwal, transfer aktif, serta drive cloud yang di-mount akan terus berjalan di latar belakang. Ikon tray memberikan akses cepat ke semuanya tanpa memenuhi ruang kerja Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengaktifkan Mode Latar Belakang dan System Tray

Secara default, RcloneView dapat dikonfigurasi untuk meminimalkan ke system tray daripada keluar sepenuhnya saat Anda menutup jendela. Di **Settings tab → General**, cari opsi **Quit on close**. Nonaktifkan opsi ini agar RcloneView berpindah ke system tray saat Anda mengklik tombol X, alih-alih keluar sepenuhnya.

Anda juga dapat mengaktifkan **Launch at login** agar RcloneView otomatis berjalan bersama sistem dan langsung mulai memantau tugas terjadwal. Gabungkan dengan **Start minimized** agar RcloneView tetap berjalan diam-diam di latar belakang sejak komputer Anda dinyalakan.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView running in background with system tray active" class="img-large img-center" />

## Mengelola Mount Cloud dari Tray

Salah satu fitur tray yang paling berguna adalah pengelolaan mount secara cepat. Klik kanan pada ikon tray RcloneView untuk melihat daftar semua mount cloud yang telah dikonfigurasi beserta status terkininya (mounted atau unmounted). Klik entri mana pun untuk mengubah status mount-nya — me-mount drive cloud sebagai volume lokal atau meng-unmount-nya — tanpa perlu membuka jendela utama.

Fitur ini sangat berguna bagi para profesional yang menjaga beberapa drive cloud tetap ter-mount sepanjang hari. Seorang developer misalnya dapat memiliki S3 bucket yang di-mount sebagai network drive, mount Google Drive untuk akses dokumen, dan mount NAS untuk transfer file lokal. Tray memberikan kontrol instan atas semuanya.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Quick access to cloud mounts via system tray in RcloneView" class="img-large img-center" />

## Notifikasi Penyelesaian Tugas

Saat tugas sinkronisasi selesai — baik yang terjadwal maupun yang dijalankan secara manual — RcloneView dapat menampilkan notifikasi desktop yang menunjukkan nama tugas, durasi, dan status akhirnya. Aktifkan fitur ini di **Settings tab → Interfaces & Notifications → Show sync completion notification**.

Artinya, Anda dapat memulai tugas pencadangan besar semalaman, meminimalkan RcloneView ke tray, lalu menerima notifikasi desktop saat tugas selesai. Jika tugas mengalami error, Anda akan langsung mengetahuinya.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing background sync completions in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Di **Settings → General**, nonaktifkan **Quit on close** dan aktifkan **Launch at login**.
3. Konfigurasikan tugas sinkronisasi atau tugas terjadwal seperti biasa.
4. Minimalkan RcloneView — tugas dan mount akan terus berjalan di latar belakang.

Setelah dikonfigurasi, RcloneView berfungsi layaknya layanan latar belakang yang senyap untuk penyimpanan cloud Anda, tanpa mengharuskan Anda membuka jendela aplikasi.

---

**Panduan Terkait:**

- [Otomatisasi Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Notifikasi Peringatan Saat Sinkronisasi Selesai — RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Notifikasi Tugas Email SMTP di RcloneView](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />
