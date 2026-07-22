---
slug: get-size-calculate-cloud-storage-usage-rcloneview
title: "Get Size — Hitung Penggunaan Penyimpanan Cloud Secara Instan di RcloneView"
authors:
  - jay
description: "Gunakan fitur Get Size RcloneView untuk menghitung ukuran total folder atau seleksi apa pun di lebih dari 90 penyedia cloud sebelum Anda sinkronisasi atau migrasi."
keywords:
  - fitur get size
  - hitung ukuran penyimpanan cloud
  - ukuran folder penyimpanan cloud
  - RcloneView get size
  - cek penggunaan penyimpanan cloud
  - cek ukuran folder sebelum transfer
  - audit penyimpanan multi-cloud
  - perintah rclone about GUI
  - alat manajer file cloud
  - analisis penggunaan penyimpanan
tags:
  - RcloneView
  - feature
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Get Size — Hitung Penggunaan Penyimpanan Cloud Secara Instan di RcloneView

> Klik kanan folder atau seleksi apa pun di RcloneView dan dapatkan ukuran totalnya secara instan, tanpa harus menunggu transfer penuh selesai untuk mengetahui berapa banyak data yang sedang Anda pindahkan.

Penyedia cloud jarang membuat jelas seberapa besar sebenarnya sebuah folder sampai Anda mencoba memindahkannya. Folder "Media" dengan ribuan subfolder bertingkat bisa menyembunyikan data berukuran gigabyte yang baru terlihat setelah pekerjaan sinkronisasi macet di tengah jalan, atau peringatan kuota muncul di tengah transfer. Perintah Get Size RcloneView di menu klik kanan File Explorer mengatasi hal ini dengan menghitung ukuran total file atau folder yang dipilih sesuai permintaan, sebelum Anda memutuskan untuk melakukan sinkronisasi, mount, atau migrasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memeriksa Ukuran Folder Sebelum Memindahkan Apa Pun

Pilih satu atau beberapa file atau folder di panel Explorer mana pun, klik kanan, lalu pilih Get Size. RcloneView menelusuri seleksi tersebut dan mengembalikan ukuran totalnya, yang sangat berguna untuk folder dengan struktur subdirektori yang dalam, di mana ringkasan pada bagian bawah File List saja tidak mencerminkan konten bertingkat. Ini bekerja dengan cara yang sama baik seleksi tersebut berada di Google Drive, Amazon S3, instans Nextcloud yang di-hosting sendiri, atau disk lokal — RcloneView me-mount DAN mensinkronkan lebih dari 90 penyedia dari satu jendela, sehingga menu klik kanan yang sama berlaku tidak peduli remote mana yang sedang Anda jelajahi.

Get Size paling berguna sebagai pemeriksaan awal. Sebelum memulai pekerjaan Sync besar atau migrasi satu kali antara dua cloud, memeriksa ukuran sebenarnya dari folder sumber membantu memperkirakan waktu transfer, memastikan tujuan memiliki kuota yang cukup tersedia, dan memutuskan apakah aturan filter diperlukan untuk memperkecil pekerjaan tersebut.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder in RcloneView to check its total size" class="img-large img-center" />

## Mengaudit Penggunaan Penyimpanan di Beberapa Remote

Karena setiap remote yang terhubung — cloud maupun lokal — berada di Explorer yang sama, Get Size juga berfungsi sebagai cara cepat untuk mengaudit di mana penyimpanan sedang terpakai dalam pengaturan multi-cloud. Menjalankannya secara bergiliran pada folder tingkat atas setiap remote memberikan gambaran kasar akun mana yang mendekati batasnya, yang jauh lebih cepat dibandingkan masuk ke konsol web terpisah masing-masing penyedia untuk memeriksa penggunaan.

Untuk angka penggunaan yang lebih akurat di tingkat remote alih-alih folder tertentu, Rclone Terminal bawaan mendukung `rclone about "remote:"`, yang melaporkan total penyimpanan terpakai dan tersedia langsung dari API penyedia. Get Size dan perintah `about` di terminal saling melengkapi: satu berfokus pada seleksi tertentu, yang lain melaporkan total di tingkat akun.

<img src="/support/images/en/blog/new-remote.png" alt="Multiple cloud remotes connected in RcloneView for storage auditing" class="img-large img-center" />

## Menggunakan Pemeriksaan Ukuran untuk Merencanakan Aturan Sync dan Filter

Setelah mengetahui ukuran sebenarnya dari sebuah folder, wizard Sync RcloneView menyediakan alat untuk menindaklanjuti informasi tersebut. Langkah 3 dari konfigurasi pekerjaan mencakup penyaringan berdasarkan ukuran file maksimum, usia file maksimum, dan filter bawaan untuk jenis media, video, gambar, dan dokumen, sehingga folder yang terlalu besar dapat dipangkas hanya menjadi file yang benar-benar perlu ditransfer. Menjalankan Dry Run setelahnya menampilkan pratinjau file mana yang akan disalin atau dihapus berdasarkan pengaturan filter saat ini, memastikan pekerjaan sesuai harapan sebelum data benar-benar berpindah.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring sync filters after checking folder size in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan remote yang ingin Anda audit melalui tab Remote > New Remote.
3. Pilih folder di Explorer, klik kanan, lalu pilih Get Size untuk melihat total penggunaan ruangnya.
4. Gunakan angka tersebut untuk merencanakan filter atau jadwal di wizard Sync sebelum menjalankan transfer penuh.

Mengetahui secara pasti berapa banyak data yang Anda kelola mengubah tebakan menjadi rencana, dan Get Size menjadikan pemeriksaan itu sebagai kebiasaan dua klik alih-alih tiket dukungan yang menunggu untuk terjadi.

---

**Panduan Terkait:**

- [Job History & Log Transfer — Pantau Setiap Sinkronisasi di RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Pratinjau Dry Run — Simulasikan Sinkronisasi Cloud Sebelum Anda Menjalankannya di RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Temukan dan Hapus File Duplikat di Penyimpanan Cloud dengan RcloneView](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-rcloneview)

<CloudSupportGrid />
