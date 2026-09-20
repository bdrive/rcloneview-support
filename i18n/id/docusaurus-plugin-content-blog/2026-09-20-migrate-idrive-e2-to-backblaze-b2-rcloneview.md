---
slug: migrate-idrive-e2-to-backblaze-b2-rcloneview
title: "Migrasi dari IDrive e2 ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - steve
description: "Pindahkan bucket dari IDrive e2 ke Backblaze B2 dengan alat transfer cloud-ke-cloud, pratinjau dry run, dan riwayat tugas milik RcloneView."
keywords:
  - migrate idrive e2 to backblaze b2
  - idrive e2 to backblaze b2 transfer
  - s3 compatible storage migration
  - cloud to cloud object storage transfer
  - RcloneView migration guide
  - backblaze b2 bucket migration
  - idrive e2 rcloneview
  - object storage provider switch
tags:
  - RcloneView
  - idrive-e2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi dari IDrive e2 ke Backblaze B2 — Transfer File dengan RcloneView

> Pindahkan bucket object storage antara dua penyedia yang kompatibel dengan S3 tanpa perlu menyimpan file secara lokal terlebih dahulu.

Beralih penyedia object storage yang kompatibel dengan S3 biasanya berarti harus mengurai access key, endpoint, dan struktur bucket terlebih dahulu sebelum satu file pun dipindahkan. RcloneView terhubung ke IDrive e2 maupun Backblaze B2 sebagai remote native, sehingga migrasi di antara keduanya menjadi transfer cloud-ke-cloud langsung, bukan proses dua langkah unduh-lalu-unggah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Kedua Remote

IDrive e2 dan Backblaze B2 keduanya dikonfigurasi melalui pengaturan remote kompatibel S3 milik RcloneView, yang masing-masing memerlukan Access Key, Secret Key, dan endpoint. Khusus untuk Backblaze B2, RcloneView juga mendukung metode input kredensial native-nya menggunakan Application Key ID dan Application Key, yang lebih disukai sebagian tim dibandingkan jalur kompatibel S3. Setelah kedua remote muncul di Remote Manager, buka dua panel Explorer berdampingan — satu untuk setiap remote — menggunakan tata letak pembagian horizontal atau vertikal milik RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote manager with IDrive e2 and Backblaze B2 remotes configured" class="img-large img-center" />

Dengan kedua bucket terlihat sekaligus, Anda dapat menelusuri struktur folder di kedua sisi sebelum melakukan transfer, sehingga dapat menangkap ketidaksesuaian penamaan atau folder bertingkat yang tidak terduga sejak awal.

## Menjalankan Transfer sebagai Tugas Sinkronisasi

Daripada menyeret bucket besar secara manual, siapkan tugas Sync melalui wizard 4 langkah: pilih IDrive e2 sebagai sumber, Backblaze B2 sebagai tujuan, dan pilih sinkronisasi satu arah sehingga tujuan hanya dimodifikasi agar sesuai dengan sumber — tidak ada perubahan apa pun pada IDrive e2. Pada Langkah 2, RcloneView melakukan mount sekaligus sinkronisasi 90+ penyedia dari satu jendela, dan memungkinkan Anda mengatur jumlah transfer file serta mengaktifkan perbandingan checksum sehingga file diverifikasi berdasarkan hash dan ukuran, bukan hanya waktu modifikasi — hal ini penting saat bermigrasi antara dua backend penyimpanan yang berbeda.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView sync job configured between two S3-compatible object storage remotes" class="img-large img-center" />

Sebelum menjalankan transfer yang sesungguhnya, gunakan Dry Run untuk melihat pratinjau file mana saja yang akan disalin dan memastikan tidak ada yang terhapus atau terlewat secara tidak terduga.

## Memverifikasi Migrasi

Setelah sinkronisasi selesai, Job History menampilkan total ukuran yang ditransfer, kecepatan transfer, dan jumlah file untuk proses tersebut, memberi Anda catatan untuk dibandingkan dengan total bucket sumber. Sebagai pemeriksaan tambahan, alat Folder Compare milik RcloneView dapat menjalankan perbandingan berdampingan antara kedua bucket setelah migrasi, menandai file mana pun yang berbeda ukurannya atau hanya ada di salah satu sisi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing a completed cloud-to-cloud migration" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote IDrive e2 Anda dengan Access Key, Secret Key, dan endpoint-nya.
3. Tambahkan remote Backblaze B2 Anda menggunakan kredensial kompatibel S3 atau native.
4. Konfigurasikan tugas sinkronisasi satu arah, jalankan Dry Run terlebih dahulu, lalu eksekusi dan verifikasi dengan Job History.

Migrasi bucket yang bersih intinya adalah memverifikasi sebelum dan sesudahnya — alat dry run dan perbandingan milik RcloneView menjadikan kedua langkah tersebut bagian dari alur kerja yang sama.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan IDrive e2 — Sinkronisasi dan Backup File dengan RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan Backblaze B2 — Sinkronisasi dan Backup File dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 — Perbandingan Object Storage](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
