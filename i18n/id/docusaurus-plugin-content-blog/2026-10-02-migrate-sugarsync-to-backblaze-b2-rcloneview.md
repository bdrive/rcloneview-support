---
slug: migrate-sugarsync-to-backblaze-b2-rcloneview
title: "Migrasi SugarSync ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - steve
description: "Pindahkan file dari SugarSync ke Backblaze B2 dengan RcloneView: hubungkan kedua remote, simulasikan transfer dengan Dry Run, dan verifikasi hasilnya dengan Folder Compare."
keywords:
  - migrasi SugarSync ke Backblaze B2
  - transfer SugarSync ke B2
  - migrasi SugarSync
  - pencadangan Backblaze B2
  - migrasi cloud ke cloud
  - RcloneView SugarSync
  - penyimpanan alternatif SugarSync
  - rclone SugarSync B2
  - GUI migrasi cloud
  - pencadangan object storage
tags:
  - RcloneView
  - sugarsync
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi SugarSync ke Backblaze B2 — Transfer File dengan RcloneView

> Pindahkan folder SugarSync yang sudah bertahun-tahun ke bucket Backblaze B2 tanpa mengunduh dan mengunggah ulang secara manual.

Tim yang sudah lama menggunakan SugarSync sering ingin memindahkan arsipnya ke object storage, di mana bucket dan application key cocok untuk otomatisasi. RcloneView terhubung ke kedua layanan dalam satu jendela, sehingga Anda dapat menyalin folder langsung dari SugarSync ke Backblaze B2 dan memeriksa hasilnya sebelum menutup akun lama. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Kedua Remote

Buka tab Remote dan klik New Remote. Tambahkan SugarSync dengan kredensial akun Anda, lalu tambahkan Backblaze B2 dengan Application Key ID dan Application Key dari halaman manajemen kunci Backblaze. Buat bucket tujuan di Backblaze terlebih dahulu agar target Anda jelas.

Tempatkan SugarSync di satu panel Explorer dan bucket B2 di panel lainnya. Telusuri keduanya untuk memastikan akses sebelum mengonfigurasi apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote SugarSync dan Backblaze B2 di RcloneView" class="img-large img-center" />

## Salin dengan Seret dan Lepas atau Job Sinkronisasi

Untuk folder kecil, seret dari panel SugarSync ke panel B2. Menyeret antar remote yang berbeda akan menyalin, sehingga file asli tetap di tempatnya. Untuk migrasi penuh, gunakan wizard sinkronisasi 4 langkah: pilih sumber dan tujuan, atur jumlah transfer, tambahkan filter, dan jadwalkan secara opsional dengan lisensi PLUS.

Gunakan job Copy, bukan job Sync, untuk proses pertama agar tidak ada yang terhapus di tujuan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari SugarSync ke Backblaze B2 di RcloneView" class="img-large img-center" />

## Pratinjau, Pantau, dan Verifikasi

Jalankan Dry Run terlebih dahulu. Dry Run mencantumkan file yang akan disalin, sehingga Anda dapat menemukan path yang salah sebelum data dipindahkan. Saat job berjalan, tab Transferring menampilkan progres, kecepatan, dan jumlah file.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer SugarSync ke B2 di tab Transferring" class="img-large img-center" />

Setelah selesai, buka Compare untuk melihat SugarSync dan B2 secara berdampingan. File yang hanya ada di kiri adalah yang belum sampai, dan Anda dapat menyalinnya langsung dari tampilan perbandingan. Job History menyimpan catatan setiap eksekusi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mengonfirmasi isi SugarSync dan Backblaze B2 sama" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan SugarSync dan Backblaze B2 sebagai remote dan buat bucket target Anda.
3. Buat job Copy, jalankan Dry Run, lalu mulai transfer.
4. Verifikasi dengan Folder Compare sebelum menutup akun SugarSync.

Salinan yang terverifikasi di B2 memungkinkan Anda menghentikan layanan lama dengan tenang.

---

**Panduan Terkait:**

- [Migrasi SugarSync ke Google Drive dan OneDrive dengan RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-google-drive-onedrive-rcloneview)
- [Kelola Penyimpanan SugarSync dengan RcloneView](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
