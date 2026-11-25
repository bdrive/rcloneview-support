---
slug: fix-system-junk-files-ds-store-thumbs-db-cloud-sync-rcloneview
title: "Atasi File .DS_Store dan Thumbs.db yang Mengotori Sinkronisasi Cloud — Kecualikan File Sistem dengan RcloneView"
authors:
  - morgan
description: "Cegah file .DS_Store, Thumbs.db, dan desktop.ini mengotori pencadangan cloud Anda. Kecualikan file sampah sistem operasi dari tugas sinkronisasi dengan filter RcloneView."
keywords:
  - file ds_store sinkronisasi cloud
  - thumbs.db penyimpanan cloud
  - kecualikan file sistem dari sinkronisasi
  - desktop.ini pencadangan cloud
  - rclone kecualikan ds_store
  - filter kustom RcloneView
  - bersihkan file sampah sinkronisasi cloud
  - file sampah sinkronisasi cloud lintas platform
  - rclone filter file tersembunyi
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cleanup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Atasi File .DS_Store dan Thumbs.db yang Mengotori Sinkronisasi Cloud — Kecualikan File Sistem dengan RcloneView

> Jauhkan file sampah sistem operasi dari folder cloud Anda agar setiap sinkronisasi hanya membawa file yang benar-benar digunakan orang.

Buka folder cloud bersama yang disinkronkan oleh tim campuran Mac dan Windows, dan biasanya Anda akan menemukan tamu tak diundang yang sama di hampir setiap direktori: `.DS_Store` dari Finder macOS, serta `Thumbs.db` dan `desktop.ini` dari Windows Explorer. File-file ini menambah kebisingan pada daftar file, menggelembungkan jumlah file, dan muncul sebagai file "berbeda" setiap kali dua komputer menyentuh folder yang sama. RcloneView memungkinkan Anda mengecualikannya dari tugas sinkronisasi dan membersihkan salinan yang sudah terlanjur masuk ke cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa File Sistem Terus Muncul di Cloud

File-file ini adalah metadata, bukan konten. Finder menulis `.DS_Store` untuk mengingat posisi ikon dan pengaturan tampilan; Windows menulis `Thumbs.db` untuk menyimpan cache thumbnail dan `desktop.ini` untuk menyimpan kustomisasi folder. Alat sinkronisasi memperlakukannya seperti file lain, sehingga sinkronisasi satu arah dari MacBook akan mengunggah `.DS_Store` ke setiap folder yang dikunjunginya.

Masalahnya makin besar seiring skala. Agensi desain yang mencadangkan 40.000 folder proyek bisa berakhir dengan puluhan ribu file metadata kecil di bucket-nya. Masing-masing adalah objek terpisah yang harus didaftar dan dibandingkan, sehingga memperlambat sinkronisasi berikutnya, dan setiap kali rekan kerja menelusuri folder tersebut di komputernya sendiri, file berubah dan ditransfer lagi.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote cloud di RcloneView sebelum mengonfigurasi pengecualian sinkronisasi" class="img-large img-center" />

## Kecualikan File Sampah dengan Filter Kustom

Perbaikannya dimulai di wizard sinkronisasi. Di **Step 3: Filtering Settings**, tambahkan aturan pengecualian kustom untuk `.DS_Store`, `Thumbs.db`, dan `desktop.ini`. Filter kustom menerima jenis file, folder, dan aturan path, sehingga Anda juga dapat mengecualikan folder `.Trashes` atau `.Spotlight-V100` yang terkadang muncul saat menyinkronkan dari drive eksternal yang diformat di Mac.

Sebelum menjalankan tugas secara nyata, klik **Dry Run**. Simulasi ini mencantumkan setiap file yang akan disalin atau dihapus, sehingga Anda dapat memastikan file metadata sudah keluar dari daftar transfer. Jika masih muncul, periksa ejaan aturan — aturan filter peka huruf besar-kecil secara default, jadi `Thumbs.db` tidak cocok dengan `thumbs.db`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Menjalankan tugas sinkronisasi cloud yang difilter di RcloneView" class="img-large img-center" />

## Bersihkan File yang Sudah Ada di Cloud

Filter mencegah file sampah baru, tetapi tidak menghapus yang sudah ada. Buka folder cloud di satu panel Explorer dan sumber lokal di panel lain, lalu gunakan **Compare**. File metadata yang sudah tidak ada di lokal akan muncul di "Show right-only files"; salinan yang masih ada di kedua sisi tampil sebagai file yang sama atau berbeda. Apa pun kasusnya, Anda dapat memilih salinan di sisi cloud dan menghapusnya langsung dari tampilan perbandingan.

Berhati-hatilah dengan sinkronisasi satu arah di sini. Sinkronisasi yang mencerminkan sumber ke tujuan akan menghapus file tujuan yang tidak lagi ada di sumber, tetapi file yang dikecualikan dilewati sepenuhnya — jadi pembersihan melalui Compare tetap menjadi cara paling jelas dan terkontrol untuk menghapusnya.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare di RcloneView menampilkan sisa file sistem di sisi cloud" class="img-large img-center" />

## Tetap Bersih di Setiap Eksekusi

Simpan sinkronisasi yang difilter sebagai tugas di Job Manager agar pengecualian berlaku setiap kali. RcloneView menjalankan tugas-tugas ini dengan filter yang sama di Windows, macOS, dan Linux, yang penting ketika orang-orang yang mengunggah menggunakan sistem operasi berbeda. Dengan lisensi PLUS, Anda dapat menjadwalkan tugas, dan Job History menampilkan jumlah file per eksekusi — penurunan mendadak setelah menambahkan filter adalah tanda bagus bahwa file sampah sudah hilang.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History di RcloneView menampilkan jumlah file setelah mengecualikan file sistem" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat atau edit tugas sinkronisasi dan tambahkan `.DS_Store`, `Thumbs.db`, dan `desktop.ini` sebagai filter pengecualian kustom di Step 3.
3. Jalankan Dry Run untuk memastikan file metadata tidak lagi ada di daftar transfer.
4. Gunakan Compare untuk menemukan dan menghapus salinan yang sudah tersimpan di cloud.

Beberapa menit untuk menyiapkan filter membuat folder cloud Anda mudah dibaca dan sinkronisasi tetap fokus pada pekerjaan yang sesungguhnya.

---

**Panduan Terkait:**

- [Memperbaiki Filter Sinkronisasi yang Tidak Mengecualikan File](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Aturan Filter Rclone — Penjelasan Include dan Exclude](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Membersihkan Akun Penyimpanan Cloud yang Penuh](https://rcloneview.com/support/blog/manage-cloud-storage-full-cleanup-rcloneview)

<CloudSupportGrid />
