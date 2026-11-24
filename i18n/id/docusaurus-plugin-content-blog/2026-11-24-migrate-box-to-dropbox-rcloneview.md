---
slug: migrate-box-to-dropbox-rcloneview
title: "Migrasi Box ke Dropbox — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Migrasikan Box ke Dropbox dengan RcloneView. Hubungkan kedua remote dengan OAuth, pratinjau dengan Dry Run, salin folder antar cloud, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi Box ke Dropbox
  - migrasi dari Box ke Dropbox
  - transfer file dari Box ke Dropbox
  - transfer cloud ke cloud Box Dropbox
  - memindahkan folder Box ke Dropbox
  - migrasi Dropbox for Business
  - RcloneView Box Dropbox
  - GUI rclone Box ke Dropbox
  - alat migrasi cloud
tags:
  - RcloneView
  - box
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Box ke Dropbox — Transfer File dengan RcloneView

> Pindahkan struktur folder Box ke Dropbox langsung antar cloud, pratinjau cakupannya sebelum ada perubahan, dan pastikan hasilnya secara berdampingan.

Tim beralih dari Box ke Dropbox karena berbagai alasan: merger, persyaratan klien baru, atau departemen kreatif yang sudah bekerja di Dropbox. Bagian tersulitnya adalah memindahkan folder bersama yang terkumpul bertahun-tahun tanpa ada yang hilang. RcloneView terhubung ke kedua layanan sebagai remote dan menjalankan penyalinan melalui rclone, sehingga Anda dapat merencanakan, menjalankan, dan memverifikasi migrasi dari satu jendela tanpa harus mengunduh semuanya ke laptop terlebih dahulu.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Box dan Dropbox sebagai Remote

Kedua penyedia menggunakan OAuth, jadi tidak ada kunci API yang perlu disalin. Buka **Remote tab > New Remote**, pilih Box, lalu masuk saat browser terbuka. Ulangi untuk Dropbox. Jika salah satunya adalah akun bisnis, atur opsi yang sesuai saat penyiapan: `box_sub_type = enterprise` untuk Box for Business, dan `dropbox_business = true` untuk Dropbox for Business.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Dropbox remotes in RcloneView" class="img-large img-center" />

Buka Box di panel Explorer kiri dan Dropbox di panel kanan. Menjelajahi keduanya secara berdampingan memastikan Anda melihat folder yang diharapkan dan folder tujuan sudah ada sebelum membuat job. Klik kanan folder Box dan pilih **Get Size** untuk memperkirakan berapa banyak data yang akan dipindahkan.

## Buat Job Copy dan Pratinjau

Untuk migrasi, job **Copy** adalah pilihan yang aman: job ini menambahkan file ke Dropbox dan tidak pernah menghapus apa pun di tujuan. Buat dari **Home tab > Sync** atau Job Manager, pilih folder Box sebagai sumber dan folder Dropbox sebagai tujuan, lalu beri nama yang jelas seperti `box-marketing-to-dropbox`.

Di Advanced Settings, biarkan checksum nonaktif untuk pasangan ini. Box dan Dropbox menggunakan jenis hash yang berbeda, sehingga rclone membandingkan file berdasarkan ukuran dan waktu modifikasi. Jika Dropbox mulai membatasi laju permintaan, kurangi jumlah transfer file alih-alih menambahnya. Pada langkah Filtering, filter bawaan **Box Docs** memungkinkan Anda menangani dokumen asli Box secara terpisah, dan aturan kustom dapat melewati folder yang sudah Anda putuskan untuk tidak dipakai lagi.

Jalankan **Dry Run** terlebih dahulu. Fitur ini menampilkan setiap file yang akan disalin tanpa mentransfer apa pun — berguna ketika sebuah agensi memindahkan 60.000 aset klien dan ingin memastikan cakupannya bersama para pemangku kepentingan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Box to Dropbox in RcloneView" class="img-large img-center" />

## Jalankan, Pantau, dan Simpan Jejak Audit

Mulai job dan pantau kemajuan, kecepatan, dan jumlah file di tab **Transferring**. Memecah migrasi besar menjadi satu job per folder tingkat atas mencegah satu error menghambat semuanya. Setiap eksekusi tercatat di **Job History** beserta status, ukuran total, dan jumlah file, yang sekaligus menjadi catatan bagi pihak yang menyetujui migrasi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Box to Dropbox migration runs" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah job selesai, buka **Folder Compare** untuk sumber Box dan tujuan Dropbox. Filter file yang hanya ada di sisi kiri untuk menemukan apa pun yang belum sampai, lalu gunakan Copy right untuk melengkapinya. Selama masa peralihan saat masih ada yang menyimpan ke Box, jalankan ulang job Copy yang sama untuk mengambil file baru sebelum peralihan akhir.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Box and Dropbox contents" class="img-large img-center" />

## Memulai

Berbeda dengan alat yang hanya bisa mount, RcloneView juga melakukan sinkronisasi dan membandingkan folder — dengan FREE License.

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Box dan Dropbox sebagai remote melalui OAuth, aktifkan opsi bisnis jika diperlukan.
3. Buat job Copy dari Box ke Dropbox dan tinjau dengan Dry Run.
4. Jalankan job, lalu pastikan hasilnya di Folder Compare dan Job History.

Migrasi yang dipratinjau dan diverifikasi memungkinkan tim Anda pindah ke Dropbox tanpa bertanya-tanya folder mana yang tertinggal.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Box — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Dropbox — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Sinkronisasi Dropbox ke Box dengan RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-box-rcloneview)

<CloudSupportGrid />
