---
slug: manage-liara-object-storage-cloud-sync-rcloneview
title: "Mengelola Liara Object Storage — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - robin
description: "Hubungkan penyimpanan objek Liara yang kompatibel dengan S3 ke RcloneView untuk penjelajahan, sinkronisasi, pencadangan, dan mount lintas platform dalam satu GUI."
keywords:
  - Liara RcloneView
  - penyimpanan objek Liara
  - penyimpanan objek kompatibel S3
  - pencadangan Liara
  - sinkronisasi Liara
  - mount penyimpanan Liara
  - GUI penyimpanan objek
  - manajemen file Liara
  - pengelola penyimpanan cloud
  - sinkronisasi bucket Liara
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

# Mengelola Liara Object Storage — Sinkronisasi dan Pencadangan File dengan RcloneView

> Bawa bucket Liara ke jendela penjelajah yang sama dengan setiap cloud lain yang sudah Anda kelola.

Liara adalah layanan penyimpanan objek yang kompatibel dengan S3, dan RcloneView terhubung dengannya dengan cara yang sama seperti Amazon S3, Wasabi, atau penyedia protokol S3 lainnya — melalui Access Key, Secret Key, dan endpoint. Setelah remote ditambahkan, bucket Liara muncul sebagai tab biasa di file explorer, siap dijelajahi, ditransfer, dan dijadwalkan berdampingan dengan disk lokal dan akun cloud lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Liara sebagai Remote Baru

Buka Remote Manager dari tab Remote dan klik New Remote. Karena Liara diakses melalui protokol S3 milik rclone, pilih opsi S3-compatible dan masukkan Access Key, Secret Key, dan endpoint URL dari konsol Liara Anda. Tidak ada langkah login browser OAuth yang perlu diselesaikan — begitu tes koneksi berhasil, bucket akan muncul di bilah tab Anda seperti remote lainnya.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote baru yang kompatibel dengan S3 di RcloneView" class="img-large img-center" />

RcloneView melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux — Liara tidak memerlukan klien terpisah atau alur kerja yang berbeda dari akun cloud Anda yang lain.

## Menjelajahi, Mentransfer, dan Menyinkronkan Bucket

Bagi explorer Anda menjadi dua panel — satu menampilkan file lokal atau cloud lain, satunya lagi menampilkan bucket Liara Anda — lalu seret file di antara keduanya. Memindahkan dalam remote yang sama akan melakukan operasi move, sementara menyeret antar-remote yang berbeda akan melakukan operasi copy, sehingga Anda dapat menyiapkan pencadangan ke Liara tanpa mengganggu folder sumber.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mentransfer file antara folder lokal dan bucket Liara" class="img-large img-center" />

Untuk pekerjaan berulang, gunakan wizard Sync 4 langkah: pilih sumber dan tujuan, sesuaikan jumlah transfer bersamaan dan equality checker di Advanced Settings, lalu terapkan filter berdasarkan jenis file, ukuran, atau usia sebelum menyimpan. Jalankan Dry Run terlebih dahulu untuk melihat pratinjau persis apa yang akan disalin atau dihapus sebelum menjalankan sinkronisasi sesungguhnya.

## Menjadwalkan Pencadangan dan Memantau Pekerjaan

Setelah pekerjaan sinkronisasi disimpan di Job Manager, pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab sehingga pencadangan Liara berjalan otomatis dengan interval tetap, dengan pratinjau waktu eksekusi mendatang sebelum menyimpan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Mengatur jadwal pencadangan berulang untuk pekerjaan sinkronisasi Liara" class="img-large img-center" />

Setiap eksekusi — manual maupun terjadwal — dicatat di Job History lengkap dengan status, kecepatan transfer, jumlah file, dan ukuran total, sehingga Anda dapat memastikan pencadangan Liara selesai dengan baik atau menemukan eksekusi gagal yang perlu dicoba ulang.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat Access Key dan Secret Key dari konsol Liara Anda dan catat endpoint URL-nya.
3. Tambahkan Liara sebagai remote S3-compatible baru di Remote Manager dan uji koneksinya.
4. Jalankan sinkronisasi Dry Run sebelum menjadwalkan pencadangan berulang ke bucket Liara Anda.

Setelah Liara terhubung, penyimpanan objek Anda berada tepat di samping setiap cloud lain yang Anda kelola — satu explorer, satu set pekerjaan sinkronisasi, tanpa klien terpisah yang perlu dipelihara.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Petabox — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-petabox-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan Objek Scaleway — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Mengelola Penyimpanan Wasabi — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
