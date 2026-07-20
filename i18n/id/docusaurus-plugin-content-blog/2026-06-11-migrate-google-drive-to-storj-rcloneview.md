---
slug: migrate-google-drive-to-storj-rcloneview
title: "Migrasikan Google Drive ke Storj — Transfer File dengan RcloneView"
authors:
  - jay
description: "Pelajari cara memigrasikan file Google Drive ke penyimpanan terdesentralisasi Storj menggunakan RcloneView — panduan langkah demi langkah untuk transfer cloud-ke-cloud."
keywords:
  - migrate Google Drive to Storj
  - Google Drive to Storj migration
  - Storj decentralized cloud storage
  - RcloneView cloud migration
  - move files from Google Drive to Storj
  - cloud-to-cloud transfer RcloneView
  - Storj S3-compatible GUI
  - Google Drive migration tool
  - decentralized cloud backup RcloneView
tags:
  - RcloneView
  - google-drive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasikan Google Drive ke Storj — Transfer File dengan RcloneView

> Pindahkan seluruh Google Drive Anda ke penyimpanan terdesentralisasi dan terenkripsi end-to-end milik Storj tanpa menulis satu perintah pun.

Tim yang menyimpan file proyek sensitif di Google Drive sering kali mencapai titik di mana mereka menginginkan kedaulatan data yang lebih kuat, biaya egress yang lebih rendah, atau akses yang kompatibel dengan S3 untuk rangkaian alat mereka. Storj mendistribusikan potongan file ke berbagai node independen di seluruh dunia, memberikan enkripsi end-to-end dan redundansi geografis secara built-in. RcloneView membuat migrasi ini menjadi mudah: hubungkan kedua remote melalui pengaturan berbasis autentikasi browser, lalu jalankan pekerjaan penyalinan yang mentransfer file dari Google Drive ke Storj melalui komputer lokal Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Google Drive dan Storj sebagai Remote

Sebelum mentransfer apa pun, kedua akun cloud perlu didaftarkan di RcloneView sebagai remote. Google Drive menggunakan autentikasi browser OAuth — buka tab Remote, klik **New Remote**, pilih Google Drive, dan RcloneView akan membuka jendela browser agar Anda dapat mengotorisasi koneksi tersebut. Tidak ada API key atau kredensial yang perlu dikelola secara manual.

Storj menggunakan akses yang kompatibel dengan S3. Di wizard New Remote milik RcloneView, pilih tipe provider **S3** dan pilih Storj sebagai provider S3. Masukkan Storj Access Key ID, Secret Access Key, dan endpoint gateway S3 Storj Anda. Setelah disimpan, remote tersebut akan muncul di panel explorer, memberi Anda tampilan file-browser yang familiar untuk bucket Storj Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Storj as remotes in RcloneView" class="img-large img-center" />

Setelah kedua remote terdaftar, Anda dapat membukanya berdampingan di explorer dua panel milik RcloneView. Seret sebuah folder dari panel kiri (Google Drive) ke panel kanan (Storj) untuk penyalinan cepat sekali jalan, atau siapkan job terkelola untuk migrasi yang lebih besar.

## Konfigurasikan Job Migrasi

Untuk memigrasikan seluruh Google Drive — agensi desain dengan 300 GB aset atau tim riset dengan dokumen bersama selama bertahun-tahun — menggunakan Job adalah pendekatan yang tepat. Klik **Job Manager** di tab Home, lalu **Add Job**. Atur source ke remote dan folder Google Drive Anda, dan destination ke bucket Storj Anda. Pilih **Copy** sebagai tipe job untuk mentransfer semua file source tanpa menghapus file asli dari Google Drive.

Di Step 2 (Advanced Settings), atur jumlah transfer file yang berjalan bersamaan berdasarkan koneksi Anda. Jumlah transfer multi-thread default sebanyak 4 bekerja dengan baik untuk sebagian besar koneksi internet. Aktifkan verifikasi **checksum** untuk memastikan integritas file — RcloneView membandingkan checksum setelah setiap transfer, sehingga dapat mendeteksi kerusakan yang mungkin terjadi selama proses transit.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Google Drive to Storj copy job in RcloneView" class="img-large img-center" />

Step 3 memungkinkan Anda menambahkan aturan filtering jika Anda hanya ingin memigrasikan jenis file tertentu — misalnya, mengecualikan file kerja `.tmp` atau membatasi transfer hanya untuk file yang usianya lebih muda dari batas tertentu. Ini sangat berguna saat memigrasikan ruang kerja aktif di mana beberapa file sementara sebaiknya tidak ikut dipindahkan ke provider penyimpanan baru.

## Pantau dan Verifikasi Transfer

Setelah Anda mengklik **Run**, tab Transferring di bagian bawah RcloneView menampilkan progres secara langsung: kecepatan transfer, jumlah file, dan total ukuran yang telah dipindahkan. Untuk migrasi besar, RcloneView tetap melanjutkan job tersebut di latar belakang meskipun Anda berpindah ke remote lain — dan jika transfer terputus, mengatur jumlah retry di Step 2 memastikan proses akan dilanjutkan dari titik terakhir.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Google Drive to Storj migration job in RcloneView" class="img-large img-center" />

Setelah job selesai, gunakan fitur **Folder Compare** milik RcloneView (tab Home > Compare) untuk memverifikasi bahwa kedua sisi sudah cocok. Arahkan panel kiri ke source Google Drive Anda dan panel kanan ke destination Storj Anda. Folder Compare akan menampilkan file mana saja yang hanya ada di satu sisi atau memiliki ukuran yang berbeda, memberi Anda jejak audit yang jelas sebelum Anda mulai menutup ruang kerja Google Drive.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Drive to Storj migration" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Google Drive Anda melalui **Remote tab > New Remote** dan selesaikan login browser OAuth.
3. Tambahkan remote Storj Anda menggunakan tipe provider S3 dengan Storj Access Key, Secret Key, dan endpoint gateway Anda.
4. Buka **Job Manager**, buat job Copy dari folder Google Drive Anda ke bucket Storj Anda, aktifkan checksum di Step 2, lalu klik Run.

Arsitektur Storj memberikan distribusi geografis dan enkripsi end-to-end pada file Anda secara default — RcloneView membuat pencapaian tujuan tersebut hanya soal beberapa menit, bukan berjam-jam menulis skrip.

---

**Panduan Terkait:**

- [Migrasikan Dropbox ke Storj dengan RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [Migrasikan OneDrive ke Storj dengan RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-storj-rcloneview)
- [Kelola Penyimpanan Cloud Storj — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
