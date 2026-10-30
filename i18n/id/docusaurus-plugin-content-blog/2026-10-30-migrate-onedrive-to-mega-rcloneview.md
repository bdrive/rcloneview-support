---
slug: migrate-onedrive-to-mega-rcloneview
title: "Migrasi OneDrive ke Mega — Transfer File dengan RcloneView"
authors:
  - jay
description: "Pindahkan file dari Microsoft OneDrive ke Mega dengan RcloneView: hubungkan kedua remote, jalankan dry run, salin cloud-ke-cloud, dan verifikasi hasilnya dengan Folder Compare."
keywords:
  - migrasi OneDrive ke Mega
  - transfer OneDrive ke Mega
  - pindahkan file OneDrive ke Mega
  - alat migrasi OneDrive Mega
  - transfer cloud ke cloud
  - RcloneView OneDrive
  - RcloneView Mega
  - klien GUI Mega
tags:
  - RcloneView
  - onedrive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi OneDrive ke Mega — Transfer File dengan RcloneView

> Pindahkan pustaka OneDrive ke Mega dengan job cloud-ke-cloud yang visual dan dapat diulang, alih-alih mengunduh dan mengunggah ulang secara manual.

Memindahkan dokumen bertahun-tahun dari Microsoft OneDrive ke Mega biasanya berarti jalan memutar yang lambat melalui disk Anda sendiri. RcloneView menghubungkan kedua layanan sebagai remote dan menyalin langsung di antara keduanya, dengan pratinjau sebelum apa pun ditulis dan perbandingan sesudahnya untuk membuktikan tidak ada yang terlewat. RcloneView me-mount DAN menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan OneDrive dan Mega sebagai Remote

OneDrive menggunakan OAuth berbasis browser: pilih Microsoft OneDrive saat menambahkan remote, masuk, dan RcloneView menyimpan token. Mega berbeda. Mega meminta email dan kata sandi Anda secara langsung, jadi siapkan keduanya sebelum mulai.

Beri nama remote dengan jelas, misalnya `onedrive-main` dan `mega-archive`. Nama yang jelas penting nanti saat Anda membaca riwayat job atau menyalin path lengkap seperti `onedrive-main:Projects` ke terminal rclone.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote OneDrive dan Mega di RcloneView" class="img-large img-center" />

## Rencanakan Penyalinan Sebelum Menjalankannya

Buka kedua remote di panel Explorer berdampingan dan telusuri folder yang ingin Anda pindahkan. Gunakan Get Size pada sumber untuk memperkirakan jumlah data yang akan ditransfer, dan pastikan akun Mega Anda memiliki ruang yang cukup.

Pilih **Copy** dan bukan Sync untuk migrasi pertama. Copy tidak pernah menghapus apa pun di tujuan, sehingga salah memilih folder tidak akan menghapus data. Gunakan langkah penyaringan untuk melewati jenis file yang tidak diperlukan, atau batasi berdasarkan ukuran file maksimum atau usia.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud-ke-cloud antara dua remote di RcloneView" class="img-large img-center" />

## Jalankan Dry Run, Lalu Transfer Sebenarnya

Dry Run mencantumkan apa yang akan disalin tanpa menulis satu byte pun. Tinjau hasilnya, lalu jalankan job. Tab Transferring menampilkan progres, kecepatan, dan jumlah file, dan Anda dapat membatalkan job yang sedang berjalan kapan saja.

Untuk pustaka besar, kurangi jumlah transfer file bersamaan jika Mega membatasi Anda, dan pertahankan jumlah percobaan ulang default agar gangguan jaringan singkat tidak menggagalkan job.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job salin di RcloneView" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah job selesai, buka Compare dengan OneDrive di kiri dan Mega di kanan. Filter memungkinkan Anda menampilkan file yang hanya ada di kiri, sehingga apa pun yang gagal ditransfer langsung terlihat. Anda dapat menyalin file yang tertinggal dari tampilan yang sama. Job History mencatat status, ukuran, kecepatan, dan jumlah file untuk eksekusi tersebut.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Hasil Folder Compare antara OneDrive dan Mega" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan OneDrive (OAuth) dan Mega (email dan kata sandi) sebagai remote.
3. Buat job Copy dari OneDrive ke Mega, jalankan Dry Run, lalu eksekusi.
4. Verifikasi dengan Folder Compare sebelum menghentikan sumber.

Migrasi yang dapat Anda pratinjau, pantau, dan verifikasi adalah migrasi yang dapat Anda selesaikan dengan percaya diri.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Mega — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan OneDrive — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrasi Google Drive ke Mega — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-mega-rcloneview)

<CloudSupportGrid />
