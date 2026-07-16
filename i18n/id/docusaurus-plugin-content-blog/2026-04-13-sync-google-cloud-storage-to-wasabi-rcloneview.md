---
slug: sync-google-cloud-storage-to-wasabi-rcloneview
title: "Sinkronisasi Google Cloud Storage ke Wasabi — Pencadangan Hemat Biaya dengan RcloneView"
authors:
  - tayson
description: "Pindahkan data dari Google Cloud Storage ke penyimpanan S3-compatible Wasabi untuk penghematan biaya yang signifikan. RcloneView menangani kedua penyedia dan mengotomatiskan pekerjaan sinkronisasi."
keywords:
  - Google Cloud Storage to Wasabi sync
  - GCS Wasabi migration RcloneView
  - Wasabi cost-effective cloud backup
  - Google Cloud Storage backup alternative
  - S3-compatible cloud migration
  - cloud storage cost optimization
  - GCS Wasabi transfer
  - RcloneView Google Cloud Wasabi
tags:
  - RcloneView
  - google-cloud-storage
  - wasabi
  - cloud-to-cloud
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Cloud Storage ke Wasabi — Pencadangan Hemat Biaya dengan RcloneView

> Wasabi menawarkan penyimpanan cloud hot dengan biaya jauh lebih rendah dibandingkan biaya per-GB Google Cloud Storage — RcloneView menghubungkan keduanya dan mengotomatiskan proses migrasi atau sinkronisasi berkelanjutan.

Google Cloud Storage terintegrasi secara mendalam ke dalam alur kerja GCP, tetapi biaya penyimpanannya cepat membengkak untuk dataset besar. Wasabi menyediakan penyimpanan hot yang kompatibel dengan S3 dengan model harga flat per-TB dan tanpa biaya egress, sehingga menarik sebagai target pencadangan sekunder atau tujuan migrasi untuk menghemat biaya. RcloneView mendukung kedua penyedia dan menangani pekerjaan sinkronisasi dari satu antarmuka GUI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Google Cloud Storage

Google Cloud Storage (GCS) dapat dihubungkan di RcloneView dengan dua cara: menggunakan penyedia GCS native atau antarmuka yang kompatibel dengan S3. Untuk sebagian besar pengaturan, penyedia GCS native lebih sederhana. Buka **Remote Manager**, klik **New Remote**, lalu pilih **Google Cloud Storage**.

Anda perlu memberikan **Project Number** (ditemukan di GCP Console pada Project Info). Autentikasi menggunakan kunci JSON service account atau OAuth. Untuk akses service account, unduh kunci JSON dari GCP Console → IAM & Admin → Service Accounts, lalu tentukan path-nya dalam konfigurasi remote. Untuk OAuth, RcloneView akan membuka browser Anda untuk otorisasi akun Google.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Google Cloud Storage and Wasabi remotes in RcloneView" class="img-large img-center" />

## Menghubungkan Wasabi

Di **Remote Manager**, klik **New Remote** lalu pilih **S3 Compatible** (Wasabi kompatibel dengan S3). Isi:

- **Access Key ID**: dari konsol Wasabi pada bagian Access Keys
- **Secret Access Key**: secret yang sesuai
- **Endpoint**: endpoint Wasabi untuk region Anda (misalnya, `s3.us-east-1.wasabisys.com` atau `s3.eu-central-1.wasabisys.com`)

Simpan remote tersebut. Pastikan bucket Wasabi Anda muncul di File Explorer sebelum melanjutkan.

## Menyiapkan Pekerjaan Sinkronisasi

Buka **Jobs** dan klik **New Job**. Jadikan Google Cloud Storage sebagai sumber — pilih bucket atau folder path tertentu. Jadikan Wasabi sebagai tujuan dengan bucket dan path target.

Pada langkah 2 dari wizard pekerjaan, konfigurasikan untuk sinkronisasi skala besar yang andal:

- **Transfers**: 8–16 (baik GCS maupun Wasabi menangani konkurensi tinggi dengan baik)
- **Checkers**: 8–16 (mengatur berapa banyak pemeriksaan kesetaraan yang berjalan secara paralel)
- **Checksum verification**: aktifkan untuk konfirmasi integritas data
- **Dry Run**: aktifkan terlebih dahulu untuk meninjau cakupan

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Cloud Storage to Wasabi sync" class="img-large img-center" />

## Menjadwalkan Sinkronisasi Berkelanjutan

Jika GCS tetap menjadi penyimpanan utama Anda dan Wasabi berfungsi sebagai lapisan pencadangan hemat biaya, jadwalkan pekerjaan sinkronisasi yang berulang. Dengan lisensi PLUS, buka pengaturan pekerjaan dan tambahkan jadwal cron pada langkah 3 — misalnya, `0 2 * * *` untuk pencadangan setiap malam pukul 2 pagi.

Sinkronisasi inkremental RcloneView berarti setiap eksekusi setelah migrasi awal hanya mentransfer file yang berubah atau baru. Tab **Job History** mencatat setiap eksekusi dengan jumlah file, data yang ditransfer, kecepatan, dan error — memberikan Anda jejak audit yang jelas.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Cloud Storage to Wasabi sync in RcloneView" class="img-large img-center" />

## Pertimbangan Biaya

Model harga Wasabi tidak memiliki biaya per-request dan tidak ada biaya egress (dalam batas penggunaan), sehingga dapat diprediksi untuk dataset besar. Migrasi GCS → Wasabi memang menimbulkan biaya egress GCS, tetapi ini adalah biaya satu kali untuk migrasi. Untuk pencadangan berkelanjutan, data berasal dari server atau pipeline aplikasi Anda, sehingga dampak egress bergantung pada pengaturan Anda.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan Google Cloud Storage di **Remote Manager** menggunakan Project Number dan JSON service account atau OAuth Anda.
3. Hubungkan Wasabi menggunakan Access Key, Secret Key, dan endpoint regional.
4. Buat pekerjaan sinkronisasi, jalankan Dry Run untuk mengonfirmasi cakupan, lalu jadwalkan untuk pencadangan otomatis yang berkelanjutan.

Memindahkan pencadangan GCS ke Wasabi biasanya menghasilkan pengurangan biaya penyimpanan yang signifikan tanpa mengorbankan aksesibilitas.

---

**Panduan Terkait:**

- [Mengelola Scaleway Object Storage dengan RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Migrasi Wasabi ke Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Mengotomatiskan Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
