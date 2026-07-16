---
slug: sync-google-drive-to-internet-archive-rcloneview
title: "Sinkronisasi Google Drive ke Internet Archive — Pelestarian Digital dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara mengarsipkan file Google Drive ke Internet Archive untuk pelestarian digital jangka panjang menggunakan RcloneView. Ideal untuk peneliti, jurnalis, dan pendidik."
keywords:
  - Google Drive Internet Archive sync
  - digital preservation RcloneView
  - archive Google Drive files
  - Internet Archive rclone GUI
  - long-term cloud backup
  - researcher data archiving
  - Google Drive backup Internet Archive
  - RcloneView digital archive
tags:
  - google-drive
  - internet-archive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Drive ke Internet Archive — Pelestarian Digital dengan RcloneView

> Internet Archive menawarkan penyimpanan permanen dan gratis untuk konten digital — RcloneView memudahkan Anda mengirim file Google Drive ke sana untuk pelestarian jangka panjang.

Peneliti yang mengarsipkan data lapangan, jurnalis yang menyimpan dokumen sumber, dan pendidik yang menjaga materi kursus semua menghadapi tantangan yang sama: Google Drive nyaman untuk pekerjaan aktif, tetapi tidak dirancang untuk pelestarian permanen. Internet Archive (archive.org) dirancang untuk itu. Layanan ini menyimpan konten tanpa batas waktu dan membuatnya dapat diakses secara publik (atau privat) dalam jangka panjang. RcloneView menghubungkan kedua penyedia ini dan memungkinkan Anda melakukan sinkronisasi konten Google Drive ke Internet Archive tanpa menyentuh command line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Google Drive

Buka RcloneView dan masuk ke **Remote Manager**. Klik **New Remote** dan pilih **Google Drive**. RcloneView akan membuka browser Anda untuk autentikasi OAuth — masuk dengan akun Google Anda dan berikan akses. Setelah otorisasi, remote akan muncul di Remote Manager. Buka remote tersebut untuk memastikan file Drive Anda terlihat.

Jika Anda perlu mengarsipkan **Shared Drive**, konfigurasikan remote agar mengarah ke root Shared Drive tertentu, bukan My Drive. Periksa pengaturan lanjutan remote di RcloneView untuk opsi team drive.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Drive and Internet Archive remotes in RcloneView" class="img-large img-center" />

## Menghubungkan Internet Archive

Kembali ke **Remote Manager**, klik **New Remote** dan pilih **Internet Archive**. Internet Archive menggunakan kredensial email/password (login akun archive.org Anda) atau kunci API yang kompatibel dengan S3 yang tersedia di pengaturan akun archive.org Anda. Masukkan Access Key dan Secret Key (kunci API S3 untuk Internet Archive) pada formulir konfigurasi lalu simpan.

Buka remote Internet Archive untuk memverifikasi koneksi. Item yang sudah ada di archive.org akan muncul sebagai entri tingkat atas.

## Mengonfigurasi Job Pengarsipan

Masuk ke **Jobs** dan klik **New Job**. Atur Google Drive sebagai sumber — pilih folder tertentu yang berisi data yang ingin Anda lestarikan. Atur remote Internet Archive sebagai tujuan, dengan menentukan identifier item tempat file akan disimpan.

Pada langkah 2 wizard job, konfigurasikan opsi yang sesuai untuk pengarsipan:

- Aktifkan **verifikasi checksum** — integritas data sangat penting untuk pelestarian
- Atur jumlah transfer simultan yang moderat (2–4) agar tidak membebani pipeline ingest Internet Archive
- Aktifkan **Dry Run** terlebih dahulu untuk meninjau dengan tepat apa yang akan diunggah

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to Internet Archive" class="img-large img-center" />

## Menjalankan Sinkronisasi Pelestarian

Setelah meninjau output Dry Run di tab Log, nonaktifkan Dry Run dan jalankan job secara penuh. RcloneView melakukan transfer file dari Google Drive langsung ke Internet Archive. Bergantung pada ukuran file dan antrean ingest Archive, unggahan besar mungkin memerlukan waktu — panel progres real-time akan terus memberi tahu Anda.

Untuk alur kerja pelestarian yang berkelanjutan, buat job berulang (memerlukan lisensi PLUS untuk penjadwalan) sehingga file baru yang ditambahkan ke folder Google Drive akan otomatis diarsipkan sesuai jadwal — misalnya, mingguan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Google Drive to Internet Archive transfers" class="img-large img-center" />

## Kasus Penggunaan

- **Peneliti akademik**: mengarsipkan dataset dan dokumen kerja saat proyek selesai
- **Jurnalis**: menyimpan materi sumber dan rekaman wawancara secara permanen
- **Pendidik**: mengarsipkan konten kursus dan sumber belajar digital
- **Organisasi nirlaba**: menyimpan aplikasi hibah, catatan donor, dan sejarah institusi

Sifat permanen Internet Archive membuatnya berbeda dari layanan cloud komersial mana pun — konten yang disimpan di sana dirancang untuk bertahan lebih lama daripada organisasi individu atau paket langganan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan Google Drive melalui OAuth di **Remote Manager**.
3. Hubungkan Internet Archive menggunakan kredensial API S3 Anda dari pengaturan akun archive.org.
4. Buat job sinkronisasi dari Google Drive ke Internet Archive; jalankan Dry Run terlebih dahulu, lalu pengarsipan penuh.

RcloneView memberikan arsiparis dan peneliti alur kerja yang andal dan dapat diaudit untuk menyimpan konten Google Drive ke dalam catatan permanen.

---

**Panduan Terkait:**

- [Migrasi Cloud-to-Cloud dengan RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Migrasi Cloud Terverifikasi Checksum dengan RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Otomatisasi Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
