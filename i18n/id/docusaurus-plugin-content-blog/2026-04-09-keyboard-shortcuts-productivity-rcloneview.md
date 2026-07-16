---
slug: keyboard-shortcuts-productivity-rcloneview
title: "Pintasan Keyboard dan Tips Produktivitas RcloneView"
authors:
  - tayson
description: "Kuasai pintasan keyboard dan tips produktivitas RcloneView untuk menjelajahi penyimpanan cloud lebih cepat, mengelola transfer secara efisien, dan menyederhanakan operasi file sehari-hari."
keywords:
  - rcloneview
  - pintasan keyboard
  - hotkey rcloneview
  - tips produktivitas
  - pintasan file manager
  - alur kerja rcloneview
  - tips file manager cloud
  - navigasi rcloneview
  - tips power user
  - efisiensi rcloneview
tags:
  - feature
  - tips
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Pintasan Keyboard dan Tips Produktivitas RcloneView

> Power user tahu bahwa pintasan keyboard dapat memangkas waktu manajemen file hingga separuhnya. Sistem pintasan RcloneView memberi Anda akses cepat ke navigasi, seleksi, transfer, dan manajemen job tanpa harus menyentuh mouse.

Explorer dua panel RcloneView dirancang untuk operasi file yang efisien di berbagai penyedia cloud. Meskipun GUI-nya sepenuhnya dapat dinavigasi dengan klik mouse, mempelajari pintasan keyboard akan mengubah alur kerja Anda — terutama saat mengelola ribuan file di banyak remote. Panduan ini membahas pintasan penting dan tips alur kerja yang diandalkan pengguna RcloneView berpengalaman setiap hari.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pintasan Navigasi

Navigasi yang efisien adalah fondasi manajemen file yang cepat. Pintasan berikut memungkinkan Anda berpindah antar panel, mengganti remote, dan menjelajahi struktur folder tanpa mengklik:

### Manajemen Panel

- **Tab**: Beralih fokus antara panel kiri dan kanan. Ini adalah pintasan yang paling sering digunakan di RcloneView — memungkinkan Anda berpindah antara sumber dan tujuan tanpa memindahkan tangan dari keyboard.
- **Enter**: Membuka folder atau file yang dipilih. Untuk folder, ini akan masuk ke dalamnya. Untuk file, ini memicu aksi default.
- **Backspace / Alt+Up**: Naik satu level direktori di panel yang sedang aktif.

### Seleksi File

- **Ctrl+A**: Memilih semua file di panel yang sedang aktif. Berguna untuk operasi massal seperti menyalin seluruh isi folder.
- **Shift+Klik**: Memilih rentang file antara file yang terakhir dipilih dan file yang diklik.
- **Ctrl+Klik**: Mengaktifkan/menonaktifkan seleksi file individual tanpa membatalkan seleksi file lain. Bangun seleksi multi-file di antara item yang tidak berurutan.

## Pintasan Operasi File

Setelah Anda memilih file, pintasan berikut menjalankan operasi dengan cepat:

- **Ctrl+C**: Menyalin file yang dipilih ke clipboard (untuk ditempel ke panel lainnya).
- **Ctrl+X**: Memotong file yang dipilih (operasi pemindahan).
- **Ctrl+V**: Menempel file dari clipboard ke lokasi panel yang sedang aktif.
- **Delete / Del**: Menghapus file yang dipilih di remote. RcloneView akan meminta konfirmasi sebelum penghapusan.
- **F2**: Mengganti nama file atau folder yang dipilih.
- **Ctrl+Shift+N**: Membuat folder baru di lokasi panel yang sedang aktif.

## Pintasan Perbandingan dan Sinkronisasi

Fitur perbandingan dan sinkronisasi RcloneView memiliki pintasan tersendiri:

- **Tombol/pintasan Compare**: Meluncurkan perbandingan folder antara panel kiri dan kanan. Perbandingan ini menyoroti file yang unik di masing-masing sisi, file yang berbeda, dan file yang identik.
- **Pintasan Sync**: Memulai sinkronisasi dari kiri ke kanan atau kanan ke kiri langsung dari toolbar atau keyboard.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Keyboard-driven folder comparison in RcloneView" class="img-large img-center" />

## Pencarian dan Filter

- **Ctrl+F**: Membuka bilah pencarian/filter di panel yang sedang aktif. Ketikkan pola nama file untuk menyaring file yang ditampilkan. Ini sangat berguna di folder dengan ratusan file — ketikkan beberapa karakter untuk mempersempit daftar secara instan.
- **Esc**: Menutup bilah pencarian/filter dan mengembalikan daftar file lengkap.

## Tips Produktivitas

### Tip 1: Beri Nama Remote yang Deskriptif

Beri nama remote berdasarkan tujuan penggunaannya, bukan penyedianya — misalnya "Client-A-Drive" alih-alih "Google-Drive-2". Jika Anda memiliki 10+ remote, nama yang deskriptif menghemat waktu saat mencari remote yang tepat di dropdown.

### Tip 2: Manfaatkan Tata Letak Dua Panel

Simpan remote yang paling sering digunakan di panel kiri dan ganti panel kanan sesuai kebutuhan. Misalnya, selalu simpan tujuan pencadangan Anda (Backblaze B2, S3) di panel kiri dan muat berbagai remote sumber di panel kanan. Ini menciptakan model spasial yang konsisten — "kiri adalah pencadangan, kanan adalah sumber" — yang lama-lama menjadi otomatis.

### Tip 3: Sematkan Path yang Sering Digunakan

Jika Anda berulang kali menavigasi ke folder yang sama dan letaknya dalam, buat bookmark atau alias remote yang langsung menunjuk ke sana. Alih-alih menavigasi `remote:/projects/2026/client-a/deliverables/` setiap kali, buat alias remote bernama "Client-A-Deliverables" yang langsung terbuka ke path tersebut.

### Tip 4: Gunakan Dry Run Sebelum Sinkronisasi

Sebelum menjalankan job sinkronisasi pada data produksi, selalu pratinjau dengan dry run terlebih dahulu. Ini menunjukkan dengan tepat apa yang akan ditransfer, dihapus, atau dilewati — tanpa benar-benar melakukan perubahan. Tangkap kesalahan sebelum terjadi.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a job efficiently with keyboard shortcuts in RcloneView" class="img-large img-center" />

### Tip 5: Operasi Batch dengan Job Queue

Alih-alih menjalankan transfer satu per satu, antrekan beberapa job sekaligus. Siapkan penyalinan dari Remote A ke B, lalu sinkronisasi dari C ke D, dan biarkan berjalan secara berurutan. Job queue menangani urutan eksekusi sementara Anda melanjutkan pekerjaan lain.

### Tip 6: Pantau Tanpa Mengganggu

Beralih ke tampilan pemantauan transfer untuk memeriksa progres tanpa menghentikan navigasi Anda. RcloneView menampilkan kecepatan transfer secara real-time, progres per file, dan estimasi waktu penyelesaian. Jeda atau batalkan transfer individual tanpa memengaruhi transfer lain dalam antrean.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring transfers while navigating in RcloneView" class="img-large img-center" />

### Tip 7: Gunakan Drag and Drop untuk Transfer Cepat

Untuk transfer sekali pakai, drag and drop adalah metode tercepat. Pilih file di satu panel dan seret ke panel lainnya. Ini berfungsi di antara dua remote mana pun — cloud ke cloud, lokal ke cloud, atau cloud ke lokal.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop between cloud providers in RcloneView" class="img-large img-center" />

### Tip 8: Tinjau Riwayat Job Secara Rutin

Panel riwayat job mencatat setiap operasi beserta statistiknya. Tinjau secara berkala untuk memastikan job terjadwal berjalan dengan sukses, periksa kecepatan transfer, dan identifikasi kesalahan yang mungkin terjadi. Kebiasaan ini menangkap masalah sejak dini — sebelum pencadangan yang gagal berubah menjadi pencadangan yang terlewat.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history for productivity insights in RcloneView" class="img-large img-center" />

## Membangun Muscle Memory

Cara tercepat untuk menghafal pintasan adalah dengan menggunakannya secara sengaja selama satu minggu. Setiap kali Anda hendak menggunakan mouse untuk berpindah panel, berhenti dan tekan Tab sebagai gantinya. Setiap kali Anda klik kanan untuk menyalin, gunakan Ctrl+C sebagai gantinya. Setelah satu minggu, pintasan-pintasan ini akan menjadi otomatis dan kecepatan manajemen file Anda meningkat secara nyata.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Siapkan remote Anda dengan nama yang deskriptif.
3. Latih pintasan navigasi (Tab, Enter, Backspace) hingga menjadi otomatis.
4. Gunakan Ctrl+F untuk menyaring folder besar alih-alih menggulir.
5. Manfaatkan dry run, job queue, dan tinjauan riwayat untuk operasi yang lebih meyakinkan.

Pintasan keyboard dan kebiasaan alur kerja akan terakumulasi seiring waktu. Beberapa detik yang dihemat per operasi akan bertambah menjadi berjam-jam yang dihemat per bulan ketika Anda mengelola file di berbagai penyedia cloud setiap hari.

---

**Panduan Terkait:**

- [Menjelajahi dan Mengelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Drag & Drop file](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Menjalankan & Mengelola Job](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
