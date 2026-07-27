---
slug: migrate-proton-drive-to-wasabi-rcloneview
title: "Migrasi Proton Drive ke Wasabi — Transfer File dengan RcloneView"
authors:
  - kai
description: "Pindahkan file terenkripsi dari Proton Drive ke penyimpanan objek Wasabi dengan transfer cloud-ke-cloud langsung dari RcloneView, tanpa perlu unduhan lokal."
keywords:
  - migrasi Proton Drive ke Wasabi
  - transfer Proton Drive ke Wasabi
  - migrasi cloud ke cloud
  - pencadangan penyimpanan objek Wasabi
  - pencadangan Proton Drive
  - transfer file Proton Drive
  - migrasi RcloneView
  - migrasi penyimpanan cloud terenkripsi
tags:
  - RcloneView
  - proton-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Proton Drive ke Wasabi — Transfer File dengan RcloneView

> Pindahkan file langsung dari Proton Drive ke penyimpanan objek Wasabi tanpa melewati disk lokal terlebih dahulu.

Proton Drive dirancang untuk penyimpanan pribadi yang berfokus pada privasi, tetapi bukan dirancang untuk beban kerja yang ditangani dengan baik oleh Wasabi — pustaka media besar, pencadangan aplikasi, atau kumpulan data yang membutuhkan akses kompatibel S3 dari alat lain. Ketika pengguna melampaui kasus penggunaan Proton Drive, atau sekadar ingin salinan jangka panjang kedua yang lebih murah, RcloneView memindahkan file langsung di antara keduanya, dengan terhubung ke kedua remote sekaligus alih-alih mengunduh semuanya secara lokal terlebih dahulu.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Kedua Remote

Proton Drive di RcloneView disiapkan dengan email dan kata sandi (ditambah 2FA opsional), sementara Wasabi ditambahkan sebagai remote kompatibel S3 menggunakan Access Key ID, Secret Access Key, dan endpoint regional yang sesuai. Kedua remote muncul sebagai tab di Explorer, sehingga pengguna dapat menjelajahi folder Proton Drive di satu panel dan bucket Wasabi di panel lainnya sebelum memulai transfer apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Menyiapkan remote Proton Drive dan Wasabi di RcloneView" class="img-large img-center" />

RcloneView juga menghubungkan S3, Azure, dan Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, sehingga menyiapkan sisi Wasabi dari migrasi ini tidak memerlukan tingkatan berbayar.

## Menjalankan Transfer Cloud-ke-Cloud

Dengan kedua remote terbuka, menyeret folder dari panel Proton Drive ke panel Wasabi memicu penyalinan langsung — data dialirkan dari Proton Drive ke Wasabi melalui RcloneView, tanpa pernah menyentuh disk lokal. Untuk migrasi yang lebih besar, wizard Sinkronisasi adalah alat yang lebih baik: alat ini mendukung sinkronisasi satu arah yang tepat dari sumber Proton Drive ke bucket tujuan Wasabi, dengan jumlah transfer bersamaan yang dapat dikonfigurasi untuk memanfaatkan bandwidth yang tersedia secara maksimal.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer file cloud-ke-cloud dari Proton Drive ke Wasabi di RcloneView" class="img-large img-center" />

Mode Dry Run patut dijalankan lebih dulu pada migrasi besar apa pun — mode ini menampilkan daftar file mana yang akan disalin sebelum benar-benar ada yang dipindahkan, sehingga dapat menangkap kesalahan filter atau struktur folder yang tidak terduga sejak awal.

## Memastikan Migrasi Selesai Sepenuhnya

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Transfer file dengan seret dan lepas ke remote Wasabi di RcloneView" class="img-large img-center" />

Setelah tugas sinkronisasi selesai, tab Transfer di Tampilan Info bagian bawah menunjukkan total file yang dipindahkan, kecepatan transfer, dan setiap kesalahan yang ditemui selama tugas berlangsung. Untuk migrasi yang dijalankan sebagai tugas tersimpan alih-alih transfer satu kali, Riwayat Tugas menyimpan catatan permanen — waktu mulai, durasi, ukuran total, dan status penyelesaian — sehingga ada log yang jelas untuk memastikan setiap file telah sampai di Wasabi sebelum salinan Proton Drive dipensiunkan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Proton Drive Anda menggunakan email dan kata sandi akun Anda.
3. Tambahkan remote Wasabi Anda dengan Access Key, Secret Key, dan endpoint regionalnya.
4. Jalankan Dry Run terlebih dahulu, lalu jalankan sinkronisasi dan konfirmasi transfer di Riwayat Tugas.

Mempensiunkan folder Proton Drive menjadi jauh lebih tidak membuat stres begitu ada log terverifikasi yang menunjukkan setiap file sudah tiba dengan aman di Wasabi.

---

**Panduan Terkait:**

- [Kelola Proton Drive — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Kelola Penyimpanan Wasabi — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrasi Proton Drive ke Backblaze B2 — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
