---
slug: dry-run-preview-cloud-sync-rcloneview
title: "Pratinjau Dry Run — Uji Sinkronisasi Cloud Sebelum Menerapkan Perubahan di RcloneView"
authors:
  - tayson
description: "Gunakan mode dry run RcloneView untuk melihat pratinjau file mana yang akan disalin atau dihapus sebelum sinkronisasi cloud dijalankan — pemeriksaan keamanan penting untuk transfer besar atau sensitif."
keywords:
  - dry run cloud sync
  - test sync before running
  - RcloneView dry run
  - preview cloud sync changes
  - simulate cloud backup
  - cloud sync safety check
  - rclone dry run GUI
  - avoid accidental file deletion
  - cloud sync simulation
  - verify sync before commit
tags:
  - feature
  - tips
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Pratinjau Dry Run — Uji Sinkronisasi Cloud Sebelum Menerapkan Perubahan di RcloneView

> Sebelum menyinkronkan data sebesar terabyte atau menghapus file dari tujuan, gunakan mode dry run RcloneView untuk melihat pratinjau setiap perubahan yang direncanakan — tanpa memindahkan satu file pun.

Salah satu kesalahan paling mahal dalam alur kerja sinkronisasi cloud adalah menyadari belakangan bahwa sebuah job telah menghapus file penting, menimpa versi yang lebih baru, atau menarik masuk ribuan file yang sebenarnya tidak dimaksudkan untuk disertakan. Fitur dry run bawaan RcloneView menghilangkan risiko ini sepenuhnya. Dengan mensimulasikan operasi sinkronisasi sebelum dieksekusi, Anda dapat meninjau dengan tepat file mana yang akan disalin dan file mana yang akan dihapus, sehingga Anda memiliki keyakinan penuh terhadap konfigurasi job sebelum transfer sebenarnya dimulai. Hal ini sangat berguna saat menyiapkan job baru untuk pertama kalinya atau setelah menyesuaikan aturan filter pada job yang sudah ada.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Ditampilkan oleh Dry Run

Saat Anda menjalankan dry run di RcloneView, mesin job menjalankan logika sinkronisasi secara penuh terhadap sumber dan tujuan yang telah dikonfigurasi, tetapi tidak melakukan operasi file yang sebenarnya. Hasilnya adalah pratinjau rinci dengan dua kategori penting: **file yang akan disalin** dari sumber ke tujuan, dan **file yang akan dihapus** dari tujuan agar sesuai dengan sumber. Anda dapat menggulir seluruh daftar operasi dan memverifikasi setiap entri sebelum menyetujui apa pun.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing planned file operations in a dry run simulation in RcloneView" class="img-large img-center" />

Hal ini paling penting dalam job sinkronisasi satu arah, di mana tujuan diubah agar mencerminkan sumber secara persis. Jika sebuah file baru saja dihapus dari folder sumber tetapi Anda masih membutuhkannya di tujuan, dry run mengungkap rencana penghapusan tersebut sebelum benar-benar terjadi. Sebagai contoh, sebuah firma hukum yang melakukan pencadangan 500.000 dokumen kasus ke Amazon S3 mendapatkan manfaat besar dari memverifikasi setiap batch terjadwal sebelum dieksekusi, sehingga terhindar dari kehilangan data yang tidak disengaja.

## Cara Menjalankan Dry Run di RcloneView

Menggunakan dry run di RcloneView sangatlah mudah. Pada **Job Manager**, buat atau buka job sinkronisasi lalu konfigurasikan sumber, tujuan, serta opsi pemfilteran seperti pengecualian jenis file, ukuran file maksimum, atau batas kedalaman folder. Saat siap untuk menguji, pilih opsi **Dry Run** alih-alih eksekusi biasa. RcloneView melakukan simulasi dan menampilkan daftar lengkap operasi yang direncanakan pada tab Transferring — tidak ada data yang dipindahkan hingga Anda secara sengaja memulai eksekusi sebenarnya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a dry run simulation for a cloud sync job in RcloneView" class="img-large img-center" />

Setelah meninjau hasil dry run, Anda dapat menyempurnakan pengaturan filter dan mengulangi simulasi sebanyak yang diperlukan. Hanya setelah daftar operasi yang direncanakan sesuai persis dengan ekspektasi Anda, barulah Anda memicu sinkronisasi yang sebenarnya. Pendekatan berulang ini sangat berguna ketika bekerja dengan aturan filter yang kompleks di seluruh struktur direktori besar yang mencakup beberapa penyedia cloud.

## Memeriksa Hasil Dry Run di Riwayat Job

RcloneView mencatat setiap dry run pada tampilan **Job History**, ditandai dengan jelas sebagai eksekusi simulasi bersama dengan eksekusi job yang sebenarnya. Anda dapat meninjau jumlah file yang disimulasikan, total ukuran yang diproyeksikan, waktu yang berlalu, serta peringatan atau kesalahan yang muncul — memberi Anda gambaran lengkap tentang perilaku job sebelum menerapkannya.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dry run simulation recorded in RcloneView job history with status details" class="img-large img-center" />

Bagi tim yang menjalankan pencadangan terjadwal berulang, melakukan dry run setelah setiap perubahan konfigurasi adalah langkah keamanan yang wajib dilakukan. Langkah ini tidak memakan biaya apa pun — tidak ada data yang ditransfer, tidak ada penyimpanan yang digunakan — tetapi dapat mencegah kesalahan yang sulit dibatalkan, yang jika tidak diperiksa baru akan terlihat setelah sinkronisasi selesai.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Home tab > Sync** dan konfigurasikan job sinkronisasi baru dengan sumber dan tujuan Anda.
3. Pilih mode **Dry Run** pada Job Manager untuk melihat pratinjau semua operasi file yang direncanakan.
4. Tinjau daftar salin dan hapus, sesuaikan filter jika diperlukan, lalu jalankan sinkronisasi sebenarnya dengan percaya diri.

Dry run adalah kebiasaan paling sederhana yang membedakan operasi cloud yang berhati-hati dan dapat dibatalkan dari kejutan-kejutan yang merugikan.

---

**Panduan Terkait:**

- [Aturan Filter dan Sinkronisasi Selektif dengan RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Migrasi Cloud Terverifikasi Checksum dengan RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Otomatisasi Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
