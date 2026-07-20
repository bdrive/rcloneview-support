---
slug: transfer-yandex-and-google-drive-with-rcloneview
title: "Transfer File Antara Yandex Disk dan Google Drive dengan RcloneView"
authors:
  - tayson
description: "Migrasi dan sinkronisasi file antara Yandex Disk dan Google Drive menggunakan GUI RcloneView—login native Yandex, OAuth untuk Google, drag-and-drop, Compare, Sync, dan Job terjadwal."
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud migration
  - cloud sync
  - rclone
  - cloud transfer
  - multi cloud
  - cloud to cloud transfer
tags:
  - RcloneView
  - cloud
  - sync
  - cloud-migration
  - tutorial
  - yandex
  - google-drive
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transfer File Antara Yandex Disk dan Google Drive dengan RcloneView

> Pindahkan atau sinkronkan file antara Yandex Disk ↔ Google Drive tanpa menggunakan command line.  
> RcloneView menyediakan panel Explorer berdampingan, Compare, Sync, dan Job terjadwal—sekaligus menangani login browser Yandex dan OAuth Google untuk Anda.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Mengapa menggunakan RcloneView untuk transfer Yandex ↔ Google Drive?

- **Login Yandex native melalui browser Anda** (tanpa WebDAV, tanpa token manual).
- **Login OAuth yang aman** untuk Google Drive.
- **Panel Explorer berdampingan** untuk drag-and-drop yang intuitif.
- **Mode Compare** untuk melihat pratinjau perbedaan sebelum menyalin atau menghapus.
- **Sync** dengan dry-run, filter, dan dukungan checksum.
- **Job yang dapat digunakan kembali & penjadwalan** untuk pencadangan dan otomatisasi berulang.
- **Visibilitas progres penuh** melalui log, percobaan ulang, dan kontrol bandwidth.

RcloneView membangun alur kerja visual di atas rclone sehingga transfer multi-cloud yang kompleks pun terasa mudah.

---

## Sebelum memulai

- Pastikan Anda dapat masuk ke **akun Yandex** Anda—pengaturan menggunakan login browser, bukan WebDAV.
- Periksa kuota **Google Drive** Anda dan perhatikan batas unggah harian Google sebesar 750 GB.
- Instal build RcloneView terbaru dari:  
  👉 https://rcloneview.com/src/download.html
- Untuk pekerjaan besar, pastikan komputer Anda tetap menyala dan gunakan jaringan yang stabil.

---

## Langkah 1: Tambahkan remote cloud Anda

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  

### Menghubungkan Yandex Disk (login berbasis browser)

1. Buka **Remote → + New Remote**.
2. Pilih **Yandex Disk** sebagai provider.
3. Klik **Connect**, yang akan membuka halaman login Yandex di browser Anda.
4. Masuk dan berikan akses.
5. Simpan remote setelah RcloneView mengonfirmasi bahwa autentikasi selesai.  

### Menghubungkan Google Drive

1. Klik **+ New Remote** lagi.
2. Pilih **Google Drive**.
3. Tekan **Connect**, selesaikan login OAuth di browser, dan izinkan izin yang diminta.
4. Simpan remote.

👉 Panduan: [Menambahkan Remote Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)

---

## Langkah 2: Buka kedua cloud di panel Explorer

1. Buka tab **Browse**.
2. Klik ikon **+** di panel kiri → pilih **Yandex Disk**.
3. Klik ikon **+** di panel kanan → pilih **Google Drive**.
4. Navigasikan ke folder yang ingin Anda pindahkan atau sinkronkan.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />  

---

## Empat cara mentransfer file

### Metode 1: Drag & drop antar panel Explorer

1. Di panel Yandex, pilih file atau folder.
2. Seret ke panel Google Drive (atau sebaliknya).
3. Pantau progres di **Transfer**.  

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />  


👉 Referensi:  
[Menjelajahi & Mengelola Penyimpanan Remote](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
[Drag & Drop file](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)  

---

### Metode 2: Compare, lalu salin atau hapus

1. Buka folder sumber di Yandex Disk (kiri) dan folder tujuan di Google Drive (kanan).
2. Pilih **Compare**.
3. RcloneView akan menyorot:
   - Item yang hanya ada di satu sisi
   - Item yang berbeda ukurannya
   - File yang cocok
4. Klik **Copy →** atau **← Copy** sesuai arah yang diinginkan.
5. Gunakan **Delete** dengan hati-hati saat membersihkan duplikat.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />  


👉 Panduan: [Membandingkan Isi Folder](/howto/rcloneview-basic/compare-folder-contents)  


---

### Metode 3: Sync atau simpan sebagai Job

1. Pilih **folder Yandex** sebagai sumber dan **folder Google Drive** sebagai tujuan.
2. Klik **Sync**.
3. Pilih:
   - Sinkronisasi satu arah (Yandex → Google Drive)
   - Sinkronisasi satu arah (Google Drive → Yandex)
   - Sinkronisasi dua arah
4. Lihat pratinjau operasi yang direncanakan menggunakan dry-run.
5. Jalankan sinkronisasi, atau klik **Save to Jobs** untuk menggunakannya kembali nanti.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  


👉 Pelajari lebih lanjut:

- [Menyinkronkan Penyimpanan Remote](/howto/rcloneview-basic/synchronize-remote-storages)
- [Membuat Job Sync](/howto/rcloneview-basic/create-sync-jobs)
- [Menjalankan & Mengelola Job](/howto/rcloneview-basic/execute-manage-job)

---

### Metode 4: Menjadwalkan job sync berulang

1. Buka **Job Manager → Add Job**.
2. Pilih Yandex sebagai sumber dan Google Drive sebagai tujuan (atau sebaliknya).
3. Tentukan interval (misalnya, harian, per jam, mingguan).
4. Aktifkan job tersebut.
5. Tinjau log dan Job History untuk melihat hasilnya.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />  

👉 Pelajari lebih lanjut: [Penjadwalan dan Eksekusi Job](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## Tips untuk transfer yang lancar

- Gunakan **dry-run** sebelum sinkronisasi satu arah dalam jumlah besar.
- API Google Drive dapat membatasi laju (throttle) pada beban besar secara mendadak; kurangi konkurensi jika diperlukan.
- Biarkan RcloneView tetap berjalan untuk Job terjadwal.

---

## Ringkasan

RcloneView membuat transfer file antara **Yandex Disk** dan **Google Drive** menjadi sederhana dan andal.  
Dengan login native untuk kedua layanan, panel Explorer visual, Compare, Sync, dan Job, Anda dapat melakukan migrasi atau memelihara alur kerja multi-cloud Anda tanpa harus menyentuh command line.

<CloudSupportGrid />
