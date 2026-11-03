---
slug: fix-google-drive-sync-errors-rcloneview
title: "Atasi Error Sinkronisasi Google Drive — Folder Hilang, Job Gagal, dan Daftar Kosong Teratasi dengan RcloneView"
authors:
  - steve
description: "Atasi error sinkronisasi Google Drive seperti folder bersama yang hilang, daftar Computers yang kosong, dan job yang error menggunakan log RcloneView dan Folder Compare."
keywords:
  - atasi error sinkronisasi Google Drive
  - error rclone Google Drive
  - Google Drive Dibagikan kepada saya hilang
  - folder Computers Google Drive kosong
  - sinkronisasi Google Drive gagal
  - RcloneView Google Drive
  - filter sinkronisasi Google Docs
  - pemecahan masalah Google Drive
  - pemecahan masalah sinkronisasi cloud
  - Google Drive GUI
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Atasi Error Sinkronisasi Google Drive — Folder Hilang, Job Gagal, dan Daftar Kosong Teratasi dengan RcloneView

> Banyak masalah sinkronisasi Google Drive berasal dari pengaturan yang hilang, login yang kedaluwarsa, atau filter — dan RcloneView membantu Anda menemukan penyebabnya.

Job Google Drive yang berakhir Errored, atau remote yang tidak menampilkan apa yang Anda harapkan, jarang menjadi misteri jika Anda bisa melihat log. Penyebab yang umum adalah folder bersama yang memerlukan pengaturan tertentu, komputer yang dicadangkan yang memerlukan ID folder, dan file Google Docs yang berperilaku berbeda dari file biasa. RcloneView menyatukan pengaturan remote, riwayat job, dan log di satu tempat sehingga Anda dapat mempersempit penyebabnya dengan cepat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Folder yang Tidak Muncul

Jika file yang dibagikan kepada Anda tidak ada di daftar root, remote kemungkinan memerlukan pengaturan `shared_with_me = true`, yang memberi Anda tampilan Google Drive Shared with Me. Komputer yang dicadangkan dari Drive for desktop adalah kasus tersendiri: remote Google Drive Computers memerlukan `root_folder_id` yang diatur ke ID komputer tersebut.

Buka Remote Manager dari tab Remote, edit remote, dan periksa nilai-nilai ini. Lalu muat ulang panel Explorer dengan F5.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit pengaturan remote Google Drive di RcloneView Remote Manager" class="img-large img-center" />

## Login Kedaluwarsa dan Otorisasi Gagal

Google Drive terhubung melalui OAuth browser. Jika setiap permintaan gagal dengan error otorisasi, edit remote dan login kembali agar token baru diterbitkan. Ini adalah perbaikan yang umum untuk remote yang sebelumnya berfungsi tetapi tiba-tiba gagal.

Untuk pesan kuota dan batas laju, lihat panduan khusus kami tentang batas laju dan kuota penyimpanan Google Drive. Dalam kedua kasus, mengurangi jumlah transfer file di Langkah 2 wizard sinkronisasi adalah langkah pertama yang masuk akal.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History menampilkan sinkronisasi Google Drive yang error di RcloneView" class="img-large img-center" />

## Baca Log untuk Mengetahui Error yang Tepat

Buka Job History untuk melihat apakah job gagal seketika atau di tengah jalan. Untuk detail lebih lanjut, buka Settings > Embedded Rclone, aktifkan logging rclone, atur level ke DEBUG, lalu klik Restart Embedded Rclone. Ulangi kegagalan tersebut dan baca log: log akan menyebutkan file dan errornya. Anda juga dapat menjalankan perintah seperti `rclone about "remote:"` di tab Terminal bawaan untuk memastikan konektivitas.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan kembali job Google Drive setelah memperbaiki pengaturan" class="img-large img-center" />

## Tangani Google Docs dan Verifikasi Hasil

Google Docs, Sheets, dan Slides bukan file biasa, sehingga tampilannya bisa berbeda setelah transfer. Langkah 3 wizard sinkronisasi menyertakan filter Google Docs bawaan jika Anda ingin mengecualikannya. Setelah dijalankan ulang, gunakan Compare untuk memeriksa kedua sisi: file yang hanya ada di kiri, hanya di kanan, dan yang berbeda menunjukkan apa yang masih perlu ditangani. Jalankan Dry Run sebelum sinkronisasi apa pun yang dapat menghapus file.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare memverifikasi sinkronisasi Google Drive" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa remote untuk `shared_with_me` atau `root_folder_id`, dan otorisasi ulang jika perlu.
3. Tinjau Job History dan aktifkan logging DEBUG untuk job yang error.
4. Jalankan Dry Run, jalankan ulang job, lalu verifikasi dengan Folder Compare.

Dengan pengaturan, log, dan perbandingan dalam satu jendela, job Drive yang gagal menjadi daftar periksa singkat.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Google Drive — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Atasi Error Batas Laju 403 Google Drive dengan RcloneView](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Atasi Kuota Penyimpanan Google Drive Terlampaui dengan RcloneView](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
