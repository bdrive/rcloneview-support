---
slug: backup-dir-versioned-sync-rcloneview
title: "Gunakan Backup Dir untuk Sinkronisasi Cloud Bervensi dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara menggunakan --backup-dir di RcloneView untuk membuat sinkronisasi cloud bervensi. Jaga versi file sebelumnya tetap aman dengan memindahkan file yang tertimpa ke direktori backup."
keywords:
  - rcloneview
  - backup-dir
  - versioned sync
  - cloud backup versioning
  - rclone backup directory
  - safe cloud sync
  - file version history
  - cloud file recovery
  - sync with backup
  - rclone suffix
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gunakan Backup Dir untuk Sinkronisasi Cloud Bervensi dengan RcloneView

> Tidak sengaja menimpa atau menghapus file saat sinkronisasi adalah mimpi buruk bagi setiap pengguna cloud. **RcloneView** membuat sinkronisasi bervensi menjadi mudah dengan dukungan bawaan untuk `--backup-dir`, memastikan Anda tidak pernah kehilangan versi sebelumnya lagi.

Saat Anda menjalankan operasi sinkronisasi standar, file di tujuan yang berbeda dari sumber akan ditimpa, dan file yang sudah tidak ada di sumber akan dihapus. Ini efisien, tetapi juga bersifat destruktif. Jika sebuah file rusak di sumber, atau jika Anda tidak sengaja menghapus sesuatu yang masih Anda butuhkan, perubahan tersebut akan menyebar ke tujuan tanpa cara untuk kembali.

Flag `--backup-dir` mengatasi masalah ini dengan elegan. Alih-alih menghapus file yang tertimpa atau terhapus secara permanen, rclone terlebih dahulu memindahkannya ke direktori backup terpisah. Ini memberi Anda jaring pengaman lengkap: setiap file yang seharusnya hilang akan tetap tersimpan di lokasi yang Anda kendalikan.

RcloneView memungkinkan Anda mengonfigurasi `--backup-dir` melalui antarmuka flag khusus, sehingga Anda mendapatkan seluruh kekuatan sinkronisasi bervensi tanpa harus menghafal sintaks command-line. Dikombinasikan dengan `--suffix` untuk versi bertanda tanggal, Anda dapat membangun sistem versioning file yang ringan hanya dengan menggunakan penyimpanan cloud yang sudah Anda miliki.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Sebenarnya Dilakukan --backup-dir

Ketika operasi sinkronisasi menemukan file di tujuan yang perlu ditimpa atau dihapus, `--backup-dir` mencegat tindakan tersebut. Alih-alih menghancurkan file, rclone memindahkannya ke direktori backup yang ditentukan, sambil mempertahankan struktur jalur relatifnya.

Misalnya, jika sinkronisasi Anda menimpa `documents/report.docx` di tujuan, versi lama akan dipindahkan ke `backup/documents/report.docx`. Hierarki direktori tetap terjaga, sehingga memudahkan Anda menemukan dan memulihkan file tertentu di kemudian hari.

Ini berlaku untuk dua skenario:
- **File yang tertimpa**: Ketika file sumber lebih baru atau berbeda, salinan lama di tujuan dipindahkan ke direktori backup sebelum digantikan oleh versi baru.
- **File yang terhapus**: Ketika sebuah file ada di tujuan tetapi tidak ada di sumber, file tersebut dipindahkan ke direktori backup, bukannya dihapus secara permanen.

## Mengapa Sinkronisasi Bervensi Itu Penting

Operasi sinkronisasi standar mengasumsikan Anda selalu ingin tujuan mencerminkan sumber secara persis. Ini berjalan baik hingga terjadi sesuatu yang salah. Pertimbangkan skenario umum berikut:

- Sebuah file rusak atau terinfeksi ransomware di sumber, dan kerusakan itu menyebar ke backup Anda sebelum Anda menyadarinya.
- Anda tidak sengaja menghapus sebuah folder, dan sinkronisasi terjadwal berikutnya turut menghapusnya dari tujuan.
- Seorang rekan kerja menimpa dokumen bersama, dan versi sebelumnya hilang dari kedua lokasi.

Dengan `--backup-dir`, setiap situasi ini dapat dipulihkan. Versi sebelumnya tersimpan aman di direktori backup Anda, tidak tersentuh oleh operasi sinkronisasi selanjutnya.

## Mengonfigurasi --backup-dir di RcloneView

RcloneView mendukung flag rclone khusus dalam konfigurasi job-nya. Berikut cara menyiapkan sinkronisasi bervensi:

1. Buka **Job Manager** dan buat job sinkronisasi baru atau edit yang sudah ada.
2. Atur remote sumber dan tujuan Anda seperti biasa.
3. Di bagian **Custom Flags**, tambahkan: `--backup-dir remote:backup/2026-04-08`
4. Simpan dan jalankan job tersebut.

Direktori backup bisa berada di remote yang sama dengan tujuan atau di remote yang sepenuhnya berbeda. Menggunakan jalur berbasis tanggal seperti `backup/2026-04-08` menjaga file yang dipindahkan setiap hari tetap terorganisir dalam foldernya masing-masing.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Menggabungkan --backup-dir dengan --suffix untuk Versi Bertanda Tanggal

Untuk versioning yang lebih terperinci, gabungkan `--backup-dir` dengan `--suffix` untuk menambahkan timestamp pada setiap file yang di-backup. Ini mencegah tabrakan nama file ketika file yang sama dimodifikasi dan disinkronkan berkali-kali.

Tambahkan kedua flag di bagian custom flags:

```
--backup-dir remote:backup --suffix .2026-04-08
```

Dengan konfigurasi ini, jika `report.docx` tertimpa, versi lama akan disimpan sebagai `backup/report.docx.2026-04-08`. Jalankan sinkronisasi lagi keesokan harinya dengan suffix yang diperbarui, dan Anda akan mengumpulkan riwayat versi bertanggal tanpa konflik apa pun.

Untuk job otomatis yang berjalan sesuai jadwal, Anda dapat menggunakan suffix dinamis yang terikat pada tanggal eksekusi, sehingga setiap proses menghasilkan backup dengan nama yang unik.

## Contoh Praktis

**Backup harian dengan retensi versi:**
Sinkronkan Google Drive Anda ke Backblaze B2 setiap malam, dengan file yang dipindahkan setiap hari disimpan dalam folder backup bertanggal. Setelah 30 hari, Anda dapat membersihkan direktori backup lama untuk mengelola biaya penyimpanan.

**Perlindungan proyek tim:**
Sinkronkan folder Dropbox bersama ke S3, menggunakan `--backup-dir` untuk menangkap file apa pun yang dihapus atau ditimpa oleh anggota tim. Ini bertindak sebagai jejak audit ringan tanpa memerlukan fitur versioning premium dari penyedia cloud Anda.

**Jaring pengaman migrasi:**
Saat bermigrasi dari satu cloud ke cloud lain, gunakan `--backup-dir` selama sinkronisasi awal untuk menangkap file tujuan yang akan tertimpa. Jika migrasi tidak berjalan sesuai rencana, Anda memiliki titik pemulihan yang lengkap.

## Alur Pemulihan

Memulihkan file dari direktori backup Anda sangat mudah di RcloneView:

1. Buka **Remote Explorer** dan navigasikan ke direktori backup Anda.
2. Telusuri struktur direktori untuk menemukan file yang Anda butuhkan. Hierarki folder asli tetap dipertahankan.
3. Gunakan drag-and-drop atau operasi salin untuk memindahkan file kembali ke lokasi aslinya.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

Karena direktori backup hanyalah folder biasa di remote Anda, Anda juga dapat menelusurinya, mengunduh file, atau bahkan menyinkronkannya ke lokasi lain untuk keperluan pengarsipan.

## Mengelola Penyimpanan Backup Seiring Waktu

Backup bervensi akan terus bertambah seiring waktu, sehingga penting untuk memiliki strategi retensi. Berikut beberapa pendekatannya:

- **Folder berbasis tanggal**: Gunakan jalur direktori backup bertanggal (misalnya, `backup/2026-04-08`) dan secara berkala hapus folder yang lebih lama dari jendela retensi Anda.
- **Pembersihan berbasis suffix**: Saat menggunakan `--suffix`, Anda dapat mengidentifikasi dan menghapus file dengan suffix tanggal lama.
- **Penyimpanan terpisah berbiaya rendah**: Arahkan direktori backup Anda ke penyedia object storage yang terjangkau seperti Wasabi atau Backblaze B2, di mana biaya retensi jangka panjang sangat minim.

Explorer RcloneView memudahkan Anda menelusuri direktori backup dan menghapus versi usang saat Anda siap membebaskan ruang penyimpanan.

## Praktik Terbaik untuk --backup-dir

- Selalu uji konfigurasi `--backup-dir` Anda dengan dry run terlebih dahulu untuk memastikan file diarahkan ke lokasi yang benar.
- Simpan direktori backup di remote yang sama dengan tujuan bila memungkinkan, karena pemindahan dalam remote yang sama bersifat instan dan tidak menggunakan bandwidth.
- Gunakan konvensi penamaan yang konsisten untuk jalur backup Anda sehingga skrip pembersihan otomatis dapat dengan mudah mengidentifikasi versi lama.
- Gabungkan `--backup-dir` dengan `--backup-dir` pada remote yang berbeda untuk data penting, memberi Anda backup lokal untuk pemulihan cepat sekaligus arsip yang terpisah secara geografis.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat job sinkronisasi dengan remote sumber dan tujuan Anda yang sudah dikonfigurasi.
3. Tambahkan `--backup-dir remote:backup/YYYY-MM-DD` di kolom custom flags untuk mengaktifkan sinkronisasi bervensi.
4. Jalankan dry run terlebih dahulu untuk memverifikasi konfigurasi, lalu jalankan job tersebut.

Dengan `--backup-dir` yang telah dikonfigurasi, setiap operasi sinkronisasi menjadi proses yang aman dan dapat dibalik. Anda mendapatkan efisiensi sinkronisasi satu arah dengan ketenangan pikiran bahwa tidak ada yang akan hilang secara permanen.

---

**Panduan Terkait:**

- [Menjelajah dan Mengelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Menjalankan dan Mengelola Job](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
