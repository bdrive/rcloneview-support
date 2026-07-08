---
slug: manage-ionos-object-storage-cloud-sync-rcloneview
title: "Kelola IONOS Object Storage — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - jay
description: "Pelajari cara menghubungkan IONOS Object Storage ke RcloneView dan melakukan sinkronisasi, pencadangan, atau transfer file dengan antarmuka visual yang kompatibel dengan S3 sepenuhnya. Tidak perlu CLI."
keywords:
  - IONOS Object Storage
  - sinkronisasi cloud IONOS
  - pencadangan file IONOS
  - RcloneView IONOS
  - penyimpanan cloud kompatibel S3 Eropa
  - penyimpanan cloud Eropa GDPR
  - GUI rclone IONOS
  - sinkronisasi IONOS ke Google Drive
  - pencadangan cloud IONOS
  - kelola file IONOS RcloneView
tags:
  - RcloneView
  - cloud-storage
  - s3-compatible
  - european-cloud
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola IONOS Object Storage — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan IONOS Object Storage ke RcloneView dan kelola file cloud Eropa Anda secara visual — sinkronisasi, pencadangan, dan transfer tanpa menyentuh command line.

IONOS Object Storage adalah layanan penyimpanan cloud yang kompatibel dengan S3 dari IONOS SE, salah satu penyedia infrastruktur cloud terbesar di Eropa. Tim yang menjalankan alur kerja sensitif GDPR atau memerlukan residensi data Eropa semakin banyak beralih ke IONOS sebagai object store yang andal dan hemat biaya. Dengan RcloneView, Anda dapat terhubung, menjelajah, sinkronisasi, dan mengotomatiskan pencadangan ke IONOS dari GUI desktop yang bersih — tanpa perlu perintah rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan IONOS Object Storage ke RcloneView

IONOS Object Storage menggunakan API yang kompatibel dengan S3, artinya layanan ini menerima konfigurasi Access Key, Secret Key, dan endpoint yang sama seperti Amazon S3. Alat apa pun yang mendukung S3 — termasuk rclone — dapat membaca dan menulis ke bucket IONOS tanpa adaptor khusus penyedia mana pun.

Untuk menambahkan IONOS sebagai remote, buka **tab Remote** dan klik **New Remote**. Pilih **Amazon S3** sebagai jenis penyedia, lalu masukkan Access Key ID, Secret Access Key, dan URL endpoint regional IONOS Anda dari panel kontrol IONOS. Setelah disimpan, bucket Anda akan langsung muncul di file explorer dua panel. Anda dapat menjelajahi folder, melihat pratinjau gambar dalam tampilan thumbnail, dan klik kanan pada file mana pun untuk menyalin, memindahkan, mengganti nama, atau membuat tautan publik — semuanya dalam antarmuka desktop yang familier.

<img src="/support/images/en/blog/new-remote.png" alt="Adding IONOS Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

## Menyinkronkan IONOS dengan Penyedia Cloud Lain

Mesin transfer cloud-ke-cloud milik RcloneView memungkinkan Anda memindahkan data antara IONOS dan remote lain tanpa perlu mengunduh ke disk lokal terlebih dahulu. Tim legal yang mengarsipkan dokumen yang diatur GDPR ke IONOS dapat sekaligus menyinkronkan arsip tersebut ke remote Crypt terenkripsi di Backblaze B2 sebagai pencadangan off-site sekunder — dikonfigurasi sekali dan berjalan dari jendela Job Manager yang sama.

RcloneView juga mendukung sinkronisasi 1:N: satu sumber IONOS dapat disebarkan ke beberapa tujuan secara bersamaan. Agensi media dengan 500GB aset kampanye dapat mencerminkan bucket IONOS mereka ke Wasabi dan NAS lokal sekaligus dalam satu job terjadwal. Opsi checksum pada wizard sinkronisasi memastikan salinan yang identik byte demi byte antara IONOS dan tujuan mana pun, menangkap kerusakan data yang tidak akan terdeteksi hanya dengan perbandingan ukuran file.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from IONOS Object Storage to another provider in RcloneView" class="img-large img-center" />

## Mengotomatiskan Pencadangan Terjadwal ke IONOS

Dengan lisensi **RcloneView PLUS**, Anda dapat melampirkan jadwal bergaya crontab ke job sinkronisasi mana pun. Pencadangan malam hari dari folder lokal ke bucket IONOS menjadi rutinitas yang sepenuhnya otomatis — konfigurasikan sekali, dan RcloneView menjalankannya di latar belakang pada waktu yang ditentukan, bahkan saat jendela utama tertutup.

Wizard penjadwalan menerima field menit, jam, hari-dalam-minggu, dan bulan, mendukung daftar (1,3,5), rentang (9-17), dan interval langkah (*/2). Gunakan tombol bawaan **Simulate schedule** untuk melihat pratinjau waktu eksekusi berikutnya sebelum menyimpan. Setelah setiap kali berjalan, tab **Job History** mencatat waktu mulai, durasi, jumlah file, ukuran transfer, dan status — memberikan jejak audit yang bersih tanpa alat pemantauan tambahan apa pun.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated IONOS cloud backup jobs in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **tab Remote > New Remote**, pilih **Amazon S3** sebagai jenis penyedia, dan masukkan Access Key ID, Secret Access Key, serta endpoint IONOS Anda dari panel kontrol IONOS.
3. Jelajahi bucket IONOS Anda di file explorer dan verifikasi aksesnya.
4. Buat job sinkronisasi atau pencadangan di **Job Manager** — opsional mengaktifkan penjadwalan (PLUS) untuk proses malam hari otomatis.

IONOS Object Storage yang dipadukan dengan RcloneView memberikan tim di Eropa back end penyimpanan yang ramah GDPR dan kompatibel dengan S3, dengan kemudahan penggunaan seperti file manager desktop native.

---

**Panduan Terkait:**

- [Kelola Wasabi Object Storage dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Kelola IDrive E2 Cloud Storage dengan RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Sentralisasi Amazon S3, Wasabi, dan Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
