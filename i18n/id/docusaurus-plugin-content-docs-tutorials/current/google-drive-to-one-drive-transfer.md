---
sidebar_position: 2
description: "Pelajari cara menyalin, sinkronisasi, dan menjadwalkan transfer file antara Google Drive dan OneDrive menggunakan GUI drag-and-drop RcloneView yang intuitif serta penjadwal tugas."
keywords:
  - rcloneview
  - Google Drive to OneDrive
  - cloud to cloud transfer
  - file synchronization
  - Cloud Migration
  - cloud storage
  - cloud sync
  - Onedrive
  - google drive
  - job scheduling
  - rclone
  - sync
  - scheduled jobs
  - drag and drop
tags:
  - RcloneView
  - Tutorial
  - cloud-storage
  - cloud-file-transfer
  - cloud-migration
  - google-drive
  - onedrive
  - Sync
  - job
  - cloud-to-cloud
date: 2025-05-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Panduan Transfer File dari Google Drive ke OneDrive
  

Layanan penyimpanan cloud telah menjadi sarana penting untuk mengelola dokumen, media, dan pencadangan. Dua layanan yang paling banyak digunakan adalah **Google Drive** dan **Microsoft OneDrive**. Keduanya menawarkan kapasitas penyimpanan yang besar, integrasi dengan alat produktivitas (Google Workspace dan Microsoft 365), serta dukungan platform yang luas.

Meskipun kedua platform memiliki ekosistem cloud masing-masing, **RcloneView** menyediakan antarmuka terpusat untuk mengelola, mentransfer, dan menyinkronkan file di antara keduanya—**tanpa skrip rumit atau operasi command-line**.

Dalam panduan ini, kami akan menunjukkan cara **mentransfer file dari Google Drive ke OneDrive** menggunakan **RcloneView**, alat berbasis GUI yang dibangun di atas Rclone yang membuat pengelolaan file multi-cloud menjadi sederhana dan andal.

<img src="/support/images/en/tutorials/google-drive-to-ondrive-transfer.png" alt="google drive to ondrive transfer" class="img-medium img-center" />

## **Mengapa Menggunakan RcloneView untuk Transfer Cloud-to-Cloud?**

RcloneView adalah GUI canggih yang dibangun di atas mesin Rclone, dirancang untuk menyederhanakan pengelolaan penyimpanan cloud.

- Mudah menghubungkan beberapa penyedia cloud
- Antarmuka intuitif untuk mentransfer file dengan drag-and-drop
- Membandingkan isi folder sebelum melakukan transfer
- GUI sederhana dengan fitur lanjutan seperti dry-run, filter, dan penjadwalan tugas
- Menjadwalkan transfer dan pencadangan berulang
- Login OAuth yang aman untuk Google Drive dan OneDrive

Berbeda dengan metode unduh/unggah manual tradisional, RcloneView mengotomatiskan proses melalui operasi berbasis API langsung—memungkinkan transfer yang lancar dan tanpa pengawasan antar penyimpanan cloud.

## 📙 Mentransfer File dari Google Drive ke OneDrive


### Menambahkan Remote Google Drive dan OneDrive di RcloneView

1. Buka **RcloneView** dan klik **`+ New Remote`** dari menu **`Remote`**.  
2. Di tab **`Provider`**, cari dan pilih **Google Drive**.  
3. Lanjutkan melalui wizard dan selesaikan login OAuth.  
4. Ulangi proses yang sama untuk **OneDrive**.  

 🔍 Untuk pengaturan lebih rinci, lihat:
 - [Cara Menambahkan Remote Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)
 - [Cara Menambahkan Remote OneDrive](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)

### Membuka Kedua Remote di Panel Explorer

1. Buka **RcloneView** dan buka **tab Browse** di panel Explorer.  
2. Di salah satu panel, klik ikon plus `+` di headernya dan pilih remote **Google Drive** Anda dari daftar.  
3. Di panel lainnya, klik ikon `+` dan pilih remote **OneDrive** Anda dari daftar.  
4. Kedua remote akan tampil berdampingan, memungkinkan Anda dengan mudah menyalin, membandingkan, menyeret, atau menyinkronkan file dan folder di antara keduanya.  

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="open google drive and onedrive" class="img-medium img-center" />

### 📌 4 Metode untuk Mentransfer File

RcloneView menyediakan beberapa metode andal untuk memindahkan atau menyinkronkan data antara Google Drive dan OneDrive. Pilih yang sesuai dengan alur kerja Anda:

#### 🖱️ **Metode 1: Drag & Drop Antar Panel Explorer**

  
	1. Buka **RcloneView** dan navigasikan ke tab **Browse** (ditampilkan secara default saat startup).  
	2. Pastikan kedua remote cloud (Google Drive dan OneDrive) terlihat berdampingan di Explorer dual-panel.  
	3. Cukup **seret file atau folder** dari panel Google Drive dan **lepaskan** ke panel OneDrive.  
	4. Transfer akan dimulai secara otomatis melalui mesin latar belakang Rclone. Anda dapat memantau progres secara real time di tab Log **`Transfer`**.  

  
Antarmuka drag-and-drop yang intuitif ini menyederhanakan pemindahan atau penyalinan file—tanpa perlu perintah.

👉 Pelajari lebih lanjut: [Menjelajah & Mengelola Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 **Metode 2: Membandingkan Isi Folder, Menyalin, atau Menghapus**

  
	1. Di kedua panel Explorer, navigasikan dan pilih folder yang ingin Anda bandingkan (kiri: Google Drive, kanan: OneDrive).  
	2. Klik tombol **`Compare`** di tab menu utama untuk memulai perbandingan folder.  
	3. RcloneView akan memindai dan menyoroti:  
		- File yang hanya ada di salah satu sisi  
		- File dengan nama sama tetapi ukuran berbeda  
		- File yang identik
	4. Pilih file untuk menentukan file mana yang ingin Anda proses.  
	5. Untuk mentransfer file kiri→kanan, klik tombol **`Copy →`**.  
		   Untuk mentransfer kanan→kiri, gunakan tombol **`← Copy`**.  
		   Untuk menghapus file dari remote, klik tombol **`Delete`** di panelnya.  
	6. Progres dan ringkasan pembaruan akan muncul di status bar.  


Perbandingan visual ini meminimalkan kesalahan dengan memungkinkan Anda meninjau file **sebelum** memindahkan atau menghapusnya.

👉 Pelajari lebih lanjut di [panduan Membandingkan Isi Folder](/howto/rcloneview-basic/compare-folder-contents)


#### 🔁 **Metode 3: Menggunakan Sync atau Job**

1. Di panel Explorer, navigasikan dan pilih folder **Google Drive** dan folder **OneDrive** yang ingin Anda jaga tetap sinkron.  
2. Klik tombol **`Sync`** di menu `home`.  
3. Pilih opsi sinkronisasi (satu arah atau sebaliknya), pratinjau tindakan, lalu konfirmasi.   
4. RcloneView akan menjalankan sinkronisasi dan menampilkan indikator progres di tab log **`transfer`**.   

- Alternatifnya, untuk transfer berulang atau terjadwal:  

  1. Klik **`Save to Jobs`** di jendela modal Sync, atau buka **`Job Manager`** → klik **`Add Job`**.   
  2. Konfigurasikan sumber dan tujuan, lalu atur opsinya.   
  3. Simpan tugas dan jalankan secara manual atau jadwalkan.  

 👉 Pelajari lebih lanjut:  

- [Menyinkronkan Remote Storage](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Membuat Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Menjalankan & Mengelola Jobs](/howto/rcloneview-basic/execute-manage-job)

#### ⏰ Metode 4: Menjadwalkan Sync Job Otomatis 

1. Di panel Explorer, navigasikan dan pilih folder **Google Drive** dan folder **OneDrive** yang ingin Anda jaga tetap sinkron.  
2. Buka **`Job Manager`** dari menu **`Home`** atau **`Remote`**, lalu klik **`Add Job`**.  
3. Verifikasi sumber dan tujuan yang dipilih; sesuaikan jika perlu.  
4. Gunakan editor jadwal untuk menentukan kapan tugas harus dijalankan. RcloneView menyediakan alat simulasi bawaan untuk mempratinjau pola jadwal Anda sebelum menyimpannya.  
5. Simpan dan aktifkan tugas terjadwal.   

Setelah disimpan, RcloneView akan secara otomatis menjalankan sinkronisasi pada waktu yang telah Anda tentukan.  

Detail eksekusi dan log tersedia di **`Job History`**, dan Anda akan menerima notifikasi saat tugas selesai dijalankan dengan sukses.

👉 Pelajari lebih lanjut: [Penjadwalan dan Eksekusi Job](/howto/rcloneview-advanced/job-scheduling-and-execution)


## **Kesimpulan**

Mentransfer file antar layanan cloud seperti Google Drive dan OneDrive tidak perlu rumit. Dengan **RcloneView**, semuanya hanya perlu beberapa klik — tanpa memerlukan penggunaan command-line.

Metode ini cepat, aman, dan andal, baik saat Anda memindahkan file pribadi berukuran gigabyte maupun menyinkronkan dokumen perusahaan lintas akun.

 🎯 Coba gunakan RcloneView sekarang dan permudah pengelolaan multi-cloud Anda.

---

## 🔗 Panduan Terkait

- [Cara Menambahkan Remote Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)
- [Cara Menambahkan Remote OneDrive](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Menjelajah & Mengelola Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Panduan Membandingkan Isi Folder](/howto/rcloneview-basic/compare-folder-contents)
- [Menyinkronkan Remote Storage](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Membuat Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Menjalankan & Mengelola Jobs](/howto/rcloneview-basic/execute-manage-job)
- [Penjadwalan dan Eksekusi Job](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />
