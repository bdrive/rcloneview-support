---
slug: multi-window-parallel-explorer-rcloneview
title: "Dukungan Multi-Window — Kelola Beberapa Penyimpanan Cloud Secara Berdampingan di RcloneView"
authors:
  - tayson
description: "Gunakan fitur Multi-Window RcloneView untuk membuka jendela independen untuk tugas penyimpanan cloud yang berbeda. Kelola Google Drive, S3, dan OneDrive secara paralel di jendela terpisah."
keywords:
  - RcloneView multi-window
  - multiple windows cloud storage
  - parallel cloud management
  - RcloneView PLUS feature
  - cloud storage multi-window
  - side by side cloud management
  - RcloneView independent windows
  - cloud file manager multiple windows
  - RcloneView productivity
  - multi-window cloud sync
tags:
  - feature
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dukungan Multi-Window — Kelola Beberapa Penyimpanan Cloud Secara Berdampingan di RcloneView

> Fitur Multi-Window RcloneView (lisensi PLUS) membuka jendela aplikasi independen sehingga Anda dapat mengelola tugas penyimpanan cloud yang berbeda secara bersamaan tanpa perlu berpindah konteks.

Panel Explorer RcloneView sudah mendukung 1 hingga 4 panel dalam satu jendela — berguna untuk penelusuran berdampingan dan transfer drag-and-drop. Namun untuk alur kerja kompleks yang melibatkan beberapa tugas berbeda — memantau migrasi yang sedang berjalan di satu tampilan sambil menelusuri cloud lain di tampilan berbeda, atau menjalankan perbandingan folder sambil menyiapkan pekerjaan sinkronisasi baru — Multi-Window membuka jendela RcloneView yang sepenuhnya independen dan beroperasi tanpa saling mengganggu. Fitur ini tersedia dengan lisensi PLUS.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cara Kerja Multi-Window

Setiap jendela baru yang dibuka melalui Multi-Window merupakan instance RcloneView yang sepenuhnya independen dengan panel Explorer, tab Transferring, dan status miliknya sendiri. Perubahan pada satu jendela tidak memengaruhi jendela lainnya. Jendela-jendela berkomunikasi melalui mekanisme IPC internal RcloneView, tetapi status penelusuran file dan operasi yang aktif tetap terisolasi.

Untuk membuka jendela baru, klik tombol **New Window** di tab Home. Jendela baru terbuka dengan status default yang sama seperti jendela utama — Anda kemudian dapat menavigasinya ke remote yang berbeda atau memulai pekerjaan berbeda secara independen. Posisi dan ukuran jendela disimpan otomatis antar sesi, sehingga tata letak multi-window Anda tetap terjaga saat Anda membuka RcloneView berikutnya.

<img src="/support/images/en/blog/new-remote.png" alt="Opening a new independent window in RcloneView" class="img-large img-center" />

## Alur Kerja Multi-Window Praktis

**Penelusuran paralel antar penyedia cloud:** Buka Window 1 untuk menelusuri bucket Amazon S3 Anda sementara Window 2 menampilkan Google Drive Anda. Tarik dan lepas file antar jendela untuk memicu penyalinan lintas penyedia, atau pantau isi kedua penyedia secara bersamaan selama migrasi.

**Pemantauan pekerjaan bersamaan dengan penelusuran file:** Biarkan Window 1 menampilkan tab Transferring untuk melihat progres pekerjaan aktif sementara Window 2 memungkinkan Anda menelusuri cloud lain atau menyiapkan pekerjaan berikutnya — tanpa perlu berpindah tab atau mengganggu tampilan pemantauan Anda.

**Perbandingan folder di jendela khusus:** Jalankan operasi Folder Compare berskala besar di Window 1 (yang mungkin memakan waktu untuk folder cloud besar) sambil terus bekerja dengan file di Window 2. Perbandingan berjalan secara independen tanpa menghambat aktivitas lain Anda.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Running folder comparison in one window while browsing another in RcloneView" class="img-large img-center" />

**Alur kerja multi-pengguna atau multi-proyek:** Profesional yang mengelola penyimpanan cloud untuk beberapa klien atau proyek dapat mendedikasikan satu jendela untuk masing-masing, menjaga tampilan spesifik konteks tetap terbuka secara bersamaan alih-alih berulang kali berpindah bolak-balik antar remote.

## Menggabungkan Multi-Window dengan Tata Letak Panel

Di dalam setiap jendela, tata letak panel (1 hingga 4 panel, pembagian horizontal atau vertikal) dapat dikonfigurasi secara independen melalui tab Settings > Layout / View count. Pengaturan multi-window dengan 2 jendela yang masing-masing berisi 2 panel secara efektif memberi Anda empat panel Explorer yang berjalan bersamaan di dua ruang kerja yang terorganisir.

Kombinasi ini sangat berguna untuk alur kerja sinkronisasi: Window 1 menampilkan panel sumber dan tujuan dengan pekerjaan sinkronisasi yang sedang berlangsung; Window 2 menampilkan pasangan sumber-tujuan kedua untuk pekerjaan sinkronisasi yang berbeda. Kedua pekerjaan berjalan secara paralel tanpa berbagi status tampilan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multiple parallel sync operations in RcloneView multi-window mode" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) dan aktifkan lisensi PLUS.
2. Klik tombol **New Window** di tab Home untuk membuka jendela kedua yang independen.
3. Navigasikan setiap jendela ke remote atau tugas yang berbeda untuk bekerja secara paralel.
4. Sesuaikan jumlah panel per jendela di Settings > Layout untuk tata letak paling efisien sesuai alur kerja Anda.

Multi-Window mengubah RcloneView dari pengelola file bertugas tunggal menjadi ruang kerja paralel bagi profesional penyimpanan cloud yang mengelola beberapa penyedia, proyek, atau operasi berkelanjutan secara bersamaan.

---

**Panduan Terkait:**

- [Tips Produktivitas Explorer Two-Pane untuk RcloneView](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)
- [Kelola Beberapa Akun Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [Satukan Semua Cloud — Kelola Google Drive, Dropbox, dan OneDrive](https://rcloneview.com/support/blog/unify-all-clouds-manage-google-drive-dropbox-onedrive)

<CloudSupportGrid />
