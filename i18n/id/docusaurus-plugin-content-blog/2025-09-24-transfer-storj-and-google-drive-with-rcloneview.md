---
slug: transfer-storj-and-google-drive-with-rcloneview
title: "Transfer File Antara Storj dan Google Drive dengan RcloneView"
authors:
  - tayson
description: "Pindahkan data antara Storj dan Google Drive tanpa perlu mengunduh ulang—gunakan drag-and-drop RcloneView, Compare, Sync, dan Jobs terjadwal dengan OAuth serta access grant Storj."
keywords:
  - storj to google drive
  - google drive to storj
  - rcloneview
  - cloud to cloud transfer
  - access grant
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - resumable uploads
  - s3 compatible storage
tags:
  - cloud-migration
  - storj
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transfer File Antara Storj dan Google Drive dengan RcloneView

> Pindahkan folder antara **Storj** dan **Google Drive** tanpa perlu menyentuh command line. RcloneView memberi Anda panel Explorer berdampingan, Compare, Sync, dan Jobs terjadwal sehingga transfer cloud-to-cloud tetap cepat dan mudah diprediksi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa menggunakan RcloneView untuk Storj ↔ Google Drive?

- Login OAuth untuk Google Drive; dukungan access grant untuk Storj (tanpa perlu CLI manual).
- Transfer multi-thread yang dapat dilanjutkan (resumable) dengan log progres dan percobaan ulang.
- Explorer dua panel untuk pemindahan drag-and-drop.
- Compare untuk melihat pratinjau perbedaan sebelum menyalin atau menghapus.
- Sync dengan filter dan dry-run, ditambah Jobs dan penjadwalan yang dapat digunakan kembali.
- Batas bandwidth dan kontrol throttling agar jam kerja tetap lancar.

RcloneView dibangun di atas rclone sehingga Anda mendapatkan keandalan dan opsi lanjutan—tanpa perlu menulis skrip.

## Sebelum memulai

- Siapkan **access grant Storj** Anda (termasuk cakupan enkripsi). Simpan dengan aman.
- Masuk ke Google Drive dan perhatikan batas unggah 750 GB/hari per pengguna.
- Instal versi terbaru RcloneView: [Unduh](https://rcloneview.com/src/download.html).
- Untuk transfer besar, sebaiknya gunakan koneksi kabel dan biarkan RcloneView tetap berjalan.

## Langkah 1: Hubungkan remote cloud Anda

1. Buka **Remote → + New Remote**.
2. Pilih **Storj** dan tempel **access grant** Anda. (Jika menggunakan passphrase enkripsi terpisah, tambahkan di opsi.) Simpan remote.
3. Ulangi untuk **Google Drive**, klik **Connect**, dan selesaikan login OAuth di browser.
4. Pastikan kedua remote muncul di Remote Manager.

👉 Pelajari lebih lanjut: [Tambah Remote Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)  
👉 Kelola remote: [Remote Manager](/howto/rcloneview-basic/remote-manager/)

## Langkah 2: Buka kedua remote di panel Explorer

1. Buka **Browse**.
2. Di panel kiri, klik **+** dan buka remote **Storj** Anda.
3. Di panel kanan, klik **+** dan buka remote **Google Drive** Anda.
4. Arahkan ke bucket/folder sumber dan tujuan yang ingin Anda pindahkan.

<!-- Image placeholder: add `/support/images/en/tutorials/open-storj-and-google-drive-remotes.png` if available -->
<img src="/support/images/en/tutorials/open-storj-and-google-drive-remotes.png" alt="open storj and google drive remotes" class="img-medium img-center" />

## Empat metode untuk transfer Storj ↔ Google Drive

### Metode 1: Drag & drop antar panel

1. Pilih file atau folder di panel Storj.
2. Seret ke panel Google Drive (atau sebaliknya).
3. Pantau progres di tab **Transfer**; jeda/lanjutkan sesuai kebutuhan.

👉 Detail selengkapnya: [Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### Metode 2: Compare, lalu salin atau hapus

1. Buka sumber di kiri dan tujuan di kanan.
2. Klik **Compare**.
3. RcloneView menyoroti item unik, perbedaan ukuran, dan item yang cocok.
4. Pilih item yang ingin dipindahkan, lalu pilih **Copy →** atau **← Copy**.
5. Gunakan **Delete** dengan hati-hati untuk membersihkan duplikat atau data lama.

👉 Pelajari lebih lanjut: [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

### Metode 3: Sync atau simpan sebagai Job

1. Pilih sumber Storj dan tujuan Google Drive Anda.
2. Klik **Sync** dan pilih sinkronisasi satu arah atau dua arah.
3. Tinjau perubahan, sesuaikan filter (include/exclude), lalu mulai.
4. Klik **Save to Jobs** untuk menggunakan kembali konfigurasi ini nanti.

👉 Pelajari lebih lanjut:

- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

### Metode 4: Jadwalkan job sinkronisasi berulang

1. Buka **Job Manager → Add Job**.
2. Atur **Storj** sebagai sumber dan **Google Drive** sebagai tujuan (atau sebaliknya).
3. Pilih jadwal (per jam, harian, mingguan, atau gaya cron).
4. Aktifkan job dan biarkan RcloneView menjalankannya secara otomatis.
5. Periksa log dan riwayat untuk memverifikasi keberhasilan.

👉 Pelajari lebih lanjut: [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Tips untuk transfer yang lancar

- Gunakan **dry-run** sebelum sinkronisasi besar untuk memastikan apa yang akan berubah.
- Untuk Storj, batasi cakupan access grant Anda secara spesifik (per bucket) demi keamanan yang lebih baik.
- Jika unggahan macet, turunkan concurrency atau atur batas bandwidth untuk mengurangi throttling.
- Saat Google Drive mendekati batas harian, bagi job ke beberapa hari atau akun.
- Perhatikan tab **Transfer** untuk percobaan ulang, kecepatan, dan pesan API apa pun.

## Ringkasan

RcloneView membuat migrasi Storj ↔ Google Drive menjadi mudah: hubungkan remote, jelajahi berdampingan, bandingkan, sinkronkan, atau jadwalkan job berulang—semua tanpa command line.

<CloudSupportGrid />
