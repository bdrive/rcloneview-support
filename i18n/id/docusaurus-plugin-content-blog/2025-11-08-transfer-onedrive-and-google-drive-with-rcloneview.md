---
slug: transfer-onedrive-and-google-drive-with-rcloneview
title: "Transfer File Antara OneDrive dan Google Drive dengan RcloneView"
authors:
  - tayson
description: "Pindahkan file antara Microsoft OneDrive dan Google Drive tanpa perlu mengunduh—gunakan drag-and-drop RcloneView, Compare, Sync, dan Jobs terjadwal untuk transfer cloud-to-cloud yang andal."
keywords:
  - onedrive to google drive transfer
  - google drive to onedrive migration
  - rcloneview
  - cloud to cloud sync
  - drag and drop transfer
  - scheduled sync jobs
  - compare folders
  - resumable uploads
  - oauth login
tags:
  - cloud-migration
  - onedrive
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transfer File Antara OneDrive dan Google Drive dengan RcloneView

> Berpindah cloud tanpa perlu mengunduh ulang gigabyte data. RcloneView memberi Anda Explorer dua panel, Compare, Sync, dan Jobs terjadwal sehingga perpindahan OneDrive ↔ Google Drive tetap cepat dan dapat diprediksi—tanpa perlu CLI.


<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## Mengapa menggunakan RcloneView untuk OneDrive ↔ Google Drive?

- Login OAuth yang aman untuk kedua cloud; tidak perlu menempelkan token.
- Transfer yang dapat dilanjutkan (resumable) dengan pencatatan progres, percobaan ulang (retry), dan batas bandwidth.
- Explorer dua panel untuk pemindahan drag-and-drop tanpa skrip.
- Compare untuk menyoroti file baru/berubah sebelum menyalin.
- Sync satu arah atau dua arah, ditambah Jobs yang dapat digunakan ulang dan penjadwalan.
- Dry-run opsional dan filter untuk mengontrol secara tepat apa yang dipindahkan.

RcloneView menambahkan UI terpandu di atas rclone, sehingga bahkan migrasi berskala besar tetap andal, sementara engineer tetap mendapatkan switch tingkat lanjut saat dibutuhkan.

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="transfer files between onedrive and google drive" class="img-large img-center" />


## Sebelum memulai

- Masuk (sign in) ke akun OneDrive dan Google Drive.
- Instal RcloneView dari build terbaru: [Unduh](https://rcloneview.com/src/download.html).
- Periksa kuota cloud dan batas API harian (Google Drive menerapkan batas 750 GB/hari per pengguna untuk unggahan).
- Untuk throughput terbaik, biarkan RcloneView tetap berjalan selama job berlangsung lama dan gunakan jaringan kabel jika memungkinkan.

## Langkah 1: Hubungkan kedua remote cloud

1. Buka **Remote → + New Remote**.
2. Pada **Provider**, pilih **OneDrive**, lalu klik **Connect** untuk menyelesaikan proses sign-in OAuth Microsoft.
3. Ulangi untuk **Google Drive** dan selesaikan alur OAuth-nya.
4. Pastikan kedua remote muncul di Remote Manager.

👉 Pelajari lebih lanjut: [Menambahkan Remote Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Remote Manager showing connected cloud remotes" class="img-large img-center" />

## Langkah 2: Buka kedua remote di panel Explorer

1. Buka tab **Browse**.
2. Di panel kiri, klik **+** dan buka remote **OneDrive** Anda.
3. Di panel kanan, klik **+** dan buka remote **Google Drive** Anda.
4. Jelajahi folder sumber dan tujuan yang ingin Anda sinkronkan.


## Empat cara memindahkan file

### Metode 1: Drag & drop antar panel Explorer

1. Pilih file atau folder di panel OneDrive.
2. Seret (drag) ke panel Google Drive (atau ke arah sebaliknya).
3. Pantau progres di tab **Transfer**; jeda/lanjutkan (pause/resume) jika diperlukan.

👉 Detail lebih lanjut: [Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### Metode 2: Compare, lalu salin atau hapus

1. Buka folder sumber di sebelah kiri dan tujuan di sebelah kanan.
2. Klik **Compare** pada toolbar.
3. RcloneView menyoroti file unik, perbedaan ukuran, dan file yang cocok.
4. Pilih item yang akan dipindahkan, lalu pilih **Copy →** atau **← Copy**.
5. Gunakan **Delete** dengan hati-hati untuk membersihkan data lama.

👉 Pelajari lebih lanjut: [Membandingkan Isi Folder](/howto/rcloneview-basic/compare-folder-contents)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Google Drive folders" class="img-large img-center" />

### Metode 3: Sync atau simpan sebagai Job

1. Pilih sumber OneDrive dan tujuan Google Drive Anda.
2. Klik **Sync** dan pilih satu arah (OneDrive → Google Drive) atau dua arah.
3. Tinjau pratinjau, sesuaikan filter (include/exclude), lalu mulai.
4. Klik **Save to Jobs** untuk menggunakan kembali sinkronisasi yang sama nanti.

👉 Pelajari lebih lanjut:

- [Menyinkronkan Remote Storage](/howto/rcloneview-basic/synchronize-remote-storages)
- [Membuat Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Menjalankan & Mengelola Jobs](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure sync job between OneDrive and Google Drive" class="img-large img-center" />

### Metode 4: Menjadwalkan sync job otomatis

1. Buka **Job Manager → Add Job**.
2. Tetapkan **OneDrive** sebagai sumber dan **Google Drive** sebagai tujuan (atau sebaliknya).
3. Pilih jadwal (per jam, harian, mingguan, atau gaya cron).
4. Simpan dan aktifkan job; RcloneView akan menjalankannya secara otomatis.
5. Tinjau log dan riwayat untuk verifikasi.

👉 Pelajari lebih lanjut: [Penjadwalan dan Eksekusi Job](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to Google Drive sync job" class="img-large img-center" />

## Tips untuk transfer multi-cloud yang lancar

- Gunakan **dry-run** sebelum sinkronisasi besar untuk memastikan apa yang akan berubah.
- Untuk folder OneDrive/Drive yang dibagikan (shared), pastikan Anda memiliki izin edit di kedua sisi.
- Gunakan **batas bandwidth** selama jam kerja untuk menghindari throttling.
- Jika Google Drive mencapai batas 750 GB/hari, bagi job ke beberapa hari atau akun.
- Biarkan tab **Transfer** tetap terbuka untuk memantau percobaan ulang (retry) dan throughput.

## Ringkasan

RcloneView menghilangkan proses mengunduh/mengunggah ulang antara **OneDrive** dan **Google Drive**. Dengan penjelajahan berdampingan, Compare, Sync, Jobs yang dapat digunakan ulang, dan penjadwalan, Anda dapat menjalankan pemindahan sekali saja atau pencadangan rutin dengan percaya diri—tanpa perlu command line.

<CloudSupportGrid />
