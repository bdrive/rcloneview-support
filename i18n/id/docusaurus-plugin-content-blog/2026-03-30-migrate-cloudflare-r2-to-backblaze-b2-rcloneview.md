---
slug: migrate-cloudflare-r2-to-backblaze-b2-rcloneview
title: "Migrasi Cloudflare R2 ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara migrasi file dari Cloudflare R2 ke Backblaze B2 menggunakan antarmuka visual RcloneView. Transfer penyimpanan yang kompatibel dengan S3 tanpa perintah CLI."
keywords:
  - cloudflare r2 to backblaze b2
  - migrate r2 to b2
  - cloudflare r2 migration
  - backblaze b2 transfer
  - cloud-to-cloud migration
  - rcloneview cloud transfer
  - s3 compatible migration
  - object storage migration
  - r2 backup to b2
tags:
  - RcloneView
  - cloudflare-r2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Cloudflare R2 ke Backblaze B2 — Transfer File dengan RcloneView

> Berpindah dari Cloudflare R2 ke Backblaze B2 tidak harus berarti menulis skrip atau mengelola token API di terminal.

Cloudflare R2 menawarkan harga zero-egress, tetapi beberapa tim menilai bahwa integrasi ekosistem Backblaze B2 yang lebih dalam, kebijakan siklus hidup (lifecycle policies), dan kemitraan Bandwidth Alliance menjadikannya pilihan jangka panjang yang lebih baik. Baik Anda sedang mengonsolidasikan penyimpanan objek atau memindahkan beban kerja, RcloneView memungkinkan Anda memigrasikan setiap bucket dari R2 ke B2 melalui antarmuka klik-dan-pilih — tanpa perlu CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Bermigrasi dari Cloudflare R2 ke Backblaze B2

Backblaze B2 menyediakan integrasi native dengan mitra CDN seperti Cloudflare (melalui Bandwidth Alliance) dan Fastly, yang berarti egress dari B2 melalui jaringan tersebut gratis atau mendapat diskon besar. B2 juga mendukung endpoint API yang kompatibel dengan S3 selain API native-nya sendiri, memberikan fleksibilitas dalam cara aplikasi terhubung. Bagi tim yang membutuhkan aturan siklus hidup tingkat aplikasi, manajemen kunci enkripsi sisi server, atau notifikasi peristiwa, B2 menghadirkan fitur yang belum ditandingi oleh set fitur R2 saat ini.

Prediktabilitas biaya adalah faktor lain. Backblaze B2 mengenakan biaya flat $6 per TB per bulan untuk penyimpanan dengan egress gratis melalui jaringan mitra. Jika arsitektur Anda sudah merutekan trafik melalui CDN Cloudflare, kombinasi penyimpanan B2 dengan pengiriman Cloudflare bisa lebih ekonomis dibandingkan R2 saja, setelah memperhitungkan biaya compute dan Workers.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudflare R2 and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Menyiapkan Kedua Remote di RcloneView

Buka RcloneView dan buat remote baru untuk Cloudflare R2. Pilih "Amazon S3 Compliant" sebagai tipe provider, lalu pilih "Cloudflare R2" dari dropdown provider S3. Masukkan R2 Access Key ID, Secret Access Key, dan endpoint URL Anda — biasanya dalam format `https://<account-id>.r2.cloudflarestorage.com`. RcloneView akan memvalidasi koneksi sebelum menyimpannya.

Selanjutnya, tambahkan remote Backblaze B2. Anda dapat menggunakan tipe provider B2 native atau antarmuka yang kompatibel dengan S3. Untuk opsi native, masukkan B2 Application Key ID dan Application Key Anda. RcloneView akan menampilkan daftar bucket yang sudah ada secara otomatis setelah terhubung. Jika bucket tujuan belum ada, buat terlebih dahulu di konsol B2 dengan region dan pengaturan enkripsi pilihan Anda.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from R2 to B2" class="img-large img-center" />

## Menjalankan Migrasi

Setelah kedua remote dikonfigurasi, buka explorer dua panel RcloneView. Pilih remote R2 Anda di satu sisi dan remote B2 di sisi lainnya. Jelajahi bucket sumber di R2 dan bucket tujuan di B2. Anda dapat menyeret dan melepas (drag and drop) seluruh isi bucket atau memilih prefix dan folder tertentu untuk ditransfer.

Untuk migrasi berskala besar, buat job sinkronisasi atau salin (copy) sebagai gantinya. Buka Job Manager, tetapkan R2 sebagai sumber dan B2 sebagai tujuan, lalu pilih mode "Copy" untuk memastikan file sampai di B2 tanpa menghapus apa pun dari R2 selama proses transisi. Aktifkan verifikasi checksum untuk memvalidasi bahwa setiap objek tiba dengan utuh — baik R2 maupun B2 mendukung checksum MD5 pada unggahan yang kompatibel dengan S3, sehingga RcloneView dapat memverifikasi integritas end-to-end.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Cloudflare R2 to Backblaze B2" class="img-large img-center" />

## Menjadwalkan dan Memantau Transfer

Jika bucket R2 Anda berisi data berukuran terabyte, pecah migrasi menjadi job-job terjadwal. Scheduler RcloneView memungkinkan Anda menjalankan transfer pada jam-jam sepi (off-peak) untuk menghindari saturasi jaringan. Tetapkan batas bandwidth per job agar layanan lain tetap berjalan lancar.

Pantau progres di dashboard transfer, yang menampilkan throughput real-time, jumlah file, dan error yang mungkin terjadi. Setelah penyalinan awal selesai, alihkan job ke mode "Sync" dan jalankan secara berkala hingga Anda mengalihkan endpoint aplikasi dari R2 ke B2.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling R2 to B2 migration jobs in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Cloudflare R2 Anda menggunakan kredensial yang kompatibel dengan S3 dan endpoint akun Anda.
3. Tambahkan remote Backblaze B2 Anda dengan Application Key ID dan Application Key Anda.
4. Buat job Copy dari R2 ke B2 dengan verifikasi checksum diaktifkan, lalu jadwalkan agar berjalan pada jam-jam sepi.

Setelah semua objek terverifikasi di B2, perbarui endpoint aplikasi Anda dan nonaktifkan bucket R2 sesuai kecepatan Anda sendiri.

---

**Panduan Terkait:**

- [Pindah dari Cloudflare R2 ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [Bandingkan Cloudflare R2 dan AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [Sentralisasi S3, Wasabi, dan R2 dengan RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
