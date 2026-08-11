---
slug: manage-rackcorp-object-storage-cloud-sync-rcloneview
title: "Kelola RackCorp Object Storage — Sinkronkan dan Cadangkan File dengan RcloneView"
authors:
  - tayson
description: "Hubungkan object storage RackCorp yang kompatibel dengan S3 ke RcloneView untuk penelusuran file drag-and-drop, sinkronisasi terjadwal, dan pencadangan lintas cloud."
keywords:
  - object storage RackCorp
  - RackCorp S3
  - RcloneView RackCorp
  - kelola file RackCorp
  - pencadangan cloud RackCorp
  - sinkronisasi RackCorp
  - GUI penyimpanan kompatibel S3
  - klien GUI object storage
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola RackCorp Object Storage — Sinkronkan dan Cadangkan File dengan RcloneView

> Telusuri, sinkronkan, dan cadangkan bucket object storage RackCorp dengan alur kerja drag-and-drop yang sama seperti yang Anda gunakan untuk setiap cloud lain di RcloneView.

Object storage RackCorp yang kompatibel dengan S3 memberi tim alternatif regional dibandingkan hyperscaler besar, tetapi mengelola bucket biasanya berarti harus berpindah-pindah antara alat CLI terpisah atau tab konsol browser. RcloneView terhubung ke RackCorp melalui protokol S3 rclone dan menempatkan bucket Anda di jendela explorer yang sama dengan Google Drive, OneDrive, atau remote lain yang sudah Anda kelola. Berbeda dari alat yang hanya bisa mount, RcloneView juga menyinkronkan dan membandingkan folder — pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan RackCorp ke RcloneView

RackCorp object storage ditambahkan seperti penyedia yang kompatibel dengan S3 lainnya: buka tab Remote > New Remote, pilih opsi yang kompatibel dengan S3, lalu masukkan Access Key ID, Secret Access Key, dan URL endpoint RackCorp Anda. RcloneView meneruskan kredensial ini langsung ke konfigurasi rclone, sehingga tidak ada driver atau plugin terpisah yang perlu diinstal — binari rclone bawaan yang menangani negosiasi protokol.

Setelah remote dibuat, remote akan muncul sebagai tab baru di panel Explorer. Anda dapat menelusuri bucket dengan List View untuk metadata terperinci, atau beralih ke Thumbnail View jika Anda menyimpan gambar dan ingin pemindaian visual cepat. Pohon folder di sebelah kiri memungkinkan Anda berpindah antar-prefix tanpa mengetik ulang path.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote baru yang kompatibel dengan S3 untuk RackCorp object storage di RcloneView" class="img-large img-center" />

Klik kanan pada objek apa pun di daftar file untuk mengakses Copy, Cut, Rename, Get Size, atau Get Public Link — menu konteks yang sama seperti yang Anda gunakan untuk file lokal, diterapkan langsung ke bucket RackCorp Anda.

## Menyinkronkan RackCorp dengan Cloud Lain

Object storage jarang berdiri sendiri. Pola umum adalah menyimpan salinan kerja di Google Drive atau OneDrive untuk pengeditan sehari-hari, sambil mengarsipkan aset yang sudah selesai ke RackCorp untuk retensi jangka panjang yang lebih murah. Wizard Sync 4 langkah RcloneView menangani ini tanpa menyentuh terminal: pilih RackCorp sebagai sumber atau tujuan, atur filter untuk mengecualikan file sementara atau aset yang terlalu besar, lalu pilih sinkronisasi satu arah agar arsip hanya menerima materi baru.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mengonfigurasi tugas sinkronisasi cloud-ke-cloud antara RackCorp dan remote lain di RcloneView" class="img-large img-center" />

Sebelum melakukan transfer penuh, jalankan Dry Run untuk melihat pratinjau tepat file mana yang akan disalin atau dihapus. Ini sangat berguna dengan object storage, di mana mengunggah ulang bucket besar secara tidak sengaja dapat memboroskan bandwidth dan waktu.

## Mengotomatiskan Pencadangan dengan Tugas Terjadwal

Untuk tim dengan lisensi PLUS, tugas sinkronisasi RackCorp dapat berjalan sesuai jadwal bergaya crontab alih-alih memerlukan pemicu manual setiap kali. Atur bidang menit, jam, dan hari sekali saja, dan RcloneView akan menjaga bucket RackCorp Anda tetap terkini di latar belakang — periksa tab Job History setelahnya untuk mengonfirmasi status, kecepatan transfer, dan jumlah file setiap proses.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menyiapkan tugas sinkronisasi terjadwal untuk RackCorp object storage di RcloneView" class="img-large img-center" />

Aktifkan verifikasi checksum di langkah Advanced Settings jika integritas data lebih penting daripada kecepatan mentah — RcloneView membandingkan hash file, bukan hanya ukuran dan stempel waktu, sehingga menangkap kerusakan senyap selama transfer.

## Mulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab Remote > New Remote dan pilih opsi yang kompatibel dengan S3 untuk RackCorp.
3. Masukkan Access Key ID, Secret Access Key, dan endpoint RackCorp Anda untuk terhubung.
4. Siapkan tugas sinkronisasi atau pencadangan untuk menjaga RackCorp tetap selaras dengan remote cloud lainnya.

Setelah terhubung, RackCorp berperilaku seperti tab lain mana pun di workspace RcloneView Anda — tanpa konsol terpisah, tanpa flag CLI yang perlu dihafal.

---

**Panduan Terkait:**

- [Kelola Scaleway Object Storage — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Kelola Selectel Cloud Storage — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [VFS Cache — Performa Mount Cloud Lebih Cepat di RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />
