---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Mengelola Penyimpanan Petabox — Sinkronisasi dan Cadangkan File dengan RcloneView"
authors:
  - kai
description: "Hubungkan penyimpanan objek Petabox yang kompatibel dengan S3 ke RcloneView untuk penjelajahan, sinkronisasi, pencadangan, dan mounting lintas platform dalam satu GUI."
keywords:
  - Petabox RcloneView
  - penyimpanan cloud Petabox
  - penyimpanan objek kompatibel S3
  - pencadangan Petabox
  - sinkronisasi Petabox
  - mount Petabox
  - GUI penyimpanan objek
  - manajemen file Petabox
  - manajer penyimpanan cloud
  - sinkronisasi bucket Petabox
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Penyimpanan Petabox — Sinkronisasi dan Cadangkan File dengan RcloneView

> Jelajahi, sinkronkan, dan cadangkan bucket Petabox bersama dengan setiap cloud lain yang Anda gunakan — dari satu jendela desktop.

Petabox adalah layanan penyimpanan objek yang kompatibel dengan S3, yang berarti RcloneView dapat terhubung ke sana dengan cara yang sama seperti terhubung ke Amazon S3, Wasabi, atau penyedia protokol S3 lainnya: menggunakan Access Key ID, Secret Access Key, dan endpoint. Setelah terhubung, bucket Petabox akan muncul sebagai remote biasa di penjelajah file, siap untuk dijelajahi, ditransfer, dan dijadwalkan seperti folder lokal mana pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Petabox sebagai Remote Baru

Buka Remote Manager dari tab Remote dan pilih New Remote. Karena Petabox diakses melalui protokol S3 milik rclone, pilih opsi kompatibel S3 dan masukkan Access Key ID, Secret Access Key, serta URL endpoint Petabox yang disediakan oleh akun Anda. Tidak ada alur OAuth browser yang perlu diselesaikan — kredensial saja sudah cukup untuk mengautentikasi koneksi, dan remote akan muncul di bilah tab Anda segera setelah uji koneksi berhasil.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote baru yang kompatibel dengan S3 di RcloneView" class="img-large img-center" />

Berbeda dengan alat yang hanya bisa mount, RcloneView juga menyediakan sinkronisasi dan perbandingan folder pada lisensi FREE — bucket Petabox mendapatkan fitur sinkronisasi, perbandingan, dan riwayat tugas yang sama seperti penyedia lain yang didukung, tanpa perlu upgrade untuk memulai.

## Menjelajahi, Mentransfer, dan Menyinkronkan Bucket

Setelah Petabox ditambahkan, bagi penjelajah Anda menjadi dua panel — satu menampilkan folder lokal atau cloud lain, yang lainnya menampilkan bucket Petabox Anda — lalu seret file di antara keduanya. Memindahkan file dalam remote yang sama akan melakukan operasi pemindahan (move); menyeret antar remote yang berbeda akan melakukan operasi penyalinan (copy), sehingga Anda dapat menyiapkan pencadangan Petabox tanpa menyentuh file sumber.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mentransfer file antara folder lokal dan bucket Petabox" class="img-large img-center" />

Untuk transfer berulang, gunakan wizard Sync 4 langkah: pilih sumber dan tujuan, atur jumlah transfer bersamaan dan jumlah equality checker di Advanced Settings, lalu terapkan filter berdasarkan tipe file, ukuran, atau usia sebelum menyimpan tugas. Jalankan Dry Run terlebih dahulu untuk melihat pratinjau tepat apa yang akan disalin atau dihapus sebelum melakukan transfer yang sesungguhnya.

## Menjadwalkan Pencadangan dan Memantau Tugas

Setelah tugas sinkronisasi disimpan di Job Manager, pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab agar pencadangan Petabox berjalan otomatis sesuai jadwalnya sendiri, dengan pratinjau waktu eksekusi mendatang sebelum Anda menyimpannya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Mengatur jadwal pencadangan berulang untuk tugas sinkronisasi Petabox" class="img-large img-center" />

Setiap proses — baik terjadwal maupun manual — dicatat di Job History beserta status, kecepatan transfer, jumlah file, dan ukuran total, sehingga Anda dapat memastikan pencadangan Petabox selesai dengan baik atau menemukan proses yang gagal untuk dicoba ulang.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat Access Key ID dan Secret Access Key dari akun Petabox Anda dan catat URL endpoint-nya.
3. Tambahkan Petabox sebagai remote baru yang kompatibel dengan S3 di Remote Manager dan uji koneksinya.
4. Jalankan sinkronisasi Dry Run sebelum menjadwalkan pencadangan berulang ke bucket Petabox Anda.

Dengan Petabox terhubung, penyimpanan objek Anda akan berada tepat di samping setiap cloud lain yang Anda kelola — tanpa klien terpisah, tanpa berpindah jendela.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Storj — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan IDrive E2 — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan Wasabi — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
