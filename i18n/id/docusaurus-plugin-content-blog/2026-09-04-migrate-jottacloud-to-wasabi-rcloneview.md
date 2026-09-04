---
slug: migrate-jottacloud-to-wasabi-rcloneview
title: "Migrasi Jottacloud ke Wasabi — Transfer File dengan RcloneView"
authors:
  - steve
description: "Migrasikan file dari Jottacloud ke penyimpanan objek Wasabi dengan RcloneView, menggunakan pratinjau Dry Run dan verifikasi checksum untuk transfer yang aman."
keywords:
  - migrasi jottacloud ke wasabi
  - transfer jottacloud ke wasabi
  - migrasi jottacloud wasabi
  - rcloneview jottacloud
  - rcloneview wasabi
  - pindahkan file jottacloud wasabi
  - alat migrasi cloud ke cloud
  - migrasi penyimpanan objek wasabi
  - backup jottacloud wasabi
tags:
  - RcloneView
  - jottacloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Jottacloud ke Wasabi — Transfer File dengan RcloneView

> Pindahkan file Jottacloud Anda langsung ke penyimpanan objek Wasabi yang murah tanpa perlu mengunduh apa pun ke disk lokal terlebih dahulu.

Tim yang meninggalkan cloud bergaya konsumen seperti Jottacloud demi penyimpanan objek jangka panjang yang lebih murah sering kali menemui kendala: file mereka berada di akun cloud pribadi yang dihosting di Norwegia, sementara rumah baru mereka adalah bucket yang kompatibel dengan S3 dengan model akses yang sama sekali berbeda. RcloneView menjembatani kesenjangan itu dalam satu jendela, memungkinkan Anda menghubungkan kedua layanan sebagai remote dan mentransfer langsung di antara keduanya, cloud ke cloud, tanpa perlu jalan memutar melalui penyimpanan lokal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Kedua Remote di RcloneView

Mulailah dengan menambahkan Jottacloud sebagai remote melalui alur login OAuth berbasis browser, lalu tambahkan Wasabi sebagai remote yang kompatibel dengan S3 menggunakan Access Key ID, Secret Access Key, dan endpoint regional yang benar. Kedua remote muncul sebagai tab terpisah di panel Explorer, dan Anda dapat membuka Jottacloud di kiri dan Wasabi di kanan menggunakan tata letak dua panel.

Berbeda dengan alat yang hanya mendukung mount, RcloneView juga mensinkronkan dan membandingkan folder — bahkan dengan lisensi FREE. Artinya, Anda tidak terbatas pada penyalinan seret dan lepas sederhana; Anda mendapatkan mesin sinkronisasi lengkap, pemfilteran, dan alat Dry Run untuk migrasi ini.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote baru di RcloneView untuk migrasi cloud ke cloud" class="img-large img-center" />

## Pratinjau Migrasi dengan Dry Run

Sebelum memindahkan apa pun, konfigurasikan tugas Sync dengan Jottacloud sebagai sumber dan bucket Wasabi target Anda sebagai tujuan. Atur arah sinkronisasi ke satu arah "Modifying destination only" agar tidak ada yang diubah di Jottacloud. Jalankan tugas dalam mode Dry Run terlebih dahulu — RcloneView menunjukkan dengan tepat file mana yang akan disalin tanpa mentransfer satu byte pun, yang sangat penting saat Anda memigrasikan struktur folder yang belum sepenuhnya Anda audit selama bertahun-tahun.

Jika akun Jottacloud Anda memiliki pustaka media besar atau arsip yang tidak Anda perlukan di bucket baru, gunakan langkah pemfilteran untuk mengecualikan jenis file atau menetapkan ukuran file maksimum sebelum transfer sebenarnya dimulai.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari Jottacloud ke Wasabi di RcloneView" class="img-large img-center" />

## Memverifikasi dan Memantau Transfer

Setelah hasil Dry Run terlihat benar, aktifkan perbandingan checksum di langkah Advanced Settings sehingga RcloneView membandingkan file berdasarkan hash dan ukuran, bukan hanya waktu modifikasi — penting saat berpindah antara dua backend penyimpanan yang sangat berbeda. Mulai tugas dan beralih ke tab Transferring di Info View bagian bawah untuk memantau progres langsung, kecepatan transfer, dan jumlah file saat data tiba di Wasabi.

Untuk pustaka besar, sesuaikan jumlah transfer file dan pengaturan transfer multi-thread untuk memanfaatkan bandwidth Anda dengan lebih baik, dan biarkan Job History mencatat seluruh proses untuk referensi di kemudian hari.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Meninjau riwayat tugas setelah migrasi Jottacloud ke Wasabi" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Jottacloud sebagai remote melalui login OAuth, lalu tambahkan Wasabi sebagai remote yang kompatibel dengan S3 dengan Access Key ID dan Secret Access Key Anda.
3. Buat tugas sinkronisasi satu arah dari Jottacloud ke bucket Wasabi Anda dan jalankan Dry Run untuk melihat pratinjau file pasti yang akan disalin.
4. Aktifkan verifikasi checksum, jalankan sinkronisasi sebenarnya, dan konfirmasikan transfer yang telah selesai di Job History.

Migrasi dari cloud serbaguna ke penyimpanan objek khusus tidak harus berarti mengurus aplikasi terpisah atau unggah ulang lokal yang lambat — RcloneView menangani seluruh alurnya dalam satu antarmuka.

---

**Panduan Terkait:**

- [Memperbaiki Kesalahan Sinkronisasi Jottacloud — Cara Mengatasi dengan RcloneView](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)
- [Mengelola Penyimpanan Wasabi — Sinkronisasi dan Backup File dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrasi Backblaze B2 ke Wasabi — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)

<CloudSupportGrid />
