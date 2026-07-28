---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Mengelola Penyimpanan Magalu Cloud — Sinkronkan dan Cadangkan File dengan RcloneView"
authors:
  - casey
description: "Hubungkan penyimpanan objek Magalu Cloud ke RcloneView untuk manajemen file seret-dan-lepas, sinkronisasi terjadwal, dan pencadangan lintas cloud."
keywords:
  - Magalu Cloud RcloneView
  - GUI penyimpanan objek Magalu
  - mengelola penyimpanan Magalu Cloud
  - cadangan cloud kompatibel S3
  - alat sinkronisasi Magalu Cloud
  - GUI penyimpanan objek Brasil
  - pengelola file Magalu Cloud
  - RcloneView remote kompatibel S3
  - sinkronisasi dan pencadangan penyimpanan cloud
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Penyimpanan Magalu Cloud — Sinkronkan dan Cadangkan File dengan RcloneView

> Jelajahi, sinkronkan, dan cadangkan penyimpanan objek Magalu Cloud dengan pengelola file seret-dan-lepas yang lengkap, alih-alih harus mengutak-atik kredensial API di terminal.

Magalu Cloud adalah layanan penyimpanan objek yang kompatibel dengan S3, yang berarti ia langsung cocok dengan alat apa pun yang dibangun di sekitar protokol S3. RcloneView memperlakukannya persis seperti Amazon S3 atau Backblaze B2: masukkan Access Key, Secret Key, dan endpoint, lalu bucket akan muncul di penjelajah file bersama semua remote lain yang Anda kelola. Hal ini praktis bagi tim yang sudah menjalankan beban kerja dari Brasil atau Amerika Latin dan menginginkan opsi penyimpanan objek tanpa harus meninggalkan perangkat S3 yang sudah mereka kenal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Remote Magalu Cloud

Menambahkan Magalu Cloud mengikuti alur input kredensial yang sama yang digunakan RcloneView untuk setiap penyedia yang kompatibel dengan S3: buka New Remote, pilih tipe kompatibel S3, lalu masukkan Access Key ID, Secret Access Key, dan URL endpoint Magalu Cloud untuk wilayah Anda. Setelah disimpan, bucket akan dimuat ke panel Explorer dengan navigasi pohon folder penuh, pratinjau thumbnail untuk gambar, dan akses klik kanan untuk menyalin, mengganti nama, menghapus, dan mendapatkan ukuran — tanpa perlu tab konsol S3 terpisah.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Magalu Cloud S3-compatible remote in RcloneView" class="img-large img-center" />

Karena RcloneView terhubung melalui backend S3 rclone, perilaku penyimpanan objek standar berlaku: folder adalah konstruksi virtual yang dibangun dari prefiks kunci, dan operasi file dipetakan ke panggilan PUT/GET/DELETE dasar yang dikeluarkan rclone. Tidak seperti alat khusus mount, RcloneView juga melakukan sinkronisasi dan membandingkan folder — pada lisensi FREE — sehingga bucket Magalu tidak terbatas hanya pada penelusuran pasif.

## Menyinkronkan Magalu Cloud dengan Penyimpanan Lain

Sebagian besar tim tidak menggunakan penyimpanan objek secara terpisah — ia digunakan bersama drive lokal, perangkat NAS, atau penyedia cloud lain sebagai bagian dari rencana pencadangan atau migrasi. Wizard sinkronisasi 4 langkah memungkinkan Anda mengatur bucket Magalu sebagai sumber atau tujuan, mengonfigurasi jumlah transfer bersamaan dan pemeriksa kesetaraan untuk transfer batch besar yang andal, serta menerapkan filter (ukuran file maksimum, usia file maksimum, pengecualian ekstensi) sehingga hanya file yang benar-benar Anda inginkan yang dipindahkan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job with a Magalu Cloud bucket as destination" class="img-large img-center" />

Jalankan Dry Run terlebih dahulu untuk melihat pratinjau file mana yang akan disalin atau dihapus sebelum melakukan transfer langsung — sangat berguna saat pertama kali mengarahkan tugas sinkronisasi ke bucket baru, ketika menetapkan folder sumber dan tujuan dengan benar menjadi paling penting.

## Menjadwalkan Pencadangan Magalu Berkala

Untuk rutinitas pencadangan yang berkelanjutan, pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab ke tugas sinkronisasi apa pun, sehingga folder proyek lokal atau remote cloud lain secara otomatis dicerminkan ke Magalu Cloud sesuai kadensi yang cocok — setiap malam, mingguan, atau interval khusus. Job History kemudian melacak durasi, kecepatan transfer, jumlah file, dan status penyelesaian setiap kali dijalankan, memberikan jejak audit yang jelas tanpa perlu memeriksa log terminal.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job to a Magalu Cloud bucket" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka New Remote, pilih tipe penyedia yang kompatibel dengan S3, dan masukkan Access Key, Secret Key, dan endpoint Magalu Cloud Anda.
3. Jelajahi bucket di panel Explorer untuk memastikan koneksi dan struktur folder.
4. Buat tugas sinkronisasi atau pencadangan yang menargetkan remote Magalu, jalankan Dry Run, lalu jalankan transfer.

Setelah terhubung, bucket Magalu Cloud berperilaku seperti remote lainnya di RcloneView — siap untuk penggunaan sehari-hari, transfer lintas cloud, dan perlindungan terjadwal.

---

**Panduan Terkait:**

- [Mengelola Pencadangan Cloud IDrive e2 S3 dengan RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Mengelola Cloudflare R2 — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — Pratinjau Sinkronisasi Cloud Sebelum Transfer dengan RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
