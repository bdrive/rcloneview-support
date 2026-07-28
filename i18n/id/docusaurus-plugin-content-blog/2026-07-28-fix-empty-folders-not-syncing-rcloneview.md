---
slug: fix-empty-folders-not-syncing-rcloneview
title: "Memperbaiki Folder Kosong yang Tidak Tersinkron — Cara Mengatasinya dengan RcloneView"
authors:
  - morgan
description: "Folder kosong hilang setelah sinkronisasi? Pelajari mengapa rclone secara default melewati folder kosong dan cara memperbaikinya dengan opsi buat direktori kosong di RcloneView."
keywords:
  - folder kosong tidak tersinkron
  - rclone direktori kosong hilang
  - perbaiki folder kosong sinkronisasi cloud
  - RcloneView buat direktori kosong
  - struktur folder hilang saat sinkronisasi
  - cadangan cloud folder kosong
  - rclone struktur folder sinkronisasi
  - RcloneView pemecahan masalah sinkronisasi
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Folder Kosong yang Tidak Tersinkron — Cara Mengatasinya dengan RcloneView

> Jika tugas sinkronisasi secara diam-diam menghapus folder kosong dari tujuan, perbaikannya adalah satu kotak centang yang jarang disadari kebanyakan pengguna saat pengaturan.

Tim yang memigrasikan arsip proyek antar cloud sering mengharapkan tujuan mencerminkan struktur folder sumber secara persis — termasuk folder placeholder yang belum berisi file. Secara default, rclone (dan karenanya RcloneView) melewati pembuatan direktori kosong di tujuan, karena sebagian besar backend penyimpanan objek tidak memiliki konsep folder yang sesungguhnya; mereka hanya melacak kunci file. Jika tugas sinkronisasi Anda selesai dengan sukses tetapi sekumpulan subfolder kosong hilang dari tujuan, ini adalah perilaku yang diharapkan, bukan bug — dan RcloneView memiliki pengaturan bawaan untuk mengubahnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Folder Kosong Dihapus

Sistem file lokal dan beberapa penyedia menyimpan folder sebagai objek nyata, tetapi banyak backend cloud — termasuk penyimpanan yang kompatibel dengan S3 — merepresentasikan "folder" hanya sebagai awalan umum yang dibagikan oleh kunci file. Ketika sebuah direktori tidak memiliki file, tidak ada kunci yang perlu dibuat, sehingga tidak ada apa pun yang muncul di sisi lain. Perilaku sinkronisasi default rclone mencerminkan hal ini: ia menyalin file dan membiarkan struktur folder muncul secara implisit dari jalur file, yang menjaga transfer tetap cepat tetapi meninggalkan folder yang benar-benar kosong.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed sync with no errors despite missing empty folders" class="img-large img-center" />

Inilah sebabnya tugas sinkronisasi dapat melaporkan Completed dengan nol kesalahan sementara pohon folder tujuan tetap lebih tipis daripada sumber. Ini bukan transfer yang gagal — ini adalah alat yang melakukan persis seperti yang diperintahkan, minus satu detail yang diasumsikan otomatis oleh kebanyakan pengguna.

## Mengaktifkan Buat Direktori Kosong

RcloneView menampilkan perilaku ini langsung di wizard sinkronisasi. Di Langkah 1 (Konfigurasi Penyimpanan), bersama pemilihan sumber dan tujuan serta sakelar arah sinkronisasi, terdapat opsi **Buat direktori kosong (Create empty directories)**. Mengaktifkannya sebelum menjalankan tugas memberi tahu rclone untuk secara eksplisit membuat entri placeholder untuk folder kosong di tujuan, sehingga struktur yang disalin cocok dengan sumber folder demi folder.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling create empty directories in the RcloneView sync configuration wizard" class="img-large img-center" />

Jika Anda sudah menjalankan sinkronisasi tanpa mencentang opsi ini, cukup edit tugas yang ada, aktifkan pengaturan tersebut, dan jalankan lagi — RcloneView mount DAN sinkronisasi lebih dari 90 penyedia dari satu jendela, sehingga menjalankan ulang terhadap sumber dan tujuan yang sama merupakan perbaikan cepat, bukan konfigurasi ulang penuh.

## Memverifikasi Struktur Folder Setelah Perbaikan

Sebelum mempercayakan migrasi besar pada satu kali jalan, gunakan Dry Run untuk melihat pratinjau apa yang sebenarnya akan dilakukan tugas yang telah diperbaiki — ia mencantumkan setiap file dan folder yang dijadwalkan untuk dibuat tanpa menyentuh tujuan, sehingga Anda dapat memastikan celah folder kosong telah tertutup sebelum melanjutkan. Untuk proyek yang berkelanjutan, Folder Compare juga berguna setelahnya: arahkan ke kedua sisi dan filter berdasarkan "left-only" atau "right-only" untuk menemukan ketidakcocokan struktural yang tersisa.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify folder structure matches after enabling empty directory creation" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tugas sinkronisasi yang kehilangan folder kosong dan klik Edit.
3. Di Langkah 1, aktifkan kotak centang **Buat direktori kosong (Create empty directories)**.
4. Jalankan Dry Run untuk memastikan folder akan dibuat, lalu jalankan sinkronisasi.

Setelah pengaturan diaktifkan, setiap eksekusi tugas tersebut di masa mendatang akan mempertahankan pohon folder yang lengkap — tidak perlu lagi mencari direktori placeholder yang hilang setelah migrasi.

---

**Panduan Terkait:**

- [Dry Run — Pratinjau Sinkronisasi Cloud Sebelum Transfer dengan RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Aturan Filter — Sinkronisasi Selektif dengan RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Hindari Kehilangan Data akibat Arah Sinkronisasi yang Salah dengan RcloneView](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
