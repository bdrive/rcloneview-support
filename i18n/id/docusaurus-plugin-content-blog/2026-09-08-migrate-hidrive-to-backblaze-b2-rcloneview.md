---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "Migrasi HiDrive ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - steve
description: "Pindahkan file dari HiDrive ke Backblaze B2 dengan RcloneView menggunakan sinkronisasi terverifikasi checksum, pratinjau dry run, dan pelacakan riwayat pekerjaan."
keywords:
  - migrasi HiDrive ke Backblaze B2
  - transfer HiDrive Backblaze B2
  - migrasi cloud HiDrive
  - alat pencadangan Backblaze B2
  - RcloneView HiDrive
  - transfer cloud ke cloud
  - migrasi terverifikasi checksum
  - dari HiDrive ke object storage
  - dari cloud Eropa ke Backblaze B2
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi HiDrive ke Backblaze B2 — Transfer File dengan RcloneView

> Pindahkan akun HiDrive yang terus berkembang ke object storage Backblaze B2 dengan transfer terverifikasi checksum dan dry run terlebih dahulu.

HiDrive bekerja dengan baik untuk akses file sehari-hari, tetapi tim yang membutuhkan retensi jangka panjang yang lebih murah atau salinan object storage di luar lokasi sering beralih ke Backblaze B2 setelah kumpulan data tumbuh melebihi apa yang dimaksudkan untuk paket cloud pribadi atau bisnis. RcloneView menghubungkan kedua layanan dari jendela yang sama — HiDrive melalui OAuth dan Backblaze B2 dengan Application Key — sehingga migrasi berjalan sebagai satu pekerjaan yang dikonfigurasi, alih-alih mengunduh semuanya ke lokal terlebih dahulu. RcloneView me-mount DAN menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan HiDrive dan Backblaze B2

HiDrive ditambahkan melalui login OAuth berbasis browser RcloneView — tidak perlu memasukkan kunci API secara terpisah. Backblaze B2 memerlukan Application Key ID dan Application Key, yang dibuat dari konsol akun Backblaze, dimasukkan langsung ke formulir pengaturan remote. Setelah kedua remote muncul di Remote Manager, keduanya ditampilkan sebagai tab terpisah di Explorer, sehingga Anda dapat menelusuri sumber HiDrive dan tujuan B2 secara berdampingan sebelum melakukan transfer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Mengonfigurasi Pekerjaan Migrasi

Gunakan tombol Sync pada tab Home untuk membuka wizard 4 langkah. Pada Langkah 1, pilih folder sumber HiDrive dan bucket Backblaze B2 sebagai tujuan, lalu pilih sinkronisasi satu arah agar migrasi hanya menulis ke B2 tanpa memengaruhi HiDrive. Langkah 2 memungkinkan Anda mengaktifkan perbandingan checksum sehingga file dicocokkan berdasarkan hash dan ukuran, bukan hanya waktu modifikasi — hal ini penting saat berpindah antara dua backend penyimpanan yang sangat berbeda. Langkah 3 mendukung pemfilteran berdasarkan jenis file, ukuran maksimum, atau usia file jika Anda hanya ingin memigrasikan sebagian terlebih dahulu.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

Jalankan Dry Run sebelum transfer sebenarnya — ini menampilkan daftar tepat apa yang akan disalin tanpa memindahkan satu byte pun, cara paling aman untuk menangkap jalur folder yang salah konfigurasi sebelum menjadi transfer besar yang tidak diinginkan.

## Memverifikasi Migrasi

Setelah sinkronisasi selesai, buka Folder Compare antara sumber HiDrive dan tujuan B2 untuk memastikan jumlah file dan ukurannya sesuai di kedua sisi. Job History mencatat total ukuran yang ditransfer, kecepatan transfer, dan jumlah file untuk setiap proses, sehingga Anda memiliki catatan untuk diperiksa jika ada yang terlihat tidak beres.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Backblaze B2 folders after migration in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan akun HiDrive Anda melalui OAuth dan tambahkan Backblaze B2 dengan Application Key ID dan Key Anda.
3. Konfigurasikan pekerjaan sinkronisasi satu arah dengan perbandingan checksum diaktifkan, lalu jalankan Dry Run terlebih dahulu.
4. Konfirmasi hasilnya dengan Folder Compare dan Job History sebelum menonaktifkan salinan HiDrive.

Beralih ke Backblaze B2 tidak berarti melepaskan struktur folder dan pengorganisasian file yang sudah dibangun di HiDrive — RcloneView menjaganya tetap utuh selama proses transfer.

---

**Panduan Terkait:**

- [Kelola Penyimpanan HiDrive — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Backblaze B2 — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Perbaiki Kesalahan Sinkronisasi HiDrive — Cadangan Cloud Andal dengan RcloneView](https://rcloneview.com/support/blog/fix-hidrive-sync-errors-rcloneview)

<CloudSupportGrid />
