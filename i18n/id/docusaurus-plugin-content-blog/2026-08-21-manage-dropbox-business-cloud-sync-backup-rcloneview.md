---
slug: manage-dropbox-business-cloud-sync-backup-rcloneview
title: "Mengelola Penyimpanan Dropbox for Business — Sinkronisasi dan Cadangkan File dengan RcloneView"
authors:
  - casey
description: "Hubungkan Dropbox for Business ke RcloneView untuk penjelajahan file lintas platform, sinkronisasi cloud-ke-cloud, dan pencadangan terjadwal akun tim."
keywords:
  - dropbox for business
  - sinkronisasi dropbox business
  - rcloneview dropbox business
  - pencadangan dropbox business
  - dropbox_business rclone
  - penyimpanan dropbox enterprise
  - gui penyimpanan cloud bisnis
  - sinkronisasi akun tim dropbox
  - manajemen file multi-cloud
  - migrasi dropbox business
tags:
  - RcloneView
  - dropbox
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Penyimpanan Dropbox for Business — Sinkronisasi dan Cadangkan File dengan RcloneView

> Hubungkan akun tim Dropbox for Business ke RcloneView, lalu jelajahi, sinkronkan, dan cadangkan folder tim bersama di samping setiap layanan cloud lain yang Anda kelola.

Akun Dropbox for Business mengatur file secara berbeda dari Dropbox pribadi: folder tim, ruang yang dikelola admin, dan ruang kerja bersama semuanya berada di balik login bisnis. RcloneView terhubung langsung ke akun tim ini, memberi admin IT dan pemimpin tim satu jendela untuk menjelajahi, mentransfer, dan mencadangkan konten bisnis tanpa harus berpindah-pindah antara aplikasi web Dropbox dan klien desktop terpisah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Remote Dropbox for Business

Menambahkan akun Dropbox for Business di RcloneView dimulai dengan cara yang sama seperti koneksi Dropbox pribadi: klik New Remote, pilih Dropbox, lalu selesaikan login OAuth di browser Anda. Perbedaannya hanya satu pengaturan tambahan — mengaktifkan `dropbox_business = true` pada remote — yang memberi tahu koneksi untuk melakukan autentikasi terhadap akun tim, bukan akun individu. Setelah dikonfigurasi, folder tim dari akun bisnis akan muncul di panel Explorer seperti remote lainnya.

Karena RcloneView melakukan mount SEKALIGUS sinkronisasi lebih dari 90 penyedia dari satu jendela di Windows, macOS, dan Linux, seorang admin yang mengelola tenant Dropbox for Business sekaligus layanan cloud departemen lain dapat menjaga semuanya dalam sesi yang sama, alih-alih berpindah-pindah aplikasi terpisah untuk setiap penyedia.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Dropbox for Business remote in RcloneView" class="img-large img-center" />

## Menjelajahi Folder Tim dan Ruang Bersama

Setelah terhubung, panel File Explorer menampilkan struktur folder Dropbox for Business dengan kolom Name, Type, Modified date, dan Size yang sama seperti remote lainnya. Folder tim yang mencakup beberapa departemen mudah dijelajahi melalui folder tree yang dapat dilipat, dan opsi Copy Full Path pada breadcrumb path bar menghasilkan format `remote:path` yang diperlukan untuk skrip atau untuk diteruskan ke rclone Terminal bawaan.

Pemilihan ganda dengan Ctrl+Click atau Shift+Click memudahkan pengambilan folder proyek tertentu dari ruang tim yang besar, alih-alih menangani seluruh akun sekaligus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Dropbox for Business team folders in RcloneView Explorer" class="img-large img-center" />

## Mencadangkan Data Bisnis ke Cloud Kedua

Mengandalkan satu penyedia saja untuk file penting bisnis berisiko, sehingga banyak tim mencerminkan konten Dropbox for Business mereka ke Amazon S3, Backblaze B2, atau cloud lain sebagai salinan sekunder. Wizard Sync 4 langkah dari RcloneView menangani ini secara langsung: pilih remote Dropbox for Business sebagai sumber, pilih remote tujuan, dan pilih sinkronisasi satu arah agar tujuan pencadangan selalu mencerminkan sumber tanpa menimpa apa pun di sisi hulu. Pengaturan filter memungkinkan Anda mengecualikan file media besar atau membatasi pencadangan pada folder di bawah usia tertentu, sehingga tugas tetap fokus pada apa yang benar-benar perlu dilindungi.

Menjalankan Dry Run sebelum sinkronisasi pertama menunjukkan dengan tepat file mana yang akan disalin, yang berguna untuk memverifikasi cakupan sebelum memindahkan data senilai seluruh akun tim.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Dropbox for Business backup job in RcloneView" class="img-large img-center" />

## Mengotomatiskan Pencadangan Berulang

Pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab ke tugas pencadangan Dropbox for Business, sehingga berjalan setiap malam atau setiap minggu tanpa intervensi manual. Job History kemudian mencatat jenis eksekusi, durasi, status, dan total ukuran yang ditransfer untuk setiap eksekusi terjadwal, memberi admin jejak audit yang dapat mereka tinjau tanpa harus menggali log aktivitas Dropbox itu sendiri.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Dropbox baru dan aktifkan pengaturan `dropbox_business` selama konfigurasi.
3. Jelajahi folder tim di panel Explorer dan pastikan akses ke ruang bersama yang Anda butuhkan.
4. Buat tugas Sync untuk mencerminkan data bisnis ke cloud sekunder, dan jadwalkan jika Anda menggunakan lisensi PLUS.

Remote Dropbox for Business yang dikonfigurasi dengan benar menjadikan RcloneView sebagai jaring pengaman praktis untuk data tim yang terlalu sering hanya tersimpan di satu tempat.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Dropbox — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Migrasi Dropbox Business ke Google Workspace — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [Mencadangkan Dropbox ke AWS S3 — Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
