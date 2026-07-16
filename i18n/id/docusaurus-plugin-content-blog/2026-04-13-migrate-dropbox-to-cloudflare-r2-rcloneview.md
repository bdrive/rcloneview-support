---
slug: migrate-dropbox-to-cloudflare-r2-rcloneview
title: "Migrasikan Dropbox ke Cloudflare R2 — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Pindahkan file Anda dari Dropbox ke Cloudflare R2 menggunakan RcloneView. Hubungkan melalui OAuth dan API Token, tangani file besar, dan nikmati biaya egress nol di R2."
keywords:
  - migrate Dropbox to Cloudflare R2
  - Dropbox R2 transfer RcloneView
  - Dropbox to R2 migration
  - Cloudflare R2 cloud sync
  - zero egress cloud storage
  - cloud-to-cloud migration tool
  - Dropbox alternative R2
  - RcloneView migration guide
tags:
  - RcloneView
  - dropbox
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasikan Dropbox ke Cloudflare R2 — Transfer File dengan RcloneView

> Cloudflare R2 menawarkan penyimpanan objek yang kompatibel dengan S3 dengan biaya egress nol — RcloneView membuat perpindahan dari Dropbox menjadi mudah dengan tugas sinkronisasi cloud-to-cloud.

Cloudflare R2 telah menjadi alternatif menarik bagi tim yang beralih dari Dropbox. Tanpa biaya egress dan dukungan API yang kompatibel dengan S3, R2 cocok secara alami dengan alur kerja developer, pipeline aset statis, dan strategi pengarsipan yang mempertimbangkan biaya. Memindahkan file Dropbox Anda yang sudah ada ke R2 adalah migrasi cloud-to-cloud satu kali yang ditangani RcloneView tanpa merutekan data melalui komputer lokal Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Langkah 1 — Hubungkan Dropbox

Buka RcloneView dan masuk ke **Remote Manager**. Klik **New Remote** dan pilih **Dropbox**. Seperti kebanyakan penyedia OAuth, Dropbox akan membuka browser Anda untuk otorisasi — masuk dan klik Allow. RcloneView menyimpan token dan remote akan langsung muncul. Buka di File Explorer untuk memastikan file dan folder Dropbox Anda terlihat.

Jika Anda memiliki akun Dropbox Business, pastikan Anda masuk dengan akun yang memiliki konten yang ingin Anda migrasikan. Folder bersama yang dimiliki orang lain mungkin memiliki batasan akses.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Dropbox and Cloudflare R2 in RcloneView Remote Manager" class="img-large img-center" />

## Langkah 2 — Hubungkan Cloudflare R2

Di **Remote Manager**, klik **New Remote** dan pilih **S3 Compatible**. Cloudflare R2 menggunakan kredensial yang kompatibel dengan S3:

- **Access Key ID**: dari API Token Cloudflare R2 Anda (buat satu di dashboard Cloudflare di bawah R2 > Manage API Tokens)
- **Secret Access Key**: secret yang sesuai
- **Endpoint**: `https://{account-id}.r2.cloudflarestorage.com`

Account ID Anda muncul di sidebar dashboard Cloudflare. Simpan remote dan buka untuk memastikan bucket R2 Anda terlihat. Buat bucket tujuan jika belum ada.

## Langkah 3 — Siapkan Tugas Migrasi

Buka **Jobs** dan klik **New Job**. Atur Dropbox sebagai sumber. Anda dapat memilih root untuk memigrasikan semuanya, atau memilih folder tertentu. Atur Cloudflare R2 sebagai tujuan dan arahkan ke bucket target Anda.

Di langkah 2 wizard tugas, konfigurasikan opsi untuk migrasi:

- Mulai dengan **Dry Run** diaktifkan untuk melihat pratinjau daftar file
- Atur **transfers** ke 4–6 untuk migrasi Dropbox (nilai yang lebih tinggi dapat memicu batas rate Dropbox)
- Aktifkan **checksum verification** untuk memastikan file besar ditransfer tanpa kerusakan

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from Dropbox to Cloudflare R2 cloud-to-cloud" class="img-large img-center" />

## Menangani File Besar

Cloudflare R2 mendukung objek hingga 5 TB, dan RcloneView menggunakan multipart upload untuk file besar secara otomatis. Dropbox memiliki ukuran file maksimum 2 TB per file. Dalam praktiknya, untuk sebagian besar migrasi Dropbox, file akan berada jauh di bawah batas tersebut. Jika Anda memiliki file yang sangat besar dan transfer gagal, periksa tab Log untuk pesan error spesifik dan pertimbangkan untuk mengurangi jumlah transfer simultan.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer progress during Dropbox to R2 migration" class="img-large img-center" />

## Langkah 4 — Verifikasi dan Selesaikan

Setelah tugas migrasi utama selesai, gunakan **Folder Compare** untuk memverifikasi. Buka sumber Dropbox dan tujuan R2 secara berdampingan dan biarkan RcloneView mengidentifikasi perbedaan apa pun. Jalankan ulang tugas untuk file yang hilang. Setelah Anda yakin migrasi selesai, Anda dapat memperbarui aplikasi Anda untuk mengarah ke R2 dan mengakhiri akses Dropbox.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan Dropbox melalui OAuth di **Remote Manager**.
3. Hubungkan Cloudflare R2 menggunakan API Token, Secret, dan endpoint Account ID Anda.
4. Buat tugas migrasi, jalankan Dry Run untuk pratinjau, lalu jalankan transfer penuh.

Beralih ke Cloudflare R2 menghilangkan model harga per pengguna Dropbox dan menghapus biaya egress untuk konten yang diakses dari jaringan Cloudflare.

---

**Panduan Terkait:**

- [Migrasikan Wasabi ke Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Migrasikan Azure Blob ke Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [Perbaiki Error API Rate Limit Dropbox dengan RcloneView](https://rcloneview.com/support/blog/fix-dropbox-rate-limit-api-errors-rcloneview)

<CloudSupportGrid />
