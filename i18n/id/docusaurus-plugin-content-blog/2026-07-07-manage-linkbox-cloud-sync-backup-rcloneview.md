---
slug: manage-linkbox-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Linkbox — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - kai
description: "Hubungkan penyimpanan cloud Linkbox ke RcloneView untuk pengelolaan file drag-and-drop, pencadangan terjadwal, dan sinkronisasi lintas penyedia dari satu aplikasi desktop."
keywords:
  - Linkbox
  - penyimpanan cloud Linkbox
  - kelola file Linkbox
  - pencadangan Linkbox
  - sinkronisasi Linkbox
  - RcloneView Linkbox
  - pengelola file cloud
  - alternatif klien Linkbox
tags:
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Linkbox — Sinkronisasi dan Pencadangan File dengan RcloneView

> Bawa Linkbox ke dalam alur kerja file harian Anda dengan penjelajah desktop lengkap, pencadangan terjadwal, dan transfer satu klik ke cloud lain mana pun.

Linkbox adalah pilihan yang praktis untuk menyimpan dan membagikan file secara online, tetapi antarmuka webnya tidak dirancang untuk pengelolaan file massal, perbandingan folder, atau tugas pencadangan berulang. RcloneView menambahkan lapisan desktop native di atas Linkbox, memberi Anda penjelajah file yang sesungguhnya, unggahan drag-and-drop, dan sinkronisasi otomatis sehingga Linkbox tidak lagi menjadi silo penyimpanan yang terisolasi dan menjadi bagian dari alur kerja multi-cloud yang nyata.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menambahkan Linkbox sebagai Remote

Buka tab Remote dan klik New Remote untuk memulai wizard pengaturan. RcloneView memandu Anda memilih Linkbox dari daftar penyedia dan memasukkan detail koneksi yang diperlukan, lalu menguji koneksi sebelum menyimpannya. Setelah ditambahkan, Linkbox muncul sebagai tab di panel Explorer Anda seperti remote lain yang telah dikonfigurasi, sehingga Anda dapat menjelajahi folder, melihat pratinjau file, dan memeriksa ukuran tanpa menyentuh tab browser.

Karena RcloneView melakukan mount DAN sinkronisasi lebih dari 90 penyedia dari satu jendela di Windows, macOS, dan Linux, Linkbox berada tepat di samping Google Drive, S3 bucket, atau NAS share Anda dalam tampilan explorer yang sama — tanpa aplikasi terpisah untuk setiap layanan.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Linkbox remote in RcloneView remote setup wizard" class="img-large img-center" />

Setelah terhubung, gunakan Remote Manager untuk meninjau atau mengedit konfigurasi Linkbox kapan saja, dan beralih antar beberapa panel jika Anda membandingkan konten Linkbox dengan remote lain secara berdampingan.

## Mencadangkan Konten Linkbox Secara Otomatis

Mengunggah ulang file ke Linkbox secara manual setiap kali ada perubahan mudah terlupakan. Job Manager RcloneView memungkinkan Anda menentukan tugas Sync, Copy, atau Download yang menarik file baru dan yang berubah dari Linkbox ke drive lokal, SSD eksternal, atau penyedia cloud lain secara berulang. Wizard tugas 4 langkah mencakup pemilihan sumber/tujuan, konkurensi transfer, dan pemfilteran — sehingga Anda misalnya dapat mengecualikan file sementara atau membatasi usia file maksimum sebelum pencadangan dijalankan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a backup job from Linkbox to another cloud destination in RcloneView" class="img-large img-center" />

Jalankan Dry Run terlebih dahulu untuk melihat pratinjau file mana saja yang akan disalin atau dihapus sebelum melakukan transfer sungguhan — berguna saat pertama kali Anda mengarahkan tugas ke folder Linkbox dengan konten yang belum Anda periksa sepenuhnya.

## Menjadwalkan dan Memantau Tugas Linkbox

Untuk pengguna lisensi PLUS, langkah penjadwalan di Job Manager mendukung pengaturan waktu bergaya crontab, sehingga pencadangan Linkbox dapat berjalan setiap malam, mingguan, atau sesuai kadensi apa pun yang cocok dengan kebutuhan retensi Anda, tanpa perlu mengingat untuk memicunya. Pengguna lisensi FREE tetap dapat menjalankan tugas yang sama secara manual atau sebagai eksekusi satu kali kapan pun diperlukan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Linkbox backup job in RcloneView Job Manager" class="img-large img-center" />

Setiap eksekusi dicatat di Job History lengkap dengan waktu mulai, durasi, kecepatan transfer, dan jumlah file, sehingga Anda dapat memastikan pencadangan Linkbox selesai dengan sukses atau menyelidiki transfer yang gagal tanpa harus menelusuri log mentah.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab Remote dan tambahkan Linkbox sebagai remote baru melalui wizard pengaturan.
3. Buat tugas Sync atau Backup yang mengarah dari Linkbox ke tujuan pilihan Anda.
4. Jalankan Dry Run, lalu simpan tugas dan opsional jadwalkan untuk eksekusi berulang.

Setelah Linkbox terhubung ke RcloneView, ia tidak lagi menjadi tujuan terpisah yang harus Anda ingat dan menjadi sekadar folder lain dalam alur kerja cloud terpadu Anda.

---

**Panduan Terkait:**

- [Manage Gofile Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Manage Pixeldrain Storage — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Manage Uptobox Cloud Downloads with RcloneView](https://rcloneview.com/support/blog/manage-uptobox-cloud-downloads-rcloneview)

<CloudSupportGrid />
