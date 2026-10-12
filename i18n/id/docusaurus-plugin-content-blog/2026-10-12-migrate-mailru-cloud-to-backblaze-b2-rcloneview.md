---
slug: migrate-mailru-cloud-to-backblaze-b2-rcloneview
title: "Migrasi Mail.ru Cloud ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - morgan
description: "Pindahkan file dari Mail.ru Cloud ke Backblaze B2 dengan RcloneView: hubungkan kedua remote, pratinjau dengan Dry Run, transfer, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi Mail.ru Cloud ke Backblaze B2
  - pencadangan Mail.ru Cloud
  - Mail.ru Cloud to B2
  - migrasi Backblaze B2
  - transfer cloud ke cloud
  - migrasi RcloneView
  - Mail.ru Cloud rclone
  - pindahkan file ke Backblaze B2
tags:
  - RcloneView
  - mailru
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Mail.ru Cloud ke Backblaze B2 — Transfer File dengan RcloneView

> Salin pustaka Mail.ru Cloud ke penyimpanan objek Backblaze B2 dari satu jendela, dengan pratinjau sebelum apa pun dipindahkan dan perbandingan setelahnya.

Jika dokumen dan foto selama bertahun-tahun tersimpan di Mail.ru Cloud, salinan kedua di penyimpanan objek memberi Anda arsip yang independen. RcloneView menghubungkan kedua layanan sebagai remote dan menjalankan transfer sebagai job cloud-ke-cloud, sehingga file tidak perlu diunduh dulu ke laptop. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Kedua Remote

Buka tab Remote dan klik New Remote. Tambahkan Mail.ru Cloud terlebih dahulu dengan mengikuti petunjuk penyedia tersebut, lalu tambahkan Backblaze B2 dengan Application Key ID dan Application Key dari konsol B2. Buat bucket di B2 lebih dulu agar Anda memiliki tujuan yang dapat dituju.

Buka setiap remote di panel Explorer masing-masing. Telusuri folder Mail.ru Cloud di kiri dan bucket B2 di kanan untuk memastikan keduanya merespons sebelum Anda membuat job.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Mail.ru Cloud dan Backblaze B2 di RcloneView" class="img-large img-center" />

## Rencanakan Transfer

Tentukan apakah akan memindahkan semuanya atau sebagian saja. Sebuah studio yang mengarsipkan 400 GB folder proyek dapat menyalin satu folder tingkat atas lebih dulu sebagai uji coba. Di wizard sinkronisasi, pilih Mail.ru Cloud sebagai sumber dan folder bucket B2 sebagai tujuan, lalu beri job nama menggunakan huruf, angka, tanda hubung, atau garis bawah.

Untuk migrasi, job Copy adalah pilihan yang lebih aman karena tidak pernah menghapus apa pun dari sumber. Gunakan Sync hanya jika Anda ingin tujuan mencerminkan sumber secara persis.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud-ke-cloud dari Mail.ru Cloud ke Backblaze B2" class="img-large img-center" />

## Pratinjau, Jalankan, dan Pantau

Jalankan Dry Run terlebih dahulu. Dry Run mencantumkan file yang akan disalin atau dihapus tanpa mengubah apa pun, sehingga path tujuan yang salah terdeteksi lebih awal. Kemudian mulai job dan pantau progres, kecepatan, dan jumlah file di tab Transferring.

Penyimpanan objek menangani banyak unggahan paralel dengan baik, tetapi cloud konsumen bisa lebih ketat. Jika Anda melihat error, turunkan jumlah transfer file di Langkah 2 wizard dan pertahankan equality checkers di 4 atau kurang.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer Mail.ru Cloud ke B2 di RcloneView" class="img-large img-center" />

## Verifikasi dan Jaga Tetap Mutakhir

Setelah job selesai, buka Folder Compare dengan Mail.ru Cloud di satu sisi dan B2 di sisi lain. Filter file yang hanya ada di kiri dan yang berbeda untuk menemukan apa pun yang belum sampai, lalu salin hanya item tersebut. Job History mencatat status, durasi, ukuran, dan jumlah file setiap proses.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare antara Mail.ru Cloud dan Backblaze B2" class="img-large img-center" />

Untuk menjaga salinan B2 tetap segar, simpan job dan, dengan lisensi PLUS, tambahkan jadwal bergaya crontab di Langkah 4.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Mail.ru Cloud dan Backblaze B2 sebagai remote di tab Remote.
3. Buat job Copy dari Mail.ru Cloud ke bucket B2 Anda dan jalankan Dry Run.
4. Mulai transfer, lalu verifikasi dengan Folder Compare.

Salinan kedua yang terverifikasi di B2 mengubah pustaka satu penyedia menjadi pustaka yang sudah dicadangkan.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Mail.ru Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Kelola Penyimpanan Backblaze B2 — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrasi Yandex Disk ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-yandex-disk-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
