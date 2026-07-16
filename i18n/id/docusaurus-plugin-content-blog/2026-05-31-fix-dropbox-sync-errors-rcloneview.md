---
slug: fix-dropbox-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi Dropbox — Cara Mengatasi Masalah Umum dengan RcloneView"
authors:
  - steve
description: "Mengalami kendala error sinkronisasi Dropbox? Pelajari cara mendiagnosis dan memperbaiki kegagalan sinkronisasi Dropbox yang umum terjadi menggunakan alat troubleshooting bawaan RcloneView."
keywords:
  - fix Dropbox sync errors
  - Dropbox sync not working
  - Dropbox sync failed
  - RcloneView Dropbox troubleshooting
  - Dropbox rate limit error
  - Dropbox file transfer errors
  - cloud sync error fix
  - rclone Dropbox errors
  - Dropbox backup issues
  - resolve cloud sync problems
tags:
  - dropbox
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi Dropbox — Cara Mengatasi Masalah Umum dengan RcloneView

> Ketika sinkronisasi Dropbox gagal secara diam-diam atau menampilkan error yang sulit dipahami, RcloneView memberi Anda visibilitas dan kontrol untuk menemukan sumber masalah dan mengembalikan transfer ke jalur yang benar.

Error sinkronisasi Dropbox lebih sering terjadi daripada yang dibayangkan sebagian besar pengguna — mulai dari token OAuth yang kedaluwarsa dan batas rate API, hingga masalah izin file dan ketidakcocokan konfigurasi. Masalahnya, klien desktop Dropbox hanya memberikan sedikit informasi diagnostik ketika terjadi kesalahan. RcloneView, yang dibangun di atas driver Dropbox rclone yang matang, menampilkan log terperinci, memungkinkan Anda menyesuaikan parameter transfer, dan menyediakan mode dry-run sehingga Anda dapat memverifikasi dengan tepat apa yang akan terjadi sebelum menyentuh data sebenarnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Autentikasi Ulang Remote Dropbox Anda

Penyebab paling umum kegagalan sinkronisasi Dropbox adalah token OAuth yang kedaluwarsa atau dicabut. Dropbox secara berkala membatalkan token — terutama setelah perubahan kata sandi atau tinjauan keamanan. Di RcloneView, buka **Remote Manager** dari tab Remote, pilih remote Dropbox Anda, lalu pilih **Edit**. Dari sana, picu login browser OAuth baru untuk membuat token valid baru secara otomatis.

Untuk akun Dropbox for Business, pastikan konfigurasi remote menyertakan `dropbox_business = true` di pengaturan lanjutan. Tanpa flag ini, folder tim bersama mungkin tampak tidak dapat diakses atau gagal menampilkan daftar file dengan benar. Setelah autentikasi ulang berhasil, jalankan pengujian singkat dengan menelusuri remote di panel Explorer — jika folder termuat, berarti token berfungsi.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring or re-authenticating a Dropbox remote in RcloneView" class="img-large img-center" />

## Sesuaikan Pengaturan Transfer untuk Menghindari Rate Limiting

Dropbox menerapkan batas rate API yang menyebabkan operasi sinkronisasi macet atau gagal ketika terlalu banyak permintaan bersamaan dilakukan. Di wizard job sinkronisasi RcloneView (Langkah 2: Advanced Settings), kurangi **Number of file transfers** menjadi 2 atau 4 saat bekerja dengan folder Dropbox berukuran besar. Ini mengatur laju permintaan API agar tetap dalam ambang batas yang dapat diterima Dropbox dan mencegah kegagalan secara massal.

Pengaturan **Retry entire sync if fails** (default: 3 kali percobaan ulang) menangani error jaringan sementara dan respons rate-limit temporer secara otomatis. Untuk job yang mensinkronkan ratusan file, mempertahankan nilai ini di 3 berarti RcloneView akan mencoba ulang seluruh job sebelum melaporkan kegagalan. Jika error tetap terjadi setelah semua percobaan ulang, **Log tab** di Info View bagian bawah menampilkan output rclone dengan timestamp beserta kode error spesifik — sehingga memudahkan Anda membedakan antara kegagalan autentikasi, timeout jaringan, atau konflik pada tingkat file.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Dropbox sync job with adjusted transfer settings in RcloneView" class="img-large img-center" />

## Gunakan Dry Run untuk Menangkap Masalah Sebelum Terjadi

Sebelum menjalankan sinkronisasi apa pun yang dapat mengubah atau menghapus file di Dropbox, gunakan fitur **Dry Run** dari Job Manager. Dry Run mensimulasikan sinkronisasi secara penuh — menampilkan file mana yang akan disalin dan mana yang akan dihapus — tanpa membuat perubahan nyata apa pun. Bagi tim marketing yang mensinkronkan 50 GB aset kampanye ke Dropbox, dry run yang mengungkap penghapusan tak terduga dapat mencegah kesalahan yang merugikan.

Hasil Dry Run muncul di tab Transferring sebagai pratinjau terperinci pada tingkat file. Jika Anda melihat file yang dilewati atau dihapus secara tidak terduga, tinjau aturan filter Anda di Langkah 3 wizard sinkronisasi. Penyebab umum meliputi batas ukuran file maksimum yang diatur terlalu konservatif, atau filter usia file maksimum yang secara tidak sengaja mengecualikan file yang baru saja dimodifikasi dari transfer.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing file differences before syncing Dropbox in RcloneView" class="img-large img-center" />

## Tinjau Riwayat Job untuk Mendiagnosis Kegagalan Berulang

RcloneView menyimpan riwayat job lengkap untuk setiap operasi sinkronisasi, yang dapat diakses langsung dari Job Manager. Setiap entri riwayat menampilkan jenis eksekusi (manual atau terjadwal), waktu mulai, durasi, kecepatan transfer, jumlah file, ukuran total, dan status akhir — Completed, Errored, atau Canceled. Memfilter berdasarkan rentang tanggal memungkinkan Anda fokus pada kegagalan terbaru dan membandingkannya dengan run yang berhasil.

Ketika error terjadi berulang kali secara konsisten, tab Log memberikan output rclone yang terperinci untuk mengidentifikasi sifat masalah tersebut. Misalnya, sebuah agensi media yang menjalankan pencadangan Dropbox setiap malam dapat membandingkan run gagal hari Senin dengan run sukses hari Selasa untuk melihat apakah masalah tersebut berkaitan dengan file tertentu, kondisi jaringan, atau perubahan izin folder.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dropbox sync job history and error log in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Remote Manager dan lakukan autentikasi ulang remote Dropbox Anda melalui login browser OAuth baru.
3. Edit job sinkronisasi Anda dan turunkan jumlah transfer bersamaan di Advanced Settings untuk mengurangi risiko rate-limit.
4. Jalankan Dry Run untuk melihat pratinjau hasil sinkronisasi sebelum menjalankan job sebenarnya.
5. Tinjau Job History dan tab Log untuk melacak pola error yang terus berulang.

Dengan visibilitas log yang lengkap dan kontrol transfer yang terperinci, RcloneView mengubah troubleshooting Dropbox dari tebak-tebakan menjadi proses diagnostik yang sistematis.

---

**Panduan Terkait:**

- [Perbaiki Bandwidth & Throttle Unggahan Lambat dengan RcloneView](https://rcloneview.com/support/blog/fix-bandwidth-throttle-slow-uploads-rcloneview)
- [Perbaiki Error Izin Ditolak pada Transfer Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-permission-denied-errors-rcloneview)
- [Migrasikan Dropbox ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)

<CloudSupportGrid />
